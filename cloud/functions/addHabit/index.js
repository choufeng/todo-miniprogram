const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();
const DB_HABITS = "habits";

exports.main = async event => {
  try {
    const { name, description = "" } = event;
    if (!name) {
      return {
        error: true,
        errorcode: 1,
        message: "缺少必要参数: name"
      };
    }

    // 2. 检查重复问题
    const checkRepetResult = await checkRepet(name);
    if (checkRepetResult) {
      return {
        error: false,
        message: "已经存在相同的数据",
        data: checkRepetResult
      };
    }

    const res = await saveToDB(
      getData({
        name,
        description
      })
    );
    return res;
  } catch (e) {
    return {
      error: true,
      errorcode: 1,
      message: "出现系统错误!",
      data: { e }
    };
  }
};

const getData = ({ name, description }) => {
  return {
    name,
    description,
    count: 0,
    lastCountTime: ""
  };
};

const saveToDB = data => {
  return new Promise((resolve, reject) => {
    db.collection(DB_HABITS)
      .add({
        data: data
      })
      .then(res => {
        resolve({
          error: false,
          message: res.errMsg,
          data: {
            ...data,
            _id: res._id
          }
        });
      })
      .catch(e => {
        reject({
          error: true,
          errorcode: 2,
          message: e.errMsg,
          data: e
        });
      });
  });
};

const checkRepet = name => {
  return new Promise((resolve, reject) => {
    db.collection(DB_HABITS)
      .where({
        name: name
      })
      .get()
      .then(res => {
        if (res.errMsg === "collection.get:ok" && res.data.length > 0) {
          resolve(res.data[0]);
        } else {
          resolve(false);
        }
      })
      .catch(e => {
        console.log("show check repet err", e);
        reject(e);
      });
  });
};
