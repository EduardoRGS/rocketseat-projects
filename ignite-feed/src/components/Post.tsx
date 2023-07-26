import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
    return (
     <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src='https://github.com/EduardoRGS.png'/>
                <div className={styles.authorInfo}>
                    <strong>Eduardo Ribeiro</strong>
                    <span>FullStack Developer</span>
                </div>
            </div>

            <time dateTime='2023-97-25 08:13:30'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="#">jane.design/doctorcare</a></p>
            <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixei seu feedback</strong>

            <textarea placeholder='Deixe seu comentário' />

            <footer>
                <button type='submit'>Publicar</button>
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