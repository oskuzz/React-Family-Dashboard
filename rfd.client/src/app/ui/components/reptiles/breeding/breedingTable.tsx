"use client"
import { Table } from 'react-bootstrap';
import { ReptileBreeding } from "@/app/ui/assets/data/data";

export function BreedingTable({
    data
}: {
    data: Array<ReptileBreeding> | undefined
}) {
    return (
        <>
            <Table striped bordered className="measure-table">
                <thead>
                    <tr>
                        <th>Parittelupäivä</th>
                        <th>Kumppani ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(food => (
                            <tr key={new Date(food.date??"")?.toDateString() ?? ' - '}>
                                <td>{new Date(food.date??"")?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{food.partnerId ?? ' - '}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}