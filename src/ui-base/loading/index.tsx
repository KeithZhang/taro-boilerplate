import { View } from '@tarojs/components';
import './index.less';
import { isNumber } from '../util';

interface ILoadingProps {
  color?: string;
  type?: 'circular' | 'spinner';
  size?: string | number;
  textSize?: string | number;
  vertical?: boolean;
  children?: any;
}

export default function Loading(props: ILoadingProps) {
  const { vertical, type, color, size, children, textSize } = props;
  return (
    <View
      className={`custom-class van-loading ${
        vertical ? 'van-loading--vertical' : ''
      }`}
    >
      <View
        className={`van-loading__spinner van-loading__spinner--${type}`}
        style={`color: ${color}; width: ${
          isNumber(size) ? size + 'px' : size
        }}; height: ${isNumber(size) ? size + 'px' : size}`}
      >
        {type === 'spinner'
          ? [...Array(12).keys()].map((v) => (
              <View key={v} className='van-loading__dot' />
            ))
          : null}
      </View>
      <View
        className='van-loading__text'
        style={`font-size: ${isNumber(textSize) ? textSize + 'px' : textSize}`}
      >
        {children}
      </View>
    </View>
  );
}

Loading.defaultProps = {
  color: '#c9c9c9',
  type: 'circular',
  size: '30px',
  textSize: '14px',
  vertical: false,
};

Loading.externalClasses = ['custom-class'];
