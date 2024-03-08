import styled from 'styled-components'
import { cores } from '../../styles'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.branca};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 8px;
  }
`
export const Descricao = styled.input`
  padding: 0 17px;
  border: 1px solid ${cores.rosa};
  outline-color: ${cores.rosa};

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`
export const Botao = styled.button`
  background-color: ${cores.rosa};
  border: 1px solid ${cores.rosa};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${cores.branca};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`
