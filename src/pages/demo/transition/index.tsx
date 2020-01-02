import { View, Button } from "@tarojs/components";
import Transition from "ui-base/transition";
import { useState } from "@tarojs/taro";
import cn from "./index.module.less";
export default function TransitionPage() {
  const [state, setState] = useState({
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
    setState(preState => ({ ...preState, name, show: true }));
    setTimeout(() => {
      setState(preState => ({ ...preState, show: false }));
    }, 1000);
  }

  function onClickCustom() {
    setState(preState => ({ ...preState, showCustom: true }));
    setTimeout(() => {
      setState(preState => {
        console.log("onClickCustom");
        return { ...preState, showCustom: false };
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

  return (
    <View>
      <Button onClick={onClickFade}>Fade</Button>
      <Button onClick={onClickFadeUp}>Fade Up</Button>
      <Button onClick={onClickFadeDown}>Fade Down</Button>
      <Button onClick={onClickFadeLeft}>Fade Left</Button>
      <Button onClick={onClickFadeRight}>Fade Right</Button>
      <Button onClick={onClickSlideUp}>Slide Up</Button>
      <Button onClick={onClickSlideDown}>Slide Down</Button>
      <Button onClick={onClickSlideLeft}>Slide Left</Button>
      <Button onClick={onClickSlideRight}>Slide Right</Button>
      <Button onClick={onClickCustom}>Custom</Button>

      <Transition
        show={state.show}
        name={state.name}
        custom-class={cn.block}
      ></Transition>
      <Transition
        show={state.showCustom}
        duration={{ enter: 3000, leave: 3000 }}
        name=""
        custom-class={cn.block}
        enter-class={cn.van_enter_class}
        enter-active-class={cn.van_enter_active_class}
        leave-active-class={cn.van_leave_active_class}
        leave-to-class={cn.van_leave_to_class}
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onAfterEnter={onAfterEnter}
        onBeforeLeave={onBeforeLeave}
        onLeave={onLeave}
        onAfterLeave={onAfterLeave}
      ></Transition>
    </View>
  );
}
