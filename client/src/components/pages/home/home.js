// core
import React from "react";
import {useTranslation} from "react-i18next";

// components
import {CarouselCust} from "./carousel/carousel";

// styles
import {Col, Container, Figure, Jumbotron, Row} from "react-bootstrap";
import "./home.css";

export const Home = () => {

    const { t } = useTranslation();

    return <div>
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1> WhatPhone? - {t("site1")} </h1>
                        <p>
                            {t("choose-dream")}
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={8}  xs = {12} className="mb-3 mb-md-0">
                    <CarouselCust />
                </Col>
                <Col className="col-md-4">
                    <Figure className="w-100">
                        <Figure.Image
                            width={1500}
                            height={500}
                            alt="171x180"
                            src="https://dkt.ua/content/uploads/images/news/smartphone2030/1.3.jpg"
                        />
                        <Figure.Caption>
                            <span className="home-text">
                                {t("home-text")}
                            </span>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    </div>
}