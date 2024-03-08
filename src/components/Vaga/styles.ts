import styled from 'styled-components'
import { cores } from '../../styles'

export const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${cores.branca};
  background-color: ${cores.rosa};
  color: ${cores.branca};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
export const Vagas = styled.li`
  border: 1px solid ${cores.rosa};
  background-color: ${cores.branca};
  color: ${cores.rosa};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${cores.rosa};
    color: ${cores.branca};

    ${VagaLink} {
      background-color: ${cores.branca};
      color: ${cores.rosa};
    }
  }
`

export const Link = styled.a`
  border-color: ${cores.rosa};
  background-color: ${cores.branca};
  color: ${cores.rosa};
`
