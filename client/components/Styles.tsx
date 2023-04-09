import styled from 'styled-components'

export const GridForm = styled.form`
  width: 80%;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: auto 1fr;
`

export const ColOne = styled.label`
  grid-column: 1;
`

export const ColTwoText = styled.input`
  grid-column: 2;
`
