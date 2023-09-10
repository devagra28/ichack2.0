import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Container } from '@mui/system';
import CustomButton from './CustomButton';
import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useState } from 'react';

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'Sponsor', icon: <FeaturedPlayListIcon />, href: '/sponsor' },
    { text: 'Tracks', icon: <MiscellaneousServicesIcon />, href: '/track' },
    // { text: "Schedule", icon: <ListAltIcon />, href: "/schedule" },
    { text: 'Contact', icon: <ContactsIcon />, href: '/contact' },
    { text: 'Team', icon: <ContactsIcon />, href: '/team' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link component={RouterLink} to={item.href}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    fontSize: '14px',
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <Drawer anchor="left" open={mobileMenu['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          <Typography variant="h5" fontWeight="bold">
            IC Hacks '23
          </Typography>
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2" href="/">
            Home
          </NavLink>
             <NavLink variant="body2" href="/about">
            About
          </NavLink>
          <NavLink variant="body2" href="/sponsor">
            Sponsors
          </NavLink>
          <NavLink variant="body2" href="/track">
            Tracks
          </NavLink>
          {/* <NavLink variant="body2" href="/schedule">
            Schedule
          </NavLink> */}
          <NavLink variant="body2" href="/contact">
            Contact
          </NavLink>
         
        </NavbarLinksBox>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
