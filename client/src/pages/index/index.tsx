import Taro, { FC, Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import List from "../../components/list/index";
import AddItem from "../../components/additem/index";
import IList from "../../interfaces/ilist";

export const App: FC = () => {
  const [list, setList] = Taro.useState<IList[]>([]);
  const doSave = (t: string) => {
    console.log("show do save in index", t, list);
    setList([...list, { _id: new Date().getTime(), title: t, done: true }]);
  };
  return (
    <View>
      <Text>Todo List</Text>
      <List list={list} />
      <AddItem onSave={doSave}></AddItem>
    </View>
  );
};

// export default class Index extends Component {

//   /**
//    * 指定config的类型声明为: Taro.Config
//    *
//    * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
//    * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
//    * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
//    */
//   config: Config = {
//     navigationBarTitleText: '首页'
//   }

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Login/>
//       </View>
//     )
//   }
// }
