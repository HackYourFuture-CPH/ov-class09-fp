const routeInfo = require("./data/route_info_dump.json");
const vesselList = require("./data/vessel_list.json");
const vesselReport = require("./data/vessel_report_dump.json");
const voyageInfo = require("./data/voyage_info.json");
const companyList = require("./data/company_list.json");

module.exports = function() {
  return {
    route_info: routeInfo,
    vassel_list: vesselList,
    vessel_report: vesselReport,
    voyage_info: voyageInfo,
    company_list: companyList
  };
};
