import { View, Button } from "@tarojs/components";

import Layout from ".";
import { ComponentOptions } from "@tarojs/taro";
import cn from "./edit.module.less";

export default function MenuEdit() {
  return (
    <View>
      <Layout
        editing={true}
        onClick={e => {
          console.log("MenuEdit..", e);
        }}
      />
      <View
        className={`hbox_center ${cn.edit_container}`}
        onClick={() => {
          Taro.navigateTo({
            url: "pages/menu-item/edit"
          });
        }}
      >
        ...
      </View>
    </View>
  );
}

MenuEdit.options = {
  addGlobalClass: true
} as ComponentOptions;
