// core
import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

// styles
import {Button, Col, Container, Form, Row} from "react-bootstrap";

// actions
import {changeUserAndToken} from "../../../redux/actions/userActions";

import {login, registration} from "../http/userApi";

const Registration = ({changeUserAndToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const { t } = useTranslation();
    let history = useHistory();

    const signIn = async () => {
        try {
            if (!email || !password) {
                return alert("Одне з полів порожнє!")
            }
                const responce = await registration(email, password, name, surname)
                changeUserAndToken(responce)
                if (responce) {
                    history.push("/")
                }

        } catch (err) {
            if (err.response.status === 500) {
               return  alert("Такий email вже зареєстрований!")
            }
            alert("Щось пішло не так")
        }
    }

    return <Container>
        <Row>
            <Col className="col-12">
                <h1 className="text-center pb-2"> {t("create-account")} </h1>
            </Col>
        </Row>
        <Form className="offset-lg-4 col-lg-4 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
            <Form.Group controlId="formBasicEmail">
                <Form.Label> {t("email")} </Form.Label>
                <Form.Control
                    type="email"
                    placeholder={t("email-placeholder")}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    {t("never-share")}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label> {t("password")} </Form.Label>
                <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder={t("password-placeholder")}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label> {t("name")} </Form.Label>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={t("name-placeholder")} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label> {t("surname")} </Form.Label>
                <Form.Control
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    placeholder={t("surname-placeholder")}
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t("check")} />
            </Form.Group>
            <Button onClick={signIn} variant="primary" type="">
                {t("sign-up")}
            </Button>
        </Form>
    </Container>
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeUserAndToken: data => changeUserAndToken(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Registration)