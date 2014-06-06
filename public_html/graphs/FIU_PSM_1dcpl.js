
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input bytes ');
        data.addColumn('number', 'Flows Output bytes '); data.addRow(["'15:35:00'","'2014-04-28 15:35:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'", 9.29, 0.35, 6.66, 4.23, 251.00, 288.00]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'", 0.64, 0.46, 0.85, 0.98, 223.00, 281.00]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'", 2.26, 0.43, 2.29, 1.80, 390.00, 453.00]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'", 1.17, 1.05, 1.56, 1.58, 271.00, 301.00]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'", 1.01, 1.85, 1.83, 2.43, 233.00, 265.00]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'", 0.62, 0.17, 0.85, 0.82, 285.00, 307.00]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'", 5.94, 0.31, 4.44, 4.28, 246.00, 282.00]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'", 5.18, 0.27, 3.84, 2.99, 244.00, 261.00]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'", 0.78, 0.46, 0.90, 1.02, 185.00, 242.00]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'", 4.47, 1.25, 3.80, 2.98, 210.00, 262.00]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'", 0.19, 0.07, 0.28, 0.33, 128.00, 143.00]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'", 5.18, 1.03, 4.33, 2.99, 122.00, 157.00]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'", 0.55, 0.15, 0.55, 0.57, 147.00, 171.00]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'", 0.95, 1.41, 1.49, 1.64, 135.00, 155.00]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'", 1.38, 0.14, 1.18, 1.08, 145.00, 150.00]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'", 2.41, 0.58, 2.12, 1.55, 144.00, 150.00]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'", 1.23, 3.57, 3.02, 3.78, 218.00, 240.00]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'", 0.27, 1.72, 1.29, 1.52, 132.00, 161.00]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'", 2.09, 2.80, 2.74, 3.50, 132.00, 136.00]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'", 6.90, 0.75, 5.24, 3.66, 213.00, 233.00]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'", 0.28, 0.18, 0.39, 0.34, 125.00, 121.00]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'", 0.68, 0.06, 0.75, 0.61, 201.00, 209.00]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'", 0.71, 0.12, 0.70, 0.56, 170.00, 187.00]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'", 5.42, 0.20, 4.05, 2.69, 233.00, 220.00]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'", 0.20, 0.49, 0.53, 0.68, 121.00, 146.00]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'", 0.20, 0.15, 0.32, 0.41, 140.00, 155.00]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'", 0.27, 0.56, 0.52, 0.69, 107.00, 130.00]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'", 1.11, 0.17, 0.91, 0.84, 76.00, 93.00]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'", 0.39, 0.28, 0.51, 0.54, 95.00, 103.00]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'", 0.95, 1.59, 1.51, 1.68, 149.00, 156.00]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'", 0.59, 0.50, 0.71, 0.72, 91.00, 100.00]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'", 1.70, 0.08, 1.26, 1.31, 79.00, 94.00]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'", 0.51, 0.09, 0.55, 0.54, 178.00, 198.00]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'", 0.67, 0.14, 0.59, 0.60, 95.00, 111.00]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'", 0.14, 0.55, 0.44, 0.58, 97.00, 105.00]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'", 2.28, 1.92, 2.49, 2.25, 74.00, 94.00]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'", 0.09, 2.07, 1.05, 1.60, 80.00, 95.00]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'", 0.25, 2.16, 1.20, 1.87, 132.00, 152.00]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'", 1.34, 1.87, 1.90, 1.99, 108.00, 117.00]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'", 0.13, 2.24, 1.05, 1.67, 72.00, 79.00]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'", 0.17, 0.28, 0.34, 0.36, 101.00, 101.00]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'", 0.01, 0.02, 0.05, 0.06, 37.00, 51.00]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'", 0.01, 0.01, 0.05, 0.05, 37.00, 32.00]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'", 0.08, 0.01, 0.08, 0.07, 22.00, 28.00]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'", 0.41, 0.13, 0.40, 0.45, 46.00, 45.00]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'", 0.00, 0.00, 0.01, 0.01, 8.00, 11.00]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'", 0.29, 0.01, 0.24, 0.11, 32.00, 32.00]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'", 0.29, 0.02, 0.27, 0.13, 60.00, 47.00]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'", 0.03, 0.02, 0.06, 0.05, 39.00, 33.00]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'", 0.11, 0.02, 0.12, 0.15, 52.00, 65.00]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'", 0.21, 0.02, 0.20, 0.20, 62.00, 71.00]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'", 0.02, 0.02, 0.10, 0.14, 83.00, 105.00]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'", 0.53, 0.19, 0.49, 0.52, 55.00, 55.00]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'", 0.02, 0.13, 0.10, 0.13, 30.00, 38.00]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'", 0.03, 0.52, 0.26, 0.43, 42.00, 62.00]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'", 0.03, 0.36, 0.19, 0.31, 39.00, 52.00]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'", 0.24, 0.03, 0.23, 0.22, 52.00, 71.00]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'", 1.83, 0.09, 1.55, 1.11, 49.00, 65.00]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'", 0.98, 0.05, 0.86, 0.62, 70.00, 75.00]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'", 0.55, 5.05, 2.31, 3.92, 44.00, 60.00]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'", 0.51, 0.74, 1.13, 0.89, 71.00, 97.00]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'", 0.19, 3.60, 3.20, 2.85, 72.00, 81.00]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'", 0.19, 0.02, 0.18, 0.19, 54.00, 54.00]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'", 0.17, 3.25, 2.54, 4.58, 59.00, 68.00]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'", 0.24, 0.09, 0.90, 0.27, 66.00, 75.00]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'", 0.90, 11.20, 6.13, 9.25, 69.00, 73.00]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'", 0.19, 1.01, 0.74, 1.11, 86.00, 97.00]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'", 0.34, 9.89, 3.97, 9.05, 51.00, 63.00]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'", 0.15, 0.34, 0.32, 0.48, 115.00, 152.00]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'", 0.17, 0.27, 0.65, 0.41, 104.00, 131.00]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'", 2.65, 0.07, 1.84, 1.11, 45.00, 49.00]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'", 0.34, 12.04, 4.65, 8.43, 111.00, 124.00]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'", 0.13, 0.07, 0.19, 0.22, 87.00, 97.00]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'", 0.10, 0.14, 0.24, 0.26, 100.00, 108.00]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'", 0.08, 1.04, 1.05, 2.10, 58.00, 67.00]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'", 0.20, 0.72, 0.57, 0.76, 156.00, 179.00]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'", 0.19, 3.27, 1.69, 2.47, 59.00, 81.00]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'", 0.39, 0.03, 0.32, 0.31, 54.00, 56.00]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'", 0.01, 0.02, 0.06, 0.06, 41.00, 37.00]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'", 0.12, 0.35, 0.28, 0.39, 81.00, 93.00]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'", 0.07, 1.32, 0.65, 1.05, 91.00, 115.00]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'", 0.12, 0.03, 0.13, 0.16, 45.00, 60.00]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'", 0.08, 0.02, 0.11, 0.13, 56.00, 69.00]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'", 0.15, 0.27, 0.25, 0.36, 60.00, 78.00]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'", 0.10, 0.07, 0.17, 0.20, 88.00, 103.00]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'", 0.16, 0.02, 0.19, 0.18, 75.00, 77.00]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'", 0.22, 0.03, 0.22, 0.24, 62.00, 75.00]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'", 0.42, 0.08, 0.44, 0.47, 115.00, 118.00]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'", 0.03, 0.02, 0.06, 0.08, 41.00, 54.00]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'", 0.13, 0.08, 0.17, 0.20, 52.00, 55.00]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'", 0.01, 0.03, 0.05, 0.06, 37.00, 42.00]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'", 0.03, 0.01, 0.05, 0.07, 37.00, 47.00]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'", 0.01, 0.02, 0.06, 0.08, 48.00, 64.00]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'", 0.02, 0.01, 0.06, 0.07, 47.00, 54.00]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'", 0.03, 0.01, 0.07, 0.07, 41.00, 44.00]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'", 0.01, 0.02, 0.05, 0.06, 38.00, 43.00]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'", 0.34, 0.05, 0.32, 0.34, 74.00, 78.00]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'", 1.99, 0.25, 1.60, 1.67, 89.00, 104.00]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'", 0.70, 0.06, 0.54, 0.57, 57.00, 72.00]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'", 0.02, 0.04, 0.08, 0.10, 59.00, 62.00]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'", 0.23, 0.07, 0.24, 0.28, 73.00, 89.00]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'", 0.30, 0.04, 0.27, 0.30, 68.00, 81.00]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'", 0.05, 0.04, 0.12, 0.18, 81.00, 114.00]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'", 0.05, 0.02, 0.08, 0.11, 51.00, 69.00]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'", 0.03, 0.61, 0.33, 0.49, 49.00, 52.00]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'", 0.03, 0.40, 0.29, 0.36, 60.00, 68.00]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'", 0.66, 0.07, 0.58, 0.61, 119.00, 134.00]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'", 0.71, 0.04, 0.57, 0.59, 76.00, 90.00]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'", 0.81, 0.35, 0.87, 0.96, 69.00, 71.00]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'", 0.87, 0.07, 0.68, 0.70, 96.00, 101.00]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'", 1.01, 0.11, 0.81, 0.84, 76.00, 89.00]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'", 0.85, 0.08, 0.66, 0.70, 59.00, 68.00]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'", 0.63, 0.06, 0.50, 0.51, 67.00, 67.00]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'", 0.42, 0.08, 0.40, 0.44, 91.00, 114.00]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'", 0.03, 0.05, 0.11, 0.13, 61.00, 80.00]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'", 0.05, 0.04, 0.09, 0.12, 51.00, 59.00]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'", 0.01, 0.01, 0.05, 0.06, 29.00, 42.00]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'", 0.01, 0.01, 0.03, 0.04, 28.00, 24.00]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'", 0.02, 0.01, 0.04, 0.05, 27.00, 33.00]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'", 0.21, 0.01, 0.18, 0.19, 37.00, 38.00]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'", 0.00, 0.01, 0.02, 0.04, 20.00, 31.00]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'", 0.02, 0.02, 0.05, 0.07, 28.00, 37.00]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'", 0.01, 0.01, 0.03, 0.04, 23.00, 23.00]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'", 0.00, 0.01, 0.02, 0.04, 18.00, 25.00]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'", 0.02, 0.01, 0.04, 0.04, 22.00, 30.00]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'", 0.02, 0.01, 0.04, 0.05, 20.00, 30.00]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'", 0.01, 0.01, 0.04, 0.06, 24.00, 48.00]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'", 0.46, 0.03, 0.37, 0.38, 55.00, 71.00]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'", 0.00, 0.01, 0.02, 0.05, 23.00, 40.00]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'", 0.01, 0.01, 0.03, 0.04, 24.00, 33.00]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'", 0.19, 0.02, 0.17, 0.19, 39.00, 51.00]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'", 0.01, 0.16, 0.12, 0.17, 51.00, 53.00]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'", 0.00, 0.01, 0.03, 0.04, 32.00, 27.00]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'", 0.02, 0.01, 0.04, 0.05, 21.00, 35.00]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'", 0.01, 0.01, 0.03, 0.04, 21.00, 30.00]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'", 1.02, 0.10, 0.77, 0.83, 51.00, 72.00]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'", 0.33, 0.03, 0.27, 0.27, 40.00, 46.00]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'", 0.07, 0.00, 0.05, 0.05, 7.00, 4.00]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'", 0.01, 0.00, 0.01, 0.00, 4.00, 2.00]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'", 0.03, 0.00, 0.03, 0.02, 10.00, 10.00]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'", 0.00, 0.00, 0.00, 0.01, 5.00, 5.00]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'", 0.02, 0.00, 0.02, 0.01, 5.00, 4.00]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'", 0.01, 0.00, 0.01, 0.00, 3.00, 1.00]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'", 0.03, 0.00, 0.04, 0.03, 17.00, 13.00]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'", 0.02, 0.00, 0.02, 0.02, 10.00, 8.00]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'", 0.01, 0.01, 0.02, 0.01, 4.00, 3.00]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'", 0.00, 0.00, 0.00, 0.01, 3.00, 6.00]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'", 0.00, 0.00, 0.00, 0.00, 1.00, 3.00]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'", 0.00, 0.00, 0.00, 0.00, 2.00, 1.00]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'", 0.00, 0.00, 0.00, 0.00, 3.00, 1.00]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'", 0.00, 0.02, 0.01, 0.02, 7.00, 5.00]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'", 0.01, 0.00, 0.01, 0.01, 2.00, 5.00]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 3.00]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'", 0.00, 0.00, 0.00, 0.00, 1.00, 3.00]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'", 0.00, 0.00, 0.01, 0.00, 4.00, 5.00]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'", 0.02, 0.00, 0.02, 0.01, 13.00, 10.00]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'", 0.00, 0.00, 0.00, 0.00, 1.00, 1.00]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'", 0.00, 0.00, 0.00, 0.00, 3.00, 3.00]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'", 0.02, 0.00, 0.01, 0.01, 3.00, 3.00]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'", 0.00, 0.00, 0.01, 0.00, 6.00, 3.00]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'", 0.00, 0.00, 0.01, 0.00, 3.00, 2.00]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'", 0.02, 0.00, 0.02, 0.01, 6.00, 4.00]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'", 0.01, 0.00, 0.02, 0.01, 8.00, 8.00]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'", 0.00, 0.00, 0.00, 0.00, 3.00, 3.00]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'", 0.02, 0.00, 0.02, 0.01, 7.00, 7.00]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'", 0.00, 0.00, 0.00, 0.00, 1.00, 1.00]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 1.00]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'", 0.02, 0.00, 0.02, 0.02, 9.00, 7.00]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'", 0.00, 0.00, 0.00, 0.00, 3.00, 4.00]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'", 0.00, 0.00, 0.00, 0.00, 1.00, 1.00]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'", 0.02, 0.00, 0.02, 0.02, 10.00, 12.00]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'", 0.02, 0.97, 0.26, 0.94, 8.00, 11.00]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'", 0.00, 0.00, 0.00, 0.00, 2.00, 3.00]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'", 0.02, 0.00, 0.02, 0.02, 10.00, 12.00]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'", 0.00, 0.00, 0.01, 0.02, 8.00, 15.00]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'", 0.00, 0.00, 0.00, 0.01, 4.00, 9.00]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'", 0.02, 0.00, 0.02, 0.01, 6.00, 3.00]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'", 0.00, 0.00, 0.01, 0.02, 12.00, 13.00]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'", 0.00, 0.00, 0.00, 0.00, 3.00, 4.00]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'", 0.02, 0.00, 0.02, 0.02, 9.00, 16.00]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'", 0.01, 0.00, 0.02, 0.02, 14.00, 14.00]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'", 0.00, 0.00, 0.00, 0.00, 5.00, 5.00]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'", 0.02, 0.00, 0.02, 0.01, 9.00, 8.00]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'", 0.04, 0.19, 0.13, 0.17, 25.00, 31.00]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'", 0.01, 0.01, 0.03, 0.03, 21.00, 21.00]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'", 0.22, 0.03, 0.23, 0.18, 71.00, 90.00]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'", 0.10, 0.01, 0.10, 0.09, 45.00, 45.00]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'", 1.45, 0.05, 1.13, 0.65, 90.00, 114.00]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'", 0.86, 0.05, 0.70, 0.44, 85.00, 120.00]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'", 0.41, 0.04, 0.39, 0.27, 109.00, 117.00]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'", 0.17, 0.05, 0.23, 0.20, 91.00, 100.00]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'", 0.11, 0.02, 0.13, 0.12, 49.00, 66.00]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'", 1.60, 0.30, 1.41, 1.08, 145.00, 149.00]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'", 0.12, 0.12, 0.17, 0.23, 63.00, 78.00]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'", 0.11, 0.03, 0.17, 0.15, 76.00, 87.00]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'", 0.45, 0.04, 0.43, 0.31, 93.00, 106.00]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'", 0.08, 0.04, 0.14, 0.18, 81.00, 106.00]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'", 0.11, 0.21, 0.22, 0.29, 74.00, 81.00]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'", 0.89, 0.05, 0.72, 0.47, 96.00, 122.00]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'", 0.51, 0.05, 0.44, 0.41, 64.00, 73.00]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'", 0.49, 0.75, 0.75, 0.87, 124.00, 125.00]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'", 3.52, 0.15, 2.65, 2.67, 178.00, 215.00]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'", 0.20, 0.08, 0.27, 0.31, 126.00, 146.00]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'", 0.31, 0.05, 0.37, 0.31, 143.00, 155.00]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'", 10.85, 0.49, 7.99, 4.53, 113.00, 120.00]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'", 0.33, 0.14, 0.41, 0.40, 137.00, 152.00]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'", 0.23, 0.11, 0.32, 0.33, 112.00, 128.00]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'", 0.43, 0.09, 0.46, 0.44, 129.00, 148.00]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'", 0.09, 0.07, 0.21, 0.21, 117.00, 124.00]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'", 2.57, 0.28, 2.07, 1.73, 169.00, 200.00]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'", 0.20, 0.10, 0.28, 0.30, 105.00, 116.00]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'", 0.48, 0.15, 0.57, 0.49, 171.00, 180.00]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'", 0.60, 0.15, 0.68, 0.72, 239.00, 292.00]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'", 2.18, 2.00, 2.54, 2.65, 247.00, 286.00]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'", 1.07, 2.07, 1.88, 2.27, 214.00, 232.00]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'", 0.52, 2.02, 1.41, 1.86, 187.00, 203.00]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'", 0.43, 2.12, 1.37, 1.89, 164.00, 207.00]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'", 0.41, 2.64, 1.34, 3.14, 95.00, 136.00]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'", 1.76, 1.79, 2.99, 1.89, 241.00, 274.00]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'", 4.23, 2.26, 4.29, 3.94, 176.00, 217.00]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'", 1.37, 4.21, 2.69, 4.10, 256.00, 282.00]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'", 2.59, 1.81, 2.60, 1.98, 208.00, 232.00]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'", 9.96, 0.46, 7.12, 6.64, 236.00, 240.00]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'", 1.06, 0.25, 1.24, 1.01, 371.00, 378.00]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'", 0.57, 0.66, 0.83, 1.96, 292.00, 342.00]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'", 1.74, 0.83, 2.77, 1.46, 187.00, 217.00]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'", 0.63, 0.61, 1.17, 0.82, 126.00, 118.00]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'", 0.17, 0.20, 0.40, 0.48, 172.00, 175.00]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'", 0.50, 0.07, 0.60, 0.51, 143.00, 168.00]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'", 1.46, 0.41, 1.24, 1.38, 100.00, 110.00]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'", 0.47, 3.98, 0.80, 3.32, 140.00, 166.00]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'", 0.64, 0.13, 0.74, 0.70, 144.00, 161.00]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'", 0.18, 0.20, 0.33, 0.91, 144.00, 165.00]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'", 1.06, 2.03, 2.27, 2.37, 207.00, 221.00]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'", 0.78, 1.01, 1.19, 1.38, 210.00, 219.00]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'", 1.78, 0.20, 1.65, 1.63, 246.00, 283.00]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'", 2.27, 10.66, 6.34, 9.76, 261.00, 260.00]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'", 1.04, 8.08, 4.40, 6.93, 219.00, 244.00]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'", 1.70, 4.29, 2.33, 7.13, 215.00, 249.00]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'", 0.53, 1.92, 4.96, 2.16, 155.00, 162.00]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'", 0.30, 0.79, 0.83, 1.09, 208.00, 243.00]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'", 0.39, 0.30, 0.66, 0.61, 219.00, 237.00]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'", 1.21, 1.88, 1.59, 2.92, 300.00, 311.00]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'", 1.87, 1.32, 2.82, 2.18, 278.00, 310.00]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'", 0.35, 0.25, 0.50, 0.64, 142.00, 175.00]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'", 0.38, 0.06, 0.53, 0.46, 151.00, 193.00]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'", 0.32, 0.08, 0.46, 0.42, 150.00, 179.00]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'", 0.88, 0.40, 0.89, 0.91, 146.00, 162.00]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'", 0.19, 1.31, 0.78, 1.15, 91.00, 116.00]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'", 0.27, 0.07, 0.45, 0.40, 89.00, 87.00]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'", 0.42, 0.22, 0.54, 0.55, 143.00, 156.00]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'", 0.08, 0.07, 0.17, 0.33, 97.00, 133.00]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'", 1.74, 1.38, 2.17, 2.12, 154.00, 162.00]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'", 0.62, 0.66, 0.82, 1.25, 190.00, 224.00]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'", 4.03, 0.18, 2.97, 1.98, 151.00, 165.00]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'", 0.21, 1.79, 0.82, 1.73, 173.00, 189.00]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'", 0.58, 0.85, 1.16, 1.37, 182.00, 199.00]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'", 0.37, 0.15, 0.53, 0.50, 194.00, 214.00]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'", 0.69, 0.84, 0.70, 2.44, 169.00, 193.00]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'", 2.32, 0.81, 3.34, 1.72, 215.00, 257.00]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'", 1.41, 0.52, 1.39, 1.52, 316.00, 357.00]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'", 0.66, 0.20, 0.74, 0.76, 240.00, 275.00]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'", 0.35, 0.38, 0.78, 0.86, 281.00, 316.00]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'", 0.34, 0.10, 0.45, 0.56, 175.00, 212.00]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'", 0.47, 0.20, 0.61, 0.69, 236.00, 245.00]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'", 0.94, 0.50, 1.21, 1.14, 343.00, 361.00]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'", 1.31, 0.29, 1.59, 1.32, 402.00, 438.00]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'", 0.72, 0.29, 1.01, 1.01, 361.00, 420.00]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'", 0.87, 0.66, 1.07, 1.12, 195.00, 214.00]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'", 0.69, 1.50, 1.44, 1.65, 216.00, 254.00]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'", 0.29, 0.67, 0.62, 0.82, 169.00, 178.00]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'", 0.58, 0.09, 0.95, 0.50, 195.00, 233.00]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'", 0.70, 0.56, 0.88, 2.25, 280.00, 329.00]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'", 0.46, 0.14, 0.62, 0.71, 258.00, 302.00]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'", 1.02, 0.61, 1.39, 2.02, 361.00, 411.00]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'", 1.38, 0.38, 1.66, 1.60, 515.00, 551.00]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'", 0.87, 0.22, 1.01, 1.13, 329.00, 379.00]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'", 0.72, 0.49, 1.01, 2.35, 326.00, 380.00]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'", 1.44, 0.32, 1.71, 1.60, 331.00, 377.00]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'", 4.26, 0.48, 3.41, 2.62, 365.00, 402.00]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'", 7.26, 0.24, 5.48, 3.08, 243.00, 306.00]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'", 0.85, 0.31, 1.33, 1.00, 309.00, 354.00]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'", 0.89, 1.30, 1.25, 5.50, 265.00, 301.00]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'", 4.43, 0.50, 3.80, 2.31, 298.00, 334.00]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="FIU to PSM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    