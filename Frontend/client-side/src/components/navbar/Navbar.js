import React from "react";
import Menu from "./Menu";
import Form from "../form/Form";
import Information from "../template/Infor";
import Resume from "../template/Resume";
import Projects from "../template/Skills";
import {  Link } from "react-router-dom";

function Navbar() {
    return (  
        <section>
            <Menu />
        </section>
    );
}

export default Navbar;