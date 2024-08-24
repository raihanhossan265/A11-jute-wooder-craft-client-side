import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const arts = useLoaderData()
    const {_id, name, brand, type, price, rating, details, photo} = arts
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const details = form.details.value
        const photo = form.photo.value
        console.log(name, brand, type, price, rating, details, photo);
        const updatedArt = {name, brand, type, price, rating, details, photo}
        fetch(`http://localhost:5000/artitems/${_id}`,{
            method: "PUT",
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedArt)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: "success",
                    title: "Added...",
                    text: "SuccessFully Updated your Art & Craft ",
                  });
                  form.reset()
            }
        })
    }
    return (
        <div>
            <div className="">
                <div className="hero-content m-auto ">
                    <div className="card w-full bg-red-300 shrink-0 shadow-2xl py-20">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Update Art and Craft</h1>
                            <p className="py-6">
                                You can update or customize the product here by filling the form
                            </p>
                        </div>
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="m-auto">
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={name} placeholder="Enter Art name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brand" defaultValue={brand} placeholder="Enter Brand Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Type</span>
                                        </label>
                                        <input type="text" name="type" defaultValue={type} placeholder="Enter Art Type" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name="price" defaultValue={price} placeholder="Enter Art price" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" name="rating" defaultValue={rating} placeholder="Enter Art rating" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" name="details" defaultValue={details} placeholder="Enter Art Details" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Art image URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6 m-auto">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;