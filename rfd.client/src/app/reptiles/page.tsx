'use client'

import { useSearchParams } from 'next/navigation';

import { ReptileInfo } from '@/app/ui/components/reptiles/reptileInfoCard';
import { MeasureTable } from '@/app/ui/components/reptiles/measures/measureTable';
import '@/app/ui/assets/css/reptiles/styles.css';
import { Details } from '../ui/components/reptiles/details';

export default function Reptiles() {
  const searchParams = useSearchParams()

  const reptileId = parseInt(searchParams.get('id') ?? "0");
  return (
    <div className="d-flex flex-row">
      <div className="w-25">
        <ReptileInfo id={reptileId} />
      </div>
      <div className="d-flex flex-column ms-3 w-75">
        <Details id={reptileId}/>
      </div>
    </div>
  );
}
