import Link from 'next/link'
import styles from './CategoryCard.module.css'
import Image from 'next/image'

export default function CatergoryCard({name}: {name: string}) {
    return (
        <div className={styles.card}>
            <Link href={"#"} className={styles.card__button}>
                <p>{name}</p>
                <Image width={500} height={500} src='/icons/arrowright.svg' alt='Right Arrow'/>
            </Link>
        </div>
    )
}