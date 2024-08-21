import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', link: '/' },
  { label: 'About-US', link: '/about-us' },
  { label: 'What We Do', link: '/what-we-do' },
  { label: 'Resources', link: 'https://github.com/MVet-Platform/ELISA-ML/tree/main', external: true },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter(); // Hook for navigation

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    if (item.external) {
      return; // Do nothing if it's an external link
    }
    router.push(item.link);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        M-Vet
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.external ? (
              <ListItemButton component="a" href={item.link} target="_blank" rel="noopener noreferrer" sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClick(item)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        paddingY: '10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Box sx={{
              width: '10px',
              height: '10px',
              backgroundColor: 'green',
              borderRadius: '50%',
            }} />
            <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold' }}>
              M-VET
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px', alignItems: 'center' }}>
            {navItems.map((item) => (
              item.external ? (
                <Button
                  key={item.label}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#000',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding: '6px 12px',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderBottom: '2px solid #000'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  onClick={() => handleNavItemClick(item)}
                  sx={{
                    color: '#000',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding: '6px 12px',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderBottom: '2px solid #000'
                    }
                  }}
                >
                  {item.label}
                </Button>
              )
            ))}
          </Box>
          <Button variant="contained" sx={{
            backgroundColor: '#055A0F',
            color: 'white',
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}>
            Contact Us
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}
