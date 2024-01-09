import "./App.css";
import profile from "./assets/profile.png";
import arrow_down from "./assets/arrow_down.svg";
import arrow_down_black from "./assets/arrow_down_black.svg";

import Home_logo from "./assets/sidebar/Home.svg";
import Orders_logo from "./assets/sidebar/Orders.svg";
import Products_logo from "./assets/sidebar/Products.svg";
import Delivery_logo from "./assets/sidebar/Delivery.svg";
import Marketing_logo from "./assets/sidebar/Marketing.svg";
import Analytics_logo from "./assets/sidebar/Analytics.svg";
import Payments_logo from "./assets/sidebar/Payouts.svg";
import Discounts_logo from "./assets/sidebar/Discounts.svg";
import Audience_logo from "./assets/sidebar/Audience.svg";
import Appearence_logo from "./assets/sidebar/Appearence.svg";
import Plugin_logo from "./assets/sidebar/Plugins.svg";
import wallet_logo from "./assets/sidebar/wallet.svg";

import help_logo_black from "./assets/help_black.svg";
import help_logo_white from "./assets/help_white.svg";
import arrow_side from "./assets/arrow_side.svg";
import arrow_side_blue from "./assets/arrow_side_blue.svg";
import search_logo from "./assets/search.svg";

import down_navbar from "./assets/navbar/down.svg";
import speaker_navbar from "./assets/navbar/speaker.svg";
import sort_logo from "./assets/sort.svg";
import download_logo from "./assets/download.svg";

import success_dot from "./assets/success_dot.svg";
import process_dot from "./assets/process_dot.svg";
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

  const sidebarLink = (source, alter, name, state) => {
    return (
      <div className={`sidebar_link_container ${state? "highlight" : ""}`}>
        <div className="sidebar_link_image_container">
          <img src={source} alt={alter} className="sidebar_logo" />
        </div>
        <p className={`sidebar_logo_name ${state? "highlight_text" : ""}`}>{name}</p>
      </div>
    );
  };

  const allLinks = sidebarLogos.map((logo) =>
    sidebarLink(logo.src, logo.alt, logo.name, logo.state)
  );

  return (
    <div className="page">
      <div className="sidebar_container">
        <div className="sidebar">
          <div className="sidebar_sub_cont">
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
          <div className="credits">
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
      </div>
      <div className="main_container">
        <div className="navbar">
          <div className="navbar_1">
            <div className="navbar_1_name">
              <p>Payouts</p>
            </div>
            <div className="navbar_1_2">
              <img src={help_logo_black} alt="help_logo" />
              <p>How it works</p>
            </div>
          </div>
          <div className="navbar_2">
            <img src={search_logo} alt="search_logo" />
            <input type="text" placeholder="Search features, tutorials, etc." />
          </div>
          <div className="navbar_3">
            <div className="navbar_3_1">
              <img src={speaker_navbar} alt="speaker_navbar" />
            </div>
            <div className="navbar_3_2">
              <img src={down_navbar} alt="down_navbar" />
            </div>
          </div>
        </div>
        <div className="view_container">
          <div className="overview">
            <div className="overview_heading">
              <p>Overview</p>
              <div className="overview_filter">
                <p>This Month</p>
                <img src={arrow_down_black} alt="arrow_down" />
              </div>
            </div>
            <div className="overview_cards">
              <div className="card high_card">
                <div className="sub_card_1">
                  <div className="card_1">
                    <p>Next Payout</p>
                    <div>
                      <img src={help_logo_white} alt="help_logo" />
                    </div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹2,312.23</p>
                    {/* <div>23 orders ></div> */}
                    <div className="num_orders">
                      <p>23 orders</p>
                      <img src={arrow_side} alt=">" />
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
                    <div>
                      <img src={help_logo_black} alt="help_logo" />
                    </div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹92,312.20</p>
                    <div className="num_orders orders_text_2">
                      <p>23 orders</p>
                      <img src={arrow_side_blue} alt=">" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="sub_card_1">
                  <div className="card_1">
                    <p>Amount processed</p>
                    <div>
                      <img src={help_logo_black} alt="help_logo" />
                    </div>
                  </div>
                  <div className="card_2">
                    <p className="amt">₹23,92,312.19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="transactions">
            <p className="trans_name">Transactions | This Month</p>
            <div className="trans_category">
              <div className="trans_cat_not_selec">Payouts(22)</div>
              <div className="trans_cat_selec">Refunds(6)</div>
            </div>
            <div className="table_container">
              <div className="filters">
                <div className="filter_left">
                  <img src={search_logo} alt="search_logo" />
                  <input type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div className="filter_right">
                  <div className="fil_button">
                    <p>Sort</p>
                    <img src={sort_logo} alt="sort_logo" />
                  </div>
                  <div className="fil_button">
                    <img src={download_logo} alt="download_logo" />
                  </div>
                </div>
              </div>
              <div className="table_sub_container">
                <table className="table">
                  <tr className="table_head">
                    <th>Order ID</th>
                    <th>Status</th>
                    <th>Transaction ID</th>
                    <th>Refund date</th>
                    <th>Order amount</th>
                  </tr>
                  <tr className="table_row">
                    <td>#281209</td>
                    <td>
                      <div className="dot">
                        <img src={success_dot} alt="success_dot" />
                        <p>Successful</p>
                      </div>
                    </td>
                    <td>131634495747</td>
                    <td>Today, 08:45 PM</td>
                    <td>₹1,125.00</td>
                  </tr>
                  <tr className="table_row">
                    <td>#281209</td>
                    <td>
                      <div className="dot">
                        <img src={process_dot} alt="process_dot" />
                        <p>Processing</p>
                      </div>
                    </td>
                    <td>131634495747</td>
                    <td>Today, 08:45 PM</td>
                    <td>₹1,125.00</td>
                  </tr>
                  <tr className="table_row">
                    <td>#281209</td>
                    <td>
                      <div className="dot">
                        <img src={success_dot} alt="success_dot" />
                        <p>Successful</p>
                      </div>
                    </td>
                    <td>131634495747</td>
                    <td>Today, 08:45 PM</td>
                    <td>₹1,125.00</td>
                  </tr>
                  <tr className="table_row">
                    <td>#281209</td>
                    <td>
                      <div className="dot">
                        <img src={success_dot} alt="success_dot" />
                        <p>Successful</p>
                      </div>
                    </td>
                    <td>131634495747</td>
                    <td>Today, 08:45 PM</td>
                    <td>₹1,125.00</td>
                  </tr>
                  <tr className="table_row">
                    <td>#281209</td>
                    <td>
                      <div className="dot">
                        <img src={success_dot} alt="success_dot" />
                        <p>Successful</p>
                      </div>
                    </td>
                    <td>131634495747</td>
                    <td>Today, 08:45 PM</td>
                    <td>₹1,125.00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
