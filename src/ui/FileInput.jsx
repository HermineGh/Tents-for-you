import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.1rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.6rem 1rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: var(--color-orange-500);
    color: var(--color-orange-100);
    background-color: var(--color-orange-500);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-orange-400);
    }
  }
`;

export default FileInput;
