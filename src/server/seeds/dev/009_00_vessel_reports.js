exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("vessel_reports")
    .del()
    .then(function() {
      return knex.raw(
        "ALTER TABLE " + "vessel_reports" + " AUTO_INCREMENT = 1"
      );
    })
    .then(function() {
      // Inserts seed entries
      return knex("vessel_reports").insert([
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 172.72,
          hfo_consumption: 160.84,
          lsfo_consumption: 2383.28
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 182.47,
          hfo_consumption: 289.75,
          lsfo_consumption: 2561.45
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 273.67,
          hfo_consumption: 135.07,
          lsfo_consumption: 2649.04
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 224.25,
          hfo_consumption: 298.06,
          lsfo_consumption: 2480.17
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 154.34,
          hfo_consumption: 282.51,
          lsfo_consumption: 2399.82
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 103.06,
          hfo_consumption: 298.06,
          lsfo_consumption: 2308.08
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 214.98,
          hfo_consumption: 232.08,
          lsfo_consumption: 2226.98
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 240.75,
          hfo_consumption: 246.58,
          lsfo_consumption: 2090.28
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 177.58,
          hfo_consumption: 103.42,
          lsfo_consumption: 2546.98
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 53.45354,
          longitude: 89.34231,
          current_speed: 293.33,
          hfo_consumption: 257.45,
          lsfo_consumption: 2934.17
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 14.2277451,
          longitude: 99.89042,
          current_speed: 11.3,
          hfo_consumption: 3305.41,
          lsfo_consumption: 7923.71,
          created_at: "2019-11-15 03:18:20"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 24.9372186,
          longitude: 118.6422409,
          current_speed: 9.5,
          hfo_consumption: 5265.19,
          lsfo_consumption: 834.16,
          created_at: "2020-01-30 07:09:30"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 9.74084,
          longitude: -75.519872,
          current_speed: 7.6,
          hfo_consumption: 776.28,
          lsfo_consumption: 1832.14,
          created_at: "2019-11-17 07:23:59"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 18.2464685,
          longitude: 42.5117238,
          current_speed: 26.1,
          hfo_consumption: 2605.39,
          lsfo_consumption: 2055.32,
          created_at: "2019-11-14 02:33:55"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 33.5590518,
          longitude: 71.4915293,
          current_speed: 17.3,
          hfo_consumption: 3915.04,
          lsfo_consumption: 6582.37,
          created_at: "2019-11-26 20:17:08"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 34.6372754,
          longitude: 134.0105824,
          current_speed: 13.7,
          hfo_consumption: 6162.25,
          lsfo_consumption: 2477.17,
          created_at: "2020-02-06 07:48:10"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: -19.468531,
          longitude: 29.8120795,
          current_speed: 7.7,
          hfo_consumption: 1303.75,
          lsfo_consumption: 512.5,
          created_at: "2020-02-10 18:48:46"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 40.8193554,
          longitude: 22.3558989,
          current_speed: 20.7,
          hfo_consumption: 2755.29,
          lsfo_consumption: 5940.3,
          created_at: "2020-01-09 15:38:22"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 57.6602926,
          longitude: 59.656685,
          current_speed: 27.5,
          hfo_consumption: 5114.65,
          lsfo_consumption: 5442.91,
          created_at: "2020-01-15 15:43:02"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 31.558356,
          longitude: 106.005046,
          current_speed: 4.5,
          hfo_consumption: 9276.52,
          lsfo_consumption: 3582.25,
          created_at: "2019-12-02 19:14:40"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 44.956561,
          longitude: 39.5853276,
          current_speed: 2.3,
          hfo_consumption: 1658.25,
          lsfo_consumption: 5397.74,
          created_at: "2019-12-12 15:37:49"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 50.9077,
          longitude: 34.7981,
          current_speed: 4.4,
          hfo_consumption: 5993.31,
          lsfo_consumption: 7612.38,
          created_at: "2020-01-05 14:02:08"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 25.6279123,
          longitude: 88.6331758,
          current_speed: 0.7,
          hfo_consumption: 4017.93,
          lsfo_consumption: 1838.95,
          created_at: "2020-01-20 04:27:47"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 50.8493216,
          longitude: 5.7114171,
          current_speed: 0.6,
          hfo_consumption: 7989.79,
          lsfo_consumption: 1612.3,
          created_at: "2019-11-23 12:12:19"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 30.720497,
          longitude: 120.26727,
          current_speed: 29.5,
          hfo_consumption: 2351.13,
          lsfo_consumption: 1327.01,
          created_at: "2019-11-13 22:17:25"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 48.5239429,
          longitude: 37.7075811,
          current_speed: 18.1,
          hfo_consumption: 9146.76,
          lsfo_consumption: 4610.64,
          created_at: "2019-12-16 15:06:36"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: -6.983333,
          longitude: -76.366667,
          current_speed: 21.8,
          hfo_consumption: 8248.53,
          lsfo_consumption: 8019.12,
          created_at: "2019-12-19 21:00:13"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 9.943182,
          longitude: -84.145885,
          current_speed: 28.5,
          hfo_consumption: 4495.23,
          lsfo_consumption: 8394.48,
          created_at: "2020-02-02 11:07:48"
        },

        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 35.5138298,
          longitude: 24.0180367,
          current_speed: 1.1,
          hfo_consumption: 2504.65,
          lsfo_consumption: 1262.58,
          created_at: "2020-01-24 13:04:38"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 31.067673,
          longitude: 121.567646,
          current_speed: 14.2,
          hfo_consumption: 8238.04,
          lsfo_consumption: 771.4,
          created_at: "2020-01-06 10:13:01"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: "46.73336",
          longitude: "-72.56581",
          current_speed: 29.2,
          hfo_consumption: 9885.58,
          lsfo_consumption: 5168.69,
          created_at: "2019-11-03 14:18:44"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -23.668163,
          longitude: -46.4617086,
          current_speed: 11.9,
          hfo_consumption: 1792.05,
          lsfo_consumption: 7836.59,
          created_at: "2019-10-09 03:00:07"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 42.0291575,
          longitude: -8.3299947,
          current_speed: 2.0,
          hfo_consumption: 5659.9,
          lsfo_consumption: 3855.71,
          created_at: "2019-10-22 10:03:16"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: "45.40015",
          longitude: "-64.33205",
          current_speed: 26.1,
          hfo_consumption: 9930.31,
          lsfo_consumption: 8151.77,
          created_at: "2020-01-30 18:09:07"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: "33.9973",
          longitude: "99.44638",
          current_speed: 30.0,
          hfo_consumption: 3871.5,
          lsfo_consumption: 4119.57,
          created_at: "2020-02-04 21:14:44"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -7.9211147,
          longitude: 111.4946618,
          current_speed: 4.6,
          hfo_consumption: 8857.18,
          lsfo_consumption: 3036.67,
          created_at: "2019-11-01 20:00:16"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 59.8863041,
          longitude: 29.9085976,
          current_speed: 22.6,
          hfo_consumption: 2803.11,
          lsfo_consumption: 9369.12,
          created_at: "2019-12-24 23:50:55"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: "-6.9236",
          longitude: "113.2611",
          current_speed: 14.1,
          hfo_consumption: 9696.74,
          lsfo_consumption: 5150.68,
          created_at: "2020-02-07 08:22:37"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 31.236833,
          longitude: 121.532286,
          current_speed: 10.7,
          hfo_consumption: 9715.46,
          lsfo_consumption: 7231.93,
          created_at: "2020-02-20 10:23:37"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -7.2752365,
          longitude: 106.9860384,
          current_speed: 8.6,
          hfo_consumption: 2607.65,
          lsfo_consumption: 940.76,
          created_at: "2020-02-14 01:23:39"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 10.2933091,
          longitude: 22.7822485,
          current_speed: 28.8,
          hfo_consumption: 2780.79,
          lsfo_consumption: 9855.6,
          created_at: "2019-11-12 17:46:48"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 30.397162,
          longitude: 120.855089,
          current_speed: 18.2,
          hfo_consumption: 8880.36,
          lsfo_consumption: 2209.94,
          created_at: "2019-12-28 23:33:06"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 21.1753431,
          longitude: 105.7308045,
          current_speed: 15.4,
          hfo_consumption: 2655.04,
          lsfo_consumption: 7989.43,
          created_at: "2019-11-28 02:12:46"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 47.0163969,
          longitude: -68.1430029,
          current_speed: 26.9,
          hfo_consumption: 7188.22,
          lsfo_consumption: 6236.45,
          created_at: "2019-11-30 07:09:00"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 57.4746374,
          longitude: 45.7930516,
          current_speed: 17.1,
          hfo_consumption: 9104.16,
          lsfo_consumption: 7933.61,
          created_at: "2019-11-15 12:05:39"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 37.2746124,
          longitude: 9.8627243,
          current_speed: 27.3,
          hfo_consumption: 1003.86,
          lsfo_consumption: 1164.71,
          created_at: "2020-01-06 18:59:05"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 38.689897,
          longitude: 115.780626,
          current_speed: 24.0,
          hfo_consumption: 5672.46,
          lsfo_consumption: 2260.67,
          created_at: "2020-03-01 14:15:05"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: -14.2908,
          longitude: -72.044647,
          current_speed: 2.6,
          hfo_consumption: 8709.67,
          lsfo_consumption: 1839.14,
          created_at: "2020-03-03 17:28:18"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 48.34016,
          longitude: 123.337533,
          current_speed: 30.5,
          hfo_consumption: 1729.55,
          lsfo_consumption: 2787.98,
          created_at: "2020-02-07 12:31:43"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 35.202503,
          longitude: 102.521807,
          current_speed: 11.1,
          hfo_consumption: 6509.9,
          lsfo_consumption: 1180.74,
          created_at: "2020-01-01 05:38:27"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 52.0646474,
          longitude: 21.4836639,
          current_speed: 9.2,
          hfo_consumption: 7945.99,
          lsfo_consumption: 3968.77,
          created_at: "2019-12-16 14:30:51"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -6.8005667,
          longitude: 111.2099808,
          current_speed: 10.0,
          hfo_consumption: 2844.24,
          lsfo_consumption: 5043.15,
          created_at: "2019-10-12 23:27:12"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 46.2961712,
          longitude: 14.8062347,
          current_speed: 13.6,
          hfo_consumption: 6472.71,
          lsfo_consumption: 1019.21,
          created_at: "2019-12-29 01:53:08"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 40.8106238,
          longitude: 69.2341133,
          current_speed: 9.2,
          hfo_consumption: 9137.81,
          lsfo_consumption: 6278.26,
          created_at: "2020-01-28 05:36:44"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: -7.3,
          longitude: 109.066667,
          current_speed: 31.2,
          hfo_consumption: 7836.37,
          lsfo_consumption: 2528.75,
          created_at: "2019-12-20 12:07:38"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 19.4052965,
          longitude: -99.1504583,
          current_speed: 0.5,
          hfo_consumption: 3866.35,
          lsfo_consumption: 9187.72,
          created_at: "2019-12-11 20:46:26"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 24.134378,
          longitude: 90.7860057,
          current_speed: 25.5,
          hfo_consumption: 8704.35,
          lsfo_consumption: 3126.98,
          created_at: "2019-10-15 16:04:43"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 43.7931514,
          longitude: 25.9257256,
          current_speed: 20.1,
          hfo_consumption: 7536.44,
          lsfo_consumption: 832.77,
          created_at: "2019-11-14 02:04:10"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 4.917531,
          longitude: -74.024773,
          current_speed: 24.4,
          hfo_consumption: 8333.25,
          lsfo_consumption: 6713.63,
          created_at: "2019-12-17 20:57:31"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -18.4001194,
          longitude: 47.8699039,
          current_speed: 25.5,
          hfo_consumption: 2221.49,
          lsfo_consumption: 5252.71,
          created_at: "2020-01-29 17:39:30"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 44.254148,
          longitude: 86.311647,
          current_speed: 11.2,
          hfo_consumption: 8576.41,
          lsfo_consumption: 2096.82,
          created_at: "2019-12-27 16:21:01"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: -6.8245964,
          longitude: 111.4544179,
          current_speed: 13.6,
          hfo_consumption: 3149.15,
          lsfo_consumption: 9827.32,
          created_at: "2020-01-28 23:28:10"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 30.070453,
          longitude: 115.944218,
          current_speed: 25.2,
          hfo_consumption: 9768.85,
          lsfo_consumption: 8709.45,
          created_at: "2020-01-09 05:41:12"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 15.3178606,
          longitude: -91.6317765,
          current_speed: 8.1,
          hfo_consumption: 4555.21,
          lsfo_consumption: 7786.25,
          created_at: "2020-01-15 18:57:32"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 56.9396428,
          longitude: 37.3590646,
          current_speed: 16.2,
          hfo_consumption: 5062.82,
          lsfo_consumption: 6299.13,
          created_at: "2019-10-15 11:02:05"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 39.886547,
          longitude: 116.989574,
          current_speed: 9.9,
          hfo_consumption: 9478.28,
          lsfo_consumption: 2441.03,
          created_at: "2019-12-28 06:02:43"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 45.506995,
          longitude: 124.292626,
          current_speed: 10.9,
          hfo_consumption: 7129.53,
          lsfo_consumption: 4610.66,
          created_at: "2019-11-18 21:29:44"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 37.136553,
          longitude: 120.878247,
          current_speed: 10.8,
          hfo_consumption: 901.57,
          lsfo_consumption: 961.3,
          created_at: "2020-02-15 13:59:41"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 23.982311,
          longitude: 116.831826,
          current_speed: 7.4,
          hfo_consumption: 5179.9,
          lsfo_consumption: 4193.48,
          created_at: "2019-11-19 06:31:50"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 37.2284208,
          longitude: 21.6360085,
          current_speed: 4.2,
          hfo_consumption: 5151.3,
          lsfo_consumption: 2982.87,
          created_at: "2020-03-02 03:01:12"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 13.0968511,
          longitude: -59.6144819,
          current_speed: 11.3,
          hfo_consumption: 4717.62,
          lsfo_consumption: 9393.1,
          created_at: "2019-10-16 17:46:34"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 57.3921266,
          longitude: 63.7602594,
          current_speed: 9.7,
          hfo_consumption: 2896.75,
          lsfo_consumption: 6736.56,
          created_at: "2019-12-30 06:12:02"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 22.635012,
          longitude: 107.904186,
          current_speed: 16.6,
          hfo_consumption: 1174.72,
          lsfo_consumption: 9513.55,
          created_at: "2019-12-12 04:16:08"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: -7.6608184,
          longitude: 111.0892601,
          current_speed: 10.0,
          hfo_consumption: 469.9,
          lsfo_consumption: 8087.68,
          created_at: "2019-11-08 06:07:07"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: -2.8800399,
          longitude: 120.1242853,
          current_speed: 25.6,
          hfo_consumption: 8641.24,
          lsfo_consumption: 7270.0,
          created_at: "2019-12-21 13:52:06"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: -6.9391309,
          longitude: 109.1259181,
          current_speed: 9.7,
          hfo_consumption: 5309.01,
          lsfo_consumption: 7613.38,
          created_at: "2019-12-05 19:27:54"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: -17.4652462,
          longitude: 49.2005539,
          current_speed: 28.0,
          hfo_consumption: 5084.99,
          lsfo_consumption: 1765.4,
          created_at: "2019-12-28 18:44:41"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 39.170826,
          longitude: 100.836184,
          current_speed: 0.8,
          hfo_consumption: 7390.48,
          lsfo_consumption: 5477.83,
          created_at: "2020-03-04 16:06:05"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 13.0553726,
          longitude: 123.3014932,
          current_speed: 7.6,
          hfo_consumption: 5850.64,
          lsfo_consumption: 6394.63,
          created_at: "2020-02-19 03:11:25"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 49.0225427,
          longitude: 17.6411818,
          current_speed: 7.3,
          hfo_consumption: 2475.29,
          lsfo_consumption: 5390.15,
          created_at: "2020-02-02 17:23:49"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: "32.90871",
          longitude: "35.63198",
          current_speed: 23.8,
          hfo_consumption: 1704.84,
          lsfo_consumption: 9284.2,
          created_at: "2020-02-29 11:07:14"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 47.4485483,
          longitude: 19.1990312,
          current_speed: 1.4,
          hfo_consumption: 1194.67,
          lsfo_consumption: 3073.33,
          created_at: "2020-02-01 11:46:08"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 41.5023719,
          longitude: -8.5818392,
          current_speed: 21.3,
          hfo_consumption: 3128.49,
          lsfo_consumption: 9690.33,
          created_at: "2019-10-17 11:34:45"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 27.570531,
          longitude: 117.652349,
          current_speed: 13.8,
          hfo_consumption: 88.95,
          lsfo_consumption: 6776.64,
          created_at: "2020-02-16 13:34:33"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 29.144064,
          longitude: 121.006595,
          current_speed: 26.9,
          hfo_consumption: 2245.79,
          lsfo_consumption: 6623.92,
          created_at: "2020-02-06 22:37:30"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 24.64995,
          longitude: 116.156645,
          current_speed: 25.7,
          hfo_consumption: 8232.27,
          lsfo_consumption: 1478.41,
          created_at: "2019-12-04 08:01:48"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: "38.46613",
          longitude: "68.80533",
          current_speed: 26.4,
          hfo_consumption: 1269.17,
          lsfo_consumption: 4623.41,
          created_at: "2020-01-14 02:06:09"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: -46.2763744,
          longitude: 168.3661011,
          current_speed: 1.5,
          hfo_consumption: 2580.7,
          lsfo_consumption: 6814.18,
          created_at: "2020-01-16 01:16:00"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 13.7191394,
          longitude: 100.2207634,
          current_speed: 9.9,
          hfo_consumption: 6192.22,
          lsfo_consumption: 4819.62,
          created_at: "2020-02-16 16:14:15"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 59.9363422,
          longitude: 10.7356301,
          current_speed: 26.7,
          hfo_consumption: 8067.28,
          lsfo_consumption: 5742.41,
          created_at: "2019-11-06 06:56:33"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 57.817445,
          longitude: 14.2716031,
          current_speed: 25.0,
          hfo_consumption: 757.36,
          lsfo_consumption: 8347.76,
          created_at: "2019-11-10 00:11:51"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: "-6.8973",
          longitude: "113.5316",
          current_speed: 1.4,
          hfo_consumption: 1677.13,
          lsfo_consumption: 7522.46,
          created_at: "2019-10-31 04:25:30"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 37.9440927,
          longitude: 139.3739616,
          current_speed: 12.3,
          hfo_consumption: 6916.29,
          lsfo_consumption: 4175.98,
          created_at: "2019-11-30 20:41:53"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -12.5909084,
          longitude: -69.1963141,
          current_speed: 17.5,
          hfo_consumption: 1909.38,
          lsfo_consumption: 8982.93,
          created_at: "2020-01-10 16:14:29"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: "11.0537",
          longitude: "124.0385",
          current_speed: 15.3,
          hfo_consumption: 6439.41,
          lsfo_consumption: 4572.67,
          created_at: "2019-12-26 20:00:27"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: -6.9520475,
          longitude: 108.4795361,
          current_speed: 10.5,
          hfo_consumption: 6353.42,
          lsfo_consumption: 2842.5,
          created_at: "2019-11-02 04:03:35"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 53.4917756,
          longitude: 29.3327582,
          current_speed: 22.1,
          hfo_consumption: 9408.38,
          lsfo_consumption: 7368.8,
          created_at: "2020-03-07 05:08:31"
        },

        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -3.7294174,
          longitude: -38.6608482,
          current_speed: 8.9,
          hfo_consumption: 8348.62,
          lsfo_consumption: 6265.9,
          created_at: "2019-11-22 16:27:55"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: -4.1956379,
          longitude: 12.6733009,
          current_speed: 30.7,
          hfo_consumption: 380.8,
          lsfo_consumption: 5005.59,
          created_at: "2019-11-18 14:32:54"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -13.608056,
          longitude: -73.343889,
          current_speed: 22.7,
          hfo_consumption: 2426.13,
          lsfo_consumption: 993.53,
          created_at: "2019-10-20 15:12:16"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 33.5068235,
          longitude: 70.6960868,
          current_speed: 3.4,
          hfo_consumption: 4650.45,
          lsfo_consumption: 2782.43,
          created_at: "2019-11-25 14:42:37"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 23.590649,
          longitude: 101.317787,
          current_speed: 22.5,
          hfo_consumption: 2258.96,
          lsfo_consumption: 5817.35,
          created_at: "2020-02-02 03:24:07"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 40.1442308,
          longitude: 45.2711048,
          current_speed: 27.7,
          hfo_consumption: 2767.37,
          lsfo_consumption: 8345.29,
          created_at: "2020-02-18 20:54:21"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 50.043163,
          longitude: 22.555595,
          current_speed: 16.2,
          hfo_consumption: 343.26,
          lsfo_consumption: 8012.51,
          created_at: "2019-10-30 12:10:35"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 41.0390875,
          longitude: -8.5746201,
          current_speed: 10.0,
          hfo_consumption: 7929.13,
          lsfo_consumption: 8988.35,
          created_at: "2019-11-12 19:23:42"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -6.98493,
          longitude: 112.47478,
          current_speed: 17.5,
          hfo_consumption: 4361.88,
          lsfo_consumption: 4808.57,
          created_at: "2020-01-30 11:19:51"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 5.8700491,
          longitude: -57.1492443,
          current_speed: 12.1,
          hfo_consumption: 5305.2,
          lsfo_consumption: 6591.69,
          created_at: "2019-10-15 16:43:55"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 36.837625,
          longitude: 112.864561,
          current_speed: 30.3,
          hfo_consumption: 1755.36,
          lsfo_consumption: 3472.27,
          created_at: "2019-10-16 20:29:45"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 37.185925,
          longitude: 122.255334,
          current_speed: 17.4,
          hfo_consumption: 132.0,
          lsfo_consumption: 703.88,
          created_at: "2020-01-06 19:51:05"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 32.874735,
          longitude: 117.531622,
          current_speed: 17.8,
          hfo_consumption: 3270.17,
          lsfo_consumption: 9791.8,
          created_at: "2019-12-10 14:50:40"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 24.745135,
          longitude: 100.824707,
          current_speed: 12.1,
          hfo_consumption: 5266.4,
          lsfo_consumption: 2014.28,
          created_at: "2019-11-04 00:22:27"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 21.6,
          hfo_consumption: 95.3,
          lsfo_consumption: 636.16,
          created_at: "2020-02-14 06:54:13"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: -8.3848454,
          longitude: 123.5560069,
          current_speed: 29.3,
          hfo_consumption: 1353.58,
          lsfo_consumption: 7396.37,
          created_at: "2019-12-03 12:37:13"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 51.3410301,
          longitude: 22.753461,
          current_speed: 26.8,
          hfo_consumption: 1210.47,
          lsfo_consumption: 6472.38,
          created_at: "2019-11-19 04:58:54"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 30.96187,
          longitude: 113.378132,
          current_speed: 14.4,
          hfo_consumption: 2218.47,
          lsfo_consumption: 2289.41,
          created_at: "2019-12-01 07:59:58"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 40.60624,
          longitude: -8.5926997,
          current_speed: 11.5,
          hfo_consumption: 7141.34,
          lsfo_consumption: 3839.78,
          created_at: "2020-02-10 11:15:33"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 25.130594,
          longitude: 109.768451,
          current_speed: 20.3,
          hfo_consumption: 6639.06,
          lsfo_consumption: 8010.43,
          created_at: "2019-11-24 01:59:23"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 52.3429156,
          longitude: 16.8799555,
          current_speed: 15.6,
          hfo_consumption: 6631.66,
          lsfo_consumption: 7844.68,
          created_at: "2020-01-30 03:19:36"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: -27.3895264,
          longitude: -55.9365393,
          current_speed: 3.0,
          hfo_consumption: 2830.54,
          lsfo_consumption: 5048.78,
          created_at: "2019-11-08 16:23:58"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: -6.517669,
          longitude: 106.6497623,
          current_speed: 1.7,
          hfo_consumption: 7747.85,
          lsfo_consumption: 3991.26,
          created_at: "2020-02-05 20:57:03"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 55.7483994,
          longitude: 37.8009297,
          current_speed: 30.2,
          hfo_consumption: 7248.08,
          lsfo_consumption: 6007.8,
          created_at: "2019-10-19 22:25:55"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 40.590023,
          longitude: 19.6440066,
          current_speed: 8.1,
          hfo_consumption: 7744.62,
          lsfo_consumption: 8400.28,
          created_at: "2020-02-02 14:05:51"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 44.1675867,
          longitude: 2.0308233,
          current_speed: 29.5,
          hfo_consumption: 6328.1,
          lsfo_consumption: 1927.93,
          created_at: "2019-11-29 13:35:54"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 40.7553689,
          longitude: -8.6455126,
          current_speed: 19.7,
          hfo_consumption: 4988.48,
          lsfo_consumption: 2797.78,
          created_at: "2020-01-23 05:15:01"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 40.174881,
          longitude: 123.52481,
          current_speed: 3.8,
          hfo_consumption: 2026.16,
          lsfo_consumption: 2490.6,
          created_at: "2020-01-13 09:38:27"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 12.9229652,
          longitude: 13.5639377,
          current_speed: 29.2,
          hfo_consumption: 8112.11,
          lsfo_consumption: 5652.58,
          created_at: "2019-10-09 08:55:15"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 11.379367,
          longitude: 7.5599321,
          current_speed: 15.9,
          hfo_consumption: 4194.87,
          lsfo_consumption: 9866.07,
          created_at: "2019-10-18 13:21:08"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 30.3645144,
          longitude: 113.4276436,
          current_speed: 6.1,
          hfo_consumption: 2578.31,
          lsfo_consumption: 9553.76,
          created_at: "2020-02-06 05:04:50"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: -17.722004,
          longitude: -48.1585601,
          current_speed: 9.0,
          hfo_consumption: 7428.24,
          lsfo_consumption: 7479.6,
          created_at: "2019-12-01 09:15:19"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 44.8205124,
          longitude: 33.6035054,
          current_speed: 18.3,
          hfo_consumption: 8835.84,
          lsfo_consumption: 3086.82,
          created_at: "2020-02-25 09:13:38"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 17.7177253,
          longitude: 102.1175404,
          current_speed: 19.4,
          hfo_consumption: 7427.6,
          lsfo_consumption: 9859.06,
          created_at: "2020-02-04 18:06:23"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 22.6281506,
          longitude: 114.1150734,
          current_speed: 0.2,
          hfo_consumption: 5101.54,
          lsfo_consumption: 6255.54,
          created_at: "2019-11-11 18:18:36"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: -12.52614,
          longitude: -76.5452105,
          current_speed: 1.7,
          hfo_consumption: 1807.07,
          lsfo_consumption: 6630.78,
          created_at: "2020-03-09 03:14:42"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: "46.0334",
          longitude: "-79.34961",
          current_speed: 12.9,
          hfo_consumption: 1465.46,
          lsfo_consumption: 7609.79,
          created_at: "2020-02-08 15:43:09"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 26.096382,
          longitude: 107.454787,
          current_speed: 16.4,
          hfo_consumption: 4204.52,
          lsfo_consumption: 1449.03,
          created_at: "2020-01-02 00:39:29"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 40.8591123,
          longitude: 19.7487502,
          current_speed: 13.9,
          hfo_consumption: 6650.28,
          lsfo_consumption: 2586.71,
          created_at: "2019-10-25 05:19:50"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -6.361128,
          longitude: 39.453159,
          current_speed: 6.2,
          hfo_consumption: 4337.65,
          lsfo_consumption: 2033.36,
          created_at: "2020-02-14 14:18:28"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 38.3089089,
          longitude: -7.7085755,
          current_speed: 11.3,
          hfo_consumption: 2872.13,
          lsfo_consumption: 7301.86,
          created_at: "2020-01-23 17:24:05"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 43.7400718,
          longitude: 7.4266436,
          current_speed: 26.2,
          hfo_consumption: 8706.12,
          lsfo_consumption: 6965.04,
          created_at: "2019-12-12 20:55:12"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: "48.13348",
          longitude: "-78.13283",
          current_speed: 5.8,
          hfo_consumption: 2092.6,
          lsfo_consumption: 5337.95,
          created_at: "2019-11-12 18:46:59"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 47.0163969,
          longitude: -68.1430029,
          current_speed: 17.5,
          hfo_consumption: 4288.12,
          lsfo_consumption: 276.0,
          created_at: "2019-11-18 07:25:37"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 54.8151488,
          longitude: 20.2520662,
          current_speed: 3.6,
          hfo_consumption: 3967.44,
          lsfo_consumption: 2251.9,
          created_at: "2020-02-20 12:23:54"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: -0.45964,
          longitude: 100.590599,
          current_speed: 5.5,
          hfo_consumption: 9853.54,
          lsfo_consumption: 9383.17,
          created_at: "2020-01-13 12:04:42"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -8.1469688,
          longitude: 112.2890705,
          current_speed: 22.6,
          hfo_consumption: 1437.23,
          lsfo_consumption: 5460.49,
          created_at: "2020-01-04 02:38:33"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -34.2965929,
          longitude: -55.9525652,
          current_speed: 5.1,
          hfo_consumption: 4869.96,
          lsfo_consumption: 3222.88,
          created_at: "2020-02-04 16:50:24"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 49.6638396,
          longitude: 6.0744284,
          current_speed: 14.4,
          hfo_consumption: 5503.59,
          lsfo_consumption: 8229.16,
          created_at: "2020-01-01 12:01:06"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: -5.8327847,
          longitude: -43.8356779,
          current_speed: 15.0,
          hfo_consumption: 5350.43,
          lsfo_consumption: 3081.35,
          created_at: "2019-12-25 02:47:44"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 40.104785,
          longitude: 117.116756,
          current_speed: 16.8,
          hfo_consumption: 5558.33,
          lsfo_consumption: 8108.23,
          created_at: "2020-01-23 00:59:56"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 28.39571,
          longitude: 107.752611,
          current_speed: 17.6,
          hfo_consumption: 335.42,
          lsfo_consumption: 3825.36,
          created_at: "2020-01-20 21:00:24"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 30.3276652,
          longitude: -81.6631259,
          current_speed: 30.3,
          hfo_consumption: 6627.51,
          lsfo_consumption: 5326.45,
          created_at: "2019-10-23 18:28:32"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 31.628871,
          longitude: 65.7371749,
          current_speed: 6.2,
          hfo_consumption: 482.03,
          lsfo_consumption: 5521.98,
          created_at: "2020-01-18 18:14:13"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 52.5999819,
          longitude: 39.5170628,
          current_speed: 23.7,
          hfo_consumption: 5876.94,
          lsfo_consumption: 7420.72,
          created_at: "2019-12-17 05:08:49"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 36.71041,
          longitude: 99.763005,
          current_speed: 8.2,
          hfo_consumption: 8401.56,
          lsfo_consumption: 5765.56,
          created_at: "2019-10-13 19:56:48"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: "-8.1081",
          longitude: "113.7993",
          current_speed: 21.8,
          hfo_consumption: 3914.64,
          lsfo_consumption: 693.14,
          created_at: "2019-12-01 14:12:54"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 19.3624962,
          longitude: -96.6565439,
          current_speed: 7.9,
          hfo_consumption: 1180.69,
          lsfo_consumption: 5234.52,
          created_at: "2020-01-03 20:14:23"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 51.811764,
          longitude: 18.7885677,
          current_speed: 31.2,
          hfo_consumption: 3967.94,
          lsfo_consumption: 6438.12,
          created_at: "2019-10-08 04:59:42"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 28.13593,
          longitude: 121.231805,
          current_speed: 15.6,
          hfo_consumption: 4182.03,
          lsfo_consumption: 507.69,
          created_at: "2019-10-29 23:31:17"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 51.5649604,
          longitude: 32.9549585,
          current_speed: 13.7,
          hfo_consumption: 4796.99,
          lsfo_consumption: 5283.04,
          created_at: "2019-11-20 19:11:03"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 16.701895,
          longitude: 42.120984,
          current_speed: 23.4,
          hfo_consumption: 8411.7,
          lsfo_consumption: 2276.78,
          created_at: "2019-11-13 17:05:21"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: -7.643739,
          longitude: 110.284601,
          current_speed: 1.5,
          hfo_consumption: 1869.4,
          lsfo_consumption: 5211.55,
          created_at: "2020-01-14 07:56:24"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 43.1795227,
          longitude: 45.4045219,
          current_speed: 1.0,
          hfo_consumption: 7027.9,
          lsfo_consumption: 9748.01,
          created_at: "2019-12-19 08:09:14"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 47.9035673,
          longitude: 1.9638715,
          current_speed: 4.4,
          hfo_consumption: 6739.1,
          lsfo_consumption: 5574.95,
          created_at: "2020-02-03 01:22:28"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 16.2524136,
          longitude: 120.4835109,
          current_speed: 24.6,
          hfo_consumption: 2912.1,
          lsfo_consumption: 1519.76,
          created_at: "2020-02-10 06:01:19"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: -7.6608184,
          longitude: 111.0892601,
          current_speed: 22.9,
          hfo_consumption: 4787.99,
          lsfo_consumption: 8127.25,
          created_at: "2020-01-03 14:00:35"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 47.287125,
          longitude: 5.993932,
          current_speed: 1.9,
          hfo_consumption: 3491.13,
          lsfo_consumption: 5640.93,
          created_at: "2019-11-16 03:09:03"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 44.3559175,
          longitude: 41.5113076,
          current_speed: 25.8,
          hfo_consumption: 2.11,
          lsfo_consumption: 8728.23,
          created_at: "2019-12-27 03:00:10"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -6.8447302,
          longitude: 108.2427764,
          current_speed: 1.0,
          hfo_consumption: 3849.98,
          lsfo_consumption: 5871.12,
          created_at: "2020-03-05 08:42:30"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 16.701895,
          longitude: 42.120984,
          current_speed: 7.9,
          hfo_consumption: 3330.48,
          lsfo_consumption: 792.22,
          created_at: "2020-03-01 23:18:41"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -18.6517964,
          longitude: -48.1904503,
          current_speed: 10.4,
          hfo_consumption: 7103.39,
          lsfo_consumption: 6916.84,
          created_at: "2020-01-23 04:32:21"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: "10.425",
          longitude: "124.0005",
          current_speed: 27.1,
          hfo_consumption: 5352.19,
          lsfo_consumption: 5804.33,
          created_at: "2019-11-19 00:43:22"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 37.0938859,
          longitude: -7.8946433,
          current_speed: 7.0,
          hfo_consumption: 550.9,
          lsfo_consumption: 8173.41,
          created_at: "2020-02-19 20:36:23"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 67.1355975,
          longitude: 20.6859936,
          current_speed: 29.9,
          hfo_consumption: 4417.55,
          lsfo_consumption: 8997.51,
          created_at: "2020-02-02 19:25:13"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 22.654032,
          longitude: 110.18122,
          current_speed: 8.3,
          hfo_consumption: 9864.46,
          lsfo_consumption: 2237.14,
          created_at: "2019-10-12 08:38:41"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 28.555787,
          longitude: 121.244605,
          current_speed: 12.3,
          hfo_consumption: 4462.57,
          lsfo_consumption: 2763.82,
          created_at: "2020-01-24 03:12:18"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 56.0689945,
          longitude: 13.2357106,
          current_speed: 31.1,
          hfo_consumption: 4317.29,
          lsfo_consumption: 2614.68,
          created_at: "2019-11-21 06:25:40"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 50.2582813,
          longitude: 137.8012939,
          current_speed: 16.1,
          hfo_consumption: 825.52,
          lsfo_consumption: 6426.6,
          created_at: "2020-02-03 13:09:54"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -2.6729327,
          longitude: -48.2393528,
          current_speed: 12.8,
          hfo_consumption: 4636.26,
          lsfo_consumption: 6992.68,
          created_at: "2019-11-22 06:56:52"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 10.0342937,
          longitude: 126.0415372,
          current_speed: 13.9,
          hfo_consumption: 1988.47,
          lsfo_consumption: 7724.0,
          created_at: "2019-11-21 16:31:46"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: -7.2694279,
          longitude: 112.711668,
          current_speed: 24.4,
          hfo_consumption: 2999.97,
          lsfo_consumption: 9642.75,
          created_at: "2019-12-24 05:59:37"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -31.82451,
          longitude: -60.517846,
          current_speed: 22.9,
          hfo_consumption: 455.75,
          lsfo_consumption: 6692.47,
          created_at: "2020-01-17 16:34:18"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 5.042569,
          longitude: -75.514771,
          current_speed: 20.7,
          hfo_consumption: 8683.65,
          lsfo_consumption: 4420.35,
          created_at: "2019-10-19 17:16:57"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: -38.351311,
          longitude: -68.796194,
          current_speed: 3.3,
          hfo_consumption: 2344.85,
          lsfo_consumption: 9825.73,
          created_at: "2020-02-22 22:49:26"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 10.4141663,
          longitude: 8.6903172,
          current_speed: 21.8,
          hfo_consumption: 5850.2,
          lsfo_consumption: 8956.63,
          created_at: "2020-01-11 13:28:51"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 38.6491541,
          longitude: -8.949136,
          current_speed: 3.9,
          hfo_consumption: 2007.36,
          lsfo_consumption: 8005.44,
          created_at: "2020-01-04 08:33:31"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -6.9852341,
          longitude: 106.5475399,
          current_speed: 5.7,
          hfo_consumption: 5613.78,
          lsfo_consumption: 5253.07,
          created_at: "2019-12-03 21:08:22"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 43.600345,
          longitude: 121.316445,
          current_speed: 6.2,
          hfo_consumption: 783.93,
          lsfo_consumption: 3322.9,
          created_at: "2019-11-02 22:06:25"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 31.920658,
          longitude: 120.284938,
          current_speed: 7.9,
          hfo_consumption: 6872.6,
          lsfo_consumption: 260.8,
          created_at: "2019-12-05 21:55:46"
        },

        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 50.1242949,
          longitude: 19.8106779,
          current_speed: 22.2,
          hfo_consumption: 3295.68,
          lsfo_consumption: 112.33,
          created_at: "2019-12-23 22:24:35"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 51.9560413,
          longitude: 18.3741855,
          current_speed: 12.7,
          hfo_consumption: 4501.07,
          lsfo_consumption: 3614.62,
          created_at: "2019-12-12 01:54:17"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 14.609579,
          longitude: 120.993122,
          current_speed: 27.2,
          hfo_consumption: 5120.03,
          lsfo_consumption: 7735.42,
          created_at: "2019-12-20 20:51:51"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 49.7769817,
          longitude: 16.9194672,
          current_speed: 6.1,
          hfo_consumption: 9000.68,
          lsfo_consumption: 881.81,
          created_at: "2019-12-06 01:03:24"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 14.6072726,
          longitude: -90.6793295,
          current_speed: 20.6,
          hfo_consumption: 1327.48,
          lsfo_consumption: 8709.26,
          created_at: "2019-12-07 21:22:41"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 16.4826614,
          longitude: -85.8793252,
          current_speed: 1.3,
          hfo_consumption: 7293.13,
          lsfo_consumption: 8649.45,
          created_at: "2020-02-22 06:47:53"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -6.7974032,
          longitude: 111.4708135,
          current_speed: 27.7,
          hfo_consumption: 7475.49,
          lsfo_consumption: 6307.59,
          created_at: "2020-01-30 05:57:41"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 45.2060835,
          longitude: 20.6264373,
          current_speed: 4.6,
          hfo_consumption: 4704.71,
          lsfo_consumption: 5813.73,
          created_at: "2020-02-19 00:55:13"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 47.0184615,
          longitude: -68.1430761,
          current_speed: 12.2,
          hfo_consumption: 1610.06,
          lsfo_consumption: 832.95,
          created_at: "2020-03-09 16:58:17"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -6.5397069,
          longitude: 110.8463512,
          current_speed: 8.4,
          hfo_consumption: 5430.14,
          lsfo_consumption: 973.87,
          created_at: "2019-12-18 20:42:27"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 31.869937,
          longitude: 35.065202,
          current_speed: 29.2,
          hfo_consumption: 7807.99,
          lsfo_consumption: 706.59,
          created_at: "2020-02-22 19:01:58"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 49.6747467,
          longitude: 21.9594799,
          current_speed: 7.0,
          hfo_consumption: 2484.68,
          lsfo_consumption: 9352.34,
          created_at: "2020-02-27 20:00:22"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 25.3141558,
          longitude: 49.6299077,
          current_speed: 6.2,
          hfo_consumption: 8088.16,
          lsfo_consumption: 2637.5,
          created_at: "2020-01-22 16:20:27"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 64.1754054,
          longitude: -51.7316065,
          current_speed: 26.6,
          hfo_consumption: 6300.32,
          lsfo_consumption: 8411.8,
          created_at: "2019-12-31 02:10:00"
        },

        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 39.909969,
          longitude: 116.459299,
          current_speed: 2.0,
          hfo_consumption: 1868.42,
          lsfo_consumption: 665.04,
          created_at: "2019-11-28 16:27:03"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -11.3781106,
          longitude: -40.6039185,
          current_speed: 8.9,
          hfo_consumption: 1509.11,
          lsfo_consumption: 3449.29,
          created_at: "2019-10-19 21:01:23"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 34.810487,
          longitude: 117.323725,
          current_speed: 15.6,
          hfo_consumption: 8770.43,
          lsfo_consumption: 9047.72,
          created_at: "2019-12-31 21:57:41"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 32.388662,
          longitude: 119.39402,
          current_speed: 30.2,
          hfo_consumption: 9959.4,
          lsfo_consumption: 744.74,
          created_at: "2019-11-16 13:44:04"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: -13.9468358,
          longitude: -39.6724573,
          current_speed: 13.0,
          hfo_consumption: 3853.46,
          lsfo_consumption: 4113.67,
          created_at: "2019-12-09 08:47:55"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: "35.41",
          longitude: "127.38583",
          current_speed: 25.8,
          hfo_consumption: 6512.09,
          lsfo_consumption: 4788.45,
          created_at: "2019-10-13 12:06:49"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 18.8782625,
          longitude: -71.5036905,
          current_speed: 9.5,
          hfo_consumption: 6727.03,
          lsfo_consumption: 9256.26,
          created_at: "2019-11-21 06:33:16"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 40.9463093,
          longitude: 68.7512681,
          current_speed: 2.3,
          hfo_consumption: 8735.83,
          lsfo_consumption: 9557.7,
          created_at: "2019-12-17 15:51:46"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 18.1084108,
          longitude: 120.7648516,
          current_speed: 2.0,
          hfo_consumption: 570.18,
          lsfo_consumption: 4201.55,
          created_at: "2019-11-15 23:45:22"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 26.312444,
          longitude: 99.850365,
          current_speed: 27.4,
          hfo_consumption: 7543.27,
          lsfo_consumption: 5123.88,
          created_at: "2019-11-03 19:41:51"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 52.1379258,
          longitude: 21.828508,
          current_speed: 26.4,
          hfo_consumption: 5004.57,
          lsfo_consumption: 5417.4,
          created_at: "2020-01-14 07:15:15"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -8.0038635,
          longitude: 113.7216313,
          current_speed: 10.8,
          hfo_consumption: 3054.18,
          lsfo_consumption: 7286.96,
          created_at: "2020-01-25 18:44:43"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 11.0606917,
          longitude: -69.7137997,
          current_speed: 1.6,
          hfo_consumption: 261.01,
          lsfo_consumption: 9495.9,
          created_at: "2019-12-26 07:11:30"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 11.0817215,
          longitude: 125.0249666,
          current_speed: 4.0,
          hfo_consumption: 6066.1,
          lsfo_consumption: 7501.23,
          created_at: "2020-02-21 16:54:56"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -10.9265815,
          longitude: -74.8745545,
          current_speed: 15.2,
          hfo_consumption: 2710.75,
          lsfo_consumption: 6781.49,
          created_at: "2020-01-07 00:14:45"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 31.1561051,
          longitude: 112.5399959,
          current_speed: 23.0,
          hfo_consumption: 1760.99,
          lsfo_consumption: 1621.68,
          created_at: "2020-02-19 23:54:59"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 27.7443962,
          longitude: 98.6654381,
          current_speed: 4.1,
          hfo_consumption: 6338.02,
          lsfo_consumption: 6638.79,
          created_at: "2020-01-15 11:59:42"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 46.4100106,
          longitude: 15.0570131,
          current_speed: 16.3,
          hfo_consumption: 5322.45,
          lsfo_consumption: 4620.78,
          created_at: "2020-03-02 21:40:17"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 42.0764229,
          longitude: 20.3413074,
          current_speed: 16.2,
          hfo_consumption: 8423.79,
          lsfo_consumption: 7499.68,
          created_at: "2020-01-29 12:22:42"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 38.9374808,
          longitude: -77.0852258,
          current_speed: 9.4,
          hfo_consumption: 1388.39,
          lsfo_consumption: 1044.68,
          created_at: "2019-10-23 15:08:40"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 57.1355803,
          longitude: 103.9325393,
          current_speed: 0.5,
          hfo_consumption: 1904.69,
          lsfo_consumption: 4132.54,
          created_at: "2019-11-09 09:22:45"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: -28.672732,
          longitude: 20.4284431,
          current_speed: 21.1,
          hfo_consumption: 9543.5,
          lsfo_consumption: 5501.35,
          created_at: "2019-10-10 16:19:34"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 37.7213799,
          longitude: -25.510372,
          current_speed: 15.0,
          hfo_consumption: 8887.26,
          lsfo_consumption: 6064.38,
          created_at: "2020-01-19 01:14:08"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 14.2261156,
          longitude: -5.9753267,
          current_speed: 14.8,
          hfo_consumption: 2618.95,
          lsfo_consumption: 2101.49,
          created_at: "2019-12-30 18:28:59"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: -6.201062,
          longitude: 106.5746124,
          current_speed: 17.6,
          hfo_consumption: 3749.02,
          lsfo_consumption: 9753.07,
          created_at: "2019-11-16 11:18:38"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: -27.9145782,
          longitude: -61.4014775,
          current_speed: 9.7,
          hfo_consumption: 7397.17,
          lsfo_consumption: 5166.46,
          created_at: "2020-01-24 15:08:57"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 30.661419,
          longitude: 116.244678,
          current_speed: 23.4,
          hfo_consumption: 8849.39,
          lsfo_consumption: 3461.03,
          created_at: "2019-11-30 10:46:44"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -22.2131635,
          longitude: -49.6555394,
          current_speed: 15.4,
          hfo_consumption: 2736.65,
          lsfo_consumption: 6924.03,
          created_at: "2019-12-10 09:11:02"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 25.5225011,
          longitude: 111.7226167,
          current_speed: 6.4,
          hfo_consumption: 7857.58,
          lsfo_consumption: 3028.95,
          created_at: "2020-02-07 11:01:12"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 30.574474,
          longitude: 103.923651,
          current_speed: 6.1,
          hfo_consumption: 6961.95,
          lsfo_consumption: 4366.64,
          created_at: "2019-10-28 22:43:48"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 43.047003,
          longitude: 26.3391256,
          current_speed: 8.8,
          hfo_consumption: 2.51,
          lsfo_consumption: 7177.73,
          created_at: "2019-11-22 14:47:55"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 51.3988867,
          longitude: 34.8922317,
          current_speed: 26.4,
          hfo_consumption: 4257.95,
          lsfo_consumption: 5202.93,
          created_at: "2019-10-13 05:32:04"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 42.8299079,
          longitude: 59.0072317,
          current_speed: 3.6,
          hfo_consumption: 6630.85,
          lsfo_consumption: 3029.52,
          created_at: "2020-02-05 04:02:58"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 60.60646,
          longitude: 15.6355,
          current_speed: 0.3,
          hfo_consumption: 6025.79,
          lsfo_consumption: 3508.93,
          created_at: "2020-01-14 08:22:14"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: -6.551202,
          longitude: -42.2165112,
          current_speed: 11.6,
          hfo_consumption: 2082.77,
          lsfo_consumption: 6156.15,
          created_at: "2020-01-07 14:58:32"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 36.2761885,
          longitude: 139.5356365,
          current_speed: 5.0,
          hfo_consumption: 217.26,
          lsfo_consumption: 3667.38,
          created_at: "2020-01-31 09:22:58"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: -2.8852569,
          longitude: 104.687936,
          current_speed: 24.9,
          hfo_consumption: 1823.23,
          lsfo_consumption: 9698.8,
          created_at: "2019-11-30 20:24:40"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: -4.722383,
          longitude: 104.447701,
          current_speed: 13.2,
          hfo_consumption: 7956.66,
          lsfo_consumption: 9771.05,
          created_at: "2020-02-06 09:53:26"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: -21.2922593,
          longitude: -50.3407923,
          current_speed: 12.0,
          hfo_consumption: 1482.99,
          lsfo_consumption: 2006.05,
          created_at: "2020-03-02 04:29:42"
        },

        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 39.907771,
          longitude: 116.447949,
          current_speed: 0.7,
          hfo_consumption: 468.58,
          lsfo_consumption: 1974.95,
          created_at: "2019-12-19 04:04:08"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 32.627566,
          longitude: 113.808422,
          current_speed: 17.7,
          hfo_consumption: 5917.56,
          lsfo_consumption: 4510.16,
          created_at: "2020-01-22 17:47:38"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 48.9933962,
          longitude: 14.5417888,
          current_speed: 1.8,
          hfo_consumption: 8571.67,
          lsfo_consumption: 2108.87,
          created_at: "2019-12-03 09:42:20"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 9.561219,
          longitude: 123.777644,
          current_speed: 1.5,
          hfo_consumption: 4007.5,
          lsfo_consumption: 4606.27,
          created_at: "2020-01-29 12:32:06"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 58.367135,
          longitude: 25.5974276,
          current_speed: 4.0,
          hfo_consumption: 9505.54,
          lsfo_consumption: 7792.58,
          created_at: "2020-02-16 16:01:45"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 45.050726,
          longitude: 64.9798593,
          current_speed: 25.9,
          hfo_consumption: 7342.58,
          lsfo_consumption: 4018.47,
          created_at: "2020-02-08 05:30:28"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 57.817445,
          longitude: 14.2716031,
          current_speed: 10.0,
          hfo_consumption: 1728.01,
          lsfo_consumption: 1539.07,
          created_at: "2020-02-17 20:03:54"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 38.6675581,
          longitude: 128.3176776,
          current_speed: 4.6,
          hfo_consumption: 3145.59,
          lsfo_consumption: 9708.67,
          created_at: "2019-12-24 07:09:17"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 55.6587901,
          longitude: 37.3582146,
          current_speed: 29.2,
          hfo_consumption: 6354.9,
          lsfo_consumption: 7400.14,
          created_at: "2019-10-20 13:40:01"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 23.3,
          hfo_consumption: 7465.79,
          lsfo_consumption: 7833.46,
          created_at: "2019-11-24 02:49:38"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 28.2068263,
          longitude: 68.3682111,
          current_speed: 18.4,
          hfo_consumption: 3308.49,
          lsfo_consumption: 1869.68,
          created_at: "2019-10-31 02:53:12"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 23.6474523,
          longitude: 94.4027782,
          current_speed: 1.5,
          hfo_consumption: 7736.99,
          lsfo_consumption: 8897.11,
          created_at: "2020-01-06 19:00:27"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 56.3464983,
          longitude: 21.065493,
          current_speed: 14.5,
          hfo_consumption: 5339.4,
          lsfo_consumption: 7257.85,
          created_at: "2019-12-04 16:18:19"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 6.4532257,
          longitude: -1.5838477,
          current_speed: 30.6,
          hfo_consumption: 8316.88,
          lsfo_consumption: 2393.17,
          created_at: "2019-12-05 17:54:26"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 7.3750631,
          longitude: -6.4769877,
          current_speed: 10.0,
          hfo_consumption: 1423.47,
          lsfo_consumption: 6588.82,
          created_at: "2019-11-01 18:23:37"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 59.2264863,
          longitude: 18.2509127,
          current_speed: 14.5,
          hfo_consumption: 1644.41,
          lsfo_consumption: 1349.93,
          created_at: "2020-02-29 05:36:31"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 36.1899557,
          longitude: 117.1168644,
          current_speed: 5.1,
          hfo_consumption: 2585.98,
          lsfo_consumption: 3878.46,
          created_at: "2019-12-21 05:50:22"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -7.7798092,
          longitude: 110.3562018,
          current_speed: 28.4,
          hfo_consumption: 3325.21,
          lsfo_consumption: 9387.38,
          created_at: "2020-02-28 17:35:51"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 50.5037851,
          longitude: 14.7986888,
          current_speed: 15.1,
          hfo_consumption: 9681.8,
          lsfo_consumption: 3122.21,
          created_at: "2020-01-25 23:46:11"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 29.000347,
          longitude: 101.507294,
          current_speed: 7.8,
          hfo_consumption: 3903.31,
          lsfo_consumption: 6146.55,
          created_at: "2019-12-03 02:23:53"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 14.7596318,
          longitude: 121.0589081,
          current_speed: 3.6,
          hfo_consumption: 416.87,
          lsfo_consumption: 2875.27,
          created_at: "2019-11-01 12:13:52"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 24.9938893,
          longitude: 110.4541138,
          current_speed: 12.6,
          hfo_consumption: 3768.89,
          lsfo_consumption: 5438.02,
          created_at: "2019-11-12 01:25:44"
        },

        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 35.6905313,
          longitude: 105.0546075,
          current_speed: 2.3,
          hfo_consumption: 1936.27,
          lsfo_consumption: 8146.89,
          created_at: "2019-12-04 15:00:30"
        },

        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 22.691253,
          longitude: 114.346251,
          current_speed: 9.6,
          hfo_consumption: 9913.8,
          lsfo_consumption: 6148.56,
          created_at: "2020-02-13 18:28:02"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 13.2570942,
          longitude: -61.125756,
          current_speed: 24.4,
          hfo_consumption: 8414.87,
          lsfo_consumption: 3771.17,
          created_at: "2019-12-09 23:42:32"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 4.2784597,
          longitude: 126.8573186,
          current_speed: 9.0,
          hfo_consumption: 7352.57,
          lsfo_consumption: 280.35,
          created_at: "2020-01-27 13:29:11"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 28.154774,
          longitude: 116.870383,
          current_speed: 18.8,
          hfo_consumption: 297.79,
          lsfo_consumption: 5109.26,
          created_at: "2020-01-13 07:36:30"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 33.6349736,
          longitude: 46.415281,
          current_speed: 17.8,
          hfo_consumption: 9434.49,
          lsfo_consumption: 4984.49,
          created_at: "2019-12-28 08:49:29"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 22.923431,
          longitude: 112.732632,
          current_speed: 9.5,
          hfo_consumption: 2483.42,
          lsfo_consumption: 8368.57,
          created_at: "2019-10-30 12:33:29"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 12.5049537,
          longitude: 107.6925674,
          current_speed: 29.2,
          hfo_consumption: 6903.42,
          lsfo_consumption: 4802.51,
          created_at: "2019-12-30 08:11:30"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 20.1400094,
          longitude: -75.2128996,
          current_speed: 28.5,
          hfo_consumption: 5269.86,
          lsfo_consumption: 8847.83,
          created_at: "2020-01-31 07:01:59"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 23.3854292,
          longitude: 113.4895468,
          current_speed: 22.8,
          hfo_consumption: 2797.34,
          lsfo_consumption: 2311.24,
          created_at: "2019-12-08 21:14:56"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 40.4095521,
          longitude: 49.7653156,
          current_speed: 25.3,
          hfo_consumption: 862.06,
          lsfo_consumption: 2023.27,
          created_at: "2019-11-03 05:11:51"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -27.4249796,
          longitude: 30.8190797,
          current_speed: 4.7,
          hfo_consumption: 7819.78,
          lsfo_consumption: 3320.45,
          created_at: "2019-12-08 13:51:27"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 0.8275786,
          longitude: -77.2635038,
          current_speed: 8.0,
          hfo_consumption: 9132.15,
          lsfo_consumption: 7220.21,
          created_at: "2020-01-21 00:51:20"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: -8.2717886,
          longitude: 123.1119371,
          current_speed: 30.4,
          hfo_consumption: 4808.93,
          lsfo_consumption: 7873.55,
          created_at: "2020-03-09 23:46:14"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 40.6563433,
          longitude: -8.0551029,
          current_speed: 11.8,
          hfo_consumption: 1292.3,
          lsfo_consumption: 2329.45,
          created_at: "2020-01-19 06:18:52"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: -6.9092185,
          longitude: 107.6426797,
          current_speed: 29.3,
          hfo_consumption: 7112.28,
          lsfo_consumption: 2787.9,
          created_at: "2020-02-20 19:10:41"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 49.5477597,
          longitude: 5.8532859,
          current_speed: 8.3,
          hfo_consumption: 3315.42,
          lsfo_consumption: 306.32,
          created_at: "2019-12-24 16:02:38"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 41.777702,
          longitude: 84.252156,
          current_speed: 0.5,
          hfo_consumption: 9810.53,
          lsfo_consumption: 3478.5,
          created_at: "2020-01-23 20:07:48"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 26.604594,
          longitude: 106.724426,
          current_speed: 18.3,
          hfo_consumption: 1561.63,
          lsfo_consumption: 9820.6,
          created_at: "2019-11-25 11:17:00"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 40.2748289,
          longitude: -3.7968574,
          current_speed: 19.9,
          hfo_consumption: 2379.15,
          lsfo_consumption: 4274.54,
          created_at: "2019-11-06 09:28:43"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 59.1239637,
          longitude: 12.9380053,
          current_speed: 19.7,
          hfo_consumption: 1851.95,
          lsfo_consumption: 9893.37,
          created_at: "2019-12-01 16:40:52"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 4.956167,
          longitude: -76.607349,
          current_speed: 24.1,
          hfo_consumption: 7856.69,
          lsfo_consumption: 6065.57,
          created_at: "2019-12-12 15:05:50"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 40.6999925,
          longitude: -112.0118669,
          current_speed: 23.4,
          hfo_consumption: 872.69,
          lsfo_consumption: 9254.18,
          created_at: "2019-11-02 20:22:24"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 60.0043226,
          longitude: 56.655672,
          current_speed: 9.1,
          hfo_consumption: 8393.39,
          lsfo_consumption: 4383.17,
          created_at: "2019-10-15 15:17:25"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 9.49858,
          longitude: 50.8105261,
          current_speed: 27.5,
          hfo_consumption: 5205.98,
          lsfo_consumption: 5849.84,
          created_at: "2019-12-24 19:38:40"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 9.3847618,
          longitude: -73.3001233,
          current_speed: 16.8,
          hfo_consumption: 8309.22,
          lsfo_consumption: 1486.29,
          created_at: "2020-02-24 06:15:09"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 37.9380499,
          longitude: 22.836589,
          current_speed: 28.3,
          hfo_consumption: 6177.05,
          lsfo_consumption: 7789.36,
          created_at: "2020-01-25 13:40:58"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 17.563418,
          longitude: 121.701687,
          current_speed: 14.6,
          hfo_consumption: 5726.64,
          lsfo_consumption: 6430.61,
          created_at: "2019-10-14 02:06:56"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 25.5784559,
          longitude: 51.4821387,
          current_speed: 0.3,
          hfo_consumption: 6503.81,
          lsfo_consumption: 148.52,
          created_at: "2019-12-13 20:41:03"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 18.5049101,
          longitude: -69.8296974,
          current_speed: 16.1,
          hfo_consumption: 5882.44,
          lsfo_consumption: 954.54,
          created_at: "2020-02-23 22:02:49"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 42.4576548,
          longitude: -2.4407498,
          current_speed: 15.8,
          hfo_consumption: 2215.89,
          lsfo_consumption: 6115.81,
          created_at: "2019-12-13 17:01:32"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 32.7011609,
          longitude: -97.3354531,
          current_speed: 20.3,
          hfo_consumption: 84.09,
          lsfo_consumption: 1278.94,
          created_at: "2019-11-27 15:34:22"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -6.2822524,
          longitude: 107.2518631,
          current_speed: 14.0,
          hfo_consumption: 2180.46,
          lsfo_consumption: 7682.73,
          created_at: "2019-10-27 19:05:29"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: -6.2335134,
          longitude: 107.1071,
          current_speed: 28.7,
          hfo_consumption: 1422.43,
          lsfo_consumption: 5784.45,
          created_at: "2019-11-24 08:18:18"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 44.9870496,
          longitude: 38.994454,
          current_speed: 11.0,
          hfo_consumption: 3511.12,
          lsfo_consumption: 7775.88,
          created_at: "2019-12-01 17:53:45"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 25.8142164,
          longitude: 66.6278395,
          current_speed: 26.5,
          hfo_consumption: 3743.3,
          lsfo_consumption: 2922.91,
          created_at: "2020-02-20 11:19:40"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 63.8191979,
          longitude: 20.2821264,
          current_speed: 23.4,
          hfo_consumption: 8971.05,
          lsfo_consumption: 1754.11,
          created_at: "2019-11-09 00:40:09"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 6.3000002,
          longitude: 120.5833359,
          current_speed: 13.7,
          hfo_consumption: 7312.9,
          lsfo_consumption: 7346.95,
          created_at: "2019-11-08 13:21:57"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: -42.814251,
          longitude: -65.0425829,
          current_speed: 22.8,
          hfo_consumption: 6213.71,
          lsfo_consumption: 4702.74,
          created_at: "2019-11-29 23:37:16"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 36.7310107,
          longitude: 136.6975386,
          current_speed: 7.7,
          hfo_consumption: 9417.98,
          lsfo_consumption: 1593.84,
          created_at: "2020-01-23 14:08:13"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -31.312988,
          longitude: 27.8370041,
          current_speed: 10.2,
          hfo_consumption: 9516.04,
          lsfo_consumption: 6442.36,
          created_at: "2020-01-31 11:52:10"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: -2.8553432,
          longitude: 115.3074646,
          current_speed: 25.8,
          hfo_consumption: 7599.16,
          lsfo_consumption: 6402.16,
          created_at: "2020-02-08 07:43:07"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 11.6578757,
          longitude: 122.3054783,
          current_speed: 31.7,
          hfo_consumption: 6142.4,
          lsfo_consumption: 4622.88,
          created_at: "2020-01-19 22:35:17"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 15.2110438,
          longitude: 51.2500919,
          current_speed: 10.3,
          hfo_consumption: 2783.92,
          lsfo_consumption: 5383.44,
          created_at: "2020-02-09 16:23:42"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 5.7577596,
          longitude: 103.0010752,
          current_speed: 12.8,
          hfo_consumption: 7969.6,
          lsfo_consumption: 6178.79,
          created_at: "2020-02-06 02:11:53"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 39.6720868,
          longitude: -84.0960056,
          current_speed: 1.0,
          hfo_consumption: 2478.38,
          lsfo_consumption: 6532.26,
          created_at: "2019-11-23 06:59:45"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: -7.0795248,
          longitude: 109.0869316,
          current_speed: 21.9,
          hfo_consumption: 5489.11,
          lsfo_consumption: 5039.39,
          created_at: "2020-01-20 16:28:42"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 40.7074498,
          longitude: 14.8046066,
          current_speed: 17.5,
          hfo_consumption: 6196.18,
          lsfo_consumption: 8912.89,
          created_at: "2019-11-01 09:56:07"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 12.4,
          hfo_consumption: 2432.9,
          lsfo_consumption: 1748.27,
          created_at: "2019-11-16 07:41:03"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 49.7759894,
          longitude: 13.6924662,
          current_speed: 30.4,
          hfo_consumption: 7727.62,
          lsfo_consumption: 8647.1,
          created_at: "2019-10-28 00:29:01"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: -9.6670621,
          longitude: 124.3754414,
          current_speed: 25.7,
          hfo_consumption: 2011.26,
          lsfo_consumption: 6851.01,
          created_at: "2019-12-15 15:13:27"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 51.3854177,
          longitude: 20.4867499,
          current_speed: 5.6,
          hfo_consumption: 6543.03,
          lsfo_consumption: 9805.01,
          created_at: "2019-11-19 03:03:54"
        },

        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: "36.86278",
          longitude: "66.16656",
          current_speed: 29.8,
          hfo_consumption: 2296.93,
          lsfo_consumption: 4007.82,
          created_at: "2020-02-10 23:16:30"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 48.8693156,
          longitude: 2.3501981,
          current_speed: 29.2,
          hfo_consumption: 8347.27,
          lsfo_consumption: 3677.84,
          created_at: "2020-02-07 06:45:58"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 19.2579,
          longitude: -72.517319,
          current_speed: 6.7,
          hfo_consumption: 2067.68,
          lsfo_consumption: 723.17,
          created_at: "2020-01-13 19:21:24"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 54.6001467,
          longitude: 52.4387134,
          current_speed: 16.4,
          hfo_consumption: 7028.45,
          lsfo_consumption: 6576.73,
          created_at: "2019-12-06 03:56:18"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: -36.8201352,
          longitude: -73.0443904,
          current_speed: 8.3,
          hfo_consumption: 5821.88,
          lsfo_consumption: 8263.57,
          created_at: "2019-10-17 03:07:42"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: -7.4443035,
          longitude: -35.148879,
          current_speed: 21.5,
          hfo_consumption: 2489.99,
          lsfo_consumption: 6453.91,
          created_at: "2019-10-30 15:13:56"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 14.6,
          hfo_consumption: 7562.63,
          lsfo_consumption: 6647.83,
          created_at: "2020-01-08 05:57:01"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 27.9593333,
          longitude: -82.7996813,
          current_speed: 14.9,
          hfo_consumption: 8265.79,
          lsfo_consumption: 5326.42,
          created_at: "2020-02-26 09:47:32"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 53.4116818,
          longitude: 58.9860021,
          current_speed: 9.1,
          hfo_consumption: 7340.6,
          lsfo_consumption: 911.69,
          created_at: "2019-11-06 23:08:37"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: "41.90978",
          longitude: "21.54997",
          current_speed: 16.3,
          hfo_consumption: 2536.21,
          lsfo_consumption: 104.66,
          created_at: "2019-12-02 10:10:48"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 31.221517,
          longitude: 121.544379,
          current_speed: 26.7,
          hfo_consumption: 2595.13,
          lsfo_consumption: 2848.22,
          created_at: "2019-12-03 09:21:10"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 48.8096645,
          longitude: 9.2415192,
          current_speed: 6.8,
          hfo_consumption: 3742.3,
          lsfo_consumption: 2053.32,
          created_at: "2020-03-05 15:00:21"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: -13.67337,
          longitude: -71.925346,
          current_speed: 17.0,
          hfo_consumption: 3448.99,
          lsfo_consumption: 9493.52,
          created_at: "2020-01-18 23:04:23"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 27.032207,
          longitude: 90.1869644,
          current_speed: 1.3,
          hfo_consumption: 4000.85,
          lsfo_consumption: 8941.61,
          created_at: "2020-01-19 17:50:52"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 1.8372299,
          longitude: 73.5049293,
          current_speed: 12.1,
          hfo_consumption: 7386.38,
          lsfo_consumption: 7293.2,
          created_at: "2020-03-09 02:14:11"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -7.0206795,
          longitude: 112.3963638,
          current_speed: 31.7,
          hfo_consumption: 161.52,
          lsfo_consumption: 2104.55,
          created_at: "2019-10-26 05:01:46"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 46.0573473,
          longitude: 28.8253483,
          current_speed: 18.4,
          hfo_consumption: 3027.73,
          lsfo_consumption: 6888.37,
          created_at: "2019-10-24 22:03:06"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 39.8244606,
          longitude: -8.3790205,
          current_speed: 3.8,
          hfo_consumption: 948.27,
          lsfo_consumption: 3383.97,
          created_at: "2019-12-18 21:44:14"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 49.8990161,
          longitude: 3.3651417,
          current_speed: 8.8,
          hfo_consumption: 8905.58,
          lsfo_consumption: 8267.44,
          created_at: "2019-11-27 12:10:03"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: -7.0215218,
          longitude: 112.4798088,
          current_speed: 24.9,
          hfo_consumption: 7077.7,
          lsfo_consumption: 4902.81,
          created_at: "2020-01-12 18:14:13"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 41.9300434,
          longitude: -8.7427836,
          current_speed: 30.0,
          hfo_consumption: 4664.78,
          lsfo_consumption: 9497.18,
          created_at: "2020-02-14 03:30:07"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 13.5353957,
          longitude: -88.3506468,
          current_speed: 8.6,
          hfo_consumption: 6395.25,
          lsfo_consumption: 2216.01,
          created_at: "2019-11-20 00:10:11"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 48.8242268,
          longitude: 16.0657342,
          current_speed: 3.6,
          hfo_consumption: 3273.85,
          lsfo_consumption: 8740.11,
          created_at: "2020-02-25 18:53:34"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 58.316667,
          longitude: 12.3166671,
          current_speed: 26.0,
          hfo_consumption: 6748.75,
          lsfo_consumption: 418.02,
          created_at: "2019-11-03 00:35:08"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 55.775282,
          longitude: 37.61479,
          current_speed: 27.4,
          hfo_consumption: 6465.29,
          lsfo_consumption: 9005.55,
          created_at: "2019-11-17 10:21:20"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -9.6593944,
          longitude: 120.2761574,
          current_speed: 31.9,
          hfo_consumption: 1151.83,
          lsfo_consumption: 39.31,
          created_at: "2019-11-19 17:30:27"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 46.1223915,
          longitude: -74.5838514,
          current_speed: 7.7,
          hfo_consumption: 8833.46,
          lsfo_consumption: 8551.76,
          created_at: "2019-10-15 08:15:47"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 40.1638631,
          longitude: -8.8615847,
          current_speed: 16.6,
          hfo_consumption: 4300.03,
          lsfo_consumption: 5253.33,
          created_at: "2020-01-28 13:24:29"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 30.051035,
          longitude: 122.0185,
          current_speed: 19.7,
          hfo_consumption: 4409.99,
          lsfo_consumption: 6968.62,
          created_at: "2019-11-03 17:36:56"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -3.6499007,
          longitude: -69.097023,
          current_speed: 28.6,
          hfo_consumption: 448.53,
          lsfo_consumption: 5208.21,
          created_at: "2020-01-31 16:02:47"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 28.960671,
          longitude: 111.889793,
          current_speed: 12.8,
          hfo_consumption: 3227.9,
          lsfo_consumption: 7272.98,
          created_at: "2019-11-17 22:02:49"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 15.911973,
          longitude: 102.4609873,
          current_speed: 6.6,
          hfo_consumption: 2871.86,
          lsfo_consumption: 8792.89,
          created_at: "2019-11-24 13:52:37"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: "43.15",
          longitude: "25.65",
          current_speed: 24.0,
          hfo_consumption: 993.55,
          lsfo_consumption: 9048.04,
          created_at: "2020-01-21 04:33:21"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: -22.3531369,
          longitude: 16.1286901,
          current_speed: 9.0,
          hfo_consumption: 284.71,
          lsfo_consumption: 523.37,
          created_at: "2020-01-27 15:46:14"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 15.0737251,
          longitude: 120.5150706,
          current_speed: 6.0,
          hfo_consumption: 8865.14,
          lsfo_consumption: 4898.85,
          created_at: "2019-12-25 17:59:54"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 32.240853,
          longitude: 120.2326771,
          current_speed: 23.6,
          hfo_consumption: 8234.15,
          lsfo_consumption: 3082.57,
          created_at: "2019-10-24 01:32:02"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 41.6137961,
          longitude: 42.8762335,
          current_speed: 0.4,
          hfo_consumption: 4917.75,
          lsfo_consumption: 5906.29,
          created_at: "2020-02-20 06:13:14"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 55.6764108,
          longitude: 12.5859351,
          current_speed: 27.2,
          hfo_consumption: 9284.37,
          lsfo_consumption: 7407.21,
          created_at: "2020-02-09 10:40:00"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 17.4605379,
          longitude: 101.7523854,
          current_speed: 6.6,
          hfo_consumption: 4460.08,
          lsfo_consumption: 6133.59,
          created_at: "2020-01-03 20:42:00"
        },

        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 14.5672162,
          longitude: 121.0042974,
          current_speed: 31.6,
          hfo_consumption: 2697.24,
          lsfo_consumption: 8275.69,
          created_at: "2020-01-02 21:39:43"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 29.176523,
          longitude: 120.390932,
          current_speed: 7.2,
          hfo_consumption: 8713.94,
          lsfo_consumption: 2083.94,
          created_at: "2020-02-14 21:50:07"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 6.1747517,
          longitude: -75.5160235,
          current_speed: 20.4,
          hfo_consumption: 1841.32,
          lsfo_consumption: 5841.46,
          created_at: "2020-01-05 18:16:54"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 53.0809114,
          longitude: 103.3256193,
          current_speed: 20.2,
          hfo_consumption: 557.37,
          lsfo_consumption: 9293.34,
          created_at: "2020-01-20 04:02:12"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 24.7660178,
          longitude: 90.2561365,
          current_speed: 30.8,
          hfo_consumption: 5955.25,
          lsfo_consumption: 3714.53,
          created_at: "2020-01-23 08:31:59"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 39.0008341,
          longitude: 139.9181485,
          current_speed: 16.8,
          hfo_consumption: 5067.01,
          lsfo_consumption: 4392.62,
          created_at: "2020-01-13 20:02:30"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 50.7074591,
          longitude: 7.1093481,
          current_speed: 3.4,
          hfo_consumption: 5978.8,
          lsfo_consumption: 5309.54,
          created_at: "2019-11-29 17:21:11"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 50.003461,
          longitude: 19.612945,
          current_speed: 21.5,
          hfo_consumption: 9689.87,
          lsfo_consumption: 3445.36,
          created_at: "2019-10-29 05:39:25"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 48.7471816,
          longitude: 2.3572729,
          current_speed: 13.7,
          hfo_consumption: 7508.36,
          lsfo_consumption: 4459.06,
          created_at: "2020-02-19 22:58:34"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: "52.63744",
          longitude: "41.45968",
          current_speed: 1.3,
          hfo_consumption: 1989.24,
          lsfo_consumption: 3624.65,
          created_at: "2020-02-10 09:08:33"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 49.0733587,
          longitude: 17.3859903,
          current_speed: 19.2,
          hfo_consumption: 7515.61,
          lsfo_consumption: 8198.72,
          created_at: "2019-10-27 23:37:03"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 22.9874431,
          longitude: -82.7535929,
          current_speed: 10.1,
          hfo_consumption: 6336.98,
          lsfo_consumption: 1590.33,
          created_at: "2020-01-09 03:38:29"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 13.6902068,
          longitude: 101.0701959,
          current_speed: 25.8,
          hfo_consumption: 2451.09,
          lsfo_consumption: 9337.62,
          created_at: "2019-12-22 03:14:38"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: -26.4355066,
          longitude: -49.2452364,
          current_speed: 25.8,
          hfo_consumption: 2005.42,
          lsfo_consumption: 8489.94,
          created_at: "2020-01-05 21:53:49"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 32.165,
          longitude: 108.8822222,
          current_speed: 19.6,
          hfo_consumption: 7727.8,
          lsfo_consumption: 422.53,
          created_at: "2019-10-07 05:03:53"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 22.947532,
          longitude: 112.823056,
          current_speed: 22.0,
          hfo_consumption: 7203.02,
          lsfo_consumption: 6527.7,
          created_at: "2020-01-29 06:15:51"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 37.8806901,
          longitude: 140.1356792,
          current_speed: 28.2,
          hfo_consumption: 3732.05,
          lsfo_consumption: 8017.44,
          created_at: "2020-01-19 23:22:37"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 8.8876607,
          longitude: -79.6421415,
          current_speed: 28.9,
          hfo_consumption: 1937.82,
          lsfo_consumption: 9225.68,
          created_at: "2019-12-28 23:49:08"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 26.9,
          hfo_consumption: 849.7,
          lsfo_consumption: 187.35,
          created_at: "2019-12-11 18:35:48"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 9.9578348,
          longitude: 124.1789637,
          current_speed: 15.5,
          hfo_consumption: 8300.98,
          lsfo_consumption: 160.79,
          created_at: "2020-02-12 22:01:18"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: -22.1007393,
          longitude: -50.1858252,
          current_speed: 1.1,
          hfo_consumption: 2194.2,
          lsfo_consumption: 9777.0,
          created_at: "2019-12-04 09:05:58"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 21.778714,
          longitude: 107.751231,
          current_speed: 10.5,
          hfo_consumption: 1233.26,
          lsfo_consumption: 8310.32,
          created_at: "2020-02-24 03:51:26"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 47.2320539,
          longitude: 39.5359498,
          current_speed: 3.9,
          hfo_consumption: 8930.56,
          lsfo_consumption: 5129.44,
          created_at: "2019-12-19 12:36:18"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 64.9119853,
          longitude: 25.5142484,
          current_speed: 10.9,
          hfo_consumption: 4638.06,
          lsfo_consumption: 610.06,
          created_at: "2019-12-02 06:06:32"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 41.343933,
          longitude: 86.261321,
          current_speed: 17.5,
          hfo_consumption: 4076.27,
          lsfo_consumption: 3680.14,
          created_at: "2020-02-16 18:10:04"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -27.3777068,
          longitude: -55.9237269,
          current_speed: 2.0,
          hfo_consumption: 630.0,
          lsfo_consumption: 4429.45,
          created_at: "2020-01-22 15:40:25"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 38.4499141,
          longitude: 141.3800956,
          current_speed: 15.9,
          hfo_consumption: 6181.09,
          lsfo_consumption: 5357.52,
          created_at: "2020-01-13 14:43:16"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 22.6194565,
          longitude: 105.6705801,
          current_speed: 1.9,
          hfo_consumption: 9085.79,
          lsfo_consumption: 6119.6,
          created_at: "2019-12-11 11:46:15"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 39.9335533,
          longitude: 116.3323366,
          current_speed: 7.8,
          hfo_consumption: 58.56,
          lsfo_consumption: 7161.22,
          created_at: "2020-02-24 12:47:50"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 51.6818091,
          longitude: 14.874997,
          current_speed: 23.2,
          hfo_consumption: 6674.66,
          lsfo_consumption: 2001.0,
          created_at: "2020-01-12 09:47:12"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: 41.1399814,
          longitude: -104.8202462,
          current_speed: 21.8,
          hfo_consumption: 8807.33,
          lsfo_consumption: 4166.69,
          created_at: "2019-12-19 05:39:59"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 49.701827,
          longitude: 16.6860132,
          current_speed: 28.6,
          hfo_consumption: 3132.31,
          lsfo_consumption: 332.89,
          created_at: "2019-12-08 14:57:31"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: "34.41096",
          longitude: "36.75879",
          current_speed: 11.5,
          hfo_consumption: 5263.38,
          lsfo_consumption: 9207.87,
          created_at: "2019-10-27 22:39:02"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: -1.5904721,
          longitude: -78.9995154,
          current_speed: 11.6,
          hfo_consumption: 1071.56,
          lsfo_consumption: 4443.39,
          created_at: "2019-11-18 04:39:33"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: -26.8193949,
          longitude: -65.1435685,
          current_speed: 2.3,
          hfo_consumption: 3893.04,
          lsfo_consumption: 7295.94,
          created_at: "2019-11-06 13:38:17"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 39.7032415,
          longitude: 67.1060353,
          current_speed: 3.9,
          hfo_consumption: 7713.1,
          lsfo_consumption: 4330.7,
          created_at: "2020-02-04 16:02:24"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 40.546361,
          longitude: 117.659499,
          current_speed: 5.2,
          hfo_consumption: 6346.91,
          lsfo_consumption: 2558.95,
          created_at: "2019-11-21 07:49:42"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 31.039415,
          longitude: 121.415144,
          current_speed: 1.8,
          hfo_consumption: 6686.78,
          lsfo_consumption: 4986.87,
          created_at: "2019-11-18 21:44:18"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 12.1630333,
          longitude: -84.2199753,
          current_speed: 15.4,
          hfo_consumption: 3208.38,
          lsfo_consumption: 1836.25,
          created_at: "2019-11-21 19:32:49"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 39.9226132,
          longitude: 116.4606871,
          current_speed: 18.7,
          hfo_consumption: 1466.04,
          lsfo_consumption: 7240.27,
          created_at: "2020-02-08 02:55:23"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 45.813177,
          longitude: 9.2292909,
          current_speed: 15.6,
          hfo_consumption: 3642.14,
          lsfo_consumption: 4122.37,
          created_at: "2020-02-19 16:11:04"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 56.0660092,
          longitude: 12.7332992,
          current_speed: 10.9,
          hfo_consumption: 8885.49,
          lsfo_consumption: 2722.84,
          created_at: "2020-01-29 15:44:24"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -7.2505074,
          longitude: 107.7928499,
          current_speed: 12.8,
          hfo_consumption: 6499.28,
          lsfo_consumption: 7700.28,
          created_at: "2019-12-01 20:32:00"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 30.2977417,
          longitude: 30.9783805,
          current_speed: 22.1,
          hfo_consumption: 2763.32,
          lsfo_consumption: 2365.32,
          created_at: "2019-11-09 07:08:24"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 28.988133,
          longitude: 110.206177,
          current_speed: 27.5,
          hfo_consumption: 6900.78,
          lsfo_consumption: 6309.02,
          created_at: "2019-11-05 10:51:52"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: -32.0288506,
          longitude: -53.3936083,
          current_speed: 25.2,
          hfo_consumption: 7042.77,
          lsfo_consumption: 6661.19,
          created_at: "2020-02-05 18:32:19"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: -7.2893545,
          longitude: -34.8403408,
          current_speed: 23.1,
          hfo_consumption: 4621.86,
          lsfo_consumption: 2098.94,
          created_at: "2019-10-08 14:37:34"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: -6.2855885,
          longitude: 106.701673,
          current_speed: 17.1,
          hfo_consumption: 5813.21,
          lsfo_consumption: 6255.87,
          created_at: "2020-01-16 13:53:38"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 23.0861808,
          longitude: 113.4943199,
          current_speed: 29.9,
          hfo_consumption: 5028.39,
          lsfo_consumption: 7429.44,
          created_at: "2019-10-31 05:32:25"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 4.0416578,
          longitude: -73.5829689,
          current_speed: 30.4,
          hfo_consumption: 9271.13,
          lsfo_consumption: 3479.77,
          created_at: "2020-01-03 05:19:20"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 30.315892,
          longitude: 120.218758,
          current_speed: 17.2,
          hfo_consumption: 5048.14,
          lsfo_consumption: 5439.23,
          created_at: "2020-02-22 20:56:55"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 24.1048998,
          longitude: 52.7241914,
          current_speed: 11.5,
          hfo_consumption: 7556.72,
          lsfo_consumption: 7299.64,
          created_at: "2020-03-05 07:02:21"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 57.8991434,
          longitude: 34.9594447,
          current_speed: 14.4,
          hfo_consumption: 5015.46,
          lsfo_consumption: 4959.08,
          created_at: "2019-12-28 17:20:35"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -6.9174639,
          longitude: 107.6191228,
          current_speed: 31.5,
          hfo_consumption: 2332.09,
          lsfo_consumption: 7851.77,
          created_at: "2020-01-14 04:36:41"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 26.753593,
          longitude: 110.138232,
          current_speed: 28.0,
          hfo_consumption: 5185.52,
          lsfo_consumption: 1002.24,
          created_at: "2019-12-07 04:08:39"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 22.948016,
          longitude: 113.366904,
          current_speed: 10.9,
          hfo_consumption: 2378.68,
          lsfo_consumption: 3651.73,
          created_at: "2020-01-08 21:37:56"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: -8.3124202,
          longitude: 123.7238308,
          current_speed: 20.1,
          hfo_consumption: 5230.1,
          lsfo_consumption: 9642.88,
          created_at: "2020-02-20 18:09:33"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 59.8436248,
          longitude: 10.790337,
          current_speed: 11.6,
          hfo_consumption: 9046.11,
          lsfo_consumption: 9487.89,
          created_at: "2020-02-06 18:33:53"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 37.6708024,
          longitude: 138.9539609,
          current_speed: 30.9,
          hfo_consumption: 162.8,
          lsfo_consumption: 2489.96,
          created_at: "2020-02-04 22:07:28"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 32.890479,
          longitude: 115.814504,
          current_speed: 4.9,
          hfo_consumption: 9558.15,
          lsfo_consumption: 4058.76,
          created_at: "2020-01-20 21:17:08"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 8.7504833,
          longitude: 124.7798258,
          current_speed: 4.2,
          hfo_consumption: 9112.39,
          lsfo_consumption: 5682.52,
          created_at: "2019-11-20 20:29:38"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: -22.6700589,
          longitude: 27.225321,
          current_speed: 7.2,
          hfo_consumption: 4888.12,
          lsfo_consumption: 8534.72,
          created_at: "2019-12-29 01:38:30"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 10.7464075,
          longitude: 121.9386578,
          current_speed: 10.2,
          hfo_consumption: 6921.21,
          lsfo_consumption: 2076.27,
          created_at: "2020-02-08 07:41:05"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 52.354402,
          longitude: 14.5610119,
          current_speed: 22.1,
          hfo_consumption: 2986.09,
          lsfo_consumption: 2629.81,
          created_at: "2020-02-21 01:39:27"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 30.7664515,
          longitude: 70.9293858,
          current_speed: 13.6,
          hfo_consumption: 8598.53,
          lsfo_consumption: 317.53,
          created_at: "2020-02-17 16:31:22"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: "47.55728",
          longitude: "124.21591",
          current_speed: 13.8,
          hfo_consumption: 4711.76,
          lsfo_consumption: 2643.49,
          created_at: "2019-11-14 05:19:57"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 23.15998,
          longitude: 113.327132,
          current_speed: 16.5,
          hfo_consumption: 9605.04,
          lsfo_consumption: 2455.26,
          created_at: "2019-10-07 08:38:40"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 48.319875,
          longitude: 2.683461,
          current_speed: 3.0,
          hfo_consumption: 3374.04,
          lsfo_consumption: 7458.06,
          created_at: "2019-12-10 17:43:46"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 18.8350125,
          longitude: -72.1031057,
          current_speed: 9.4,
          hfo_consumption: 9826.79,
          lsfo_consumption: 7217.28,
          created_at: "2020-02-28 12:53:35"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 11.9924294,
          longitude: 105.4645408,
          current_speed: 26.3,
          hfo_consumption: 5086.17,
          lsfo_consumption: 4936.93,
          created_at: "2020-02-19 04:44:00"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 29.8867761,
          longitude: -95.54919,
          current_speed: 25.0,
          hfo_consumption: 5338.0,
          lsfo_consumption: 1304.18,
          created_at: "2019-11-14 14:15:15"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 38.2924675,
          longitude: 23.9199305,
          current_speed: 16.1,
          hfo_consumption: 3145.06,
          lsfo_consumption: 3532.21,
          created_at: "2020-01-18 19:24:40"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 52.0990723,
          longitude: 18.6045805,
          current_speed: 21.7,
          hfo_consumption: 3638.25,
          lsfo_consumption: 28.36,
          created_at: "2019-12-26 10:54:29"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 49.1449758,
          longitude: 13.2297698,
          current_speed: 28.4,
          hfo_consumption: 2004.36,
          lsfo_consumption: 6817.34,
          created_at: "2019-11-18 04:22:28"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: -6.91253,
          longitude: 113.75089,
          current_speed: 3.1,
          hfo_consumption: 5731.28,
          lsfo_consumption: 5731.42,
          created_at: "2019-10-30 09:46:08"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 54.7747231,
          longitude: 22.8634338,
          current_speed: 26.5,
          hfo_consumption: 9170.64,
          lsfo_consumption: 8761.96,
          created_at: "2019-10-24 01:29:24"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 8.4201951,
          longitude: -9.7539282,
          current_speed: 1.8,
          hfo_consumption: 3607.64,
          lsfo_consumption: 3284.98,
          created_at: "2020-02-23 10:35:50"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 43.4795902,
          longitude: 44.1393572,
          current_speed: 7.0,
          hfo_consumption: 788.92,
          lsfo_consumption: 7453.35,
          created_at: "2020-02-11 20:57:56"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 33.387684,
          longitude: 114.021538,
          current_speed: 31.3,
          hfo_consumption: 8039.44,
          lsfo_consumption: 6427.2,
          created_at: "2019-10-27 17:16:47"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 24.1,
          hfo_consumption: 7435.37,
          lsfo_consumption: 5291.89,
          created_at: "2020-02-15 01:06:09"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 49.7049411,
          longitude: 16.8895083,
          current_speed: 8.9,
          hfo_consumption: 8050.7,
          lsfo_consumption: 2200.78,
          created_at: "2020-02-24 17:26:28"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: -7.37242,
          longitude: 110.6973469,
          current_speed: 23.8,
          hfo_consumption: 8819.92,
          lsfo_consumption: 3203.17,
          created_at: "2019-10-18 20:28:42"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 34.9852597,
          longitude: 133.4885513,
          current_speed: 17.9,
          hfo_consumption: 4124.06,
          lsfo_consumption: 1828.09,
          created_at: "2019-10-09 20:08:06"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 52.1705764,
          longitude: 17.6900802,
          current_speed: 10.0,
          hfo_consumption: 9027.15,
          lsfo_consumption: 2375.51,
          created_at: "2020-03-04 16:55:23"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 38.5783058,
          longitude: -7.7756872,
          current_speed: 6.6,
          hfo_consumption: 4746.55,
          lsfo_consumption: 4017.8,
          created_at: "2020-01-30 23:02:25"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 27.7845955,
          longitude: 120.6706833,
          current_speed: 22.1,
          hfo_consumption: 1716.59,
          lsfo_consumption: 1511.16,
          created_at: "2019-12-03 01:11:23"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 46.4566661,
          longitude: 33.8723511,
          current_speed: 3.4,
          hfo_consumption: 6950.14,
          lsfo_consumption: 4072.23,
          created_at: "2020-01-26 19:35:49"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 21.5500232,
          longitude: -77.2692503,
          current_speed: 13.3,
          hfo_consumption: 2130.15,
          lsfo_consumption: 5962.46,
          created_at: "2019-12-03 10:39:56"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 32.78,
          longitude: -96.8,
          current_speed: 17.2,
          hfo_consumption: 4765.78,
          lsfo_consumption: 4959.45,
          created_at: "2019-12-24 05:39:03"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 4.7524091,
          longitude: -55.0272904,
          current_speed: 5.7,
          hfo_consumption: 6173.25,
          lsfo_consumption: 3304.08,
          created_at: "2019-11-24 03:35:45"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 37.8010824,
          longitude: -97.3317391,
          current_speed: 11.6,
          hfo_consumption: 9682.35,
          lsfo_consumption: 8453.08,
          created_at: "2019-12-16 02:40:06"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 27.4404047,
          longitude: -82.5828377,
          current_speed: 12.4,
          hfo_consumption: 9656.15,
          lsfo_consumption: 1915.25,
          created_at: "2019-12-15 05:36:55"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: -9.718793,
          longitude: -65.395393,
          current_speed: 9.7,
          hfo_consumption: 6355.64,
          lsfo_consumption: 440.58,
          created_at: "2019-10-07 11:02:58"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 49.8788895,
          longitude: 6.1878416,
          current_speed: 14.5,
          hfo_consumption: 2206.81,
          lsfo_consumption: 6869.91,
          created_at: "2019-12-09 00:50:32"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 51.962948,
          longitude: -1.875716,
          current_speed: 3.8,
          hfo_consumption: 1899.3,
          lsfo_consumption: 9622.96,
          created_at: "2019-11-03 06:52:00"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 31.3115396,
          longitude: 120.6947551,
          current_speed: 23.8,
          hfo_consumption: 5351.94,
          lsfo_consumption: 9033.89,
          created_at: "2020-02-05 00:25:59"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -2.2027147,
          longitude: 115.2778317,
          current_speed: 5.9,
          hfo_consumption: 6914.68,
          lsfo_consumption: 5858.83,
          created_at: "2020-01-27 20:47:53"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -7.2526036,
          longitude: 108.4543113,
          current_speed: 7.8,
          hfo_consumption: 8380.46,
          lsfo_consumption: 3358.99,
          created_at: "2019-11-24 05:34:28"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: "57.14667",
          longitude: "33.10753",
          current_speed: 11.3,
          hfo_consumption: 9370.96,
          lsfo_consumption: 9631.03,
          created_at: "2019-11-15 01:16:11"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 40.767421,
          longitude: 73.3030715,
          current_speed: 8.8,
          hfo_consumption: 528.21,
          lsfo_consumption: 4651.07,
          created_at: "2019-11-01 21:23:41"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 22.821335,
          longitude: 113.515205,
          current_speed: 9.1,
          hfo_consumption: 34.58,
          lsfo_consumption: 5862.24,
          created_at: "2019-10-30 06:48:18"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: -19.5722805,
          longitude: -65.7550063,
          current_speed: 11.9,
          hfo_consumption: 8946.05,
          lsfo_consumption: 190.43,
          created_at: "2020-01-20 12:48:55"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: "48.64278",
          longitude: "97.61861",
          current_speed: 27.0,
          hfo_consumption: 9723.58,
          lsfo_consumption: 4361.31,
          created_at: "2020-03-06 14:54:21"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: -14.4760253,
          longitude: -70.6365505,
          current_speed: 8.4,
          hfo_consumption: 6025.06,
          lsfo_consumption: 1325.91,
          created_at: "2020-02-23 07:34:31"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: -18.1111446,
          longitude: -49.0009403,
          current_speed: 31.6,
          hfo_consumption: 8866.86,
          lsfo_consumption: 5967.61,
          created_at: "2020-02-12 12:59:37"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 44.934021,
          longitude: -123.3072848,
          current_speed: 14.5,
          hfo_consumption: 5879.36,
          lsfo_consumption: 7873.55,
          created_at: "2019-12-05 09:48:19"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 12.6532933,
          longitude: 8.4120775,
          current_speed: 1.4,
          hfo_consumption: 6087.98,
          lsfo_consumption: 3553.95,
          created_at: "2019-10-27 13:14:23"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 49.3564402,
          longitude: 17.3645179,
          current_speed: 19.1,
          hfo_consumption: 4013.9,
          lsfo_consumption: 1821.59,
          created_at: "2019-12-08 03:48:18"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 37.399373,
          longitude: 110.691139,
          current_speed: 24.4,
          hfo_consumption: 5343.8,
          lsfo_consumption: 9014.22,
          created_at: "2019-10-11 20:02:54"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 25.234479,
          longitude: 110.179953,
          current_speed: 10.4,
          hfo_consumption: 7309.19,
          lsfo_consumption: 7337.67,
          created_at: "2020-01-25 10:52:50"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 41.3047616,
          longitude: 69.2817267,
          current_speed: 29.3,
          hfo_consumption: 4232.97,
          lsfo_consumption: 4410.84,
          created_at: "2020-02-28 07:11:34"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 43.5141037,
          longitude: 16.1076867,
          current_speed: 25.7,
          hfo_consumption: 9358.3,
          lsfo_consumption: 3083.51,
          created_at: "2019-12-20 05:02:43"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 9.5700231,
          longitude: 123.312382,
          current_speed: 15.3,
          hfo_consumption: 2146.31,
          lsfo_consumption: 6437.74,
          created_at: "2020-02-07 10:56:27"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 50.444953,
          longitude: -104.3624353,
          current_speed: 3.0,
          hfo_consumption: 2393.37,
          lsfo_consumption: 398.33,
          created_at: "2019-12-11 02:43:35"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 59.8787345,
          longitude: 10.7810283,
          current_speed: 0.9,
          hfo_consumption: 1375.47,
          lsfo_consumption: 1577.1,
          created_at: "2020-01-28 08:16:45"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: -21.2755425,
          longitude: -47.3013532,
          current_speed: 30.4,
          hfo_consumption: 6148.38,
          lsfo_consumption: 9488.56,
          created_at: "2020-02-21 03:05:32"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 50.1806728,
          longitude: 13.3809361,
          current_speed: 7.6,
          hfo_consumption: 1633.13,
          lsfo_consumption: 2918.5,
          created_at: "2019-10-14 23:14:25"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: -15.6093293,
          longitude: -72.0896229,
          current_speed: 26.0,
          hfo_consumption: 4250.71,
          lsfo_consumption: 9052.63,
          created_at: "2019-12-27 06:39:32"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 29.9460643,
          longitude: 122.3032914,
          current_speed: 28.9,
          hfo_consumption: 6563.45,
          lsfo_consumption: 5922.42,
          created_at: "2020-02-05 18:44:52"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 48.0451251,
          longitude: 30.8884315,
          current_speed: 21.0,
          hfo_consumption: 3586.75,
          lsfo_consumption: 3923.23,
          created_at: "2019-12-08 07:38:30"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 34.270691,
          longitude: 99.194957,
          current_speed: 11.4,
          hfo_consumption: 7084.44,
          lsfo_consumption: 1246.92,
          created_at: "2020-02-16 15:16:23"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 21.4692055,
          longitude: 101.799742,
          current_speed: 23.1,
          hfo_consumption: 8247.27,
          lsfo_consumption: 9642.5,
          created_at: "2019-11-05 06:10:40"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 12.6234721,
          longitude: -87.1273253,
          current_speed: 26.3,
          hfo_consumption: 3205.11,
          lsfo_consumption: 7059.31,
          created_at: "2020-01-27 16:38:37"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 63.9060413,
          longitude: 24.5144506,
          current_speed: 20.3,
          hfo_consumption: 8648.78,
          lsfo_consumption: 5301.64,
          created_at: "2020-03-09 19:47:20"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 14.6760848,
          longitude: 120.9873093,
          current_speed: 23.4,
          hfo_consumption: 4755.82,
          lsfo_consumption: 5419.95,
          created_at: "2019-11-11 10:30:20"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 49.9164727,
          longitude: 18.1627822,
          current_speed: 30.6,
          hfo_consumption: 3404.35,
          lsfo_consumption: 2773.98,
          created_at: "2019-10-26 10:54:04"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 35.375873,
          longitude: 139.1671308,
          current_speed: 26.0,
          hfo_consumption: 4868.62,
          lsfo_consumption: 1344.16,
          created_at: "2020-01-13 04:37:56"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 46.204501,
          longitude: 47.851999,
          current_speed: 23.1,
          hfo_consumption: 7816.95,
          lsfo_consumption: 3091.35,
          created_at: "2020-01-22 21:30:46"
        },

        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 37.4202216,
          longitude: 66.0195894,
          current_speed: 10.2,
          hfo_consumption: 7950.0,
          lsfo_consumption: 9180.46,
          created_at: "2020-02-07 03:48:03"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 55.2763668,
          longitude: 61.9012109,
          current_speed: 8.0,
          hfo_consumption: 8471.98,
          lsfo_consumption: 4367.81,
          created_at: "2020-03-08 04:50:31"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 22.803694,
          longitude: 108.3323803,
          current_speed: 6.0,
          hfo_consumption: 116.69,
          lsfo_consumption: 8579.5,
          created_at: "2020-01-19 09:55:52"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: -33.6167,
          longitude: -70.5667,
          current_speed: 17.8,
          hfo_consumption: 918.39,
          lsfo_consumption: 2364.61,
          created_at: "2019-12-24 13:28:22"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 67.6107356,
          longitude: 33.6724007,
          current_speed: 25.3,
          hfo_consumption: 8300.34,
          lsfo_consumption: 7148.16,
          created_at: "2020-02-27 10:23:50"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: -7.6873253,
          longitude: 112.116195,
          current_speed: 23.3,
          hfo_consumption: 8431.91,
          lsfo_consumption: 2834.82,
          created_at: "2020-01-18 03:57:51"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -9.7083227,
          longitude: 119.3279386,
          current_speed: 1.7,
          hfo_consumption: 9328.89,
          lsfo_consumption: 5370.65,
          created_at: "2019-10-31 04:44:28"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 36.650038,
          longitude: 101.766228,
          current_speed: 3.4,
          hfo_consumption: 6315.35,
          lsfo_consumption: 748.32,
          created_at: "2019-12-18 11:46:17"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 29.444529,
          longitude: 121.04024,
          current_speed: 27.4,
          hfo_consumption: 742.68,
          lsfo_consumption: 6058.54,
          created_at: "2020-03-03 15:04:35"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 51.6711341,
          longitude: 20.1795118,
          current_speed: 27.4,
          hfo_consumption: 9915.67,
          lsfo_consumption: 8662.25,
          created_at: "2019-10-24 20:47:57"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -27.97499,
          longitude: 30.69633,
          current_speed: 14.2,
          hfo_consumption: 108.05,
          lsfo_consumption: 2161.22,
          created_at: "2019-11-23 20:30:13"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 27.894504,
          longitude: 102.264449,
          current_speed: 26.2,
          hfo_consumption: 1980.99,
          lsfo_consumption: 5021.55,
          created_at: "2020-01-11 13:34:07"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 38.465785,
          longitude: 106.278153,
          current_speed: 11.2,
          hfo_consumption: 1275.1,
          lsfo_consumption: 6819.43,
          created_at: "2020-02-16 18:01:35"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: "45.53338",
          longitude: "-73.21585",
          current_speed: 26.0,
          hfo_consumption: 832.23,
          lsfo_consumption: 1333.12,
          created_at: "2020-02-17 07:30:22"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 42.9979838,
          longitude: -76.1377935,
          current_speed: 1.3,
          hfo_consumption: 1627.74,
          lsfo_consumption: 6322.85,
          created_at: "2019-10-30 01:14:12"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 8.8702881,
          longitude: -79.810063,
          current_speed: 6.9,
          hfo_consumption: 7335.04,
          lsfo_consumption: 5273.24,
          created_at: "2019-11-11 20:55:51"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 7.665099,
          longitude: -76.67749,
          current_speed: 13.6,
          hfo_consumption: 177.51,
          lsfo_consumption: 8975.52,
          created_at: "2020-02-21 17:40:10"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 27.993828,
          longitude: 120.699361,
          current_speed: 21.2,
          hfo_consumption: 802.39,
          lsfo_consumption: 1953.45,
          created_at: "2019-12-28 07:22:37"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 47.4636372,
          longitude: -79.4387857,
          current_speed: 28.2,
          hfo_consumption: 3653.09,
          lsfo_consumption: 8223.36,
          created_at: "2020-01-21 11:53:56"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 5.8330136,
          longitude: -72.9342451,
          current_speed: 26.2,
          hfo_consumption: 3794.16,
          lsfo_consumption: 823.36,
          created_at: "2019-10-16 20:40:06"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 15.7377569,
          longitude: 120.6348716,
          current_speed: 23.6,
          hfo_consumption: 392.52,
          lsfo_consumption: 2751.89,
          created_at: "2019-10-07 03:52:29"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 37.7789529,
          longitude: 26.8912124,
          current_speed: 12.6,
          hfo_consumption: 5252.38,
          lsfo_consumption: 9966.04,
          created_at: "2019-10-10 08:04:20"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 4.6077979,
          longitude: 97.0202754,
          current_speed: 25.8,
          hfo_consumption: 9764.68,
          lsfo_consumption: 9192.88,
          created_at: "2020-01-25 22:35:09"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 25.890008,
          longitude: 119.585442,
          current_speed: 18.8,
          hfo_consumption: 122.21,
          lsfo_consumption: 7146.63,
          created_at: "2019-12-11 08:55:12"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 6.5411018,
          longitude: 101.2804075,
          current_speed: 28.2,
          hfo_consumption: 1823.82,
          lsfo_consumption: 5236.93,
          created_at: "2019-12-18 12:18:16"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: -22.9916783,
          longitude: -45.5651683,
          current_speed: 21.4,
          hfo_consumption: 4012.98,
          lsfo_consumption: 4879.35,
          created_at: "2019-10-22 05:37:27"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 30.265327,
          longitude: 108.705237,
          current_speed: 3.1,
          hfo_consumption: 8767.51,
          lsfo_consumption: 8791.07,
          created_at: "2019-10-21 09:41:08"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -23.1067087,
          longitude: -48.6123867,
          current_speed: 3.0,
          hfo_consumption: 3665.72,
          lsfo_consumption: 9722.21,
          created_at: "2019-10-22 20:51:36"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 25.692699,
          longitude: 117.847115,
          current_speed: 17.0,
          hfo_consumption: 1319.55,
          lsfo_consumption: 9220.04,
          created_at: "2020-01-16 23:02:48"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 20.995464,
          longitude: 106.3346061,
          current_speed: 16.3,
          hfo_consumption: 8888.09,
          lsfo_consumption: 6959.78,
          created_at: "2020-02-16 02:03:54"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: -10.6527113,
          longitude: 123.2307067,
          current_speed: 8.9,
          hfo_consumption: 6320.05,
          lsfo_consumption: 8093.08,
          created_at: "2019-12-21 21:29:01"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: -4.1731846,
          longitude: -38.460945,
          current_speed: 13.9,
          hfo_consumption: 6702.43,
          lsfo_consumption: 1875.91,
          created_at: "2019-11-18 03:36:49"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: -23.2987827,
          longitude: -45.9662542,
          current_speed: 7.7,
          hfo_consumption: 6850.11,
          lsfo_consumption: 9150.46,
          created_at: "2019-10-09 01:15:10"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -0.6000092,
          longitude: 100.8564355,
          current_speed: 9.6,
          hfo_consumption: 2198.69,
          lsfo_consumption: 5149.59,
          created_at: "2019-11-15 02:14:52"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 6.6650328,
          longitude: 159.7540106,
          current_speed: 9.6,
          hfo_consumption: 8141.08,
          lsfo_consumption: 686.79,
          created_at: "2020-01-02 06:45:09"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 40.505361,
          longitude: 80.461556,
          current_speed: 29.5,
          hfo_consumption: 4672.68,
          lsfo_consumption: 9019.5,
          created_at: "2019-12-27 01:04:31"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 45.448409,
          longitude: -73.858939,
          current_speed: 18.7,
          hfo_consumption: 3029.94,
          lsfo_consumption: 8000.69,
          created_at: "2019-10-13 15:40:58"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 58.00284,
          longitude: 55.6720592,
          current_speed: 17.1,
          hfo_consumption: 5911.02,
          lsfo_consumption: 2489.02,
          created_at: "2019-12-23 19:45:05"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 10.527572,
          longitude: 125.16258,
          current_speed: 2.6,
          hfo_consumption: 5373.13,
          lsfo_consumption: 2258.82,
          created_at: "2019-11-20 13:41:13"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: "-8.21304",
          longitude: "114.15636",
          current_speed: 8.0,
          hfo_consumption: 7440.23,
          lsfo_consumption: 5926.51,
          created_at: "2019-10-15 23:32:18"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: -22.7106685,
          longitude: -43.5522256,
          current_speed: 4.9,
          hfo_consumption: 1532.21,
          lsfo_consumption: 6750.86,
          created_at: "2019-11-29 00:31:43"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 46.585652,
          longitude: 123.915392,
          current_speed: 30.4,
          hfo_consumption: 9271.37,
          lsfo_consumption: 9064.93,
          created_at: "2019-11-20 07:38:03"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 27.720727,
          longitude: 118.132068,
          current_speed: 13.3,
          hfo_consumption: 2184.01,
          lsfo_consumption: 2460.18,
          created_at: "2020-03-01 06:19:47"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -23.0886496,
          longitude: -47.2089525,
          current_speed: 20.5,
          hfo_consumption: 1534.72,
          lsfo_consumption: 8682.72,
          created_at: "2019-10-30 11:43:12"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: -29.8697861,
          longitude: 31.0462562,
          current_speed: 2.0,
          hfo_consumption: 8752.23,
          lsfo_consumption: 9228.79,
          created_at: "2019-12-09 06:54:48"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: -8.0119417,
          longitude: 111.8941208,
          current_speed: 5.0,
          hfo_consumption: 6160.05,
          lsfo_consumption: 2063.84,
          created_at: "2019-12-15 17:03:08"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 55.7859618,
          longitude: 27.4327467,
          current_speed: 21.9,
          hfo_consumption: 7415.38,
          lsfo_consumption: 5820.39,
          created_at: "2020-03-05 22:25:07"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -8.6931631,
          longitude: -67.952363,
          current_speed: 18.2,
          hfo_consumption: 4217.59,
          lsfo_consumption: 8466.73,
          created_at: "2020-01-02 17:22:44"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 37.3621185,
          longitude: 49.1314769,
          current_speed: 22.3,
          hfo_consumption: 9758.81,
          lsfo_consumption: 4591.65,
          created_at: "2020-02-10 03:05:54"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 34.341574,
          longitude: 108.93977,
          current_speed: 16.1,
          hfo_consumption: 1830.71,
          lsfo_consumption: 886.09,
          created_at: "2020-01-20 18:45:41"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 22.837926,
          longitude: 108.319371,
          current_speed: 11.5,
          hfo_consumption: 4259.59,
          lsfo_consumption: 5205.6,
          created_at: "2019-12-04 05:40:42"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: -6.987312,
          longitude: 110.389141,
          current_speed: 23.2,
          hfo_consumption: 2116.57,
          lsfo_consumption: 9442.22,
          created_at: "2020-02-08 14:13:23"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 43.4945737,
          longitude: 5.8978018,
          current_speed: 25.6,
          hfo_consumption: 437.68,
          lsfo_consumption: 2340.59,
          created_at: "2020-01-25 18:51:00"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 35.8082177,
          longitude: 37.2530686,
          current_speed: 12.5,
          hfo_consumption: 6017.05,
          lsfo_consumption: 6573.71,
          created_at: "2019-11-20 07:49:03"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 46.6473105,
          longitude: 0.813275,
          current_speed: 11.9,
          hfo_consumption: 1791.66,
          lsfo_consumption: 7500.38,
          created_at: "2019-11-07 11:37:30"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 32.92312,
          longitude: 115.805297,
          current_speed: 1.6,
          hfo_consumption: 5666.01,
          lsfo_consumption: 900.14,
          created_at: "2019-10-07 11:36:00"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 38.153853,
          longitude: 114.152004,
          current_speed: 21.2,
          hfo_consumption: 8671.56,
          lsfo_consumption: 1874.58,
          created_at: "2019-12-18 01:19:46"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 53.1980031,
          longitude: 19.6444061,
          current_speed: 8.0,
          hfo_consumption: 8174.16,
          lsfo_consumption: 6828.49,
          created_at: "2020-02-04 14:01:42"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 26.4363523,
          longitude: 106.5589556,
          current_speed: 9.8,
          hfo_consumption: 4557.97,
          lsfo_consumption: 7523.47,
          created_at: "2019-11-04 04:52:22"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 18.745638,
          longitude: 100.7953911,
          current_speed: 28.8,
          hfo_consumption: 5933.15,
          lsfo_consumption: 6600.2,
          created_at: "2019-11-16 02:43:41"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 27.820107,
          longitude: 105.965695,
          current_speed: 5.8,
          hfo_consumption: 9341.35,
          lsfo_consumption: 1334.76,
          created_at: "2019-11-20 14:16:24"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 40.8631854,
          longitude: -7.5780825,
          current_speed: 22.0,
          hfo_consumption: 949.87,
          lsfo_consumption: 6670.38,
          created_at: "2019-11-22 08:51:38"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: -25.1860913,
          longitude: -49.3164138,
          current_speed: 10.7,
          hfo_consumption: 4000.39,
          lsfo_consumption: 2072.46,
          created_at: "2019-12-09 15:04:44"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: "56.37737",
          longitude: "37.32871",
          current_speed: 17.4,
          hfo_consumption: 9881.36,
          lsfo_consumption: 6791.48,
          created_at: "2019-10-07 06:15:05"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 47.4325252,
          longitude: 19.157136,
          current_speed: 3.0,
          hfo_consumption: 1978.31,
          lsfo_consumption: 6346.31,
          created_at: "2020-02-22 14:51:36"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 49.7365816,
          longitude: 19.4856654,
          current_speed: 19.8,
          hfo_consumption: 7993.0,
          lsfo_consumption: 4091.8,
          created_at: "2020-02-13 04:28:53"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: -0.4359644,
          longitude: 30.5729962,
          current_speed: 15.7,
          hfo_consumption: 8525.85,
          lsfo_consumption: 9231.15,
          created_at: "2019-10-22 16:03:08"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -23.2248099,
          longitude: -47.4882762,
          current_speed: 25.7,
          hfo_consumption: 1044.09,
          lsfo_consumption: 3168.22,
          created_at: "2020-01-27 06:45:43"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 55.580853,
          longitude: 38.136671,
          current_speed: 7.0,
          hfo_consumption: 2987.82,
          lsfo_consumption: 4961.04,
          created_at: "2019-10-27 13:40:14"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 39.9996674,
          longitude: 116.3264439,
          current_speed: 2.3,
          hfo_consumption: 2373.38,
          lsfo_consumption: 3823.14,
          created_at: "2020-02-02 04:22:20"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 49.0813568,
          longitude: 13.9584191,
          current_speed: 8.7,
          hfo_consumption: 5087.93,
          lsfo_consumption: 3420.24,
          created_at: "2019-12-16 23:59:52"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 34.6533451,
          longitude: 135.5119682,
          current_speed: 4.1,
          hfo_consumption: 733.36,
          lsfo_consumption: 3986.47,
          created_at: "2019-12-25 11:08:50"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 23.021478,
          longitude: 113.121435,
          current_speed: 27.0,
          hfo_consumption: 1010.95,
          lsfo_consumption: 8131.65,
          created_at: "2020-03-04 19:19:06"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 36.7285907,
          longitude: 68.8680663,
          current_speed: 15.2,
          hfo_consumption: 2177.18,
          lsfo_consumption: 9448.7,
          created_at: "2019-10-31 23:54:35"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 40.5047756,
          longitude: -8.529346,
          current_speed: 21.9,
          hfo_consumption: 8020.42,
          lsfo_consumption: 1373.91,
          created_at: "2019-11-27 22:38:50"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 8.1243943,
          longitude: 124.0495898,
          current_speed: 10.9,
          hfo_consumption: 7996.76,
          lsfo_consumption: 7104.54,
          created_at: "2020-01-09 18:04:35"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 1.9530448,
          longitude: 32.1391217,
          current_speed: 18.7,
          hfo_consumption: 6631.7,
          lsfo_consumption: 3578.26,
          created_at: "2019-11-26 14:36:23"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 41.076226,
          longitude: 113.969618,
          current_speed: 19.3,
          hfo_consumption: 5030.03,
          lsfo_consumption: 8012.25,
          created_at: "2020-01-23 10:52:34"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 7.935298,
          longitude: -68.917999,
          current_speed: 22.0,
          hfo_consumption: 6931.52,
          lsfo_consumption: 3404.07,
          created_at: "2019-10-19 12:01:01"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 37.13,
          longitude: -84.08,
          current_speed: 6.5,
          hfo_consumption: 5459.41,
          lsfo_consumption: 7353.09,
          created_at: "2020-01-30 19:20:31"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 28.9301227,
          longitude: 99.8001946,
          current_speed: 18.6,
          hfo_consumption: 5790.15,
          lsfo_consumption: 5840.61,
          created_at: "2019-10-20 20:02:52"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 8.5914775,
          longitude: 16.0757749,
          current_speed: 23.3,
          hfo_consumption: 9016.77,
          lsfo_consumption: 5151.49,
          created_at: "2019-11-02 11:56:47"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 36.3276673,
          longitude: 138.8951009,
          current_speed: 8.6,
          hfo_consumption: 8855.44,
          lsfo_consumption: 7093.9,
          created_at: "2019-12-26 11:15:58"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 41.554479,
          longitude: 121.725015,
          current_speed: 9.5,
          hfo_consumption: 423.15,
          lsfo_consumption: 1327.98,
          created_at: "2020-01-30 17:20:53"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -12.2179111,
          longitude: -76.5148607,
          current_speed: 18.6,
          hfo_consumption: 2625.2,
          lsfo_consumption: 8944.56,
          created_at: "2020-01-14 18:37:57"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 32.699635,
          longitude: 35.303546,
          current_speed: 24.9,
          hfo_consumption: 965.94,
          lsfo_consumption: 4697.56,
          created_at: "2019-11-23 21:00:24"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -3.1703446,
          longitude: 139.0817124,
          current_speed: 10.3,
          hfo_consumption: 2262.46,
          lsfo_consumption: 3766.57,
          created_at: "2019-11-12 14:59:23"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: -6.2167736,
          longitude: 106.5230542,
          current_speed: 2.5,
          hfo_consumption: 6075.14,
          lsfo_consumption: 8854.1,
          created_at: "2019-10-13 02:41:30"
        },

        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: "8.37083",
          longitude: "124.55944",
          current_speed: 17.0,
          hfo_consumption: 3246.96,
          lsfo_consumption: 7692.66,
          created_at: "2019-11-14 02:36:23"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 5.8833366,
          longitude: 118.0357162,
          current_speed: 22.3,
          hfo_consumption: 4401.9,
          lsfo_consumption: 2989.55,
          created_at: "2020-01-13 21:34:53"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 42.4947806,
          longitude: -90.7164246,
          current_speed: 1.3,
          hfo_consumption: 5272.29,
          lsfo_consumption: 4781.21,
          created_at: "2019-12-29 14:11:30"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 53.3004898,
          longitude: -6.2634596,
          current_speed: 14.0,
          hfo_consumption: 3441.16,
          lsfo_consumption: 1542.8,
          created_at: "2019-10-10 09:13:41"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -2.8852569,
          longitude: 104.687936,
          current_speed: 21.5,
          hfo_consumption: 8571.05,
          lsfo_consumption: 4283.44,
          created_at: "2019-10-15 13:11:42"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 37.2425649,
          longitude: 111.8568586,
          current_speed: 24.1,
          hfo_consumption: 624.3,
          lsfo_consumption: 3530.17,
          created_at: "2020-02-10 09:59:19"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 31.746017,
          longitude: 120.803452,
          current_speed: 21.8,
          hfo_consumption: 7322.14,
          lsfo_consumption: 7165.43,
          created_at: "2020-01-17 15:31:26"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 31.820591,
          longitude: 117.227219,
          current_speed: 20.2,
          hfo_consumption: 8453.31,
          lsfo_consumption: 964.74,
          created_at: "2019-12-27 18:04:36"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 40.99259,
          longitude: 21.4208548,
          current_speed: 28.4,
          hfo_consumption: 8626.16,
          lsfo_consumption: 9228.85,
          created_at: "2019-12-25 15:27:29"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -12.09985,
          longitude: -77.0197479,
          current_speed: 32.0,
          hfo_consumption: 3595.35,
          lsfo_consumption: 6397.58,
          created_at: "2019-11-17 01:25:02"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 30.8273337,
          longitude: 74.1000849,
          current_speed: 12.8,
          hfo_consumption: 9124.02,
          lsfo_consumption: 9194.65,
          created_at: "2020-02-08 03:19:07"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: -10.9666739,
          longitude: -37.2544065,
          current_speed: 26.9,
          hfo_consumption: 9667.56,
          lsfo_consumption: 1771.38,
          created_at: "2020-01-26 06:22:24"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 39.9061718,
          longitude: 20.0613438,
          current_speed: 4.0,
          hfo_consumption: 7119.02,
          lsfo_consumption: 9911.79,
          created_at: "2019-12-10 03:51:58"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: "43.46802",
          longitude: "132.46674",
          current_speed: 16.2,
          hfo_consumption: 8070.16,
          lsfo_consumption: 1563.29,
          created_at: "2019-11-26 13:11:45"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 9.0568265,
          longitude: 6.1434201,
          current_speed: 16.5,
          hfo_consumption: 4569.9,
          lsfo_consumption: 2056.41,
          created_at: "2019-11-06 10:58:50"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 29.8044311,
          longitude: 71.7406583,
          current_speed: 4.1,
          hfo_consumption: 1502.64,
          lsfo_consumption: 6264.19,
          created_at: "2019-11-19 11:26:02"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 49.4263976,
          longitude: 2.0887457,
          current_speed: 22.4,
          hfo_consumption: 7034.82,
          lsfo_consumption: 8813.04,
          created_at: "2020-01-09 16:07:26"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 58.5336853,
          longitude: 59.0754123,
          current_speed: 8.5,
          hfo_consumption: 5733.06,
          lsfo_consumption: 7135.86,
          created_at: "2020-01-12 19:06:14"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: -17.4776078,
          longitude: -70.0339387,
          current_speed: 28.4,
          hfo_consumption: 9243.71,
          lsfo_consumption: 7974.23,
          created_at: "2019-12-28 05:10:34"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: "-9.5128",
          longitude: "120.1979",
          current_speed: 25.7,
          hfo_consumption: 419.4,
          lsfo_consumption: 6006.61,
          created_at: "2019-11-10 06:13:53"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 13.9501075,
          longitude: 7.6710889,
          current_speed: 2.9,
          hfo_consumption: 7331.4,
          lsfo_consumption: 1822.93,
          created_at: "2019-11-05 10:57:32"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 53.3800563,
          longitude: 18.946898,
          current_speed: 20.4,
          hfo_consumption: 7141.25,
          lsfo_consumption: 4768.0,
          created_at: "2020-02-10 07:16:13"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 30.5139542,
          longitude: 120.1436675,
          current_speed: 14.4,
          hfo_consumption: 149.23,
          lsfo_consumption: 8758.45,
          created_at: "2019-10-17 03:46:47"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: -51.6211286,
          longitude: -69.2142863,
          current_speed: 9.2,
          hfo_consumption: 3137.71,
          lsfo_consumption: 8196.41,
          created_at: "2019-12-15 10:12:53"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 49.7370109,
          longitude: 17.427878,
          current_speed: 28.8,
          hfo_consumption: 9172.97,
          lsfo_consumption: 7500.51,
          created_at: "2019-12-15 20:34:12"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 36.1029484,
          longitude: 139.4593556,
          current_speed: 12.0,
          hfo_consumption: 9220.79,
          lsfo_consumption: 6727.16,
          created_at: "2020-02-02 18:53:03"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 44.1640152,
          longitude: 3.8481099,
          current_speed: 16.7,
          hfo_consumption: 9337.41,
          lsfo_consumption: 3947.75,
          created_at: "2019-12-20 10:24:49"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 50.3901526,
          longitude: 106.1051454,
          current_speed: 28.6,
          hfo_consumption: 6926.79,
          lsfo_consumption: 6709.78,
          created_at: "2019-10-07 07:04:30"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 11.7808864,
          longitude: 9.597952,
          current_speed: 14.2,
          hfo_consumption: 5629.2,
          lsfo_consumption: 3032.84,
          created_at: "2019-10-10 07:42:53"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 41.1155359,
          longitude: 70.1039032,
          current_speed: 7.8,
          hfo_consumption: 2273.44,
          lsfo_consumption: 585.46,
          created_at: "2019-12-12 22:22:08"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: "-8.2794",
          longitude: "113.4073",
          current_speed: 20.3,
          hfo_consumption: 6658.66,
          lsfo_consumption: 878.73,
          created_at: "2020-02-22 12:24:53"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 45.788378,
          longitude: 3.1331436,
          current_speed: 11.7,
          hfo_consumption: 8849.66,
          lsfo_consumption: 2515.72,
          created_at: "2020-01-17 21:28:50"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 4.817986,
          longitude: -72.280702,
          current_speed: 11.1,
          hfo_consumption: 3948.42,
          lsfo_consumption: 4251.44,
          created_at: "2019-11-03 01:05:56"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: -8.7896834,
          longitude: 116.2836124,
          current_speed: 19.7,
          hfo_consumption: 6230.35,
          lsfo_consumption: 9531.53,
          created_at: "2019-10-24 10:07:13"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 5.7179173,
          longitude: 7.0821162,
          current_speed: 14.3,
          hfo_consumption: 3761.56,
          lsfo_consumption: 2675.31,
          created_at: "2019-11-07 00:24:33"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 7.1934002,
          longitude: 15.2180188,
          current_speed: 16.8,
          hfo_consumption: 6814.4,
          lsfo_consumption: 7288.87,
          created_at: "2020-02-22 21:54:13"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 22.3407612,
          longitude: -80.5577336,
          current_speed: 16.0,
          hfo_consumption: 1986.5,
          lsfo_consumption: 2378.98,
          created_at: "2020-03-01 16:16:54"
        },

        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 53.470219,
          longitude: 51.5123156,
          current_speed: 21.2,
          hfo_consumption: 9486.21,
          lsfo_consumption: 4417.37,
          created_at: "2020-02-15 13:29:58"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 11.8334463,
          longitude: -86.1662742,
          current_speed: 10.7,
          hfo_consumption: 1.57,
          lsfo_consumption: 367.36,
          created_at: "2020-02-20 00:28:01"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 53.8996586,
          longitude: -6.391149,
          current_speed: 11.4,
          hfo_consumption: 1156.65,
          lsfo_consumption: 3736.64,
          created_at: "2019-10-24 17:19:24"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 38.5298862,
          longitude: -28.5185092,
          current_speed: 29.5,
          hfo_consumption: 7975.48,
          lsfo_consumption: 2923.19,
          created_at: "2019-10-14 05:15:08"
        },

        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 30.940195,
          longitude: 118.75868,
          current_speed: 18.2,
          hfo_consumption: 7535.14,
          lsfo_consumption: 5252.81,
          created_at: "2020-02-05 16:18:30"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 32.305011,
          longitude: 34.911731,
          current_speed: 3.5,
          hfo_consumption: 5881.25,
          lsfo_consumption: 3951.87,
          created_at: "2019-11-05 03:20:31"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: -1.145463,
          longitude: 136.0396342,
          current_speed: 6.5,
          hfo_consumption: 4571.27,
          lsfo_consumption: 7028.08,
          created_at: "2020-01-29 07:47:06"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 42.0275439,
          longitude: 23.9915523,
          current_speed: 30.3,
          hfo_consumption: 7057.44,
          lsfo_consumption: 1505.0,
          created_at: "2019-12-23 04:11:56"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 28.168408,
          longitude: 120.482198,
          current_speed: 14.4,
          hfo_consumption: 1407.44,
          lsfo_consumption: 5977.13,
          created_at: "2020-02-26 14:20:05"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 49.3581406,
          longitude: 0.0676641,
          current_speed: 18.6,
          hfo_consumption: 8252.3,
          lsfo_consumption: 3111.49,
          created_at: "2020-01-17 14:41:20"
        },

        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 16.4422479,
          longitude: 95.7220845,
          current_speed: 8.3,
          hfo_consumption: 505.17,
          lsfo_consumption: 1139.43,
          created_at: "2020-02-25 22:29:08"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 52.3582468,
          longitude: 5.5106628,
          current_speed: 7.1,
          hfo_consumption: 2255.55,
          lsfo_consumption: 6912.09,
          created_at: "2020-02-10 20:49:45"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 9.8965273,
          longitude: 8.8583309,
          current_speed: 11.0,
          hfo_consumption: 6101.62,
          lsfo_consumption: 5145.94,
          created_at: "2019-10-23 18:43:05"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 26.885704,
          longitude: 120.005147,
          current_speed: 22.1,
          hfo_consumption: 6111.06,
          lsfo_consumption: 990.18,
          created_at: "2020-01-31 00:31:26"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 51.5320956,
          longitude: 17.9737831,
          current_speed: 12.8,
          hfo_consumption: 3106.21,
          lsfo_consumption: 6506.25,
          created_at: "2019-11-14 10:41:43"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: -20.4703278,
          longitude: -45.1120424,
          current_speed: 11.4,
          hfo_consumption: 1284.47,
          lsfo_consumption: 7217.11,
          created_at: "2020-01-04 22:25:42"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 36.702014,
          longitude: 117.646567,
          current_speed: 7.3,
          hfo_consumption: 6276.85,
          lsfo_consumption: 4431.82,
          created_at: "2019-10-31 15:40:08"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 23.021478,
          longitude: 113.121435,
          current_speed: 25.3,
          hfo_consumption: 8193.73,
          lsfo_consumption: 9063.03,
          created_at: "2020-03-07 18:33:24"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 50.8446443,
          longitude: 5.6735818,
          current_speed: 2.2,
          hfo_consumption: 611.58,
          lsfo_consumption: 4347.77,
          created_at: "2019-11-23 06:44:42"
        },

        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: "-6.5055",
          longitude: "106.4959",
          current_speed: 3.7,
          hfo_consumption: 3978.9,
          lsfo_consumption: 1668.7,
          created_at: "2020-02-09 21:36:02"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 32.596752,
          longitude: 95.308054,
          current_speed: 22.9,
          hfo_consumption: 1283.82,
          lsfo_consumption: 7409.17,
          created_at: "2020-02-16 20:41:58"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 8.0275138,
          longitude: 79.8367828,
          current_speed: 20.4,
          hfo_consumption: 6944.24,
          lsfo_consumption: 8834.24,
          created_at: "2020-01-02 21:46:36"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 31.298974,
          longitude: 120.585289,
          current_speed: 26.5,
          hfo_consumption: 8768.45,
          lsfo_consumption: 6170.55,
          created_at: "2020-02-03 00:30:00"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 23.3790333,
          longitude: 113.7632828,
          current_speed: 15.1,
          hfo_consumption: 7471.57,
          lsfo_consumption: 5427.99,
          created_at: "2020-02-12 20:34:07"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -6.1037944,
          longitude: 106.9145244,
          current_speed: 14.6,
          hfo_consumption: 4179.27,
          lsfo_consumption: 1251.53,
          created_at: "2020-02-19 08:20:52"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 61.2429355,
          longitude: 28.9205449,
          current_speed: 21.7,
          hfo_consumption: 1516.26,
          lsfo_consumption: 3942.12,
          created_at: "2019-12-29 22:57:25"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 45.106849,
          longitude: -0.6297654,
          current_speed: 17.8,
          hfo_consumption: 7683.17,
          lsfo_consumption: 8182.24,
          created_at: "2020-01-20 11:58:43"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 35.2452552,
          longitude: 24.4523968,
          current_speed: 20.1,
          hfo_consumption: 7774.63,
          lsfo_consumption: 805.57,
          created_at: "2019-12-30 19:34:02"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: -3.701499,
          longitude: -40.3496894,
          current_speed: 7.8,
          hfo_consumption: 8626.36,
          lsfo_consumption: 6540.46,
          created_at: "2019-10-18 08:35:01"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: -10.9472468,
          longitude: -37.0730823,
          current_speed: 28.4,
          hfo_consumption: 8900.11,
          lsfo_consumption: 5576.83,
          created_at: "2019-12-14 03:55:36"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 49.9747505,
          longitude: 16.40677,
          current_speed: 31.3,
          hfo_consumption: 8139.01,
          lsfo_consumption: 4591.75,
          created_at: "2020-01-30 12:10:40"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 37.9380466,
          longitude: -8.184571,
          current_speed: 26.9,
          hfo_consumption: 7387.47,
          lsfo_consumption: 945.24,
          created_at: "2019-12-13 15:12:49"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 25.7784224,
          longitude: -103.2605763,
          current_speed: 5.8,
          hfo_consumption: 5263.56,
          lsfo_consumption: 7852.46,
          created_at: "2020-03-08 14:42:14"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -12.5057978,
          longitude: -38.5270305,
          current_speed: 1.4,
          hfo_consumption: 2825.39,
          lsfo_consumption: 5739.04,
          created_at: "2020-02-23 08:08:43"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 26.6849798,
          longitude: 100.7492159,
          current_speed: 25.5,
          hfo_consumption: 6045.83,
          lsfo_consumption: 7094.57,
          created_at: "2020-01-22 16:37:31"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 41.76,
          longitude: -72.74,
          current_speed: 13.8,
          hfo_consumption: 2594.58,
          lsfo_consumption: 8791.36,
          created_at: "2020-01-06 05:39:11"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 37.187796,
          longitude: 115.387259,
          current_speed: 24.6,
          hfo_consumption: 7444.15,
          lsfo_consumption: 8948.1,
          created_at: "2019-10-25 21:07:30"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 34.3983716,
          longitude: -2.8935028,
          current_speed: 9.7,
          hfo_consumption: 1277.29,
          lsfo_consumption: 9714.87,
          created_at: "2020-02-01 03:24:41"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: -7.5407175,
          longitude: 110.4457241,
          current_speed: 25.1,
          hfo_consumption: 1067.14,
          lsfo_consumption: 4621.51,
          created_at: "2019-11-14 16:16:33"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 13.274365,
          longitude: 120.618416,
          current_speed: 13.8,
          hfo_consumption: 4250.1,
          lsfo_consumption: 1903.9,
          created_at: "2019-10-25 23:26:37"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 49.5595208,
          longitude: 19.0310166,
          current_speed: 11.1,
          hfo_consumption: 3162.27,
          lsfo_consumption: 142.25,
          created_at: "2019-11-03 08:46:43"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: -26.113239,
          longitude: 28.3505779,
          current_speed: 1.3,
          hfo_consumption: 5154.15,
          lsfo_consumption: 7456.6,
          created_at: "2019-12-30 11:43:03"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 41.9253854,
          longitude: 43.4907611,
          current_speed: 27.6,
          hfo_consumption: 973.09,
          lsfo_consumption: 5867.45,
          created_at: "2019-10-26 08:39:18"
        },

        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 42.3745311,
          longitude: -88.1263369,
          current_speed: 17.7,
          hfo_consumption: 7478.82,
          lsfo_consumption: 9304.77,
          created_at: "2020-01-30 16:03:21"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 14.5473421,
          longitude: 120.997522,
          current_speed: 21.4,
          hfo_consumption: 6186.9,
          lsfo_consumption: 6319.99,
          created_at: "2020-02-20 16:50:35"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: -2.688962,
          longitude: 111.622398,
          current_speed: 13.7,
          hfo_consumption: 2586.85,
          lsfo_consumption: 9183.83,
          created_at: "2020-01-15 01:24:22"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 42.2064232,
          longitude: 42.3448676,
          current_speed: 9.4,
          hfo_consumption: 5024.73,
          lsfo_consumption: 5867.18,
          created_at: "2020-01-24 18:25:37"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 25.797931,
          longitude: 110.011238,
          current_speed: 8.0,
          hfo_consumption: 5740.93,
          lsfo_consumption: 9282.15,
          created_at: "2020-01-22 01:26:20"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -12.1768359,
          longitude: 44.3862983,
          current_speed: 15.7,
          hfo_consumption: 4723.17,
          lsfo_consumption: 5047.79,
          created_at: "2020-02-20 11:12:43"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: -25.4079504,
          longitude: -52.4134746,
          current_speed: 5.2,
          hfo_consumption: 9874.68,
          lsfo_consumption: 5799.01,
          created_at: "2020-02-28 22:18:50"
        },

        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 7.7247058,
          longitude: 81.7131828,
          current_speed: 12.0,
          hfo_consumption: 6734.86,
          lsfo_consumption: 9753.22,
          created_at: "2019-12-01 19:29:35"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 24.607906,
          longitude: 118.534074,
          current_speed: 5.8,
          hfo_consumption: 5635.75,
          lsfo_consumption: 3415.83,
          created_at: "2019-10-23 13:06:38"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 53.2107303,
          longitude: 39.7425094,
          current_speed: 22.0,
          hfo_consumption: 3757.55,
          lsfo_consumption: 1654.15,
          created_at: "2019-12-08 21:52:33"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: -23.5198964,
          longitude: -46.3408798,
          current_speed: 4.3,
          hfo_consumption: 5200.97,
          lsfo_consumption: 8702.07,
          created_at: "2019-12-10 10:17:48"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 45.783131,
          longitude: 3.0742866,
          current_speed: 14.2,
          hfo_consumption: 9141.77,
          lsfo_consumption: 9653.7,
          created_at: "2019-11-18 22:39:16"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 57.1770444,
          longitude: 26.0336703,
          current_speed: 11.9,
          hfo_consumption: 7217.32,
          lsfo_consumption: 2190.95,
          created_at: "2019-11-04 01:02:15"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: -22.3595631,
          longitude: -47.3853435,
          current_speed: 24.3,
          hfo_consumption: 6239.99,
          lsfo_consumption: 8082.43,
          created_at: "2019-12-22 16:26:25"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 51.9918835,
          longitude: 15.7842357,
          current_speed: 2.0,
          hfo_consumption: 8985.62,
          lsfo_consumption: 6818.02,
          created_at: "2019-12-04 11:16:13"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: -15.7666707,
          longitude: 35.0167866,
          current_speed: 29.4,
          hfo_consumption: 1194.04,
          lsfo_consumption: 8113.4,
          created_at: "2019-12-31 22:36:43"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 53.3004898,
          longitude: -6.2634596,
          current_speed: 18.0,
          hfo_consumption: 4936.44,
          lsfo_consumption: 963.04,
          created_at: "2020-02-06 10:49:54"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 47.87344,
          longitude: 103.408699,
          current_speed: 23.0,
          hfo_consumption: 8806.28,
          lsfo_consumption: 1309.88,
          created_at: "2019-12-29 19:28:23"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: -33.7677679,
          longitude: 150.825109,
          current_speed: 29.1,
          hfo_consumption: 7464.73,
          lsfo_consumption: 3803.4,
          created_at: "2020-02-25 19:08:03"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 48.9361342,
          longitude: 24.1594075,
          current_speed: 24.7,
          hfo_consumption: 7313.89,
          lsfo_consumption: 1938.06,
          created_at: "2020-02-08 19:45:19"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: "35.7",
          longitude: "10.8",
          current_speed: 8.0,
          hfo_consumption: 3460.84,
          lsfo_consumption: 884.32,
          created_at: "2019-12-21 00:54:00"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 35.3209172,
          longitude: 136.8367649,
          current_speed: 25.1,
          hfo_consumption: 1040.54,
          lsfo_consumption: 8431.0,
          created_at: "2020-02-01 07:10:18"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -13.316667,
          longitude: -75.783333,
          current_speed: 21.7,
          hfo_consumption: 1760.53,
          lsfo_consumption: 3107.45,
          created_at: "2019-10-31 04:29:29"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 51.5742615,
          longitude: 5.0840393,
          current_speed: 31.7,
          hfo_consumption: 9920.07,
          lsfo_consumption: 7756.15,
          created_at: "2020-01-29 15:42:54"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: "31.4944",
          longitude: "82.3324",
          current_speed: 28.0,
          hfo_consumption: 9249.91,
          lsfo_consumption: 3297.28,
          created_at: "2019-12-08 22:07:43"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 37.433963,
          longitude: 118.674614,
          current_speed: 7.5,
          hfo_consumption: 7602.22,
          lsfo_consumption: 3860.91,
          created_at: "2019-12-07 14:59:20"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 55.4747442,
          longitude: 40.4084556,
          current_speed: 8.0,
          hfo_consumption: 3462.77,
          lsfo_consumption: 4910.62,
          created_at: "2020-02-11 22:00:21"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 48.1944728,
          longitude: 25.9320036,
          current_speed: 15.8,
          hfo_consumption: 5122.42,
          lsfo_consumption: 8276.39,
          created_at: "2019-12-18 03:30:49"
        },

        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 53.1905954,
          longitude: 107.3306835,
          current_speed: 29.8,
          hfo_consumption: 3911.17,
          lsfo_consumption: 7377.36,
          created_at: "2020-01-26 22:33:17"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -3.1446171,
          longitude: 104.5305715,
          current_speed: 1.2,
          hfo_consumption: 858.96,
          lsfo_consumption: 3290.81,
          created_at: "2019-12-04 19:00:53"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 55.4254871,
          longitude: 13.7952433,
          current_speed: 31.4,
          hfo_consumption: 362.57,
          lsfo_consumption: 6034.9,
          created_at: "2019-10-21 22:30:41"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 54.0188307,
          longitude: 31.7244374,
          current_speed: 11.6,
          hfo_consumption: 6229.94,
          lsfo_consumption: 4966.96,
          created_at: "2020-01-03 07:23:24"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 4.024168,
          longitude: -67.683823,
          current_speed: 7.1,
          hfo_consumption: 981.85,
          lsfo_consumption: 6152.7,
          created_at: "2019-10-24 06:24:40"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 3.7953482,
          longitude: 10.1367166,
          current_speed: 11.2,
          hfo_consumption: 8354.3,
          lsfo_consumption: 3364.42,
          created_at: "2020-03-08 00:04:25"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 21.081585,
          longitude: 106.7470536,
          current_speed: 8.9,
          hfo_consumption: 7499.35,
          lsfo_consumption: 904.79,
          created_at: "2019-12-31 11:40:41"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 51.2034374,
          longitude: 7.1301012,
          current_speed: 24.0,
          hfo_consumption: 1951.92,
          lsfo_consumption: 4899.24,
          created_at: "2019-12-23 00:48:27"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 52.8208769,
          longitude: 21.2097479,
          current_speed: 20.2,
          hfo_consumption: 1751.85,
          lsfo_consumption: 8054.17,
          created_at: "2019-12-01 06:17:30"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 28.39571,
          longitude: 107.752611,
          current_speed: 20.7,
          hfo_consumption: 497.31,
          lsfo_consumption: 3294.22,
          created_at: "2019-10-09 15:43:07"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 8.3976116,
          longitude: 14.1727518,
          current_speed: 0.6,
          hfo_consumption: 4832.74,
          lsfo_consumption: 8820.79,
          created_at: "2020-02-16 16:03:44"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -20.0325016,
          longitude: -44.1411883,
          current_speed: 28.2,
          hfo_consumption: 2254.63,
          lsfo_consumption: 8267.88,
          created_at: "2019-11-18 01:52:05"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 58.848193,
          longitude: 5.66466,
          current_speed: 0.4,
          hfo_consumption: 8460.9,
          lsfo_consumption: 1982.0,
          created_at: "2020-02-09 03:42:05"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -0.272699,
          longitude: 36.3775152,
          current_speed: 22.4,
          hfo_consumption: 6347.75,
          lsfo_consumption: 1663.93,
          created_at: "2020-02-21 21:11:59"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -18.4785912,
          longitude: -47.1978694,
          current_speed: 7.3,
          hfo_consumption: 5081.07,
          lsfo_consumption: 4376.03,
          created_at: "2020-01-04 11:13:53"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 36.0486399,
          longitude: 140.2051504,
          current_speed: 12.5,
          hfo_consumption: 1945.97,
          lsfo_consumption: 7761.89,
          created_at: "2020-02-19 02:31:01"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -8.3535966,
          longitude: 116.0594701,
          current_speed: 17.2,
          hfo_consumption: 1856.71,
          lsfo_consumption: 4437.25,
          created_at: "2019-12-03 06:21:35"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 38.02,
          longitude: -122.55,
          current_speed: 15.5,
          hfo_consumption: 4180.39,
          lsfo_consumption: 6660.26,
          created_at: "2019-12-06 13:56:40"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 55.874056,
          longitude: 37.690366,
          current_speed: 5.0,
          hfo_consumption: 6779.7,
          lsfo_consumption: 8549.97,
          created_at: "2019-12-21 18:55:38"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 37.8996732,
          longitude: 139.2013381,
          current_speed: 27.0,
          hfo_consumption: 675.99,
          lsfo_consumption: 4164.17,
          created_at: "2019-12-20 13:05:39"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: -6.6876798,
          longitude: 111.4782661,
          current_speed: 28.6,
          hfo_consumption: 6908.69,
          lsfo_consumption: 5216.12,
          created_at: "2020-01-25 17:53:29"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 35.0150933,
          longitude: 33.7405967,
          current_speed: 16.4,
          hfo_consumption: 7751.13,
          lsfo_consumption: 8412.49,
          created_at: "2020-01-04 10:33:10"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 57.4572354,
          longitude: 40.5773582,
          current_speed: 7.6,
          hfo_consumption: 8728.91,
          lsfo_consumption: 5448.89,
          created_at: "2019-11-11 11:06:45"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 45.2581286,
          longitude: 17.8291657,
          current_speed: 9.3,
          hfo_consumption: 714.75,
          lsfo_consumption: 8223.42,
          created_at: "2019-11-16 10:41:12"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 45.333333,
          longitude: 96.65,
          current_speed: 25.3,
          hfo_consumption: 6562.45,
          lsfo_consumption: 9083.26,
          created_at: "2019-12-06 02:10:18"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: 33.5915355,
          longitude: -101.8482479,
          current_speed: 26.4,
          hfo_consumption: 933.29,
          lsfo_consumption: 8659.73,
          created_at: "2020-01-23 06:43:06"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 31.060387,
          longitude: 31.6511258,
          current_speed: 12.3,
          hfo_consumption: 5116.39,
          lsfo_consumption: 3501.67,
          created_at: "2019-10-11 08:07:40"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 43.6121586,
          longitude: 3.8626074,
          current_speed: 23.1,
          hfo_consumption: 5795.9,
          lsfo_consumption: 2081.41,
          created_at: "2020-03-02 03:10:26"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 11.825138,
          longitude: 42.590275,
          current_speed: 3.8,
          hfo_consumption: 402.65,
          lsfo_consumption: 2457.26,
          created_at: "2019-11-11 03:47:22"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: -17.8336363,
          longitude: 48.4088007,
          current_speed: 18.9,
          hfo_consumption: 6531.79,
          lsfo_consumption: 3654.06,
          created_at: "2019-12-09 05:35:40"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 37.1597899,
          longitude: -8.0359507,
          current_speed: 21.7,
          hfo_consumption: 3127.7,
          lsfo_consumption: 7597.55,
          created_at: "2020-01-09 08:03:23"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 22.843818,
          longitude: 114.164223,
          current_speed: 2.1,
          hfo_consumption: 2943.04,
          lsfo_consumption: 7969.87,
          created_at: "2020-03-09 02:41:35"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: -7.9299269,
          longitude: 111.9671537,
          current_speed: 16.4,
          hfo_consumption: 5415.86,
          lsfo_consumption: 3356.62,
          created_at: "2019-10-23 20:02:44"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 47.8632224,
          longitude: 0.8648422,
          current_speed: 28.2,
          hfo_consumption: 3834.46,
          lsfo_consumption: 2969.17,
          created_at: "2019-10-27 11:55:43"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 52.1513886,
          longitude: 4.4982869,
          current_speed: 5.1,
          hfo_consumption: 3230.53,
          lsfo_consumption: 4212.32,
          created_at: "2019-12-09 23:47:31"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 48.6045918,
          longitude: 22.2437042,
          current_speed: 23.2,
          hfo_consumption: 3542.96,
          lsfo_consumption: 4322.79,
          created_at: "2020-03-05 22:31:01"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 56.6062481,
          longitude: 24.5221788,
          current_speed: 20.3,
          hfo_consumption: 5868.82,
          lsfo_consumption: 7685.48,
          created_at: "2020-02-28 05:39:51"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 10.89732,
          longitude: -72.88412,
          current_speed: 18.8,
          hfo_consumption: 4436.48,
          lsfo_consumption: 3559.08,
          created_at: "2020-01-23 10:48:58"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 32.849276,
          longitude: 35.068929,
          current_speed: 29.9,
          hfo_consumption: 9404.22,
          lsfo_consumption: 5789.26,
          created_at: "2020-03-07 01:43:13"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: -8.3743231,
          longitude: 124.7630307,
          current_speed: 8.0,
          hfo_consumption: 5060.42,
          lsfo_consumption: 9073.21,
          created_at: "2019-10-08 13:17:33"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 15.1042521,
          longitude: 101.0768333,
          current_speed: 3.9,
          hfo_consumption: 8636.73,
          lsfo_consumption: 2213.21,
          created_at: "2019-11-16 06:39:02"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 8.679187,
          longitude: 124.972309,
          current_speed: 23.6,
          hfo_consumption: 1017.27,
          lsfo_consumption: 2070.73,
          created_at: "2019-10-15 01:05:00"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 50.5888258,
          longitude: 16.8098022,
          current_speed: 18.6,
          hfo_consumption: 3756.83,
          lsfo_consumption: 8116.45,
          created_at: "2020-02-21 14:48:40"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 14.709034,
          longitude: 120.947095,
          current_speed: 20.5,
          hfo_consumption: 475.04,
          lsfo_consumption: 5288.67,
          created_at: "2020-01-26 10:51:03"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 52.8358853,
          longitude: 21.8233603,
          current_speed: 16.5,
          hfo_consumption: 8933.35,
          lsfo_consumption: 3544.98,
          created_at: "2019-11-20 07:06:11"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: -7.0777326,
          longitude: 113.287085,
          current_speed: 14.8,
          hfo_consumption: 6877.03,
          lsfo_consumption: 7094.73,
          created_at: "2019-12-01 08:28:40"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 7.9877141,
          longitude: -10.8479688,
          current_speed: 0.3,
          hfo_consumption: 5500.57,
          lsfo_consumption: 3807.83,
          created_at: "2020-03-05 14:13:15"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 36.645169,
          longitude: 117.364633,
          current_speed: 18.4,
          hfo_consumption: 5098.36,
          lsfo_consumption: 2392.84,
          created_at: "2020-02-03 20:21:53"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 33.5719791,
          longitude: -84.3396421,
          current_speed: 26.3,
          hfo_consumption: 4695.14,
          lsfo_consumption: 8041.01,
          created_at: "2019-12-14 06:54:00"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 25.49872,
          longitude: 119.790168,
          current_speed: 17.2,
          hfo_consumption: 6628.13,
          lsfo_consumption: 2014.62,
          created_at: "2019-12-05 18:52:03"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 25.6775595,
          longitude: -100.2596935,
          current_speed: 0.3,
          hfo_consumption: 4064.92,
          lsfo_consumption: 2932.86,
          created_at: "2020-02-21 07:21:44"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 55.3979,
          longitude: 45.614,
          current_speed: 7.7,
          hfo_consumption: 7912.71,
          lsfo_consumption: 9711.95,
          created_at: "2019-10-24 18:23:21"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 12.563347,
          longitude: 124.9269131,
          current_speed: 15.8,
          hfo_consumption: 8278.33,
          lsfo_consumption: 1607.7,
          created_at: "2019-11-22 10:24:33"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 40.5454837,
          longitude: 22.3173143,
          current_speed: 23.7,
          hfo_consumption: 9384.18,
          lsfo_consumption: 9800.83,
          created_at: "2020-01-03 08:43:38"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 23.020673,
          longitude: 113.751799,
          current_speed: 30.9,
          hfo_consumption: 2870.55,
          lsfo_consumption: 1244.52,
          created_at: "2019-10-07 22:32:52"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 15.3843415,
          longitude: -87.8058402,
          current_speed: 8.7,
          hfo_consumption: 7990.88,
          lsfo_consumption: 7243.39,
          created_at: "2019-12-25 03:51:51"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 1.5376351,
          longitude: 110.321945,
          current_speed: 30.7,
          hfo_consumption: 636.54,
          lsfo_consumption: 2478.61,
          created_at: "2020-02-22 20:14:41"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: "17.28268",
          longitude: "121.87153",
          current_speed: 0.7,
          hfo_consumption: 8099.53,
          lsfo_consumption: 7621.33,
          created_at: "2020-01-05 11:04:18"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -12.5327517,
          longitude: -38.3001614,
          current_speed: 3.6,
          hfo_consumption: 145.67,
          lsfo_consumption: 5085.26,
          created_at: "2019-10-14 08:29:42"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: -6.5277643,
          longitude: 110.7095788,
          current_speed: 3.4,
          hfo_consumption: 5162.57,
          lsfo_consumption: 8556.23,
          created_at: "2020-03-07 07:22:10"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 32.9629396,
          longitude: -96.6691579,
          current_speed: 24.3,
          hfo_consumption: 3066.07,
          lsfo_consumption: 4723.68,
          created_at: "2019-10-27 05:25:20"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 52.0564395,
          longitude: 20.0873091,
          current_speed: 10.6,
          hfo_consumption: 1343.85,
          lsfo_consumption: 3763.73,
          created_at: "2019-12-14 06:29:00"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -6.1583904,
          longitude: 106.4288088,
          current_speed: 22.5,
          hfo_consumption: 5191.57,
          lsfo_consumption: 3898.28,
          created_at: "2020-02-10 14:23:12"
        },

        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 7.1453088,
          longitude: 3.3590446,
          current_speed: 5.3,
          hfo_consumption: 7700.47,
          lsfo_consumption: 2691.5,
          created_at: "2020-03-05 18:18:48"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 43.2311668,
          longitude: 44.6420273,
          current_speed: 26.9,
          hfo_consumption: 5161.38,
          lsfo_consumption: 3528.61,
          created_at: "2020-01-05 05:09:39"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 29.86098,
          longitude: 121.593092,
          current_speed: 9.4,
          hfo_consumption: 6604.42,
          lsfo_consumption: 3670.45,
          created_at: "2019-12-11 03:56:03"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 44.4123524,
          longitude: 16.5814309,
          current_speed: 27.9,
          hfo_consumption: 4233.95,
          lsfo_consumption: 8439.84,
          created_at: "2020-01-05 15:57:22"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 59.65089,
          longitude: 67.412319,
          current_speed: 8.5,
          hfo_consumption: 3981.4,
          lsfo_consumption: 3142.88,
          created_at: "2019-12-27 23:15:16"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 0.0090686,
          longitude: 103.5089907,
          current_speed: 22.0,
          hfo_consumption: 2510.24,
          lsfo_consumption: 5743.64,
          created_at: "2019-12-07 06:24:31"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 46.64635,
          longitude: 131.158416,
          current_speed: 2.3,
          hfo_consumption: 2007.92,
          lsfo_consumption: 5941.07,
          created_at: "2020-01-11 01:44:46"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 49.4580118,
          longitude: 57.4206897,
          current_speed: 14.3,
          hfo_consumption: 1133.48,
          lsfo_consumption: 5223.04,
          created_at: "2020-02-21 11:09:33"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 27.254639,
          longitude: 102.555028,
          current_speed: 29.9,
          hfo_consumption: 275.46,
          lsfo_consumption: 6969.87,
          created_at: "2019-10-30 12:35:40"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -15.1978317,
          longitude: 12.1575544,
          current_speed: 18.9,
          hfo_consumption: 2992.69,
          lsfo_consumption: 8535.73,
          created_at: "2019-11-17 04:55:48"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 19.3376878,
          longitude: -99.0591821,
          current_speed: 12.4,
          hfo_consumption: 936.12,
          lsfo_consumption: 6967.63,
          created_at: "2019-10-13 10:36:24"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 18.4562829,
          longitude: -77.3266991,
          current_speed: 28.4,
          hfo_consumption: 6866.73,
          lsfo_consumption: 6445.87,
          created_at: "2019-12-17 17:49:58"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 39.302799,
          longitude: 77.823975,
          current_speed: 23.1,
          hfo_consumption: 9507.55,
          lsfo_consumption: 5348.13,
          created_at: "2019-12-10 21:05:22"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: "11.2367",
          longitude: "123.2062",
          current_speed: 7.9,
          hfo_consumption: 9508.21,
          lsfo_consumption: 1006.02,
          created_at: "2019-11-26 00:43:48"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 52.7085795,
          longitude: 25.3346543,
          current_speed: 13.5,
          hfo_consumption: 135.02,
          lsfo_consumption: 9394.24,
          created_at: "2019-11-11 00:27:27"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 40.672094,
          longitude: 110.272565,
          current_speed: 18.1,
          hfo_consumption: 7595.58,
          lsfo_consumption: 6134.56,
          created_at: "2020-03-01 15:14:11"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 25.045532,
          longitude: 101.528068,
          current_speed: 12.0,
          hfo_consumption: 4971.86,
          lsfo_consumption: 8928.77,
          created_at: "2019-10-24 05:12:53"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -0.4589199,
          longitude: 100.5099262,
          current_speed: 24.0,
          hfo_consumption: 9285.46,
          lsfo_consumption: 7161.29,
          created_at: "2020-02-24 10:29:40"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 55.8394689,
          longitude: 38.428733,
          current_speed: 1.2,
          hfo_consumption: 5230.22,
          lsfo_consumption: 1835.1,
          created_at: "2019-10-20 14:48:04"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: -7.5029075,
          longitude: 107.8613334,
          current_speed: 17.6,
          hfo_consumption: 9437.52,
          lsfo_consumption: 4914.95,
          created_at: "2020-01-27 01:26:56"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 34.34866,
          longitude: 106.009915,
          current_speed: 19.9,
          hfo_consumption: 3210.86,
          lsfo_consumption: 3921.48,
          created_at: "2019-11-01 14:56:49"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 49.8856487,
          longitude: 22.1027541,
          current_speed: 6.3,
          hfo_consumption: 8659.45,
          lsfo_consumption: 1548.02,
          created_at: "2019-11-13 03:29:53"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 40.0150745,
          longitude: 44.5191627,
          current_speed: 31.0,
          hfo_consumption: 5522.18,
          lsfo_consumption: 3113.29,
          created_at: "2019-12-11 02:02:08"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 29.60128,
          longitude: 121.859272,
          current_speed: 19.0,
          hfo_consumption: 4497.29,
          lsfo_consumption: 1822.2,
          created_at: "2019-11-26 02:59:26"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -7.2504446,
          longitude: 112.7688416,
          current_speed: 18.4,
          hfo_consumption: 9662.79,
          lsfo_consumption: 4596.88,
          created_at: "2020-01-23 23:45:00"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: -8.241702,
          longitude: 123.769227,
          current_speed: 25.6,
          hfo_consumption: 4891.1,
          lsfo_consumption: 4913.86,
          created_at: "2020-02-05 01:32:00"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 54.6950688,
          longitude: 20.5041324,
          current_speed: 20.4,
          hfo_consumption: 847.86,
          lsfo_consumption: 2639.95,
          created_at: "2019-12-02 01:23:24"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 29.086221,
          longitude: 119.571633,
          current_speed: 2.9,
          hfo_consumption: 2265.01,
          lsfo_consumption: 3521.28,
          created_at: "2020-02-10 06:56:24"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 33.5147935,
          longitude: 130.4936331,
          current_speed: 13.0,
          hfo_consumption: 5010.07,
          lsfo_consumption: 6154.34,
          created_at: "2020-03-07 13:42:37"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 46.1854516,
          longitude: 30.3414908,
          current_speed: 10.9,
          hfo_consumption: 1805.29,
          lsfo_consumption: 7159.43,
          created_at: "2020-02-17 19:13:48"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: 49.6475739,
          longitude: 6.2573108,
          current_speed: 6.3,
          hfo_consumption: 8425.57,
          lsfo_consumption: 1841.78,
          created_at: "2019-12-07 14:07:12"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -19.6238346,
          longitude: -43.2182878,
          current_speed: 23.2,
          hfo_consumption: 8994.55,
          lsfo_consumption: 3849.23,
          created_at: "2019-10-26 07:23:12"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 13.4008274,
          longitude: 123.4768981,
          current_speed: 13.3,
          hfo_consumption: 241.2,
          lsfo_consumption: 4029.9,
          created_at: "2019-12-26 14:52:59"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: -2.2268901,
          longitude: -80.8593845,
          current_speed: 23.7,
          hfo_consumption: 132.74,
          lsfo_consumption: 1285.19,
          created_at: "2020-01-11 12:30:38"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 42.5257603,
          longitude: 21.1225078,
          current_speed: 12.3,
          hfo_consumption: 4654.55,
          lsfo_consumption: 6738.9,
          created_at: "2020-03-01 12:02:17"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 37.1017088,
          longitude: 70.5552362,
          current_speed: 5.2,
          hfo_consumption: 8379.15,
          lsfo_consumption: 5167.07,
          created_at: "2019-12-04 20:29:22"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 25.606486,
          longitude: 100.267638,
          current_speed: 2.9,
          hfo_consumption: 996.28,
          lsfo_consumption: 9900.42,
          created_at: "2020-01-14 16:59:30"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 40.3706555,
          longitude: 47.1378909,
          current_speed: 19.6,
          hfo_consumption: 216.13,
          lsfo_consumption: 4460.08,
          created_at: "2019-11-26 04:10:00"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 62.4729446,
          longitude: 17.4155753,
          current_speed: 23.6,
          hfo_consumption: 2346.2,
          lsfo_consumption: 7095.27,
          created_at: "2019-10-07 23:27:29"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 49.7123742,
          longitude: 17.9032009,
          current_speed: 14.8,
          hfo_consumption: 8701.36,
          lsfo_consumption: 398.08,
          created_at: "2019-10-27 21:50:32"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 16.0001974,
          longitude: 120.6583327,
          current_speed: 5.5,
          hfo_consumption: 4238.32,
          lsfo_consumption: 2413.48,
          created_at: "2020-02-27 00:46:42"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: -5.706302,
          longitude: 34.4946697,
          current_speed: 3.3,
          hfo_consumption: 2918.27,
          lsfo_consumption: 3433.91,
          created_at: "2019-10-17 17:46:02"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 30.274084,
          longitude: 120.15507,
          current_speed: 27.4,
          hfo_consumption: 5052.65,
          lsfo_consumption: 7210.87,
          created_at: "2019-12-23 19:20:32"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: 38.5557833,
          longitude: -9.0860982,
          current_speed: 28.1,
          hfo_consumption: 3971.29,
          lsfo_consumption: 2983.66,
          created_at: "2019-11-03 09:53:31"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 40.5982816,
          longitude: -8.643537,
          current_speed: 16.3,
          hfo_consumption: 862.66,
          lsfo_consumption: 941.93,
          created_at: "2020-01-01 21:07:14"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -34.679347,
          longitude: -58.3762722,
          current_speed: 13.2,
          hfo_consumption: 5417.93,
          lsfo_consumption: 4315.88,
          created_at: "2020-01-25 18:13:26"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -6.3077304,
          longitude: 106.1831224,
          current_speed: 14.3,
          hfo_consumption: 1206.88,
          lsfo_consumption: 3510.71,
          created_at: "2019-10-13 11:54:21"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 39.9912749,
          longitude: 116.4717334,
          current_speed: 19.7,
          hfo_consumption: 7529.01,
          lsfo_consumption: 2818.32,
          created_at: "2019-11-08 08:48:53"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 33.5041035,
          longitude: 11.0881494,
          current_speed: 25.4,
          hfo_consumption: 4356.77,
          lsfo_consumption: 9402.23,
          created_at: "2020-02-14 16:10:43"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 45.2415442,
          longitude: 77.9726477,
          current_speed: 9.0,
          hfo_consumption: 7707.97,
          lsfo_consumption: 3803.54,
          created_at: "2019-10-12 02:36:24"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 69.4976485,
          longitude: 88.3994723,
          current_speed: 10.5,
          hfo_consumption: 9854.54,
          lsfo_consumption: 370.63,
          created_at: "2019-12-06 16:37:17"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 42.6580023,
          longitude: 141.6664383,
          current_speed: 10.8,
          hfo_consumption: 7224.46,
          lsfo_consumption: 7558.44,
          created_at: "2019-11-26 18:11:07"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 24.034527,
          longitude: 112.047639,
          current_speed: 26.8,
          hfo_consumption: 2938.41,
          lsfo_consumption: 9498.24,
          created_at: "2019-12-28 06:07:36"
        },

        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: -17.3079902,
          longitude: -40.1862129,
          current_speed: 14.2,
          hfo_consumption: 6214.2,
          lsfo_consumption: 4276.56,
          created_at: "2019-12-23 21:02:34"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -15.8146532,
          longitude: -47.9029793,
          current_speed: 6.2,
          hfo_consumption: 9318.29,
          lsfo_consumption: 5703.33,
          created_at: "2020-02-03 15:01:32"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 37.646108,
          longitude: 120.477813,
          current_speed: 13.5,
          hfo_consumption: 1127.15,
          lsfo_consumption: 3091.97,
          created_at: "2019-12-17 13:54:43"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: -8.602068,
          longitude: 116.195655,
          current_speed: 15.2,
          hfo_consumption: 9829.14,
          lsfo_consumption: 5846.04,
          created_at: "2019-12-01 16:31:04"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 45.3579767,
          longitude: 17.7640023,
          current_speed: 20.3,
          hfo_consumption: 3132.13,
          lsfo_consumption: 6553.06,
          created_at: "2020-01-14 15:05:47"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: -6.162275,
          longitude: 106.7883416,
          current_speed: 11.1,
          hfo_consumption: 9489.9,
          lsfo_consumption: 6277.29,
          created_at: "2020-01-17 09:38:42"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -11.403372,
          longitude: -74.752726,
          current_speed: 0.3,
          hfo_consumption: 420.3,
          lsfo_consumption: 4887.74,
          created_at: "2020-01-30 17:09:31"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 19.4102526,
          longitude: -99.0073673,
          current_speed: 12.3,
          hfo_consumption: 6279.94,
          lsfo_consumption: 7169.67,
          created_at: "2020-01-27 06:16:48"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 38.0329785,
          longitude: 23.831904,
          current_speed: 7.5,
          hfo_consumption: 4744.24,
          lsfo_consumption: 6229.4,
          created_at: "2019-12-14 22:24:59"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 29.956538,
          longitude: 106.375509,
          current_speed: 1.1,
          hfo_consumption: 5319.97,
          lsfo_consumption: 2927.5,
          created_at: "2020-01-17 09:46:02"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: -26.2155045,
          longitude: 29.2916352,
          current_speed: 9.5,
          hfo_consumption: 6547.82,
          lsfo_consumption: 3993.92,
          created_at: "2020-02-15 17:56:36"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 39.9542181,
          longitude: 116.2237499,
          current_speed: 30.8,
          hfo_consumption: 8754.52,
          lsfo_consumption: 6227.34,
          created_at: "2020-02-11 07:34:38"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: -7.0510263,
          longitude: 111.8330106,
          current_speed: 4.7,
          hfo_consumption: 2014.71,
          lsfo_consumption: 6142.27,
          created_at: "2019-10-13 13:27:03"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -20.5558832,
          longitude: -48.5762695,
          current_speed: 28.7,
          hfo_consumption: 9214.46,
          lsfo_consumption: 6669.51,
          created_at: "2020-01-27 10:33:31"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 30.3617348,
          longitude: -81.6966306,
          current_speed: 21.3,
          hfo_consumption: 7394.2,
          lsfo_consumption: 4037.07,
          created_at: "2019-10-23 21:09:16"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -7.7276103,
          longitude: 110.8582722,
          current_speed: 27.8,
          hfo_consumption: 7728.96,
          lsfo_consumption: 5829.98,
          created_at: "2020-02-05 13:10:56"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 52.1675198,
          longitude: 20.8799274,
          current_speed: 2.2,
          hfo_consumption: 1538.46,
          lsfo_consumption: 1046.55,
          created_at: "2020-01-14 05:10:37"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 8.0991923,
          longitude: -10.6956979,
          current_speed: 12.9,
          hfo_consumption: 2833.72,
          lsfo_consumption: 6790.85,
          created_at: "2020-03-03 20:59:35"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 49.1879961,
          longitude: 16.3631011,
          current_speed: 0.4,
          hfo_consumption: 5154.66,
          lsfo_consumption: 7215.25,
          created_at: "2020-02-16 08:40:56"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 31.2457401,
          longitude: 121.4824439,
          current_speed: 16.9,
          hfo_consumption: 3430.94,
          lsfo_consumption: 5370.71,
          created_at: "2020-02-01 17:51:50"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 47.2550409,
          longitude: -1.5401497,
          current_speed: 0.3,
          hfo_consumption: 3294.44,
          lsfo_consumption: 9831.18,
          created_at: "2019-12-05 04:37:21"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -7.3756003,
          longitude: 110.9476831,
          current_speed: 7.1,
          hfo_consumption: 9482.17,
          lsfo_consumption: 8633.52,
          created_at: "2020-01-24 14:01:23"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 44.7721811,
          longitude: 17.191,
          current_speed: 16.9,
          hfo_consumption: 4517.35,
          lsfo_consumption: 6588.5,
          created_at: "2020-01-03 11:37:16"
        },
        {
          voyage_id: 41,
          selected_route_id: null,
          latitude: 18.1965639,
          longitude: 120.5989577,
          current_speed: 26.6,
          hfo_consumption: 8008.8,
          lsfo_consumption: 3740.31,
          created_at: "2020-02-17 20:37:13"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 36.2407094,
          longitude: 139.1910402,
          current_speed: 1.4,
          hfo_consumption: 8478.43,
          lsfo_consumption: 6009.59,
          created_at: "2019-10-26 07:15:59"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 30.7366196,
          longitude: 130.9913218,
          current_speed: 25.1,
          hfo_consumption: 9848.94,
          lsfo_consumption: 8354.49,
          created_at: "2020-01-20 19:18:56"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 38.5779674,
          longitude: 140.8225484,
          current_speed: 6.8,
          hfo_consumption: 7633.79,
          lsfo_consumption: 6522.99,
          created_at: "2019-12-31 23:00:56"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 59.3927955,
          longitude: 18.0310718,
          current_speed: 13.9,
          hfo_consumption: 5071.65,
          lsfo_consumption: 9707.16,
          created_at: "2019-12-27 14:30:26"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 39.8067,
          longitude: 116.030192,
          current_speed: 1.7,
          hfo_consumption: 3389.77,
          lsfo_consumption: 7649.83,
          created_at: "2020-01-04 20:39:03"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 50.4119089,
          longitude: 16.5148115,
          current_speed: 23.1,
          hfo_consumption: 9296.66,
          lsfo_consumption: 2029.36,
          created_at: "2019-11-30 01:06:37"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 21.808052,
          longitude: 108.182377,
          current_speed: 26.9,
          hfo_consumption: 6593.67,
          lsfo_consumption: 1596.04,
          created_at: "2019-10-26 03:40:45"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 23.3659806,
          longitude: 103.3969125,
          current_speed: 8.2,
          hfo_consumption: 449.69,
          lsfo_consumption: 4536.3,
          created_at: "2020-02-18 22:48:17"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: -23.8431563,
          longitude: -47.7243139,
          current_speed: 10.6,
          hfo_consumption: 5771.15,
          lsfo_consumption: 790.49,
          created_at: "2019-11-03 11:16:02"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 53.0985458,
          longitude: 6.0694,
          current_speed: 5.8,
          hfo_consumption: 7193.29,
          lsfo_consumption: 1930.32,
          created_at: "2019-11-15 08:48:12"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: -6.8364154,
          longitude: 111.1980575,
          current_speed: 17.2,
          hfo_consumption: 5197.76,
          lsfo_consumption: 1071.39,
          created_at: "2019-12-25 00:14:24"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 33.9930471,
          longitude: -118.153228,
          current_speed: 7.1,
          hfo_consumption: 3108.51,
          lsfo_consumption: 8286.78,
          created_at: "2019-10-09 08:53:52"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 22.219533,
          longitude: 107.98897,
          current_speed: 26.5,
          hfo_consumption: 2046.24,
          lsfo_consumption: 4206.72,
          created_at: "2020-02-20 19:11:55"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 11.4522433,
          longitude: -85.8050987,
          current_speed: 18.0,
          hfo_consumption: 2199.69,
          lsfo_consumption: 5173.67,
          created_at: "2020-02-05 23:20:55"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 33.9230243,
          longitude: -84.3150822,
          current_speed: 22.7,
          hfo_consumption: 1635.06,
          lsfo_consumption: 3907.71,
          created_at: "2019-11-07 10:34:14"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: -10.5219124,
          longitude: -38.9066439,
          current_speed: 17.3,
          hfo_consumption: 5025.01,
          lsfo_consumption: 5089.18,
          created_at: "2019-12-09 23:57:51"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 46.880102,
          longitude: 127.507824,
          current_speed: 25.7,
          hfo_consumption: 3592.12,
          lsfo_consumption: 1284.18,
          created_at: "2020-01-29 14:53:52"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: -33.459409,
          longitude: -70.582502,
          current_speed: 25.5,
          hfo_consumption: 2613.28,
          lsfo_consumption: 5742.43,
          created_at: "2020-02-28 00:28:27"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 46.4894881,
          longitude: 30.2016232,
          current_speed: 27.1,
          hfo_consumption: 7864.25,
          lsfo_consumption: 9161.03,
          created_at: "2019-12-05 04:37:12"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 39.4781672,
          longitude: -8.5367175,
          current_speed: 10.3,
          hfo_consumption: 6308.74,
          lsfo_consumption: 3543.64,
          created_at: "2019-10-23 04:56:16"
        },
        {
          voyage_id: 14,
          selected_route_id: null,
          latitude: 30.830898,
          longitude: 120.92585,
          current_speed: 11.2,
          hfo_consumption: 9211.59,
          lsfo_consumption: 6313.87,
          created_at: "2019-12-02 17:39:08"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 38.197478,
          longitude: 114.335324,
          current_speed: 8.0,
          hfo_consumption: 5997.2,
          lsfo_consumption: 5500.39,
          created_at: "2019-12-29 14:53:37"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: -7.95,
          longitude: 30.85,
          current_speed: 13.6,
          hfo_consumption: 6971.61,
          lsfo_consumption: 3409.32,
          created_at: "2019-12-17 13:35:26"
        },

        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 34.0577762,
          longitude: 131.6460781,
          current_speed: 9.2,
          hfo_consumption: 6934.6,
          lsfo_consumption: 3118.56,
          created_at: "2020-02-14 08:32:32"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 32.4982249,
          longitude: 20.8195292,
          current_speed: 3.7,
          hfo_consumption: 609.54,
          lsfo_consumption: 5617.9,
          created_at: "2020-01-13 21:01:03"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: -8.4176445,
          longitude: -37.0585205,
          current_speed: 15.0,
          hfo_consumption: 6219.78,
          lsfo_consumption: 1302.99,
          created_at: "2019-11-24 08:03:02"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 4.8949753,
          longitude: 38.1001629,
          current_speed: 23.3,
          hfo_consumption: 9743.03,
          lsfo_consumption: 7209.21,
          created_at: "2020-01-29 23:27:39"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: -11.2555478,
          longitude: -74.6394331,
          current_speed: 14.4,
          hfo_consumption: 1165.51,
          lsfo_consumption: 1831.8,
          created_at: "2019-12-05 16:49:15"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 49.2760303,
          longitude: 23.5105576,
          current_speed: 26.8,
          hfo_consumption: 2100.35,
          lsfo_consumption: 319.97,
          created_at: "2019-12-09 22:58:31"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 44.8534496,
          longitude: 38.491586,
          current_speed: 4.6,
          hfo_consumption: 6294.45,
          lsfo_consumption: 1532.56,
          created_at: "2019-11-22 03:46:33"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 12.6679167,
          longitude: 123.9881642,
          current_speed: 12.1,
          hfo_consumption: 2281.17,
          lsfo_consumption: 925.56,
          created_at: "2020-01-04 08:20:20"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 58.7028901,
          longitude: 13.8453002,
          current_speed: 24.7,
          hfo_consumption: 5668.27,
          lsfo_consumption: 6413.2,
          created_at: "2019-11-24 03:04:18"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 18.9753413,
          longitude: -97.9041394,
          current_speed: 6.6,
          hfo_consumption: 9308.39,
          lsfo_consumption: 8478.59,
          created_at: "2019-12-07 14:15:23"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: 38.8833,
          longitude: 116.47424,
          current_speed: 1.6,
          hfo_consumption: 8178.71,
          lsfo_consumption: 4651.75,
          created_at: "2019-10-18 03:55:54"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 44.7984858,
          longitude: -93.1277854,
          current_speed: 31.4,
          hfo_consumption: 3718.45,
          lsfo_consumption: 3280.11,
          created_at: "2020-01-20 11:25:29"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 22.3363608,
          longitude: 103.8437852,
          current_speed: 19.7,
          hfo_consumption: 7806.29,
          lsfo_consumption: 3854.75,
          created_at: "2020-01-06 23:37:21"
        },

        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 57.7313899,
          longitude: 12.9130426,
          current_speed: 16.5,
          hfo_consumption: 7122.43,
          lsfo_consumption: 2275.49,
          created_at: "2019-11-14 20:57:21"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 47.4214312,
          longitude: 92.2225067,
          current_speed: 24.0,
          hfo_consumption: 1265.31,
          lsfo_consumption: 5912.62,
          created_at: "2020-02-22 14:34:43"
        },
        {
          voyage_id: 32,
          selected_route_id: null,
          latitude: -7.2816099,
          longitude: 108.3771645,
          current_speed: 31.3,
          hfo_consumption: 2819.43,
          lsfo_consumption: 1191.14,
          created_at: "2019-12-17 21:31:48"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 53.6897587,
          longitude: 87.4315706,
          current_speed: 30.7,
          hfo_consumption: 1789.57,
          lsfo_consumption: 9375.87,
          created_at: "2019-10-18 02:30:07"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 38.582529,
          longitude: 21.4467686,
          current_speed: 14.5,
          hfo_consumption: 4173.74,
          lsfo_consumption: 4810.13,
          created_at: "2019-12-22 04:52:34"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 62.3926514,
          longitude: 17.2942976,
          current_speed: 7.0,
          hfo_consumption: 342.84,
          lsfo_consumption: 1674.67,
          created_at: "2020-03-09 01:49:06"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 48.8295482,
          longitude: 107.0468263,
          current_speed: 11.3,
          hfo_consumption: 5131.28,
          lsfo_consumption: 3628.86,
          created_at: "2019-11-07 20:12:48"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 43.2496743,
          longitude: 45.9860099,
          current_speed: 24.9,
          hfo_consumption: 5185.67,
          lsfo_consumption: 5308.62,
          created_at: "2019-11-12 21:51:04"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: -20.0583696,
          longitude: 57.5504453,
          current_speed: 7.5,
          hfo_consumption: 1739.87,
          lsfo_consumption: 600.33,
          created_at: "2019-12-21 09:29:51"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 30.350192,
          longitude: 120.222909,
          current_speed: 8.1,
          hfo_consumption: 2179.43,
          lsfo_consumption: 2632.54,
          created_at: "2020-02-08 11:44:21"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 9.7907348,
          longitude: -13.5147735,
          current_speed: 1.6,
          hfo_consumption: 1942.1,
          lsfo_consumption: 1848.64,
          created_at: "2020-03-01 10:47:28"
        },
        {
          voyage_id: 31,
          selected_route_id: null,
          latitude: 44.0427429,
          longitude: 44.549842,
          current_speed: 8.4,
          hfo_consumption: 2403.64,
          lsfo_consumption: 8378.19,
          created_at: "2020-01-25 01:09:26"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 14.603928,
          longitude: 120.966168,
          current_speed: 13.3,
          hfo_consumption: 1944.65,
          lsfo_consumption: 1185.36,
          created_at: "2020-01-18 08:39:39"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: -6.8333257,
          longitude: 106.6971352,
          current_speed: 11.9,
          hfo_consumption: 318.87,
          lsfo_consumption: 9496.9,
          created_at: "2020-02-18 06:55:13"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -3.05,
          longitude: 31.883333,
          current_speed: 14.8,
          hfo_consumption: 9321.35,
          lsfo_consumption: 4585.44,
          created_at: "2019-10-12 01:24:36"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: -24.8472072,
          longitude: -56.3530514,
          current_speed: 21.2,
          hfo_consumption: 3204.46,
          lsfo_consumption: 5591.02,
          created_at: "2020-02-26 16:16:39"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 16.0544068,
          longitude: 108.2021667,
          current_speed: 15.8,
          hfo_consumption: 9522.69,
          lsfo_consumption: 7183.45,
          created_at: "2019-11-16 11:56:30"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 25.130594,
          longitude: 109.768451,
          current_speed: 4.9,
          hfo_consumption: 4183.11,
          lsfo_consumption: 3686.49,
          created_at: "2020-01-09 06:49:10"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: -6.8377775,
          longitude: 107.8738258,
          current_speed: 10.5,
          hfo_consumption: 2428.85,
          lsfo_consumption: 9071.35,
          created_at: "2019-11-09 01:02:23"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 33.437877,
          longitude: 113.609286,
          current_speed: 10.3,
          hfo_consumption: 457.89,
          lsfo_consumption: 8922.53,
          created_at: "2019-10-26 14:57:13"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 57.3937216,
          longitude: 21.5647066,
          current_speed: 26.8,
          hfo_consumption: 8151.9,
          lsfo_consumption: 9437.27,
          created_at: "2020-02-01 23:36:33"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 32.627137,
          longitude: 119.257096,
          current_speed: 18.0,
          hfo_consumption: 8863.19,
          lsfo_consumption: 9823.47,
          created_at: "2020-02-04 17:48:37"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: -20.0791909,
          longitude: 30.8384093,
          current_speed: 21.4,
          hfo_consumption: 6445.58,
          lsfo_consumption: 3089.55,
          created_at: "2020-02-13 11:09:46"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 41.1024492,
          longitude: -81.4992884,
          current_speed: 2.5,
          hfo_consumption: 4731.31,
          lsfo_consumption: 8705.81,
          created_at: "2019-12-01 18:57:58"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: 60.8110019,
          longitude: 21.4457309,
          current_speed: 8.1,
          hfo_consumption: 6325.54,
          lsfo_consumption: 8105.5,
          created_at: "2020-01-03 01:14:45"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: 22.3908295,
          longitude: 113.9725126,
          current_speed: 31.7,
          hfo_consumption: 1393.97,
          lsfo_consumption: 5423.27,
          created_at: "2020-01-04 20:49:08"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 14.9326574,
          longitude: -91.6941845,
          current_speed: 12.7,
          hfo_consumption: 3215.91,
          lsfo_consumption: 9495.36,
          created_at: "2020-02-09 11:20:33"
        },
        {
          voyage_id: 40,
          selected_route_id: null,
          latitude: 40.781499,
          longitude: -7.9131603,
          current_speed: 21.5,
          hfo_consumption: 1512.05,
          lsfo_consumption: 9876.71,
          created_at: "2019-12-24 16:32:20"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: 12.9881784,
          longitude: 108.8848569,
          current_speed: 2.3,
          hfo_consumption: 9519.86,
          lsfo_consumption: 144.18,
          created_at: "2020-02-26 08:12:03"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 40.5126881,
          longitude: -8.1587128,
          current_speed: 2.0,
          hfo_consumption: 2823.39,
          lsfo_consumption: 4992.95,
          created_at: "2019-12-16 03:36:09"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 26.207631,
          longitude: 113.767529,
          current_speed: 28.5,
          hfo_consumption: 6196.28,
          lsfo_consumption: 9798.5,
          created_at: "2020-01-23 05:44:19"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: -6.1869527,
          longitude: 106.1698563,
          current_speed: 12.4,
          hfo_consumption: 2138.45,
          lsfo_consumption: 1047.55,
          created_at: "2020-02-12 03:43:51"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -6.6382226,
          longitude: -79.7904475,
          current_speed: 14.1,
          hfo_consumption: 9335.75,
          lsfo_consumption: 769.05,
          created_at: "2020-01-08 04:11:00"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 5.9840985,
          longitude: 116.0761121,
          current_speed: 4.0,
          hfo_consumption: 8421.52,
          lsfo_consumption: 9261.64,
          created_at: "2019-12-12 09:07:24"
        },
        {
          voyage_id: 27,
          selected_route_id: null,
          latitude: 22.3825415,
          longitude: -80.847466,
          current_speed: 11.9,
          hfo_consumption: 8843.66,
          lsfo_consumption: 3246.41,
          created_at: "2019-12-23 21:40:12"
        },
        {
          voyage_id: 25,
          selected_route_id: null,
          latitude: 54.1458603,
          longitude: 49.7613122,
          current_speed: 18.0,
          hfo_consumption: 7096.8,
          lsfo_consumption: 1127.79,
          created_at: "2019-12-15 05:55:51"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 32.601214,
          longitude: 119.17604,
          current_speed: 11.8,
          hfo_consumption: 6375.28,
          lsfo_consumption: 9898.63,
          created_at: "2019-11-29 08:46:25"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 10.701232,
          longitude: -61.5471829,
          current_speed: 7.1,
          hfo_consumption: 5782.01,
          lsfo_consumption: 2651.53,
          created_at: "2019-11-25 16:56:56"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 49.189451,
          longitude: -0.804935,
          current_speed: 20.5,
          hfo_consumption: 8409.94,
          lsfo_consumption: 3113.57,
          created_at: "2020-01-14 05:03:03"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 59.288124,
          longitude: 18.0891528,
          current_speed: 17.6,
          hfo_consumption: 7886.92,
          lsfo_consumption: 4425.25,
          created_at: "2019-10-17 08:33:00"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 33.3297722,
          longitude: 133.2308851,
          current_speed: 14.9,
          hfo_consumption: 4736.88,
          lsfo_consumption: 504.7,
          created_at: "2019-10-20 22:59:50"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: -20.4703278,
          longitude: -45.1120424,
          current_speed: 28.4,
          hfo_consumption: 7925.93,
          lsfo_consumption: 7306.05,
          created_at: "2020-01-28 22:10:45"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 16.4306671,
          longitude: 100.1255164,
          current_speed: 19.5,
          hfo_consumption: 866.06,
          lsfo_consumption: 6410.14,
          created_at: "2019-12-29 04:51:09"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 54.0077659,
          longitude: 16.0063249,
          current_speed: 7.9,
          hfo_consumption: 9083.74,
          lsfo_consumption: 7020.27,
          created_at: "2019-12-20 14:07:52"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: -12.1349328,
          longitude: 44.4252603,
          current_speed: 6.3,
          hfo_consumption: 6445.14,
          lsfo_consumption: 3917.97,
          created_at: "2019-12-18 06:37:22"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 8.2853585,
          longitude: -78.1792434,
          current_speed: 29.6,
          hfo_consumption: 6067.7,
          lsfo_consumption: 8560.12,
          created_at: "2019-10-31 06:21:28"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 37.2980237,
          longitude: 127.6371628,
          current_speed: 4.1,
          hfo_consumption: 5094.56,
          lsfo_consumption: 6844.98,
          created_at: "2020-02-29 03:18:10"
        },
        {
          voyage_id: 11,
          selected_route_id: null,
          latitude: 14.49393,
          longitude: -90.7090795,
          current_speed: 8.7,
          hfo_consumption: 1146.01,
          lsfo_consumption: 1683.53,
          created_at: "2020-01-22 23:10:36"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 56.3072493,
          longitude: 38.701054,
          current_speed: 1.9,
          hfo_consumption: 3317.28,
          lsfo_consumption: 2741.68,
          created_at: "2019-12-11 19:13:07"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 32.832584,
          longitude: -96.797592,
          current_speed: 15.3,
          hfo_consumption: 2537.49,
          lsfo_consumption: 3245.41,
          created_at: "2020-01-16 20:14:40"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 45.7123346,
          longitude: 15.8074521,
          current_speed: 22.2,
          hfo_consumption: 6019.41,
          lsfo_consumption: 5122.43,
          created_at: "2019-12-07 04:37:19"
        },
        {
          voyage_id: 30,
          selected_route_id: null,
          latitude: 39.14,
          longitude: -84.54,
          current_speed: 18.8,
          hfo_consumption: 2720.09,
          lsfo_consumption: 7429.54,
          created_at: "2020-02-17 02:58:13"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 41.221015,
          longitude: 109.799646,
          current_speed: 14.6,
          hfo_consumption: 2304.52,
          lsfo_consumption: 2640.3,
          created_at: "2019-11-08 05:57:01"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 41.7579896,
          longitude: -88.2947675,
          current_speed: 20.6,
          hfo_consumption: 4284.63,
          lsfo_consumption: 2846.27,
          created_at: "2020-02-29 17:44:45"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 30.66044,
          longitude: 120.013991,
          current_speed: 31.4,
          hfo_consumption: 3616.88,
          lsfo_consumption: 3473.12,
          created_at: "2019-11-02 21:45:34"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 50.104315,
          longitude: 8.911141,
          current_speed: 6.9,
          hfo_consumption: 4431.8,
          lsfo_consumption: 4430.64,
          created_at: "2020-03-04 05:52:27"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 41.5782612,
          longitude: -8.1117655,
          current_speed: 18.3,
          hfo_consumption: 3531.12,
          lsfo_consumption: 7748.31,
          created_at: "2019-12-13 15:55:22"
        },
        {
          voyage_id: 3,
          selected_route_id: null,
          latitude: -7.1221059,
          longitude: 106.5701927,
          current_speed: 11.4,
          hfo_consumption: 41.34,
          lsfo_consumption: 693.06,
          created_at: "2020-02-27 08:16:20"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 37.13,
          longitude: -84.08,
          current_speed: 27.9,
          hfo_consumption: 9465.08,
          lsfo_consumption: 4966.67,
          created_at: "2019-12-23 18:44:21"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: "51.32372",
          longitude: "-113.60475",
          current_speed: 11.9,
          hfo_consumption: 9954.12,
          lsfo_consumption: 610.65,
          created_at: "2020-02-01 06:17:54"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 60.601518,
          longitude: 16.7485695,
          current_speed: 12.1,
          hfo_consumption: 2623.4,
          lsfo_consumption: 7059.94,
          created_at: "2019-12-15 23:04:59"
        },
        {
          voyage_id: 39,
          selected_route_id: null,
          latitude: -3.5451284,
          longitude: 36.1029284,
          current_speed: 6.0,
          hfo_consumption: 3348.55,
          lsfo_consumption: 7338.83,
          created_at: "2020-02-20 20:56:21"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 50.5878419,
          longitude: 13.8083154,
          current_speed: 20.6,
          hfo_consumption: 4510.92,
          lsfo_consumption: 3085.8,
          created_at: "2020-01-09 02:52:48"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 59.9381414,
          longitude: 10.7652478,
          current_speed: 21.9,
          hfo_consumption: 5046.2,
          lsfo_consumption: 5465.72,
          created_at: "2020-02-19 14:06:03"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 14.5806413,
          longitude: 121.0036417,
          current_speed: 29.5,
          hfo_consumption: 5698.37,
          lsfo_consumption: 1736.07,
          created_at: "2020-01-15 18:30:57"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 29.2594417,
          longitude: 120.2331913,
          current_speed: 24.5,
          hfo_consumption: 407.1,
          lsfo_consumption: 1314.07,
          created_at: "2019-11-12 05:09:47"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: -3.741645,
          longitude: -39.6105142,
          current_speed: 8.6,
          hfo_consumption: 3080.67,
          lsfo_consumption: 3398.19,
          created_at: "2019-10-12 02:13:15"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: 32.820169,
          longitude: 107.497055,
          current_speed: 10.2,
          hfo_consumption: 9063.94,
          lsfo_consumption: 3497.8,
          created_at: "2020-02-13 20:43:05"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 41.7936783,
          longitude: -8.3338509,
          current_speed: 26.9,
          hfo_consumption: 6163.19,
          lsfo_consumption: 4400.2,
          created_at: "2019-12-28 16:39:33"
        },
        {
          voyage_id: 19,
          selected_route_id: null,
          latitude: 48.5271841,
          longitude: 7.7424053,
          current_speed: 11.8,
          hfo_consumption: 5116.7,
          lsfo_consumption: 4700.83,
          created_at: "2019-12-16 18:22:10"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 0.556948,
          longitude: 109.374802,
          current_speed: 20.0,
          hfo_consumption: 4791.05,
          lsfo_consumption: 2274.09,
          created_at: "2020-01-26 21:46:22"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: 48.9308651,
          longitude: 6.0376291,
          current_speed: 1.9,
          hfo_consumption: 1256.93,
          lsfo_consumption: 6996.84,
          created_at: "2019-10-17 05:44:30"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: -2.2268901,
          longitude: -80.8593845,
          current_speed: 1.2,
          hfo_consumption: 9082.99,
          lsfo_consumption: 3083.69,
          created_at: "2019-11-26 11:40:12"
        },
        {
          voyage_id: 21,
          selected_route_id: null,
          latitude: 7.4064275,
          longitude: -7.5572231,
          current_speed: 19.4,
          hfo_consumption: 6393.58,
          lsfo_consumption: 1834.02,
          created_at: "2019-11-14 05:15:48"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: 45.0651725,
          longitude: 7.6385118,
          current_speed: 30.9,
          hfo_consumption: 3529.37,
          lsfo_consumption: 2064.58,
          created_at: "2019-12-14 20:41:52"
        },
        {
          voyage_id: 49,
          selected_route_id: null,
          latitude: -6.4024844,
          longitude: 106.7942405,
          current_speed: 28.3,
          hfo_consumption: 5428.04,
          lsfo_consumption: 4388.29,
          created_at: "2019-12-02 23:47:55"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: "57.48135",
          longitude: "33.70211",
          current_speed: 30.9,
          hfo_consumption: 9955.34,
          lsfo_consumption: 8928.68,
          created_at: "2019-10-14 02:42:45"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: "13.8013",
          longitude: "32.4078",
          current_speed: 15.4,
          hfo_consumption: 7227.39,
          lsfo_consumption: 9618.66,
          created_at: "2020-03-08 11:36:12"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 45.2821109,
          longitude: 19.5712204,
          current_speed: 18.2,
          hfo_consumption: 8003.88,
          lsfo_consumption: 2133.46,
          created_at: "2019-12-12 21:58:05"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 41.2270631,
          longitude: -7.4666688,
          current_speed: 0.2,
          hfo_consumption: 6105.81,
          lsfo_consumption: 272.53,
          created_at: "2020-02-22 19:26:00"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 59.0475746,
          longitude: 15.002836,
          current_speed: 31.7,
          hfo_consumption: 7300.8,
          lsfo_consumption: 6168.49,
          created_at: "2020-03-06 09:16:01"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -46.5996116,
          longitude: 168.3457088,
          current_speed: 25.8,
          hfo_consumption: 8835.2,
          lsfo_consumption: 3413.46,
          created_at: "2019-11-05 23:25:54"
        },
        {
          voyage_id: 45,
          selected_route_id: null,
          latitude: 15.2586581,
          longitude: 100.8677256,
          current_speed: 11.9,
          hfo_consumption: 7237.3,
          lsfo_consumption: 5417.63,
          created_at: "2020-01-11 02:44:03"
        },
        {
          voyage_id: 37,
          selected_route_id: null,
          latitude: 45.0177112,
          longitude: 78.3804417,
          current_speed: 3.6,
          hfo_consumption: 2640.86,
          lsfo_consumption: 9588.51,
          created_at: "2019-12-14 05:38:43"
        },
        {
          voyage_id: 35,
          selected_route_id: null,
          latitude: 49.8564201,
          longitude: 18.4660353,
          current_speed: 21.3,
          hfo_consumption: 8693.86,
          lsfo_consumption: 735.34,
          created_at: "2019-12-16 15:31:02"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 14.1507357,
          longitude: 120.878102,
          current_speed: 9.7,
          hfo_consumption: 8796.77,
          lsfo_consumption: 9229.55,
          created_at: "2019-10-27 23:25:30"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 30.262907,
          longitude: 84.475645,
          current_speed: 2.4,
          hfo_consumption: 9069.54,
          lsfo_consumption: 3806.56,
          created_at: "2020-01-04 08:16:53"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 36.9832371,
          longitude: 140.0373221,
          current_speed: 22.2,
          hfo_consumption: 1886.03,
          lsfo_consumption: 8041.54,
          created_at: "2019-10-15 09:21:23"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: -2.622461,
          longitude: 102.754898,
          current_speed: 12.6,
          hfo_consumption: 2177.45,
          lsfo_consumption: 1252.56,
          created_at: "2020-02-20 21:55:03"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: 51.5742615,
          longitude: 5.0840393,
          current_speed: 27.5,
          hfo_consumption: 7876.25,
          lsfo_consumption: 1538.55,
          created_at: "2019-12-02 08:46:38"
        },
        {
          voyage_id: 26,
          selected_route_id: null,
          latitude: 32.3855324,
          longitude: -86.2514126,
          current_speed: 3.2,
          hfo_consumption: 3642.77,
          lsfo_consumption: 9938.81,
          created_at: "2019-11-18 21:45:02"
        },
        {
          voyage_id: 18,
          selected_route_id: null,
          latitude: 41.418695,
          longitude: -8.4841515,
          current_speed: 8.9,
          hfo_consumption: 6339.98,
          lsfo_consumption: 9320.57,
          created_at: "2019-12-01 13:04:14"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 53.1872306,
          longitude: 18.0963464,
          current_speed: 5.5,
          hfo_consumption: 3893.61,
          lsfo_consumption: 9756.5,
          created_at: "2020-01-30 18:27:49"
        },

        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 54.2207765,
          longitude: 18.9709477,
          current_speed: 17.0,
          hfo_consumption: 2775.22,
          lsfo_consumption: 5396.51,
          created_at: "2019-10-26 11:31:03"
        },
        {
          voyage_id: 6,
          selected_route_id: null,
          latitude: 40.2549207,
          longitude: 22.3420757,
          current_speed: 19.8,
          hfo_consumption: 9444.03,
          lsfo_consumption: 4127.29,
          created_at: "2019-11-24 03:41:01"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 14.7833743,
          longitude: -90.4537748,
          current_speed: 4.5,
          hfo_consumption: 1000.18,
          lsfo_consumption: 7843.98,
          created_at: "2019-11-14 23:05:02"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 41.3371316,
          longitude: -8.5394062,
          current_speed: 23.2,
          hfo_consumption: 5885.44,
          lsfo_consumption: 6410.82,
          created_at: "2019-12-17 03:02:29"
        },
        {
          voyage_id: 29,
          selected_route_id: null,
          latitude: 41.340135,
          longitude: -8.1456405,
          current_speed: 17.4,
          hfo_consumption: 4980.56,
          lsfo_consumption: 2234.55,
          created_at: "2020-02-10 18:08:29"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 9.9004655,
          longitude: 13.0544185,
          current_speed: 8.7,
          hfo_consumption: 8419.29,
          lsfo_consumption: 8006.57,
          created_at: "2020-03-01 21:40:36"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 40.6394384,
          longitude: -8.6380475,
          current_speed: 21.6,
          hfo_consumption: 5963.9,
          lsfo_consumption: 769.37,
          created_at: "2019-11-27 15:47:34"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: -15.0139992,
          longitude: -69.3667194,
          current_speed: 13.4,
          hfo_consumption: 8032.53,
          lsfo_consumption: 2282.38,
          created_at: "2020-02-05 09:56:05"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 40.4140806,
          longitude: -8.738467,
          current_speed: 28.8,
          hfo_consumption: 4014.87,
          lsfo_consumption: 2909.44,
          created_at: "2020-01-26 23:49:36"
        },
        {
          voyage_id: 47,
          selected_route_id: null,
          latitude: 45.5458137,
          longitude: 18.28907,
          current_speed: 4.8,
          hfo_consumption: 9631.59,
          lsfo_consumption: 7440.02,
          created_at: "2020-01-13 04:09:26"
        },
        {
          voyage_id: 38,
          selected_route_id: null,
          latitude: 26.641315,
          longitude: 100.222545,
          current_speed: 28.9,
          hfo_consumption: 3969.52,
          lsfo_consumption: 4199.96,
          created_at: "2019-10-13 16:42:10"
        },
        {
          voyage_id: 50,
          selected_route_id: null,
          latitude: 41.5817519,
          longitude: 21.0005869,
          current_speed: 3.7,
          hfo_consumption: 5077.91,
          lsfo_consumption: 5421.09,
          created_at: "2020-03-04 02:57:54"
        },
        {
          voyage_id: 20,
          selected_route_id: null,
          latitude: 43.4914335,
          longitude: 5.3707209,
          current_speed: 14.0,
          hfo_consumption: 2718.35,
          lsfo_consumption: 2761.66,
          created_at: "2019-12-03 20:27:53"
        },
        {
          voyage_id: 43,
          selected_route_id: null,
          latitude: 26.681361,
          longitude: 107.768069,
          current_speed: 28.8,
          hfo_consumption: 7442.22,
          lsfo_consumption: 3786.14,
          created_at: "2020-01-24 20:13:55"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 50.8290179,
          longitude: 12.872972,
          current_speed: 4.6,
          hfo_consumption: 4230.56,
          lsfo_consumption: 3658.59,
          created_at: "2020-02-16 06:46:28"
        },
        {
          voyage_id: 10,
          selected_route_id: null,
          latitude: 59.2883751,
          longitude: 18.0250491,
          current_speed: 13.5,
          hfo_consumption: 4150.56,
          lsfo_consumption: 2824.92,
          created_at: "2019-10-27 02:35:31"
        },
        {
          voyage_id: 1,
          selected_route_id: null,
          latitude: 47.349916,
          longitude: 130.297964,
          current_speed: 25.6,
          hfo_consumption: 1049.22,
          lsfo_consumption: 2755.28,
          created_at: "2019-11-20 04:00:16"
        },
        {
          voyage_id: 33,
          selected_route_id: null,
          latitude: 26.2198633,
          longitude: 50.5329678,
          current_speed: 3.7,
          hfo_consumption: 265.99,
          lsfo_consumption: 5381.82,
          created_at: "2020-01-29 11:45:49"
        },
        {
          voyage_id: 36,
          selected_route_id: null,
          latitude: 5.614775,
          longitude: -73.819571,
          current_speed: 1.8,
          hfo_consumption: 7454.19,
          lsfo_consumption: 7669.14,
          created_at: "2019-12-21 01:28:35"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: 11.4025367,
          longitude: 16.1713267,
          current_speed: 31.4,
          hfo_consumption: 6231.24,
          lsfo_consumption: 7936.19,
          created_at: "2019-10-26 19:20:30"
        },
        {
          voyage_id: 34,
          selected_route_id: null,
          latitude: 43.5561243,
          longitude: 77.9995589,
          current_speed: 15.1,
          hfo_consumption: 9133.4,
          lsfo_consumption: 7414.09,
          created_at: "2020-01-28 05:17:40"
        },
        {
          voyage_id: 48,
          selected_route_id: null,
          latitude: -13.7557949,
          longitude: -172.3051657,
          current_speed: 28.3,
          hfo_consumption: 7756.72,
          lsfo_consumption: 6474.86,
          created_at: "2019-10-16 10:04:52"
        },
        {
          voyage_id: 13,
          selected_route_id: null,
          latitude: -6.898384,
          longitude: 111.885002,
          current_speed: 25.4,
          hfo_consumption: 4062.78,
          lsfo_consumption: 2752.75,
          created_at: "2020-02-05 07:29:39"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 19.2874648,
          longitude: -99.6494479,
          current_speed: 4.9,
          hfo_consumption: 2413.05,
          lsfo_consumption: 7887.04,
          created_at: "2019-11-04 06:06:57"
        },
        {
          voyage_id: 17,
          selected_route_id: null,
          latitude: 34.805822,
          longitude: 104.773803,
          current_speed: 30.8,
          hfo_consumption: 7869.57,
          lsfo_consumption: 4881.76,
          created_at: "2020-01-13 12:10:57"
        },
        {
          voyage_id: 5,
          selected_route_id: null,
          latitude: 38.8807023,
          longitude: -77.1086041,
          current_speed: 4.2,
          hfo_consumption: 2898.9,
          lsfo_consumption: 7662.75,
          created_at: "2019-11-06 19:15:47"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 45.288656,
          longitude: 4.65065,
          current_speed: 16.9,
          hfo_consumption: 6804.98,
          lsfo_consumption: 3453.23,
          created_at: "2020-02-22 14:32:12"
        },
        {
          voyage_id: 7,
          selected_route_id: null,
          latitude: 67.6955232,
          longitude: 24.8590222,
          current_speed: 20.1,
          hfo_consumption: 8718.08,
          lsfo_consumption: 1400.89,
          created_at: "2019-12-24 09:49:18"
        },
        {
          voyage_id: 28,
          selected_route_id: null,
          latitude: 12.2711071,
          longitude: 12.5807242,
          current_speed: 1.6,
          hfo_consumption: 1631.07,
          lsfo_consumption: 7137.96,
          created_at: "2019-12-08 19:54:33"
        },
        {
          voyage_id: 44,
          selected_route_id: null,
          latitude: -6.9000441,
          longitude: 112.9029014,
          current_speed: 26.2,
          hfo_consumption: 2264.79,
          lsfo_consumption: 236.83,
          created_at: "2019-11-22 18:08:33"
        },
        {
          voyage_id: 46,
          selected_route_id: null,
          latitude: 41.6188726,
          longitude: -8.3575438,
          current_speed: 2.9,
          hfo_consumption: 5651.47,
          lsfo_consumption: 7458.9,
          created_at: "2019-12-03 14:13:02"
        },
        {
          voyage_id: 15,
          selected_route_id: null,
          latitude: 27.686251,
          longitude: 111.434984,
          current_speed: 4.5,
          hfo_consumption: 6027.32,
          lsfo_consumption: 3168.1,
          created_at: "2020-02-05 15:24:29"
        },
        {
          voyage_id: 16,
          selected_route_id: null,
          latitude: 30.067176,
          longitude: 120.700248,
          current_speed: 19.3,
          hfo_consumption: 8470.05,
          lsfo_consumption: 24.45,
          created_at: "2020-02-12 06:11:08"
        },
        {
          voyage_id: 8,
          selected_route_id: null,
          latitude: 53.9240029,
          longitude: 53.873969,
          current_speed: 27.8,
          hfo_consumption: 5307.0,
          lsfo_consumption: 8886.6,
          created_at: "2019-11-11 12:14:48"
        },
        {
          voyage_id: 2,
          selected_route_id: null,
          latitude: 49.6106567,
          longitude: 18.735973,
          current_speed: 5.5,
          hfo_consumption: 3668.63,
          lsfo_consumption: 3669.78,
          created_at: "2019-11-22 15:27:32"
        },
        {
          voyage_id: 23,
          selected_route_id: null,
          latitude: 64.012788,
          longitude: 11.487163,
          current_speed: 28.0,
          hfo_consumption: 5534.24,
          lsfo_consumption: 9236.13,
          created_at: "2019-12-10 07:29:57"
        },
        {
          voyage_id: 12,
          selected_route_id: null,
          latitude: 14.5482727,
          longitude: -89.6618378,
          current_speed: 1.0,
          hfo_consumption: 8421.69,
          lsfo_consumption: 5501.23,
          created_at: "2019-12-18 09:49:02"
        },
        {
          voyage_id: 42,
          selected_route_id: null,
          latitude: "30.9128",
          longitude: "30.29018",
          current_speed: 2.1,
          hfo_consumption: 3689.38,
          lsfo_consumption: 791.64,
          created_at: "2019-11-09 05:30:13"
        },
        {
          voyage_id: 22,
          selected_route_id: null,
          latitude: -6.6658733,
          longitude: 106.8635643,
          current_speed: 10.7,
          hfo_consumption: 356.95,
          lsfo_consumption: 957.29,
          created_at: "2019-12-22 10:36:20"
        },
        {
          voyage_id: 9,
          selected_route_id: null,
          latitude: "18.04406",
          longitude: "121.71871",
          current_speed: 14.7,
          hfo_consumption: 9866.73,
          lsfo_consumption: 8984.91,
          created_at: "2019-11-19 10:56:29"
        },
        {
          voyage_id: 4,
          selected_route_id: null,
          latitude: 0.5987602,
          longitude: 124.297718,
          current_speed: 13.9,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2020-01-12 01:08:38"
        },
        {
          voyage_id: 24,
          selected_route_id: null,
          latitude: 55.74160767493425,
          longitude: 12.625179290771484,
          current_speed: 13.9,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2019-10-18 07:03:28"
        },
        {
          voyage_id: 24,
          selected_route_id: null,
          latitude: 57.397624055000456,
          longitude: 6.5478515625,
          current_speed: 11.2,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2019-10-19 00:08:38"
        },
        {
          voyage_id: 24,
          selected_route_id: null,
          latitude: 55.4040698270061,
          longitude: -16.34765625,
          current_speed: 10.2,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2019-10-20 00:12:18"
        },
        {
          voyage_id: 24,
          selected_route_id: null,
          latitude: 41.376808565702355,
          longitude: -16.34765625,
          current_speed: 13.1,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2019-10-21 00:07:21"
        },
        {
          voyage_id: 24,
          selected_route_id: null,
          latitude: 39.436192999314095,
          longitude: 12.0849609375,
          current_speed: 15.1,
          hfo_consumption: 8629.58,
          lsfo_consumption: 8778.53,
          created_at: "2019-10-22 00:04:38"
        }
      ]);
    });
};
