import { TextSizeEnum } from 'interfaces/text/text.enums';
import { TextAlignKind, TextBoldKind } from 'interfaces/text/text.types';

export interface SubtitleSizeProps {
  children: React.ReactNode;
  size?: TextSizeEnum;
  weight?: TextBoldKind;
  align?: TextAlignKind;
  className?: string | undefined;
}
