import { Card, Tabs, Tab } from "react-bootstrap";
import { Measures } from "./measures/measures";
import { Feeding } from "./feeding/feeding";
import { SkinChange } from "./skinChange/skinChange";
import { Breeding } from "./breeding/breeding";

export function Details({
    id
}: {
    id: number
}) {

    return (
        <>
            <Tabs defaultActiveKey="growth" id="reptile-details" className="mb-3" fill transition={true}>
                <Tab eventKey="growth" title="Kasvu">
                    <Measures id={id} />
                </Tab>
                <Tab eventKey="feeding" title="Ruokinta">
                    <Feeding id={id} />
                </Tab>
                <Tab eventKey="skinChange" title="Nahanvaihto">
                    <SkinChange id={id} />
                </Tab>
                <Tab eventKey="breeding" title="Parittelu">
                    <Breeding id={id} />
                </Tab>
            </Tabs>
        </>
    );
}