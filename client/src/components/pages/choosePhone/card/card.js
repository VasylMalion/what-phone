// core
import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";
import {useTranslation} from "react-i18next";
import jwtDecode from "jwt-decode";

// styles
import {Card, Button} from "react-bootstrap";
import {AiOutlineStar} from "react-icons/ai";
import "./card.css";

// actions
import {addNewPhone, removePhone} from "../../../../redux/actions/userActions";

const CardMain = ({id, imgUrl, name, price, isAuth, addNewPhone, removePhone, email, arr}) => {

    const { t } = useTranslation();

    let cardClass = "card-star"

    arr && arr.forEach(item => {
        if (item._id === id) {
            cardClass += " card-add"
        }
    })

    const addToFavorite = () => {

        const emailTrue = email ? email : jwtDecode(localStorage.getItem("token")).email;

        axios.post('http://localhost:3052/api/your-phones', {
            email: emailTrue,
            id
        }).then(data => {
            if (data.data.method === "add") {
                addNewPhone(data.data.phone)
            } else {
                removePhone(data.data.phone)
            }
        })
    }

    return <>
        <Card className="p-0 card-main w-20 ">
            <Card.Img
                className="card-img"
                variant="top"
                src={imgUrl}
            />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    {price} {t("uan")}
                </Card.Text>
            </Card.Body>
            <Card.Body className="card-bottom pt-0">
                <Button>
                    <NavLink
                        to = {`/find-phone:${id}`}
                        style={{ textDecoration: 'none' }}
                        className = "card-info"
                    >
                        {t("read-more")}
                    </NavLink>
                </Button>
                {
                    isAuth && <AiOutlineStar className={cardClass} onClick={addToFavorite} />
                }
            </Card.Body>
        </Card>
    </>
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth,
        userPhones: state.user.userPhones,
        email: state.user.user.email,
        arr: state.user.arr,
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewPhone: data => addNewPhone(data),
    removePhone: data => removePhone(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CardMain)