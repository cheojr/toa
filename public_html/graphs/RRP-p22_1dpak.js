
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",0.01, 0.07]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",0.02, 0.08]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",0.02, 0.05]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",6.33, 0.05]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",0.01, 0.06]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",0.07, 0.15]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",12.43, 3.42]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",0.02, 0.04]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",0.14, 0.18]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",0.22, 7.97]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",0.01, 0.01]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",0.07, 0.10]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",5.37, 1.91]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",0.00, 0.18]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",0.01, 0.01]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",0.07, 0.04]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",0.06, 0.06]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",0.11, 0.11]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",0.05, 0.03]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",14.45, 0.04]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",0.04, 0.04]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",0.19, 0.28]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",0.00, 8.28]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",0.23, 0.30]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",0.05, 0.09]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",8.03, 4.14]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",0.02, 1.35]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",0.00, 0.01]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",3.54, 3.30]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",4.15, 3.93]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",7.22, 5.61]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",2.87, 2.71]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",20.03, 1.40]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",1.52, 2.23]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",1.22, 0.06]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",0.09, 11.09]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",0.05, 0.04]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",0.29, 0.17]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",0.26, 0.22]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",0.10, 1.67]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",0.15, 0.11]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",0.24, 0.21]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",0.16, 0.12]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",0.16, 0.09]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",9.28, 0.15]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",0.13, 0.08]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",0.18, 0.19]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",0.16, 5.23]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",0.09, 0.28]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",0.18, 0.18]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",0.01, 0.01]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",0.07, 0.07]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",0.34, 0.50]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",0.12, 0.13]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",0.01, 0.02]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",0.03, 0.03]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",9.19, 0.02]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",0.25, 0.34]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",3.18, 1.82]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",0.30, 5.38]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",0.19, 0.13]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",0.22, 0.31]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",0.25, 0.28]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",0.17, 0.20]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",0.22, 0.28]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",0.22, 0.24]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",0.40, 0.73]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",0.35, 0.27]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",10.31, 0.31]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",0.10, 0.13]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",0.31, 0.33]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",0.27, 6.83]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",0.12, 0.12]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",0.18, 0.18]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",0.12, 0.11]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",0.11, 0.08]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",0.08, 0.14]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",0.18, 0.24]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",0.07, 0.10]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",0.16, 0.19]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",8.84, 0.28]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",0.15, 0.16]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",0.18, 0.26]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",0.08, 4.84]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",0.02, 0.26]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",4.76, 2.94]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.13, 0.20]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",3.59, 6.71]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.37, 0.56]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",0.46, 1.40]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",3.07, 3.86]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",3.14, 2.93]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",12.32, 3.04]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",2.90, 2.68]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",2.84, 3.14]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",3.18, 7.90]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",2.18, 1.86]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",2.16, 2.03]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",1.98, 1.78]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",1.58, 1.39]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",1.68, 2.89]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",1.70, 1.49]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",1.15, 1.21]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",9.01, 5.36]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",8.86, 0.64]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",1.32, 1.26]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.59, 0.54]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",0.41, 4.58]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",0.45, 0.47]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",0.45, 0.46]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.34, 0.30]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.22, 0.27]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.33, 0.39]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",0.16, 0.17]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.57, 0.43]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",9.36, 6.78]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",8.75, 1.49]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.19, 0.28]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",1.40, 1.10]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",0.16, 5.43]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",0.15, 0.18]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",0.15, 0.16]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.28, 0.38]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.22, 0.18]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",0.25, 0.39]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.11, 0.16]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",0.14, 0.18]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.18, 0.19]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",6.51, 0.05]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.05, 0.86]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",6.13, 3.97]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.97, 3.63]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",0.11, 0.37]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.08, 0.09]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",0.06, 0.09]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",25.59, 12.66]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",0.08, 0.13]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",0.02, 1.59]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",0.06, 0.07]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.04, 0.04]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",5.26, 0.03]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",0.02, 0.03]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",5.20, 3.19]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",0.16, 0.21]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",0.06, 0.07]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.13, 0.14]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.06, 0.10]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",25.83, 12.66]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",0.47, 0.37]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",0.34, 3.03]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",0.00, 1.21]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.37, 0.11]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",5.68, 0.32]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",0.10, 0.12]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",5.56, 3.80]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",0.28, 0.30]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.02, 0.05]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",0.04, 0.05]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",0.04, 0.05]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",25.62, 12.62]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.07, 0.10]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",0.01, 3.19]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",0.01, 0.02]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",0.06, 0.20]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",5.66, 0.02]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",0.05, 0.45]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",5.98, 3.65]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",1.12, 0.88]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.58, 0.98]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",0.23, 0.24]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",0.14, 0.68]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",26.27, 12.65]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.24, 0.36]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",0.17, 3.23]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.09, 0.14]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",0.00, 0.03]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",5.77, 0.02]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",0.03, 0.06]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",5.93, 3.43]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",0.01, 0.03]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",0.00, 0.01]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",0.00, 0.02]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",0.01, 0.02]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",25.63, 12.50]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",3.22, 2.06]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",0.00, 3.31]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",0.00, 0.01]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",1.06, 1.97]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",5.77, 0.02]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",0.02, 0.03]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",0.15, 0.17]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",0.00, 0.02]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",0.00, 0.02]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",0.01, 0.03]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",0.00, 0.02]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",0.00, 0.02]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",26.15, 12.77]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",0.02, 0.05]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",0.03, 3.54]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",0.00, 0.01]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",0.05, 0.14]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",6.50, 1.44]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",0.00, 0.02]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",15.79, 7.62]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",0.00, 0.02]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",0.04, 0.06]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",0.04, 0.07]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",0.00, 0.03]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",0.01, 0.02]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",0.07, 0.09]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",0.00, 0.02]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",0.01, 5.11]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",0.00, 0.17]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",8.29, 0.23]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",1.39, 0.21]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",147.93, 72.39]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",0.35, 0.37]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",0.01, 0.01]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",0.15, 0.42]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",0.00, 5.52]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",4.02, 0.11]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",70.85, 35.76]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",1.02, 0.09]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",0.46, 0.29]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",0.02, 4.45]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",0.23, 0.14]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",7.67, 0.75]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",0.00, 0.02]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",1.61, 1.43]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",0.20, 0.68]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",0.07, 0.27]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",0.27, 0.09]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",0.23, 0.18]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",0.01, 0.02]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",0.01, 0.01]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",0.01, 0.04]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",0.04, 4.38]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",0.01, 0.76]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",26.10, 8.13]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",2.74, 1.33]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",0.07, 0.27]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",15.22, 27.10]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",0.61, 3.10]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",0.07, 0.12]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",0.13, 0.14]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",0.09, 0.31]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",0.08, 0.11]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",0.09, 0.21]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",0.31, 0.52]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",0.08, 0.10]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",0.10, 0.15]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",7.45, 0.25]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",0.12, 0.16]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",2.18, 0.94]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",0.08, 4.99]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",0.00, 0.35]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",0.06, 0.15]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",0.01, 0.05]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",2.24, 0.06]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",0.01, 0.05]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",0.01, 0.07]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",0.03, 0.08]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",0.07, 0.14]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",9.51, 5.81]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",0.19, 0.05]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",1.50, 0.97]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",0.31, 0.27]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",0.58, 5.02]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",3.10, 1.57]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",0.48, 0.43]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",0.38, 0.65]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",0.31, 0.27]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",0.08, 0.13]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",0.02, 0.19]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",0.19, 0.23]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",2.47, 1.25]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",8.14, 0.05]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",0.06, 0.99]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",0.01, 4.06]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",0.10, 0.45]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",3.03, 0.14]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",0.24, 1.83]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",0.01, 0.02]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",0.42, 0.95]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",0.23, 0.02]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",0.12, 0.02]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='RRP-22 Traffic Packets Max: 147.93 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='147'

	
        
      
	