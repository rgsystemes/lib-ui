import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { LEVEL_SUCCESS } from './index'

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  ${variant({ scale: 'levels' })}
`

const CloseIcon = styled.span`
  justify-content: flex-end;
  cursor: pointer;

  font-size: 28px;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
`

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > h4 {
    margin: 0;
  }
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
      role="alert"
      variant={level}
      data-testid="notification-alert"
    >
      <Head>
        <h4 data-testid="notification-title">
          {title}
        </h4>
        <CloseIcon data-testid="close-notification" onClick={onClose}>
          &times;
        </CloseIcon>
      </Head>
      <p data-testid="notification-message">
        {children}
      </p>
    </Container>
)

export default Notification
