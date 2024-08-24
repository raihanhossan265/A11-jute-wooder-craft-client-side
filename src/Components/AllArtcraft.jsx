import { Link, useLoaderData } from "react-router-dom";
import { HiViewfinderCircle } from "react-icons/hi2";
import { key } from "localforage";

const AllArtcraft = () => {
    const loadedArts = useLoaderData()
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                <thead>
                    <tr className="text-xl">
                        <th>Name</th>
                        <th>Brand Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Button</th>
                    </tr>
                </thead>
                {
                    loadedArts.map(art => 
                        <tbody key={art._id}>
                            <tr>
                                <td>{art.name}</td>
                                <td>{art.brand}</td>
                                <td>{art.type}</td>
                                <td>{art.price}</td>
                                <td>{art.rating}</td>
                                <td><Link to={`/singleartitems/${art._id}`}>
                                <button><HiViewfinderCircle></HiViewfinderCircle></button>
                                </Link></td>
                            </tr>
                        </tbody>
                    )
                }
                    </table>
            </div>
        </div>
    );
};

export default AllArtcraft;