import Taro, { FC } from "@tarojs/taro";
import { AtList, AtListItem, AtCard } from "taro-ui";
import IList from "../../interfaces/ilist";

export const List: FC = (props: any) => {
  const { list, onDone } = props;
  return (
    <AtCard title="任务列表">
      <AtList>
        {list.map((item: IList) => {
          return (
            <AtListItem
              title={item.title}
              thumb={`https://yccim-1256669708.cos.ap-guangzhou.myqcloud.com/kol/done-${
                item.done ? "y" : "n"
              }.png`}
              onClick={onDone(item._id)}
            ></AtListItem>
          );
        })}
      </AtList>
    </AtCard>
  );
};
