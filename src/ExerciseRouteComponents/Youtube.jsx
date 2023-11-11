import React, { useEffect, useState } from 'react';
import { YoutubeData } from '../utils/YoutubeFetch';
import { useParams } from 'react-router-dom';
import FatchData from '../utils/FatchData';

const Youtube = () => {
  const [data,setdata] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exerciseData = await FatchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
        );

        const youtubeData = await YoutubeData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`
        );

        setdata(youtubeData.contents); 
        console.log(data); 
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <h1>Related YouTube videos </h1>
      {data.slice(0, 4).map((data) => (
      <a 
      key={data.video.videoId} 
      href={`https://www.youtube.com/watch?v=${data.video.videoId}`} 
      target='_blank' 
      rel='noopener noreferrer'
     >
        <img src={data.video.thumbnails[0].url} alt="Thumbnail" />
        <div>
          <p>{data.video.lengthText}</p>
        </div>
        <div>
          <p>By {data.video.channelName}</p>
          <p>{data.video.publishedTimeText}</p>
        </div>
      </a>
    ))}
    </div>
  );
};

export default Youtube;
