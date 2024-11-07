import { Card } from "react-bootstrap";
import { FeedingTable } from "./feedingTable";
import { ReptileFeeding } from "@/app/ui/assets/data/data";

export function Feeding({
    data
}: {
    data:  Array<ReptileFeeding> | undefined
}){
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Ruokinta tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <FeedingTable data={data} />
                </Card.Body>
            </Card>
        </>
    );    
}