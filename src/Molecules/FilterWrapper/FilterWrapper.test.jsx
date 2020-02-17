import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { TransProvider } from '../../Atoms/Trans'
import { ThemeProvider } from 'styled-components'

import BaseFilterWrapper from './index'

const FilterWrapper = props =>
  <ThemeProvider theme={{}}>
    <TransProvider value={{}}>
      <BaseFilterWrapper {...props}/>
    </TransProvider>
  </ThemeProvider>

it('should call on clear when clicking on trash icon', () => {
  const onClear = jest.fn()
  const { getByText } = render(<FilterWrapper onClear={onClear}/>)

  userEvent.click(getByText('global.remove'))
  expect(onClear).toHaveBeenCalled()
})
