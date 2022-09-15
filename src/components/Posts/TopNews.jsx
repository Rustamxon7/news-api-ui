import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import sourcesApi from '../../api/sources';

import { MemoPost } from './Post';

import './Posts.scss';

const TopNews = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  const sources = useSelector((state) => state.sources);

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      setLoading(true);

      const res = await sourcesApi.topHeadlines();
      setTopHeadlines(res.data);
      setLoading(false);
    };

    fetchTopHeadlines();
  }, [sources]);

  return (
    <>
      {loading ? (
        <div className="posts__loading">LOADING.....</div>
      ) : (
        <>
          <h2 className="posts-heading">Latest News for You</h2>
          <div className="posts posts--top">
            {topHeadlines
              .sort((a, b) => b.id - a.id)
              .map((post) => (
                <MemoPost
                  key={post.id}
                  title={post.title}
                  img={post.image_url}
                  date={post.published_at}
                  createdAt={post.created_at}
                  link={post.url}
                  source={post.source}
                  des={post.description}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default TopNews;
