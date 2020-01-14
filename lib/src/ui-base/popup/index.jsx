"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const overlay_1 = require("../overlay");
const useTransition_1 = require("../hooks/useTransition");
const useBem_1 = require("../hooks/useBem");
const index_module_less_1 = require("./index.module.less");
function Popup(props) {
    const { state, onTransitionEnd } = useTransition_1.default({
        cn: index_module_less_1.default,
        props: Object.assign(Object.assign({}, props), { name: props.position })
    });
    const onClickOverlay = () => {
        props.onClickOverlay && props.onClickOverlay();
        if (props.closeOnClickOverlay) {
            props.onClose && props.onClose();
        }
    };
    const { bem } = useBem_1.default(index_module_less_1.default);
    const calcClasses = bem("popup", [
        props.position,
        {
            round: props.round,
            safeAreaInsetBottom: props.safeAreaInsetBottom,
            safeAreaInsetTop: props.safeAreaInsetTop
        }
    ]);
    // console.log("state.classes...", state.classes);
    // console.log("calcClasses...", calcClasses);
    return (<components_1.Block>
      {props.overlay ? (<overlay_1.default show={props.show} zIndex={props.zIndex} duration={props.duration} customStyle={props.overlayStyle} onClick={onClickOverlay}/>) : null}

      {state.inited ? (<components_1.View className={`custom-class ${state.classes} ${calcClasses}`} style={`z-index: ${props.zIndex}; -webkit-transition-duration: ${state.currentDuration}ms; transition-duration: ${state.currentDuration}ms; ${state.display ? "" : "display: none;"}; ${props.customStyle}`} onTransitionEnd={onTransitionEnd}>
          {props.children}
        </components_1.View>) : null}
    </components_1.Block>);
}
exports.default = Popup;
Popup.defaultProps = {
    show: false,
    zIndex: 100,
    overlay: true,
    position: "center",
    duration: 300,
    round: false,
    closeOnClickOverlay: true,
    closeable: false,
    closeIcon: "cross",
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false
};
Popup.externalClasses = [
    "enter-class",
    "enter-active-class",
    "enter-to-class",
    "leave-class",
    "leave-active-class",
    "leave-to-class",
    "custom-class"
];
//# sourceMappingURL=index.jsx.map