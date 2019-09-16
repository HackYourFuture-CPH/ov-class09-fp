const routeInfo = require("./data/route_info_dump.json");
const vesselList = require("./data/vessel_list.json");
const vesselReport = require("./data/vessel_report_dump.json");
const voyageInfo = require("./data/voyage_info.json");

module.exports = function() {
  return {
    route_info: routeInfo,
    vassel_list: vesselList,
    vesselreport: vesselReport,
    voyageinfo: voyageInfo
  };
};
