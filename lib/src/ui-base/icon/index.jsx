"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const info_1 = require("../info");
const index_module_less_1 = require("./index.module.less");
function QMIcon(props) {
    let REGEXP = /^d+(.d+)?$/;
    function addUnit(value) {
        if (value == null) {
            return undefined;
        }
        return REGEXP.test("" + value) ? value + "px" : value;
    }
    console.log("qm icon...", props);
    return (<components_1.View className={`custom-class ${index_module_less_1.default[props.classPrefix || "van_icon"]} ${props.name.indexOf("/") !== -1
        ? index_module_less_1.default.van_icon__image1
        : index_module_less_1.default[props.classPrefix + "_" + props.name]}}`} style={`color: ${props.color};font-size: ${addUnit(props.size)}; ${props.customStyle}`} onClick={props.onClick}>
      {props.info !== null || props.dot ? (<info_1.default custom-class={index_module_less_1.default.van_icon__info} dot={props.dot} info={props.info}></info_1.default>) : null}
      {props.name.indexOf("/") !== -1 ? (<components_1.Image src={props.name} mode="aspectFit" className={index_module_less_1.default.van_icon__image2}/>) : null}
    </components_1.View>);
}
exports.default = QMIcon;
QMIcon.defaultProps = {
    name: "",
    dot: false,
    color: "inherit",
    size: "inherit",
    classPrefix: "van_icon",
    customStyle: "",
    info: null,
    onClick: () => { }
};
QMIcon.externalClasses = ["custom-class"];
//# sourceMappingURL=index.jsx.map