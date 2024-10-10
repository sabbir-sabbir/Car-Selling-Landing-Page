import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container ">
           <a href="">
            <img src="img\mainlogo.png" alt="car-logo" />
           </a>
           <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-toggler">

            <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbar-toggler">
                <ul className="navbar-nav ms-auto gap-3">
                   <li className="nav-item">
                      <a href="" className="nav-link">Used Cars</a>
                   </li>
                   <li className="nav-item">
                      <a href="" className="nav-link">Auctions</a>
                   </li>
                   <li className="nav-item">
                      <a href="" className="nav-link">New Cars</a>
                   </li>
                   <li className="nav-item">
                      <a href="" className="nav-link">Sell Cars</a>
                   </li>
                   <li className="nav-item">
                      <a href="" className="nav-link">Local Dealers</a>
                   </li>
                   <li className="nav-item">
                      <a href="" className="nav-link">Support</a>
                   </li>
                   <li className="nav-item NavbarButton">
                      <a href="" className="nav-link"><i className="bi bi-person"></i>
                      <span >Sign up</span> </a>
                   </li>
                </ul>
           </div>
        </div>
    </nav>
    </>
  )
}
