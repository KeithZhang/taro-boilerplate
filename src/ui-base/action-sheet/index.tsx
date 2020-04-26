import { View, Text } from "@tarojs/components";
import Popup from "../popup";
import QMButton from "../button";

import cn from "./index.module.less";
import useBem from "../hooks/useBem";

interface IActionProps {
  name: string;
  subName?: string;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
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
  openTypeContract?: {
    sessionFrom?: string;
    sendMessageTitle?: string;
    sendMessagePath?: string;
    sendMessageImg?: string;
    showMessageCard?: true;
    appParameter?: string;
  };
}

interface IActionSheetProps {
  show: boolean;
  cancelText: boolean;
  onSelectClose: boolean;
  actions: Array<IActionProps>;
  onClose: () => void;
  onSelect: (action: IActionProps) => void;
}

export default function ActionSheet(props: IActionSheetProps) {
  const { bem } = useBem(cn);
  const { show, cancelText, actions, onClose, onSelectClose, onSelect } = props;

  //
  return (
    <Popup custom-class={`${bem("action-sheet")}`} show={show} position="bottom" onClose={onClose}>
      {/*  */}
      {actions.map((action) => {
        const { openTypeContract, disabled, color } = action;
        return (
          <QMButton
            custom-class={`${bem("action-sheet__item", { disabled })}`}
            openType={action.openType}
            {...openTypeContract}
            onClick={() => {
              onSelect(action);
              onSelectClose && onClose();
            }}>
            <Text style={{ color }}>{action.name}</Text>
            {action.subName && <Text className={`${bem("action-sheet__subname")}`}>{action.subName}</Text>}
          </QMButton>
        );
      })}
      {/*  */}
      {cancelText && <View className={`${bem("action-sheet_dividar")}`} />}
      {cancelText && (
        <QMButton custom-class={`${bem("action-sheet__cancel")}`} onClick={onClose}>
          取消
        </QMButton>
      )}
    </Popup>
  );
}

ActionSheet.defaultProps = {
  show: false,
  onSelectClose: true,
  cancelText: true,
  actions: []
};

ActionSheet.externalClasses = ["custom-class"];
