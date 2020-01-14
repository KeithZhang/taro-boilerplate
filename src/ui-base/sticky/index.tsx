import { View } from "@tarojs/components";
import useBem from "../hooks/useBem";

import cn from "./index.module.less";
import { NodesRef, useState, useEffect, useCallback } from "@tarojs/taro";
import useRect from "ui-base/hooks/useRect";

interface IStickyProps {
  disabled?: boolean;
  offsetTop?: number;
  zIndex?: number;
  container?: () => NodesRef;
  children?: any;
  onScroll?: ({ scrollTop: number, isFixed: boolean }) => void;
}

const ROOT_ELEMENT = "#van_sticky";

export default function Sticky(props: IStickyProps) {
  const { bem } = useBem(cn);
  const { getRect } = useRect();

  const [fixed, setFixed] = useState(false);
  const [state, setState] = useState({
    containerStyle: "",
    wrapStyle: ""
  });

  const setStyle = fixed => {
    const { offsetTop, zIndex } = props;
    const { height } = this;
    console.log("setStyle...");
    console.log("fixed...", fixed);
    console.log("offsetTop...", offsetTop);
    console.log("zIndex...", zIndex);
    console.log("height...", height);

    if (fixed) {
      setState(preState => ({
        ...preState,
        wrapStyle: `top: ${offsetTop}px;`,
        containerStyle: `height: ${height}px; z-index: ${zIndex};`
      }));
    } else {
      setState(preState => ({
        ...preState,
        wrapStyle: "",
        containerStyle: ""
      }));
    }
  };

  const changeFixed = (type, top) => {
    console.log("setFixed...", type);

    const { offsetTop = 0, onScroll } = props;
    const { containerHeight, height } = this;
    const fixed =
      containerHeight && height
        ? top > height - containerHeight && top < offsetTop
        : top < offsetTop;

    console.log("top...", top);
    console.log("height...", height);
    console.log("offsetTop...", offsetTop);
    console.log("containerHeight...", containerHeight);
    console.log("fixed...", fixed);

    onScroll &&
      onScroll({
        scrollTop: top,
        isFixed: fixed
      });

    setFixed(fixed);

    Taro.nextTick(() => {
      setStyle(fixed);
    });
  };

  const disconnectObserver = (observerName?) => {
    console.log("disconnectObserver...", observerName);
    if (observerName) {
      const observer = this[observerName];
      console.log("observer...", observer);
      observer && observer.disconnect();
    } else {
      this.contentObserver && this.contentObserver.disconnect();
      this.containerObserver && this.containerObserver.disconnect();
    }
  };

  const observeContent = () => {
    console.log("observeContent...");
    const { offsetTop = 0 } = props;
    disconnectObserver("contentObserver");
    const contentObserver = Taro.createIntersectionObserver(this.$scope, {
      thresholds: [0, 1]
    });
    console.log("contentObserver...", contentObserver);
    this.contentObserver = contentObserver;
    contentObserver.relativeToViewport({ top: -offsetTop });
    contentObserver.observe(ROOT_ELEMENT, res => {
      console.log("res...", res);
      if (props.disabled) {
        return;
      }
      changeFixed("observeContent", res.boundingClientRect.top);
    });
  };

  const getContainerRect = container => {
    const nodesRef = container();
    return new Promise<NodesRef.BoundingClientRectCallbackResult>(resolve =>
      nodesRef.boundingClientRect(resolve).exec()
    );
  };

  const observeContainer = () => {
    console.log("observeContainer...");
    if (typeof props.container !== "function") {
      return;
    }

    getContainerRect(props.container).then(rect => {
      console.log("getContainerRect...", rect);
      this.containerHeight = rect.height;
      disconnectObserver("containerObserver");
      const containerObserver = Taro.createIntersectionObserver(this);
      this.containerObserver = containerObserver;
      containerObserver.relativeToViewport({
        top: this.containerHeight - this.height
      });
      containerObserver.observe(ROOT_ELEMENT, res => {
        if (props.disabled) {
          return;
        }
        changeFixed("observeContainer", res.boundingClientRect.top);
      });
    });
  };

  const initObserver = () => {
    console.log("initObserver...");
    disconnectObserver();
    getRect(ROOT_ELEMENT, this.$scope).then(rect => {
      console.log("getRect...", rect);
      this.height = rect.height;
      Taro.nextTick(() => {
        observeContent();
        observeContainer();
      });
    });
  };

  useEffect(() => {
    console.log("mounted...", props.disabled);

    props.disabled ? disconnectObserver() : initObserver();

    return () => {
      disconnectObserver();
    };
  }, [props.disabled]);

  useEffect(() => {
    observeContent();
  }, [props.offsetTop]);

  useEffect(() => {
    if (typeof props.container === "function" && this.height) {
      observeContainer();
    }
  }, [props.container]);

  return (
    <View
      id="van_sticky"
      className={`custom-class ${cn.van_sticky}`}
      style={state.containerStyle}
    >
      <View className={bem("sticky_wrap", { fixed })} style={state.wrapStyle}>
        {props.children}
      </View>
    </View>
  );
}

Sticky.defaultProps = {
  zIndex: 99,
  offsetTop: 0,
  disabled: false
};

Sticky.externalClasses = ["custom-class"];
