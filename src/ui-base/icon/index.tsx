import { View, Image } from "@tarojs/components";

import Info from "../info";
import "./index.less";

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

  console.log("qm icon...", props);
  const isImageName = props.name.indexOf("/") !== -1;
  return (
    <View
      className={`custom-class ${props.classPrefix} ${
        isImageName ? "van-icon--image" : props.classPrefix + "-" + props.name
      }`}
      style={`color: ${props.color}; font-size: ${addUnit(props.size)}; ${
        props.customStyle
      }`}
      onClick={props.onClick}
    >
      {props.info !== null || props.dot ? (
        <Info
          custom-class="van-icon__info"
          dot={props.dot}
          info={props.info}
        ></Info>
      ) : null}
      {isImageName ? (
        <Image src={props.name} mode="aspectFit" className="van-icon__image" />
      ) : null}
    </View>
  );
}

QMIcon.defaultProps = {
  name: "",
  dot: false,
  color: "inherit",
  size: "inherit",
  classPrefix: "van-icon",
  customStyle: "",
  info: null,
  onClick: () => {}
};

QMIcon.externalClasses = ["custom-class"];
