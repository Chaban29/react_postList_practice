import React from "react";
import classes from "../styles/main.module.scss";

const PostItem = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.post__content}>
        <div className={classes.post__items}>
          <strong className={classes.post__number}>
            {props.number}. {props.post.title}
          </strong>
          <div className={classes.post__description}>{props.post.body}</div>
        </div>
        <button
          onClick={() => {
            props.remove(props.post);
          }}
          className={classes.post__delete}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostItem;
