import React from 'react'
import styled from 'styled-components'
import { color, border, space, typography } from 'styled-system'
import { ButtonGroup, Button } from '../../Atoms'
import { AngleDown, AngleUp } from 'styled-icons/fa-solid'

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
  ...props
}) => (
  <Container {...props}>
    <Header>
      <HeaderContent>{header}</HeaderContent>
      <ButtonGroup>
        {actions}
        <Button px="m" onClick={onToggleOpen} data-testid="toggle-open">
          {opened ? <AngleUp size={16} /> : <AngleDown size={16} />}
        </Button>
      </ButtonGroup>
    </Header>
    {opened && <Content>{children}</Content>}
  </Container>
)

export default Panel