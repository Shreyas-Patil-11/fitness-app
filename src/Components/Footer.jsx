import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../assets/images/logo-2__1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#1C1C1C"> {/* Matte Black background */}
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '90px', height: '90px', margin: '0 20px' }} />
      </Stack>

      {/* Social Links */}
      <Stack direction="row" spacing={2} justifyContent="center" mt="20px">
        <IconButton
          href="YOUR_LINKDIN_LINK"
          target="_blank"
          aria-label="LinkedIn"
          sx={{
            color: '#FFFFFF', // White color for default state
            '&:hover': {
              backgroundColor: '#333333', // Darker background on hover
              color: '#0A66C2', // LinkedIn blue on hover
            },
          }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="mailto:YOUR_MAIL_ID"
          aria-label="Gmail"
          sx={{
            color: '#FFFFFF', // White color for default state
            '&:hover': {
              backgroundColor: '#333333', // Darker background on hover
              color: '#D14836', // Gmail red on hover
            },
          }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="YOUR_GITHUB_PROFILE"
          target="_blank"
          aria-label="GitHub"
          sx={{
            color: '#FFFFFF', // White color for default state
            '&:hover': {
              backgroundColor: '#333333', // Darker background on hover
              color: '#FFFFFF', // White color on hover
            },
          }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Stack>

      {/* Footer Text */}
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, color: '#F5F5F5' }} mt="41px" textAlign="center" pb="40px">
        Made by Shreyas Patil
      </Typography>
    </Box>
  );
};

export default Footer;
