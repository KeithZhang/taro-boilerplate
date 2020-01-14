import Taro, { NodesRef } from "@tarojs/taro";

export default function useRect() {
  const getRect = (selector, inNode, all?) => {
    return new Promise<NodesRef.BoundingClientRectCallbackResult>(resolve => {
      Taro.createSelectorQuery()
        .in(inNode)
        [all ? "selectAll" : "select"](selector)
        .boundingClientRect(rect => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        })
        .exec();
    });
  };

  return {
    getRect
  };
}
