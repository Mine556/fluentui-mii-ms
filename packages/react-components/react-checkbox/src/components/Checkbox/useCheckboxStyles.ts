import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createFocusOutlineStyle } from '@fluentui/react-tabster';
import { tokens } from '@fluentui/react-theme';
import { CheckboxSlots, CheckboxState } from './Checkbox.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const checkboxClassNames: SlotClassNames<CheckboxSlots> = {
  root: 'fui-Checkbox',
  label: 'fui-Checkbox__label',
  input: 'fui-Checkbox__input',
  indicator: 'fui-Checkbox__indicator',
};

// The indicator size is used by the indicator and label styles
const indicatorSizeMedium = '16px';
const indicatorSizeLarge = '20px';

const useRootStyles = makeStyles({
  base: {
    position: 'relative',
    display: 'inline-flex',
    ...createFocusOutlineStyle({ style: {}, selector: 'focus-within' }),
  },
});

const useInputStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: '100%',
    ...shorthands.margin(0),
    opacity: 0,
    position: 'absolute',
    top: 0,

    // When unchecked, hide the the checkmark icon (child of the indicator slot)
    [`:not(:checked):not(:indeterminate) ~ .${checkboxClassNames.indicator} > *`]: {
      opacity: 0,
    },

    // Colors for the unchecked state
    ':enabled:not(:checked):not(:indeterminate)': {
      [`& ~ .${checkboxClassNames.label}`]: {
        color: tokens.colorNeutralForeground3,
      },
      [`& ~ .${checkboxClassNames.indicator}`]: {
        ...shorthands.borderColor(tokens.colorNeutralStrokeAccessible),
      },

      ':hover': {
        [`& ~ .${checkboxClassNames.label}`]: {
          color: tokens.colorNeutralForeground2,
        },
        [`& ~ .${checkboxClassNames.indicator}`]: {
          ...shorthands.borderColor(tokens.colorNeutralStrokeAccessibleHover),
        },
      },

      ':active:hover': {
        [`& ~ .${checkboxClassNames.label}`]: {
          color: tokens.colorNeutralForeground1,
        },
        [`& ~ .${checkboxClassNames.indicator}`]: {
          ...shorthands.borderColor(tokens.colorNeutralStrokeAccessiblePressed),
        },
      },
    },

    // Colors for the checked state
    ':enabled:checked:not(:indeterminate)': {
      [`& ~ .${checkboxClassNames.label}`]: {
        color: tokens.colorNeutralForeground1,
      },
      [`& ~ .${checkboxClassNames.indicator}`]: {
        backgroundColor: tokens.colorCompoundBrandBackground,
        color: tokens.colorNeutralForegroundInverted,
        ...shorthands.borderColor(tokens.colorCompoundBrandBackground),
      },

      ':hover': {
        [`& ~ .${checkboxClassNames.indicator}`]: {
          backgroundColor: tokens.colorCompoundBrandBackgroundHover,
          ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundHover),
        },
      },

      ':active:hover': {
        [`& ~ .${checkboxClassNames.indicator}`]: {
          backgroundColor: tokens.colorCompoundBrandBackgroundPressed,
          ...shorthands.borderColor(tokens.colorCompoundBrandBackgroundPressed),
        },
      },
    },

    // Colors for the mixed state
    ':enabled:indeterminate': {
      [`& ~ .${checkboxClassNames.label}`]: {
        color: tokens.colorNeutralForeground1,
      },
      [`& ~ .${checkboxClassNames.indicator}`]: {
        ...shorthands.borderColor(tokens.colorCompoundBrandStroke),
        color: tokens.colorCompoundBrandForeground1,
      },

      ':hover': {
        [`& ~ .${checkboxClassNames.indicator}`]: {
          ...shorthands.borderColor(tokens.colorCompoundBrandStrokeHover),
          color: tokens.colorCompoundBrandForeground1Hover,
        },
      },

      ':active:hover': {
        [`& ~ .${checkboxClassNames.indicator}`]: {
          ...shorthands.borderColor(tokens.colorCompoundBrandStrokePressed),
          color: tokens.colorCompoundBrandForeground1Pressed,
        },
      },
    },

    ':disabled': {
      cursor: 'default',

      [`& ~ .${checkboxClassNames.label}`]: {
        color: tokens.colorNeutralForegroundDisabled,
        '@media (forced-colors: active)': {
          color: 'GrayText',
        },
      },
      [`& ~ .${checkboxClassNames.indicator}`]: {
        ...shorthands.borderColor(tokens.colorNeutralStrokeDisabled),
        color: tokens.colorNeutralForegroundDisabled,
        '@media (forced-colors: active)': {
          color: 'GrayText',
        },
      },
      [`& ~ .${checkboxClassNames.indicator} svg`]: {
        '@media (forced-colors: active)': {
          color: 'GrayText',
        },
      },
    },
  },

  before: {
    right: 0,
  },
  after: {
    left: 0,
  },

  // Calculate the width of the hidden input by taking into account the size of the indicator + the padding around it.
  // This is done so that clicking on that "empty space" still toggles the checkbox.
  medium: {
    width: `calc(${indicatorSizeMedium} + 2 * ${tokens.spacingHorizontalS})`,
  },
  large: {
    width: `calc(${indicatorSizeLarge} + 2 * ${tokens.spacingHorizontalS})`,
  },

  labelMedium: {
    width: `calc(${indicatorSizeMedium} + ${tokens.spacingHorizontalS})`,
  },
  labelLarge: {
    width: `calc(${indicatorSizeLarge} + ${tokens.spacingHorizontalS})`,
  },
});

const useIndicatorStyles = makeStyles({
  base: {
    alignSelf: 'flex-start',
    boxSizing: 'border-box',
    flexShrink: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.overflow('hidden'),

    ...shorthands.border(tokens.strokeWidthThin, 'solid'),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    ...shorthands.margin(tokens.spacingVerticalS, tokens.spacingHorizontalS),
    fill: 'currentColor',
    pointerEvents: 'none',
  },

  labelBefore: {
    marginLeft: 0,
  },
  labelAfter: {
    marginRight: 0,
  },

  medium: {
    fontSize: '12px',
    height: indicatorSizeMedium,
    width: indicatorSizeMedium,
  },

  large: {
    fontSize: '16px',
    height: indicatorSizeLarge,
    width: indicatorSizeLarge,
  },

  circular: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
  },
});

const useLabelStyles = makeStyles({
  base: {
    alignSelf: 'center',
    color: 'inherit',
    cursor: 'pointer',
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },

  before: {
    paddingRight: tokens.spacingHorizontalM,
  },
  after: {
    paddingLeft: tokens.spacingHorizontalM,
  },

  // Use a (negative) margin to account for the difference between the indicator's height and the label's line height.
  // This prevents the label from expanding the height of the checkbox, but preserves line height if the label wraps.
  medium: {
    marginTop: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeMedium} - ${tokens.lineHeightBase300}) / 2)`,
  },
  large: {
    marginTop: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
    marginBottom: `calc((${indicatorSizeLarge} - ${tokens.lineHeightBase300}) / 2)`,
  },
});

/**
 * Apply styling to the Checkbox slots based on the state
 */
export const useCheckboxStyles_unstable = (state: CheckboxState): CheckboxState => {
  const rootStyles = useRootStyles();
  state.root.className = mergeClasses(checkboxClassNames.root, rootStyles.base, state.root.className);

  const { label, labelPosition, shape, size } = state;

  const inputStyles = useInputStyles();
  state.input.className = mergeClasses(
    checkboxClassNames.input,
    inputStyles.base,
    inputStyles[size],
    label && size === 'medium' && inputStyles.labelMedium,
    label && size === 'large' && inputStyles.labelLarge,
    inputStyles[labelPosition],
    state.input.className,
  );

  const indicatorStyles = useIndicatorStyles();
  if (state.indicator) {
    state.indicator.className = mergeClasses(
      checkboxClassNames.indicator,
      indicatorStyles.base,
      indicatorStyles[size],
      label && labelPosition === 'before' && indicatorStyles.labelBefore,
      label && labelPosition === 'after' && indicatorStyles.labelAfter,
      shape === 'circular' && indicatorStyles.circular,
      state.indicator.className,
    );
  }

  const labelStyles = useLabelStyles();
  if (state.label) {
    state.label.className = mergeClasses(
      checkboxClassNames.label,
      labelStyles.base,
      labelStyles[size],
      labelStyles[labelPosition],
      state.label.className,
    );
  }

  return state;
};
