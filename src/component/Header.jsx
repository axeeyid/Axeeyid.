import React, { useContext } from "react";

import SearchForm from "../component/SearchForm";
import CategoryNavMobile from "../component/CategoryNavMobile";
import Cart from "../component/Cart";

const Header = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-auto bg-kedua navbar h-10[vh] flex justify-end z-50 lg:py-5 px-20 py-5 flex-1">
        <div className=" flex items-center flex-1">
          <a
            href="/"
            className="italic font-extrabold font-primary text-white text-2xl"
          >
            Axeey <span className="text-ketiga">id.</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
