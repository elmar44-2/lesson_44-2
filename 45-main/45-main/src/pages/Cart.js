import React from 'react'
import { useStoreProject } from '../features/store'
import Product from '../components/Product'
import { List } from 'antd'

const Cart = () => {

    const { cart } = useStoreProject()

  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Корзина</h2>
        <List dataSource={cart} grid={true} renderItem={(item) => (
            <List.Item key={item.id}>
                <Product product={item} />    
            </List.Item>      
        )}>
          
        </List>  
    </div>
  )
}

export default Cart