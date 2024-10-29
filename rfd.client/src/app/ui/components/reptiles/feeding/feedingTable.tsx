import { Table } from 'react-bootstrap';
import { getReptileData } from "@/app/ui/assets/data/data";

function getData(id: number) {
    const { reptileInfo } = getReptileData();

    let feeding = reptileInfo?.filter((m) => m.reptileId === id)[0].feeding;

    if (!feeding) {
        feeding = [{ date: null, size: null, type: null }]
    }

    return feeding;
}

export function FeedingTable({
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
                        <th>Ruokintapäivä</th>
                        <th>Ruoka</th>
                        <th>Koko</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(food => (
                            <tr key={food.date?.toDateString() ?? ' - '}>
                                <td>{food.date?.toLocaleDateString('fi-FI') ?? ' - '}</td>
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