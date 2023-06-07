import { theme } from "@/config/theme";

export interface TypographyProps <T extends React.ElementType> {
  as?: T;
  color?: keyof typeof theme.colors,
  size?: keyof typeof theme.fontSizes,
}