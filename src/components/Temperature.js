import {useState} from "react";
import {Accordion, FormControl, InputGroup, Row} from "react-bootstrap";

function Temperature(prop) {
    const [f, setF] = useState(0);
    const [c, setC] = useState(0);
    const [k, setK] = useState(0);

    function temperatureInputDetected(unit, value) {
        let c = 0;

        switch (unit) {
            case "f":
                c = (value - 32) * 5/9;
                break;
            case "c":
                c = value * 1;
                break;
            case "k":
                c = value - 273.15;
                break;
            default:
                throw Error("invalid type");
        }

        unit !== "c" ? setC(c) : setC(value);
        unit !== "f" ? setF((c * 9/5) + 32) : setF(value);
        unit !== "k" ? setK(c + 273.15) : setK(value);
    }

    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen style={{padding: "10px 10px"}}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Temperature</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Celsius</InputGroup.Text>
                            <FormControl type={"number"} value={c} onChange={e => temperatureInputDetected("c", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>°C</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Fahrenheit</InputGroup.Text>
                            <FormControl type={"number"} value={f} onChange={e => temperatureInputDetected("f", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>°F</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Kelvin</InputGroup.Text>
                            <FormControl type={"number"} value={k} onChange={e => temperatureInputDetected("k", e.target.value)} className={"text-end"}/>
                            <InputGroup.Text>K</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Temperature;