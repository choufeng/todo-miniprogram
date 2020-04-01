import Taro, { Component, Config } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/index/index", "pages/menus/menus"],
    // 因为没有直播权限，无法启动
    // plugins: {
    //   "live-player-plugin": {
    //     version: "1.0.3", // 注意填写该直播组件最新版本号，微信开发者工具调试时可获取最新版本号
    //     provider: "wx2b03c6e691cd7370" // 必须填该直播组件appid，该示例值即为直播组件appid
    //   }
    // },
    subPackages: [
      {
        root: "moduleA",
        pages: [
          "pages/login/login",
          "pages/message/message",
          "pages/qrcode/qrcode"
        ]
      },
      {
        root: "moduleB",
        pages: ["pages/request/request", "pages/device/device"]
      }
    ],
    preloadRule: {
      "pages/index/index": {
        network: "all",
        packages: ["moduleA"]
      }
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "Tenfold",
      navigationBarTextStyle: "black"
    },
    cloud: true,
    tabBar: {
      borderStyle: "black",
      backgroundColor: "#DCDCDC",
      selectedColor: "#1afa29",
      color: "#333333",
      list: [
        {
          pagePath: "pages/index/index",
          text: "Todo",
          iconPath: "assets/c.png",
          selectedIconPath: "assets/c_c.png"
        },
        {
          pagePath: "pages/menus/menus",
          text: "Menus",
          iconPath: "assets/p.png",
          selectedIconPath: "assets/p_c.png"
        }
      ]
    }
  };

  componentDidMount() {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init("");
    }
  }

  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
