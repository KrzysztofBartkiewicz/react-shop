import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  min-width: 10.6rem;
  min-height: 4.4rem;
  border-radius: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  ${({ icon }) =>
    icon &&
    css`
      background: url(${icon}) center / 7rem no-repeat;
      max-width: 10.6rem;
    `}

  ${({ children, icon, theme }) =>
    children &&
    icon &&
    css`
      min-width: ${`${children.length + 13}rem`};
      padding: 0 1.5rem;
      background: url(${icon}) 1rem / 7rem no-repeat;
      font-size: ${theme.fontSizes.s};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `}
`;

export const StyledRadioInput = styled.input`
  display: none;
  &:checked + ${StyledLabel} {
    border: 1px solid ${({ theme }) => theme.colors.primaryYellow};
  }
`;

// background:
//      url(sweettexture.jpg)    /* image */
//      top center / 200px 200px /* position / size */
//      no-repeat                /* repeat */
//      fixed                    /* attachment */
//      padding-box              /* origin */
//      content-box              /* clip */
//      red;
