
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",9.34, 0.00, 15.09, 0.00, 1.22, 0.00]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",6.80, 0.00, 9.97, 0.00, 1.38, 0.00]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",12.83, 0.00, 12.74, 0.00, 1.03, 0.00]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",1.01, 0.00, 1.48, 0.00, 0.25, 0.00]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.34, 0.00, 0.95, 0.00, 0.15, 0.00]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.65, 0.00, 1.46, 0.00, 0.12, 0.00]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",3.76, 0.00, 3.63, 0.00, 0.13, 0.00]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",1.58, 0.00, 1.45, 0.00, 0.12, 0.00]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",2.14, 0.00, 3.44, 0.00, 0.70, 0.00]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",11.27, 0.00, 13.12, 0.00, 1.56, 0.00]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",12.08, 0.00, 13.34, 0.00, 1.52, 0.00]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",14.73, 0.00, 15.02, 0.00, 1.50, 0.00]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",16.16, 0.00, 18.43, 0.00, 1.14, 0.00]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",5.08, 0.00, 6.81, 0.00, 0.82, 0.00]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",41.45, 0.00, 30.31, 0.00, 0.39, 0.00]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",25.84, 0.00, 18.38, 0.00, 0.21, 0.00]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.23, 0.00, 0.24, 0.00, 0.07, 0.00]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.11, 0.00, 0.15, 0.00, 0.06, 0.00]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.06, 0.00, 0.11, 0.00, 0.06, 0.00]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.18, 0.00, 0.21, 0.00, 0.08, 0.00]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",1.28, 0.00, 4.29, 0.00, 0.56, 0.00]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",2.70, 0.00, 5.59, 0.00, 1.37, 0.00]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",3.89, 0.00, 6.77, 0.00, 1.80, 0.00]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",3.48, 0.00, 5.61, 0.00, 0.75, 0.00]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",1.35, 0.00, 2.83, 0.00, 0.68, 0.00]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",41.64, 0.00, 30.03, 0.00, 0.34, 0.00]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",44.18, 0.00, 31.09, 0.00, 0.16, 0.00]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",14.05, 0.00, 10.95, 0.00, 0.53, 0.00]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.21, 0.00, 0.28, 0.00, 0.10, 0.00]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.25, 0.00, 0.27, 0.00, 0.08, 0.00]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.04, 0.00, 0.12, 0.00, 0.09, 0.00]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.04, 0.00, 0.12, 0.00, 0.09, 0.00]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.07, 0.00, 0.16, 0.00, 0.10, 0.00]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.36, 0.00, 0.89, 0.00, 0.28, 0.00]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.24, 0.00, 0.74, 0.00, 0.30, 0.00]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.24, 0.00, 1.01, 0.00, 0.58, 0.00]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.36, 0.00, 1.12, 0.00, 0.51, 0.00]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.14, 0.00, 0.65, 0.00, 0.27, 0.00]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.19, 0.00, 0.32, 0.00, 0.14, 0.00]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.23, 0.00, 0.27, 0.00, 0.09, 0.00]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.16, 0.00, 0.27, 0.00, 0.10, 0.00]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.02, 0.00, 0.08, 0.00, 0.06, 0.00]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.02, 0.00, 0.09, 0.00, 0.07, 0.00]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.05, 0.00, 0.11, 0.00, 0.06, 0.00]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.07, 0.00, 0.15, 0.00, 0.08, 0.00]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.15, 0.00, 0.32, 0.00, 0.11, 0.00]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.13, 0.00, 0.19, 0.00, 0.07, 0.00]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.22, 0.00, 0.63, 0.00, 0.43, 0.00]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.22, 0.00, 0.45, 0.00, 0.13, 0.00]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.11, 0.00, 0.43, 0.00, 0.13, 0.00]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.14, 0.00, 0.31, 0.00, 0.11, 0.00]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.21, 0.00, 0.29, 0.00, 0.08, 0.00]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.16, 0.00, 0.19, 0.00, 0.08, 0.00]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.03, 0.00, 0.12, 0.00, 0.08, 0.00]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.13, 0.00, 0.17, 0.00, 0.08, 0.00]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.15, 0.00, 0.25, 0.00, 0.09, 0.00]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",12.01, 0.00, 12.41, 0.00, 0.84, 0.00]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",33.89, 0.00, 30.94, 0.00, 2.42, 0.00]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",29.34, 0.00, 26.48, 0.00, 2.81, 0.00]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",21.39, 0.00, 20.29, 0.00, 2.41, 0.00]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",14.34, 0.00, 14.63, 0.00, 1.78, 0.00]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",4.35, 0.00, 7.26, 0.00, 1.14, 0.00]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",3.35, 0.00, 4.69, 0.00, 1.13, 0.00]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",3.06, 0.00, 2.70, 0.00, 0.30, 0.00]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",3.23, 0.00, 2.48, 0.00, 0.16, 0.00]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.34, 0.00, 0.38, 0.00, 0.13, 0.00]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.14, 0.00, 0.23, 0.00, 0.13, 0.00]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",1.86, 0.00, 1.46, 0.00, 0.14, 0.00]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",11.21, 0.00, 9.89, 0.00, 1.04, 0.00]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",5.92, 0.00, 9.35, 0.00, 1.77, 0.00]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",15.23, 0.00, 15.80, 0.00, 2.02, 0.00]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",7.55, 0.00, 13.81, 0.00, 2.23, 0.00]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",33.64, 0.00, 31.53, 0.00, 2.30, 0.00]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",8.87, 0.00, 9.70, 0.00, 1.49, 0.00]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",13.30, 0.00, 11.63, 0.00, 1.27, 0.00]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.40, 0.00, 1.09, 0.00, 0.27, 0.00]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.30, 0.00, 0.37, 0.00, 0.14, 0.00]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",1.60, 0.00, 1.33, 0.00, 0.09, 0.00]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.13, 0.00, 0.20, 0.00, 0.09, 0.00]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.15, 0.00, 0.25, 0.00, 0.09, 0.00]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",4.29, 0.00, 5.28, 0.00, 0.96, 0.00]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",21.47, 0.00, 23.58, 0.00, 2.85, 0.00]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",23.55, 0.00, 23.00, 0.00, 2.69, 0.00]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",17.14, 0.00, 22.01, 0.00, 2.52, 0.00]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",10.14, 0.00, 13.83, 0.00, 2.26, 0.00]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",9.81, 0.00, 9.85, 0.00, 1.32, 0.00]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",16.26, 0.00, 14.54, 0.00, 0.90, 0.00]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",3.70, 0.00, 3.82, 0.00, 0.34, 0.00]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",1.01, 0.00, 0.90, 0.00, 0.13, 0.00]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.62, 0.00, 0.58, 0.00, 0.10, 0.00]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",6.52, 0.00, 4.94, 0.00, 0.11, 0.00]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",18.02, 0.00, 13.66, 0.00, 0.12, 0.00]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",37.36, 0.00, 31.10, 0.00, 1.01, 0.00]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",48.51, 0.00, 43.48, 0.00, 1.93, 0.00]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",43.22, 0.00, 39.99, 0.00, 2.36, 0.00]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",18.95, 0.00, 20.91, 0.00, 2.76, 0.00]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",28.10, 0.00, 26.43, 0.00, 2.73, 0.00]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",7.92, 0.00, 8.42, 0.00, 0.88, 0.00]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",44.25, 0.00, 32.32, 0.00, 0.67, 0.00]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",14.90, 0.00, 11.07, 0.00, 0.36, 0.00]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.27, 0.00, 0.63, 0.00, 0.16, 0.00]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",21.61, 0.00, 15.23, 0.00, 0.12, 0.00]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",2.03, 0.00, 1.61, 0.00, 0.16, 0.00]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",0.98, 0.00, 0.91, 0.00, 0.16, 0.00]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",10.70, 0.00, 9.20, 0.00, 0.66, 0.00]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",14.59, 0.00, 15.23, 0.00, 1.60, 0.00]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",10.32, 0.00, 14.01, 0.00, 1.65, 0.00]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",10.52, 0.00, 13.35, 0.00, 1.36, 0.00]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",10.83, 0.00, 13.17, 0.00, 1.15, 0.00]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",1.22, 0.00, 1.83, 0.00, 0.46, 0.00]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",5.33, 0.00, 4.26, 0.00, 0.32, 0.00]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",1.54, 0.00, 1.33, 0.00, 0.12, 0.00]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.05, 0.00, 0.16, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.09, 0.00, 0.35, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.08, 0.00, 0.17, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.62, 0.00, 0.55, 0.00, 0.09, 0.00]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.17, 0.00, 0.28, 0.00, 0.13, 0.00]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.08, 0.00, 0.26, 0.00, 0.14, 0.00]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.51, 0.00, 0.62, 0.00, 0.17, 0.00]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",0.50, 0.00, 0.66, 0.00, 0.15, 0.00]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",0.25, 0.00, 1.21, 0.00, 0.12, 0.00]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",0.07, 0.00, 0.30, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",0.04, 0.00, 0.21, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",2.64, 0.00, 2.04, 0.00, 0.10, 0.00]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",1.50, 0.00, 1.37, 0.00, 0.11, 0.00]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.14, 0.00, 0.19, 0.00, 0.08, 0.00]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.10, 0.00, 0.16, 0.00, 0.08, 0.00]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.29, 0.00, 0.30, 0.00, 0.08, 0.00]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.37, 0.00, 0.39, 0.00, 0.10, 0.00]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.13, 0.00, 0.25, 0.00, 0.11, 0.00]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",0.63, 0.00, 0.56, 0.00, 0.09, 0.00]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",0.34, 0.00, 0.41, 0.00, 0.10, 0.00]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",0.05, 0.00, 0.23, 0.00, 0.10, 0.00]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",6.33, 0.00, 4.61, 0.00, 0.11, 0.00]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",0.33, 0.00, 0.37, 0.00, 0.11, 0.00]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",0.90, 0.00, 0.86, 0.00, 0.14, 0.00]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.09, 0.00, 0.17, 0.00, 0.09, 0.00]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.08, 0.00, 0.17, 0.00, 0.09, 0.00]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.17, 0.00, 0.23, 0.00, 0.10, 0.00]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.41, 0.00, 0.58, 0.00, 0.10, 0.00]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",2.85, 0.00, 5.66, 0.00, 0.78, 0.00]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",8.10, 0.00, 12.51, 0.00, 2.43, 0.00]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",15.39, 0.00, 19.13, 0.00, 2.52, 0.00]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",16.20, 0.00, 18.68, 0.00, 1.99, 0.00]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",25.97, 0.00, 31.47, 0.00, 1.81, 0.00]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",31.07, 0.00, 31.56, 0.00, 1.29, 0.00]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",21.31, 0.00, 18.33, 0.00, 0.73, 0.00]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",0.71, 0.00, 1.14, 0.00, 0.36, 0.00]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",1.11, 0.00, 1.01, 0.00, 0.18, 0.00]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.21, 0.00, 0.34, 0.00, 0.15, 0.00]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.64, 0.00, 0.65, 0.00, 0.19, 0.00]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",1.73, 0.00, 1.44, 0.00, 0.20, 0.00]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",3.59, 0.00, 8.83, 0.00, 1.13, 0.00]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",42.71, 0.00, 35.74, 0.00, 1.78, 0.00]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",49.16, 0.00, 41.58, 0.00, 1.57, 0.00]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",12.07, 0.00, 15.59, 0.00, 2.09, 0.00]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",17.15, 0.00, 18.68, 0.00, 1.74, 0.00]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",11.93, 0.00, 13.95, 0.00, 0.98, 0.00]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",27.32, 0.00, 22.60, 0.00, 0.69, 0.00]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",13.68, 0.00, 9.99, 0.00, 0.25, 0.00]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",2.55, 0.00, 1.94, 0.00, 0.15, 0.00]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.04, 0.00, 0.16, 0.00, 0.12, 0.00]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.05, 0.00, 0.16, 0.00, 0.12, 0.00]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.16, 0.00, 0.27, 0.00, 0.12, 0.00]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",2.02, 0.00, 3.48, 0.00, 0.70, 0.00]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",9.41, 0.00, 12.38, 0.00, 1.79, 0.00]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",8.95, 0.00, 12.30, 0.00, 2.24, 0.00]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",4.00, 0.00, 8.28, 0.00, 1.84, 0.00]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",13.41, 0.00, 14.27, 0.00, 1.21, 0.00]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",7.67, 0.00, 7.77, 0.00, 0.92, 0.00]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",1.06, 0.00, 1.48, 0.00, 0.37, 0.00]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",0.27, 0.00, 0.45, 0.00, 0.19, 0.00]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.14, 0.00, 0.24, 0.00, 0.11, 0.00]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.86, 0.00, 0.75, 0.00, 0.12, 0.00]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.81, 0.00, 0.74, 0.00, 0.15, 0.00]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",1.88, 0.00, 1.53, 0.00, 0.14, 0.00]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",1.43, 0.00, 2.92, 0.00, 0.81, 0.00]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",7.58, 0.00, 13.25, 0.00, 2.20, 0.00]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",8.32, 0.00, 10.89, 0.00, 1.92, 0.00]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",4.19, 0.00, 13.40, 0.00, 2.26, 0.00]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",5.57, 0.00, 9.07, 0.00, 1.86, 0.00]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",8.90, 0.00, 8.83, 0.00, 0.98, 0.00]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",15.13, 0.00, 13.40, 0.00, 1.20, 0.00]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",9.99, 0.00, 7.75, 0.00, 0.53, 0.00]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",3.07, 0.00, 2.41, 0.00, 0.13, 0.00]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.34, 0.00, 0.30, 0.00, 0.06, 0.00]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.60, 0.00, 0.57, 0.00, 0.13, 0.00]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.26, 0.00, 0.33, 0.00, 0.13, 0.00]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",2.08, 0.00, 3.64, 0.00, 0.58, 0.00]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",16.58, 0.00, 16.35, 0.00, 1.59, 0.00]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",20.08, 0.00, 19.74, 0.00, 1.98, 0.00]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",11.26, 0.00, 13.58, 0.00, 1.55, 0.00]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",11.40, 0.00, 11.00, 0.00, 1.05, 0.00]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",4.58, 0.00, 5.34, 0.00, 0.43, 0.00]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",3.17, 0.00, 3.29, 0.00, 0.18, 0.00]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.06, 0.00, 0.16, 0.00, 0.09, 0.00]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.01, 0.00, 0.09, 0.00, 0.07, 0.00]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.02, 0.00, 0.11, 0.00, 0.09, 0.00]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.02, 0.00, 0.08, 0.00, 0.06, 0.00]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.11, 0.00, 0.15, 0.00, 0.07, 0.00]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.05, 0.00, 0.17, 0.00, 0.10, 0.00]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.09, 0.00, 0.35, 0.00, 0.14, 0.00]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.19, 0.00, 0.71, 0.00, 0.15, 0.00]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.16, 0.00, 0.77, 0.00, 0.13, 0.00]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.23, 0.00, 0.87, 0.00, 0.12, 0.00]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.11, 0.00, 0.73, 0.00, 0.12, 0.00]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.05, 0.00, 0.16, 0.00, 0.10, 0.00]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.02, 0.00, 0.11, 0.00, 0.09, 0.00]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.02, 0.00, 0.13, 0.00, 0.10, 0.00]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.04, 0.00, 0.14, 0.00, 0.11, 0.00]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.03, 0.00, 0.13, 0.00, 0.10, 0.00]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.02, 0.00, 0.12, 0.00, 0.10, 0.00]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.11, 0.00, 0.16, 0.00, 0.08, 0.00]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.02, 0.00, 0.08, 0.00, 0.05, 0.00]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.07, 0.00, 0.14, 0.00, 0.07, 0.00]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",8.81, 0.00, 6.44, 0.00, 0.18, 0.00]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.16, 0.00, 0.43, 0.00, 0.21, 0.00]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",0.59, 0.00, 0.66, 0.00, 0.16, 0.00]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.08, 0.00, 0.12, 0.00, 0.06, 0.00]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.65, 0.00, 1.54, 0.00, 0.70, 0.00]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.21, 0.00, 0.27, 0.00, 0.10, 0.00]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.10, 0.00, 0.11, 0.00, 0.05, 0.00]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.14, 0.00, 0.24, 0.00, 0.07, 0.00]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.11, 0.00, 0.13, 0.00, 0.05, 0.00]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",3.53, 0.00, 4.88, 0.00, 0.83, 0.00]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",19.31, 0.00, 21.58, 0.00, 3.25, 0.00]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",6.99, 0.00, 12.12, 0.00, 3.20, 0.00]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",11.73, 3.70, 14.23, 7.80, 2.81, 1.36]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",22.74, 21.59, 26.99, 25.95, 2.02, 1.91]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",7.11, 4.77, 8.48, 7.55, 1.25, 1.24]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",0.49, 1.03, 1.53, 1.51, 0.56, 0.56]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.37, 0.24, 0.72, 0.64, 0.32, 0.31]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.10, 0.04, 0.22, 0.18, 0.12, 0.13]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.06, 0.02, 0.13, 0.13, 0.08, 0.10]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.12, 0.04, 0.26, 0.27, 0.19, 0.22]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.13, 0.05, 0.33, 0.29, 0.25, 0.23]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",3.76, 3.84, 5.39, 5.17, 0.95, 0.92]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",14.84, 17.04, 19.33, 19.34, 1.88, 1.76]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",11.14, 6.63, 13.75, 11.84, 2.04, 1.92]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",8.59, 7.46, 13.13, 12.19, 3.07, 2.95]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",6.71, 5.61, 10.31, 9.14, 2.09, 1.96]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",3.62, 2.53, 6.18, 5.52, 1.87, 1.85]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",0.77, 0.59, 1.80, 1.58, 0.84, 0.82]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",2.47, 0.57, 2.29, 2.31, 0.30, 0.30]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.61, 0.16, 0.62, 0.47, 0.14, 0.15]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.04, 0.04, 0.13, 0.13, 0.08, 0.09]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.09, 0.04, 0.16, 0.13, 0.09, 0.09]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.14, 0.06, 0.25, 0.20, 0.13, 0.13]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",9.61, 4.05, 9.50, 7.46, 0.91, 0.84]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",9.14, 9.22, 13.62, 12.56, 2.58, 2.43]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",10.57, 5.43, 13.69, 11.95, 2.97, 2.84]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",39.75, 5.59, 33.94, 16.41, 2.57, 2.46]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",11.23, 4.97, 12.64, 9.14, 1.69, 1.57]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",11.02, 2.21, 10.36, 5.93, 1.15, 1.11]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",3.97, 6.22, 8.02, 6.75, 0.55, 0.54]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",2.75, 0.40, 2.41, 1.93, 0.26, 0.27]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.50, 0.04, 0.51, 0.37, 0.13, 0.13]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.07, 0.04, 0.17, 0.16, 0.10, 0.12]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.07, 0.02, 0.16, 0.14, 0.10, 0.10]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.32, 0.04, 0.38, 0.29, 0.14, 0.14]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",8.20, 2.37, 7.96, 5.70, 0.99, 0.93]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",17.05, 10.08, 19.95, 16.38, 1.97, 1.85]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",8.62, 4.83, 10.94, 9.21, 1.71, 1.62]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",24.48, 9.10, 24.76, 17.48, 2.53, 2.43]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",10.20, 6.01, 12.54, 10.11, 1.63, 1.53]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",14.29, 2.68, 12.32, 7.89, 0.81, 0.75]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",3.07, 1.84, 4.25, 3.22, 1.13, 1.05]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",0.47, 1.44, 2.19, 2.32, 1.19, 1.09]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.74, 0.07, 0.82, 0.46, 0.27, 0.23]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",2.00, 0.05, 1.62, 0.69, 0.13, 0.11]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.31, 0.02, 0.39, 0.19, 0.14, 0.12]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",1.41, 0.13, 1.29, 0.71, 0.18, 0.13]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",8.58, 2.82, 18.86, 4.71, 1.20, 0.70]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",14.33, 4.88, 16.27, 10.58, 2.52, 1.98]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",8.92, 9.27, 14.60, 13.01, 2.78, 2.62]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",7.47, 10.08, 12.73, 12.67, 3.02, 2.79]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",7.16, 3.96, 15.35, 8.08, 2.62, 2.28]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",7.79, 13.10, 25.27, 12.96, 1.24, 1.08]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",3.64, 0.29, 2.87, 1.85, 0.20, 0.20]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",2.72, 0.22, 2.16, 1.24, 0.12, 0.12]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",1.44, 0.04, 1.09, 0.68, 0.07, 0.07]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",0.50, 1.40, 0.73, 1.20, 0.07, 0.08]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.26, 0.02, 0.29, 0.20, 0.08, 0.09]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.11, 0.01, 0.17, 0.14, 0.08, 0.08]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.92, 0.02, 0.79, 0.16, 0.12, 0.11]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",0.96, 0.52, 1.18, 1.02, 0.26, 0.25]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",3.48, 0.69, 3.58, 2.39, 0.63, 0.60]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",0.18, 0.63, 0.82, 0.86, 0.40, 0.37]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",0.47, 0.71, 1.11, 0.93, 0.28, 0.24]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",0.32, 4.82, 2.36, 3.76, 0.30, 0.27]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",1.62, 1.45, 2.03, 1.84, 0.19, 0.16]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",0.09, 0.07, 0.19, 0.14, 0.09, 0.08]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",8.19, 3.76, 9.71, 8.23, 1.38, 1.29]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",10.95, 6.22, 13.16, 11.09, 2.00, 1.86]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",3.23, 4.24, 6.06, 5.91, 1.53, 1.48]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",3.84, 2.47, 4.78, 3.93, 0.90, 0.85]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",1.39, 0.67, 1.71, 1.35, 0.36, 0.34]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",1.01, 0.21, 0.97, 0.62, 0.14, 0.14]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.18, 0.03, 0.25, 0.20, 0.10, 0.11]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",8.09, 0.16, 5.79, 2.91, 0.12, 0.11]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.34, 1.01, 0.75, 0.95, 0.14, 0.13]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",4.36, 4.19, 6.54, 5.57, 0.88, 0.82]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",12.42, 17.42, 19.08, 18.67, 2.00, 1.82]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",11.30, 14.64, 16.82, 16.66, 2.22, 2.11]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",7.61, 4.26, 10.08, 8.29, 1.82, 1.69]); 
	    var graphtitle="CUH to FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    