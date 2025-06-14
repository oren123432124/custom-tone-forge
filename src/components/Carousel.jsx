import React from "react";

export default function Carousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
          <div className="h-full flex items-center justify-center text-gray-400">
            Image Slot {i} (Admin Editable)
          </div>
        </div>
      ))}
    </div>
  );
}