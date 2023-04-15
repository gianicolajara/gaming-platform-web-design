import {
  BoldButtonKind,
  ColorButtonKind,
  RoundedButtonKind,
} from '../../interfaces/button/button.enum';
import { ButtonProps } from '../../interfaces/button/button.interface';
import { boldButtonMap, colorButtonMap, fullRoundedMap } from './utils/config';

const Button = ({
  children,
  fullRounded = RoundedButtonKind.medium,
  color = ColorButtonKind.primary,
  weigth = BoldButtonKind.normal,
  onClick,
  Icon,
}: ButtonProps) => {
  const roundedValue = fullRoundedMap.get(fullRounded);
  const colorValue = colorButtonMap.get(color);
  const boldValue = boldButtonMap.get(weigth);

  return (
    <button
      className={`px-5 py-3 text-white text-sm transition-all flex items-center gap-x-3 ${roundedValue} ${colorValue} ${boldValue} ${weigth}`}
      onClick={onClick}
    >
      {children}
      {Icon != null && <Icon />}
    </button>
  );
};

export default Button;
