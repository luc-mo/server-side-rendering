import styledComponents, { StyledInterface } from 'styled-components'
const styled = typeof styledComponents === 'function' ? styledComponents : (styledComponents as any).default as StyledInterface

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 40px);
  background-color: #1e1e1e;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #ffffff;
`