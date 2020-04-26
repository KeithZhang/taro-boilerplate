import { Block, View, Text } from "@tarojs/components";
import { Component } from "@tarojs/taro";
import QMOverlay from "../overlay";
import QMTransition from "../transition";
import QMIcon from "../icon";
import useBem from "ui-base/hooks/useBem";
import css from "./index.module.less";
import Help from "./help";

interface IToastState {
  show: boolean;
  icon?: string;
}

export default class Toast extends Component<any, any> {
  static externalClasses = ["custom-class"];

  //
  state = {
    show: false,
    icon: "",
    text: ""
  };
  bem = useBem(css).bem;

  componentDidMount = () => {
    Help.seInstance(this);
  };

  show = (state: IToastState) => {
    this.setState({ ...state, show: true });
  };

  hide = () => {
    this.setState({ show: false });
  };

  //
  render() {
    const { show, icon, text } = this.state;
    return (
      <Block>
        <QMOverlay show={show} customOverlayStyle={`background-color:transparent;`} onClick={this.hide} />
        <QMTransition show={show} custom-class={`${this.bem("toast__container")}`}>
          <View className={`${this.bem("toast")}`}>
            {icon && <QMIcon custom-class={`${this.bem("toast--icon")}`} size="48px" name={icon} />}
            <Text className={`${this.bem("toast--text")}`}>{text}</Text>
          </View>
        </QMTransition>
      </Block>
    );
  }
}
