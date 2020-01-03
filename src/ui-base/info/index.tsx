import { View, Block } from "@tarojs/components";

import cn from "./index.module.less";
import useBem from "../hooks/useBem";

interface IInfoProps {
  dot?: boolean;
  info?: string | number;
  customStyle?: string;
}

export default function Info(props: IInfoProps) {
  const { bem } = useBem(cn);
  return (
    <Block>
      {(props.info !== null && props.info !== "") || props.dot ? (
        <View
          className={`custom-class ${cn.van_info} ${bem("info", {
            dot: props.dot
          })}`}
          style={props.customStyle}
        >
          {props.dot ? "" : props.info}
        </View>
      ) : null}
    </Block>
  );
}

Info.externalClasses = ["custom-class"];
