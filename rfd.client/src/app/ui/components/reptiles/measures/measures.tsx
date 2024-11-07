import { Card } from "react-bootstrap";

import { MeasureTable } from "./measureTable";
import { MeasureChart } from "./measureChart";
import { ReptileMeasures, Reptile } from "@/app/ui/assets/data/data";

export function Measures({
    data, reptile
}: {
    data: Array<ReptileMeasures> | undefined, reptile: Reptile | undefined
}) {

    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Kasvu tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <MeasureChart data={data} reptile={reptile} />
                    <MeasureTable data={data} />
                </Card.Body>
            </Card>
        </>
    );
}