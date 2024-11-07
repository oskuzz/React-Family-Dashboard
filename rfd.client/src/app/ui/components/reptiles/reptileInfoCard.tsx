"use client"
import { Reptile } from "@/app/ui/assets/data/data";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Lusifer from '@/app/ui/assets/images/Lusse_The_Sanke.jpeg';
import moment from "moment";

export default function ReptileInfo({data}: {data: Reptile | undefined}) {

    const bd = new Date(data?.birthday ?? "") ?? new Date()
    const age: number | null = data?.birthday !== null ? ((Math.abs(Date.now() - bd.getTime())) / (1000 * 3600 * 24)) / 365.25 : null;
    const birth: string = moment(data?.birthday).format("DD.MM.YYYY");
    return (
        <>
            <Card className="information-card">
                <Card.Img variant="top" src={Lusifer.src}></Card.Img>
                <Card.Body>
                    <Card.Title>{data?.name} {data?.nickname !== null ? `(${data?.nickname})` : ""} {data?.gender === "Female" ? <i aria-hidden className="fa-solid fa-venus" style={{ color: "#fa47aa" }}></i> : <i aria-hidden className="fa-solid fa-mars" style={{ color: "#1E90FF" }}></i>}</Card.Title>
                    <hr />
                    <Card.Text className="text-muted">{data?.reptileSpecies}</Card.Text>

                    <Card.Text>
                        <strong>Ikä</strong>: {age?.toFixed(1)} vuotta<br />
                        <strong>Syntynyt</strong>: {birth}<br />
                        {data?.description}
                    </Card.Text>
                </Card.Body>
                <CardBody>
                    <Card.Text><strong>Terraario</strong></Card.Text>
                    <hr />
                    <Card.Text>
                        <strong>Koko</strong>: {data?.terrarium?.size}<br />
                        <strong>Ihanne lämpötila</strong>: {data?.terrarium?.idealTemperature} &deg;C<br />
                        <strong>Lämmitys</strong>: {data?.terrarium?.heatingElements?.join(', ')}<br />
                        <strong>Muut</strong>: {data?.terrarium?.otherAccessories?.join(', ')}
                    </Card.Text>
                </CardBody>
                <Card.Body>
                    <Card.Text><strong>Geenit</strong></Card.Text>
                    <hr />
                    <Card.Text>
                        {
                            data?.genes?.map(gene => (
                                <Badge key={gene.gene} className={`${gene.color ? `background-${gene.color.toLowerCase()}` : ''} me-1`}>{gene.gene}</Badge>
                            ))
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}