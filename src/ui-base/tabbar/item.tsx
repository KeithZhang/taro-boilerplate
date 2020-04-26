import { View, Block } from "@tarojs/components";

import useBem from "../hooks/useBem";
import  "./item.less";
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

  const { bem } = useBem();

  const customIcon = active ? renderActiveIcon() : renderIcon();

  return (
    <View
      className={`custom-class ${bem("tabbar-item", { active })}`}
      onClick={() => {
        onChange && onChange(name);
      }}
      style={`color: ${active ? activeColor : inactiveColor}`}
    >
      <View className={'van-tabbar-item__icon'}>
        {icon ? (
          <QMIcon name={icon} custom-class={'van-tabbar-item__icon__inner'} />
        ) : (
          <Block>{customIcon}</Block>
        )}
        <Info dot={dot} info={info} custom-class='van-tabbar-item__info' />
      </View>
      <View className='van-tabbar-item__text'>{children}</View>
    </View>
  );
}

TabbarItem.defaultProps = {
  renderActiveIcon: () => null,
  renderIcon: () => null
};

TabbarItem.externalClasses = ["custom-class"];
