import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import user from '@testing-library/user-event'

import Select from './index'
import { ThemeProvider } from 'styled-components'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
)

it('should call onChange when user select another option', async () => {
  const onChange = jest.fn()

  const { getByTestId, findByTestId } = render(
    <Wrapper>
      <Select options={[
        { value: 10 },
        { value: 20 },
        { value: 30 },
      ]} onChange={onChange} />
    </Wrapper>
  )

  user.click(getByTestId('select'))
  user.click(await findByTestId('option-20'))

  expect(onChange).toHaveBeenCalledWith(20)
})
