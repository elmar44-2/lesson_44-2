import { Button, Card, Col, Image, Row, Select, Slider, Spin } from "antd";
import { useProducts } from "../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import style from './page.module.css'

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { useFilters } from "../features/store";
import { useState } from "react";
import Product from "../components/Product";
import Search from "../features/Search";


const Home = () => {

    const { data, isLoading, error } = useProducts()
    const { type, setType } = useFilters()

    
    if (isLoading) return <Spin />
    if (error) return <p>Произошла ошибка...</p>

    return (
        <div>

            {/* <Search /> */}
            {/* <Slider range min={0} max={500} defaultValue={[50, 200]} /> */}
            {/* <Select
                style={{width: '300px', marginBottom: '100px', marginTop: '100px'}}
                value={type}
                onChange={(value) => setType(value)}
                options={[
                    { label: 'Все', value: 'all' },
                    { label: 'Популярные', value: 'popular' },
                    { label: 'Гаджеты', value: 'gadjets'}
                ]}
            /> */}


            <Row gutter={16}>
                {data.products.map((product) => (
                    <Col span={6} key={product.id}>
                       <Product product={product} />
                    </Col>
                ))}
            </Row>

            {/* <div style={{marginTop: "100px"}}>
                <h2 style={{fontSize: '50px', fontWeight: 500}}>Популярные товары</h2>
                <Swiper
                    direction="horizontal"
                    navigation
                    modules={[Navigation]}
                    slidesPerView={3}
                    className="mySwiper"
                >
                    {data.products.slice(0, 5).map((product) => (
                        <SwiperSlide >
                            <Card key={product.id} title={product.title} cover={<Image src={product.thumbnail} alt={product.title} />}>
                                
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
        </div>
    )
}

export default Home;