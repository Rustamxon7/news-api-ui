import React from 'react';

import './Post.scss';
import { formatDate } from '../utils/formatDate';

const Post = (props) => {
  return (
    <div className="post">
      <div>
        <a
          className="post__title"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.title}
        </a>
        <p className="post__description">{props.des && props.des}</p>
        <span className="post__date">
          {formatDate(props.date || props.createdAt)}
        </span>
        <a href={props.source} className="post__src">
          {props.source}
        </a>
      </div>
      <img className="post__img" src={props.img} alt={props.title} />
    </div>
  );
};

export const MemoPost = React.memo(Post);
