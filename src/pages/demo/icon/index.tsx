import { View, Button } from "@tarojs/components";
import { useState, ComponentOptions } from "@tarojs/taro";

import configData from "./config";
import QMIcon from "ui-base/icon";

import cn from "./index.module.less";
export default function IconPage() {
  const [state, setState] = useState({
    active: 0
  });

  const switchActive = index => {
    setState({
      active: index
    });
  };

  const currentType = ["basic", "outline", "filled", "case"];
  const icons = configData[currentType[state.active]];

  return (
    <View className="vbox">
      <View className="hbox">
        <Button
          size="mini"
          style={state.active == 0 ? "background-color: #3d85cc" : ""}
          className={cn.btn}
          onClick={() => {
            switchActive(0);
          }}
        >
          基础图标
        </Button>
        <Button
          size="mini"
          style={state.active == 1 ? "background-color: #3d85cc" : ""}
          className={cn.btn}
          onClick={() => {
            switchActive(1);
          }}
        >
          线框风格
        </Button>
        <Button
          size="mini"
          style={state.active == 2 ? "background-color: #3d85cc" : ""}
          className={cn.btn}
          onClick={() => {
            switchActive(2);
          }}
        >
          实地风格
        </Button>
        <Button
          size="mini"
          style={state.active == 3 ? "background-color: #3d85cc" : ""}
          className={cn.btn}
          onClick={() => {
            switchActive(3);
          }}
        >
          用法示例
        </Button>
      </View>
      <View className="wbox_center">
        {icons &&
          icons.map((v, i) => (
            <View className={`vbox_center ${cn.icon_container}`} key={v + i}>
              <QMIcon name={v} size="32px" custom-class={cn.icon} />
              <View className="font_26">{v}</View>
            </View>
          ))}
      </View>
      {state.active == 3 ? (
        <View className="wbox_center">
          <View className={`vbox_center ${cn.icon_container}`}>
            <QMIcon name="location_o" size="32px" dot custom-class={cn.icon} />
            <View className={`font_26 ${cn.text}`}>location_o</View>
          </View>
          <View className={`vbox_center ${cn.icon_container}`}>
            <QMIcon
              name="location_o"
              size="32px"
              custom-class={cn.icon}
              info="99+"
            />
            <View className={`font_26 ${cn.text}`}>location_o</View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

IconPage.options = {
  addGlobalClass: true
} as ComponentOptions;
