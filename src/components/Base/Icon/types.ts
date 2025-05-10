import type { ColorsType, IconsType } from "~/constants";

export interface IconProps {
  name: IconsType;
  width?: number;
  height?: number;
  fill?: ColorsType;
  stroke?: ColorsType;
}
