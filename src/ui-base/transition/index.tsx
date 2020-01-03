import { View, Block } from "@tarojs/components";
import cn from "./index.module.less";

import useTransition from "../hooks/useTransition";

interface ITransitionProps {
  customStyle?: string;
  "custom-class"?: string;
  show: boolean;
  duration: any;
  name: string;
  children?: any;
  onBeforeEnter?: () => void;
  onEnter?: () => void;
  onAfterEnter?: () => void;
  onBeforeLeave?: () => void;
  onLeave?: () => void;
  onAfterLeave?: () => void;
}

export default function Transition(props: ITransitionProps) {
  const { state, onTransitionEnd } = useTransition({ cn, props });

  return (
    <Block>
      {state.inited ? (
        <View
          className={`${cn.van_transition} ${state.classes} custom-class`}
          style={`-webkit-transition-duration: ${
            state.currentDuration
          }ms; transition-duration: ${state.currentDuration}ms; ${
            state.display ? "" : "display: none;"
          } ${props.customStyle} `}
          onTransitionEnd={onTransitionEnd}
        >
          {props.children}
        </View>
      ) : null}
    </Block>
  );
}

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
