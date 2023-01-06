import { css } from 'lit';

const styles = css`
:host {
  align-items: center;
  background-color: var(--pf-color-theme-common-background-transparent);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  left: 0;
  margin: 0 20vw;
  position: fixed;
  top: 0;
  transition: background-color 0.2s;
  width: 60vw;
  z-index: 20;
}

:host([solid="true"]) {
  background-color: var(--pf-color-theme-common-background-primary);
}
`;

export default styles;
