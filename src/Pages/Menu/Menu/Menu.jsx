import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu()

    const desserts = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
    

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU" ></Cover>
            {/* main cover */}
            <SectionTitle
            subheading="Don't miss"
            heading="TODAY'S OFFER"
            >
            </SectionTitle>
            {/* offered menu items */}
           <MenuCategory items={offered}></MenuCategory>
           {/* dessert menu items */}
           <MenuCategory items={desserts} img={dessertImg} title="dessert">
           </MenuCategory>
           {/* pizza menu items */}
           <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
           <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>
           <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;