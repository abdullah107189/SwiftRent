import React from "react";
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";

export default function DetailsCard() {
  return (
    <div className="grid py-16 grid-cols-12 gap-6">
      {/* Left Section - Sticky */}
      <div className="md:col-span-4 col-span-12">
        <div className="sticky top-20">
          <DetailsLeft />
        </div>
      </div>
      {/* Right Section */}
      <div className="md:col-span-8 col-span-12">
        <DetailsRight />
      </div>
    </div>
  );
}
