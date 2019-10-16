// Voyage Map API
// Voyage List: All vessels, only last vessel report, no suggested routes
const voyageList = [
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 45.24234,
        longitude: 101.323
      }
    ]
  },
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 45.24234,
        longitude: 101.323
      }
    ]
  },
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 45.24234,
        longitude: 101.323
      }
    ]
  }
];

//  Voyage Details: Only one vessel, last vessel report on each vessel, show only selected suggested route

const voyageDetails = [
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: [
          {
            suggested_route_id: 22,
            waypoints: [
              {
                latitude: 24.52434,
                longitude: 87.2323
              },
              {
                latitude: 24.52434,
                longitude: 87.2323
              }
            ]
          }
        ]
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      }
    ]
  }
];

// Select suggested routes
const routes = [
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: [
          {
            suggested_route_id: 22,
            waypoints: [
              {
                latitude: 24.52434,
                longitude: 87.2323
              },
              {
                latitude: 24.52434,
                longitude: 87.2323
              }
            ]
          },

          {
            suggested_route_id: 22,
            waypoints: [
              {
                latitude: 24.52434,
                longitude: 87.2323
              },
              {
                latitude: 24.52434,
                longitude: 87.2323
              }
            ]
          },
          {
            suggested_route_id: 23,
            waypoints: [
              {
                latitude: 24.52434,
                longitude: 87.2323
              },
              {
                latitude: 24.52434,
                longitude: 87.2323
              }
            ]
          },
          {
            suggested_route_id: 24,
            waypoints: [
              {
                latitude: 24.52434,
                longitude: 87.2323
              },
              {
                latitude: 24.52434,
                longitude: 87.2323
              }
            ]
          }
        ]
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      },
      {
        latitude: 45.24234,
        longitude: 101.323,
        suggested_routes: []
      }
    ]
  }
];

module.exports = {
  voyageList,
  voyageDetails,
  routes
};
