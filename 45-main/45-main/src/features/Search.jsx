import { useQuery } from "@tanstack/react-query";
import { Input, List, Spin } from "antd";
import { useState } from "react";
import { searchProducts } from "../api/requests";
import Product from "../components/Product";


const Search = () => {
    const [query, setQuery] = useState('')
    const { data, isLoading } = useQuery({
        queryKey: ['search', query],
        queryFn: () => searchProducts(query),
        enabled: !!query
    }) 

    // console.log(data, 'werewr');
    
    return (
        <div>
            <Input.Search
                placeholder="Поиск товара..."
                onSearch={(value) => setQuery(value)}
                enterButton={true}
            />
            {isLoading && <Spin />}
            <List dataSource={data} grid={true} renderItem={(item) => (
                <List.Item key={item.id}>
                    <Product product={item} />
                </List.Item>
            )}>

            </List>
        </div>
    )
}

export default Search;