import React from "react";
export default function VoyageDetailsContainer({ match }) {
  return <div>This page is about the Voyage ID = {match.params.voyage_id}</div>;
}
