
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",50.03, 46.35]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",29.21, 49.69]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",59.20, 63.01]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",113.17, 60.33]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",37.68, 24.58]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",100.19, 27.94]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",35.79, 20.16]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",35.09, 23.24]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",73.69, 49.40]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",21.87, 49.26]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",143.08, 24.35]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",54.41, 41.51]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",99.07, 44.57]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",18.76, 30.51]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",54.26, 35.20]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",106.09, 36.70]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",53.23, 124.67]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",51.92, 23.85]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",44.15, 70.45]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",23.11, 21.66]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",88.71, 37.38]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",22.18, 44.95]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",17.63, 101.98]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",12.29, 9.67]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",21.22, 37.15]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",24.09, 32.62]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",9.04, 18.96]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",105.80, 15.84]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",45.44, 27.52]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",43.05, 12.48]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",31.24, 13.91]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",18.09, 17.46]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",62.32, 24.57]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",79.06, 59.33]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",18.85, 21.82]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",11.61, 32.25]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",15.24, 36.21]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",37.43, 41.90]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",36.45, 20.72]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",16.66, 15.73]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",31.36, 20.28]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",87.34, 13.66]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",41.72, 37.92]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",35.31, 23.48]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",13.41, 56.49]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",13.27, 66.10]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",30.00, 28.26]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",43.62, 35.64]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",30.92, 24.67]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",52.38, 25.59]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",37.94, 29.04]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",17.59, 22.19]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",52.28, 38.06]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",39.31, 20.24]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",23.10, 35.08]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",28.00, 51.83]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",6.35, 26.38]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",12.51, 30.69]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",34.03, 42.94]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",39.23, 19.20]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",23.85, 15.97]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",21.36, 25.97]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",22.60, 37.89]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",36.27, 14.56]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",34.45, 9.98]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",47.77, 4.84]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",486.82, 25.82]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",459.37, 24.95]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",18.60, 31.32]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",32.37, 25.24]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",16.51, 12.22]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",32.48, 14.48]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",22.91, 16.38]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",49.38, 21.60]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",64.98, 27.62]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",32.71, 14.16]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",59.11, 21.06]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",78.14, 4.90]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",7.82, 22.68]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",18.23, 16.09]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",12.48, 6.95]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",9.94, 30.40]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",290.67, 7.51]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",69.63, 17.01]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",26.45, 31.19]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",15.29, 20.94]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",13.42, 15.46]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",26.97, 32.98]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",4.21, 12.55]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",39.80, 9.54]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",44.35, 7.10]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",22.38, 26.82]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",18.48, 17.10]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",15.57, 21.80]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",26.83, 12.42]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",18.13, 5.24]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",28.37, 23.47]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",40.61, 15.82]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",30.78, 3.21]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",27.87, 26.12]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",16.71, 1.78]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",43.96, 3.50]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",27.35, 27.78]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",5.61, 13.56]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",5.25, 7.39]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",10.79, 20.76]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",20.55, 3.94]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",38.85, 9.93]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",18.69, 2.47]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",50.77, 15.54]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",17.86, 19.60]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",11.39, 14.73]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",13.68, 1.50]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",32.14, 4.19]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",33.61, 11.74]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",14.95, 1.69]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",43.13, 2.32]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",10.11, 18.82]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",11.65, 15.58]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",5.94, 10.83]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",3.81, 14.34]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",23.19, 6.64]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",6.09, 4.59]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",2.14, 0.87]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",3.84, 2.68]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",30.13, 8.96]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",7.97, 7.70]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",3.03, 9.82]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",27.61, 1.88]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",11.20, 21.81]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",25.55, 10.47]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",5.95, 7.14]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",9.02, 10.22]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",33.05, 27.03]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",50.65, 1.95]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",6.66, 7.63]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",4.55, 2.78]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",7.85, 12.60]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",25.85, 14.10]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",36.95, 7.12]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",305.39, 14.12]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",13.17, 19.40]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",20.15, 18.21]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",18.18, 4.66]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",20.36, 36.83]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",30.13, 2.30]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",6.52, 6.72]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",11.84, 1.36]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",6.45, 13.17]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",4.70, 1.13]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",19.39, 5.99]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",31.62, 15.95]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",1.34, 13.93]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",31.26, 26.05]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",7.83, 8.20]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",12.31, 36.33]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",28.88, 3.17]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",10.93, 13.06]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",26.60, 8.00]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",20.77, 4.30]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",1.48, 7.59]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",7.36, 5.85]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",20.75, 19.08]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",23.06, 10.92]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",2.33, 8.13]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",30.98, 31.22]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",24.69, 7.13]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",13.58, 31.49]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",3.67, 20.28]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",34.68, 26.46]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",32.01, 1.47]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",20.68, 15.44]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",2.01, 13.81]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",12.10, 38.14]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",5.57, 22.13]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",55.05, 5.36]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",1.72, 7.92]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",2.28, 2.85]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",16.36, 14.42]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",26.32, 29.71]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",5.42, 24.61]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",19.35, 1.94]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",16.44, 16.47]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",37.40, 10.29]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",14.36, 66.25]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",11.60, 29.32]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",35.38, 4.37]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",6.15, 4.49]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",6.56, 10.69]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",9.26, 55.62]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",9.03, 24.90]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",25.65, 52.50]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",33.15, 27.76]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",118.84, 18.60]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",34.41, 12.82]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",13.21, 7.59]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",10.44, 18.88]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",21.31, 37.17]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",95.42, 10.91]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",9.95, 6.35]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",12.51, 20.91]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",16.94, 26.83]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",35.03, 18.89]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",31.97, 32.03]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",20.75, 44.18]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",18.55, 66.46]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",17.19, 20.83]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",32.86, 55.24]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",22.34, 30.79]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",38.63, 35.22]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",46.57, 83.38]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",21.89, 112.72]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",325.15, 43.89]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",18.76, 40.95]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",17.85, 86.06]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",94.54, 96.90]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",28.46, 56.63]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",34.39, 91.30]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",25.26, 70.21]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",42.02, 48.54]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",24.07, 43.05]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",67.29, 77.76]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",30.04, 43.11]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",52.33, 52.26]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",27.17, 106.50]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",30.89, 40.91]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",28.97, 67.68]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",77.11, 50.93]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",49.38, 70.07]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",22.88, 90.75]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",35.35, 67.96]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",55.95, 43.24]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",29.92, 71.31]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",47.25, 35.89]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",59.82, 149.47]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",157.58, 44.26]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",125.20, 55.99]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",32.73, 68.80]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",25.46, 69.58]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",26.17, 65.47]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",81.09, 86.73]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",37.95, 45.59]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",54.34, 116.30]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",48.11, 34.50]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",143.60, 20.49]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",24.84, 59.52]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",82.28, 68.99]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",33.67, 95.38]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",83.04, 51.82]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",61.68, 65.19]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",30.44, 66.99]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",38.79, 71.73]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",27.73, 70.62]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",24.29, 44.76]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",47.76, 54.82]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",32.51, 98.97]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",34.83, 50.24]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",37.26, 123.94]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",56.93, 43.42]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",58.84, 36.55]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",63.02, 89.91]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",32.68, 43.63]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",33.81, 39.81]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",46.39, 34.11]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",56.46, 53.18]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",34.97, 68.65]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",85.76, 42.55]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",73.47, 25.76]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",39.03, 39.29]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",55.29, 29.83]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",26.77, 41.92]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",23.44, 44.96]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",25.06, 27.50]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",38.53, 22.37]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",110.12, 81.43]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",24.97, 52.97]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",115.92, 42.12]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",63.73, 114.38]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",56.07, 33.50]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",41.76, 58.85]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",25.63, 31.44]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",136.64, 56.86]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",72.91, 38.40]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",54.92, 63.54]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",36.86, 87.95]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",83.11, 94.52]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU to RUM Traffic Network Max: 486.82 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='486'

	
        
      
	