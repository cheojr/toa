
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",76.12, 10.86]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",6.45, 12.90]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",5.75, 8.21]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",4.29, 10.53]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",4.81, 15.49]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",3.87, 11.63]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",4.20, 31.72]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",3.06, 16.60]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",5.41, 13.39]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",7.16, 6.12]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",3.43, 13.64]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",12.60, 10.90]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",4.79, 6.57]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",15.74, 3.29]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",5.62, 3.99]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",3.73, 0.69]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",2.71, 2.67]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",4.24, 3.36]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",7.34, 1.28]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",1.15, 0.78]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",3.59, 1.58]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",1.58, 3.98]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",2.47, 3.43]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",2.60, 14.52]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",2.68, 21.93]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",1.38, 16.51]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",1.39, 16.05]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",7.19, 6.22]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",2.99, 12.87]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",3.30, 13.64]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",1.52, 6.21]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",2.80, 4.62]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",4.79, 5.37]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",1.72, 19.43]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",2.36, 0.27]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",2.50, 1.30]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",1.02, 3.34]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",5.13, 10.95]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",4.93, 0.49]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",3.21, 0.55]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",10.71, 0.71]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",12.81, 0.58]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",2.60, 0.32]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",4.72, 1.26]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",18.67, 1.01]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",5.10, 0.40]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",2.32, 0.45]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",6.03, 1.01]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",1.13, 5.04]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",2.06, 0.44]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",1.80, 1.30]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",2.35, 1.87]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",0.75, 0.23]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",1.02, 0.19]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",0.80, 0.24]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",0.77, 0.80]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",1.46, 0.24]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",0.86, 0.15]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",1.75, 0.46]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",1.51, 2.72]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",0.52, 3.20]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",2.09, 2.94]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",1.09, 1.79]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",2.49, 0.38]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",0.66, 0.86]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",0.53, 0.13]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",0.36, 0.11]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",0.36, 0.09]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",1.23, 0.09]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",1.71, 0.51]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",0.73, 0.08]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",0.54, 1.43]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",0.72, 0.15]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",1.25, 0.09]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",0.80, 0.10]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",1.23, 0.10]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",0.62, 0.08]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",0.26, 0.06]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",0.25, 0.05]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",0.32, 0.07]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",0.17, 0.03]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",0.55, 0.08]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",0.79, 0.06]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",0.23, 0.08]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",0.03, 0.03]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",0.01, 0.03]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.29, 0.05]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",0.04, 0.02]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.06, 0.09]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",0.56, 0.06]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",0.29, 0.07]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",0.54, 0.08]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",0.13, 0.03]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",0.03, 0.05]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",0.18, 0.05]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",0.17, 0.04]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",0.09, 0.03]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",0.02, 0.03]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",0.02, 0.05]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",0.02, 0.04]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",0.02, 0.05]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",0.03, 0.03]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",0.05, 0.01]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",0.19, 0.04]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",0.20, 0.03]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",0.02, 0.03]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.01, 0.02]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",0.02, 0.02]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",0.02, 0.02]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",0.01, 0.02]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.01, 0.02]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.01, 0.02]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.01, 0.03]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",0.01, 0.03]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.02, 0.03]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",0.01, 0.02]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",0.01, 0.01]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.02, 0.02]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",0.01, 0.01]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",0.01, 0.01]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",0.01, 0.02]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",0.01, 0.01]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.02, 0.01]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.01, 0.01]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",0.01, 0.01]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.01, 0.04]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",0.01, 0.01]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.01, 0.02]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",0.01, 0.01]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.02, 0.02]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",0.00, 0.02]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.01, 0.01]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",0.02, 0.02]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.01, 0.01]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",0.01, 0.02]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",0.01, 0.01]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",0.01, 0.01]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",0.02, 0.02]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",0.02, 0.01]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.02, 0.01]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",0.02, 0.02]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",0.01, 0.01]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",0.01, 0.02]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",0.01, 0.01]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",0.01, 0.01]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.01, 0.01]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.02, 0.02]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",0.01, 0.01]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",0.00, 0.01]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",0.02, 0.02]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",0.01, 0.01]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.01, 0.02]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",0.03, 0.02]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",0.03, 0.04]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",0.01, 0.02]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",0.03, 0.03]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.01, 0.02]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",0.01, 0.01]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",0.01, 0.03]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",0.01, 0.01]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.01, 0.01]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",0.01, 0.01]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",0.01, 0.01]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",0.01, 0.02]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",0.01, 0.02]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",0.01, 0.01]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",0.01, 0.01]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",0.01, 0.02]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.01, 0.01]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",0.01, 0.01]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",0.01, 0.02]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",0.02, 0.03]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.01, 0.01]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",0.02, 0.02]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.25, 0.03]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",0.03, 0.02]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",0.08, 0.03]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",0.05, 0.02]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",0.04, 0.02]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",0.06, 0.02]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",0.08, 0.03]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",0.14, 0.05]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",0.31, 0.04]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",0.08, 0.06]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",0.03, 0.02]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",0.98, 0.29]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",1.80, 1.21]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",0.53, 0.26]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",1.66, 0.71]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",2.51, 2.48]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",1.78, 7.96]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",1.37, 5.62]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",2.72, 7.94]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",3.42, 4.12]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",2.88, 1.57]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",4.64, 77.56]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",4.16, 20.11]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",5.52, 9.02]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",2.85, 6.70]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",2.80, 3.35]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",2.76, 15.31]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",2.65, 6.10]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",9.32, 18.97]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",5.71, 65.43]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",2.96, 21.22]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",4.86, 9.35]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",3.27, 1.16]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",4.51, 9.21]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",3.48, 10.82]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",1.65, 13.06]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",3.97, 33.10]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",4.55, 38.98]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",15.33, 24.78]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",12.60, 5.64]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",7.60, 5.26]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",6.77, 4.20]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",4.09, 2.11]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",4.66, 8.56]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",7.32, 55.34]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",7.69, 44.13]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",5.09, 17.71]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",18.50, 9.38]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",12.78, 21.73]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",7.95, 18.57]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",6.38, 30.99]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",11.92, 14.64]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",3.43, 19.54]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",12.51, 13.28]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",4.93, 29.50]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",3.04, 9.22]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",5.66, 6.41]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",6.83, 42.69]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",3.79, 14.76]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",9.59, 2.89]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",8.31, 6.12]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",13.03, 3.02]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",9.65, 6.62]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",6.36, 2.28]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",9.28, 1.93]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",9.29, 7.92]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",10.65, 11.80]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",6.56, 4.38]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",11.39, 7.55]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",9.41, 12.64]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",3.55, 9.36]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",6.30, 3.15]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",6.62, 6.67]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",10.55, 7.28]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",5.30, 1.82]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",8.57, 8.11]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",3.84, 14.95]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",5.39, 4.74]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",6.13, 9.08]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",55.16, 16.52]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",5.94, 9.17]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",18.50, 12.27]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",8.32, 10.20]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",85.08, 9.98]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",5.80, 9.06]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",4.22, 4.85]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",92.16, 19.31]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",11.09, 33.28]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",28.87, 13.69]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",29.72, 7.96]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",20.17, 10.74]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",36.78, 14.69]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",13.92, 5.98]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",14.51, 7.15]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",12.93, 8.36]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",7.35, 12.04]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",28.46, 13.23]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",81.32, 24.15]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",26.13, 22.15]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",21.13, 23.02]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",49.90, 27.52]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",21.34, 28.02]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",181.57, 17.99]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",4.10, 21.56]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",9.68, 10.70]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",5.38, 15.62]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",7.87, 22.11]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",78.01, 41.45]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",230.90, 34.07]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",13.53, 24.01]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",10.25, 2.31]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",9.71, 11.50]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU to CAYEY Traffic Network Max: 230.90 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='230'

	
        
      
	