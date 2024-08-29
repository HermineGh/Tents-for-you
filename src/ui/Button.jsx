import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.6rem;
    padding: 6px 8px;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 1rem;
    padding: 10px 24px;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 16px 24px;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: white !important;
    background-color: var(--color-orange-500);

    &:hover {
      background-color: var(--color-orange-400);
    }
  `,
  secondary: css`
    color: var(--color-orange-700);
    background: var(--color-grey-0);
    border: 1px solid var(--color-orange-500);

    &:hover {
      background-color: var(--color-orange-500);
      color: var(--color-orange-100);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
