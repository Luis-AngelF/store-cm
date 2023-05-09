'use client'

import Image from 'next/image'
import styles from './ProductCard.module.css'

import { useRouter } from 'next/navigation'

export type Product = {
    _id: string,
    mainImage: string,
    images: string[],
    name: string,
    price: string,
    quantity: string,
    description: string,
    categories: string[],
    model3D: string,
}

function ProductCard({ product }: { product: Product }) {

    const router = useRouter()

    return (
        <div className={styles.card} onClick={() => router.push(`/product/${product.model3D}`)}>
            <div className={styles.card__image}>
                <Image src={`https://api.cm.test.luisruiz.dev/admin/image/${product.mainImage}`} width={500} height={500} alt='Product Image'/>
            </div>
            <div className={styles.options}>
                <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.prices}>
                        <p className={styles.price}>{`$${product.price} MXN`}</p>
                    </div>
                </div>
                <div className={styles.btn_cart}>
                    <Image width={500} height={500} src='/icons/add_to_card.svg' alt='Add to card'/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard