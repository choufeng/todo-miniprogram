const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: cloud.getWXContext().OPENID,
      page: "pages/index/index",
      data: {
        name1: {
          value: event.name
        },
        date2: {
          value: "2020.03.26"
        },
        time3: {
          value: "18:18:18"
        }
      },
      templateId: "dPWwQIIIVALxp2Ba2uSJipqL_bgysQ8zBv1wgELd2EU",
      miniprogramState: "trial"
    });
    console.log("show send result", result);
  } catch (err) {
    console.log("show send fail err", err);
    return err;
  }
};
