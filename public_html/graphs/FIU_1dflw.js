
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",27.92, 29.61]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",25.98, 27.41]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",25.53, 26.97]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",26.23, 27.86]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",25.47, 26.78]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",23.20, 24.55]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",25.09, 26.54]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",30.64, 23.64]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",24.33, 25.46]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",22.76, 23.78]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",22.84, 23.98]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",21.81, 22.63]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",20.57, 21.46]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",19.97, 20.83]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",19.16, 20.14]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",17.78, 18.77]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",17.20, 17.82]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",18.00, 18.63]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",16.51, 17.18]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",15.51, 15.99]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",17.18, 17.57]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",16.20, 16.67]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",15.33, 16.10]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",15.25, 15.81]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",15.56, 16.25]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",13.85, 14.10]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",13.28, 13.57]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",14.07, 14.35]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",13.11, 13.49]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",12.87, 13.09]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",13.04, 13.34]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",12.52, 12.74]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",13.09, 13.47]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",12.47, 12.36]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",13.25, 13.76]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",12.31, 12.56]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",12.49, 12.62]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",12.13, 12.51]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",12.30, 12.43]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",12.57, 13.03]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",12.34, 12.62]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",12.17, 12.21]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",11.88, 11.85]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",13.35, 13.27]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",12.51, 12.40]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",11.59, 11.72]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",11.12, 11.24]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",11.21, 11.37]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",10.21, 10.43]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",9.87, 10.00]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",10.13, 10.15]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",10.01, 10.15]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",9.81, 10.30]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",10.26, 10.41]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",9.96, 10.34]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",9.29, 9.65]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",10.52, 10.93]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",10.83, 10.96]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",9.92, 9.86]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",9.96, 9.87]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",9.05, 8.92]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",8.83, 8.92]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",9.34, 9.42]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",9.11, 8.96]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",7.81, 7.66]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",8.04, 7.86]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",8.35, 8.27]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",9.19, 8.97]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",8.76, 8.72]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",9.00, 8.91]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",8.61, 8.66]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",8.57, 8.23]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",8.21, 8.12]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",8.22, 7.87]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",8.27, 8.01]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",8.17, 8.04]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",7.29, 7.02]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",7.95, 7.73]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",7.35, 7.23]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",7.20, 7.25]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",7.52, 7.36]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",7.85, 7.41]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",8.50, 8.26]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",7.25, 7.23]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",6.55, 6.22]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",6.57, 6.31]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",6.55, 6.38]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",6.73, 6.67]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",6.83, 6.56]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",6.86, 6.51]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",6.43, 6.36]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",6.85, 6.61]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",6.44, 6.28]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",6.51, 6.37]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",6.52, 6.23]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",6.28, 6.13]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",5.65, 5.32]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",5.40, 5.22]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",5.22, 4.95]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",5.25, 4.96]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",5.37, 5.04]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",5.94, 5.57]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",5.92, 5.72]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",6.26, 5.93]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",5.78, 5.24]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",5.36, 5.09]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",5.93, 5.38]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",5.06, 4.84]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",4.42, 4.14]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",4.71, 4.36]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",4.67, 4.25]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",4.92, 4.32]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",4.95, 4.44]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",4.96, 12.95]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",4.12, 13.61]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",4.80, 12.92]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",4.44, 12.63]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",5.21, 13.40]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",4.31, 12.12]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",4.57, 8.75]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",4.54, 7.40]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",3.99, 6.45]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",3.74, 6.30]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",3.82, 6.11]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",4.32, 6.70]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",4.23, 6.63]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",3.41, 7.45]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",3.68, 6.55]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",3.36, 3.21]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",3.64, 3.54]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",4.24, 4.01]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",3.50, 3.39]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",3.45, 3.26]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",3.10, 2.87]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",2.93, 2.70]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",3.34, 3.12]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",3.30, 3.04]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",3.27, 2.95]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",2.88, 2.67]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",3.25, 2.99]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",3.62, 3.35]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",3.50, 3.32]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",3.58, 3.41]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",3.32, 2.99]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",3.60, 3.10]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",3.53, 3.15]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",3.45, 3.12]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",3.12, 2.70]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",3.12, 2.79]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",3.31, 2.91]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",3.03, 2.73]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",3.08, 2.79]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",3.33, 3.01]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",3.58, 3.40]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",3.77, 3.34]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",3.26, 2.89]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",3.19, 2.74]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",2.83, 2.41]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",2.96, 2.49]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",2.75, 2.39]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",2.92, 2.38]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",2.98, 2.46]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",2.74, 2.32]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",3.31, 2.85]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",3.59, 3.25]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",3.63, 3.26]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",3.47, 3.05]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",3.05, 2.71]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",2.80, 2.38]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",2.83, 2.42]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",3.04, 2.60]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",3.01, 2.74]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",3.31, 2.98]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",3.32, 2.99]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",3.19, 2.89]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",3.54, 3.28]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",4.15, 3.83]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",4.02, 3.74]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",4.29, 4.15]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",4.13, 3.89]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",4.49, 4.12]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",4.81, 4.68]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",5.34, 5.07]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",5.30, 5.25]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",6.57, 6.58]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",6.79, 6.67]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",7.94, 8.09]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",10.01, 10.22]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",10.88, 11.18]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",12.95, 13.28]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",13.64, 13.99]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",13.60, 14.06]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",12.84, 13.28]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",12.83, 13.40]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",12.69, 13.40]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",12.68, 13.16]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",12.69, 13.21]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",13.30, 13.98]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",14.56, 15.00]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",13.79, 14.56]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",14.61, 14.94]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",15.38, 16.03]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",17.65, 18.53]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",20.40, 21.23]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",20.59, 21.42]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",20.34, 21.11]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",21.05, 22.20]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",22.72, 23.64]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",23.04, 24.08]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",22.07, 23.36]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",23.95, 24.90]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",23.72, 24.76]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",24.01, 25.15]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",23.50, 24.64]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",23.75, 25.16]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",24.48, 25.82]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",24.71, 26.37]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",24.11, 25.54]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",25.38, 27.04]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",24.21, 26.02]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",24.67, 25.89]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",24.97, 26.15]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",25.55, 27.00]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",25.59, 26.73]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",26.43, 27.71]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",25.59, 27.17]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",25.39, 26.73]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",25.64, 27.13]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",25.86, 27.05]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",24.98, 26.73]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",25.90, 27.45]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",26.17, 27.79]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",26.05, 27.74]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",25.78, 26.95]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",25.98, 27.44]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",25.86, 27.24]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",26.14, 27.12]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",26.55, 27.75]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",32.19, 25.96]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",24.74, 26.10]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",25.68, 27.24]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",26.47, 27.72]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",25.78, 27.28]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",25.78, 27.24]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",26.00, 27.32]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",24.62, 25.78]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",26.31, 27.95]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",24.99, 26.71]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",26.16, 27.22]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",27.76, 29.11]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",26.67, 27.88]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",27.84, 29.44]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",27.29, 28.51]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",25.74, 26.87]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",26.96, 27.96]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",26.75, 28.03]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",26.66, 27.69]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",28.69, 30.14]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",28.49, 29.81]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",28.73, 30.33]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",29.65, 31.26]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",30.31, 31.91]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",30.94, 32.72]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",31.53, 33.03]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",29.37, 31.07]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",29.27, 31.43]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",27.99, 29.63]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",27.73, 29.60]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",28.00, 29.62]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",28.93, 30.47]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",27.30, 28.67]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",27.63, 29.17]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",26.66, 28.15]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",26.76, 28.22]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",28.63, 29.95]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",28.86, 30.42]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",27.19, 28.87]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",27.03, 28.32]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",27.87, 29.26]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",28.57, 30.36]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",26.42, 27.92]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",26.67, 28.34]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",26.12, 27.65]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",25.67, 26.76]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",27.68, 29.18]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",27.42, 28.69]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU Traffic Flows Max: 33.03 KB Min: 2.32 KB'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='33'

	
        
      
	