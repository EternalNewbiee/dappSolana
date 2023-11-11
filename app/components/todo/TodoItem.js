import styles from '../../styles/Todo.module.css'

const TodoItem = ({ idx, content, marked, dateline, publicKey,}) => {

    return (
        <li key={idx} className={styles.todoItem}>
                  <div>
                <span className="todoText">{content}</span>
                {dateline && (
                    <div className={styles.todoDateline}>
                        <span>{dateline}</span>
                    </div>
                )}
            </div>
            <div className={styles.iconContainer}>
            </div>
        </li>
    )
}

export default TodoItem
