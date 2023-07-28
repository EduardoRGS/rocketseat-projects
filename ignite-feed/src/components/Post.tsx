import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale';


interface Props {
    author: { avatarUrl: string, name: string, role: string },
    content: { type: string, content: string}[],
    publisheAt: Date
}

export function Post({author, content, publisheAt}: Props) {
    const publishedDateformatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })
    const [comments, setComments] = useState<string[]>([])
    const [newComment, setNewComment] = useState<string>('')

    const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = () => {
        event?.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }


    return (
     <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar hasBorder src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateformatted} dateTime={publisheAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
                if(line.type === 'paragraph') {
                    return <p>{line.content}</p>
                } else if (line.type === 'link') {
                    return  <p><a href="#">{line.content}</a></p>
                }
            })}
            <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
        </div>

        <form onSubmit={handleCreateNewComment} 
        className={styles.commentForm}>
            <strong>Deixei seu feedback</strong>

            <textarea 
            onChange={e => setNewComment(e.target.value)} 
            value={newComment}
            placeholder='Deixe seu comentário'/>

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment content={comment} />
            })}
        </div>
     </article>
    );
}