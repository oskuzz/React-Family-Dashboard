"use server"

export interface Reptile {
    reptileId?: number,
    name?: string,
    nickname?: string,
    gender?: string,
    birthday?: string,
    img?: string,
    reptileSpecies?: string,
    description?: string,
    genes?: Array<ReptileGeneMap>,
    terrarium?: ReptileTerrarium
}

export interface ReptileGeneMap {
    gene?: string,
    color?: string
}

export interface ReptileMeasures {
    height?: number, // cm
    weight?: number, // g
    date?: string,
}

export interface ReptileFeeding {
    type?: string, // Mouse, Rat...
    size?: number, // g
    date?: string, // feeding date
}

export interface ReptileBreeding {
    partnerId?: number,
    date?: string
}

export interface ReptileSkinChange {
    quality?: string, // Skin quality. For example 'normal' or 'torned'
    date?: string
}


export interface ReptileTerrarium {
    size?: string,
    heatingElements?: Array<string>, // For example heating mat, heatlamp...
    otherAccessories?: Array<string>, // For example UV light
    idealTemperature?: number, // celsius
}

export interface ReptileInfo {
    reptileId?: number,
    measures?: Array<ReptileMeasures>,
    feeding?: Array<ReptileFeeding>,
    skinChange?: Array<ReptileSkinChange>,
    breeding?: Array<ReptileBreeding>
}

export async function getReptileTestData() {
    const measureData: Array<ReptileMeasures> = [
        { height: undefined, weight: 218, date: "2023-12-3" },
        { height: undefined, weight: 280, date: "2024-2-22" },
        { height: undefined, weight: 287, date: "2024-4-8" },
        { height: undefined, weight: 365, date: "2024-9-29" }
    ];
    const reptileTerrarium: ReptileTerrarium =
    {
        size: "90x45x45cm",
        heatingElements: ["Lämpölamppu"],
        otherAccessories: ["UV lamppu", "Vesiastia"],
        idealTemperature: 30
    }
    const reptileSkinChange: Array<ReptileSkinChange> = [
        { date: '2024-10-14', quality: "normaali" }
    ]
    const reptileFeeding: Array<ReptileFeeding> = [
        { date: '2024-10-20', type: "Hiiri", size: 35 }
    ]

    const reptileInfo: Array<ReptileInfo> = [
        {
            reptileId: 1,
            measures: measureData,
            feeding: reptileFeeding,
            skinChange: reptileSkinChange,
            breeding: undefined
        }
    ];

    const reptileGenes: Array<ReptileGeneMap> = [
        { gene: "Ghost", color: "gray" }
    ]
    const reptiles: Array<Reptile> = [
        {
            reptileId: 1,
            name: "Lusifer",
            nickname: "Lusse",
            birthday: '2020-6-1',
            reptileSpecies: "Viljakäärme",
            description: "Lusse on meidän ensimmäinen herppi. Vilkas ja utelias tapaus.",
            genes: reptileGenes,
            terrarium: reptileTerrarium
        }
    ];

    return { reptiles, reptileInfo };
}

export const POST = async (body: string, path: string) => {
    let isError = false;
    let error = "";
    try {
        await new Promise((resolve) => setTimeout(resolve, delay));
        const res = await fetch('http://localhost:8081/' + path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            body: body
        });
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { isError, error };
}

const delay = 0;

export const getReptileData = async (gender: string, species: string, name: string) => {
    let data: Reptile | undefined = undefined;
    let isError = false;
    let error = "";
    try {
        await new Promise((resolve) => setTimeout(resolve, delay));
        const res = await fetch('http://localhost:8081/Reptiles/GetReptile/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            body: JSON.stringify({ "Gender": gender, "Species": species, "Name": name })
        });
        data = await res.json();
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };
};

export const getReptileInfoData = async (gender: string, species: string, name: string) => {
    let data: ReptileInfo | undefined = undefined;
    let isError = false;
    let error = "";
    try {
        await new Promise((resolve) => setTimeout(resolve, delay));
        const res = await fetch('http://localhost:8081/Reptiles/GetReptileInfo/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            body: JSON.stringify({ "Gender": gender, "Species": species, "Name": name })
        });
        data = await res.json();
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };
};