// core
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useTranslation} from "react-i18next";

// actions
import {logOut} from "../../redux/actions/userActions";

// styles
import {Navbar, Nav, Form, Button, Col} from "react-bootstrap";
import {FaUserCircle} from "react-icons/fa";
import "./header.css";

const Header = ({isAuth, logOut}) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    };

    return <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <NavLink className="header-link-main" to = "/">WhatPhone?</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>
                    <NavLink className="header-link" to = "/find-phone">
                        <Button variant="outline-success"> {t("find-phone")} </Button>
                    </NavLink>
                </Nav.Link>
            </Nav>
            <div className="change-lang mr-3 mb-2 mb-md-0">
                <Form.Control as="select" onChange={e => changeLanguage(e.target.value.toLowerCase())}>
                    <option> UA </option>
                    <option> EN </option>
                </Form.Control>
            </div>
            {isAuth
                ? <div className="mt-sm-2 mt-lg-0">
                    <NavLink className="header-link pt-1" to = "/cabinet">
                        <Button variant="outline-success mr-3">
                            <FaUserCircle /> {t("cabinet")}
                        </Button>
                    </NavLink>
                    <span onClick={logOut}>
                                <NavLink className="header-link" to = "/auth">
                                    <Button variant="outline-success">
                                    {t("log-out")}
                                    </Button>
                                </NavLink>
                        </span>
                </div>
                : <div className="mt-sm-2 mt-lg-0" >
                    <NavLink className="header-link" to = "/auth">
                        <Button variant="outline-success mr-3 ml-0"> {t("log-in")} </Button>
                    </NavLink>
                    <NavLink className="header-link" to = "/registration">
                        <Button variant="outline-success"> {t("registration")} </Button>
                    </NavLink>
                </div>}
        </Navbar.Collapse>
    </Navbar>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logOut
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)