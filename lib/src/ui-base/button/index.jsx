"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const index_module_less_1 = require("./index.module.less");
const useBem_1 = require("ui-base/hooks/useBem");
const taro_1 = require("@tarojs/taro");
const loading_1 = require("../loading");
const icon_1 = require("ui-base/icon");
function QMButton(props) {
    const { bem } = useBem_1.default(index_module_less_1.default);
    const { type, icon, color, size, block, round, plain, square, loading, disabled, hairline, lang, openType, appParameter, sessionForm, loadingText, loadingSize, loadingType, sendMessageTitle, sendMessagePath, sendMessageImg, showMessageCard, customStyle, onClick, onGetUserInfo, onContact, onGetPhoneNumber, onError, onOpenSetting, children } = props;
    const [state, setState] = taro_1.useState({
        style: ""
    });
    taro_1.useEffect(() => {
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
            }
            else {
                style += `border-color: ${color};`;
            }
        }
        if (style !== state.style) {
            setState({
                style
            });
        }
    }, [color]);
    return (<components_1.Button className={`custom-class ${bem("button", [
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
    ])} ${hairline ? index_module_less_1.default.van_hairline__surround : ""}`} hoverClass={`${index_module_less_1.default.van_button__active} hover-class`} lang={lang} style={`${state.style} ${customStyle}`} openType={openType} sessionFrom={sessionForm} sendMessageTitle={sendMessageTitle} sendMessagePath={sendMessagePath} sendMessageImg={sendMessageImg} showMessageCard={showMessageCard} appParameter={appParameter} onClick={e => {
        if (!disabled && !loading) {
            onClick && onClick(e);
        }
    }} onGetUserInfo={onGetUserInfo} onContact={onContact} onGetPhoneNumber={onGetPhoneNumber} onOpenSetting={onOpenSetting} onError={onError}>
      {loading ? (<loading_1.default custom-class={props["loading-class"]} size={loadingSize} type={loadingType} color={`${type === "default" ? "#c9c9c9" : "white"}`}>
          {loadingText ? (<components_1.View className={index_module_less_1.default.van_button__loading_text}>{loadingText}</components_1.View>) : null}
        </loading_1.default>) : (<components_1.Block>
          {icon ? (<icon_1.default size="1.2em" name={icon} customStyle="line-height: inherit;"/>) : null}
          <components_1.View className={index_module_less_1.default.van_button__text}>{children}</components_1.View>
        </components_1.Block>)}
    </components_1.Button>);
}
exports.default = QMButton;
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
    onClick: () => { }
};
QMButton.externalClasses = ["hover-class", "custom-class", "loading-class"];
//# sourceMappingURL=index.jsx.map