import Taro, { FC } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtCard, AtButton } from "taro-ui";

export const App: FC = () => {
  const sendMessage = () => {
    Taro.requestSubscribeMessage({
      tmplIds: ["dPWwQIIIVALxp2Ba2uSJipqL_bgysQ8zBv1wgELd2EU"],
      success: res => {
        console.log("show message send success", res);
        getSetting();
      },
      fail: e => {
        console.log("show message send fail", e);
      }
    });
  };
  const [requestResult, setRequestResult] = Taro.useState<any>();
  const getSetting = () => {
    Taro.getSetting({
      withSubscriptions: true,
      success: res => {
        console.log("show setting", res);
        setRequestResult(res.subscriptionsSetting.mainSwitch);
      },
      fail: e => {
        console.log("show get setting err", e);
      }
    });
  };
  const sign = () => {
    Taro.showLoading({
      title: "签到中"
    });
    Taro.cloud.callFunction({
      name: "sendMessage",
      data: {
        name: "测试人"
      },
      success: res => {
        console.log("show call send message fun result", res);
        Taro.showToast({
          title: "签到消息已发出",
          icon: "success"
        });
      },
      fail: e => {
        console.log("show call send message fun err", e);
        Taro.showToast({
          title: "签到失败了"
        });
      }
    });
  };
  return (
    <View>
      <AtCard title="请求授权">
        <AtButton onClick={sendMessage}>请求授权</AtButton>
        <View>结果: {requestResult}</View>
      </AtCard>
      <AtCard title="签到">
        <AtButton onClick={sign}>签到</AtButton>
      </AtCard>
    </View>
  );
};
