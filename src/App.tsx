import React, { useState, useEffect } from "react";
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./styles/global.css";
import styles from "./styles/App.module.css";

import { authUser } from "./core/mock/user";
import { api } from "./services/api";
import { AxiosResponse } from "axios";
import { PostProps } from "./core/types/app";

/**
 * Componente principal da aplicação
 * @returns
 */
export function App() {
  const [user, setUser] = useState(authUser);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(handleGetPostData, []);

  /**
   * Requisita na API os posts com os comentários
   * @void
   */
  function handleGetPostData(): void {
    api
      .get("/posts?_embed=comments")
      .then(({ data }: AxiosResponse<PostProps[]>) => {
        setPosts(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar {...user} />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </main>
      </div>
    </>
  );
}
