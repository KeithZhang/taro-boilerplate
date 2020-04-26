import { View, ScrollView } from "@tarojs/components";
import useBem from "../hooks/useBem";

import Sticky from "../sticky";
import Info from "../info";

import cn from "./index.module.less";
import { useState } from "@tarojs/taro";
import useRect from "../hooks/useRect";

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
  lazyRender?: boolean;
  tabs?: Array<{
    name?: string | number;
    title?: string;
    disabled?: boolean;
    dot?: boolean;
    info?: string | number;
    titleStyle?: string;
    "custom-class"?: any;
  }>;
  renderNavLeft?: any;
  renderNavRight?: any;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  onDisabled?: ({
    index,
    name,
    title
  }: {
    index: string | number;
    name: string | number;
    title: string;
  }) => void;
  onClick?: ({
    index,
    name,
    title
  }: {
    index: string | number;
    name: string | number;
    title: string;
  }) => void;
  onChange?: ({
    index,
    name,
    title
  }: {
    index: string | number;
    name: string | number;
    title: string;
  }) => void;
  onScroll?: ({
    index,
    name,
    title
  }: {
    index: string | number;
    name: string | number;
    title: string;
  }) => void;
}

export default function Tabs(props: ITabsProps) {
  const {
    type = "line",
    sticky,
    zIndex,
    border,
    color = "#ee0a24",
    tabs,
    ellipsis = true,
    swipeThreshold = 4,
    renderNavLeft,
    renderNavRight,
    titleActiveColor,
    titleInactiveColor,
    onDisabled,
    onClick
  } = props;
  const { bem } = useBem(cn);
  const container = () => {
    return Taro.createSelectorQuery().select("#tabs");
  };

  const [scrollable, setScrollable] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lineStyle, setLineStyle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const onScroll = () => {};

  function tabClass(active, ellipsis) {
    var classes = ["tab-class"];

    if (active) {
      classes.push("tab-active-class");
    }

    if (ellipsis) {
      classes.push(cn.van_ellipsis);
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
    if (item.disabled) {
      onDisabled &&
        onDisabled({
          index: 0,
          name: "",
          title: ""
        });
    } else {
      onClick &&
        onClick({
          index: 0,
          name: "",
          title: ""
        });
    }
  };

  const { getAllRect } = useRect();
  const setLine = (skipTransition?: boolean) => {
    if (this.data.type !== "line") {
      return;
    }

    const { color, duration, currentIndex, lineWidth, lineHeight } = this.data;

    getAllRect(".van-tab", this.$scope).then(rects => {
      const rect = rects[currentIndex];
      if (rect == null) {
        return;
      }
      const width = lineWidth !== -1 ? lineWidth : rect.width / 2;
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

      const transition = skipTransition
        ? ""
        : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`;

      this.setData({
        lineStyle: `
          ${height}
          width: ${addUnit(width)};
          background-color: ${color};
          -webkit-transform: translateX(${left}px);
          transform: translateX(${left}px);
          ${transition}
        `
      });
    });
  };

  return (
    <View id="tabs" className={`custom-class ${bem("tabs", [type])}`}>
      <Sticky
        disabled={sticky}
        zIndex={zIndex}
        container={container}
        onScroll={onScroll}
      >
        <View
          className={`${bem("tabs__wrap", { scrollable })}  ${
            type === "line" && border ? cn.van_hairline__top_bottom : ""
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
            {type === "line" ? (
              <View className={cn.van_tabs__line} style={lineStyle} />
            ) : null}

            {tabs?.map((item, i) => (
              <View
                key={item.name + "_" + i}
                data-index={i}
                className={`${tabClass(i === currentIndex, ellipsis)} ${bem(
                  "tab",
                  {
                    active: i === currentIndex,
                    disabled: item.disabled,
                    complete: !ellipsis
                  }
                )}`}
                style={tabStyle(
                  i === currentIndex,
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
                  className={ellipsis ? cn.van_ellipsis : ""}
                  style={item.titleStyle}
                >
                  {item.title}
                  {item.info !== null || item.dot ? (
                    <Info
                      info={item.info}
                      dot={item.dot}
                      custom-class={cn.van_tab__title__info}
                    />
                  ) : null}
                </View>
              </View>
            ))}
          </ScrollView>

          {renderNavRight()}
        </View>
      </Sticky>
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
  "tab-active-class"
];
