// core
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// actions
import {allFavoritePhones} from "../../../redux/actions/userActions";

// styles
import CardMain from "../choosePhone/card/card";

// components
import {Col, Container, Row} from "react-bootstrap";

const YourPhones = ({allPhones}) => {

    return <div>
        <Container>
            <Row>
                {allPhones && allPhones.map(item => {

                    if (!item) {
                        return
                    }

                    return <Col className="col-4">
                        <CardMain
                            name={item.name}
                            imgUrl={item.imgUrl}
                            price={item.cost}
                            id={item.id}
                        />
                    </Col>
                })}
            </Row>
        </Container>
    </div>
}

const mapStateToProps = state => {
    return {
        userPhones: state.user.userPhones,
        allPhones: state.user.allPhones
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    allFavoritePhones: data => allFavoritePhones(data)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(YourPhones)