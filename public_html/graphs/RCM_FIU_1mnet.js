
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow([ "'03 05 16:20:00'","'2014-03-05 16:20:00'",13.31, 0.00]);  data.addRow([ "'03 05 18:20:00'","'2014-03-05 18:20:00'",7.85, 0.00]);  data.addRow([ "'03 05 20:20:00'","'2014-03-05 20:20:00'",1.30, 0.00]);  data.addRow([ "'03 05 22:20:00'","'2014-03-05 22:20:00'",3.30, 0.00]);  data.addRow([ "'03 06 00:20:00'","'2014-03-06 00:20:00'",0.37, 0.00]);  data.addRow([ "'03 06 02:20:00'","'2014-03-06 02:20:00'",0.23, 0.00]);  data.addRow([ "'03 06 04:20:00'","'2014-03-06 04:20:00'",0.19, 0.00]);  data.addRow([ "'03 06 06:20:00'","'2014-03-06 06:20:00'",0.20, 0.00]);  data.addRow([ "'03 06 08:20:00'","'2014-03-06 08:20:00'",1.43, 0.00]);  data.addRow([ "'03 06 10:20:00'","'2014-03-06 10:20:00'",8.40, 0.00]);  data.addRow([ "'03 06 12:20:00'","'2014-03-06 12:20:00'",12.53, 0.00]);  data.addRow([ "'03 06 14:20:00'","'2014-03-06 14:20:00'",30.12, 0.00]);  data.addRow([ "'03 06 16:20:00'","'2014-03-06 16:20:00'",33.68, 0.00]);  data.addRow([ "'03 06 18:20:00'","'2014-03-06 18:20:00'",7.27, 0.00]);  data.addRow([ "'03 06 20:20:00'","'2014-03-06 20:20:00'",2.17, 0.00]);  data.addRow([ "'03 06 22:20:00'","'2014-03-06 22:20:00'",1.05, 0.00]);  data.addRow([ "'03 07 00:20:00'","'2014-03-07 00:20:00'",0.95, 0.00]);  data.addRow([ "'03 07 02:20:00'","'2014-03-07 02:20:00'",0.10, 0.00]);  data.addRow([ "'03 07 04:20:00'","'2014-03-07 04:20:00'",0.15, 0.00]);  data.addRow([ "'03 07 06:20:00'","'2014-03-07 06:20:00'",0.14, 0.00]);  data.addRow([ "'03 07 08:20:00'","'2014-03-07 08:20:00'",1.46, 0.00]);  data.addRow([ "'03 07 10:20:00'","'2014-03-07 10:20:00'",12.89, 0.00]);  data.addRow([ "'03 07 12:20:00'","'2014-03-07 12:20:00'",14.05, 0.00]);  data.addRow([ "'03 07 14:20:00'","'2014-03-07 14:20:00'",8.00, 0.00]);  data.addRow([ "'03 07 16:20:00'","'2014-03-07 16:20:00'",2.42, 0.00]);  data.addRow([ "'03 07 18:20:00'","'2014-03-07 18:20:00'",3.38, 0.00]);  data.addRow([ "'03 07 20:20:00'","'2014-03-07 20:20:00'",0.35, 0.00]);  data.addRow([ "'03 07 22:20:00'","'2014-03-07 22:20:00'",0.13, 0.00]);  data.addRow([ "'03 08 00:20:00'","'2014-03-08 00:20:00'",0.09, 0.00]);  data.addRow([ "'03 08 02:20:00'","'2014-03-08 02:20:00'",0.12, 0.00]);  data.addRow([ "'03 08 04:20:00'","'2014-03-08 04:20:00'",0.03, 0.00]);  data.addRow([ "'03 08 06:20:00'","'2014-03-08 06:20:00'",0.04, 0.00]);  data.addRow([ "'03 08 08:20:00'","'2014-03-08 08:20:00'",0.05, 0.00]);  data.addRow([ "'03 08 10:20:00'","'2014-03-08 10:20:00'",0.79, 0.00]);  data.addRow([ "'03 08 12:20:00'","'2014-03-08 12:20:00'",0.65, 0.00]);  data.addRow([ "'03 08 14:20:00'","'2014-03-08 14:20:00'",0.27, 0.00]);  data.addRow([ "'03 08 16:20:00'","'2014-03-08 16:20:00'",0.41, 0.00]);  data.addRow([ "'03 08 18:20:00'","'2014-03-08 18:20:00'",1.01, 0.00]);  data.addRow([ "'03 08 20:20:00'","'2014-03-08 20:20:00'",1.23, 0.00]);  data.addRow([ "'03 08 22:20:00'","'2014-03-08 22:20:00'",0.54, 0.00]);  data.addRow([ "'03 09 00:20:00'","'2014-03-09 00:20:00'",0.60, 0.00]);  data.addRow([ "'03 09 02:20:00'","'2014-03-09 02:20:00'",0.22, 0.00]);  data.addRow([ "'03 09 04:20:00'","'2014-03-09 04:20:00'",0.05, 0.00]);  data.addRow([ "'03 09 06:20:00'","'2014-03-09 06:20:00'",0.07, 0.00]);  data.addRow([ "'03 09 08:20:00'","'2014-03-09 08:20:00'",0.05, 0.00]);  data.addRow([ "'03 09 10:20:00'","'2014-03-09 10:20:00'",0.30, 0.00]);  data.addRow([ "'03 09 12:20:00'","'2014-03-09 12:20:00'",0.13, 0.00]);  data.addRow([ "'03 09 14:20:00'","'2014-03-09 14:20:00'",0.44, 0.00]);  data.addRow([ "'03 09 16:20:00'","'2014-03-09 16:20:00'",0.44, 0.00]);  data.addRow([ "'03 09 18:20:00'","'2014-03-09 18:20:00'",0.38, 0.00]);  data.addRow([ "'03 09 20:20:00'","'2014-03-09 20:20:00'",0.42, 0.00]);  data.addRow([ "'03 09 22:20:00'","'2014-03-09 22:20:00'",0.20, 0.00]);  data.addRow([ "'03 10 00:20:00'","'2014-03-10 00:20:00'",0.21, 0.00]);  data.addRow([ "'03 10 02:20:00'","'2014-03-10 02:20:00'",0.06, 0.00]);  data.addRow([ "'03 10 04:20:00'","'2014-03-10 04:20:00'",0.07, 0.00]);  data.addRow([ "'03 10 06:20:00'","'2014-03-10 06:20:00'",0.06, 0.00]);  data.addRow([ "'03 10 08:20:00'","'2014-03-10 08:20:00'",0.99, 0.00]);  data.addRow([ "'03 10 10:20:00'","'2014-03-10 10:20:00'",19.06, 0.00]);  data.addRow([ "'03 10 12:20:00'","'2014-03-10 12:20:00'",4.77, 0.00]);  data.addRow([ "'03 10 14:20:00'","'2014-03-10 14:20:00'",22.21, 0.00]);  data.addRow([ "'03 10 16:20:00'","'2014-03-10 16:20:00'",18.49, 0.00]);  data.addRow([ "'03 10 18:20:00'","'2014-03-10 18:20:00'",4.46, 0.00]);  data.addRow([ "'03 10 20:20:00'","'2014-03-10 20:20:00'",1.22, 0.00]);  data.addRow([ "'03 10 22:20:00'","'2014-03-10 22:20:00'",1.99, 0.00]);  data.addRow([ "'03 11 00:20:00'","'2014-03-11 00:20:00'",0.59, 0.00]);  data.addRow([ "'03 11 02:20:00'","'2014-03-11 02:20:00'",0.15, 0.00]);  data.addRow([ "'03 11 04:20:00'","'2014-03-11 04:20:00'",0.18, 0.00]);  data.addRow([ "'03 11 06:20:00'","'2014-03-11 06:20:00'",0.10, 0.00]);  data.addRow([ "'03 11 08:20:00'","'2014-03-11 08:20:00'",1.81, 0.00]);  data.addRow([ "'03 11 10:20:00'","'2014-03-11 10:20:00'",6.64, 0.00]);  data.addRow([ "'03 11 12:20:00'","'2014-03-11 12:20:00'",3.07, 0.00]);  data.addRow([ "'03 11 14:20:00'","'2014-03-11 14:20:00'",9.70, 0.00]);  data.addRow([ "'03 11 16:20:00'","'2014-03-11 16:20:00'",16.38, 0.00]);  data.addRow([ "'03 11 18:20:00'","'2014-03-11 18:20:00'",2.66, 0.00]);  data.addRow([ "'03 11 20:20:00'","'2014-03-11 20:20:00'",4.57, 0.00]);  data.addRow([ "'03 11 22:20:00'","'2014-03-11 22:20:00'",1.71, 0.00]);  data.addRow([ "'03 12 00:20:00'","'2014-03-12 00:20:00'",0.13, 0.00]);  data.addRow([ "'03 12 02:20:00'","'2014-03-12 02:20:00'",0.10, 0.00]);  data.addRow([ "'03 12 04:20:00'","'2014-03-12 04:20:00'",0.17, 0.00]);  data.addRow([ "'03 12 06:20:00'","'2014-03-12 06:20:00'",0.10, 0.00]);  data.addRow([ "'03 12 08:20:00'","'2014-03-12 08:20:00'",0.67, 0.00]);  data.addRow([ "'03 12 10:20:00'","'2014-03-12 10:20:00'",8.14, 0.00]);  data.addRow([ "'03 12 12:20:00'","'2014-03-12 12:20:00'",2.96, 0.00]);  data.addRow([ "'03 12 14:20:00'","'2014-03-12 14:20:00'",3.94, 0.00]);  data.addRow([ "'03 12 16:20:00'","'2014-03-12 16:20:00'",2.67, 0.00]);  data.addRow([ "'03 12 18:20:00'","'2014-03-12 18:20:00'",5.60, 0.00]);  data.addRow([ "'03 12 20:20:00'","'2014-03-12 20:20:00'",2.40, 0.00]);  data.addRow([ "'03 12 22:20:00'","'2014-03-12 22:20:00'",0.45, 0.00]);  data.addRow([ "'03 13 00:20:00'","'2014-03-13 00:20:00'",0.17, 0.00]);  data.addRow([ "'03 13 02:20:00'","'2014-03-13 02:20:00'",0.11, 0.00]);  data.addRow([ "'03 13 04:20:00'","'2014-03-13 04:20:00'",0.68, 0.00]);  data.addRow([ "'03 13 06:20:00'","'2014-03-13 06:20:00'",0.11, 0.00]);  data.addRow([ "'03 13 08:20:00'","'2014-03-13 08:20:00'",0.80, 0.00]);  data.addRow([ "'03 13 10:20:00'","'2014-03-13 10:20:00'",2.62, 0.00]);  data.addRow([ "'03 13 12:20:00'","'2014-03-13 12:20:00'",4.07, 0.00]);  data.addRow([ "'03 13 14:20:00'","'2014-03-13 14:20:00'",18.57, 0.00]);  data.addRow([ "'03 13 16:20:00'","'2014-03-13 16:20:00'",21.12, 0.00]);  data.addRow([ "'03 13 18:20:00'","'2014-03-13 18:20:00'",3.27, 0.00]);  data.addRow([ "'03 13 20:20:00'","'2014-03-13 20:20:00'",2.78, 0.00]);  data.addRow([ "'03 13 22:20:00'","'2014-03-13 22:20:00'",0.33, 0.00]);  data.addRow([ "'03 14 00:20:00'","'2014-03-14 00:20:00'",0.16, 0.00]);  data.addRow([ "'03 14 02:20:00'","'2014-03-14 02:20:00'",0.08, 0.00]);  data.addRow([ "'03 14 04:20:00'","'2014-03-14 04:20:00'",0.11, 0.00]);  data.addRow([ "'03 14 06:20:00'","'2014-03-14 06:20:00'",0.18, 0.00]);  data.addRow([ "'03 14 08:20:00'","'2014-03-14 08:20:00'",5.46, 0.00]);  data.addRow([ "'03 14 10:20:00'","'2014-03-14 10:20:00'",29.24, 0.00]);  data.addRow([ "'03 14 12:20:00'","'2014-03-14 12:20:00'",35.39, 0.00]);  data.addRow([ "'03 14 14:20:00'","'2014-03-14 14:20:00'",16.46, 0.00]);  data.addRow([ "'03 14 16:20:00'","'2014-03-14 16:20:00'",12.63, 0.00]);  data.addRow([ "'03 14 18:20:00'","'2014-03-14 18:20:00'",3.86, 0.00]);  data.addRow([ "'03 14 20:20:00'","'2014-03-14 20:20:00'",0.52, 0.00]);  data.addRow([ "'03 14 22:20:00'","'2014-03-14 22:20:00'",0.82, 0.00]);  data.addRow([ "'03 15 00:20:00'","'2014-03-15 00:20:00'",0.26, 0.00]);  data.addRow([ "'03 15 02:20:00'","'2014-03-15 02:20:00'",0.14, 0.00]);  data.addRow([ "'03 15 04:20:00'","'2014-03-15 04:20:00'",0.06, 0.00]);  data.addRow([ "'03 15 06:20:00'","'2014-03-15 06:20:00'",0.07, 0.00]);  data.addRow([ "'03 15 08:20:00'","'2014-03-15 08:20:00'",0.07, 0.00]);  data.addRow([ "'03 15 10:20:00'","'2014-03-15 10:20:00'",0.32, 0.00]);  data.addRow([ "'03 15 12:20:00'","'2014-03-15 12:20:00'",1.12, 0.00]);  data.addRow([ "'03 15 14:20:00'","'2014-03-15 14:20:00'",0.63, 0.00]);  data.addRow([ "'03 15 16:20:00'","'2014-03-15 16:20:00'",0.57, 0.00]);  data.addRow([ "'03 15 18:20:00'","'2014-03-15 18:20:00'",0.18, 0.00]);  data.addRow([ "'03 15 20:20:00'","'2014-03-15 20:20:00'",0.42, 0.00]);  data.addRow([ "'03 15 22:20:00'","'2014-03-15 22:20:00'",0.18, 0.00]);  data.addRow([ "'03 16 00:20:00'","'2014-03-16 00:20:00'",0.20, 0.00]);  data.addRow([ "'03 16 02:20:00'","'2014-03-16 02:20:00'",0.08, 0.00]);  data.addRow([ "'03 16 04:20:00'","'2014-03-16 04:20:00'",0.06, 0.00]);  data.addRow([ "'03 16 06:20:00'","'2014-03-16 06:20:00'",0.04, 0.00]);  data.addRow([ "'03 16 08:20:00'","'2014-03-16 08:20:00'",0.06, 0.00]);  data.addRow([ "'03 16 10:20:00'","'2014-03-16 10:20:00'",0.24, 0.00]);  data.addRow([ "'03 16 12:20:00'","'2014-03-16 12:20:00'",0.18, 0.00]);  data.addRow([ "'03 16 14:20:00'","'2014-03-16 14:20:00'",0.27, 0.00]);  data.addRow([ "'03 16 16:20:00'","'2014-03-16 16:20:00'",0.29, 0.00]);  data.addRow([ "'03 16 18:20:00'","'2014-03-16 18:20:00'",0.15, 0.00]);  data.addRow([ "'03 16 20:20:00'","'2014-03-16 20:20:00'",0.95, 0.00]);  data.addRow([ "'03 16 22:20:00'","'2014-03-16 22:20:00'",12.57, 0.00]);  data.addRow([ "'03 17 00:20:00'","'2014-03-17 00:20:00'",4.63, 0.00]);  data.addRow([ "'03 17 02:20:00'","'2014-03-17 02:20:00'",0.14, 0.00]);  data.addRow([ "'03 17 04:20:00'","'2014-03-17 04:20:00'",0.07, 0.00]);  data.addRow([ "'03 17 06:20:00'","'2014-03-17 06:20:00'",0.19, 0.00]);  data.addRow([ "'03 17 08:20:00'","'2014-03-17 08:20:00'",0.78, 0.00]);  data.addRow([ "'03 17 10:20:00'","'2014-03-17 10:20:00'",6.23, 0.00]);  data.addRow([ "'03 17 12:20:00'","'2014-03-17 12:20:00'",4.02, 0.00]);  data.addRow([ "'03 17 14:20:00'","'2014-03-17 14:20:00'",23.25, 0.00]);  data.addRow([ "'03 17 16:20:00'","'2014-03-17 16:20:00'",25.98, 0.00]);  data.addRow([ "'03 17 18:20:00'","'2014-03-17 18:20:00'",9.78, 0.00]);  data.addRow([ "'03 17 20:20:00'","'2014-03-17 20:20:00'",0.49, 0.00]);  data.addRow([ "'03 17 22:20:00'","'2014-03-17 22:20:00'",0.30, 0.00]);  data.addRow([ "'03 18 00:20:00'","'2014-03-18 00:20:00'",0.76, 0.00]);  data.addRow([ "'03 18 02:20:00'","'2014-03-18 02:20:00'",0.06, 0.00]);  data.addRow([ "'03 18 04:20:00'","'2014-03-18 04:20:00'",0.06, 0.00]);  data.addRow([ "'03 18 06:20:00'","'2014-03-18 06:20:00'",0.25, 0.00]);  data.addRow([ "'03 18 08:20:00'","'2014-03-18 08:20:00'",2.75, 0.00]);  data.addRow([ "'03 18 10:20:00'","'2014-03-18 10:20:00'",11.67, 0.00]);  data.addRow([ "'03 18 12:20:00'","'2014-03-18 12:20:00'",10.54, 0.00]);  data.addRow([ "'03 18 14:20:00'","'2014-03-18 14:20:00'",11.38, 0.00]);  data.addRow([ "'03 18 16:20:00'","'2014-03-18 16:20:00'",23.83, 0.00]);  data.addRow([ "'03 18 18:20:00'","'2014-03-18 18:20:00'",1.48, 0.00]);  data.addRow([ "'03 18 20:20:00'","'2014-03-18 20:20:00'",3.21, 0.00]);  data.addRow([ "'03 18 22:20:00'","'2014-03-18 22:20:00'",4.24, 0.00]);  data.addRow([ "'03 19 00:20:00'","'2014-03-19 00:20:00'",0.44, 0.00]);  data.addRow([ "'03 19 02:20:00'","'2014-03-19 02:20:00'",0.39, 0.00]);  data.addRow([ "'03 19 04:20:00'","'2014-03-19 04:20:00'",0.17, 0.00]);  data.addRow([ "'03 19 06:20:00'","'2014-03-19 06:20:00'",0.16, 0.00]);  data.addRow([ "'03 19 08:20:00'","'2014-03-19 08:20:00'",6.92, 0.00]);  data.addRow([ "'03 19 10:20:00'","'2014-03-19 10:20:00'",27.37, 0.00]);  data.addRow([ "'03 19 12:20:00'","'2014-03-19 12:20:00'",58.11, 0.00]);  data.addRow([ "'03 19 14:20:00'","'2014-03-19 14:20:00'",43.65, 0.00]);  data.addRow([ "'03 19 16:20:00'","'2014-03-19 16:20:00'",26.94, 0.00]);  data.addRow([ "'03 19 18:20:00'","'2014-03-19 18:20:00'",5.64, 0.00]);  data.addRow([ "'03 19 20:20:00'","'2014-03-19 20:20:00'",1.25, 0.00]);  data.addRow([ "'03 19 22:20:00'","'2014-03-19 22:20:00'",1.69, 0.00]);  data.addRow([ "'03 20 00:20:00'","'2014-03-20 00:20:00'",0.61, 0.00]);  data.addRow([ "'03 20 02:20:00'","'2014-03-20 02:20:00'",0.10, 0.00]);  data.addRow([ "'03 20 04:20:00'","'2014-03-20 04:20:00'",0.05, 0.00]);  data.addRow([ "'03 20 06:20:00'","'2014-03-20 06:20:00'",0.13, 0.00]);  data.addRow([ "'03 20 08:20:00'","'2014-03-20 08:20:00'",3.29, 0.00]);  data.addRow([ "'03 20 10:20:00'","'2014-03-20 10:20:00'",12.21, 0.00]);  data.addRow([ "'03 20 12:20:00'","'2014-03-20 12:20:00'",35.53, 0.00]);  data.addRow([ "'03 20 14:20:00'","'2014-03-20 14:20:00'",35.20, 0.00]);  data.addRow([ "'03 20 16:20:00'","'2014-03-20 16:20:00'",13.38, 0.00]);  data.addRow([ "'03 20 18:20:00'","'2014-03-20 18:20:00'",4.75, 0.00]);  data.addRow([ "'03 20 20:20:00'","'2014-03-20 20:20:00'",1.49, 0.00]);  data.addRow([ "'03 20 22:20:00'","'2014-03-20 22:20:00'",0.79, 0.00]);  data.addRow([ "'03 21 00:20:00'","'2014-03-21 00:20:00'",0.21, 0.00]);  data.addRow([ "'03 21 02:20:00'","'2014-03-21 02:20:00'",0.03, 0.00]);  data.addRow([ "'03 21 04:20:00'","'2014-03-21 04:20:00'",0.19, 0.00]);  data.addRow([ "'03 21 06:20:00'","'2014-03-21 06:20:00'",0.92, 0.00]);  data.addRow([ "'03 21 08:20:00'","'2014-03-21 08:20:00'",1.39, 0.00]);  data.addRow([ "'03 21 10:20:00'","'2014-03-21 10:20:00'",27.04, 0.00]);  data.addRow([ "'03 21 12:20:00'","'2014-03-21 12:20:00'",14.71, 0.00]);  data.addRow([ "'03 21 14:20:00'","'2014-03-21 14:20:00'",4.54, 0.00]);  data.addRow([ "'03 21 16:20:00'","'2014-03-21 16:20:00'",4.98, 0.00]);  data.addRow([ "'03 21 18:20:00'","'2014-03-21 18:20:00'",0.85, 0.00]);  data.addRow([ "'03 21 20:20:00'","'2014-03-21 20:20:00'",0.31, 0.00]);  data.addRow([ "'03 21 22:20:00'","'2014-03-21 22:20:00'",0.29, 0.00]);  data.addRow([ "'03 22 00:20:00'","'2014-03-22 00:20:00'",6.76, 0.00]);  data.addRow([ "'03 22 02:20:00'","'2014-03-22 02:20:00'",6.31, 0.00]);  data.addRow([ "'03 22 04:20:00'","'2014-03-22 04:20:00'",0.03, 0.00]);  data.addRow([ "'03 22 06:20:00'","'2014-03-22 06:20:00'",0.04, 0.00]);  data.addRow([ "'03 22 08:20:00'","'2014-03-22 08:20:00'",0.04, 0.00]);  data.addRow([ "'03 22 10:20:00'","'2014-03-22 10:20:00'",0.25, 0.00]);  data.addRow([ "'03 22 12:20:00'","'2014-03-22 12:20:00'",0.55, 0.00]);  data.addRow([ "'03 22 14:20:00'","'2014-03-22 14:20:00'",0.66, 0.00]);  data.addRow([ "'03 22 16:20:00'","'2014-03-22 16:20:00'",0.35, 0.00]);  data.addRow([ "'03 22 18:20:00'","'2014-03-22 18:20:00'",0.84, 0.00]);  data.addRow([ "'03 22 20:20:00'","'2014-03-22 20:20:00'",0.19, 0.00]);  data.addRow([ "'03 22 22:20:00'","'2014-03-22 22:20:00'",0.19, 0.00]);  data.addRow([ "'03 23 00:20:00'","'2014-03-23 00:20:00'",0.51, 0.00]);  data.addRow([ "'03 23 02:20:00'","'2014-03-23 02:20:00'",0.15, 0.00]);  data.addRow([ "'03 23 04:20:00'","'2014-03-23 04:20:00'",0.06, 0.00]);  data.addRow([ "'03 23 06:20:00'","'2014-03-23 06:20:00'",0.03, 0.00]);  data.addRow([ "'03 23 08:20:00'","'2014-03-23 08:20:00'",0.10, 0.00]);  data.addRow([ "'03 23 10:20:00'","'2014-03-23 10:20:00'",0.96, 0.00]);  data.addRow([ "'03 23 12:20:00'","'2014-03-23 12:20:00'",2.50, 0.00]);  data.addRow([ "'03 23 14:20:00'","'2014-03-23 14:20:00'",0.56, 0.00]);  data.addRow([ "'03 23 16:20:00'","'2014-03-23 16:20:00'",0.93, 0.00]);  data.addRow([ "'03 23 18:20:00'","'2014-03-23 18:20:00'",0.82, 0.00]);  data.addRow([ "'03 23 20:20:00'","'2014-03-23 20:20:00'",0.83, 0.00]);  data.addRow([ "'03 23 22:20:00'","'2014-03-23 22:20:00'",0.21, 0.00]);  data.addRow([ "'03 24 00:20:00'","'2014-03-24 00:20:00'",0.27, 0.00]);  data.addRow([ "'03 24 02:20:00'","'2014-03-24 02:20:00'",0.08, 0.00]);  data.addRow([ "'03 24 04:20:00'","'2014-03-24 04:20:00'",0.14, 0.00]);  data.addRow([ "'03 24 06:20:00'","'2014-03-24 06:20:00'",4.18, 0.00]);  data.addRow([ "'03 24 08:20:00'","'2014-03-24 08:20:00'",1.43, 0.00]);  data.addRow([ "'03 24 10:20:00'","'2014-03-24 10:20:00'",5.07, 0.00]);  data.addRow([ "'03 24 12:20:00'","'2014-03-24 12:20:00'",9.24, 0.00]);  data.addRow([ "'03 24 14:20:00'","'2014-03-24 14:20:00'",21.15, 22.15]);  data.addRow([ "'03 24 16:20:00'","'2014-03-24 16:20:00'",22.54, 16.11]);  data.addRow([ "'03 24 18:20:00'","'2014-03-24 18:20:00'",16.44, 5.16]);  data.addRow([ "'03 24 20:20:00'","'2014-03-24 20:20:00'",8.80, 6.16]);  data.addRow([ "'03 24 22:20:00'","'2014-03-24 22:20:00'",0.78, 5.68]);  data.addRow([ "'03 25 00:20:00'","'2014-03-25 00:20:00'",0.17, 2.36]);  data.addRow([ "'03 25 02:20:00'","'2014-03-25 02:20:00'",0.23, 2.10]);  data.addRow([ "'03 25 04:20:00'","'2014-03-25 04:20:00'",0.10, 1.59]);  data.addRow([ "'03 25 06:20:00'","'2014-03-25 06:20:00'",0.32, 0.28]);  data.addRow([ "'03 25 08:20:00'","'2014-03-25 08:20:00'",4.70, 4.68]);  data.addRow([ "'03 25 10:20:00'","'2014-03-25 10:20:00'",11.70, 34.06]);  data.addRow([ "'03 25 12:20:00'","'2014-03-25 12:20:00'",10.95, 226.17]);  data.addRow([ "'03 25 14:20:00'","'2014-03-25 14:20:00'",13.88, 27.45]);  data.addRow([ "'03 25 16:20:00'","'2014-03-25 16:20:00'",7.33, 16.01]);  data.addRow([ "'03 25 18:20:00'","'2014-03-25 18:20:00'",3.94, 54.19]);  data.addRow([ "'03 25 20:20:00'","'2014-03-25 20:20:00'",1.07, 8.04]);  data.addRow([ "'03 25 22:20:00'","'2014-03-25 22:20:00'",1.07, 4.42]);  data.addRow([ "'03 26 00:20:00'","'2014-03-26 00:20:00'",4.20, 2.18]);  data.addRow([ "'03 26 02:20:00'","'2014-03-26 02:20:00'",0.08, 0.41]);  data.addRow([ "'03 26 04:20:00'","'2014-03-26 04:20:00'",0.20, 0.29]);  data.addRow([ "'03 26 06:20:00'","'2014-03-26 06:20:00'",0.15, 0.98]);  data.addRow([ "'03 26 08:20:00'","'2014-03-26 08:20:00'",6.19, 6.39]);  data.addRow([ "'03 26 10:20:00'","'2014-03-26 10:20:00'",18.45, 21.62]);  data.addRow([ "'03 26 12:20:00'","'2014-03-26 12:20:00'",24.18, 12.96]);  data.addRow([ "'03 26 14:20:00'","'2014-03-26 14:20:00'",14.44, 10.95]);  data.addRow([ "'03 26 16:20:00'","'2014-03-26 16:20:00'",8.32, 10.55]);  data.addRow([ "'03 26 18:20:00'","'2014-03-26 18:20:00'",6.18, 21.01]);  data.addRow([ "'03 26 20:20:00'","'2014-03-26 20:20:00'",0.97, 2.19]);  data.addRow([ "'03 26 22:20:00'","'2014-03-26 22:20:00'",0.31, 2.04]);  data.addRow([ "'03 27 00:20:00'","'2014-03-27 00:20:00'",0.26, 0.75]);  data.addRow([ "'03 27 02:20:00'","'2014-03-27 02:20:00'",0.21, 0.28]);  data.addRow([ "'03 27 04:20:00'","'2014-03-27 04:20:00'",1.26, 0.73]);  data.addRow([ "'03 27 06:20:00'","'2014-03-27 06:20:00'",0.07, 0.22]);  data.addRow([ "'03 27 08:20:00'","'2014-03-27 08:20:00'",1.69, 3.08]);  data.addRow([ "'03 27 10:20:00'","'2014-03-27 10:20:00'",12.60, 16.05]);  data.addRow([ "'03 27 12:20:00'","'2014-03-27 12:20:00'",26.35, 12.76]);  data.addRow([ "'03 27 14:20:00'","'2014-03-27 14:20:00'",13.23, 10.83]);  data.addRow([ "'03 27 16:20:00'","'2014-03-27 16:20:00'",18.60, 10.25]);  data.addRow([ "'03 27 18:20:00'","'2014-03-27 18:20:00'",3.45, 5.78]);  data.addRow([ "'03 27 20:20:00'","'2014-03-27 20:20:00'",2.57, 6.09]);  data.addRow([ "'03 27 22:20:00'","'2014-03-27 22:20:00'",1.40, 5.80]);  data.addRow([ "'03 28 00:20:00'","'2014-03-28 00:20:00'",1.65, 0.82]);  data.addRow([ "'03 28 02:20:00'","'2014-03-28 02:20:00'",0.66, 0.36]);  data.addRow([ "'03 28 04:20:00'","'2014-03-28 04:20:00'",0.44, 1.91]);  data.addRow([ "'03 28 06:20:00'","'2014-03-28 06:20:00'",0.59, 1.58]);  data.addRow([ "'03 28 08:20:00'","'2014-03-28 08:20:00'",4.92, 8.29]);  data.addRow([ "'03 28 10:20:00'","'2014-03-28 10:20:00'",22.41, 56.02]);  data.addRow([ "'03 28 12:20:00'","'2014-03-28 12:20:00'",26.56, 14.97]);  data.addRow([ "'03 28 14:20:00'","'2014-03-28 14:20:00'",29.24, 14.46]);  data.addRow([ "'03 28 16:20:00'","'2014-03-28 16:20:00'",5.87, 8.67]);  data.addRow([ "'03 28 18:20:00'","'2014-03-28 18:20:00'",2.68, 2.72]);  data.addRow([ "'03 28 20:20:00'","'2014-03-28 20:20:00'",4.85, 0.78]);  data.addRow([ "'03 28 22:20:00'","'2014-03-28 22:20:00'",0.51, 0.75]);  data.addRow([ "'03 29 00:20:00'","'2014-03-29 00:20:00'",0.22, 0.83]);  data.addRow([ "'03 29 02:20:00'","'2014-03-29 02:20:00'",0.26, 0.57]);  data.addRow([ "'03 29 04:20:00'","'2014-03-29 04:20:00'",0.14, 0.25]);  data.addRow([ "'03 29 06:20:00'","'2014-03-29 06:20:00'",0.04, 0.21]);  data.addRow([ "'03 29 08:20:00'","'2014-03-29 08:20:00'",0.04, 0.12]);  data.addRow([ "'03 29 10:20:00'","'2014-03-29 10:20:00'",0.07, 0.40]);  data.addRow([ "'03 29 12:20:00'","'2014-03-29 12:20:00'",0.16, 0.67]);  data.addRow([ "'03 29 14:20:00'","'2014-03-29 14:20:00'",0.52, 1.00]);  data.addRow([ "'03 29 16:20:00'","'2014-03-29 16:20:00'",0.26, 4.66]);  data.addRow([ "'03 29 18:20:00'","'2014-03-29 18:20:00'",0.47, 0.90]);  data.addRow([ "'03 29 20:20:00'","'2014-03-29 20:20:00'",0.24, 4.89]);  data.addRow([ "'03 29 22:20:00'","'2014-03-29 22:20:00'",0.13, 0.37]);  data.addRow([ "'03 30 00:20:00'","'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 02:20:00'","'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 04:20:00'","'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 06:20:00'","'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 08:20:00'","'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 10:20:00'","'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 12:20:00'","'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 14:20:00'","'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 16:20:00'","'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 18:20:00'","'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 20:20:00'","'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 22:20:00'","'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 00:20:00'","'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 02:20:00'","'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 04:20:00'","'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 06:20:00'","'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 08:20:00'","'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 10:20:00'","'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 12:20:00'","'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 14:20:00'","'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 16:20:00'","'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 18:20:00'","'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 20:20:00'","'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 22:20:00'","'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 00:20:00'","'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 02:20:00'","'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 04:20:00'","'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 06:20:00'","'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 08:20:00'","'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 10:20:00'","'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 12:20:00'","'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 14:20:00'","'2014-04-01 14:20:00'",11.85, 13.19]);  data.addRow([ "'04 01 16:20:00'","'2014-04-01 16:20:00'",25.85, 17.63]);  data.addRow([ "'04 01 18:20:00'","'2014-04-01 18:20:00'",12.07, 10.79]);  data.addRow([ "'04 01 20:20:00'","'2014-04-01 20:20:00'",5.27, 1.93]);  data.addRow([ "'04 01 22:20:00'","'2014-04-01 22:20:00'",0.70, 1.67]);  data.addRow([ "'04 02 00:20:00'","'2014-04-02 00:20:00'",0.25, 0.55]);  data.addRow([ "'04 02 02:20:00'","'2014-04-02 02:20:00'",0.13, 0.34]);  data.addRow([ "'04 02 04:20:00'","'2014-04-02 04:20:00'",0.07, 0.09]);  data.addRow([ "'04 02 06:20:00'","'2014-04-02 06:20:00'",0.17, 0.81]);  data.addRow([ "'04 02 08:20:00'","'2014-04-02 08:20:00'",3.40, 16.57]);  data.addRow([ "'04 02 10:20:00'","'2014-04-02 10:20:00'",4.36, 19.63]);  data.addRow([ "'04 02 12:20:00'","'2014-04-02 12:20:00'",10.68, 15.45]);  data.addRow([ "'04 02 14:20:00'","'2014-04-02 14:20:00'",17.07, 19.30]);  data.addRow([ "'04 02 16:20:00'","'2014-04-02 16:20:00'",0.00, 0.00]); 

	var graphtitle='RCM to FIU Traffic Network Max: 577.43 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='577'

	
        
      
	