"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const useBem_1 = require("../hooks/useBem");
const item_module_less_1 = require("./item.module.less");
const icon_1 = require("../icon");
const info_1 = require("../info");
function TabbarItem(props) {
    const { active, name, icon, dot, info, renderIcon, renderActiveIcon, children, activeColor, inactiveColor, onChange } = props;
    const { bem } = useBem_1.default(item_module_less_1.default);
    const customIcon = active ? renderActiveIcon() : renderIcon();
    return (<components_1.View className={`custom-class ${bem("tabbar_item", { active })}`} onClick={() => {
        onChange && onChange(name);
    }} style={`color: ${active ? activeColor : inactiveColor}`}>
      <components_1.View className={item_module_less_1.default.van_tabbar_item__icon}>
        {icon ? (<icon_1.default name={icon} custom-class={item_module_less_1.default.van_tabbar_item__icon__inner}/>) : (<components_1.Block>{customIcon}</components_1.Block>)}
        <info_1.default dot={dot} info={info} custom-class={item_module_less_1.default.van_tabbar_item__info}/>
      </components_1.View>
      <components_1.View className={item_module_less_1.default.van_tabbar_item__text}>{children}</components_1.View>
    </components_1.View>);
}
exports.default = TabbarItem;
TabbarItem.defaultProps = {
    renderActiveIcon: () => null,
    renderIcon: () => null
};
TabbarItem.externalClasses = ["custom-class"];
//# sourceMappingURL=item.jsx.map