/*
 Variables
1 Spaces
2 Colors
3 zIndex
4 Misc
*/

// ***********************************
//            1 Spaces
// ***********************************

export const Space = {
  xxs: `.4rem`,
  xs: `.8rem`,
  sm: `1.6rem`,
  default: `2.4rem`,
  md: `3.2rem`,
  lg: `4.8rem`,
  xlg: `6.4rem`,
  xxlg: `9.6rem`,
};

export const Height = {
  headerSm: `${Space.sm}`,
  headerLg: `${Space.lg}`,
  footer: `4rem`,
  mainTop: `${Space.md}`,
};

// ***********************************
//            2 Colors
// ***********************************

export const Colors = {
  white: `rgba(255, 255, 255, .9)`,
  black: `rgba(15, 15, 15, .95)`,
  whiteSolid: `#ffffff`,
  blackSolid: `#000000`,
  brightRed: `#f94d6a`,
  darkBlue: `#263859`,
  lightBlue: `rgba(41, 165, 240, 1)`,
  defaultGradient: `linear-gradient(
    90deg,
    rgba(41, 165, 240, 1) 0%,
    rgba(21, 246, 240, 1) 100%
  )`,
};

// ***********************************
//            3 zIndex
// ***********************************

export const ZIndex = {
  bg: `-1`,
  default: `1`,
  footer: `5`,
  header: `5`,
};

// ***********************************
//            4 Misc
// ***********************************

export const BoxShadow = {
  defaultBox: `0 3px 2px rgba(0, 0, 0, 0.2)`,
  boxTransformation: `0 12px 16px rgba(0, 0, 0, 0.2)`,
};

export const Transition = {
  default: `all 0.25s`,
};
