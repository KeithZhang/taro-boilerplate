"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transition_1 = require("../transition");
const index_module_less_1 = require("./index.module.less");
const components_1 = require("@tarojs/components");
function Overlay(props) {
    return (<transition_1.default show={props.show} duration={props.duration} customStyle={`z-index: ${props.zIndex}; ${props.customStyle}`}>
      <components_1.View onClick={props.onClick} className={index_module_less_1.default.van_overlay}>
        {props.children}
      </components_1.View>
    </transition_1.default>);
}
exports.default = Overlay;
Overlay.defaultProps = {
    show: false,
    zIndex: 1,
    duration: 300,
    onClick: () => { }
};
//# sourceMappingURL=index.jsx.map