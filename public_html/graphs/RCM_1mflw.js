
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow([ "'03 05 16:20:00'","'2014-03-05 16:20:00'",34.35, 33.62]);  data.addRow([ "'03 05 18:20:00'","'2014-03-05 18:20:00'",18.16, 18.23]);  data.addRow([ "'03 05 20:20:00'","'2014-03-05 20:20:00'",13.18, 14.11]);  data.addRow([ "'03 05 22:20:00'","'2014-03-05 22:20:00'",14.03, 13.74]);  data.addRow([ "'03 06 00:20:00'","'2014-03-06 00:20:00'",11.44, 11.00]);  data.addRow([ "'03 06 02:20:00'","'2014-03-06 02:20:00'",5.72, 5.98]);  data.addRow([ "'03 06 04:20:00'","'2014-03-06 04:20:00'",6.04, 6.78]);  data.addRow([ "'03 06 06:20:00'","'2014-03-06 06:20:00'",8.11, 7.99]);  data.addRow([ "'03 06 08:20:00'","'2014-03-06 08:20:00'",21.55, 20.85]);  data.addRow([ "'03 06 10:20:00'","'2014-03-06 10:20:00'",41.41, 39.78]);  data.addRow([ "'03 06 12:20:00'","'2014-03-06 12:20:00'",46.74, 44.51]);  data.addRow([ "'03 06 14:20:00'","'2014-03-06 14:20:00'",44.55, 42.38]);  data.addRow([ "'03 06 16:20:00'","'2014-03-06 16:20:00'",33.20, 32.44]);  data.addRow([ "'03 06 18:20:00'","'2014-03-06 18:20:00'",15.90, 15.84]);  data.addRow([ "'03 06 20:20:00'","'2014-03-06 20:20:00'",9.84, 10.26]);  data.addRow([ "'03 06 22:20:00'","'2014-03-06 22:20:00'",7.54, 8.09]);  data.addRow([ "'03 07 00:20:00'","'2014-03-07 00:20:00'",5.94, 6.38]);  data.addRow([ "'03 07 02:20:00'","'2014-03-07 02:20:00'",4.32, 4.99]);  data.addRow([ "'03 07 04:20:00'","'2014-03-07 04:20:00'",3.50, 4.12]);  data.addRow([ "'03 07 06:20:00'","'2014-03-07 06:20:00'",3.18, 4.24]);  data.addRow([ "'03 07 08:20:00'","'2014-03-07 08:20:00'",13.71, 13.91]);  data.addRow([ "'03 07 10:20:00'","'2014-03-07 10:20:00'",29.35, 28.50]);  data.addRow([ "'03 07 12:20:00'","'2014-03-07 12:20:00'",30.90, 29.72]);  data.addRow([ "'03 07 14:20:00'","'2014-03-07 14:20:00'",26.50, 26.04]);  data.addRow([ "'03 07 16:20:00'","'2014-03-07 16:20:00'",21.93, 21.67]);  data.addRow([ "'03 07 18:20:00'","'2014-03-07 18:20:00'",11.28, 11.55]);  data.addRow([ "'03 07 20:20:00'","'2014-03-07 20:20:00'",6.37, 6.80]);  data.addRow([ "'03 07 22:20:00'","'2014-03-07 22:20:00'",4.56, 6.13]);  data.addRow([ "'03 08 00:20:00'","'2014-03-08 00:20:00'",4.59, 5.78]);  data.addRow([ "'03 08 02:20:00'","'2014-03-08 02:20:00'",3.72, 4.47]);  data.addRow([ "'03 08 04:20:00'","'2014-03-08 04:20:00'",3.00, 4.15]);  data.addRow([ "'03 08 06:20:00'","'2014-03-08 06:20:00'",2.91, 4.35]);  data.addRow([ "'03 08 08:20:00'","'2014-03-08 08:20:00'",3.17, 3.99]);  data.addRow([ "'03 08 10:20:00'","'2014-03-08 10:20:00'",4.22, 5.08]);  data.addRow([ "'03 08 12:20:00'","'2014-03-08 12:20:00'",5.70, 6.67]);  data.addRow([ "'03 08 14:20:00'","'2014-03-08 14:20:00'",6.37, 7.71]);  data.addRow([ "'03 08 16:20:00'","'2014-03-08 16:20:00'",5.63, 6.50]);  data.addRow([ "'03 08 18:20:00'","'2014-03-08 18:20:00'",5.40, 5.92]);  data.addRow([ "'03 08 20:20:00'","'2014-03-08 20:20:00'",7.54, 8.45]);  data.addRow([ "'03 08 22:20:00'","'2014-03-08 22:20:00'",6.27, 7.20]);  data.addRow([ "'03 09 00:20:00'","'2014-03-09 00:20:00'",4.54, 5.21]);  data.addRow([ "'03 09 02:20:00'","'2014-03-09 02:20:00'",4.01, 4.78]);  data.addRow([ "'03 09 04:20:00'","'2014-03-09 04:20:00'",3.20, 3.99]);  data.addRow([ "'03 09 06:20:00'","'2014-03-09 06:20:00'",3.09, 3.90]);  data.addRow([ "'03 09 08:20:00'","'2014-03-09 08:20:00'",2.98, 3.72]);  data.addRow([ "'03 09 10:20:00'","'2014-03-09 10:20:00'",3.50, 4.31]);  data.addRow([ "'03 09 12:20:00'","'2014-03-09 12:20:00'",4.63, 5.24]);  data.addRow([ "'03 09 14:20:00'","'2014-03-09 14:20:00'",4.82, 5.51]);  data.addRow([ "'03 09 16:20:00'","'2014-03-09 16:20:00'",5.91, 6.25]);  data.addRow([ "'03 09 18:20:00'","'2014-03-09 18:20:00'",5.73, 6.29]);  data.addRow([ "'03 09 20:20:00'","'2014-03-09 20:20:00'",5.66, 6.45]);  data.addRow([ "'03 09 22:20:00'","'2014-03-09 22:20:00'",5.89, 6.63]);  data.addRow([ "'03 10 00:20:00'","'2014-03-10 00:20:00'",4.21, 5.63]);  data.addRow([ "'03 10 02:20:00'","'2014-03-10 02:20:00'",3.03, 4.87]);  data.addRow([ "'03 10 04:20:00'","'2014-03-10 04:20:00'",2.86, 3.99]);  data.addRow([ "'03 10 06:20:00'","'2014-03-10 06:20:00'",3.76, 5.12]);  data.addRow([ "'03 10 08:20:00'","'2014-03-10 08:20:00'",18.46, 18.99]);  data.addRow([ "'03 10 10:20:00'","'2014-03-10 10:20:00'",40.87, 39.66]);  data.addRow([ "'03 10 12:20:00'","'2014-03-10 12:20:00'",44.68, 43.00]);  data.addRow([ "'03 10 14:20:00'","'2014-03-10 14:20:00'",43.80, 41.66]);  data.addRow([ "'03 10 16:20:00'","'2014-03-10 16:20:00'",36.21, 34.30]);  data.addRow([ "'03 10 18:20:00'","'2014-03-10 18:20:00'",15.51, 15.59]);  data.addRow([ "'03 10 20:20:00'","'2014-03-10 20:20:00'",9.33, 9.99]);  data.addRow([ "'03 10 22:20:00'","'2014-03-10 22:20:00'",9.11, 10.47]);  data.addRow([ "'03 11 00:20:00'","'2014-03-11 00:20:00'",6.72, 7.64]);  data.addRow([ "'03 11 02:20:00'","'2014-03-11 02:20:00'",3.67, 5.37]);  data.addRow([ "'03 11 04:20:00'","'2014-03-11 04:20:00'",2.93, 3.73]);  data.addRow([ "'03 11 06:20:00'","'2014-03-11 06:20:00'",3.72, 4.56]);  data.addRow([ "'03 11 08:20:00'","'2014-03-11 08:20:00'",21.66, 21.30]);  data.addRow([ "'03 11 10:20:00'","'2014-03-11 10:20:00'",39.73, 38.10]);  data.addRow([ "'03 11 12:20:00'","'2014-03-11 12:20:00'",44.10, 42.58]);  data.addRow([ "'03 11 14:20:00'","'2014-03-11 14:20:00'",42.97, 40.63]);  data.addRow([ "'03 11 16:20:00'","'2014-03-11 16:20:00'",32.58, 31.61]);  data.addRow([ "'03 11 18:20:00'","'2014-03-11 18:20:00'",15.12, 16.08]);  data.addRow([ "'03 11 20:20:00'","'2014-03-11 20:20:00'",11.08, 12.05]);  data.addRow([ "'03 11 22:20:00'","'2014-03-11 22:20:00'",7.83, 8.94]);  data.addRow([ "'03 12 00:20:00'","'2014-03-12 00:20:00'",5.73, 7.11]);  data.addRow([ "'03 12 02:20:00'","'2014-03-12 02:20:00'",3.89, 5.21]);  data.addRow([ "'03 12 04:20:00'","'2014-03-12 04:20:00'",4.02, 5.06]);  data.addRow([ "'03 12 06:20:00'","'2014-03-12 06:20:00'",3.84, 4.87]);  data.addRow([ "'03 12 08:20:00'","'2014-03-12 08:20:00'",16.08, 16.04]);  data.addRow([ "'03 12 10:20:00'","'2014-03-12 10:20:00'",31.27, 29.80]);  data.addRow([ "'03 12 12:20:00'","'2014-03-12 12:20:00'",35.13, 33.33]);  data.addRow([ "'03 12 14:20:00'","'2014-03-12 14:20:00'",37.51, 35.66]);  data.addRow([ "'03 12 16:20:00'","'2014-03-12 16:20:00'",30.95, 30.42]);  data.addRow([ "'03 12 18:20:00'","'2014-03-12 18:20:00'",14.63, 15.08]);  data.addRow([ "'03 12 20:20:00'","'2014-03-12 20:20:00'",7.75, 8.18]);  data.addRow([ "'03 12 22:20:00'","'2014-03-12 22:20:00'",6.42, 6.71]);  data.addRow([ "'03 13 00:20:00'","'2014-03-13 00:20:00'",5.13, 5.63]);  data.addRow([ "'03 13 02:20:00'","'2014-03-13 02:20:00'",3.44, 4.08]);  data.addRow([ "'03 13 04:20:00'","'2014-03-13 04:20:00'",3.27, 4.29]);  data.addRow([ "'03 13 06:20:00'","'2014-03-13 06:20:00'",3.30, 4.24]);  data.addRow([ "'03 13 08:20:00'","'2014-03-13 08:20:00'",16.97, 16.81]);  data.addRow([ "'03 13 10:20:00'","'2014-03-13 10:20:00'",32.57, 31.54]);  data.addRow([ "'03 13 12:20:00'","'2014-03-13 12:20:00'",35.42, 34.33]);  data.addRow([ "'03 13 14:20:00'","'2014-03-13 14:20:00'",42.23, 40.12]);  data.addRow([ "'03 13 16:20:00'","'2014-03-13 16:20:00'",32.76, 31.81]);  data.addRow([ "'03 13 18:20:00'","'2014-03-13 18:20:00'",15.64, 15.45]);  data.addRow([ "'03 13 20:20:00'","'2014-03-13 20:20:00'",9.72, 9.88]);  data.addRow([ "'03 13 22:20:00'","'2014-03-13 22:20:00'",7.12, 7.47]);  data.addRow([ "'03 14 00:20:00'","'2014-03-14 00:20:00'",5.42, 6.37]);  data.addRow([ "'03 14 02:20:00'","'2014-03-14 02:20:00'",3.05, 3.71]);  data.addRow([ "'03 14 04:20:00'","'2014-03-14 04:20:00'",3.04, 4.10]);  data.addRow([ "'03 14 06:20:00'","'2014-03-14 06:20:00'",3.62, 4.44]);  data.addRow([ "'03 14 08:20:00'","'2014-03-14 08:20:00'",18.50, 18.48]);  data.addRow([ "'03 14 10:20:00'","'2014-03-14 10:20:00'",33.52, 32.01]);  data.addRow([ "'03 14 12:20:00'","'2014-03-14 12:20:00'",34.51, 32.90]);  data.addRow([ "'03 14 14:20:00'","'2014-03-14 14:20:00'",32.80, 31.47]);  data.addRow([ "'03 14 16:20:00'","'2014-03-14 16:20:00'",26.10, 25.24]);  data.addRow([ "'03 14 18:20:00'","'2014-03-14 18:20:00'",14.14, 14.30]);  data.addRow([ "'03 14 20:20:00'","'2014-03-14 20:20:00'",6.83, 7.34]);  data.addRow([ "'03 14 22:20:00'","'2014-03-14 22:20:00'",5.64, 6.48]);  data.addRow([ "'03 15 00:20:00'","'2014-03-15 00:20:00'",5.70, 6.48]);  data.addRow([ "'03 15 02:20:00'","'2014-03-15 02:20:00'",4.01, 4.83]);  data.addRow([ "'03 15 04:20:00'","'2014-03-15 04:20:00'",3.25, 4.34]);  data.addRow([ "'03 15 06:20:00'","'2014-03-15 06:20:00'",2.87, 4.01]);  data.addRow([ "'03 15 08:20:00'","'2014-03-15 08:20:00'",2.75, 3.97]);  data.addRow([ "'03 15 10:20:00'","'2014-03-15 10:20:00'",3.96, 4.81]);  data.addRow([ "'03 15 12:20:00'","'2014-03-15 12:20:00'",5.73, 6.41]);  data.addRow([ "'03 15 14:20:00'","'2014-03-15 14:20:00'",6.60, 7.18]);  data.addRow([ "'03 15 16:20:00'","'2014-03-15 16:20:00'",8.59, 9.25]);  data.addRow([ "'03 15 18:20:00'","'2014-03-15 18:20:00'",6.87, 7.61]);  data.addRow([ "'03 15 20:20:00'","'2014-03-15 20:20:00'",6.00, 6.80]);  data.addRow([ "'03 15 22:20:00'","'2014-03-15 22:20:00'",6.53, 7.67]);  data.addRow([ "'03 16 00:20:00'","'2014-03-16 00:20:00'",5.60, 6.50]);  data.addRow([ "'03 16 02:20:00'","'2014-03-16 02:20:00'",4.04, 4.93]);  data.addRow([ "'03 16 04:20:00'","'2014-03-16 04:20:00'",3.04, 3.59]);  data.addRow([ "'03 16 06:20:00'","'2014-03-16 06:20:00'",2.70, 3.32]);  data.addRow([ "'03 16 08:20:00'","'2014-03-16 08:20:00'",2.93, 3.79]);  data.addRow([ "'03 16 10:20:00'","'2014-03-16 10:20:00'",3.35, 4.98]);  data.addRow([ "'03 16 12:20:00'","'2014-03-16 12:20:00'",5.45, 6.89]);  data.addRow([ "'03 16 14:20:00'","'2014-03-16 14:20:00'",7.34, 8.46]);  data.addRow([ "'03 16 16:20:00'","'2014-03-16 16:20:00'",7.54, 8.52]);  data.addRow([ "'03 16 18:20:00'","'2014-03-16 18:20:00'",5.68, 6.95]);  data.addRow([ "'03 16 20:20:00'","'2014-03-16 20:20:00'",6.95, 8.12]);  data.addRow([ "'03 16 22:20:00'","'2014-03-16 22:20:00'",7.14, 8.38]);  data.addRow([ "'03 17 00:20:00'","'2014-03-17 00:20:00'",5.45, 6.62]);  data.addRow([ "'03 17 02:20:00'","'2014-03-17 02:20:00'",3.59, 4.97]);  data.addRow([ "'03 17 04:20:00'","'2014-03-17 04:20:00'",2.56, 3.42]);  data.addRow([ "'03 17 06:20:00'","'2014-03-17 06:20:00'",2.91, 3.91]);  data.addRow([ "'03 17 08:20:00'","'2014-03-17 08:20:00'",16.45, 16.48]);  data.addRow([ "'03 17 10:20:00'","'2014-03-17 10:20:00'",36.75, 35.11]);  data.addRow([ "'03 17 12:20:00'","'2014-03-17 12:20:00'",39.70, 38.40]);  data.addRow([ "'03 17 14:20:00'","'2014-03-17 14:20:00'",40.83, 40.26]);  data.addRow([ "'03 17 16:20:00'","'2014-03-17 16:20:00'",33.86, 34.13]);  data.addRow([ "'03 17 18:20:00'","'2014-03-17 18:20:00'",14.46, 15.97]);  data.addRow([ "'03 17 20:20:00'","'2014-03-17 20:20:00'",7.74, 8.08]);  data.addRow([ "'03 17 22:20:00'","'2014-03-17 22:20:00'",6.53, 7.18]);  data.addRow([ "'03 18 00:20:00'","'2014-03-18 00:20:00'",5.78, 7.38]);  data.addRow([ "'03 18 02:20:00'","'2014-03-18 02:20:00'",3.71, 5.64]);  data.addRow([ "'03 18 04:20:00'","'2014-03-18 04:20:00'",3.77, 5.16]);  data.addRow([ "'03 18 06:20:00'","'2014-03-18 06:20:00'",4.51, 6.37]);  data.addRow([ "'03 18 08:20:00'","'2014-03-18 08:20:00'",17.21, 17.49]);  data.addRow([ "'03 18 10:20:00'","'2014-03-18 10:20:00'",35.76, 34.84]);  data.addRow([ "'03 18 12:20:00'","'2014-03-18 12:20:00'",40.98, 40.11]);  data.addRow([ "'03 18 14:20:00'","'2014-03-18 14:20:00'",40.56, 40.08]);  data.addRow([ "'03 18 16:20:00'","'2014-03-18 16:20:00'",33.11, 34.16]);  data.addRow([ "'03 18 18:20:00'","'2014-03-18 18:20:00'",14.71, 15.66]);  data.addRow([ "'03 18 20:20:00'","'2014-03-18 20:20:00'",9.61, 10.29]);  data.addRow([ "'03 18 22:20:00'","'2014-03-18 22:20:00'",8.37, 9.84]);  data.addRow([ "'03 19 00:20:00'","'2014-03-19 00:20:00'",5.66, 6.81]);  data.addRow([ "'03 19 02:20:00'","'2014-03-19 02:20:00'",3.58, 4.71]);  data.addRow([ "'03 19 04:20:00'","'2014-03-19 04:20:00'",3.88, 4.73]);  data.addRow([ "'03 19 06:20:00'","'2014-03-19 06:20:00'",4.33, 5.19]);  data.addRow([ "'03 19 08:20:00'","'2014-03-19 08:20:00'",19.10, 19.30]);  data.addRow([ "'03 19 10:20:00'","'2014-03-19 10:20:00'",37.42, 36.39]);  data.addRow([ "'03 19 12:20:00'","'2014-03-19 12:20:00'",36.82, 37.75]);  data.addRow([ "'03 19 14:20:00'","'2014-03-19 14:20:00'",43.18, 42.58]);  data.addRow([ "'03 19 16:20:00'","'2014-03-19 16:20:00'",35.10, 34.87]);  data.addRow([ "'03 19 18:20:00'","'2014-03-19 18:20:00'",17.21, 18.98]);  data.addRow([ "'03 19 20:20:00'","'2014-03-19 20:20:00'",10.79, 12.67]);  data.addRow([ "'03 19 22:20:00'","'2014-03-19 22:20:00'",9.73, 11.00]);  data.addRow([ "'03 20 00:20:00'","'2014-03-20 00:20:00'",10.57, 11.13]);  data.addRow([ "'03 20 02:20:00'","'2014-03-20 02:20:00'",6.19, 7.13]);  data.addRow([ "'03 20 04:20:00'","'2014-03-20 04:20:00'",3.03, 4.44]);  data.addRow([ "'03 20 06:20:00'","'2014-03-20 06:20:00'",4.05, 5.37]);  data.addRow([ "'03 20 08:20:00'","'2014-03-20 08:20:00'",18.35, 18.24]);  data.addRow([ "'03 20 10:20:00'","'2014-03-20 10:20:00'",38.16, 36.76]);  data.addRow([ "'03 20 12:20:00'","'2014-03-20 12:20:00'",38.97, 37.31]);  data.addRow([ "'03 20 14:20:00'","'2014-03-20 14:20:00'",42.95, 40.86]);  data.addRow([ "'03 20 16:20:00'","'2014-03-20 16:20:00'",36.57, 35.16]);  data.addRow([ "'03 20 18:20:00'","'2014-03-20 18:20:00'",15.22, 15.24]);  data.addRow([ "'03 20 20:20:00'","'2014-03-20 20:20:00'",10.48, 11.09]);  data.addRow([ "'03 20 22:20:00'","'2014-03-20 22:20:00'",7.60, 8.29]);  data.addRow([ "'03 21 00:20:00'","'2014-03-21 00:20:00'",5.63, 6.41]);  data.addRow([ "'03 21 02:20:00'","'2014-03-21 02:20:00'",1.29, 1.49]);  data.addRow([ "'03 21 04:20:00'","'2014-03-21 04:20:00'",3.30, 4.21]);  data.addRow([ "'03 21 06:20:00'","'2014-03-21 06:20:00'",3.92, 4.99]);  data.addRow([ "'03 21 08:20:00'","'2014-03-21 08:20:00'",21.54, 21.20]);  data.addRow([ "'03 21 10:20:00'","'2014-03-21 10:20:00'",34.94, 33.34]);  data.addRow([ "'03 21 12:20:00'","'2014-03-21 12:20:00'",35.34, 34.10]);  data.addRow([ "'03 21 14:20:00'","'2014-03-21 14:20:00'",31.60, 30.97]);  data.addRow([ "'03 21 16:20:00'","'2014-03-21 16:20:00'",25.38, 24.80]);  data.addRow([ "'03 21 18:20:00'","'2014-03-21 18:20:00'",12.54, 12.72]);  data.addRow([ "'03 21 20:20:00'","'2014-03-21 20:20:00'",7.18, 7.60]);  data.addRow([ "'03 21 22:20:00'","'2014-03-21 22:20:00'",5.08, 5.56]);  data.addRow([ "'03 22 00:20:00'","'2014-03-22 00:20:00'",4.33, 4.92]);  data.addRow([ "'03 22 02:20:00'","'2014-03-22 02:20:00'",4.13, 5.16]);  data.addRow([ "'03 22 04:20:00'","'2014-03-22 04:20:00'",3.42, 4.21]);  data.addRow([ "'03 22 06:20:00'","'2014-03-22 06:20:00'",3.37, 4.52]);  data.addRow([ "'03 22 08:20:00'","'2014-03-22 08:20:00'",3.05, 4.14]);  data.addRow([ "'03 22 10:20:00'","'2014-03-22 10:20:00'",4.03, 5.11]);  data.addRow([ "'03 22 12:20:00'","'2014-03-22 12:20:00'",5.78, 6.82]);  data.addRow([ "'03 22 14:20:00'","'2014-03-22 14:20:00'",7.06, 8.17]);  data.addRow([ "'03 22 16:20:00'","'2014-03-22 16:20:00'",6.72, 7.99]);  data.addRow([ "'03 22 18:20:00'","'2014-03-22 18:20:00'",6.47, 7.47]);  data.addRow([ "'03 22 20:20:00'","'2014-03-22 20:20:00'",5.76, 6.49]);  data.addRow([ "'03 22 22:20:00'","'2014-03-22 22:20:00'",5.40, 6.31]);  data.addRow([ "'03 23 00:20:00'","'2014-03-23 00:20:00'",4.96, 5.75]);  data.addRow([ "'03 23 02:20:00'","'2014-03-23 02:20:00'",3.57, 4.78]);  data.addRow([ "'03 23 04:20:00'","'2014-03-23 04:20:00'",3.02, 4.10]);  data.addRow([ "'03 23 06:20:00'","'2014-03-23 06:20:00'",2.86, 4.15]);  data.addRow([ "'03 23 08:20:00'","'2014-03-23 08:20:00'",2.77, 4.13]);  data.addRow([ "'03 23 10:20:00'","'2014-03-23 10:20:00'",3.86, 4.95]);  data.addRow([ "'03 23 12:20:00'","'2014-03-23 12:20:00'",4.51, 5.73]);  data.addRow([ "'03 23 14:20:00'","'2014-03-23 14:20:00'",5.43, 6.04]);  data.addRow([ "'03 23 16:20:00'","'2014-03-23 16:20:00'",6.87, 7.11]);  data.addRow([ "'03 23 18:20:00'","'2014-03-23 18:20:00'",6.05, 6.55]);  data.addRow([ "'03 23 20:20:00'","'2014-03-23 20:20:00'",5.77, 6.54]);  data.addRow([ "'03 23 22:20:00'","'2014-03-23 22:20:00'",5.82, 6.57]);  data.addRow([ "'03 24 00:20:00'","'2014-03-24 00:20:00'",4.17, 4.62]);  data.addRow([ "'03 24 02:20:00'","'2014-03-24 02:20:00'",3.27, 4.09]);  data.addRow([ "'03 24 04:20:00'","'2014-03-24 04:20:00'",2.47, 3.60]);  data.addRow([ "'03 24 06:20:00'","'2014-03-24 06:20:00'",3.60, 4.78]);  data.addRow([ "'03 24 08:20:00'","'2014-03-24 08:20:00'",20.08, 19.85]);  data.addRow([ "'03 24 10:20:00'","'2014-03-24 10:20:00'",37.00, 36.06]);  data.addRow([ "'03 24 12:20:00'","'2014-03-24 12:20:00'",37.30, 36.17]);  data.addRow([ "'03 24 14:20:00'","'2014-03-24 14:20:00'",42.16, 40.61]);  data.addRow([ "'03 24 16:20:00'","'2014-03-24 16:20:00'",35.40, 33.94]);  data.addRow([ "'03 24 18:20:00'","'2014-03-24 18:20:00'",16.31, 16.30]);  data.addRow([ "'03 24 20:20:00'","'2014-03-24 20:20:00'",10.35, 10.78]);  data.addRow([ "'03 24 22:20:00'","'2014-03-24 22:20:00'",9.79, 10.05]);  data.addRow([ "'03 25 00:20:00'","'2014-03-25 00:20:00'",7.10, 7.50]);  data.addRow([ "'03 25 02:20:00'","'2014-03-25 02:20:00'",5.27, 5.94]);  data.addRow([ "'03 25 04:20:00'","'2014-03-25 04:20:00'",4.76, 5.30]);  data.addRow([ "'03 25 06:20:00'","'2014-03-25 06:20:00'",5.17, 5.94]);  data.addRow([ "'03 25 08:20:00'","'2014-03-25 08:20:00'",19.36, 18.80]);  data.addRow([ "'03 25 10:20:00'","'2014-03-25 10:20:00'",37.85, 36.94]);  data.addRow([ "'03 25 12:20:00'","'2014-03-25 12:20:00'",40.76, 39.72]);  data.addRow([ "'03 25 14:20:00'","'2014-03-25 14:20:00'",39.65, 38.29]);  data.addRow([ "'03 25 16:20:00'","'2014-03-25 16:20:00'",33.48, 32.35]);  data.addRow([ "'03 25 18:20:00'","'2014-03-25 18:20:00'",15.63, 15.60]);  data.addRow([ "'03 25 20:20:00'","'2014-03-25 20:20:00'",11.72, 11.96]);  data.addRow([ "'03 25 22:20:00'","'2014-03-25 22:20:00'",10.32, 11.46]);  data.addRow([ "'03 26 00:20:00'","'2014-03-26 00:20:00'",8.12, 9.30]);  data.addRow([ "'03 26 02:20:00'","'2014-03-26 02:20:00'",4.63, 5.65]);  data.addRow([ "'03 26 04:20:00'","'2014-03-26 04:20:00'",3.69, 4.73]);  data.addRow([ "'03 26 06:20:00'","'2014-03-26 06:20:00'",4.58, 5.86]);  data.addRow([ "'03 26 08:20:00'","'2014-03-26 08:20:00'",18.80, 18.86]);  data.addRow([ "'03 26 10:20:00'","'2014-03-26 10:20:00'",38.36, 37.36]);  data.addRow([ "'03 26 12:20:00'","'2014-03-26 12:20:00'",38.57, 37.52]);  data.addRow([ "'03 26 14:20:00'","'2014-03-26 14:20:00'",43.13, 41.62]);  data.addRow([ "'03 26 16:20:00'","'2014-03-26 16:20:00'",34.99, 34.04]);  data.addRow([ "'03 26 18:20:00'","'2014-03-26 18:20:00'",17.49, 18.35]);  data.addRow([ "'03 26 20:20:00'","'2014-03-26 20:20:00'",11.94, 12.69]);  data.addRow([ "'03 26 22:20:00'","'2014-03-26 22:20:00'",9.14, 9.86]);  data.addRow([ "'03 27 00:20:00'","'2014-03-27 00:20:00'",7.33, 7.67]);  data.addRow([ "'03 27 02:20:00'","'2014-03-27 02:20:00'",4.52, 5.25]);  data.addRow([ "'03 27 04:20:00'","'2014-03-27 04:20:00'",9.65, 10.82]);  data.addRow([ "'03 27 06:20:00'","'2014-03-27 06:20:00'",4.24, 5.41]);  data.addRow([ "'03 27 08:20:00'","'2014-03-27 08:20:00'",19.25, 19.18]);  data.addRow([ "'03 27 10:20:00'","'2014-03-27 10:20:00'",38.77, 37.64]);  data.addRow([ "'03 27 12:20:00'","'2014-03-27 12:20:00'",38.23, 36.88]);  data.addRow([ "'03 27 14:20:00'","'2014-03-27 14:20:00'",41.68, 40.37]);  data.addRow([ "'03 27 16:20:00'","'2014-03-27 16:20:00'",35.12, 34.24]);  data.addRow([ "'03 27 18:20:00'","'2014-03-27 18:20:00'",16.75, 16.43]);  data.addRow([ "'03 27 20:20:00'","'2014-03-27 20:20:00'",11.64, 11.81]);  data.addRow([ "'03 27 22:20:00'","'2014-03-27 22:20:00'",9.50, 10.02]);  data.addRow([ "'03 28 00:20:00'","'2014-03-28 00:20:00'",6.93, 7.51]);  data.addRow([ "'03 28 02:20:00'","'2014-03-28 02:20:00'",4.32, 5.25]);  data.addRow([ "'03 28 04:20:00'","'2014-03-28 04:20:00'",3.66, 4.53]);  data.addRow([ "'03 28 06:20:00'","'2014-03-28 06:20:00'",5.22, 5.97]);  data.addRow([ "'03 28 08:20:00'","'2014-03-28 08:20:00'",19.22, 18.98]);  data.addRow([ "'03 28 10:20:00'","'2014-03-28 10:20:00'",31.35, 30.52]);  data.addRow([ "'03 28 12:20:00'","'2014-03-28 12:20:00'",31.47, 31.33]);  data.addRow([ "'03 28 14:20:00'","'2014-03-28 14:20:00'",32.76, 32.11]);  data.addRow([ "'03 28 16:20:00'","'2014-03-28 16:20:00'",25.85, 25.37]);  data.addRow([ "'03 28 18:20:00'","'2014-03-28 18:20:00'",13.45, 14.17]);  data.addRow([ "'03 28 20:20:00'","'2014-03-28 20:20:00'",7.73, 8.83]);  data.addRow([ "'03 28 22:20:00'","'2014-03-28 22:20:00'",7.16, 7.81]);  data.addRow([ "'03 29 00:20:00'","'2014-03-29 00:20:00'",5.95, 6.44]);  data.addRow([ "'03 29 02:20:00'","'2014-03-29 02:20:00'",3.26, 4.07]);  data.addRow([ "'03 29 04:20:00'","'2014-03-29 04:20:00'",3.12, 4.18]);  data.addRow([ "'03 29 06:20:00'","'2014-03-29 06:20:00'",3.17, 4.91]);  data.addRow([ "'03 29 08:20:00'","'2014-03-29 08:20:00'",3.82, 4.97]);  data.addRow([ "'03 29 10:20:00'","'2014-03-29 10:20:00'",4.84, 5.76]);  data.addRow([ "'03 29 12:20:00'","'2014-03-29 12:20:00'",5.57, 6.66]);  data.addRow([ "'03 29 14:20:00'","'2014-03-29 14:20:00'",7.46, 9.54]);  data.addRow([ "'03 29 16:20:00'","'2014-03-29 16:20:00'",7.72, 10.10]);  data.addRow([ "'03 29 18:20:00'","'2014-03-29 18:20:00'",6.02, 7.60]);  data.addRow([ "'03 29 20:20:00'","'2014-03-29 20:20:00'",5.71, 7.08]);  data.addRow([ "'03 29 22:20:00'","'2014-03-29 22:20:00'",5.18, 5.81]);  data.addRow([ "'03 30 00:20:00'","'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 02:20:00'","'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 04:20:00'","'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 06:20:00'","'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 08:20:00'","'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 10:20:00'","'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 12:20:00'","'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 14:20:00'","'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 16:20:00'","'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 18:20:00'","'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 20:20:00'","'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 22:20:00'","'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 00:20:00'","'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 02:20:00'","'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 04:20:00'","'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 06:20:00'","'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 08:20:00'","'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 10:20:00'","'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 12:20:00'","'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 14:20:00'","'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 16:20:00'","'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 18:20:00'","'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 20:20:00'","'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 22:20:00'","'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 00:20:00'","'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 02:20:00'","'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 04:20:00'","'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 06:20:00'","'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 08:20:00'","'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 10:20:00'","'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 12:20:00'","'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 14:20:00'","'2014-04-01 14:20:00'",27.59, 27.01]);  data.addRow([ "'04 01 16:20:00'","'2014-04-01 16:20:00'",35.47, 34.78]);  data.addRow([ "'04 01 18:20:00'","'2014-04-01 18:20:00'",16.49, 16.70]);  data.addRow([ "'04 01 20:20:00'","'2014-04-01 20:20:00'",13.31, 14.04]);  data.addRow([ "'04 01 22:20:00'","'2014-04-01 22:20:00'",10.14, 11.22]);  data.addRow([ "'04 02 00:20:00'","'2014-04-02 00:20:00'",7.16, 8.45]);  data.addRow([ "'04 02 02:20:00'","'2014-04-02 02:20:00'",3.89, 5.40]);  data.addRow([ "'04 02 04:20:00'","'2014-04-02 04:20:00'",3.32, 4.43]);  data.addRow([ "'04 02 06:20:00'","'2014-04-02 06:20:00'",4.43, 5.63]);  data.addRow([ "'04 02 08:20:00'","'2014-04-02 08:20:00'",19.62, 20.21]);  data.addRow([ "'04 02 10:20:00'","'2014-04-02 10:20:00'",37.24, 36.45]);  data.addRow([ "'04 02 12:20:00'","'2014-04-02 12:20:00'",36.45, 36.07]);  data.addRow([ "'04 02 14:20:00'","'2014-04-02 14:20:00'",40.42, 40.39]);  data.addRow([ "'04 02 16:20:00'","'2014-04-02 16:20:00'",0.00, 0.00]); 

	var graphtitle='RCM Traffic Flows Max: 51.82 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='51'

	
        
      
	