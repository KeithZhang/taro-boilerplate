import { View, Image } from "@tarojs/components";

import Info from "../info";
import cn from "./index.module.less";

interface IIconProps {
  name: string;
  dot?: boolean;
  info?: string | number;
  color?: string;
  size?: string | number;
  customStyle?: string;
  classPrefix?: string;
  onClick?: () => void;
}

export default function QMIcon(props: IIconProps) {
  let REGEXP = /^d+(.d+)?$/;

  function addUnit(value) {
    if (value == null) {
      return undefined;
    }

    return REGEXP.test("" + value) ? value + "px" : value;
  }

  // console.log("qm icon...", props);

  return (
    <View
      className={`custom-class ${cn[props.classPrefix || "van_icon"]} ${
        props.name.indexOf("/") !== -1
          ? cn["van_icon__image"]
          : cn[props.classPrefix + "_" + props.name]
      }}`}
      style={`color: ${props.color};font-size: ${addUnit(props.size)}; ${
        props.customStyle
      }`}
      onClick={props.onClick}
    >
      {props.info !== null || props.dot ? (
        <Info
          custom-class={cn.van_icon__info}
          dot={props.dot}
          info={props.info}
        ></Info>
      ) : null}
      {props.name.indexOf("/") !== -1 ? <Image src={props.name} /> : null}
    </View>
  );
}

QMIcon.defaultProps = {
  name: "",
  dot: false,
  color: "inherit",
  size: "inherit",
  classPrefix: "van_icon",
  customStyle: "",
  onClick: () => {}
};

QMIcon.externalClasses = ["custom-class"];
