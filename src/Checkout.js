import React from 'react';
import "./checkout.css"
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='checkout bg-light'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/JUPITER/Wave3/Headers/xcm_banners_2021_jupiterph3_desktop-1500x300-bg-headline-subtext-badge-ut6d5-vlrfd_1500x300_in-en.jpg" />

                <div>
                    <h3>{user?.email}</h3>
                    <h2 className='checkout_tittle'>Your Shopping Basket</h2>
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

            <div className='checkout_right'>
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
