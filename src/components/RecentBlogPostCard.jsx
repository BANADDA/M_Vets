import { Avatar, Box, Button, Typography } from '@mui/material';

const RecentBlogPostCard = ({ title, date, authorName, image, excerpt, topic }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '16px',
        position: 'relative', // Set the container to relative position
      }}
    >
      <Box
  component="img"
  sx={{
    width: '50%',
    height: '350px', // Increase the height slightly
    borderRadius: '8px',
    objectFit: 'cover', // Ensure the image covers the area
  }}
  src={image}
  alt={title}
/>
      <Box sx={{ paddingLeft: '16px', width: '50%', position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <Avatar sx={{ bgcolor: 'green', marginRight: '8px' }}>
            {authorName.split(' ').map((n) => n[0]).join('')}
          </Avatar>
          <Typography variant="body2" color="textSecondary">
            {authorName}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            backgroundColor: 'green',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            marginBottom: '8px',
            display: 'inline-block',
          }}
        >
          {topic}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
          {excerpt}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{            
            backgroundColor: 'green',
            position: 'absolute', // Position absolutely within the container
            bottom: '16px', // Align to the bottom with padding
            right: '16px', // Align to the right with padding
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default RecentBlogPostCard;
