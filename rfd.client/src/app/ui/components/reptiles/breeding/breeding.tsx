import { Card } from "react-bootstrap";
import { BreedingTable } from "./breedingTable";

export function Breeding({
    id
}: {
    id:  number
}){
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Parittelu tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <BreedingTable id={id}/>
                </Card.Body>
            </Card>
        </>
    );    
}