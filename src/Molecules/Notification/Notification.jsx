import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { LEVEL_SUCCESS } from './index'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  ${variant({ scale: 'levels' })}

  & strong {
    padding-right: 10px;
  }
`

const CloseIcon = styled.span`
  justify-content: flex-end;
  cursor: pointer;
`

const Notification = ({
  children,
  level = LEVEL_SUCCESS,
  show = false,
  onClose = () => {},
  title,
}) => (
  !!show &&
    <Container
      className={`alert alert-${level}`}
      role="alert"
      variant={level}
      data-testid={`notification-${level}`}
    >
      <div>
        <strong>
          {title}
        </strong>
        {children}
      </div>
      <CloseIcon data-testid="close-notification" onClick={onClose}>
        &times;
      </CloseIcon>
    </Container>
)

export default Notification
