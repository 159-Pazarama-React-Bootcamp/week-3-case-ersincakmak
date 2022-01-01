import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '1rem'
      case 'md':
        return '.8125rem'
      default:
        return '.625rem'
    }
  }};

  width: ${(props) => {
    switch (props.fullWidth) {
      case true:
        return '100%'
      default:
        return 'max-content'
    }
  }};

  font-family: Gilroy, sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.2;
  color: white;
  background-color: #a93159;
  border-radius: 2.5rem;
  margin-top: 2.625rem;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(0.87);
  }
`
