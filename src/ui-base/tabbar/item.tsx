import { View, Block } from "@tarojs/components";

import useBem from "../hooks/useBem";
import cn from "./item.module.less";
import QMIcon from "../icon";
import Info from "../info";

interface ITabbarItemProps {
  active?: boolean;
  name?: string | number;
  icon?: string;
  dot?: boolean;
  info?: string | number;
  renderIcon?: any;
  renderActiveIcon?: any;
  children?: any;
  onChange?: (name: string | number | undefined) => void;
  activeColor?: string;
  inactiveColor?: string;
}

export default function TabbarItem(props: ITabbarItemProps) {
  const {
    active,
    name,
    icon,
    dot,
    info,
    renderIcon,
    renderActiveIcon,
    children,
    activeColor,
    inactiveColor,
    onChange
  } = props;

  const { bem } = useBem(cn);

  const customIcon = active ? renderActiveIcon() : renderIcon();

  return (
    <View
      className={`custom-class ${bem("tabbar_item", { active })}`}
      onClick={() => {
        onChange && onChange(name);
      }}
      style={`color: ${active ? activeColor : inactiveColor}`}
    >
      <View className={cn.van_tabbar_item__icon}>
        {icon ? (
          <QMIcon name={icon} custom-class={cn.van_tabbar_item__icon__inner} />
        ) : (
          <Block>{customIcon}</Block>
        )}
        <Info dot={dot} info={info} custom-class={cn.van_tabbar_item__info} />
      </View>
      <View className={cn.van_tabbar_item__text}>{children}</View>
    </View>
  );
}

TabbarItem.defaultProps = {
  renderActiveIcon: () => null,
  renderIcon: () => null
};

TabbarItem.externalClasses = ["custom-class"];
