import { Card } from "react-bootstrap";
import { SkinChangeTable } from "./skinChangeTable";
import { ReptileSkinChange } from "@/app/ui/assets/data/data";

export function SkinChange({
    data
}: {
    data: Array<ReptileSkinChange> | undefined
}) {
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Nahanvaihto tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <SkinChangeTable data={data} />
                </Card.Body>
            </Card>
        </>
    );
}