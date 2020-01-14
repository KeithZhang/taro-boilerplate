"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useBem_1 = require("../hooks/useBem");
const index_module_less_1 = require("./index.module.less");
const taro_1 = require("@tarojs/taro");
function Sticky(props) {
    const { bem } = useBem_1.default(index_module_less_1.default);
    const [containerStyle, setContainerStyle] = taro_1.useState();
    const [fixed, setFixed] = taro_1.useState();
    const [wrapStyle, setWrapStyle] = taro_1.useState();
    const getRect = useR23 `3148rect();

  const initObserver = () => {
    this.disconnectObserver();
    getRect("#van_sticky").then(rect => {
      this.setData({ height: rect.height });
      Taro.nextTick(() => {
        this.observeContent();
        this.observeContainer();
      });
    });
  };

  useEffect(() => {
    return () => {};
  });

  return (
    <View
      id="van_sticky"
      className={`, custom;
    -class $ {
    };
    $;
    {
        containerStyle;
    }
    `}
    >
      <View className={bem("sticky_wrap", { fixed })} style={wrapStyle}>
        {props.children}
      </View>
    </View>
  );
}

Sticky.defaultProps = {
  zIndex: 99,
  offsetTop: 0
};

Sticky.externalClasses = ["custom-class"];
    ;
}
exports.default = Sticky;
//# sourceMappingURL=index.jsx.map