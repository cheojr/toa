
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'26 14:50:00'", "'2014-03-26 14:50:00'",9.58, 10.74]);  data.addRow(["'26 15:20:00'", "'2014-03-26 15:20:00'",9.83, 11.94]);  data.addRow(["'26 15:50:00'", "'2014-03-26 15:50:00'",7.32, 15.18]);  data.addRow(["'26 16:20:00'", "'2014-03-26 16:20:00'",9.12, 11.81]);  data.addRow(["'26 16:50:00'", "'2014-03-26 16:50:00'",8.50, 12.30]);  data.addRow(["'26 17:20:00'", "'2014-03-26 17:20:00'",4.08, 5.40]);  data.addRow(["'26 17:50:00'", "'2014-03-26 17:50:00'",7.00, 18.38]);  data.addRow(["'26 18:20:00'", "'2014-03-26 18:20:00'",4.58, 5.98]);  data.addRow(["'26 18:50:00'", "'2014-03-26 18:50:00'",14.32, 16.86]);  data.addRow(["'26 19:20:00'", "'2014-03-26 19:20:00'",4.80, 5.27]);  data.addRow(["'26 19:50:00'", "'2014-03-26 19:50:00'",5.43, 7.16]);  data.addRow(["'26 20:20:00'", "'2014-03-26 20:20:00'",2.59, 2.93]);  data.addRow(["'26 20:50:00'", "'2014-03-26 20:50:00'",0.90, 1.01]);  data.addRow(["'26 21:20:00'", "'2014-03-26 21:20:00'",5.93, 7.44]);  data.addRow(["'26 21:50:00'", "'2014-03-26 21:50:00'",0.67, 0.95]);  data.addRow(["'26 22:20:00'", "'2014-03-26 22:20:00'",0.32, 0.36]);  data.addRow(["'26 22:50:00'", "'2014-03-26 22:50:00'",0.26, 0.34]);  data.addRow(["'26 23:20:00'", "'2014-03-26 23:20:00'",0.35, 0.42]);  data.addRow(["'26 23:50:00'", "'2014-03-26 23:50:00'",0.21, 0.25]);  data.addRow(["'27 00:20:00'", "'2014-03-27 00:20:00'",0.70, 1.06]);  data.addRow(["'27 00:50:00'", "'2014-03-27 00:50:00'",0.12, 0.14]);  data.addRow(["'27 01:20:00'", "'2014-03-27 01:20:00'",0.12, 0.13]);  data.addRow(["'27 01:50:00'", "'2014-03-27 01:50:00'",0.09, 0.11]);  data.addRow(["'27 02:20:00'", "'2014-03-27 02:20:00'",0.20, 0.28]);  data.addRow(["'27 02:50:00'", "'2014-03-27 02:50:00'",0.27, 0.18]);  data.addRow(["'27 03:20:00'", "'2014-03-27 03:20:00'",0.15, 0.17]);  data.addRow(["'27 03:50:00'", "'2014-03-27 03:50:00'",0.13, 0.17]);  data.addRow(["'27 04:20:00'", "'2014-03-27 04:20:00'",0.13, 0.16]);  data.addRow(["'27 04:50:00'", "'2014-03-27 04:50:00'",0.23, 0.29]);  data.addRow(["'27 05:20:00'", "'2014-03-27 05:20:00'",0.30, 0.38]);  data.addRow(["'27 05:50:00'", "'2014-03-27 05:50:00'",0.17, 0.21]);  data.addRow(["'27 06:20:00'", "'2014-03-27 06:20:00'",0.46, 0.61]);  data.addRow(["'27 06:50:00'", "'2014-03-27 06:50:00'",0.85, 0.84]);  data.addRow(["'27 07:20:00'", "'2014-03-27 07:20:00'",3.80, 4.14]);  data.addRow(["'27 07:50:00'", "'2014-03-27 07:50:00'",6.18, 8.62]);  data.addRow(["'27 08:20:00'", "'2014-03-27 08:20:00'",10.72, 15.43]);  data.addRow(["'27 08:50:00'", "'2014-03-27 08:50:00'",13.38, 18.88]);  data.addRow(["'27 09:20:00'", "'2014-03-27 09:20:00'",13.37, 14.88]);  data.addRow(["'27 09:50:00'", "'2014-03-27 09:50:00'",23.21, 26.76]);  data.addRow(["'27 10:20:00'", "'2014-03-27 10:20:00'",14.90, 20.13]);  data.addRow(["'27 10:50:00'", "'2014-03-27 10:50:00'",9.83, 12.67]);  data.addRow(["'27 11:20:00'", "'2014-03-27 11:20:00'",6.62, 7.37]);  data.addRow(["'27 11:50:00'", "'2014-03-27 11:50:00'",11.93, 13.77]);  data.addRow(["'27 12:20:00'", "'2014-03-27 12:20:00'",9.30, 10.87]);  data.addRow(["'27 12:50:00'", "'2014-03-27 12:50:00'",25.36, 42.45]);  data.addRow(["'27 13:20:00'", "'2014-03-27 13:20:00'",14.06, 14.00]);  data.addRow(["'27 13:50:00'", "'2014-03-27 13:50:00'",18.79, 31.10]);  data.addRow(["'27 14:20:00'", "'2014-03-27 14:20:00'",7.33, 8.92]);  data.addRow(["'27 14:50:00'", "'2014-03-27 14:50:00'",14.38, 13.49]);  data.addRow(["'27 15:20:00'", "'2014-03-27 15:20:00'",8.75, 11.15]);  data.addRow(["'27 15:50:00'", "'2014-03-27 15:50:00'",8.33, 11.78]);  data.addRow(["'27 16:20:00'", "'2014-03-27 16:20:00'",12.70, 15.97]);  data.addRow(["'27 16:50:00'", "'2014-03-27 16:50:00'",10.75, 12.06]);  data.addRow(["'27 17:20:00'", "'2014-03-27 17:20:00'",8.99, 14.57]);  data.addRow(["'27 17:50:00'", "'2014-03-27 17:50:00'",8.02, 14.01]);  data.addRow(["'27 18:20:00'", "'2014-03-27 18:20:00'",5.07, 9.56]);  data.addRow(["'27 18:50:00'", "'2014-03-27 18:50:00'",2.60, 4.32]);  data.addRow(["'27 19:20:00'", "'2014-03-27 19:20:00'",4.08, 6.71]);  data.addRow(["'27 19:50:00'", "'2014-03-27 19:50:00'",3.97, 3.57]);  data.addRow(["'27 20:20:00'", "'2014-03-27 20:20:00'",2.43, 2.58]);  data.addRow(["'27 20:50:00'", "'2014-03-27 20:50:00'",3.85, 3.06]);  data.addRow(["'27 21:20:00'", "'2014-03-27 21:20:00'",2.79, 2.52]);  data.addRow(["'27 21:50:00'", "'2014-03-27 21:50:00'",1.70, 2.05]);  data.addRow(["'27 22:20:00'", "'2014-03-27 22:20:00'",0.99, 1.18]);  data.addRow(["'27 22:50:00'", "'2014-03-27 22:50:00'",0.98, 1.21]);  data.addRow(["'27 23:20:00'", "'2014-03-27 23:20:00'",0.33, 0.57]);  data.addRow(["'27 23:50:00'", "'2014-03-27 23:50:00'",0.24, 0.51]);  data.addRow(["'28 00:20:00'", "'2014-03-28 00:20:00'",0.50, 1.21]);  data.addRow(["'28 00:50:00'", "'2014-03-28 00:50:00'",2.20, 5.41]);  data.addRow(["'28 01:20:00'", "'2014-03-28 01:20:00'",0.27, 0.51]);  data.addRow(["'28 01:50:00'", "'2014-03-28 01:50:00'",0.14, 0.43]);  data.addRow(["'28 02:20:00'", "'2014-03-28 02:20:00'",0.13, 0.12]);  data.addRow(["'28 02:50:00'", "'2014-03-28 02:50:00'",0.13, 0.13]);  data.addRow(["'28 03:20:00'", "'2014-03-28 03:20:00'",0.24, 0.66]);  data.addRow(["'28 03:50:00'", "'2014-03-28 03:50:00'",0.23, 0.42]);  data.addRow(["'28 04:20:00'", "'2014-03-28 04:20:00'",0.18, 0.34]);  data.addRow(["'28 04:50:00'", "'2014-03-28 04:50:00'",1.87, 3.32]);  data.addRow(["'28 05:20:00'", "'2014-03-28 05:20:00'",0.20, 0.40]);  data.addRow(["'28 05:50:00'", "'2014-03-28 05:50:00'",0.34, 0.83]);  data.addRow(["'28 06:20:00'", "'2014-03-28 06:20:00'",0.41, 0.58]);  data.addRow(["'28 06:50:00'", "'2014-03-28 06:50:00'",0.26, 0.60]);  data.addRow(["'28 07:20:00'", "'2014-03-28 07:20:00'",2.04, 3.48]);  data.addRow(["'28 07:50:00'", "'2014-03-28 07:50:00'",5.52, 12.96]);  data.addRow(["'28 08:20:00'", "'2014-03-28 08:20:00'",9.35, 55.99]);  data.addRow(["'28 08:50:00'", "'2014-03-28 08:50:00'",7.49, 12.70]);  data.addRow(["'28 09:20:00'", "'2014-03-28 09:20:00'",8.01, 15.63]);  data.addRow(["'28 09:50:00'", "'2014-03-28 09:50:00'",8.11, 10.96]);  data.addRow(["'28 10:20:00'", "'2014-03-28 10:20:00'",13.99, 18.37]);  data.addRow(["'28 10:50:00'", "'2014-03-28 10:50:00'",17.72, 24.06]);  data.addRow(["'28 11:20:00'", "'2014-03-28 11:20:00'",11.21, 14.26]);  data.addRow(["'28 11:50:00'", "'2014-03-28 11:50:00'",11.71, 11.55]);  data.addRow(["'28 12:20:00'", "'2014-03-28 12:20:00'",16.85, 17.25]);  data.addRow(["'28 12:50:00'", "'2014-03-28 12:50:00'",14.19, 14.35]);  data.addRow(["'28 13:20:00'", "'2014-03-28 13:20:00'",7.29, 8.04]);  data.addRow(["'28 13:50:00'", "'2014-03-28 13:50:00'",12.28, 13.37]);  data.addRow(["'28 14:20:00'", "'2014-03-28 14:20:00'",14.99, 14.37]);  data.addRow(["'28 14:50:00'", "'2014-03-28 14:50:00'",9.11, 8.24]);  data.addRow(["'28 15:20:00'", "'2014-03-28 15:20:00'",9.99, 12.64]);  data.addRow(["'28 15:50:00'", "'2014-03-28 15:50:00'",6.03, 29.96]);  data.addRow(["'28 16:20:00'", "'2014-03-28 16:20:00'",9.08, 11.37]);  data.addRow(["'28 16:50:00'", "'2014-03-28 16:50:00'",12.04, 38.73]);  data.addRow(["'28 17:20:00'", "'2014-03-28 17:20:00'",23.32, 20.94]);  data.addRow(["'28 17:50:00'", "'2014-03-28 17:50:00'",1.71, 30.38]);  data.addRow(["'28 18:20:00'", "'2014-03-28 18:20:00'",15.79, 12.12]);  data.addRow(["'28 18:50:00'", "'2014-03-28 18:50:00'",2.67, 3.09]);  data.addRow(["'28 19:20:00'", "'2014-03-28 19:20:00'",3.09, 3.60]);  data.addRow(["'28 19:50:00'", "'2014-03-28 19:50:00'",1.42, 4.49]);  data.addRow(["'28 20:20:00'", "'2014-03-28 20:20:00'",0.24, 0.32]);  data.addRow(["'28 20:50:00'", "'2014-03-28 20:50:00'",0.51, 0.73]);  data.addRow(["'28 21:20:00'", "'2014-03-28 21:20:00'",1.59, 2.31]);  data.addRow(["'28 21:50:00'", "'2014-03-28 21:50:00'",0.37, 0.31]);  data.addRow(["'28 22:20:00'", "'2014-03-28 22:20:00'",2.50, 5.30]);  data.addRow(["'28 22:50:00'", "'2014-03-28 22:50:00'",0.10, 0.12]);  data.addRow(["'28 23:20:00'", "'2014-03-28 23:20:00'",0.07, 0.08]);  data.addRow(["'28 23:50:00'", "'2014-03-28 23:50:00'",2.48, 4.10]);  data.addRow(["'29 00:20:00'", "'2014-03-29 00:20:00'",0.09, 0.09]);  data.addRow(["'29 00:50:00'", "'2014-03-29 00:50:00'",0.91, 0.21]);  data.addRow(["'29 01:20:00'", "'2014-03-29 01:20:00'",0.99, 0.79]);  data.addRow(["'29 01:50:00'", "'2014-03-29 01:50:00'",2.78, 1.76]);  data.addRow(["'29 02:20:00'", "'2014-03-29 02:20:00'",0.11, 0.10]);  data.addRow(["'29 02:50:00'", "'2014-03-29 02:50:00'",0.25, 0.27]);  data.addRow(["'29 03:20:00'", "'2014-03-29 03:20:00'",0.22, 0.43]);  data.addRow(["'29 03:50:00'", "'2014-03-29 03:50:00'",0.19, 0.28]);  data.addRow(["'29 04:20:00'", "'2014-03-29 04:20:00'",0.17, 0.24]);  data.addRow(["'29 04:50:00'", "'2014-03-29 04:50:00'",0.18, 0.19]);  data.addRow(["'29 05:20:00'", "'2014-03-29 05:20:00'",0.15, 0.16]);  data.addRow(["'29 05:50:00'", "'2014-03-29 05:50:00'",0.14, 0.21]);  data.addRow(["'29 06:20:00'", "'2014-03-29 06:20:00'",0.10, 0.12]);  data.addRow(["'29 06:50:00'", "'2014-03-29 06:50:00'",0.11, 2.52]);  data.addRow(["'29 07:20:00'", "'2014-03-29 07:20:00'",0.11, 0.12]);  data.addRow(["'29 07:50:00'", "'2014-03-29 07:50:00'",0.19, 0.25]);  data.addRow(["'29 08:20:00'", "'2014-03-29 08:20:00'",0.21, 0.24]);  data.addRow(["'29 08:50:00'", "'2014-03-29 08:50:00'",1.19, 1.57]);  data.addRow(["'29 09:20:00'", "'2014-03-29 09:20:00'",1.28, 1.72]);  data.addRow(["'29 09:50:00'", "'2014-03-29 09:50:00'",0.86, 0.68]);  data.addRow(["'29 10:20:00'", "'2014-03-29 10:20:00'",0.74, 0.72]);  data.addRow(["'29 10:50:00'", "'2014-03-29 10:50:00'",1.32, 1.39]);  data.addRow(["'29 11:20:00'", "'2014-03-29 11:20:00'",1.43, 1.59]);  data.addRow(["'29 11:50:00'", "'2014-03-29 11:50:00'",0.77, 0.85]);  data.addRow(["'29 12:20:00'", "'2014-03-29 12:20:00'",6.03, 10.48]);  data.addRow(["'29 12:50:00'", "'2014-03-29 12:50:00'",0.69, 0.78]);  data.addRow(["'29 13:20:00'", "'2014-03-29 13:20:00'",1.55, 1.27]);  data.addRow(["'29 13:50:00'", "'2014-03-29 13:50:00'",0.60, 0.55]);  data.addRow(["'29 14:20:00'", "'2014-03-29 14:20:00'",0.52, 0.61]);  data.addRow(["'29 14:50:00'", "'2014-03-29 14:50:00'",0.50, 0.56]);  data.addRow(["'29 15:20:00'", "'2014-03-29 15:20:00'",0.58, 0.76]);  data.addRow(["'29 15:50:00'", "'2014-03-29 15:50:00'",1.49, 1.89]);  data.addRow(["'29 16:20:00'", "'2014-03-29 16:20:00'",0.92, 0.97]);  data.addRow(["'29 16:50:00'", "'2014-03-29 16:50:00'",1.32, 1.58]);  data.addRow(["'29 17:20:00'", "'2014-03-29 17:20:00'",11.94, 5.97]);  data.addRow(["'29 17:50:00'", "'2014-03-29 17:50:00'",1.49, 1.75]);  data.addRow(["'29 18:20:00'", "'2014-03-29 18:20:00'",0.55, 0.44]);  data.addRow(["'29 18:50:00'", "'2014-03-29 18:50:00'",0.55, 0.52]);  data.addRow(["'29 19:20:00'", "'2014-03-29 19:20:00'",3.15, 2.01]);  data.addRow(["'29 19:50:00'", "'2014-03-29 19:50:00'",3.14, 4.85]);  data.addRow(["'29 20:20:00'", "'2014-03-29 20:20:00'",0.66, 0.84]);  data.addRow(["'29 20:50:00'", "'2014-03-29 20:50:00'",0.14, 0.27]);  data.addRow(["'29 21:20:00'", "'2014-03-29 21:20:00'",0.11, 0.13]);  data.addRow(["'29 21:50:00'", "'2014-03-29 21:50:00'",0.15, 0.14]);  data.addRow(["'29 22:20:00'", "'2014-03-29 22:20:00'",0.19, 0.26]);  data.addRow(["'29 22:50:00'", "'2014-03-29 22:50:00'",0.00, 0.00]);  data.addRow(["'29 23:20:00'", "'2014-03-29 23:20:00'",0.00, 0.00]);  data.addRow(["'29 23:50:00'", "'2014-03-29 23:50:00'",0.00, 0.00]);  data.addRow(["'30 00:20:00'", "'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow(["'30 00:50:00'", "'2014-03-30 00:50:00'",0.00, 0.00]);  data.addRow(["'30 01:20:00'", "'2014-03-30 01:20:00'",0.00, 0.00]);  data.addRow(["'30 01:50:00'", "'2014-03-30 01:50:00'",0.00, 0.00]);  data.addRow(["'30 02:20:00'", "'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow(["'30 02:50:00'", "'2014-03-30 02:50:00'",0.00, 0.00]);  data.addRow(["'30 03:20:00'", "'2014-03-30 03:20:00'",0.00, 0.00]);  data.addRow(["'30 03:50:00'", "'2014-03-30 03:50:00'",0.00, 0.00]);  data.addRow(["'30 04:20:00'", "'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow(["'30 04:50:00'", "'2014-03-30 04:50:00'",0.00, 0.00]);  data.addRow(["'30 05:20:00'", "'2014-03-30 05:20:00'",0.00, 0.00]);  data.addRow(["'30 05:50:00'", "'2014-03-30 05:50:00'",0.00, 0.00]);  data.addRow(["'30 06:20:00'", "'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow(["'30 06:50:00'", "'2014-03-30 06:50:00'",0.00, 0.00]);  data.addRow(["'30 07:20:00'", "'2014-03-30 07:20:00'",0.00, 0.00]);  data.addRow(["'30 07:50:00'", "'2014-03-30 07:50:00'",0.00, 0.00]);  data.addRow(["'30 08:20:00'", "'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow(["'30 08:50:00'", "'2014-03-30 08:50:00'",0.00, 0.00]);  data.addRow(["'30 09:20:00'", "'2014-03-30 09:20:00'",0.00, 0.00]);  data.addRow(["'30 09:50:00'", "'2014-03-30 09:50:00'",0.00, 0.00]);  data.addRow(["'30 10:20:00'", "'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow(["'30 10:50:00'", "'2014-03-30 10:50:00'",0.00, 0.00]);  data.addRow(["'30 11:20:00'", "'2014-03-30 11:20:00'",0.00, 0.00]);  data.addRow(["'30 11:50:00'", "'2014-03-30 11:50:00'",0.00, 0.00]);  data.addRow(["'30 12:20:00'", "'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow(["'30 12:50:00'", "'2014-03-30 12:50:00'",0.00, 0.00]);  data.addRow(["'30 13:20:00'", "'2014-03-30 13:20:00'",0.00, 0.00]);  data.addRow(["'30 13:50:00'", "'2014-03-30 13:50:00'",0.00, 0.00]);  data.addRow(["'30 14:20:00'", "'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow(["'30 14:50:00'", "'2014-03-30 14:50:00'",0.00, 0.00]);  data.addRow(["'30 15:20:00'", "'2014-03-30 15:20:00'",0.00, 0.00]);  data.addRow(["'30 15:50:00'", "'2014-03-30 15:50:00'",0.00, 0.00]);  data.addRow(["'30 16:20:00'", "'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow(["'30 16:50:00'", "'2014-03-30 16:50:00'",0.00, 0.00]);  data.addRow(["'30 17:20:00'", "'2014-03-30 17:20:00'",0.00, 0.00]);  data.addRow(["'30 17:50:00'", "'2014-03-30 17:50:00'",0.00, 0.00]);  data.addRow(["'30 18:20:00'", "'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow(["'30 18:50:00'", "'2014-03-30 18:50:00'",0.00, 0.00]);  data.addRow(["'30 19:20:00'", "'2014-03-30 19:20:00'",0.00, 0.00]);  data.addRow(["'30 19:50:00'", "'2014-03-30 19:50:00'",0.00, 0.00]);  data.addRow(["'30 20:20:00'", "'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow(["'30 20:50:00'", "'2014-03-30 20:50:00'",0.00, 0.00]);  data.addRow(["'30 21:20:00'", "'2014-03-30 21:20:00'",0.00, 0.00]);  data.addRow(["'30 21:50:00'", "'2014-03-30 21:50:00'",0.00, 0.00]);  data.addRow(["'30 22:20:00'", "'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow(["'30 22:50:00'", "'2014-03-30 22:50:00'",0.00, 0.00]);  data.addRow(["'30 23:20:00'", "'2014-03-30 23:20:00'",0.00, 0.00]);  data.addRow(["'30 23:50:00'", "'2014-03-30 23:50:00'",0.00, 0.00]);  data.addRow(["'31 00:20:00'", "'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow(["'31 00:50:00'", "'2014-03-31 00:50:00'",0.00, 0.00]);  data.addRow(["'31 01:20:00'", "'2014-03-31 01:20:00'",0.00, 0.00]);  data.addRow(["'31 01:50:00'", "'2014-03-31 01:50:00'",0.00, 0.00]);  data.addRow(["'31 02:20:00'", "'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow(["'31 02:50:00'", "'2014-03-31 02:50:00'",0.00, 0.00]);  data.addRow(["'31 03:20:00'", "'2014-03-31 03:20:00'",0.00, 0.00]);  data.addRow(["'31 03:50:00'", "'2014-03-31 03:50:00'",0.00, 0.00]);  data.addRow(["'31 04:20:00'", "'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow(["'31 04:50:00'", "'2014-03-31 04:50:00'",0.00, 0.00]);  data.addRow(["'31 05:20:00'", "'2014-03-31 05:20:00'",0.00, 0.00]);  data.addRow(["'31 05:50:00'", "'2014-03-31 05:50:00'",0.00, 0.00]);  data.addRow(["'31 06:20:00'", "'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow(["'31 06:50:00'", "'2014-03-31 06:50:00'",0.00, 0.00]);  data.addRow(["'31 07:20:00'", "'2014-03-31 07:20:00'",0.00, 0.00]);  data.addRow(["'31 07:50:00'", "'2014-03-31 07:50:00'",0.00, 0.00]);  data.addRow(["'31 08:20:00'", "'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow(["'31 08:50:00'", "'2014-03-31 08:50:00'",0.00, 0.00]);  data.addRow(["'31 09:20:00'", "'2014-03-31 09:20:00'",0.00, 0.00]);  data.addRow(["'31 09:50:00'", "'2014-03-31 09:50:00'",0.00, 0.00]);  data.addRow(["'31 10:20:00'", "'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow(["'31 10:50:00'", "'2014-03-31 10:50:00'",0.00, 0.00]);  data.addRow(["'31 11:20:00'", "'2014-03-31 11:20:00'",0.00, 0.00]);  data.addRow(["'31 11:50:00'", "'2014-03-31 11:50:00'",0.00, 0.00]);  data.addRow(["'31 12:20:00'", "'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow(["'31 12:50:00'", "'2014-03-31 12:50:00'",0.00, 0.00]);  data.addRow(["'31 13:20:00'", "'2014-03-31 13:20:00'",0.00, 0.00]);  data.addRow(["'31 13:50:00'", "'2014-03-31 13:50:00'",0.00, 0.00]);  data.addRow(["'31 14:20:00'", "'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow(["'31 14:50:00'", "'2014-03-31 14:50:00'",0.00, 0.00]);  data.addRow(["'31 15:20:00'", "'2014-03-31 15:20:00'",0.00, 0.00]);  data.addRow(["'31 15:50:00'", "'2014-03-31 15:50:00'",0.00, 0.00]);  data.addRow(["'31 16:20:00'", "'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow(["'31 16:50:00'", "'2014-03-31 16:50:00'",0.00, 0.00]);  data.addRow(["'31 17:20:00'", "'2014-03-31 17:20:00'",0.00, 0.00]);  data.addRow(["'31 17:50:00'", "'2014-03-31 17:50:00'",0.00, 0.00]);  data.addRow(["'31 18:20:00'", "'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow(["'31 18:50:00'", "'2014-03-31 18:50:00'",0.00, 0.00]);  data.addRow(["'31 19:20:00'", "'2014-03-31 19:20:00'",0.00, 0.00]);  data.addRow(["'31 19:50:00'", "'2014-03-31 19:50:00'",0.00, 0.00]);  data.addRow(["'31 20:20:00'", "'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow(["'31 20:50:00'", "'2014-03-31 20:50:00'",0.00, 0.00]);  data.addRow(["'31 21:20:00'", "'2014-03-31 21:20:00'",0.00, 0.00]);  data.addRow(["'31 21:50:00'", "'2014-03-31 21:50:00'",0.00, 0.00]);  data.addRow(["'31 22:20:00'", "'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow(["'31 22:50:00'", "'2014-03-31 22:50:00'",0.00, 0.00]);  data.addRow(["'31 23:20:00'", "'2014-03-31 23:20:00'",0.00, 0.00]);  data.addRow(["'31 23:50:00'", "'2014-03-31 23:50:00'",0.00, 0.00]);  data.addRow(["'01 00:20:00'", "'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow(["'01 00:50:00'", "'2014-04-01 00:50:00'",0.00, 0.00]);  data.addRow(["'01 01:20:00'", "'2014-04-01 01:20:00'",0.00, 0.00]);  data.addRow(["'01 01:50:00'", "'2014-04-01 01:50:00'",0.00, 0.00]);  data.addRow(["'01 02:20:00'", "'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow(["'01 02:50:00'", "'2014-04-01 02:50:00'",0.00, 0.00]);  data.addRow(["'01 03:20:00'", "'2014-04-01 03:20:00'",0.00, 0.00]);  data.addRow(["'01 03:50:00'", "'2014-04-01 03:50:00'",0.00, 0.00]);  data.addRow(["'01 04:20:00'", "'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow(["'01 04:50:00'", "'2014-04-01 04:50:00'",0.00, 0.00]);  data.addRow(["'01 05:20:00'", "'2014-04-01 05:20:00'",0.00, 0.00]);  data.addRow(["'01 05:50:00'", "'2014-04-01 05:50:00'",0.00, 0.00]);  data.addRow(["'01 06:20:00'", "'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow(["'01 06:50:00'", "'2014-04-01 06:50:00'",0.00, 0.00]);  data.addRow(["'01 07:20:00'", "'2014-04-01 07:20:00'",0.00, 0.00]);  data.addRow(["'01 07:50:00'", "'2014-04-01 07:50:00'",0.00, 0.00]);  data.addRow(["'01 08:20:00'", "'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow(["'01 08:50:00'", "'2014-04-01 08:50:00'",0.00, 0.00]);  data.addRow(["'01 09:20:00'", "'2014-04-01 09:20:00'",0.00, 0.00]);  data.addRow(["'01 09:50:00'", "'2014-04-01 09:50:00'",0.00, 0.00]);  data.addRow(["'01 10:20:00'", "'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow(["'01 10:50:00'", "'2014-04-01 10:50:00'",0.00, 0.00]);  data.addRow(["'01 11:20:00'", "'2014-04-01 11:20:00'",0.00, 0.00]);  data.addRow(["'01 11:50:00'", "'2014-04-01 11:50:00'",0.00, 0.00]);  data.addRow(["'01 12:20:00'", "'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow(["'01 12:50:00'", "'2014-04-01 12:50:00'",0.00, 0.00]);  data.addRow(["'01 13:20:00'", "'2014-04-01 13:20:00'",8.14, 7.63]);  data.addRow(["'01 13:50:00'", "'2014-04-01 13:50:00'",9.37, 12.27]);  data.addRow(["'01 14:20:00'", "'2014-04-01 14:20:00'",14.87, 18.24]);  data.addRow(["'01 14:50:00'", "'2014-04-01 14:50:00'",8.48, 9.99]);  data.addRow(["'01 15:20:00'", "'2014-04-01 15:20:00'",9.40, 11.11]);  data.addRow(["'01 15:50:00'", "'2014-04-01 15:50:00'",14.76, 19.61]);  data.addRow(["'01 16:20:00'", "'2014-04-01 16:20:00'",10.47, 10.62]);  data.addRow(["'01 16:50:00'", "'2014-04-01 16:50:00'",9.88, 10.12]);  data.addRow(["'01 17:20:00'", "'2014-04-01 17:20:00'",6.78, 6.65]);  data.addRow(["'01 17:50:00'", "'2014-04-01 17:50:00'",4.97, 5.73]);  data.addRow(["'01 18:20:00'", "'2014-04-01 18:20:00'",3.48, 3.35]);  data.addRow(["'01 18:50:00'", "'2014-04-01 18:50:00'",2.50, 2.73]);  data.addRow(["'01 19:20:00'", "'2014-04-01 19:20:00'",5.12, 4.25]);  data.addRow(["'01 19:50:00'", "'2014-04-01 19:50:00'",7.42, 11.40]);  data.addRow(["'01 20:20:00'", "'2014-04-01 20:20:00'",0.89, 1.01]);  data.addRow(["'01 20:50:00'", "'2014-04-01 20:50:00'",1.55, 1.93]);  data.addRow(["'01 21:20:00'", "'2014-04-01 21:20:00'",1.35, 1.87]);  data.addRow(["'01 21:50:00'", "'2014-04-01 21:50:00'",0.70, 0.85]);  data.addRow(["'01 22:20:00'", "'2014-04-01 22:20:00'",0.61, 0.71]);  data.addRow(["'01 22:50:00'", "'2014-04-01 22:50:00'",1.91, 2.19]);  data.addRow(["'01 23:20:00'", "'2014-04-01 23:20:00'",0.28, 0.32]);  data.addRow(["'01 23:50:00'", "'2014-04-01 23:50:00'",0.38, 0.31]);  data.addRow(["'02 00:20:00'", "'2014-04-02 00:20:00'",1.21, 2.68]);  data.addRow(["'02 00:50:00'", "'2014-04-02 00:50:00'",0.33, 0.51]);  data.addRow(["'02 01:20:00'", "'2014-04-02 01:20:00'",0.13, 0.15]);  data.addRow(["'02 01:50:00'", "'2014-04-02 01:50:00'",0.20, 0.17]);  data.addRow(["'02 02:20:00'", "'2014-04-02 02:20:00'",0.13, 0.13]);  data.addRow(["'02 02:50:00'", "'2014-04-02 02:50:00'",0.21, 0.70]);  data.addRow(["'02 03:20:00'", "'2014-04-02 03:20:00'",0.17, 2.77]);  data.addRow(["'02 03:50:00'", "'2014-04-02 03:50:00'",1.22, 3.00]);  data.addRow(["'02 04:20:00'", "'2014-04-02 04:20:00'",10.03, 16.73]);  data.addRow(["'02 04:50:00'", "'2014-04-02 04:50:00'",0.23, 0.37]);  data.addRow(["'02 05:20:00'", "'2014-04-02 05:20:00'",0.49, 0.67]);  data.addRow(["'02 05:50:00'", "'2014-04-02 05:50:00'",0.20, 0.21]);  data.addRow(["'02 06:20:00'", "'2014-04-02 06:20:00'",2.87, 1.73]);  data.addRow(["'02 06:50:00'", "'2014-04-02 06:50:00'",0.94, 1.30]);  data.addRow(["'02 07:20:00'", "'2014-04-02 07:20:00'",4.57, 6.87]);  data.addRow(["'02 07:50:00'", "'2014-04-02 07:50:00'",3.87, 3.83]);  data.addRow(["'02 08:20:00'", "'2014-04-02 08:20:00'",7.25, 10.05]);  data.addRow(["'02 08:50:00'", "'2014-04-02 08:50:00'",22.44, 17.93]);  data.addRow(["'02 09:20:00'", "'2014-04-02 09:20:00'",20.30, 17.72]);  data.addRow(["'02 09:50:00'", "'2014-04-02 09:50:00'",20.80, 18.47]);  data.addRow(["'02 10:20:00'", "'2014-04-02 10:20:00'",15.60, 24.77]);  data.addRow(["'02 10:50:00'", "'2014-04-02 10:50:00'",11.43, 10.78]);  data.addRow(["'02 11:20:00'", "'2014-04-02 11:20:00'",6.58, 7.13]);  data.addRow(["'02 11:50:00'", "'2014-04-02 11:50:00'",19.24, 23.24]);  data.addRow(["'02 12:20:00'", "'2014-04-02 12:20:00'",14.12, 18.13]);  data.addRow(["'02 12:50:00'", "'2014-04-02 12:50:00'",24.05, 19.34]);  data.addRow(["'02 13:20:00'", "'2014-04-02 13:20:00'",8.76, 10.75]);  data.addRow(["'02 13:50:00'", "'2014-04-02 13:50:00'",9.39, 9.77]);  data.addRow(["'02 14:20:00'", "'2014-04-02 14:20:00'",7.47, 10.04]);  data.addRow(["'02 14:50:00'", "'2014-04-02 14:50:00'",0.00, 0.00]); 

	var graphtitle='FIU to CUH Traffic Packets Max: 186.86 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='186'

	
        
      
	