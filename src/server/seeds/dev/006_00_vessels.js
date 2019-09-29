exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);
  // Deletes ALL existing entries
  return knex("vessels")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vessels").insert([
        {
          organization_id: 1,
          mmsi: "477913600",
          name: "SS Martha"
        },
        {
          organization_id: 2,
          mmsi: "477913500",
          name: "Boaty McBoatface"
        },
        {
          organization_id: 3,
          mmsi: "351691000",
          name: "Seven Seas"
        },
        {
          organization_id: 4,
          mmsi: "235094793",
          name: "MS Marie"
        },
        {
          organization_id: 5,
          mmsi: "353530000",
          name: "OPAL FORTUNE"
        },
        {
          organization_id: 6,
          mmsi: 338162000,
          name: "EXCELLENCE"
        },
        {
          organization_id: 7,
          mmsi: "477232800",
          name: "COSCO PISCES"
        },
        {
          organization_id: 8,
          mmsi: "369463000",
          name: "JOHN GLENN"
        },
        {
          organization_id: 9,
          mmsi: "205753000",
          name: "OCEANIA"
        },
        {
          organization_id: 10,
          mmsi: "538004553",
          name: "SEA QINGDAO"
        },
        {
          organization_id: 11,
          mmsi: "538005109",
          name: "SEA MARANHAO"
        },
        {
          organization_id: 12,
          mmsi: "477118900",
          name: "SHANDONG DA DE"
        },
        {
          organization_id: 13,
          mmsi: "538004900",
          name: "SAHAM MAX"
        },
        {
          organization_id: 14,
          mmsi: "477148200",
          name: "SHANDONG DA ZHI"
        }
      ]);
    });
};
