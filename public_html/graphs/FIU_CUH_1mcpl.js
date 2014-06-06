
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",0.00, 9.34, 0.00, 15.09, 0.00, 1.22]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",0.00, 6.80, 0.00, 9.97, 0.00, 1.38]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",0.00, 12.83, 0.00, 12.74, 0.00, 1.03]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",0.00, 1.01, 0.00, 1.48, 0.00, 0.25]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.00, 0.34, 0.00, 0.95, 0.00, 0.15]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.00, 0.65, 0.00, 1.46, 0.00, 0.12]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",0.00, 3.76, 0.00, 3.63, 0.00, 0.13]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",0.00, 1.58, 0.00, 1.45, 0.00, 0.12]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",0.00, 2.14, 0.00, 3.44, 0.00, 0.70]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",0.00, 11.27, 0.00, 13.12, 0.00, 1.56]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",0.00, 12.08, 0.00, 13.34, 0.00, 1.52]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",0.00, 14.73, 0.00, 15.02, 0.00, 1.50]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",0.00, 16.16, 0.00, 18.43, 0.00, 1.14]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",0.00, 5.08, 0.00, 6.81, 0.00, 0.82]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",0.00, 41.45, 0.00, 30.31, 0.00, 0.39]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",0.00, 25.84, 0.00, 18.38, 0.00, 0.21]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.00, 0.23, 0.00, 0.24, 0.00, 0.07]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.00, 0.11, 0.00, 0.15, 0.00, 0.06]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.00, 0.06, 0.00, 0.11, 0.00, 0.06]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.00, 0.18, 0.00, 0.21, 0.00, 0.08]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",0.00, 1.28, 0.00, 4.29, 0.00, 0.56]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",0.00, 2.70, 0.00, 5.59, 0.00, 1.37]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",0.00, 3.89, 0.00, 6.77, 0.00, 1.80]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",0.00, 3.48, 0.00, 5.61, 0.00, 0.75]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",0.00, 1.35, 0.00, 2.83, 0.00, 0.68]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",0.00, 41.64, 0.00, 30.03, 0.00, 0.34]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",0.00, 44.18, 0.00, 31.09, 0.00, 0.16]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",0.00, 14.05, 0.00, 10.95, 0.00, 0.53]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.00, 0.21, 0.00, 0.28, 0.00, 0.10]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.00, 0.25, 0.00, 0.27, 0.00, 0.08]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.00, 0.04, 0.00, 0.12, 0.00, 0.09]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.00, 0.04, 0.00, 0.12, 0.00, 0.09]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.00, 0.07, 0.00, 0.16, 0.00, 0.10]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.00, 0.36, 0.00, 0.89, 0.00, 0.28]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.00, 0.24, 0.00, 0.74, 0.00, 0.30]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.00, 0.24, 0.00, 1.01, 0.00, 0.58]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.00, 0.36, 0.00, 1.12, 0.00, 0.51]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.00, 0.14, 0.00, 0.65, 0.00, 0.27]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.00, 0.19, 0.00, 0.32, 0.00, 0.14]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.00, 0.23, 0.00, 0.27, 0.00, 0.09]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.00, 0.16, 0.00, 0.27, 0.00, 0.10]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.00, 0.02, 0.00, 0.08, 0.00, 0.06]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.00, 0.02, 0.00, 0.09, 0.00, 0.07]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.00, 0.05, 0.00, 0.11, 0.00, 0.06]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.00, 0.07, 0.00, 0.15, 0.00, 0.08]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.00, 0.15, 0.00, 0.32, 0.00, 0.11]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.00, 0.13, 0.00, 0.19, 0.00, 0.07]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.00, 0.22, 0.00, 0.63, 0.00, 0.43]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.00, 0.22, 0.00, 0.45, 0.00, 0.13]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.00, 0.11, 0.00, 0.43, 0.00, 0.13]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.00, 0.14, 0.00, 0.31, 0.00, 0.11]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.00, 0.21, 0.00, 0.29, 0.00, 0.08]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.00, 0.16, 0.00, 0.19, 0.00, 0.08]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.00, 0.03, 0.00, 0.12, 0.00, 0.08]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.00, 0.13, 0.00, 0.17, 0.00, 0.08]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.00, 0.15, 0.00, 0.25, 0.00, 0.09]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",0.00, 12.01, 0.00, 12.41, 0.00, 0.84]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",0.00, 33.89, 0.00, 30.94, 0.00, 2.42]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",0.00, 29.34, 0.00, 26.48, 0.00, 2.81]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",0.00, 21.39, 0.00, 20.29, 0.00, 2.41]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",0.00, 14.34, 0.00, 14.63, 0.00, 1.78]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",0.00, 4.35, 0.00, 7.26, 0.00, 1.14]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",0.00, 3.35, 0.00, 4.69, 0.00, 1.13]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",0.00, 3.06, 0.00, 2.70, 0.00, 0.30]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",0.00, 3.23, 0.00, 2.48, 0.00, 0.16]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.00, 0.34, 0.00, 0.38, 0.00, 0.13]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.00, 0.14, 0.00, 0.23, 0.00, 0.13]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",0.00, 1.86, 0.00, 1.46, 0.00, 0.14]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",0.00, 11.21, 0.00, 9.89, 0.00, 1.04]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",0.00, 5.92, 0.00, 9.35, 0.00, 1.77]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",0.00, 15.23, 0.00, 15.80, 0.00, 2.02]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",0.00, 7.55, 0.00, 13.81, 0.00, 2.23]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",0.00, 33.64, 0.00, 31.53, 0.00, 2.30]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",0.00, 8.87, 0.00, 9.70, 0.00, 1.49]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",0.00, 13.30, 0.00, 11.63, 0.00, 1.27]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.00, 0.40, 0.00, 1.09, 0.00, 0.27]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.00, 0.30, 0.00, 0.37, 0.00, 0.14]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",0.00, 1.60, 0.00, 1.33, 0.00, 0.09]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.00, 0.13, 0.00, 0.20, 0.00, 0.09]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.00, 0.15, 0.00, 0.25, 0.00, 0.09]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",0.00, 4.29, 0.00, 5.28, 0.00, 0.96]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",0.00, 21.47, 0.00, 23.58, 0.00, 2.85]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",0.00, 23.55, 0.00, 23.00, 0.00, 2.69]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",0.00, 17.14, 0.00, 22.01, 0.00, 2.52]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",0.00, 10.14, 0.00, 13.83, 0.00, 2.26]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",0.00, 9.81, 0.00, 9.85, 0.00, 1.32]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",0.00, 16.26, 0.00, 14.54, 0.00, 0.90]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",0.00, 3.70, 0.00, 3.82, 0.00, 0.34]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",0.00, 1.01, 0.00, 0.90, 0.00, 0.13]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.00, 0.62, 0.00, 0.58, 0.00, 0.10]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",0.00, 6.52, 0.00, 4.94, 0.00, 0.11]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",0.00, 18.02, 0.00, 13.66, 0.00, 0.12]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",0.00, 37.36, 0.00, 31.10, 0.00, 1.01]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",0.00, 48.51, 0.00, 43.48, 0.00, 1.93]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",0.00, 43.22, 0.00, 39.99, 0.00, 2.36]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",0.00, 18.95, 0.00, 20.91, 0.00, 2.76]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",0.00, 28.10, 0.00, 26.43, 0.00, 2.73]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",0.00, 7.92, 0.00, 8.42, 0.00, 0.88]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",0.00, 44.25, 0.00, 32.32, 0.00, 0.67]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",0.00, 14.90, 0.00, 11.07, 0.00, 0.36]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.00, 0.27, 0.00, 0.63, 0.00, 0.16]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",0.00, 21.61, 0.00, 15.23, 0.00, 0.12]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",0.00, 2.03, 0.00, 1.61, 0.00, 0.16]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",0.00, 0.98, 0.00, 0.91, 0.00, 0.16]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",0.00, 10.70, 0.00, 9.20, 0.00, 0.66]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",0.00, 14.59, 0.00, 15.23, 0.00, 1.60]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",0.00, 10.32, 0.00, 14.01, 0.00, 1.65]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",0.00, 10.52, 0.00, 13.35, 0.00, 1.36]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",0.00, 10.83, 0.00, 13.17, 0.00, 1.15]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",0.00, 1.22, 0.00, 1.83, 0.00, 0.46]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",0.00, 5.33, 0.00, 4.26, 0.00, 0.32]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",0.00, 1.54, 0.00, 1.33, 0.00, 0.12]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.00, 0.05, 0.00, 0.16, 0.00, 0.10]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.00, 0.09, 0.00, 0.35, 0.00, 0.10]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.00, 0.08, 0.00, 0.17, 0.00, 0.10]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.00, 0.62, 0.00, 0.55, 0.00, 0.09]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.00, 0.17, 0.00, 0.28, 0.00, 0.13]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.00, 0.08, 0.00, 0.26, 0.00, 0.14]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.00, 0.51, 0.00, 0.62, 0.00, 0.17]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",0.00, 0.50, 0.00, 0.66, 0.00, 0.15]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",0.00, 0.25, 0.00, 1.21, 0.00, 0.12]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",0.00, 0.07, 0.00, 0.30, 0.00, 0.10]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",0.00, 0.04, 0.00, 0.21, 0.00, 0.10]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",0.00, 2.64, 0.00, 2.04, 0.00, 0.10]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",0.00, 1.50, 0.00, 1.37, 0.00, 0.11]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.00, 0.14, 0.00, 0.19, 0.00, 0.08]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.00, 0.10, 0.00, 0.16, 0.00, 0.08]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.00, 0.29, 0.00, 0.30, 0.00, 0.08]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.00, 0.37, 0.00, 0.39, 0.00, 0.10]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.00, 0.13, 0.00, 0.25, 0.00, 0.11]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",0.00, 0.63, 0.00, 0.56, 0.00, 0.09]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",0.00, 0.34, 0.00, 0.41, 0.00, 0.10]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",0.00, 0.05, 0.00, 0.23, 0.00, 0.10]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",0.00, 6.33, 0.00, 4.61, 0.00, 0.11]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",0.00, 0.33, 0.00, 0.37, 0.00, 0.11]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",0.00, 0.90, 0.00, 0.86, 0.00, 0.14]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.00, 0.09, 0.00, 0.17, 0.00, 0.09]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.00, 0.08, 0.00, 0.17, 0.00, 0.09]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.00, 0.17, 0.00, 0.23, 0.00, 0.10]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.00, 0.41, 0.00, 0.58, 0.00, 0.10]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",0.00, 2.85, 0.00, 5.66, 0.00, 0.78]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",0.00, 8.10, 0.00, 12.51, 0.00, 2.43]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",0.00, 15.39, 0.00, 19.13, 0.00, 2.52]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",0.00, 16.20, 0.00, 18.68, 0.00, 1.99]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",0.00, 25.97, 0.00, 31.47, 0.00, 1.81]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",0.00, 31.07, 0.00, 31.56, 0.00, 1.29]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",0.00, 21.31, 0.00, 18.33, 0.00, 0.73]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",0.00, 0.71, 0.00, 1.14, 0.00, 0.36]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",0.00, 1.11, 0.00, 1.01, 0.00, 0.18]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.00, 0.21, 0.00, 0.34, 0.00, 0.15]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.00, 0.64, 0.00, 0.65, 0.00, 0.19]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",0.00, 1.73, 0.00, 1.44, 0.00, 0.20]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",0.00, 3.59, 0.00, 8.83, 0.00, 1.13]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",0.00, 42.71, 0.00, 35.74, 0.00, 1.78]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",0.00, 49.16, 0.00, 41.58, 0.00, 1.57]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",0.00, 12.07, 0.00, 15.59, 0.00, 2.09]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",0.00, 17.15, 0.00, 18.68, 0.00, 1.74]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",0.00, 11.93, 0.00, 13.95, 0.00, 0.98]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",0.00, 27.32, 0.00, 22.60, 0.00, 0.69]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",0.00, 13.68, 0.00, 9.99, 0.00, 0.25]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",0.00, 2.55, 0.00, 1.94, 0.00, 0.15]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.00, 0.04, 0.00, 0.16, 0.00, 0.12]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.00, 0.05, 0.00, 0.16, 0.00, 0.12]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.00, 0.16, 0.00, 0.27, 0.00, 0.12]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",0.00, 2.02, 0.00, 3.48, 0.00, 0.70]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",0.00, 9.41, 0.00, 12.38, 0.00, 1.79]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",0.00, 8.95, 0.00, 12.30, 0.00, 2.24]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",0.00, 4.00, 0.00, 8.28, 0.00, 1.84]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",0.00, 13.41, 0.00, 14.27, 0.00, 1.21]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",0.00, 7.67, 0.00, 7.77, 0.00, 0.92]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",0.00, 1.06, 0.00, 1.48, 0.00, 0.37]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",0.00, 0.27, 0.00, 0.45, 0.00, 0.19]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.00, 0.14, 0.00, 0.24, 0.00, 0.11]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.00, 0.86, 0.00, 0.75, 0.00, 0.12]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.00, 0.81, 0.00, 0.74, 0.00, 0.15]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",0.00, 1.88, 0.00, 1.53, 0.00, 0.14]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",0.00, 1.43, 0.00, 2.92, 0.00, 0.81]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",0.00, 7.58, 0.00, 13.25, 0.00, 2.20]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",0.00, 8.32, 0.00, 10.89, 0.00, 1.92]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",0.00, 4.19, 0.00, 13.40, 0.00, 2.26]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",0.00, 5.57, 0.00, 9.07, 0.00, 1.86]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",0.00, 8.90, 0.00, 8.83, 0.00, 0.98]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",0.00, 15.13, 0.00, 13.40, 0.00, 1.20]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",0.00, 9.99, 0.00, 7.75, 0.00, 0.53]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",0.00, 3.07, 0.00, 2.41, 0.00, 0.13]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.00, 0.34, 0.00, 0.30, 0.00, 0.06]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.00, 0.60, 0.00, 0.57, 0.00, 0.13]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.00, 0.26, 0.00, 0.33, 0.00, 0.13]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",0.00, 2.08, 0.00, 3.64, 0.00, 0.58]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",0.00, 16.58, 0.00, 16.35, 0.00, 1.59]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",0.00, 20.08, 0.00, 19.74, 0.00, 1.98]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",0.00, 11.26, 0.00, 13.58, 0.00, 1.55]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",0.00, 11.40, 0.00, 11.00, 0.00, 1.05]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",0.00, 4.58, 0.00, 5.34, 0.00, 0.43]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",0.00, 3.17, 0.00, 3.29, 0.00, 0.18]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.00, 0.06, 0.00, 0.16, 0.00, 0.09]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.00, 0.01, 0.00, 0.09, 0.00, 0.07]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.00, 0.02, 0.00, 0.11, 0.00, 0.09]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.00, 0.02, 0.00, 0.08, 0.00, 0.06]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.00, 0.11, 0.00, 0.15, 0.00, 0.07]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.00, 0.05, 0.00, 0.17, 0.00, 0.10]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.00, 0.09, 0.00, 0.35, 0.00, 0.14]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.00, 0.19, 0.00, 0.71, 0.00, 0.15]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.00, 0.16, 0.00, 0.77, 0.00, 0.13]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.00, 0.23, 0.00, 0.87, 0.00, 0.12]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.00, 0.11, 0.00, 0.73, 0.00, 0.12]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.00, 0.05, 0.00, 0.16, 0.00, 0.10]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.00, 0.02, 0.00, 0.11, 0.00, 0.09]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.00, 0.02, 0.00, 0.13, 0.00, 0.10]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.00, 0.04, 0.00, 0.14, 0.00, 0.11]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.00, 0.03, 0.00, 0.13, 0.00, 0.10]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.00, 0.02, 0.00, 0.12, 0.00, 0.10]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.00, 0.11, 0.00, 0.16, 0.00, 0.08]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.00, 0.02, 0.00, 0.08, 0.00, 0.05]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.00, 0.07, 0.00, 0.14, 0.00, 0.07]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",0.00, 8.81, 0.00, 6.44, 0.00, 0.18]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.00, 0.16, 0.00, 0.43, 0.00, 0.21]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",0.00, 0.59, 0.00, 0.66, 0.00, 0.16]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.00, 0.08, 0.00, 0.12, 0.00, 0.06]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.00, 0.65, 0.00, 1.54, 0.00, 0.70]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.00, 0.21, 0.00, 0.27, 0.00, 0.10]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.00, 0.10, 0.00, 0.11, 0.00, 0.05]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.00, 0.14, 0.00, 0.24, 0.00, 0.07]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.00, 0.11, 0.00, 0.13, 0.00, 0.05]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",0.00, 3.53, 0.00, 4.88, 0.00, 0.83]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",0.00, 19.31, 0.00, 21.58, 0.00, 3.25]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",0.00, 6.99, 0.00, 12.12, 0.00, 3.20]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",3.70, 11.73, 7.80, 14.23, 1.36, 2.81]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",21.59, 22.74, 25.95, 26.99, 1.91, 2.02]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",4.77, 7.11, 7.55, 8.48, 1.24, 1.25]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",1.03, 0.49, 1.51, 1.53, 0.56, 0.56]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.24, 0.37, 0.64, 0.72, 0.31, 0.32]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.04, 0.10, 0.18, 0.22, 0.13, 0.12]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.02, 0.06, 0.13, 0.13, 0.10, 0.08]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.04, 0.12, 0.27, 0.26, 0.22, 0.19]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.05, 0.13, 0.29, 0.33, 0.23, 0.25]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",3.84, 3.76, 5.17, 5.39, 0.92, 0.95]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",17.04, 14.84, 19.34, 19.33, 1.76, 1.88]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",6.63, 11.14, 11.84, 13.75, 1.92, 2.04]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",7.46, 8.59, 12.19, 13.13, 2.95, 3.07]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",5.61, 6.71, 9.14, 10.31, 1.96, 2.09]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",2.53, 3.62, 5.52, 6.18, 1.85, 1.87]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",0.59, 0.77, 1.58, 1.80, 0.82, 0.84]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",0.57, 2.47, 2.31, 2.29, 0.30, 0.30]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.16, 0.61, 0.47, 0.62, 0.15, 0.14]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.04, 0.04, 0.13, 0.13, 0.09, 0.08]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.04, 0.09, 0.13, 0.16, 0.09, 0.09]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.06, 0.14, 0.20, 0.25, 0.13, 0.13]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",4.05, 9.61, 7.46, 9.50, 0.84, 0.91]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",9.22, 9.14, 12.56, 13.62, 2.43, 2.58]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",5.43, 10.57, 11.95, 13.69, 2.84, 2.97]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",5.59, 39.75, 16.41, 33.94, 2.46, 2.57]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",4.97, 11.23, 9.14, 12.64, 1.57, 1.69]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",2.21, 11.02, 5.93, 10.36, 1.11, 1.15]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",6.22, 3.97, 6.75, 8.02, 0.54, 0.55]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",0.40, 2.75, 1.93, 2.41, 0.27, 0.26]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.04, 0.50, 0.37, 0.51, 0.13, 0.13]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.04, 0.07, 0.16, 0.17, 0.12, 0.10]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.02, 0.07, 0.14, 0.16, 0.10, 0.10]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.04, 0.32, 0.29, 0.38, 0.14, 0.14]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",2.37, 8.20, 5.70, 7.96, 0.93, 0.99]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",10.08, 17.05, 16.38, 19.95, 1.85, 1.97]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",4.83, 8.62, 9.21, 10.94, 1.62, 1.71]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",9.10, 24.48, 17.48, 24.76, 2.43, 2.53]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",6.01, 10.20, 10.11, 12.54, 1.53, 1.63]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",2.68, 14.29, 7.89, 12.32, 0.75, 0.81]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",1.84, 3.07, 3.22, 4.25, 1.05, 1.13]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",1.44, 0.47, 2.32, 2.19, 1.09, 1.19]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.07, 0.74, 0.46, 0.82, 0.23, 0.27]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",0.05, 2.00, 0.69, 1.62, 0.11, 0.13]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.02, 0.31, 0.19, 0.39, 0.12, 0.14]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",0.13, 1.41, 0.71, 1.29, 0.13, 0.18]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",2.82, 8.58, 4.71, 18.86, 0.70, 1.20]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",4.88, 14.33, 10.58, 16.27, 1.98, 2.52]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",9.27, 8.92, 13.01, 14.60, 2.62, 2.78]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",10.08, 7.47, 12.67, 12.73, 2.79, 3.02]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",3.96, 7.16, 8.08, 15.35, 2.28, 2.62]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",13.10, 7.79, 12.96, 25.27, 1.08, 1.24]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",0.29, 3.64, 1.85, 2.87, 0.20, 0.20]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",0.22, 2.72, 1.24, 2.16, 0.12, 0.12]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",0.04, 1.44, 0.68, 1.09, 0.07, 0.07]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",1.40, 0.50, 1.20, 0.73, 0.08, 0.07]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.02, 0.26, 0.20, 0.29, 0.09, 0.08]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.01, 0.11, 0.14, 0.17, 0.08, 0.08]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.02, 0.92, 0.16, 0.79, 0.11, 0.12]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",0.52, 0.96, 1.02, 1.18, 0.25, 0.26]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",0.69, 3.48, 2.39, 3.58, 0.60, 0.63]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",0.63, 0.18, 0.86, 0.82, 0.37, 0.40]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",0.71, 0.47, 0.93, 1.11, 0.24, 0.28]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",4.82, 0.32, 3.76, 2.36, 0.27, 0.30]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",1.45, 1.62, 1.84, 2.03, 0.16, 0.19]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",0.07, 0.09, 0.14, 0.19, 0.08, 0.09]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",3.76, 8.19, 8.23, 9.71, 1.29, 1.38]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",6.22, 10.95, 11.09, 13.16, 1.86, 2.00]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",4.24, 3.23, 5.91, 6.06, 1.48, 1.53]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",2.47, 3.84, 3.93, 4.78, 0.85, 0.90]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",0.67, 1.39, 1.35, 1.71, 0.34, 0.36]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",0.21, 1.01, 0.62, 0.97, 0.14, 0.14]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.03, 0.18, 0.20, 0.25, 0.11, 0.10]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",0.16, 8.09, 2.91, 5.79, 0.11, 0.12]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",1.01, 0.34, 0.95, 0.75, 0.13, 0.14]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",4.19, 4.36, 5.57, 6.54, 0.82, 0.88]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",17.42, 12.42, 18.67, 19.08, 1.82, 2.00]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",14.64, 11.30, 16.66, 16.82, 2.11, 2.22]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",4.26, 7.61, 8.29, 10.08, 1.69, 1.82]); 
	    var graphtitle="FIU to CUH Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    