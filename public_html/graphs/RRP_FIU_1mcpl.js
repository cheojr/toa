
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",25.21, 0.00, 68.81, 0.00, 4.86, 0.00]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",26.79, 0.00, 114.78, 0.00, 3.00, 0.00]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",20.59, 0.00, 57.49, 0.00, 2.81, 0.00]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",6.65, 0.00, 15.83, 0.00, 2.18, 0.00]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",7.62, 0.00, 12.13, 0.00, 1.70, 0.00]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",2.62, 0.00, 5.13, 0.00, 0.97, 0.00]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",1.65, 0.00, 2.54, 0.00, 0.57, 0.00]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",4.22, 0.00, 4.94, 0.00, 0.55, 0.00]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",8.21, 0.00, 14.97, 0.00, 1.66, 0.00]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",23.09, 0.00, 34.56, 0.00, 3.97, 0.00]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",39.88, 0.00, 65.70, 0.00, 5.12, 0.00]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",25.21, 0.00, 43.75, 0.00, 5.09, 0.00]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",36.53, 0.00, 60.81, 0.00, 4.81, 0.00]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",33.49, 0.00, 122.67, 0.00, 3.05, 0.00]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",31.61, 0.00, 170.77, 0.00, 2.52, 0.00]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",24.13, 0.00, 156.03, 0.00, 2.03, 0.00]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",10.45, 0.00, 90.11, 0.00, 1.54, 0.00]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",4.68, 0.00, 54.91, 0.00, 1.04, 0.00]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",1.44, 0.00, 3.46, 0.00, 0.58, 0.00]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.98, 0.00, 1.79, 0.00, 0.51, 0.00]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",3.34, 0.00, 5.97, 0.00, 1.13, 0.00]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",19.41, 0.00, 30.74, 0.00, 2.75, 0.00]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",35.62, 0.00, 48.06, 0.00, 3.57, 0.00]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",25.93, 0.00, 47.48, 0.00, 3.21, 0.00]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",18.33, 0.00, 44.55, 0.00, 2.95, 0.00]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",12.93, 0.00, 99.33, 0.00, 2.49, 0.00]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",30.35, 0.00, 108.68, 0.00, 1.42, 0.00]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",11.69, 0.00, 21.54, 0.00, 2.41, 0.00]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",1.91, 0.00, 7.58, 0.00, 1.09, 0.00]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",1.87, 0.00, 3.36, 0.00, 0.71, 0.00]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",2.53, 0.00, 3.47, 0.00, 0.61, 0.00]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",1.38, 0.00, 2.11, 0.00, 0.49, 0.00]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",1.20, 0.00, 2.29, 0.00, 0.51, 0.00]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",3.17, 0.00, 6.37, 0.00, 0.91, 0.00]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",3.65, 0.00, 11.86, 0.00, 1.50, 0.00]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",8.36, 0.00, 15.60, 0.00, 1.60, 0.00]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",7.94, 0.00, 19.42, 0.00, 1.74, 0.00]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",17.75, 0.00, 23.21, 0.00, 1.33, 0.00]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",7.29, 0.00, 11.14, 0.00, 1.15, 0.00]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",4.44, 0.00, 8.60, 0.00, 1.08, 0.00]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",1.20, 0.00, 7.73, 0.00, 1.08, 0.00]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",1.36, 0.00, 3.10, 0.00, 0.76, 0.00]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",1.68, 0.00, 2.63, 0.00, 0.50, 0.00]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.40, 0.00, 0.96, 0.00, 0.42, 0.00]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",1.72, 0.00, 1.88, 0.00, 0.41, 0.00]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",1.04, 0.00, 2.53, 0.00, 0.60, 0.00]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",1.50, 0.00, 14.58, 0.00, 1.05, 0.00]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",2.16, 0.00, 10.69, 0.00, 1.32, 0.00]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",4.24, 0.00, 9.68, 0.00, 1.56, 0.00]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",9.59, 0.00, 15.46, 0.00, 1.72, 0.00]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",5.23, 0.00, 18.60, 0.00, 1.80, 0.00]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",12.14, 0.00, 22.28, 0.00, 1.83, 0.00]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",5.66, 0.00, 9.28, 0.00, 1.51, 0.00]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",1.97, 0.00, 7.83, 0.00, 1.03, 0.00]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",1.85, 0.00, 3.00, 0.00, 0.58, 0.00]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",2.32, 0.00, 3.34, 0.00, 0.49, 0.00]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",7.26, 0.00, 12.54, 0.00, 1.67, 0.00]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",38.24, 0.00, 56.85, 0.00, 4.25, 0.00]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",42.20, 0.00, 75.51, 0.00, 5.35, 0.00]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",29.40, 0.00, 64.76, 0.00, 6.38, 0.00]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",28.44, 0.00, 60.62, 0.00, 6.80, 0.00]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",23.59, 0.00, 47.96, 0.00, 4.20, 0.00]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",15.01, 0.00, 30.21, 0.00, 3.01, 0.00]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",24.92, 0.00, 36.19, 0.00, 2.73, 0.00]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",13.97, 0.00, 28.92, 0.00, 1.94, 0.00]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",11.79, 0.00, 39.76, 0.00, 1.24, 0.00]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",3.81, 0.00, 7.69, 0.00, 0.65, 0.00]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",1.90, 0.00, 3.86, 0.00, 0.58, 0.00]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",6.85, 0.00, 15.99, 0.00, 2.72, 0.00]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",28.02, 0.00, 51.89, 0.00, 5.29, 0.00]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",40.11, 0.00, 67.81, 0.00, 6.91, 0.00]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",52.09, 0.00, 94.61, 0.00, 7.21, 0.00]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",55.03, 0.00, 94.95, 0.00, 6.80, 0.00]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",50.08, 0.00, 134.77, 0.00, 4.77, 0.00]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",22.46, 0.00, 89.58, 0.00, 3.63, 0.00]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",16.08, 0.00, 45.53, 0.00, 3.05, 0.00]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",5.67, 0.00, 12.45, 0.00, 2.12, 0.00]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",4.48, 0.00, 9.31, 0.00, 1.36, 0.00]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",1.91, 0.00, 4.62, 0.00, 0.84, 0.00]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",1.21, 0.00, 2.47, 0.00, 0.56, 0.00]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",5.73, 0.00, 13.56, 0.00, 2.07, 0.00]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",26.95, 0.00, 50.41, 0.00, 5.11, 0.00]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",22.66, 0.00, 47.24, 0.00, 5.64, 0.00]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",27.84, 0.00, 73.49, 0.00, 6.81, 0.00]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",32.54, 0.00, 67.65, 0.00, 6.17, 0.00]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",27.69, 0.00, 58.40, 0.00, 3.51, 0.00]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",24.12, 0.00, 37.31, 0.00, 3.05, 0.00]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",30.14, 0.00, 33.80, 0.00, 2.44, 0.00]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",8.88, 0.00, 13.04, 0.00, 2.01, 0.00]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",4.12, 0.00, 7.23, 0.00, 1.16, 0.00]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",0.97, 0.00, 1.99, 0.00, 0.63, 0.00]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",0.46, 0.00, 1.98, 0.00, 0.50, 0.00]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",17.45, 0.00, 21.24, 0.00, 1.86, 0.00]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",30.66, 0.00, 46.31, 0.00, 4.31, 0.00]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",38.38, 0.00, 61.49, 0.00, 5.30, 0.00]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",26.94, 0.00, 42.28, 0.00, 5.31, 0.00]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",28.64, 0.00, 45.79, 0.00, 4.48, 0.00]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",17.21, 0.00, 44.22, 0.00, 3.01, 0.00]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",41.08, 0.00, 45.56, 0.00, 2.71, 0.00]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",6.09, 0.00, 9.80, 0.00, 1.85, 0.00]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",2.04, 0.00, 4.80, 0.00, 1.19, 0.00]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",2.55, 0.00, 5.13, 0.00, 0.79, 0.00]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",1.09, 0.00, 2.03, 0.00, 0.55, 0.00]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",1.14, 0.00, 2.55, 0.00, 0.52, 0.00]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",2.44, 0.00, 8.58, 0.00, 1.37, 0.00]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",20.85, 0.00, 34.82, 0.00, 3.68, 0.00]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",25.16, 0.00, 40.72, 0.00, 4.19, 0.00]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",20.03, 0.00, 40.13, 0.00, 3.68, 0.00]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",16.90, 0.00, 44.64, 0.00, 3.93, 0.00]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",10.65, 0.00, 19.22, 0.00, 2.76, 0.00]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",3.44, 0.00, 8.58, 0.00, 1.34, 0.00]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",1.96, 0.00, 6.36, 0.00, 1.24, 0.00]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.86, 0.00, 3.19, 0.00, 1.08, 0.00]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",1.39, 0.00, 3.37, 0.00, 0.93, 0.00]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.70, 0.00, 2.00, 0.00, 0.82, 0.00]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.80, 0.00, 1.35, 0.00, 0.44, 0.00]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",1.04, 0.00, 1.92, 0.00, 0.43, 0.00]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",1.33, 0.00, 5.15, 0.00, 1.14, 0.00]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",19.45, 0.00, 22.92, 0.00, 1.53, 0.00]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",50.66, 0.00, 49.27, 0.00, 1.62, 0.00]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",18.99, 0.00, 21.95, 0.00, 1.63, 0.00]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",5.52, 0.00, 8.96, 0.00, 1.20, 0.00]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",3.45, 0.00, 6.72, 0.00, 1.18, 0.00]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",6.79, 0.00, 10.71, 0.00, 1.01, 0.00]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",3.03, 0.00, 4.93, 0.00, 0.92, 0.00]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.63, 0.00, 2.23, 0.00, 0.80, 0.00]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.48, 0.00, 3.04, 0.00, 0.47, 0.00]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.36, 0.00, 0.94, 0.00, 0.29, 0.00]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.24, 0.00, 1.15, 0.00, 0.33, 0.00]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.50, 0.00, 1.47, 0.00, 0.56, 0.00]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",2.98, 0.00, 6.05, 0.00, 1.01, 0.00]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",3.38, 0.00, 7.88, 0.00, 1.25, 0.00]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",32.31, 0.00, 32.52, 0.00, 1.62, 0.00]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",16.98, 0.00, 21.03, 0.00, 1.63, 0.00]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",6.29, 0.00, 10.45, 0.00, 1.67, 0.00]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",13.84, 0.00, 19.67, 0.00, 1.75, 0.00]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",7.15, 0.00, 11.42, 0.00, 1.45, 0.00]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",21.72, 0.00, 28.70, 0.00, 1.01, 0.00]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",1.21, 0.00, 2.97, 0.00, 0.54, 0.00]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.50, 0.00, 1.70, 0.00, 0.56, 0.00]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",7.37, 0.00, 17.16, 0.00, 1.63, 0.00]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",26.28, 0.00, 48.19, 0.00, 4.06, 0.00]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",33.17, 0.00, 49.81, 0.00, 5.05, 0.00]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",46.34, 0.00, 67.70, 0.00, 5.70, 0.00]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",48.45, 0.00, 67.28, 0.00, 5.45, 0.00]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",30.81, 0.00, 40.79, 0.00, 3.45, 0.00]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",12.69, 0.00, 27.35, 0.00, 3.28, 0.00]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",26.06, 0.00, 28.73, 0.00, 2.40, 0.00]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",7.43, 0.00, 19.68, 0.00, 1.90, 0.00]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",8.27, 0.00, 33.50, 0.00, 1.06, 0.00]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",4.79, 0.00, 8.20, 0.00, 0.64, 0.00]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",0.91, 0.00, 2.96, 0.00, 0.59, 0.00]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",8.35, 0.00, 13.94, 0.00, 1.79, 0.00]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",30.64, 0.00, 51.75, 0.00, 4.29, 0.00]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",31.26, 0.00, 53.36, 0.00, 5.17, 0.00]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",25.76, 0.00, 42.80, 0.00, 5.33, 0.00]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",27.24, 0.00, 46.25, 0.00, 4.96, 0.00]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",19.75, 0.00, 38.88, 0.00, 3.74, 0.00]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",25.88, 0.00, 37.87, 0.00, 2.94, 0.00]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",15.32, 0.00, 23.57, 0.00, 2.64, 0.00]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",13.83, 0.00, 19.11, 0.00, 1.84, 0.00]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",2.62, 0.00, 5.58, 0.00, 1.00, 0.00]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",1.45, 0.00, 2.57, 0.00, 0.58, 0.00]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.77, 0.00, 1.79, 0.00, 0.46, 0.00]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",5.61, 0.00, 11.14, 0.00, 1.66, 0.00]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",18.06, 0.00, 36.39, 0.00, 4.12, 0.00]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",42.82, 0.00, 54.81, 0.00, 4.72, 0.00]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",57.83, 0.00, 70.79, 0.00, 5.34, 0.00]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",34.21, 0.00, 47.93, 0.00, 5.36, 0.00]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",31.53, 0.00, 44.25, 0.00, 3.44, 0.00]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",17.65, 0.00, 30.22, 0.00, 2.80, 0.00]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",18.40, 0.00, 19.95, 0.00, 2.29, 0.00]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",6.82, 0.00, 9.70, 0.00, 1.75, 0.00]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",2.39, 0.00, 5.50, 0.00, 0.93, 0.00]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",1.05, 0.00, 3.24, 0.00, 0.61, 0.00]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",4.54, 0.00, 4.42, 0.00, 0.49, 0.00]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",5.35, 0.00, 10.52, 0.00, 1.78, 0.00]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",31.04, 0.00, 43.03, 0.00, 4.33, 0.00]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",41.03, 0.00, 60.14, 0.00, 5.53, 0.00]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",37.76, 0.00, 53.12, 0.00, 5.18, 0.00]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",34.10, 0.00, 56.28, 0.00, 4.97, 0.00]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",16.25, 0.00, 36.19, 0.00, 3.48, 0.00]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",15.03, 0.00, 24.79, 0.00, 2.98, 0.00]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",16.21, 0.00, 23.18, 0.00, 2.21, 0.00]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",4.45, 0.00, 12.12, 0.00, 1.26, 0.00]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",2.13, 0.00, 3.76, 0.00, 0.34, 0.00]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",10.46, 0.00, 9.23, 0.00, 0.55, 0.00]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.51, 0.00, 1.13, 0.00, 0.52, 0.00]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",2.58, 0.00, 7.25, 0.00, 1.35, 0.00]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",7.11, 0.00, 18.78, 0.00, 3.06, 0.00]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",12.74, 0.00, 32.43, 0.00, 3.46, 0.00]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",13.05, 0.00, 31.11, 0.00, 3.08, 0.00]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",17.15, 0.00, 26.91, 0.00, 2.75, 0.00]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",14.61, 0.00, 17.96, 0.00, 1.88, 0.00]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",1.75, 0.00, 5.56, 0.00, 1.23, 0.00]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",3.82, 0.00, 7.80, 0.00, 1.03, 0.00]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",3.06, 0.00, 5.25, 0.00, 0.89, 0.00]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.50, 0.00, 3.98, 0.00, 0.61, 0.00]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.29, 0.00, 1.19, 0.00, 0.41, 0.00]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.22, 0.00, 0.65, 0.00, 0.34, 0.00]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.27, 0.00, 0.82, 0.00, 0.37, 0.00]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",1.40, 0.00, 4.34, 0.00, 0.71, 0.00]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",1.01, 0.00, 5.63, 0.00, 1.00, 0.00]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",3.91, 0.00, 8.34, 0.00, 1.53, 0.00]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",10.61, 0.00, 14.58, 0.00, 1.77, 0.00]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",30.78, 0.00, 34.57, 0.00, 1.74, 0.00]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",15.74, 0.00, 22.16, 0.00, 1.28, 0.00]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",18.69, 0.00, 19.88, 0.00, 1.06, 0.00]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",14.10, 0.00, 17.84, 0.00, 0.99, 0.00]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",5.55, 0.00, 7.46, 0.00, 0.65, 0.00]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.39, 0.00, 1.48, 0.00, 0.51, 0.00]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",2.59, 0.00, 2.99, 0.00, 0.37, 0.00]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",1.05, 0.00, 2.04, 0.00, 0.38, 0.00]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",3.34, 0.00, 6.15, 0.00, 0.66, 0.00]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",2.90, 0.00, 5.89, 0.00, 0.98, 0.00]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",5.19, 0.00, 9.52, 0.00, 1.38, 0.00]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",27.26, 0.00, 27.08, 0.00, 1.65, 0.00]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",16.92, 0.00, 17.66, 0.00, 1.63, 0.00]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",15.54, 0.00, 21.44, 0.00, 1.75, 0.00]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",3.64, 0.00, 12.62, 0.00, 1.99, 0.00]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",7.34, 0.00, 15.12, 0.00, 1.57, 0.00]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",3.58, 0.00, 5.77, 0.00, 1.02, 0.00]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.93, 0.00, 2.63, 0.00, 0.60, 0.00]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",4.92, 0.00, 9.95, 0.00, 0.65, 0.00]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",9.23, 0.00, 14.99, 0.00, 1.79, 0.00]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",21.34, 0.00, 41.50, 0.00, 4.11, 0.00]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",27.38, 0.00, 50.32, 0.00, 5.35, 0.00]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",22.94, 37.53, 49.72, 37.11, 6.07, 3.54]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",27.82, 49.62, 49.35, 54.94, 6.26, 5.84]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",27.44, 56.75, 48.22, 56.70, 3.90, 3.63]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",16.69, 39.61, 32.85, 37.78, 3.18, 2.93]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",6.89, 38.83, 24.63, 34.36, 2.53, 2.37]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",6.72, 38.80, 21.97, 33.32, 1.90, 1.77]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",4.89, 83.27, 34.69, 64.20, 1.08, 1.07]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",1.86, 7.65, 5.02, 7.07, 0.84, 0.94]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",3.59, 0.90, 3.69, 2.91, 0.71, 0.79]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",8.88, 12.44, 14.28, 14.83, 1.86, 1.83]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",18.02, 53.96, 41.81, 51.83, 5.49, 5.30]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",43.33, 60.18, 66.68, 66.92, 5.76, 5.40]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",21.80, 34.71, 38.13, 41.30, 5.52, 5.16]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",33.73, 40.53, 49.63, 49.54, 5.23, 4.87]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",45.61, 60.38, 75.12, 78.78, 3.83, 3.58]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",37.86, 39.35, 55.09, 55.25, 3.04, 2.86]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",21.98, 21.38, 32.30, 31.97, 2.63, 2.47]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",8.04, 15.44, 15.89, 19.25, 1.85, 1.77]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",11.38, 5.85, 13.73, 10.33, 1.10, 1.13]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",4.20, 3.63, 6.51, 6.61, 0.78, 0.84]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",3.45, 1.62, 3.79, 3.19, 0.67, 0.78]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",9.41, 9.57, 12.87, 12.50, 1.77, 1.78]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",21.45, 39.82, 38.19, 42.56, 4.42, 4.24]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",27.45, 44.36, 47.54, 49.09, 4.86, 4.55]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",36.82, 47.55, 57.29, 57.43, 6.77, 6.07]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",46.51, 52.55, 66.82, 63.20, 6.43, 5.86]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",22.76, 44.73, 43.17, 46.83, 3.41, 3.22]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",18.18, 29.84, 32.35, 35.62, 2.86, 2.69]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",3.74, 16.98, 13.47, 16.76, 2.25, 2.12]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",4.05, 10.65, 8.60, 11.23, 1.72, 1.66]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",1.12, 2.34, 3.01, 3.39, 1.11, 1.17]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",1.48, 5.05, 4.75, 6.24, 1.59, 1.87]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",2.87, 3.36, 3.56, 4.33, 0.60, 0.71]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",13.79, 18.37, 18.77, 22.67, 1.88, 1.90]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",59.06, 39.41, 67.16, 55.78, 4.50, 4.33]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",49.58, 75.28, 76.74, 87.39, 4.99, 4.73]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",46.34, 77.40, 71.45, 84.12, 5.15, 4.81]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",44.33, 57.58, 64.40, 68.60, 4.89, 4.64]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",38.12, 48.38, 56.89, 60.41, 3.23, 3.09]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",8.55, 46.85, 29.84, 42.38, 3.56, 3.28]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",9.95, 13.21, 16.34, 17.14, 3.33, 3.08]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",11.58, 9.63, 16.05, 16.07, 2.48, 2.27]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",7.67, 3.68, 10.22, 7.89, 1.39, 1.37]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",3.70, 1.34, 4.61, 3.96, 1.01, 1.06]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",2.89, 2.72, 4.43, 4.31, 0.98, 1.06]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",19.95, 13.64, 22.68, 19.97, 2.64, 2.58]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",37.11, 31.16, 47.65, 41.89, 4.66, 4.46]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",30.15, 48.40, 47.35, 52.33, 3.85, 3.69]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",27.40, 41.50, 43.96, 48.54, 3.69, 3.55]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",13.03, 64.77, 37.81, 57.41, 2.67, 2.65]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",9.15, 53.63, 27.65, 45.21, 2.09, 2.13]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",8.46, 52.11, 28.70, 44.28, 1.34, 1.39]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",3.74, 53.26, 23.93, 41.72, 1.07, 1.13]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",1.43, 15.66, 8.38, 12.56, 0.95, 0.98]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",1.21, 2.24, 2.57, 3.00, 0.74, 0.79]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.91, 0.92, 2.41, 2.47, 0.45, 0.55]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.43, 0.57, 1.08, 1.24, 0.39, 0.51]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.68, 1.02, 1.46, 1.68, 0.48, 0.58]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",0.93, 5.32, 3.71, 5.13, 0.82, 0.91]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",6.61, 8.83, 9.52, 10.32, 1.29, 1.31]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",7.53, 16.76, 13.80, 16.84, 1.68, 1.70]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",5.87, 24.14, 15.82, 21.73, 1.96, 1.96]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",4.91, 11.29, 10.59, 11.40, 1.34, 1.38]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",7.08, 19.87, 20.02, 17.50, 1.04, 1.08]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",6.10, 23.66, 22.40, 20.28, 0.82, 0.86]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",24.10, 62.00, 48.62, 59.30, 4.85, 4.63]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",37.24, 76.85, 67.43, 77.53, 6.24, 5.97]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",26.88, 76.03, 56.10, 69.31, 3.79, 3.66]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",18.33, 48.11, 41.45, 47.36, 3.38, 3.30]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",15.59, 23.66, 26.74, 29.67, 2.94, 2.85]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",6.86, 15.75, 15.63, 18.06, 2.26, 2.18]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",4.16, 10.32, 10.21, 12.06, 1.40, 1.43]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",2.89, 8.49, 6.39, 8.54, 0.83, 0.84]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.79, 1.99, 2.30, 2.80, 0.66, 0.70]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",7.49, 29.81, 18.79, 26.60, 2.28, 2.19]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",20.54, 54.63, 42.64, 52.29, 5.12, 4.88]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",22.01, 59.79, 47.12, 56.95, 5.94, 5.61]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",30.72, 76.90, 64.48, 73.66, 6.35, 5.98]); 
	    var graphtitle="RRP to FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    