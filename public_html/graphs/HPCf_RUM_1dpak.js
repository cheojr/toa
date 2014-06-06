
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",3.13, 0.96]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",5.45, 2.79]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",0.02, 0.00]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",0.01, 0.03]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",6.12, 11.57]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",18.66, 20.81]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",0.02, 0.01]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",21.97, 29.50]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",0.00, 0.00]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",0.04, 0.00]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",33.55, 66.12]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",0.01, 0.02]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",11.80, 3.36]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",0.05, 0.05]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",22.85, 11.31]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",0.00, 0.00]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",0.01, 0.03]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",30.12, 58.75]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",21.04, 5.80]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",0.03, 0.03]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",16.60, 32.96]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",28.37, 14.13]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",27.86, 7.37]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",52.68, 68.64]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",0.00, 0.01]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",0.00, 0.05]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",26.25, 13.12]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",0.10, 0.00]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",0.00, 0.01]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",0.03, 0.00]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",33.78, 67.03]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",0.00, 0.00]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",28.86, 7.58]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",43.19, 46.94]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",17.62, 35.00]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",28.77, 7.39]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",16.99, 33.38]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",0.00, 0.00]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",35.23, 17.34]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",0.02, 0.14]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",0.02, 0.00]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",17.11, 34.00]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",49.16, 41.21]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",29.10, 14.54]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",17.15, 34.09]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",45.98, 41.00]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",31.84, 8.13]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",17.70, 35.14]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",0.03, 0.02]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",37.53, 18.71]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",0.01, 0.02]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",0.02, 0.02]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",17.69, 34.98]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",16.36, 32.41]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",61.94, 23.62]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",55.53, 45.20]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",0.01, 0.02]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",0.01, 0.02]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",17.96, 35.54]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",57.09, 44.81]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",38.68, 19.04]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",0.02, 0.02]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",0.02, 0.02]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",0.02, 0.02]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",17.53, 34.60]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",16.33, 32.28]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",71.75, 27.85]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",32.19, 8.38]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",17.67, 35.04]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",17.55, 34.65]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",0.01, 0.03]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",17.18, 33.94]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",76.71, 28.94]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",0.02, 0.02]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",0.02, 0.03]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",17.37, 34.63]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",0.02, 0.02]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",59.17, 46.41]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",36.89, 18.14]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",0.02, 0.02]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",72.74, 78.51]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",0.02, 0.01]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",0.03, 0.03]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",51.61, 50.38]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",33.54, 8.38]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",0.02, 0.01]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.02, 0.02]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",0.02, 0.03]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.04, 0.03]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",71.84, 86.70]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",76.69, 19.37]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",0.01, 0.02]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",18.89, 37.49]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",18.77, 37.00]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",0.02, 0.01]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",58.15, 55.90]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",42.32, 10.01]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",0.02, 0.01]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",0.02, 0.03]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",0.02, 0.02]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",0.02, 0.02]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",56.73, 54.51]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",105.53, 60.92]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",0.02, 0.02]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",20.07, 39.86]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",20.39, 40.81]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.02, 0.03]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",43.25, 21.46]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",19.67, 38.97]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",39.54, 9.16]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.02, 0.02]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.02, 0.02]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.03, 0.02]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",84.23, 101.67]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.02, 0.03]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",0.03, 0.02]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",0.03, 0.03]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.02, 0.02]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",38.78, 77.82]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",43.28, 21.43]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",17.68, 46.23]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",66.43, 35.77]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.02, 0.02]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.02, 0.02]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",48.67, 24.22]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.02, 0.03]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",63.90, 47.11]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.02, 0.02]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",63.32, 49.88]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.03, 0.03]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",66.55, 62.22]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.01, 0.02]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",68.21, 50.59]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.02, 0.01]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",20.25, 40.77]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",0.02, 0.02]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",48.62, 23.99]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",41.43, 10.79]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",19.57, 38.83]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.03, 0.02]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",0.02, 0.02]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",68.94, 52.10]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",68.23, 64.59]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",47.93, 10.74]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",16.00, 31.47]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.02, 0.02]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.02, 0.02]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",20.59, 41.24]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",46.40, 23.00]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",37.76, 9.95]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",19.99, 39.94]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.02, 0.03]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",20.58, 40.96]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",46.23, 23.06]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",48.15, 10.76]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",69.61, 52.96]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.03, 0.02]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",20.44, 40.83]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",19.98, 40.09]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",47.30, 23.40]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.03, 0.02]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",41.53, 10.96]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",0.02, 0.03]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",39.10, 78.54]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",0.03, 0.02]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",47.95, 10.73]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",115.43, 74.56]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",0.03, 0.02]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.02, 0.03]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",19.35, 38.91]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",21.29, 42.14]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",46.85, 23.23]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.02, 0.02]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",41.90, 10.91]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.03, 0.03]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",19.86, 39.76]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",66.15, 50.80]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",45.76, 22.72]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",19.83, 39.88]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",44.66, 10.16]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",0.02, 0.01]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",19.82, 39.90]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",20.14, 40.55]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",0.02, 0.02]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",46.89, 22.97]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",0.01, 0.02]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",0.02, 0.02]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",26.26, 6.74]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",58.81, 49.97]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",50.24, 55.48]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",26.08, 6.65]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",17.76, 35.40]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",0.02, 0.02]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",19.89, 39.59]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",19.92, 39.26]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",26.01, 12.92]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",0.00, 0.02]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",0.03, 0.02]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",0.02, 0.01]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",0.01, 0.03]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",16.48, 4.55]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",0.00, 0.01]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",42.70, 45.37]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",26.72, 13.33]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",17.27, 34.37]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",0.01, 0.01]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",17.99, 35.76]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",17.14, 34.02]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",0.00, 0.00]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",15.25, 7.65]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",5.76, 1.62]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",0.03, 0.04]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",4.74, 1.63]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",26.86, 53.15]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",17.51, 7.10]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",14.75, 29.03]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",0.00, 0.02]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",15.01, 29.81]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",0.01, 0.00]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",10.66, 15.08]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",0.06, 0.02]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",0.00, 0.03]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",0.00, 0.00]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",0.05, 0.03]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",4.10, 1.30]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",19.52, 19.11]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",0.03, 0.03]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",5.23, 10.00]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",0.02, 0.01]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",0.03, 0.04]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",8.04, 15.57]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",17.59, 27.08]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",0.04, 0.01]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",0.02, 0.08]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",0.02, 0.00]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",14.20, 4.36]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",11.00, 5.51]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",12.88, 25.09]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",5.71, 1.85]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",5.41, 10.76]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",0.00, 0.03]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",10.17, 20.08]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",0.59, 0.30]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",0.00, 0.02]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",1.34, 2.68]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",0.05, 0.00]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",0.02, 0.06]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",8.20, 2.48]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",0.03, 0.02]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",4.73, 2.25]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",3.86, 7.44]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",7.66, 9.44]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",0.01, 0.02]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",0.02, 0.02]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",7.84, 5.53]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",0.04, 0.02]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",4.52, 8.91]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",0.02, 0.06]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",1.33, 0.46]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",4.24, 1.28]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",8.36, 10.19]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",0.04, 0.02]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",10.21, 20.33]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",13.78, 17.74]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",0.00, 0.00]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",0.01, 0.03]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",19.53, 26.20]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",0.02, 0.03]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",3.21, 6.05]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",0.02, 0.02]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",0.03, 0.02]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",8.41, 2.59]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",0.00, 0.02]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",7.64, 3.88]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",6.29, 1.94]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",6.52, 12.85]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",0.02, 0.03]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",2.01, 3.81]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",11.80, 23.17]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",3.27, 1.61]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",12.55, 25.34]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",0.03, 0.03]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",6.61, 2.13]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",5.57, 1.53]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",0.00, 0.02]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",10.28, 13.10]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='HPCf to RUM Traffic Packets Max: 115.43 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='115'

	
        
      
	