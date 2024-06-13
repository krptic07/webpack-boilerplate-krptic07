import { CssVarsTheme, Theme } from '@mui/material/styles'
import { TPalette } from './Types/TPalette'
import { FONT_FAMILY_NAME } from './Constants/FONT_FAMILY'
import { PALETTE } from './Constants/PALETTE'

export function getTheme(
  palette: TPalette = PALETTE,
  fontFamilyName: string = FONT_FAMILY_NAME
): Omit<Theme, 'palette'> & CssVarsTheme {}
