"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const useBem_1 = require("../hooks/useBem");
const context_1 = require("./context");
function Tabbar(props) {
    const { bem } = useBem_1.default(index_module_less_1.default);
    const onChange = active => {
        props.onChange && props.onChange(active);
    };
    return (<context_1.TabbarContext.Provider value={{
        onChange,
        active: props.active,
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor
    }}>
      <components_1.View className={`custom-class ${bem("tabbar", {
        fixed: props.fixed,
        safe: props.safeAreaInsetBottom
    })} ${props.border ? index_module_less_1.default.van_hairline__top_bottom : ""}`} style={props.zIndex ? `z-index: ${props.zIndex}` : ""} onClick={e => {
        console.log("tabbar onclick...", e);
    }}>
        {props.children}
      </components_1.View>
    </context_1.TabbarContext.Provider>);
}
exports.default = Tabbar;
Tabbar.defaultProps = {
    fixed: true,
    border: true,
    zIndex: 1,
    activeColor: "#1989fa",
    inactiveColor: "#7d7e80",
    safeAreaInsetBottom: true
};
Tabbar.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map