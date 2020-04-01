import Taro, { FC } from "@tarojs/taro";
import { AtCard, AtButton } from "taro-ui";
import { Navigator } from "@tarojs/components";

export const App: FC = () => {
  const duang = () => {
    console.log("test");
    Taro.vibrateShort({
      success: () => console.log("show success"),
      fail: () => console.log("show fail")
    });
  };
  const duanggggg = () => {
    console.log("test");
    Taro.vibrateLong({
      success: () => console.log("show success"),
      fail: () => console.log("show fail")
    });
  };
  const hello = e => {
    console.log("show hello", e.detail);
  };
  return (
    <AtCard>
      <AtButton onClick={duang}>震动</AtButton>
      <AtButton onClick={duanggggg}>长震动</AtButton>
      <AtButton openType="contact" onContact={hello}>
        联系客服
      </AtButton>
    </AtCard>
  );
};
