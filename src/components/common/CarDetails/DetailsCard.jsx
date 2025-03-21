import React from 'react'
import DetailsLeft from './DetailsLeft'
import DetailsRight from './DetailsRight';

export default function DetailsCard() {
  return (
    <div className="grid py-16 grid-cols-12">
      <div className="grid  col-span-4">
        <DetailsLeft />
      </div>
      <div className="grid  col-span-8">
        <DetailsRight />
      </div>
    </div>
  );
}
