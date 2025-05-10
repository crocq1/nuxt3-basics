export const Colors = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",
};

export type ColorsType = (typeof Colors)[keyof typeof Colors];
