import { View, Block } from "@tarojs/components";
import { useState, useContext } from "@tarojs/taro";

import useBem from "../hooks/useBem";
import cn from "./index.module.less";
import QMIcon from "../icon";
import Info from "../info";
import { TabbarContext } from "../tabbar-only/context";

interface ITabbarItemProps {
  name?: string;
  icon?: string;
  dot?: boolean;
  info?: string | number;
  renderIcon?: any;
  renderActiveIcon?: any;
  children?: any;
}

export default function TabbarItem(props: ITabbarItemProps) {
  console.log("tarbaritem>>>");
  const tabbarContext = useContext(TabbarContext);
  console.log("tarbaritem<<<", tabbarContext);
  const { onChange, active: parentActive, activeColor, inactiveColor } =
    tabbarContext || {};

  const { bem } = useBem(cn);
  const active = props.name === parentActive;

  const customIcon = active ? props.renderActiveIcon() : props.renderIcon();

  console.log("parentActive...", parentActive);
  return (
    <View
      className={`custom-class ${bem("tabbar_item", { active })}`}
      onClick={() => {
        onChange && onChange(props.name);
      }}
      style={`color: ${active ? activeColor : inactiveColor}`}
    >
      <View className={cn.van_tabbar_item__icon}>
        {props.icon ? (
          <QMIcon
            name={props.icon}
            custom-class={cn.van_tabbar_item__icon__inner}
          />
        ) : (
          <Block>{customIcon}</Block>
        )}
        <Info
          dot={props.dot}
          info={props.info}
          custom-class={cn.van_tabbar_item__info}
        />
      </View>
      <View className={cn.van_tabbar_item__text}>{props.children}</View>
    </View>
  );
}

TabbarItem.defaultProps = {
  renderActiveIcon: () => null,
  renderIcon: () => null
};

TabbarItem.externalClasses = ["custom-class"];
