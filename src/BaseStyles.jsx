import styled, {css} from "styled-components"

const baseStyles = css`
   --root {
    --font-size-xs: 4px;
    --font-size-sm: 8px;
    --font-size-base: 12px;
    --font-size-lg: 16px;
    --font-size-xl: 24px;
    --font-size-2xl: 32px;
    --font-size-3xl: 48px;
    --font-size-4xl: 64px;
    --font-size-5xl: 96px;
    --font-size-6xl: 128px;
    --font-size-7xl: 192px;
    --font-size-8xl: 256px;
    --font-size-9xl: 384px;
    --font-size-10xl: 512px;
    --font-size-11xl: 640px;
    --font-size-12xl: 768px;

    --primary: #6b6c73;
    --secondary: #95969b;
    --gray-500: hsl(235, 5%, 58%);
    --tertiary: #c1c2c5;
}
 
` 

const accessTheme = (themeType, themeVal) => {
    return (props) => props.theme[themeType][themeVal]
}

export {
    baseStyles, accessTheme
}

