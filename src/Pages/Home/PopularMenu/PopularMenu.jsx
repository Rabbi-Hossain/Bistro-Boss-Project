import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

     const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category === 'popular')
            console.log(popularItems)
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="mb-10">
            <SectionTitle
            subheading="Check it out"
            heading="FROM OUR MENU"
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
            <button className="btn btn-outline btn-info border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;