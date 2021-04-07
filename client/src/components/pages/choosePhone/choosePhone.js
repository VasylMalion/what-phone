// core
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// components
import Filters from "./filters/filters/filters";
import CardMain from "./card/card";

// styles
import {Container, Row, Col, Pagination} from "react-bootstrap";
import "../choosePhone/choosePhone.css";

// actions
import {fetchAllPhones, getMorePhones} from "../../../redux/actions/phonesActions";

const ChoosePhone = ({phones, fetchAllPhones, getMorePhones, fetching, totalCount, withFilters}) => {

    const [currentPage, setCurrentPage] = useState(0)

    const scrollHandler = e => {
        if((e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 700) && (phones.length < totalCount)) {
            getMorePhones()
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (fetching) {
            setCurrentPage(currentPage + 1)
            fetchAllPhones(currentPage)
        }
    }, [fetching, withFilters])

    return <>
        <Container>
            <Row>
                <Col lg={3} md={12} className="col-lg-2 col-12">
                    <Filters />
                </Col>
                <Col className= "pr-4 pl-4 pb-4 ">
                    <Row className="text-center mt-3 mt-lg-0">
                            {phones && phones.map(phone => <Col
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
                            )}
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
        withFilters: state.phones.withFilters
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllPhones,
    getMorePhones
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePhone)