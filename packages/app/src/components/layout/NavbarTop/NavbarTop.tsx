import * as React from 'react';
import { styled, alpha, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
// import Divider from '@material-ui/core/Divider';
// import ArchiveIcon from '@material-ui/icons/Archive';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './NavbarTop.css';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.type === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
export interface ButtonWithMenuProps {
  text: string;
  options: [];
}
export interface CustomMenuWithProps {
  title?: string;
  linkTo?: string;
}

function CustomizedMenus({ title }: CustomMenuWithProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        //   variant="contained"
        color="primary"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        CATALOG
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // left: '50%',
            transform: 'translateY(20%)',
          },
        }}
      >
        <Link href="/api-docs">
          <MenuItem onClick={handleClose} disableRipple>
        {/* <EditIcon /> */}

            API
          </MenuItem>
        </Link>
        <Link href="/catalog">
          <MenuItem onClick={handleClose} disableRipple>
        {/* <FileCopyIcon /> */}

            SOFTWARE
          </MenuItem>
        </Link>
        {/* <Divider /> */}
        <Link href="/docs">
          <MenuItem onClick={handleClose} disableRipple>
        {/* <ArchiveIcon /> */}

            DOCS
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from '@material-ui/core';
import { LinkButton } from '@backstage/core-components';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 10,
    position: 'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavbarTop({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Link href="/settings">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="default"
              aria-label="open drawer"
            >
              <SettingsIcon />
            </IconButton>
          </Link>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="open drawer"
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link href="/" color="textPrimary" underline="none">
              WIPO Developer Portal
            </Link>
          </Typography>

          {/* <Link href="/"> */}
          <Button
            id="demo-customized-button"
            // aria-haspopup="true"
            //   variant="contained"
            color="primary"
            disableElevation
            // onClick={handleClick}
            // endIcon={<KeyboardArrowDownIcon />}
          >
            API Playbook
          </Button>
          {/* </Link> */}

          <Link href="/">
            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              //   variant="contained"
              color="primary"
              disableElevation
              // onClick={handleClick}
              // endIcon={<KeyboardArrowDownIcon />}
            >
              API Docs
            </Button>
          </Link>

          <CustomizedMenus title="Catalog" />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
