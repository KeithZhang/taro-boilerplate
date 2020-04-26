import { View } from "@tarojs/components";
import cn from "./index.module.less";
import useBem from "../hooks/useBem";
import { useState } from "@tarojs/taro";

interface ITabProps {
  name?: string | number;
  title?: string;
  disabled?: boolean;
  dot?: boolean;
  info?: string | number;
  titleStyle?: string;
  children?: any;
}

export default function Tab(props: ITabProps) {
  const { bem } = useBem(cn);

  const [state, setState] = useState({
    active: false,
    shouldRender: false,
    shouldShow: false
  });

  return (
    <View
      className={`custom-class ${bem("tab__pane", {
        active: state.active,
        inactive: !state.active
      })}`}
      style={state.shouldShow ? "" : "display: none;"}
    >
      {props.children}
    </View>
  );
}

Tab.externalClasses = ["custom-class"];
