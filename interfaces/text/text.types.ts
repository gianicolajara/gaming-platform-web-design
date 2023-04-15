import {
  TextAlignEnum,
  TextBoldEnum,
  TextColorEnum,
  TextSizeEnum,
} from './text.enums';

export type TextAlignKind =
  | TextAlignEnum.center
  | TextAlignEnum.left
  | TextAlignEnum.right;

export type TextBoldKind =
  | TextBoldEnum.bold
  | TextBoldEnum.normal
  | TextBoldEnum.semiBold
  | TextBoldEnum.light;

export type TextSizeKind = TextSizeEnum.lg | TextSizeEnum.sm | TextSizeEnum.xl;

export type TextColorKind = TextColorEnum.primary | TextColorEnum.white;
