import React, { Component } from "react";
//import Button from "./Button";

export default function ShowAllRoutes({ match }) {
  const label = (
    <a
      href={`/voyages/${match.params.voyage_id}/vessel-reports/${match.params.vessel_reports_id}/suggested-routes`}
    >
      SHOW ALL ROUTES
    </a>
  );

  return <button type="submit">{label}</button>;
}
