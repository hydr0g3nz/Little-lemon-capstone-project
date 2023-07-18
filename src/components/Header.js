import pic1 from "../assets/restauranfood.jpg";
import pic2 from "../assets/restaurant chef B.jpg"
import React from "react";
import logo from "../assets/john.jpg";
import { Link } from "react-router-dom";
function Header({ className }) {
  return (
    <header className="header-Container">
      <section className="hero-section">
        <div className="Row">
          <div className="hero-section-left">
            <h1 className="H1">Little Lemon</h1>
            <h3 className="H3">Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn"><Link to="/reserve-table">Reserve a Table</Link></button>
          </div>
          <div className="hero-section-right">
            <img src={pic1} alt="asd" height={400} width={300}></img>
          </div>
        </div>
      </section>
      {/* highlight */}
      <section className="highlights-Container">
        <div className="highlights-header Row">
          <h2>This weeks Specials! </h2>
          <button className="btn">Online Menu</button>
        </div>

        <div className="Row">
          {/* card 1 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="review-Container">
        <h2>What are customer say!</h2>
        <div className="Row">
        <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={logo} className="review-avatar" alt="user"></img>
                <p>joe biden</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={logo} className="review-avatar" alt="user"></img>
                <p>joe biden</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={logo} className="review-avatar" alt="user"></img>
                <p>joe biden</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={logo} className="review-avatar" alt="user"></img>
                <p>joe biden</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="Row">
          <div className="about-section-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            
          </div>
          <div className="about-section-right">
            <img className="about-pic-1" src={pic1} alt="asd" height={400} width={300}></img>
            <img  className="about-pic-2" src={pic2} alt="asd" height={400} width={300}></img>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
