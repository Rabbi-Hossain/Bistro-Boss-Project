import { useState } from "react";
import bannerCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";





const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category }= useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
 

    const desserts = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
  
    const drink = menu.filter(item=>item.category === 'drinks')
    
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>

            <Cover img={bannerCoverImg} title="Food Order"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINK</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={drink}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;