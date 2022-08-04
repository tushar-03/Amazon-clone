import React from 'react'
import './payment.css'
import { useStateValue } from './StateProvider'
import Checkoutproduct from './Checkoutproduct'
import { Link } from 'react-router-dom';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to="/checkout">
                        {basket?.length} items
                    </Link>)
                </h1>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>sada</p>
                        <p>adsda</p>
                    </div>
                </div>


                <div className='payment_section'>
                    <div className='payment_title'>

                        <h3>Review Items and Delivery</h3>

                    </div>
                    <div className='product_items'>

                        {basket.map(item => (
                            <Checkoutproduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <input className='payment_type' type='checkbox' />
                        <label for='paymenttype'> Pay on Delivery </label>
                        <Link to="/thankyou"><button className='payment_order'>Order Now</button></Link>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payment;
