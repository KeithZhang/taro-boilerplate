"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const util_1 = require("../util");
function useTransition({ cn, props }) {
    let transitionEnded = false;
    let [state, setState] = taro_1.useState({
        type: "",
        inited: false,
        display: false,
        status: "",
        classes: "",
        currentDuration: ""
    });
    const getClassNames = name => ({
        enter: `${cn[`van_${name}_enter`]} ${cn[`van_${name}_enter_active`]} enter-class enter-active-class`,
        enter_to: `${cn[`van_${name}_enter_to`]} ${cn[`van_${name}_enter_active`]} enter-to-class enter-active-class`,
        leave: `${cn[`van_${name}_leave`]} ${cn[`van_${name}_leave_active`]} leave-class leave-active-class`,
        leave_to: `${cn[`van_${name}_leave_to`]} ${cn[`van_${name}_leave_active`]} leave-to-class leave-active-class`
    });
    const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
    const enter = () => {
        console.log("enter...");
        const { duration, name } = props;
        const classNames = getClassNames(name);
        console.log("enter name...", name);
        console.log("classNames...", classNames);
        const currentDuration = util_1.isObj(duration) ? duration.enter : duration;
        setState(preState => (Object.assign(Object.assign({}, preState), { status: "enter" })));
        console.log("currentDuration...", currentDuration);
        props.onBeforeEnter && props.onBeforeEnter();
        Promise.resolve()
            .then(nextTick)
            .then(() => {
            // checkStatus("enter");
            props.onEnter && props.onEnter();
            setState(preState => (Object.assign(Object.assign({}, preState), { inited: true, display: true, classes: classNames.enter, currentDuration })));
        })
            .then(nextTick)
            .then(() => {
            // checkStatus("enter");
            transitionEnded = false;
            // setTimeout(() => onTransitionEnd(props.onAfterEnter), currentDuration);
            setState(preState => (Object.assign(Object.assign({}, preState), { classes: classNames["enter_to"] })));
        })
            .catch(() => { });
    };
    const leave = () => {
        console.log("leave...");
        if (!state.display) {
            return;
        }
        const { duration, name } = props;
        console.log("leave name...", name);
        const classNames = getClassNames(name);
        console.log("leave classNames...", classNames);
        const currentDuration = util_1.isObj(duration) ? duration.leave : duration;
        console.log("leave currentDuration...", currentDuration);
        setState(preState => (Object.assign(Object.assign({}, preState), { status: "leave" })));
        props.onBeforeLeave && props.onBeforeLeave();
        Promise.resolve()
            .then(nextTick)
            .then(() => {
            // checkStatus("leave");
            props.onLeave && props.onLeave();
            setState(preState => (Object.assign(Object.assign({}, preState), { classes: classNames.leave, currentDuration })));
        })
            .then(nextTick)
            .then(() => {
            // checkStatus("leave");
            transitionEnded = false;
            setTimeout(onTransitionEnd, currentDuration);
            setState(preState => (Object.assign(Object.assign({}, preState), { classes: classNames["leave_to"] })));
        })
            .catch(() => { });
    };
    const checkStatus = statusParam => {
        console.log("checkStatus...", statusParam);
        console.log("checkStatus...", state.status);
        if (statusParam !== state.status) {
            throw new Error(`incongruent status: ${statusParam}`);
        }
    };
    const onTransitionEnd = () => {
        console.log("onTransitionEnd...", transitionEnded);
        if (transitionEnded) {
            return;
        }
        transitionEnded = true;
        const { display } = state;
        if (!props.show && display) {
            setState(preState => (Object.assign(Object.assign({}, preState), { display: false })));
        }
    };
    taro_1.useEffect(() => {
        console.log("useEffect...", props);
        props.show ? enter() : leave();
    }, [props.show]);
    return { state, onTransitionEnd };
}
exports.default = useTransition;
//# sourceMappingURL=useTransition.js.map