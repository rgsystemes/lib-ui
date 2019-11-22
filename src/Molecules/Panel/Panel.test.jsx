import React, { useState } from 'react'
import { render, waitForElement, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import Panel from './index'
import { ThemeProvider } from 'styled-components'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
)

it('sould be closed by default', () => {
  const { queryByTestId } = render(
    <Wrapper>
      <div data-testid="container">
        <Panel>
          <div data-testid="content">Content</div>
        </Panel>
      </div>
    </Wrapper>
  )

  const content = queryByTestId('content')
  const container = queryByTestId('container')

  expect(container).not.toContainElement(content)
})

it('sould display children when opened', () => {
  const { queryByTestId } = render(
    <Wrapper>
      <div data-testid="container">
        <Panel opened>
          <div data-testid="content">Content</div>
        </Panel>
      </div>
    </Wrapper>
  )

  const content = queryByTestId('content')
  const container = queryByTestId('container')

  expect(container).toContainElement(content)
})

describe('open state changes', () => {
  const StateFull = ({ defaultState = false }) => {
    const [opened, setOpened] = useState(defaultState)

    return (
      <Wrapper>
        <div data-testid="container">
          <Panel opened={opened} onToggleOpen={() => setOpened(!opened)}>
            <div data-testid="content">Content</div>
          </Panel>
        </div>
      </Wrapper>
    )
  }

  it('sould respond to external state change (open)', async () => {
    const { getByTestId } = render(<StateFull />)

    user.click(getByTestId('toggle-open'))

    const container = getByTestId('container')
    const content = await waitForElement(() => getByTestId('content'))

    expect(container).toContainElement(content)
  })

  it('sould respond to external state change (close)', async () => {
    const { getByTestId } = render(<StateFull defaultState={true} />)

    const content = getByTestId('content')
    const done = waitForElementToBeRemoved(() => getByTestId('content'))

    user.click(getByTestId('toggle-open'))
    await done
    const container = getByTestId('container')

    expect(container).not.toContainElement(content)
  })
})
