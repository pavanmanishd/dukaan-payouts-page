import "./App.css";
import profile from "./assets/profile.png";
import arrow_down from "./assets/down_arrow.png";

import Home_logo from "./assets/sidebar/HomeFalse.png";
import Orders_logo from "./assets/sidebar/OrdersFalse.png";
import Products_logo from "./assets/sidebar/CatalogueFalse.png";
import Delivery_logo from "./assets/sidebar/DeliveryFalse.png";
import Marketing_logo from "./assets/sidebar/MarketingFalse.png";
import Analytics_logo from "./assets/sidebar/AnalyticsFalse.png";
import Payments_logo from "./assets/sidebar/PaymentsTrue.png";
import Discounts_logo from "./assets/sidebar/DiscountsFalse.png";
import Audience_logo from "./assets/sidebar/CustomersFalse.png";
import Appearence_logo from "./assets/sidebar/AppearanceFalse.png";
import Plugin_logo from "./assets/sidebar/PluginFalse.png";
import wallet_logo from "./assets/sidebar/wallet.svg";

// import help_logo from "./assets/help.svg";

function App() {
  const sidebarLogos = [
    {
      src: Home_logo,
      alt: "Home_logo",
      name: "Home",
      state: false,
    },
    {
      src: Orders_logo,
      alt: "Orders_logo",
      name: "Orders",
      state: false,
    },
    {
      src: Products_logo,
      alt: "Products_logo",
      name: "Products",
      state: false,
    },
    {
      src: Delivery_logo,
      alt: "Delivery_logo",
      name: "Delivery",
      state: false,
    },
    {
      src: Marketing_logo,
      alt: "Marketing_logo",
      name: "Marketing",
      state: false,
    },
    {
      src: Analytics_logo,
      alt: "Analytics_logo",
      name: "Analytics",
      state: false,
    },
    {
      src: Payments_logo,
      alt: "Payments_logo",
      name: "Payments",
      state: true,
    },
    {
      src: Discounts_logo,
      alt: "Discounts_logo",
      name: "Discounts",
      state: false,
    },
    {
      src: Audience_logo,
      alt: "Audience_logo",
      name: "Audience",
      state: false,
    },
    {
      src: Appearence_logo,
      alt: "Appearence_logo",
      name: "Appearence",
      state: false,
    },
    {
      src: Plugin_logo,
      alt: "Plugin_logo",
      name: "Plugin",
      state: false,
    },
  ];

  const sidebarLink = (source, alter, name) => {
    return (
      <div className="sidebar_link_container">
        <div className="sidebar_link_image_container">
          <img src={source} alt={alter} className="sidebar_logo" />
        </div>
        <p className="sidebar_logo_name">{name}</p>
      </div>
    );
  };

  const allLinks = sidebarLogos.map((logo) =>
    sidebarLink(logo.src, logo.alt, logo.name)
  );

  return (
    <div className="page">
      <div className="sidebar_container">
        <div className="sidebar">
          <div>
            <div className="profile_container">
              <div className="profile_sub_1">
                <div className="profile_img_div">
                  <img src={profile} alt="profile" className="profile_img" />
                </div>
                <div className="profile_details_div">
                  <p className="profile_name">Nishyan</p>
                  <p className="profile_store_link">Visit store</p>
                </div>
              </div>
              <div className="profile_sub_2">
                <img
                  src={arrow_down}
                  alt="arrow_down"
                  className="arrow_down_img"
                />
              </div>
            </div>
            <div className="side_bar_logos_container">{allLinks}</div>
          </div>
          <div className="credits_div">
            <div className="credits_img_div">
              <img
                src={wallet_logo}
                alt="wallet_logo"
                className="credits_img"
              />
            </div>
            <div className="credits_details">
              <p className="credits_text">Available credits</p>
              <p className="credits_num">222.10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="navbar">
          <div className="navbar_1">
            <div className="navbar_1_name">
              <p>Payouts</p>
            </div>
            <div className="navbar_1_2">
              <div>?</div>
              <p>How it works</p>
            </div>
          </div>
          <div className="navbar_2">
            <div>?</div>
            <input type="text" placeholder="Search features, tutorials, etc." />
          </div>
          <div className="navbar_3">
            <div>ann</div>
            <div>tri</div>
          </div>
        </div>
        <div className="view_container">
          <div className="overview">
            <p>Overview</p>
            <div className="overview_cards">
              <div className="card high_card">
                <div className="sub_card_1">
                  <div className="card_1">
                    <p>Next Payout</p>
                    <div>{/* <img src={help_logo} alt="help_logo" /> */}?</div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹2,312.23</p>
                    {/* <div>23 orders ></div> */}
                    <div className="num_orders">
                      <p>23 orders</p>
                      <span>&gt;</span>
                    </div>
                  </div>
                </div>
                <div className="card_3">
                  <div>
                    <div>Next payout date:</div>
                    <div>Today, 04:00PM</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="sub_card_1">
                  <div className="card_1">
                    <p>Amount pending</p>
                    <div>?</div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹92,312.20</p>
                    <div className="num_orders orders_text_2">
                      <p>23 orders</p> 
                      <span>&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="sub_card_1">
                  <div className="card_1">
                    <p>Amount processed</p>
                    <div>?</div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹23,92,312.19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Transactions | This Month</p>
            </div>
            <div>
              <div>Payouts(22)</div>
              <div>Refunds(6)</div>
            </div>
            <div>
              <div>
                <div>Search bar</div>
                <div>
                  <div>Sort</div>
                  <div>Download Button</div>
                </div>
              </div>
              <div>Table</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
