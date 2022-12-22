import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle/useTitle';

const AddProduct = () => {
    useTitle('Add Product')
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    // addproduct 
    const handleAddProduct = data => {
        // get image 
        const imgHostKey = '34626cf92d497ef8f094660e4bc92213'
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const picture = imgData.data.url;
                    const categoryId = data.category;
                    const presentYear = (new Date().getFullYear())
                    const selectedYear = data.purchaseYear;
                    let yearsOfUse = presentYear - selectedYear;
                    const name = data.productName;
                    const location = data.location;
                    const resalePrice = data.resalePrice;
                    const originalPrice = data.originalPrice;
                    const sellerName = user.displayName;
                    const condition = data.condition;
                    const mobileNumber = data.phoneNumber;
                    const description = data.description;
                    const postedTime = new Date().toLocaleString()
                    const email = user.email;
                    if (yearsOfUse < 1) {
                        yearsOfUse = 'Less Than 1 Year'
                    }


                    const productData = {
                        categoryId,
                        picture,
                        name,
                        location,
                        resalePrice,
                        originalPrice,
                        yearsOfUse,
                        sellerName,
                        condition,
                        mobileNumber,
                        description,
                        postedTime,
                        isSold: 'false',
                        email

                    }
                    console.log(productData)
                    fetch('https://assignment-12-server-theta.vercel.app/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product Added Successfully');
                                navigate('/dashboard/myproducts')
                            }
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                }
            });


    };
    return (
        <div className="w-full p-6 m-auto my-4 bg-white rounded-md shadow-xl lg:max-w-xl text-left">
            <h1 className="text-4xl font-semibold text-center text-[#256D85]  uppercase">
                Add Product
            </h1>
            <form onSubmit={handleSubmit(handleAddProduct)} className="mt-6">
                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Write The Product Name
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        {...register("productName", { required: true, maxLength: 80 })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="category"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                        Product Category?
                    </label>
                    <select className=" w-[50%] px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("category", { required: true })}>
                        <option value="01">Dslr Camera</option>
                        <option value="02">Mirrorless Camera</option>
                        <option value="03">Action Camera</option>
                        <option value="04">Compact Camera</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="condition"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                        Select Your Product Condition?
                    </label>
                    <select className=" w-[50%] px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("condition", { required: true })}>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        {...register("phoneNumber", { required: true, maxLength: 80 })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="location"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                        Your Location?
                    </label>
                    <select className=" w-[50%] px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("location", { required: true })}>
                        <option value="Kishoreganj">Kishoreganj</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Pabna">Pabna</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Description
                    </label>
                    <textarea
                        placeholder="Product Description"
                        {...register("description", { required: true, maxLength: 200 })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="purchaseYear"
                        className="block text-sm font-semibold text-gray-800 mb-3"
                    >
                        Purchase Year?
                    </label>
                    <select className=" w-[50%] px-4 py-2 mt-2bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("purchaseYear", { required: true })}>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="image"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Upload Product Picture.
                    </label>
                    <input
                        type="file"
                        placeholder="Product Image"
                        {...register("image", { required: true })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="resalePrice"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Resale Price
                    </label>
                    <input
                        type="number"
                        placeholder="Resale Price"
                        {...register("resalePrice", { required: true, maxLength: 80 })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="resalePrice"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Original Price
                    </label>
                    <input
                        type="number"
                        placeholder="Original Price"
                        {...register("originalPrice", { required: true, maxLength: 80 })}
                        className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#256D85] rounded-md hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;