/**
 * TouchSpin Angular - Type Definitions
 */

import type { TouchSpinCoreOptions, TouchSpinCorePublicAPI } from '@touchspin/core';

/**
 * Change metadata for TouchSpin events
 */
export interface TouchSpinChangeMeta {
  source: 'user' | 'programmatic';
  action: 'input' | 'increment' | 'decrement' | 'setValue';
}

/**
 * Inputs accepted by TouchSpin component
 */
export interface TouchSpinInputs {
  /** Current value (controlled mode – pair with valueChange) */
  value?: number | null;

  /** Initial value (uncontrolled mode, applied once until overridden) */
  defaultValue?: number | null;

  /** Minimum value */
  min?: number;

  /** Maximum value */
  max?: number;

  /** Step increment/decrement amount */
  step?: number;

  /** Number of decimal places */
  decimals?: number;

  /** Prefix text/symbol */
  prefix?: string;

  /** Suffix text/symbol */
  suffix?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Readonly state */
  readOnly?: boolean;

  /** Form control name */
  name?: string;

  /** Element ID */
  id?: string;

  /** CSS class for wrapper */
  class?: string;

  /** CSS class for input element */
  inputClass?: string;

  /** ARIA label for accessibility */
  ariaLabel?: string;

  /** ARIA labelledby for accessibility */
  ariaLabelledBy?: string;

  /** Additional core options */
  coreOptions?: Partial<TouchSpinCoreOptions>;
}

/**
* Outputs (events) emitted by TouchSpin component
*/
export interface TouchSpinOutputs {
/** Emitted when value changes (simple number value) */
valueChange: number;

/** Emitted when value changes (detailed with metadata) */
change: { value: number; meta: TouchSpinChangeMeta };

/** Emitted when input loses focus */
blurred: void;

/** Emitted when input gains focus */
focused: void;

  /** Emitted when minimum boundary is reached */
  onMin: void;

  /** Emitted when maximum boundary is reached */
  onMax: void;

  /** Emitted when spinning starts */
  onStartSpin: void;

  /** Emitted when spinning stops */
  onStopSpin: void;

  /** Emitted when upward spinning starts */
  onStartUpSpin: void;

  /** Emitted when downward spinning starts */
  onStartDownSpin: void;

  /** Emitted when upward spinning stops */
  onStopUpSpin: void;

  /** Emitted when downward spinning stops */
  onStopDownSpin: void;

  /** Emitted when spin speed increases */
  onSpeedChange: void;
}

/**
* Imperative handle for programmatic control
*/
export interface TouchSpinHandle {
/** Focus the input */
focus(): void;

/** Blur the input */
blur(): void;

/** Increment value by step */
increment(): void;

/** Decrement value by step */
decrement(): void;

/** Get current value */
getValue(): number;

/** Set value programmatically */
setValue(value: number): void;

/** Start continuous upward spinning */
startUpSpin(): void;

  /** Start continuous downward spinning */
  startDownSpin(): void;

  /** Stop any continuous spinning */
  stopSpin(): void;

  /** Update settings at runtime */
  updateSettings(opts: Partial<TouchSpinCoreOptions>): void;

  /** Get core API instance */
  getCore(): TouchSpinCorePublicAPI | null;
}

export const TOUCH_SPIN_INPUTS = [
  'value',
  'defaultValue',
  'min',
  'max',
  'step',
  'decimals',
  'prefix',
  'suffix',
  'disabled',
  'readOnly',
  'name',
  'id',
  'class',
  'inputClass',
  'testId: data-testid',
  'coreOptions',
  'ariaLabel',
  'ariaLabelledBy',
  'renderer',
] as const;

export const TOUCH_SPIN_OUTPUTS = [
  'valueChange',
  'change',
  'blurred',
  'focused',
  'onMin',
  'onMax',
  'onStartSpin',
  'onStopSpin',
  'onStartUpSpin',
  'onStartDownSpin',
  'onStopUpSpin',
  'onStopDownSpin',
  'onSpeedChange'
] as const;
