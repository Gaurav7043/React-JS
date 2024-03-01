import React from 'react'
import Caro from './Carousel'
import SelectBrand from '../Collection/SelectBrand/SelectBrand'
import Carou from './Carou'
import LayersOriginalDesigns from '../Collection/LayersOriginalDesigns/LayersOriginalDesigns'
import BestSellingMobileSkin from '../Collection/BestSellingMobileSkin/BestSellingMobileSkin'
import ShopNow from '../Collection/ShopNow/ShopNow'
import BestSellingLaptopSkin from '../Collection/BestSellingLaptopSkin/BestSellingLaptopSkin'
import FollowPage from '../Collection/FollowPage/FollowPage'
import ProductDispatch from '../Collection/ProductDispatch/ProductDispatch'

export default function Home() {
    return (
        <>
            <Caro />
            <SelectBrand />
            <LayersOriginalDesigns />
            <Carou />
            <BestSellingMobileSkin />
            <ShopNow />
            <BestSellingLaptopSkin />
            <FollowPage />
            <ProductDispatch />
        </>
    )
}
