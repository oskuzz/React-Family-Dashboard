"use client"
import { Table } from 'react-bootstrap';
import { ReptileFeeding } from "@/app/ui/assets/data/data";

export function FeedingTable({
    data
}: {
    data: Array<ReptileFeeding> | undefined
}) {
    return (
        <>
            <Table striped bordered className="measure-table">
                <thead>
                    <tr>
                        <th>Ruokintapäivä</th>
                        <th>Ruoka</th>
                        <th>Koko</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(food => (
                            <tr key={new Date(food.date??"")?.toDateString() ?? ' - '}>
                                <td>{new Date(food.date??"")?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{food.type ?? ' - '}</td>
                                <td>{food.size ?? ' - '} {food.size !== null ? ' g' : ''}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}