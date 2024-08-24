import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtSingleCard from "./MyArtSingleCard";

const MyArtCraftList = () => {
    const loadedarts = useLoaderData()
    const [arts, setArts] = useState(loadedarts)
    return (
        <div>
            <h2>Total arts : {arts.length}</h2>
            {
                arts.map(art =><MyArtSingleCard key={art._id} arts={arts} setArts={setArts} art={art}></MyArtSingleCard>)
            }
        </div>
    );
};

export default MyArtCraftList;