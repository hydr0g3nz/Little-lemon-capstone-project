import pic1 from "../assets/restauranfood.jpg"
import React from "react";


function Header({className}) {
  return (
    <header className="header-container">

    



    <section className="hero-section">
      <div className="row"> 
          <div className="hero-section-left">
          <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="btn">Reserve a Table</button>
          </div>
          <div className="hero-section-right">
            <img src={pic1} alt="asd" width="200"></img>
          </div>
      </div>
        
      </section>
      

      <section id="highlights">
        <div className="highlights-header row">
          <h4>Specials</h4>
          <button>Online Menu</button>
        </div>
        <div className="row">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          
        </div>
      </section>
      <section id="testimonials">
        <div>
          <h4>Testimonials</h4>
          <div className="row">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          
        </div>
        </div>
      </section>
      <section id="about">
      <div className="row"> 
          <div className="">
          <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
          </div>
          <div className="">
            <img src={pic1} alt="asd" width="200"></img>
            <img src={pic1} alt="asd" width="200"></img>
          </div>
      </div>
      </section>
      




  



    </header>
  );
}

export default Header;
