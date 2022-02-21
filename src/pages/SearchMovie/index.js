import { API_KEY } from 'services/settings';
import getVideos from 'services/getVideos';
import VideoMovie from 'components/VideoMovie';
import { useState, useEffect } from 'react';
import NavigationBar from 'layouts/NavigationBar';

function SearchMovie({ params }) {
  const { fetchUrl, id } = params;
  const [video, setVideo] = useState('');

  useEffect(() => {
    const VIDEO_URL = `/${fetchUrl}/${id}/videos?api_key=${API_KEY}`;
    getVideos({ fetchUrl: VIDEO_URL }).then(data => {
      const key = data.results.map(element => element.key);
      setVideo(key[Math.floor(Math.random() * key.length)] || key[0]);
    });
  }, []);

  return (
    <div>
      <NavigationBar />
      {video && <VideoMovie videoId={video} />}
    </div>
  );
}

export default SearchMovie;
