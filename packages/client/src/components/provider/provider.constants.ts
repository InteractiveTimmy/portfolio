import { CONSTANTS as COMMON_CONSTANTS } from '../../common';

const ELEMENT_NAME = 'provider';
const { ELEMENT_PREFIX } = COMMON_CONSTANTS;
const ELEMENT_NS = `${ELEMENT_PREFIX}-${ELEMENT_NAME}`;

const PALLETS = {
  COLORS: 'colors',
};

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const DEFAULTS = {
  PALLETS: `${PALLETS.COLORS}`,
  THEME: `${THEMES.DARK}`,
};

const CONSTANTS = {
  ELEMENT_NAME,
  ELEMENT_NS,
  ELEMENT_PREFIX,
  DEFAULTS,
  PALLETS,
  THEMES,
};

export default CONSTANTS;
