import { View } from "@tarojs/components";

import "./index.less";
import useBem from "../hooks/useBem";

import TabbarItem from "./item";
let items = [
  {
    name: "",
    icon: "",
    dot: false,
    info: "",
    text: "",
    renderIcon: () => <View>renderIcon</View>,
    renderActiveIcon: () => <View>renderActiveIcon</View>
  },
  { name: "", icon: "", dot: false, info: "" }
];

interface ITabbarProps {
  active?: number | string;
  fixed?: boolean;
  border?: boolean;
  zIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  safeAreaInsetBottom?: boolean;
  children?: any;
  onChange?: (active: string | number | undefined) => void;
  items: Array<{
    text?: string;
    name?: string | number;
    icon?: string;
    dot?: boolean;
    info?: string | number;
    renderIcon?: any;
    renderActiveIcon?: any;
    "custom-class"?: any;
  }>;
}

export default function Tabbar(props: ITabbarProps) {
  const { bem } = useBem();

  return (
    <View
      className={`custom-class ${bem("tabbar", {
        fixed: props.fixed,
        safe: props.safeAreaInsetBottom
      })} ${props.border ? 'van-hairline--top-bottom' : ""}`}
      style={props.zIndex ? `z-index: ${props.zIndex}` : ""}
      onClick={e => {
        console.log("tabbar onclick...", e);
      }}
    >
      {props.items.map((v, i) => {
        const currentActive = v.name == props.active;
        const { text, ...others } = v;
        return (
          <TabbarItem
            key={v.name + "_" + i}
            active={currentActive}
            {...others}
            activeColor={props.activeColor}
            inactiveColor={props.inactiveColor}
            onChange={props.onChange}
          >
            {text}
          </TabbarItem>
        );
      })}
    </View>
  );
}

Tabbar.defaultProps = {
  fixed: true,
  border: true,
  zIndex: 1,
  activeColor: "#1989fa",
  inactiveColor: "#7d7e80",
  safeAreaInsetBottom: true,
  items: []
};

Tabbar.externalClasses = ["custom-class"];
