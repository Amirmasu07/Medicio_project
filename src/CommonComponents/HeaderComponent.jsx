import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const HeaderComponent = ({ bgcolor }) => {
    const [isOpen, setIsOpen] = useState(false);


    // render()
    return (
        <header
            className={`header_section fixed-top`}
            style={{ top: '0', backgroundColor: bgcolor }}
        >

            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" to="/">
                        <span>Feane</span>
                    </Link>
                    <button
                        className={`navbar-toggler text-light ${isOpen ? 'collapsed' : ''}`}
                        type="button"
                        // onClick={toggleCollapse}
                    >
                        {isOpen ? (
                            <i className="fa fa-times"></i>
                        ) : (
                            <i className="fa fa-bars"></i>
                        )}
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/menu"
                                    className="nav-link"
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/booktable" className="nav-link">
                                    Book Table
                                </NavLink>
                            </li>
                        </ul>
                        <div className="user_option">
                            <Link to="#" className="user_link">
                                <i className="fa fa-user"></i>
                            </Link>
                            <Link to="#" className="cart_link user_link">
                                <i className="fa fa-shopping-cart"></i>
                            </Link>

                            {/* <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" id='templatemo_search'>
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </a> */}

                            {/* <button onClick={toggleModal}>Toggle Modal</button>
                            {showModal && <HomeSlider />} */}

                            <button
                                className="btn cart_link  my-2 my-sm-0 nav_search-btn"
                                type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>

                            <Link to="#" className="order_online">
                                Order Online
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    );
}


export default HeaderComponent;