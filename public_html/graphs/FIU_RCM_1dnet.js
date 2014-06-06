
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",3.10, 0.95]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",3.88, 0.74]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",12.96, 1.66]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",4.61, 53.58]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",8.19, 1.07]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",2.86, 9.43]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",10.96, 65.10]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",6.48, 21.53]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",5.28, 2.20]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",7.39, 1.56]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",4.95, 0.71]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",18.00, 0.78]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",13.44, 1.96]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",2.31, 5.35]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",12.87, 15.40]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",8.80, 10.57]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",2.75, 1.37]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",4.98, 2.42]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",2.14, 2.13]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",4.72, 0.52]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",2.59, 1.45]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",1.87, 0.64]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",4.98, 1.51]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",6.90, 5.15]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",10.41, 12.59]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",2.87, 7.35]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",4.62, 4.34]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",1.99, 0.43]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",3.82, 0.44]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",13.93, 4.13]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",4.57, 1.64]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",2.25, 0.55]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",4.84, 4.33]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",3.20, 5.60]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",1.98, 7.91]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",3.56, 23.08]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",1.56, 8.26]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",3.59, 8.30]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",1.97, 28.02]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",2.55, 0.60]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",2.95, 0.31]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",17.00, 0.49]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",0.94, 0.32]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",6.16, 0.82]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",4.77, 4.12]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",1.56, 35.23]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",3.12, 0.27]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",7.60, 10.13]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",11.36, 0.36]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",5.82, 83.62]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",3.92, 3.42]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",7.26, 5.34]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",2.44, 0.34]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",2.21, 0.24]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",3.57, 0.33]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",3.90, 1.16]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",14.32, 0.48]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",2.77, 0.60]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",3.11, 0.26]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",2.41, 0.19]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",2.42, 1.91]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",4.11, 0.37]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",1.76, 0.67]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",5.89, 2.13]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",6.79, 0.79]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",3.24, 1.78]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",2.59, 1.59]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",1.39, 1.56]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",3.66, 0.22]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",21.28, 0.34]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",11.23, 0.76]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",9.43, 0.22]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",12.70, 0.27]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",27.04, 0.84]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",2.80, 0.63]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",3.35, 2.09]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",7.30, 6.20]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",4.34, 0.84]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",2.92, 1.55]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",19.02, 0.30]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",3.02, 1.03]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",2.92, 0.63]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",2.14, 1.57]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",9.16, 3.11]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",8.55, 0.61]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",6.28, 0.12]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.84, 0.12]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",1.17, 0.15]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.88, 0.09]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",3.67, 0.19]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",0.56, 0.66]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",0.95, 0.43]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",0.52, 0.28]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",0.19, 0.21]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",1.14, 0.28]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",1.33, 0.09]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",1.05, 0.19]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",0.42, 2.29]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",1.20, 2.21]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",1.74, 0.11]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",3.10, 0.10]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",1.61, 0.10]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",0.34, 0.11]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",0.40, 0.11]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",0.57, 0.17]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",0.19, 0.05]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.43, 0.07]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",1.60, 0.59]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",0.25, 0.24]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",0.31, 0.09]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.48, 0.06]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.69, 0.08]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.40, 0.15]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",2.17, 0.08]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.71, 0.10]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",0.33, 0.04]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",0.36, 0.06]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.73, 0.06]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",0.92, 0.05]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",0.79, 0.49]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",0.93, 0.08]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",0.46, 0.18]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.43, 2.48]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.73, 0.46]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",1.19, 0.07]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.56, 0.14]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",0.49, 0.07]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.59, 1.12]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",0.32, 0.12]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.50, 0.52]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",0.30, 0.06]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.73, 0.08]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",0.63, 0.06]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.37, 0.03]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",0.74, 0.33]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",0.34, 0.05]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",0.51, 0.04]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",0.52, 0.05]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",0.54, 0.04]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.86, 0.07]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",0.33, 0.04]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",0.21, 0.09]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",0.38, 0.32]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",0.30, 0.10]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",0.32, 0.09]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.46, 0.11]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.31, 0.04]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",1.62, 0.06]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",0.31, 0.09]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",0.27, 0.05]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",0.60, 0.05]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.32, 0.04]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",0.29, 0.04]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",0.35, 0.04]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",0.26, 0.03]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",0.33, 0.15]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.28, 0.37]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",0.30, 0.04]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",0.28, 0.05]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",0.49, 1.60]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.71, 0.05]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",0.39, 0.05]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",0.07, 0.05]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",1.22, 0.12]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",0.50, 0.04]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",0.73, 0.13]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",0.38, 0.05]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",0.44, 0.05]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.30, 0.29]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",0.32, 0.08]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",0.72, 0.05]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",0.92, 0.07]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.97, 0.06]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",0.51, 0.13]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.10, 0.05]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",0.53, 0.07]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",0.47, 0.08]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",1.06, 0.11]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",0.99, 0.13]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",1.18, 0.23]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",1.00, 0.14]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",1.44, 0.13]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",1.24, 0.13]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",0.98, 0.25]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",1.05, 0.82]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",4.89, 9.02]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",1.36, 9.28]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",5.63, 0.79]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",2.38, 2.04]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",2.71, 1.94]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",2.61, 0.26]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",3.18, 0.78]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",6.19, 4.62]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",5.51, 0.40]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",3.07, 0.43]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",9.48, 1.25]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",5.41, 4.88]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",6.66, 4.12]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",5.32, 2.53]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",9.10, 1.59]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",4.65, 0.31]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",29.96, 0.99]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",6.72, 0.79]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",11.52, 1.00]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",6.67, 1.21]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",3.56, 1.34]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",44.55, 1.81]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",18.69, 1.64]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",7.52, 1.18]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",11.05, 2.84]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",8.76, 29.42]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",31.90, 2.23]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",6.20, 13.14]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",8.18, 3.77]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",35.39, 1.50]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",8.41, 1.14]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",17.57, 2.42]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",4.65, 1.38]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",6.37, 2.07]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",38.01, 1.27]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",26.38, 3.32]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",10.77, 1.41]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",16.26, 1.46]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",24.38, 2.91]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",31.89, 4.74]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",17.90, 13.75]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",15.39, 4.06]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",54.93, 7.24]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",63.40, 1.48]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",142.93, 2.60]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",8.15, 8.80]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",33.50, 6.35]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",6.12, 2.19]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",8.11, 4.50]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",5.40, 1.51]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",8.24, 3.82]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",5.73, 2.32]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",5.97, 2.50]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",6.71, 1.14]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",7.45, 6.53]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",56.04, 1.61]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",13.09, 1.54]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",7.41, 1.02]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",7.98, 2.74]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",6.37, 4.41]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",25.65, 1.42]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",45.94, 9.78]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",29.76, 5.40]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",480.31, 26.74]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",76.00, 1.59]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",52.53, 2.64]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",135.28, 4.47]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",309.30, 4.85]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",174.58, 10.99]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",179.08, 5.34]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",24.19, 1.53]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",131.25, 9.93]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",156.25, 9.48]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",168.26, 14.59]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",42.21, 16.33]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",16.32, 28.97]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",11.94, 60.18]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",5.73, 13.24]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",26.47, 2.20]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",17.74, 101.08]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",7.03, 9.79]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",11.50, 2.13]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",4.22, 7.84]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",3.15, 3.99]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",15.92, 4.71]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",105.94, 45.54]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",34.41, 115.12]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",9.99, 4.50]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",12.80, 1.60]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",6.22, 4.93]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",9.77, 2.96]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",8.01, 13.78]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",9.93, 103.06]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",4.22, 67.90]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",10.02, 7.71]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",9.10, 3.35]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",18.05, 14.73]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",8.82, 4.95]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",9.44, 3.89]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",6.41, 4.83]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",13.31, 12.45]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU to RCM Traffic Network Max: 480.31 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='480'

	
        
      
	