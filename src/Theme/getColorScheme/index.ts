import { PALETTE } from '../Constants/PALETTE'
import { KrPalette } from '../Types/KrPalette'
import getLightModeColorScheme from './light'
import getDarkModeColorScheme from './dark'
import { KrColorScheme } from '../Types/KrColorScheme'

export default function getColorScheme(colorPalette: KrPalette = PALETTE) {
  const mergedColorPalette: KrPalette = { ...PALETTE, ...colorPalette }
  const { lightKrColor, lightPalette } = getLightModeColorScheme(mergedColorPalette)
  const { darkKrColor, darkPalette } = getDarkModeColorScheme(mergedColorPalette)

  const colorScheme: KrColorScheme = {
    light: {
      palette: lightPalette,
      kr: {
        color: lightKrColor,
      },
    },
    dark: {
      palette: darkPalette,
      kr: {
        color: darkKrColor,
      },
    },
  }

  return colorScheme
}
