import { List } from 'antd'
import React from 'react'
import { useStoreProject } from '../features/store'
import Product from '../components/Product'

const Favorites = () => {

    const { favorites } = useStoreProject()

    return (
        <div>
            <h2>Избранное</h2>
            <List dataSource={favorites} grid={true} renderItem={(item) => (
                <List.Item>
                    <Product product={item} />
                </List.Item>
            )}>
            </List>
        </div>
  )
}

export default Favorites