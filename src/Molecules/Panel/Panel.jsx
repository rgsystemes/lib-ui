import React from 'react'
import styled from 'styled-components'
import { color, border, space, typography } from 'styled-system'
import { InputGroup, Button } from '../../Atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  ${color};
  ${border};
`
Container.defaultProps = {
  borderColor:  'lightgray',
  borderRadius: 1,
}

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  ${color};
  ${space};
`
Header.defaultProps = {
  bg: 'secondary',
  py: 's',
  px: 'l',
}

const Content = styled.div`
  border-top: 1px solid;
  ${border}
`

Content.defaultProps = {
  borderColor: 'lightgray',
}

const HeaderContent = styled.div`
  display: flex;
  flex-grow: 1;
  ${typography}
`
HeaderContent.defaultProps = {
  lineHeight: 'body',
}

const Panel = ({
  header, actions,
  children,
  opened, onToggleOpen,
}) => (
  <Container>
    <Header>
      <HeaderContent>{header}</HeaderContent>
      <InputGroup>
        {actions}
        <Button onClick={onToggleOpen} data-testid="toggle-open">
          {String.fromCharCode(opened ? 708 : 709)}
        </Button>
      </InputGroup>
    </Header>
    {opened && <Content>{children}</Content>}
  </Container>
)

export default Panel
