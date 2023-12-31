import React from "react";
import classes from "./components/styles/main.module.scss";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
import { useState } from "react";
import PostItem from "./components/Posts/PostItem";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript is programming language",
    },
    {
      id: 2,
      title: "JavaScript",
      body: "JavaScript is programming language",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "JavaScript is programming language",
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className={classes.app}>
      <form action="#" className={classes.form}>
        <div className={classes.form__inputs}>
          <Input
            value={title}
            placeholder="Post Name: "
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Post Value: "
          />
          <Button onClick={addNewPost} name="Create Post" />
        </div>
      </form>
      <div className={classes.main__post}>
        <h1 className={classes.post__title}>{props.title}</h1>
        {posts.map((post, index) => (
          <PostItem key={post.id} number={index + 1} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
