// core
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useTranslation} from "react-i18next";

// components
import Filters from "../choosePhone/filters/filters/filters";
import CardMain from "../choosePhone/card/card";

// styles
import {Container, Row, Col} from "react-bootstrap";
import "../choosePhone/choosePhone.css";

// actions
import {fetchAllPhones, getMorePhones, getWithFilters} from "../../../redux/actions/phonesActions";

const FoundedPhones = ({foundedPhones, getWithFilters}) => {

    const { t } = useTranslation();

    useEffect(() => {
        if (localStorage.getItem("phones")) {
            getWithFilters(JSON.parse(localStorage.getItem("phones")))
            localStorage.removeItem("phones")
        }
    }, [])

    const founded = foundedPhones.length !== 0 ? foundedPhones.map(phone => <Col
            key={phone._id}
            xs={12}
            className="col-md-6 col-6 col-lg-4 pb-3 display-phone"
        >
            <CardMain
                id={phone._id}
                imgUrl={phone.imgUrl}
                name={phone.name}
                price={phone.cost}
            />
        </Col>
    ) : <Col className="text-center pt-3 pb-3">
        <h3> {t("nothing-found")} </h3>
    </Col>

    return <>
        <Container>
            <Row>
                <Col lg={3} md={12} className="col-lg-2 col-12">
                    <Filters />
                </Col>
                <Col className= "pr-4 pl-4 pb-4 ">
                    <Row className="text-center mt-3 mt-lg-0">
                        {founded}
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}

const mapStateToProps = state => {
    return {
        phones: state.phones.allPhones,
        fetching: state.phones.fetching,
        totalCount: state.phones.totalCount,
        withFilters: state.phones.withFilters,
        foundedPhones: state.phones.foundedPhones
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllPhones,
    getMorePhones,
    getWithFilters: data => getWithFilters(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FoundedPhones)