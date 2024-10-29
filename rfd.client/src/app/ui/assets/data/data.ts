type Nullable<T> = T | null | undefined;

interface Reptile {
    reptileId: Nullable<number>,
    name?: Nullable<string>,
    nickname?: Nullable<string>,
    birthday?: Nullable<Date>,
    img?: Nullable<string>,
    reptileSpecies?: Nullable<string>,
    description?: Nullable<string>,
    genes?: Nullable<Array<ReptileGeneMap>>,
    terrarium?: Nullable<ReptileTerrarium>
}

interface ReptileGeneMap {
    gene: Nullable<string>,
    color?: Nullable<string>
}

interface ReptileMeasures {
    height: Nullable<number>, // cm
    weight: Nullable<number>, // g
    date: Nullable<Date>,
}

interface ReptileFeeding {
    type: Nullable<string>, // Mouse, Rat...
    size: Nullable<number>, // g
    date: Nullable<Date>, // feeding date
}

interface ReptileBreeding {
    partnerId: Nullable<number>,
    date: Nullable<Date>
}

interface ReptileSkinChange {
    quality: Nullable<string>, // Skin quality. For example 'normal' or 'torned'
    date: Nullable<Date>
}


interface ReptileTerrarium {
    size: Nullable<string>,
    heatingElements: Nullable<Array<string>>, // For example heating mat, heatlamp...
    otherAccessories: Nullable<Array<string>>, // For example UV light
    idealTemperature: Nullable<number>, // celsius
}

interface ReptileInfo {
    reptileId: Nullable<number>,
    measures: Nullable<Array<ReptileMeasures>>,
    feeding: Nullable<Array<ReptileFeeding>>,
    skinChange: Nullable<Array<ReptileSkinChange>>,
    breeding: Nullable<Array<ReptileBreeding>>
}

export function getReptileData() {
    const measureData: Array<ReptileMeasures> = [
        { height: null, weight: 218, date: new Date("2023-12-3") },
        { height: null, weight: 280, date: new Date("2024-2-22") },
        { height: null, weight: 287, date: new Date("2024-4-8") },
        { height: null, weight: 365, date: new Date("2024-9-29") }
    ];
    const reptileTerrarium: ReptileTerrarium = { size: "90x45x45cm", heatingElements: ["Lämpölamppu"], otherAccessories: ["UV lamppu", "Vesiastia"], idealTemperature: 30 }
    const reptileSkinChange: Array<ReptileSkinChange> = [
        { date: new Date('2024-10-14'), quality: "normaali" }
    ]
    const reptileFeeding: Array<ReptileFeeding> = [
        { date: new Date('2024-10-20'), type: "Hiiri", size: 35 }
    ]

    const reptileInfo: Array<ReptileInfo> = [
        {
            reptileId: 1,
            measures: measureData,
            feeding: reptileFeeding,
            skinChange: reptileSkinChange,
            breeding: null
        }
    ];

    const reptileGenes: Array<ReptileGeneMap> = [
        { gene: "Ghost", color: "gray" }
    ]
    const reptiles: Array<Reptile> = [
        {
            reptileId: 1, name: "Lusifer", nickname: "Lusse", birthday: new Date('2020-6-1'), reptileSpecies: "Viljakäärme",
            description: "Lusse on meidän ensimmäinen herppi. Vilkas ja utelias tapaus.", genes: reptileGenes,
            terrarium: reptileTerrarium
        }
    ];

    return { reptiles, reptileInfo };
}