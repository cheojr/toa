
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",62.52, 58.21]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",57.60, 47.09]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",82.40, 79.07]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",92.07, 112.26]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",38.58, 42.74]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",56.82, 91.88]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",43.67, 42.74]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",37.49, 43.33]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",93.88, 84.31]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",49.50, 39.45]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",74.87, 112.87]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",53.27, 60.10]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",74.03, 90.08]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",39.82, 34.47]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",49.96, 55.38]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",58.47, 94.69]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",131.38, 91.93]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",37.61, 50.27]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",88.68, 61.99]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",36.10, 27.56]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",91.44, 90.92]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",43.05, 32.58]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",105.57, 48.02]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",17.79, 17.12]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",40.85, 35.34]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",41.43, 34.64]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",22.47, 18.04]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",49.09, 82.55]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",41.71, 47.62]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",30.14, 37.62]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",26.07, 31.64]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",26.77, 25.44]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",51.64, 57.64]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",100.77, 89.10]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",25.44, 26.32]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",32.27, 23.81]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",38.39, 30.65]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",46.87, 49.38]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",40.55, 40.66]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",22.40, 21.70]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",31.67, 32.75]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",44.13, 68.05]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",53.65, 51.18]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",34.64, 44.36]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",53.44, 36.70]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",82.83, 52.32]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",38.19, 33.70]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",43.80, 47.29]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",31.01, 36.58]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",40.49, 49.86]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",45.80, 40.90]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",26.84, 24.70]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",58.77, 55.13]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",30.35, 40.06]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",35.22, 29.52]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",61.97, 51.66]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",23.75, 15.98]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",52.77, 35.52]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",44.74, 41.63]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",28.67, 37.49]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",23.39, 28.65]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",34.21, 29.72]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",43.31, 34.20]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",35.63, 35.50]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",22.15, 31.61]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",17.67, 37.89]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",176.98, 341.73]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",174.22, 324.22]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",29.82, 26.83]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",59.21, 45.55]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",18.56, 18.86]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",23.70, 30.84]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",23.19, 25.57]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",44.73, 44.48]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",46.55, 57.67]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",25.21, 31.92]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",47.77, 53.37]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",28.66, 57.72]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",24.55, 18.28]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",21.30, 20.39]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",15.36, 15.36]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",52.12, 33.83]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",37.90, 205.50]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",35.63, 57.70]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",40.55, 34.98]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",31.24, 20.87]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",17.85, 19.34]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",33.68, 34.20]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",15.84, 9.06]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",21.96, 33.79]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",25.25, 35.60]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",29.81, 30.27]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",21.71, 20.15]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",46.56, 34.15]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",23.31, 24.99]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",11.35, 18.21]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",25.81, 30.00]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",29.42, 35.74]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",15.80, 24.70]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",30.91, 29.26]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",9.20, 14.40]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",15.55, 33.84]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",29.28, 31.99]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",14.09, 10.93]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",11.13, 8.30]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",43.94, 29.87]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",11.88, 18.52]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",19.15, 31.21]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",10.92, 17.06]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",30.93, 41.79]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",22.01, 21.05]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",20.45, 15.28]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",8.42, 12.42]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",17.43, 24.97]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",18.86, 30.28]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",10.43, 12.81]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",15.52, 32.05]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",44.76, 28.74]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",17.87, 15.87]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",14.45, 7.95]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",16.40, 12.00]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",11.20, 20.41]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",8.27, 7.44]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",3.75, 3.97]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",6.40, 5.72]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",26.19, 26.03]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",9.56, 10.11]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",11.09, 7.06]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",8.10, 21.33]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",44.03, 30.50]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",14.82, 23.40]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",10.23, 7.20]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",11.61, 11.26]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",26.86, 32.52]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",15.67, 37.33]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",11.05, 7.72]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",6.82, 10.28]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",20.52, 11.23]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",19.36, 23.51]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",19.70, 30.19]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",42.82, 213.75]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",44.34, 30.77]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",21.52, 21.96]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",8.83, 16.11]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",31.73, 27.48]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",9.27, 23.25]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",10.38, 9.54]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",5.08, 10.45]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",12.48, 10.82]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",11.08, 7.03]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",11.73, 18.19]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",23.07, 28.24]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",14.53, 5.27]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",49.28, 46.37]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",10.75, 10.32]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",30.04, 21.53]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",9.81, 22.86]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",13.63, 13.83]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",11.76, 23.13]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",8.66, 17.44]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",7.33, 5.78]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",15.84, 8.28]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",21.32, 21.33]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",16.97, 19.72]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",9.32, 5.28]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",54.02, 46.68]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",11.82, 21.15]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",26.90, 19.21]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",16.75, 11.14]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",26.03, 30.57]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",10.19, 24.09]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",16.02, 17.75]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",12.20, 8.03]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",56.47, 28.34]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",17.99, 13.05]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",22.73, 40.77]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",8.20, 6.08]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",4.53, 6.08]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",16.82, 14.81]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",29.26, 28.14]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",20.79, 13.69]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",9.35, 16.23]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",17.85, 16.29]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",17.89, 29.62]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",53.09, 22.18]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",57.12, 20.81]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",17.48, 28.72]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",9.22, 10.67]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",14.81, 10.40]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",44.54, 19.95]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",25.40, 17.65]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",59.20, 39.31]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",35.62, 37.32]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",43.50, 93.48]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",20.97, 32.56]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",14.17, 15.79]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",21.35, 17.69]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",47.90, 33.83]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",45.01, 72.79]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",12.13, 13.88]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",26.04, 19.34]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",30.02, 25.93]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",37.97, 43.71]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",42.80, 38.39]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",47.25, 39.23]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",67.21, 45.74]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",27.21, 25.72]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",62.86, 47.81]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",37.73, 34.76]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",49.94, 47.64]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",103.43, 73.98]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",119.80, 72.29]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",105.56, 244.32]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",45.87, 38.52]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",73.43, 56.96]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",121.84, 108.03]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",64.08, 48.34]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",105.84, 69.53]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",77.07, 51.32]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",61.25, 48.28]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",48.85, 45.21]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",94.76, 87.89]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",60.84, 48.26]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",70.49, 65.60]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",114.01, 68.00]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",55.10, 42.49]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",67.88, 53.35]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",75.15, 97.77]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",85.98, 73.28]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",82.05, 48.85]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",71.72, 57.18]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",58.59, 70.12]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",71.77, 52.85]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",53.73, 54.30]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",147.98, 88.79]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",86.27, 133.89]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",118.89, 117.82]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",71.50, 54.25]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",72.58, 46.55]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",66.59, 47.71]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",109.84, 90.35]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",62.18, 53.34]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",113.41, 89.41]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",52.23, 55.78]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",78.60, 113.41]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",59.53, 41.79]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",89.53, 85.21]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",97.45, 69.06]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",81.60, 81.41]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",95.62, 77.43]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",69.50, 47.01]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",76.66, 63.49]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",76.51, 49.19]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",51.62, 40.91]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",65.24, 69.95]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",98.30, 62.10]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",58.64, 44.43]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",112.81, 67.09]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",64.21, 63.44]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",56.11, 68.07]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",108.87, 99.78]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",72.94, 50.17]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",50.89, 46.61]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",52.32, 57.26]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",80.04, 67.06]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",74.24, 55.16]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",65.63, 111.58]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",53.00, 69.02]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",67.92, 48.26]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",54.36, 60.48]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",58.26, 49.66]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",56.48, 41.78]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",44.66, 42.67]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",38.93, 46.21]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",125.72, 115.11]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",58.13, 43.48]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",79.81, 105.34]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",112.88, 88.18]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",55.22, 60.77]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",75.59, 63.82]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",42.69, 39.88]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",97.47, 116.93]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",63.28, 76.11]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",82.23, 66.67]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",94.65, 70.58]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",117.57, 109.78]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='RUM to FIU Traffic Packets Max: 341.73 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='341'

	
        
      
	