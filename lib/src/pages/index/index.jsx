"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./index.less");
class Index extends taro_1.Component {
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
            navigationBarTitleText: "首页"
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    render() {
        return (<components_1.View className="index">
        <components_1.Button className="add_btn" onClick={this.props.add}>
          +
        </components_1.Button>
        <components_1.Button className="dec_btn" onClick={this.props.dec}>
          -
        </components_1.Button>
        <components_1.Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </components_1.Button>
        <components_1.View>
          <components_1.Text>{this.props.counter.num}</components_1.Text>
        </components_1.View>
        <components_1.View>
          <components_1.Text>Hello, World</components_1.Text>
        </components_1.View>
      </components_1.View>);
    }
}
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
exports.default = Index;
//# sourceMappingURL=index.jsx.map