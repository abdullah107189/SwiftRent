import React from "react";
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";

export default function DetailsCard({car}) {
  return (
    <div className="grid py-16 grid-cols-12 gap-6">
      {/* Left Section - Sticky */}
      <div className="md:col-span-4 col-span-12">
        <div className="sticky top-20">
          <DetailsLeft car={car} />
        </div>
      </div>
      {/* Right Section */}
      <div className="md:col-span-8 col-span-12">
        <DetailsRight car={car} />
      </div>
    </div>
  );
}
