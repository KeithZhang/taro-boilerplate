"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
function DemoBlock(props) {
    return (<components_1.View className={`custom-class ${index_module_less_1.default.demo_block} ${index_module_less_1.default.van_clearfix} ${props.padding ? index_module_less_1.default.demo_block__padding : ""}`}>
      {props.title ? (<components_1.View className={index_module_less_1.default.demo_block__title}>{props.title}</components_1.View>) : null}
      {props.children}
    </components_1.View>);
}
exports.default = DemoBlock;
//# sourceMappingURL=index.jsx.map