import React, { Component } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "../App.css"


const Navbar = () => {
      const { cart } = useSelector((state) => state);

        return (
          <div className="flex items-center justify-around bg-slate-900">
            <NavLink to="/">
              <div>
                <img
                  src="/logo.png"
                  alt="Shopping Site"
                  className="w-[200px] h-[60px] m-[7px]"
                />
              </div>
            </NavLink>
            <div
              className="flex items-baseline justify-center"
              style={{
                color: "white",
                fontSize: "17px",
              }}
            >
              <NavLink to="/">
                <div>
                  <p className="m-3">Home</p>
                </div>
              </NavLink>
              <NavLink to="/cart">
                <div className="relative">
                  <HiOutlineShoppingCart className="text-2xl" />
                  {cart.length > 0 && (
                    <div
                      className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                    >
                      {cart.length}
                    </div>
                  )}
                </div>
              </NavLink>
            </div>
          </div>
        );
    }

 
export default Navbar;