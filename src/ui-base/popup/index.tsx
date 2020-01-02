import Overlay from "../overlay";

interface IPopupProps {
  show?: boolean;
  zIndex?: number;
  overlay?: boolean;
  position?: "top" | "bottom" | "right" | "left" | "center";
  duration?: number | object;
  round?: boolean;
  "custom-style"?: string;
  "overlay-style"?: string;
  closeOnClickOverlay?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  safeAreaInsetBottom?: boolean;
  safeAreaInsetTop?: boolean;
  onClose?: () => void;
  clickOverlay?: () => void;
  beforeEnter?: () => void;
  enter?: () => void;
  afterEnter?: () => void;
  beforeLeave?: () => void;
  leave?: () => void;
  afterLeave?: () => void;
}

export default function Popup(props: IPopupProps) {
  return <Overlay>this is popup component</Overlay>;
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
  "leave-to-class"
];
