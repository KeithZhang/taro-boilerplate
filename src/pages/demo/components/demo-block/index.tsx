import { View } from '@tarojs/components';

import './index.less';

interface IDemoBlockProps {
  title?: string;
  padding?: boolean;
  children?: any;
}

export default function DemoBlock(props: IDemoBlockProps) {
  return (
    <View
      className={`custom-class demo-block van-clearfix ${
        props.padding ? 'demo-block--padding' : ''
      }`}
    >
      {props.title ? (
        <View className='demo-block__title'>{props.title}</View>
      ) : null}
      {props.children}
    </View>
  );
}
