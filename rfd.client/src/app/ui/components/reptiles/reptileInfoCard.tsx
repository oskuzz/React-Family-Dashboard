import { Badge, Card, CardBody, ListGroup } from "react-bootstrap";

import { getReptileData } from "@/app/ui/assets/data/data";
import Lusifer from '@/app/ui/assets/images/Lusse_The_Sanke.jpeg';
import clsx from "clsx";

function getData(id: number) {
    const { reptiles } = getReptileData();

    const reptile = reptiles.filter((r) => r.reptileId === id)[0];

    return reptile;
}

export function ReptileInfo({
    id
}: {
    id: number
}) {
    const reptile = getData(id);
    const bd = reptile.birthday ?? new Date()
    const age: number | null = reptile.birthday !== null ? ((Math.abs(Date.now() - bd.getTime())) / (1000 * 3600 * 24)) / 365.25 : null;
    return (
        <>
            <Card className="information-card">
                <Card.Img variant="top" src={Lusifer.src}></Card.Img>
                <Card.Body>
                    <Card.Title>{reptile.name} {reptile.nickname !== null ? `(${reptile.nickname})` : ""}</Card.Title>
                    <hr />
                    <Card.Text className="text-muted">{reptile.reptileSpecies}</Card.Text>

                    <Card.Text>
                        <strong>Ikä</strong>: {age?.toFixed(1)} vuotta<br />
                        {reptile.description}
                    </Card.Text>
                </Card.Body>
                <CardBody>
                    <Card.Text><strong>Terraario</strong></Card.Text>
                    <hr />
                    <Card.Text>
                        <strong>Koko</strong>: {reptile.terrarium?.size}<br />
                        <strong>Ihanne lämpötila</strong>: {reptile.terrarium?.idealTemperature} &deg;C<br />
                        <strong>Lämmitys</strong>: {reptile.terrarium?.heatingElements?.join(', ')}<br />
                        <strong>Muut</strong>: {reptile.terrarium?.otherAccessories?.join(', ')}
                    </Card.Text>
                </CardBody>
                <Card.Body>
                    <Card.Text><strong>Geenit</strong></Card.Text>
                    <hr />
                    <Card.Text>
                        {
                            reptile.genes?.map(gene => (
                                <Badge key={gene.gene} className={`${gene.color ? `background-${gene.color}` : ''} me-1`}>{gene.gene}</Badge>
                            ))
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}