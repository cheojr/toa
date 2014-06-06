
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",9.48, 11.56, 15.32, 13.77, 1.26, 1.38]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",6.91, 3.13, 10.31, 7.21, 1.54, 1.57]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",12.86, 1.60, 12.83, 7.67, 1.05, 1.07]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",1.16, 0.67, 1.63, 1.51, 0.27, 0.30]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.35, 0.14, 0.99, 0.63, 0.17, 0.19]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.66, 0.05, 1.51, 0.56, 0.14, 0.16]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",3.77, 0.10, 3.67, 1.55, 0.15, 0.17]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",1.59, 0.07, 1.49, 0.79, 0.14, 0.18]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",2.22, 3.37, 3.84, 4.64, 0.72, 0.82]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",11.38, 7.83, 13.85, 13.43, 1.61, 1.86]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",12.24, 6.94, 14.17, 12.29, 1.55, 1.81]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",14.84, 6.43, 15.61, 13.55, 1.53, 1.79]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",16.18, 8.95, 18.50, 12.66, 1.16, 1.44]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",5.10, 3.20, 6.87, 5.87, 0.83, 0.94]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",41.49, 2.77, 30.39, 18.83, 0.41, 0.50]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",25.86, 1.06, 18.44, 16.15, 0.24, 0.29]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.24, 0.03, 0.29, 0.35, 0.09, 0.13]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.25, 0.03, 0.29, 0.36, 0.09, 0.13]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.07, 0.04, 0.17, 0.52, 0.09, 0.15]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.19, 0.03, 0.26, 0.36, 0.11, 0.15]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",1.29, 6.08, 4.34, 5.46, 0.58, 0.67]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",2.84, 5.14, 6.42, 8.82, 1.42, 1.62]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",4.05, 4.48, 7.54, 8.12, 1.85, 2.08]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",3.52, 5.01, 5.70, 6.70, 0.77, 0.96]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",1.44, 2.70, 3.32, 3.85, 0.71, 0.84]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",41.65, 1.92, 30.09, 21.17, 0.36, 0.43]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",44.20, 1.38, 31.14, 25.71, 0.18, 0.23]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",14.07, 0.54, 11.03, 9.10, 0.58, 0.62]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.23, 0.04, 0.37, 0.45, 0.16, 0.20]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.27, 0.06, 0.35, 0.54, 0.14, 0.18]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.06, 0.03, 0.20, 0.36, 0.15, 0.18]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.06, 0.03, 0.20, 0.37, 0.14, 0.17]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.09, 0.05, 0.25, 0.40, 0.15, 0.18]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.38, 0.73, 0.97, 1.17, 0.33, 0.37]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.27, 1.42, 0.85, 1.63, 0.36, 0.42]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.27, 0.61, 1.09, 1.20, 0.63, 0.62]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.38, 0.54, 1.20, 1.20, 0.56, 0.56]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.17, 0.39, 0.73, 0.85, 0.32, 0.35]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.21, 0.16, 0.40, 0.55, 0.19, 0.24]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.37, 0.04, 0.44, 0.50, 0.14, 0.17]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.18, 0.04, 0.35, 0.41, 0.15, 0.18]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.04, 0.04, 0.16, 0.34, 0.11, 0.16]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.04, 0.03, 0.17, 0.31, 0.12, 0.17]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.08, 0.02, 0.19, 0.25, 0.12, 0.16]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.09, 0.04, 0.23, 0.35, 0.13, 0.18]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.17, 0.25, 0.40, 0.55, 0.16, 0.20]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.15, 0.12, 0.27, 0.41, 0.13, 0.18]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.24, 0.09, 0.72, 0.84, 0.48, 0.55]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.24, 0.30, 0.53, 0.59, 0.17, 0.23]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.14, 0.69, 0.52, 0.81, 0.18, 0.22]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.17, 0.24, 0.39, 0.47, 0.16, 0.20]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.36, 0.17, 0.46, 0.59, 0.13, 0.20]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.19, 0.03, 0.28, 0.44, 0.13, 0.16]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.05, 0.02, 0.20, 0.29, 0.13, 0.17]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.15, 0.03, 0.25, 0.34, 0.13, 0.17]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.17, 0.14, 0.33, 0.38, 0.14, 0.17]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",12.04, 8.28, 12.54, 12.61, 0.89, 1.03]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",33.95, 11.01, 31.36, 25.39, 2.49, 2.75]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",29.43, 8.61, 27.04, 26.82, 2.86, 3.09]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",21.58, 6.61, 20.54, 20.21, 2.47, 2.69]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",14.53, 6.57, 14.89, 12.36, 1.83, 2.06]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",4.37, 6.85, 7.34, 7.98, 1.18, 1.29]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",3.39, 2.45, 4.81, 4.58, 1.18, 1.25]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",3.09, 0.52, 2.79, 2.64, 0.35, 0.42]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",3.25, 0.15, 2.57, 1.94, 0.22, 0.26]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.37, 0.07, 0.47, 0.43, 0.18, 0.24]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.16, 0.07, 0.32, 0.44, 0.19, 0.25]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",1.88, 0.05, 1.55, 0.50, 0.19, 0.24]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",11.22, 2.88, 9.92, 8.05, 1.06, 1.18]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",5.97, 7.07, 9.48, 10.34, 1.81, 2.02]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",15.29, 5.91, 16.33, 13.27, 2.07, 2.25]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",7.66, 13.46, 14.30, 17.16, 2.28, 2.51]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",33.75, 12.80, 31.76, 26.60, 2.36, 2.54]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",9.06, 4.69, 9.99, 7.57, 1.57, 1.69]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",13.52, 1.48, 12.72, 8.54, 1.34, 1.44]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.66, 1.58, 1.92, 2.39, 0.33, 0.40]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.41, 0.09, 1.08, 1.13, 0.20, 0.25]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",1.69, 0.07, 1.78, 0.94, 0.16, 0.21]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.25, 0.07, 1.02, 1.09, 0.16, 0.22]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.24, 0.18, 0.70, 0.84, 0.16, 0.22]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",4.41, 2.79, 6.12, 6.01, 1.02, 1.17]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",21.52, 14.20, 24.05, 27.25, 2.93, 3.27]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",23.70, 8.44, 23.86, 21.24, 2.75, 2.99]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",17.23, 7.83, 22.41, 17.29, 2.58, 2.47]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",10.26, 9.72, 14.11, 13.65, 2.32, 2.47]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",9.86, 3.36, 9.97, 8.47, 1.37, 1.50]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",16.33, 1.83, 14.67, 9.50, 0.95, 1.02]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",3.86, 1.29, 4.02, 3.14, 0.39, 0.47]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",1.04, 0.07, 0.99, 0.76, 0.18, 0.22]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.64, 0.05, 0.66, 0.55, 0.15, 0.20]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",6.59, 0.67, 5.14, 4.11, 0.17, 0.22]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",18.07, 0.78, 13.81, 10.70, 0.18, 0.23]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",37.42, 8.15, 31.26, 24.73, 1.06, 1.25]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",48.63, 14.97, 43.82, 32.10, 2.03, 2.30]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",43.44, 14.97, 40.33, 29.15, 2.45, 2.62]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",19.06, 9.20, 21.16, 17.96, 2.85, 3.06]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",28.22, 7.85, 26.72, 21.06, 2.81, 2.98]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",7.99, 2.68, 8.56, 6.68, 0.90, 1.03]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",44.31, 2.01, 32.45, 17.38, 0.69, 0.77]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",15.08, 0.66, 11.30, 6.02, 0.39, 0.46]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.33, 0.67, 0.75, 0.92, 0.20, 0.24]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",21.67, 0.39, 15.35, 7.45, 0.15, 0.19]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",2.08, 0.07, 1.72, 0.98, 0.20, 0.22]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",1.03, 0.07, 1.04, 0.77, 0.19, 0.21]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",10.76, 2.03, 9.33, 5.86, 0.69, 0.69]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",14.68, 6.76, 15.42, 12.06, 1.62, 1.59]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",10.40, 10.81, 14.19, 14.49, 1.70, 1.67]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",10.60, 10.48, 13.53, 12.58, 1.38, 1.40]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",10.97, 10.23, 14.01, 14.56, 1.21, 1.23]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",1.35, 1.60, 2.56, 2.85, 0.49, 0.52]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",5.44, 0.39, 4.96, 3.52, 0.35, 0.39]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",1.65, 0.65, 2.03, 2.12, 0.15, 0.18]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.28, 0.06, 0.88, 0.83, 0.14, 0.15]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.17, 0.78, 0.76, 1.10, 0.13, 0.15]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.19, 0.06, 1.01, 1.07, 0.13, 0.16]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.71, 0.04, 0.96, 0.56, 0.13, 0.16]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.28, 0.09, 1.10, 1.13, 0.17, 0.19]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.16, 0.10, 0.67, 0.65, 0.17, 0.19]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.63, 0.16, 1.43, 1.34, 0.20, 0.20]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",0.60, 0.22, 1.07, 1.02, 0.18, 0.19]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",0.37, 1.36, 2.05, 2.04, 0.15, 0.18]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",0.17, 0.25, 1.00, 0.98, 0.13, 0.14]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",0.15, 0.39, 0.88, 1.04, 0.13, 0.14]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",2.82, 0.17, 2.23, 1.41, 0.12, 0.13]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",1.56, 0.87, 1.49, 1.41, 0.14, 0.16]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.20, 0.03, 0.32, 0.31, 0.12, 0.14]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.14, 0.03, 0.26, 0.26, 0.11, 0.14]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.33, 0.03, 0.42, 0.35, 0.11, 0.14]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.42, 0.07, 0.49, 0.37, 0.13, 0.17]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.18, 0.05, 0.37, 0.31, 0.14, 0.16]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",0.68, 0.07, 0.68, 0.58, 0.12, 0.15]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",0.35, 0.15, 0.46, 0.47, 0.12, 0.13]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",0.12, 0.31, 0.45, 0.57, 0.13, 0.14]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",6.34, 0.15, 4.66, 2.03, 0.13, 0.14]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",0.34, 0.04, 0.42, 0.34, 0.13, 0.15]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",1.05, 0.14, 1.01, 0.91, 0.16, 0.18]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.10, 0.03, 0.22, 0.31, 0.11, 0.15]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.09, 0.02, 0.21, 0.19, 0.11, 0.12]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.18, 0.03, 0.27, 0.24, 0.12, 0.15]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.42, 0.40, 0.62, 0.63, 0.12, 0.14]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",2.87, 6.44, 5.72, 6.59, 0.80, 0.79]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",8.23, 8.68, 12.74, 12.49, 2.46, 2.52]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",15.51, 13.06, 19.39, 18.45, 2.54, 2.49]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",16.30, 9.01, 18.88, 14.93, 2.02, 1.98]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",26.05, 32.74, 31.71, 32.44, 1.85, 1.82]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",31.14, 21.37, 31.84, 23.85, 1.30, 1.30]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",21.48, 4.72, 18.48, 8.82, 0.75, 0.73]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",0.72, 0.65, 1.18, 1.25, 0.38, 0.38]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",1.12, 0.06, 1.05, 0.37, 0.20, 0.21]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.22, 0.03, 0.39, 0.35, 0.17, 0.18]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.65, 0.04, 0.69, 0.40, 0.21, 0.22]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",1.74, 0.14, 1.48, 0.93, 0.22, 0.22]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",3.64, 13.60, 8.96, 11.97, 1.15, 1.13]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",42.91, 7.96, 36.05, 23.14, 1.80, 1.77]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",49.26, 9.49, 42.03, 24.63, 1.59, 1.56]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",12.19, 7.94, 16.16, 12.93, 2.12, 2.08]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",17.29, 6.78, 19.28, 14.85, 1.77, 1.72]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",11.96, 7.18, 14.17, 9.65, 0.99, 0.98]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",27.34, 2.09, 22.67, 11.31, 0.71, 0.72]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",13.70, 0.46, 10.04, 5.44, 0.27, 0.26]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",2.56, 0.07, 1.98, 0.72, 0.17, 0.17]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.05, 0.03, 0.20, 0.21, 0.14, 0.15]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.06, 0.03, 0.20, 0.25, 0.14, 0.16]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.17, 0.06, 0.31, 0.33, 0.14, 0.16]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",2.17, 3.27, 3.72, 4.12, 0.72, 0.73]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",9.50, 5.66, 12.78, 10.35, 1.83, 1.79]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",8.99, 7.39, 12.41, 11.22, 2.26, 2.23]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",4.08, 7.36, 8.54, 9.35, 1.90, 1.88]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",13.47, 6.62, 14.43, 11.28, 1.27, 1.23]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",7.70, 3.64, 7.84, 6.57, 0.93, 0.94]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",1.08, 0.49, 1.54, 1.25, 0.38, 0.36]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",0.42, 0.13, 0.60, 0.51, 0.21, 0.19]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.15, 0.04, 0.28, 0.25, 0.13, 0.13]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.87, 0.05, 0.79, 0.57, 0.14, 0.16]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.82, 0.05, 0.78, 0.53, 0.17, 0.17]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",1.89, 0.14, 1.57, 1.51, 0.16, 0.17]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",1.46, 1.98, 3.05, 3.50, 0.82, 0.82]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",7.64, 13.14, 13.62, 14.80, 2.22, 2.18]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",8.35, 5.74, 11.02, 9.49, 1.96, 1.92]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",4.27, 19.73, 13.57, 17.82, 2.29, 2.21]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",5.67, 6.74, 9.22, 9.33, 1.88, 1.83]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",8.92, 2.75, 8.88, 6.88, 1.00, 1.00]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",15.15, 2.59, 13.46, 8.34, 1.21, 1.22]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",10.13, 0.46, 7.89, 5.46, 0.55, 0.55]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",3.09, 0.20, 2.45, 1.06, 0.15, 0.15]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.34, 0.02, 0.32, 0.30, 0.06, 0.06]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.61, 0.05, 0.61, 0.60, 0.15, 0.18]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.27, 0.03, 0.38, 0.32, 0.16, 0.16]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",2.10, 3.78, 3.69, 4.18, 0.60, 0.59]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",16.60, 6.17, 16.47, 15.00, 1.61, 1.58]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",20.46, 5.17, 21.01, 13.96, 2.00, 1.97]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",11.48, 9.80, 13.95, 13.11, 1.58, 1.55]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",11.48, 2.91, 11.39, 8.72, 1.09, 1.08]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",4.98, 4.22, 5.74, 4.98, 0.49, 0.51]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",3.20, 2.53, 3.37, 3.22, 0.22, 0.24]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.22, 0.09, 0.38, 0.43, 0.17, 0.19]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.02, 0.02, 0.13, 0.16, 0.09, 0.11]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.03, 0.03, 0.16, 0.20, 0.11, 0.12]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.03, 0.01, 0.12, 0.18, 0.08, 0.11]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.13, 0.02, 0.19, 0.23, 0.09, 0.11]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.06, 0.07, 0.21, 0.27, 0.12, 0.13]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.10, 0.05, 0.39, 0.48, 0.16, 0.20]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.21, 0.08, 0.75, 0.76, 0.17, 0.19]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.17, 0.11, 0.82, 0.90, 0.15, 0.17]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.26, 0.59, 0.93, 1.26, 0.14, 0.15]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.12, 0.12, 0.78, 0.82, 0.14, 0.14]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.07, 0.02, 0.20, 0.24, 0.12, 0.14]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.16, 0.02, 0.25, 0.26, 0.11, 0.12]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.03, 0.03, 0.18, 0.24, 0.12, 0.14]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.05, 0.02, 0.18, 0.21, 0.13, 0.13]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.04, 0.02, 0.17, 0.24, 0.12, 0.14]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.03, 0.01, 0.17, 0.18, 0.12, 0.13]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.13, 0.02, 0.21, 0.20, 0.10, 0.12]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.11, 0.04, 0.66, 0.75, 0.08, 0.12]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.13, 0.09, 0.56, 0.64, 0.10, 0.12]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",8.88, 0.33, 6.87, 4.01, 0.21, 0.21]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.26, 0.22, 1.10, 1.10, 0.23, 0.23]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",0.71, 0.23, 1.08, 0.97, 0.18, 0.19]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.11, 0.03, 0.18, 0.28, 0.08, 0.11]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.80, 0.14, 1.71, 1.46, 0.73, 0.75]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.23, 0.02, 0.33, 0.27, 0.12, 0.14]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.12, 0.01, 0.18, 0.16, 0.07, 0.10]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.17, 0.02, 0.30, 0.33, 0.10, 0.14]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.13, 0.04, 0.20, 0.20, 0.08, 0.11]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",3.58, 3.09, 5.08, 4.64, 0.85, 0.85]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",19.51, 8.93, 22.41, 19.28, 3.28, 3.25]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",7.37, 6.95, 13.24, 12.21, 3.24, 3.20]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",12.04, 6.45, 15.26, 14.53, 2.83, 2.81]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",22.96, 22.12, 27.66, 26.90, 2.12, 2.07]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",7.29, 4.86, 9.17, 8.41, 1.32, 1.37]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",0.52, 1.44, 1.62, 1.97, 0.60, 0.64]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.40, 0.26, 0.79, 0.78, 0.34, 0.35]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.13, 0.04, 0.29, 0.29, 0.14, 0.17]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.08, 0.03, 0.20, 0.35, 0.10, 0.14]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.14, 0.04, 0.33, 0.36, 0.22, 0.25]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.15, 0.06, 0.39, 0.48, 0.28, 0.28]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",4.04, 3.89, 5.72, 5.52, 0.98, 1.00]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",14.97, 17.25, 19.82, 20.03, 1.94, 1.91]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",11.24, 6.82, 14.23, 12.65, 2.07, 2.05]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",8.62, 7.83, 13.38, 12.73, 3.11, 3.09]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",6.74, 5.72, 10.40, 9.43, 2.11, 2.05]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",3.66, 2.61, 6.28, 5.73, 1.89, 1.91]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",0.78, 0.86, 1.85, 1.98, 0.85, 0.87]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",2.48, 0.59, 2.34, 2.63, 0.32, 0.34]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.63, 0.16, 0.67, 0.55, 0.16, 0.17]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.06, 0.05, 0.18, 0.30, 0.11, 0.12]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.10, 0.05, 0.21, 0.22, 0.11, 0.12]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.16, 0.06, 0.29, 0.31, 0.15, 0.16]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",9.63, 4.20, 9.56, 7.74, 0.93, 0.91]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",9.56, 9.69, 14.12, 13.40, 2.60, 2.56]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",10.69, 5.72, 14.34, 12.79, 2.99, 2.95]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",39.86, 5.83, 34.39, 17.12, 2.60, 2.58]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",11.32, 5.34, 13.20, 10.00, 1.71, 1.67]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",11.10, 2.27, 10.73, 6.40, 1.17, 1.17]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",3.98, 6.25, 8.09, 6.99, 0.56, 0.60]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",2.90, 0.41, 2.56, 2.19, 0.29, 0.32]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.51, 0.05, 0.56, 0.55, 0.15, 0.17]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.08, 0.04, 0.22, 0.26, 0.13, 0.16]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.08, 0.03, 0.21, 0.23, 0.12, 0.14]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.34, 0.04, 0.43, 0.41, 0.17, 0.18]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",8.22, 2.51, 8.02, 5.92, 1.01, 1.00]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",17.23, 10.48, 20.22, 16.99, 2.01, 1.99]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",8.72, 5.00, 11.11, 9.57, 1.74, 1.74]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",24.59, 9.66, 25.34, 18.27, 2.55, 2.53]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",10.42, 6.26, 12.96, 10.73, 1.67, 1.64]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",14.37, 2.77, 12.71, 8.36, 0.83, 0.80]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",3.08, 1.86, 4.30, 3.35, 1.15, 1.09]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",0.62, 1.44, 2.34, 2.44, 1.21, 1.11]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.75, 0.08, 0.86, 0.51, 0.28, 0.25]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",2.01, 0.05, 1.66, 0.75, 0.15, 0.14]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.32, 0.03, 0.44, 0.30, 0.16, 0.14]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",1.42, 0.13, 1.33, 0.76, 0.20, 0.15]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",8.60, 2.83, 18.98, 4.85, 1.22, 0.73]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",18.60, 5.05, 19.54, 12.31, 2.55, 2.05]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",8.98, 9.40, 14.96, 13.55, 2.79, 2.70]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",7.60, 10.35, 13.23, 13.42, 3.04, 2.88]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",7.27, 4.15, 15.88, 8.79, 2.64, 2.35]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",7.87, 13.13, 25.61, 13.42, 1.26, 1.13]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",3.65, 0.29, 2.91, 1.97, 0.22, 0.23]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",2.86, 0.23, 2.30, 1.38, 0.14, 0.15]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",1.45, 0.04, 1.14, 0.77, 0.09, 0.11]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",0.51, 1.40, 0.77, 1.30, 0.09, 0.12]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.27, 0.02, 0.34, 0.27, 0.10, 0.13]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.12, 0.01, 0.22, 0.22, 0.10, 0.11]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.94, 0.04, 0.92, 0.37, 0.14, 0.15]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",1.02, 0.55, 1.53, 1.43, 0.29, 0.30]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",3.51, 0.87, 3.75, 2.66, 0.66, 0.66]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",0.21, 0.74, 0.88, 1.11, 0.42, 0.41]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",0.48, 0.74, 1.17, 1.04, 0.30, 0.29]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",0.34, 4.86, 2.41, 3.89, 0.32, 0.31]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",1.64, 1.47, 2.08, 1.96, 0.21, 0.19]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",0.24, 0.08, 0.33, 0.28, 0.11, 0.10]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",8.26, 4.03, 10.16, 8.92, 1.41, 1.41]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",11.07, 6.40, 13.93, 12.17, 2.02, 1.97]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",3.37, 4.42, 6.83, 6.95, 1.55, 1.54]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",3.91, 2.50, 4.94, 4.09, 0.92, 0.90]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",1.45, 0.94, 2.06, 1.74, 0.41, 0.42]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",1.05, 0.22, 1.08, 0.74, 0.17, 0.18]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.22, 0.04, 0.36, 0.33, 0.12, 0.15]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",8.13, 0.17, 5.89, 3.08, 0.14, 0.16]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.38, 1.02, 0.85, 1.06, 0.16, 0.17]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",4.42, 4.26, 6.68, 5.83, 0.90, 0.89]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",12.62, 18.24, 20.05, 20.12, 2.06, 1.97]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",11.43, 15.86, 17.87, 18.53, 2.25, 2.27]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",7.71, 4.46, 10.55, 8.94, 1.85, 1.79]); 
	    var graphtitle="CUH Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    