exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("waypoints")
    .del()
    .then(function() {
      return knex.raw("ALTER TABLE " + "waypoints" + " AUTO_INCREMENT = 1");
    })
    .then(function() {
      // Inserts seed entries
      return knex("waypoints").insert([
        {
          id: 1,
          suggested_route_id: 53,
          longitude: -16.3477,
          latitude: 41.3768,
          rpm: 1161,
          speed: 14.84,
          sequence_id: 1
        },

        {
          id: 2,
          suggested_route_id: 53,
          longitude: -8.9648,
          latitude: 35.2456,
          rpm: 59,
          speed: 10.44,
          sequence_id: 2
        },
        {
          id: 3,
          suggested_route_id: 53,
          longitude: 12.085,
          latitude: 39.4362,
          rpm: 951,
          speed: 8.25,
          sequence_id: 3
        },
        {
          id: 4,
          suggested_route_id: 53,
          longitude: 19.7314,
          latitude: 34.0891,
          rpm: 315,
          speed: 23.03,
          sequence_id: 4
        },
        {
          id: 5,
          suggested_route_id: 53,
          longitude: 29.0081,
          latitude: 41.0077,
          rpm: 311,
          speed: 0.48,
          sequence_id: 5
        },
        {
          suggested_route_id: 91,
          longitude: -16.3477,
          latitude: 41.3768,
          rpm: 1007,
          speed: 5.95,
          sequence_id: 1
        },
        {
          suggested_route_id: 91,
          longitude: -8.877,
          latitude: 34.3797,
          rpm: 612,
          speed: 13.04,
          sequence_id: 2
        },
        {
          suggested_route_id: 91,
          longitude: 7.207,
          latitude: 37.0902,
          rpm: 697,
          speed: 19.23,
          sequence_id: 3
        },
        {
          suggested_route_id: 91,
          longitude: 14.8535,
          latitude: 34.0891,
          rpm: 464,
          speed: 26.13,
          sequence_id: 4
        },
        {
          suggested_route_id: 91,
          longitude: 22.4121,
          latitude: 34.3797,
          rpm: 77,
          speed: 19.27,
          sequence_id: 5
        },
        {
          suggested_route_id: 91,
          longitude: 29.0081,
          latitude: 41.0077,
          rpm: 343,
          speed: 17.34,
          sequence_id: 6
        },

        {
          suggested_route_id: 670,
          longitude: -16.3477,
          latitude: 41.3768,
          rpm: 1045,
          speed: 3.58,
          sequence_id: 1
        },
        {
          suggested_route_id: 670,
          longitude: -10.8105,
          latitude: 32.4727,
          rpm: 944,
          speed: 26.27,
          sequence_id: 2
        },
        {
          suggested_route_id: 670,
          longitude: 5.2295,
          latitude: 40.5472,
          rpm: 357,
          speed: 13.24,
          sequence_id: 3
        },
        {
          suggested_route_id: 670,
          longitude: 13.4033,
          latitude: 35.4249,
          rpm: 101,
          speed: 3.23,
          sequence_id: 4
        },
        {
          suggested_route_id: 670,
          longitude: 17.2266,
          latitude: 33.5414,
          rpm: 97,
          speed: 19.42,
          sequence_id: 5
        },
        {
          suggested_route_id: 670,
          longitude: 29.0081,
          latitude: 41.0077,
          rpm: 178,
          speed: 19.35,
          sequence_id: 6
        },
        {
          suggested_route_id: 13,
          longitude: 106.7411559,
          latitude: -6.3991308,
          rpm: 737,
          speed: 5.33,
          sequence_id: 3
        },
        {
          suggested_route_id: 13,
          longitude: 120.056029,
          latitude: 30.131784,
          rpm: 112,
          speed: 4.82,
          sequence_id: 4
        },
        {
          suggested_route_id: 13,
          longitude: "19.71778",
          latitude: "40.92194",
          rpm: 385,
          speed: 18.7,
          sequence_id: 5
        },
        {
          suggested_route_id: 14,
          longitude: 20.9411779,
          latitude: 45.2881808,
          rpm: 305,
          speed: 17.42,
          sequence_id: 1
        },
        {
          suggested_route_id: 14,
          longitude: "114.0461",
          latitude: "-7.6476",
          rpm: 914,
          speed: 10.26,
          sequence_id: 2
        },
        {
          suggested_route_id: 14,
          longitude: 104.0712133,
          latitude: 30.6589763,
          rpm: 1134,
          speed: 0.93,
          sequence_id: 3
        },
        {
          suggested_route_id: 15,
          longitude: 123.7810708,
          latitude: 10.2511369,
          rpm: 568,
          speed: 17.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 15,
          longitude: 114.645657,
          latitude: 38.062428,
          rpm: 258,
          speed: 11.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 15,
          longitude: 18.2914811,
          latitude: 50.2435433,
          rpm: 460,
          speed: 24.62,
          sequence_id: 3
        },
        {
          suggested_route_id: 16,
          longitude: 47.0802023,
          latitude: 14.3545083,
          rpm: 1142,
          speed: 2.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 16,
          longitude: 3.2188961,
          latitude: 43.3362822,
          rpm: 131,
          speed: 0.06,
          sequence_id: 2
        },
        {
          suggested_route_id: 18,
          longitude: -8.6946024,
          latitude: 40.4423844,
          rpm: 1013,
          speed: 19.46,
          sequence_id: 1
        },
        {
          suggested_route_id: 19,
          longitude: 18.6763669,
          latitude: 64.5958098,
          rpm: 298,
          speed: 27.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 20,
          longitude: -64.2145666,
          latitude: -31.4834373,
          rpm: 136,
          speed: 1.82,
          sequence_id: 1
        },
        {
          suggested_route_id: 22,
          longitude: 116.64395,
          latitude: 29.367424,
          rpm: 1036,
          speed: 10.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 22,
          longitude: -83.477106,
          latitude: 33.5668566,
          rpm: 86,
          speed: 19.07,
          sequence_id: 2
        },
        {
          suggested_route_id: 25,
          longitude: -61.486922,
          latitude: -33.453544,
          rpm: 425,
          speed: 21.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 25,
          longitude: 119.971302,
          latitude: 30.033679,
          rpm: 634,
          speed: 16.7,
          sequence_id: 2
        },
        {
          suggested_route_id: 27,
          longitude: -78.505857,
          latitude: 35.7948809,
          rpm: 358,
          speed: 23.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 27,
          longitude: 67.786348,
          latitude: 26.732065,
          rpm: 443,
          speed: 23.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 27,
          longitude: -91.4130682,
          latitude: 14.5421715,
          rpm: 640,
          speed: 27.76,
          sequence_id: 3
        },
        {
          suggested_route_id: 28,
          longitude: -71.8667,
          latitude: -43.1833,
          rpm: 321,
          speed: 18.35,
          sequence_id: 1
        },
        {
          suggested_route_id: 28,
          longitude: -42.4331624,
          latitude: -19.2580383,
          rpm: 304,
          speed: 27.16,
          sequence_id: 2
        },
        {
          suggested_route_id: 28,
          longitude: 14.849374,
          latitude: 56.1748458,
          rpm: 1086,
          speed: 16.23,
          sequence_id: 3
        },
        {
          suggested_route_id: 29,
          longitude: 29.8708001,
          latitude: 61.1251,
          rpm: 845,
          speed: 27.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 31,
          longitude: 70.8744255,
          latitude: 35.3170344,
          rpm: 681,
          speed: 1.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 31,
          longitude: 85.9917785,
          latitude: 54.589538,
          rpm: 494,
          speed: 12.21,
          sequence_id: 2
        },
        {
          suggested_route_id: 31,
          longitude: -74.8039205,
          latitude: 3.8291336,
          rpm: 639,
          speed: 24.44,
          sequence_id: 3
        },
        {
          suggested_route_id: 31,
          longitude: 21.80854,
          latitude: 39.927952,
          rpm: 1076,
          speed: 19.18,
          sequence_id: 4
        },
        {
          suggested_route_id: 32,
          longitude: "22.81694",
          latitude: "54.62667",
          rpm: 681,
          speed: 2.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 32,
          longitude: -58.4794982,
          latitude: -34.5906948,
          rpm: 1043,
          speed: 4.84,
          sequence_id: 2
        },
        {
          suggested_route_id: 33,
          longitude: 93.517216,
          latitude: 31.511818,
          rpm: 881,
          speed: 12.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 34,
          longitude: -54.8265622,
          latitude: -29.8801552,
          rpm: 450,
          speed: 12.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 35,
          longitude: 26.2566443,
          latitude: 50.5089112,
          rpm: 510,
          speed: 17.4,
          sequence_id: 1
        },
        {
          suggested_route_id: 37,
          longitude: 106.4965434,
          latitude: -6.3123461,
          rpm: 595,
          speed: 8.97,
          sequence_id: 1
        },
        {
          suggested_route_id: 37,
          longitude: 19.8752578,
          latitude: 4.1874673,
          rpm: 1128,
          speed: 2.98,
          sequence_id: 2
        },
        {
          suggested_route_id: 39,
          longitude: 21.7557084,
          latitude: 50.0287787,
          rpm: 1080,
          speed: 5.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 39,
          longitude: 115.1622363,
          latitude: -8.6512212,
          rpm: 983,
          speed: 7.38,
          sequence_id: 2
        },
        {
          suggested_route_id: 41,
          longitude: 117.430061,
          latitude: 23.701262,
          rpm: 735,
          speed: 23.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 43,
          longitude: -8.489917,
          latitude: 40.8157748,
          rpm: 356,
          speed: 23.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 43,
          longitude: 23.623662,
          latitude: 48.0545221,
          rpm: 207,
          speed: 22.84,
          sequence_id: 2
        },
        {
          suggested_route_id: 43,
          longitude: 106.859119,
          latitude: 31.082561,
          rpm: 1156,
          speed: 5.47,
          sequence_id: 3
        },
        {
          suggested_route_id: 46,
          longitude: -7.9582137,
          latitude: 41.0874823,
          rpm: 363,
          speed: 10.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 48,
          longitude: 116.3928301,
          latitude: -8.728779,
          rpm: 735,
          speed: 9.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 48,
          longitude: 27.4327467,
          latitude: 55.7859618,
          rpm: 153,
          speed: 6.16,
          sequence_id: 2
        },
        {
          suggested_route_id: 48,
          longitude: 16.6413357,
          latitude: 49.3933184,
          rpm: 924,
          speed: 21.55,
          sequence_id: 3
        },
        {
          suggested_route_id: 49,
          longitude: 101.3431058,
          latitude: 24.4752847,
          rpm: 245,
          speed: 4.24,
          sequence_id: 1
        },
        {
          suggested_route_id: 51,
          longitude: 125.9279251,
          latitude: 7.116798,
          rpm: 988,
          speed: 11.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 52,
          longitude: -99.1082647,
          latitude: 19.4449916,
          rpm: 199,
          speed: 9.19,
          sequence_id: 1
        },
        {
          suggested_route_id: 54,
          longitude: -88.3020602,
          latitude: 15.040667,
          rpm: 816,
          speed: 15.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 55,
          longitude: 16.493598,
          latitude: 13.648096,
          rpm: 1075,
          speed: 10.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 58,
          longitude: 95.7773898,
          latitude: 17.6495376,
          rpm: 959,
          speed: 3.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 58,
          longitude: 31.8144434,
          latitude: 31.4175388,
          rpm: 172,
          speed: 19.52,
          sequence_id: 2
        },
        {
          suggested_route_id: 60,
          longitude: 65.7609502,
          latitude: 37.3215804,
          rpm: 133,
          speed: 3.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 60,
          longitude: "133.7626",
          latitude: "-3.0114",
          rpm: 318,
          speed: 5.92,
          sequence_id: 2
        },
        {
          suggested_route_id: 61,
          longitude: 50.1292303,
          latitude: 32.4626078,
          rpm: 186,
          speed: 25.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 61,
          longitude: 49.679652,
          latitude: 25.415248,
          rpm: 933,
          speed: 12.65,
          sequence_id: 2
        },
        {
          suggested_route_id: 62,
          longitude: 38.5367317,
          latitude: 53.9910079,
          rpm: 769,
          speed: 17.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 62,
          longitude: 113.327132,
          latitude: 23.15998,
          rpm: 262,
          speed: 21.72,
          sequence_id: 2
        },
        {
          suggested_route_id: 63,
          longitude: -70.017471,
          latitude: -17.543301,
          rpm: 47,
          speed: 22.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 66,
          longitude: -81.2408689,
          latitude: 28.5417016,
          rpm: 849,
          speed: 26.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 66,
          longitude: -1.5401497,
          latitude: 47.2550409,
          rpm: 900,
          speed: 15.62,
          sequence_id: 2
        },
        {
          suggested_route_id: 67,
          longitude: 108.5537373,
          latitude: -6.9644462,
          rpm: 257,
          speed: 10.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 70,
          longitude: 4.4982869,
          latitude: 52.1513886,
          rpm: 729,
          speed: 7.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 70,
          longitude: 121.0348405,
          latitude: 14.6099284,
          rpm: 754,
          speed: 21.14,
          sequence_id: 2
        },
        {
          suggested_route_id: 71,
          longitude: 17.6896073,
          latitude: 43.2600338,
          rpm: 174,
          speed: 12.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 72,
          longitude: 17.72016,
          latitude: 51.30787,
          rpm: 1143,
          speed: 18.22,
          sequence_id: 1
        },
        {
          suggested_route_id: 72,
          longitude: 101.6935065,
          latitude: 3.1121428,
          rpm: 1082,
          speed: 16.06,
          sequence_id: 2
        },
        {
          suggested_route_id: 72,
          longitude: 56.570105,
          latitude: 56.8813564,
          rpm: 1027,
          speed: 5.78,
          sequence_id: 3
        },
        {
          suggested_route_id: 73,
          longitude: -87.9432837,
          latitude: 15.596502,
          rpm: 627,
          speed: 18.01,
          sequence_id: 1
        },
        {
          suggested_route_id: 74,
          longitude: 69.636351,
          latitude: 37.6254329,
          rpm: 1000,
          speed: 4.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 75,
          longitude: -52.6449937,
          latitude: 5.1677581,
          rpm: 793,
          speed: 7.82,
          sequence_id: 1
        },
        {
          suggested_route_id: 78,
          longitude: 111.4666099,
          latitude: -7.8666877,
          rpm: 71,
          speed: 8,
          sequence_id: 1
        },
        {
          suggested_route_id: 81,
          longitude: 105.1990045,
          latitude: -5.1734862,
          rpm: 492,
          speed: 17.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 82,
          longitude: "122.22028",
          latitude: "7.18028",
          rpm: 610,
          speed: 0.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 84,
          longitude: 66.0195894,
          latitude: 37.4202216,
          rpm: 902,
          speed: 2.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 84,
          longitude: 24.4554644,
          latitude: 52.5557638,
          rpm: 531,
          speed: 25.25,
          sequence_id: 2
        },
        {
          suggested_route_id: 85,
          longitude: -99.1097687,
          latitude: 19.379122,
          rpm: 399,
          speed: 16.83,
          sequence_id: 1
        },
        {
          suggested_route_id: 86,
          longitude: 117.3733989,
          latitude: -8.8814738,
          rpm: 410,
          speed: 10.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 88,
          longitude: 72.9434124,
          latitude: 44.2832791,
          rpm: 652,
          speed: 22.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 90,
          longitude: 18.3229434,
          latitude: 59.4953899,
          rpm: 918,
          speed: 6.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 90,
          longitude: -56.3712327,
          latitude: -26.1827713,
          rpm: 599,
          speed: 24.25,
          sequence_id: 2
        },
        {
          suggested_route_id: 95,
          longitude: 98.6270628,
          latitude: 3.6711541,
          rpm: 286,
          speed: 7.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 97,
          longitude: "112.2944",
          latitude: "-8.0896",
          rpm: 56,
          speed: 25.59,
          sequence_id: 2
        },
        {
          suggested_route_id: 99,
          longitude: 30.7738154,
          latitude: 27.6791846,
          rpm: 400,
          speed: 17.12,
          sequence_id: 3
        },
        {
          suggested_route_id: 97,
          longitude: 1.7879685,
          latitude: 6.8050227,
          rpm: 370,
          speed: 26.09,
          sequence_id: 4
        },
        {
          suggested_route_id: 93,
          longitude: 117.201917,
          latitude: 39.160163,
          rpm: 173,
          speed: 25.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 95,
          longitude: 20.4284431,
          latitude: -28.672732,
          rpm: 626,
          speed: 4.11,
          sequence_id: 1
        },
        {
          suggested_route_id: 96,
          longitude: 101.8435568,
          latitude: 15.6006885,
          rpm: 159,
          speed: 11.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 97,
          longitude: 120.9900454,
          latitude: 15.0252615,
          rpm: 498,
          speed: 3.86,
          sequence_id: 1
        },
        {
          suggested_route_id: 97,
          longitude: 113.1964636,
          latitude: 23.0664459,
          rpm: 889,
          speed: 25.86,
          sequence_id: 2
        },
        {
          suggested_route_id: 97,
          longitude: -75.7872919,
          latitude: -12.3483286,
          rpm: 1097,
          speed: 19.19,
          sequence_id: 3
        },
        {
          suggested_route_id: 97,
          longitude: "-59.63094",
          latitude: "-26.58041",
          rpm: 510,
          speed: 2.83,
          sequence_id: 4
        },
        {
          suggested_route_id: 98,
          longitude: -43.7039903,
          latitude: -6.4937893,
          rpm: 541,
          speed: 20.67,
          sequence_id: 1
        },
        {
          suggested_route_id: 99,
          longitude: 23.8212698,
          latitude: 60.3198565,
          rpm: 832,
          speed: 20.78,
          sequence_id: 1
        },
        {
          suggested_route_id: 101,
          longitude: 120.5160702,
          latitude: 36.8726504,
          rpm: 64,
          speed: 10.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 102,
          longitude: 105.6691136,
          latitude: 20.1276773,
          rpm: 950,
          speed: 21.32,
          sequence_id: 1
        },
        {
          suggested_route_id: 103,
          longitude: -72.0705185,
          latitude: 8.1406054,
          rpm: 1041,
          speed: 6.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 107,
          longitude: -107.655919,
          latitude: 24.8197427,
          rpm: 702,
          speed: 27.19,
          sequence_id: 1
        },
        {
          suggested_route_id: 107,
          longitude: 25.3248541,
          latitude: 42.2020702,
          rpm: 338,
          speed: 23.08,
          sequence_id: 2
        },
        {
          suggested_route_id: 108,
          longitude: "122.9053",
          latitude: "9.2207",
          rpm: 159,
          speed: 17.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 108,
          longitude: -78.3600448,
          latitude: -9.1738986,
          rpm: 21,
          speed: 4.01,
          sequence_id: 2
        },
        {
          suggested_route_id: 109,
          longitude: 28.4682169,
          latitude: 49.233083,
          rpm: 769,
          speed: 8.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 110,
          longitude: 112.410417,
          latitude: 27.622444,
          rpm: 956,
          speed: 15.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 110,
          longitude: -49.1166441,
          latitude: -15.3122723,
          rpm: 400,
          speed: 24.68,
          sequence_id: 2
        },
        {
          suggested_route_id: 111,
          longitude: 21.0782963,
          latitude: 49.7979502,
          rpm: 629,
          speed: 20.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 112,
          longitude: "9.95729",
          latitude: "12.565",
          rpm: 464,
          speed: 15.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 114,
          longitude: -58.5035787,
          latitude: -34.5937209,
          rpm: 143,
          speed: 21.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 114,
          longitude: 15.865081,
          latitude: 50.2997788,
          rpm: 333,
          speed: 21.56,
          sequence_id: 2
        },
        {
          suggested_route_id: 115,
          longitude: -89.713497,
          latitude: 14.335889,
          rpm: 841,
          speed: 8.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 116,
          longitude: 72.5694175,
          latitude: 30.9658281,
          rpm: 849,
          speed: 22.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 116,
          longitude: 73.0685665,
          latitude: 5.1025787,
          rpm: 1137,
          speed: 18.68,
          sequence_id: 2
        },
        {
          suggested_route_id: 116,
          longitude: 112.571923,
          latitude: 28.260141,
          rpm: 101,
          speed: 2.66,
          sequence_id: 3
        },
        {
          suggested_route_id: 117,
          longitude: 117.8793825,
          latitude: 51.3035449,
          rpm: 398,
          speed: 24.71,
          sequence_id: 1
        },
        {
          suggested_route_id: 118,
          longitude: 23.5414504,
          latitude: 49.30155,
          rpm: 169,
          speed: 13.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 119,
          longitude: 97.9685657,
          latitude: 45.3369621,
          rpm: 677,
          speed: 22.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 120,
          longitude: 103.5899733,
          latitude: 14.2198555,
          rpm: 911,
          speed: 18.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 123,
          longitude: 37.4690832,
          latitude: 55.876771,
          rpm: 655,
          speed: 13.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 123,
          longitude: 49.127197,
          latitude: 14.5404328,
          rpm: 151,
          speed: 10.62,
          sequence_id: 2
        },
        {
          suggested_route_id: 124,
          longitude: 41.75,
          latitude: 22.43,
          rpm: 730,
          speed: 4.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 125,
          longitude: 14.1727518,
          latitude: 8.3976116,
          rpm: 986,
          speed: 7.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 126,
          longitude: 121.0774147,
          latitude: 14.7569624,
          rpm: 209,
          speed: 0.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 128,
          longitude: -97.9041394,
          latitude: 18.9753413,
          rpm: 589,
          speed: 13.4,
          sequence_id: 1
        },
        {
          suggested_route_id: 128,
          longitude: 115.038835,
          latitude: 30.20003,
          rpm: 854,
          speed: 2.75,
          sequence_id: 2
        },
        {
          suggested_route_id: 129,
          longitude: -71.7674379,
          latitude: -15.6418418,
          rpm: 108,
          speed: 25.35,
          sequence_id: 1
        },
        {
          suggested_route_id: 130,
          longitude: 0.3350126,
          latitude: 46.5838069,
          rpm: 171,
          speed: 8.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 131,
          longitude: "48.7864",
          latitude: "15.93786",
          rpm: 904,
          speed: 5.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 131,
          longitude: 14.9534182,
          latitude: 46.3025462,
          rpm: 1144,
          speed: 18.79,
          sequence_id: 2
        },
        {
          suggested_route_id: 132,
          longitude: 112.6109257,
          latitude: -8.2151612,
          rpm: 619,
          speed: 22.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 134,
          longitude: "114.0625",
          latitude: "-7.7546",
          rpm: 1099,
          speed: 10.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 136,
          longitude: -8.341016,
          latitude: 6.8251698,
          rpm: 430,
          speed: 12.96,
          sequence_id: 1
        },
        {
          suggested_route_id: 136,
          longitude: 22.555595,
          latitude: 50.043163,
          rpm: 1046,
          speed: 15.17,
          sequence_id: 2
        },
        {
          suggested_route_id: 140,
          longitude: 103.620536,
          latitude: 30.920219,
          rpm: 1033,
          speed: 9.31,
          sequence_id: 1
        },
        {
          suggested_route_id: 140,
          longitude: 125.7662248,
          latitude: 7.4686205,
          rpm: 1035,
          speed: 18.71,
          sequence_id: 2
        },
        {
          suggested_route_id: 142,
          longitude: 25.7622611,
          latitude: 50.2414199,
          rpm: 1109,
          speed: 5.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 143,
          longitude: 87.5395855,
          latitude: 42.5246357,
          rpm: 826,
          speed: 7.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 144,
          longitude: 104.3016527,
          latitude: 49.004705,
          rpm: 602,
          speed: 7.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 144,
          longitude: 38.0671601,
          latitude: 47.8748302,
          rpm: 923,
          speed: 5.41,
          sequence_id: 2
        },
        {
          suggested_route_id: 145,
          longitude: -1.0263278,
          latitude: 47.2662587,
          rpm: 855,
          speed: 9.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 145,
          longitude: 37.7673912,
          latitude: 55.5807611,
          rpm: 232,
          speed: 25.43,
          sequence_id: 2
        },
        {
          suggested_route_id: 145,
          longitude: 26.4532856,
          latitude: 62.3658212,
          rpm: 983,
          speed: 20.64,
          sequence_id: 3
        },
        {
          suggested_route_id: 148,
          longitude: 116.360871,
          latitude: 30.848103,
          rpm: 871,
          speed: 15.01,
          sequence_id: 1
        },
        {
          suggested_route_id: 149,
          longitude: 26.7063745,
          latitude: -30.6866136,
          rpm: 1075,
          speed: 10.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 149,
          longitude: -36.4580775,
          latitude: -9.7413641,
          rpm: 196,
          speed: 25.44,
          sequence_id: 2
        },
        {
          suggested_route_id: 149,
          longitude: 119.597896,
          latitude: 31.723247,
          rpm: 1018,
          speed: 3.46,
          sequence_id: 3
        },
        {
          suggested_route_id: 149,
          longitude: 120.769358,
          latitude: 15.66085,
          rpm: 177,
          speed: 6.99,
          sequence_id: 4
        },
        {
          suggested_route_id: 149,
          longitude: 130.6358305,
          latitude: 32.968121,
          rpm: 413,
          speed: 7.8,
          sequence_id: 5
        },
        {
          suggested_route_id: 150,
          longitude: 108.7987084,
          latitude: -7.5009787,
          rpm: 867,
          speed: 20.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 151,
          longitude: 20.8378422,
          latitude: 49.9579835,
          rpm: 768,
          speed: 4.67,
          sequence_id: 1
        },
        {
          suggested_route_id: 152,
          longitude: 14.5922703,
          latitude: 63.1724708,
          rpm: 1033,
          speed: 22.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 155,
          longitude: 113.734823,
          latitude: 23.718461,
          rpm: 116,
          speed: 5.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 155,
          longitude: -52.8955875,
          latitude: -26.6246782,
          rpm: 536,
          speed: 7.83,
          sequence_id: 2
        },
        {
          suggested_route_id: 155,
          longitude: 121.424624,
          latitude: 31.220367,
          rpm: 1163,
          speed: 11.65,
          sequence_id: 3
        },
        {
          suggested_route_id: 156,
          longitude: 109.879153,
          latitude: 31.074834,
          rpm: 1145,
          speed: 4.78,
          sequence_id: 1
        },
        {
          suggested_route_id: 156,
          longitude: 19.1107114,
          latitude: 17.9236623,
          rpm: 314,
          speed: 17.01,
          sequence_id: 2
        },
        {
          suggested_route_id: 157,
          longitude: 98.6722227,
          latitude: 3.5951956,
          rpm: 278,
          speed: 6.4,
          sequence_id: 1
        },
        {
          suggested_route_id: 157,
          longitude: -75.7103682,
          latitude: 45.4139794,
          rpm: 297,
          speed: 15.98,
          sequence_id: 2
        },
        {
          suggested_route_id: 158,
          longitude: 121.1004925,
          latitude: 15.6941944,
          rpm: 1057,
          speed: 9.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 162,
          longitude: 26.4913564,
          latitude: 48.5497476,
          rpm: 431,
          speed: 19.04,
          sequence_id: 1
        },
        {
          suggested_route_id: 162,
          longitude: -27.241708,
          latitude: 38.659618,
          rpm: 442,
          speed: 13.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 162,
          longitude: 81.647344,
          latitude: 28.9261863,
          rpm: 1026,
          speed: 12.8,
          sequence_id: 3
        },
        {
          suggested_route_id: 163,
          longitude: 112.214443,
          latitude: 38.809086,
          rpm: 1179,
          speed: 10.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 164,
          longitude: -76.2421185,
          latitude: 20.3005979,
          rpm: 68,
          speed: 11.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 165,
          longitude: 63.6850141,
          latitude: 58.041296,
          rpm: 399,
          speed: 20.31,
          sequence_id: 1
        },
        {
          suggested_route_id: 165,
          longitude: 115.162028,
          latitude: 26.008257,
          rpm: 590,
          speed: 21.44,
          sequence_id: 2
        },
        {
          suggested_route_id: 165,
          longitude: 117.221729,
          latitude: 39.098031,
          rpm: 807,
          speed: 23.14,
          sequence_id: 3
        },
        {
          suggested_route_id: 165,
          longitude: -117.1343318,
          latitude: 32.6969212,
          rpm: 986,
          speed: 25.65,
          sequence_id: 4
        },
        {
          suggested_route_id: 166,
          longitude: 114.611433,
          latitude: 37.615159,
          rpm: 986,
          speed: 18.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 167,
          longitude: 22.7760837,
          latitude: 36.8277257,
          rpm: 116,
          speed: 0.79,
          sequence_id: 1
        },
        {
          suggested_route_id: 167,
          longitude: 16.4856013,
          latitude: 51.8677116,
          rpm: 749,
          speed: 5.63,
          sequence_id: 2
        },
        {
          suggested_route_id: 168,
          longitude: 117.015187,
          latitude: 33.570769,
          rpm: 356,
          speed: 19.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 169,
          longitude: 118.36525,
          latitude: 32.317865,
          rpm: 475,
          speed: 17.78,
          sequence_id: 1
        },
        {
          suggested_route_id: 170,
          longitude: 36.5337731,
          latitude: -14.8000877,
          rpm: 579,
          speed: 19.05,
          sequence_id: 1
        },
        {
          suggested_route_id: 171,
          longitude: 121.5035823,
          latitude: 13.9242836,
          rpm: 968,
          speed: 24.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 171,
          longitude: 113.2915045,
          latitude: 23.0998443,
          rpm: 544,
          speed: 18.49,
          sequence_id: 2
        },
        {
          suggested_route_id: 172,
          longitude: 17.1679608,
          latitude: 49.566715,
          rpm: 1078,
          speed: 1.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 176,
          longitude: 59.970317,
          latitude: 57.9258984,
          rpm: 528,
          speed: 7.82,
          sequence_id: 1
        },
        {
          suggested_route_id: 176,
          longitude: 120.4544261,
          latitude: 17.8200009,
          rpm: 63,
          speed: 12.99,
          sequence_id: 2
        },
        {
          suggested_route_id: 178,
          longitude: 109.9288452,
          latitude: -7.6552991,
          rpm: 838,
          speed: 20.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 180,
          longitude: 14.0845863,
          latitude: 45.0804254,
          rpm: 217,
          speed: 20.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 181,
          longitude: -80.0479039,
          latitude: 22.6491239,
          rpm: 439,
          speed: 4.24,
          sequence_id: 1
        },
        {
          suggested_route_id: 181,
          longitude: -7.0160004,
          latitude: 40.347979,
          rpm: 409,
          speed: 18.81,
          sequence_id: 2
        },
        {
          suggested_route_id: 182,
          longitude: 17.0779098,
          latitude: 59.6517905,
          rpm: 571,
          speed: 26.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 182,
          longitude: 16.6005976,
          latitude: 50.0296342,
          rpm: 122,
          speed: 19.34,
          sequence_id: 2
        },
        {
          suggested_route_id: 183,
          longitude: 115.579308,
          latitude: 37.550856,
          rpm: 926,
          speed: 14.38,
          sequence_id: 1
        },
        {
          suggested_route_id: 184,
          longitude: 21.8330106,
          latitude: 38.2800079,
          rpm: 585,
          speed: 27.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 188,
          longitude: -79.058693,
          latitude: 9.537917,
          rpm: 243,
          speed: 18.6,
          sequence_id: 1
        },
        {
          suggested_route_id: 188,
          longitude: 110.084789,
          latitude: 34.477861,
          rpm: 956,
          speed: 9.29,
          sequence_id: 2
        },
        {
          suggested_route_id: 189,
          longitude: -15.7732633,
          latitude: 13.74372,
          rpm: 840,
          speed: 25.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 189,
          longitude: 6.7625867,
          latitude: 51.3305246,
          rpm: 430,
          speed: 4.44,
          sequence_id: 2
        },
        {
          suggested_route_id: 191,
          longitude: 6.0376291,
          latitude: 48.9308651,
          rpm: 285,
          speed: 4.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 193,
          longitude: 159.9541642,
          latitude: 59.0842105,
          rpm: 247,
          speed: 13.68,
          sequence_id: 1
        },
        {
          suggested_route_id: 194,
          longitude: 3.2188961,
          latitude: 43.3362822,
          rpm: 1119,
          speed: 10.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 194,
          longitude: 123.4699481,
          latitude: 41.805137,
          rpm: 950,
          speed: 6.48,
          sequence_id: 2
        },
        {
          suggested_route_id: 194,
          longitude: 106.7336319,
          latitude: -6.6579598,
          rpm: 465,
          speed: 5.19,
          sequence_id: 3
        },
        {
          suggested_route_id: 196,
          longitude: 43.7759042,
          latitude: 43.8051322,
          rpm: 50,
          speed: 7.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 197,
          longitude: 120.8898149,
          latitude: 15.6432256,
          rpm: 543,
          speed: 20.11,
          sequence_id: 1
        },
        {
          suggested_route_id: 201,
          longitude: 31.3484448,
          latitude: -26.4820262,
          rpm: 1037,
          speed: 13.3,
          sequence_id: 1
        },
        {
          suggested_route_id: 201,
          longitude: "112.8592",
          latitude: "-6.9717",
          rpm: 128,
          speed: 10.11,
          sequence_id: 2
        },
        {
          suggested_route_id: 201,
          longitude: -88.3032755,
          latitude: 14.8465342,
          rpm: 567,
          speed: 0.85,
          sequence_id: 3
        },
        {
          suggested_route_id: 201,
          longitude: -58.5717849,
          latitude: -34.4786447,
          rpm: 323,
          speed: 6.66,
          sequence_id: 4
        },
        {
          suggested_route_id: 202,
          longitude: -43.8273373,
          latitude: -22.4720256,
          rpm: 334,
          speed: 2.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 206,
          longitude: -74.966667,
          latitude: -14.05,
          rpm: 785,
          speed: 9.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 206,
          longitude: -71.693538,
          latitude: 46.7498338,
          rpm: 464,
          speed: 7.9,
          sequence_id: 2
        },
        {
          suggested_route_id: 207,
          longitude: 19.9199137,
          latitude: 40.8103206,
          rpm: 488,
          speed: 9.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 207,
          longitude: 6.0767949,
          latitude: 49.7881321,
          rpm: 181,
          speed: 2.29,
          sequence_id: 2
        },
        {
          suggested_route_id: 207,
          longitude: 39.5849504,
          latitude: 51.8792137,
          rpm: 838,
          speed: 12.71,
          sequence_id: 3
        },
        {
          suggested_route_id: 208,
          longitude: -122.66,
          latitude: 45.54,
          rpm: 744,
          speed: 6.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 211,
          longitude: 118.200692,
          latitude: 39.624437,
          rpm: 89,
          speed: 8.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 212,
          longitude: -8.2971003,
          latitude: 41.5146956,
          rpm: 73,
          speed: 7.6,
          sequence_id: 1
        },
        {
          suggested_route_id: 213,
          longitude: 18.4265865,
          latitude: 52.2649866,
          rpm: 283,
          speed: 23.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 214,
          longitude: 7.986535,
          latitude: 13.7558622,
          rpm: 854,
          speed: 27.97,
          sequence_id: 1
        },
        {
          suggested_route_id: 216,
          longitude: -93.3086778,
          latitude: 37.1120141,
          rpm: 1117,
          speed: 8.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 216,
          longitude: 48.2667279,
          latitude: -13.3970988,
          rpm: 866,
          speed: 13.27,
          sequence_id: 2
        },
        {
          suggested_route_id: 217,
          longitude: -72.559662,
          latitude: 6.316914,
          rpm: 615,
          speed: 12.46,
          sequence_id: 1
        },
        {
          suggested_route_id: 217,
          longitude: 104.100502,
          latitude: -1.259553,
          rpm: 203,
          speed: 6.32,
          sequence_id: 2
        },
        {
          suggested_route_id: 218,
          longitude: 111.6556388,
          latitude: -7.5450262,
          rpm: 1147,
          speed: 22.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 219,
          longitude: -82.8317486,
          latitude: 8.4297819,
          rpm: 71,
          speed: 25.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 222,
          longitude: "43.81828",
          latitude: "14.67199",
          rpm: 61,
          speed: 2.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 222,
          longitude: 112.746435,
          latitude: -7.240959,
          rpm: 1066,
          speed: 24.24,
          sequence_id: 2
        },
        {
          suggested_route_id: 224,
          longitude: 120.3954753,
          latitude: 16.0847081,
          rpm: 861,
          speed: 18.68,
          sequence_id: 1
        },
        {
          suggested_route_id: 225,
          longitude: 121.0208817,
          latitude: 14.9380064,
          rpm: 377,
          speed: 18.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 225,
          longitude: 110.309677,
          latitude: 22.347589,
          rpm: 727,
          speed: 22.16,
          sequence_id: 2
        },
        {
          suggested_route_id: 226,
          longitude: 16.5685158,
          latitude: 59.6484097,
          rpm: 697,
          speed: 14.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 228,
          longitude: -6.1011147,
          latitude: 53.2000455,
          rpm: 1177,
          speed: 25.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 228,
          longitude: 101.818885,
          latitude: 35.063892,
          rpm: 899,
          speed: 22.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 229,
          longitude: 0.964671,
          latitude: 45.697904,
          rpm: 704,
          speed: 8.47,
          sequence_id: 1
        },
        {
          suggested_route_id: 231,
          longitude: "123.0597",
          latitude: "10.90354",
          rpm: 594,
          speed: 3.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 231,
          longitude: 98.0983756,
          latitude: 46.801046,
          rpm: 1073,
          speed: 9.58,
          sequence_id: 2
        },
        {
          suggested_route_id: 232,
          longitude: -99.1837453,
          latitude: 19.3851705,
          rpm: 694,
          speed: 9.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 233,
          longitude: "128.29333",
          latitude: "41.09028",
          rpm: 797,
          speed: 17.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 234,
          longitude: 30.461686,
          latitude: -28.7415512,
          rpm: 551,
          speed: 8.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 238,
          longitude: 107.7632453,
          latitude: -7.0180991,
          rpm: 574,
          speed: 9.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 238,
          longitude: 106.1580937,
          latitude: 37.198731,
          rpm: 695,
          speed: 16.4,
          sequence_id: 2
        },
        {
          suggested_route_id: 239,
          longitude: 113.253429,
          latitude: 23.144757,
          rpm: 651,
          speed: 23.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 240,
          longitude: 173.2633123,
          latitude: 2.0516556,
          rpm: 835,
          speed: 3.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 240,
          longitude: 121.3602832,
          latitude: 31.244331,
          rpm: 480,
          speed: 8.23,
          sequence_id: 2
        },
        {
          suggested_route_id: 241,
          longitude: 120.9731375,
          latitude: 14.6465082,
          rpm: 311,
          speed: 2.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 242,
          longitude: 133.9246009,
          latitude: -0.970213,
          rpm: 26,
          speed: 11.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 242,
          longitude: 119.680353,
          latitude: 30.638674,
          rpm: 859,
          speed: 22.47,
          sequence_id: 2
        },
        {
          suggested_route_id: 243,
          longitude: 21.3991045,
          latitude: 52.0424689,
          rpm: 518,
          speed: 15.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 243,
          longitude: 41.1157847,
          latitude: 43.0225426,
          rpm: 330,
          speed: 10.15,
          sequence_id: 2
        },
        {
          suggested_route_id: 245,
          longitude: 14.5829648,
          latitude: 46.2003906,
          rpm: 1112,
          speed: 21.84,
          sequence_id: 1
        },
        {
          suggested_route_id: 248,
          longitude: 114.24517,
          latitude: 38.476374,
          rpm: 817,
          speed: 26.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 249,
          longitude: -7.5547135,
          latitude: 41.1578541,
          rpm: 1049,
          speed: 3.22,
          sequence_id: 1
        },
        {
          suggested_route_id: 250,
          longitude: -55.9300245,
          latitude: -27.4047174,
          rpm: 25,
          speed: 13.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 251,
          longitude: -77.0852258,
          latitude: 38.9374808,
          rpm: 492,
          speed: 23.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 252,
          longitude: 109.1701666,
          latitude: 11.893334,
          rpm: 717,
          speed: 6.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 252,
          longitude: 111.053561,
          latitude: 21.918725,
          rpm: 136,
          speed: 17.16,
          sequence_id: 2
        },
        {
          suggested_route_id: 253,
          longitude: 118.809786,
          latitude: 32.26101,
          rpm: 622,
          speed: 13.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 253,
          longitude: 120.4194593,
          latitude: 17.2660394,
          rpm: 351,
          speed: 22.84,
          sequence_id: 2
        },
        {
          suggested_route_id: 254,
          longitude: 105.2428853,
          latitude: 9.5384134,
          rpm: 104,
          speed: 20.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 255,
          longitude: 23.1322437,
          latitude: 37.2625973,
          rpm: 70,
          speed: 15.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 256,
          longitude: 104.9894851,
          latitude: 21.1665519,
          rpm: 813,
          speed: 18.97,
          sequence_id: 1
        },
        {
          suggested_route_id: 257,
          longitude: 111.502705,
          latitude: 27.780089,
          rpm: 527,
          speed: 26.47,
          sequence_id: 1
        },
        {
          suggested_route_id: 257,
          longitude: "41.151",
          latitude: "51.1632",
          rpm: 254,
          speed: 2.33,
          sequence_id: 2
        },
        {
          suggested_route_id: 260,
          longitude: -99.1400807,
          latitude: 19.710125,
          rpm: 256,
          speed: 15.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 260,
          longitude: "104.6425",
          latitude: "51.463",
          rpm: 614,
          speed: 27.13,
          sequence_id: 2
        },
        {
          suggested_route_id: 261,
          longitude: -50.9289246,
          latitude: -28.3276327,
          rpm: 234,
          speed: 5.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 261,
          longitude: -4.4854059,
          latitude: 48.3909721,
          rpm: 491,
          speed: 16.92,
          sequence_id: 2
        },
        {
          suggested_route_id: 261,
          longitude: 122.7802357,
          latitude: -5.6596839,
          rpm: 829,
          speed: 2.75,
          sequence_id: 3
        },
        {
          suggested_route_id: 264,
          longitude: 23.438111,
          latitude: 50.384945,
          rpm: 849,
          speed: 27.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 265,
          longitude: 27.3157403,
          latitude: 67.0610032,
          rpm: 1018,
          speed: 3.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 265,
          longitude: 113.751799,
          latitude: 23.020673,
          rpm: 573,
          speed: 10.35,
          sequence_id: 2
        },
        {
          suggested_route_id: 265,
          longitude: 35.2175944,
          latitude: -5.881878,
          rpm: 140,
          speed: 6.29,
          sequence_id: 3
        },
        {
          suggested_route_id: 268,
          longitude: 39.7960619,
          latitude: 48.3284147,
          rpm: 1122,
          speed: 16.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 268,
          longitude: 120.594551,
          latitude: 29.9905062,
          rpm: 101,
          speed: 2.6,
          sequence_id: 2
        },
        {
          suggested_route_id: 268,
          longitude: -57.5823273,
          latitude: -38.0667198,
          rpm: 344,
          speed: 1.18,
          sequence_id: 3
        },
        {
          suggested_route_id: 269,
          longitude: 121.7458676,
          latitude: 31.0507836,
          rpm: 806,
          speed: 24.83,
          sequence_id: 1
        },
        {
          suggested_route_id: 270,
          longitude: -38.8773164,
          latitude: -4.3325997,
          rpm: 573,
          speed: 14.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 270,
          longitude: -76.8951551,
          latitude: 1.6135167,
          rpm: 943,
          speed: 15.29,
          sequence_id: 2
        },
        {
          suggested_route_id: 271,
          longitude: 74.5022234,
          latitude: 32.5887159,
          rpm: 913,
          speed: 0.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 272,
          longitude: 100.417181,
          latitude: -0.9470832,
          rpm: 903,
          speed: 26.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 273,
          longitude: 47.254337,
          latitude: 47.4060859,
          rpm: 838,
          speed: 2.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 274,
          longitude: -115.244096,
          latitude: 36.049805,
          rpm: 657,
          speed: 14.59,
          sequence_id: 1
        },
        {
          suggested_route_id: 275,
          longitude: 33.3645241,
          latitude: 52.8595744,
          rpm: 332,
          speed: 3.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 276,
          longitude: 39.7951718,
          latitude: 55.1264168,
          rpm: 692,
          speed: 13.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 276,
          longitude: -1.2073261,
          latitude: 6.6249454,
          rpm: 709,
          speed: 0.99,
          sequence_id: 2
        },
        {
          suggested_route_id: 277,
          longitude: -79.002342,
          latitude: -8.1637036,
          rpm: 37,
          speed: 7.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 277,
          longitude: "122.2744",
          latitude: "-8.6464",
          rpm: 1052,
          speed: 14.4,
          sequence_id: 2
        },
        {
          suggested_route_id: 278,
          longitude: -75.870743,
          latitude: 4.88917,
          rpm: 721,
          speed: 14.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 278,
          longitude: "113.51997",
          latitude: "-7.13386",
          rpm: 769,
          speed: 9.98,
          sequence_id: 2
        },
        {
          suggested_route_id: 281,
          longitude: 104.0301606,
          latitude: 1.12808,
          rpm: 885,
          speed: 27.08,
          sequence_id: 1
        },
        {
          suggested_route_id: 281,
          longitude: 106.005046,
          latitude: 31.558356,
          rpm: 518,
          speed: 19.31,
          sequence_id: 2
        },
        {
          suggested_route_id: 282,
          longitude: 116.00193,
          latitude: 29.705077,
          rpm: 1075,
          speed: 10.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 283,
          longitude: 19.3765006,
          latitude: 44.7791213,
          rpm: 221,
          speed: 8.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 283,
          longitude: 34.759291,
          latitude: 31.790235,
          rpm: 275,
          speed: 25.86,
          sequence_id: 2
        },
        {
          suggested_route_id: 284,
          longitude: 22.4665446,
          latitude: 41.634449,
          rpm: 599,
          speed: 13.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 285,
          longitude: 19.157136,
          latitude: 47.4325252,
          rpm: 287,
          speed: 3.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 286,
          longitude: 112.1474925,
          latitude: -6.9262046,
          rpm: 72,
          speed: 27.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 286,
          longitude: 121.231805,
          latitude: 28.13593,
          rpm: 441,
          speed: 15.4,
          sequence_id: 2
        },
        {
          suggested_route_id: 287,
          longitude: 21.833333,
          latitude: -24.166667,
          rpm: 470,
          speed: 10.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 290,
          longitude: 101.0315823,
          latitude: 14.2559497,
          rpm: 561,
          speed: 25.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 290,
          longitude: "124.1295",
          latitude: "-10.0569",
          rpm: 28,
          speed: 8.7,
          sequence_id: 2
        },
        {
          suggested_route_id: 292,
          longitude: 124.120286,
          latitude: 41.305838,
          rpm: 1047,
          speed: 17.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 295,
          longitude: 23.6261558,
          latitude: 51.3217146,
          rpm: 260,
          speed: 13.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 295,
          longitude: -36.8465564,
          latitude: -9.3228094,
          rpm: 1192,
          speed: 10.07,
          sequence_id: 2
        },
        {
          suggested_route_id: 296,
          longitude: 82.6211533,
          latitude: 41.5590095,
          rpm: 1064,
          speed: 0.59,
          sequence_id: 1
        },
        {
          suggested_route_id: 300,
          longitude: -91.6341489,
          latitude: 15.0690612,
          rpm: 780,
          speed: 26.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 302,
          longitude: 120.4098162,
          latitude: 15.9658063,
          rpm: 1128,
          speed: 12.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 303,
          longitude: -0.964804,
          latitude: 50.994689,
          rpm: 985,
          speed: 23.84,
          sequence_id: 1
        },
        {
          suggested_route_id: 305,
          longitude: 115.3219823,
          latitude: -8.4507433,
          rpm: 699,
          speed: 4.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 307,
          longitude: -110.9119181,
          latitude: 29.0180288,
          rpm: 741,
          speed: 6.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 307,
          longitude: 4.3520438,
          latitude: 43.8447278,
          rpm: 675,
          speed: 27.18,
          sequence_id: 2
        },
        {
          suggested_route_id: 309,
          longitude: 121.4703114,
          latitude: 38.9680341,
          rpm: 506,
          speed: 27.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 310,
          longitude: -53.9378421,
          latitude: -32.9481877,
          rpm: 390,
          speed: 11.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 312,
          longitude: 102.74674,
          latitude: 23.115358,
          rpm: 958,
          speed: 20.69,
          sequence_id: 1
        },
        {
          suggested_route_id: 312,
          longitude: 116.245433,
          latitude: 29.724589,
          rpm: 148,
          speed: 6.6,
          sequence_id: 2
        },
        {
          suggested_route_id: 313,
          longitude: -8.434873,
          latitude: 43.3216087,
          rpm: 600,
          speed: 20.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 313,
          longitude: 117.3557854,
          latitude: 8.5015747,
          rpm: 1168,
          speed: 21.05,
          sequence_id: 2
        },
        {
          suggested_route_id: 313,
          longitude: -51.08671,
          latitude: -29.362503,
          rpm: 1068,
          speed: 16.63,
          sequence_id: 3
        },
        {
          suggested_route_id: 315,
          longitude: -106.43,
          latitude: 31.77,
          rpm: 311,
          speed: 6.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 316,
          longitude: 116.747009,
          latitude: 25.748455,
          rpm: 958,
          speed: 26.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 316,
          longitude: -72.189,
          latitude: 6.8793892,
          rpm: 333,
          speed: 20.86,
          sequence_id: 2
        },
        {
          suggested_route_id: 316,
          longitude: 124.3498568,
          latitude: 12.5369765,
          rpm: 313,
          speed: 1.89,
          sequence_id: 3
        },
        {
          suggested_route_id: 317,
          longitude: 21.94731,
          latitude: 52.2597944,
          rpm: 508,
          speed: 27.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 317,
          longitude: 122.4776048,
          latitude: 14.0155209,
          rpm: 331,
          speed: 20.84,
          sequence_id: 2
        },
        {
          suggested_route_id: 318,
          longitude: 50.3456762,
          latitude: 51.8614971,
          rpm: 141,
          speed: 23.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 319,
          longitude: "108.01",
          latitude: "-7.3532",
          rpm: 192,
          speed: 12.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 326,
          longitude: 30.7807444,
          latitude: 31.2724505,
          rpm: 567,
          speed: 17.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 327,
          longitude: -9.4272778,
          latitude: 38.8678657,
          rpm: 743,
          speed: 26.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 327,
          longitude: 113.056042,
          latitude: 23.681774,
          rpm: 756,
          speed: 15.88,
          sequence_id: 2
        },
        {
          suggested_route_id: 328,
          longitude: -42.2925342,
          latitude: -4.2450638,
          rpm: 1193,
          speed: 8.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 328,
          longitude: 53.715125,
          latitude: 57.903389,
          rpm: 858,
          speed: 2.59,
          sequence_id: 2
        },
        {
          suggested_route_id: 329,
          longitude: 112.906475,
          latitude: -7.072846,
          rpm: 207,
          speed: 4.05,
          sequence_id: 1
        },
        {
          suggested_route_id: 330,
          longitude: 112.757558,
          latitude: -7.294983,
          rpm: 483,
          speed: 12.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 330,
          longitude: 120.7556573,
          latitude: 30.7603427,
          rpm: 62,
          speed: 9.71,
          sequence_id: 2
        },
        {
          suggested_route_id: 332,
          longitude: 5.2501629,
          latitude: 14.4634704,
          rpm: 278,
          speed: 21.97,
          sequence_id: 1
        },
        {
          suggested_route_id: 333,
          longitude: 12.7264154,
          latitude: 57.4715317,
          rpm: 276,
          speed: 4.93,
          sequence_id: 1
        },
        {
          suggested_route_id: 335,
          longitude: 118.089425,
          latitude: 24.479833,
          rpm: 564,
          speed: 0.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 335,
          longitude: 106.804564,
          latitude: -6.588201,
          rpm: 743,
          speed: 10.29,
          sequence_id: 2
        },
        {
          suggested_route_id: 335,
          longitude: 92.7620647,
          latitude: 55.9905778,
          rpm: 911,
          speed: 17.81,
          sequence_id: 3
        },
        {
          suggested_route_id: 336,
          longitude: 2.2372792,
          latitude: 48.890054,
          rpm: 1138,
          speed: 14.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 337,
          longitude: -8.5885858,
          latitude: 40.9557367,
          rpm: 705,
          speed: 15.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 337,
          longitude: 112.35518,
          latitude: 28.55386,
          rpm: 401,
          speed: 10.16,
          sequence_id: 2
        },
        {
          suggested_route_id: 338,
          longitude: 100.4518004,
          latitude: 46.2837247,
          rpm: 261,
          speed: 10.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 340,
          longitude: 5.1175293,
          latitude: 52.08234,
          rpm: 308,
          speed: 5.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 342,
          longitude: 57.6297389,
          latitude: -20.2695062,
          rpm: 334,
          speed: 5.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 342,
          longitude: 118.5389179,
          latitude: 24.9480325,
          rpm: 982,
          speed: 5.63,
          sequence_id: 2
        },
        {
          suggested_route_id: 343,
          longitude: 107.494838,
          latitude: 22.646141,
          rpm: 66,
          speed: 8.83,
          sequence_id: 1
        },
        {
          suggested_route_id: 346,
          longitude: -2.9925577,
          latitude: 9.2716618,
          rpm: 670,
          speed: 20.08,
          sequence_id: 1
        },
        {
          suggested_route_id: 347,
          longitude: 16.233744,
          latitude: 46.7976469,
          rpm: 938,
          speed: 25.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 348,
          longitude: 121.0412323,
          latitude: 14.5569016,
          rpm: 392,
          speed: 26.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 349,
          longitude: 2.3501981,
          latitude: 48.8693156,
          rpm: 994,
          speed: 26.19,
          sequence_id: 1
        },
        {
          suggested_route_id: 350,
          longitude: 113.922251,
          latitude: 30.961094,
          rpm: 1096,
          speed: 21.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 351,
          longitude: 139.707963,
          latitude: 36.1219748,
          rpm: 571,
          speed: 23.37,
          sequence_id: 1
        },
        {
          suggested_route_id: 352,
          longitude: "-119.73568",
          latitude: "49.76647",
          rpm: 998,
          speed: 1.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 357,
          longitude: 28.9892932,
          latitude: 53.8446885,
          rpm: 143,
          speed: 5.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 357,
          longitude: 123.289,
          latitude: 13.4956,
          rpm: 1165,
          speed: 7.79,
          sequence_id: 2
        },
        {
          suggested_route_id: 359,
          longitude: 121.0335158,
          latitude: 14.5655554,
          rpm: 584,
          speed: 15.09,
          sequence_id: 1
        },
        {
          suggested_route_id: 361,
          longitude: 122.0212337,
          latitude: -8.729881,
          rpm: 178,
          speed: 0.38,
          sequence_id: 1
        },
        {
          suggested_route_id: 362,
          longitude: 123.8864493,
          latitude: 10.3291793,
          rpm: 47,
          speed: 24.32,
          sequence_id: 1
        },
        {
          suggested_route_id: 362,
          longitude: 115.5625434,
          latitude: -8.7176937,
          rpm: 641,
          speed: 27.56,
          sequence_id: 2
        },
        {
          suggested_route_id: 365,
          longitude: 14.0698012,
          latitude: 57.9084788,
          rpm: 236,
          speed: 7.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 366,
          longitude: 108.8105899,
          latitude: -7.1501862,
          rpm: 1166,
          speed: 22.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 367,
          longitude: 22.7781773,
          latitude: 49.7826756,
          rpm: 724,
          speed: 17,
          sequence_id: 1
        },
        {
          suggested_route_id: 367,
          longitude: 6.301229,
          latitude: 13.2874832,
          rpm: 928,
          speed: 23.67,
          sequence_id: 2
        },
        {
          suggested_route_id: 368,
          longitude: 119.776977,
          latitude: 40.376804,
          rpm: 55,
          speed: 25.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 368,
          longitude: "115.72526",
          latitude: "49.8807",
          rpm: 1149,
          speed: 4.65,
          sequence_id: 2
        },
        {
          suggested_route_id: 369,
          longitude: 121.0022623,
          latitude: 14.5665991,
          rpm: 375,
          speed: 0.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 369,
          longitude: 111.1384418,
          latitude: -6.7836529,
          rpm: 969,
          speed: 6.06,
          sequence_id: 2
        },
        {
          suggested_route_id: 374,
          longitude: 29.2055142,
          latitude: 62.1738098,
          rpm: 1098,
          speed: 10.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 375,
          longitude: -64.7755669,
          latitude: 17.7235605,
          rpm: 286,
          speed: 5.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 377,
          longitude: 99.7790227,
          latitude: 17.4161103,
          rpm: 481,
          speed: 13.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 377,
          longitude: -67.5082709,
          latitude: 10.1819305,
          rpm: 800,
          speed: 16.96,
          sequence_id: 2
        },
        {
          suggested_route_id: 379,
          longitude: 113.088924,
          latitude: 23.009805,
          rpm: 750,
          speed: 24.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 379,
          longitude: 57.7700645,
          latitude: -20.326049,
          rpm: 619,
          speed: 25.57,
          sequence_id: 2
        },
        {
          suggested_route_id: 381,
          longitude: 117.500558,
          latitude: 40.417358,
          rpm: 1052,
          speed: 21.93,
          sequence_id: 1
        },
        {
          suggested_route_id: 382,
          longitude: -90.872553,
          latitude: 13.918464,
          rpm: 1149,
          speed: 3.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 382,
          longitude: -8.1992228,
          latitude: 41.3665714,
          rpm: 911,
          speed: 21.35,
          sequence_id: 2
        },
        {
          suggested_route_id: 384,
          longitude: 116.086032,
          latitude: 43.933411,
          rpm: 776,
          speed: 0.78,
          sequence_id: 1
        },
        {
          suggested_route_id: 385,
          longitude: 140.6058841,
          latitude: 35.8550956,
          rpm: 662,
          speed: 23.11,
          sequence_id: 1
        },
        {
          suggested_route_id: 386,
          longitude: 20.938154,
          latitude: 50.4406629,
          rpm: 660,
          speed: 12.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 386,
          longitude: 124.4697283,
          latitude: -9.8610821,
          rpm: 369,
          speed: 7.1,
          sequence_id: 2
        },
        {
          suggested_route_id: 387,
          longitude: 113.670324,
          latitude: 22.935289,
          rpm: 925,
          speed: 9.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 387,
          longitude: 151.188577,
          latitude: -33.93274,
          rpm: 315,
          speed: 26.32,
          sequence_id: 2
        },
        {
          suggested_route_id: 389,
          longitude: 12.5915164,
          latitude: 55.6715981,
          rpm: 382,
          speed: 25.2,
          sequence_id: 1
        },
        {
          suggested_route_id: 389,
          longitude: "47.63339",
          latitude: "15.52591",
          rpm: 285,
          speed: 24.85,
          sequence_id: 2
        },
        {
          suggested_route_id: 391,
          longitude: 36.1328132,
          latitude: 35.3772103,
          rpm: 1131,
          speed: 12.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 392,
          longitude: "85.62619",
          latitude: "52.60665",
          rpm: 905,
          speed: 11.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 392,
          longitude: -108.2930839,
          latitude: 52.7785658,
          rpm: 988,
          speed: 4.15,
          sequence_id: 2
        },
        {
          suggested_route_id: 393,
          longitude: 72.3382061,
          latitude: 53.6362335,
          rpm: 870,
          speed: 23.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 394,
          longitude: -77.8938895,
          latitude: 18.4762228,
          rpm: 896,
          speed: 7.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 395,
          longitude: -103.6951543,
          latitude: 20.775698,
          rpm: 725,
          speed: 4.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 397,
          longitude: -64.2142976,
          latitude: -31.43337,
          rpm: 60,
          speed: 19.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 397,
          longitude: 51.9665342,
          latitude: 51.2308402,
          rpm: 89,
          speed: 1.8,
          sequence_id: 2
        },
        {
          suggested_route_id: 402,
          longitude: 125.1375831,
          latitude: 7.9855625,
          rpm: 1077,
          speed: 13.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 402,
          longitude: 139.4440586,
          latitude: 36.0932201,
          rpm: 791,
          speed: 22.71,
          sequence_id: 2
        },
        {
          suggested_route_id: 403,
          longitude: -77.1082444,
          latitude: 38.7240446,
          rpm: 593,
          speed: 11.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 403,
          longitude: 14.756367,
          latitude: 56.1747912,
          rpm: 729,
          speed: 1.42,
          sequence_id: 2
        },
        {
          suggested_route_id: 406,
          longitude: -35.0169621,
          latitude: -8.1132729,
          rpm: 654,
          speed: 16.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 407,
          longitude: 115.3410632,
          latitude: -8.1268196,
          rpm: 1034,
          speed: 15.11,
          sequence_id: 1
        },
        {
          suggested_route_id: 408,
          longitude: 113.8688645,
          latitude: 29.7162314,
          rpm: 712,
          speed: 20.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 409,
          longitude: -66.3381678,
          latitude: -33.2843846,
          rpm: 144,
          speed: 21.82,
          sequence_id: 1
        },
        {
          suggested_route_id: 410,
          longitude: 139.7040273,
          latitude: 36.1201804,
          rpm: 1187,
          speed: 20.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 410,
          longitude: 110.3772042,
          latitude: -7.8431154,
          rpm: 148,
          speed: 26.15,
          sequence_id: 2
        },
        {
          suggested_route_id: 411,
          longitude: 119.282994,
          latitude: 33.440106,
          rpm: 182,
          speed: 23.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 412,
          longitude: 121.4761124,
          latitude: 17.791111,
          rpm: 778,
          speed: 20.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 416,
          longitude: 106.7996647,
          latitude: -6.1999592,
          rpm: 1110,
          speed: 18.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 418,
          longitude: 6.17445,
          latitude: 48.689836,
          rpm: 426,
          speed: 1.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 420,
          longitude: -2.7674407,
          latitude: 48.5111249,
          rpm: 178,
          speed: 27.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 423,
          longitude: 13.393389,
          latitude: 9.3226016,
          rpm: 492,
          speed: 7.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 425,
          longitude: -78.5829504,
          latitude: 35.9240269,
          rpm: 813,
          speed: 27.08,
          sequence_id: 1
        },
        {
          suggested_route_id: 425,
          longitude: 12.933356,
          latitude: 57.7197857,
          rpm: 795,
          speed: 6.9,
          sequence_id: 2
        },
        {
          suggested_route_id: 425,
          longitude: -9.2968812,
          latitude: 38.8248475,
          rpm: 51,
          speed: 1.06,
          sequence_id: 3
        },
        {
          suggested_route_id: 425,
          longitude: 120.9396932,
          latitude: 14.3870657,
          rpm: 1167,
          speed: 10.42,
          sequence_id: 4
        },
        {
          suggested_route_id: 428,
          longitude: 25.6805868,
          latitude: -25.2076148,
          rpm: 609,
          speed: 25.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 428,
          longitude: 119.64742,
          latitude: 29.079175,
          rpm: 194,
          speed: 20.45,
          sequence_id: 2
        },
        {
          suggested_route_id: 428,
          longitude: 17.9436913,
          latitude: 59.2234099,
          rpm: 950,
          speed: 16.09,
          sequence_id: 3
        },
        {
          suggested_route_id: 430,
          longitude: 123.1689818,
          latitude: 13.6193661,
          rpm: 1043,
          speed: 8.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 435,
          longitude: "-11.9",
          latitude: "7.45",
          rpm: 631,
          speed: 8.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 437,
          longitude: 140.2770274,
          latitude: 38.1265094,
          rpm: 337,
          speed: 20.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 439,
          longitude: 92.55497,
          latitude: 30.466314,
          rpm: 358,
          speed: 2.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 439,
          longitude: 50.0969652,
          latitude: 40.5152444,
          rpm: 908,
          speed: 12.32,
          sequence_id: 2
        },
        {
          suggested_route_id: 439,
          longitude: 17.4697527,
          latitude: 49.2422244,
          rpm: 723,
          speed: 19.63,
          sequence_id: 3
        },
        {
          suggested_route_id: 440,
          longitude: 85.7788422,
          latitude: 51.8321777,
          rpm: 563,
          speed: 22.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 441,
          longitude: 109.4259114,
          latitude: -7.3058578,
          rpm: 1108,
          speed: 21.95,
          sequence_id: 1
        },
        {
          suggested_route_id: 445,
          longitude: -80.817935,
          latitude: 35.3328119,
          rpm: 753,
          speed: 15.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 448,
          longitude: -36.9111057,
          latitude: -6.9078713,
          rpm: 156,
          speed: 14.01,
          sequence_id: 1
        },
        {
          suggested_route_id: 448,
          longitude: -74.354009,
          latitude: 4.809984,
          rpm: 1016,
          speed: 27.77,
          sequence_id: 2
        },
        {
          suggested_route_id: 449,
          longitude: 110.5933862,
          latitude: -7.5173045,
          rpm: 137,
          speed: 4.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 449,
          longitude: 68.6593883,
          latitude: 25.0617484,
          rpm: 613,
          speed: 9.68,
          sequence_id: 2
        },
        {
          suggested_route_id: 449,
          longitude: 125.3297787,
          latitude: 7.9187344,
          rpm: 648,
          speed: 1.79,
          sequence_id: 3
        },
        {
          suggested_route_id: 449,
          longitude: 7.6370168,
          latitude: 48.5347071,
          rpm: 79,
          speed: 0.9,
          sequence_id: 4
        },
        {
          suggested_route_id: 449,
          longitude: 61.9066841,
          latitude: 57.3299614,
          rpm: 241,
          speed: 2.3,
          sequence_id: 5
        },
        {
          suggested_route_id: 450,
          longitude: -102.9838564,
          latitude: 25.7572143,
          rpm: 604,
          speed: 22.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 451,
          longitude: 108.438067,
          latitude: 34.705306,
          rpm: 1055,
          speed: 2.09,
          sequence_id: 1
        },
        {
          suggested_route_id: 454,
          longitude: 114.382541,
          latitude: 23.084122,
          rpm: 65,
          speed: 8.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 454,
          longitude: 51.1611537,
          latitude: 30.3619359,
          rpm: 859,
          speed: 4.05,
          sequence_id: 2
        },
        {
          suggested_route_id: 455,
          longitude: 18.8413976,
          latitude: 45.4140943,
          rpm: 60,
          speed: 25.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 456,
          longitude: -65.434694,
          latitude: -24.7995226,
          rpm: 596,
          speed: 21.37,
          sequence_id: 1
        },
        {
          suggested_route_id: 456,
          longitude: 13.1146225,
          latitude: 57.4955715,
          rpm: 406,
          speed: 7.97,
          sequence_id: 2
        },
        {
          suggested_route_id: 456,
          longitude: 40.3703941,
          latitude: 50.1681621,
          rpm: 75,
          speed: 20.26,
          sequence_id: 3
        },
        {
          suggested_route_id: 456,
          longitude: 121.1293312,
          latitude: 14.5643857,
          rpm: 305,
          speed: 8.65,
          sequence_id: 4
        },
        {
          suggested_route_id: 457,
          longitude: "41.46056",
          latitude: "51.84861",
          rpm: 914,
          speed: 0.22,
          sequence_id: 1
        },
        {
          suggested_route_id: 457,
          longitude: -8.2884236,
          latitude: 38.0361995,
          rpm: 1035,
          speed: 7.7,
          sequence_id: 2
        },
        {
          suggested_route_id: 457,
          longitude: "124.0019",
          latitude: "-9.6239",
          rpm: 674,
          speed: 11.14,
          sequence_id: 3
        },
        {
          suggested_route_id: 460,
          longitude: 108.0012723,
          latitude: -6.8742097,
          rpm: 1178,
          speed: 3.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 460,
          longitude: -54.9697212,
          latitude: -20.9306687,
          rpm: 821,
          speed: 16.75,
          sequence_id: 2
        },
        {
          suggested_route_id: 461,
          longitude: -75.3156939,
          latitude: 2.523477,
          rpm: 293,
          speed: 9.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 461,
          longitude: 46.3336857,
          latitude: -15.6921494,
          rpm: 207,
          speed: 4.62,
          sequence_id: 2
        },
        {
          suggested_route_id: 462,
          longitude: -66.9476782,
          latitude: -28.8394041,
          rpm: 170,
          speed: 11.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 462,
          longitude: 122.762485,
          latitude: 63.897847,
          rpm: 355,
          speed: 27,
          sequence_id: 2
        },
        {
          suggested_route_id: 462,
          longitude: -73.295881,
          latitude: 5.409158,
          rpm: 388,
          speed: 0.95,
          sequence_id: 3
        },
        {
          suggested_route_id: 463,
          longitude: 110.5215459,
          latitude: -1.5697615,
          rpm: 503,
          speed: 0.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 464,
          longitude: 10.3525964,
          latitude: 12.289736,
          rpm: 186,
          speed: 23.42,
          sequence_id: 1
        },
        {
          suggested_route_id: 464,
          longitude: -74.291386,
          latitude: 4.974252,
          rpm: 209,
          speed: 23.49,
          sequence_id: 2
        },
        {
          suggested_route_id: 464,
          longitude: 15.4518432,
          latitude: 50.6558337,
          rpm: 571,
          speed: 15.06,
          sequence_id: 3
        },
        {
          suggested_route_id: 464,
          longitude: 116.3751225,
          latitude: -8.6447759,
          rpm: 924,
          speed: 23.7,
          sequence_id: 4
        },
        {
          suggested_route_id: 465,
          longitude: 15.4778574,
          latitude: 45.6128697,
          rpm: 1011,
          speed: 22.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 468,
          longitude: 40.8103225,
          latitude: 44.3703217,
          rpm: 904,
          speed: 21.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 471,
          longitude: 123.5183334,
          latitude: 13.6991663,
          rpm: 1147,
          speed: 0.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 473,
          longitude: 10.4024274,
          latitude: 63.4400274,
          rpm: 1196,
          speed: 24,
          sequence_id: 1
        },
        {
          suggested_route_id: 474,
          longitude: 89.4990219,
          latitude: 23.1656982,
          rpm: 658,
          speed: 27.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 474,
          longitude: 121.006595,
          latitude: 29.144064,
          rpm: 1102,
          speed: 25.14,
          sequence_id: 2
        },
        {
          suggested_route_id: 474,
          longitude: 100.4227992,
          latitude: 13.8135951,
          rpm: 850,
          speed: 16.29,
          sequence_id: 3
        },
        {
          suggested_route_id: 474,
          longitude: 15.0091903,
          latitude: 58.5563017,
          rpm: 185,
          speed: 7.97,
          sequence_id: 4
        },
        {
          suggested_route_id: 475,
          longitude: 6.4903141,
          latitude: 12.8776754,
          rpm: 1050,
          speed: 11.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 475,
          longitude: -70.9853968,
          latitude: -33.6815281,
          rpm: 40,
          speed: 17.93,
          sequence_id: 2
        },
        {
          suggested_route_id: 477,
          longitude: 114.2689545,
          latitude: 30.5859716,
          rpm: 1023,
          speed: 2.71,
          sequence_id: 1
        },
        {
          suggested_route_id: 477,
          longitude: 130.4103077,
          latitude: 32.5539412,
          rpm: 537,
          speed: 16.39,
          sequence_id: 2
        },
        {
          suggested_route_id: 481,
          longitude: -9.3866338,
          latitude: 38.7270379,
          rpm: 1058,
          speed: 21.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 481,
          longitude: 19.7556505,
          latitude: 45.3125176,
          rpm: 1129,
          speed: 18.77,
          sequence_id: 2
        },
        {
          suggested_route_id: 484,
          longitude: 34.0432575,
          latitude: 1.347685,
          rpm: 869,
          speed: 18.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 485,
          longitude: 22.4708685,
          latitude: 2.1961772,
          rpm: 402,
          speed: 18.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 485,
          longitude: -44.4370606,
          latitude: -20.017643,
          rpm: 143,
          speed: 13.8,
          sequence_id: 2
        },
        {
          suggested_route_id: 486,
          longitude: 123.726201,
          latitude: 50.591842,
          rpm: 727,
          speed: 26.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 487,
          longitude: 37.3439888,
          latitude: 55.6830117,
          rpm: 187,
          speed: 9.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 488,
          longitude: 112.500205,
          latitude: 34.67985,
          rpm: 756,
          speed: 7.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 489,
          longitude: -87.8893383,
          latitude: 14.9817467,
          rpm: 542,
          speed: 17.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 490,
          longitude: 116.470304,
          latitude: 35.937102,
          rpm: 401,
          speed: 10.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 491,
          longitude: 112.7196817,
          latitude: -7.2719005,
          rpm: 622,
          speed: 5.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 493,
          longitude: "87.71608",
          latitude: "46.86436",
          rpm: 943,
          speed: 15.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 493,
          longitude: -8.2407873,
          latitude: 39.38316,
          rpm: 487,
          speed: 23.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 494,
          longitude: 104.518068,
          latitude: 25.748008,
          rpm: 679,
          speed: 3.34,
          sequence_id: 1
        },
        {
          suggested_route_id: 496,
          longitude: 101.1843887,
          latitude: 14.874441,
          rpm: 1090,
          speed: 10.31,
          sequence_id: 1
        },
        {
          suggested_route_id: 496,
          longitude: 140.7803658,
          latitude: 37.9697625,
          rpm: 408,
          speed: 17.87,
          sequence_id: 2
        },
        {
          suggested_route_id: 496,
          longitude: 37.0051383,
          latitude: 35.5916647,
          rpm: 536,
          speed: 2.79,
          sequence_id: 3
        },
        {
          suggested_route_id: 499,
          longitude: 89.2502399,
          latitude: 23.1387718,
          rpm: 181,
          speed: 15.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 499,
          longitude: -75.88834,
          latitude: 1.805165,
          rpm: 358,
          speed: 15.05,
          sequence_id: 2
        },
        {
          suggested_route_id: 500,
          longitude: "44.775",
          latitude: "15.85",
          rpm: 289,
          speed: 5.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 501,
          longitude: 127.9382594,
          latitude: 26.6182735,
          rpm: 994,
          speed: 5.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 502,
          longitude: 103.5218199,
          latitude: 48.8231572,
          rpm: 1176,
          speed: 19.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 502,
          longitude: -9.1861498,
          latitude: 38.652683,
          rpm: 291,
          speed: 3.36,
          sequence_id: 2
        },
        {
          suggested_route_id: 503,
          longitude: 116.838834,
          latitude: 38.304477,
          rpm: 346,
          speed: 16.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 504,
          longitude: 50.5446161,
          latitude: 36.040428,
          rpm: 1093,
          speed: 4.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 504,
          longitude: 135.6373307,
          latitude: 34.6520219,
          rpm: 302,
          speed: 12.91,
          sequence_id: 2
        },
        {
          suggested_route_id: 505,
          longitude: 7.0014657,
          latitude: 6.0808532,
          rpm: 892,
          speed: 14.32,
          sequence_id: 1
        },
        {
          suggested_route_id: 505,
          longitude: 112.6109257,
          latitude: -8.2151612,
          rpm: 1141,
          speed: 15.33,
          sequence_id: 2
        },
        {
          suggested_route_id: 509,
          longitude: 52.061524,
          latitude: 55.7558426,
          rpm: 846,
          speed: 9.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 512,
          longitude: 128.1135947,
          latitude: 36.1398393,
          rpm: 372,
          speed: 25.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 512,
          longitude: 89.8762377,
          latitude: 24.0576707,
          rpm: 516,
          speed: 22.02,
          sequence_id: 2
        },
        {
          suggested_route_id: 512,
          longitude: 103.7694692,
          latitude: 16.7122183,
          rpm: 730,
          speed: 21.85,
          sequence_id: 3
        },
        {
          suggested_route_id: 512,
          longitude: -48.5219457,
          latitude: -27.6349915,
          rpm: 353,
          speed: 11.47,
          sequence_id: 4
        },
        {
          suggested_route_id: 513,
          longitude: 86.1268949,
          latitude: 55.3440711,
          rpm: 1082,
          speed: 6.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 513,
          longitude: 28.6054979,
          latitude: -24.6079128,
          rpm: 446,
          speed: 0.64,
          sequence_id: 2
        },
        {
          suggested_route_id: 514,
          longitude: 36.7018311,
          latitude: 1.0931431,
          rpm: 533,
          speed: 6.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 514,
          longitude: -73.6757904,
          latitude: 5.8731622,
          rpm: 216,
          speed: 21.48,
          sequence_id: 2
        },
        {
          suggested_route_id: 516,
          longitude: 116.298866,
          latitude: 27.937146,
          rpm: 684,
          speed: 20.21,
          sequence_id: 1
        },
        {
          suggested_route_id: 517,
          longitude: 113.645048,
          latitude: 23.69589,
          rpm: 57,
          speed: 15.35,
          sequence_id: 1
        },
        {
          suggested_route_id: 519,
          longitude: 14.4342708,
          latitude: 49.0522544,
          rpm: 925,
          speed: 27.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 520,
          longitude: 30.69633,
          latitude: -27.97499,
          rpm: 422,
          speed: 9.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 525,
          longitude: 121.3666687,
          latitude: 12.7166672,
          rpm: 1195,
          speed: 10.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 525,
          longitude: 121.050126,
          latitude: 14.3839328,
          rpm: 1075,
          speed: 7.24,
          sequence_id: 2
        },
        {
          suggested_route_id: 526,
          longitude: 108.0687579,
          latitude: -7.4133512,
          rpm: 781,
          speed: 8.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 526,
          longitude: "112.7674",
          latitude: "-7.2575",
          rpm: 190,
          speed: 8.1,
          sequence_id: 2
        },
        {
          suggested_route_id: 526,
          longitude: -47.6455169,
          latitude: -21.8898802,
          rpm: 1163,
          speed: 0.93,
          sequence_id: 3
        },
        {
          suggested_route_id: 527,
          longitude: -74.446092,
          latitude: 40.496654,
          rpm: 501,
          speed: 0.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 528,
          longitude: 42.6268969,
          latitude: 17.1547981,
          rpm: 639,
          speed: 24.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 530,
          longitude: 16.8555169,
          latitude: 58.7542973,
          rpm: 401,
          speed: 25.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 531,
          longitude: -8.7186309,
          latitude: 41.4406555,
          rpm: 426,
          speed: 7.45,
          sequence_id: 1
        },
        {
          suggested_route_id: 531,
          longitude: 96.543937,
          latitude: 40.531867,
          rpm: 1103,
          speed: 17.51,
          sequence_id: 2
        },
        {
          suggested_route_id: 533,
          longitude: -75.3178952,
          latitude: 5.6460924,
          rpm: 704,
          speed: 24.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 533,
          longitude: 121.7252457,
          latitude: -8.8056791,
          rpm: 265,
          speed: 14.58,
          sequence_id: 2
        },
        {
          suggested_route_id: 533,
          longitude: -7.632555,
          latitude: 33.6086342,
          rpm: 913,
          speed: 20.5,
          sequence_id: 3
        },
        {
          suggested_route_id: 535,
          longitude: -9.3435691,
          latitude: 38.7222088,
          rpm: 1136,
          speed: 12.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 537,
          longitude: -79.4619506,
          latitude: 44.2298189,
          rpm: 803,
          speed: 23.24,
          sequence_id: 1
        },
        {
          suggested_route_id: 538,
          longitude: 103.053321,
          latitude: 34.99562,
          rpm: 313,
          speed: 19.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 539,
          longitude: -85.8050987,
          latitude: 11.4522433,
          rpm: 1017,
          speed: 26.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 539,
          longitude: -15.9053689,
          latitude: 14.8038531,
          rpm: 227,
          speed: 11.28,
          sequence_id: 2
        },
        {
          suggested_route_id: 540,
          longitude: 18.425887,
          latitude: 44.8775521,
          rpm: 307,
          speed: 0.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 540,
          longitude: 20.7283764,
          latitude: 39.8236368,
          rpm: 20,
          speed: 21.62,
          sequence_id: 2
        },
        {
          suggested_route_id: 542,
          longitude: 144.835735,
          latitude: 13.514118,
          rpm: 297,
          speed: 15.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 543,
          longitude: "107.989",
          latitude: "-7.1675",
          rpm: 232,
          speed: 14.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 544,
          longitude: 131.8648449,
          latitude: 43.8507498,
          rpm: 640,
          speed: 5.67,
          sequence_id: 1
        },
        {
          suggested_route_id: 544,
          longitude: 125.5083136,
          latitude: -8.9965182,
          rpm: 254,
          speed: 2.87,
          sequence_id: 2
        },
        {
          suggested_route_id: 544,
          longitude: 141.5437532,
          latitude: 38.7333101,
          rpm: 830,
          speed: 8.86,
          sequence_id: 3
        },
        {
          suggested_route_id: 545,
          longitude: 121.0607193,
          latitude: 15.6286312,
          rpm: 568,
          speed: 14.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 546,
          longitude: 107.9561464,
          latitude: -6.8353111,
          rpm: 837,
          speed: 8.3,
          sequence_id: 1
        },
        {
          suggested_route_id: 547,
          longitude: 121.0519495,
          latitude: 14.7044701,
          rpm: 1045,
          speed: 13.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 548,
          longitude: -53.9288773,
          latitude: -27.4561199,
          rpm: 593,
          speed: 27.93,
          sequence_id: 1
        },
        {
          suggested_route_id: 548,
          longitude: 44.1672804,
          latitude: 26.8570638,
          rpm: 120,
          speed: 0.79,
          sequence_id: 2
        },
        {
          suggested_route_id: 550,
          longitude: "44.68139",
          latitude: "42.82042",
          rpm: 504,
          speed: 6.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 554,
          longitude: 110.514837,
          latitude: 27.358123,
          rpm: 1037,
          speed: 3.79,
          sequence_id: 1
        },
        {
          suggested_route_id: 556,
          longitude: 108.3578806,
          latitude: -7.0031309,
          rpm: 157,
          speed: 3.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 556,
          longitude: 113.7632828,
          latitude: 23.3790333,
          rpm: 658,
          speed: 15.63,
          sequence_id: 2
        },
        {
          suggested_route_id: 557,
          longitude: 20.704183,
          latitude: 49.6207834,
          rpm: 931,
          speed: 27.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 558,
          longitude: 106.8323419,
          latitude: -6.2461822,
          rpm: 1074,
          speed: 8.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 558,
          longitude: 25.9862701,
          latitude: 52.3359637,
          rpm: 765,
          speed: 21.92,
          sequence_id: 2
        },
        {
          suggested_route_id: 559,
          longitude: -0.23924,
          latitude: 51.888151,
          rpm: 304,
          speed: 8.09,
          sequence_id: 1
        },
        {
          suggested_route_id: 560,
          longitude: -60.3884354,
          latitude: -27.5245743,
          rpm: 1030,
          speed: 22,
          sequence_id: 1
        },
        {
          suggested_route_id: 561,
          longitude: 19.2061348,
          latitude: 50.8677076,
          rpm: 363,
          speed: 1.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 561,
          longitude: 114.152999,
          latitude: 22.285839,
          rpm: 1146,
          speed: 22.86,
          sequence_id: 2
        },
        {
          suggested_route_id: 562,
          longitude: -65.222248,
          latitude: -24.2716948,
          rpm: 1155,
          speed: 25.3,
          sequence_id: 1
        },
        {
          suggested_route_id: 562,
          longitude: 19.877027,
          latitude: 51.2217758,
          rpm: 990,
          speed: 25.29,
          sequence_id: 2
        },
        {
          suggested_route_id: 563,
          longitude: 117.365052,
          latitude: 25.941937,
          rpm: 1090,
          speed: 16.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 563,
          longitude: 100.1031202,
          latitude: 13.5924758,
          rpm: 512,
          speed: 12.76,
          sequence_id: 2
        },
        {
          suggested_route_id: 564,
          longitude: 32.5662219,
          latitude: 0.2826569,
          rpm: 505,
          speed: 7.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 564,
          longitude: 17.0138788,
          latitude: 49.8687559,
          rpm: 606,
          speed: 23.33,
          sequence_id: 2
        },
        {
          suggested_route_id: 565,
          longitude: "105.8625",
          latitude: "-6.4127",
          rpm: 177,
          speed: 17.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 565,
          longitude: -8.2950775,
          latitude: 40.4604941,
          rpm: 407,
          speed: 10.09,
          sequence_id: 2
        },
        {
          suggested_route_id: 569,
          longitude: 13.4153897,
          latitude: 57.1630313,
          rpm: 1128,
          speed: 17.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 571,
          longitude: 120.997522,
          latitude: 14.5473421,
          rpm: 437,
          speed: 23.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 572,
          longitude: 1.2650349,
          latitude: 10.6227552,
          rpm: 675,
          speed: 7.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 574,
          longitude: -86.5186022,
          latitude: 39.1714266,
          rpm: 1093,
          speed: 19,
          sequence_id: 1
        },
        {
          suggested_route_id: 574,
          longitude: -78.4695111,
          latitude: -5.6202503,
          rpm: 1108,
          speed: 1.89,
          sequence_id: 2
        },
        {
          suggested_route_id: 575,
          longitude: -85.68986,
          latitude: 10.5570353,
          rpm: 721,
          speed: 9.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 578,
          longitude: 14.999633,
          latitude: 51.6396221,
          rpm: 737,
          speed: 5.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 579,
          longitude: 2.8002946,
          latitude: 47.3591366,
          rpm: 456,
          speed: 25.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 581,
          longitude: 103.5147735,
          latitude: -1.4740609,
          rpm: 45,
          speed: 24.38,
          sequence_id: 1
        },
        {
          suggested_route_id: 582,
          longitude: 126.6441618,
          latitude: 41.4564504,
          rpm: 1173,
          speed: 1.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 583,
          longitude: 115.182134,
          latitude: 23.63841,
          rpm: 491,
          speed: 11.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 585,
          longitude: 95.8545767,
          latitude: 45.5502218,
          rpm: 1151,
          speed: 17.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 585,
          longitude: 35.419972,
          latitude: 32.687346,
          rpm: 194,
          speed: 3.09,
          sequence_id: 2
        },
        {
          suggested_route_id: 585,
          longitude: 112.867154,
          latitude: -6.9218452,
          rpm: 827,
          speed: 5.07,
          sequence_id: 3
        },
        {
          suggested_route_id: 586,
          longitude: 21.5118754,
          latitude: 40.3418956,
          rpm: 1061,
          speed: 7.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 586,
          longitude: 20.2024299,
          latitude: 41.0180957,
          rpm: 30,
          speed: 22.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 588,
          longitude: -74.961495,
          latitude: 10.323959,
          rpm: 1064,
          speed: 9.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 589,
          longitude: 173.5016887,
          latitude: -35.0026606,
          rpm: 151,
          speed: 22.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 590,
          longitude: 20.7644305,
          latitude: 48.081286,
          rpm: 568,
          speed: 13.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 591,
          longitude: 30.451101,
          latitude: 59.7050314,
          rpm: 899,
          speed: 20.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 592,
          longitude: 120.942358,
          latitude: 14.4066158,
          rpm: 36,
          speed: 22.24,
          sequence_id: 1
        },
        {
          suggested_route_id: 592,
          longitude: 108.3578806,
          latitude: -7.0031309,
          rpm: 1094,
          speed: 16.24,
          sequence_id: 2
        },
        {
          suggested_route_id: 592,
          longitude: 13.0188387,
          latitude: 58.0780287,
          rpm: 364,
          speed: 3.35,
          sequence_id: 3
        },
        {
          suggested_route_id: 594,
          longitude: 110.455332,
          latitude: 21.244721,
          rpm: 887,
          speed: 16.42,
          sequence_id: 1
        },
        {
          suggested_route_id: 595,
          longitude: 60.3645218,
          latitude: 56.975553,
          rpm: 852,
          speed: 13.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 595,
          longitude: 2.3067496,
          latitude: 48.7946784,
          rpm: 707,
          speed: 18.45,
          sequence_id: 2
        },
        {
          suggested_route_id: 596,
          longitude: "-102.80099",
          latitude: "50.91671",
          rpm: 44,
          speed: 25.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 596,
          longitude: 108.1798126,
          latitude: -7.2211138,
          rpm: 330,
          speed: 1.66,
          sequence_id: 2
        },
        {
          suggested_route_id: 596,
          longitude: 114.872199,
          latitude: 30.453667,
          rpm: 578,
          speed: 19.51,
          sequence_id: 3
        },
        {
          suggested_route_id: 599,
          longitude: -67.9800178,
          latitude: -38.9156735,
          rpm: 1006,
          speed: 19.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 599,
          longitude: 15.28454,
          latitude: 53.5659675,
          rpm: 1137,
          speed: 5.53,
          sequence_id: 2
        },
        {
          suggested_route_id: 602,
          longitude: 28.954309,
          latitude: 30.82247,
          rpm: 1058,
          speed: 8.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 603,
          longitude: 21.6426843,
          latitude: 47.5962342,
          rpm: 963,
          speed: 20.37,
          sequence_id: 1
        },
        {
          suggested_route_id: 604,
          longitude: 101.0978724,
          latitude: 13.4712468,
          rpm: 935,
          speed: 12.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 605,
          longitude: -0.2062549,
          latitude: 49.2803655,
          rpm: 732,
          speed: 6.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 605,
          longitude: -7.9200214,
          latitude: 40.3073139,
          rpm: 837,
          speed: 14.59,
          sequence_id: 2
        },
        {
          suggested_route_id: 608,
          longitude: 18.2400902,
          latitude: 49.89042,
          rpm: 864,
          speed: 18.45,
          sequence_id: 1
        },
        {
          suggested_route_id: 609,
          longitude: 50.5860497,
          latitude: 26.2285161,
          rpm: 577,
          speed: 26.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 610,
          longitude: -90.8072101,
          latitude: 14.9941724,
          rpm: 925,
          speed: 11.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 610,
          longitude: 101.0089066,
          latitude: 16.8046261,
          rpm: 287,
          speed: 19.17,
          sequence_id: 2
        },
        {
          suggested_route_id: 611,
          longitude: 123.345085,
          latitude: 7.516342,
          rpm: 1137,
          speed: 13.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 612,
          longitude: 37.6032435,
          latitude: 55.6761482,
          rpm: 326,
          speed: 8.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 612,
          longitude: 28.1791333,
          latitude: 59.3796798,
          rpm: 991,
          speed: 8.43,
          sequence_id: 2
        },
        {
          suggested_route_id: 613,
          longitude: 131.6156723,
          latitude: 33.4180537,
          rpm: 1122,
          speed: 24.21,
          sequence_id: 1
        },
        {
          suggested_route_id: 613,
          longitude: 10.7670564,
          latitude: 59.9047305,
          rpm: 812,
          speed: 24.85,
          sequence_id: 2
        },
        {
          suggested_route_id: 614,
          longitude: -77.32901,
          latitude: -8.371078,
          rpm: 499,
          speed: 6.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 614,
          longitude: 4.7901227,
          latitude: 52.3576375,
          rpm: 509,
          speed: 23.7,
          sequence_id: 2
        },
        {
          suggested_route_id: 615,
          longitude: -97.3141928,
          latitude: 20.452352,
          rpm: 866,
          speed: 6.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 615,
          longitude: 108.3890321,
          latitude: -6.4153234,
          rpm: 333,
          speed: 23.12,
          sequence_id: 2
        },
        {
          suggested_route_id: 616,
          longitude: 15.8527032,
          latitude: 50.0665053,
          rpm: 508,
          speed: 7.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 616,
          longitude: 122.9930557,
          latitude: -8.328331,
          rpm: 824,
          speed: 26.81,
          sequence_id: 2
        },
        {
          suggested_route_id: 618,
          longitude: 109.2385498,
          latitude: -6.9273494,
          rpm: 908,
          speed: 26.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 619,
          longitude: 120.9216776,
          latitude: 15.1048617,
          rpm: 176,
          speed: 18.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 619,
          longitude: 116.416357,
          latitude: 39.928353,
          rpm: 1014,
          speed: 1.55,
          sequence_id: 2
        },
        {
          suggested_route_id: 623,
          longitude: 14.874997,
          latitude: 51.6818091,
          rpm: 847,
          speed: 14.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 627,
          longitude: 6.923811,
          latitude: 47.484145,
          rpm: 725,
          speed: 2.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 627,
          longitude: 124.4891278,
          latitude: -9.5662977,
          rpm: 779,
          speed: 10.57,
          sequence_id: 2
        },
        {
          suggested_route_id: 627,
          longitude: -57.4655544,
          latitude: -25.6127554,
          rpm: 561,
          speed: 17.56,
          sequence_id: 3
        },
        {
          suggested_route_id: 628,
          longitude: 116.576092,
          latitude: 37.335794,
          rpm: 689,
          speed: 24.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 629,
          longitude: 72.8993193,
          latitude: 49.5743316,
          rpm: 1042,
          speed: 21.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 630,
          longitude: 57.6424881,
          latitude: -20.3656796,
          rpm: 271,
          speed: 24.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 631,
          longitude: 99.816059,
          latitude: 26.790544,
          rpm: 1092,
          speed: 1.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 631,
          longitude: 27.8428651,
          latitude: -22.0028763,
          rpm: 607,
          speed: 19.27,
          sequence_id: 2
        },
        {
          suggested_route_id: 632,
          longitude: 15.0524346,
          latitude: 49.1912902,
          rpm: 346,
          speed: 20.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 633,
          longitude: 124.5140637,
          latitude: -9.7702219,
          rpm: 520,
          speed: 24.58,
          sequence_id: 1
        },
        {
          suggested_route_id: 636,
          longitude: 114.2360778,
          latitude: 22.2678103,
          rpm: 366,
          speed: 0.79,
          sequence_id: 1
        },
        {
          suggested_route_id: 637,
          longitude: 0.4738293,
          latitude: 7.1518505,
          rpm: 308,
          speed: 14.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 637,
          longitude: -79.8184684,
          latitude: -2.1596406,
          rpm: 335,
          speed: 21.22,
          sequence_id: 2
        },
        {
          suggested_route_id: 639,
          longitude: 18.1512379,
          latitude: 43.7876733,
          rpm: 1082,
          speed: 1.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 640,
          longitude: 124.3277267,
          latitude: 11.7629173,
          rpm: 710,
          speed: 3.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 641,
          longitude: 105.4771084,
          latitude: 18.2865589,
          rpm: 677,
          speed: 17.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 641,
          longitude: 34.4967438,
          latitude: 48.9183905,
          rpm: 201,
          speed: 13.78,
          sequence_id: 2
        },
        {
          suggested_route_id: 642,
          longitude: 125.1864669,
          latitude: 44.4286616,
          rpm: 488,
          speed: 17.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 645,
          longitude: 21.3300873,
          latitude: 41.0377245,
          rpm: 655,
          speed: 16.21,
          sequence_id: 1
        },
        {
          suggested_route_id: 645,
          longitude: 91.8666667,
          latitude: 49.1,
          rpm: 748,
          speed: 14.98,
          sequence_id: 2
        },
        {
          suggested_route_id: 648,
          longitude: 118.859457,
          latitude: 28.970079,
          rpm: 879,
          speed: 18.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 651,
          longitude: 124.7445365,
          latitude: 9.1249562,
          rpm: 1177,
          speed: 9.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 651,
          longitude: 102.4179988,
          latitude: 18.5054233,
          rpm: 86,
          speed: 26.95,
          sequence_id: 2
        },
        {
          suggested_route_id: 651,
          longitude: 123.9881642,
          latitude: 12.6679167,
          rpm: 669,
          speed: 27.14,
          sequence_id: 3
        },
        {
          suggested_route_id: 655,
          longitude: 3.8861843,
          latitude: 50.6302806,
          rpm: 373,
          speed: 23.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 656,
          longitude: 15.5796552,
          latitude: 49.6043364,
          rpm: 890,
          speed: 26.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 657,
          longitude: 22.3898739,
          latitude: 51.114514,
          rpm: 621,
          speed: 19.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 657,
          longitude: 19.70598,
          latitude: 49.788203,
          rpm: 679,
          speed: 1.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 657,
          longitude: 118.796877,
          latitude: 32.060255,
          rpm: 657,
          speed: 6.18,
          sequence_id: 3
        },
        {
          suggested_route_id: 658,
          longitude: -6.5890166,
          latitude: 5.7866228,
          rpm: 573,
          speed: 24.21,
          sequence_id: 1
        },
        {
          suggested_route_id: 659,
          longitude: -79.2197376,
          latitude: -7.7911198,
          rpm: 669,
          speed: 14.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 660,
          longitude: 121.0155081,
          latitude: 14.5560877,
          rpm: 820,
          speed: 5.66,
          sequence_id: 1
        },
        {
          suggested_route_id: 660,
          longitude: 35.026375,
          latitude: 31.598422,
          rpm: 128,
          speed: 1.76,
          sequence_id: 2
        },
        {
          suggested_route_id: 660,
          longitude: 2.3501981,
          latitude: 48.8693156,
          rpm: 95,
          speed: 12.6,
          sequence_id: 3
        },
        {
          suggested_route_id: 660,
          longitude: 125.24729,
          latitude: 12.146493,
          rpm: 169,
          speed: 27.58,
          sequence_id: 4
        },
        {
          suggested_route_id: 661,
          longitude: 98.209206,
          latitude: 34.915946,
          rpm: 890,
          speed: 19.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 661,
          longitude: 18.6692248,
          latitude: 45.1810672,
          rpm: 1021,
          speed: 19.13,
          sequence_id: 2
        },
        {
          suggested_route_id: 662,
          longitude: -73.8076421,
          latitude: 40.6998888,
          rpm: 435,
          speed: 1.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 663,
          longitude: 121.153674,
          latitude: 37.467686,
          rpm: 1057,
          speed: 16.59,
          sequence_id: 1
        },
        {
          suggested_route_id: 664,
          longitude: 119.48421,
          latitude: 31.416911,
          rpm: 534,
          speed: 16.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 664,
          longitude: 17.4530287,
          latitude: 59.186002,
          rpm: 73,
          speed: 7.97,
          sequence_id: 2
        },
        {
          suggested_route_id: 665,
          longitude: 12.9380053,
          latitude: 59.1239637,
          rpm: 456,
          speed: 26.46,
          sequence_id: 1
        },
        {
          suggested_route_id: 668,
          longitude: 117.0117307,
          latitude: -8.5325093,
          rpm: 96,
          speed: 22.22,
          sequence_id: 1
        },
        {
          suggested_route_id: 669,
          longitude: -4.1020654,
          latitude: 47.9962116,
          rpm: 564,
          speed: 4.67,
          sequence_id: 1
        },
        {
          suggested_route_id: 669,
          longitude: 120.9422852,
          latitude: 15.3993773,
          rpm: 947,
          speed: 14.83,
          sequence_id: 2
        },
        {
          suggested_route_id: 673,
          longitude: 15.9429753,
          latitude: 46.5670711,
          rpm: 914,
          speed: 27.31,
          sequence_id: 1
        },
        {
          suggested_route_id: 673,
          longitude: 68.212618,
          latitude: 28.5459092,
          rpm: 1175,
          speed: 25.8,
          sequence_id: 2
        },
        {
          suggested_route_id: 679,
          longitude: 17.5871593,
          latitude: 54.0541924,
          rpm: 537,
          speed: 22.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 680,
          longitude: 22.4845811,
          latitude: 40.479174,
          rpm: 317,
          speed: 17.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 681,
          longitude: "121.5904",
          latitude: "-8.7918",
          rpm: 354,
          speed: 7.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 681,
          longitude: 28.1909907,
          latitude: -26.1317252,
          rpm: 1053,
          speed: 0.43,
          sequence_id: 2
        },
        {
          suggested_route_id: 682,
          longitude: 39.4129061,
          latitude: 51.626324,
          rpm: 117,
          speed: 2.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 683,
          longitude: -70.4083333,
          latitude: -17.2425,
          rpm: 356,
          speed: 17.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 684,
          longitude: 25.3248541,
          latitude: 42.2020702,
          rpm: 1041,
          speed: 21.58,
          sequence_id: 1
        },
        {
          suggested_route_id: 685,
          longitude: 107.468023,
          latitude: 31.209571,
          rpm: 133,
          speed: 14.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 687,
          longitude: 140.3509794,
          latitude: 38.2342865,
          rpm: 492,
          speed: 15.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 687,
          longitude: -80.1058665,
          latitude: 26.4068381,
          rpm: 48,
          speed: 26.61,
          sequence_id: 2
        },
        {
          suggested_route_id: 687,
          longitude: 107.2143287,
          latitude: 30.738569,
          rpm: 879,
          speed: 1.25,
          sequence_id: 3
        },
        {
          suggested_route_id: 688,
          longitude: 53.0252053,
          latitude: 57.6294504,
          rpm: 1010,
          speed: 0.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 689,
          longitude: 123.3058014,
          latitude: 7.6392002,
          rpm: 939,
          speed: 25.83,
          sequence_id: 1
        },
        {
          suggested_route_id: 690,
          longitude: 115.161102,
          latitude: -1.556592,
          rpm: 553,
          speed: 9.79,
          sequence_id: 1
        },
        {
          suggested_route_id: 691,
          longitude: 99.408315,
          latitude: 13.8494172,
          rpm: 978,
          speed: 0.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 693,
          longitude: -67.5082709,
          latitude: 10.1819305,
          rpm: 281,
          speed: 4.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 695,
          longitude: -8.5085734,
          latitude: 41.3718791,
          rpm: 42,
          speed: 20.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 696,
          longitude: 118.5389414,
          latitude: -8.4669233,
          rpm: 1036,
          speed: 4.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 697,
          longitude: -73.114725,
          latitude: 5.77977,
          rpm: 154,
          speed: 9.35,
          sequence_id: 1
        },
        {
          suggested_route_id: 697,
          longitude: 40.1587542,
          latitude: 45.9184314,
          rpm: 914,
          speed: 15.01,
          sequence_id: 2
        },
        {
          suggested_route_id: 697,
          longitude: 30.2992358,
          latitude: 31.3052222,
          rpm: 458,
          speed: 8.04,
          sequence_id: 3
        },
        {
          suggested_route_id: 698,
          longitude: -48.6844637,
          latitude: -26.6329034,
          rpm: 233,
          speed: 10.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 699,
          longitude: 37.5975489,
          latitude: 56.5303315,
          rpm: 47,
          speed: 24.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 701,
          longitude: "87.66111",
          latitude: "42.96444",
          rpm: 611,
          speed: 25.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 703,
          longitude: -14.108845,
          latitude: 16.2488504,
          rpm: 793,
          speed: 11.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 704,
          longitude: 12.872972,
          latitude: 50.8290179,
          rpm: 1198,
          speed: 8.93,
          sequence_id: 1
        },
        {
          suggested_route_id: 705,
          longitude: 100.1479182,
          latitude: 14.6462828,
          rpm: 422,
          speed: 10.95,
          sequence_id: 1
        },
        {
          suggested_route_id: 706,
          longitude: 131.34858,
          latitude: 31.5612018,
          rpm: 1009,
          speed: 27.2,
          sequence_id: 1
        },
        {
          suggested_route_id: 706,
          longitude: 116.3426552,
          latitude: -8.39427,
          rpm: 167,
          speed: 5.65,
          sequence_id: 2
        },
        {
          suggested_route_id: 707,
          longitude: "109.75",
          latitude: "46.9",
          rpm: 649,
          speed: 24.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 707,
          longitude: 112.5870889,
          latitude: 37.8311926,
          rpm: 553,
          speed: 3.83,
          sequence_id: 2
        },
        {
          suggested_route_id: 707,
          longitude: 2.6660901,
          latitude: 10.2183336,
          rpm: 174,
          speed: 11.27,
          sequence_id: 3
        },
        {
          suggested_route_id: 707,
          longitude: 110.923502,
          latitude: 29.432849,
          rpm: 456,
          speed: 10.73,
          sequence_id: 4
        },
        {
          suggested_route_id: 707,
          longitude: 120.44716,
          latitude: 36.389401,
          rpm: 525,
          speed: 23.52,
          sequence_id: 5
        },
        {
          suggested_route_id: 708,
          longitude: 38.5829669,
          latitude: 56.3690033,
          rpm: 864,
          speed: 24.46,
          sequence_id: 1
        },
        {
          suggested_route_id: 710,
          longitude: -75.9869609,
          latitude: 20.2218201,
          rpm: 424,
          speed: 19.68,
          sequence_id: 1
        },
        {
          suggested_route_id: 710,
          longitude: "130.39528",
          latitude: "42.52056",
          rpm: 273,
          speed: 25.15,
          sequence_id: 2
        },
        {
          suggested_route_id: 710,
          longitude: 114.9279547,
          latitude: -8.3262486,
          rpm: 48,
          speed: 14.57,
          sequence_id: 3
        },
        {
          suggested_route_id: 711,
          longitude: -75.393181,
          latitude: 40.72135,
          rpm: 1019,
          speed: 3.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 711,
          longitude: -71.0927279,
          latitude: -15.25055,
          rpm: 896,
          speed: 19.23,
          sequence_id: 2
        },
        {
          suggested_route_id: 712,
          longitude: -7.9440252,
          latitude: 37.1597829,
          rpm: 863,
          speed: 20.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 712,
          longitude: 35.9510395,
          latitude: 56.0349544,
          rpm: 94,
          speed: 0.32,
          sequence_id: 2
        },
        {
          suggested_route_id: 714,
          longitude: -11.7481137,
          latitude: 9.0453708,
          rpm: 639,
          speed: 22.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 714,
          longitude: 125.008956,
          latitude: 8.920465,
          rpm: 1049,
          speed: 11.74,
          sequence_id: 2
        },
        {
          suggested_route_id: 714,
          longitude: 77.750994,
          latitude: 39.714472,
          rpm: 710,
          speed: 13.7,
          sequence_id: 3
        },
        {
          suggested_route_id: 714,
          longitude: 120.3186429,
          latitude: 15.8785099,
          rpm: 537,
          speed: 13.76,
          sequence_id: 4
        },
        {
          suggested_route_id: 716,
          longitude: -67.1685947,
          latitude: 10.2568854,
          rpm: 603,
          speed: 18.34,
          sequence_id: 1
        },
        {
          suggested_route_id: 717,
          longitude: 74.5404694,
          latitude: 41.9339521,
          rpm: 965,
          speed: 21.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 720,
          longitude: 26.38509,
          latitude: 41.2699615,
          rpm: 527,
          speed: 19.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 721,
          longitude: 121.0247172,
          latitude: 14.5697565,
          rpm: 700,
          speed: 22.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 723,
          longitude: 108.651815,
          latitude: 19.09535,
          rpm: 52,
          speed: 21.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 724,
          longitude: -79.7147468,
          latitude: -6.1512014,
          rpm: 863,
          speed: 15.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 724,
          longitude: -62.278743,
          latitude: -38.7239099,
          rpm: 788,
          speed: 12.43,
          sequence_id: 2
        },
        {
          suggested_route_id: 725,
          longitude: 104.474299,
          latitude: 28.559492,
          rpm: 881,
          speed: 19.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 726,
          longitude: 109.174932,
          latitude: 27.352673,
          rpm: 411,
          speed: 0.32,
          sequence_id: 1
        },
        {
          suggested_route_id: 726,
          longitude: 107.136224,
          latitude: 10.4113797,
          rpm: 152,
          speed: 27.1,
          sequence_id: 2
        },
        {
          suggested_route_id: 728,
          longitude: "-97.32676",
          latitude: "50.13441",
          rpm: 334,
          speed: 1,
          sequence_id: 1
        },
        {
          suggested_route_id: 728,
          longitude: 110.198286,
          latitude: 20.044412,
          rpm: 836,
          speed: 27.86,
          sequence_id: 2
        },
        {
          suggested_route_id: 728,
          longitude: 126.2545687,
          latitude: 8.9800511,
          rpm: 692,
          speed: 19.11,
          sequence_id: 3
        },
        {
          suggested_route_id: 731,
          longitude: 13.1779513,
          latitude: 55.7309365,
          rpm: 125,
          speed: 4.67,
          sequence_id: 1
        },
        {
          suggested_route_id: 731,
          longitude: 37.8765944,
          latitude: 48.1221425,
          rpm: 279,
          speed: 4.3,
          sequence_id: 2
        },
        {
          suggested_route_id: 732,
          longitude: 14.6466542,
          latitude: 50.6797247,
          rpm: 1127,
          speed: 7.84,
          sequence_id: 1
        },
        {
          suggested_route_id: 732,
          longitude: 31.8135556,
          latitude: -26.043518,
          rpm: 20,
          speed: 4.38,
          sequence_id: 2
        },
        {
          suggested_route_id: 733,
          longitude: -0.3696612,
          latitude: 43.2916776,
          rpm: 701,
          speed: 5.89,
          sequence_id: 1
        },
        {
          suggested_route_id: 735,
          longitude: 113.922251,
          latitude: 30.961094,
          rpm: 96,
          speed: 5.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 735,
          longitude: 113.645048,
          latitude: 23.69589,
          rpm: 895,
          speed: 13.61,
          sequence_id: 2
        },
        {
          suggested_route_id: 736,
          longitude: -88.0240796,
          latitude: 15.3775935,
          rpm: 604,
          speed: 10.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 739,
          longitude: 106.4052541,
          latitude: -6.2614858,
          rpm: 653,
          speed: 0.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 740,
          longitude: 13.2297698,
          latitude: 49.1449758,
          rpm: 656,
          speed: 25.31,
          sequence_id: 1
        },
        {
          suggested_route_id: 740,
          longitude: 124.4475522,
          latitude: -8.2333409,
          rpm: 783,
          speed: 5,
          sequence_id: 2
        },
        {
          suggested_route_id: 740,
          longitude: 23.2154337,
          latitude: 42.8130176,
          rpm: 648,
          speed: 22.84,
          sequence_id: 3
        },
        {
          suggested_route_id: 742,
          longitude: -4.4088857,
          latitude: 33.9537558,
          rpm: 228,
          speed: 15.09,
          sequence_id: 1
        },
        {
          suggested_route_id: 744,
          longitude: 10.8620804,
          latitude: 36.5806067,
          rpm: 490,
          speed: 16.7,
          sequence_id: 1
        },
        {
          suggested_route_id: 749,
          longitude: 119.790168,
          latitude: 25.49872,
          rpm: 1078,
          speed: 13.95,
          sequence_id: 1
        },
        {
          suggested_route_id: 749,
          longitude: 114.125656,
          latitude: 32.101031,
          rpm: 191,
          speed: 22.41,
          sequence_id: 2
        },
        {
          suggested_route_id: 751,
          longitude: 44.6207633,
          latitude: 34.8809639,
          rpm: 944,
          speed: 7.35,
          sequence_id: 1
        },
        {
          suggested_route_id: 751,
          longitude: 121.166112,
          latitude: 30.025924,
          rpm: 895,
          speed: 5.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 752,
          longitude: -9.2162139,
          latitude: 30.7298739,
          rpm: 72,
          speed: 4.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 755,
          longitude: 116.0625588,
          latitude: 36.448127,
          rpm: 1148,
          speed: 0.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 756,
          longitude: 18.7017911,
          latitude: 59.7620958,
          rpm: 981,
          speed: 14.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 756,
          longitude: "88.35943",
          latitude: "25.85587",
          rpm: 572,
          speed: 5.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 756,
          longitude: "129.17083",
          latitude: "37.44056",
          rpm: 69,
          speed: 18.6,
          sequence_id: 3
        },
        {
          suggested_route_id: 757,
          longitude: 119.569989,
          latitude: 32.434672,
          rpm: 1003,
          speed: 20.02,
          sequence_id: 1
        },
        {
          suggested_route_id: 758,
          longitude: "67.24806",
          latitude: "43.915",
          rpm: 239,
          speed: 5.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 758,
          longitude: 126.2118229,
          latitude: 48.170403,
          rpm: 250,
          speed: 14.59,
          sequence_id: 2
        },
        {
          suggested_route_id: 759,
          longitude: 19.468167,
          latitude: 49.917089,
          rpm: 215,
          speed: 25.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 760,
          longitude: -70.7169851,
          latitude: -34.1691251,
          rpm: 673,
          speed: 27.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 760,
          longitude: 7.255737,
          latitude: 12.3508099,
          rpm: 200,
          speed: 8.2,
          sequence_id: 2
        },
        {
          suggested_route_id: 760,
          longitude: -85.8255855,
          latitude: 13.621654,
          rpm: 67,
          speed: 11.78,
          sequence_id: 3
        },
        {
          suggested_route_id: 760,
          longitude: -77.6242574,
          latitude: -9.2939318,
          rpm: 730,
          speed: 21.31,
          sequence_id: 4
        },
        {
          suggested_route_id: 760,
          longitude: 124.3654402,
          latitude: -8.3162857,
          rpm: 21,
          speed: 10.75,
          sequence_id: 5
        },
        {
          suggested_route_id: 761,
          longitude: 2.3694452,
          latitude: 48.7282419,
          rpm: 295,
          speed: 16.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 762,
          longitude: -73.54213,
          latitude: -14.19396,
          rpm: 45,
          speed: 13.45,
          sequence_id: 1
        },
        {
          suggested_route_id: 763,
          longitude: 44.8236089,
          latitude: 41.2404491,
          rpm: 574,
          speed: 20.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 764,
          longitude: 17.3168102,
          latitude: 48.9010174,
          rpm: 537,
          speed: 13.09,
          sequence_id: 1
        },
        {
          suggested_route_id: 765,
          longitude: 23.0524409,
          latitude: 66.2185015,
          rpm: 957,
          speed: 4.58,
          sequence_id: 1
        },
        {
          suggested_route_id: 766,
          longitude: 120.4415242,
          latitude: -8.2922696,
          rpm: 1200,
          speed: 19.2,
          sequence_id: 1
        },
        {
          suggested_route_id: 766,
          longitude: 45.9860099,
          latitude: 43.2496743,
          rpm: 483,
          speed: 26.43,
          sequence_id: 2
        },
        {
          suggested_route_id: 766,
          longitude: 20.8799274,
          latitude: 52.1675198,
          rpm: 423,
          speed: 27.9,
          sequence_id: 3
        },
        {
          suggested_route_id: 767,
          longitude: 71.236153,
          latitude: 41.005341,
          rpm: 821,
          speed: 25.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 767,
          longitude: -95.9673967,
          latitude: 41.2418116,
          rpm: 1165,
          speed: 1.15,
          sequence_id: 2
        },
        {
          suggested_route_id: 768,
          longitude: 115.9467997,
          latitude: -3.0029841,
          rpm: 251,
          speed: 5.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 771,
          longitude: 15.1025075,
          latitude: 32.3196827,
          rpm: 284,
          speed: 27.79,
          sequence_id: 1
        },
        {
          suggested_route_id: 772,
          longitude: 110.3426018,
          latitude: 1.4871144,
          rpm: 510,
          speed: 23.88,
          sequence_id: 1
        },
        {
          suggested_route_id: 772,
          longitude: 113.007156,
          latitude: -7.8028722,
          rpm: 928,
          speed: 9.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 772,
          longitude: 13.1611762,
          latitude: 58.5033171,
          rpm: 295,
          speed: 18.18,
          sequence_id: 3
        },
        {
          suggested_route_id: 772,
          longitude: 21.58589,
          latitude: 17.193029,
          rpm: 613,
          speed: 27.74,
          sequence_id: 4
        },
        {
          suggested_route_id: 773,
          longitude: 15.2359979,
          latitude: 46.1542793,
          rpm: 568,
          speed: 6.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 773,
          longitude: 44.108411,
          latitude: 41.9854144,
          rpm: 46,
          speed: 14.99,
          sequence_id: 2
        },
        {
          suggested_route_id: 774,
          longitude: -71.638725,
          latitude: -40.7632504,
          rpm: 664,
          speed: 27.54,
          sequence_id: 1
        },
        {
          suggested_route_id: 775,
          longitude: 35.2154784,
          latitude: 52.2183563,
          rpm: 301,
          speed: 1.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 778,
          longitude: 11.9203062,
          latitude: 58.3619916,
          rpm: 569,
          speed: 10.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 779,
          longitude: 103.364905,
          latitude: 23.396201,
          rpm: 759,
          speed: 17.61,
          sequence_id: 1
        },
        {
          suggested_route_id: 779,
          longitude: -13.0645021,
          latitude: 8.3266095,
          rpm: 319,
          speed: 6.31,
          sequence_id: 2
        },
        {
          suggested_route_id: 780,
          longitude: 118.776895,
          latitude: 26.108775,
          rpm: 1115,
          speed: 6.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 780,
          longitude: 18.0684457,
          latitude: 59.4291534,
          rpm: 1158,
          speed: 6.8,
          sequence_id: 2
        },
        {
          suggested_route_id: 781,
          longitude: 16.6108335,
          latitude: 59.9191985,
          rpm: 372,
          speed: 25.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 781,
          longitude: 103.7839552,
          latitude: 1.4888401,
          rpm: 962,
          speed: 18.69,
          sequence_id: 2
        },
        {
          suggested_route_id: 782,
          longitude: 14.5678141,
          latitude: 59.3453304,
          rpm: 846,
          speed: 13.04,
          sequence_id: 1
        },
        {
          suggested_route_id: 782,
          longitude: -60.6298078,
          latitude: -32.9979844,
          rpm: 1155,
          speed: 21.69,
          sequence_id: 2
        },
        {
          suggested_route_id: 783,
          longitude: -87.940833,
          latitude: 14.6060279,
          rpm: 824,
          speed: 4.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 785,
          longitude: 126.4510829,
          latitude: 44.441584,
          rpm: 441,
          speed: 20.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 785,
          longitude: 50.3248312,
          latitude: 53.3791711,
          rpm: 1152,
          speed: 1.87,
          sequence_id: 2
        },
        {
          suggested_route_id: 786,
          longitude: -40.2897153,
          latitude: -20.3321939,
          rpm: 151,
          speed: 16.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 787,
          longitude: -8.5959634,
          latitude: 40.8024339,
          rpm: 639,
          speed: 16.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 788,
          longitude: 110.1209019,
          latitude: -7.3677628,
          rpm: 1060,
          speed: 7.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 788,
          longitude: 9.2480728,
          latitude: 8.9494875,
          rpm: 421,
          speed: 5.2,
          sequence_id: 2
        },
        {
          suggested_route_id: 791,
          longitude: 37.626119,
          latitude: 55.813957,
          rpm: 84,
          speed: 18.6,
          sequence_id: 1
        },
        {
          suggested_route_id: 793,
          longitude: 7.8374651,
          latitude: 48.0044582,
          rpm: 259,
          speed: 4.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 794,
          longitude: 22.051777,
          latitude: 51.4090959,
          rpm: 441,
          speed: 11.69,
          sequence_id: 1
        },
        {
          suggested_route_id: 796,
          longitude: 118.3410867,
          latitude: 34.9520642,
          rpm: 1056,
          speed: 7.62,
          sequence_id: 1
        },
        {
          suggested_route_id: 797,
          longitude: 114.36947,
          latitude: 29.932442,
          rpm: 29,
          speed: 12.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 797,
          longitude: 25.8906212,
          latitude: -24.4770763,
          rpm: 646,
          speed: 23.97,
          sequence_id: 2
        },
        {
          suggested_route_id: 797,
          longitude: 99.330641,
          latitude: 23.201636,
          rpm: 657,
          speed: 27.91,
          sequence_id: 3
        },
        {
          suggested_route_id: 799,
          longitude: 47.3266162,
          latitude: -19.6513424,
          rpm: 770,
          speed: 14.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 799,
          longitude: 116.354462,
          latitude: -8.283558,
          rpm: 1190,
          speed: 13.18,
          sequence_id: 2
        },
        {
          suggested_route_id: 799,
          longitude: -77.7165925,
          latitude: 0.8150687,
          rpm: 730,
          speed: 9.81,
          sequence_id: 3
        },
        {
          suggested_route_id: 799,
          longitude: -58.4160621,
          latitude: -34.5838708,
          rpm: 1080,
          speed: 19.69,
          sequence_id: 4
        },
        {
          suggested_route_id: 800,
          longitude: 27.8338499,
          latitude: 54.4225141,
          rpm: 301,
          speed: 27.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 800,
          longitude: 10.850791,
          latitude: 33.8787981,
          rpm: 396,
          speed: 10.26,
          sequence_id: 2
        },
        {
          suggested_route_id: 800,
          longitude: -62.215738,
          latitude: 16.706523,
          rpm: 200,
          speed: 25.61,
          sequence_id: 3
        },
        {
          suggested_route_id: 801,
          longitude: 117.6852235,
          latitude: 39.0063718,
          rpm: 874,
          speed: 20.3,
          sequence_id: 1
        },
        {
          suggested_route_id: 801,
          longitude: 124.9206233,
          latitude: 10.3826093,
          rpm: 1099,
          speed: 22.06,
          sequence_id: 2
        },
        {
          suggested_route_id: 803,
          longitude: 12.5504728,
          latitude: 55.6649287,
          rpm: 462,
          speed: 26.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 806,
          longitude: 41.9106435,
          latitude: 43.8231125,
          rpm: 1195,
          speed: 18.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 807,
          longitude: 114.603098,
          latitude: 31.273176,
          rpm: 1006,
          speed: 4.33,
          sequence_id: 1
        },
        {
          suggested_route_id: 808,
          longitude: 69.1134149,
          latitude: 34.5278415,
          rpm: 481,
          speed: 0.38,
          sequence_id: 1
        },
        {
          suggested_route_id: 808,
          longitude: 2.2936854,
          latitude: 48.8904258,
          rpm: 749,
          speed: 4.03,
          sequence_id: 2
        },
        {
          suggested_route_id: 809,
          longitude: 126.11386,
          latitude: 46.689671,
          rpm: 348,
          speed: 14.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 812,
          longitude: 2.3071289,
          latitude: 48.7579712,
          rpm: 459,
          speed: 7.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 813,
          longitude: -88.3494328,
          latitude: 13.5570718,
          rpm: 717,
          speed: 10.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 814,
          longitude: 50.5006231,
          latitude: 26.0696179,
          rpm: 135,
          speed: 7.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 814,
          longitude: 109.840313,
          latitude: 40.657978,
          rpm: 265,
          speed: 24.42,
          sequence_id: 2
        },
        {
          suggested_route_id: 814,
          longitude: -2.7795629,
          latitude: 55.612118,
          rpm: 649,
          speed: 15.57,
          sequence_id: 3
        },
        {
          suggested_route_id: 816,
          longitude: 114.282194,
          latitude: 30.645019,
          rpm: 984,
          speed: 6.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 817,
          longitude: -75.431596,
          latitude: 6.027632,
          rpm: 990,
          speed: 10.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 817,
          longitude: 19.1068043,
          latitude: 47.5735211,
          rpm: 518,
          speed: 7.64,
          sequence_id: 2
        },
        {
          suggested_route_id: 818,
          longitude: 109.277378,
          latitude: 18.50831,
          rpm: 262,
          speed: 12.34,
          sequence_id: 1
        },
        {
          suggested_route_id: 819,
          longitude: 130.3112926,
          latitude: 31.416598,
          rpm: 1173,
          speed: 20.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 819,
          longitude: 118.609289,
          latitude: 24.804061,
          rpm: 158,
          speed: 23.95,
          sequence_id: 2
        },
        {
          suggested_route_id: 819,
          longitude: 112.4172256,
          latitude: -7.617735,
          rpm: 732,
          speed: 26.98,
          sequence_id: 3
        },
        {
          suggested_route_id: 821,
          longitude: -77.49498,
          latitude: 1.5156,
          rpm: 897,
          speed: 2.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 822,
          longitude: -6.5890166,
          latitude: 5.7866228,
          rpm: 631,
          speed: 5.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 823,
          longitude: 111.516667,
          latitude: -2.583333,
          rpm: 311,
          speed: 8.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 824,
          longitude: 123.5982956,
          latitude: 13.0730815,
          rpm: 73,
          speed: 1.25,
          sequence_id: 1
        },
        {
          suggested_route_id: 826,
          longitude: -49.0801588,
          latitude: -25.3631459,
          rpm: 582,
          speed: 27.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 828,
          longitude: 43.8464971,
          latitude: 40.7929026,
          rpm: 103,
          speed: 27.49,
          sequence_id: 1
        },
        {
          suggested_route_id: 830,
          longitude: "120.43333",
          latitude: "17.18333",
          rpm: 903,
          speed: 22.97,
          sequence_id: 1
        },
        {
          suggested_route_id: 831,
          longitude: "18.4033",
          latitude: "49.94912",
          rpm: 164,
          speed: 17.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 831,
          longitude: 27.6290067,
          latitude: 53.7852624,
          rpm: 957,
          speed: 22.87,
          sequence_id: 2
        },
        {
          suggested_route_id: 834,
          longitude: 108.320121,
          latitude: 34.954134,
          rpm: 330,
          speed: 2.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 834,
          longitude: -7.5586322,
          latitude: 41.2426773,
          rpm: 1111,
          speed: 15.85,
          sequence_id: 2
        },
        {
          suggested_route_id: 836,
          longitude: -87.1672193,
          latitude: 12.6583137,
          rpm: 457,
          speed: 21.9,
          sequence_id: 1
        },
        {
          suggested_route_id: 836,
          longitude: 17.5857567,
          latitude: 49.5271178,
          rpm: 1117,
          speed: 6.05,
          sequence_id: 2
        },
        {
          suggested_route_id: 837,
          longitude: 108.8076195,
          latitude: 23.7247599,
          rpm: 938,
          speed: 17.04,
          sequence_id: 1
        },
        {
          suggested_route_id: 839,
          longitude: 108.7630664,
          latitude: -7.5904342,
          rpm: 1128,
          speed: 25.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 841,
          longitude: 30.6795112,
          latitude: 59.943775,
          rpm: 251,
          speed: 19.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 841,
          longitude: 113.618216,
          latitude: 22.919769,
          rpm: 795,
          speed: 7.09,
          sequence_id: 2
        },
        {
          suggested_route_id: 842,
          longitude: 17.7805434,
          latitude: 51.8971298,
          rpm: 147,
          speed: 5.06,
          sequence_id: 1
        },
        {
          suggested_route_id: 842,
          longitude: 148.1452805,
          latitude: 62.7810616,
          rpm: 144,
          speed: 4.8,
          sequence_id: 2
        },
        {
          suggested_route_id: 843,
          longitude: 108.0997955,
          latitude: -7.3171858,
          rpm: 1014,
          speed: 27.73,
          sequence_id: 1
        },
        {
          suggested_route_id: 845,
          longitude: -7.4270584,
          latitude: 40.9416517,
          rpm: 1062,
          speed: 13.77,
          sequence_id: 1
        },
        {
          suggested_route_id: 846,
          longitude: 17.6271867,
          latitude: 59.8621021,
          rpm: 1072,
          speed: 21.51,
          sequence_id: 1
        },
        {
          suggested_route_id: 847,
          longitude: 150.8301413,
          latitude: 59.5611525,
          rpm: 80,
          speed: 22.98,
          sequence_id: 1
        },
        {
          suggested_route_id: 849,
          longitude: 1.9038837,
          latitude: 43.0429124,
          rpm: 645,
          speed: 14.94,
          sequence_id: 1
        },
        {
          suggested_route_id: 849,
          longitude: -56.5196111,
          latitude: -24.8096387,
          rpm: 296,
          speed: 21.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 850,
          longitude: -77.069999,
          latitude: -12.0904353,
          rpm: 472,
          speed: 13.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 850,
          longitude: 92.0974076,
          latitude: 21.3106467,
          rpm: 993,
          speed: 16.81,
          sequence_id: 2
        },
        {
          suggested_route_id: 850,
          longitude: 65.3208664,
          latitude: 55.4420395,
          rpm: 632,
          speed: 24.29,
          sequence_id: 3
        },
        {
          suggested_route_id: 851,
          longitude: 113.433712,
          latitude: 27.868393,
          rpm: 177,
          speed: 3.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 853,
          longitude: 1.845782,
          latitude: 48.958607,
          rpm: 818,
          speed: 17.34,
          sequence_id: 1
        },
        {
          suggested_route_id: 854,
          longitude: 107.9833112,
          latitude: -7.1684722,
          rpm: 823,
          speed: 4.76,
          sequence_id: 1
        },
        {
          suggested_route_id: 854,
          longitude: -84.5050878,
          latitude: 42.7415586,
          rpm: 645,
          speed: 1.54,
          sequence_id: 2
        },
        {
          suggested_route_id: 855,
          longitude: 108.5329338,
          latitude: -6.7191062,
          rpm: 1188,
          speed: 16.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 856,
          longitude: 121.498955,
          latitude: 31.2371338,
          rpm: 422,
          speed: 4.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 856,
          longitude: -104.9984484,
          latitude: 39.6476577,
          rpm: 710,
          speed: 11.01,
          sequence_id: 2
        },
        {
          suggested_route_id: 856,
          longitude: -56.0222113,
          latitude: -24.7406868,
          rpm: 21,
          speed: 11.68,
          sequence_id: 3
        },
        {
          suggested_route_id: 857,
          longitude: 97.6385368,
          latitude: 2.9363162,
          rpm: 243,
          speed: 12.05,
          sequence_id: 1
        },
        {
          suggested_route_id: 857,
          longitude: 122.7300639,
          latitude: 11.32082,
          rpm: 909,
          speed: 24.31,
          sequence_id: 2
        },
        {
          suggested_route_id: 859,
          longitude: 103.8042382,
          latitude: -1.0233937,
          rpm: 468,
          speed: 26.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 863,
          longitude: 100.176498,
          latitude: 26.560231,
          rpm: 319,
          speed: 2.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 864,
          longitude: 48.2219395,
          latitude: -17.5872806,
          rpm: 1157,
          speed: 17.57,
          sequence_id: 1
        },
        {
          suggested_route_id: 864,
          longitude: 22.8165095,
          latitude: 4.7378613,
          rpm: 668,
          speed: 4.22,
          sequence_id: 2
        },
        {
          suggested_route_id: 864,
          longitude: "34.43719",
          latitude: "31.45571",
          rpm: 1048,
          speed: 4.66,
          sequence_id: 3
        },
        {
          suggested_route_id: 867,
          longitude: 103.4916438,
          latitude: 16.3270679,
          rpm: 85,
          speed: 22.21,
          sequence_id: 1
        },
        {
          suggested_route_id: 867,
          longitude: 113.121435,
          latitude: 23.021478,
          rpm: 495,
          speed: 23.09,
          sequence_id: 2
        },
        {
          suggested_route_id: 868,
          longitude: -73.4049684,
          latitude: 45.5159664,
          rpm: 1192,
          speed: 21.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 870,
          longitude: 123.193,
          latitude: 13.631,
          rpm: 1136,
          speed: 27.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 870,
          longitude: 75.3150685,
          latitude: 51.725198,
          rpm: 1162,
          speed: 15.84,
          sequence_id: 2
        },
        {
          suggested_route_id: 871,
          longitude: -77.583333,
          latitude: -6.05,
          rpm: 308,
          speed: 12.75,
          sequence_id: 1
        },
        {
          suggested_route_id: 872,
          longitude: 6.8297403,
          latitude: 6.1462401,
          rpm: 137,
          speed: 20.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 872,
          longitude: 36.2020028,
          latitude: 32.341673,
          rpm: 424,
          speed: 22.99,
          sequence_id: 2
        },
        {
          suggested_route_id: 872,
          longitude: 6.4788333,
          latitude: 48.1967872,
          rpm: 1160,
          speed: 14.49,
          sequence_id: 3
        },
        {
          suggested_route_id: 875,
          longitude: 116.504048,
          latitude: 39.8007621,
          rpm: 396,
          speed: 18.55,
          sequence_id: 1
        },
        {
          suggested_route_id: 876,
          longitude: 120.92585,
          latitude: 30.830898,
          rpm: 1114,
          speed: 24.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 877,
          longitude: 14.297845,
          latitude: 50.5624395,
          rpm: 972,
          speed: 2.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 878,
          longitude: 119.576091,
          latitude: 39.930136,
          rpm: 970,
          speed: 24.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 879,
          longitude: -25.6421124,
          latitude: 37.7542627,
          rpm: 577,
          speed: 27.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 879,
          longitude: 35.6783297,
          latitude: 51.6571864,
          rpm: 812,
          speed: 14.05,
          sequence_id: 2
        },
        {
          suggested_route_id: 883,
          longitude: 110.442846,
          latitude: 35.476788,
          rpm: 1116,
          speed: 15.14,
          sequence_id: 1
        },
        {
          suggested_route_id: 884,
          longitude: 110.317826,
          latitude: 25.2527,
          rpm: 706,
          speed: 13.43,
          sequence_id: 1
        },
        {
          suggested_route_id: 885,
          longitude: -9.252733,
          latitude: 38.9374004,
          rpm: 1156,
          speed: 13.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 888,
          longitude: -8.8036223,
          latitude: 38.6099176,
          rpm: 635,
          speed: 19.44,
          sequence_id: 1
        },
        {
          suggested_route_id: 888,
          longitude: -8.7230388,
          latitude: 40.4369723,
          rpm: 723,
          speed: 26.37,
          sequence_id: 2
        },
        {
          suggested_route_id: 889,
          longitude: -84.2002101,
          latitude: 12.8207931,
          rpm: 460,
          speed: 4.96,
          sequence_id: 1
        },
        {
          suggested_route_id: 889,
          longitude: 113.191098,
          latitude: 39.554247,
          rpm: 195,
          speed: 13.81,
          sequence_id: 2
        },
        {
          suggested_route_id: 889,
          longitude: 108.4187029,
          latitude: -6.7917815,
          rpm: 552,
          speed: 16.63,
          sequence_id: 3
        },
        {
          suggested_route_id: 890,
          longitude: 117.100087,
          latitude: 39.138304,
          rpm: 944,
          speed: 23.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 890,
          longitude: 108.2970692,
          latitude: -6.3398714,
          rpm: 1049,
          speed: 25.65,
          sequence_id: 2
        },
        {
          suggested_route_id: 890,
          longitude: 45.507141,
          latitude: 14.92653,
          rpm: 939,
          speed: 2.92,
          sequence_id: 3
        },
        {
          suggested_route_id: 890,
          longitude: 65.5544515,
          latitude: 44.7735327,
          rpm: 1124,
          speed: 17.71,
          sequence_id: 4
        },
        {
          suggested_route_id: 894,
          longitude: 28.1582288,
          latitude: 56.0467533,
          rpm: 1084,
          speed: 18.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 895,
          longitude: 115.9467997,
          latitude: -3.0029841,
          rpm: 806,
          speed: 15.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 895,
          longitude: "-65.76555",
          latitude: "44.61685",
          rpm: 887,
          speed: 21.64,
          sequence_id: 2
        },
        {
          suggested_route_id: 897,
          longitude: -77.0091334,
          latitude: 38.8993417,
          rpm: 1020,
          speed: 9.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 898,
          longitude: 33.7992536,
          latitude: 1.0452874,
          rpm: 190,
          speed: 19.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 900,
          longitude: 103.48159,
          latitude: 34.646636,
          rpm: 322,
          speed: 4.18,
          sequence_id: 1
        },
        {
          suggested_route_id: 901,
          longitude: 46.0166879,
          latitude: 40.8288144,
          rpm: 125,
          speed: 9.95,
          sequence_id: 1
        },
        {
          suggested_route_id: 901,
          longitude: 121.3963702,
          latitude: 31.1707547,
          rpm: 1010,
          speed: 20.52,
          sequence_id: 2
        },
        {
          suggested_route_id: 902,
          longitude: 120.7181765,
          latitude: 17.5387106,
          rpm: 844,
          speed: 9.12,
          sequence_id: 1
        },
        {
          suggested_route_id: 905,
          longitude: "130.02554",
          latitude: "32.19537",
          rpm: 256,
          speed: 26.99,
          sequence_id: 1
        },
        {
          suggested_route_id: 906,
          longitude: 84.678548,
          latitude: 44.435508,
          rpm: 41,
          speed: 13.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 906,
          longitude: -53.2341123,
          latitude: 47.731518,
          rpm: 958,
          speed: 22.66,
          sequence_id: 2
        },
        {
          suggested_route_id: 907,
          longitude: 135.3785556,
          latitude: 34.5021072,
          rpm: 46,
          speed: 26.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 907,
          longitude: 116.414675,
          latitude: 39.63148,
          rpm: 402,
          speed: 1.5,
          sequence_id: 2
        },
        {
          suggested_route_id: 907,
          longitude: 71.5263363,
          latitude: 30.1631687,
          rpm: 576,
          speed: 19.43,
          sequence_id: 3
        },
        {
          suggested_route_id: 909,
          longitude: -6.1822287,
          latitude: 53.3788495,
          rpm: 845,
          speed: 18.91,
          sequence_id: 1
        },
        {
          suggested_route_id: 910,
          longitude: 101.4537902,
          latitude: 1.6832081,
          rpm: 438,
          speed: 8.03,
          sequence_id: 1
        },
        {
          suggested_route_id: 912,
          longitude: 86.574067,
          latitude: 42.059759,
          rpm: 1011,
          speed: 3.04,
          sequence_id: 1
        },
        {
          suggested_route_id: 913,
          longitude: 109.1434108,
          latitude: -7.4289773,
          rpm: 322,
          speed: 22.3,
          sequence_id: 1
        },
        {
          suggested_route_id: 913,
          longitude: -76.5517132,
          latitude: 39.0327543,
          rpm: 969,
          speed: 10.69,
          sequence_id: 2
        },
        {
          suggested_route_id: 915,
          longitude: 107.372829,
          latitude: 36.055016,
          rpm: 639,
          speed: 8.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 915,
          longitude: 116.3654707,
          latitude: -8.5803424,
          rpm: 829,
          speed: 9.2,
          sequence_id: 2
        },
        {
          suggested_route_id: 916,
          longitude: 38.9897424,
          latitude: 51.7256101,
          rpm: 909,
          speed: 21.11,
          sequence_id: 1
        },
        {
          suggested_route_id: 917,
          longitude: 0.129895,
          latitude: 45.638468,
          rpm: 258,
          speed: 27.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 918,
          longitude: 175.9364317,
          latitude: -37.3965056,
          rpm: 783,
          speed: 19.2,
          sequence_id: 1
        },
        {
          suggested_route_id: 919,
          longitude: 112.6407229,
          latitude: -8.1878613,
          rpm: 658,
          speed: 11.45,
          sequence_id: 1
        },
        {
          suggested_route_id: 919,
          longitude: 114.8033337,
          latitude: -3.755635,
          rpm: 1112,
          speed: 13.73,
          sequence_id: 2
        },
        {
          suggested_route_id: 919,
          longitude: 17.6472644,
          latitude: 59.8537227,
          rpm: 736,
          speed: 12.49,
          sequence_id: 3
        },
        {
          suggested_route_id: 919,
          longitude: 66.4550896,
          latitude: 66.6441543,
          rpm: 1173,
          speed: 9.83,
          sequence_id: 4
        },
        {
          suggested_route_id: 919,
          longitude: 122.564262,
          latitude: 14.273035,
          rpm: 403,
          speed: 10.7,
          sequence_id: 5
        },
        {
          suggested_route_id: 922,
          longitude: 109.3277605,
          latitude: -6.944036,
          rpm: 793,
          speed: 13.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 922,
          longitude: 20.9089378,
          latitude: 38.6218706,
          rpm: 71,
          speed: 21.51,
          sequence_id: 2
        },
        {
          suggested_route_id: 924,
          longitude: 116.63704,
          latitude: 27.569678,
          rpm: 465,
          speed: 8.17,
          sequence_id: 1
        },
        {
          suggested_route_id: 925,
          longitude: 50.3334447,
          latitude: 40.4746848,
          rpm: 575,
          speed: 17.74,
          sequence_id: 1
        },
        {
          suggested_route_id: 926,
          longitude: 19.8841425,
          latitude: 53.132085,
          rpm: 165,
          speed: 2.81,
          sequence_id: 1
        },
        {
          suggested_route_id: 929,
          longitude: -49.718244,
          latitude: -25.7691769,
          rpm: 504,
          speed: 18.13,
          sequence_id: 1
        },
        {
          suggested_route_id: 932,
          longitude: -0.3696612,
          latitude: 43.2916776,
          rpm: 90,
          speed: 22.52,
          sequence_id: 1
        },
        {
          suggested_route_id: 933,
          longitude: -72.4169377,
          latitude: 18.7338573,
          rpm: 567,
          speed: 2.56,
          sequence_id: 1
        },
        {
          suggested_route_id: 934,
          longitude: 127.9898825,
          latitude: 38.1100701,
          rpm: 557,
          speed: 26.41,
          sequence_id: 1
        },
        {
          suggested_route_id: 935,
          longitude: 90.5,
          latitude: 40.5,
          rpm: 1048,
          speed: 3.53,
          sequence_id: 1
        },
        {
          suggested_route_id: 936,
          longitude: 28.6801952,
          latitude: 47.0739574,
          rpm: 71,
          speed: 1.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 937,
          longitude: 121.108226,
          latitude: 14.6701,
          rpm: 95,
          speed: 18.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 938,
          longitude: 112.7405377,
          latitude: -7.3765948,
          rpm: 916,
          speed: 12.16,
          sequence_id: 1
        },
        {
          suggested_route_id: 938,
          longitude: -1.1371011,
          latitude: 37.9868856,
          rpm: 187,
          speed: 11.37,
          sequence_id: 2
        },
        {
          suggested_route_id: 939,
          longitude: -86.2183907,
          latitude: 11.8554828,
          rpm: 786,
          speed: 0.29,
          sequence_id: 1
        },
        {
          suggested_route_id: 943,
          longitude: 14.8591964,
          latitude: 56.2960315,
          rpm: 771,
          speed: 22.64,
          sequence_id: 1
        },
        {
          suggested_route_id: 943,
          longitude: 100.6838889,
          latitude: -0.9761111,
          rpm: 367,
          speed: 13.74,
          sequence_id: 2
        },
        {
          suggested_route_id: 944,
          longitude: 102.801062,
          latitude: 35.87616,
          rpm: 304,
          speed: 24.47,
          sequence_id: 1
        },
        {
          suggested_route_id: 945,
          longitude: 71.6445305,
          latitude: 29.531734,
          rpm: 171,
          speed: 7.15,
          sequence_id: 1
        },
        {
          suggested_route_id: 946,
          longitude: 11.4774849,
          latitude: 63.9994475,
          rpm: 225,
          speed: 13.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 946,
          longitude: 21.2897784,
          latitude: 52.3618688,
          rpm: 1151,
          speed: 3.56,
          sequence_id: 2
        },
        {
          suggested_route_id: 947,
          longitude: "43.54444",
          latitude: "14.98808",
          rpm: 746,
          speed: 15.37,
          sequence_id: 1
        },
        {
          suggested_route_id: 947,
          longitude: 40.6134152,
          latitude: 55.4563422,
          rpm: 732,
          speed: 17.07,
          sequence_id: 2
        },
        {
          suggested_route_id: 948,
          longitude: 42.3295742,
          latitude: 56.5288032,
          rpm: 530,
          speed: 25.63,
          sequence_id: 1
        },
        {
          suggested_route_id: 948,
          longitude: 106.9723202,
          latitude: -6.2185725,
          rpm: 268,
          speed: 22.78,
          sequence_id: 2
        },
        {
          suggested_route_id: 948,
          longitude: 13.0587651,
          latitude: 56.5006765,
          rpm: 470,
          speed: 22.26,
          sequence_id: 3
        },
        {
          suggested_route_id: 949,
          longitude: 37.2504677,
          latitude: 55.7387411,
          rpm: 95,
          speed: 21.19,
          sequence_id: 1
        },
        {
          suggested_route_id: 949,
          longitude: 127.6904441,
          latitude: 26.1045921,
          rpm: 966,
          speed: 9.19,
          sequence_id: 2
        },
        {
          suggested_route_id: 953,
          longitude: -115.3133908,
          latitude: 36.0457187,
          rpm: 628,
          speed: 1.92,
          sequence_id: 1
        },
        {
          suggested_route_id: 955,
          longitude: 39.2827032,
          latitude: -6.8316639,
          rpm: 614,
          speed: 18.23,
          sequence_id: 1
        },
        {
          suggested_route_id: 955,
          longitude: 37.4219388,
          latitude: 55.8024235,
          rpm: 962,
          speed: 11.59,
          sequence_id: 2
        },
        {
          suggested_route_id: 957,
          longitude: 73.3030715,
          latitude: 40.767421,
          rpm: 517,
          speed: 6.27,
          sequence_id: 1
        },
        {
          suggested_route_id: 958,
          longitude: -9.2928406,
          latitude: 38.9188879,
          rpm: 651,
          speed: 21.39,
          sequence_id: 1
        },
        {
          suggested_route_id: 959,
          longitude: -77.0445279,
          latitude: -12.1140973,
          rpm: 597,
          speed: 22.87,
          sequence_id: 1
        },
        {
          suggested_route_id: 960,
          longitude: 17.0286982,
          latitude: 48.858575,
          rpm: 644,
          speed: 23.85,
          sequence_id: 1
        },
        {
          suggested_route_id: 962,
          longitude: 61.6905815,
          latitude: 57.3579277,
          rpm: 390,
          speed: 4.69,
          sequence_id: 1
        },
        {
          suggested_route_id: 963,
          longitude: 27.587737,
          latitude: -27.2290951,
          rpm: 1142,
          speed: 16.07,
          sequence_id: 1
        },
        {
          suggested_route_id: 963,
          longitude: 19.2750867,
          latitude: 50.6230724,
          rpm: 40,
          speed: 25.33,
          sequence_id: 2
        },
        {
          suggested_route_id: 967,
          longitude: 17.3725325,
          latitude: 49.0936632,
          rpm: 33,
          speed: 2.36,
          sequence_id: 1
        },
        {
          suggested_route_id: 967,
          longitude: 30.4372882,
          latitude: 46.2519995,
          rpm: 838,
          speed: 23.51,
          sequence_id: 2
        },
        {
          suggested_route_id: 973,
          longitude: 15.4780804,
          latitude: 50.0349276,
          rpm: 54,
          speed: 19.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 974,
          longitude: -90.9199977,
          latitude: 14.7567271,
          rpm: 489,
          speed: 20.28,
          sequence_id: 1
        },
        {
          suggested_route_id: 975,
          longitude: 17.6961852,
          latitude: 48.9000154,
          rpm: 125,
          speed: 19.1,
          sequence_id: 1
        },
        {
          suggested_route_id: 975,
          longitude: -79.2366566,
          latitude: 22.3287394,
          rpm: 398,
          speed: 16.91,
          sequence_id: 2
        },
        {
          suggested_route_id: 976,
          longitude: 100.5633676,
          latitude: 13.6532561,
          rpm: 1081,
          speed: 19.5,
          sequence_id: 1
        },
        {
          suggested_route_id: 976,
          longitude: 17.1732655,
          latitude: 49.325426,
          rpm: 541,
          speed: 27.18,
          sequence_id: 2
        },
        {
          suggested_route_id: 977,
          longitude: 140.2344463,
          latitude: 37.3329941,
          rpm: 480,
          speed: 1.65,
          sequence_id: 1
        },
        {
          suggested_route_id: 977,
          longitude: 25.2760017,
          latitude: 54.6879925,
          rpm: 348,
          speed: 4.45,
          sequence_id: 2
        },
        {
          suggested_route_id: 980,
          longitude: 6.0839611,
          latitude: 49.9386129,
          rpm: 579,
          speed: 15.26,
          sequence_id: 1
        },
        {
          suggested_route_id: 982,
          longitude: 110.778411,
          latitude: 21.441808,
          rpm: 166,
          speed: 20.71,
          sequence_id: 1
        },
        {
          suggested_route_id: 982,
          longitude: 104.1466046,
          latitude: 14.6417626,
          rpm: 146,
          speed: 0.49,
          sequence_id: 2
        },
        {
          suggested_route_id: 984,
          longitude: 122.207215,
          latitude: 29.985295,
          rpm: 210,
          speed: 6.24,
          sequence_id: 1
        },
        {
          suggested_route_id: 985,
          longitude: -4.1927331,
          latitude: 47.9103088,
          rpm: 222,
          speed: 20.8,
          sequence_id: 1
        },
        {
          suggested_route_id: 986,
          longitude: 123.3810275,
          latitude: 13.3656061,
          rpm: 204,
          speed: 25.48,
          sequence_id: 1
        },
        {
          suggested_route_id: 989,
          longitude: 20.4515916,
          latitude: 52.0592063,
          rpm: 1072,
          speed: 19.72,
          sequence_id: 1
        },
        {
          suggested_route_id: 989,
          longitude: 21.2008216,
          latitude: 44.24984,
          rpm: 530,
          speed: 23.12,
          sequence_id: 2
        },
        {
          suggested_route_id: 989,
          longitude: "70.79064",
          latitude: "36.5222",
          rpm: 270,
          speed: 16.82,
          sequence_id: 3
        },
        {
          suggested_route_id: 990,
          longitude: -8.971304,
          latitude: 38.651124,
          rpm: 235,
          speed: 2.32,
          sequence_id: 1
        },
        {
          suggested_route_id: 990,
          longitude: -12.7853522,
          latitude: 8.7686886,
          rpm: 716,
          speed: 8.06,
          sequence_id: 2
        }
      ]);
    });
};
