import { View, Text } from "@tarojs/components";
import QMIcon from "../icon";
import cn from "./index.module.less";
import useBem from "../hooks/useBem";

interface IGridProps {
  square: boolean;
  gutter: number;
  columnName: number;
  items: Array<{
    text?: string;
    name?: string | number;
    icon?: string;
    dot?: boolean;
    info?: string | number;
  }>;
  onClick: () => void;
}

export default function Grid(props: IGridProps) {
  const { gutter, square, columnName, onClick } = props;
  const { bem } = useBem(cn);
  const style = `
    padding-left: ${gutter}px;
  `;

  //
  return (
    <View className={`custom-class ${bem("grid", {})} `} style={style}>
      {/*  */}
      {props.items.map((v, i) => {
        const { icon, dot, info, text } = v;
        const itemStyle = `
          flex-basis: ${100 / columnName}%;
          padding-right: ${gutter}px;
          margin-top: ${i < columnName ? "0" : gutter}px;
        `;
        return (
          <View
            className={`${bem("grid-item", { square })}`}
            style={`${itemStyle}`}
            onClick={() => {
              onClick();
            }}>
            <View className={`${bem("grid-item__content", { square })}`}>
              {icon && (
                <View className={`${bem("grid-item__icon")}`}>
                  <QMIcon size="26px" name={icon} dot={dot} info={info} />
                </View>
              )}
              {text && (
                <View className={`${bem("grid-item__text")}`}>
                  <Text>{text}</Text>
                </View>
              )}
            </View>
          </View>
        );
      })}

      {/*  */}
    </View>
  );
}

Grid.defaultProps = {
  square: true,
  gutter: 0,
  columnName: 4,
  items: [],
  onClick: () => {}
};

Grid.externalClasses = ["custom-class"];
