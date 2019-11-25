import React from 'react'
import styled from 'styled-components'
import { color, border, space, typography } from 'styled-system'
import { InputGroup, Button } from '../../Atoms'
import { KeyboardArrowDown, KeyboardArrowUp } from 'styled-icons/material'

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
        <Button px="s" py={0} onClick={onToggleOpen} data-testid="toggle-open">
          {opened ? <KeyboardArrowUp size={26} /> : <KeyboardArrowDown size={26} />}
        </Button>
      </InputGroup>
    </Header>
    {opened && <Content>{children}</Content>}
  </Container>
)

export default Panel
