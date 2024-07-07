import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
    
    return (
        <div>
           <Bannar></Bannar>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;