
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03'", "'2014-03-26 14:55:00'",12.77, 3.98, 11.54, 9.04, 1.27, 1.38]);  data.addRow(["'03'", "'2014-03-26 15:25:00'",14.28, 14.81, 16.71, 18.15, 2.76, 3.08]);  data.addRow(["'03'", "'2014-03-26 15:55:00'",4.92, 5.87, 7.44, 9.34, 2.29, 2.56]);  data.addRow(["'03'", "'2014-03-26 16:25:00'",6.82, 9.13, 9.44, 10.02, 1.33, 1.47]);  data.addRow(["'03'", "'2014-03-26 16:55:00'",11.45, 12.98, 12.33, 13.29, 1.02, 1.08]);  data.addRow(["'03'", "'2014-03-26 17:25:00'",3.36, 8.09, 5.22, 7.97, 0.67, 0.71]);  data.addRow(["'03'", "'2014-03-26 17:55:00'",64.65, 0.61, 46.57, 5.15, 0.64, 0.68]);  data.addRow(["'03'", "'2014-03-26 18:25:00'",3.62, 0.89, 3.20, 2.28, 0.44, 0.46]);  data.addRow(["'03'", "'2014-03-26 18:55:00'",1.18, 0.50, 1.45, 1.39, 0.43, 0.48]);  data.addRow(["'03'", "'2014-03-26 19:25:00'",3.80, 1.80, 3.59, 2.42, 0.38, 0.39]);  data.addRow(["'03'", "'2014-03-26 19:55:00'",2.33, 1.22, 2.34, 2.00, 0.47, 0.50]);  data.addRow(["'03'", "'2014-03-26 20:25:00'",1.42, 0.58, 1.58, 1.42, 0.44, 0.47]);  data.addRow(["'03'", "'2014-03-26 20:55:00'",1.90, 0.19, 1.88, 1.17, 0.46, 0.47]);  data.addRow(["'03'", "'2014-03-26 21:25:00'",1.90, 0.21, 1.92, 1.34, 0.46, 0.50]);  data.addRow(["'03'", "'2014-03-26 21:55:00'",0.85, 0.37, 1.13, 1.13, 0.45, 0.48]);  data.addRow(["'03'", "'2014-03-26 22:25:00'",3.36, 0.22, 2.68, 0.88, 0.32, 0.35]);  data.addRow(["'03'", "'2014-03-26 22:55:00'",1.61, 0.48, 1.58, 1.15, 0.30, 0.32]);  data.addRow(["'03'", "'2014-03-26 23:25:00'",0.70, 0.27, 0.92, 0.81, 0.30, 0.31]);  data.addRow(["'03'", "'2014-03-26 23:55:00'",0.34, 0.17, 0.58, 0.62, 0.25, 0.25]);  data.addRow(["'03'", "'2014-03-27 00:25:00'",0.31, 0.09, 0.58, 0.53, 0.23, 0.22]);  data.addRow(["'03'", "'2014-03-27 00:55:00'",0.34, 0.09, 0.49, 0.42, 0.19, 0.18]);  data.addRow(["'03'", "'2014-03-27 01:25:00'",0.56, 0.59, 0.81, 0.81, 0.20, 0.19]);  data.addRow(["'03'", "'2014-03-27 01:55:00'",0.12, 0.09, 0.29, 0.31, 0.17, 0.15]);  data.addRow(["'03'", "'2014-03-27 02:25:00'",0.12, 0.08, 0.34, 0.34, 0.19, 0.15]);  data.addRow(["'03'", "'2014-03-27 02:55:00'",2.18, 3.50, 25.80, 25.08, 17.71, 17.12]);  data.addRow(["'03'", "'2014-03-27 03:25:00'",0.51, 1.37, 5.51, 5.66, 3.63, 3.50]);  data.addRow(["'03'", "'2014-03-27 03:55:00'",0.10, 0.11, 0.27, 0.32, 0.17, 0.13]);  data.addRow(["'03'", "'2014-03-27 04:25:00'",0.16, 0.06, 0.31, 0.32, 0.18, 0.15]);  data.addRow(["'03'", "'2014-03-27 04:55:00'",0.33, 0.07, 0.45, 0.38, 0.18, 0.14]);  data.addRow(["'03'", "'2014-03-27 05:25:00'",0.11, 0.05, 0.31, 0.30, 0.19, 0.14]);  data.addRow(["'03'", "'2014-03-27 05:55:00'",0.13, 0.09, 0.32, 0.33, 0.21, 0.18]);  data.addRow(["'03'", "'2014-03-27 06:25:00'",0.43, 0.09, 0.66, 0.57, 0.26, 0.24]);  data.addRow(["'03'", "'2014-03-27 06:55:00'",1.20, 0.21, 1.30, 1.06, 0.41, 0.40]);  data.addRow(["'03'", "'2014-03-27 07:25:00'",1.79, 0.48, 2.04, 1.83, 0.72, 0.75]);  data.addRow(["'03'", "'2014-03-27 07:55:00'",4.50, 2.91, 4.67, 4.66, 0.99, 1.05]);  data.addRow(["'03'", "'2014-03-27 08:25:00'",5.97, 3.41, 6.31, 5.95, 1.23, 1.31]);  data.addRow(["'03'", "'2014-03-27 08:55:00'",16.24, 8.81, 15.03, 13.27, 1.57, 1.66]);  data.addRow(["'03'", "'2014-03-27 09:25:00'",26.49, 6.26, 21.72, 11.44, 1.66, 1.78]);  data.addRow(["'03'", "'2014-03-27 09:55:00'",13.86, 14.77, 14.44, 14.61, 1.62, 1.77]);  data.addRow(["'03'", "'2014-03-27 10:25:00'",7.76, 24.79, 12.33, 22.03, 1.82, 1.97]);  data.addRow(["'03'", "'2014-03-27 10:55:00'",11.05, 26.29, 15.02, 23.32, 1.89, 2.05]);  data.addRow(["'03'", "'2014-03-27 11:25:00'",15.61, 42.38, 21.11, 35.04, 1.61, 1.71]);  data.addRow(["'03'", "'2014-03-27 11:55:00'",17.14, 30.68, 24.91, 29.85, 1.46, 1.58]);  data.addRow(["'03'", "'2014-03-27 12:25:00'",6.52, 2.18, 7.88, 6.80, 1.57, 1.72]);  data.addRow(["'03'", "'2014-03-27 12:55:00'",6.05, 2.31, 6.87, 6.06, 1.77, 1.96]);  data.addRow(["'03'", "'2014-03-27 13:25:00'",9.11, 10.35, 10.54, 12.34, 1.80, 1.96]);  data.addRow(["'03'", "'2014-03-27 13:55:00'",14.77, 11.31, 16.59, 14.75, 1.69, 1.86]);  data.addRow(["'03'", "'2014-03-27 14:25:00'",15.78, 30.13, 20.34, 27.48, 1.79, 1.94]);  data.addRow(["'03'", "'2014-03-27 14:55:00'",14.06, 22.37, 17.27, 21.78, 1.78, 1.92]);  data.addRow(["'03'", "'2014-03-27 15:25:00'",9.80, 14.15, 11.38, 14.77, 1.69, 1.71]);  data.addRow(["'03'", "'2014-03-27 15:55:00'",6.01, 13.96, 7.87, 13.59, 1.39, 1.47]);  data.addRow(["'03'", "'2014-03-27 16:25:00'",10.22, 22.37, 12.53, 18.89, 1.10, 1.18]);  data.addRow(["'03'", "'2014-03-27 16:55:00'",6.00, 6.04, 6.93, 7.25, 0.96, 1.02]);  data.addRow(["'03'", "'2014-03-27 17:25:00'",5.87, 3.21, 5.78, 5.21, 0.83, 0.89]);  data.addRow(["'03'", "'2014-03-27 17:55:00'",4.74, 3.04, 4.71, 4.27, 0.62, 0.66]);  data.addRow(["'03'", "'2014-03-27 18:25:00'",4.51, 1.34, 4.14, 3.10, 0.59, 0.62]);  data.addRow(["'03'", "'2014-03-27 18:55:00'",6.48, 2.61, 5.48, 3.60, 0.47, 0.49]);  data.addRow(["'03'", "'2014-03-27 19:25:00'",10.20, 1.18, 7.77, 2.95, 0.42, 0.45]);  data.addRow(["'03'", "'2014-03-27 19:55:00'",5.51, 5.09, 5.95, 5.58, 0.72, 0.79]);  data.addRow(["'03'", "'2014-03-27 20:25:00'",2.37, 1.41, 2.71, 2.58, 0.79, 0.83]);  data.addRow(["'03'", "'2014-03-27 20:55:00'",13.63, 1.62, 10.40, 4.10, 0.71, 0.76]);  data.addRow(["'03'", "'2014-03-27 21:25:00'",5.31, 1.46, 4.82, 2.63, 0.74, 0.80]);  data.addRow(["'03'", "'2014-03-27 21:55:00'",1.29, 1.24, 1.79, 1.97, 0.61, 0.67]);  data.addRow(["'03'", "'2014-03-27 22:25:00'",2.72, 1.26, 2.70, 2.01, 0.53, 0.58]);  data.addRow(["'03'", "'2014-03-27 22:55:00'",1.02, 1.12, 1.49, 1.73, 0.51, 0.54]);  data.addRow(["'03'", "'2014-03-27 23:25:00'",0.91, 3.48, 2.20, 3.38, 0.54, 0.57]);  data.addRow(["'03'", "'2014-03-27 23:55:00'",0.91, 1.63, 1.53, 2.00, 0.48, 0.52]);  data.addRow(["'03'", "'2014-03-28 00:25:00'",0.39, 0.36, 0.86, 1.01, 0.46, 0.48]);  data.addRow(["'03'", "'2014-03-28 00:55:00'",0.57, 1.37, 1.09, 1.60, 0.41, 0.42]);  data.addRow(["'03'", "'2014-03-28 01:25:00'",0.52, 0.55, 0.94, 1.03, 0.42, 0.41]);  data.addRow(["'03'", "'2014-03-28 01:55:00'",0.24, 0.62, 0.61, 0.89, 0.28, 0.30]);  data.addRow(["'03'", "'2014-03-28 02:25:00'",0.10, 0.06, 0.43, 0.44, 0.32, 0.29]);  data.addRow(["'03'", "'2014-03-28 02:55:00'",0.24, 0.16, 0.85, 0.85, 0.57, 0.54]);  data.addRow(["'03'", "'2014-03-28 03:25:00'",2.82, 0.47, 2.67, 1.96, 0.60, 0.58]);  data.addRow(["'03'", "'2014-03-28 03:55:00'",4.22, 0.42, 3.38, 2.15, 0.39, 0.37]);  data.addRow(["'03'", "'2014-03-28 04:25:00'",0.34, 0.76, 0.75, 1.04, 0.36, 0.35]);  data.addRow(["'03'", "'2014-03-28 04:55:00'",0.19, 0.40, 0.53, 0.68, 0.33, 0.31]);  data.addRow(["'03'", "'2014-03-28 05:25:00'",0.87, 0.53, 1.06, 1.05, 0.37, 0.35]);  data.addRow(["'03'", "'2014-03-28 05:55:00'",0.55, 0.64, 0.94, 1.12, 0.44, 0.42]);  data.addRow(["'03'", "'2014-03-28 06:25:00'",6.46, 0.81, 5.15, 2.41, 0.66, 0.70]);  data.addRow(["'03'", "'2014-03-28 06:55:00'",3.59, 1.29, 3.62, 2.61, 0.92, 0.98]);  data.addRow(["'03'", "'2014-03-28 07:25:00'",7.42, 4.36, 7.38, 6.65, 1.53, 1.66]);  data.addRow(["'03'", "'2014-03-28 07:55:00'",8.77, 5.37, 9.07, 9.08, 2.21, 2.44]);  data.addRow(["'03'", "'2014-03-28 08:25:00'",12.95, 9.05, 13.80, 13.53, 2.45, 2.71]);  data.addRow(["'03'", "'2014-03-28 08:55:00'",15.00, 7.41, 14.33, 11.79, 2.33, 2.64]);  data.addRow(["'03'", "'2014-03-28 09:25:00'",82.98, 41.99, 68.67, 41.28, 2.89, 3.17]);  data.addRow(["'03'", "'2014-03-28 09:55:00'",40.79, 12.75, 32.97, 15.32, 1.60, 1.73]);  data.addRow(["'03'", "'2014-03-28 10:25:00'",86.51, 27.33, 67.12, 26.24, 1.27, 1.37]);  data.addRow(["'03'", "'2014-03-28 10:55:00'",11.12, 45.86, 18.63, 35.65, 1.31, 1.38]);  data.addRow(["'03'", "'2014-03-28 11:25:00'",11.83, 7.00, 11.15, 9.10, 1.29, 1.35]);  data.addRow(["'03'", "'2014-03-28 11:55:00'",7.30, 40.11, 14.76, 31.60, 1.47, 1.53]);  data.addRow(["'03'", "'2014-03-28 12:25:00'",39.22, 19.43, 34.69, 19.77, 1.26, 1.29]);  data.addRow(["'03'", "'2014-03-28 12:55:00'",18.91, 35.21, 21.77, 29.54, 1.32, 1.40]);  data.addRow(["'03'", "'2014-03-28 13:25:00'",7.36, 12.68, 9.30, 13.53, 1.28, 1.36]);  data.addRow(["'03'", "'2014-03-28 13:55:00'",15.33, 43.33, 30.08, 48.38, 1.37, 1.47]);  data.addRow(["'03'", "'2014-03-28 14:25:00'",5.85, 20.17, 9.87, 17.70, 1.38, 1.44]);  data.addRow(["'03'", "'2014-03-28 14:55:00'",7.91, 5.84, 8.07, 7.99, 1.26, 1.35]);  data.addRow(["'03'", "'2014-03-28 15:25:00'",15.44, 12.08, 16.25, 12.64, 1.28, 1.37]);  data.addRow(["'03'", "'2014-03-28 15:55:00'",6.31, 3.96, 6.78, 6.21, 1.20, 1.30]);  data.addRow(["'03'", "'2014-03-28 16:25:00'",3.51, 0.81, 3.79, 2.85, 0.79, 0.84]);  data.addRow(["'03'", "'2014-03-28 16:55:00'",4.93, 8.71, 7.65, 11.94, 1.02, 1.09]);  data.addRow(["'03'", "'2014-03-28 17:25:00'",3.76, 0.85, 3.63, 2.59, 0.74, 0.76]);  data.addRow(["'03'", "'2014-03-28 17:55:00'",1.56, 0.72, 1.82, 1.71, 0.42, 0.42]);  data.addRow(["'03'", "'2014-03-28 18:25:00'",0.63, 0.69, 0.99, 1.06, 0.28, 0.26]);  data.addRow(["'03'", "'2014-03-28 18:55:00'",1.26, 6.74, 3.39, 5.34, 0.36, 0.34]);  data.addRow(["'03'", "'2014-03-28 19:25:00'",0.68, 12.09, 3.47, 8.92, 0.35, 0.35]);  data.addRow(["'03'", "'2014-03-28 19:55:00'",0.63, 0.10, 0.82, 0.66, 0.32, 0.30]);  data.addRow(["'03'", "'2014-03-28 20:25:00'",0.31, 0.13, 0.56, 0.57, 0.31, 0.31]);  data.addRow(["'03'", "'2014-03-28 20:55:00'",0.59, 0.73, 0.96, 1.05, 0.31, 0.30]);  data.addRow(["'03'", "'2014-03-28 21:25:00'",0.80, 0.68, 1.10, 1.08, 0.29, 0.25]);  data.addRow(["'03'", "'2014-03-28 21:55:00'",0.66, 0.23, 0.86, 0.78, 0.30, 0.29]);  data.addRow(["'03'", "'2014-03-28 22:25:00'",1.29, 0.42, 1.31, 0.97, 0.30, 0.29]);  data.addRow(["'03'", "'2014-03-28 22:55:00'",1.56, 0.12, 1.46, 0.85, 0.31, 0.31]);  data.addRow(["'03'", "'2014-03-28 23:25:00'",0.73, 0.07, 0.81, 0.58, 0.20, 0.19]);  data.addRow(["'03'", "'2014-03-28 23:55:00'",0.33, 0.52, 0.59, 0.75, 0.20, 0.18]);  data.addRow(["'03'", "'2014-03-29 00:25:00'",1.01, 0.16, 1.04, 0.66, 0.22, 0.21]);  data.addRow(["'03'", "'2014-03-29 00:55:00'",1.24, 0.77, 1.34, 0.98, 0.17, 0.15]);  data.addRow(["'03'", "'2014-03-29 01:25:00'",0.24, 0.04, 0.35, 0.29, 0.17, 0.13]);  data.addRow(["'03'", "'2014-03-29 01:55:00'",0.08, 0.19, 0.33, 0.36, 0.18, 0.11]);  data.addRow(["'03'", "'2014-03-29 02:25:00'",0.06, 0.03, 0.22, 0.19, 0.15, 0.09]);  data.addRow(["'03'", "'2014-03-29 02:55:00'",0.26, 0.16, 0.46, 0.43, 0.22, 0.15]);  data.addRow(["'03'", "'2014-03-29 03:25:00'",0.05, 0.03, 0.23, 0.22, 0.14, 0.11]);  data.addRow(["'03'", "'2014-03-29 03:55:00'",0.56, 0.03, 0.58, 0.29, 0.16, 0.12]);  data.addRow(["'03'", "'2014-03-29 04:25:00'",0.12, 0.33, 0.37, 0.45, 0.15, 0.11]);  data.addRow(["'03'", "'2014-03-29 04:55:00'",0.04, 0.03, 0.23, 0.23, 0.16, 0.12]);  data.addRow(["'03'", "'2014-03-29 05:25:00'",0.07, 0.05, 0.30, 0.31, 0.14, 0.11]);  data.addRow(["'03'", "'2014-03-29 05:55:00'",0.09, 0.03, 0.28, 0.27, 0.15, 0.11]);  data.addRow(["'03'", "'2014-03-29 06:25:00'",0.67, 0.07, 0.69, 0.45, 0.16, 0.12]);  data.addRow(["'03'", "'2014-03-29 06:55:00'",0.15, 0.03, 0.30, 0.27, 0.16, 0.12]);  data.addRow(["'03'", "'2014-03-29 07:25:00'",0.11, 0.05, 0.28, 0.27, 0.18, 0.14]);  data.addRow(["'03'", "'2014-03-29 07:55:00'",0.09, 0.03, 0.30, 0.28, 0.18, 0.13]);  data.addRow(["'03'", "'2014-03-29 08:25:00'",0.14, 0.06, 0.32, 0.31, 0.20, 0.16]);  data.addRow(["'03'", "'2014-03-29 08:55:00'",0.13, 0.06, 0.33, 0.34, 0.21, 0.16]);  data.addRow(["'03'", "'2014-03-29 09:25:00'",0.50, 0.06, 0.64, 0.49, 0.23, 0.21]);  data.addRow(["'03'", "'2014-03-29 09:55:00'",0.17, 0.05, 0.39, 0.37, 0.23, 0.19]);  data.addRow(["'03'", "'2014-03-29 10:25:00'",0.86, 0.10, 0.90, 0.65, 0.27, 0.25]);  data.addRow(["'03'", "'2014-03-29 10:55:00'",0.26, 0.08, 0.47, 0.43, 0.26, 0.24]);  data.addRow(["'03'", "'2014-03-29 11:25:00'",0.21, 0.09, 0.43, 0.40, 0.24, 0.19]);  data.addRow(["'03'", "'2014-03-29 11:55:00'",0.75, 0.29, 0.89, 0.63, 0.22, 0.18]);  data.addRow(["'03'", "'2014-03-29 12:25:00'",1.54, 0.18, 1.46, 1.11, 0.36, 0.33]);  data.addRow(["'03'", "'2014-03-29 12:55:00'",0.65, 0.34, 1.09, 1.02, 0.41, 0.38]);  data.addRow(["'03'", "'2014-03-29 13:25:00'",0.89, 0.14, 1.01, 0.69, 0.33, 0.31]);  data.addRow(["'03'", "'2014-03-29 13:55:00'",1.25, 0.85, 1.55, 1.79, 0.46, 0.44]);  data.addRow(["'03'", "'2014-03-29 14:25:00'",1.37, 0.77, 1.60, 1.44, 0.39, 0.36]);  data.addRow(["'03'", "'2014-03-29 14:55:00'",0.83, 0.11, 1.00, 0.78, 0.37, 0.30]);  data.addRow(["'03'", "'2014-03-29 15:25:00'",1.24, 0.61, 1.47, 1.18, 0.39, 0.35]);  data.addRow(["'03'", "'2014-03-29 15:55:00'",2.32, 0.10, 2.00, 0.77, 0.36, 0.30]);  data.addRow(["'03'", "'2014-03-29 16:25:00'",14.03, 0.20, 10.03, 1.53, 0.37, 0.33]);  data.addRow(["'03'", "'2014-03-29 16:55:00'",0.52, 0.17, 0.80, 0.74, 0.32, 0.30]);  data.addRow(["'03'", "'2014-03-29 17:25:00'",0.80, 1.35, 1.23, 1.60, 0.37, 0.35]);  data.addRow(["'03'", "'2014-03-29 17:55:00'",1.79, 0.17, 1.63, 0.66, 0.35, 0.31]);  data.addRow(["'03'", "'2014-03-29 18:25:00'",0.64, 0.18, 0.89, 0.77, 0.37, 0.33]);  data.addRow(["'03'", "'2014-03-29 18:55:00'",0.60, 0.12, 0.78, 0.66, 0.32, 0.28]);  data.addRow(["'03'", "'2014-03-29 19:25:00'",1.29, 0.20, 1.27, 0.74, 0.31, 0.27]);  data.addRow(["'03'", "'2014-03-29 19:55:00'",9.27, 0.38, 7.07, 4.00, 0.72, 0.71]);  data.addRow(["'03'", "'2014-03-29 20:25:00'",8.27, 0.48, 6.18, 2.79, 0.45, 0.42]);  data.addRow(["'03'", "'2014-03-29 20:55:00'",0.66, 0.10, 0.77, 0.61, 0.27, 0.22]);  data.addRow(["'03'", "'2014-03-29 21:25:00'",0.31, 0.08, 0.52, 0.50, 0.27, 0.24]);  data.addRow(["'03'", "'2014-03-29 21:55:00'",0.28, 0.09, 0.46, 0.46, 0.22, 0.21]);  data.addRow(["'03'", "'2014-03-29 22:25:00'",0.13, 0.03, 0.20, 0.19, 0.10, 0.09]);  data.addRow(["'03'", "'2014-03-29 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 13:25:00'",23.78, 18.08, 21.56, 21.68, 1.75, 1.90]);  data.addRow(["'04'", "'2014-04-01 13:55:00'",19.79, 21.34, 21.40, 21.72, 1.88, 2.00]);  data.addRow(["'04'", "'2014-04-01 14:25:00'",10.84, 8.27, 11.08, 12.18, 1.95, 2.12]);  data.addRow(["'04'", "'2014-04-01 14:55:00'",15.89, 20.32, 17.98, 23.12, 2.01, 2.16]);  data.addRow(["'04'", "'2014-04-01 15:25:00'",31.09, 45.45, 36.00, 43.83, 2.11, 2.26]);  data.addRow(["'04'", "'2014-04-01 15:55:00'",12.42, 22.48, 18.81, 25.73, 1.59, 1.68]);  data.addRow(["'04'", "'2014-04-01 16:25:00'",10.84, 21.24, 12.77, 18.35, 1.20, 1.24]);  data.addRow(["'04'", "'2014-04-01 16:55:00'",32.88, 16.01, 27.26, 22.20, 0.91, 0.95]);  data.addRow(["'04'", "'2014-04-01 17:25:00'",4.83, 5.86, 5.56, 6.59, 0.85, 0.90]);  data.addRow(["'04'", "'2014-04-01 17:55:00'",2.61, 9.05, 4.78, 8.03, 0.81, 0.85]);  data.addRow(["'04'", "'2014-04-01 18:25:00'",1.85, 13.45, 4.76, 10.54, 0.61, 0.65]);  data.addRow(["'04'", "'2014-04-01 18:55:00'",1.75, 14.39, 4.98, 11.26, 0.62, 0.65]);  data.addRow(["'04'", "'2014-04-01 19:25:00'",2.18, 2.04, 2.76, 2.77, 0.59, 0.62]);  data.addRow(["'04'", "'2014-04-01 19:55:00'",2.60, 1.58, 2.90, 2.64, 0.59, 0.60]);  data.addRow(["'04'", "'2014-04-01 20:25:00'",0.91, 0.67, 1.45, 1.52, 0.60, 0.61]);  data.addRow(["'04'", "'2014-04-01 20:55:00'",1.67, 0.54, 1.76, 1.37, 0.41, 0.43]);  data.addRow(["'04'", "'2014-04-01 21:25:00'",1.20, 0.89, 1.53, 1.52, 0.38, 0.37]);  data.addRow(["'04'", "'2014-04-01 21:55:00'",3.12, 1.26, 2.92, 2.11, 0.42, 0.43]);  data.addRow(["'04'", "'2014-04-01 22:25:00'",0.66, 0.10, 0.84, 0.68, 0.38, 0.38]);  data.addRow(["'04'", "'2014-04-01 22:55:00'",0.90, 0.14, 1.10, 0.83, 0.43, 0.43]);  data.addRow(["'04'", "'2014-04-01 23:25:00'",0.28, 0.60, 0.59, 0.80, 0.27, 0.26]);  data.addRow(["'04'", "'2014-04-01 23:55:00'",0.54, 0.14, 0.78, 0.66, 0.30, 0.29]);  data.addRow(["'04'", "'2014-04-02 00:25:00'",0.40, 0.21, 0.65, 0.64, 0.25, 0.23]);  data.addRow(["'04'", "'2014-04-02 00:55:00'",0.41, 0.30, 0.61, 0.54, 0.21, 0.18]);  data.addRow(["'04'", "'2014-04-02 01:25:00'",0.05, 0.03, 0.21, 0.20, 0.14, 0.12]);  data.addRow(["'04'", "'2014-04-02 01:55:00'",0.80, 0.03, 0.83, 0.31, 0.28, 0.12]);  data.addRow(["'04'", "'2014-04-02 02:25:00'",0.08, 0.07, 0.24, 0.21, 0.15, 0.13]);  data.addRow(["'04'", "'2014-04-02 02:55:00'",0.08, 0.04, 0.24, 0.22, 0.16, 0.12]);  data.addRow(["'04'", "'2014-04-02 03:25:00'",0.08, 0.15, 0.25, 0.27, 0.16, 0.13]);  data.addRow(["'04'", "'2014-04-02 03:55:00'",0.10, 0.03, 0.25, 0.20, 0.15, 0.11]);  data.addRow(["'04'", "'2014-04-02 04:25:00'",0.13, 0.11, 0.35, 0.33, 0.15, 0.12]);  data.addRow(["'04'", "'2014-04-02 04:55:00'",0.12, 0.05, 0.27, 0.22, 0.14, 0.10]);  data.addRow(["'04'", "'2014-04-02 05:25:00'",0.53, 0.07, 0.58, 0.47, 0.19, 0.17]);  data.addRow(["'04'", "'2014-04-02 05:55:00'",1.71, 0.07, 1.39, 0.90, 0.18, 0.16]);  data.addRow(["'04'", "'2014-04-02 06:25:00'",0.85, 0.48, 0.95, 0.73, 0.23, 0.22]);  data.addRow(["'04'", "'2014-04-02 06:55:00'",5.76, 0.22, 4.46, 1.07, 0.41, 0.39]);  data.addRow(["'04'", "'2014-04-02 07:25:00'",1.73, 2.33, 2.17, 2.74, 0.59, 0.61]);  data.addRow(["'04'", "'2014-04-02 07:55:00'",43.19, 1.00, 31.73, 5.58, 0.93, 0.97]);  data.addRow(["'04'", "'2014-04-02 08:25:00'",19.56, 10.56, 16.92, 11.74, 1.15, 1.19]);  data.addRow(["'04'", "'2014-04-02 08:55:00'",19.48, 3.63, 15.78, 7.90, 1.42, 1.50]);  data.addRow(["'04'", "'2014-04-02 09:25:00'",11.99, 3.16, 10.61, 6.69, 1.45, 1.54]);  data.addRow(["'04'", "'2014-04-02 09:55:00'",27.92, 6.14, 22.46, 12.18, 1.66, 1.79]);  data.addRow(["'04'", "'2014-04-02 10:25:00'",16.25, 4.30, 13.86, 8.83, 1.48, 1.58]);  data.addRow(["'04'", "'2014-04-02 10:55:00'",7.72, 3.43, 7.80, 7.27, 1.46, 1.54]);  data.addRow(["'04'", "'2014-04-02 11:25:00'",14.55, 9.22, 13.93, 12.46, 1.59, 1.69]);  data.addRow(["'04'", "'2014-04-02 11:55:00'",20.47, 24.93, 27.26, 40.93, 1.57, 1.61]);  data.addRow(["'04'", "'2014-04-02 12:25:00'",19.12, 5.22, 16.59, 9.25, 1.60, 1.68]);  data.addRow(["'04'", "'2014-04-02 12:55:00'",23.99, 19.29, 26.54, 35.94, 1.86, 1.96]);  data.addRow(["'04'", "'2014-04-02 13:25:00'",17.03, 17.54, 18.49, 19.76, 1.60, 1.69]);  data.addRow(["'04'", "'2014-04-02 13:55:00'",21.85, 17.13, 24.48, 33.09, 1.73, 1.84]);  data.addRow(["'04'", "'2014-04-02 14:25:00'",13.16, 13.93, 13.15, 14.50, 1.31, 1.38]); 
	    var graphtitle="FIU to RCM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    