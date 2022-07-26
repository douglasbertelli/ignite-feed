import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/73892745?v=4" />
          <div className={styles.authorInfo}>
            <strong>Douglas Bertelli</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="25 de Julho ás 18:33h" dateTime="2022-07-25 18:33:20">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nostrum sed voluptatem error, laboriosam quasi natus dolor. Mollitia
          ducimus repellendus cumque itaque voluptatum, animi quam, recusandae
          numquam fugiat incidunt dolores?
        </p>
        <a href="">#rocketseat</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
