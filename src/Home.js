import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__component">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="123"
            title="Black Shark Bluetooth Earbuds Wireless Earbuds with 55ms Ultra-Low Latency, Gaming Earbuds with Bluetooth 5.2, Dual Modes, 10mm Driver, 35H Play Time, IPX4 Waterproof, Built-in Mic, for Home & Office"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id="456"
            title="Logitech G305 Lightspeed Wireless Gaming Mouse, Hero 12K Sensor, 12,000 DPI, Lightweight, 6 Programmable Buttons, 250h Battery Life, On-Board Memory, PC/Mac."
            price={79.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61IiCJ7QggS._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="789"
            title="Abel Gaming Streaming Kit- Perfect for Streaming Video Games on Twitch, YouTube, Podcasts and Working From Home. The Perfect Bundle to Start Streaming in One Purchase!"
            price={79.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81HMhGog9XL._AC_UL320_.jpg"
          />
          {/* Product */}
          <Product
            id="011"
            title="Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1 Spatial Surround Sound - 50mm Drivers - Detachable Mic - for PC, PS5, PS4, Switch, Xbox One, Xbox Series X|S - Black"
            price={79.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61ULL1n6mDL._AC_UL320_.jpg"
          />
          {/* Product */}
          <Product
            id="121"
            title="ZUUKOO LIGHT Smart LED Light Bar, RGB Smart LED Lamp with 19 Dynamic Modes and Music Sync Modes, TV LED Backlight, Mood Lighting, Ambient Lighting for Gaming, Movies, PC, TV, Room Decoration."
            price={79.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61JeMrjdBvL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="131"
            title="Gaming Keyboard and Mouse and Mouse pad and Gaming Headset, Wired LED RGB Backlight Bundle for PC Gamers and Xbox and PS4 Users - 4 in 1 Edition Hornet RX-250"
            price={79.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/811W225fOUL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
