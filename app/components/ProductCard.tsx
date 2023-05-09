import Image from 'next/image'
import styles from './ProductCard.module.css'

//     _id: '64580f055143c51306371fbd',
//     mainImage: '1683492613812614.jpeg',
//     images: [
//       '168349261381420.jpeg',
//       '1683492613814967.jpeg',
//       '1683492613814578.jpeg',
//       '1683492613815268.jpeg'
//     ],
//     name: 'Tasa de té ',
//     price: '50.00',
//     quantity: '5 juegos ',
//     description: 'Tasa de barro incluido plato de barro \n' +
//       'Medidas: plato 20cm de diámetro taza 12cm de ancho 10cm de alto ',
//     categories: [ 'Tasas de barro ' ],
//     model3D: '1683492613816879.glb',
//     __v: 0

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

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className={styles.card}>
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