import { Button, View } from "@tarojs/components";
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
import { useState } from "@tarojs/taro";

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
}

export default function QMButton(props: IButtonProps) {
  const { bem } = useBem(cn);

  const {
    type,
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
    onOpenSetting
  } = props;

  const [style, setStyle] = useState("");

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
      style={`${style} ${customStyle}`}
      openType={openType}
      sessionFrom={sessionForm}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onClick={onClick}
      onGetUserInfo={onGetUserInfo}
      onContact={onContact}
      onGetPhoneNumber={onGetPhoneNumber}
      onOpenSetting={onOpenSetting}
      onError={onError}
    ></Button>
  );
}

QMButton.defaultProps = {
  type: "default",
  size: "normal",
  plain: false,
  block: false,
  round: false,
  square: false,
  disabled: false,
  hairline: false,
  loading: false,
  loadingType: "circular",
  loadingSize: "20px"
};

QMButton.externalClasses = ["hover-class", "custom-class", "loading-class"];
