
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'26 14:50:00'", "'2014-03-26 14:50:00'",6.54, 5.83]);  data.addRow(["'26 15:20:00'", "'2014-03-26 15:20:00'",7.83, 7.03]);  data.addRow(["'26 15:50:00'", "'2014-03-26 15:50:00'",5.69, 5.31]);  data.addRow(["'26 16:20:00'", "'2014-03-26 16:20:00'",4.95, 4.64]);  data.addRow(["'26 16:50:00'", "'2014-03-26 16:50:00'",3.85, 3.63]);  data.addRow(["'26 17:20:00'", "'2014-03-26 17:20:00'",3.61, 3.40]);  data.addRow(["'26 17:50:00'", "'2014-03-26 17:50:00'",3.15, 2.99]);  data.addRow(["'26 18:20:00'", "'2014-03-26 18:20:00'",3.19, 3.00]);  data.addRow(["'26 18:50:00'", "'2014-03-26 18:50:00'",3.18, 2.97]);  data.addRow(["'26 19:20:00'", "'2014-03-26 19:20:00'",2.97, 2.78]);  data.addRow(["'26 19:50:00'", "'2014-03-26 19:50:00'",2.89, 2.73]);  data.addRow(["'26 20:20:00'", "'2014-03-26 20:20:00'",2.60, 2.45]);  data.addRow(["'26 20:50:00'", "'2014-03-26 20:50:00'",2.34, 2.24]);  data.addRow(["'26 21:20:00'", "'2014-03-26 21:20:00'",2.19, 2.04]);  data.addRow(["'26 21:50:00'", "'2014-03-26 21:50:00'",2.29, 2.18]);  data.addRow(["'26 22:20:00'", "'2014-03-26 22:20:00'",2.19, 2.05]);  data.addRow(["'26 22:50:00'", "'2014-03-26 22:50:00'",2.02, 1.95]);  data.addRow(["'26 23:20:00'", "'2014-03-26 23:20:00'",1.86, 1.75]);  data.addRow(["'26 23:50:00'", "'2014-03-26 23:50:00'",1.72, 1.63]);  data.addRow(["'27 00:20:00'", "'2014-03-27 00:20:00'",1.40, 1.41]);  data.addRow(["'27 00:50:00'", "'2014-03-27 00:50:00'",1.36, 1.35]);  data.addRow(["'27 01:20:00'", "'2014-03-27 01:20:00'",1.20, 1.25]);  data.addRow(["'27 01:50:00'", "'2014-03-27 01:50:00'",1.04, 1.10]);  data.addRow(["'27 02:20:00'", "'2014-03-27 02:20:00'",0.89, 0.97]);  data.addRow(["'27 02:50:00'", "'2014-03-27 02:50:00'",3.15, 3.94]);  data.addRow(["'27 03:20:00'", "'2014-03-27 03:20:00'",2.03, 2.21]);  data.addRow(["'27 03:50:00'", "'2014-03-27 03:50:00'",0.66, 0.74]);  data.addRow(["'27 04:20:00'", "'2014-03-27 04:20:00'",0.57, 0.67]);  data.addRow(["'27 04:50:00'", "'2014-03-27 04:50:00'",0.56, 0.67]);  data.addRow(["'27 05:20:00'", "'2014-03-27 05:20:00'",0.58, 0.71]);  data.addRow(["'27 05:50:00'", "'2014-03-27 05:50:00'",0.61, 0.72]);  data.addRow(["'27 06:20:00'", "'2014-03-27 06:20:00'",0.62, 0.72]);  data.addRow(["'27 06:50:00'", "'2014-03-27 06:50:00'",0.96, 1.04]);  data.addRow(["'27 07:20:00'", "'2014-03-27 07:20:00'",1.47, 1.54]);  data.addRow(["'27 07:50:00'", "'2014-03-27 07:50:00'",2.25, 2.21]);  data.addRow(["'27 08:20:00'", "'2014-03-27 08:20:00'",2.45, 2.42]);  data.addRow(["'27 08:50:00'", "'2014-03-27 08:50:00'",3.81, 3.68]);  data.addRow(["'27 09:20:00'", "'2014-03-27 09:20:00'",4.43, 4.28]);  data.addRow(["'27 09:50:00'", "'2014-03-27 09:50:00'",4.76, 4.55]);  data.addRow(["'27 10:20:00'", "'2014-03-27 10:20:00'",4.62, 4.49]);  data.addRow(["'27 10:50:00'", "'2014-03-27 10:50:00'",5.16, 4.95]);  data.addRow(["'27 11:20:00'", "'2014-03-27 11:20:00'",5.32, 4.99]);  data.addRow(["'27 11:50:00'", "'2014-03-27 11:50:00'",4.76, 4.55]);  data.addRow(["'27 12:20:00'", "'2014-03-27 12:20:00'",4.73, 4.45]);  data.addRow(["'27 12:50:00'", "'2014-03-27 12:50:00'",5.14, 4.80]);  data.addRow(["'27 13:20:00'", "'2014-03-27 13:20:00'",5.01, 4.75]);  data.addRow(["'27 13:50:00'", "'2014-03-27 13:50:00'",5.19, 4.79]);  data.addRow(["'27 14:20:00'", "'2014-03-27 14:20:00'",5.31, 4.96]);  data.addRow(["'27 14:50:00'", "'2014-03-27 14:50:00'",4.97, 4.72]);  data.addRow(["'27 15:20:00'", "'2014-03-27 15:20:00'",5.00, 4.91]);  data.addRow(["'27 15:50:00'", "'2014-03-27 15:50:00'",4.90, 4.56]);  data.addRow(["'27 16:20:00'", "'2014-03-27 16:20:00'",4.76, 4.47]);  data.addRow(["'27 16:50:00'", "'2014-03-27 16:50:00'",3.99, 3.83]);  data.addRow(["'27 17:20:00'", "'2014-03-27 17:20:00'",3.41, 3.26]);  data.addRow(["'27 17:50:00'", "'2014-03-27 17:50:00'",2.93, 2.81]);  data.addRow(["'27 18:20:00'", "'2014-03-27 18:20:00'",2.89, 2.71]);  data.addRow(["'27 18:50:00'", "'2014-03-27 18:50:00'",2.93, 2.76]);  data.addRow(["'27 19:20:00'", "'2014-03-27 19:20:00'",2.69, 2.49]);  data.addRow(["'27 19:50:00'", "'2014-03-27 19:50:00'",4.14, 3.76]);  data.addRow(["'27 20:20:00'", "'2014-03-27 20:20:00'",4.25, 3.94]);  data.addRow(["'27 20:50:00'", "'2014-03-27 20:50:00'",3.74, 3.48]);  data.addRow(["'27 21:20:00'", "'2014-03-27 21:20:00'",3.52, 3.23]);  data.addRow(["'27 21:50:00'", "'2014-03-27 21:50:00'",3.35, 3.13]);  data.addRow(["'27 22:20:00'", "'2014-03-27 22:20:00'",2.91, 2.67]);  data.addRow(["'27 22:50:00'", "'2014-03-27 22:50:00'",2.92, 2.58]);  data.addRow(["'27 23:20:00'", "'2014-03-27 23:20:00'",2.67, 2.40]);  data.addRow(["'27 23:50:00'", "'2014-03-27 23:50:00'",2.49, 2.29]);  data.addRow(["'28 00:20:00'", "'2014-03-28 00:20:00'",2.01, 1.90]);  data.addRow(["'28 00:50:00'", "'2014-03-28 00:50:00'",1.81, 1.77]);  data.addRow(["'28 01:20:00'", "'2014-03-28 01:20:00'",1.61, 1.58]);  data.addRow(["'28 01:50:00'", "'2014-03-28 01:50:00'",1.51, 1.40]);  data.addRow(["'28 02:20:00'", "'2014-03-28 02:20:00'",0.81, 0.89]);  data.addRow(["'28 02:50:00'", "'2014-03-28 02:50:00'",0.70, 0.77]);  data.addRow(["'28 03:20:00'", "'2014-03-28 03:20:00'",1.14, 1.17]);  data.addRow(["'28 03:50:00'", "'2014-03-28 03:50:00'",1.17, 1.21]);  data.addRow(["'28 04:20:00'", "'2014-03-28 04:20:00'",0.99, 1.03]);  data.addRow(["'28 04:50:00'", "'2014-03-28 04:50:00'",0.94, 1.00]);  data.addRow(["'28 05:20:00'", "'2014-03-28 05:20:00'",0.92, 1.01]);  data.addRow(["'28 05:50:00'", "'2014-03-28 05:50:00'",0.99, 1.10]);  data.addRow(["'28 06:20:00'", "'2014-03-28 06:20:00'",1.06, 1.14]);  data.addRow(["'28 06:50:00'", "'2014-03-28 06:50:00'",1.29, 1.31]);  data.addRow(["'28 07:20:00'", "'2014-03-28 07:20:00'",1.79, 1.82]);  data.addRow(["'28 07:50:00'", "'2014-03-28 07:50:00'",2.91, 2.86]);  data.addRow(["'28 08:20:00'", "'2014-03-28 08:20:00'",3.97, 3.79]);  data.addRow(["'28 08:50:00'", "'2014-03-28 08:50:00'",4.83, 4.58]);  data.addRow(["'28 09:20:00'", "'2014-03-28 09:20:00'",5.90, 5.59]);  data.addRow(["'28 09:50:00'", "'2014-03-28 09:50:00'",4.49, 4.29]);  data.addRow(["'28 10:20:00'", "'2014-03-28 10:20:00'",3.50, 3.43]);  data.addRow(["'28 10:50:00'", "'2014-03-28 10:50:00'",4.48, 4.31]);  data.addRow(["'28 11:20:00'", "'2014-03-28 11:20:00'",3.93, 3.77]);  data.addRow(["'28 11:50:00'", "'2014-03-28 11:50:00'",3.83, 3.65]);  data.addRow(["'28 12:20:00'", "'2014-03-28 12:20:00'",3.32, 3.20]);  data.addRow(["'28 12:50:00'", "'2014-03-28 12:50:00'",3.41, 3.32]);  data.addRow(["'28 13:20:00'", "'2014-03-28 13:20:00'",3.51, 3.36]);  data.addRow(["'28 13:50:00'", "'2014-03-28 13:50:00'",3.84, 3.72]);  data.addRow(["'28 14:20:00'", "'2014-03-28 14:20:00'",3.90, 3.71]);  data.addRow(["'28 14:50:00'", "'2014-03-28 14:50:00'",3.34, 3.28]);  data.addRow(["'28 15:20:00'", "'2014-03-28 15:20:00'",2.55, 2.51]);  data.addRow(["'28 15:50:00'", "'2014-03-28 15:50:00'",2.42, 2.37]);  data.addRow(["'28 16:20:00'", "'2014-03-28 16:20:00'",2.61, 2.66]);  data.addRow(["'28 16:50:00'", "'2014-03-28 16:50:00'",2.63, 2.73]);  data.addRow(["'28 17:20:00'", "'2014-03-28 17:20:00'",2.11, 2.16]);  data.addRow(["'28 17:50:00'", "'2014-03-28 17:50:00'",2.02, 2.04]);  data.addRow(["'28 18:20:00'", "'2014-03-28 18:20:00'",1.71, 1.73]);  data.addRow(["'28 18:50:00'", "'2014-03-28 18:50:00'",1.49, 1.54]);  data.addRow(["'28 19:20:00'", "'2014-03-28 19:20:00'",1.40, 1.41]);  data.addRow(["'28 19:50:00'", "'2014-03-28 19:50:00'",1.40, 1.43]);  data.addRow(["'28 20:20:00'", "'2014-03-28 20:20:00'",1.17, 1.27]);  data.addRow(["'28 20:50:00'", "'2014-03-28 20:50:00'",1.22, 1.26]);  data.addRow(["'28 21:20:00'", "'2014-03-28 21:20:00'",0.96, 1.05]);  data.addRow(["'28 21:50:00'", "'2014-03-28 21:50:00'",1.14, 1.19]);  data.addRow(["'28 22:20:00'", "'2014-03-28 22:20:00'",0.98, 1.05]);  data.addRow(["'28 22:50:00'", "'2014-03-28 22:50:00'",1.04, 1.12]);  data.addRow(["'28 23:20:00'", "'2014-03-28 23:20:00'",0.94, 0.98]);  data.addRow(["'28 23:50:00'", "'2014-03-28 23:50:00'",0.93, 0.92]);  data.addRow(["'29 00:20:00'", "'2014-03-29 00:20:00'",0.84, 0.85]);  data.addRow(["'29 00:50:00'", "'2014-03-29 00:50:00'",0.89, 0.90]);  data.addRow(["'29 01:20:00'", "'2014-03-29 01:20:00'",0.76, 0.77]);  data.addRow(["'29 01:50:00'", "'2014-03-29 01:50:00'",0.78, 0.86]);  data.addRow(["'29 02:20:00'", "'2014-03-29 02:20:00'",0.63, 0.72]);  data.addRow(["'29 02:50:00'", "'2014-03-29 02:50:00'",0.53, 0.64]);  data.addRow(["'29 03:20:00'", "'2014-03-29 03:20:00'",0.48, 0.54]);  data.addRow(["'29 03:50:00'", "'2014-03-29 03:50:00'",0.39, 0.50]);  data.addRow(["'29 04:20:00'", "'2014-03-29 04:20:00'",0.43, 0.55]);  data.addRow(["'29 04:50:00'", "'2014-03-29 04:50:00'",0.37, 0.49]);  data.addRow(["'29 05:20:00'", "'2014-03-29 05:20:00'",0.38, 0.51]);  data.addRow(["'29 05:50:00'", "'2014-03-29 05:50:00'",0.35, 0.47]);  data.addRow(["'29 06:20:00'", "'2014-03-29 06:20:00'",0.43, 0.56]);  data.addRow(["'29 06:50:00'", "'2014-03-29 06:50:00'",0.36, 0.47]);  data.addRow(["'29 07:20:00'", "'2014-03-29 07:20:00'",0.45, 0.55]);  data.addRow(["'29 07:50:00'", "'2014-03-29 07:50:00'",0.51, 0.61]);  data.addRow(["'29 08:20:00'", "'2014-03-29 08:20:00'",0.56, 0.66]);  data.addRow(["'29 08:50:00'", "'2014-03-29 08:50:00'",0.66, 0.75]);  data.addRow(["'29 09:20:00'", "'2014-03-29 09:20:00'",0.77, 0.87]);  data.addRow(["'29 09:50:00'", "'2014-03-29 09:50:00'",0.87, 0.95]);  data.addRow(["'29 10:20:00'", "'2014-03-29 10:20:00'",0.97, 1.04]);  data.addRow(["'29 10:50:00'", "'2014-03-29 10:50:00'",1.02, 1.08]);  data.addRow(["'29 11:20:00'", "'2014-03-29 11:20:00'",1.33, 1.36]);  data.addRow(["'29 11:50:00'", "'2014-03-29 11:50:00'",1.28, 1.30]);  data.addRow(["'29 12:20:00'", "'2014-03-29 12:20:00'",1.41, 1.40]);  data.addRow(["'29 12:50:00'", "'2014-03-29 12:50:00'",1.51, 1.55]);  data.addRow(["'29 13:20:00'", "'2014-03-29 13:20:00'",1.45, 1.45]);  data.addRow(["'29 13:50:00'", "'2014-03-29 13:50:00'",1.80, 1.83]);  data.addRow(["'29 14:20:00'", "'2014-03-29 14:20:00'",1.85, 1.87]);  data.addRow(["'29 14:50:00'", "'2014-03-29 14:50:00'",2.11, 2.12]);  data.addRow(["'29 15:20:00'", "'2014-03-29 15:20:00'",2.06, 2.05]);  data.addRow(["'29 15:50:00'", "'2014-03-29 15:50:00'",1.90, 1.90]);  data.addRow(["'29 16:20:00'", "'2014-03-29 16:20:00'",1.86, 1.84]);  data.addRow(["'29 16:50:00'", "'2014-03-29 16:50:00'",1.63, 1.65]);  data.addRow(["'29 17:20:00'", "'2014-03-29 17:20:00'",1.39, 1.43]);  data.addRow(["'29 17:50:00'", "'2014-03-29 17:50:00'",1.17, 1.21]);  data.addRow(["'29 18:20:00'", "'2014-03-29 18:20:00'",1.23, 1.29]);  data.addRow(["'29 18:50:00'", "'2014-03-29 18:50:00'",1.17, 1.21]);  data.addRow(["'29 19:20:00'", "'2014-03-29 19:20:00'",1.03, 1.07]);  data.addRow(["'29 19:50:00'", "'2014-03-29 19:50:00'",0.95, 1.01]);  data.addRow(["'29 20:20:00'", "'2014-03-29 20:20:00'",1.03, 1.07]);  data.addRow(["'29 20:50:00'", "'2014-03-29 20:50:00'",0.99, 1.06]);  data.addRow(["'29 21:20:00'", "'2014-03-29 21:20:00'",0.95, 1.00]);  data.addRow(["'29 21:50:00'", "'2014-03-29 21:50:00'",0.92, 0.96]);  data.addRow(["'29 22:20:00'", "'2014-03-29 22:20:00'",0.61, 0.61]);  data.addRow(["'29 22:50:00'", "'2014-03-29 22:50:00'",0.00, 0.00]);  data.addRow(["'29 23:20:00'", "'2014-03-29 23:20:00'",0.00, 0.00]);  data.addRow(["'29 23:50:00'", "'2014-03-29 23:50:00'",0.00, 0.00]);  data.addRow(["'30 00:20:00'", "'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow(["'30 00:50:00'", "'2014-03-30 00:50:00'",0.00, 0.00]);  data.addRow(["'30 01:20:00'", "'2014-03-30 01:20:00'",0.00, 0.00]);  data.addRow(["'30 01:50:00'", "'2014-03-30 01:50:00'",0.00, 0.00]);  data.addRow(["'30 02:20:00'", "'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow(["'30 02:50:00'", "'2014-03-30 02:50:00'",0.00, 0.00]);  data.addRow(["'30 03:20:00'", "'2014-03-30 03:20:00'",0.00, 0.00]);  data.addRow(["'30 03:50:00'", "'2014-03-30 03:50:00'",0.00, 0.00]);  data.addRow(["'30 04:20:00'", "'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow(["'30 04:50:00'", "'2014-03-30 04:50:00'",0.00, 0.00]);  data.addRow(["'30 05:20:00'", "'2014-03-30 05:20:00'",0.00, 0.00]);  data.addRow(["'30 05:50:00'", "'2014-03-30 05:50:00'",0.00, 0.00]);  data.addRow(["'30 06:20:00'", "'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow(["'30 06:50:00'", "'2014-03-30 06:50:00'",0.00, 0.00]);  data.addRow(["'30 07:20:00'", "'2014-03-30 07:20:00'",0.00, 0.00]);  data.addRow(["'30 07:50:00'", "'2014-03-30 07:50:00'",0.00, 0.00]);  data.addRow(["'30 08:20:00'", "'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow(["'30 08:50:00'", "'2014-03-30 08:50:00'",0.00, 0.00]);  data.addRow(["'30 09:20:00'", "'2014-03-30 09:20:00'",0.00, 0.00]);  data.addRow(["'30 09:50:00'", "'2014-03-30 09:50:00'",0.00, 0.00]);  data.addRow(["'30 10:20:00'", "'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow(["'30 10:50:00'", "'2014-03-30 10:50:00'",0.00, 0.00]);  data.addRow(["'30 11:20:00'", "'2014-03-30 11:20:00'",0.00, 0.00]);  data.addRow(["'30 11:50:00'", "'2014-03-30 11:50:00'",0.00, 0.00]);  data.addRow(["'30 12:20:00'", "'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow(["'30 12:50:00'", "'2014-03-30 12:50:00'",0.00, 0.00]);  data.addRow(["'30 13:20:00'", "'2014-03-30 13:20:00'",0.00, 0.00]);  data.addRow(["'30 13:50:00'", "'2014-03-30 13:50:00'",0.00, 0.00]);  data.addRow(["'30 14:20:00'", "'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow(["'30 14:50:00'", "'2014-03-30 14:50:00'",0.00, 0.00]);  data.addRow(["'30 15:20:00'", "'2014-03-30 15:20:00'",0.00, 0.00]);  data.addRow(["'30 15:50:00'", "'2014-03-30 15:50:00'",0.00, 0.00]);  data.addRow(["'30 16:20:00'", "'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow(["'30 16:50:00'", "'2014-03-30 16:50:00'",0.00, 0.00]);  data.addRow(["'30 17:20:00'", "'2014-03-30 17:20:00'",0.00, 0.00]);  data.addRow(["'30 17:50:00'", "'2014-03-30 17:50:00'",0.00, 0.00]);  data.addRow(["'30 18:20:00'", "'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow(["'30 18:50:00'", "'2014-03-30 18:50:00'",0.00, 0.00]);  data.addRow(["'30 19:20:00'", "'2014-03-30 19:20:00'",0.00, 0.00]);  data.addRow(["'30 19:50:00'", "'2014-03-30 19:50:00'",0.00, 0.00]);  data.addRow(["'30 20:20:00'", "'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow(["'30 20:50:00'", "'2014-03-30 20:50:00'",0.00, 0.00]);  data.addRow(["'30 21:20:00'", "'2014-03-30 21:20:00'",0.00, 0.00]);  data.addRow(["'30 21:50:00'", "'2014-03-30 21:50:00'",0.00, 0.00]);  data.addRow(["'30 22:20:00'", "'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow(["'30 22:50:00'", "'2014-03-30 22:50:00'",0.00, 0.00]);  data.addRow(["'30 23:20:00'", "'2014-03-30 23:20:00'",0.00, 0.00]);  data.addRow(["'30 23:50:00'", "'2014-03-30 23:50:00'",0.00, 0.00]);  data.addRow(["'31 00:20:00'", "'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow(["'31 00:50:00'", "'2014-03-31 00:50:00'",0.00, 0.00]);  data.addRow(["'31 01:20:00'", "'2014-03-31 01:20:00'",0.00, 0.00]);  data.addRow(["'31 01:50:00'", "'2014-03-31 01:50:00'",0.00, 0.00]);  data.addRow(["'31 02:20:00'", "'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow(["'31 02:50:00'", "'2014-03-31 02:50:00'",0.00, 0.00]);  data.addRow(["'31 03:20:00'", "'2014-03-31 03:20:00'",0.00, 0.00]);  data.addRow(["'31 03:50:00'", "'2014-03-31 03:50:00'",0.00, 0.00]);  data.addRow(["'31 04:20:00'", "'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow(["'31 04:50:00'", "'2014-03-31 04:50:00'",0.00, 0.00]);  data.addRow(["'31 05:20:00'", "'2014-03-31 05:20:00'",0.00, 0.00]);  data.addRow(["'31 05:50:00'", "'2014-03-31 05:50:00'",0.00, 0.00]);  data.addRow(["'31 06:20:00'", "'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow(["'31 06:50:00'", "'2014-03-31 06:50:00'",0.00, 0.00]);  data.addRow(["'31 07:20:00'", "'2014-03-31 07:20:00'",0.00, 0.00]);  data.addRow(["'31 07:50:00'", "'2014-03-31 07:50:00'",0.00, 0.00]);  data.addRow(["'31 08:20:00'", "'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow(["'31 08:50:00'", "'2014-03-31 08:50:00'",0.00, 0.00]);  data.addRow(["'31 09:20:00'", "'2014-03-31 09:20:00'",0.00, 0.00]);  data.addRow(["'31 09:50:00'", "'2014-03-31 09:50:00'",0.00, 0.00]);  data.addRow(["'31 10:20:00'", "'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow(["'31 10:50:00'", "'2014-03-31 10:50:00'",0.00, 0.00]);  data.addRow(["'31 11:20:00'", "'2014-03-31 11:20:00'",0.00, 0.00]);  data.addRow(["'31 11:50:00'", "'2014-03-31 11:50:00'",0.00, 0.00]);  data.addRow(["'31 12:20:00'", "'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow(["'31 12:50:00'", "'2014-03-31 12:50:00'",0.00, 0.00]);  data.addRow(["'31 13:20:00'", "'2014-03-31 13:20:00'",0.00, 0.00]);  data.addRow(["'31 13:50:00'", "'2014-03-31 13:50:00'",0.00, 0.00]);  data.addRow(["'31 14:20:00'", "'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow(["'31 14:50:00'", "'2014-03-31 14:50:00'",0.00, 0.00]);  data.addRow(["'31 15:20:00'", "'2014-03-31 15:20:00'",0.00, 0.00]);  data.addRow(["'31 15:50:00'", "'2014-03-31 15:50:00'",0.00, 0.00]);  data.addRow(["'31 16:20:00'", "'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow(["'31 16:50:00'", "'2014-03-31 16:50:00'",0.00, 0.00]);  data.addRow(["'31 17:20:00'", "'2014-03-31 17:20:00'",0.00, 0.00]);  data.addRow(["'31 17:50:00'", "'2014-03-31 17:50:00'",0.00, 0.00]);  data.addRow(["'31 18:20:00'", "'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow(["'31 18:50:00'", "'2014-03-31 18:50:00'",0.00, 0.00]);  data.addRow(["'31 19:20:00'", "'2014-03-31 19:20:00'",0.00, 0.00]);  data.addRow(["'31 19:50:00'", "'2014-03-31 19:50:00'",0.00, 0.00]);  data.addRow(["'31 20:20:00'", "'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow(["'31 20:50:00'", "'2014-03-31 20:50:00'",0.00, 0.00]);  data.addRow(["'31 21:20:00'", "'2014-03-31 21:20:00'",0.00, 0.00]);  data.addRow(["'31 21:50:00'", "'2014-03-31 21:50:00'",0.00, 0.00]);  data.addRow(["'31 22:20:00'", "'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow(["'31 22:50:00'", "'2014-03-31 22:50:00'",0.00, 0.00]);  data.addRow(["'31 23:20:00'", "'2014-03-31 23:20:00'",0.00, 0.00]);  data.addRow(["'31 23:50:00'", "'2014-03-31 23:50:00'",0.00, 0.00]);  data.addRow(["'01 00:20:00'", "'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow(["'01 00:50:00'", "'2014-04-01 00:50:00'",0.00, 0.00]);  data.addRow(["'01 01:20:00'", "'2014-04-01 01:20:00'",0.00, 0.00]);  data.addRow(["'01 01:50:00'", "'2014-04-01 01:50:00'",0.00, 0.00]);  data.addRow(["'01 02:20:00'", "'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow(["'01 02:50:00'", "'2014-04-01 02:50:00'",0.00, 0.00]);  data.addRow(["'01 03:20:00'", "'2014-04-01 03:20:00'",0.00, 0.00]);  data.addRow(["'01 03:50:00'", "'2014-04-01 03:50:00'",0.00, 0.00]);  data.addRow(["'01 04:20:00'", "'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow(["'01 04:50:00'", "'2014-04-01 04:50:00'",0.00, 0.00]);  data.addRow(["'01 05:20:00'", "'2014-04-01 05:20:00'",0.00, 0.00]);  data.addRow(["'01 05:50:00'", "'2014-04-01 05:50:00'",0.00, 0.00]);  data.addRow(["'01 06:20:00'", "'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow(["'01 06:50:00'", "'2014-04-01 06:50:00'",0.00, 0.00]);  data.addRow(["'01 07:20:00'", "'2014-04-01 07:20:00'",0.00, 0.00]);  data.addRow(["'01 07:50:00'", "'2014-04-01 07:50:00'",0.00, 0.00]);  data.addRow(["'01 08:20:00'", "'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow(["'01 08:50:00'", "'2014-04-01 08:50:00'",0.00, 0.00]);  data.addRow(["'01 09:20:00'", "'2014-04-01 09:20:00'",0.00, 0.00]);  data.addRow(["'01 09:50:00'", "'2014-04-01 09:50:00'",0.00, 0.00]);  data.addRow(["'01 10:20:00'", "'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow(["'01 10:50:00'", "'2014-04-01 10:50:00'",0.00, 0.00]);  data.addRow(["'01 11:20:00'", "'2014-04-01 11:20:00'",0.00, 0.00]);  data.addRow(["'01 11:50:00'", "'2014-04-01 11:50:00'",0.00, 0.00]);  data.addRow(["'01 12:20:00'", "'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow(["'01 12:50:00'", "'2014-04-01 12:50:00'",0.00, 0.00]);  data.addRow(["'01 13:20:00'", "'2014-04-01 13:20:00'",4.58, 4.44]);  data.addRow(["'01 13:50:00'", "'2014-04-01 13:50:00'",6.93, 6.60]);  data.addRow(["'01 14:20:00'", "'2014-04-01 14:20:00'",6.85, 6.47]);  data.addRow(["'01 14:50:00'", "'2014-04-01 14:50:00'",6.78, 6.49]);  data.addRow(["'01 15:20:00'", "'2014-04-01 15:20:00'",6.63, 6.36]);  data.addRow(["'01 15:50:00'", "'2014-04-01 15:50:00'",6.17, 5.90]);  data.addRow(["'01 16:20:00'", "'2014-04-01 16:20:00'",5.57, 5.31]);  data.addRow(["'01 16:50:00'", "'2014-04-01 16:50:00'",4.78, 4.57]);  data.addRow(["'01 17:20:00'", "'2014-04-01 17:20:00'",3.91, 3.80]);  data.addRow(["'01 17:50:00'", "'2014-04-01 17:50:00'",3.37, 3.26]);  data.addRow(["'01 18:20:00'", "'2014-04-01 18:20:00'",3.39, 3.29]);  data.addRow(["'01 18:50:00'", "'2014-04-01 18:50:00'",3.49, 3.39]);  data.addRow(["'01 19:20:00'", "'2014-04-01 19:20:00'",3.37, 3.28]);  data.addRow(["'01 19:50:00'", "'2014-04-01 19:50:00'",3.69, 3.58]);  data.addRow(["'01 20:20:00'", "'2014-04-01 20:20:00'",3.05, 3.06]);  data.addRow(["'01 20:50:00'", "'2014-04-01 20:50:00'",2.91, 2.82]);  data.addRow(["'01 21:20:00'", "'2014-04-01 21:20:00'",3.18, 3.05]);  data.addRow(["'01 21:50:00'", "'2014-04-01 21:50:00'",3.12, 3.03]);  data.addRow(["'01 22:20:00'", "'2014-04-01 22:20:00'",2.58, 2.53]);  data.addRow(["'01 22:50:00'", "'2014-04-01 22:50:00'",2.47, 2.39]);  data.addRow(["'01 23:20:00'", "'2014-04-01 23:20:00'",2.56, 2.47]);  data.addRow(["'01 23:50:00'", "'2014-04-01 23:50:00'",2.12, 2.06]);  data.addRow(["'02 00:20:00'", "'2014-04-02 00:20:00'",1.97, 1.88]);  data.addRow(["'02 00:50:00'", "'2014-04-02 00:50:00'",1.63, 1.62]);  data.addRow(["'02 01:20:00'", "'2014-04-02 01:20:00'",1.60, 1.52]);  data.addRow(["'02 01:50:00'", "'2014-04-02 01:50:00'",1.25, 1.50]);  data.addRow(["'02 02:20:00'", "'2014-04-02 02:20:00'",1.29, 1.24]);  data.addRow(["'02 02:50:00'", "'2014-04-02 02:50:00'",0.95, 0.95]);  data.addRow(["'02 03:20:00'", "'2014-04-02 03:20:00'",0.90, 0.88]);  data.addRow(["'02 03:50:00'", "'2014-04-02 03:50:00'",0.81, 0.85]);  data.addRow(["'02 04:20:00'", "'2014-04-02 04:20:00'",0.60, 0.67]);  data.addRow(["'02 04:50:00'", "'2014-04-02 04:50:00'",0.66, 0.66]);  data.addRow(["'02 05:20:00'", "'2014-04-02 05:20:00'",0.53, 0.59]);  data.addRow(["'02 05:50:00'", "'2014-04-02 05:50:00'",0.72, 0.73]);  data.addRow(["'02 06:20:00'", "'2014-04-02 06:20:00'",0.75, 0.78]);  data.addRow(["'02 06:50:00'", "'2014-04-02 06:50:00'",1.50, 1.42]);  data.addRow(["'02 07:20:00'", "'2014-04-02 07:20:00'",1.88, 1.84]);  data.addRow(["'02 07:50:00'", "'2014-04-02 07:50:00'",2.66, 2.51]);  data.addRow(["'02 08:20:00'", "'2014-04-02 08:20:00'",2.69, 2.61]);  data.addRow(["'02 08:50:00'", "'2014-04-02 08:50:00'",4.16, 3.96]);  data.addRow(["'02 09:20:00'", "'2014-04-02 09:20:00'",4.74, 4.54]);  data.addRow(["'02 09:50:00'", "'2014-04-02 09:50:00'",5.57, 5.31]);  data.addRow(["'02 10:20:00'", "'2014-04-02 10:20:00'",5.58, 5.32]);  data.addRow(["'02 10:50:00'", "'2014-04-02 10:50:00'",6.09, 5.68]);  data.addRow(["'02 11:20:00'", "'2014-04-02 11:20:00'",5.98, 5.65]);  data.addRow(["'02 11:50:00'", "'2014-04-02 11:50:00'",5.84, 5.61]);  data.addRow(["'02 12:20:00'", "'2014-04-02 12:20:00'",5.94, 5.58]);  data.addRow(["'02 12:50:00'", "'2014-04-02 12:50:00'",6.21, 5.83]);  data.addRow(["'02 13:20:00'", "'2014-04-02 13:20:00'",6.67, 6.25]);  data.addRow(["'02 13:50:00'", "'2014-04-02 13:50:00'",7.01, 6.62]);  data.addRow(["'02 14:20:00'", "'2014-04-02 14:20:00'",6.44, 6.10]);  data.addRow(["'02 14:50:00'", "'2014-04-02 14:50:00'",0.00, 0.00]); 

	var graphtitle='RRP to FIU Traffic Flows Max: 8.41 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='8'

	
        
      
	