import React from 'react'

import Card from '../../Atoms/Card'
import FlexBox from '../../Templates/FlexBox'

const Action = props => <FlexBox
  css={{ cursor: 'pointer' }}
  fontSize="fontSize"
  fontFamily="fontFamily"
  alignItems="center"
  border="none"
  mt={4}
  justifyContent="space-between"
  {...props}
/>

const Title = props => <FlexBox
  fontSize="title"
  fontFamily="fontFamily"
  color="primary.main"
  {...props}
/>

const Description = props => <FlexBox
  fontSize="fontSize"
  fontFamily="fontFamily"
  {...props}
/>

const ActionCard = ({
  title,
  description,
  actions,
  children,
  ...props
}) => {
  return (
    <Card {...props}>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      {children}
      <Action>
        {actions}
      </Action>
    </Card>
  )
}

export default ActionCard
