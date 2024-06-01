"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import galleryData from '../data/galleryData';

const getRandomDirection = () => {
  const directions = ['left', 'right', 'up', 'down'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const getRandomSpeed = () => Math.floor(Math.random() * 5000) + 1000; // Random speed between 1s and 6s

export function Gallery() {
  // Only use the first 8 items from the galleryData
  const limitedGalleryData = galleryData.slice(0, 6);

  return (
    <div style={{ padding: '3rem 0', backgroundColor: '#f3f4f6', paddingLeft: '10px', paddingRight: '10px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {limitedGalleryData.map((item, index) => (
          <div key={index} style={{
            position: 'relative',
            gridRow: item.size === 'large' ? 'span 2' : 'span 1',
            gridColumn: item.size === 'large' ? 'span 2' : 'span 1',
            height: item.size === 'large' ? '400px' : '200px',
            overflow: 'hidden',
          }}>
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={getRandomSpeed()}
              cssEase="linear"
              vertical={getRandomDirection() === 'up' || getRandomDirection() === 'down'}
              verticalSwiping={getRandomDirection() === 'up' || getRandomDirection() === 'down'}
            >
              {item.images.map((image, i) => (
                <div key={i} style={{ height: '100%' }}>
                  <img
                    src={image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </Slider>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '0 0 0.5rem 0.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
