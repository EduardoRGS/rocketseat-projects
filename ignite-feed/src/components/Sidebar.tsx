import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"></img>

            <div className={styles.profile}>
                <img
                className={styles.avatar}
                 src="https://github.com/EduardoRGS.png"></img>

                <strong>Eduardo Ribeiro</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}