import { Card } from "react-bootstrap";

export default function ReptileInfoCardSkeleton(){
    return (
        <>
            <Card className={"d-flex align-items-stretch w-100"}>
                <label>Loading...</label>
            </Card>
        </>
    );
}