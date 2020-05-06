import Taro from "@tarojs/taro";

// export const TabsContext = createContext(null as any);


const cachedMap = {};

export const contextFactory = (id: string) => {
  if (!cachedMap[id]) {
    const TabsContext = Taro.createContext({});
    cachedMap[id] = TabsContext;
  }
  return cachedMap[id];
}

// const c10 = contextFatory("10")
// const c10_2 = contextFatory("10")
// const c20 = contextFatory("20")
// console.log('c10 == c20 ....', c10 == c20)
// console.log('c10 == c10_2 ....', c10 == c10_2)

