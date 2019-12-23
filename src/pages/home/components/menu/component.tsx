import { View, Button } from "@tarojs/components";

interface IMenu {
  onClick: () => void;
}

const Menu = (props: IMenu) => {
  return (
    <View
      onClick={e => {
        console.log("e...", e);
      }}
    >
      <Button id="menu1">菜单一</Button>
      <Button>菜单二</Button>
    </View>
  );
};

export default Menu;
