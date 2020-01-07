import { View } from "@tarojs/components";

import cn from "./index.module.less";
import useBem from "../hooks/useBem";

interface ITabbarProps {
  active?: number;
  fixed?: boolean;
  border?: boolean;
  zIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  safeAreaInsetBottom?: boolean;
  children?: any;
}

export default function Tabbar(props: ITabbarProps) {
  const { bem } = useBem(cn);

  return (
    <View
      className={`custom-class  ${
        props.border ? cn.van_hairline__top_bottom : ""
      } ${bem("tabbar", {
        fixed: props.fixed,
        safe: props.safeAreaInsetBottom
      })}`}
      style={props.zIndex ? `z-index: ${props.zIndex}` : ""}
      onClick={e => {
        console.log("tabbar onclick...", e);
      }}
    >
      {props.children}
    </View>
  );
}

Tabbar.defaultProps = {
  fiexed: true,
  border: true,
  zIndex: 1,
  activeColor: "#1989fa",
  inactiveColor: "#7d7e80",
  safeAreaInsetBottom: true
};

Tabbar.externalClasses = ["custom-class"];
