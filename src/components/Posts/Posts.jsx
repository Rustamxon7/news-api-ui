import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import sourcesApi from '../../api/sources';
import { links } from './Links';

import { MemoPost } from './Post';
import { MemoNavButton } from '../UI/Button';

import './Posts.scss';

const TopNews = React.lazy(() => import('./TopNews'));

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('all_sources');

  const sources = useSelector((state) => state.sources);

  useEffect(() => {
    fetchPosts();
  }, [sources]);

  const fetchPosts = async () => {
    setLoading(true);

    const res = await sourcesApi.getSources();
    setPosts(res.data);

    setLoading(false);
  };

  const fetchNewsBySource = async (e) => {
    const res = await sourcesApi.getNewsBySource(e);
    setPosts(res.data);
  };

  const handleActive = (e) => {
    setActive(e);
  };

  return (
    <>
      {loading ? (
        <div className="posts__loading">LOADING.....</div>
      ) : (
        <>
          <TopNews />
          <h2 className="posts-heading">All Stories</h2>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              <MemoNavButton
                className="posts__select"
                link={link.link}
                onClick={() => fetchNewsBySource(link.link)}
                onMouseDown={() => handleActive(link.link)}
                active={active}
                children={link.name}
              />
            </React.Fragment>
          ))}

          <div className="posts posts--top">
            {posts.map((post) => (
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

export default Posts;
