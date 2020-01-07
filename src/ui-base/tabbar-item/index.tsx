import { View, Block } from "@tarojs/components";
import { useState, useContext } from "@tarojs/taro";

import useBem from "../hooks/useBem";
import cn from "./index.module.less";
import QMIcon from "../icon";
import Info from "../info";
import { TabbarContext } from "../tabbar";

interface ITabbarItemProps {
  name?: string | number;
  icon?: string;
  dot?: boolean;
  info?: string | number;
  renderIcon?: any;
  renderActiveIcon?: any;
  children?: any;
}

export default function TabbarItem(props: ITabbarItemProps) {
  const { onChange } = useContext(TabbarContext);
  const [state, setState] = useState({ active: null } as {
    active: any;
  });

  const { bem } = useBem(cn);

  const customIcon = state.active
    ? props.renderActiveIcon()
    : props.renderIcon();

  return (
    <View
      className={bem("tabbar_item", { active: state.active })}
      onClick={e => {
        console.log("tabbaritem onclick..", e);
        setState({
          active: props.name
        });
        onChange(props.name);
      }}
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
