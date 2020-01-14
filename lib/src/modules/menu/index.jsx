"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
function Menu(props) {
    console.log("editing...", props);
    return (<components_1.View className={`hbox flex1 ${index_module_less_1.default.menu_container}`} onClick={e => {
        console.log("target...", e);
        props.editing ? props.onClick(e.target.dataset) : console.log("hello");
    }}>
      {props.name || "default menu"}
    </components_1.View>);
}
exports.default = Menu;
Menu.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.jsx.map