import {
  textAlignMap,
  textSizesMap,
  textWeigthMap,
} from 'components/config/text.config';
import {
  TextAlignEnum,
  TextBoldEnum,
  TextSizeEnum,
} from 'interfaces/text/text.enums';
import { SubtitleSizeProps } from 'interfaces/titles/title.interfaces';

const Subtitle = ({
  children,
  size = TextSizeEnum.lg,
  weight = TextBoldEnum.bold,
  align = TextAlignEnum.left,
  className = '',
}: SubtitleSizeProps) => {
  const sizeValue = textSizesMap.get(size);
  const weightValue = textWeigthMap.get(weight);
  const alignValue = textAlignMap.get(align);
  return (
    <h3
      className={`text-white font-bold leading-[3rem] ${sizeValue} ${weightValue} ${alignValue} ${className}`}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
