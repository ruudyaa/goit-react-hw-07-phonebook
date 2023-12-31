import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 500px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${p => p.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Btn = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;
  border-radius: 8px;

  cursor: pointer;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #aab7e7;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.muted};
    color: ${p => p.theme.colors.white};
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #aab7e7;
    :active {
      color: ${p => p.theme.colors.muted};
      box-shadow: inset 1px 1px 2px #aab7e7, inset -1px -1px 2px #fff;
    }
  }
`;

export const Info = styled.div`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
`;