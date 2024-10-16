/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FFD700"; // Bright Yellow
const tintColorDark = "#FF7F50"; // Coral

export const Colors = {
  light: {
    text: "#11181C", // Dark Slate
    background: "#F0F0F0", // Light Gray
    tint: tintColorLight,
    icon: "#87CEEB", // Sky Blue
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE", // Light Gray
    background: "#151718", // Dark Background
    tint: tintColorDark,
    icon: "#FF7F50", // Coral
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
