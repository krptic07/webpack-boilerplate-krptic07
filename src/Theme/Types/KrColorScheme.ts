import { ColorSystemOptions, SupportedColorScheme } from '@mui/material'
import { KrColor } from './KrColor'
import { KrSpacing } from './KrSpacing'
import { KrTypographyVariants } from './KrTypography'

export interface KrColorSystemOptions extends ColorSystemOptions {
  kr: {
    color: KrColor
    spacing?: KrSpacing
    typo?: KrTypographyVariants
  }
}

export interface KrColorScheme extends Record<SupportedColorScheme, KrColorSystemOptions> {}
