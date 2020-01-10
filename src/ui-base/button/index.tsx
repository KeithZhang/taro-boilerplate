import { Button, View, Block } from "@tarojs/components";
import {
  OnGetUserInfoEventDetail,
  OnContactEventDetail,
  OnGetPhoneNumberEventDetail,
  OnOpenSettingEventDetail
} from "@tarojs/components/types/Button";
import {
  CommonEventFunction,
  ITouchEvent
} from "@tarojs/components/types/common";

import cn from "./index.module.less";
import useBem from "ui-base/hooks/useBem";
import { useState, useEffect } from "@tarojs/taro";

import Loading from "../loading";
import QMIcon from "ui-base/icon";

interface IButtonProps {
  type?: "default" | "primary" | "info" | "warning" | "danger";
  size?: "normal" | "large" | "small" | "mini";
  color?: string;
  icon?: string;
  plain?: boolean;
  block?: boolean;
  round?: boolean;
  square?: boolean;
  disabled?: boolean;
  hairline?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingType?: "spinner" | "circular";
  loadingSize?: string;
  customStyle?: string;
  openType?:
    | "contact"
    | "share"
    | "getUserInfo"
    | "getPhoneNumber"
    | "launchApp"
    | "openSetting"
    | "feedback"
    | "getRealnameAuthInfo"
    | "getAuthorize"
    | "lifestyle"
    | "contactShare";
  appParameter?: string;
  lang?: string;
  sessionForm?: string;
  businessId?: number;
  sendMessageTitle?: string;
  sendMessagePath?: string;
  sendMessageImg?: string;
  showMessageCard?: boolean;
  onClick?: (event: ITouchEvent) => any;
  onGetUserInfo?: CommonEventFunction<OnGetUserInfoEventDetail>;
  onContact?: CommonEventFunction<OnContactEventDetail>;
  onGetPhoneNumber?: CommonEventFunction<OnGetPhoneNumberEventDetail>;
  onOpenSetting?: CommonEventFunction<OnOpenSettingEventDetail>;
  onError?: CommonEventFunction;
  children?: any;
}

export default function QMButton(props: IButtonProps) {
  const { bem } = useBem(cn);

  const {
    type,
    icon,
    color,
    size,
    block,
    round,
    plain,
    square,
    loading,
    disabled,
    hairline,
    lang,
    openType,
    appParameter,
    sessionForm,
    loadingText,
    loadingSize,
    loadingType,
    sendMessageTitle,
    sendMessagePath,
    sendMessageImg,
    showMessageCard,
    customStyle,
    onClick,
    onGetUserInfo,
    onContact,
    onGetPhoneNumber,
    onError,
    onOpenSetting,
    children
  } = props;

  const [state, setState] = useState({
    style: ""
  });

  useEffect(() => {
    let style = "";
    if (color) {
      style += `color: ${props.plain ? color : "white"};`;
      if (!props.plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style += `background: ${color};`;
      }
      // hide border when color is linear-gradient
      if (color.indexOf("gradient") !== -1) {
        style += "border: 0;";
      } else {
        style += `border-color: ${color};`;
      }
    }
    if (style !== state.style) {
      setState({
        style
      });
    }
  }, [color]);

  return (
    <Button
      className={`custom-class ${bem("button", [
        type,
        size,
        {
          block,
          round,
          plain,
          square,
          loading,
          disabled,
          hairline,
          unclickable: disabled || loading
        }
      ])} ${hairline ? cn.van_hairline__surround : ""}`}
      hoverClass={`${cn.van_button__active} hover-class`}
      lang={lang}
      style={`${state.style} ${customStyle}`}
      openType={openType}
      sessionFrom={sessionForm}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onClick={e => {
        if (!disabled && !loading) {
          onClick && onClick(e);
        }
      }}
      onGetUserInfo={onGetUserInfo}
      onContact={onContact}
      onGetPhoneNumber={onGetPhoneNumber}
      onOpenSetting={onOpenSetting}
      onError={onError}
    >
      {loading ? (
        <Loading
          custom-class={props["loading-class"]}
          size={loadingSize}
          type={loadingType}
          color={`${type === "default" ? "#c9c9c9" : "white"}`}
        >
          {loadingText ? (
            <View className={cn.van_button__loading_text}>{loadingText}</View>
          ) : null}
        </Loading>
      ) : (
        <Block>
          {icon ? (
            <QMIcon
              size="1.2em"
              name={icon}
              customStyle="line-height: inherit;"
            />
          ) : null}
          <View className={cn.van_button__text}>{children}</View>
        </Block>
      )}
    </Button>
  );
}

QMButton.defaultProps = {
  type: "default",
  size: "normal",
  lang: "en",
  plain: false,
  block: false,
  round: false,
  square: false,
  disabled: false,
  hairline: false,
  loading: false,
  loadingType: "circular",
  loadingSize: "20px",
  customStyle: "",
  onClick: () => {}
};

QMButton.externalClasses = ["hover-class", "custom-class", "loading-class"];
