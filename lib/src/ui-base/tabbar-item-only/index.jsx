"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
const useBem_1 = require("../hooks/useBem");
const index_module_less_1 = require("./index.module.less");
const icon_1 = require("../icon");
const info_1 = require("../info");
const context_1 = require("../tabbar-only/context");
function TabbarItem(props) {
    console.log("tarbaritem>>>");
    const tabbarContext = taro_1.useContext(context_1.TabbarContext);
    console.log("tarbaritem<<<", tabbarContext);
    const { onChange, active: parentActive, activeColor, inactiveColor } = tabbarContext || {};
    const { bem } = useBem_1.default(index_module_less_1.default);
    const active = props.name === parentActive;
    const customIcon = active ? props.renderActiveIcon() : props.renderIcon();
    console.log("parentActive...", parentActive);
    return (<components_1.View className={`custom-class ${bem("tabbar_item", { active })}`} onClick={() => {
        onChange && onChange(props.name);
    }} style={`color: ${active ? activeColor : inactiveColor}`}>
      <components_1.View className={index_module_less_1.default.van_tabbar_item__icon}>
        {props.icon ? (<icon_1.default name={props.icon} custom-class={index_module_less_1.default.van_tabbar_item__icon__inner}/>) : (<components_1.Block>{customIcon}</components_1.Block>)}
        <info_1.default dot={props.dot} info={props.info} custom-class={index_module_less_1.default.van_tabbar_item__info}/>
      </components_1.View>
      <components_1.View className={index_module_less_1.default.van_tabbar_item__text}>{props.children}</components_1.View>
    </components_1.View>);
}
exports.default = TabbarItem;
TabbarItem.defaultProps = {
    renderActiveIcon: () => null,
    renderIcon: () => null
};
TabbarItem.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map