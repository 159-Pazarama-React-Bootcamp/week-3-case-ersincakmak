import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  width: 1.5rem;
  aspect-ratio: 1;
  border: 2px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
