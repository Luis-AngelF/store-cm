import styles from './page.module.css'

export default function Rastreo() {
    return (
        <main>
            <div className={styles.form}>
                <h2 className={styles.title}>Rastreo</h2>
                <input type={"text"} className={styles.input} placeholder={"123456"}></input>
            </div>
            <div className={styles.container}>
                <div>
                    <div className={styles.step}>
                        <div className={styles.check}></div>
                        <p>Pago Resivido</p>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.step}>
                        <div className={styles.check}></div>
                        <p>Pago Confirmado</p>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.step}>
                        <div className={styles.check}></div>
                        <p>Procesando Pedido</p>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.step}>
                        <div className={styles.check}></div>
                        <p>Enviado</p>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.step}>
                        <div className={styles.check}></div>
                        <p>Entregado</p>
                    </div>
                </div>
                <div>
                    <div className={styles.details_card}>
                        <p>Detalles</p>
                        <p>Enviado a:<span>Nombre de Persona</span></p>
                        <p>Direccion: <span>Direccion de la persona</span></p>
                    </div>
                    <div className={`${styles.btn} ${styles.btn_problem}`}>Notificar un Problema</div>
                    <div className={`${styles.btn} ${styles.btn_cancel}`}>Cancelar Pedido</div>
                </div>
            </div>
            <br/>
        </main>
    )
}