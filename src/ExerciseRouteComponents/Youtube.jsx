import React, { useEffect, useState } from "react";
import { YoutubeData } from "../utils/YoutubeFetch";
import { useParams } from "react-router-dom";
import FatchData from "../utils/FatchData";
import "./youtube.css";

const Youtube = () => {
  const [data, setdata] = useState([]);
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
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="youtube-video-main-div">
      <h1 className="header-youtube">Related YouTube videos </h1>
      <div className="youtube-video-div-top">
        {data.slice(0, 8).map((data) => (
          <a
            key={data.video.videoId}
            href={`https://www.youtube.com/watch?v=${data.video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          > <div className="border-div">
            <div className="youtube-video-div">
              <img
                className="youtube-video-img"
                src={data.video.thumbnails[0].url}
                alt="Thumbnail"
              />
              <div className="length-text-video">{data.video.lengthText}</div>
              </div> 
              <div className="text-video-name">
              <p className="p-tag-video">By {data.video.channelName}</p>
              <p className="p-tag-video">{data.video.publishedTimeText}</p>
             </div>
           </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
