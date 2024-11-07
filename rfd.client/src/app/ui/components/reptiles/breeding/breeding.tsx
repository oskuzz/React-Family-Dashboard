import { Card } from "react-bootstrap";
import { BreedingTable } from "./breedingTable";
import { ReptileBreeding } from "@/app/ui/assets/data/data";

export function Breeding({
    data
}: {
    data:  Array<ReptileBreeding>  | undefined
}){
    return (
        <>
            <Card>
                <Card.Header>
                    <h4>Parittelu tiedot</h4>
                </Card.Header>
                <Card.Body>
                    <BreedingTable data={data}/>
                </Card.Body>
            </Card>
        </>
    );    
}