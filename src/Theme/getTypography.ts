import { KrTypographyVariants } from './Types/KrTypography'

export default function getTypography(fontFamilyName: string = '') {
  const fontFamily = `"${fontFamilyName}", "Helvetica"`

  const TypoPrimitive = {
    primaryFont: fontFamilyName,
    fontFamily,

    fontSizeScorched: '4.75rem',
    fontSizeTorrid: '3.5rem',
    fontSizeBlazzing: '3rem',
    fontSizeHot: '2.75rem',
    fontSizeTropical: '2.5rem',
    fontSizeWarm: '2rem',
    fontSizeMild: '1.5rem',
    fontSizeCool: '1.25rem',
    fontSizeCold: '1.125rem',
    fontSizeBitterCold: '1rem',
    fontSizeFrigid: '0.875rem',
    fontSizeFrostbite: '0.75rem',
    fontSizeBlizzard: '0.688rem',
    fontSizeIceAge: '0.625rem',

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightSemibold: '600',
    fontWeightBold: '700',

    lineHeightIceAge: '10px',
    lineHeightGlacial: '8px',
    lineHeightGelid: '6px',
    lineHeightQuickFreeze: '4px',
    lineHeightDeepfreeze: '2px',
    lineHeightZero: '0px',

    characterSpacingArctic: '1px',
    characterSpacingAlps: '0.32px',
    characterSpacingHindukush: '0.24px',
    characterSpacingHimalayas: '0.16px',
    characterSpacingZero: '0px',

    paragraphSpacing: '0px',
  }

  const TypoComposite: KrTypographyVariants = {
    displayBoldLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeTorrid,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeTorrid, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    displayBoldMedium: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeBlazzing,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBlazzing,
        TypoPrimitive.lineHeightGelid
      ),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    displayBoldSmall: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeTropical,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeTropical,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },

    displayBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeTorrid,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeTorrid, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    displayBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeBlazzing,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBlazzing,
        TypoPrimitive.lineHeightGelid
      ),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    displayBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeTropical,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeTropical,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },

    headingBoldExtraLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeWarm,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeWarm, TypoPrimitive.lineHeightIceAge),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    headingBoldLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeMild,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeMild, TypoPrimitive.lineHeightGlacial),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldMedium: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeCool,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeCool, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldSmall: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeCold,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeCold, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldExtraSmall: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBitterCold,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    subheadingSemiboldLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightSemibold,
      fontSize: TypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrigid,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingHindukush,
      textTransform: 'uppercase',
    },
    subheadingSemiboldDefault: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightSemibold,
      fontSize: TypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrostbite,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingHindukush,
      textTransform: 'uppercase',
    },

    headingBoldItalicExtraLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeWarm,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeWarm, TypoPrimitive.lineHeightIceAge),
      letterSpacing: TypoPrimitive.characterSpacingZero,
    },
    headingBoldItalicLarge: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeMild,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeMild, TypoPrimitive.lineHeightGlacial),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldItalicMedium: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeCool,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeCool, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldItalicSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeCold,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeCold, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    headingBoldItalicExtraSmall: {
      fontFamily,
      fontStyle: 'italic',
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBitterCold,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },

    bodyRegularLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBitterCold,
        TypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: TypoPrimitive.characterSpacingHimalayas,
    },
    bodyRegularMedium: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeFrigid, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHindukush,
    },
    bodyRegularSmall: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrostbite,
        TypoPrimitive.lineHeightGelid
      ),
      letterSpacing: TypoPrimitive.characterSpacingAlps,
    },

    bodyBoldLarge: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeBitterCold,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBitterCold,
        TypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: TypoPrimitive.characterSpacingHindukush,
    },
    bodyBoldMedium: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeFrigid,
      lineHeight: lineHeightCalculator(TypoPrimitive.fontSizeFrigid, TypoPrimitive.lineHeightGelid),
      letterSpacing: TypoPrimitive.characterSpacingHindukush,
    },
    bodyBoldSmall: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrostbite,
        TypoPrimitive.lineHeightGelid
      ),
      letterSpacing: TypoPrimitive.characterSpacingAlps,
    },

    supportRegularInfo: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeBlizzard,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeBlizzard,
        TypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingAlps,
    },
    supportRegularFootnote: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeIceAge,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeIceAge,
        TypoPrimitive.lineHeightDeepfreeze
      ),
      letterSpacing: TypoPrimitive.characterSpacingAlps,
    },
    supportBoldTextButton: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightBold,
      fontSize: TypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrostbite,
        TypoPrimitive.lineHeightZero
      ),
      letterSpacing: TypoPrimitive.characterSpacingArctic,
      textTransform: 'uppercase',
    },
    supportRegularMetadata: {
      fontFamily,
      fontWeight: TypoPrimitive.fontWeightRegular,
      fontSize: TypoPrimitive.fontSizeFrostbite,
      lineHeight: lineHeightCalculator(
        TypoPrimitive.fontSizeFrostbite,
        TypoPrimitive.lineHeightZero
      ),
      letterSpacing: TypoPrimitive.characterSpacingAlps,
      textTransform: 'uppercase',
    },
  }

  const krTypo = {
    ...TypoPrimitive,
    ...TypoComposite,
  }

  const typography = {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily,
    fontWeightLight: krTypo.fontWeightLight,
    fontWeightRegular: krTypo.fontWeightRegular,
    fontWeightMedium: krTypo.fontWeightSemibold,
    fontWeightBold: krTypo.fontWeightBold,

    displayBoldLarge: krTypo.displayBoldLarge,
    displayBoldMedium: krTypo.displayBoldMedium,
    displayBoldSmall: krTypo.displayBoldSmall,

    displayBoldItalicLarge: krTypo.displayBoldItalicLarge,
    displayBoldItalicMedium: krTypo.displayBoldItalicMedium,
    displayBoldItalicSmall: krTypo.displayBoldItalicSmall,

    headingBoldExtraLarge: krTypo.headingBoldExtraLarge,
    headingBoldLarge: krTypo.headingBoldLarge,
    headingBoldMedium: krTypo.headingBoldMedium,
    headingBoldSmall: krTypo.headingBoldSmall,
    headingBoldExtraSmall: krTypo.headingBoldExtraSmall,
    subheadingSemiboldLarge: krTypo.subheadingSemiboldLarge,
    subheadingSemiboldDefault: krTypo.subheadingSemiboldDefault,

    headingBoldItalicExtraLarge: krTypo.headingBoldItalicExtraLarge,
    headingBoldItalicLarge: krTypo.headingBoldItalicLarge,
    headingBoldItalicMedium: krTypo.headingBoldItalicMedium,
    headingBoldItalicSmall: krTypo.headingBoldItalicSmall,
    headingBoldItalicExtraSmall: krTypo.headingBoldItalicExtraSmall,

    bodyRegularLarge: krTypo.bodyRegularLarge,
    bodyRegularMedium: krTypo.bodyRegularMedium,
    bodyRegularSmall: krTypo.bodyRegularSmall,

    bodyBoldLarge: krTypo.bodyBoldLarge,
    bodyBoldMedium: krTypo.bodyBoldMedium,
    bodyBoldSmall: krTypo.bodyBoldSmall,

    supportRegularInfo: krTypo.supportRegularInfo,
    supportRegularFootnote: krTypo.supportRegularFootnote,
    supportBoldTextButton: krTypo.supportBoldTextButton,
    supportRegularMetadata: krTypo.supportRegularMetadata,
  }

  return { krTypo, typography }
}

function getFontSizePixelNumber(fontSize: string): number {
  let getFontSizePixel
  if (fontSize.includes('rem')) {
    getFontSizePixel = parseFloat(fontSize.replace('rem', '')) * 16
    return getFontSizePixel
  }

  getFontSizePixel = parseFloat(fontSize.replace('px', ''))
  return getFontSizePixel
}

function lineHeightCalculator(fontSize: string, lineHeightAdjustment: string) {
  const fontSizeNumber = getFontSizePixelNumber(fontSize)
  const lineHeightAdjustmentNumber = parseFloat(lineHeightAdjustment.replace('px', ''))
  const lineHeight = (fontSizeNumber + lineHeightAdjustmentNumber) / fontSizeNumber
  return lineHeight
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends KrTypographyVariants {}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions extends KrTypographyVariants {}
}
