import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comment()  {
    return (
    <div className={styles.comment}>
        <Avatar src='https://github.com/EduardoRGS.png' />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>

                    <div className={styles.authorAndTime}>
                        <strong>Eduardo Ribeiro</strong>
                        <time title='26 de Julho ás 09:05h' dateTime='2023-7-26 09:05:30'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deleter comentário'>
                        <Trash size={24}></Trash>
                    </button>

                </header>

                <p>Muito bom Devon, parabéns!! 👏👏 </p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>

        </div>
    </div>
    )
}