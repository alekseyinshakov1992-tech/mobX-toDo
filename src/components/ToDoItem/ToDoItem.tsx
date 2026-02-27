import type { FC } from "react"
import styles from "./ToDoItem.module.css"

interface ItoDoItemProps {
  title: string,
  description: string
}

export const ToDoItem: FC<ItoDoItemProps> = ({title, description}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
    </div>
  )
}