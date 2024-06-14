export type KrPaletteTokens =
  | 'primary'
  | 'primaryBlack'
  | 'primaryBlackLight'
  | 'primaryWhite'
  | 'secondary100'
  | 'secondary80'
  | 'secondary60'
  | 'secondary40'
  | 'secondary20'
  | 'secondaryGrey100'
  | 'secondaryGrey90'
  | 'secondaryGrey80'
  | 'secondaryGrey70'
  | 'secondaryGrey60'
  | 'secondaryGrey50'
  | 'secondaryGrey40'
  | 'secondaryGrey30'
  | 'secondaryGrey20'
  | 'secondaryGrey10'
  | 'tertiary100'
  | 'tertiary80'
  | 'tertiary60'
  | 'tertiary40'
  | 'tertiary20'
  | 'tertiary10'
  | 'errorRed'
  | 'successGreen'
  | 'warningOrange'
  | 'errorRedDark'
  | 'successGreenDark'
  | 'warningOrangeDark'
  | 'snackBlue'
  | 'typical'
  | 'errorRedNeutralLight'
  | 'successGreenNeutralLight'
  | 'warningOrangeNeutralLight'
  | 'snackBlueNeutralLight'
  | 'linkPurpleLight'
  | 'errorRedNeutralDark'
  | 'successGreenNeutralDark'
  | 'warningOrangeNeutralDark'
  | 'snackBlueNeutralDark'
  | 'linkPurpleDark'
  | 'neutral1Light'
  | 'neutral2Light'
  | 'neutral3Light'
  | 'neutral4Light'
  | 'neutral5Light'
  | 'neutral6Light'
  | 'neutral1Dark'
  | 'neutral2Dark'
  | 'neutral3Dark'
  | 'neutral4Dark'
  | 'neutral5Dark'
  | 'neutral6Dark'
  | 'highContrast1'
  | 'highContrast2'
  | 'highContrast3'
  | 'highContrast4'

export interface KrPalette extends Partial<Record<KrPaletteTokens, string>> {}
