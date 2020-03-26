import Taro, { FC, onNetworkStatusChange } from "@tarojs/taro";
import { AtButton, AtCard } from "taro-ui";
import { View } from "@tarojs/components";

export const App: FC = () => {
  interface Result {
    _id: string;
    content: string;
  }
  const [result, setResult] = Taro.useState<Result>();
  const getSoup = () => {
    Taro.request({
      url:
        "https://service-bz3t5wlm-1256669708.gz.apigw.tencentcs.com/test/soups",
      header: {
        appid: "xxx"
      },
      success: res => {
        console.log("show request result", res);
        const rows = res.data.list;
        const num = Math.floor(Math.random() * (res.data.count - 0)) + 0;
        setResult(rows[num]);
      }
    });
  };

  return (
    <View>
      <AtCard title="Request">
        <AtButton onClick={getSoup}>Request API</AtButton>
      </AtCard>
      <AtCard title="Request Result">{result.content}</AtCard>
    </View>
  );
};
