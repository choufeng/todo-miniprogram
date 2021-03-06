import Taro, { FC } from "@tarojs/taro";
import { AtList, AtListItem, AtCard, AtSwipeAction } from "taro-ui";
import IList from "../../interfaces/ilist";

export const List: FC = (props: any) => {
  const { list, onDone, onDelete } = props;
  const opt = [
    {
      text: "删除",
      style: {
        background: "#FF4949"
      }
    }
  ];
  const doClick = (id: any) => {
    console.log("do click delete", id);
    onDelete(id);
  };
  return (
    <AtCard title="任务列表">
      <AtList>
        {list.map((item: IList) => {
          return (
            <AtSwipeAction
              autoClose
              options={opt}
              onClick={() => doClick(item._id)}
            >
              <AtListItem
                title={item.title}
                thumb={`https://yccim-1256669708.cos.ap-guangzhou.myqcloud.com/kol/done-${
                  item.done ? "y" : "n"
                }.png`}
                onClick={() => onDone(item._id)}
              ></AtListItem>
            </AtSwipeAction>
          );
        })}
      </AtList>
    </AtCard>
  );
};
