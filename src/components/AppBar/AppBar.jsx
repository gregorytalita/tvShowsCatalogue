import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  OutlinedInput,
  Hidden,
  Box
} from '@material-ui/core';

import { Search as SearchIcon, Clear as ClearIcon } from '@material-ui/icons';

const AppBar = ({ onClickSearch, history }) => {

  const [search, setSearch] = useState('');

  const handleKeyUp = () => {

    if (search.length) {
      setSearch(search)
      onClickSearch(search)
    } else {
      handleOnClickClear()
    }

  }

  const handleOnClickClear = () => {
    setSearch('')
    history.push('/dashboard')
  }

  const getEndAdornment = () => {

    if(search.length) {
      return (
        <IconButton onClick={() => handleOnClickClear()}>
          <ClearIcon color='secondary' />
        </IconButton>
      )
    }

  }

  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          paddingY={2}
        >

          <Hidden smDown>
            <Typography variant="h6" noWrap>
              My catalog
            </Typography>
          </Hidden>

          <Box width='50%'>
            <OutlinedInput
              value={search}
              color='secondary'
              startAdornment={<SearchIcon color='secondary' />}
              endAdornment={getEndAdornment()}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              onChange={({ target }) => setSearch(target.value)}
              onKeyUp={handleKeyUp}
            />
          </Box>

        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar