"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const taro_1 = require("@tarojs/taro");
function BottomModule() {
    const [state, setState] = taro_1.useState({
        like: true
    });
    return (<components_1.View className={`hbox_center ${index_module_less_1.default.bottom_container}`}>
      this is bottom {state.like}
    </components_1.View>);
}
exports.default = BottomModule;
BottomModule.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.jsx.map