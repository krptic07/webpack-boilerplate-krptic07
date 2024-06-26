export type KrColorTokens =
  | 'actionPrimary'
  | 'actionSecondary'
  | 'actionTertiary'
  | 'surfaceBackground'
  | 'surfacePrimary'
  | 'surfaceSecondary'
  | 'surfaceTertiary'
  | 'typoPrimary'
  | 'typoSecondary'
  | 'typoTertiary'
  | 'typoActionPrimary'
  | 'typoActionSecondary'
  | 'typoActionTertiary'
  | 'typoOnSurface'
  | 'typoOnSurfaceDynamic'
  | 'typoDisabled'
  | 'typoTypical'
  | 'neutral1'
  | 'neutral2'
  | 'neutral3'
  | 'neutral4'
  | 'neutral5'
  | 'neutral6'
  | 'iconNegative'
  | 'iconPositive'
  | 'iconWarning'
  | 'iconActionPrimary'
  | 'iconActionSecondary'
  | 'iconActionTertiary'
  | 'iconOnSurface'
  | 'iconOnSurfaceDynamic'
  | 'iconDisabled'
  | 'iconDefault'
  | 'iconTypical'
  | 'strokeDefault'
  | 'strokeSelected'
  | 'strokeSecondarySelected'
  | 'strokeHover'
  | 'strokeDisabled'
  | 'strokeActive'
  | 'supportNegative'
  | 'supportPositive'
  | 'supportWarning'
  | 'supportVariable'
  | 'supportTypical'
  | 'supportNegativeNeutral'
  | 'supportPositiveNeutral'
  | 'supportWarningNeutral'
  | 'supportTypicalNeutral'
  | 'stateSelectedPrimaryHover'
  | 'stateSelectedPrimaryPressed'
  | 'stateSelectedSecondaryHover'
  | 'stateSelectedSecondaryPressed'
  | 'stateSelectedVisitedTextLink'
  | 'stateUnselectedDefault'
  | 'stateUnselectedHover'
  | 'stateUnselectedPressed'
  | 'stateDisabledSurface'
  | 'overlay'
  | 'overlayLoader'
  | 'dotLoader'

export interface KrColorGeneric<T> extends Partial<Record<KrColorTokens, T>> {}

export interface KrColor extends KrColorGeneric<string> {}
