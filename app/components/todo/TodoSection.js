import styles from '../../styles/Todo.module.css'
import TodoList from './TodoList'

const TodoSection = ({ title, todos }) => {
    return (
        <div className={styles.todoSection}>
            <h1 className="title">
                {title} - {todos.length}
            </h1>

            <TodoList todos={todos} />
        </div>
    )
}

export default TodoSection
