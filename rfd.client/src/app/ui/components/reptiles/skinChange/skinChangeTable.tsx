"use client"
import { Table } from 'react-bootstrap';
import { ReptileSkinChange } from "@/app/ui/assets/data/data";

export function SkinChangeTable({
    data
}: {
    data: Array<ReptileSkinChange> | undefined
}) {
    return (
        <>
            <Table striped bordered className="measure-table">
                <thead>
                    <tr>
                        <th>Luontipäivä</th>
                        <th>Nahan laatu</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(skin => (
                            <tr key={new Date(skin.date??"").toDateString() ?? ' - '}>
                                <td>{new Date(skin.date??"").toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{skin.quality ?? ' - '}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}