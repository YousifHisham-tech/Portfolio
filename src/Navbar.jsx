import React from "react";
import { FcAbout } from "react-icons/fc";
import { FaSearchDollar } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <div class="container">
                <h1>Yousif Hisham</h1>
                <ul> 
                    <li>
                        <Link to={"/introduction"}>
                            <FcAbout /> Introduction
                        </Link>
                        <Link to={"/education"}>
                            <FcAbout /> Education
                        </Link>
                        <Link to={"/skills"}>
                            <FcAbout /> Skills
                        </Link>
                        <Link to={"/jobSearch"}>
                            <FaSearchDollar /> Search Job
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Navbar