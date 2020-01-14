"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const useTransition_1 = require("../hooks/useTransition");
function Transition(props) {
    const { state, onTransitionEnd } = useTransition_1.default({ cn: index_module_less_1.default, props });
    return (<components_1.Block>
      {state.inited ? (<components_1.View className={`${index_module_less_1.default.van_transition} ${state.classes} custom-class`} style={`-webkit-transition-duration: ${state.currentDuration}ms; transition-duration: ${state.currentDuration}ms; ${state.display ? "" : "display: none;"} ${props.customStyle} `} onTransitionEnd={onTransitionEnd}>
          {props.children}
        </components_1.View>) : null}
    </components_1.Block>);
}
exports.default = Transition;
Transition.defaultProps = {
    show: true,
    name: "fade",
    duration: 300
};
Transition.externalClasses = [
    "enter-class",
    "enter-active-class",
    "enter-to-class",
    "leave-class",
    "leave-active-class",
    "leave-to-class",
    "custom-class"
];
//# sourceMappingURL=index.jsx.map