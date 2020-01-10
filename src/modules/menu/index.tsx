import { View } from "@tarojs/components";

import cn from "./index.module.less";

interface IMenu {
  editing?: boolean;
  onClick: (data: any) => void;
  name?: string;
}

export default function Menu(props: IMenu) {
  console.log("editing...", props);
  return (
    <View
      className={`hbox flex1 ${cn.menu_container}`}
      onClick={e => {
        console.log("target...", e);
        props.editing ? props.onClick(e.target.dataset) : console.log("hello");
      }}
    >
      {props.name || "default menu"}
    </View>
  );
}

Menu.options = {
  addGlobalClass: true
};
