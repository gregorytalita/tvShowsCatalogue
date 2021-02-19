import React, { useState } from 'react'
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  OutlinedInput,
  Hidden,
  Box,
  Button
} from '@material-ui/core'

import {
  Search as SearchIcon,
  Clear as ClearIcon,
  LiveTv as LiveTvIcon
} from '@material-ui/icons'

const AppBar = ({ onClickSearch, history }) => {
  const [search, setSearch] = useState('')

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

  const endAdornmentButton = search.length
  ? (
    <IconButton onClick={() => handleOnClickClear()}>
      <ClearIcon color='secondary' />
    </IconButton>
  )
  : null

  return (
    <MuiAppBar position='fixed'>
      <Toolbar>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          paddingY={2}
        >

          <Hidden smDown>
            <Button startIcon={<LiveTvIcon />} color='inherit'>
              <Typography variant='h6' noWrap>
                My TV catalog
              </Typography>
            </Button>
          </Hidden>

          <Box width='75%'>
            <OutlinedInput
              value={search}
              color='secondary'
              startAdornment={<SearchIcon color='secondary' />}
              endAdornment={endAdornmentButton}
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              onChange={({ target }) => setSearch(target.value)}
              onKeyUp={handleKeyUp}
            />
          </Box>

        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
