import Taro, { FC } from "@tarojs/taro";
import { AtButton, AtCard } from "taro-ui";
import { View } from "@tarojs/components";

export const App: FC = () => {
  interface Result {
    _id: string;
    content: string;
  }
  const [result, setResult] = Taro.useState<Result>();
  const getSoup = () => {
    Taro.showLoading({
      title: "Loading"
    });
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
        Taro.hideLoading();
      }
    });
  };

  return (
    <View>
      <AtCard title="Request">
        <AtButton type="primary" onClick={getSoup}>
          Request API
        </AtButton>
      </AtCard>
      <AtCard title="Request Result">{result.content}</AtCard>
    </View>
  );
};
