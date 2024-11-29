"use client"
import { Button, Table } from 'react-bootstrap';
import { Reptile, ReptileMeasures } from "@/app/ui/assets/data/data";
import moment from 'moment';
import clsx from 'clsx';
import { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';

export function MeasureTable({
    data, reptile, add, settings, updateParent, updateParentData
}: {
    data: Array<ReptileMeasures> | undefined,
    reptile: Reptile | undefined,
    add?: boolean,
    settings?: boolean,
    updateParent: Function,
    updateParentData: Function
}) {

    const [measures, setMeasures] = useState<Array<ReptileMeasures>>(data?.sort((a, b) => {
        return Date.parse(b.date ?? "") - Date.parse(a.date ?? "");
    }) as ReptileMeasures[]);
    const [newDateValue, setDate] = useState(moment().format("YYYY-MM-DD"));
    const [newHeight, setHeight] = useState('');
    const [newWeight, setWeight] = useState('');
    const [update, setUpdate] = useState<Array<Boolean>>(Array.from({ length: measures?.length ?? 0 }, () => false));
    const [updateId, setUpdateId] = useState(-2);

    function resetValues() {
        setDate(moment().format("YYYY-MM-DD"));
        setHeight("");
        setWeight("");
    }

    function resetUpdateArray() {
        setUpdate(Array.from({ length: measures?.length ?? 0 }, () => false));
        setUpdateId(-2);
    }

    useEffect(() => {
        resetValues();
        resetUpdateArray();
    }, [add, settings]);

    useEffect(() => {
        if (updateId === -1) {
            resetUpdateArray();
        } else if (updateId > -1) {
            const measure: ReptileMeasures = measures[updateId];

            setDate(moment(measure?.date ?? "").format("YYYY-MM-DD"));
            setHeight(measure?.height?.toString() ?? "");
            setWeight(measure?.weight?.toString() ?? "");

            setUpdate(Array.from({ length: measures?.length ?? 0 }, (a, b) => b === updateId ? true : false));
        }
    }, [updateId]);

    function isEmptyOrSpaces(str: string) {
        return str === null || str.match(/^ *$/) !== null;
    }

    function handleNewEntity() {
        const newEntity: ReptileMeasures = { date: newDateValue, height: (isEmptyOrSpaces(newHeight) ? undefined : parseInt(newHeight)), weight: (isEmptyOrSpaces(newWeight) ? undefined : parseInt(newWeight)) };
        setMeasures([newEntity, ...measures]);

        updateParentData(measures);
        updateParent("add");
        console.log(measures);
    }

    function handleUpdatedEntity() {
        if (updateId < 0) {
            return;
        }

        resetUpdateArray();

        const existingInstances: ReptileMeasures[] = measures?.map((entity, index) => {
            if (index === updateId) {
                entity.height = entity.height !== parseInt(newHeight) ? parseInt(newHeight) : entity.height;
                entity.weight = entity.weight !== parseInt(newWeight) ? parseInt(newWeight) : entity.weight;
                entity.date = moment(entity.date).toISOString() !== moment(newDateValue).toISOString() ? moment(newDateValue).toISOString() : entity.date;

                return entity;
            } else {
                return entity;
            }
        }) as ReptileMeasures[];

        setMeasures(existingInstances);
        updateParentData(measures);
        updateParent("update");
    }

    return (
        <>
            <Table striped bordered className={"measure-table"}>
                <thead>
                    <tr>
                        <th>Mittauspäivämäärä</th>
                        <th>Pituus</th>
                        <th>Paino</th>
                        <th className={clsx({ "d-none": !settings }, { "d-block": settings })}>Asetukset</th>
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
                                <Button onClick={handleNewEntity} className="ms-auto btn-secondary">Lisää arvo</Button>
                            </div>
                        </td>
                    </tr>
                    {
                        measures?.map((measure, index) => (
                            <Fragment key={`${measure?.weight}${index}`}>
                                <tr className={clsx({ "d-none": update[index] })}>
                                    <td>{new Date(measure?.date ?? "")?.toLocaleDateString('fi-FI') ?? ' - '}</td>
                                    <td>{measure?.height ?? ' - '} {measure?.height !== null && measure?.height !== undefined ? ' cm' : ''}</td>
                                    <td>{measure?.weight ?? ' - '} {measure?.weight !== null && measure?.weight !== undefined ? ' g' : ''}</td>
                                    <td className={clsx("d-flex", { "d-none": !settings })}>
                                        <Button className="ms-auto btn-sm btn-warning me-1" onClick={() => setUpdateId(index)}><i aria-hidden className="fa-solid fa-arrows-rotate"></i></Button>
                                        <Button className="btn-danger btn-sm" onClick={() => console.log('Not Implemented')}><i aria-hidden className="fa-solid fa-x"></i></Button>
                                    </td>
                                </tr>
                                <tr className="d-none"></tr>
                                <tr className={clsx("measure-table add", { "show": update[index] }, { "d-none": !update[index] })}>
                                    <td><div className="d-flex"><input type='date' placeholder={"Anna päivämäärä"} className="form-control" value={newDateValue} onChange={e => setDate(e.target.value)} /></div></td>
                                    <td><div className="d-flex"><input type='text' placeholder={"Anna pituus (cm)"} className="form-control" value={newHeight ?? ''} onChange={e => setHeight(e.target.value)} /></div></td>
                                    <td><div className="d-flex"><input type='text' placeholder={"Anna paino (g)"} className="form-control" value={newWeight ?? ''} onChange={e => setWeight(e.target.value)} /></div></td>
                                    <td>
                                        <div className="d-flex">
                                            <Button onClick={handleUpdatedEntity} className="ms-auto btn-success btn-sm me-1"><i aria-hidden className="fa-solid fa-check"></i></Button>
                                            <Button onClick={() => setUpdateId(-1)} className="btn-danger btn-sm"><i aria-hidden className="fa-solid fa-x"></i></Button>
                                        </div>
                                    </td>
                                </tr>
                            </Fragment>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}