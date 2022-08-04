import {useState} from "react";
import {Accordion, FormControl, InputGroup, Row} from "react-bootstrap";

function Distance(prop) {
    const [mile, setMile] = useState(0);
    const [yard, setYard] = useState(0);
    const [foot, setFoot] = useState(0);
    const [inch, setInch] = useState(0);

    const [km, setKm] = useState(0);
    const [m, setM] = useState(0);
    const [dm, setDm] = useState(0);
    const [cm, setCm] = useState(0);
    const [mm, setMm] = useState(0);
    const [um, setUm] = useState(0);
    const [nm, setNm] = useState(0);

    function distanceInputDetected(unit, value) {
        let meter = 0;

        switch (unit) {
            case "ml":
                meter = value * 1609.344;
                break;
            case "yd":
                meter = value * 0.9144;
                break;
            case "ft":
                meter = value * 0.3048;
                break;
            case "in":
                meter = value * 0.0254;
                break;
            case "km":
                meter = value * 1000;
                break;
            case "m":
                meter = value;
                break;
            case "dm":
                meter = value * 0.1;
                break;
            case "cm":
                meter = value * 0.01;
                break;
            case "mm":
                meter = value * 0.001;
                break;
            case "um":
                meter = value * 0.000001;
                break;
            case "nm":
                meter = value * 0.000000001;
                break;
            default:
                throw Error("invalid type");
        }

        unit !== "ml" ? setMile(Number((meter / 1609.344).toFixed(15))) : setMile(value);
        unit !== "yd" ? setYard(Number((meter * 1.09361).toFixed(15))) : setYard(value);
        unit !== "ft" ? setFoot(Number((meter * 3.28084).toFixed(15))) : setFoot(value);
        unit !== "in" ? setInch(Number((meter * 39.3701).toFixed(15))) : setInch(value);
        unit !== "km" ? setKm(Number((meter / 1000).toFixed(15))) : setKm(value);
        unit !== "m" ? setM(Number((meter).toFixed(15))) : setM(value);
        unit !== "dm" ? setDm(Number((meter * 10).toFixed(15))) : setDm(value);
        unit !== "cm" ? setCm(Number((meter * 100).toFixed(15))) : setCm(value);
        unit !== "mm" ? setMm(Number((meter * 1000).toFixed(15))) : setMm(value);
        unit !== "um" ? setUm(Number((meter * 100000).toFixed(15))) : setUm(value);
        unit !== "nm" ? setNm(Number((meter * 100000000).toFixed(15))) : setNm(value);
    }

    return (
        <Accordion defaultActiveKey={['0', '1']} alwaysOpen style={{padding: "10px 10px"}}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Distance (SI)</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Kilometer</InputGroup.Text>
                            <FormControl type={"number"} value={km} onChange={e => distanceInputDetected("km", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>km</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Meter</InputGroup.Text>
                            <FormControl type={"number"} value={m} onChange={e => distanceInputDetected("m", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>m</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Decimeter</InputGroup.Text>
                            <FormControl type={"number"} value={dm} onChange={e => distanceInputDetected("dm", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>dm</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Centimeter</InputGroup.Text>
                            <FormControl type={"number"} value={cm} onChange={e => distanceInputDetected("cm", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Millimeter</InputGroup.Text>
                            <FormControl type={"number"} value={mm} onChange={e => distanceInputDetected("mm", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>mm</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Micrometer</InputGroup.Text>
                            <FormControl type={"number"} value={um} onChange={e => distanceInputDetected("um", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>μm</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nanometer</InputGroup.Text>
                            <FormControl type={"number"} value={nm} onChange={e => distanceInputDetected("nm", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>nm</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Distance (Non SI)</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Mile</InputGroup.Text>
                            <FormControl type={"number"} value={mile} onChange={e => distanceInputDetected("ml", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>mi</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Yard</InputGroup.Text>
                            <FormControl type={"number"} value={yard} onChange={e => distanceInputDetected("yd", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>yd</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Foot</InputGroup.Text>
                            <FormControl type={"number"} value={foot} onChange={e => distanceInputDetected("ft", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>ft</InputGroup.Text>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Inch</InputGroup.Text>
                            <FormControl type={"number"} value={inch} onChange={e => distanceInputDetected("in", e.target.value)} onFocus={e => e.target.select()} className={"text-end"}/>
                            <InputGroup.Text>in</InputGroup.Text>
                        </InputGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Distance;