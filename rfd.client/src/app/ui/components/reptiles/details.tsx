"use client"
import { Card, Tabs, Tab } from "react-bootstrap";
import { Measures } from "./measures/measures";
import { Feeding } from "./feeding/feeding";
import { SkinChange } from "./skinChange/skinChange";
import { Breeding } from "./breeding/breeding";
import { Reptile, ReptileInfo } from "../../assets/data/data";

export function Details({
    data, reptile
}: {
    data: ReptileInfo | undefined, reptile: Reptile | undefined
}) {

    return (
        <>
            <Tabs defaultActiveKey="growth" id="reptile-details" className="mb-3" fill transition={true}>
                <Tab eventKey="growth" title="Kasvu">
                    <Measures data={data?.measures} reptile={reptile} />
                </Tab>
                <Tab eventKey="feeding" title="Ruokinta">
                    <Feeding data={data?.feeding} />
                </Tab>
                <Tab eventKey="skinChange" title="Nahanvaihto">
                    <SkinChange data={data?.skinChange} />
                </Tab>
                <Tab eventKey="breeding" title="Parittelu">
                    <Breeding data={data?.breeding} />
                </Tab>
            </Tabs>
        </>
    );
}