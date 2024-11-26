"use client"
import { Button, Table } from 'react-bootstrap';
import { Reptile, ReptileMeasures } from "@/app/ui/assets/data/data";
import moment from 'moment';
import clsx from 'clsx';
import { useState } from 'react';

export function MeasureTable({
    data, reptile, add, settings, updateParent
}: {
    data: Array<ReptileMeasures> | undefined,
    reptile: Reptile | undefined,
    add?: boolean,
    settings?: boolean,
    updateParent: Function
}) {

    const [measures, setMeasure] = useState<Array<ReptileMeasures> | undefined>(data?.sort((a, b) => {
        return Date.parse(b.date ?? "") - Date.parse(a.date ?? "");
    }));
    const [newDateValue, setDate] = useState(moment().format("YYYY-MM-DD"));
    const [newHeight, setHeight] = useState('');
    const [newWeight, setWeight] = useState('');

    function handleAddingEntity() {
        if (!validateInputs()) {
            setDate(moment().format("YYYY-MM-DD"));
            setHeight('');
            setWeight('');

            return;
        }

        let newMeasure: ReptileMeasures;
        let data;

        const instances: ReptileMeasures[] = measures?.filter(a => moment(a.date).format("YYYY-MM-DD") === moment(newDateValue).format("YYYY-MM-DD")) as ReptileMeasures[];

        if (instances.length > 0) {
            handleUpdateEntity(instances);
        } else {
            newMeasure = { date: newDateValue, height: (isEmptyOrSpaces(newHeight) ? undefined : parseInt(newHeight)), weight: (isEmptyOrSpaces(newWeight) ? undefined : parseInt(newWeight)) };
            data = [newMeasure, ...measures ?? []];

            setMeasure(data);
            updateParent(newMeasure, "add");

            setDate(moment().format("YYYY-MM-DD"));
            setHeight('');
            setWeight('');
        }
    }

    function handleUpdateEntity(instances?: ReptileMeasures[]) {
        let entities: ReptileMeasures[];

        if (!instances) {
            entities = measures?.filter(a => moment(a.date).format("YYYY-MM-DD") === moment(newDateValue).format("YYYY-MM-DD")) as ReptileMeasures[];
        } else {
            entities = instances;
        }

        if (entities.length > 0) {
            entities[0].height = entities[0].height ?? parseInt(newHeight);
            entities[0].weight = entities[0].weight ?? parseInt(newWeight);

            const existingInstances: ReptileMeasures[] = measures?.filter(a => moment(a.date).format("YYYY-MM-DD") !== moment(newDateValue).format("YYYY-MM-DD")) as ReptileMeasures[];

            data = [entities[0], ...existingInstances];

            setMeasure(data);
            updateParent(entities[0], "update");

            setDate(moment().format("YYYY-MM-DD"));
            setHeight('');
            setWeight('');
        } else {
            handleAddingEntity();
        }
    }

    function handleMeasuresDisplay() {
        let newMeasure: ReptileMeasures;
        let data;

        const instances: ReptileMeasures[] = measures?.filter(a => moment(a.date).format("YYYY-MM-DD") === moment(newDateValue).format("YYYY-MM-DD")) as ReptileMeasures[];

        if (instances.length > 0) {
            instances[0].height = instances[0].height ?? parseInt(newHeight);
            instances[0].weight = instances[0].weight ?? parseInt(newWeight);

            const existingInstances: ReptileMeasures[] = measures?.filter(a => moment(a.date).format("YYYY-MM-DD") !== moment(newDateValue).format("YYYY-MM-DD")) as ReptileMeasures[];

            data = [instances[0], ...existingInstances];
        } else {
            newMeasure = { date: newDateValue, height: (isEmptyOrSpaces(newHeight) ? undefined : parseInt(newHeight)), weight: (isEmptyOrSpaces(newWeight) ? undefined : parseInt(newWeight)) };
            data = [newMeasure, ...measures ?? []];
        }



        setMeasure(data);
        updateParent(data);

        setDate(moment().format("YYYY-MM-DD"));
        setHeight('');
        setWeight('');
    }

    function isEmptyOrSpaces(str: string) {
        return str === null || str.match(/^ *$/) !== null;
    }

    function validateInputs() {
        console.log(newDateValue)
        return !isEmptyOrSpaces(newDateValue) && (!isEmptyOrSpaces(newHeight) || !isEmptyOrSpaces(newWeight));
    }

    return (
        <>
            <Table striped bordered className={"measure-table"}>
                <thead>
                    <tr>
                        <th>Mittauspäivämäärä</th>
                        <th>Pituus</th>
                        <th>Paino</th>
                        <th className={clsx({ "d-none": !settings }, { "d-block": settings })} style={{ width: "10%" }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={clsx("measure-table add", { "show": add })}>
                        <td><div className="d-flex"><input type='date' placeholder={"Anna päivämäärä"} className="form-control" value={newDateValue} onChange={e => setDate(e.target.value)} /></div></td>
                        <td><div className="d-flex"><input type='text' placeholder={"Anna pituus (cm)"} className="form-control" value={newHeight} onChange={e => setHeight(e.target.value)} /></div></td>
                        <td><div className="d-flex"><input type='text' placeholder={"Anna paino (g)"} className="form-control" value={newWeight} onChange={e => setWeight(e.target.value)} /></div></td>
                    </tr>
                    <tr className={clsx("measure-table add", { "show": add })}>
                        <td colSpan={3}>
                            <div className="d-flex">
                                <Button onClick={handleAddingEntity} className="ms-auto btn-secondary">Lisää arvo</Button>
                            </div>
                        </td>
                    </tr>
                    {
                        measures?.map(measure => (
                            <tr key={measure.weight}>
                                <td>{new Date(measure.date ?? "")?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                <td>{measure.height ?? ' - '} {measure.height !== null && measure.height !== undefined ? ' cm' : ''}</td>
                                <td>{measure.weight ?? ' - '} {measure.weight !== null && measure.weight !== undefined ? ' g' : ''}</td>
                                <td className={clsx("d-flex", { "d-none": !settings })}>
                                    <Button className="ms-auto btn-warning me-1"><i aria-hidden className="fa-solid fa-arrows-rotate"></i></Button>
                                    <Button className="btn-danger"><i aria-hidden className="fa-solid fa-x"></i></Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}