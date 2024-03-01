import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CompanyLogo from "../../assets/ns_logo.png";
import Link from '@mui/material/Link';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useNavigate } from 'react-router-dom';
import "./appbar.css"

const drawerWidth = 240;
const navItems = ['About', 'Contact'];

function DrawerAppBar(props) {
  const { window, headerBg } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Home
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} component="button" onClick={() => {
              navigate(`/${String(item).toLowerCase()}`)
              handleDrawerToggle()
            }
            }>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const appBarTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  function handleLinkClick(event, linkString) {
    navigate(`/${String(linkString).toLowerCase()}`)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll  {...props}>
        <AppBar
          className='appbar-custom'
          component="nav"
          sx={{
            background: headerBg === "/"
              ?
              (appBarTrigger ? "linear-gradient(to right, #0074e2, #1a3280)" : "transparent")
              :
              "linear-gradient(to right, #0074e2, #1a3280)",
            transition: '0.5s ease'
          }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box className="companyLogoWrapper" onClick={() => navigate("/")}>
              <img src={CompanyLogo} alt="NS COMPUTER HUB" style={{ height: '40px' }} />
              <span className="companyNameText">NS COMPUTER HUB</span>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link
                  component="button"
                  underline='hover'
                  onClick={(e) => handleLinkClick(e, item)}
                  key={item}
                  className='headerLinks'
                  sx={{ margin: '0px 1.5rem', color: 'white', fontWeight: '500', fontSize: '1.3rem', fontFamily: "Poppins, sans-serif" }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll >
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor='right'
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            hideBackdrop: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
