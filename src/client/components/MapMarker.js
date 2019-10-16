import React from "react";

export default function MapMarkers({ size, fillColor, isSelected }) {
  const markerSizes = {
    sm: 6,
    md: 10,
    lg: 16
  };

  return (
    <svg
      width={markerSizes[size]}
      height={markerSizes[size]}
      viewBox={`0 0 ${markerSizes[size]} ${markerSizes[size]}`}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={markerSizes[size] / 2}
        cy={markerSizes[size] / 2}
        r={markerSizes[size] / 2}
        fill={fillColor}
      />
      {isSelected && (
        <circle
          cx={markerSizes[size] / 2}
          cy={markerSizes[size] / 2}
          r={markerSizes[size] / 8}
          fill="white"
        />
      )}
    </svg>
  );
}
