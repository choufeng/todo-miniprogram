import Taro, { FC } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IList from "../../interfaces/ilist";

export const List: FC = (props: any) => {
  const { list } = props;
  return (
    <View>
      {list.map((item: IList) => {
        return <View>{item.title}</View>;
      })}
    </View>
  );
};
