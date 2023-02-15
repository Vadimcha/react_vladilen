import { Product } from './components/Product' 
import { useProducts } from './hooks/products';
import { Loader } from './components/loader'
import { ErrorMessage } from './components/errorMessage'
import { Modal } from './components/model'
import { CreateProduct } from './components/CreateProduct';

function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl- pt-5">
      { error && <ErrorMessage error={error} /> }
      { loading && <Loader /> }
      { products.map(product => <Product product={product} key={product.id} />) }
    <Modal>
      <CreateProduct />
    </Modal>
    </div>

  )
}

export default App;
