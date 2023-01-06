import { css } from 'lit';

const styles = css`
:host([theme="dark"]) {
  --pf-color-theme-common-background-primary: var(--pf-color-pallet-gray-010);
  --pf-color-theme-common-background-transparent: var(--pf-color-pallet-transparent);
  --pf-color-theme-common-text-primary: var(--pf-color-pallet-gray-100);
}
`;

export default styles;
