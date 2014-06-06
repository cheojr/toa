
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input GB ');
        data.addColumn('number', 'Octects Output  GB');
        data.addColumn('number', 'Packets Input  MB ');
        data.addColumn('number', 'Packets Output MB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",0.36, 0.13, 0.33, 0.28, 22.90, 24.00]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",0.43, 0.15, 0.37, 0.29, 14.72, 14.99]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",0.27, 0.09, 0.24, 0.18, 11.57, 11.55]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",0.14, 0.04, 0.12, 0.10, 8.33, 8.03]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.13, 0.05, 0.11, 0.09, 6.67, 6.31]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.11, 0.05, 0.09, 0.09, 5.08, 4.82]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",0.11, 0.04, 0.09, 0.09, 4.53, 4.17]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",0.15, 0.03, 0.12, 0.09, 4.91, 4.90]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",0.19, 0.04, 0.16, 0.13, 12.21, 12.86]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",0.22, 0.10, 0.22, 0.20, 23.79, 25.55]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",0.28, 0.14, 0.29, 0.26, 26.06, 28.00]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",0.23, 0.16, 0.26, 0.26, 27.85, 29.40]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",0.27, 0.17, 0.29, 0.28, 24.44, 25.53]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",0.41, 0.11, 0.35, 0.28, 14.08, 14.41]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",0.53, 0.12, 0.43, 0.31, 11.19, 10.89]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",0.52, 0.07, 0.41, 0.26, 7.54, 7.25]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.35, 0.04, 0.27, 0.16, 6.09, 5.63]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.19, 0.04, 0.16, 0.10, 5.08, 4.56]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.07, 0.02, 0.06, 0.04, 4.70, 4.06]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.08, 0.02, 0.46, 0.03, 4.44, 3.70]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",0.12, 0.03, 0.39, 0.07, 9.88, 9.52]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",0.18, 0.10, 0.19, 0.17, 20.00, 20.60]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",0.23, 0.13, 0.24, 0.21, 23.73, 24.63]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",0.20, 0.11, 0.22, 0.19, 18.62, 19.09]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",0.23, 0.10, 0.23, 0.20, 15.26, 15.54]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",0.33, 0.13, 0.29, 0.22, 9.70, 9.16]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",0.24, 0.10, 0.22, 0.18, 6.25, 5.62]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",0.08, 0.06, 0.09, 0.08, 8.36, 7.89]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.07, 0.02, 0.06, 0.04, 5.34, 4.70]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.04, 0.01, 0.04, 0.03, 4.69, 3.96]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.04, 0.01, 0.04, 0.03, 4.63, 4.05]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.06, 0.01, 0.05, 0.03, 4.28, 3.72]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.04, 0.01, 0.04, 0.03, 4.47, 3.93]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.07, 0.02, 0.06, 0.04, 5.75, 5.37]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.10, 0.02, 0.09, 0.05, 6.93, 6.66]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.14, 0.02, 0.11, 0.07, 7.32, 7.04]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.13, 0.03, 0.11, 0.07, 6.79, 6.54]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.10, 0.04, 0.09, 0.07, 5.73, 5.34]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.07, 0.02, 0.06, 0.04, 5.31, 4.89]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.06, 0.01, 0.05, 0.03, 4.80, 4.32]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.05, 0.01, 0.05, 0.03, 4.52, 3.99]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.06, 0.01, 0.05, 0.03, 4.17, 3.55]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.05, 0.01, 0.04, 0.02, 4.04, 3.38]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.04, 0.01, 0.03, 0.02, 4.16, 3.52]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.05, 0.01, 0.04, 0.02, 3.87, 3.24]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.05, 0.01, 0.43, 0.02, 4.20, 3.46]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.05, 0.01, 0.04, 0.03, 4.84, 4.20]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.07, 0.01, 0.06, 0.04, 5.75, 5.20]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.08, 0.02, 0.07, 0.04, 5.88, 5.49]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.07, 0.04, 0.07, 0.06, 6.34, 5.94]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.09, 0.02, 0.08, 0.05, 6.32, 5.90]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.07, 0.04, 0.07, 0.06, 6.51, 5.71]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.05, 0.03, 0.05, 0.04, 5.10, 4.80]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.08, 0.02, 0.07, 0.04, 4.54, 3.65]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.03, 0.03, 0.04, 0.03, 3.89, 3.22]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.04, 0.03, 0.04, 0.04, 3.86, 3.24]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",0.12, 0.08, 0.42, 0.11, 12.38, 12.20]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",0.27, 0.21, 0.31, 0.30, 27.87, 29.31]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",0.24, 0.20, 0.29, 0.29, 30.52, 32.01]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",0.27, 0.19, 0.30, 0.28, 31.12, 32.63]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",0.23, 0.17, 0.26, 0.25, 28.44, 29.71]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",0.16, 0.11, 0.18, 0.17, 14.50, 14.73]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",0.12, 0.06, 0.12, 0.10, 11.06, 11.00]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",0.09, 0.08, 0.10, 0.10, 8.10, 7.49]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",0.09, 0.05, 0.08, 0.07, 5.70, 5.17]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.12, 0.05, 0.10, 0.07, 4.76, 3.74]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.05, 0.04, 0.05, 0.05, 3.79, 3.05]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",0.05, 0.04, 0.05, 0.05, 3.75, 3.04]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",0.15, 0.24, 0.20, 0.23, 16.03, 16.34]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",0.23, 0.16, 0.25, 0.23, 25.98, 27.11]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",0.19, 0.17, 0.23, 0.25, 27.71, 28.93]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",0.32, 0.22, 0.34, 0.34, 29.84, 31.11]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",0.24, 0.24, 0.30, 0.31, 26.60, 27.80]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",0.30, 0.15, 0.30, 0.25, 16.04, 16.46]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",0.26, 0.08, 0.23, 0.17, 12.31, 11.86]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.10, 0.04, 0.09, 0.08, 7.88, 7.46]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.07, 0.05, 0.07, 0.07, 6.01, 5.44]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",0.07, 0.04, 0.07, 0.05, 4.42, 3.75]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.07, 0.03, 0.06, 0.04, 3.81, 3.05]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.05, 0.03, 0.05, 0.04, 3.94, 3.15]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",0.09, 0.06, 0.09, 0.09, 12.66, 12.27]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",0.24, 0.19, 0.27, 0.27, 28.27, 29.50]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",0.21, 0.16, 0.25, 0.25, 30.44, 31.91]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",0.25, 0.17, 0.28, 0.28, 30.93, 33.25]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",0.21, 0.15, 0.24, 0.25, 27.60, 29.28]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",0.19, 0.14, 0.21, 0.21, 15.95, 16.40]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",0.13, 0.12, 0.14, 0.15, 10.92, 10.85]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",0.08, 0.08, 0.09, 0.10, 7.49, 6.99]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",0.09, 0.04, 0.08, 0.06, 5.87, 5.34]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.05, 0.03, 0.05, 0.04, 4.56, 3.90]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",0.05, 0.04, 0.06, 0.05, 4.40, 3.76]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",0.05, 0.08, 0.07, 0.08, 4.20, 3.52]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",0.12, 0.12, 0.14, 0.14, 12.07, 12.10]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",0.17, 0.18, 0.21, 0.23, 24.44, 25.53]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",0.26, 0.20, 0.29, 0.26, 25.96, 27.22]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",0.23, 0.20, 0.27, 0.27, 29.13, 30.74]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",0.24, 0.29, 0.29, 0.34, 26.52, 27.82]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",0.21, 0.18, 0.22, 0.23, 15.08, 15.40]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",0.11, 0.18, 0.15, 0.18, 10.37, 10.32]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",0.08, 0.07, 0.08, 0.08, 6.83, 6.46]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.06, 0.04, 0.06, 0.05, 4.96, 4.50]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",0.06, 0.10, 0.08, 0.09, 4.77, 4.06]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",0.06, 0.04, 0.06, 0.05, 4.30, 3.66]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",0.05, 0.06, 0.05, 0.06, 4.39, 3.77]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",0.10, 0.09, 0.11, 0.11, 10.54, 10.51]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",0.21, 0.19, 0.24, 0.24, 22.36, 23.19]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",0.26, 0.18, 0.28, 0.26, 23.74, 24.91]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",0.23, 0.15, 0.24, 0.22, 19.42, 20.20]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",0.23, 0.15, 0.24, 0.21, 17.07, 17.72]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",0.10, 0.07, 0.10, 0.09, 9.52, 9.24]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",0.07, 0.05, 0.07, 0.06, 5.79, 5.29]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",0.08, 0.03, 0.07, 0.05, 5.29, 4.88]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.04, 0.03, 0.04, 0.04, 5.08, 4.55]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.04, 0.04, 0.04, 0.04, 5.00, 4.31]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.04, 0.05, 0.05, 0.05, 4.76, 4.05]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.03, 0.04, 0.04, 0.04, 4.35, 3.63]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.05, 0.03, 0.05, 0.04, 4.50, 3.82]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.06, 0.03, 0.06, 0.05, 6.34, 5.85]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.07, 0.05, 0.07, 0.07, 7.10, 6.75]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",0.07, 0.08, 0.08, 0.10, 6.87, 6.50]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",0.09, 0.05, 0.09, 0.07, 7.08, 6.40]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",0.06, 0.05, 0.07, 0.06, 5.87, 5.46]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",0.05, 0.03, 0.05, 0.04, 5.69, 5.30]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",0.07, 0.04, 0.07, 0.05, 5.28, 4.81]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",0.04, 0.03, 0.04, 0.04, 5.02, 4.56]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.04, 0.02, 0.04, 0.03, 4.51, 4.05]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.06, 0.02, 0.05, 0.03, 4.24, 3.63]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.05, 0.04, 0.05, 0.04, 3.93, 3.35]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.04, 0.02, 0.04, 0.03, 4.44, 3.46]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.16, 0.02, 3.52, 0.03, 4.58, 3.47]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",0.06, 0.03, 0.06, 0.04, 4.96, 4.49]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",0.05, 0.03, 0.05, 0.04, 5.54, 5.01]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",0.08, 0.06, 0.09, 0.07, 5.99, 5.63]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",0.06, 0.05, 0.07, 0.06, 6.35, 6.04]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",0.07, 0.02, 0.07, 0.04, 6.51, 6.12]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",0.07, 0.04, 0.08, 0.06, 6.05, 5.70]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.08, 0.03, 0.07, 0.05, 5.82, 5.08]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.06, 0.04, 0.07, 0.06, 4.88, 4.36]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.05, 0.03, 0.05, 0.04, 4.38, 3.68]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.05, 0.04, 0.05, 0.04, 4.36, 3.83]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",0.13, 0.07, 0.13, 0.10, 12.12, 12.28]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",0.27, 0.17, 0.29, 0.26, 29.67, 30.08]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",0.23, 0.38, 0.33, 0.41, 31.26, 32.83]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",0.23, 0.40, 0.35, 0.43, 30.93, 32.70]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",0.24, 0.38, 0.33, 0.40, 26.97, 28.32]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",0.16, 0.32, 0.23, 0.31, 14.99, 15.37]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",0.16, 0.28, 0.20, 0.27, 11.52, 11.58]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",0.12, 0.16, 0.14, 0.16, 8.00, 7.81]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",0.11, 0.08, 0.11, 0.10, 6.23, 5.81]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.13, 0.09, 0.12, 0.11, 5.00, 4.44]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.12, 0.08, 0.10, 0.09, 4.66, 3.97]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",0.09, 0.08, 0.09, 0.09, 4.62, 3.94]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",0.13, 0.15, 0.15, 0.17, 12.88, 12.95]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",0.23, 0.23, 0.27, 0.29, 26.00, 27.10]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",0.24, 0.27, 0.29, 0.32, 26.81, 28.01]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",0.26, 0.24, 0.31, 0.32, 28.79, 30.14]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",0.24, 0.25, 0.28, 0.31, 25.71, 26.80]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",0.18, 0.22, 0.22, 0.24, 15.45, 15.72]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",0.15, 0.27, 0.20, 0.26, 11.07, 11.09]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",0.12, 0.11, 0.13, 0.13, 8.15, 7.90]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",0.09, 0.04, 0.09, 0.07, 6.07, 5.64]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.11, 0.03, 0.09, 0.06, 4.67, 4.08]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.07, 0.02, 0.06, 0.04, 3.97, 3.26]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.08, 0.03, 0.07, 0.05, 4.00, 3.24]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",0.11, 0.06, 0.12, 0.09, 11.64, 11.30]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",0.19, 0.18, 0.23, 0.25, 25.57, 26.58]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",0.24, 0.19, 1.26, 0.27, 29.30, 29.80]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",0.24, 0.22, 0.29, 0.31, 28.42, 29.68]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",0.17, 0.19, 0.23, 0.25, 24.87, 26.00]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",0.15, 0.12, 0.17, 0.16, 13.55, 13.78]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",0.19, 0.06, 0.17, 0.12, 9.79, 9.72]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",0.12, 0.04, 0.11, 0.08, 7.58, 7.21]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.24, 0.03, 0.18, 0.10, 5.09, 4.79]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.21, 0.02, 0.16, 0.08, 4.32, 3.56]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.15, 0.02, 0.11, 0.06, 3.99, 3.30]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",0.11, 0.02, 0.09, 0.05, 3.91, 3.21]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",0.11, 0.05, 0.10, 0.08, 11.45, 11.51]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",0.20, 0.13, 0.22, 0.20, 25.49, 26.98]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",0.22, 0.16, 0.26, 0.24, 26.73, 28.02]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",0.22, 0.17, 0.26, 0.26, 28.58, 29.93]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",0.22, 0.18, 0.26, 0.25, 25.01, 26.16]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",0.20, 0.12, 0.21, 0.18, 14.57, 14.89]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",0.12, 0.08, 0.13, 0.12, 11.29, 11.24]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",0.09, 0.06, 0.10, 0.08, 7.93, 7.61]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",0.11, 0.02, 0.09, 0.05, 5.25, 4.86]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.03, 0.01, 0.02, 0.02, 2.00, 1.77]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.07, 0.02, 0.06, 0.04, 4.21, 3.53]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.07, 0.08, 0.07, 0.07, 4.35, 3.71]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",0.12, 0.05, 0.11, 0.08, 9.95, 9.85]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",0.23, 0.11, 0.22, 0.18, 20.33, 21.20]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",0.20, 0.11, 0.21, 0.19, 22.49, 23.47]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",0.22, 0.11, 0.22, 0.19, 18.62, 19.46]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",0.18, 0.17, 0.21, 0.22, 15.31, 15.85]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",0.12, 0.13, 0.13, 0.14, 8.67, 8.36]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",0.13, 0.05, 0.11, 0.08, 5.81, 5.44]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.09, 0.09, 0.09, 0.09, 5.01, 4.57]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.09, 0.11, 0.09, 0.10, 4.57, 4.09]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.04, 0.04, 0.04, 0.05, 4.08, 3.43]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.07, 0.05, 0.06, 0.05, 3.63, 2.92]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.08, 0.05, 0.07, 0.06, 3.54, 2.83]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.06, 0.01, 0.05, 0.03, 3.89, 2.99]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.08, 0.01, 0.07, 0.04, 5.19, 4.00]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.10, 0.02, 0.08, 0.05, 5.25, 4.66]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.09, 0.03, 0.08, 0.06, 5.71, 5.17]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.10, 0.03, 0.09, 0.06, 6.00, 5.53]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.11, 0.05, 0.10, 0.08, 6.07, 5.60]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.14, 0.03, 0.12, 0.08, 5.42, 4.75]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.13, 0.03, 0.11, 0.07, 4.85, 4.17]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.11, 0.02, 0.09, 0.06, 4.32, 3.68]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.08, 0.02, 0.07, 0.04, 3.78, 3.12]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.09, 0.01, 0.07, 0.04, 3.64, 2.96]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.09, 0.01, 0.07, 0.04, 3.38, 2.71]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.07, 0.01, 0.06, 0.03, 3.44, 2.73]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.07, 0.02, 0.06, 0.04, 4.39, 3.28]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.10, 0.02, 0.08, 0.04, 4.48, 3.93]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",0.12, 0.03, 0.10, 0.06, 5.14, 4.64]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.11, 0.05, 0.11, 0.07, 5.76, 5.36]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",0.13, 0.04, 0.12, 0.07, 6.12, 5.76]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.10, 0.03, 0.09, 0.06, 5.93, 5.56]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.11, 0.02, 0.09, 0.06, 9.64, 8.40]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.11, 0.02, 0.09, 0.05, 5.32, 4.90]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.08, 0.02, 0.06, 0.04, 4.37, 3.77]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.09, 0.02, 0.07, 0.04, 3.82, 3.13]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.10, 0.02, 0.08, 0.05, 3.88, 3.51]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",0.14, 0.09, 0.15, 0.13, 11.89, 12.25]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",0.25, 0.17, 0.27, 0.26, 27.56, 29.00]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",0.24, 0.18, 0.28, 0.27, 30.78, 32.58]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",0.27, 0.19, 0.30, 0.28, 32.81, 33.80]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",0.24, 0.21, 0.29, 0.30, 32.40, 32.11]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",0.16, 0.12, 0.18, 0.17, 15.11, 15.46]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",0.15, 0.06, 0.14, 0.11, 11.01, 11.16]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.12, 0.03, 0.10, 0.07, 7.82, 7.64]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.12, 0.03, 0.11, 0.07, 5.72, 5.39]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.17, 0.02, 0.13, 0.07, 4.61, 4.07]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.09, 0.02, 0.07, 0.04, 5.10, 4.14]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.07, 0.04, 0.06, 0.05, 4.76, 4.22]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",0.13, 0.06, 0.13, 0.10, 12.01, 12.07]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",0.27, 0.15, 0.27, 0.24, 25.81, 27.00]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",0.43, 0.18, 0.40, 0.30, 27.53, 28.83]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",0.23, 0.15, 0.25, 0.23, 29.37, 30.67]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",0.20, 0.21, 0.25, 0.27, 26.08, 27.26]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",0.24, 0.17, 0.27, 0.25, 16.45, 16.79]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",0.20, 0.09, 0.19, 0.15, 11.37, 11.36]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",0.13, 0.09, 0.13, 0.12, 8.44, 8.13]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.13, 0.05, 0.12, 0.09, 6.61, 6.05]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.14, 0.05, 0.11, 0.08, 5.08, 4.40]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.13, 0.05, 0.11, 0.08, 4.67, 3.89]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.12, 0.04, 0.10, 0.07, 4.65, 3.79]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",0.16, 0.09, 0.15, 0.13, 12.20, 12.14]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",0.28, 0.15, 0.95, 0.24, 27.13, 28.26]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",0.26, 0.19, 0.29, 0.28, 29.94, 31.29]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",0.33, 0.22, 0.34, 0.33, 30.48, 32.37]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",0.29, 0.18, 0.31, 0.29, 27.72, 29.36]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",0.24, 0.16, 0.25, 0.23, 15.08, 15.42]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",0.20, 0.10, 0.18, 0.16, 10.81, 10.75]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",0.13, 0.04, 0.12, 0.08, 8.29, 8.00]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.13, 0.02, 0.11, 0.06, 6.36, 5.90]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.10, 0.08, 0.10, 0.10, 5.45, 4.57]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.13, 0.02, 0.11, 0.07, 12.06, 10.31]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.10, 0.02, 0.08, 0.05, 4.75, 4.06]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",0.18, 0.06, 0.16, 0.11, 11.09, 10.96]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",0.23, 0.18, 0.25, 0.25, 22.75, 23.72]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",0.28, 0.16, 0.29, 0.26, 23.92, 24.88]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",0.24, 0.18, 0.27, 0.25, 25.61, 26.78]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",0.20, 0.16, 0.23, 0.22, 22.41, 23.09]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",0.20, 0.14, 0.21, 0.21, 13.89, 14.13]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",0.18, 0.13, 0.18, 0.16, 11.99, 12.56]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",0.14, 0.06, 0.12, 0.10, 10.14, 10.97]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.11, 0.04, 0.10, 0.07, 7.04, 7.26]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",0.11, 0.04, 0.09, 0.07, 5.17, 4.94]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.13, 0.03, 0.10, 0.06, 5.12, 4.71]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",0.12, 0.02, 0.10, 0.06, 5.68, 5.54]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",0.16, 0.09, 0.15, 0.15, 13.81, 17.63]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",0.24, 0.16, 0.25, 0.24, 23.91, 29.08]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",0.25, 0.14, 0.26, 0.23, 22.85, 23.73]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",0.22, 0.12, 0.23, 0.20, 20.50, 21.26]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",0.20, 0.07, 0.19, 0.16, 16.16, 16.67]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",0.18, 0.04, 0.15, 0.12, 8.89, 8.59]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",0.18, 0.04, 0.14, 0.09, 5.45, 4.87]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",0.15, 0.02, 0.12, 0.07, 4.38, 3.71]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",0.14, 0.03, 0.11, 0.07, 3.96, 3.31]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",0.14, 0.01, 0.10, 0.05, 3.74, 2.70]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.11, 0.02, 0.09, 0.05, 3.44, 2.49]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.08, 0.02, 0.07, 0.04, 3.14, 2.26]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.11, 0.03, 0.09, 0.06, 3.64, 2.78]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",0.14, 0.06, 0.12, 0.08, 5.20, 4.47]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",0.11, 0.05, 0.10, 0.07, 6.63, 6.09]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",0.15, 0.06, 0.13, 0.10, 6.95, 6.50]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",0.17, 0.02, 0.13, 0.07, 7.37, 6.96]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",0.10, 0.03, 0.09, 0.06, 6.43, 5.94]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",0.13, 0.02, 0.10, 0.07, 5.69, 5.13]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",0.12, 0.03, 0.10, 0.07, 4.68, 4.25]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",0.23, 0.14, 0.24, 0.22, 22.89, 22.87]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",0.28, 0.18, 0.30, 0.28, 29.29, 29.73]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",0.22, 0.12, 0.21, 0.18, 16.45, 16.65]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",0.17, 0.08, 0.16, 0.14, 12.20, 11.96]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",0.14, 0.05, 0.13, 0.09, 9.62, 9.02]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",0.11, 0.06, 0.10, 0.08, 7.59, 6.86]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.07, 0.02, 0.07, 0.04, 6.01, 4.77]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",0.09, 0.03, 0.08, 0.05, 4.85, 3.96]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.11, 0.02, 0.09, 0.05, 4.94, 3.90]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",0.16, 0.05, 0.15, 0.11, 12.70, 12.44]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",0.33, 0.13, 0.32, 0.25, 27.08, 28.10]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",0.25, 0.15, 0.27, 0.26, 29.72, 30.56]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",0.26, 0.17, 0.28, 0.28, 27.52, 28.38]); 
	    var graphtitle="FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    