"use client";

import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import galleryData from '../data/galleryData';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export function Gallery() {
  return (
    <div style={{ padding: '3rem 0', backgroundColor: '#f3f4f6', paddingLeft: '10px', paddingRight: '10px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Gallery</h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1.5rem',
        padding: '0 1rem',
        whiteSpace: 'nowrap'
      }}>
        {galleryData.map((item, index) => (
          <div key={index} style={{
            display: 'inline-block',
            width: '300px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            transition: 'transform 0.3s ease',
            marginRight: '1.5rem'
          }}>
            <Slider {...sliderSettings}>
              {item.images.map((image, i) => (
                <div key={i} style={{ height: '200px' }}>
                  <img
                    src={image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </Slider>
            <div style={{
              padding: '1rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{item.title}</h3>
              <p style={{ margin: '0.5rem 0', color: '#555' }}>{item.description}</p>
              <p style={{ margin: '0', fontStyle: 'italic', fontSize: '0.9rem', color: '#888' }}>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
