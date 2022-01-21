import styled from 'styled-components'

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8125rem;
  border-radius: 40px;
  border: 1px solid #bcbec0;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease;
  font-size: 1.5rem;

  :hover {
    border-color: #a93159;
  }

  svg {
    font-size: 1.5rem;
  }
`
