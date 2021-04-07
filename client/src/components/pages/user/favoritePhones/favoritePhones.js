// core
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";
import {useTranslation} from "react-i18next";

// actions
import {addNewPhone, removePhone} from "../../../../redux/actions/userActions";

// styles
import {Card, Button} from "react-bootstrap";
import {AiOutlineStar} from "react-icons/ai";
import "./favoritePhones.css";

const FavoritesPhones = ({id, imgUrl, name, price, isAuth, removePhone, email}) => {

    const { t } = useTranslation();

    const addToFavorite = () => {
        axios.post('http://localhost:3052/api/your-phones', {
            email,
            id
        }).then(data => removePhone(data.data.phone))
    }

    return <>
        <Card className="p-0 card-main2 w-20">
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
                    isAuth && <AiOutlineStar className="card-star card-add" onClick={addToFavorite} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPhones)