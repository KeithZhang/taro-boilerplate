"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@tarojs/async-await");
const taro_1 = require("@tarojs/taro");
const redux_1 = require("@tarojs/redux");
const index_1 = require("./pages/index");
const store_1 = require("./store");
require("./app.less");
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = store_1.default();
class App extends taro_1.Component {
    constructor() {
        super(...arguments);
        /**
         * 指定config的类型声明为: Taro.Config
         *
         * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
         * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
         * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
         */
        this.config = {
            pages: [
                "pages/demo/index",
                "pages/home/index",
                "pages/demo/button/index",
                "pages/demo/loading/index",
                "pages/demo/tabbar/index",
                "pages/demo/icon/index",
                "pages/demo/popup/index",
                "pages/demo/overlay/index",
                "pages/demo/transition/index",
                "pages/order/index",
                "pages/home/edit",
                "pages/goods/index"
            ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "black"
            },
            requiredBackgroundModes: ["audio"]
        };
    }
    componentDidMount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (<redux_1.Provider store={store}>
        <index_1.default />
      </redux_1.Provider>);
    }
}
taro_1.default.render(<App />, document.getElementById("app"));
//# sourceMappingURL=app.jsx.map