"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const util_1 = require("../util");
function Loading(props) {
    const { vertical, type, color, size, children, textSize } = props;
    return (<components_1.View className={`custom-class ${index_module_less_1.default.van_loading} ${vertical ? index_module_less_1.default.van_loading__vertical : ""}`}>
      <components_1.View className={`${index_module_less_1.default.van_loading__spinner} ${index_module_less_1.default[`van_loading__spinner__${type}`]}`} style={`color: ${color}; width: ${util_1.isNumber(size) ? size + "px" : size}}; height: ${util_1.isNumber(size) ? size + "px" : size}`}>
        {type === "spinner"
        ? [...Array(12).keys()].map(v => (<components_1.View key={v} className={index_module_less_1.default.van_loading__dot}/>))
        : null}
      </components_1.View>
      <components_1.View className={`${index_module_less_1.default.van_loading__text}`} style={`font-size: ${util_1.isNumber(textSize) ? textSize + "px" : textSize}`}>
        {children}
      </components_1.View>
    </components_1.View>);
}
exports.default = Loading;
Loading.defaultProps = {
    color: "#c9c9c9",
    type: "circular",
    size: "30px",
    textSize: "14px",
    vertical: false
};
Loading.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map