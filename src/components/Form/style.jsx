import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${(props) => (props.error ? '#d80000' : '#bcbec0')};
  border-radius: 40px;
  padding: 1.0625rem 1.375rem;
  color: #414042;
  font-size: 0.875rem;
  line-height: 1.2;
  transition: all 0.2s ease;

  ::placeholder {
    color: #bcbec0;
  }

  :active,
  :focus,
  :hover {
    border-color: ${(props) => (props.error ? '#d80000' : '#414042')};
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 0;
  transform: translateY(calc(100% + 0.125rem));
  color: #d80000;
  font-size: 0.8125rem;
`

export const EyeButton = styled.button`
  background-color: transparent;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1.375rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  :hover {
    svg {
      color: #414042;
    }
  }

  svg {
    transition: all 0.2s ease;
    font-size: 1rem;
    color: #bcbec0;
  }
`

export const Title = styled.p`
  font-size: 0.875rem;
  line-height: 1.2;
  color: #414042;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-block: 1rem;
`
