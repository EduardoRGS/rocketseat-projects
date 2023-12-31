import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import'./global.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/EduardoRGS.png',
      name: "Eduardo Ribeiro",
      role: 'Dev Software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
   ],
   publisheAt: new Date('2023-07-18 20:00:00')
  }, {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/EduardoRGS.png',
      name: "Eduardo Ribeiro",
      role: 'Dev Software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
   ],
   publisheAt: new Date('2023-07-27 21:00:00')
  },
]

function App() {

  return (
    <div>
    <Header></Header>
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publisheAt={post.publisheAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}

export default App
