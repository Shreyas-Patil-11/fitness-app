import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/Heroposter_1.png';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '0px', xs: '0px' },
      p: '20px',
      bgcolor: '#2C2C2C',
      ml: { lg: '50px', xs: '30px' }, // Adjust margin-left for smaller screens
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${HeroBannerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: { xs: 'left', sm: 'center' }, // Move background to the right on small screens
      backgroundRepeat: 'no-repeat',
      // height: '800px', // Re-enable height if needed
    }}
  >
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ height: '100%', position: 'relative', zIndex: 1,  
        mt: { lg: '0px', xs: '60px' } // Margin-top for larger screens
       }}
    >
      {/* Text Section */}
      <Box sx={{ ml: { sm: '50px', xs: '0px' }, maxWidth: '600px' }}>
        <Typography 
          color="#E50914" 
          fontWeight="500" 
          fontSize="26px" 
          mt={{ xs: '0px', sm: '200px', lg: '100px' }} // Adjust margin-top for larger screens
        >
          Unleash Your Power
        </Typography>
        
        <Typography 
          fontWeight={600} 
          sx={{ 
            fontSize: { lg: '44px', xs: '40px' }, 
            color: '#F5F5F5' 
          }} 
          mb="23px" 
          mt={{ xs: '30px', sm: '30px', lg: '10px' }} // Adjust margin-top for larger screens
        >
          Stronger Every Day <br />
          One Step at a Time
        </Typography>
        
        <Typography 
          fontSize="22px" 
          lineHeight="35px" 
          color="#C0C0C0" 
          fontFamily='"Anton", sans-serif'
        >
          Discover tailored workouts that challenge you to achieve your personal best.
        </Typography>
        
        <Stack>
          <a 
            href="#exercises" 
            style={{ 
              marginTop: '45px', 
              textDecoration: 'none', 
              width: '200px', 
              textAlign: 'center', 
              background: '#E50914', 
              padding: '14px', 
              fontSize: '22px', 
              textTransform: 'none', 
              color: '#FFFFFF', 
              borderRadius: '4px' 
            }}
          >
            Start Your Journey
          </a>
        </Stack>
        
        <Typography 
          fontWeight={600} 
          color="#ffffff" 
          sx={{ 
            mt: '10px',
            opacity: '0.1', 
            display: { lg: 'block', xs: 'none' }, 
            fontSize: '200px' 
          }}
        >
          Exercise
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default HeroBanner;
