// core
import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";

// actions
import {changeUserAndToken} from "../../../redux/actions/userActions";

// styles
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import {login} from "../http/userApi";

const Auth = ({changeUserAndToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    const { t } = useTranslation();

    const signIn = async () => {
        try {
            if (!email || !password) {
                alert("Одне з полів порожнє!")
            }
            const responce = await login(email, password)
            changeUserAndToken(responce)
            if (responce) {
                history.push("/")
            }
        } catch (err) {
            alert("Пароль або email не валідні!")
        }
    }

    return <>
        <Container>
            <Row>
                <Col className="col-12">
                    <h1 className="text-center pb-2"> {t("log-in-account")} </h1>
                </Col>
            </Row>
            <Form className="offset-lg-4 col-lg-4 pb-4 col-8 offset-md-3 col-md-6 offset-sm-2 col-sm-8 col-12">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> {t("email")}</Form.Label>
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
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={t("check")} />
                </Form.Group>
                <Button onClick={signIn}  variant="primary" type="">
                    {t("sign-in")}
                </Button>
            </Form>
        </Container>
    </>
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeUserAndToken: data => changeUserAndToken(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Auth)