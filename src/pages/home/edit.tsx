import { View, Button } from "@tarojs/components";
import { Config, ComponentOptions, useState } from "@tarojs/taro";
import useAuth from "hooks/useAuth";

import QMIcon from "ui-base/icon";
import Popup from "ui-base/popup";

import cn from "./edit.module.less";

import Header from "../../modules/header";
import Bottom from "../../modules/bottom";
import Container from "../../modules/container";
import QMButton from "ui-base/button";

export default function HomeEdit() {
  const [state, setState] = useState({
    left: false,
    selectedModuleId: -1
  });

  const [moduleList, setModuleList] = useState([] as any);

  console.log("moduleList...", moduleList);

  return (
    <View>
      <Container moduleList={moduleList} />

      <View
        className="hbox_center"
        onClick={() => {
          setState(preState => ({ ...preState, left: !state.left }));
        }}
      >
        <QMIcon
          name="plus"
          size="50px"
          customStyle="box-shadow: 0 0 20px #3333; border-radius: 100%; margin-top: 20px;"
        />
      </View>

      <View style="position: fixed; bottom: 0;width: 100%">
        <QMButton size="large" type="primary">
          保存
        </QMButton>
      </View>
      <Popup
        show={state.left}
        customStyle={"width: 80%; height: 100%"}
        position="left"
        onClose={() => {
          setState(preState => ({
            ...preState,
            left: !state.left,
            selectedModuleId: -1
          }));
        }}
      >
        <View
          className={`hbox_center ${cn.module}`}
          style={state.selectedModuleId == 1 ? "border: 1px solid red" : ""}
          onClick={() => {
            setState(preState => ({ ...preState, selectedModuleId: 1 }));
          }}
        >
          module--1
        </View>
        <View
          className={`hbox_center ${cn.module}`}
          style={state.selectedModuleId == 2 ? "border: 1px solid red" : ""}
          onClick={() => {
            setState(preState => ({ ...preState, selectedModuleId: 2 }));
          }}
        >
          module--2
        </View>
        <View
          className={`hbox_center ${cn.module}`}
          style={state.selectedModuleId == 3 ? "border: 1px solid red" : ""}
          onClick={() => {
            setState(preState => ({ ...preState, selectedModuleId: 3 }));
          }}
        >
          module--3
        </View>
        <View
          className={`hbox_center ${cn.module}`}
          style={state.selectedModuleId == 4 ? "border: 1px solid red" : ""}
          onClick={() => {
            setState(preState => ({ ...preState, selectedModuleId: 4 }));
          }}
        >
          module--4
        </View>
        <Button
          onClick={() => {
            let newModuleList = moduleList.concat({
              id: state.selectedModuleId
            });
            console.log("newModuleList...", newModuleList);
            setModuleList(newModuleList);
            setState(preState => ({
              ...preState,
              left: !state.left,
              selectedModuleId: -1
            }));
          }}
        >
          确定
        </Button>
      </Popup>
    </View>
  );
}

HomeEdit.config = {
  navigationBarTitleText: "首页"
} as Config;

HomeEdit.options = {
  addGlobalClass: true
} as ComponentOptions;
