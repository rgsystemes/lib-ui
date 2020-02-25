import React, { useState } from 'react'

import { Search as SearchIcon } from 'styled-icons/material/Search'

import { TextField, Icon } from '../../Atoms'
import InputAdornment from '../../Atoms/Input/InputAdornment'
import FlexBox from '../../Templates/FlexBox'

const Search = ({ onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <FlexBox
      component={TextField}
      flexGrow={1}
      size="small"
      value={searchTerm}
      onChange={event => setSearchTerm(event.target.value)}
      InputProps={{
        endAdornment:
          <InputAdornment>
            <Icon
              Component={SearchIcon}
              data-testid="search-button"
              onClick={() => onSearch(searchTerm)}
            />
          </InputAdornment>,
      }}
      {...props}
    />
  )
}

export default Search
