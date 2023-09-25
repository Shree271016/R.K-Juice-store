import React from 'react'

const Cart = () => {
    let Cart_items = [
        {
            product_name: "Fuji Apple",
            Product_price: 320,
            product_image: "https://applerankings.com/wp-content/uploads/2021/10/fuji-apple-2.png",
            count: "2",
        },
        {
            product_name: "Orange",
            Product_price: 130,
            product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlL6hszWUw1flTGc6cb9H3-6gA32Cfy2pzK08UtUDKy7kNCSPlx2WuDyhCerIWMOzUtM&usqp=CAU",
            count: "5",
        },
        {
            product_name: "Kiwi",
            Product_price: 465,
            product_image: "https://media.istockphoto.com/id/495724934/photo/kiwi-fruits.jpg?s=612x612&w=is&k=20&c=3D_ZmXJecGIYMke1oI_d_OvMamjXYB1bspQ2MqX1hcA=",
            count: "4",
        },
        {
            product_name: "Banana",
            Product_price: 145,
            product_image: "https://www.bazaaratdoor.com/wp-content/uploads/2020/09/banana-kathali-yelakki-3-pcs.jpg",
            count: "12",
        },
        {
            product_name: "Avocado",
            Product_price: 650,
            product_image: "https://static6.depositphotos.com/1036708/627/i/950/depositphotos_6278330-stock-photo-avocado.jpg",
            count: "6",
        }
    ]
    return (
        <>
            <h1 className='text-decoration-underline text-center '>Cart Items</h1>
            <table className='table table-hover table-bordered w-75 mx-auto text-center align-middle'>
                <thead className='table-dark'>
                    <tr>
                        <td>S.No.</td>
                        <td>Product Image</td>
                        <td>Product Name</td>
                        <td>Quantity</td>
                        <td>Total Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Cart_items.map((items, i) => {
                            return <tr>
                                <td> {i + 1}</td>
                                <td>
                                    <img   src={items.product_image} alt={items.product_name} style={{height:'10rem'}}/>
                                </td>
                                <td>
                                    <h5>{items.product_name}
                                    </h5>
                                </td>
                                <td>
                                    <h5>{items.count}
                                    </h5>
                                </td>
                                <td>
                                    <h5>Rs.{items.count * items.Product_price}
                                    </h5>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Remove

                                    </button>
                                </td>

                            </tr>
                        })
                    }
                </tbody>


            </table>
        </>

    )
}
export default Cart