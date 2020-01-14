"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
const config_1 = require("./config");
const icon_1 = require("ui-base/icon");
const index_module_less_1 = require("./index.module.less");
function IconPage() {
    const [state, setState] = taro_1.useState({
        active: 0
    });
    const switchActive = index => {
        setState({
            active: index
        });
    };
    const currentType = ["basic", "outline", "filled", "case"];
    const icons = config_1.default[currentType[state.active]];
    return (<components_1.View className="vbox">
      <components_1.View className="hbox">
        <components_1.Button size="mini" style={state.active == 0 ? "background-color: #3d85cc" : ""} className={index_module_less_1.default.btn} onClick={() => {
        switchActive(0);
    }}>
          基础图标
        </components_1.Button>
        <components_1.Button size="mini" style={state.active == 1 ? "background-color: #3d85cc" : ""} className={index_module_less_1.default.btn} onClick={() => {
        switchActive(1);
    }}>
          线框风格
        </components_1.Button>
        <components_1.Button size="mini" style={state.active == 2 ? "background-color: #3d85cc" : ""} className={index_module_less_1.default.btn} onClick={() => {
        switchActive(2);
    }}>
          实地风格
        </components_1.Button>
        <components_1.Button size="mini" style={state.active == 3 ? "background-color: #3d85cc" : ""} className={index_module_less_1.default.btn} onClick={() => {
        switchActive(3);
    }}>
          用法示例
        </components_1.Button>
      </components_1.View>
      <components_1.View className="wbox_center">
        {icons &&
        icons.map((v, i) => (<components_1.View className={`vbox_center ${index_module_less_1.default.icon_container}`} key={v + i}>
              <icon_1.default name={v} size="32px" custom-class={index_module_less_1.default.icon}/>
              <components_1.View className="font_26">{v}</components_1.View>
            </components_1.View>))}
      </components_1.View>
      {state.active == 3 ? (<components_1.View className="wbox_center">
          <components_1.View className={`vbox_center ${index_module_less_1.default.icon_container}`}>
            <icon_1.default name="location_o" size="32px" dot custom-class={index_module_less_1.default.icon}/>
            <components_1.View className={`font_26 ${index_module_less_1.default.text}`}>location_o</components_1.View>
          </components_1.View>
          <components_1.View className={`vbox_center ${index_module_less_1.default.icon_container}`}>
            <icon_1.default name="location_o" size="32px" custom-class={index_module_less_1.default.icon} info="99+"/>
            <components_1.View className={`font_26 ${index_module_less_1.default.text}`}>location_o</components_1.View>
          </components_1.View>
        </components_1.View>) : null}
    </components_1.View>);
}
exports.default = IconPage;
IconPage.options = {
    addGlobalClass: true
};
//# sourceMappingURL=index.jsx.map