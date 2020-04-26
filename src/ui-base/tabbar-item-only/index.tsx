import { View, Block } from "@tarojs/components";
import { useState, useContext } from "@tarojs/taro";

import useBem from "../hooks/useBem";
import "./index.less";
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

  const { bem } = useBem();
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
      <View className='van-tabbar-item__icon'>
        {props.icon ? (
          <QMIcon
            name={props.icon}
            custom-class='van-tabbar-item__icon__inner'
          />
        ) : (
          <Block>{customIcon}</Block>
        )}
        <Info
          dot={props.dot}
          info={props.info}
          custom-class='van-tabbar-item__info'
        />
      </View>
      <View className='van-tabbar-item__text'>{props.children}</View>
    </View>
  );
}

TabbarItem.defaultProps = {
  renderActiveIcon: () => null,
  renderIcon: () => null
};

TabbarItem.externalClasses = ["custom-class"];
