
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow([ "'03 05 16:20:00'","'2014-03-05 16:20:00'",5.77, 5.60]);  data.addRow([ "'03 05 18:20:00'","'2014-03-05 18:20:00'",3.55, 3.53]);  data.addRow([ "'03 05 20:20:00'","'2014-03-05 20:20:00'",2.81, 2.94]);  data.addRow([ "'03 05 22:20:00'","'2014-03-05 22:20:00'",2.55, 2.73]);  data.addRow([ "'03 06 00:20:00'","'2014-03-06 00:20:00'",2.05, 2.25]);  data.addRow([ "'03 06 02:20:00'","'2014-03-06 02:20:00'",1.80, 1.99]);  data.addRow([ "'03 06 04:20:00'","'2014-03-06 04:20:00'",1.67, 1.88]);  data.addRow([ "'03 06 06:20:00'","'2014-03-06 06:20:00'",1.74, 1.95]);  data.addRow([ "'03 06 08:20:00'","'2014-03-06 08:20:00'",2.94, 3.01]);  data.addRow([ "'03 06 10:20:00'","'2014-03-06 10:20:00'",5.13, 4.99]);  data.addRow([ "'03 06 12:20:00'","'2014-03-06 12:20:00'",5.62, 5.45]);  data.addRow([ "'03 06 14:20:00'","'2014-03-06 14:20:00'",6.11, 5.92]);  data.addRow([ "'03 06 16:20:00'","'2014-03-06 16:20:00'",5.87, 5.74]);  data.addRow([ "'03 06 18:20:00'","'2014-03-06 18:20:00'",3.74, 3.71]);  data.addRow([ "'03 06 20:20:00'","'2014-03-06 20:20:00'",3.07, 3.20]);  data.addRow([ "'03 06 22:20:00'","'2014-03-06 22:20:00'",2.57, 2.70]);  data.addRow([ "'03 07 00:20:00'","'2014-03-07 00:20:00'",2.13, 2.32]);  data.addRow([ "'03 07 02:20:00'","'2014-03-07 02:20:00'",1.88, 2.07]);  data.addRow([ "'03 07 04:20:00'","'2014-03-07 04:20:00'",1.69, 1.91]);  data.addRow([ "'03 07 06:20:00'","'2014-03-07 06:20:00'",1.41, 1.71]);  data.addRow([ "'03 07 08:20:00'","'2014-03-07 08:20:00'",2.52, 2.72]);  data.addRow([ "'03 07 10:20:00'","'2014-03-07 10:20:00'",4.28, 4.25]);  data.addRow([ "'03 07 12:20:00'","'2014-03-07 12:20:00'",4.85, 4.75]);  data.addRow([ "'03 07 14:20:00'","'2014-03-07 14:20:00'",4.52, 4.45]);  data.addRow([ "'03 07 16:20:00'","'2014-03-07 16:20:00'",3.44, 3.46]);  data.addRow([ "'03 07 18:20:00'","'2014-03-07 18:20:00'",2.64, 2.83]);  data.addRow([ "'03 07 20:20:00'","'2014-03-07 20:20:00'",1.97, 2.21]);  data.addRow([ "'03 07 22:20:00'","'2014-03-07 22:20:00'",2.31, 2.50]);  data.addRow([ "'03 08 00:20:00'","'2014-03-08 00:20:00'",1.72, 1.92]);  data.addRow([ "'03 08 02:20:00'","'2014-03-08 02:20:00'",1.57, 1.80]);  data.addRow([ "'03 08 04:20:00'","'2014-03-08 04:20:00'",1.49, 1.71]);  data.addRow([ "'03 08 06:20:00'","'2014-03-08 06:20:00'",1.47, 1.70]);  data.addRow([ "'03 08 08:20:00'","'2014-03-08 08:20:00'",1.58, 1.79]);  data.addRow([ "'03 08 10:20:00'","'2014-03-08 10:20:00'",1.81, 1.98]);  data.addRow([ "'03 08 12:20:00'","'2014-03-08 12:20:00'",2.09, 2.26]);  data.addRow([ "'03 08 14:20:00'","'2014-03-08 14:20:00'",2.06, 2.24]);  data.addRow([ "'03 08 16:20:00'","'2014-03-08 16:20:00'",1.95, 2.09]);  data.addRow([ "'03 08 18:20:00'","'2014-03-08 18:20:00'",1.69, 1.87]);  data.addRow([ "'03 08 20:20:00'","'2014-03-08 20:20:00'",1.50, 1.71]);  data.addRow([ "'03 08 22:20:00'","'2014-03-08 22:20:00'",1.31, 1.52]);  data.addRow([ "'03 09 00:20:00'","'2014-03-09 00:20:00'",0.96, 1.20]);  data.addRow([ "'03 09 02:20:00'","'2014-03-09 02:20:00'",1.18, 1.42]);  data.addRow([ "'03 09 04:20:00'","'2014-03-09 04:20:00'",1.24, 1.49]);  data.addRow([ "'03 09 06:20:00'","'2014-03-09 06:20:00'",1.21, 1.43]);  data.addRow([ "'03 09 08:20:00'","'2014-03-09 08:20:00'",1.18, 1.41]);  data.addRow([ "'03 09 10:20:00'","'2014-03-09 10:20:00'",1.17, 1.46]);  data.addRow([ "'03 09 12:20:00'","'2014-03-09 12:20:00'",1.25, 1.48]);  data.addRow([ "'03 09 14:20:00'","'2014-03-09 14:20:00'",1.50, 1.72]);  data.addRow([ "'03 09 16:20:00'","'2014-03-09 16:20:00'",1.75, 1.90]);  data.addRow([ "'03 09 18:20:00'","'2014-03-09 18:20:00'",1.99, 2.17]);  data.addRow([ "'03 09 20:20:00'","'2014-03-09 20:20:00'",1.88, 2.04]);  data.addRow([ "'03 09 22:20:00'","'2014-03-09 22:20:00'",1.69, 1.93]);  data.addRow([ "'03 10 00:20:00'","'2014-03-10 00:20:00'",1.33, 1.54]);  data.addRow([ "'03 10 02:20:00'","'2014-03-10 02:20:00'",0.95, 1.22]);  data.addRow([ "'03 10 04:20:00'","'2014-03-10 04:20:00'",0.87, 1.09]);  data.addRow([ "'03 10 06:20:00'","'2014-03-10 06:20:00'",0.88, 1.11]);  data.addRow([ "'03 10 08:20:00'","'2014-03-10 08:20:00'",2.26, 2.43]);  data.addRow([ "'03 10 10:20:00'","'2014-03-10 10:20:00'",5.45, 5.26]);  data.addRow([ "'03 10 12:20:00'","'2014-03-10 12:20:00'",6.03, 5.84]);  data.addRow([ "'03 10 14:20:00'","'2014-03-10 14:20:00'",5.85, 5.71]);  data.addRow([ "'03 10 16:20:00'","'2014-03-10 16:20:00'",5.19, 5.04]);  data.addRow([ "'03 10 18:20:00'","'2014-03-10 18:20:00'",3.04, 3.06]);  data.addRow([ "'03 10 20:20:00'","'2014-03-10 20:20:00'",2.54, 2.62]);  data.addRow([ "'03 10 22:20:00'","'2014-03-10 22:20:00'",2.14, 2.39]);  data.addRow([ "'03 11 00:20:00'","'2014-03-11 00:20:00'",1.65, 1.86]);  data.addRow([ "'03 11 02:20:00'","'2014-03-11 02:20:00'",1.16, 1.46]);  data.addRow([ "'03 11 04:20:00'","'2014-03-11 04:20:00'",1.12, 1.37]);  data.addRow([ "'03 11 06:20:00'","'2014-03-11 06:20:00'",1.05, 1.32]);  data.addRow([ "'03 11 08:20:00'","'2014-03-11 08:20:00'",4.73, 4.76]);  data.addRow([ "'03 11 10:20:00'","'2014-03-11 10:20:00'",4.98, 4.91]);  data.addRow([ "'03 11 12:20:00'","'2014-03-11 12:20:00'",5.26, 5.14]);  data.addRow([ "'03 11 14:20:00'","'2014-03-11 14:20:00'",5.97, 5.79]);  data.addRow([ "'03 11 16:20:00'","'2014-03-11 16:20:00'",5.39, 5.22]);  data.addRow([ "'03 11 18:20:00'","'2014-03-11 18:20:00'",3.24, 3.22]);  data.addRow([ "'03 11 20:20:00'","'2014-03-11 20:20:00'",2.41, 2.61]);  data.addRow([ "'03 11 22:20:00'","'2014-03-11 22:20:00'",1.94, 2.14]);  data.addRow([ "'03 12 00:20:00'","'2014-03-12 00:20:00'",1.61, 1.81]);  data.addRow([ "'03 12 02:20:00'","'2014-03-12 02:20:00'",1.09, 1.34]);  data.addRow([ "'03 12 04:20:00'","'2014-03-12 04:20:00'",0.94, 1.22]);  data.addRow([ "'03 12 06:20:00'","'2014-03-12 06:20:00'",1.14, 1.42]);  data.addRow([ "'03 12 08:20:00'","'2014-03-12 08:20:00'",2.76, 2.89]);  data.addRow([ "'03 12 10:20:00'","'2014-03-12 10:20:00'",5.73, 5.57]);  data.addRow([ "'03 12 12:20:00'","'2014-03-12 12:20:00'",5.81, 5.65]);  data.addRow([ "'03 12 14:20:00'","'2014-03-12 14:20:00'",5.75, 5.48]);  data.addRow([ "'03 12 16:20:00'","'2014-03-12 16:20:00'",5.12, 4.87]);  data.addRow([ "'03 12 18:20:00'","'2014-03-12 18:20:00'",3.23, 3.17]);  data.addRow([ "'03 12 20:20:00'","'2014-03-12 20:20:00'",2.27, 2.36]);  data.addRow([ "'03 12 22:20:00'","'2014-03-12 22:20:00'",2.03, 2.22]);  data.addRow([ "'03 13 00:20:00'","'2014-03-13 00:20:00'",1.75, 1.92]);  data.addRow([ "'03 13 02:20:00'","'2014-03-13 02:20:00'",1.21, 1.43]);  data.addRow([ "'03 13 04:20:00'","'2014-03-13 04:20:00'",1.34, 1.56]);  data.addRow([ "'03 13 06:20:00'","'2014-03-13 06:20:00'",1.18, 1.40]);  data.addRow([ "'03 13 08:20:00'","'2014-03-13 08:20:00'",2.41, 2.50]);  data.addRow([ "'03 13 10:20:00'","'2014-03-13 10:20:00'",4.60, 4.51]);  data.addRow([ "'03 13 12:20:00'","'2014-03-13 12:20:00'",4.62, 4.57]);  data.addRow([ "'03 13 14:20:00'","'2014-03-13 14:20:00'",6.09, 5.88]);  data.addRow([ "'03 13 16:20:00'","'2014-03-13 16:20:00'",6.03, 5.86]);  data.addRow([ "'03 13 18:20:00'","'2014-03-13 18:20:00'",3.67, 3.69]);  data.addRow([ "'03 13 20:20:00'","'2014-03-13 20:20:00'",2.68, 2.82]);  data.addRow([ "'03 13 22:20:00'","'2014-03-13 22:20:00'",1.67, 1.88]);  data.addRow([ "'03 14 00:20:00'","'2014-03-14 00:20:00'",1.21, 1.42]);  data.addRow([ "'03 14 02:20:00'","'2014-03-14 02:20:00'",1.29, 1.56]);  data.addRow([ "'03 14 04:20:00'","'2014-03-14 04:20:00'",1.27, 1.51]);  data.addRow([ "'03 14 06:20:00'","'2014-03-14 06:20:00'",1.33, 1.55]);  data.addRow([ "'03 14 08:20:00'","'2014-03-14 08:20:00'",2.73, 2.84]);  data.addRow([ "'03 14 10:20:00'","'2014-03-14 10:20:00'",5.19, 5.09]);  data.addRow([ "'03 14 12:20:00'","'2014-03-14 12:20:00'",5.18, 5.04]);  data.addRow([ "'03 14 14:20:00'","'2014-03-14 14:20:00'",4.55, 4.46]);  data.addRow([ "'03 14 16:20:00'","'2014-03-14 16:20:00'",4.26, 4.17]);  data.addRow([ "'03 14 18:20:00'","'2014-03-14 18:20:00'",2.30, 2.44]);  data.addRow([ "'03 14 20:20:00'","'2014-03-14 20:20:00'",1.47, 1.67]);  data.addRow([ "'03 14 22:20:00'","'2014-03-14 22:20:00'",1.61, 1.80]);  data.addRow([ "'03 15 00:20:00'","'2014-03-15 00:20:00'",1.47, 1.69]);  data.addRow([ "'03 15 02:20:00'","'2014-03-15 02:20:00'",1.53, 1.73]);  data.addRow([ "'03 15 04:20:00'","'2014-03-15 04:20:00'",1.46, 1.68]);  data.addRow([ "'03 15 06:20:00'","'2014-03-15 06:20:00'",1.49, 1.71]);  data.addRow([ "'03 15 08:20:00'","'2014-03-15 08:20:00'",1.42, 1.65]);  data.addRow([ "'03 15 10:20:00'","'2014-03-15 10:20:00'",1.94, 2.13]);  data.addRow([ "'03 15 12:20:00'","'2014-03-15 12:20:00'",2.29, 2.42]);  data.addRow([ "'03 15 14:20:00'","'2014-03-15 14:20:00'",2.20, 2.35]);  data.addRow([ "'03 15 16:20:00'","'2014-03-15 16:20:00'",2.49, 2.66]);  data.addRow([ "'03 15 18:20:00'","'2014-03-15 18:20:00'",2.21, 2.37]);  data.addRow([ "'03 15 20:20:00'","'2014-03-15 20:20:00'",2.03, 2.20]);  data.addRow([ "'03 15 22:20:00'","'2014-03-15 22:20:00'",1.88, 2.06]);  data.addRow([ "'03 16 00:20:00'","'2014-03-16 00:20:00'",1.80, 1.99]);  data.addRow([ "'03 16 02:20:00'","'2014-03-16 02:20:00'",1.49, 1.67]);  data.addRow([ "'03 16 04:20:00'","'2014-03-16 04:20:00'",1.57, 1.79]);  data.addRow([ "'03 16 06:20:00'","'2014-03-16 06:20:00'",1.48, 1.69]);  data.addRow([ "'03 16 08:20:00'","'2014-03-16 08:20:00'",1.49, 1.75]);  data.addRow([ "'03 16 10:20:00'","'2014-03-16 10:20:00'",1.35, 1.72]);  data.addRow([ "'03 16 12:20:00'","'2014-03-16 12:20:00'",1.58, 1.77]);  data.addRow([ "'03 16 14:20:00'","'2014-03-16 14:20:00'",1.71, 1.91]);  data.addRow([ "'03 16 16:20:00'","'2014-03-16 16:20:00'",1.80, 1.99]);  data.addRow([ "'03 16 18:20:00'","'2014-03-16 18:20:00'",2.18, 2.32]);  data.addRow([ "'03 16 20:20:00'","'2014-03-16 20:20:00'",2.25, 2.39]);  data.addRow([ "'03 16 22:20:00'","'2014-03-16 22:20:00'",1.92, 2.10]);  data.addRow([ "'03 17 00:20:00'","'2014-03-17 00:20:00'",1.77, 2.01]);  data.addRow([ "'03 17 02:20:00'","'2014-03-17 02:20:00'",1.66, 1.85]);  data.addRow([ "'03 17 04:20:00'","'2014-03-17 04:20:00'",1.50, 1.73]);  data.addRow([ "'03 17 06:20:00'","'2014-03-17 06:20:00'",1.44, 1.63]);  data.addRow([ "'03 17 08:20:00'","'2014-03-17 08:20:00'",2.91, 2.98]);  data.addRow([ "'03 17 10:20:00'","'2014-03-17 10:20:00'",5.99, 5.96]);  data.addRow([ "'03 17 12:20:00'","'2014-03-17 12:20:00'",6.52, 6.32]);  data.addRow([ "'03 17 14:20:00'","'2014-03-17 14:20:00'",6.10, 5.90]);  data.addRow([ "'03 17 16:20:00'","'2014-03-17 16:20:00'",5.58, 5.41]);  data.addRow([ "'03 17 18:20:00'","'2014-03-17 18:20:00'",3.55, 3.53]);  data.addRow([ "'03 17 20:20:00'","'2014-03-17 20:20:00'",3.23, 3.28]);  data.addRow([ "'03 17 22:20:00'","'2014-03-17 22:20:00'",2.85, 2.97]);  data.addRow([ "'03 18 00:20:00'","'2014-03-18 00:20:00'",2.31, 2.48]);  data.addRow([ "'03 18 02:20:00'","'2014-03-18 02:20:00'",1.94, 2.11]);  data.addRow([ "'03 18 04:20:00'","'2014-03-18 04:20:00'",1.87, 2.08]);  data.addRow([ "'03 18 06:20:00'","'2014-03-18 06:20:00'",1.77, 1.98]);  data.addRow([ "'03 18 08:20:00'","'2014-03-18 08:20:00'",3.39, 3.45]);  data.addRow([ "'03 18 10:20:00'","'2014-03-18 10:20:00'",5.38, 5.27]);  data.addRow([ "'03 18 12:20:00'","'2014-03-18 12:20:00'",5.65, 5.46]);  data.addRow([ "'03 18 14:20:00'","'2014-03-18 14:20:00'",6.96, 6.72]);  data.addRow([ "'03 18 16:20:00'","'2014-03-18 16:20:00'",6.14, 5.97]);  data.addRow([ "'03 18 18:20:00'","'2014-03-18 18:20:00'",4.09, 4.09]);  data.addRow([ "'03 18 20:20:00'","'2014-03-18 20:20:00'",3.51, 3.54]);  data.addRow([ "'03 18 22:20:00'","'2014-03-18 22:20:00'",2.95, 3.03]);  data.addRow([ "'03 19 00:20:00'","'2014-03-19 00:20:00'",2.33, 2.50]);  data.addRow([ "'03 19 02:20:00'","'2014-03-19 02:20:00'",1.86, 2.03]);  data.addRow([ "'03 19 04:20:00'","'2014-03-19 04:20:00'",1.55, 1.78]);  data.addRow([ "'03 19 06:20:00'","'2014-03-19 06:20:00'",1.53, 1.74]);  data.addRow([ "'03 19 08:20:00'","'2014-03-19 08:20:00'",2.74, 2.89]);  data.addRow([ "'03 19 10:20:00'","'2014-03-19 10:20:00'",5.32, 5.20]);  data.addRow([ "'03 19 12:20:00'","'2014-03-19 12:20:00'",6.04, 6.11]);  data.addRow([ "'03 19 14:20:00'","'2014-03-19 14:20:00'",5.84, 5.69]);  data.addRow([ "'03 19 16:20:00'","'2014-03-19 16:20:00'",5.70, 5.56]);  data.addRow([ "'03 19 18:20:00'","'2014-03-19 18:20:00'",3.09, 3.14]);  data.addRow([ "'03 19 20:20:00'","'2014-03-19 20:20:00'",2.62, 2.79]);  data.addRow([ "'03 19 22:20:00'","'2014-03-19 22:20:00'",2.05, 2.24]);  data.addRow([ "'03 20 00:20:00'","'2014-03-20 00:20:00'",1.61, 1.74]);  data.addRow([ "'03 20 02:20:00'","'2014-03-20 02:20:00'",1.10, 1.36]);  data.addRow([ "'03 20 04:20:00'","'2014-03-20 04:20:00'",0.93, 1.20]);  data.addRow([ "'03 20 06:20:00'","'2014-03-20 06:20:00'",0.86, 1.13]);  data.addRow([ "'03 20 08:20:00'","'2014-03-20 08:20:00'",2.40, 2.53]);  data.addRow([ "'03 20 10:20:00'","'2014-03-20 10:20:00'",5.21, 5.08]);  data.addRow([ "'03 20 12:20:00'","'2014-03-20 12:20:00'",5.67, 5.55]);  data.addRow([ "'03 20 14:20:00'","'2014-03-20 14:20:00'",6.12, 5.95]);  data.addRow([ "'03 20 16:20:00'","'2014-03-20 16:20:00'",5.88, 5.74]);  data.addRow([ "'03 20 18:20:00'","'2014-03-20 18:20:00'",3.82, 3.83]);  data.addRow([ "'03 20 20:20:00'","'2014-03-20 20:20:00'",2.78, 2.89]);  data.addRow([ "'03 20 22:20:00'","'2014-03-20 22:20:00'",2.29, 2.50]);  data.addRow([ "'03 21 00:20:00'","'2014-03-21 00:20:00'",1.64, 1.82]);  data.addRow([ "'03 21 02:20:00'","'2014-03-21 02:20:00'",0.43, 0.52]);  data.addRow([ "'03 21 04:20:00'","'2014-03-21 04:20:00'",1.15, 1.41]);  data.addRow([ "'03 21 06:20:00'","'2014-03-21 06:20:00'",1.15, 1.41]);  data.addRow([ "'03 21 08:20:00'","'2014-03-21 08:20:00'",2.50, 2.61]);  data.addRow([ "'03 21 10:20:00'","'2014-03-21 10:20:00'",4.64, 4.62]);  data.addRow([ "'03 21 12:20:00'","'2014-03-21 12:20:00'",4.92, 4.83]);  data.addRow([ "'03 21 14:20:00'","'2014-03-21 14:20:00'",4.22, 4.18]);  data.addRow([ "'03 21 16:20:00'","'2014-03-21 16:20:00'",3.70, 3.69]);  data.addRow([ "'03 21 18:20:00'","'2014-03-21 18:20:00'",2.18, 2.39]);  data.addRow([ "'03 21 20:20:00'","'2014-03-21 20:20:00'",1.85, 2.00]);  data.addRow([ "'03 21 22:20:00'","'2014-03-21 22:20:00'",1.63, 1.84]);  data.addRow([ "'03 22 00:20:00'","'2014-03-22 00:20:00'",1.37, 1.60]);  data.addRow([ "'03 22 02:20:00'","'2014-03-22 02:20:00'",1.08, 1.37]);  data.addRow([ "'03 22 04:20:00'","'2014-03-22 04:20:00'",0.86, 1.16]);  data.addRow([ "'03 22 06:20:00'","'2014-03-22 06:20:00'",0.82, 1.11]);  data.addRow([ "'03 22 08:20:00'","'2014-03-22 08:20:00'",0.78, 1.07]);  data.addRow([ "'03 22 10:20:00'","'2014-03-22 10:20:00'",1.07, 1.44]);  data.addRow([ "'03 22 12:20:00'","'2014-03-22 12:20:00'",1.26, 1.52]);  data.addRow([ "'03 22 14:20:00'","'2014-03-22 14:20:00'",1.26, 1.52]);  data.addRow([ "'03 22 16:20:00'","'2014-03-22 16:20:00'",1.47, 1.70]);  data.addRow([ "'03 22 18:20:00'","'2014-03-22 18:20:00'",1.73, 1.87]);  data.addRow([ "'03 22 20:20:00'","'2014-03-22 20:20:00'",1.59, 1.83]);  data.addRow([ "'03 22 22:20:00'","'2014-03-22 22:20:00'",1.25, 1.51]);  data.addRow([ "'03 23 00:20:00'","'2014-03-23 00:20:00'",0.87, 1.13]);  data.addRow([ "'03 23 02:20:00'","'2014-03-23 02:20:00'",0.77, 1.04]);  data.addRow([ "'03 23 04:20:00'","'2014-03-23 04:20:00'",0.76, 1.05]);  data.addRow([ "'03 23 06:20:00'","'2014-03-23 06:20:00'",0.70, 0.98]);  data.addRow([ "'03 23 08:20:00'","'2014-03-23 08:20:00'",0.68, 0.97]);  data.addRow([ "'03 23 10:20:00'","'2014-03-23 10:20:00'",0.84, 1.18]);  data.addRow([ "'03 23 12:20:00'","'2014-03-23 12:20:00'",1.01, 1.26]);  data.addRow([ "'03 23 14:20:00'","'2014-03-23 14:20:00'",1.04, 1.28]);  data.addRow([ "'03 23 16:20:00'","'2014-03-23 16:20:00'",1.18, 1.37]);  data.addRow([ "'03 23 18:20:00'","'2014-03-23 18:20:00'",1.46, 1.65]);  data.addRow([ "'03 23 20:20:00'","'2014-03-23 20:20:00'",1.58, 1.77]);  data.addRow([ "'03 23 22:20:00'","'2014-03-23 22:20:00'",1.98, 2.28]);  data.addRow([ "'03 24 00:20:00'","'2014-03-24 00:20:00'",1.40, 1.60]);  data.addRow([ "'03 24 02:20:00'","'2014-03-24 02:20:00'",1.14, 1.38]);  data.addRow([ "'03 24 04:20:00'","'2014-03-24 04:20:00'",0.95, 1.20]);  data.addRow([ "'03 24 06:20:00'","'2014-03-24 06:20:00'",0.88, 1.09]);  data.addRow([ "'03 24 08:20:00'","'2014-03-24 08:20:00'",2.38, 2.43]);  data.addRow([ "'03 24 10:20:00'","'2014-03-24 10:20:00'",5.54, 5.35]);  data.addRow([ "'03 24 12:20:00'","'2014-03-24 12:20:00'",5.85, 5.66]);  data.addRow([ "'03 24 14:20:00'","'2014-03-24 14:20:00'",5.59, 5.38]);  data.addRow([ "'03 24 16:20:00'","'2014-03-24 16:20:00'",4.95, 4.82]);  data.addRow([ "'03 24 18:20:00'","'2014-03-24 18:20:00'",3.09, 3.08]);  data.addRow([ "'03 24 20:20:00'","'2014-03-24 20:20:00'",2.45, 2.54]);  data.addRow([ "'03 24 22:20:00'","'2014-03-24 22:20:00'",1.99, 2.13]);  data.addRow([ "'03 25 00:20:00'","'2014-03-25 00:20:00'",1.44, 1.64]);  data.addRow([ "'03 25 02:20:00'","'2014-03-25 02:20:00'",1.02, 1.25]);  data.addRow([ "'03 25 04:20:00'","'2014-03-25 04:20:00'",0.95, 1.26]);  data.addRow([ "'03 25 06:20:00'","'2014-03-25 06:20:00'",1.24, 1.47]);  data.addRow([ "'03 25 08:20:00'","'2014-03-25 08:20:00'",2.31, 2.43]);  data.addRow([ "'03 25 10:20:00'","'2014-03-25 10:20:00'",4.89, 4.77]);  data.addRow([ "'03 25 12:20:00'","'2014-03-25 12:20:00'",5.60, 5.46]);  data.addRow([ "'03 25 14:20:00'","'2014-03-25 14:20:00'",6.48, 6.27]);  data.addRow([ "'03 25 16:20:00'","'2014-03-25 16:20:00'",6.14, 5.98]);  data.addRow([ "'03 25 18:20:00'","'2014-03-25 18:20:00'",3.90, 3.87]);  data.addRow([ "'03 25 20:20:00'","'2014-03-25 20:20:00'",2.99, 3.05]);  data.addRow([ "'03 25 22:20:00'","'2014-03-25 22:20:00'",2.43, 2.59]);  data.addRow([ "'03 26 00:20:00'","'2014-03-26 00:20:00'",2.04, 2.25]);  data.addRow([ "'03 26 02:20:00'","'2014-03-26 02:20:00'",1.52, 1.76]);  data.addRow([ "'03 26 04:20:00'","'2014-03-26 04:20:00'",1.26, 1.54]);  data.addRow([ "'03 26 06:20:00'","'2014-03-26 06:20:00'",1.17, 1.46]);  data.addRow([ "'03 26 08:20:00'","'2014-03-26 08:20:00'",2.48, 2.63]);  data.addRow([ "'03 26 10:20:00'","'2014-03-26 10:20:00'",5.50, 5.37]);  data.addRow([ "'03 26 12:20:00'","'2014-03-26 12:20:00'",6.51, 6.33]);  data.addRow([ "'03 26 14:20:00'","'2014-03-26 14:20:00'",6.22, 5.99]);  data.addRow([ "'03 26 16:20:00'","'2014-03-26 16:20:00'",5.89, 5.69]);  data.addRow([ "'03 26 18:20:00'","'2014-03-26 18:20:00'",3.74, 3.70]);  data.addRow([ "'03 26 20:20:00'","'2014-03-26 20:20:00'",2.96, 3.04]);  data.addRow([ "'03 26 22:20:00'","'2014-03-26 22:20:00'",2.50, 2.67]);  data.addRow([ "'03 27 00:20:00'","'2014-03-27 00:20:00'",1.94, 2.13]);  data.addRow([ "'03 27 02:20:00'","'2014-03-27 02:20:00'",1.44, 1.67]);  data.addRow([ "'03 27 04:20:00'","'2014-03-27 04:20:00'",1.50, 1.94]);  data.addRow([ "'03 27 06:20:00'","'2014-03-27 06:20:00'",1.22, 1.48]);  data.addRow([ "'03 27 08:20:00'","'2014-03-27 08:20:00'",2.27, 2.41]);  data.addRow([ "'03 27 10:20:00'","'2014-03-27 10:20:00'",4.79, 4.67]);  data.addRow([ "'03 27 12:20:00'","'2014-03-27 12:20:00'",4.84, 4.82]);  data.addRow([ "'03 27 14:20:00'","'2014-03-27 14:20:00'",5.29, 5.18]);  data.addRow([ "'03 27 16:20:00'","'2014-03-27 16:20:00'",4.84, 4.76]);  data.addRow([ "'03 27 18:20:00'","'2014-03-27 18:20:00'",3.05, 3.11]);  data.addRow([ "'03 27 20:20:00'","'2014-03-27 20:20:00'",2.88, 3.03]);  data.addRow([ "'03 27 22:20:00'","'2014-03-27 22:20:00'",2.65, 2.63]);  data.addRow([ "'03 28 00:20:00'","'2014-03-28 00:20:00'",1.58, 1.75]);  data.addRow([ "'03 28 02:20:00'","'2014-03-28 02:20:00'",1.06, 1.26]);  data.addRow([ "'03 28 04:20:00'","'2014-03-28 04:20:00'",1.00, 1.25]);  data.addRow([ "'03 28 06:20:00'","'2014-03-28 06:20:00'",1.14, 1.38]);  data.addRow([ "'03 28 08:20:00'","'2014-03-28 08:20:00'",3.27, 3.34]);  data.addRow([ "'03 28 10:20:00'","'2014-03-28 10:20:00'",6.08, 5.85]);  data.addRow([ "'03 28 12:20:00'","'2014-03-28 12:20:00'",4.79, 4.70]);  data.addRow([ "'03 28 14:20:00'","'2014-03-28 14:20:00'",4.03, 4.00]);  data.addRow([ "'03 28 16:20:00'","'2014-03-28 16:20:00'",3.30, 3.34]);  data.addRow([ "'03 28 18:20:00'","'2014-03-28 18:20:00'",1.87, 2.08]);  data.addRow([ "'03 28 20:20:00'","'2014-03-28 20:20:00'",1.54, 1.79]);  data.addRow([ "'03 28 22:20:00'","'2014-03-28 22:20:00'",1.02, 1.28]);  data.addRow([ "'03 29 00:20:00'","'2014-03-29 00:20:00'",0.78, 1.05]);  data.addRow([ "'03 29 02:20:00'","'2014-03-29 02:20:00'",0.71, 1.03]);  data.addRow([ "'03 29 04:20:00'","'2014-03-29 04:20:00'",0.71, 1.03]);  data.addRow([ "'03 29 06:20:00'","'2014-03-29 06:20:00'",0.69, 0.98]);  data.addRow([ "'03 29 08:20:00'","'2014-03-29 08:20:00'",0.92, 1.21]);  data.addRow([ "'03 29 10:20:00'","'2014-03-29 10:20:00'",1.12, 1.38]);  data.addRow([ "'03 29 12:20:00'","'2014-03-29 12:20:00'",1.58, 1.79]);  data.addRow([ "'03 29 14:20:00'","'2014-03-29 14:20:00'",1.69, 1.88]);  data.addRow([ "'03 29 16:20:00'","'2014-03-29 16:20:00'",2.71, 2.82]);  data.addRow([ "'03 29 18:20:00'","'2014-03-29 18:20:00'",2.73, 2.87]);  data.addRow([ "'03 29 20:20:00'","'2014-03-29 20:20:00'",2.29, 2.49]);  data.addRow([ "'03 29 22:20:00'","'2014-03-29 22:20:00'",2.18, 2.35]);  data.addRow([ "'03 30 00:20:00'","'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 02:20:00'","'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 04:20:00'","'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 06:20:00'","'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 08:20:00'","'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 10:20:00'","'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 12:20:00'","'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 14:20:00'","'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 16:20:00'","'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 18:20:00'","'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 20:20:00'","'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 22:20:00'","'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 00:20:00'","'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 02:20:00'","'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 04:20:00'","'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 06:20:00'","'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 08:20:00'","'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 10:20:00'","'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 12:20:00'","'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 14:20:00'","'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 16:20:00'","'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 18:20:00'","'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 20:20:00'","'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 22:20:00'","'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 00:20:00'","'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 02:20:00'","'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 04:20:00'","'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 06:20:00'","'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 08:20:00'","'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 10:20:00'","'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 12:20:00'","'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 14:20:00'","'2014-04-01 14:20:00'",4.58, 4.51]);  data.addRow([ "'04 01 16:20:00'","'2014-04-01 16:20:00'",6.75, 6.67]);  data.addRow([ "'04 01 18:20:00'","'2014-04-01 18:20:00'",4.41, 4.47]);  data.addRow([ "'04 01 20:20:00'","'2014-04-01 20:20:00'",3.39, 3.57]);  data.addRow([ "'04 01 22:20:00'","'2014-04-01 22:20:00'",2.89, 3.19]);  data.addRow([ "'04 02 00:20:00'","'2014-04-02 00:20:00'",2.26, 2.62]);  data.addRow([ "'04 02 02:20:00'","'2014-04-02 02:20:00'",1.47, 1.90]);  data.addRow([ "'04 02 04:20:00'","'2014-04-02 04:20:00'",1.18, 1.60]);  data.addRow([ "'04 02 06:20:00'","'2014-04-02 06:20:00'",1.16, 1.58]);  data.addRow([ "'04 02 08:20:00'","'2014-04-02 08:20:00'",2.63, 2.90]);  data.addRow([ "'04 02 10:20:00'","'2014-04-02 10:20:00'",5.88, 5.81]);  data.addRow([ "'04 02 12:20:00'","'2014-04-02 12:20:00'",6.31, 6.34]);  data.addRow([ "'04 02 14:20:00'","'2014-04-02 14:20:00'",5.64, 5.68]);  data.addRow([ "'04 02 16:20:00'","'2014-04-02 16:20:00'",0.00, 0.00]); 

	var graphtitle='RUM to FIU Traffic Flows Max: 8.99 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='8'

	
        
      
	