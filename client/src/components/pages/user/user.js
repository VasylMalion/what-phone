// core
import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {useTranslation} from "react-i18next";

// styles
import {Alert, Col, Container, Jumbotron, ListGroup, Row} from "react-bootstrap";

// components
import FavoritesPhones from "./favoritePhones/favoritePhones";

// actions
import {updateUser} from "../../../redux/actions/userActions";

const UserCab = ({user, isAuth, updateUser, email, arr}) => {

    const { t } = useTranslation();

    const emailTrue = email ? email : jwtDecode(localStorage.getItem("token")).email;

    useEffect( () => {
        if (isAuth) {
            axios.post('http://localhost:3052/api/add-user', {
                email: emailTrue
            }).then(data => updateUser(data.data))
        }
    }, [])

    const arrPhones = arr.length !== 0 ? arr.map(item => {
        return <Col className="col-6 col-xl-4 display-phone">
            <FavoritesPhones
                key={item._id}
                name={item.name}
                imgUrl={item.imgUrl}
                price={item.cost}
                id={item._id}
            />
        </Col>
    }) : <Col className="text-center">
        <h3 className="text-center"> {t("no-favorite-smartphones")} </h3>
    </Col>

    return <div>
        <Container>
            <Jumbotron fluid className="p-1">
                <Container className="p-4">
                    <h1>{t("personal-account")}</h1>
                    <p>
                        {t("personal-account-desc")}
                    </p>
                </Container>
            </Jumbotron>
            <Row className="pb-4">
                <Col className="col-lg-4 col-12 mb-lg-0 mb-3">
                    <Alert variant="success">  {t("personal-data")} </Alert>
                    <ListGroup>
                        <ListGroup.Item disabled> {t("email-single")}: {user.email} </ListGroup.Item>
                        <ListGroup.Item> {t("name")}: {user.name} </ListGroup.Item>
                        <ListGroup.Item> {t("surname")}: {user.surname} </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Alert variant="success"> {t("favorite-smartphones")} </Alert>
                    <Row>
                        { arrPhones }
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        isAuth: state.user.isAuth,
        email: state.user.user.email,
        arr: state.user.arr
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateUser: data => updateUser(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserCab)