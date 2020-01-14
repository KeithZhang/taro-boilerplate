"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const useBem_1 = require("../hooks/useBem");
const item_1 = require("./item");
let items = [
    {
        name: "",
        icon: "",
        dot: false,
        info: "",
        text: "",
        renderIcon: () => <components_1.View>renderIcon</components_1.View>,
        renderActiveIcon: () => <components_1.View>renderActiveIcon</components_1.View>
    },
    { name: "", icon: "", dot: false, info: "" }
];
function Tabbar(props) {
    const { bem } = useBem_1.default(index_module_less_1.default);
    return (<components_1.View className={`custom-class ${bem("tabbar", {
        fixed: props.fixed,
        safe: props.safeAreaInsetBottom
    })} ${props.border ? index_module_less_1.default.van_hairline__top_bottom : ""}`} style={props.zIndex ? `z-index: ${props.zIndex}` : ""} onClick={e => {
        console.log("tabbar onclick...", e);
    }}>
      {props.items.map((v, i) => {
        const currentActive = v.name == props.active;
        const { text } = v, others = __rest(v, ["text"]);
        return (<item_1.default key={v.name + "_" + i} active={currentActive} {...others} activeColor={props.activeColor} inactiveColor={props.inactiveColor} onChange={props.onChange}>
            {text}
          </item_1.default>);
    })}
    </components_1.View>);
}
exports.default = Tabbar;
Tabbar.defaultProps = {
    fixed: true,
    border: true,
    zIndex: 1,
    activeColor: "#1989fa",
    inactiveColor: "#7d7e80",
    safeAreaInsetBottom: true,
    items: []
};
Tabbar.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map