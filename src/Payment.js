import React from 'react'
import './payment.css'
import { useStateValue } from './StateProvider'
import Checkoutproduct from './Checkoutproduct'
import { Link } from 'react-router-dom';
import { db } from './firebase';
import { getBasketTotal } from './reducer';
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db.collection('users').doc(user?.uid), 'orders'), {
                basket: basket,
                amount: getBasketTotal(basket),
                created: Timestamp.now()
            })

        } catch (err) {
            alert(err)
        }


        dispatch({
            type: 'EMPTY_BASKET'
        })


    }

    const empty = () => {

        dispatch({
            type: 'EMPTY_BASKET'
        })
    }






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
                        <p>WZ-1233 Naraina New Delhi - 110028</p>
                        <p>NEW DELHI INDIA </p>
                        <p>+91 7042817590</p>
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
                        <button onClick={handleSubmit} className='payment_order'>Buy Now</button>
                        <Link to="/thankyou" ><button onClick={empty} className='payment_order'> Continue </button></Link>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payment;
