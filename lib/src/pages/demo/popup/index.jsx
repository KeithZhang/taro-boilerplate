"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const popup_1 = require("ui-base/popup");
const taro_1 = require("@tarojs/taro");
function PopupPage() {
    const [state, setState] = taro_1.useState({
        basic: false,
        top: false,
        bottom: false,
        right: false,
        left: false
    });
    return (<components_1.View>
      <components_1.Button onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { basic: !state.basic })));
    }}>
        展示弹出层
      </components_1.Button>
      <components_1.Button onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { top: !state.top })));
    }}>
        顶部弹出
      </components_1.Button>

      <components_1.Button onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { bottom: !state.bottom })));
    }}>
        底部弹出
      </components_1.Button>
      <components_1.Button onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { right: !state.right })));
    }}>
        右侧弹出
      </components_1.Button>
      <components_1.Button onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { left: !state.left })));
    }}>
        左侧弹出
      </components_1.Button>
      <popup_1.default show={state.basic} customStyle={"padding: 30px 50px"} onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { basic: !state.basic })));
    }}>
        <components_1.View style={"background-color: red; display: flex; flex: 1"}>
          内容
        </components_1.View>
      </popup_1.default>

      <popup_1.default show={state.top} customStyle={"height: 20%"} position="top" onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { top: !state.top })));
    }}/>

      <popup_1.default show={state.bottom} customStyle={"height: 20%"} position="bottom" onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { bottom: !state.bottom })));
    }}/>

      <popup_1.default show={state.right} customStyle={"width: 30%; height: 100%"} position="right" onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { right: !state.right })));
    }}/>

      <popup_1.default show={state.left} customStyle={"width: 30%; height: 100%"} position="left" onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { left: !state.left })));
    }}/>
    </components_1.View>);
}
exports.default = PopupPage;
//# sourceMappingURL=index.jsx.map