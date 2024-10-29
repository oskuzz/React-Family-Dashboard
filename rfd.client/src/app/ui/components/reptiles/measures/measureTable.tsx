import { Table } from 'react-bootstrap';
import { getReptileData } from "@/app/ui/assets/data/data";

function getData(id: number) {
    const { reptileInfo } = getReptileData();

    let measures = reptileInfo?.filter((m) => m.reptileId === id)[0].measures;

    if (!measures) {
        measures = [{ date: null, height: null, weight: null }]
    }

    return measures;
}

export function MeasureTable({
    id
}: {
    id: number
}) {
    const data = getData(id);
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
                                <td>{measure.date?.toLocaleDateString('fi-FI') ?? ' - '}</td>
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