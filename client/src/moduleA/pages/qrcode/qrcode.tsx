import Taro, { FC } from "@tarojs/taro";
import { AtCard, AtButton } from "taro-ui";

export const App: FC = () => {
  const buildCode = () => {
    Taro.cloud.callFunction({
      name: "getQrCode",
      success: res => console.log("show success", res),
      fail: e => console.log("show err", e)
    });
  };
  return (
    <AtCard title="生成小程序码">
      <AtButton onClick={buildCode}>生成</AtButton>
    </AtCard>
  );
};
