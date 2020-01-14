"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
const tabbar_only_1 = require("ui-base/tabbar-only");
const tabbar_item_only_1 = require("ui-base/tabbar-item-only");
const index_module_less_1 = require("./index.module.less");
const demo_block_1 = require("../components/demo-block");
const tabbar_1 = require("ui-base/tabbar");
function TabbarPage() {
    const [state, setState] = taro_1.useState({
        active1: "home",
        active2: "home",
        active3: "home",
        active4: "home"
    });
    console.log("state...", state);
    return (<components_1.View>
      <demo_block_1.default title="TabbarOnly基本用法">
        <tabbar_only_1.default active={state.active1} custom-class={index_module_less_1.default.tabbar} onChange={(active) => {
        setState(preState => (Object.assign(Object.assign({}, preState), { active1: active })));
    }} safeAreaInsetBottom={false}>
          <tabbar_item_only_1.default icon="like_o" name={"home"}>
            首页
          </tabbar_item_only_1.default>
          <tabbar_item_only_1.default icon="star_o" name={"mine"}>
            我的
          </tabbar_item_only_1.default>
        </tabbar_only_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="TabbarOnly显示徽标、定制颜色">
        <tabbar_only_1.default active={state.active2} custom-class={index_module_less_1.default.tabbar} activeColor="#07c160" inactiveColor="#000" onChange={(active) => {
        setState(preState => (Object.assign(Object.assign({}, preState), { active2: active })));
    }} safeAreaInsetBottom={false}>
          <tabbar_item_only_1.default icon="like_o" name={"home"} dot>
            首页
          </tabbar_item_only_1.default>
          <tabbar_item_only_1.default icon="star_o" name={"mine"} info="20">
            我的
          </tabbar_item_only_1.default>
        </tabbar_only_1.default>
      </demo_block_1.default>

      <demo_block_1.default title="Tabbar基本用法">
        <tabbar_1.default items={[
        {
            name: "home",
            icon: "like_o",
            text: "首页"
        },
        {
            name: "mine",
            icon: "like_o",
            text: "我的"
        }
    ]} active={state.active3} custom-class={index_module_less_1.default.tabbar} onChange={(active) => {
        setState(preState => (Object.assign(Object.assign({}, preState), { active3: active })));
    }} safeAreaInsetBottom={false}/>
      </demo_block_1.default>

      <demo_block_1.default title="Tabbar显示徽标、定制颜色">
        <tabbar_1.default items={[
        {
            name: "home",
            icon: "like_o",
            text: "首页",
            dot: true
        },
        {
            name: "mine",
            icon: "like_o",
            text: "我的",
            info: "5"
        }
    ]} active={state.active4} custom-class={index_module_less_1.default.tabbar} activeColor="#07c160" inactiveColor="#000" onChange={(active) => {
        setState(preState => (Object.assign(Object.assign({}, preState), { active4: active })));
    }} safeAreaInsetBottom={false}/>
      </demo_block_1.default>
    </components_1.View>);
}
exports.default = TabbarPage;
//# sourceMappingURL=index.jsx.map