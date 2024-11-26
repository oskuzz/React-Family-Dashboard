import { Card, Button } from "react-bootstrap";

import { MeasureTable } from "./measureTable";
import { MeasureChart } from "./measureChart";
import { ReptileMeasures, Reptile, addData } from "@/app/ui/assets/data/data";
import { useState } from "react";
import { Chart } from "chart.js";

export function Measures({
    data, reptile
}: {
    data: Array<ReptileMeasures> | undefined, reptile: Reptile | undefined
}) {

    const [addRow, setAddRow] = useState(false);
    const [updateRow, setUpdateRow] = useState(false);
    const [measures, setMeasure] = useState<Array<ReptileMeasures> | undefined>(data);
    const [reptileData, setReptileData] = useState<Reptile | undefined>(reptile);

    function handleAddRow() {
        setAddRow(!addRow);
        setUpdateRow(false);
    }

    function handleUpdateRow() {
        setUpdateRow(!updateRow);
        setAddRow(false);
    }

    function updateData(data: ReptileMeasures, type: string = "update") {
        setMeasure([data, ...measures as ReptileMeasures[]]);

        switch(type.toLowerCase()){
            case "add":
                const body = JSON.stringify({reptile: reptileData, measure: data})
                addData(body, "Reptiles/AddReptileMeasure/");
                break;
            case "update":
                break;
        }

        Chart.getChart('measureChart')?.update();
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <div className="d-flex">
                        <h4 className={"mr-auto"}>Kasvu tiedot</h4>
                        <Button className="btn-secondary me-1" onClick={handleUpdateRow}><i aria-hidden className="fa-solid fa-gears"></i></Button>
                        <Button className="btn-success" onClick={handleAddRow}><i aria-hidden className="fa-solid fa-plus"></i></Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <MeasureChart data={measures} reptile={reptileData} />
                    <MeasureTable data={measures} reptile={reptileData} add={addRow} settings={updateRow} updateParent={updateData} />
                </Card.Body>
            </Card>
        </>
    );
}