
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'26 14:50:00'", "'2014-03-26 14:50:00'",4.92, 5.12]);  data.addRow(["'26 15:20:00'", "'2014-03-26 15:20:00'",5.98, 6.24]);  data.addRow(["'26 15:50:00'", "'2014-03-26 15:50:00'",5.55, 5.68]);  data.addRow(["'26 16:20:00'", "'2014-03-26 16:20:00'",5.31, 5.51]);  data.addRow(["'26 16:50:00'", "'2014-03-26 16:50:00'",4.27, 4.38]);  data.addRow(["'26 17:20:00'", "'2014-03-26 17:20:00'",3.71, 3.77]);  data.addRow(["'26 17:50:00'", "'2014-03-26 17:50:00'",3.36, 3.37]);  data.addRow(["'26 18:20:00'", "'2014-03-26 18:20:00'",3.45, 3.43]);  data.addRow(["'26 18:50:00'", "'2014-03-26 18:50:00'",3.16, 3.13]);  data.addRow(["'26 19:20:00'", "'2014-03-26 19:20:00'",3.24, 3.18]);  data.addRow(["'26 19:50:00'", "'2014-03-26 19:50:00'",2.97, 2.87]);  data.addRow(["'26 20:20:00'", "'2014-03-26 20:20:00'",2.80, 2.65]);  data.addRow(["'26 20:50:00'", "'2014-03-26 20:50:00'",2.77, 2.61]);  data.addRow(["'26 21:20:00'", "'2014-03-26 21:20:00'",2.64, 2.49]);  data.addRow(["'26 21:50:00'", "'2014-03-26 21:50:00'",2.77, 2.58]);  data.addRow(["'26 22:20:00'", "'2014-03-26 22:20:00'",2.50, 2.33]);  data.addRow(["'26 22:50:00'", "'2014-03-26 22:50:00'",2.40, 2.24]);  data.addRow(["'26 23:20:00'", "'2014-03-26 23:20:00'",2.29, 2.09]);  data.addRow(["'26 23:50:00'", "'2014-03-26 23:50:00'",1.94, 1.76]);  data.addRow(["'27 00:20:00'", "'2014-03-27 00:20:00'",1.88, 1.65]);  data.addRow(["'27 00:50:00'", "'2014-03-27 00:50:00'",1.92, 1.69]);  data.addRow(["'27 01:20:00'", "'2014-03-27 01:20:00'",1.74, 1.52]);  data.addRow(["'27 01:50:00'", "'2014-03-27 01:50:00'",1.58, 1.34]);  data.addRow(["'27 02:20:00'", "'2014-03-27 02:20:00'",1.45, 1.22]);  data.addRow(["'27 02:50:00'", "'2014-03-27 02:50:00'",2.84, 1.98]);  data.addRow(["'27 03:20:00'", "'2014-03-27 03:20:00'",1.90, 1.54]);  data.addRow(["'27 03:50:00'", "'2014-03-27 03:50:00'",1.59, 1.31]);  data.addRow(["'27 04:20:00'", "'2014-03-27 04:20:00'",1.43, 1.15]);  data.addRow(["'27 04:50:00'", "'2014-03-27 04:50:00'",1.54, 1.33]);  data.addRow(["'27 05:20:00'", "'2014-03-27 05:20:00'",1.55, 1.28]);  data.addRow(["'27 05:50:00'", "'2014-03-27 05:50:00'",1.43, 1.13]);  data.addRow(["'27 06:20:00'", "'2014-03-27 06:20:00'",1.41, 1.15]);  data.addRow(["'27 06:50:00'", "'2014-03-27 06:50:00'",1.62, 1.40]);  data.addRow(["'27 07:20:00'", "'2014-03-27 07:20:00'",2.42, 2.22]);  data.addRow(["'27 07:50:00'", "'2014-03-27 07:50:00'",2.87, 2.75]);  data.addRow(["'27 08:20:00'", "'2014-03-27 08:20:00'",2.74, 2.69]);  data.addRow(["'27 08:50:00'", "'2014-03-27 08:50:00'",4.36, 4.42]);  data.addRow(["'27 09:20:00'", "'2014-03-27 09:20:00'",4.50, 4.61]);  data.addRow(["'27 09:50:00'", "'2014-03-27 09:50:00'",4.63, 4.81]);  data.addRow(["'27 10:20:00'", "'2014-03-27 10:20:00'",5.18, 5.32]);  data.addRow(["'27 10:50:00'", "'2014-03-27 10:50:00'",5.09, 5.08]);  data.addRow(["'27 11:20:00'", "'2014-03-27 11:20:00'",4.73, 4.77]);  data.addRow(["'27 11:50:00'", "'2014-03-27 11:50:00'",5.04, 5.08]);  data.addRow(["'27 12:20:00'", "'2014-03-27 12:20:00'",4.42, 4.44]);  data.addRow(["'27 12:50:00'", "'2014-03-27 12:50:00'",5.06, 5.10]);  data.addRow(["'27 13:20:00'", "'2014-03-27 13:20:00'",5.36, 5.51]);  data.addRow(["'27 13:50:00'", "'2014-03-27 13:50:00'",5.38, 5.58]);  data.addRow(["'27 14:20:00'", "'2014-03-27 14:20:00'",4.91, 4.99]);  data.addRow(["'27 14:50:00'", "'2014-03-27 14:50:00'",5.37, 5.61]);  data.addRow(["'27 15:20:00'", "'2014-03-27 15:20:00'",5.05, 4.98]);  data.addRow(["'27 15:50:00'", "'2014-03-27 15:50:00'",4.46, 4.59]);  data.addRow(["'27 16:20:00'", "'2014-03-27 16:20:00'",4.15, 4.19]);  data.addRow(["'27 16:50:00'", "'2014-03-27 16:50:00'",3.54, 3.50]);  data.addRow(["'27 17:20:00'", "'2014-03-27 17:20:00'",3.23, 3.17]);  data.addRow(["'27 17:50:00'", "'2014-03-27 17:50:00'",2.88, 2.77]);  data.addRow(["'27 18:20:00'", "'2014-03-27 18:20:00'",2.80, 2.75]);  data.addRow(["'27 18:50:00'", "'2014-03-27 18:50:00'",2.50, 2.37]);  data.addRow(["'27 19:20:00'", "'2014-03-27 19:20:00'",2.40, 2.24]);  data.addRow(["'27 19:50:00'", "'2014-03-27 19:50:00'",3.37, 3.28]);  data.addRow(["'27 20:20:00'", "'2014-03-27 20:20:00'",3.86, 3.63]);  data.addRow(["'27 20:50:00'", "'2014-03-27 20:50:00'",3.19, 3.23]);  data.addRow(["'27 21:20:00'", "'2014-03-27 21:20:00'",2.80, 2.79]);  data.addRow(["'27 21:50:00'", "'2014-03-27 21:50:00'",2.39, 2.45]);  data.addRow(["'27 22:20:00'", "'2014-03-27 22:20:00'",2.13, 2.11]);  data.addRow(["'27 22:50:00'", "'2014-03-27 22:50:00'",2.00, 1.87]);  data.addRow(["'27 23:20:00'", "'2014-03-27 23:20:00'",1.71, 1.53]);  data.addRow(["'27 23:50:00'", "'2014-03-27 23:50:00'",1.71, 1.54]);  data.addRow(["'28 00:20:00'", "'2014-03-28 00:20:00'",1.59, 1.37]);  data.addRow(["'28 00:50:00'", "'2014-03-28 00:50:00'",1.45, 1.26]);  data.addRow(["'28 01:20:00'", "'2014-03-28 01:20:00'",1.34, 1.16]);  data.addRow(["'28 01:50:00'", "'2014-03-28 01:50:00'",1.25, 1.11]);  data.addRow(["'28 02:20:00'", "'2014-03-28 02:20:00'",1.01, 0.72]);  data.addRow(["'28 02:50:00'", "'2014-03-28 02:50:00'",1.08, 0.78]);  data.addRow(["'28 03:20:00'", "'2014-03-28 03:20:00'",1.33, 1.13]);  data.addRow(["'28 03:50:00'", "'2014-03-28 03:50:00'",1.39, 1.14]);  data.addRow(["'28 04:20:00'", "'2014-03-28 04:20:00'",1.20, 0.95]);  data.addRow(["'28 04:50:00'", "'2014-03-28 04:50:00'",1.33, 1.10]);  data.addRow(["'28 05:20:00'", "'2014-03-28 05:20:00'",1.37, 1.16]);  data.addRow(["'28 05:50:00'", "'2014-03-28 05:50:00'",1.48, 1.17]);  data.addRow(["'28 06:20:00'", "'2014-03-28 06:20:00'",1.37, 1.15]);  data.addRow(["'28 06:50:00'", "'2014-03-28 06:50:00'",1.75, 1.59]);  data.addRow(["'28 07:20:00'", "'2014-03-28 07:20:00'",2.92, 2.73]);  data.addRow(["'28 07:50:00'", "'2014-03-28 07:50:00'",4.07, 4.06]);  data.addRow(["'28 08:20:00'", "'2014-03-28 08:20:00'",4.61, 4.71]);  data.addRow(["'28 08:50:00'", "'2014-03-28 08:50:00'",5.48, 5.63]);  data.addRow(["'28 09:20:00'", "'2014-03-28 09:20:00'",7.31, 7.60]);  data.addRow(["'28 09:50:00'", "'2014-03-28 09:50:00'",5.74, 5.97]);  data.addRow(["'28 10:20:00'", "'2014-03-28 10:20:00'",4.89, 5.12]);  data.addRow(["'28 10:50:00'", "'2014-03-28 10:50:00'",5.25, 5.38]);  data.addRow(["'28 11:20:00'", "'2014-03-28 11:20:00'",5.10, 5.16]);  data.addRow(["'28 11:50:00'", "'2014-03-28 11:50:00'",4.58, 4.74]);  data.addRow(["'28 12:20:00'", "'2014-03-28 12:20:00'",3.84, 3.89]);  data.addRow(["'28 12:50:00'", "'2014-03-28 12:50:00'",3.95, 3.94]);  data.addRow(["'28 13:20:00'", "'2014-03-28 13:20:00'",3.87, 3.90]);  data.addRow(["'28 13:50:00'", "'2014-03-28 13:50:00'",4.12, 4.16]);  data.addRow(["'28 14:20:00'", "'2014-03-28 14:20:00'",4.06, 4.13]);  data.addRow(["'28 14:50:00'", "'2014-03-28 14:50:00'",3.69, 3.73]);  data.addRow(["'28 15:20:00'", "'2014-03-28 15:20:00'",3.41, 3.40]);  data.addRow(["'28 15:50:00'", "'2014-03-28 15:50:00'",2.99, 2.94]);  data.addRow(["'28 16:20:00'", "'2014-03-28 16:20:00'",3.27, 3.13]);  data.addRow(["'28 16:50:00'", "'2014-03-28 16:50:00'",2.60, 2.49]);  data.addRow(["'28 17:20:00'", "'2014-03-28 17:20:00'",2.28, 2.03]);  data.addRow(["'28 17:50:00'", "'2014-03-28 17:50:00'",1.73, 1.51]);  data.addRow(["'28 18:20:00'", "'2014-03-28 18:20:00'",1.69, 1.45]);  data.addRow(["'28 18:50:00'", "'2014-03-28 18:50:00'",1.99, 1.72]);  data.addRow(["'28 19:20:00'", "'2014-03-28 19:20:00'",1.62, 1.38]);  data.addRow(["'28 19:50:00'", "'2014-03-28 19:50:00'",1.63, 1.33]);  data.addRow(["'28 20:20:00'", "'2014-03-28 20:20:00'",1.94, 1.74]);  data.addRow(["'28 20:50:00'", "'2014-03-28 20:50:00'",1.51, 1.27]);  data.addRow(["'28 21:20:00'", "'2014-03-28 21:20:00'",1.30, 1.04]);  data.addRow(["'28 21:50:00'", "'2014-03-28 21:50:00'",1.14, 0.87]);  data.addRow(["'28 22:20:00'", "'2014-03-28 22:20:00'",1.16, 0.88]);  data.addRow(["'28 22:50:00'", "'2014-03-28 22:50:00'",1.12, 0.86]);  data.addRow(["'28 23:20:00'", "'2014-03-28 23:20:00'",1.04, 0.77]);  data.addRow(["'28 23:50:00'", "'2014-03-28 23:50:00'",1.01, 0.74]);  data.addRow(["'29 00:20:00'", "'2014-03-29 00:20:00'",1.01, 0.76]);  data.addRow(["'29 00:50:00'", "'2014-03-29 00:50:00'",1.00, 0.73]);  data.addRow(["'29 01:20:00'", "'2014-03-29 01:20:00'",0.96, 0.71]);  data.addRow(["'29 01:50:00'", "'2014-03-29 01:50:00'",1.04, 0.67]);  data.addRow(["'29 02:20:00'", "'2014-03-29 02:20:00'",1.11, 0.72]);  data.addRow(["'29 02:50:00'", "'2014-03-29 02:50:00'",1.03, 0.68]);  data.addRow(["'29 03:20:00'", "'2014-03-29 03:20:00'",0.96, 0.67]);  data.addRow(["'29 03:50:00'", "'2014-03-29 03:50:00'",1.16, 0.83]);  data.addRow(["'29 04:20:00'", "'2014-03-29 04:20:00'",0.98, 0.66]);  data.addRow(["'29 04:50:00'", "'2014-03-29 04:50:00'",0.95, 0.67]);  data.addRow(["'29 05:20:00'", "'2014-03-29 05:20:00'",1.06, 0.75]);  data.addRow(["'29 05:50:00'", "'2014-03-29 05:50:00'",0.95, 0.65]);  data.addRow(["'29 06:20:00'", "'2014-03-29 06:20:00'",0.97, 0.68]);  data.addRow(["'29 06:50:00'", "'2014-03-29 06:50:00'",1.10, 0.79]);  data.addRow(["'29 07:20:00'", "'2014-03-29 07:20:00'",1.13, 0.80]);  data.addRow(["'29 07:50:00'", "'2014-03-29 07:50:00'",1.33, 1.04]);  data.addRow(["'29 08:20:00'", "'2014-03-29 08:20:00'",1.29, 1.04]);  data.addRow(["'29 08:50:00'", "'2014-03-29 08:50:00'",1.30, 1.02]);  data.addRow(["'29 09:20:00'", "'2014-03-29 09:20:00'",1.38, 1.12]);  data.addRow(["'29 09:50:00'", "'2014-03-29 09:50:00'",1.43, 1.16]);  data.addRow(["'29 10:20:00'", "'2014-03-29 10:20:00'",1.41, 1.18]);  data.addRow(["'29 10:50:00'", "'2014-03-29 10:50:00'",1.55, 1.34]);  data.addRow(["'29 11:20:00'", "'2014-03-29 11:20:00'",1.84, 1.61]);  data.addRow(["'29 11:50:00'", "'2014-03-29 11:50:00'",1.90, 1.68]);  data.addRow(["'29 12:20:00'", "'2014-03-29 12:20:00'",1.90, 1.70]);  data.addRow(["'29 12:50:00'", "'2014-03-29 12:50:00'",1.89, 1.71]);  data.addRow(["'29 13:20:00'", "'2014-03-29 13:20:00'",1.97, 1.76]);  data.addRow(["'29 13:50:00'", "'2014-03-29 13:50:00'",1.67, 1.45]);  data.addRow(["'29 14:20:00'", "'2014-03-29 14:20:00'",2.01, 1.83]);  data.addRow(["'29 14:50:00'", "'2014-03-29 14:50:00'",2.79, 2.70]);  data.addRow(["'29 15:20:00'", "'2014-03-29 15:20:00'",2.54, 2.42]);  data.addRow(["'29 15:50:00'", "'2014-03-29 15:50:00'",2.49, 2.35]);  data.addRow(["'29 16:20:00'", "'2014-03-29 16:20:00'",3.45, 3.36]);  data.addRow(["'29 16:50:00'", "'2014-03-29 16:50:00'",3.18, 3.15]);  data.addRow(["'29 17:20:00'", "'2014-03-29 17:20:00'",2.88, 2.75]);  data.addRow(["'29 17:50:00'", "'2014-03-29 17:50:00'",2.87, 2.68]);  data.addRow(["'29 18:20:00'", "'2014-03-29 18:20:00'",2.54, 2.35]);  data.addRow(["'29 18:50:00'", "'2014-03-29 18:50:00'",2.35, 2.14]);  data.addRow(["'29 19:20:00'", "'2014-03-29 19:20:00'",2.41, 2.21]);  data.addRow(["'29 19:50:00'", "'2014-03-29 19:50:00'",2.58, 2.38]);  data.addRow(["'29 20:20:00'", "'2014-03-29 20:20:00'",2.62, 2.44]);  data.addRow(["'29 20:50:00'", "'2014-03-29 20:50:00'",2.64, 2.46]);  data.addRow(["'29 21:20:00'", "'2014-03-29 21:20:00'",2.55, 2.34]);  data.addRow(["'29 21:50:00'", "'2014-03-29 21:50:00'",2.52, 2.36]);  data.addRow(["'29 22:20:00'", "'2014-03-29 22:20:00'",1.70, 1.57]);  data.addRow(["'29 22:50:00'", "'2014-03-29 22:50:00'",0.00, 0.00]);  data.addRow(["'29 23:20:00'", "'2014-03-29 23:20:00'",0.00, 0.00]);  data.addRow(["'29 23:50:00'", "'2014-03-29 23:50:00'",0.00, 0.00]);  data.addRow(["'30 00:20:00'", "'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow(["'30 00:50:00'", "'2014-03-30 00:50:00'",0.00, 0.00]);  data.addRow(["'30 01:20:00'", "'2014-03-30 01:20:00'",0.00, 0.00]);  data.addRow(["'30 01:50:00'", "'2014-03-30 01:50:00'",0.00, 0.00]);  data.addRow(["'30 02:20:00'", "'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow(["'30 02:50:00'", "'2014-03-30 02:50:00'",0.00, 0.00]);  data.addRow(["'30 03:20:00'", "'2014-03-30 03:20:00'",0.00, 0.00]);  data.addRow(["'30 03:50:00'", "'2014-03-30 03:50:00'",0.00, 0.00]);  data.addRow(["'30 04:20:00'", "'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow(["'30 04:50:00'", "'2014-03-30 04:50:00'",0.00, 0.00]);  data.addRow(["'30 05:20:00'", "'2014-03-30 05:20:00'",0.00, 0.00]);  data.addRow(["'30 05:50:00'", "'2014-03-30 05:50:00'",0.00, 0.00]);  data.addRow(["'30 06:20:00'", "'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow(["'30 06:50:00'", "'2014-03-30 06:50:00'",0.00, 0.00]);  data.addRow(["'30 07:20:00'", "'2014-03-30 07:20:00'",0.00, 0.00]);  data.addRow(["'30 07:50:00'", "'2014-03-30 07:50:00'",0.00, 0.00]);  data.addRow(["'30 08:20:00'", "'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow(["'30 08:50:00'", "'2014-03-30 08:50:00'",0.00, 0.00]);  data.addRow(["'30 09:20:00'", "'2014-03-30 09:20:00'",0.00, 0.00]);  data.addRow(["'30 09:50:00'", "'2014-03-30 09:50:00'",0.00, 0.00]);  data.addRow(["'30 10:20:00'", "'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow(["'30 10:50:00'", "'2014-03-30 10:50:00'",0.00, 0.00]);  data.addRow(["'30 11:20:00'", "'2014-03-30 11:20:00'",0.00, 0.00]);  data.addRow(["'30 11:50:00'", "'2014-03-30 11:50:00'",0.00, 0.00]);  data.addRow(["'30 12:20:00'", "'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow(["'30 12:50:00'", "'2014-03-30 12:50:00'",0.00, 0.00]);  data.addRow(["'30 13:20:00'", "'2014-03-30 13:20:00'",0.00, 0.00]);  data.addRow(["'30 13:50:00'", "'2014-03-30 13:50:00'",0.00, 0.00]);  data.addRow(["'30 14:20:00'", "'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow(["'30 14:50:00'", "'2014-03-30 14:50:00'",0.00, 0.00]);  data.addRow(["'30 15:20:00'", "'2014-03-30 15:20:00'",0.00, 0.00]);  data.addRow(["'30 15:50:00'", "'2014-03-30 15:50:00'",0.00, 0.00]);  data.addRow(["'30 16:20:00'", "'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow(["'30 16:50:00'", "'2014-03-30 16:50:00'",0.00, 0.00]);  data.addRow(["'30 17:20:00'", "'2014-03-30 17:20:00'",0.00, 0.00]);  data.addRow(["'30 17:50:00'", "'2014-03-30 17:50:00'",0.00, 0.00]);  data.addRow(["'30 18:20:00'", "'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow(["'30 18:50:00'", "'2014-03-30 18:50:00'",0.00, 0.00]);  data.addRow(["'30 19:20:00'", "'2014-03-30 19:20:00'",0.00, 0.00]);  data.addRow(["'30 19:50:00'", "'2014-03-30 19:50:00'",0.00, 0.00]);  data.addRow(["'30 20:20:00'", "'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow(["'30 20:50:00'", "'2014-03-30 20:50:00'",0.00, 0.00]);  data.addRow(["'30 21:20:00'", "'2014-03-30 21:20:00'",0.00, 0.00]);  data.addRow(["'30 21:50:00'", "'2014-03-30 21:50:00'",0.00, 0.00]);  data.addRow(["'30 22:20:00'", "'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow(["'30 22:50:00'", "'2014-03-30 22:50:00'",0.00, 0.00]);  data.addRow(["'30 23:20:00'", "'2014-03-30 23:20:00'",0.00, 0.00]);  data.addRow(["'30 23:50:00'", "'2014-03-30 23:50:00'",0.00, 0.00]);  data.addRow(["'31 00:20:00'", "'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow(["'31 00:50:00'", "'2014-03-31 00:50:00'",0.00, 0.00]);  data.addRow(["'31 01:20:00'", "'2014-03-31 01:20:00'",0.00, 0.00]);  data.addRow(["'31 01:50:00'", "'2014-03-31 01:50:00'",0.00, 0.00]);  data.addRow(["'31 02:20:00'", "'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow(["'31 02:50:00'", "'2014-03-31 02:50:00'",0.00, 0.00]);  data.addRow(["'31 03:20:00'", "'2014-03-31 03:20:00'",0.00, 0.00]);  data.addRow(["'31 03:50:00'", "'2014-03-31 03:50:00'",0.00, 0.00]);  data.addRow(["'31 04:20:00'", "'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow(["'31 04:50:00'", "'2014-03-31 04:50:00'",0.00, 0.00]);  data.addRow(["'31 05:20:00'", "'2014-03-31 05:20:00'",0.00, 0.00]);  data.addRow(["'31 05:50:00'", "'2014-03-31 05:50:00'",0.00, 0.00]);  data.addRow(["'31 06:20:00'", "'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow(["'31 06:50:00'", "'2014-03-31 06:50:00'",0.00, 0.00]);  data.addRow(["'31 07:20:00'", "'2014-03-31 07:20:00'",0.00, 0.00]);  data.addRow(["'31 07:50:00'", "'2014-03-31 07:50:00'",0.00, 0.00]);  data.addRow(["'31 08:20:00'", "'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow(["'31 08:50:00'", "'2014-03-31 08:50:00'",0.00, 0.00]);  data.addRow(["'31 09:20:00'", "'2014-03-31 09:20:00'",0.00, 0.00]);  data.addRow(["'31 09:50:00'", "'2014-03-31 09:50:00'",0.00, 0.00]);  data.addRow(["'31 10:20:00'", "'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow(["'31 10:50:00'", "'2014-03-31 10:50:00'",0.00, 0.00]);  data.addRow(["'31 11:20:00'", "'2014-03-31 11:20:00'",0.00, 0.00]);  data.addRow(["'31 11:50:00'", "'2014-03-31 11:50:00'",0.00, 0.00]);  data.addRow(["'31 12:20:00'", "'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow(["'31 12:50:00'", "'2014-03-31 12:50:00'",0.00, 0.00]);  data.addRow(["'31 13:20:00'", "'2014-03-31 13:20:00'",0.00, 0.00]);  data.addRow(["'31 13:50:00'", "'2014-03-31 13:50:00'",0.00, 0.00]);  data.addRow(["'31 14:20:00'", "'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow(["'31 14:50:00'", "'2014-03-31 14:50:00'",0.00, 0.00]);  data.addRow(["'31 15:20:00'", "'2014-03-31 15:20:00'",0.00, 0.00]);  data.addRow(["'31 15:50:00'", "'2014-03-31 15:50:00'",0.00, 0.00]);  data.addRow(["'31 16:20:00'", "'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow(["'31 16:50:00'", "'2014-03-31 16:50:00'",0.00, 0.00]);  data.addRow(["'31 17:20:00'", "'2014-03-31 17:20:00'",0.00, 0.00]);  data.addRow(["'31 17:50:00'", "'2014-03-31 17:50:00'",0.00, 0.00]);  data.addRow(["'31 18:20:00'", "'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow(["'31 18:50:00'", "'2014-03-31 18:50:00'",0.00, 0.00]);  data.addRow(["'31 19:20:00'", "'2014-03-31 19:20:00'",0.00, 0.00]);  data.addRow(["'31 19:50:00'", "'2014-03-31 19:50:00'",0.00, 0.00]);  data.addRow(["'31 20:20:00'", "'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow(["'31 20:50:00'", "'2014-03-31 20:50:00'",0.00, 0.00]);  data.addRow(["'31 21:20:00'", "'2014-03-31 21:20:00'",0.00, 0.00]);  data.addRow(["'31 21:50:00'", "'2014-03-31 21:50:00'",0.00, 0.00]);  data.addRow(["'31 22:20:00'", "'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow(["'31 22:50:00'", "'2014-03-31 22:50:00'",0.00, 0.00]);  data.addRow(["'31 23:20:00'", "'2014-03-31 23:20:00'",0.00, 0.00]);  data.addRow(["'31 23:50:00'", "'2014-03-31 23:50:00'",0.00, 0.00]);  data.addRow(["'01 00:20:00'", "'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow(["'01 00:50:00'", "'2014-04-01 00:50:00'",0.00, 0.00]);  data.addRow(["'01 01:20:00'", "'2014-04-01 01:20:00'",0.00, 0.00]);  data.addRow(["'01 01:50:00'", "'2014-04-01 01:50:00'",0.00, 0.00]);  data.addRow(["'01 02:20:00'", "'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow(["'01 02:50:00'", "'2014-04-01 02:50:00'",0.00, 0.00]);  data.addRow(["'01 03:20:00'", "'2014-04-01 03:20:00'",0.00, 0.00]);  data.addRow(["'01 03:50:00'", "'2014-04-01 03:50:00'",0.00, 0.00]);  data.addRow(["'01 04:20:00'", "'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow(["'01 04:50:00'", "'2014-04-01 04:50:00'",0.00, 0.00]);  data.addRow(["'01 05:20:00'", "'2014-04-01 05:20:00'",0.00, 0.00]);  data.addRow(["'01 05:50:00'", "'2014-04-01 05:50:00'",0.00, 0.00]);  data.addRow(["'01 06:20:00'", "'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow(["'01 06:50:00'", "'2014-04-01 06:50:00'",0.00, 0.00]);  data.addRow(["'01 07:20:00'", "'2014-04-01 07:20:00'",0.00, 0.00]);  data.addRow(["'01 07:50:00'", "'2014-04-01 07:50:00'",0.00, 0.00]);  data.addRow(["'01 08:20:00'", "'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow(["'01 08:50:00'", "'2014-04-01 08:50:00'",0.00, 0.00]);  data.addRow(["'01 09:20:00'", "'2014-04-01 09:20:00'",0.00, 0.00]);  data.addRow(["'01 09:50:00'", "'2014-04-01 09:50:00'",0.00, 0.00]);  data.addRow(["'01 10:20:00'", "'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow(["'01 10:50:00'", "'2014-04-01 10:50:00'",0.00, 0.00]);  data.addRow(["'01 11:20:00'", "'2014-04-01 11:20:00'",0.00, 0.00]);  data.addRow(["'01 11:50:00'", "'2014-04-01 11:50:00'",0.00, 0.00]);  data.addRow(["'01 12:20:00'", "'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow(["'01 12:50:00'", "'2014-04-01 12:50:00'",0.00, 0.00]);  data.addRow(["'01 13:20:00'", "'2014-04-01 13:20:00'",4.66, 4.77]);  data.addRow(["'01 13:50:00'", "'2014-04-01 13:50:00'",6.95, 7.05]);  data.addRow(["'01 14:20:00'", "'2014-04-01 14:20:00'",6.42, 6.52]);  data.addRow(["'01 14:50:00'", "'2014-04-01 14:50:00'",6.58, 6.71]);  data.addRow(["'01 15:20:00'", "'2014-04-01 15:20:00'",6.69, 6.86]);  data.addRow(["'01 15:50:00'", "'2014-04-01 15:50:00'",6.70, 6.73]);  data.addRow(["'01 16:20:00'", "'2014-04-01 16:20:00'",6.72, 6.71]);  data.addRow(["'01 16:50:00'", "'2014-04-01 16:50:00'",5.46, 5.35]);  data.addRow(["'01 17:20:00'", "'2014-04-01 17:20:00'",4.45, 4.38]);  data.addRow(["'01 17:50:00'", "'2014-04-01 17:50:00'",4.20, 4.22]);  data.addRow(["'01 18:20:00'", "'2014-04-01 18:20:00'",3.76, 3.68]);  data.addRow(["'01 18:50:00'", "'2014-04-01 18:50:00'",3.43, 3.30]);  data.addRow(["'01 19:20:00'", "'2014-04-01 19:20:00'",3.50, 3.30]);  data.addRow(["'01 19:50:00'", "'2014-04-01 19:50:00'",3.63, 3.43]);  data.addRow(["'01 20:20:00'", "'2014-04-01 20:20:00'",3.72, 3.53]);  data.addRow(["'01 20:50:00'", "'2014-04-01 20:50:00'",3.54, 3.32]);  data.addRow(["'01 21:20:00'", "'2014-04-01 21:20:00'",3.35, 3.04]);  data.addRow(["'01 21:50:00'", "'2014-04-01 21:50:00'",3.06, 2.74]);  data.addRow(["'01 22:20:00'", "'2014-04-01 22:20:00'",2.81, 2.47]);  data.addRow(["'01 22:50:00'", "'2014-04-01 22:50:00'",2.77, 2.41]);  data.addRow(["'01 23:20:00'", "'2014-04-01 23:20:00'",2.91, 2.56]);  data.addRow(["'01 23:50:00'", "'2014-04-01 23:50:00'",2.67, 2.30]);  data.addRow(["'02 00:20:00'", "'2014-04-02 00:20:00'",2.14, 1.78]);  data.addRow(["'02 00:50:00'", "'2014-04-02 00:50:00'",1.97, 1.61]);  data.addRow(["'02 01:20:00'", "'2014-04-02 01:20:00'",1.94, 1.61]);  data.addRow(["'02 01:50:00'", "'2014-04-02 01:50:00'",1.99, 1.36]);  data.addRow(["'02 02:20:00'", "'2014-04-02 02:20:00'",1.68, 1.29]);  data.addRow(["'02 02:50:00'", "'2014-04-02 02:50:00'",1.60, 1.20]);  data.addRow(["'02 03:20:00'", "'2014-04-02 03:20:00'",1.57, 1.16]);  data.addRow(["'02 03:50:00'", "'2014-04-02 03:50:00'",1.74, 1.31]);  data.addRow(["'02 04:20:00'", "'2014-04-02 04:20:00'",1.49, 1.07]);  data.addRow(["'02 04:50:00'", "'2014-04-02 04:50:00'",1.54, 1.09]);  data.addRow(["'02 05:20:00'", "'2014-04-02 05:20:00'",1.63, 1.21]);  data.addRow(["'02 05:50:00'", "'2014-04-02 05:50:00'",1.59, 1.19]);  data.addRow(["'02 06:20:00'", "'2014-04-02 06:20:00'",1.56, 1.16]);  data.addRow(["'02 06:50:00'", "'2014-04-02 06:50:00'",1.82, 1.46]);  data.addRow(["'02 07:20:00'", "'2014-04-02 07:20:00'",2.54, 2.19]);  data.addRow(["'02 07:50:00'", "'2014-04-02 07:50:00'",3.51, 3.29]);  data.addRow(["'02 08:20:00'", "'2014-04-02 08:20:00'",3.71, 3.59]);  data.addRow(["'02 08:50:00'", "'2014-04-02 08:50:00'",5.03, 5.06]);  data.addRow(["'02 09:20:00'", "'2014-04-02 09:20:00'",5.86, 5.89]);  data.addRow(["'02 09:50:00'", "'2014-04-02 09:50:00'",5.81, 5.80]);  data.addRow(["'02 10:20:00'", "'2014-04-02 10:20:00'",6.54, 6.74]);  data.addRow(["'02 10:50:00'", "'2014-04-02 10:50:00'",6.70, 6.68]);  data.addRow(["'02 11:20:00'", "'2014-04-02 11:20:00'",6.66, 6.63]);  data.addRow(["'02 11:50:00'", "'2014-04-02 11:50:00'",6.08, 6.06]);  data.addRow(["'02 12:20:00'", "'2014-04-02 12:20:00'",5.94, 5.87]);  data.addRow(["'02 12:50:00'", "'2014-04-02 12:50:00'",5.78, 5.69]);  data.addRow(["'02 13:20:00'", "'2014-04-02 13:20:00'",5.79, 5.75]);  data.addRow(["'02 13:50:00'", "'2014-04-02 13:50:00'",6.28, 6.22]);  data.addRow(["'02 14:20:00'", "'2014-04-02 14:20:00'",4.88, 4.88]);  data.addRow(["'02 14:50:00'", "'2014-04-02 14:50:00'",0.00, 0.00]); 

	var graphtitle='FIU to RUM Traffic Flows Max: 8.35 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='8'

	
        
      
	