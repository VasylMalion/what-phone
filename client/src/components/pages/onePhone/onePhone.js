// core
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";

// styles
import {Container, Row, Col, Alert, Jumbotron, ListGroup} from "react-bootstrap";
import "./onePhone.css";

export const OnePhone = ({match}) => {

    const [phone, setPhone] = useState({});
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`http://localhost:3052/api/find-phone/${match.params.id.substr(1)}`)
            .then(data => setPhone(data.data.phone))
    }, [])

    return <div>
        <Container>
            <Jumbotron className="justify-content-center p-2 pt-4 pb-4" fluid>
                <Container>
                    <h1> {phone.name} </h1>
                </Container>
            </Jumbotron>
            <Row>
                <Col className="col-12 m-0 p-0 col-lg-5 text-center">
                    <div className="pb-4">
                        <img className="foto-for-single-phone"
                             alt = "single-phone"
                             src = {phone.imgUrl}
                        />
                    </div>
                </Col>
                <Col className="col-12 pb-4 col-lg-7">
                    <Alert variant="primary"> {t("features")} </Alert>
                    <ListGroup variant="flush">
                        <ListGroup.Item> {t("price")}: {phone.cost} {t("uan")} </ListGroup.Item>
                        <ListGroup.Item> {t("diagonal")}: {phone.diagonal}" </ListGroup.Item>
                        <ListGroup.Item> {t("screen-res")}: {phone.sizeOfScreen} </ListGroup.Item>
                        <ListGroup.Item> {t("internal-memory")}: {phone.internalMemory} {t("GB")} </ListGroup.Item>
                        <ListGroup.Item> {t("RAM")}: {phone.RAM} {t("GB")} </ListGroup.Item>
                        <ListGroup.Item> {t("camera")}: {phone.camera}  {t("Mp")} </ListGroup.Item>
                        <ListGroup.Item> {t("front-camera")}: {phone.frontCamera} {t("Mp")} </ListGroup.Item>
                        <ListGroup.Item> {t("battery")}: {phone.batteryCapacity} {t("mAh")} </ListGroup.Item>
                        <ListGroup.Item> {t("SIM")}: {phone.countOfSIM} </ListGroup.Item>
                        <ListGroup.Item> {t("cores")}: {phone.countOfCore} </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>
}

// const [phone, setPhone] = useState({})
//
// let favorite = false
//
// arr.length && phone && arr.forEach(item => {
//
//     if (item._id === phone._id) {
//         favorite = true
//     }
// })
//
// const addToFavorite = () => {
//     let favorite = true
//     axios.post('http://localhost:3052/api/your-phones', {
//         email,
//         id
//     }).then(data => addNewPhone(data.data.phone))
// }
//
// const removeFavorite = () => {
//     let favorite = false
//     axios.post('http://localhost:3052/api/your-phones', {
//         email,
//         id
//     }).then(data => removePhone(data.data.phone))
// }
//
// const buttonAdd = !favorite || arr.length === 0
//     ? <Button className="mt-3 w-75 btn-addTo" onClick={addToFavorite}> Додати до обраного </Button>
//     : <Button className="mt-3 w-75 btn-addTo" onClick={removeFavorite}> Видалити з обраного </Button>
//
