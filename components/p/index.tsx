import {
  textAlignMap,
  textColorMap,
  textWeigthMap,
} from 'components/config/text.config';
import {
  TextAlignEnum,
  TextBoldEnum,
  TextColorEnum,
} from 'interfaces/text/text.enums';
import { PProps } from '../../interfaces/p/p.interfaces';

const P = ({
  children,
  align = TextAlignEnum.left,
  weight = TextBoldEnum.normal,
  className = '',
  color = TextColorEnum.white,
}: PProps) => {
  const combinationValues = [
    textAlignMap.get(align),
    textWeigthMap.get(weight),
    textColorMap.get(color),
  ].join(' ');

  return (
    <p className={`leading-[2em] ${combinationValues} ${className}`}>
      {children}
    </p>
  );
};

export default P;
