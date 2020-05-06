const MIN_DISTANCE = 10;
import { useState } from "@tarojs/taro";

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }

  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }

  return "";
}



const useTouch = () => {
  const [touchData, setTouchData] = useState({
    direction : "",
    deltaX : 0,
    deltaY : 0,
    offsetX : 0,
    offsetY : 0,
  })
  const [startData, setStartData] = useState({
    startX : 0,
    startY : 0
  })
  // let direction = "",
  //   deltaX = 0,
  //   deltaY = 0,
  //   offsetX = 0,
  //   offsetY = 0,
  //   startX = 0,
  //   startY = 0;

  const resetTouchStatus = () => {
    setTouchData({
      direction : "",
      deltaX : 0,
      deltaY : 0,
      offsetX : 0,
      offsetY : 0,
    })
  };

  const touchStart = (event: TouchEvent) => {
    resetTouchStatus();
    const touch = event.touches[0];
    // startX = touch.clientX;
    // startY = touch.clientY;

    setStartData({
      startX: touch.clientX,
      startY: touch.clientY
    })
  };

  const touchMove = (event: TouchEvent) => {
    const touch = event.touches[0];
    let deltaX = touch.clientX - startData.startX;
    let deltaY = touch.clientY - startData.startY;
    let offsetX = Math.abs(deltaX);
    let offsetY = Math.abs(deltaY);
    let direction = touchData.direction || getDirection(offsetX, offsetY);
    setTouchData({
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction
    })
  };

  return {
    direction: touchData.direction,
    deltaX: touchData.deltaX,
    deltaY: touchData.deltaY,
    offsetX: touchData.offsetX,
    offsetY: touchData.offsetY,
    touchStart,
    touchMove
  }
};

export default useTouch;
