import React from 'react'
import { Product } from '../components/Product' 
import { IProduct } from '../models' 
import { useProducts } from '../hooks/products'
import { Loader } from '../components/loader'
import { ErrorMessage } from '../components/errorMessage'
import { Modal } from '../components/model'
import { CreateProduct } from '../components/CreateProduct'
import {useState, useContext} from 'react'
import { ModalContext } from '../context/nodel-text'

export function ProductPage() {
  const {loading, error, products, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl- pt-5">
      { error && <ErrorMessage error={error} /> }
      { loading && <Loader /> }
      { products.map(product => <Product product={product} key={product.id} />) }
      
      {modal &&  <Modal title="Create new product" onClose={() => close()}>
        <CreateProduct onCreate= {createHandler} />
      </Modal>}

      <button className='absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={() => open()}>+</button>
    </div>

  )
}