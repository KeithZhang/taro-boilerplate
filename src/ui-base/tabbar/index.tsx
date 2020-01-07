import { View } from "@tarojs/components";

import cn from "./index.module.less";
import useBem from "../hooks/useBem";

interface ITabbarProps {
  active?: number | string;
  fixed?: boolean;
  border?: boolean;
  zIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  safeAreaInsetBottom?: boolean;
  children?: any;
  onChange?: (active: string | number) => void;
}

export const TabbarContext = Taro.createContext(undefined as any);

export default function Tabbar(props: ITabbarProps) {
  const { bem } = useBem(cn);

  const onChange = active => {
    props.onChange && props.onChange(active);
  };
  const dyClss = bem("tabbar", {
    fixed: props.fixed,
    safe: props.safeAreaInsetBottom
  });
  console.log("dyClss...", dyClss);
  return (
    <TabbarContext.Provider
      value={{
        onChange,
        active: props.active,
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor
      }}
    >
      <View
        className={`custom-class  ${dyClss} ${
          props.border ? cn.van_hairline__top_bottom : ""
        }`}
        style={props.zIndex ? `z-index: ${props.zIndex}` : ""}
        onClick={e => {
          console.log("tabbar onclick...", e);
        }}
      >
        {props.children}
      </View>
    </TabbarContext.Provider>
  );
}

Tabbar.defaultProps = {
  fixed: true,
  border: true,
  zIndex: 1,
  activeColor: "#1989fa",
  inactiveColor: "#7d7e80",
  safeAreaInsetBottom: true
};

Tabbar.externalClasses = ["custom-class"];
