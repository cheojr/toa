
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'26 14:50:00'", "'2014-03-26 14:50:00'",233.58, 317.03]);  data.addRow(["'26 15:20:00'", "'2014-03-26 15:20:00'",365.79, 486.66]);  data.addRow(["'26 15:50:00'", "'2014-03-26 15:50:00'",233.45, 339.59]);  data.addRow(["'26 16:20:00'", "'2014-03-26 16:20:00'",177.06, 246.52]);  data.addRow(["'26 16:50:00'", "'2014-03-26 16:50:00'",144.04, 223.71]);  data.addRow(["'26 17:20:00'", "'2014-03-26 17:20:00'",108.52, 146.74]);  data.addRow(["'26 17:50:00'", "'2014-03-26 17:50:00'",101.01, 190.54]);  data.addRow(["'26 18:20:00'", "'2014-03-26 18:20:00'",93.03, 123.61]);  data.addRow(["'26 18:50:00'", "'2014-03-26 18:50:00'",111.49, 151.89]);  data.addRow(["'26 19:20:00'", "'2014-03-26 19:20:00'",76.58, 99.43]);  data.addRow(["'26 19:50:00'", "'2014-03-26 19:50:00'",78.54, 98.28]);  data.addRow(["'26 20:20:00'", "'2014-03-26 20:20:00'",67.69, 87.91]);  data.addRow(["'26 20:50:00'", "'2014-03-26 20:50:00'",63.78, 75.51]);  data.addRow(["'26 21:20:00'", "'2014-03-26 21:20:00'",77.13, 80.58]);  data.addRow(["'26 21:50:00'", "'2014-03-26 21:50:00'",71.43, 74.21]);  data.addRow(["'26 22:20:00'", "'2014-03-26 22:20:00'",80.54, 77.23]);  data.addRow(["'26 22:50:00'", "'2014-03-26 22:50:00'",48.43, 51.92]);  data.addRow(["'26 23:20:00'", "'2014-03-26 23:20:00'",78.89, 60.69]);  data.addRow(["'26 23:50:00'", "'2014-03-26 23:50:00'",59.07, 67.51]);  data.addRow(["'27 00:20:00'", "'2014-03-27 00:20:00'",45.28, 42.47]);  data.addRow(["'27 00:50:00'", "'2014-03-27 00:50:00'",48.68, 45.57]);  data.addRow(["'27 01:20:00'", "'2014-03-27 01:20:00'",32.65, 28.04]);  data.addRow(["'27 01:50:00'", "'2014-03-27 01:50:00'",31.54, 32.93]);  data.addRow(["'27 02:20:00'", "'2014-03-27 02:20:00'",28.38, 24.64]);  data.addRow(["'27 02:50:00'", "'2014-03-27 02:50:00'",41.44, 41.09]);  data.addRow(["'27 03:20:00'", "'2014-03-27 03:20:00'",50.71, 54.74]);  data.addRow(["'27 03:50:00'", "'2014-03-27 03:50:00'",27.75, 28.58]);  data.addRow(["'27 04:20:00'", "'2014-03-27 04:20:00'",17.13, 17.89]);  data.addRow(["'27 04:50:00'", "'2014-03-27 04:50:00'",38.49, 38.56]);  data.addRow(["'27 05:20:00'", "'2014-03-27 05:20:00'",18.91, 17.64]);  data.addRow(["'27 05:50:00'", "'2014-03-27 05:50:00'",21.15, 20.70]);  data.addRow(["'27 06:20:00'", "'2014-03-27 06:20:00'",26.57, 37.97]);  data.addRow(["'27 06:50:00'", "'2014-03-27 06:50:00'",40.44, 51.34]);  data.addRow(["'27 07:20:00'", "'2014-03-27 07:20:00'",99.30, 191.35]);  data.addRow(["'27 07:50:00'", "'2014-03-27 07:50:00'",113.45, 200.44]);  data.addRow(["'27 08:20:00'", "'2014-03-27 08:20:00'",170.08, 274.19]);  data.addRow(["'27 08:50:00'", "'2014-03-27 08:50:00'",278.51, 457.05]);  data.addRow(["'27 09:20:00'", "'2014-03-27 09:20:00'",334.14, 531.93]);  data.addRow(["'27 09:50:00'", "'2014-03-27 09:50:00'",358.28, 543.32]);  data.addRow(["'27 10:20:00'", "'2014-03-27 10:20:00'",279.88, 410.31]);  data.addRow(["'27 10:50:00'", "'2014-03-27 10:50:00'",296.72, 436.94]);  data.addRow(["'27 11:20:00'", "'2014-03-27 11:20:00'",336.55, 511.32]);  data.addRow(["'27 11:50:00'", "'2014-03-27 11:50:00'",297.04, 430.79]);  data.addRow(["'27 12:20:00'", "'2014-03-27 12:20:00'",278.15, 446.67]);  data.addRow(["'27 12:50:00'", "'2014-03-27 12:50:00'",242.75, 401.48]);  data.addRow(["'27 13:20:00'", "'2014-03-27 13:20:00'",259.15, 423.79]);  data.addRow(["'27 13:50:00'", "'2014-03-27 13:50:00'",288.38, 439.59]);  data.addRow(["'27 14:20:00'", "'2014-03-27 14:20:00'",302.33, 486.16]);  data.addRow(["'27 14:50:00'", "'2014-03-27 14:50:00'",281.99, 449.40]);  data.addRow(["'27 15:20:00'", "'2014-03-27 15:20:00'",267.88, 369.54]);  data.addRow(["'27 15:50:00'", "'2014-03-27 15:50:00'",241.18, 349.06]);  data.addRow(["'27 16:20:00'", "'2014-03-27 16:20:00'",181.64, 265.58]);  data.addRow(["'27 16:50:00'", "'2014-03-27 16:50:00'",126.88, 190.90]);  data.addRow(["'27 17:20:00'", "'2014-03-27 17:20:00'",114.84, 175.91]);  data.addRow(["'27 17:50:00'", "'2014-03-27 17:50:00'",128.43, 202.70]);  data.addRow(["'27 18:20:00'", "'2014-03-27 18:20:00'",139.47, 185.36]);  data.addRow(["'27 18:50:00'", "'2014-03-27 18:50:00'",111.24, 180.71]);  data.addRow(["'27 19:20:00'", "'2014-03-27 19:20:00'",92.56, 148.55]);  data.addRow(["'27 19:50:00'", "'2014-03-27 19:50:00'",68.32, 127.23]);  data.addRow(["'27 20:20:00'", "'2014-03-27 20:20:00'",59.53, 93.37]);  data.addRow(["'27 20:50:00'", "'2014-03-27 20:50:00'",54.29, 88.17]);  data.addRow(["'27 21:20:00'", "'2014-03-27 21:20:00'",76.68, 98.26]);  data.addRow(["'27 21:50:00'", "'2014-03-27 21:50:00'",62.79, 75.78]);  data.addRow(["'27 22:20:00'", "'2014-03-27 22:20:00'",93.67, 77.80]);  data.addRow(["'27 22:50:00'", "'2014-03-27 22:50:00'",61.64, 63.01]);  data.addRow(["'27 23:20:00'", "'2014-03-27 23:20:00'",95.36, 84.00]);  data.addRow(["'27 23:50:00'", "'2014-03-27 23:50:00'",67.69, 52.88]);  data.addRow(["'28 00:20:00'", "'2014-03-28 00:20:00'",61.88, 53.95]);  data.addRow(["'28 00:50:00'", "'2014-03-28 00:50:00'",45.31, 47.86]);  data.addRow(["'28 01:20:00'", "'2014-03-28 01:20:00'",29.97, 35.31]);  data.addRow(["'28 01:50:00'", "'2014-03-28 01:50:00'",32.15, 31.14]);  data.addRow(["'28 02:20:00'", "'2014-03-28 02:20:00'",34.71, 35.96]);  data.addRow(["'28 02:50:00'", "'2014-03-28 02:50:00'",23.95, 22.29]);  data.addRow(["'28 03:20:00'", "'2014-03-28 03:20:00'",44.30, 47.40]);  data.addRow(["'28 03:50:00'", "'2014-03-28 03:50:00'",37.78, 43.79]);  data.addRow(["'28 04:20:00'", "'2014-03-28 04:20:00'",31.17, 32.51]);  data.addRow(["'28 04:50:00'", "'2014-03-28 04:50:00'",44.13, 40.27]);  data.addRow(["'28 05:20:00'", "'2014-03-28 05:20:00'",33.72, 34.95]);  data.addRow(["'28 05:50:00'", "'2014-03-28 05:50:00'",29.10, 35.43]);  data.addRow(["'28 06:20:00'", "'2014-03-28 06:20:00'",29.95, 38.49]);  data.addRow(["'28 06:50:00'", "'2014-03-28 06:50:00'",38.69, 55.66]);  data.addRow(["'28 07:20:00'", "'2014-03-28 07:20:00'",64.60, 105.75]);  data.addRow(["'28 07:50:00'", "'2014-03-28 07:50:00'",107.99, 200.48]);  data.addRow(["'28 08:20:00'", "'2014-03-28 08:20:00'",330.38, 442.90]);  data.addRow(["'28 08:50:00'", "'2014-03-28 08:50:00'",176.63, 309.74]);  data.addRow(["'28 09:20:00'", "'2014-03-28 09:20:00'",236.36, 419.18]);  data.addRow(["'28 09:50:00'", "'2014-03-28 09:50:00'",289.85, 423.02]);  data.addRow(["'28 10:20:00'", "'2014-03-28 10:20:00'",283.18, 450.54]);  data.addRow(["'28 10:50:00'", "'2014-03-28 10:50:00'",279.30, 453.55]);  data.addRow(["'28 11:20:00'", "'2014-03-28 11:20:00'",222.30, 332.87]);  data.addRow(["'28 11:50:00'", "'2014-03-28 11:50:00'",239.71, 315.73]);  data.addRow(["'28 12:20:00'", "'2014-03-28 12:20:00'",201.47, 314.61]);  data.addRow(["'28 12:50:00'", "'2014-03-28 12:50:00'",217.93, 376.89]);  data.addRow(["'28 13:20:00'", "'2014-03-28 13:20:00'",259.85, 398.34]);  data.addRow(["'28 13:50:00'", "'2014-03-28 13:50:00'",237.83, 396.99]);  data.addRow(["'28 14:20:00'", "'2014-03-28 14:20:00'",252.51, 410.95]);  data.addRow(["'28 14:50:00'", "'2014-03-28 14:50:00'",228.94, 317.53]);  data.addRow(["'28 15:20:00'", "'2014-03-28 15:20:00'",206.15, 305.14]);  data.addRow(["'28 15:50:00'", "'2014-03-28 15:50:00'",215.62, 309.43]);  data.addRow(["'28 16:20:00'", "'2014-03-28 16:20:00'",217.25, 308.67]);  data.addRow(["'28 16:50:00'", "'2014-03-28 16:50:00'",178.37, 239.56]);  data.addRow(["'28 17:20:00'", "'2014-03-28 17:20:00'",142.44, 213.52]);  data.addRow(["'28 17:50:00'", "'2014-03-28 17:50:00'",216.96, 210.15]);  data.addRow(["'28 18:20:00'", "'2014-03-28 18:20:00'",117.85, 138.58]);  data.addRow(["'28 18:50:00'", "'2014-03-28 18:50:00'",83.62, 110.13]);  data.addRow(["'28 19:20:00'", "'2014-03-28 19:20:00'",77.93, 89.31]);  data.addRow(["'28 19:50:00'", "'2014-03-28 19:50:00'",58.46, 79.04]);  data.addRow(["'28 20:20:00'", "'2014-03-28 20:20:00'",60.61, 68.61]);  data.addRow(["'28 20:50:00'", "'2014-03-28 20:50:00'",72.27, 94.33]);  data.addRow(["'28 21:20:00'", "'2014-03-28 21:20:00'",79.91, 73.09]);  data.addRow(["'28 21:50:00'", "'2014-03-28 21:50:00'",64.54, 82.77]);  data.addRow(["'28 22:20:00'", "'2014-03-28 22:20:00'",135.44, 94.61]);  data.addRow(["'28 22:50:00'", "'2014-03-28 22:50:00'",74.96, 83.49]);  data.addRow(["'28 23:20:00'", "'2014-03-28 23:20:00'",93.43, 64.97]);  data.addRow(["'28 23:50:00'", "'2014-03-28 23:50:00'",81.44, 76.54]);  data.addRow(["'29 00:20:00'", "'2014-03-29 00:20:00'",68.61, 70.68]);  data.addRow(["'29 00:50:00'", "'2014-03-29 00:50:00'",91.28, 88.24]);  data.addRow(["'29 01:20:00'", "'2014-03-29 01:20:00'",40.22, 35.88]);  data.addRow(["'29 01:50:00'", "'2014-03-29 01:50:00'",59.46, 41.64]);  data.addRow(["'29 02:20:00'", "'2014-03-29 02:20:00'",37.32, 38.47]);  data.addRow(["'29 02:50:00'", "'2014-03-29 02:50:00'",47.77, 32.03]);  data.addRow(["'29 03:20:00'", "'2014-03-29 03:20:00'",57.75, 59.45]);  data.addRow(["'29 03:50:00'", "'2014-03-29 03:50:00'",61.42, 38.60]);  data.addRow(["'29 04:20:00'", "'2014-03-29 04:20:00'",28.78, 22.63]);  data.addRow(["'29 04:50:00'", "'2014-03-29 04:50:00'",75.33, 50.07]);  data.addRow(["'29 05:20:00'", "'2014-03-29 05:20:00'",37.79, 26.94]);  data.addRow(["'29 05:50:00'", "'2014-03-29 05:50:00'",45.22, 25.53]);  data.addRow(["'29 06:20:00'", "'2014-03-29 06:20:00'",27.03, 21.53]);  data.addRow(["'29 06:50:00'", "'2014-03-29 06:50:00'",28.56, 25.38]);  data.addRow(["'29 07:20:00'", "'2014-03-29 07:20:00'",31.11, 30.51]);  data.addRow(["'29 07:50:00'", "'2014-03-29 07:50:00'",33.25, 37.75]);  data.addRow(["'29 08:20:00'", "'2014-03-29 08:20:00'",34.30, 46.11]);  data.addRow(["'29 08:50:00'", "'2014-03-29 08:50:00'",32.15, 38.21]);  data.addRow(["'29 09:20:00'", "'2014-03-29 09:20:00'",30.13, 36.30]);  data.addRow(["'29 09:50:00'", "'2014-03-29 09:50:00'",29.32, 32.68]);  data.addRow(["'29 10:20:00'", "'2014-03-29 10:20:00'",46.60, 46.75]);  data.addRow(["'29 10:50:00'", "'2014-03-29 10:50:00'",37.85, 41.42]);  data.addRow(["'29 11:20:00'", "'2014-03-29 11:20:00'",47.59, 57.10]);  data.addRow(["'29 11:50:00'", "'2014-03-29 11:50:00'",43.24, 65.15]);  data.addRow(["'29 12:20:00'", "'2014-03-29 12:20:00'",48.11, 63.02]);  data.addRow(["'29 12:50:00'", "'2014-03-29 12:50:00'",51.92, 62.75]);  data.addRow(["'29 13:20:00'", "'2014-03-29 13:20:00'",66.22, 67.42]);  data.addRow(["'29 13:50:00'", "'2014-03-29 13:50:00'",61.07, 76.89]);  data.addRow(["'29 14:20:00'", "'2014-03-29 14:20:00'",67.26, 75.97]);  data.addRow(["'29 14:50:00'", "'2014-03-29 14:50:00'",47.03, 62.57]);  data.addRow(["'29 15:20:00'", "'2014-03-29 15:20:00'",51.42, 78.87]);  data.addRow(["'29 15:50:00'", "'2014-03-29 15:50:00'",64.72, 77.51]);  data.addRow(["'29 16:20:00'", "'2014-03-29 16:20:00'",50.06, 67.15]);  data.addRow(["'29 16:50:00'", "'2014-03-29 16:50:00'",44.46, 50.36]);  data.addRow(["'29 17:20:00'", "'2014-03-29 17:20:00'",40.28, 49.80]);  data.addRow(["'29 17:50:00'", "'2014-03-29 17:50:00'",53.94, 68.88]);  data.addRow(["'29 18:20:00'", "'2014-03-29 18:20:00'",52.19, 55.34]);  data.addRow(["'29 18:50:00'", "'2014-03-29 18:50:00'",55.95, 71.30]);  data.addRow(["'29 19:20:00'", "'2014-03-29 19:20:00'",56.14, 74.89]);  data.addRow(["'29 19:50:00'", "'2014-03-29 19:50:00'",48.68, 68.45]);  data.addRow(["'29 20:20:00'", "'2014-03-29 20:20:00'",60.27, 68.19]);  data.addRow(["'29 20:50:00'", "'2014-03-29 20:50:00'",45.99, 53.81]);  data.addRow(["'29 21:20:00'", "'2014-03-29 21:20:00'",53.05, 45.51]);  data.addRow(["'29 21:50:00'", "'2014-03-29 21:50:00'",32.17, 32.09]);  data.addRow(["'29 22:20:00'", "'2014-03-29 22:20:00'",34.30, 29.88]);  data.addRow(["'29 22:50:00'", "'2014-03-29 22:50:00'",0.00, 0.00]);  data.addRow(["'29 23:20:00'", "'2014-03-29 23:20:00'",0.00, 0.00]);  data.addRow(["'29 23:50:00'", "'2014-03-29 23:50:00'",0.00, 0.00]);  data.addRow(["'30 00:20:00'", "'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow(["'30 00:50:00'", "'2014-03-30 00:50:00'",0.00, 0.00]);  data.addRow(["'30 01:20:00'", "'2014-03-30 01:20:00'",0.00, 0.00]);  data.addRow(["'30 01:50:00'", "'2014-03-30 01:50:00'",0.00, 0.00]);  data.addRow(["'30 02:20:00'", "'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow(["'30 02:50:00'", "'2014-03-30 02:50:00'",0.00, 0.00]);  data.addRow(["'30 03:20:00'", "'2014-03-30 03:20:00'",0.00, 0.00]);  data.addRow(["'30 03:50:00'", "'2014-03-30 03:50:00'",0.00, 0.00]);  data.addRow(["'30 04:20:00'", "'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow(["'30 04:50:00'", "'2014-03-30 04:50:00'",0.00, 0.00]);  data.addRow(["'30 05:20:00'", "'2014-03-30 05:20:00'",0.00, 0.00]);  data.addRow(["'30 05:50:00'", "'2014-03-30 05:50:00'",0.00, 0.00]);  data.addRow(["'30 06:20:00'", "'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow(["'30 06:50:00'", "'2014-03-30 06:50:00'",0.00, 0.00]);  data.addRow(["'30 07:20:00'", "'2014-03-30 07:20:00'",0.00, 0.00]);  data.addRow(["'30 07:50:00'", "'2014-03-30 07:50:00'",0.00, 0.00]);  data.addRow(["'30 08:20:00'", "'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow(["'30 08:50:00'", "'2014-03-30 08:50:00'",0.00, 0.00]);  data.addRow(["'30 09:20:00'", "'2014-03-30 09:20:00'",0.00, 0.00]);  data.addRow(["'30 09:50:00'", "'2014-03-30 09:50:00'",0.00, 0.00]);  data.addRow(["'30 10:20:00'", "'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow(["'30 10:50:00'", "'2014-03-30 10:50:00'",0.00, 0.00]);  data.addRow(["'30 11:20:00'", "'2014-03-30 11:20:00'",0.00, 0.00]);  data.addRow(["'30 11:50:00'", "'2014-03-30 11:50:00'",0.00, 0.00]);  data.addRow(["'30 12:20:00'", "'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow(["'30 12:50:00'", "'2014-03-30 12:50:00'",0.00, 0.00]);  data.addRow(["'30 13:20:00'", "'2014-03-30 13:20:00'",0.00, 0.00]);  data.addRow(["'30 13:50:00'", "'2014-03-30 13:50:00'",0.00, 0.00]);  data.addRow(["'30 14:20:00'", "'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow(["'30 14:50:00'", "'2014-03-30 14:50:00'",0.00, 0.00]);  data.addRow(["'30 15:20:00'", "'2014-03-30 15:20:00'",0.00, 0.00]);  data.addRow(["'30 15:50:00'", "'2014-03-30 15:50:00'",0.00, 0.00]);  data.addRow(["'30 16:20:00'", "'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow(["'30 16:50:00'", "'2014-03-30 16:50:00'",0.00, 0.00]);  data.addRow(["'30 17:20:00'", "'2014-03-30 17:20:00'",0.00, 0.00]);  data.addRow(["'30 17:50:00'", "'2014-03-30 17:50:00'",0.00, 0.00]);  data.addRow(["'30 18:20:00'", "'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow(["'30 18:50:00'", "'2014-03-30 18:50:00'",0.00, 0.00]);  data.addRow(["'30 19:20:00'", "'2014-03-30 19:20:00'",0.00, 0.00]);  data.addRow(["'30 19:50:00'", "'2014-03-30 19:50:00'",0.00, 0.00]);  data.addRow(["'30 20:20:00'", "'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow(["'30 20:50:00'", "'2014-03-30 20:50:00'",0.00, 0.00]);  data.addRow(["'30 21:20:00'", "'2014-03-30 21:20:00'",0.00, 0.00]);  data.addRow(["'30 21:50:00'", "'2014-03-30 21:50:00'",0.00, 0.00]);  data.addRow(["'30 22:20:00'", "'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow(["'30 22:50:00'", "'2014-03-30 22:50:00'",0.00, 0.00]);  data.addRow(["'30 23:20:00'", "'2014-03-30 23:20:00'",0.00, 0.00]);  data.addRow(["'30 23:50:00'", "'2014-03-30 23:50:00'",0.00, 0.00]);  data.addRow(["'31 00:20:00'", "'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow(["'31 00:50:00'", "'2014-03-31 00:50:00'",0.00, 0.00]);  data.addRow(["'31 01:20:00'", "'2014-03-31 01:20:00'",0.00, 0.00]);  data.addRow(["'31 01:50:00'", "'2014-03-31 01:50:00'",0.00, 0.00]);  data.addRow(["'31 02:20:00'", "'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow(["'31 02:50:00'", "'2014-03-31 02:50:00'",0.00, 0.00]);  data.addRow(["'31 03:20:00'", "'2014-03-31 03:20:00'",0.00, 0.00]);  data.addRow(["'31 03:50:00'", "'2014-03-31 03:50:00'",0.00, 0.00]);  data.addRow(["'31 04:20:00'", "'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow(["'31 04:50:00'", "'2014-03-31 04:50:00'",0.00, 0.00]);  data.addRow(["'31 05:20:00'", "'2014-03-31 05:20:00'",0.00, 0.00]);  data.addRow(["'31 05:50:00'", "'2014-03-31 05:50:00'",0.00, 0.00]);  data.addRow(["'31 06:20:00'", "'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow(["'31 06:50:00'", "'2014-03-31 06:50:00'",0.00, 0.00]);  data.addRow(["'31 07:20:00'", "'2014-03-31 07:20:00'",0.00, 0.00]);  data.addRow(["'31 07:50:00'", "'2014-03-31 07:50:00'",0.00, 0.00]);  data.addRow(["'31 08:20:00'", "'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow(["'31 08:50:00'", "'2014-03-31 08:50:00'",0.00, 0.00]);  data.addRow(["'31 09:20:00'", "'2014-03-31 09:20:00'",0.00, 0.00]);  data.addRow(["'31 09:50:00'", "'2014-03-31 09:50:00'",0.00, 0.00]);  data.addRow(["'31 10:20:00'", "'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow(["'31 10:50:00'", "'2014-03-31 10:50:00'",0.00, 0.00]);  data.addRow(["'31 11:20:00'", "'2014-03-31 11:20:00'",0.00, 0.00]);  data.addRow(["'31 11:50:00'", "'2014-03-31 11:50:00'",0.00, 0.00]);  data.addRow(["'31 12:20:00'", "'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow(["'31 12:50:00'", "'2014-03-31 12:50:00'",0.00, 0.00]);  data.addRow(["'31 13:20:00'", "'2014-03-31 13:20:00'",0.00, 0.00]);  data.addRow(["'31 13:50:00'", "'2014-03-31 13:50:00'",0.00, 0.00]);  data.addRow(["'31 14:20:00'", "'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow(["'31 14:50:00'", "'2014-03-31 14:50:00'",0.00, 0.00]);  data.addRow(["'31 15:20:00'", "'2014-03-31 15:20:00'",0.00, 0.00]);  data.addRow(["'31 15:50:00'", "'2014-03-31 15:50:00'",0.00, 0.00]);  data.addRow(["'31 16:20:00'", "'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow(["'31 16:50:00'", "'2014-03-31 16:50:00'",0.00, 0.00]);  data.addRow(["'31 17:20:00'", "'2014-03-31 17:20:00'",0.00, 0.00]);  data.addRow(["'31 17:50:00'", "'2014-03-31 17:50:00'",0.00, 0.00]);  data.addRow(["'31 18:20:00'", "'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow(["'31 18:50:00'", "'2014-03-31 18:50:00'",0.00, 0.00]);  data.addRow(["'31 19:20:00'", "'2014-03-31 19:20:00'",0.00, 0.00]);  data.addRow(["'31 19:50:00'", "'2014-03-31 19:50:00'",0.00, 0.00]);  data.addRow(["'31 20:20:00'", "'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow(["'31 20:50:00'", "'2014-03-31 20:50:00'",0.00, 0.00]);  data.addRow(["'31 21:20:00'", "'2014-03-31 21:20:00'",0.00, 0.00]);  data.addRow(["'31 21:50:00'", "'2014-03-31 21:50:00'",0.00, 0.00]);  data.addRow(["'31 22:20:00'", "'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow(["'31 22:50:00'", "'2014-03-31 22:50:00'",0.00, 0.00]);  data.addRow(["'31 23:20:00'", "'2014-03-31 23:20:00'",0.00, 0.00]);  data.addRow(["'31 23:50:00'", "'2014-03-31 23:50:00'",0.00, 0.00]);  data.addRow(["'01 00:20:00'", "'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow(["'01 00:50:00'", "'2014-04-01 00:50:00'",0.00, 0.00]);  data.addRow(["'01 01:20:00'", "'2014-04-01 01:20:00'",0.00, 0.00]);  data.addRow(["'01 01:50:00'", "'2014-04-01 01:50:00'",0.00, 0.00]);  data.addRow(["'01 02:20:00'", "'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow(["'01 02:50:00'", "'2014-04-01 02:50:00'",0.00, 0.00]);  data.addRow(["'01 03:20:00'", "'2014-04-01 03:20:00'",0.00, 0.00]);  data.addRow(["'01 03:50:00'", "'2014-04-01 03:50:00'",0.00, 0.00]);  data.addRow(["'01 04:20:00'", "'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow(["'01 04:50:00'", "'2014-04-01 04:50:00'",0.00, 0.00]);  data.addRow(["'01 05:20:00'", "'2014-04-01 05:20:00'",0.00, 0.00]);  data.addRow(["'01 05:50:00'", "'2014-04-01 05:50:00'",0.00, 0.00]);  data.addRow(["'01 06:20:00'", "'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow(["'01 06:50:00'", "'2014-04-01 06:50:00'",0.00, 0.00]);  data.addRow(["'01 07:20:00'", "'2014-04-01 07:20:00'",0.00, 0.00]);  data.addRow(["'01 07:50:00'", "'2014-04-01 07:50:00'",0.00, 0.00]);  data.addRow(["'01 08:20:00'", "'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow(["'01 08:50:00'", "'2014-04-01 08:50:00'",0.00, 0.00]);  data.addRow(["'01 09:20:00'", "'2014-04-01 09:20:00'",0.00, 0.00]);  data.addRow(["'01 09:50:00'", "'2014-04-01 09:50:00'",0.00, 0.00]);  data.addRow(["'01 10:20:00'", "'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow(["'01 10:50:00'", "'2014-04-01 10:50:00'",0.00, 0.00]);  data.addRow(["'01 11:20:00'", "'2014-04-01 11:20:00'",0.00, 0.00]);  data.addRow(["'01 11:50:00'", "'2014-04-01 11:50:00'",0.00, 0.00]);  data.addRow(["'01 12:20:00'", "'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow(["'01 12:50:00'", "'2014-04-01 12:50:00'",0.00, 0.00]);  data.addRow(["'01 13:20:00'", "'2014-04-01 13:20:00'",260.39, 347.24]);  data.addRow(["'01 13:50:00'", "'2014-04-01 13:50:00'",399.31, 585.68]);  data.addRow(["'01 14:20:00'", "'2014-04-01 14:20:00'",346.73, 511.22]);  data.addRow(["'01 14:50:00'", "'2014-04-01 14:50:00'",334.65, 468.68]);  data.addRow(["'01 15:20:00'", "'2014-04-01 15:20:00'",320.32, 471.11]);  data.addRow(["'01 15:50:00'", "'2014-04-01 15:50:00'",299.54, 427.44]);  data.addRow(["'01 16:20:00'", "'2014-04-01 16:20:00'",222.36, 291.37]);  data.addRow(["'01 16:50:00'", "'2014-04-01 16:50:00'",221.87, 269.05]);  data.addRow(["'01 17:20:00'", "'2014-04-01 17:20:00'",165.81, 199.28]);  data.addRow(["'01 17:50:00'", "'2014-04-01 17:50:00'",160.61, 182.39]);  data.addRow(["'01 18:20:00'", "'2014-04-01 18:20:00'",128.49, 156.78]);  data.addRow(["'01 18:50:00'", "'2014-04-01 18:50:00'",150.95, 152.11]);  data.addRow(["'01 19:20:00'", "'2014-04-01 19:20:00'",126.92, 155.21]);  data.addRow(["'01 19:50:00'", "'2014-04-01 19:50:00'",127.44, 153.74]);  data.addRow(["'01 20:20:00'", "'2014-04-01 20:20:00'",94.48, 115.65]);  data.addRow(["'01 20:50:00'", "'2014-04-01 20:50:00'",81.80, 90.63]);  data.addRow(["'01 21:20:00'", "'2014-04-01 21:20:00'",71.48, 78.34]);  data.addRow(["'01 21:50:00'", "'2014-04-01 21:50:00'",62.13, 81.67]);  data.addRow(["'01 22:20:00'", "'2014-04-01 22:20:00'",96.30, 92.33]);  data.addRow(["'01 22:50:00'", "'2014-04-01 22:50:00'",74.60, 80.26]);  data.addRow(["'01 23:20:00'", "'2014-04-01 23:20:00'",107.56, 90.55]);  data.addRow(["'01 23:50:00'", "'2014-04-01 23:50:00'",68.94, 67.36]);  data.addRow(["'02 00:20:00'", "'2014-04-02 00:20:00'",58.59, 53.35]);  data.addRow(["'02 00:50:00'", "'2014-04-02 00:50:00'",45.43, 46.26]);  data.addRow(["'02 01:20:00'", "'2014-04-02 01:20:00'",25.15, 34.11]);  data.addRow(["'02 01:50:00'", "'2014-04-02 01:50:00'",22.91, 24.79]);  data.addRow(["'02 02:20:00'", "'2014-04-02 02:20:00'",32.03, 40.66]);  data.addRow(["'02 02:50:00'", "'2014-04-02 02:50:00'",21.40, 32.49]);  data.addRow(["'02 03:20:00'", "'2014-04-02 03:20:00'",46.80, 59.22]);  data.addRow(["'02 03:50:00'", "'2014-04-02 03:50:00'",24.54, 36.00]);  data.addRow(["'02 04:20:00'", "'2014-04-02 04:20:00'",27.00, 47.91]);  data.addRow(["'02 04:50:00'", "'2014-04-02 04:50:00'",43.68, 52.28]);  data.addRow(["'02 05:20:00'", "'2014-04-02 05:20:00'",28.04, 32.48]);  data.addRow(["'02 05:50:00'", "'2014-04-02 05:50:00'",23.97, 36.46]);  data.addRow(["'02 06:20:00'", "'2014-04-02 06:20:00'",32.88, 47.54]);  data.addRow(["'02 06:50:00'", "'2014-04-02 06:50:00'",41.08, 76.84]);  data.addRow(["'02 07:20:00'", "'2014-04-02 07:20:00'",77.81, 129.03]);  data.addRow(["'02 07:50:00'", "'2014-04-02 07:50:00'",117.62, 221.78]);  data.addRow(["'02 08:20:00'", "'2014-04-02 08:20:00'",172.37, 337.14]);  data.addRow(["'02 08:50:00'", "'2014-04-02 08:50:00'",211.57, 384.49]);  data.addRow(["'02 09:20:00'", "'2014-04-02 09:20:00'",220.69, 380.43]);  data.addRow(["'02 09:50:00'", "'2014-04-02 09:50:00'",279.97, 422.51]);  data.addRow(["'02 10:20:00'", "'2014-04-02 10:20:00'",376.95, 617.57]);  data.addRow(["'02 10:50:00'", "'2014-04-02 10:50:00'",237.46, 374.91]);  data.addRow(["'02 11:20:00'", "'2014-04-02 11:20:00'",296.05, 453.58]);  data.addRow(["'02 11:50:00'", "'2014-04-02 11:50:00'",320.57, 495.14]);  data.addRow(["'02 12:20:00'", "'2014-04-02 12:20:00'",267.20, 444.96]);  data.addRow(["'02 12:50:00'", "'2014-04-02 12:50:00'",306.40, 447.89]);  data.addRow(["'02 13:20:00'", "'2014-04-02 13:20:00'",314.14, 428.73]);  data.addRow(["'02 13:50:00'", "'2014-04-02 13:50:00'",331.76, 465.57]);  data.addRow(["'02 14:20:00'", "'2014-04-02 14:20:00'",247.61, 348.97]);  data.addRow(["'02 14:50:00'", "'2014-04-02 14:50:00'",0.00, 0.00]); 

	var graphtitle='RCM Traffic Packets Max: 982.23 KB Min: 9.07 KB'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='982'

	
        
      
	