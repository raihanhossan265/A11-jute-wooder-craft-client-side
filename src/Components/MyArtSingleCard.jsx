import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtSingleCard = ({ art, arts, setArts }) => {
    const { _id, name, photo, brand, price, rating, details } = art

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/artitems/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Art Item has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = arts.filter(art => art._id !== _id)
                        setArts(remaining)
                    })
            }
        });
    }



    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={photo}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h2 className="card-title">{name}</h2>
                            <h4 className="text-right">Price : BDT {price}</h4>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Brand : {brand}</p>
                            <p className="text-right">Rating : {rating}</p>
                        </div>
                        <p>{details}</p>
                        <div className="flex justify-between">
                            <div className="">
                                <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                            </div>
                            <div className="">
                                <Link to={`/update/${_id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArtSingleCard;