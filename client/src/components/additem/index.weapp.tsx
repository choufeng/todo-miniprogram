import Taro, { FC } from "@tarojs/taro";
import { View, Input, Button, Form } from "@tarojs/components";
import IList from "../../interfaces/ilist";
import "./additem.css";

export const AddItem: FC = (props: any) => {
  const [title, setTitle] = Taro.useState<string>("");
  return (
    <View className="add-item">
      <Form>
        <Input
          type="text"
          placeholder="输入Todo"
          onInput={e => setTitle(e.target.value)}
          value={title}
        ></Input>
        <Button onClick={props.onSave(title)}>Add</Button>
      </Form>
    </View>
  );
};
