import { Block, View } from "@tarojs/components";
import Overlay from "../overlay";
import useTransition from "../hooks/useTransition";
import useBem from "../hooks/useBem";

import cn from "./index.module.less";

interface IPopupProps {
  children?: any;
  show?: boolean;
  zIndex?: number;
  overlay?: boolean;
  position?: "top" | "bottom" | "right" | "left" | "center";
  duration?: string | number;
  round?: boolean;
  customStyle?: string;
  overlayStyle?: string;
  closeOnClickOverlay?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  safeAreaInsetBottom?: boolean;
  safeAreaInsetTop?: boolean;
  onClose?: () => void;
  onClickOverlay?: () => void;
  onBeforeEnter?: () => void;
  onEnter?: () => void;
  onAfterEnter?: () => void;
  onBeforeLeave?: () => void;
  onLeave?: () => void;
  onAfterLeave?: () => void;
}

export default function Popup(props: IPopupProps) {
  const { state, onTransitionEnd } = useTransition({
    cn,
    props: { ...props, name: props.position }
  });
  const onClickOverlay = () => {
    props.onClickOverlay && props.onClickOverlay();
    if (props.closeOnClickOverlay) {
      props.onClose && props.onClose();
    }
  };

  const { bem } = useBem(cn);
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
  return (
    <Block>
      {props.overlay ? (
        <Overlay
          show={props.show}
          zIndex={props.zIndex}
          duration={props.duration}
          customStyle={props.overlayStyle}
          onClick={onClickOverlay}
        />
      ) : null}

      {state.inited ? (
        <View
          className={`custom-class ${state.classes} ${calcClasses}`}
          style={`z-index: ${props.zIndex}; -webkit-transition-duration: ${
            state.currentDuration
          }ms; transition-duration: ${state.currentDuration}ms; ${
            state.display ? "" : "display: none;"
          }; ${props.customStyle}`}
          onTransitionEnd={onTransitionEnd}
        >
          {props.children}
        </View>
      ) : null}
    </Block>
  );
}

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
