import {
  TextAlignKind,
  TextBoldKind,
  TextColorKind,
} from 'interfaces/text/text.types';

export interface PProps {
  children: React.ReactNode;
  align?: TextAlignKind;
  weight?: TextBoldKind;
  className?: string | undefined;
  color?: TextColorKind;
}
