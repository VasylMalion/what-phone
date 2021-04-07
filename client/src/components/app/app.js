// core
import React, {useEffect, useState} from "react";
import {Switch, Route} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import axios from "axios";
import * as emailjs from 'emailjs-com'
import "../../localization/i18n";
import {useTranslation} from "react-i18next";

// components
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {authRoutes, publicRoutes} from "../routes";

import{ init } from 'emailjs-com';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// actions
import { setInitialFavorite } from "../../redux/actions/userActions";

const App = ({isAuth, email, setInitialFavorite}) => {

    const { t } = useTranslation();

    const [emailUser, setEmailUser] = useState("");
    init("user_65ptcuNOlwH4YV6OmAyGO");

    const subscribe = e => {
        e.preventDefault()
        if (emailUser === '') {
            return alert(t("enter-email"))
        }

        emailjs.send('service_447xa5f', 'template_yit1c5p', templateParams)
            .then(function(response) {
                setEmailUser('')
                alert(t("subscribed-to-newsletter"))
            }, function(error) {
                alert(t("invalid-email"))
            });
    }

    const templateParams = {
        from_name: 'WhatPhones?',
        email: emailUser
    };

    useEffect( () => {
        if (isAuth) {
            axios.post('http://localhost:3052/api/your-phones/initial', {
                email
            }).then(data => setInitialFavorite(data.data.phones))
        }
    }, [isAuth])

    return <div>
        <Header/>
        <div className="pt-4">
            <Switch>
                {
                    isAuth && authRoutes.map(({path, Component}) => <Route
                        key={path}
                        path = {path}
                        component={Component}
                        exact
                    />)
                }
                {
                    publicRoutes.map(({path, Component}) => <Route
                        key={path}
                        path = {path}
                        component={Component}
                        exact
                    />)
                }
            </Switch>
        </div>
        <Footer
            emailUser = {emailUser}
            setEmailUser={setEmailUser}
            subscribe = {subscribe}
        />
    </div>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        email: state.user.user.email
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setInitialFavorite: data => setInitialFavorite(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);