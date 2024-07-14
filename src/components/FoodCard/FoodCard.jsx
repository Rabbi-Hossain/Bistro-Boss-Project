

const FoodCard = ({ item}) => {
    const {name, recipe, image, price} = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline bg-slate-100 border-orange-400  border-0 border-b-4 mt-4 uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;