import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import { useState } from "react";
import style from './components.module.css'
import { useStoreProject } from "../features/store";


const Product = ({ product }) => {
    const { addToCart, addToFavorites } = useStoreProject();
    
    const [clickedCart, setClickedCart] = useState(false)
    const [clickedFavorite, setClickedFavorite] = useState(false)

    const addCart = () => {
        setClickedCart(!clickedCart)
        addToCart(product)
    }

    const addFavorites = () => {
        setClickedFavorite(!clickedFavorite)
        addToFavorites(product)
    }

    console.log(product);
    

    return (
        <Card className={style.card} title={product.title} cover={<Image className={style.image} src={product.thumbnail} alt={product.title} />}>
            <div className={style.content}>
                <p className={style.price}>Цена: {product.price}</p>
                <p className={style.rating}>Рейтинг: {product.rating}</p>
                <div style={{fontSize: '20px', display:"flex", justifyContent: 'space-between'}}>
                    <ShoppingCartOutlined
                        onClick={addCart}
                        style={{ cursor: 'pointer' }}
                        className={clickedCart ? style.clickedCart : ''}
                    />
                    <HeartOutlined
                        onClick={addFavorites}
                        style={{ cursor: 'pointer' }}
                        className={clickedFavorite ? style.clickedFavorite : ''}
                    />
                </div>
            </div>
        </Card>
    )
}

export default Product;