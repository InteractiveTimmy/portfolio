import { CONSTANTS as COMMON_CONSTANTS } from '../../common';

const ELEMENT_NAME = 'header';
const { ELEMENT_PREFIX } = COMMON_CONSTANTS;
const ELEMENT_NS = `${ELEMENT_PREFIX}-${ELEMENT_NAME}`;

const DEFAULTS = {
  SOLID: false,
};

const CONSTANTS = {
  DEFAULTS,
  ELEMENT_NAME,
  ELEMENT_NS,
  ELEMENT_PREFIX,
};

export default CONSTANTS;
