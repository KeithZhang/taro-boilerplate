import Transition from "../transition";

import cn from "./index.module.less";
import { View } from "@tarojs/components";

interface IOverlayProps {
  show?: boolean;
  children?: any;
  zIndex?: number;
  "custom-style"?: string;
  duration?: string | number;
  onClick?: () => void;
}

export default function Overlay(props: IOverlayProps) {
  return (
    <Transition
      show={props.show}
      duration={props.duration}
      custom-style={`z-index: ${props.zIndex}; ${props["custom-style"]}`}
    >
      <View onClick={props.onClick} className={cn.van_overlay}>
        {props.children}
      </View>
    </Transition>
  );
}

Overlay.defaultProps = {
  show: false,
  zIndex: 1,
  duration: 300,
  onClick: () => {}
};
