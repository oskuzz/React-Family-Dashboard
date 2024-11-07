"use client"
import { Table } from 'react-bootstrap';
import { ReptileMeasures } from "@/app/ui/assets/data/data";

export function MeasureTable({
    data
}: {
    data: Array<ReptileMeasures> | undefined
}) {
    return (
        <>
            <Table striped bordered className="measure-table">
                <thead>
                    <tr>
                        <th>Mittauspäivämäärä</th>
                        <th>Pituus</th>
                        <th>Paino</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(measure => (
                            <tr key={measure.weight}>
                                <td>{new Date(measure.date ?? "")?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{measure.height ?? ' - '} {measure.height !== null ? ' cm' : ''}</td>
                                <td>{measure.weight ?? ' - '} {measure.weight !== null ? ' g' : ''}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}