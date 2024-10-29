import { Card } from "react-bootstrap";

import { MeasureTable } from "./measureTable";
import { MeasureChart } from "./measureChart";

export function Measures({
    id
}: {
    id: number
}) {

    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Kasvu tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <MeasureTable id={id} />
                    <MeasureChart id={id} />
                </Card.Body>
            </Card>
        </>
    );
}