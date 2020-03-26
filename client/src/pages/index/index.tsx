import Taro, { FC, Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import List from "../../components/list/index.weapp";
import AddItem from "../../components/additem/index.weapp";
import IList from "../../interfaces/ilist";
import cloneDeep from "lodash/cloneDeep";
import reduce from "lodash/reduce";

export const App: FC = () => {
  const [list, setList] = Taro.useState<IList[]>([]);
  const doSave = (t: string) => {
    console.log("show do save in index", t, list);
    setList([...list, { _id: new Date().getTime(), title: t, done: false }]);
  };
  Taro.useEffect(() => {
    setList([{ _id: new Date().getTime(), title: "第一个任务", done: false }]);
  }, []);
  const doDone = (id: string) => {
    console.log("show done id", id);
    const li = cloneDeep(list);
    li.map((item: IList) => {
      if (item._id === id) {
        console.log("find it");
        item.done = !item.done;
        return item;
      }
    });
    setList(li);
  };
  const doDelete = (id: string) => {
    console.log("show list", list);
    const li = reduce(
      list,
      (a, v) => {
        if (v._id !== id) {
          return [...a, v];
        } else {
          return a;
        }
      },
      []
    );
    console.log("show delete list", li);
    setList(li);
  };
  return (
    <View>
      <List list={list} onDone={doDone} onDelete={doDelete} />
      <View>* 点击勾选， 左滑删除</View>
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
