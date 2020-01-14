"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
const icon_1 = require("ui-base/icon");
const popup_1 = require("ui-base/popup");
const edit_module_less_1 = require("./edit.module.less");
const container_1 = require("../../modules/container");
const button_1 = require("ui-base/button");
function HomeEdit() {
    const [state, setState] = taro_1.useState({
        left: false,
        selectedModuleId: -1
    });
    const [moduleList, setModuleList] = taro_1.useState([]);
    console.log("moduleList...", moduleList);
    return (<components_1.View>
      <container_1.default moduleList={moduleList}/>

      <components_1.View className="hbox_center" onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { left: !state.left })));
    }}>
        <icon_1.default name="plus" size="50px" customStyle="box-shadow: 0 0 20px #3333; border-radius: 100%; margin-top: 20px;"/>
      </components_1.View>

      <components_1.View style="position: fixed; bottom: 0;width: 100%">
        <button_1.default size="large" type="primary">
          保存
        </button_1.default>
      </components_1.View>
      <popup_1.default show={state.left} customStyle={"width: 80%; height: 100%"} position="left" onClose={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { left: !state.left, selectedModuleId: -1 })));
    }}>
        <components_1.View className={`hbox_center ${edit_module_less_1.default.module}`} style={state.selectedModuleId == 1 ? "border: 1px solid red" : ""} onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { selectedModuleId: 1 })));
    }}>
          module--1
        </components_1.View>
        <components_1.View className={`hbox_center ${edit_module_less_1.default.module}`} style={state.selectedModuleId == 2 ? "border: 1px solid red" : ""} onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { selectedModuleId: 2 })));
    }}>
          module--2
        </components_1.View>
        <components_1.View className={`hbox_center ${edit_module_less_1.default.module}`} style={state.selectedModuleId == 3 ? "border: 1px solid red" : ""} onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { selectedModuleId: 3 })));
    }}>
          module--3
        </components_1.View>
        <components_1.View className={`hbox_center ${edit_module_less_1.default.module}`} style={state.selectedModuleId == 4 ? "border: 1px solid red" : ""} onClick={() => {
        setState(preState => (Object.assign(Object.assign({}, preState), { selectedModuleId: 4 })));
    }}>
          module--4
        </components_1.View>
        <components_1.Button onClick={() => {
        let newModuleList = moduleList.concat({
            id: state.selectedModuleId
        });
        console.log("newModuleList...", newModuleList);
        setModuleList(newModuleList);
        setState(preState => (Object.assign(Object.assign({}, preState), { left: !state.left, selectedModuleId: -1 })));
    }}>
          确定
        </components_1.Button>
      </popup_1.default>
    </components_1.View>);
}
exports.default = HomeEdit;
HomeEdit.config = {
    navigationBarTitleText: "首页"
};
HomeEdit.options = {
    addGlobalClass: true
};
//# sourceMappingURL=edit.jsx.map