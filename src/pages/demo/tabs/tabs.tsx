import { View, Text, Block } from "@tarojs/components";

import {
  useRef,
  useEffect,
  useCallback,
  useState,
  useScope,
  createContext
} from "@tarojs/taro";

function Tabs(props) {
  console.log("Tabs props...", props);
  const [active, setActive] = useState(-1);

  const [temp, setTemp] = useState(-1)

  useEffect(() => {

    setTemp(Date.now())
    console.log('useEffect1 active...', active)
    console.log('useEffect1 temp...', temp)
  }, [props.a])

  useEffect(() => {
    setActive(temp)
    console.log('useEffect2 active...', active)
    console.log('useEffect2 temp...', temp)
  }, [temp])

  console.log('Tabs active...', active)
  console.log('Tabs temp...', temp)

  return (
    <View>
      {props.tabItems &&
        props.tabItems.map((v, i) => (
          <View
            className="hbox"
            key={v.title + i}
            onClick={() => {
              setActive(Math.random());
            }}
          >
            <Text>{v.title}</Text>
          </View>
        ))}
    </View>
  );
}

Tabs.options = {
  addGlobalClass: true
};

export default Taro.memo(Tabs);
