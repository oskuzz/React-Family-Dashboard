import { Table } from 'react-bootstrap';
import { getReptileData } from "@/app/ui/assets/data/data";

function getData(id: number) {
    const { reptileInfo } = getReptileData();

    let skin = reptileInfo?.filter((m) => m.reptileId === id)[0].skinChange;

    if(!skin){
        skin = [{date: null, quality: null}]
    }

    return skin;
}

export function SkinChangeTable({
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
                        <th>Luontipäivä</th>
                        <th>Nahan laatu</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(skin => (
                            <tr key={skin.date?.toDateString() ?? ' - '}>
                                <td>{skin.date?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{skin.quality ?? ' - '}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}