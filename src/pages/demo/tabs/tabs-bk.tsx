import { View, Text, Block } from "@tarojs/components";

import { contextFactory } from "./context";
import {
  useRef,
  useEffect,
  useCallback,
  useState,
  useScope,
  createContext
} from "@tarojs/taro";

// function useClientRect() {
//   const [node, setNode] = useState(null);

//   const ref = useCallback(node => {
//     if (node !== null) {
//       node
//         .boundingClientRect(rects => {
//           console.log("Tabs rects1...", rects);
//         })
//         .selectAll("#item")
//         .boundingClientRect(rects => {
//           console.log("rects2...", rects);
//         })
//         .exec();
//       setNode(node);
//     }
//   }, []);
//   return [node, ref];
// }

export default function TabsBk(props) {
  console.log("Tabs props...", props);
  // const [tabs, setTabs] = useState([]);
  // const addItem = item => {
  //   setTabs(tabs.concat(item));
  // };

  // const TabsContext = contextFactory(props.dataId);

  return (
      <View className="hbox">
        {tabs.map(v => (
          <Text key={v}> {v}</Text>
        ))}
        {props.children}
      </View>
  );
}

// <TabsContext.Provider value={{ tabs, addItem }}>
// </TabsContext.Provider>
TabsBk.options = {
  addGlobalClass: true
};
