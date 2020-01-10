import Header from "./header";
import Bottom from "./bottom";
import MenuEdit from "./menu/edit";
import { View } from "@tarojs/components";
export default function Container(props) {
  console.log("props...", props);
  return (
    props.moduleList &&
    props.moduleList.map((v, i) => {
      let result;
      switch (v.id) {
        case 1: {
          result = <Header />;
        }
        case 2: {
          result = <Bottom />;
        }
        case 3: {
          result = <MenuEdit />;
        }
      }

      return (
        <View
          key={v.id}
          onClick={() => {
            console.log("container...", i);
          }}
        >
          {result}
        </View>
      );
    })
  );
}
