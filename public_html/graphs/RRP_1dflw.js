
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",116.90, 113.39]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",113.50, 110.41]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",109.38, 107.21]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",108.81, 106.69]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",105.78, 102.70]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",102.39, 100.27]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",103.16, 100.69]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",97.57, 95.96]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",111.99, 108.93]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",106.05, 102.84]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",100.96, 97.84]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",99.63, 95.47]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",93.93, 90.58]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",93.24, 89.58]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",94.90, 90.37]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",99.26, 94.90]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",91.13, 89.24]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",86.33, 83.50]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",79.27, 79.59]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",76.18, 76.05]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",76.21, 75.30]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",75.37, 74.20]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",72.30, 71.42]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",71.84, 71.96]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",69.93, 72.24]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",65.76, 68.09]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",62.75, 65.67]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",68.27, 68.36]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",66.59, 66.52]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",62.47, 63.92]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",66.91, 67.28]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",68.00, 68.13]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",65.93, 66.86]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",65.16, 69.02]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",68.36, 68.15]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",69.33, 69.37]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",67.20, 68.13]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",67.21, 69.10]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",66.59, 66.72]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",68.12, 68.21]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",67.27, 67.69]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",67.42, 69.61]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",67.94, 68.59]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",67.67, 68.45]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",67.66, 67.54]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",65.34, 67.05]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",64.77, 68.21]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",65.04, 67.72]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",63.24, 65.75]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",63.52, 66.46]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",62.11, 64.33]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",62.88, 62.74]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",60.67, 61.12]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",60.89, 61.98]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",61.46, 60.83]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",62.93, 62.85]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",61.92, 62.04]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",61.00, 61.49]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",58.17, 60.54]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",58.77, 60.86]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",59.17, 60.03]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",62.54, 61.60]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",60.50, 60.92]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",63.83, 64.04]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",62.62, 62.83]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",62.83, 63.09]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",65.73, 64.94]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",62.91, 62.33]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",61.42, 60.87]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",62.82, 62.63]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",62.73, 62.48]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",62.19, 63.56]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",61.86, 62.44]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",59.58, 59.71]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",58.20, 58.94]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",56.03, 57.47]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",53.54, 55.34]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",54.38, 56.50]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",56.09, 57.44]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",58.28, 59.15]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",57.45, 59.92]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",56.15, 57.21]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",56.96, 59.66]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",59.30, 60.22]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",58.89, 58.66]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",56.99, 56.57]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",57.58, 56.71]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",56.88, 56.62]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",52.51, 53.31]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",54.52, 54.31]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",51.60, 53.58]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",52.95, 52.98]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",51.78, 53.41]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",51.17, 53.27]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",51.29, 55.27]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",50.52, 52.90]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",49.40, 52.39]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",49.91, 52.00]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",51.52, 55.97]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",49.18, 52.16]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",46.96, 53.28]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",45.33, 50.23]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",46.32, 50.29]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",46.50, 49.25]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",45.61, 48.47]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",44.36, 47.88]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",44.54, 48.10]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",43.74, 48.15]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",38.95, 42.94]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",41.39, 44.53]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",38.59, 42.24]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",37.32, 40.59]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",37.63, 40.52]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",37.15, 39.94]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",37.41, 40.43]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",36.57, 39.10]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",34.70, 37.93]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",34.31, 37.90]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",33.76, 38.21]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",31.12, 34.98]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",28.99, 35.40]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",27.83, 31.86]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",28.11, 32.12]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",27.79, 31.24]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",27.88, 31.38]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",27.19, 30.49]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",27.32, 30.12]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",25.88, 31.01]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",22.84, 23.40]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",20.13, 20.67]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",20.82, 21.31]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",20.89, 22.10]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",20.86, 22.86]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",21.79, 22.85]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",20.74, 21.27]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",18.65, 19.24]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",18.68, 19.21]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",18.88, 19.52]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",18.71, 21.45]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",18.92, 23.95]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",17.56, 21.53]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",17.76, 21.01]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",16.87, 19.49]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",16.83, 18.38]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",16.61, 17.76]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",15.47, 16.90]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",15.21, 16.57]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",15.28, 16.46]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",15.78, 16.41]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",15.57, 16.02]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",17.04, 17.03]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",15.24, 18.41]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",15.77, 16.44]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",15.37, 15.77]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",15.23, 17.05]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",14.49, 15.17]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",13.97, 14.62]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",13.42, 15.34]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",13.04, 13.62]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",13.38, 13.76]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",12.06, 12.62]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",11.60, 12.08]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",10.92, 11.84]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",12.16, 12.86]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",13.21, 13.56]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",12.74, 13.19]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",11.88, 12.67]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",12.22, 12.92]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",13.12, 13.94]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",14.14, 14.89]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",12.96, 13.96]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",13.83, 14.61]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",13.19, 13.96]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",14.19, 15.96]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",13.57, 14.04]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",15.19, 15.76]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",16.09, 16.68]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",15.00, 15.39]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",16.18, 17.04]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",16.08, 17.52]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",18.81, 22.47]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",22.11, 22.40]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",23.57, 24.06]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",23.47, 23.99]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",27.95, 28.54]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",28.52, 28.84]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",32.72, 32.72]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",34.40, 35.63]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",35.02, 35.15]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",38.33, 38.02]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",39.61, 39.22]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",41.66, 40.71]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",42.54, 42.58]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",45.71, 45.21]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",47.46, 46.30]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",47.10, 47.17]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",45.89, 45.37]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",47.19, 45.82]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",50.81, 49.96]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",51.93, 50.83]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",53.35, 53.42]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",54.30, 54.99]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",67.76, 67.70]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",77.70, 77.07]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",75.80, 76.58]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",79.98, 79.05]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",78.72, 77.91]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",82.69, 82.75]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",86.84, 87.42]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",84.13, 83.97]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",89.87, 89.56]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",92.44, 92.02]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",91.05, 91.56]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",97.27, 96.44]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",97.14, 96.34]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",99.67, 99.77]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",101.24, 101.61]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",100.59, 101.34]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",100.21, 99.19]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",96.82, 97.42]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",95.37, 94.33]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",96.73, 96.47]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",101.09, 101.80]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",110.41, 108.66]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",113.90, 112.13]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",117.65, 116.21]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",116.15, 115.63]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",114.07, 113.06]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",122.53, 118.26]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",114.05, 112.63]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",115.52, 113.53]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",117.20, 115.30]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",112.20, 111.04]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",111.53, 109.15]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",113.69, 111.52]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",108.21, 106.07]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",112.71, 111.37]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",105.26, 106.12]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",101.47, 101.34]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",102.78, 101.74]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",104.75, 104.18]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",110.18, 108.51]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",113.52, 111.18]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",118.97, 116.28]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",118.62, 116.08]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",115.91, 113.07]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",115.88, 113.53]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",114.58, 111.75]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",120.87, 118.28]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",112.77, 110.24]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",111.78, 109.14]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",111.85, 109.26]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",109.02, 108.06]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",105.69, 104.42]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",104.67, 103.18]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",104.42, 103.02]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",97.80, 98.56]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",99.46, 100.30]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",103.70, 104.06]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",109.84, 108.64]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",118.38, 117.95]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",120.64, 122.87]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",117.10, 118.26]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",119.99, 122.14]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",113.69, 113.95]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",119.82, 119.52]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",119.98, 118.91]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",121.47, 120.70]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",121.95, 120.13]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",119.72, 117.66]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",113.94, 110.92]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",115.36, 111.94]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",113.54, 108.90]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",111.96, 109.00]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",109.07, 107.79]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",106.94, 104.64]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",105.96, 104.56]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",109.38, 109.94]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",116.81, 115.53]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",114.25, 112.26]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",113.95, 111.95]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",110.38, 108.31]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",112.94, 111.44]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",111.95, 111.42]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",114.88, 129.49]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",115.13, 136.90]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='RRP Traffic Flows Max: 136.90 KB Min: 10.92 KB'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='136'

	
        
      
	