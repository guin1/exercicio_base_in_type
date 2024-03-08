import { FormEvent, useState } from 'react'
import { StyledForm, Descricao, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm as="form" onSubmit={aoEnviarForm}>
      <Descricao
        placeholder="Front-end, fullstack, node, design"
        onChange={(evento) => setTermo(evento.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </StyledForm>
  )
}
export default FormVagas
