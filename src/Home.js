import React from 'react';
import "./Home.css";
import Product from './Product.js';
function Home() {
    return (
        <div className="home bg-light">
            <div className='home_container '>
                <img className='home_image ' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/JUPITER/Wave3/Headers/xcm_banners_2021_jupiterph3_desktop-1500x300-bg-headline-subtext-badge-ut6d5-vlrfd_1500x300_in-en.jpg" />
                <div className='home_rowTop '>

                    < Product
                        id="12321341"
                        title='boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)'
                        price={30}
                        image='https://m.media-amazon.com/images/I/61u1VALn6JL._SX522_.jpg'
                        rating={3}
                    />
                    < Product
                        id="12321342"
                        title='Lenovo Legion 5 Pro Intel Core i7 11th Gen 16"(40.64cm) 500nits WQXGA Gaming Laptop (32GB/1TB SSD/8GB RTX 3070/165Hz/Win11/Office/Blue Backlit/3Yr Warranty/3months Game Pass/Stingray/2.3Kg),82JD005LIN'
                        price={1000}
                        image='https://m.media-amazon.com/images/I/71glTO3lJNL._SX679_.jpg'
                        rating={4}

                    />

                </div>

                <div className='home_row'>
                    < Product
                        id="12321343"
                        title='Demon Slayer Manga Volume 1'
                        price={30}
                        image='https://m.media-amazon.com/images/I/61Pi8jqIO4L.jpg'
                        rating={5} />
                    < Product
                        id="12321345"
                        title='Apple iPhone 11 (128GB) - Purple'
                        price={1300}
                        image='https://m.media-amazon.com/images/I/71tpxtLD0aL._SX679_.jpg'
                        rating={4}
                    />
                    < Product
                        id="12321349"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback  6 October 2011'
                        price={19}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5} />


                </div>

                <div className='home_row'>
                    < Product
                        id="12321351"
                        title='EvoFox Game Box TV Gaming Console with Smart Remote and Game Controller | 4GB RAM, 32 GB Storage | Dedicated GPU, Quad Core Processor | Dual-Band WiFi | Fox OS | 4k HDMI Output | Bluetooth 5.0 (Coal Black)'
                        price={5000}
                        image='https://m.media-amazon.com/images/S/aplus-media-library-service-media/619ae6ee-7c93-4503-8223-490919a616c1.__CR0,0,970,300_PT0_SX970_V1___.jpg'
                        rating={4}

                    />
                </div>

                <div className='home_row'>
                    < Product
                        id="12321352"
                        title='(Renewed) Oppo WiFi Watch- Gold (Compatible with Android Wireless)'
                        price={700}
                        image='https://m.media-amazon.com/images/I/51ToMhOMj+L._SX522_.jpg'
                        rating={4}

                    />


                    < Product
                        id="12321353"
                        title='Wakefit Napper L Shape Sofa Set (2 Seater + Right Aligned Chaise + Ottoman, Fabric, Omega Blue)'
                        price={3600}
                        image='https://m.media-amazon.com/images/I/51mQ4S4A35L._SX679_.jpg'
                        rating={5}

                    />
                    < Product
                        id="12321354"
                        title='Artysta Sea SwirlsCeramic Dinner Set Ceramic Plate and Bowl Set Ceramic Crockery Set Ceramic Plates for Dinner Set (Microwave Safe, Set of 18)'
                        price={350}
                        image='https://m.media-amazon.com/images/I/A1j0D1DpkXL._SX679_.jpg'
                        rating={4}

                    />
                </div>

                <div className='home_row'>

                    < Product
                        id="12321361"
                        title='Cultsport Deo, Alloy MTB 27.5 Mountain Cycle with 21 Shimano Gear, PAN India Installation, Free Diet & Fitness Plan and Cultsport 12 Months Live Pass'
                        price={400}
                        image='https://m.media-amazon.com/images/I/81fDxpDOIDL._SX679_.jpg'
                        rating={3}
                    />
                    < Product
                        id="12321362"
                        title='Up to 60% off | Trending casual wear for women from local shops'
                        price={100}
                        image='https://m.media-amazon.com/images/I/71X+G0feCEL._UX679_.jpg'
                        rating={4}

                    />

                </div>

            </div>
        </div>
    )
}

export default Home
