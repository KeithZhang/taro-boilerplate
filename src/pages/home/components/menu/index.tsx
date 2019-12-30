import { View, Button } from "@tarojs/components";

import cn from "./index.module.less";

interface IMenu {
  editing?: boolean;
  onClick: (data: any) => void;
}

export default function Menu(props: IMenu) {
  const dataList = [
    {
      name: "1",
      type: "1"
    },
    {
      name: "2",
      type: "2"
    },
    {
      name: "3",
      type: "3"
    },
    {
      name: "4",
      type: "4"
    }
  ];

  console.log("editing...", props);
  return (
    <View
      className={`hbox flex1 ${cn.menu_container}`}
      onClick={e => {
        console.log("target...", e);
        props.editing ? props.onClick(e.target.dataset) : console.log("hello");
      }}
    >
      {dataList.map(item => (
        <Button data-menu={item} key={item.name}>
          {item.name}
        </Button>
      ))}
    </View>
  );
}

Menu.options = {
  addGlobalClass: true
};
