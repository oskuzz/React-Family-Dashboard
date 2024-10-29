import { getReptileData } from "@/app/ui/assets/data/data";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Line } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

function getData(id: number) {
    const { reptileInfo } = getReptileData();

    const measures = reptileInfo.measures?.filter((m) => m.reptileId === id);

    return measures;
}

function generateData() {
    return {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                label: 'Paino',
                data: [1,2,3,4,5],
                borderColor: '#2D7DD2',
                backgroundColor: '#2D7DD2'
              },
              {
                label: 'Pituus',
                data: [3,4,5,6,7],
                borderColor: '#44872A',
                backgroundColor: '#44872A'
              }
        ]
    }
}

const options ={
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
}

export function MeasureChart({
    id
}: {
    id: number
}) {
    const data = getData(id);
    return (
        <>
            <Line data={generateData()} />
        </>
    );
}