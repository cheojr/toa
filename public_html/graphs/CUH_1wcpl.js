
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03'", "'2014-03-26 14:55:00'",5.92, 5.06, 8.52, 7.45, 1.00, 1.01]);  data.addRow(["'03'", "'2014-03-26 15:25:00'",9.71, 6.26, 12.66, 10.76, 1.80, 1.71]);  data.addRow(["'03'", "'2014-03-26 15:55:00'",18.42, 3.99, 17.43, 9.00, 1.71, 1.71]);  data.addRow(["'03'", "'2014-03-26 16:25:00'",8.70, 2.75, 9.58, 8.04, 1.44, 1.39]);  data.addRow(["'03'", "'2014-03-26 16:55:00'",14.03, 3.11, 13.65, 9.79, 1.40, 1.42]);  data.addRow(["'03'", "'2014-03-26 17:25:00'",2.56, 2.23, 4.98, 4.00, 1.11, 1.09]);  data.addRow(["'03'", "'2014-03-26 17:55:00'",22.68, 1.73, 18.30, 7.05, 1.16, 1.14]);  data.addRow(["'03'", "'2014-03-26 18:25:00'",5.14, 1.99, 5.99, 4.75, 1.01, 1.04]);  data.addRow(["'03'", "'2014-03-26 18:55:00'",8.52, 15.64, 18.24, 15.38, 0.66, 0.66]);  data.addRow(["'03'", "'2014-03-26 19:25:00'",3.77, 3.23, 4.72, 4.95, 0.65, 0.67]);  data.addRow(["'03'", "'2014-03-26 19:55:00'",3.14, 4.29, 7.78, 5.48, 0.51, 0.53]);  data.addRow(["'03'", "'2014-03-26 20:25:00'",0.51, 1.85, 1.61, 2.15, 0.43, 0.52]);  data.addRow(["'03'", "'2014-03-26 20:55:00'",0.43, 0.57, 1.02, 0.95, 0.33, 0.36]);  data.addRow(["'03'", "'2014-03-26 21:25:00'",9.85, 0.64, 7.53, 6.17, 0.31, 0.34]);  data.addRow(["'03'", "'2014-03-26 21:55:00'",1.15, 0.34, 1.28, 1.12, 0.26, 0.30]);  data.addRow(["'03'", "'2014-03-26 22:25:00'",0.15, 0.10, 0.41, 0.53, 0.24, 0.26]);  data.addRow(["'03'", "'2014-03-26 22:55:00'",0.25, 0.05, 0.37, 0.56, 0.16, 0.19]);  data.addRow(["'03'", "'2014-03-26 23:25:00'",0.35, 0.05, 0.47, 0.47, 0.15, 0.17]);  data.addRow(["'03'", "'2014-03-26 23:55:00'",0.15, 0.05, 0.30, 0.29, 0.13, 0.15]);  data.addRow(["'03'", "'2014-03-27 00:25:00'",1.30, 0.07, 1.11, 0.87, 0.16, 0.18]);  data.addRow(["'03'", "'2014-03-27 00:55:00'",0.06, 0.03, 0.18, 0.23, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-27 01:25:00'",0.04, 0.03, 0.18, 0.24, 0.12, 0.14]);  data.addRow(["'03'", "'2014-03-27 01:55:00'",0.03, 0.03, 0.17, 0.20, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-27 02:25:00'",0.20, 0.08, 0.35, 0.38, 0.16, 0.25]);  data.addRow(["'03'", "'2014-03-27 02:55:00'",0.09, 0.04, 0.21, 0.23, 0.11, 0.15]);  data.addRow(["'03'", "'2014-03-27 03:25:00'",0.10, 0.03, 0.21, 0.21, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-27 03:55:00'",0.09, 0.03, 0.23, 0.27, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-27 04:25:00'",0.04, 0.03, 0.20, 0.22, 0.14, 0.15]);  data.addRow(["'03'", "'2014-03-27 04:55:00'",0.56, 0.05, 0.54, 0.47, 0.13, 0.15]);  data.addRow(["'03'", "'2014-03-27 05:25:00'",0.06, 0.03, 0.23, 0.32, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-27 05:55:00'",0.08, 0.04, 0.27, 0.25, 0.18, 0.18]);  data.addRow(["'03'", "'2014-03-27 06:25:00'",0.65, 0.05, 0.67, 0.58, 0.19, 0.22]);  data.addRow(["'03'", "'2014-03-27 06:55:00'",1.85, 0.80, 2.08, 1.71, 0.36, 0.33]);  data.addRow(["'03'", "'2014-03-27 07:25:00'",3.21, 2.80, 4.35, 4.29, 0.82, 0.82]);  data.addRow(["'03'", "'2014-03-27 07:55:00'",8.71, 2.70, 9.07, 6.46, 1.35, 1.35]);  data.addRow(["'03'", "'2014-03-27 08:25:00'",19.10, 3.71, 16.58, 11.22, 1.52, 1.52]);  data.addRow(["'03'", "'2014-03-27 08:55:00'",19.69, 7.85, 19.91, 15.17, 1.88, 1.80]);  data.addRow(["'03'", "'2014-03-27 09:25:00'",9.34, 13.30, 15.27, 15.66, 2.28, 2.31]);  data.addRow(["'03'", "'2014-03-27 09:55:00'",23.85, 14.38, 26.09, 22.14, 2.07, 2.05]);  data.addRow(["'03'", "'2014-03-27 10:25:00'",16.03, 6.41, 19.61, 15.00, 1.80, 1.81]);  data.addRow(["'03'", "'2014-03-27 10:55:00'",12.30, 3.28, 12.66, 9.58, 1.65, 1.71]);  data.addRow(["'03'", "'2014-03-27 11:25:00'",3.72, 5.14, 7.54, 7.18, 1.74, 1.73]);  data.addRow(["'03'", "'2014-03-27 11:55:00'",10.78, 6.01, 13.72, 12.19, 1.82, 1.80]);  data.addRow(["'03'", "'2014-03-27 12:25:00'",8.07, 5.57, 10.52, 9.34, 1.75, 1.72]);  data.addRow(["'03'", "'2014-03-27 12:55:00'",51.02, 9.66, 44.75, 27.97, 2.62, 2.62]);  data.addRow(["'03'", "'2014-03-27 13:25:00'",5.55, 11.56, 13.41, 13.39, 2.38, 2.35]);  data.addRow(["'03'", "'2014-03-27 13:55:00'",35.31, 7.97, 32.01, 20.00, 2.88, 2.84]);  data.addRow(["'03'", "'2014-03-27 14:25:00'",6.47, 9.44, 11.19, 11.72, 2.34, 2.31]);  data.addRow(["'03'", "'2014-03-27 14:55:00'",8.41, 7.14, 11.80, 10.81, 1.72, 1.66]);  data.addRow(["'03'", "'2014-03-27 15:25:00'",9.89, 3.83, 11.58, 9.34, 1.82, 1.83]);  data.addRow(["'03'", "'2014-03-27 15:55:00'",10.53, 4.26, 12.17, 8.64, 1.77, 1.74]);  data.addRow(["'03'", "'2014-03-27 16:25:00'",12.85, 9.81, 16.31, 14.12, 1.36, 1.31]);  data.addRow(["'03'", "'2014-03-27 16:55:00'",13.11, 5.68, 13.27, 10.42, 1.02, 1.00]);  data.addRow(["'03'", "'2014-03-27 17:25:00'",17.27, 2.59, 14.68, 9.87, 0.86, 0.84]);  data.addRow(["'03'", "'2014-03-27 17:55:00'",15.60, 1.22, 12.36, 7.10, 0.71, 0.65]);  data.addRow(["'03'", "'2014-03-27 18:25:00'",11.50, 1.59, 10.51, 6.04, 0.71, 0.71]);  data.addRow(["'03'", "'2014-03-27 18:55:00'",3.98, 0.49, 4.15, 2.63, 0.91, 0.92]);  data.addRow(["'03'", "'2014-03-27 19:25:00'",6.58, 1.73, 6.72, 4.18, 0.93, 0.96]);  data.addRow(["'03'", "'2014-03-27 19:55:00'",1.14, 4.36, 3.91, 4.49, 1.34, 1.14]);  data.addRow(["'03'", "'2014-03-27 20:25:00'",0.63, 0.87, 2.42, 2.09, 1.40, 1.33]);  data.addRow(["'03'", "'2014-03-27 20:55:00'",0.48, 3.07, 3.11, 3.87, 1.46, 1.29]);  data.addRow(["'03'", "'2014-03-27 21:25:00'",1.05, 2.29, 2.99, 3.15, 1.22, 1.14]);  data.addRow(["'03'", "'2014-03-27 21:55:00'",0.60, 0.31, 2.05, 1.72, 1.33, 1.25]);  data.addRow(["'03'", "'2014-03-27 22:25:00'",0.35, 0.11, 1.20, 1.01, 0.83, 0.77]);  data.addRow(["'03'", "'2014-03-27 22:55:00'",0.64, 0.11, 1.13, 0.88, 0.60, 0.56]);  data.addRow(["'03'", "'2014-03-27 23:25:00'",0.48, 0.12, 0.58, 0.31, 0.18, 0.16]);  data.addRow(["'03'", "'2014-03-27 23:55:00'",0.57, 0.03, 0.59, 0.29, 0.17, 0.14]);  data.addRow(["'03'", "'2014-03-28 00:25:00'",1.30, 0.05, 1.14, 0.55, 0.18, 0.15]);  data.addRow(["'03'", "'2014-03-28 00:55:00'",7.40, 0.14, 5.44, 2.25, 0.18, 0.14]);  data.addRow(["'03'", "'2014-03-28 01:25:00'",0.57, 0.03, 0.57, 0.34, 0.15, 0.13]);  data.addRow(["'03'", "'2014-03-28 01:55:00'",0.05, 0.03, 0.45, 0.18, 0.15, 0.13]);  data.addRow(["'03'", "'2014-03-28 02:25:00'",0.03, 0.03, 0.17, 0.21, 0.11, 0.14]);  data.addRow(["'03'", "'2014-03-28 02:55:00'",0.06, 0.03, 0.19, 0.41, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 03:25:00'",0.63, 0.03, 0.70, 0.29, 0.20, 0.15]);  data.addRow(["'03'", "'2014-03-28 03:55:00'",0.31, 0.03, 0.46, 0.27, 0.17, 0.15]);  data.addRow(["'03'", "'2014-03-28 04:25:00'",0.29, 0.02, 0.40, 0.23, 0.16, 0.14]);  data.addRow(["'03'", "'2014-03-28 04:55:00'",4.47, 0.14, 3.37, 1.92, 0.17, 0.15]);  data.addRow(["'03'", "'2014-03-28 05:25:00'",0.25, 0.03, 0.44, 0.31, 0.23, 0.16]);  data.addRow(["'03'", "'2014-03-28 05:55:00'",0.75, 0.04, 0.94, 0.36, 0.21, 0.15]);  data.addRow(["'03'", "'2014-03-28 06:25:00'",0.20, 0.33, 0.56, 0.45, 0.19, 0.17]);  data.addRow(["'03'", "'2014-03-28 06:55:00'",0.49, 0.12, 0.72, 0.36, 0.29, 0.20]);  data.addRow(["'03'", "'2014-03-28 07:25:00'",3.53, 1.90, 4.82, 2.38, 0.86, 0.48]);  data.addRow(["'03'", "'2014-03-28 07:55:00'",12.84, 2.50, 12.34, 5.56, 1.71, 1.07]);  data.addRow(["'03'", "'2014-03-28 08:25:00'",17.55, 6.82, 58.05, 11.11, 2.00, 1.18]);  data.addRow(["'03'", "'2014-03-28 08:55:00'",9.97, 3.55, 12.74, 6.84, 2.23, 1.41]);  data.addRow(["'03'", "'2014-03-28 09:25:00'",12.54, 4.32, 15.10, 8.54, 2.59, 1.65]);  data.addRow(["'03'", "'2014-03-28 09:55:00'",16.22, 4.48, 18.40, 12.09, 2.79, 2.59]);  data.addRow(["'03'", "'2014-03-28 10:25:00'",35.66, 7.83, 31.93, 21.79, 2.59, 2.53]);  data.addRow(["'03'", "'2014-03-28 10:55:00'",13.10, 6.67, 15.41, 12.73, 2.28, 2.17]);  data.addRow(["'03'", "'2014-03-28 11:25:00'",11.62, 5.85, 14.88, 12.15, 3.14, 3.06]);  data.addRow(["'03'", "'2014-03-28 11:55:00'",5.93, 16.69, 18.28, 18.74, 2.81, 2.73]);  data.addRow(["'03'", "'2014-03-28 12:25:00'",5.27, 8.37, 11.26, 10.60, 2.94, 2.85]);  data.addRow(["'03'", "'2014-03-28 12:55:00'",9.64, 11.21, 15.46, 15.26, 3.31, 3.11]);  data.addRow(["'03'", "'2014-03-28 13:25:00'",8.07, 8.48, 13.83, 12.27, 3.24, 3.04]);  data.addRow(["'03'", "'2014-03-28 13:55:00'",3.08, 5.89, 7.76, 8.42, 2.74, 2.58]);  data.addRow(["'03'", "'2014-03-28 14:25:00'",9.60, 15.82, 15.85, 17.72, 2.88, 2.81]);  data.addRow(["'03'", "'2014-03-28 14:55:00'",3.48, 4.93, 8.06, 7.80, 2.60, 2.39]);  data.addRow(["'03'", "'2014-03-28 15:25:00'",10.57, 2.72, 13.00, 10.50, 2.77, 2.50]);  data.addRow(["'03'", "'2014-03-28 15:55:00'",6.09, 3.59, 30.68, 6.99, 2.86, 2.49]);  data.addRow(["'03'", "'2014-03-28 16:25:00'",8.93, 5.37, 11.81, 9.87, 2.33, 2.03]);  data.addRow(["'03'", "'2014-03-28 16:55:00'",14.93, 30.34, 50.29, 28.82, 2.19, 1.92]);  data.addRow(["'03'", "'2014-03-28 17:25:00'",9.86, 1.92, 9.41, 6.85, 1.71, 1.49]);  data.addRow(["'03'", "'2014-03-28 17:55:00'",3.70, 19.72, 39.87, 15.70, 0.76, 0.70]);  data.addRow(["'03'", "'2014-03-28 18:25:00'",2.98, 0.54, 2.87, 2.30, 0.39, 0.40]);  data.addRow(["'03'", "'2014-03-28 18:55:00'",4.49, 0.63, 3.66, 3.29, 0.28, 0.29]);  data.addRow(["'03'", "'2014-03-28 19:25:00'",7.09, 0.38, 5.41, 2.83, 0.26, 0.27]);  data.addRow(["'03'", "'2014-03-28 19:55:00'",2.90, 0.12, 2.28, 1.47, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-28 20:25:00'",0.11, 0.06, 0.30, 0.28, 0.18, 0.18]);  data.addRow(["'03'", "'2014-03-28 20:55:00'",3.37, 0.21, 2.74, 1.92, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-28 21:25:00'",0.12, 0.52, 0.54, 0.60, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-28 21:55:00'",0.03, 0.03, 0.16, 0.19, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-28 22:25:00'",7.94, 0.15, 5.74, 2.81, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-28 22:55:00'",0.03, 0.01, 0.15, 0.18, 0.10, 0.11]);  data.addRow(["'03'", "'2014-03-28 23:25:00'",5.72, 0.13, 4.13, 2.53, 0.09, 0.10]);  data.addRow(["'03'", "'2014-03-28 23:55:00'",0.02, 0.02, 0.13, 0.18, 0.09, 0.11]);  data.addRow(["'03'", "'2014-03-29 00:25:00'",0.03, 0.01, 0.14, 0.20, 0.08, 0.11]);  data.addRow(["'03'", "'2014-03-29 00:55:00'",0.03, 1.22, 0.24, 1.05, 0.09, 0.10]);  data.addRow(["'03'", "'2014-03-29 01:25:00'",1.19, 0.90, 1.02, 1.15, 0.09, 0.12]);  data.addRow(["'03'", "'2014-03-29 01:55:00'",0.74, 3.48, 1.63, 2.79, 0.10, 0.13]);  data.addRow(["'03'", "'2014-03-29 02:25:00'",0.09, 0.02, 0.18, 0.21, 0.09, 0.12]);  data.addRow(["'03'", "'2014-03-29 02:55:00'",0.19, 0.02, 0.27, 0.35, 0.09, 0.13]);  data.addRow(["'03'", "'2014-03-29 03:25:00'",0.52, 0.03, 0.54, 0.29, 0.10, 0.12]);  data.addRow(["'03'", "'2014-03-29 03:55:00'",0.19, 0.02, 0.28, 0.22, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 04:25:00'",0.19, 0.02, 0.26, 0.23, 0.10, 0.12]);  data.addRow(["'03'", "'2014-03-29 04:55:00'",0.15, 0.01, 0.23, 0.23, 0.10, 0.11]);  data.addRow(["'03'", "'2014-03-29 05:25:00'",0.17, 0.02, 0.26, 0.28, 0.11, 0.13]);  data.addRow(["'03'", "'2014-03-29 05:55:00'",0.13, 0.01, 0.21, 0.20, 0.09, 0.10]);  data.addRow(["'03'", "'2014-03-29 06:25:00'",0.03, 0.01, 0.16, 0.16, 0.11, 0.11]);  data.addRow(["'03'", "'2014-03-29 06:55:00'",3.46, 0.02, 2.56, 0.19, 0.10, 0.12]);  data.addRow(["'03'", "'2014-03-29 07:25:00'",0.03, 0.04, 0.18, 0.29, 0.13, 0.15]);  data.addRow(["'03'", "'2014-03-29 07:55:00'",0.13, 0.05, 0.33, 0.39, 0.16, 0.16]);  data.addRow(["'03'", "'2014-03-29 08:25:00'",0.16, 0.05, 0.64, 0.61, 0.18, 0.17]);  data.addRow(["'03'", "'2014-03-29 08:55:00'",2.66, 0.38, 2.54, 1.98, 0.25, 0.26]);  data.addRow(["'03'", "'2014-03-29 09:25:00'",1.08, 0.53, 1.54, 1.45, 0.29, 0.29]);  data.addRow(["'03'", "'2014-03-29 09:55:00'",0.15, 1.05, 1.13, 1.42, 0.31, 0.31]);  data.addRow(["'03'", "'2014-03-29 10:25:00'",0.21, 0.22, 0.92, 0.85, 0.32, 0.32]);  data.addRow(["'03'", "'2014-03-29 10:55:00'",0.43, 1.65, 2.17, 2.35, 0.68, 0.72]);  data.addRow(["'03'", "'2014-03-29 11:25:00'",0.55, 0.78, 1.42, 1.33, 0.56, 0.56]);  data.addRow(["'03'", "'2014-03-29 11:55:00'",0.18, 0.36, 1.14, 1.07, 0.71, 0.70]);  data.addRow(["'03'", "'2014-03-29 12:25:00'",12.87, 0.68, 10.29, 5.90, 0.67, 0.67]);  data.addRow(["'03'", "'2014-03-29 12:55:00'",0.27, 0.60, 0.87, 0.85, 0.35, 0.33]);  data.addRow(["'03'", "'2014-03-29 13:25:00'",0.17, 1.20, 1.27, 1.56, 0.65, 0.64]);  data.addRow(["'03'", "'2014-03-29 13:55:00'",0.13, 0.38, 0.64, 0.75, 0.37, 0.34]);  data.addRow(["'03'", "'2014-03-29 14:25:00'",0.28, 0.78, 0.75, 1.27, 0.33, 0.31]);  data.addRow(["'03'", "'2014-03-29 14:55:00'",0.20, 0.27, 0.61, 0.53, 0.26, 0.24]);  data.addRow(["'03'", "'2014-03-29 15:25:00'",0.19, 0.54, 0.81, 0.73, 0.27, 0.26]);  data.addRow(["'03'", "'2014-03-29 15:55:00'",1.12, 1.03, 1.85, 1.51, 0.31, 0.30]);  data.addRow(["'03'", "'2014-03-29 16:25:00'",0.42, 1.11, 1.41, 1.38, 0.36, 0.35]);  data.addRow(["'03'", "'2014-03-29 16:55:00'",0.33, 0.54, 1.25, 1.24, 0.44, 0.42]);  data.addRow(["'03'", "'2014-03-29 17:25:00'",0.81, 16.98, 6.37, 12.28, 0.35, 0.32]);  data.addRow(["'03'", "'2014-03-29 17:55:00'",0.14, 1.47, 1.44, 1.44, 0.23, 0.23]);  data.addRow(["'03'", "'2014-03-29 18:25:00'",0.07, 0.44, 0.57, 0.61, 0.28, 0.26]);  data.addRow(["'03'", "'2014-03-29 18:55:00'",0.05, 0.36, 0.47, 0.55, 0.25, 0.23]);  data.addRow(["'03'", "'2014-03-29 19:25:00'",0.47, 5.11, 2.94, 4.04, 0.25, 0.22]);  data.addRow(["'03'", "'2014-03-29 19:55:00'",5.15, 0.37, 4.13, 2.58, 0.21, 0.20]);  data.addRow(["'03'", "'2014-03-29 20:25:00'",0.88, 0.04, 0.79, 0.67, 0.13, 0.12]);  data.addRow(["'03'", "'2014-03-29 20:55:00'",0.18, 0.03, 0.32, 0.19, 0.14, 0.12]);  data.addRow(["'03'", "'2014-03-29 21:25:00'",0.56, 0.07, 0.57, 0.42, 0.12, 0.11]);  data.addRow(["'03'", "'2014-03-29 21:55:00'",0.05, 0.09, 0.20, 0.23, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 22:25:00'",0.16, 0.15, 0.24, 0.25, 0.07, 0.07]);  data.addRow(["'03'", "'2014-03-29 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 13:25:00'",5.43, 5.12, 9.84, 10.43, 2.04, 2.04]);  data.addRow(["'04'", "'2014-04-01 13:55:00'",15.58, 3.51, 16.68, 12.23, 2.06, 2.09]);  data.addRow(["'04'", "'2014-04-01 14:25:00'",12.03, 7.49, 14.11, 13.02, 1.54, 1.50]);  data.addRow(["'04'", "'2014-04-01 14:55:00'",8.35, 6.06, 12.48, 11.24, 1.88, 1.82]);  data.addRow(["'04'", "'2014-04-01 15:25:00'",15.70, 5.28, 15.82, 11.97, 1.75, 1.75]);  data.addRow(["'04'", "'2014-04-01 15:55:00'",12.91, 7.33, 16.05, 14.06, 2.31, 2.27]);  data.addRow(["'04'", "'2014-04-01 16:25:00'",7.32, 6.94, 11.36, 11.39, 2.13, 2.04]);  data.addRow(["'04'", "'2014-04-01 16:55:00'",6.05, 10.78, 11.59, 12.91, 1.57, 1.56]);  data.addRow(["'04'", "'2014-04-01 17:25:00'",4.31, 1.72, 5.88, 5.07, 1.66, 1.65]);  data.addRow(["'04'", "'2014-04-01 17:55:00'",2.36, 3.20, 5.47, 5.38, 1.68, 1.68]);  data.addRow(["'04'", "'2014-04-01 18:25:00'",0.76, 2.00, 4.39, 4.44, 1.29, 1.28]);  data.addRow(["'04'", "'2014-04-01 18:55:00'",1.72, 0.97, 2.91, 2.77, 1.05, 1.04]);  data.addRow(["'04'", "'2014-04-01 19:25:00'",1.57, 5.67, 4.83, 5.83, 1.18, 1.14]);  data.addRow(["'04'", "'2014-04-01 19:55:00'",12.09, 3.03, 10.88, 6.77, 0.90, 0.86]);  data.addRow(["'04'", "'2014-04-01 20:25:00'",0.27, 0.35, 1.13, 1.00, 0.56, 0.57]);  data.addRow(["'04'", "'2014-04-01 20:55:00'",1.37, 2.09, 3.08, 2.51, 0.66, 0.66]);  data.addRow(["'04'", "'2014-04-01 21:25:00'",1.47, 0.70, 1.86, 1.55, 0.40, 0.42]);  data.addRow(["'04'", "'2014-04-01 21:55:00'",0.51, 0.35, 0.94, 0.87, 0.31, 0.32]);  data.addRow(["'04'", "'2014-04-01 22:25:00'",2.46, 0.63, 2.37, 2.03, 0.28, 0.29]);  data.addRow(["'04'", "'2014-04-01 22:55:00'",0.23, 0.63, 0.79, 0.83, 0.26, 0.27]);  data.addRow(["'04'", "'2014-04-01 23:25:00'",0.09, 0.05, 0.30, 0.30, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-01 23:55:00'",0.29, 0.09, 0.42, 0.52, 0.12, 0.14]);  data.addRow(["'04'", "'2014-04-02 00:25:00'",3.59, 0.09, 2.81, 1.32, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-02 00:55:00'",0.51, 0.05, 0.59, 0.44, 0.12, 0.14]);  data.addRow(["'04'", "'2014-04-02 01:25:00'",0.07, 0.03, 0.24, 0.22, 0.12, 0.14]);  data.addRow(["'04'", "'2014-04-02 01:55:00'",0.11, 0.04, 0.29, 0.33, 0.13, 0.19]);  data.addRow(["'04'", "'2014-04-02 02:25:00'",0.18, 0.03, 0.31, 0.32, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-02 02:55:00'",0.80, 0.04, 0.77, 0.49, 0.14, 0.14]);  data.addRow(["'04'", "'2014-04-02 03:25:00'",3.75, 0.04, 2.84, 0.29, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-02 03:55:00'",5.30, 0.09, 3.83, 1.56, 0.16, 0.18]);  data.addRow(["'04'", "'2014-04-02 04:25:00'",22.67, 0.51, 16.12, 10.00, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-02 04:55:00'",0.33, 0.04, 0.46, 0.35, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-02 05:25:00'",0.81, 0.05, 0.78, 0.60, 0.14, 0.16]);  data.addRow(["'04'", "'2014-04-02 05:55:00'",0.14, 2.62, 1.24, 2.05, 0.18, 0.18]);  data.addRow(["'04'", "'2014-04-02 06:25:00'",0.26, 1.37, 0.94, 1.25, 0.19, 0.19]);  data.addRow(["'04'", "'2014-04-02 06:55:00'",1.38, 0.91, 1.90, 1.42, 0.36, 0.37]);  data.addRow(["'04'", "'2014-04-02 07:25:00'",5.94, 1.98, 7.53, 5.60, 0.85, 0.86]);  data.addRow(["'04'", "'2014-04-02 07:55:00'",0.97, 2.40, 3.15, 3.31, 1.01, 1.00]);  data.addRow(["'04'", "'2014-04-02 08:25:00'",9.39, 11.74, 14.13, 13.01, 1.38, 1.34]);  data.addRow(["'04'", "'2014-04-02 08:55:00'",7.79, 20.50, 16.88, 19.30, 1.83, 1.74]);  data.addRow(["'04'", "'2014-04-02 09:25:00'",7.03, 39.53, 24.05, 33.17, 1.92, 1.86]);  data.addRow(["'04'", "'2014-04-02 09:55:00'",9.73, 5.21, 12.55, 10.17, 2.05, 1.97]);  data.addRow(["'04'", "'2014-04-02 10:25:00'",25.93, 7.74, 26.73, 17.84, 2.43, 2.32]);  data.addRow(["'04'", "'2014-04-02 10:55:00'",4.91, 12.65, 11.75, 13.71, 2.06, 2.01]);  data.addRow(["'04'", "'2014-04-02 11:25:00'",3.23, 5.45, 8.05, 9.18, 2.12, 2.14]);  data.addRow(["'04'", "'2014-04-02 11:55:00'",21.67, 14.63, 25.14, 21.59, 2.66, 2.62]);  data.addRow(["'04'", "'2014-04-02 12:25:00'",15.91, 30.72, 26.56, 29.63, 2.18, 2.29]);  data.addRow(["'04'", "'2014-04-02 12:55:00'",8.78, 3.47, 11.36, 9.06, 1.75, 1.74]);  data.addRow(["'04'", "'2014-04-02 13:25:00'",8.29, 6.94, 12.56, 11.41, 1.77, 1.67]);  data.addRow(["'04'", "'2014-04-02 13:55:00'",5.39, 5.25, 9.32, 8.71, 2.28, 2.19]);  data.addRow(["'04'", "'2014-04-02 14:25:00'",8.39, 2.17, 8.96, 6.60, 1.59, 1.57]); 
	    var graphtitle="CUH Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    