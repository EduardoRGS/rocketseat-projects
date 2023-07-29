import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface Props {
    content: string
    onDeleteComment: (cooment: string) => void
}

export function Comment({content, onDeleteComment}: Props)  {

    const [likeCount, setLikeCount] = useState(0)


    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount(likeCount + 1)
    }


    return (
    <div className={styles.comment}>
        <Avatar src='https://github.com/EduardoRGS.png' />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>

                    <div className={styles.authorAndTime}>
                        <strong>Eduardo Ribeiro</strong>
                        <time title='26 de Julho ás 09:05h'
                         dateTime='2023-7-26 09:05:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} 
                    title='Deleter comentário'>
                        <Trash size={24}></Trash>
                    </button>

                </header>

                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>

        </div>
    </div>
    )
}