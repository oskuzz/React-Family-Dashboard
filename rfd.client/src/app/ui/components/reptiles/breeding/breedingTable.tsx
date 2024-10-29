import { Table } from 'react-bootstrap';
import { getReptileData } from "@/app/ui/assets/data/data";

function getData(id: number) {
    const { reptileInfo } = getReptileData();

    let breeding = reptileInfo?.filter((m) => m.reptileId === id)[0].breeding;

    if (!breeding) {
        breeding = [{ date: null, partnerId: null }]
    }

    return breeding;
}

export function BreedingTable({
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
                        <th>Parittelupäivä</th>
                        <th>Kumppani ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(food => (
                            <tr key={food.date?.toDateString() ?? ' - '}>
                                <td>{food.date?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{food.partnerId ?? ' - '}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}