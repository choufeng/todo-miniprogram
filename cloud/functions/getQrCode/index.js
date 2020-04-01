const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

exports.main = async event => {
  try {
    const result = cloud.openapi.wxacode.getUnlimited({
      scene: "id=abc",
      page: "page/index/index?id=abc",
      width: 430,
      autoColor: true
    });
    return result;
  } catch (err) {
    console.log("show err", err);
    return err;
  }
};
