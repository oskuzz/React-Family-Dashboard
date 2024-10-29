import { Card } from "react-bootstrap";
import { SkinChangeTable } from "./skinChangeTable";

export function SkinChange({
    id
}: {
    id: number
}) {
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Nahanvaihto tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <SkinChangeTable id={id} />
                </Card.Body>
            </Card>
        </>
    );
}