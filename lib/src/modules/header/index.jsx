"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
const index_module_less_1 = require("./index.module.less");
function HeaderModule() {
    const [state, setState] = taro_1.useState({
        like: false
    });
    return (<components_1.View className={`hbox_center ${index_module_less_1.default.header_container}`}>
      this is header {state.like}
    </components_1.View>);
}
exports.default = HeaderModule;
HeaderModule.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.jsx.map