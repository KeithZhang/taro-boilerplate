import { View } from "@tarojs/components";

import cn from "./index.module.less";
import useBem from "../hooks/useBem";
import { useContext } from "@tarojs/taro";

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

export const TabbarContext = Taro.createContext(undefined as any);

export default function Tabbar(props: ITabbarProps) {
  const { bem } = useBem(cn);

  const onChange = name => {
    console.log("tabbar onchange...", name);
  };

  return (
    <TabbarContext.Provider value={{ onChange }}>
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
    </TabbarContext.Provider>
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
