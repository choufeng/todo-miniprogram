import Taro, { FC } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtCard } from "taro-ui";

export const App: FC = () => {
  const goTo = (uri: string) => {
    Taro.navigateTo({
      url: uri
    });
  };
  return (
    <AtCard>
      <AtButton onClick={() => goTo("/moduleA/pages/login/login")}>
        Info
      </AtButton>
      <AtButton onClick={() => goTo("/moduleA/pages/message/message")}>
        Message
      </AtButton>
      <AtButton onClick={() => goTo("/moduleA/pages/qrcode/qrcode")}>
        Qrcode
      </AtButton>
      <AtButton onClick={() => goTo("/moduleB/pages/request/request")}>
        Request
      </AtButton>
      <AtButton onClick={() => goTo("/moduleB/pages/device/device")}>
        Driver
      </AtButton>
      <navigator url="plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=123456789&custom_params=123"></navigator>
    </AtCard>
  );
};
