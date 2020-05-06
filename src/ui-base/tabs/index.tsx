import { View, ScrollView } from "@tarojs/components";
import useBem from "../hooks/useBem";

import Sticky from "../sticky";
import Info from "../info";

import "./index.less";
import { useState, useEffect, useScope } from "@tarojs/taro";
import useRect from "../hooks/useRect";
import { addUnit } from "ui-base/util";
import useTouch from "../hooks/useTouch";

interface ITabsProps {
  active?: string | number;
  color?: string;
  zIndex?: number;
  type?: "line" | "card";
  border?: boolean;
  duration?: number;
  lineWidth?: string | number;
  lineHeight?: string | number;
  swipeThreshold?: number;
  animated?: boolean;
  ellipsis?: boolean;
  sticky?: boolean;
  swipeable?: boolean;
  offsetTop?: number;
  renderNavLeft?: any;
  renderNavRight?: any;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  children?: any;
  onDisabled?: ({
    name,
    title
  }: {
    name: string | number;
    title: string;
  }) => void;
  onClick?: ({ name, title }: { name: string | number; title: string }) => void;
  onChange?: ({
    name,
    title
  }: {
    name: string | number;
    title: string;
  }) => void;
  onScroll?: ({
    name,
    title
  }: {
    name: string | number;
    title: string;
  }) => void;
  tabs?: Array<{
    name: string | number;
    title: string;
    disabled?: boolean;
    dot?: boolean;
    info?: string | number;
    titleStyle?: string;
    "custom-class"?: any;
  }>;
}

export default function Tabs(props: ITabsProps) {
  const {
    active,
    type = "line",
    sticky,
    zIndex,
    border,
    color = "#ee0a24",
    tabs = [],
    animated,
    lineWidth = -1,
    lineHeight = -1,
    duration,
    offsetTop = 0,
    ellipsis = true,
    swipeable = false,
    swipeThreshold = 4,
    renderNavLeft,
    renderNavRight,
    titleActiveColor,
    titleInactiveColor,
    onDisabled,
    onClick,
    onScroll,
    onChange
  } = props;

  const { bem } = useBem();

  const scope = useScope();

  const container = () => {
    return Taro.createSelectorQuery().select(".van-tabs");
  };

  const [scrollable, setScrollable] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lineStyle, setLineStyle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null as any);
  const [trackStyle, setTrackStyle] = useState("");

  const onTouchScroll = e => {
    onScroll && onScroll(e.detail);
  };

  const { direction, deltaX, offsetX, touchStart, touchMove } = useTouch();

  const onTouchStart = e => {
    if (!swipeable) return;
    console.log('onTouchStart...', e)
    touchStart(e);
  };

  const onTouchMove = e => {
    if (!swipeable) return;
    console.log('onTouchMove...', e)
    touchMove(e);
  };

  const onTouchEnd = (e) => {
    if (!swipeable) return;
    console.log('onTouchEnd...', e)

    const minSwipeDistance = 50;
    console.log('direction... ', direction)
    console.log('deltaX... ', deltaX)
    console.log('offsetX... ', offsetX)

    if (direction === "horizontal" && offsetX >= minSwipeDistance) {
      if (deltaX > 0 && currentIndex !== 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  function tabClass(active, ellipsis) {
    var classes = ["tab-class"];

    if (active) {
      classes.push("tab-active-class");
    }

    if (ellipsis) {
      classes.push("van-ellipsis");
    }

    return classes.join(" ");
  }

  function tabStyle(
    active: boolean,
    ellipsis: boolean,
    color: string,
    type: "line" | "card",
    disabled: boolean,
    activeColor: string,
    inactiveColor: string,
    swipeThreshold: number,
    scrollable: boolean
  ) {
    let styles: Array<string> = [];
    let isCard = type === "card";
    // card theme color
    if (color && isCard) {
      styles.push("border-color:" + color);

      if (!disabled) {
        if (active) {
          styles.push("background-color:" + color);
        } else {
          styles.push("color:" + color);
        }
      }
    }

    let titleColor = active ? activeColor : inactiveColor;
    if (titleColor) {
      styles.push("color:" + titleColor);
    }

    if (scrollable && ellipsis) {
      styles.push("flex-basis:" + 88 / swipeThreshold + "%");
    }

    return styles.join(";");
  }

  const onTabClick = item => {
    const { name, title } = item;
    if (item.disabled) {
      onDisabled &&
        onDisabled({
          name,
          title
        });
    } else {
      onClick &&
        onClick({
          name,
          title
        });
    }
  };

  const { getRect } = useRect();
  const [firstRender, setFirstRender] =  useState(true);
  const setLine = () => {
    console.log("setLine...", type);


    if (type !== "line") {
      return;
    }

    getRect(".van-tab", scope, true).then((rects: any) => {
      console.log("currentIndex...", currentIndex);
      const rect = rects[currentIndex];
      console.log("rect...", rect);
      if (rect == null) {
        return;
      }
      const width: any = lineWidth !== -1 ? lineWidth : rect.width / 2;
      const height =
        lineHeight !== -1
          ? `height: ${addUnit(lineHeight)}; border-radius: ${addUnit(
              lineHeight
            )};`
          : "";

      let left = rects
        .slice(0, currentIndex)
        .reduce((prev, curr) => prev + curr.width, 0);

      left += (rect.width - width) / 2;

      const transition = firstRender
        ? ""
        : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`;

      const tempLineStyle = `
      ${height}
      width: ${addUnit(width)};
      background-color: ${color};
      -webkit-transform: translateX(${left}px);
      transform: translateX(${left}px);
      ${transition}
    `
    console.log('tempLineStyle....', tempLineStyle)
    setLineStyle(tempLineStyle);
    if (firstRender) {
      setFirstRender(false);
    }
    });

  };

  const setTrack = () => {
    if (!animated) {
      return;
    }

    setTrackStyle(`
        transform: translate3d(${-100 * currentIndex}%, 0, 0);
        -webkit-transition-duration: ${duration}s;
        transition-duration: ${duration}s;
      `);
  };

  const scrollIntoView = () => {
    if (!scrollable) {
      return;
    }

    Promise.all([
      getRect(".van-tab", scope, true),
      getRect(".van-tabs__nav", scope)
    ]).then(([tabRects, navRect]: any) => {
      const tabRect = tabRects[currentIndex];
      const offsetLeft = tabRects
        .slice(0, currentIndex)
        .reduce((prev, curr) => prev + curr.width, 0);

      setScrollLeft(offsetLeft - (navRect.width - tabRect.width) / 2);
    });
  };

  useEffect(() => {
    tabs.forEach((v, i) => {
      if (v.name === active) {
        setCurrentIndex(i);
      }
    });
  }, [active]);

  useEffect(() => {
    scrollIntoView();

    if (
      currentIndex == undefined ||
      currentIndex == null ||
      currentIndex >= tabs.length ||
      currentIndex < 0
    ) {
      return;
    }

    onChange && onChange(tabs[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    setLine();
  }, [currentIndex, color, lineWidth, lineHeight]);

  useEffect(() => {
    setTrack();
  }, [animated, duration, currentIndex]);

  useEffect(() => {
    setScrollable(tabs.length > swipeThreshold || !ellipsis);
  }, [tabs, swipeThreshold, ellipsis]);

  return (
    <View className={`custom-class ${bem("tabs", [type])}`}>
      <Sticky
        disabled={!sticky}
        zIndex={zIndex}
        offsetTop={offsetTop}
        container={container}
        onScroll={onTouchScroll}
      >
        <View
          className={`${bem("tabs__wrap", { scrollable })}  ${
            type === "line" && border ? "van-hairline--top-bottom" : ""
          }`}
        >
          {renderNavLeft()}

          <ScrollView
            scrollX={scrollable}
            scrollWithAnimation
            scrollLeft={scrollLeft}
            className={bem("tabs__scroll", [type])}
            style={color ? "border-color: " + color : ""}
          >
            <View className={`${bem("tabs__nav", [type])} nav-class`}>
              {type === "line" ? (
                <View className="van-tabs__line" style={lineStyle} />
              ) : null}

              {tabs.map((item, i) => (
                <View
                  key={item.name + "_" + i}
                  data-index={i}
                  className={`${tabClass(item.name === active, ellipsis)} ${bem(
                    "tab",
                    {
                      active: item.name === active,
                      disabled: item.disabled,
                      complete: !ellipsis
                    }
                  )}`}
                  style={tabStyle(
                    item.name === active,
                    ellipsis,
                    color,
                    type,
                    item.disabled || false,
                    titleActiveColor || "",
                    titleInactiveColor || "",
                    swipeThreshold,
                    scrollable
                  )}
                  onClick={() => {
                    onTabClick(item);
                  }}
                >
                  <View
                    className={ellipsis ? "van-ellipsis" : ""}
                    style={item.titleStyle}
                  >
                    {item.title}
                    {item.info !== null || item.dot ? (
                      <Info
                        info={item.info}
                        dot={item.dot}
                        custom-class="van-tab__title__info"
                      />
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

          {renderNavRight()}
        </View>
      </Sticky>

      <View
        className="van-tabs__content"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <View
          className={`van-tabs__track ${bem("tabs__track", [{ animated }])}`}
          style={trackStyle}
        >
          {props.children}
        </View>
      </View>
    </View>
  );
}

Tabs.defaultProps = {
  active: 0,
  color: "#ee0a24",
  zIndex: 1,
  type: "line",
  border: true,
  duration: 0.3,
  lineHeight: "3px",
  swipeThreshold: 4,
  animated: false,
  ellipsis: true,
  sticky: false,
  swipeable: false,
  lazyRender: true,
  renderNavLeft: () => null,
  renderNavRight: () => null
};

Tabs.externalClasses = [
  "custom-class",
  "nav-class",
  "tab-class",
  "tab-active-class",
  "line-class"
];
