import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  OutlinedInput,
  MenuItem,
  Menu,
  Button,
  Hidden,
  Box
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const AppBar = ({ menuItems = [], onClickSearch }) => {

  const [anchorEl, handleAnchorEl] = useState(null);
  const [search, handleSearch] = useState('');

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    handleAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    handleAnchorEl(null);
  };

  const handleSearchField = ({ code }) => {

    if (code === "Enter") {
      handleOnClickSearch()
    }

  }

  const handleOnClickSearch = () => {

    if (search.length) {
      onClickSearch(search)
      handleSearch('')
    }

  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        menuItems.length && menuItems.map(({ label, onClick, ...rest }) => (
          <MenuItem onClick={onClick} {...rest}>
            <p>{label}</p>
          </MenuItem>
        ))
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <>

      <MuiAppBar position="fixed">
        <Toolbar>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
            py={2}
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
                endAdornment={
                  <IconButton onClick={() => handleOnClickSearch()}>
                    <SearchIcon color='secondary' />
                  </IconButton>
                }
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
                onChange={({ target }) => handleSearch(target.value)}
                onKeyUp={handleSearchField}
              />
            </Box>

            <Hidden smDown>
              <Button
                disabled={!menuItems.length}
                edge="end"
                aria-label="Movie genres"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                Movie genres
              </Button>
            </Hidden>

            <Hidden mdUp>
              <IconButton
                disabled={!menuItems.length}
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Hidden>

          </Box>
        </Toolbar>
      </MuiAppBar>
      {renderMenu}
    </>
  );
}

export default AppBar