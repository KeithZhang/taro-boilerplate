"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const _1 = require(".");
const edit_module_less_1 = require("./edit.module.less");
function MenuEdit(props) {
    return (<components_1.View>
      <_1.default name={props.name} editing={true} onClick={e => {
        console.log("MenuEdit..", e);
    }}/>
      <components_1.View className={`hbox_center ${edit_module_less_1.default.edit_container}`} onClick={() => {
        Taro.navigateTo({
            url: "pages/menu-item/edit"
        });
    }}>
        ...
      </components_1.View>
    </components_1.View>);
}
exports.default = MenuEdit;
MenuEdit.options = {
    addGlobalClass: true
};
//# sourceMappingURL=edit.jsx.map