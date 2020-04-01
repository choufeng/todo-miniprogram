import Taro, { FC } from "@tarojs/taro";
import { AtButton, AtCard, AtAvatar } from "taro-ui";
import { View } from "@tarojs/components";

export const App: FC = () => {
  interface Info {
    avatarUrl: string;
    city: string;
    country: string;
    gender: number;
    language: string;
    nickName: string;
    province: string;
  }
  const [info, setInfo] = Taro.useState<Info>();
  const getUserInfo = (e: any) => {
    console.log("show info", e);
    setInfo(e.detail.userInfo);
  };
  return (
    <View>
      <AtCard title="Login">
        <AtButton
          lang="zh_CN"
          openType="getUserInfo"
          type="primary"
          onGetUserInfo={getUserInfo}
        >
          Get Info in A
        </AtButton>
      </AtCard>
      <AtCard title="通过getUserInfo获取">
        <AtAvatar
          openData={{ type: "userAvatarUrl" }}
          size="large"
          circle={true}
        ></AtAvatar>
        <View>NickName: {info.nickName}</View>
        <View>
          Location: {info.province} {info.city}
        </View>
      </AtCard>
      <AtCard title="通过open-data获取">
        <View>
          NickName:<open-data type="userNickName"></open-data>
        </View>
        <View>
          Gender:<open-data type="userGender"></open-data>
        </View>
        <View>
          Location:
          <open-data type="userCountry" /> <open-data type="userProvince" />{" "}
          <open-data type="userCity" />
        </View>
      </AtCard>
    </View>
  );
};
