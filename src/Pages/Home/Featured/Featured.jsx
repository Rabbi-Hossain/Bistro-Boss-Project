import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

    return (
        <div className="featured-item bg-fixed text-white  pt-8 my-20">
            <SectionTitle
            subheading="---Check it out---"
            heading="FROM OUR MENU"
            >
            </SectionTitle>

            <div className="md:flex justify-center item center bg-opacity-40 pb-20 bg-slate-500 pt-12 px-36">
                <div>
                    <img src={feturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-xl">March 20, 2023</p>
                    <p className="text-2xl">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat harum, cupiditate explicabo fugit minima enim ab ducimus veniam veritatis! Quaerat dolores aperiam cum, iste ullam perspiciatis obcaecati quibusdam error. Fugit, nulla ex itaque facilis porro perspiciatis unde. Molestias reiciendis nihil ipsum, voluptas quibusdam voluptates aperiam quo deserunt minus eaque. In.</p>
                    <button className="btn btn-outline btn-info border-0 border-b-4 mt-4">READE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;