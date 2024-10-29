import { Card } from "react-bootstrap";
import { FeedingTable } from "./feedingTable";

export function Feeding({
    id
}: {
    id:  number
}){
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Ruokinta tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <FeedingTable id={id} />
                </Card.Body>
            </Card>
        </>
    );    
}