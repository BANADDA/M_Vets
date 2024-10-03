"use client";

import { useEffect, useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center py-8 bg-gray-100"> {/* Centers the feed container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6"> {/* Increased width */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Latest Updates from MVet</h2> {/* Increased font size */}
        </div>
        <div className="twitter-feed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="MVet_Platform" // Your Twitter handle
            options={{ height: 700, width: '100%' }} 
            theme="light"
            noHeader
            noBorders
            noFooter
          />
        </div>
      </div>
    </div>
  );
};

export default TwitterFeed;
