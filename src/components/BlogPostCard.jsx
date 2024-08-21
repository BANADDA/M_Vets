import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 320, // Increased width of the cards
  height: 440, // Slightly increase the height to accommodate extra padding
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  paddingBottom: '20px', // Add bottom padding to the card
  '&:hover': {
    transform: 'scale(1.05)', // Slightly scale the card on hover
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add a shadow on hover
  },
}));

const BlogPostCard = ({ authorName, datePosted, title, image, caption }) => {
  // Function to get initials from the author's name
  const getInitials = (name) => {
    if (!name) {
      return '?'; // Return a default value like '?' if name is undefined
    }
    
    const namesArray = name.split(' ');
    if (namesArray.length > 1) {
      return namesArray[0][0] + namesArray[1][0];
    } else {
      return name[0];
    }
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="author">
            {getInitials(authorName)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={authorName} // Display the author's name
        subheader={datePosted} // Display the date slightly below the name
      />
      <CardMedia
        component="img"
        height="140" // Reduced image height
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: '8px', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: 2, // Limit title to 2 lines
            WebkitBoxOrient: 'vertical' 
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            marginBottom: '8px', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            display: '-webkit-box', 
            WebkitLineClamp: 3, // Limit excerpt to 3 lines
            WebkitBoxOrient: 'vertical' 
          }}
        >
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', paddingLeft: '8px', paddingRight: '8px' }}> {/* Add padding to actions */}
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default BlogPostCard;
