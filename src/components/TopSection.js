import { Box, Button, TextField, Typography } from '@mui/material';

export default function TopSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/image/bg.png)", // Directly reference the image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingY: '60px',
        paddingX: '20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: '#fff', // Set text color to white
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
          M-Vet Blog
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto' }}>
          Welcome to the M-Vet Blog, where we explore the latest in veterinary technology and innovations. 
          Stay informed with expert insights, industry updates, and exclusive resources designed to enhance 
          your knowledge and practice. Subscribe to stay connected with the future of animal healthcare.
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '600px',
            margin: '30px auto 0', // Added margin-top of 24px
            borderRadius: '5px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff', // Background of the form to keep it readable
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            size="medium"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px 0 0 10px',
                padding: '12px 16px',
              },
              '& fieldset': {
                border: 'none',
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              paddingY: '30px',
              paddingX: '30px',
              borderRadius: '0 0px 0px 0',
              backgroundColor: '#1B9A1D',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#238310',
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
