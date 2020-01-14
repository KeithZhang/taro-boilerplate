"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const transition_1 = require("ui-base/transition");
const taro_1 = require("@tarojs/taro");
const index_module_less_1 = require("./index.module.less");
function TransitionPage() {
    const [state, setState] = taro_1.useState({
        show: false,
        name: "fade",
        showCustom: false
    });
    function onClickFade() {
        trigger("fade");
    }
    function onClickFadeUp() {
        trigger("fade_up");
    }
    function onClickFadeDown() {
        trigger("fade_down");
    }
    function onClickFadeLeft() {
        trigger("fade_left");
    }
    function onClickFadeRight() {
        trigger("fade_right");
    }
    function onClickSlideUp() {
        trigger("slide_up");
    }
    function onClickSlideDown() {
        trigger("slide_down");
    }
    function onClickSlideLeft() {
        trigger("slide_left");
    }
    function onClickSlideRight() {
        trigger("slide_right");
    }
    function trigger(name) {
        setState(preState => (Object.assign(Object.assign({}, preState), { name, show: true })));
        setTimeout(() => {
            setState(preState => (Object.assign(Object.assign({}, preState), { show: false })));
        }, 1000);
    }
    function onClickCustom() {
        setState(preState => (Object.assign(Object.assign({}, preState), { showCustom: true })));
        setTimeout(() => {
            setState(preState => {
                console.log("onClickCustom");
                return Object.assign(Object.assign({}, preState), { showCustom: false });
            });
        }, 1000);
    }
    function onBeforeEnter() {
        console.log("before enter");
    }
    function onEnter() {
        console.log("on enter");
    }
    function onAfterEnter() {
        console.log("on after enter");
    }
    function onBeforeLeave() {
        console.log("on before leave");
    }
    function onLeave() {
        console.log("on leave");
    }
    function onAfterLeave() {
        console.log("on after leave");
    }
    return (<components_1.View>
      <components_1.Button onClick={onClickFade}>Fade</components_1.Button>
      <components_1.Button onClick={onClickFadeUp}>Fade Up</components_1.Button>
      <components_1.Button onClick={onClickFadeDown}>Fade Down</components_1.Button>
      <components_1.Button onClick={onClickFadeLeft}>Fade Left</components_1.Button>
      <components_1.Button onClick={onClickFadeRight}>Fade Right</components_1.Button>
      <components_1.Button onClick={onClickSlideUp}>Slide Up</components_1.Button>
      <components_1.Button onClick={onClickSlideDown}>Slide Down</components_1.Button>
      <components_1.Button onClick={onClickSlideLeft}>Slide Left</components_1.Button>
      <components_1.Button onClick={onClickSlideRight}>Slide Right</components_1.Button>
      <components_1.Button onClick={onClickCustom}>Custom</components_1.Button>

      <transition_1.default show={state.show} name={state.name} custom-class={index_module_less_1.default.block}></transition_1.default>
      <transition_1.default show={state.showCustom} duration={{ enter: 3000, leave: 3000 }} name="" custom-class={index_module_less_1.default.block} enter-class={index_module_less_1.default.van_enter_class} enter-active-class={index_module_less_1.default.van_enter_active_class} leave-active-class={index_module_less_1.default.van_leave_active_class} leave-to-class={index_module_less_1.default.van_leave_to_class} onBeforeEnter={onBeforeEnter} onEnter={onEnter} onAfterEnter={onAfterEnter} onBeforeLeave={onBeforeLeave} onLeave={onLeave} onAfterLeave={onAfterLeave}></transition_1.default>
    </components_1.View>);
}
exports.default = TransitionPage;
//# sourceMappingURL=index.jsx.map