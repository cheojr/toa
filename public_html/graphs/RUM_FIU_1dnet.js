
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",46.35, 50.03]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",49.69, 29.21]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",63.01, 59.20]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",60.33, 113.17]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",24.58, 37.68]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",27.94, 100.19]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",20.16, 35.79]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",23.24, 35.09]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",49.40, 73.69]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",49.26, 21.87]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",24.35, 143.08]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",41.51, 54.41]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",44.57, 99.07]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",30.51, 18.76]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",35.20, 54.26]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",36.70, 106.09]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",124.67, 53.23]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",23.85, 51.92]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",70.45, 44.15]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",21.66, 23.11]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",37.38, 88.71]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",44.95, 22.18]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",101.98, 17.63]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",9.67, 12.29]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",37.15, 21.22]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",32.62, 24.09]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",18.96, 9.04]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",15.84, 105.80]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",27.52, 45.44]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",12.48, 43.05]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",13.91, 31.24]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",17.46, 18.09]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",24.57, 62.32]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",59.33, 79.06]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",21.82, 18.85]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",32.25, 11.61]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",36.21, 15.24]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",41.90, 37.43]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",20.72, 36.45]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",15.73, 16.66]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",20.28, 31.36]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",13.66, 87.34]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",37.92, 41.72]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",23.48, 35.31]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",56.49, 13.41]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",66.10, 13.27]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",28.26, 30.00]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",35.64, 43.62]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",24.67, 30.92]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",25.59, 52.38]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",29.04, 37.94]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",22.19, 17.59]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",38.06, 52.28]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",20.24, 39.31]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",35.08, 23.10]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",51.83, 28.00]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",26.38, 6.35]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",30.69, 12.51]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",42.94, 34.03]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",19.20, 39.23]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",15.97, 23.85]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",25.97, 21.36]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",37.89, 22.60]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",14.56, 36.27]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",9.98, 34.45]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",4.84, 47.77]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",25.82, 486.82]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",24.95, 459.37]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",31.32, 18.60]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",25.24, 32.37]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",12.22, 16.51]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",14.48, 32.48]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",16.38, 22.91]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",21.60, 49.38]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",27.62, 64.98]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",14.16, 32.71]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",21.06, 59.11]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",4.90, 78.14]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",22.68, 7.82]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",16.09, 18.23]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",6.95, 12.48]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",30.40, 9.94]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",7.51, 290.67]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",17.01, 69.63]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",31.19, 26.45]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",20.94, 15.29]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",15.46, 13.42]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",32.98, 26.97]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",12.55, 4.21]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",9.54, 39.80]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",7.10, 44.35]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",26.82, 22.38]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",17.10, 18.48]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",21.80, 15.57]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",12.42, 26.83]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",5.24, 18.13]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",23.47, 28.37]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",15.82, 40.61]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",3.21, 30.78]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",26.12, 27.87]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",1.78, 16.71]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",3.50, 43.96]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",27.78, 27.35]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",13.56, 5.61]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",7.39, 5.25]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",20.76, 10.79]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",3.94, 20.55]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",9.93, 38.85]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",2.47, 18.69]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",15.54, 50.77]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",19.60, 17.86]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",14.73, 11.39]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",1.50, 13.68]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",4.19, 32.14]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",11.74, 33.61]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",1.69, 14.95]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",2.32, 43.13]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",18.82, 10.11]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",15.58, 11.65]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",10.83, 5.94]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",14.34, 3.81]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",6.64, 23.19]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",4.59, 6.09]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.87, 2.14]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",2.68, 3.84]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",8.96, 30.13]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",7.70, 7.97]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",9.82, 3.03]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",1.88, 27.61]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",21.81, 11.20]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",10.47, 25.55]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",7.14, 5.95]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",10.22, 9.02]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",27.03, 33.05]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",1.95, 50.65]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",7.63, 6.66]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",2.78, 4.55]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",12.60, 7.85]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",14.10, 25.85]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",7.12, 36.95]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",14.12, 305.39]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",19.40, 13.17]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",18.21, 20.15]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",4.66, 18.18]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",36.83, 20.36]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",2.30, 30.13]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",6.72, 6.52]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",1.36, 11.84]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",13.17, 6.45]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",1.13, 4.70]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",5.99, 19.39]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",15.95, 31.62]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",13.93, 1.34]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",26.05, 31.26]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",8.20, 7.83]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",36.33, 12.31]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",3.17, 28.88]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",13.06, 10.93]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",8.00, 26.60]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",4.30, 20.77]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",7.59, 1.48]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",5.85, 7.36]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",19.08, 20.75]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",10.92, 23.06]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",8.13, 2.33]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",31.22, 30.98]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",7.13, 24.69]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",31.49, 13.58]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",20.28, 3.67]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",26.46, 34.68]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",1.47, 32.01]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",15.44, 20.68]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",13.81, 2.01]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",38.14, 12.10]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",22.13, 5.57]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",5.36, 55.05]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",7.92, 1.72]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",2.85, 2.28]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",14.42, 16.36]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",29.71, 26.32]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",24.61, 5.42]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",1.94, 19.35]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",16.47, 16.44]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",10.29, 37.40]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",66.25, 14.36]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",29.32, 11.60]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",4.37, 35.38]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",4.49, 6.15]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",10.69, 6.56]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",55.62, 9.26]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",24.90, 9.03]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",52.50, 25.65]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",27.76, 33.15]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",18.60, 118.84]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",12.82, 34.41]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",7.59, 13.21]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",18.88, 10.44]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",37.17, 21.31]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",10.91, 95.42]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",6.35, 9.95]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",20.91, 12.51]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",26.83, 16.94]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",18.89, 35.03]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",32.03, 31.97]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",44.18, 20.75]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",66.46, 18.55]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",20.83, 17.19]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",55.24, 32.86]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",30.79, 22.34]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",35.22, 38.63]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",83.38, 46.57]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",112.72, 21.89]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",43.89, 325.15]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",40.95, 18.76]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",86.06, 17.85]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",96.90, 94.54]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",56.63, 28.46]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",91.30, 34.39]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",70.21, 25.26]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",48.54, 42.02]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",43.05, 24.07]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",77.76, 67.29]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",43.11, 30.04]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",52.26, 52.33]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",106.50, 27.17]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",40.91, 30.89]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",67.68, 28.97]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",50.93, 77.11]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",70.07, 49.38]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",90.75, 22.88]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",67.96, 35.35]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",43.24, 55.95]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",71.31, 29.92]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",35.89, 47.25]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",149.47, 59.82]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",44.26, 157.58]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",55.99, 125.20]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",68.80, 32.73]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",69.58, 25.46]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",65.47, 26.17]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",86.73, 81.09]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",45.59, 37.95]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",116.30, 54.34]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",34.50, 48.11]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",20.49, 143.60]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",59.52, 24.84]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",68.99, 82.28]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",95.38, 33.67]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",51.82, 83.04]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",65.19, 61.68]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",66.99, 30.44]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",71.73, 38.79]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",70.62, 27.73]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",44.76, 24.29]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",54.82, 47.76]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",98.97, 32.51]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",50.24, 34.83]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",123.94, 37.26]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",43.42, 56.93]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",36.55, 58.84]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",89.91, 63.02]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",43.63, 32.68]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",39.81, 33.81]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",34.11, 46.39]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",53.18, 56.46]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",68.65, 34.97]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",42.55, 85.76]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",25.76, 73.47]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",39.29, 39.03]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",29.83, 55.29]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",41.92, 26.77]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",44.96, 23.44]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",27.50, 25.06]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",22.37, 38.53]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",81.43, 110.12]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",52.97, 24.97]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",42.12, 115.92]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",114.38, 63.73]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",33.50, 56.07]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",58.85, 41.76]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",31.44, 25.63]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",56.86, 136.64]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",38.40, 72.91]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",63.54, 54.92]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",87.95, 36.86]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",94.52, 83.11]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='RUM to FIU Traffic Network Max: 486.82 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='486'

	
        
      
	