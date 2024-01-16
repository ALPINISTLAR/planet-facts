import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    bodyBackground: 'hsl(240, 67%, 8%)',
    white: 'hsl(0, 0%, 100%)',
    whiteTransparent: 'rgba(255,255,255, 0.5)',
    darkGrey: '#38384F',
    lightGrey: '#838391',
    cerulean: '#419EBB',
    tulipTree: '#EDA249',
    purple: '#6f2ed6',
    valencia: '#D14C32',
    bloodMoon: '#D83A34',
    rustyNail: '#CD5120',
    caribbeanGreen: '#1ec2a4',
    blue: '#2d68f0',
  },

  screenSize: {
    desktop: '144rem',
  },

  transitionDuration: {
    duration: '.8s',
    fadeInDuration: '.5s',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;