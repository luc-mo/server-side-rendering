import styledComponents, { StyledInterface } from 'styled-components'
const styled = typeof styledComponents === 'function' ? styledComponents : (styledComponents as any).default as StyledInterface

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #252526;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #ffffff;
`