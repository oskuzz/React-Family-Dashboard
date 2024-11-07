import { Reptile, ReptileMeasures } from "@/app/ui/assets/data/data";
import 'chartjs-adapter-moment';
import moment from "moment";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
)

function transformData(data: Array<ReptileMeasures> | undefined, reptile: Reptile | undefined) {
    const bd = new Date(reptile?.birthday ?? "") ?? new Date()

    const calcAge = function (date: Date) {
        return ((Math.abs(date.getTime() - bd.getTime())) / (1000 * 3600 * 24)) / 365.25;
    }
    const labels = data?.map(l => [moment(l.date).format("DD.MM.YYYY"), `(${calcAge(new Date(l.date ?? "")).toFixed(1)} vuotias)`]);
    
    return {
        labels: labels,
        datasets: [
            {
                label: 'Paino kehitys',
                data: data?.map(d => d.weight ?? undefined),
                borderColor: '#2D7DD2',
                backgroundColor: '#2D7DD2',
                tension: 0.1
            },
            {
                label: 'Pituus kehitys',
                data: data?.map(d => d.height ?? undefined),
                borderColor: '#44872A',
                backgroundColor: '#44872A',
                tension: 0.1
            }
        ]
    }
}

export function MeasureChart({
    data, reptile
}: {
    data: Array<ReptileMeasures> | undefined, reptile: Reptile | undefined
}) {
    const datasets = transformData(data, reptile);
    //const data = getData(id);
    return (
        <>
            <div className={"mb-3"} style={{ position: "relative", height: "30vh", width: "100%" }}>
                <Line data={datasets} options={
                    {
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    source: 'data'
                                }
                            }
                        }
                    }
                } />
            </div>
        </>
    );
}