import { View, Button } from "@tarojs/components";

import Component from "./component";
import useAuth from "hooks/useAuth";

const MenuEdit = () => {
  const permission = useAuth();
  console.log("permission...", permission);
  return (
    <View>
      <Component
        onClick={e => {
          console.log("e..", e);
        }}
      />
      {permission ? <Button>编辑</Button> : null}
    </View>
  );
};

export default MenuEdit;
