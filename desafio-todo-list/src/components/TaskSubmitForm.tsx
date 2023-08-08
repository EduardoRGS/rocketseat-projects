import { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react";

import styles from './TaskSubmitForm.module.css'

export type TaskTypes = {
    id: string
    title: string
    isComplete: boolean
}

interface Props {
    tasks: TaskTypes[]
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
}

export function TaskSubmitForm({tasks, setTasks}:Props) {
    const [newTask, setNewTask] = useState("");

    const handleTaskSubmit = (event: FormEvent) => {
        event.preventDefault()

        setTasks([{id: uuidv4(), title: newTask, isComplete: false}, ...tasks])
        setNewTask("")
    }

    const handleTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value)
    }

    return (
        <form onSubmit={handleTaskSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa..."
            value={newTask}
            onChange={handleTaskInput}
            required
          />
          <button type="submit" title="Criar nova tarefa">
            Criar <PlusCircle />
          </button>
        </form>
      )
}