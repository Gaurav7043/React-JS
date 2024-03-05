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
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <NavLink to={"/brand"}>
                <Caro />
            </NavLink>
            <SelectBrand />
            <LayersOriginalDesigns />
            <NavLink to={"/brand"}>
                <Carou />
            </NavLink>
            <BestSellingMobileSkin />
            <ShopNow />
            <BestSellingLaptopSkin />
            <FollowPage />
            <ProductDispatch />
        </>
    )
}
