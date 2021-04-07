// core
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {bindActionCreators} from "redux";

// styles
import {Accordion, Card, Button, Col, InputGroup, FormControl} from "react-bootstrap";
import "./filters.css";

// actions
import {getWithFilters} from "../../../../../redux/actions/phonesActions";

const Filters = ({getWithFilters}) => {

    const { t } = useTranslation();

    const [price1, setPrice1] = useState('');
    const [price2, setPrice2] = useState('');

    const [diagonal1, setDiagonal1] = useState('');
    const [diagonal2, setDiagonal2] = useState('');

    const [memory1, setMemory1] = useState('');
    const [memory2, setMemory2] = useState('');

    const [RAM1, setRAM1] = useState('');
    const [RAM2, setRAM2] = useState('');

    const [camera1, setCamera1] = useState('');
    const [camera2, setCamera2] = useState('');

    const [frontCamera1, setFrontCamera1] = useState('');
    const [frontCamera2, setFrontCamera2] = useState('');

    const [battery1, setBattery1] = useState('');
    const [battery2, setBattery2] = useState('');

    const [SIM1, setSIM1] = useState('');
    const [SIM2, setSIM2] = useState('');

    const [core1, setCore1] = useState('');
    const [core2, setCore2] = useState('');

    let history = useHistory();

    const addFilters = async () => {
        if (
            +diagonal1 < 0 || +diagonal2 < 0 || +memory1 < 0 ||
            +memory2 < 0 || +price1 < 0 || +price2 < 0 || +RAM1 < 0 ||
            +RAM2 < 0 || +camera1 < 0 || +camera2 < 0 ||
            +frontCamera1 < 0 || +frontCamera2 < 0 || +battery1 < 0 ||
            +battery2 < 0 || +SIM1 < 0 || +SIM2 < 0 || +core1 < 0 ||
            +core2 < 0
        ) {
            return alert (t("less-zero"))
        } else if (
            (diagonal2 !== '' && +diagonal1 > +diagonal2)
            || (memory2 !== '' && +memory1 > +memory2)
            || (price2 !== '' && +price1 > +price2)
            || (RAM2 !== '' && +RAM1 > +RAM2)
            || (camera2 !== '' && +camera1 > +camera2)
            || (frontCamera2 !== '' && +frontCamera1 > +frontCamera2)
            || (battery2 !== '' && +battery1 > +battery2)
            || (SIM2 !== '' && +SIM1 > +SIM2)
            || (core2 !== '' && +core1 > +core2)
        ) {
            return alert (t("parameter-greater"))
        } else if (
            isNaN(+diagonal1) || isNaN(+diagonal2) || isNaN(+memory1) ||
            isNaN(+memory2) || isNaN(+price1) ||isNaN( +price2) || isNaN(+RAM1) ||
            isNaN(+RAM2) || isNaN(+camera1) || isNaN(+camera2) ||
            isNaN(+frontCamera1) || isNaN(+frontCamera2) || isNaN(+battery1) ||
            isNaN(+battery2) || isNaN(+SIM1) || isNaN(+SIM2) || isNaN(+core1) ||
            isNaN(+core2)
        ) {
            return alert (t("not-a-number"))
        }
        await axios.post('http://localhost:3052/api/filters', {
            filters
        }).then(data => {
            getWithFilters(data.data)
            localStorage.setItem("phones", JSON.stringify(data.data))
            history.push("/founded-phones")
        })
    }

    const filters = [
        diagonal1,
        diagonal2,
        memory1,
        memory2,
        price1,
        price2,
        RAM1,
        RAM2,
        camera1,
        camera2,
        frontCamera1,
        frontCamera2,
        battery1,
        battery2,
        SIM1,
        SIM2,
        core1,
        core2
    ]

    return <div className="main-filters">
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("price")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={price1}
                                onChange={e => setPrice1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={price2}
                                onChange={e => setPrice2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("diagonal")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={diagonal1}
                                onChange={e => setDiagonal1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={diagonal2}
                                onChange={e => setDiagonal2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("internal-memory")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={memory1}
                                onChange={e => setMemory1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={memory2}
                                onChange={e => setMemory2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("RAM")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={RAM1}
                                onChange={e => setRAM1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={RAM2}
                                onChange={e => setRAM2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("camera")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={camera1}
                                onChange={e => setCamera1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={camera2}
                                onChange={e => setCamera2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("front-camera")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={frontCamera1}
                                onChange={e => setFrontCamera1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={frontCamera2}
                                onChange={e => setFrontCamera2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("battery")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={battery1}
                                onChange={e => setBattery1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={battery2}
                                onChange={e => setBattery2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("SIM")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={SIM1}
                                onChange={e => setSIM1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={SIM2}
                                onChange={e => setSIM2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Accordion.Toggle className="filter" as={Card.Header} eventKey="0">
                    {t("cores")}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Min"
                                aria-label="min-diagonal"
                                aria-describedby="basic-addon1"
                                value={core1}
                                onChange={e => setCore1(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Max"
                                aria-label="max-diagonal"
                                aria-describedby="basic-addon1"
                                value={core2}
                                onChange={e => setCore2(e.target.value)}
                            />
                        </InputGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Col className="p-0 mb-3">
            <Button onClick={addFilters} className="w-100 mt-3">
                {t("add-filters")}
            </Button>
        </Col>
    </div>
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getWithFilters: data => getWithFilters(data)
}, dispatch)

export default connect(null, mapDispatchToProps)(Filters)