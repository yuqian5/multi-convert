import {useState} from "react";
import {Accordion, FormControl, InputGroup, Row} from "react-bootstrap";

function Weight(prop) {
    const [lb, setLb] = useState(0);
    const [oz, setOz] = useState(0);

    const [kg, setKg] = useState(0);
    const [g, setG] = useState(0);
    const [mg, setMg] = useState(0);
    const [ug, setUg] = useState(0);
    const [ng, setNg] = useState(0);

    function weightInputDetected(unit, value) {
        let gram = 0;

        switch (unit) {
            case "lb":
                gram = value * 453.59237;
                break;
            case "oz":
                gram = value * 28.3495;
                break;
            case "kg":
                gram = value * 1000;
                break;
            case "g":
                gram = value;
                break;
            case "mg":
                gram = value * 0.001;
                break;
            case "ug":
                gram = value * 0.000001;
                break;
            case "ng":
                gram = value * 0.000000001;
                break;
            default:
                throw Error("invalid type");
        }

        unit !== "lb" ? setLb(gram / 453.59237) : setLb(value);
        unit !== "oz" ? setOz(gram / 28.3495) : setOz(value);
        unit !== "kg" ? setKg(gram / 1000) : setKg(value);
        unit !== "g" ? setG(gram) : setG(value);
        unit !== "mg" ? setMg(gram * 1000) : setMg(value);
        unit !== "ug" ? setUg(gram * 100000) : setUg(value);
        unit !== "ng" ? setNg(gram * 100000000) : setNg(value);
    }

    return (
        <Accordion defaultActiveKey={['0', '1']} alwaysOpen style={{padding: "10px 10px"}}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Weight (SI)</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Kilogram</InputGroup.Text>
                            <FormControl type={"number"} value={kg} onChange={e => weightInputDetected("kg", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>kg</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Gram</InputGroup.Text>
                            <FormControl type={"number"} value={g} onChange={e => weightInputDetected("g", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>g</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Milligram</InputGroup.Text>
                            <FormControl type={"number"} value={mg} onChange={e => weightInputDetected("mg", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>mg</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Microgram</InputGroup.Text>
                            <FormControl type={"number"} value={ug} onChange={e => weightInputDetected("ug", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>μg</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nanogram</InputGroup.Text>
                            <FormControl type={"number"} value={ng} onChange={e => weightInputDetected("ng", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>ng</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Weight (Non SI)</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Pound</InputGroup.Text>
                            <FormControl type={"number"} value={lb} onChange={e => weightInputDetected("lb", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>lb</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Ounce</InputGroup.Text>
                            <FormControl type={"number"} value={oz} onChange={e => weightInputDetected("oz", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>oz</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Weight;