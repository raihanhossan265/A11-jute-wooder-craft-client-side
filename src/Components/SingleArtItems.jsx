import { useLoaderData, useParams } from "react-router-dom";

const SingleArtItems = () => {
    const loadedArts = useLoaderData()
    const {name, photo, brand, price, rating, details} = loadedArts

    return (
        <div className="md:flex">
            <div className="flex-1 p-20">
                <img className="w-full border border-black" src={photo} alt="" />
            </div>
            <div className="flex-1 p-20 space-y-6">
                <h4 className="text-xl font-semibold text-gray-500">{brand}</h4>
                <h1 className="md:text-5xl text-3xl font-bold">{name}</h1>
                {/* <h5>{rating}</h5> */}
                <p className="text-2xl font-semibold">{details}</p>
                <p className="text-2xl font-semibold text-red-700">BDT {price}</p>
                <button className="btn text-white bg-black">ADD TO CART</button>
            </div>
        </div>
    );
};

export default SingleArtItems;