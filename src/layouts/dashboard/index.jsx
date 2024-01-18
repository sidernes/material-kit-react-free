import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  useEffect(() => {
    console.log('sidebarVisible: ', sidebarVisible);
  }, [sidebarVisible]);

  return (
    <>
      <Header
        onOpenNav={() => {
          setOpenNav(true);
          setSidebarVisible(true);
        }}
        hideSidebar={() => setSidebarVisible(!sidebarVisible)}
        sidebarVisible={sidebarVisible}
      />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        {sidebarVisible && (
          <Nav openNav={openNav} openSidebar={false} onCloseNav={() => setOpenNav(false)} />
        )}

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
