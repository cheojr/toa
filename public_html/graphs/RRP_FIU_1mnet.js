
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'01 17 14:00:00'", 20.09, 98.96]);  data.addRow(["'01 17 16:00:00'", 19.31, 132.05]);  data.addRow(["'01 17 18:00:00'", 13.18, 33.30]);  data.addRow(["'01 17 20:00:00'", 6.57, 69.61]);  data.addRow(["'01 17 22:00:00'", 1.46, 59.59]);  data.addRow(["'01 18 00:00:00'", 1.71, 62.35]);  data.addRow(["'01 18 02:00:00'", 0.26, 1.28]);  data.addRow(["'01 18 04:00:00'", 0.87, 6.17]);  data.addRow(["'01 18 06:00:00'", 0.28, 0.80]);  data.addRow(["'01 18 08:00:00'", 0.13, 0.23]);  data.addRow(["'01 18 10:00:00'", 2.32, 4.26]);  data.addRow(["'01 18 12:00:00'", 1.17, 6.91]);  data.addRow(["'01 18 14:00:00'", 5.68, 6.93]);  data.addRow(["'01 18 16:00:00'", 8.40, 5.34]);  data.addRow(["'01 18 18:00:00'", 1.28, 6.10]);  data.addRow(["'01 18 20:00:00'", 0.62, 6.34]);  data.addRow(["'01 18 22:00:00'", 0.75, 3.40]);  data.addRow(["'01 19 00:00:00'", 4.31, 3.67]);  data.addRow(["'01 19 02:00:00'", 2.35, 3.18]);  data.addRow(["'01 19 04:00:00'", 0.33, 2.05]);  data.addRow(["'01 19 06:00:00'", 0.31, 1.20]);  data.addRow(["'01 19 08:00:00'", 0.17, 0.33]);  data.addRow(["'01 19 10:00:00'", 1.64, 1.14]);  data.addRow(["'01 19 12:00:00'", 0.94, 6.24]);  data.addRow(["'01 19 14:00:00'", 1.24, 5.55]);  data.addRow(["'01 19 16:00:00'", 4.10, 9.92]);  data.addRow(["'01 19 18:00:00'", 2.68, 3.59]);  data.addRow(["'01 19 20:00:00'", 0.83, 7.18]);  data.addRow(["'01 19 22:00:00'", 1.08, 3.10]);  data.addRow(["'01 20 00:00:00'", 4.39, 4.20]);  data.addRow(["'01 20 02:00:00'", 2.06, 3.63]);  data.addRow(["'01 20 04:00:00'", 1.87, 8.07]);  data.addRow(["'01 20 06:00:00'", 2.21, 0.74]);  data.addRow(["'01 20 08:00:00'", 1.75, 1.38]);  data.addRow(["'01 20 10:00:00'", 2.63, 3.65]);  data.addRow(["'01 20 12:00:00'", 13.53, 5.82]);  data.addRow(["'01 20 14:00:00'", 10.06, 7.01]);  data.addRow(["'01 20 16:00:00'", 6.29, 10.12]);  data.addRow(["'01 20 18:00:00'", 21.58, 13.64]);  data.addRow(["'01 20 20:00:00'", 6.40, 14.25]);  data.addRow(["'01 20 22:00:00'", 9.31, 4.48]);  data.addRow(["'01 21 00:00:00'", 7.66, 14.56]);  data.addRow(["'01 21 02:00:00'", 2.35, 2.28]);  data.addRow(["'01 21 04:00:00'", 0.81, 0.93]);  data.addRow(["'01 21 06:00:00'", 0.69, 3.21]);  data.addRow(["'01 21 08:00:00'", 11.44, 13.63]);  data.addRow(["'01 21 10:00:00'", 17.51, 64.31]);  data.addRow(["'01 21 12:00:00'", 51.47, 83.15]);  data.addRow(["'01 21 14:00:00'", 35.04, 115.87]);  data.addRow(["'01 21 16:00:00'", 48.40, 64.55]);  data.addRow(["'01 21 18:00:00'", 43.32, 74.05]);  data.addRow(["'01 21 20:00:00'", 35.73, 64.46]);  data.addRow(["'01 21 22:00:00'", 15.23, 55.21]);  data.addRow(["'01 22 00:00:00'", 11.53, 23.71]);  data.addRow(["'01 22 02:00:00'", 1.34, 37.96]);  data.addRow(["'01 22 04:00:00'", 0.98, 14.19]);  data.addRow(["'01 22 06:00:00'", 1.48, 19.31]);  data.addRow(["'01 22 08:00:00'", 6.41, 14.28]);  data.addRow(["'01 22 10:00:00'", 13.57, 38.87]);  data.addRow(["'01 22 12:00:00'", 40.70, 49.06]);  data.addRow(["'01 22 14:00:00'", 18.66, 52.38]);  data.addRow(["'01 22 16:00:00'", 41.37, 44.20]);  data.addRow(["'01 22 18:00:00'", 42.27, 35.98]);  data.addRow(["'01 22 20:00:00'", 21.10, 62.41]);  data.addRow(["'01 22 22:00:00'", 6.26, 30.77]);  data.addRow(["'01 23 00:00:00'", 2.49, 29.99]);  data.addRow(["'01 23 02:00:00'", 2.96, 33.19]);  data.addRow(["'01 23 04:00:00'", 2.11, 3.16]);  data.addRow(["'01 23 06:00:00'", 2.33, 0.42]);  data.addRow(["'01 23 08:00:00'", 4.31, 12.02]);  data.addRow(["'01 23 10:00:00'", 32.37, 40.21]);  data.addRow(["'01 23 12:00:00'", 30.75, 64.72]);  data.addRow(["'01 23 14:00:00'", 32.45, 73.32]);  data.addRow(["'01 23 16:00:00'", 19.14, 42.21]);  data.addRow(["'01 23 18:00:00'", 16.96, 48.60]);  data.addRow(["'01 23 20:00:00'", 33.17, 89.78]);  data.addRow(["'01 23 22:00:00'", 15.39, 17.44]);  data.addRow(["'01 24 00:00:00'", 8.20, 14.27]);  data.addRow(["'01 24 02:00:00'", 1.53, 1.94]);  data.addRow(["'01 24 04:00:00'", 0.76, 0.76]);  data.addRow(["'01 24 06:00:00'", 0.53, 1.16]);  data.addRow(["'01 24 08:00:00'", 2.24, 3.65]);  data.addRow(["'01 24 10:00:00'", 5.70, 39.09]);  data.addRow(["'01 24 12:00:00'", 24.06, 48.01]);  data.addRow(["'01 24 14:00:00'", 25.97, 50.54]);  data.addRow(["'01 24 16:00:00'", 32.97, 94.26]);  data.addRow(["'01 24 18:00:00'", 6.53, 56.40]);  data.addRow(["'01 24 20:00:00'", 7.43, 46.28]);  data.addRow(["'01 24 22:00:00'", 12.67, 33.22]);  data.addRow(["'01 25 00:00:00'", 3.89, 5.29]);  data.addRow(["'01 25 02:00:00'", 2.25, 10.29]);  data.addRow(["'01 25 04:00:00'", 4.44, 20.91]);  data.addRow(["'01 25 06:00:00'", 4.63, 0.68]);  data.addRow(["'01 25 08:00:00'", 5.84, 23.84]);  data.addRow(["'01 25 10:00:00'", 3.36, 9.03]);  data.addRow(["'01 25 12:00:00'", 3.87, 30.10]);  data.addRow(["'01 25 14:00:00'", 14.11, 42.95]);  data.addRow(["'01 25 16:00:00'", 24.35, 17.60]);  data.addRow(["'01 25 18:00:00'", 9.93, 6.94]);  data.addRow(["'01 25 20:00:00'", 2.56, 9.56]);  data.addRow(["'01 25 22:00:00'", 1.53, 2.23]);  data.addRow(["'01 26 00:00:00'", 0.45, 3.43]);  data.addRow(["'01 26 02:00:00'", 0.54, 0.64]);  data.addRow(["'01 26 04:00:00'", 0.63, 0.47]);  data.addRow(["'01 26 06:00:00'", 0.33, 0.28]);  data.addRow(["'01 26 08:00:00'", 0.28, 0.28]);  data.addRow(["'01 26 10:00:00'", 0.39, 0.55]);  data.addRow(["'01 26 12:00:00'", 0.84, 1.71]);  data.addRow(["'01 26 14:00:00'", 3.98, 7.69]);  data.addRow(["'01 26 16:00:00'", 5.75, 13.97]);  data.addRow(["'01 26 18:00:00'", 24.92, 24.61]);  data.addRow(["'01 26 20:00:00'", 4.96, 12.42]);  data.addRow(["'01 26 22:00:00'", 17.10, 11.25]);  data.addRow(["'01 27 00:00:00'", 6.21, 8.40]);  data.addRow(["'01 27 02:00:00'", 1.29, 6.69]);  data.addRow(["'01 27 04:00:00'", 1.68, 0.40]);  data.addRow(["'01 27 06:00:00'", 1.37, 0.45]);  data.addRow(["'01 27 08:00:00'", 9.45, 25.51]);  data.addRow(["'01 27 10:00:00'", 22.31, 50.85]);  data.addRow(["'01 27 12:00:00'", 43.27, 54.55]);  data.addRow(["'01 27 14:00:00'", 24.72, 37.23]);  data.addRow(["'01 27 16:00:00'", 21.58, 53.76]);  data.addRow(["'01 27 18:00:00'", 22.51, 44.52]);  data.addRow(["'01 27 20:00:00'", 18.44, 27.05]);  data.addRow(["'01 27 22:00:00'", 19.08, 14.23]);  data.addRow(["'01 28 00:00:00'", 8.19, 22.14]);  data.addRow(["'01 28 02:00:00'", 3.05, 81.04]);  data.addRow(["'01 28 04:00:00'", 1.37, 45.29]);  data.addRow(["'01 28 06:00:00'", 2.40, 0.81]);  data.addRow(["'01 28 08:00:00'", 7.31, 6.62]);  data.addRow(["'01 28 10:00:00'", 24.65, 37.54]);  data.addRow(["'01 28 12:00:00'", 48.15, 53.03]);  data.addRow(["'01 28 14:00:00'", 26.52, 32.37]);  data.addRow(["'01 28 16:00:00'", 35.84, 92.31]);  data.addRow(["'01 28 18:00:00'", 32.30, 34.57]);  data.addRow(["'01 28 20:00:00'", 19.55, 25.40]);  data.addRow(["'01 28 22:00:00'", 13.22, 27.65]);  data.addRow(["'01 29 00:00:00'", 4.95, 9.38]);  data.addRow(["'01 29 02:00:00'", 5.84, 10.55]);  data.addRow(["'01 29 04:00:00'", 2.42, 12.45]);  data.addRow(["'01 29 06:00:00'", 0.26, 0.87]);  data.addRow(["'01 29 08:00:00'", 2.22, 7.33]);  data.addRow(["'01 29 10:00:00'", 12.68, 20.77]);  data.addRow(["'01 29 12:00:00'", 17.54, 50.41]);  data.addRow(["'01 29 14:00:00'", 18.67, 52.74]);  data.addRow(["'01 29 16:00:00'", 30.72, 63.53]);  data.addRow(["'01 29 18:00:00'", 22.63, 46.30]);  data.addRow(["'01 29 20:00:00'", 12.89, 35.20]);  data.addRow(["'01 29 22:00:00'", 14.05, 7.89]);  data.addRow(["'01 30 00:00:00'", 4.21, 7.53]);  data.addRow(["'01 30 02:00:00'", 3.01, 4.26]);  data.addRow(["'01 30 04:00:00'", 1.43, 10.77]);  data.addRow(["'01 30 06:00:00'", 0.64, 5.62]);  data.addRow(["'01 30 08:00:00'", 3.99, 16.36]);  data.addRow(["'01 30 10:00:00'", 15.98, 23.32]);  data.addRow(["'01 30 12:00:00'", 20.04, 65.40]);  data.addRow(["'01 30 14:00:00'", 37.15, 42.78]);  data.addRow(["'01 30 16:00:00'", 40.36, 45.38]);  data.addRow(["'01 30 18:00:00'", 25.57, 58.06]);  data.addRow(["'01 30 20:00:00'", 12.41, 56.57]);  data.addRow(["'01 30 22:00:00'", 6.93, 71.78]);  data.addRow(["'01 31 00:00:00'", 9.21, 57.71]);  data.addRow(["'01 31 02:00:00'", 6.20, 9.95]);  data.addRow(["'01 31 04:00:00'", 0.77, 3.16]);  data.addRow(["'01 31 06:00:00'", 0.36, 0.45]);  data.addRow(["'01 31 08:00:00'", 1.20, 7.43]);  data.addRow(["'01 31 10:00:00'", 11.56, 41.61]);  data.addRow(["'01 31 12:00:00'", 11.73, 28.22]);  data.addRow(["'01 31 14:00:00'", 21.43, 44.16]);  data.addRow(["'01 31 16:00:00'", 23.78, 39.67]);  data.addRow(["'01 31 18:00:00'", 18.84, 18.97]);  data.addRow(["'01 31 20:00:00'", 5.21, 11.66]);  data.addRow(["'01 31 22:00:00'", 12.29, 3.74]);  data.addRow(["'02 01 00:00:00'", 1.46, 1.99]);  data.addRow(["'02 01 02:00:00'", 1.04, 1.78]);  data.addRow(["'02 01 04:00:00'", 0.51, 5.04]);  data.addRow(["'02 01 06:00:00'", 0.08, 0.17]);  data.addRow(["'02 01 08:00:00'", 0.14, 0.98]);  data.addRow(["'02 01 10:00:00'", 1.39, 3.32]);  data.addRow(["'02 01 12:00:00'", 5.58, 36.12]);  data.addRow(["'02 01 14:00:00'", 8.02, 7.86]);  data.addRow(["'02 01 16:00:00'", 8.76, 41.57]);  data.addRow(["'02 01 18:00:00'", 4.65, 15.28]);  data.addRow(["'02 01 20:00:00'", 3.05, 4.49]);  data.addRow(["'02 01 22:00:00'", 4.78, 4.71]);  data.addRow(["'02 02 00:00:00'", 1.67, 3.04]);  data.addRow(["'02 02 02:00:00'", 4.16, 1.57]);  data.addRow(["'02 02 04:00:00'", 1.20, 0.34]);  data.addRow(["'02 02 06:00:00'", 5.24, 0.22]);  data.addRow(["'02 02 08:00:00'", 0.16, 0.15]);  data.addRow(["'02 02 10:00:00'", 0.19, 0.93]);  data.addRow(["'02 02 12:00:00'", 0.59, 6.10]);  data.addRow(["'02 02 14:00:00'", 1.83, 6.43]);  data.addRow(["'02 02 16:00:00'", 2.15, 8.23]);  data.addRow(["'02 02 18:00:00'", 2.71, 14.38]);  data.addRow(["'02 02 20:00:00'", 2.54, 11.39]);  data.addRow(["'02 02 22:00:00'", 2.38, 4.90]);  data.addRow(["'02 03 00:00:00'", 1.84, 26.45]);  data.addRow(["'02 03 02:00:00'", 1.09, 7.31]);  data.addRow(["'02 03 04:00:00'", 2.55, 14.97]);  data.addRow(["'02 03 06:00:00'", 2.92, 13.50]);  data.addRow(["'02 03 08:00:00'", 3.62, 17.10]);  data.addRow(["'02 03 10:00:00'", 21.38, 40.25]);  data.addRow(["'02 03 12:00:00'", 46.50, 47.23]);  data.addRow(["'02 03 14:00:00'", 42.01, 66.00]);  data.addRow(["'02 03 16:00:00'", 41.53, 55.46]);  data.addRow(["'02 03 18:00:00'", 27.90, 36.21]);  data.addRow(["'02 03 20:00:00'", 29.93, 59.09]);  data.addRow(["'02 03 22:00:00'", 7.09, 21.74]);  data.addRow(["'02 04 00:00:00'", 6.59, 12.07]);  data.addRow(["'02 04 02:00:00'", 4.89, 13.21]);  data.addRow(["'02 04 04:00:00'", 0.78, 5.12]);  data.addRow(["'02 04 06:00:00'", 0.88, 3.54]);  data.addRow(["'02 04 08:00:00'", 7.44, 12.44]);  data.addRow(["'02 04 10:00:00'", 12.37, 42.79]);  data.addRow(["'02 04 12:00:00'", 19.83, 71.45]);  data.addRow(["'02 04 14:00:00'", 22.01, 43.94]);  data.addRow(["'02 04 16:00:00'", 20.48, 65.63]);  data.addRow(["'02 04 18:00:00'", 23.27, 48.98]);  data.addRow(["'02 04 20:00:00'", 18.92, 44.58]);  data.addRow(["'02 04 22:00:00'", 18.30, 52.04]);  data.addRow(["'02 05 00:00:00'", 1.68, 13.34]);  data.addRow(["'02 05 02:00:00'", 1.70, 13.98]);  data.addRow(["'02 05 04:00:00'", 0.86, 2.78]);  data.addRow(["'02 05 06:00:00'", 0.57, 1.51]);  data.addRow(["'02 05 08:00:00'", 2.31, 9.01]);  data.addRow(["'02 05 10:00:00'", 14.89, 34.49]);  data.addRow(["'02 05 12:00:00'", 47.33, 44.45]);  data.addRow(["'02 05 14:00:00'", 23.69, 69.03]);  data.addRow(["'02 05 16:00:00'", 34.34, 45.58]);  data.addRow(["'02 05 18:00:00'", 19.28, 29.91]);  data.addRow(["'02 05 20:00:00'", 12.67, 21.63]);  data.addRow(["'02 05 22:00:00'", 8.83, 26.30]);  data.addRow(["'02 06 00:00:00'", 1.41, 7.53]);  data.addRow(["'02 06 02:00:00'", 1.35, 2.02]);  data.addRow(["'02 06 04:00:00'", 0.71, 1.61]);  data.addRow(["'02 06 06:00:00'", 4.09, 0.51]);  data.addRow(["'02 06 08:00:00'", 2.79, 10.73]);  data.addRow(["'02 06 10:00:00'", 9.52, 50.94]);  data.addRow(["'02 06 12:00:00'", 28.24, 62.89]);  data.addRow(["'02 06 14:00:00'", 34.28, 76.01]);  data.addRow(["'02 06 16:00:00'", 14.94, 72.26]);  data.addRow(["'02 06 18:00:00'", 18.92, 76.93]);  data.addRow(["'02 06 20:00:00'", 10.50, 23.83]);  data.addRow(["'02 06 22:00:00'", 11.54, 36.07]);  data.addRow(["'02 07 00:00:00'", 2.93, 24.49]);  data.addRow(["'02 07 02:00:00'", 1.36, 4.50]);  data.addRow(["'02 07 04:00:00'", 1.55, 1.47]);  data.addRow(["'02 07 06:00:00'", 1.39, 3.13]);  data.addRow(["'02 07 08:00:00'", 1.68, 4.64]);  data.addRow(["'02 07 10:00:00'", 11.86, 36.86]);  data.addRow(["'02 07 12:00:00'", 14.47, 41.13]);  data.addRow(["'02 07 14:00:00'", 12.83, 70.40]);  data.addRow(["'02 07 16:00:00'", 17.52, 90.22]);  data.addRow(["'02 07 18:00:00'", 12.29, 66.54]);  data.addRow(["'02 07 20:00:00'", 10.55, 17.19]);  data.addRow(["'02 07 22:00:00'", 5.40, 9.81]);  data.addRow(["'02 08 00:00:00'", 6.56, 12.60]);  data.addRow(["'02 08 02:00:00'", 0.67, 5.35]);  data.addRow(["'02 08 04:00:00'", 0.38, 0.79]);  data.addRow(["'02 08 06:00:00'", 0.22, 1.50]);  data.addRow(["'02 08 08:00:00'", 0.45, 0.43]);  data.addRow(["'02 08 10:00:00'", 1.37, 20.64]);  data.addRow(["'02 08 12:00:00'", 2.74, 16.95]);  data.addRow(["'02 08 14:00:00'", 9.38, 20.24]);  data.addRow(["'02 08 16:00:00'", 5.68, 18.87]);  data.addRow(["'02 08 18:00:00'", 13.91, 32.45]);  data.addRow(["'02 08 20:00:00'", 22.01, 24.13]);  data.addRow(["'02 08 22:00:00'", 39.49, 28.68]);  data.addRow(["'02 09 00:00:00'", 36.60, 30.14]);  data.addRow(["'02 09 02:00:00'", 45.82, 25.86]);  data.addRow(["'02 09 04:00:00'", 3.81, 14.89]);  data.addRow(["'02 09 06:00:00'", 0.65, 26.94]);  data.addRow(["'02 09 08:00:00'", 0.72, 36.89]);  data.addRow(["'02 09 10:00:00'", 1.28, 36.27]);  data.addRow(["'02 09 12:00:00'", 1.75, 21.04]);  data.addRow(["'02 09 14:00:00'", 4.17, 8.06]);  data.addRow(["'02 09 16:00:00'", 5.22, 29.88]);  data.addRow(["'02 09 18:00:00'", 10.04, 23.83]);  data.addRow(["'02 09 20:00:00'", 11.19, 15.22]);  data.addRow(["'02 09 22:00:00'", 9.84, 6.64]);  data.addRow(["'02 10 00:00:00'", 18.35, 15.33]);  data.addRow(["'02 10 02:00:00'", 5.30, 7.12]);  data.addRow(["'02 10 04:00:00'", 1.61, 10.64]);  data.addRow(["'02 10 06:00:00'", 2.49, 17.87]);  data.addRow(["'02 10 08:00:00'", 3.38, 25.55]);  data.addRow(["'02 10 10:00:00'", 22.07, 57.44]);  data.addRow(["'02 10 12:00:00'", 30.86, 71.53]);  data.addRow(["'02 10 14:00:00'", 33.31, 85.66]);  data.addRow(["'02 10 16:00:00'", 22.19, 72.03]);  data.addRow(["'02 10 18:00:00'", 20.37, 61.26]);  data.addRow(["'02 10 20:00:00'", 29.53, 35.53]);  data.addRow(["'02 10 22:00:00'", 19.84, 16.58]);  data.addRow(["'02 11 00:00:00'", 11.45, 11.05]);  data.addRow(["'02 11 02:00:00'", 3.18, 7.05]);  data.addRow(["'02 11 04:00:00'", 1.14, 6.84]);  data.addRow(["'02 11 06:00:00'", 0.85, 0.38]);  data.addRow(["'02 11 08:00:00'", 4.29, 13.01]);  data.addRow(["'02 11 10:00:00'", 28.61, 56.52]);  data.addRow(["'02 11 12:00:00'", 28.33, 54.02]);  data.addRow(["'02 11 14:00:00'", 33.84, 67.35]);  data.addRow(["'02 11 16:00:00'", 33.50, 83.59]);  data.addRow(["'02 11 18:00:00'", 23.29, 60.02]);  data.addRow(["'02 11 20:00:00'", 11.08, 51.54]);  data.addRow(["'02 11 22:00:00'", 8.21, 19.36]);  data.addRow(["'02 12 00:00:00'", 10.93, 11.51]);  data.addRow(["'02 12 02:00:00'", 7.64, 14.53]);  data.addRow(["'02 12 04:00:00'", 1.92, 2.57]);  data.addRow(["'02 12 06:00:00'", 0.83, 0.77]);  data.addRow(["'02 12 08:00:00'", 2.50, 5.45]);  data.addRow(["'02 12 10:00:00'", 16.03, 53.90]);  data.addRow(["'02 12 12:00:00'", 21.16, 58.96]);  data.addRow(["'02 12 14:00:00'", 36.85, 55.38]);  data.addRow(["'02 12 16:00:00'", 25.98, 50.46]);  data.addRow(["'02 12 18:00:00'", 36.25, 50.34]);  data.addRow(["'02 12 20:00:00'", 16.20, 20.00]);  data.addRow(["'02 12 22:00:00'", 2.91, 21.36]);  data.addRow(["'02 13 00:00:00'", 8.34, 16.43]);  data.addRow(["'02 13 02:00:00'", 3.83, 9.47]);  data.addRow(["'02 13 04:00:00'", 2.86, 2.12]);  data.addRow(["'02 13 06:00:00'", 1.18, 3.59]);  data.addRow(["'02 13 08:00:00'", 7.52, 14.17]);  data.addRow(["'02 13 10:00:00'", 14.37, 49.28]);  data.addRow(["'02 13 12:00:00'", 30.29, 58.04]);  data.addRow(["'02 13 14:00:00'", 37.12, 48.54]);  data.addRow(["'02 13 16:00:00'", 17.42, 78.14]);  data.addRow(["'02 13 18:00:00'", 15.32, 50.00]);  data.addRow(["'02 13 20:00:00'", 21.65, 45.28]);  data.addRow(["'02 13 22:00:00'", 9.54, 34.22]);  data.addRow(["'02 14 00:00:00'", 3.95, 10.28]);  data.addRow(["'02 14 02:00:00'", 1.76, 7.95]);  data.addRow(["'02 14 04:00:00'", 6.43, 4.26]);  data.addRow(["'02 14 06:00:00'", 8.34, 1.68]);  data.addRow(["'02 14 08:00:00'", 2.39, 11.98]);  data.addRow(["'02 14 10:00:00'", 11.51, 53.99]);  data.addRow(["'02 14 12:00:00'", 26.01, 56.73]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 464.71 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='464'

	
        
      
	