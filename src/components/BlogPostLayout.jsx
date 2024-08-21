import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import BlogPostCard from './BlogPostCard'; // Import the BlogPostCard component
import DrawerAppBar from './DrawerAppBar';
import RecentBlogPostCard from './RecentBlogPostCard'; // Import the RecentBlogPostCard component
import TopSection from './TopSection';

const drawerWidth = 200; // Reduced sidebar width

const topics = [
  'All Topics',
  'Technology',
  'Health',
  'Finance',
  'Education',
  'Entertainment',
  'Sports',
  'Travel',
  'Lifestyle',
  'Science',
];

function BlogPostLayout({ posts }) {
  const [selectedTopic, setSelectedTopic] = React.useState('All Topics');

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredPosts = selectedTopic === 'All Topics'
    ? posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    : posts.filter((post) => post.topic === selectedTopic);

  const mostRecentPost = selectedTopic === 'All Topics' && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const otherPosts = selectedTopic === 'All Topics' && filteredPosts.length > 1 ? filteredPosts.slice(1) : filteredPosts;

  const sidebar = (
    <Box sx={{ width: drawerWidth, padding: '16px 0' }}>
      <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
        Topics
      </Typography>
      <List>
        {topics.map((topic) => (
          <ListItem key={topic} disablePadding>
            <ListItemButton
              selected={selectedTopic === topic}
              onClick={() => handleTopicSelect(topic)}
              sx={{
                backgroundColor: selectedTopic === topic ? '#DFF2E1' : 'inherit',
                fontWeight: selectedTopic === topic ? 'bold' : 'normal',
                paddingLeft: '16px',
                paddingRight: '8px',
              }}
            >
              <ListItemText primary={topic} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <DrawerAppBar />
      <TopSection />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: '32px 8px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} sx={{ alignSelf: 'flex-start' }}> {/* Reduced width here */}
            <Box sx={{ padding: '16px', borderRadius: '8px' }}>
              {sidebar}
            </Box>
          </Grid>
          <Grid item xs={12} md={10} sx={{ textAlign: 'left' }}> {/* Ensure content is aligned to the left */}
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '32px', marginLeft: '-10%' }} // Center with left alignment bias
              >
                {selectedTopic === 'All Topics' ? 'Blog & News' : selectedTopic}
              </Typography>

              {mostRecentPost && (
                <Box sx={{ marginBottom: '32px' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      textAlign: 'left',
                      position: 'relative',
                      paddingBottom: '8px',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '33%', // Span one-third of the section width
                        height: '4px',
                        backgroundColor: 'green',
                      },
                    }}
                  >
                    Most Recent
                  </Typography>
                  <RecentBlogPostCard
                    title={mostRecentPost.title}
                    date={mostRecentPost.date}
                    authorName={mostRecentPost.authorName}
                    image={mostRecentPost.image}
                    caption={mostRecentPost.caption}
                    topic={mostRecentPost.topic}
                  />
                </Box>
              )}

              {otherPosts.length > 0 && (
                <>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      textAlign: 'left',
                      position: 'relative',
                      paddingBottom: '8px',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '33%', // Span one-third of the section width
                        height: '4px',
                        backgroundColor: 'green',
                      },
                    }}
                  >
                    Popular Posts
                  </Typography>
                  <Grid container spacing={4}>
                    {otherPosts.map((post, index) => (
                      <Grid item xs={12} sm={6} md={3} key={index}> {/* 4 cards per row on medium screens */}
                        <BlogPostCard
                          authorName={post.authorName}
                          datePosted={post.date}
                          title={post.title}
                          image={post.image}
                          caption={post.caption}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

BlogPostLayout.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      authorName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      image: PropTypes.string,
      topic: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPostLayout;
