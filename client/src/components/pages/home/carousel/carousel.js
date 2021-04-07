// core
import React from "react";
import {useTranslation} from "react-i18next";

// styles
import {Carousel} from "react-bootstrap";

export const CarouselCust = () => {

    const { t } = useTranslation();

    return <Carousel>
        <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                height="460"
                src="https://static.finance.ua/img/lib/07/c/089547d.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3> {t("slide1")} </h3>
                <p> {t("slide1-desc")} </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                height="460"
                src="https://itechua.com/wp-content/uploads/2019/06/Xiaomi-Mi-10-Best-0.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3> {t("slide2")} </h3>
                <p> {t("slide2-desc")} </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                height="460"
                src="https://www.ixbt.com/img/x780/n1/news/2020/11/3/Screenshot_1_0_large.png"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3> {t("slide3")} </h3>
                <p> {t("slide3-desc")} </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}