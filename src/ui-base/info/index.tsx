import { View, Block } from "@tarojs/components";

import "./index.less";
import useBem from "../hooks/useBem";

interface IInfoProps {
  dot?: boolean;
  info?: string | number;
  customStyle?: string;
}

export default function Info(props: IInfoProps) {
  const { bem } = useBem();
  return (
    <Block>
      {(props.info !== null && props.info !== "") || props.dot ? (
        <View
          className={`custom-class van-info ${bem("info", {
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

Info.defaultProps = {
  info: "",
  dot: false
};

Info.externalClasses = ["custom-class"];
