// Voyage Map API
// Voyage List: All vessels, only last vessel report, no suggested routes
const voyages = [
  {
    vessel_id: 23,
    vessel_reports: [
      {
        latitude: 55.721114,
        longitude: 12.646547
      }
    ]
  },
  {
    vessel_id: 24,
    vessel_reports: [
      {
        latitude: 55.698478,
        longitude: 12.604377
      }
    ]
  },
  {
    vessel_id: 25,
    vessel_reports: [
      {
        latitude: 55.687535,
        longitude: 12.601538
      }
    ]
  }
];

//  Voyage Details: Only one vessel, last vessel report on each vessel, show only selected suggested route

const voyage = [
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
                latitude: 27.52434,
                longitude: 87.2323
              },
              {
                latitude: 29.52434,
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
  voyages,
  voyage,
  routes
};
