import CategoryCard from './components/CategoryCard'
import ProductCard, { Product } from './components/ProductCard'
import styles from './page.module.css'

async function getData() {

  const productsResp = await fetch('https://api.cm.test.luisruiz.dev/admin/products', {cache:"no-store"})
  const productsData = await productsResp.json()

  const categoriesResp = await fetch('https://api.cm.test.luisruiz.dev/admin/categories', {cache:"no-store"})
  const categoriesData = await categoriesResp.json()

  const { products } = productsData
  const { categories } = categoriesData

  return {
    products: products as Product[],
    categories: categories as string[]
  }
}

export default async function Home() {

  const { products, categories } = await getData()

  return (
    <main>
      <h2 className={styles.title}>Categorías</h2>
      <div className={styles.categories}>
        {
          categories.map((nameCategorie, index) => {
            return(
              <CategoryCard key={index} name={nameCategorie} />
            )
          })
        }
      </div>
      <h2 className={styles.title}>Productos destacados</h2>
      <div className={styles.products}>
        {
          products.map(product => {
            return <ProductCard key={product._id} product={product}/>
          })
        }
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
      </div>
      <br/>
    </main>
  )
}
