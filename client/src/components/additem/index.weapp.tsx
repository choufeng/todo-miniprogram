import Taro, { FC } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtCard } from "taro-ui";
import "./additem.css";

export const AddItem: FC = (props: any) => {
  const [title, setTitle] = Taro.useState<string>("");
  const doSave = () => {
    console.log("do save", title);
    props.onSave(title);
  };
  return (
    <div className="add-item">
      <AtCard title="添加任务">
        <AtForm onSubmit={doSave}>
          <AtInput
            name="input"
            type="text"
            placeholder="输入Todo"
            onChange={e => setTitle(e)}
            value={title}
          ></AtInput>
          <AtButton type="primary" formType="submit">
            添加
          </AtButton>
        </AtForm>
      </AtCard>
    </div>
  );
};
