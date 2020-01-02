import Overlay from "../overlay";
import useTransition from "../hooks/useTransition";
import { Block, View } from "@tarojs/components";

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

  var PREFIX = "van_";

  function join(name, mods) {
    name = PREFIX + name;
    mods = mods.map(function(mod) {
      return name + "__" + mod;
    });
    mods.unshift(name);
    mods = mods.map(mod => {
      return cn[mod];
    });
    return mods.join(" ");
  }

  function traversing(mods, conf) {
    if (!conf) {
      return;
    }

    if (typeof conf === "string" || typeof conf === "number") {
      mods.push(conf);
    } else if (Array.isArray(conf)) {
      conf.forEach(function(item) {
        traversing(mods, item);
      });
    } else if (typeof conf === "object") {
      Object.keys(conf).forEach(function(key) {
        conf[key] && mods.push(key);
      });
    }
  }

  function bem(name, conf) {
    var mods = [];
    traversing(mods, conf);
    return join(name, mods);
  }

  const calcClasses = bem("popup", [
    props.position,
    {
      round: props.round,
      safeAreaInsetBottom: props.safeAreaInsetBottom,
      safeAreaInsetTop: props.safeAreaInsetTop
    }
  ]);
  console.log("state.classes...", state.classes);
  console.log("calcClasses...", calcClasses);
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
