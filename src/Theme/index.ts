import {
  CssVarsTheme,
  CssVarsThemeOptions,
  PaletteColorOptions,
  SupportedColorScheme,
  Theme,
  experimental_extendTheme as extendTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import breakpoints from './breakpoints'
import { KrPalette } from './Types/KrPalette'
import { FONT_FAMILY_NAME } from './Constants/FONT_FAMILY'
import { PALETTE } from './Constants/PALETTE'
import getColorScheme from './getColorScheme'
import { SPACE_COEFFICIENT, krSpacingCssVars } from './spacing'
import getTypography from './getTypography'
import { KRTYPOGRAPHY_TOKENS } from './Constants/TYPOGRAPHY'

export function getTheme(
  palette: KrPalette = PALETTE,
  fontFamilyName: string = FONT_FAMILY_NAME
): Omit<Theme, 'palette'> & CssVarsTheme {
  const { typography, krTypo } = getTypography(fontFamilyName)
  const colorSchemes = getColorScheme(palette)
  const colorSchemeKeys = Object.keys(colorSchemes) as SupportedColorScheme[]
  colorSchemeKeys.forEach((colorSchemeKey: SupportedColorScheme) => {
    colorSchemes[colorSchemeKey].kr = {
      ...colorSchemes[colorSchemeKey].kr,
      spacing: krSpacingCssVars,
      typo: krTypo,
    }
  })

  const cssVarsThemeOptions: CssVarsThemeOptions = {
    cssVarPrefix: '',
    colorSchemes,
    breakpoints,
    typography,
    spacing: (input: number) => input * SPACE_COEFFICIENT,
  }

  let theme: Omit<Theme, 'palette'> & CssVarsTheme = extendTheme(cssVarsThemeOptions)
  theme = responsiveFontSizes(theme, {
    disableAlign: true,
    breakpoints: breakpoints.keys,
    factor: 2,
    variants: KRTYPOGRAPHY_TOKENS,
  })
  return theme
}

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary: string
  }

  interface CommonColors {
    blackLight: string
  }

  interface PaletteOptions {
    surface?: PaletteColorOptions
    tertiary?: PaletteColorOptions
  }
}
