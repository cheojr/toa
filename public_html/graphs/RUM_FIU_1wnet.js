
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'07 12:30:00'", 21.98, 0.00]);  data.addRow(["'07 13:00:00'", 18.18, 19.38]);  data.addRow(["'07 13:30:00'", 22.96, 68.35]);  data.addRow(["'07 14:00:00'", 20.29, 115.82]);  data.addRow(["'07 14:30:00'", 26.79, 79.69]);  data.addRow(["'07 15:00:00'", 32.16, 50.36]);  data.addRow(["'07 15:30:00'", 10.43, 37.33]);  data.addRow(["'07 16:00:00'", 19.39, 32.72]);  data.addRow(["'07 16:30:00'", 12.50, 40.83]);  data.addRow(["'07 17:00:00'", 16.47, 26.17]);  data.addRow(["'07 17:30:00'", 4.69, 20.40]);  data.addRow(["'07 18:00:00'", 12.81, 36.98]);  data.addRow(["'07 18:30:00'", 22.10, 64.03]);  data.addRow(["'07 19:00:00'", 6.12, 29.49]);  data.addRow(["'07 19:30:00'", 38.79, 55.43]);  data.addRow(["'07 20:00:00'", 62.43, 24.36]);  data.addRow(["'07 20:30:00'", 30.25, 58.79]);  data.addRow(["'07 21:00:00'", 22.84, 28.82]);  data.addRow(["'07 21:30:00'", 88.88, 52.63]);  data.addRow(["'07 22:00:00'", 36.44, 17.05]);  data.addRow(["'07 22:30:00'", 41.83, 42.25]);  data.addRow(["'07 23:00:00'", 88.04, 22.40]);  data.addRow(["'07 23:30:00'", 41.71, 77.83]);  data.addRow(["'08 00:00:00'", 22.36, 20.02]);  data.addRow(["'08 00:30:00'", 25.15, 28.63]);  data.addRow(["'08 01:00:00'", 41.20, 21.40]);  data.addRow(["'08 01:30:00'", 54.42, 56.18]);  data.addRow(["'08 02:00:00'", 17.66, 35.33]);  data.addRow(["'08 02:30:00'", 42.98, 27.18]);  data.addRow(["'08 03:00:00'", 34.60, 37.39]);  data.addRow(["'08 03:30:00'", 13.49, 17.41]);  data.addRow(["'08 04:00:00'", 10.23, 22.30]);  data.addRow(["'08 04:30:00'", 5.63, 23.89]);  data.addRow(["'08 05:00:00'", 5.66, 30.69]);  data.addRow(["'08 05:30:00'", 7.05, 51.16]);  data.addRow(["'08 06:00:00'", 4.44, 15.66]);  data.addRow(["'08 06:30:00'", 7.16, 40.19]);  data.addRow(["'08 07:00:00'", 5.41, 16.14]);  data.addRow(["'08 07:30:00'", 8.25, 30.48]);  data.addRow(["'08 08:00:00'", 5.89, 8.80]);  data.addRow(["'08 08:30:00'", 12.96, 33.06]);  data.addRow(["'08 09:00:00'", 5.83, 15.41]);  data.addRow(["'08 09:30:00'", 6.52, 39.54]);  data.addRow(["'08 10:00:00'", 3.82, 21.68]);  data.addRow(["'08 10:30:00'", 7.82, 27.96]);  data.addRow(["'08 11:00:00'", 4.78, 37.00]);  data.addRow(["'08 11:30:00'", 7.14, 35.92]);  data.addRow(["'08 12:00:00'", 6.91, 69.31]);  data.addRow(["'08 12:30:00'", 6.96, 20.44]);  data.addRow(["'08 13:00:00'", 4.48, 34.40]);  data.addRow(["'08 13:30:00'", 8.03, 49.33]);  data.addRow(["'08 14:00:00'", 11.92, 25.38]);  data.addRow(["'08 14:30:00'", 15.73, 42.37]);  data.addRow(["'08 15:00:00'", 12.49, 58.02]);  data.addRow(["'08 15:30:00'", 31.64, 38.61]);  data.addRow(["'08 16:00:00'", 24.76, 28.04]);  data.addRow(["'08 16:30:00'", 16.14, 29.31]);  data.addRow(["'08 17:00:00'", 10.25, 23.39]);  data.addRow(["'08 17:30:00'", 17.16, 61.24]);  data.addRow(["'08 18:00:00'", 5.53, 19.64]);  data.addRow(["'08 18:30:00'", 14.42, 60.87]);  data.addRow(["'08 19:00:00'", 18.75, 30.80]);  data.addRow(["'08 19:30:00'", 15.31, 14.54]);  data.addRow(["'08 20:00:00'", 4.54, 49.76]);  data.addRow(["'08 20:30:00'", 8.37, 67.65]);  data.addRow(["'08 21:00:00'", 12.58, 29.14]);  data.addRow(["'08 21:30:00'", 27.54, 24.44]);  data.addRow(["'08 22:00:00'", 3.95, 12.22]);  data.addRow(["'08 22:30:00'", 7.65, 39.40]);  data.addRow(["'08 23:00:00'", 3.84, 37.82]);  data.addRow(["'08 23:30:00'", 14.77, 38.60]);  data.addRow(["'09 00:00:00'", 3.74, 35.44]);  data.addRow(["'09 00:30:00'", 7.17, 66.32]);  data.addRow(["'09 01:00:00'", 5.41, 38.66]);  data.addRow(["'09 01:30:00'", 6.47, 45.31]);  data.addRow(["'09 02:00:00'", 3.10, 28.40]);  data.addRow(["'09 02:30:00'", 8.97, 51.80]);  data.addRow(["'09 03:00:00'", 3.26, 10.57]);  data.addRow(["'09 03:30:00'", 6.06, 19.67]);  data.addRow(["'09 04:00:00'", 4.36, 22.43]);  data.addRow(["'09 04:30:00'", 6.58, 64.99]);  data.addRow(["'09 05:00:00'", 3.55, 28.23]);  data.addRow(["'09 05:30:00'", 6.81, 45.88]);  data.addRow(["'09 06:00:00'", 3.86, 9.19]);  data.addRow(["'09 06:30:00'", 8.10, 52.33]);  data.addRow(["'09 07:00:00'", 3.22, 18.40]);  data.addRow(["'09 07:30:00'", 8.10, 25.16]);  data.addRow(["'09 08:00:00'", 1.49, 17.04]);  data.addRow(["'09 08:30:00'", 10.36, 51.27]);  data.addRow(["'09 09:00:00'", 3.57, 4.54]);  data.addRow(["'09 09:30:00'", 7.15, 59.43]);  data.addRow(["'09 10:00:00'", 3.54, 14.49]);  data.addRow(["'09 10:30:00'", 6.65, 77.41]);  data.addRow(["'09 11:00:00'", 4.37, 8.01]);  data.addRow(["'09 11:30:00'", 6.15, 43.26]);  data.addRow(["'09 12:00:00'", 4.92, 29.42]);  data.addRow(["'09 12:30:00'", 7.48, 32.74]);  data.addRow(["'09 13:00:00'", 4.12, 6.53]);  data.addRow(["'09 13:30:00'", 8.92, 76.09]);  data.addRow(["'09 14:00:00'", 10.93, 7.71]);  data.addRow(["'09 14:30:00'", 8.74, 68.09]);  data.addRow(["'09 15:00:00'", 9.83, 48.96]);  data.addRow(["'09 15:30:00'", 8.16, 53.11]);  data.addRow(["'09 16:00:00'", 5.27, 48.56]);  data.addRow(["'09 16:30:00'", 6.77, 38.56]);  data.addRow(["'09 17:00:00'", 6.00, 35.15]);  data.addRow(["'09 17:30:00'", 16.66, 47.68]);  data.addRow(["'09 18:00:00'", 6.85, 17.92]);  data.addRow(["'09 18:30:00'", 12.83, 90.22]);  data.addRow(["'09 19:00:00'", 7.67, 15.80]);  data.addRow(["'09 19:30:00'", 12.75, 58.03]);  data.addRow(["'09 20:00:00'", 9.56, 9.39]);  data.addRow(["'09 20:30:00'", 10.12, 49.13]);  data.addRow(["'09 21:00:00'", 11.80, 15.98]);  data.addRow(["'09 21:30:00'", 9.56, 38.44]);  data.addRow(["'09 22:00:00'", 9.99, 36.56]);  data.addRow(["'09 22:30:00'", 9.98, 23.68]);  data.addRow(["'09 23:00:00'", 5.53, 26.52]);  data.addRow(["'09 23:30:00'", 7.50, 48.04]);  data.addRow(["'10 00:00:00'", 5.43, 10.11]);  data.addRow(["'10 00:30:00'", 8.34, 45.70]);  data.addRow(["'10 01:00:00'", 2.95, 48.94]);  data.addRow(["'10 01:30:00'", 8.28, 65.60]);  data.addRow(["'10 02:00:00'", 4.92, 16.19]);  data.addRow(["'10 02:30:00'", 7.54, 45.98]);  data.addRow(["'10 03:00:00'", 6.31, 10.00]);  data.addRow(["'10 03:30:00'", 6.55, 27.90]);  data.addRow(["'10 04:00:00'", 5.38, 53.21]);  data.addRow(["'10 04:30:00'", 7.01, 56.56]);  data.addRow(["'10 05:00:00'", 5.01, 12.99]);  data.addRow(["'10 05:30:00'", 6.89, 23.84]);  data.addRow(["'10 06:00:00'", 6.87, 29.84]);  data.addRow(["'10 06:30:00'", 7.43, 24.29]);  data.addRow(["'10 07:00:00'", 5.73, 49.14]);  data.addRow(["'10 07:30:00'", 11.67, 31.71]);  data.addRow(["'10 08:00:00'", 9.90, 75.88]);  data.addRow(["'10 08:30:00'", 26.50, 60.08]);  data.addRow(["'10 09:00:00'", 37.27, 55.61]);  data.addRow(["'10 09:30:00'", 64.36, 65.59]);  data.addRow(["'10 10:00:00'", 22.21, 112.03]);  data.addRow(["'10 10:30:00'", 27.34, 49.87]);  data.addRow(["'10 11:00:00'", 24.90, 103.26]);  data.addRow(["'10 11:30:00'", 12.64, 43.48]);  data.addRow(["'10 12:00:00'", 24.41, 46.13]);  data.addRow(["'10 12:30:00'", 27.39, 44.31]);  data.addRow(["'10 13:00:00'", 26.46, 66.64]);  data.addRow(["'10 13:30:00'", 17.90, 63.55]);  data.addRow(["'10 14:00:00'", 28.34, 33.86]);  data.addRow(["'10 14:30:00'", 25.18, 59.12]);  data.addRow(["'10 15:00:00'", 39.55, 50.31]);  data.addRow(["'10 15:30:00'", 30.51, 98.44]);  data.addRow(["'10 16:00:00'", 28.32, 39.93]);  data.addRow(["'10 16:30:00'", 12.53, 29.53]);  data.addRow(["'10 17:00:00'", 19.11, 97.09]);  data.addRow(["'10 17:30:00'", 11.89, 33.29]);  data.addRow(["'10 18:00:00'", 9.82, 40.02]);  data.addRow(["'10 18:30:00'", 14.36, 56.50]);  data.addRow(["'10 19:00:00'", 29.88, 58.66]);  data.addRow(["'10 19:30:00'", 70.27, 34.72]);  data.addRow(["'10 20:00:00'", 26.36, 62.03]);  data.addRow(["'10 20:30:00'", 21.31, 22.66]);  data.addRow(["'10 21:00:00'", 39.11, 42.46]);  data.addRow(["'10 21:30:00'", 22.85, 24.66]);  data.addRow(["'10 22:00:00'", 13.85, 47.20]);  data.addRow(["'10 22:30:00'", 8.05, 29.22]);  data.addRow(["'10 23:00:00'", 14.06, 85.79]);  data.addRow(["'10 23:30:00'", 6.14, 30.55]);  data.addRow(["'11 00:00:00'", 9.60, 25.82]);  data.addRow(["'11 00:30:00'", 4.11, 33.67]);  data.addRow(["'11 01:00:00'", 9.04, 54.73]);  data.addRow(["'11 01:30:00'", 5.08, 53.51]);  data.addRow(["'11 02:00:00'", 7.40, 26.52]);  data.addRow(["'11 02:30:00'", 5.31, 36.15]);  data.addRow(["'11 03:00:00'", 5.47, 30.05]);  data.addRow(["'11 03:30:00'", 16.58, 11.49]);  data.addRow(["'11 04:00:00'", 4.65, 16.57]);  data.addRow(["'11 04:30:00'", 7.65, 55.43]);  data.addRow(["'11 05:00:00'", 11.16, 53.47]);  data.addRow(["'11 05:30:00'", 6.77, 23.12]);  data.addRow(["'11 06:00:00'", 7.00, 3.01]);  data.addRow(["'11 06:30:00'", 9.40, 55.19]);  data.addRow(["'11 07:00:00'", 10.47, 26.29]);  data.addRow(["'11 07:30:00'", 13.00, 31.94]);  data.addRow(["'11 08:00:00'", 10.96, 12.31]);  data.addRow(["'11 08:30:00'", 12.90, 39.63]);  data.addRow(["'11 09:00:00'", 21.14, 36.97]);  data.addRow(["'11 09:30:00'", 19.89, 31.42]);  data.addRow(["'11 10:00:00'", 57.07, 43.81]);  data.addRow(["'11 10:30:00'", 37.40, 60.94]);  data.addRow(["'11 11:00:00'", 39.43, 59.73]);  data.addRow(["'11 11:30:00'", 42.34, 101.78]);  data.addRow(["'11 12:00:00'", 54.93, 35.29]);  data.addRow(["'11 12:30:00'", 18.43, 34.20]);  data.addRow(["'11 13:00:00'", 23.98, 58.95]);  data.addRow(["'11 13:30:00'", 21.52, 31.24]);  data.addRow(["'11 14:00:00'", 36.32, 34.14]);  data.addRow(["'11 14:30:00'", 35.12, 82.81]);  data.addRow(["'11 15:00:00'", 35.99, 40.21]);  data.addRow(["'11 15:30:00'", 28.28, 70.26]);  data.addRow(["'11 16:00:00'", 44.46, 55.34]);  data.addRow(["'11 16:30:00'", 25.68, 62.50]);  data.addRow(["'11 17:00:00'", 40.35, 86.96]);  data.addRow(["'11 17:30:00'", 27.03, 43.73]);  data.addRow(["'11 18:00:00'", 16.53, 63.19]);  data.addRow(["'11 18:30:00'", 25.51, 38.49]);  data.addRow(["'11 19:00:00'", 13.31, 33.17]);  data.addRow(["'11 19:30:00'", 13.41, 58.73]);  data.addRow(["'11 20:00:00'", 26.76, 51.08]);  data.addRow(["'11 20:30:00'", 23.28, 72.27]);  data.addRow(["'11 21:00:00'", 52.17, 22.09]);  data.addRow(["'11 21:30:00'", 40.07, 63.26]);  data.addRow(["'11 22:00:00'", 36.27, 19.78]);  data.addRow(["'11 22:30:00'", 21.80, 48.20]);  data.addRow(["'11 23:00:00'", 21.17, 45.65]);  data.addRow(["'11 23:30:00'", 15.83, 41.34]);  data.addRow(["'12 00:00:00'", 19.11, 95.78]);  data.addRow(["'12 00:30:00'", 24.87, 52.88]);  data.addRow(["'12 01:00:00'", 17.86, 9.20]);  data.addRow(["'12 01:30:00'", 24.99, 14.07]);  data.addRow(["'12 02:00:00'", 18.42, 39.10]);  data.addRow(["'12 02:30:00'", 8.21, 31.20]);  data.addRow(["'12 03:00:00'", 13.23, 55.86]);  data.addRow(["'12 03:30:00'", 5.41, 6.41]);  data.addRow(["'12 04:00:00'", 3.86, 29.28]);  data.addRow(["'12 04:30:00'", 4.56, 5.18]);  data.addRow(["'12 05:00:00'", 4.39, 30.17]);  data.addRow(["'12 05:30:00'", 4.77, 19.82]);  data.addRow(["'12 06:00:00'", 4.28, 28.73]);  data.addRow(["'12 06:30:00'", 4.78, 74.12]);  data.addRow(["'12 07:00:00'", 6.34, 21.94]);  data.addRow(["'12 07:30:00'", 9.15, 22.89]);  data.addRow(["'12 08:00:00'", 10.10, 19.08]);  data.addRow(["'12 08:30:00'", 11.42, 34.95]);  data.addRow(["'12 09:00:00'", 41.38, 63.43]);  data.addRow(["'12 09:30:00'", 34.91, 28.71]);  data.addRow(["'12 10:00:00'", 50.49, 59.97]);  data.addRow(["'12 10:30:00'", 34.58, 36.62]);  data.addRow(["'12 11:00:00'", 27.29, 69.49]);  data.addRow(["'12 11:30:00'", 44.13, 107.71]);  data.addRow(["'12 12:00:00'", 53.82, 82.60]);  data.addRow(["'12 12:30:00'", 30.64, 117.85]);  data.addRow(["'12 13:00:00'", 17.52, 57.97]);  data.addRow(["'12 13:30:00'", 42.90, 61.02]);  data.addRow(["'12 14:00:00'", 49.14, 57.96]);  data.addRow(["'12 14:30:00'", 19.28, 50.80]);  data.addRow(["'12 15:00:00'", 41.44, 55.42]);  data.addRow(["'12 15:30:00'", 30.68, 46.73]);  data.addRow(["'12 16:00:00'", 49.20, 107.92]);  data.addRow(["'12 16:30:00'", 18.57, 49.14]);  data.addRow(["'12 17:00:00'", 20.40, 73.24]);  data.addRow(["'12 17:30:00'", 25.66, 40.58]);  data.addRow(["'12 18:00:00'", 37.40, 77.74]);  data.addRow(["'12 18:30:00'", 23.23, 21.60]);  data.addRow(["'12 19:00:00'", 10.23, 117.62]);  data.addRow(["'12 19:30:00'", 11.97, 42.39]);  data.addRow(["'12 20:00:00'", 8.71, 54.46]);  data.addRow(["'12 20:30:00'", 18.07, 31.84]);  data.addRow(["'12 21:00:00'", 12.04, 51.95]);  data.addRow(["'12 21:30:00'", 20.85, 28.97]);  data.addRow(["'12 22:00:00'", 19.06, 83.75]);  data.addRow(["'12 22:30:00'", 19.07, 23.71]);  data.addRow(["'12 23:00:00'", 13.16, 70.47]);  data.addRow(["'12 23:30:00'", 24.94, 35.68]);  data.addRow(["'13 00:00:00'", 32.52, 54.07]);  data.addRow(["'13 00:30:00'", 11.63, 97.16]);  data.addRow(["'13 01:00:00'", 20.90, 93.27]);  data.addRow(["'13 01:30:00'", 12.00, 56.49]);  data.addRow(["'13 02:00:00'", 6.42, 11.96]);  data.addRow(["'13 02:30:00'", 4.25, 34.72]);  data.addRow(["'13 03:00:00'", 8.00, 13.22]);  data.addRow(["'13 03:30:00'", 7.31, 30.96]);  data.addRow(["'13 04:00:00'", 7.94, 57.74]);  data.addRow(["'13 04:30:00'", 6.36, 69.87]);  data.addRow(["'13 05:00:00'", 8.33, 40.36]);  data.addRow(["'13 05:30:00'", 5.73, 42.57]);  data.addRow(["'13 06:00:00'", 8.87, 11.72]);  data.addRow(["'13 06:30:00'", 6.79, 63.69]);  data.addRow(["'13 07:00:00'", 7.78, 67.23]);  data.addRow(["'13 07:30:00'", 29.50, 57.69]);  data.addRow(["'13 08:00:00'", 29.08, 34.58]);  data.addRow(["'13 08:30:00'", 15.73, 35.99]);  data.addRow(["'13 09:00:00'", 26.49, 26.34]);  data.addRow(["'13 09:30:00'", 28.53, 26.58]);  data.addRow(["'13 10:00:00'", 39.88, 50.22]);  data.addRow(["'13 10:30:00'", 74.91, 32.63]);  data.addRow(["'13 11:00:00'", 71.29, 39.69]);  data.addRow(["'13 11:30:00'", 75.02, 63.28]);  data.addRow(["'13 12:00:00'", 54.76, 50.22]);  data.addRow(["'13 12:30:00'", 40.38, 43.27]);  data.addRow(["'13 13:00:00'", 20.79, 53.60]);  data.addRow(["'13 13:30:00'", 33.83, 108.78]);  data.addRow(["'13 14:00:00'", 42.59, 42.32]);  data.addRow(["'13 14:30:00'", 27.56, 44.51]);  data.addRow(["'13 15:00:00'", 32.26, 73.34]);  data.addRow(["'13 15:30:00'", 25.17, 50.32]);  data.addRow(["'13 16:00:00'", 20.05, 32.67]);  data.addRow(["'13 16:30:00'", 19.55, 60.10]);  data.addRow(["'13 17:00:00'", 31.78, 62.24]);  data.addRow(["'13 17:30:00'", 12.46, 47.32]);  data.addRow(["'13 18:00:00'", 38.10, 35.25]);  data.addRow(["'13 18:30:00'", 11.05, 40.10]);  data.addRow(["'13 19:00:00'", 11.66, 38.49]);  data.addRow(["'13 19:30:00'", 36.44, 92.17]);  data.addRow(["'13 20:00:00'", 7.13, 38.07]);  data.addRow(["'13 20:30:00'", 36.92, 48.78]);  data.addRow(["'13 21:00:00'", 9.28, 36.77]);  data.addRow(["'13 21:30:00'", 16.66, 63.69]);  data.addRow(["'13 22:00:00'", 6.08, 45.26]);  data.addRow(["'13 22:30:00'", 8.30, 57.41]);  data.addRow(["'13 23:00:00'", 6.38, 35.27]);  data.addRow(["'13 23:30:00'", 11.37, 84.81]);  data.addRow(["'14 00:00:00'", 4.61, 29.78]);  data.addRow(["'14 00:30:00'", 7.55, 75.53]);  data.addRow(["'14 01:00:00'", 5.07, 19.85]);  data.addRow(["'14 01:30:00'", 13.91, 3.46]);  data.addRow(["'14 02:00:00'", 3.71, 47.59]);  data.addRow(["'14 02:30:00'", 7.86, 69.38]);  data.addRow(["'14 03:00:00'", 4.65, 36.24]);  data.addRow(["'14 03:30:00'", 7.91, 44.73]);  data.addRow(["'14 04:00:00'", 3.34, 24.47]);  data.addRow(["'14 04:30:00'", 8.01, 51.83]);  data.addRow(["'14 05:00:00'", 5.20, 8.79]);  data.addRow(["'14 05:30:00'", 10.01, 66.31]);  data.addRow(["'14 06:00:00'", 4.01, 36.24]);  data.addRow(["'14 06:30:00'", 11.31, 48.32]);  data.addRow(["'14 07:00:00'", 4.40, 19.88]);  data.addRow(["'14 07:30:00'", 10.02, 75.29]);  data.addRow(["'14 08:00:00'", 5.49, 45.35]);  data.addRow(["'14 08:30:00'", 18.63, 69.92]);  data.addRow(["'14 09:00:00'", 16.54, 26.45]);  data.addRow(["'14 09:30:00'", 26.56, 53.46]);  data.addRow(["'14 10:00:00'", 18.07, 38.14]);  data.addRow(["'14 10:30:00'", 32.66, 51.84]);  data.addRow(["'14 11:00:00'", 18.51, 71.93]);  data.addRow(["'14 11:30:00'", 23.98, 76.31]);  data.addRow(["'14 12:00:00'", 21.83, 29.55]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 435.94 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='435'

	
        
      
	