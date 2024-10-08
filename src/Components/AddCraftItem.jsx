import Swal from "sweetalert2";

const AddCraftItem = () => {

    const handleAddCraftItem = e => {
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
        const art = {name, brand, type, price, rating, details, photo}

        fetch('http://localhost:5000/artitems', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(art)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: "success",
                    title: "Added...",
                    text: "SuccessFully added a new product",
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
                            <h1 className="text-5xl font-bold">Add Craft Item</h1>
                            <p className="py-6">
                                Rev up your listing! Sell your car with ease by adding its details in our user-friendly form.
                            </p>
                        </div>
                        <form className="card-body" onSubmit={handleAddCraftItem}>
                            <div className="m-auto">
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter Art name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Type</span>
                                        </label>
                                        <input type="text" name="type" placeholder="Enter Art Type" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name="price" placeholder="Enter Art price" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" name="rating" placeholder="Enter Art rating" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" name="details" placeholder="Enter Art Details" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Enter Art image URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6 m-auto">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCraftItem;