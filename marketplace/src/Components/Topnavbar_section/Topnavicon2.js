import React from "react";

export default function Topnavicon2() {
  return (
    <>
      <div className="top-right-nav">
        <div class="topnav">
          <div class="search-container">
            <form action="/action_page.php">
              <input
                type="text"
                placeholder="Search by Collection, NFT or User"
                name="search"
              />{" "}
              <img src="/img/searchnormalnav.png" alt="" />
              {/* <button type="submit">
                <i class="fa fa-search"></i>
              </button> */}
            </form>
          </div>
        </div>
        <button className="button_name ">
          <img
            className="icon-001 notification_icon"
            src="/images/newmask group.png"
          />{" "}
          0xdd....ahs4
          <img className="icon-002" src="/images/newbullet.png" />{" "}
        </button>
        <a href="" className="notification_icon">
          <img src="/images/newnotification-bing.png" />
        </a>
        {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
      </div>
    </>
  );
}
