
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",11.58, 16.01]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",11.53, 14.97]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",6.29, 8.56]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",3.50, 3.88]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",7.66, 10.40]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",6.79, 9.35]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",8.44, 12.85]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",10.57, 11.89]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",8.76, 11.42]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",25.51, 46.62]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",70.64, 58.39]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",4.63, 6.14]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",4.05, 5.05]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",7.64, 6.39]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",4.76, 4.65]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",19.41, 20.27]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",3.74, 4.33]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",39.70, 41.25]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",15.89, 16.40]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",2.38, 3.14]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",6.57, 7.04]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",2.45, 2.90]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",2.90, 3.69]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",1.98, 1.93]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",5.55, 6.88]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",3.74, 3.77]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",3.39, 3.39]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",2.46, 2.89]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",1.41, 1.50]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",1.72, 1.58]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",1.57, 1.69]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",2.16, 2.24]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",1.89, 1.81]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",3.89, 3.77]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",1.41, 1.65]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",11.50, 22.78]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",2.13, 1.78]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",2.42, 3.08]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",1.70, 1.81]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",2.05, 2.31]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",4.43, 3.78]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",0.82, 1.01]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",3.08, 4.16]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",2.63, 2.72]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",1.01, 1.16]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",1.28, 1.24]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",1.43, 1.80]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",1.48, 1.87]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",1.39, 2.76]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",1.12, 1.06]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",4.95, 8.56]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",1.28, 1.11]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",0.78, 0.87]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",1.90, 2.67]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",4.92, 6.09]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",5.95, 8.45]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",1.77, 2.38]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",4.04, 5.17]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",1.74, 2.75]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",1.15, 1.31]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",4.37, 7.60]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",10.28, 15.74]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",7.95, 12.03]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",5.29, 7.35]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",14.26, 24.10]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",0.51, 0.60]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",1.83, 1.37]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",0.82, 0.97]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",1.61, 2.27]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",0.49, 0.52]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",0.53, 0.69]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",0.58, 0.66]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",0.49, 0.60]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",0.67, 0.71]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",1.31, 1.60]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",0.39, 0.49]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",1.07, 1.35]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",0.61, 0.69]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",0.55, 0.73]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",0.18, 0.23]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",0.22, 0.29]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",0.38, 0.47]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",1.31, 2.03]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",0.39, 0.43]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",0.33, 0.36]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",0.34, 0.44]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.83, 0.86]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",0.43, 0.52]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.17, 0.19]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",0.19, 0.22]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",0.09, 0.12]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",0.11, 0.13]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",0.14, 0.20]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",0.24, 0.29]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",0.22, 0.30]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",0.21, 0.24]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",0.37, 0.70]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",0.47, 0.69]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",0.16, 0.20]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",0.17, 0.15]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",0.51, 0.52]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",0.19, 0.23]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",0.22, 0.25]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",0.15, 0.18]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",0.14, 0.15]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",0.28, 0.47]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.20, 0.17]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",0.12, 0.10]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",0.08, 0.10]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",0.16, 0.23]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.06, 0.09]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.06, 0.06]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.10, 0.09]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",0.12, 1.99]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.14, 3.04]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",0.08, 3.08]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",0.07, 3.18]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.08, 3.09]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",0.06, 2.94]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",0.11, 1.65]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",0.08, 0.41]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",0.09, 0.09]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.08, 0.07]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.10, 0.10]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",0.19, 0.17]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.06, 0.10]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",0.07, 0.07]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.10, 0.12]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",0.05, 0.06]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.05, 0.04]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",0.07, 0.09]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.09, 0.09]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",0.06, 0.08]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.07, 0.06]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",0.04, 0.06]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",0.04, 0.05]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",0.05, 0.06]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",0.07, 0.06]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",0.08, 0.08]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.07, 0.06]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",0.10, 0.08]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",0.06, 0.08]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",0.11, 0.09]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",0.24, 0.19]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",0.64, 0.84]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.07, 0.06]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.08, 0.08]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",0.09, 0.06]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",0.24, 0.17]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",0.36, 0.62]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",0.25, 0.31]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.19, 0.22]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",0.11, 0.58]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",0.12, 0.24]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",0.10, 0.08]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",0.48, 0.60]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.14, 0.11]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",0.21, 0.66]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",0.10, 0.08]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",0.12, 0.13]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.11, 0.11]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",0.16, 0.15]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",0.25, 0.33]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",0.12, 0.11]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",0.12, 0.08]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",0.29, 0.50]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",0.13, 0.11]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",0.14, 0.13]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.14, 0.12]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",0.11, 0.09]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",0.15, 0.18]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",0.18, 0.15]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.12, 0.13]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",0.42, 0.37]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.95, 0.35]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",0.71, 1.49]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",0.64, 0.97]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",0.13, 0.15]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",0.17, 0.78]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",0.16, 0.17]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",0.65, 0.87]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",0.87, 1.19]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",0.55, 0.83]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",4.33, 2.79]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",0.86, 1.09]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",8.33, 13.32]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",2.26, 3.26]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",1.39, 1.65]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",1.56, 1.65]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",18.13, 30.07]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",6.62, 8.17]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",6.73, 9.99]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",4.88, 7.11]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",25.80, 44.20]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",21.63, 38.96]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",4.08, 4.32]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",56.50, 86.34]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",16.44, 29.18]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",16.37, 27.75]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",7.83, 21.18]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",10.70, 6.75]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",7.14, 9.89]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",3.88, 3.40]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",5.41, 5.65]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",4.15, 4.44]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",5.87, 7.32]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",7.83, 10.68]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",17.79, 12.74]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",5.12, 5.63]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",9.13, 12.21]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",10.88, 11.83]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",11.43, 14.26]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",7.58, 6.75]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",8.40, 10.39]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",10.88, 13.38]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",10.50, 11.85]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",7.01, 8.92]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",6.99, 8.50]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",9.25, 9.76]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",6.24, 7.27]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",5.42, 6.11]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",12.94, 13.38]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",7.57, 8.77]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",9.54, 9.39]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",7.15, 7.68]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",5.58, 7.04]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",12.06, 18.22]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",13.73, 17.18]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",12.07, 16.28]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",15.63, 23.42]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",8.20, 8.95]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",3.59, 3.48]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",6.21, 5.80]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",11.71, 20.25]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",32.70, 7.30]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",10.80, 12.65]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",7.19, 9.29]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",14.12, 11.50]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",6.83, 4.65]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",10.29, 8.69]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",11.17, 10.40]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",24.15, 29.03]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",22.05, 24.31]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",12.97, 15.45]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",36.71, 41.22]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",6.12, 7.73]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",27.64, 22.50]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",7.48, 8.73]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",9.02, 10.66]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",17.19, 20.58]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",23.77, 34.87]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",24.18, 27.16]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",13.15, 17.53]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",10.15, 9.47]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",7.90, 9.58]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",6.31, 7.04]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",7.08, 8.49]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",7.65, 9.36]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",7.83, 9.27]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",10.03, 13.28]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",8.24, 9.32]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",13.55, 13.87]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",9.61, 11.06]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",19.76, 24.03]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",23.43, 47.12]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",12.00, 12.29]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",36.07, 60.54]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",14.69, 11.79]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",26.37, 17.57]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",38.73, 25.31]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",47.41, 69.46]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",21.46, 27.32]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",10.09, 12.32]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",10.06, 11.64]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",8.74, 11.76]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",13.05, 9.90]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",10.52, 15.19]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",6.19, 5.27]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",8.24, 9.50]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",7.81, 8.93]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",8.05, 9.48]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",6.47, 6.74]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",20.94, 23.76]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",10.30, 12.30]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",8.39, 10.10]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",6.77, 7.64]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU to CUH Traffic Packets Max: 86.34 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='86'

	
        
      
	