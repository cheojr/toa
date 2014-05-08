
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input bytes ');
        data.addColumn('number', 'Flows Output bytes '); data.addRow(["'03'", "'2014-03-26 14:55:00'",2.00, 1.74, 2.25, 2.55, 206.43, 228.57]);  data.addRow(["'03'", "'2014-03-26 15:25:00'",2.11, 1.09, 2.54, 2.42, 338.00, 371.00]);  data.addRow(["'03'", "'2014-03-26 15:55:00'",2.53, 0.89, 2.46, 2.21, 278.00, 315.00]);  data.addRow(["'03'", "'2014-03-26 16:25:00'",1.74, 0.41, 1.84, 1.60, 259.00, 302.00]);  data.addRow(["'03'", "'2014-03-26 16:55:00'",6.01, 0.43, 4.50, 4.03, 250.00, 291.00]);  data.addRow(["'03'", "'2014-03-26 17:25:00'",10.23, 0.46, 7.21, 6.66, 128.00, 154.00]);  data.addRow(["'03'", "'2014-03-26 17:55:00'",1.01, 0.15, 0.86, 0.68, 103.00, 124.00]);  data.addRow(["'03'", "'2014-03-26 18:25:00'",0.26, 0.27, 0.41, 0.48, 113.00, 131.00]);  data.addRow(["'03'", "'2014-03-26 18:55:00'",0.46, 0.42, 0.56, 0.73, 99.00, 122.00]);  data.addRow(["'03'", "'2014-03-26 19:25:00'",1.47, 0.62, 1.40, 1.56, 98.00, 110.00]);  data.addRow(["'03'", "'2014-03-26 19:55:00'",3.38, 0.14, 2.40, 1.75, 65.00, 77.00]);  data.addRow(["'03'", "'2014-03-26 20:25:00'",0.85, 0.11, 0.67, 0.70, 61.00, 67.00]);  data.addRow(["'03'", "'2014-03-26 20:55:00'",0.13, 0.05, 0.16, 0.18, 60.00, 66.00]);  data.addRow(["'03'", "'2014-03-26 21:25:00'",1.27, 0.40, 1.10, 1.21, 54.00, 53.00]);  data.addRow(["'03'", "'2014-03-26 21:55:00'",2.31, 0.31, 1.79, 1.88, 69.00, 80.00]);  data.addRow(["'03'", "'2014-03-26 22:25:00'",1.21, 0.52, 1.07, 1.23, 59.00, 75.00]);  data.addRow(["'03'", "'2014-03-26 22:55:00'",0.32, 0.15, 0.34, 0.33, 52.00, 61.00]);  data.addRow(["'03'", "'2014-03-26 23:25:00'",0.16, 0.13, 0.22, 0.26, 58.00, 67.00]);  data.addRow(["'03'", "'2014-03-26 23:55:00'",0.20, 0.73, 0.51, 0.70, 69.00, 78.00]);  data.addRow(["'03'", "'2014-03-27 00:25:00'",0.47, 0.09, 0.38, 0.43, 41.00, 58.00]);  data.addRow(["'03'", "'2014-03-27 00:55:00'",1.22, 0.22, 0.97, 1.07, 54.00, 62.00]);  data.addRow(["'03'", "'2014-03-27 01:25:00'",1.18, 0.33, 1.01, 0.97, 50.00, 51.00]);  data.addRow(["'03'", "'2014-03-27 01:55:00'",0.95, 0.26, 0.78, 0.88, 38.00, 44.00]);  data.addRow(["'03'", "'2014-03-27 02:25:00'",0.03, 0.25, 0.14, 0.22, 23.00, 28.00]);  data.addRow(["'03'", "'2014-03-27 02:55:00'",0.06, 0.01, 0.08, 0.08, 34.00, 33.00]);  data.addRow(["'03'", "'2014-03-27 03:25:00'",0.07, 0.01, 0.08, 0.08, 29.00, 37.00]);  data.addRow(["'03'", "'2014-03-27 03:55:00'",0.01, 0.01, 0.03, 0.03, 15.00, 17.00]);  data.addRow(["'03'", "'2014-03-27 04:25:00'",0.03, 0.00, 0.03, 0.02, 5.00, 5.00]);  data.addRow(["'03'", "'2014-03-27 04:55:00'",0.00, 0.00, 0.01, 0.01, 5.00, 5.00]);  data.addRow(["'03'", "'2014-03-27 05:25:00'",0.00, 0.00, 0.01, 0.00, 6.00, 3.00]);  data.addRow(["'03'", "'2014-03-27 05:55:00'",0.01, 0.00, 0.01, 0.01, 4.00, 3.00]);  data.addRow(["'03'", "'2014-03-27 06:25:00'",0.01, 0.00, 0.02, 0.01, 8.00, 8.00]);  data.addRow(["'03'", "'2014-03-27 06:55:00'",0.02, 0.00, 0.02, 0.02, 11.00, 12.00]);  data.addRow(["'03'", "'2014-03-27 07:25:00'",0.03, 0.01, 0.03, 0.04, 17.00, 23.00]);  data.addRow(["'03'", "'2014-03-27 07:55:00'",0.22, 0.07, 0.23, 0.20, 45.00, 48.00]);  data.addRow(["'03'", "'2014-03-27 08:25:00'",0.92, 0.06, 0.74, 0.53, 111.00, 119.00]);  data.addRow(["'03'", "'2014-03-27 08:55:00'",0.69, 0.34, 0.90, 0.94, 182.00, 213.00]);  data.addRow(["'03'", "'2014-03-27 09:25:00'",0.63, 1.47, 1.20, 2.16, 196.00, 216.00]);  data.addRow(["'03'", "'2014-03-27 09:55:00'",2.83, 0.34, 2.79, 1.75, 156.00, 177.00]);  data.addRow(["'03'", "'2014-03-27 10:25:00'",4.94, 0.70, 4.04, 3.12, 217.00, 237.00]);  data.addRow(["'03'", "'2014-03-27 10:55:00'",1.20, 0.39, 1.38, 1.43, 304.00, 345.00]);  data.addRow(["'03'", "'2014-03-27 11:25:00'",1.81, 2.17, 2.51, 3.17, 355.00, 395.00]);  data.addRow(["'03'", "'2014-03-27 11:55:00'",5.61, 1.02, 4.79, 4.62, 328.00, 377.00]);  data.addRow(["'03'", "'2014-03-27 12:25:00'",3.84, 0.94, 3.27, 3.22, 185.00, 195.00]);  data.addRow(["'03'", "'2014-03-27 12:55:00'",4.24, 1.29, 3.73, 3.88, 235.00, 256.00]);  data.addRow(["'03'", "'2014-03-27 13:25:00'",3.44, 1.42, 3.24, 3.50, 264.00, 298.00]);  data.addRow(["'03'", "'2014-03-27 13:55:00'",1.70, 0.42, 1.66, 1.69, 300.00, 349.00]);  data.addRow(["'03'", "'2014-03-27 14:25:00'",2.76, 1.21, 2.84, 2.90, 327.00, 325.00]);  data.addRow(["'03'", "'2014-03-27 14:55:00'",3.76, 1.46, 3.73, 4.19, 280.00, 304.00]);  data.addRow(["'03'", "'2014-03-27 15:25:00'",2.15, 0.36, 2.03, 1.98, 310.00, 351.00]);  data.addRow(["'03'", "'2014-03-27 15:55:00'",2.29, 0.24, 1.93, 1.62, 238.00, 274.00]);  data.addRow(["'03'", "'2014-03-27 16:25:00'",1.07, 1.09, 1.50, 1.69, 264.00, 292.00]);  data.addRow(["'03'", "'2014-03-27 16:55:00'",1.53, 0.51, 1.72, 1.72, 466.00, 527.00]);  data.addRow(["'03'", "'2014-03-27 17:25:00'",2.27, 0.37, 2.06, 1.74, 364.00, 413.00]);  data.addRow(["'03'", "'2014-03-27 17:55:00'",2.80, 0.61, 2.38, 2.16, 236.00, 259.00]);  data.addRow(["'03'", "'2014-03-27 18:25:00'",1.27, 0.39, 1.28, 1.10, 248.00, 280.00]);  data.addRow(["'03'", "'2014-03-27 18:55:00'",0.69, 0.57, 0.99, 1.18, 292.00, 329.00]);  data.addRow(["'03'", "'2014-03-27 19:25:00'",0.38, 0.13, 0.53, 0.54, 241.00, 278.00]);  data.addRow(["'03'", "'2014-03-27 19:55:00'",3.60, 1.33, 3.26, 2.79, 312.00, 358.00]);  data.addRow(["'03'", "'2014-03-27 20:25:00'",0.58, 0.49, 0.70, 0.70, 134.00, 139.00]);  data.addRow(["'03'", "'2014-03-27 20:55:00'",0.99, 0.32, 0.89, 0.92, 105.00, 112.00]);  data.addRow(["'03'", "'2014-03-27 21:25:00'",0.45, 0.28, 0.56, 0.68, 170.00, 194.00]);  data.addRow(["'03'", "'2014-03-27 21:55:00'",0.74, 0.16, 0.76, 0.83, 225.00, 250.00]);  data.addRow(["'03'", "'2014-03-27 22:25:00'",0.34, 0.18, 0.42, 0.50, 116.00, 133.00]);  data.addRow(["'03'", "'2014-03-27 22:55:00'",0.32, 0.18, 0.42, 0.44, 126.00, 141.00]);  data.addRow(["'03'", "'2014-03-27 23:25:00'",0.82, 0.75, 0.94, 1.17, 81.00, 99.00]);  data.addRow(["'03'", "'2014-03-27 23:55:00'",0.30, 0.76, 0.67, 0.97, 93.00, 104.00]);  data.addRow(["'03'", "'2014-03-28 00:25:00'",0.54, 0.23, 0.54, 0.63, 68.00, 83.00]);  data.addRow(["'03'", "'2014-03-28 00:55:00'",2.13, 0.18, 1.56, 0.93, 51.00, 55.00]);  data.addRow(["'03'", "'2014-03-28 01:25:00'",0.06, 0.05, 0.11, 0.12, 55.00, 58.00]);  data.addRow(["'03'", "'2014-03-28 01:55:00'",0.03, 0.01, 0.07, 0.07, 40.00, 45.00]);  data.addRow(["'03'", "'2014-03-28 02:25:00'",0.02, 0.01, 0.05, 0.06, 36.00, 42.00]);  data.addRow(["'03'", "'2014-03-28 02:55:00'",0.02, 0.01, 0.04, 0.06, 31.00, 37.00]);  data.addRow(["'03'", "'2014-03-28 03:25:00'",0.07, 0.01, 0.10, 0.09, 51.00, 55.00]);  data.addRow(["'03'", "'2014-03-28 03:55:00'",0.04, 0.02, 0.08, 0.09, 49.00, 62.00]);  data.addRow(["'03'", "'2014-03-28 04:25:00'",0.01, 0.01, 0.03, 0.03, 17.00, 19.00]);  data.addRow(["'03'", "'2014-03-28 04:55:00'",0.01, 0.00, 0.02, 0.02, 14.00, 16.00]);  data.addRow(["'03'", "'2014-03-28 05:25:00'",0.03, 0.06, 0.05, 0.06, 12.00, 10.00]);  data.addRow(["'03'", "'2014-03-28 05:55:00'",0.03, 0.02, 0.04, 0.03, 14.00, 13.00]);  data.addRow(["'03'", "'2014-03-28 06:25:00'",0.03, 0.07, 0.05, 0.07, 16.00, 16.00]);  data.addRow(["'03'", "'2014-03-28 06:55:00'",0.02, 0.01, 0.03, 0.03, 14.00, 15.00]);  data.addRow(["'03'", "'2014-03-28 07:25:00'",3.36, 0.15, 2.51, 1.42, 67.00, 67.00]);  data.addRow(["'03'", "'2014-03-28 07:55:00'",1.75, 0.45, 1.52, 1.08, 114.00, 126.00]);  data.addRow(["'03'", "'2014-03-28 08:25:00'",0.67, 0.15, 0.68, 0.65, 213.00, 239.00]);  data.addRow(["'03'", "'2014-03-28 08:55:00'",1.46, 0.50, 1.49, 1.21, 222.00, 238.00]);  data.addRow(["'03'", "'2014-03-28 09:25:00'",1.58, 2.01, 1.91, 2.50, 296.00, 322.00]);  data.addRow(["'03'", "'2014-03-28 09:55:00'",4.33, 2.33, 3.81, 3.65, 212.00, 243.00]);  data.addRow(["'03'", "'2014-03-28 10:25:00'",1.85, 0.24, 1.61, 1.18, 177.00, 203.00]);  data.addRow(["'03'", "'2014-03-28 10:55:00'",0.70, 0.20, 0.81, 0.79, 239.00, 264.00]);  data.addRow(["'03'", "'2014-03-28 11:25:00'",1.36, 0.26, 1.29, 1.07, 236.00, 261.00]);  data.addRow(["'03'", "'2014-03-28 11:55:00'",0.45, 0.14, 0.55, 0.58, 202.00, 229.00]);  data.addRow(["'03'", "'2014-03-28 12:25:00'",0.43, 0.23, 0.59, 0.61, 176.00, 192.00]);  data.addRow(["'03'", "'2014-03-28 12:55:00'",0.54, 0.21, 0.65, 0.67, 198.00, 224.00]);  data.addRow(["'03'", "'2014-03-28 13:25:00'",8.39, 9.74, 11.56, 13.94, 274.00, 300.00]);  data.addRow(["'03'", "'2014-03-28 13:55:00'",0.60, 0.11, 0.64, 0.55, 185.00, 202.00]);  data.addRow(["'03'", "'2014-03-28 14:25:00'",0.54, 0.18, 0.69, 0.66, 242.00, 254.00]);  data.addRow(["'03'", "'2014-03-28 14:55:00'",0.89, 0.24, 0.93, 0.76, 203.00, 212.00]);  data.addRow(["'03'", "'2014-03-28 15:25:00'",1.45, 0.30, 1.43, 1.00, 230.00, 256.00]);  data.addRow(["'03'", "'2014-03-28 15:55:00'",0.50, 0.19, 0.63, 0.62, 189.00, 219.00]);  data.addRow(["'03'", "'2014-03-28 16:25:00'",0.24, 0.27, 0.47, 0.58, 205.00, 236.00]);  data.addRow(["'03'", "'2014-03-28 16:55:00'",1.07, 0.16, 1.04, 0.87, 226.00, 266.00]);  data.addRow(["'03'", "'2014-03-28 17:25:00'",1.58, 0.31, 1.31, 1.36, 131.00, 148.00]);  data.addRow(["'03'", "'2014-03-28 17:55:00'",0.28, 0.10, 0.31, 0.35, 95.00, 111.00]);  data.addRow(["'03'", "'2014-03-28 18:25:00'",0.13, 0.06, 0.20, 0.25, 92.00, 116.00]);  data.addRow(["'03'", "'2014-03-28 18:55:00'",0.50, 0.05, 0.47, 0.42, 118.00, 146.00]);  data.addRow(["'03'", "'2014-03-28 19:25:00'",0.22, 0.48, 0.33, 0.56, 68.00, 81.00]);  data.addRow(["'03'", "'2014-03-28 19:55:00'",0.04, 0.69, 0.21, 0.57, 45.00, 60.00]);  data.addRow(["'03'", "'2014-03-28 20:25:00'",0.13, 0.03, 0.13, 0.14, 40.00, 49.00]);  data.addRow(["'03'", "'2014-03-28 20:55:00'",0.05, 0.01, 0.05, 0.06, 18.00, 20.00]);  data.addRow(["'03'", "'2014-03-28 21:25:00'",0.05, 0.01, 0.06, 0.07, 26.00, 26.00]);  data.addRow(["'03'", "'2014-03-28 21:55:00'",0.06, 0.02, 0.10, 0.12, 58.00, 73.00]);  data.addRow(["'03'", "'2014-03-28 22:25:00'",0.11, 0.02, 0.13, 0.14, 55.00, 74.00]);  data.addRow(["'03'", "'2014-03-28 22:55:00'",0.02, 0.01, 0.06, 0.07, 42.00, 50.00]);  data.addRow(["'03'", "'2014-03-28 23:25:00'",0.02, 0.02, 0.07, 0.08, 48.00, 62.00]);  data.addRow(["'03'", "'2014-03-28 23:55:00'",0.05, 0.02, 0.09, 0.11, 50.00, 69.00]);  data.addRow(["'03'", "'2014-03-29 00:25:00'",0.01, 0.02, 0.06, 0.08, 43.00, 60.00]);  data.addRow(["'03'", "'2014-03-29 00:55:00'",0.01, 0.01, 0.04, 0.06, 30.00, 39.00]);  data.addRow(["'03'", "'2014-03-29 01:25:00'",0.10, 0.06, 0.13, 0.15, 38.00, 43.00]);  data.addRow(["'03'", "'2014-03-29 01:55:00'",0.03, 0.13, 0.10, 0.15, 31.00, 39.00]);  data.addRow(["'03'", "'2014-03-29 02:25:00'",0.01, 0.01, 0.04, 0.05, 27.00, 34.00]);  data.addRow(["'03'", "'2014-03-29 02:55:00'",0.00, 0.01, 0.02, 0.03, 19.00, 22.00]);  data.addRow(["'03'", "'2014-03-29 03:25:00'",0.01, 0.01, 0.03, 0.03, 20.00, 22.00]);  data.addRow(["'03'", "'2014-03-29 03:55:00'",0.00, 0.00, 0.00, 0.00, 3.00, 2.00]);  data.addRow(["'03'", "'2014-03-29 04:25:00'",0.00, 0.04, 0.02, 0.03, 2.00, 1.00]);  data.addRow(["'03'", "'2014-03-29 04:55:00'",0.01, 0.00, 0.01, 0.00, 3.00, 1.00]);  data.addRow(["'03'", "'2014-03-29 05:25:00'",0.03, 0.00, 0.03, 0.02, 3.00, 3.00]);  data.addRow(["'03'", "'2014-03-29 05:55:00'",0.01, 0.00, 0.01, 0.00, 3.00, 2.00]);  data.addRow(["'03'", "'2014-03-29 06:25:00'",0.01, 0.00, 0.01, 0.00, 2.00, 1.00]);  data.addRow(["'03'", "'2014-03-29 06:55:00'",0.01, 0.00, 0.01, 0.01, 2.00, 2.00]);  data.addRow(["'03'", "'2014-03-29 07:25:00'",0.01, 0.00, 0.01, 0.01, 4.00, 3.00]);  data.addRow(["'03'", "'2014-03-29 07:55:00'",0.01, 0.02, 0.02, 0.03, 6.00, 5.00]);  data.addRow(["'03'", "'2014-03-29 08:25:00'",0.01, 0.01, 0.03, 0.02, 8.00, 8.00]);  data.addRow(["'03'", "'2014-03-29 08:55:00'",0.03, 0.00, 0.03, 0.02, 5.00, 7.00]);  data.addRow(["'03'", "'2014-03-29 09:25:00'",0.02, 0.00, 0.02, 0.01, 6.00, 4.00]);  data.addRow(["'03'", "'2014-03-29 09:55:00'",0.04, 0.00, 0.03, 0.02, 6.00, 5.00]);  data.addRow(["'03'", "'2014-03-29 10:25:00'",0.02, 0.00, 0.02, 0.01, 9.00, 7.00]);  data.addRow(["'03'", "'2014-03-29 10:55:00'",0.12, 0.02, 0.17, 0.15, 36.00, 40.00]);  data.addRow(["'03'", "'2014-03-29 11:25:00'",0.11, 0.01, 0.12, 0.12, 35.00, 38.00]);  data.addRow(["'03'", "'2014-03-29 11:55:00'",0.33, 0.04, 0.34, 0.33, 80.00, 86.00]);  data.addRow(["'03'", "'2014-03-29 12:25:00'",0.03, 0.01, 0.06, 0.07, 41.00, 47.00]);  data.addRow(["'03'", "'2014-03-29 12:55:00'",0.06, 0.03, 0.08, 0.10, 38.00, 44.00]);  data.addRow(["'03'", "'2014-03-29 13:25:00'",0.08, 0.04, 0.12, 0.13, 54.00, 60.00]);  data.addRow(["'03'", "'2014-03-29 13:55:00'",0.60, 0.56, 0.67, 0.74, 47.00, 54.00]);  data.addRow(["'03'", "'2014-03-29 14:25:00'",3.69, 0.67, 2.93, 2.96, 66.00, 77.00]);  data.addRow(["'03'", "'2014-03-29 14:55:00'",0.21, 0.04, 0.25, 0.23, 84.00, 97.00]);  data.addRow(["'03'", "'2014-03-29 15:25:00'",0.70, 0.14, 0.60, 0.58, 38.00, 42.00]);  data.addRow(["'03'", "'2014-03-29 15:55:00'",0.14, 0.40, 0.31, 0.40, 25.00, 26.00]);  data.addRow(["'03'", "'2014-03-29 16:25:00'",0.14, 0.07, 0.17, 0.21, 67.00, 74.00]);  data.addRow(["'03'", "'2014-03-29 16:55:00'",0.19, 0.08, 0.23, 0.26, 90.00, 105.00]);  data.addRow(["'03'", "'2014-03-29 17:25:00'",0.09, 0.05, 0.13, 0.16, 69.00, 84.00]);  data.addRow(["'03'", "'2014-03-29 17:55:00'",0.18, 0.40, 0.33, 0.47, 51.00, 59.00]);  data.addRow(["'03'", "'2014-03-29 18:25:00'",0.50, 0.16, 0.48, 0.43, 75.00, 87.00]);  data.addRow(["'03'", "'2014-03-29 18:55:00'",1.15, 0.07, 0.94, 0.89, 178.00, 201.00]);  data.addRow(["'03'", "'2014-03-29 19:25:00'",0.05, 0.06, 0.12, 0.16, 63.00, 78.00]);  data.addRow(["'03'", "'2014-03-29 19:55:00'",0.07, 0.01, 0.08, 0.09, 37.00, 42.00]);  data.addRow(["'03'", "'2014-03-29 20:25:00'",0.17, 0.02, 0.17, 0.17, 46.00, 55.00]);  data.addRow(["'03'", "'2014-03-29 20:55:00'",1.36, 0.61, 1.22, 1.39, 81.00, 93.00]);  data.addRow(["'03'", "'2014-03-29 21:25:00'",1.17, 0.36, 1.00, 1.08, 46.00, 57.00]);  data.addRow(["'03'", "'2014-03-29 21:55:00'",0.14, 0.02, 0.16, 0.17, 48.00, 60.00]);  data.addRow(["'03'", "'2014-03-29 22:25:00'",0.13, 0.03, 0.12, 0.11, 24.00, 32.00]);  data.addRow(["'03'", "'2014-03-29 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 13:25:00'",3.60, 1.68, 3.38, 3.61, 268.00, 293.00]);  data.addRow(["'04'", "'2014-04-01 13:55:00'",1.33, 2.34, 2.30, 2.89, 445.00, 506.00]);  data.addRow(["'04'", "'2014-04-01 14:25:00'",2.11, 5.01, 3.59, 5.58, 362.00, 396.00]);  data.addRow(["'04'", "'2014-04-01 14:55:00'",1.60, 0.75, 1.82, 1.88, 426.00, 486.00]);  data.addRow(["'04'", "'2014-04-01 15:25:00'",13.52, 11.62, 15.22, 20.09, 484.00, 527.00]);  data.addRow(["'04'", "'2014-04-01 15:55:00'",1.43, 3.02, 2.62, 3.32, 386.00, 441.00]);  data.addRow(["'04'", "'2014-04-01 16:25:00'",17.68, 22.24, 20.83, 31.33, 360.00, 404.00]);  data.addRow(["'04'", "'2014-04-01 16:55:00'",9.64, 1.22, 7.77, 5.29, 337.00, 383.00]);  data.addRow(["'04'", "'2014-04-01 17:25:00'",2.25, 3.54, 3.27, 4.07, 248.00, 276.00]);  data.addRow(["'04'", "'2014-04-01 17:55:00'",24.77, 2.62, 19.28, 11.31, 245.00, 274.00]);  data.addRow(["'04'", "'2014-04-01 18:25:00'",28.07, 0.82, 20.64, 11.50, 243.00, 282.00]);  data.addRow(["'04'", "'2014-04-01 18:55:00'",21.37, 2.32, 16.38, 10.39, 206.00, 231.00]);  data.addRow(["'04'", "'2014-04-01 19:25:00'",18.54, 0.58, 13.66, 7.59, 217.00, 247.00]);  data.addRow(["'04'", "'2014-04-01 19:55:00'",21.42, 0.84, 15.91, 8.92, 225.00, 239.00]);  data.addRow(["'04'", "'2014-04-01 20:25:00'",25.46, 2.24, 19.33, 12.00, 275.00, 310.00]);  data.addRow(["'04'", "'2014-04-01 20:55:00'",28.58, 1.29, 20.99, 12.06, 124.00, 140.00]);  data.addRow(["'04'", "'2014-04-01 21:25:00'",22.75, 0.43, 16.47, 9.05, 90.00, 106.00]);  data.addRow(["'04'", "'2014-04-01 21:55:00'",28.97, 0.51, 20.97, 10.99, 72.00, 85.00]);  data.addRow(["'04'", "'2014-04-01 22:25:00'",25.67, 0.65, 18.79, 10.68, 201.00, 226.00]);  data.addRow(["'04'", "'2014-04-01 22:55:00'",20.16, 0.51, 14.88, 8.18, 168.00, 194.00]);  data.addRow(["'04'", "'2014-04-01 23:25:00'",0.13, 0.11, 0.19, 0.21, 60.00, 68.00]);  data.addRow(["'04'", "'2014-04-01 23:55:00'",0.15, 0.05, 0.19, 0.21, 77.00, 88.00]);  data.addRow(["'04'", "'2014-04-02 00:25:00'",0.49, 0.15, 0.44, 0.38, 61.00, 73.00]);  data.addRow(["'04'", "'2014-04-02 00:55:00'",1.23, 1.51, 1.42, 1.66, 44.00, 54.00]);  data.addRow(["'04'", "'2014-04-02 01:25:00'",0.04, 0.42, 0.24, 0.37, 27.00, 32.00]);  data.addRow(["'04'", "'2014-04-02 01:55:00'",0.04, 0.01, 0.06, 0.07, 30.00, 31.00]);  data.addRow(["'04'", "'2014-04-02 02:25:00'",0.12, 0.02, 0.13, 0.15, 52.00, 64.00]);  data.addRow(["'04'", "'2014-04-02 02:55:00'",0.00, 0.04, 0.04, 0.05, 17.00, 26.00]);  data.addRow(["'04'", "'2014-04-02 03:25:00'",0.09, 0.02, 0.11, 0.09, 35.00, 44.00]);  data.addRow(["'04'", "'2014-04-02 03:55:00'",0.03, 0.01, 0.05, 0.06, 25.00, 31.00]);  data.addRow(["'04'", "'2014-04-02 04:25:00'",0.02, 0.04, 0.05, 0.08, 25.00, 31.00]);  data.addRow(["'04'", "'2014-04-02 04:55:00'",0.01, 0.02, 0.03, 0.04, 22.00, 29.00]);  data.addRow(["'04'", "'2014-04-02 05:25:00'",0.04, 0.00, 0.04, 0.02, 8.00, 7.00]);  data.addRow(["'04'", "'2014-04-02 05:55:00'",0.01, 0.00, 0.01, 0.01, 7.00, 4.00]);  data.addRow(["'04'", "'2014-04-02 06:25:00'",0.42, 0.09, 0.33, 0.35, 16.00, 16.00]);  data.addRow(["'04'", "'2014-04-02 06:55:00'",0.09, 0.03, 0.11, 0.12, 33.00, 43.00]);  data.addRow(["'04'", "'2014-04-02 07:25:00'",0.07, 0.01, 0.08, 0.08, 31.00, 42.00]);  data.addRow(["'04'", "'2014-04-02 07:55:00'",0.06, 0.02, 0.09, 0.11, 46.00, 56.00]);  data.addRow(["'04'", "'2014-04-02 08:25:00'",0.40, 0.08, 0.44, 0.42, 140.00, 176.00]);  data.addRow(["'04'", "'2014-04-02 08:55:00'",1.04, 0.13, 0.93, 0.74, 165.00, 174.00]);  data.addRow(["'04'", "'2014-04-02 09:25:00'",0.42, 0.50, 0.63, 0.71, 153.00, 161.00]);  data.addRow(["'04'", "'2014-04-02 09:55:00'",0.47, 0.77, 0.80, 0.98, 148.00, 172.00]);  data.addRow(["'04'", "'2014-04-02 10:25:00'",4.96, 0.31, 3.86, 2.42, 202.00, 225.00]);  data.addRow(["'04'", "'2014-04-02 10:55:00'",0.83, 1.13, 1.23, 1.67, 214.00, 242.00]);  data.addRow(["'04'", "'2014-04-02 11:25:00'",2.34, 0.38, 2.08, 1.76, 269.00, 281.00]);  data.addRow(["'04'", "'2014-04-02 11:55:00'",2.67, 0.82, 2.46, 1.90, 187.00, 218.00]);  data.addRow(["'04'", "'2014-04-02 12:25:00'",0.95, 1.57, 1.44, 1.99, 114.00, 131.00]);  data.addRow(["'04'", "'2014-04-02 12:55:00'",0.77, 2.12, 1.90, 2.69, 131.00, 142.00]);  data.addRow(["'04'", "'2014-04-02 13:25:00'",0.60, 1.26, 1.14, 1.34, 173.00, 189.00]);  data.addRow(["'04'", "'2014-04-02 13:55:00'",0.98, 0.22, 1.01, 0.83, 218.00, 230.00]);  data.addRow(["'04'", "'2014-04-02 14:25:00'",1.46, 0.48, 1.38, 1.23, 150.00, 161.00]); 
	    var graphtitle="FIU to PSM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    