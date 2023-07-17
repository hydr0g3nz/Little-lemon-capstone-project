import pic1 from "../assets/restauranfood.jpg";
import React from "react";
import logo from "../assets/john.jpg";
function Header({ className }) {
  return (
    <header className="header-container">
      <section className="hero-section">
        <div className="row">
          <div className="hero-section-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn">Reserve a Table</button>
          </div>
          <div className="hero-section-right">
            <img src={pic1} alt="asd" height={400} width={300}></img>
          </div>
        </div>
      </section>
      {/* highlight */}
      <section className="highlights-container">
        <div className="highlights-header row">
          <h2>This weeks Specials! </h2>
          <button className="btn">Online Menu</button>
        </div>

        <div className="row">
          {/* card 1 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="highlights-card">
            <img src={pic1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <p>Logo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="review-container">
        <h2>What are customer say!</h2>
        <div className="row">
        <div className="review-card">
            <div className="row star">
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
              <div className="row">
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
            <div className="row star">
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
              <div className="row">
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
            <div className="row star">
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
              <div className="row">
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
            <div className="row star">
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
              <div className="row">
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
    </header>
  );
}

export default Header;
