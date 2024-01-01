import React from "react";
import { useState } from "react";
import Input from "../UI/input/Input";
import classes from "../styles/main.module.scss";
import Button from "../UI/button/Button";
import PostItem from "../Posts/PostItem";
import Select from "../UI/Select/Select";
import styled from "styled-components";

const SelectInput = styled.input`
  color: skyblue;
  padding: 12px 15px;
  outline: none;
  background: #f3f5f9;
  border-radius: 12px;
  box-shadow: 3px 2px 3px #fff;
  border: 3px solid skyblue;
`;

const Form = (props, remove) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript is programming language",
    },
    {
      id: 2,
      title: "TypeScript",
      body: "TypeScript is programming language",
    },
    {
      id: 3,
      title: "Sass",
      body: "Sass is CSS Prerocesor",
    },
  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortPosts = (post) => {
    setSelectedSort(post);
    setPosts([...posts].sort((a, b) => a[post].localeCompare(b[post])));
  };

  //Сортування посту

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // Видалення посту

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  // Додавання нового посту

  return (
    <>
      <SelectInput
        type="text"
        placeholder="Search:"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортування по:"
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
      />
      <form action="#" className={classes.form}>
        <div className={classes.form__inputs}>
          <Input
            padding="12px 15px"
            value={post.title}
            placeholder="Post Title: "
            onChange={(event) =>
              setPost({ ...post, title: event.target.value })
            }
          />
          <Input
            padding="12px 15px"
            value={post.body}
            onChange={(event) => setPost({ ...post, body: event.target.value })}
            placeholder="Post Body: "
          />
          <Button onClick={addNewPost} name="Create Post" />
        </div>
      </form>
      <div className={classes.main__post}>
        <h1 className={classes.post__title}>{props.title}</h1>
        {posts.length < 1 ? (
          <h1 style={{ textAlign: "center", color: "skyblue" }}>
            Posts is not defined
          </h1>
        ) : (
          ""
        )}
        {posts.map((post, index) => (
          <PostItem
            remove={removePost}
            key={post.id}
            number={index + 1}
            post={post}
          />
        ))}
      </div>
    </>
  );
};

export default Form;
