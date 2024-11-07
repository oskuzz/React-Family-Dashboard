import ReptileInfo from '@/app/ui/components/reptiles/reptileInfoCard';
import '@/app/ui/assets/css/reptiles/styles.css';
import { Suspense } from 'react';
import { getReptileData, getReptileInfoData } from '@/app/ui/assets/data/data';
import { Details } from '../ui/components/reptiles/details';
import ReptileInfoCardSkeleton from './loading';

export default async function Reptiles() {
  const gender = "Female", species = "Viljakäärme", name = "Lusifer";
  const { data: reptileData } = await getReptileData(gender, species, name);
  const { data: reptileInfoData } = await getReptileInfoData(gender, species, name);

  return (
    <div className="d-flex flex-row h-100">
      <div className="w-25">
        <Suspense fallback={<ReptileInfoCardSkeleton />}>
          <ReptileInfo data={reptileData} />
        </Suspense>
      </div>
      <div className="d-flex flex-column ms-3 w-75">
        <Suspense fallback={<label>Loading...</label>}>
          <Details data={reptileInfoData} reptile={reptileData} />
        </Suspense>
      </div>
    </div>
  );
}
