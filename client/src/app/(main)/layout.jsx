import React from 'react';
import { DoubleNavbar } from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div style={{ 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        bottom: 0,
        width: '80px', // Adjust this width to match your DoubleNavbar width
        zIndex: 1000 
      }}>
        <DoubleNavbar />
      </div>
      <div style={{ 
        flexGrow: 1, 
        overflow: 'auto', 
        marginLeft: '300px', // Should match the width of the navbar
        width: 'calc(100% - 80px)' // Ensure content takes full width minus navbar
      }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;