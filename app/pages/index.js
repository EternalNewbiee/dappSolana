import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useTodo } from '../hooks/todo';
import Loading from '../components/Loading';
import TodoSection from '../components/todo/TodoSection';
import styles from '../styles/Home.module.css';


const Home = () => {
    const { initialized, loading, transactionPending, incompleteTodos, addTodo, input,  handleChange, initializeUser } = useTodo()


    return (
        <div className={styles.container}>
            <div className={styles.actionsContainer}>
                {initialized ? (
                    <div className={styles.todoInput}>
                        <div className={styles.inputContainer}>
                            <form onSubmit={addTodo}>
                                <input value = {input} onChange={handleChange} id={styles.inputField} type="text" placeholder='Write your newest Victim' />
                            </form>
                        </div>
                        <div className={styles.iconContainer}>
       
                        </div>
                    </div>
                ) : (
                    <button type="button" className={styles.button} onClick={() => initializeUser()} disabled={transactionPending}>
                        Initialize
                    </button>
                )}

                <WalletMultiButton/>
            </div>

            <div className={styles.mainContainer}>
                <Loading loading={loading}>
                    <TodoSection title="Victims" todos={incompleteTodos}/>
                </Loading>
            </div>
        </div>
    )
}

export default Home
