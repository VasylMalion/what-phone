// core
import React from "react";
import {useTranslation} from "react-i18next";

export const Footer = ({emailUser, setEmailUser, subscribe}) => {

    const { t } = useTranslation();

    return <div>
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mt-4">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong> {t("newsletter")} </strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input
                                        type="email"
                                        id="form5Example2"
                                        value={emailUser}
                                        onChange={e => setEmailUser(e.target.value)}
                                        className="form-control"
                                    />
                                    <label className="form-label" htmlFor="form5Example2"> {t("email")} </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button onClick={e => subscribe(e)} className="btn btn-outline-light mb-4">
                                    {t("subscribe")}
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="mb-4">
                    <p>
                        {t("footer-desc")}
                    </p>
                </section>
                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase"> {t("company")} </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#" className="text-white"> {t("aboutUs")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("vacancies")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("term")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("chain")} </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase"> {t("help")} </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#" className="text-white"> {t("questions")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("articles")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("job-review")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("where-buy")} </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase"> {t("job-review")} </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#" className="text-white"> {t("smartphones")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("laptops")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("tablets")} </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> {t("PK")} </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase"> {t("contacts")} </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#" className="text-white"> Instagram </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> Facebook </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> Linkedin </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"> Vk.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright: WhatPhone?
            </div>
        </footer>
    </div>
}