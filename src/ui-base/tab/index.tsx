import { View } from "@tarojs/components";
import "./index.less";
import useBem from "../hooks/useBem";
import { useState, useEffect } from "@tarojs/taro";

interface ITabProps {
  active: string | number;
  name?: string | number;
  title?: string;
  disabled?: boolean;
  dot?: boolean;
  info?: string | number;
  titleStyle?: string;
  lazyRender?: boolean;
  animated?: boolean;
  children?: any;
}

export default function Tab(props: ITabProps) {
  const {active, name, lazyRender = true} = props
  const { bem } = useBem();

  const [inited, setInited] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);



  useEffect(() => {
    setInited(inited || active === name);
  }, [active])

  useEffect(() => {
    setShouldRender(inited || !lazyRender)
  }, [inited])

  return (
    <View
      className={`custom-class ${bem("tab__pane", {
        active: active,
        inactive: !active
      })}`}
      style={active === name ? "" : "display: none;"}
    >
      {shouldRender ? props.children : null}
    </View>
  );
}

Tab.externalClasses = ["custom-class"];
