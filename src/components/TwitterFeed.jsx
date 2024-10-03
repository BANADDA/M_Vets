"use client";

import { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterAndLinkedInFeeds = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="flex justify-between px-10 w-full py-8 bg-gray-100"> {/* Full width layout */}
      <div className="flex w-full justify-between space-x-8"> {/* Spacing between feeds */}
        
        {/* Twitter Feed */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6 pb-0"> {/* Twitter feed takes half width */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Latest from Twitter</h2>
          </div>
          <div className="twitter-feed">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="MVet_Platform" // Your Twitter handle
              options={{ height: 900, width: '100%' }}
              theme="light"
              noHeader
              noBorders
              noFooter
            />
          </div>
        </div>

        {/* LinkedIn Feed via iframe */}
        <div className="w-1/2 bg-white rounded-lg shadow-md p-6"> {/* LinkedIn feed takes half width */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Latest from LinkedIn</h2>
          </div>
          <div className="linkedin-feed">
            <iframe 
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25471061" 
              frameBorder="0" 
              width="100%" 
              height="1000"
              title="LinkedIn Feed"
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TwitterAndLinkedInFeeds;
