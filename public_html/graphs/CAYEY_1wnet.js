
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'07 12:30:00'", 9.22, 36.93]);  data.addRow(["'07 13:00:00'", 3.05, 17.83]);  data.addRow(["'07 13:30:00'", 7.46, 10.44]);  data.addRow(["'07 14:00:00'", 14.40, 8.59]);  data.addRow(["'07 14:30:00'", 3.16, 56.39]);  data.addRow(["'07 15:00:00'", 3.73, 11.58]);  data.addRow(["'07 15:30:00'", 5.61, 7.62]);  data.addRow(["'07 16:00:00'", 1.18, 5.45]);  data.addRow(["'07 16:30:00'", 1.01, 4.76]);  data.addRow(["'07 17:00:00'", 7.30, 1.50]);  data.addRow(["'07 17:30:00'", 0.99, 1.23]);  data.addRow(["'07 18:00:00'", 0.10, 0.15]);  data.addRow(["'07 18:30:00'", 0.15, 0.30]);  data.addRow(["'07 19:00:00'", 0.05, 0.53]);  data.addRow(["'07 19:30:00'", 0.17, 0.14]);  data.addRow(["'07 20:00:00'", 0.05, 0.28]);  data.addRow(["'07 20:30:00'", 0.15, 0.13]);  data.addRow(["'07 21:00:00'", 0.04, 0.04]);  data.addRow(["'07 21:30:00'", 0.13, 0.08]);  data.addRow(["'07 22:00:00'", 0.07, 0.24]);  data.addRow(["'07 22:30:00'", 0.18, 0.68]);  data.addRow(["'07 23:00:00'", 0.05, 0.21]);  data.addRow(["'07 23:30:00'", 0.15, 1.44]);  data.addRow(["'08 00:00:00'", 0.15, 7.47]);  data.addRow(["'08 00:30:00'", 0.21, 6.98]);  data.addRow(["'08 01:00:00'", 0.10, 5.75]);  data.addRow(["'08 01:30:00'", 0.23, 7.58]);  data.addRow(["'08 02:00:00'", 0.09, 4.43]);  data.addRow(["'08 02:30:00'", 0.24, 8.94]);  data.addRow(["'08 03:00:00'", 0.09, 5.66]);  data.addRow(["'08 03:30:00'", 0.22, 7.07]);  data.addRow(["'08 04:00:00'", 0.09, 5.48]);  data.addRow(["'08 04:30:00'", 0.23, 7.56]);  data.addRow(["'08 05:00:00'", 0.08, 4.12]);  data.addRow(["'08 05:30:00'", 0.14, 0.64]);  data.addRow(["'08 06:00:00'", 0.03, 0.02]);  data.addRow(["'08 06:30:00'", 0.13, 0.08]);  data.addRow(["'08 07:00:00'", 0.03, 0.02]);  data.addRow(["'08 07:30:00'", 0.13, 0.11]);  data.addRow(["'08 08:00:00'", 0.03, 0.06]);  data.addRow(["'08 08:30:00'", 6.39, 0.38]);  data.addRow(["'08 09:00:00'", 12.30, 0.41]);  data.addRow(["'08 09:30:00'", 0.19, 0.58]);  data.addRow(["'08 10:00:00'", 0.13, 0.46]);  data.addRow(["'08 10:30:00'", 0.27, 0.90]);  data.addRow(["'08 11:00:00'", 0.08, 0.30]);  data.addRow(["'08 11:30:00'", 0.28, 0.31]);  data.addRow(["'08 12:00:00'", 0.15, 1.75]);  data.addRow(["'08 12:30:00'", 0.70, 28.86]);  data.addRow(["'08 13:00:00'", 0.10, 0.28]);  data.addRow(["'08 13:30:00'", 0.20, 0.32]);  data.addRow(["'08 14:00:00'", 0.13, 0.52]);  data.addRow(["'08 14:30:00'", 3.14, 0.58]);  data.addRow(["'08 15:00:00'", 0.18, 0.66]);  data.addRow(["'08 15:30:00'", 0.08, 0.44]);  data.addRow(["'08 16:00:00'", 0.10, 0.49]);  data.addRow(["'08 16:30:00'", 0.15, 0.14]);  data.addRow(["'08 17:00:00'", 16.59, 0.30]);  data.addRow(["'08 17:30:00'", 0.12, 0.58]);  data.addRow(["'08 18:00:00'", 0.63, 29.25]);  data.addRow(["'08 18:30:00'", 1.38, 0.26]);  data.addRow(["'08 19:00:00'", 0.06, 0.75]);  data.addRow(["'08 19:30:00'", 0.16, 0.41]);  data.addRow(["'08 20:00:00'", 0.04, 0.16]);  data.addRow(["'08 20:30:00'", 0.14, 0.18]);  data.addRow(["'08 21:00:00'", 0.04, 0.27]);  data.addRow(["'08 21:30:00'", 0.14, 0.37]);  data.addRow(["'08 22:00:00'", 0.04, 0.12]);  data.addRow(["'08 22:30:00'", 0.13, 0.10]);  data.addRow(["'08 23:00:00'", 0.03, 0.03]);  data.addRow(["'08 23:30:00'", 0.14, 0.21]);  data.addRow(["'09 00:00:00'", 0.04, 0.17]);  data.addRow(["'09 00:30:00'", 0.14, 0.17]);  data.addRow(["'09 01:00:00'", 0.18, 0.09]);  data.addRow(["'09 01:30:00'", 0.25, 0.13]);  data.addRow(["'09 02:00:00'", 0.05, 0.35]);  data.addRow(["'09 02:30:00'", 0.14, 0.08]);  data.addRow(["'09 03:00:00'", 0.03, 0.06]);  data.addRow(["'09 03:30:00'", 0.12, 0.09]);  data.addRow(["'09 04:00:00'", 0.03, 0.02]);  data.addRow(["'09 04:30:00'", 0.14, 0.08]);  data.addRow(["'09 05:00:00'", 0.03, 0.02]);  data.addRow(["'09 05:30:00'", 0.13, 0.08]);  data.addRow(["'09 06:00:00'", 0.03, 0.02]);  data.addRow(["'09 06:30:00'", 0.13, 0.08]);  data.addRow(["'09 07:00:00'", 0.06, 0.10]);  data.addRow(["'09 07:30:00'", 0.15, 0.22]);  data.addRow(["'09 08:00:00'", 0.03, 0.04]);  data.addRow(["'09 08:30:00'", 0.21, 0.11]);  data.addRow(["'09 09:00:00'", 0.07, 0.05]);  data.addRow(["'09 09:30:00'", 0.03, 0.02]);  data.addRow(["'09 10:00:00'", 0.13, 0.15]);  data.addRow(["'09 10:30:00'", 0.07, 0.69]);  data.addRow(["'09 11:00:00'", 0.14, 0.25]);  data.addRow(["'09 11:30:00'", 0.04, 0.12]);  data.addRow(["'09 12:00:00'", 0.15, 0.28]);  data.addRow(["'09 12:30:00'", 0.05, 0.04]);  data.addRow(["'09 13:00:00'", 0.14, 0.10]);  data.addRow(["'09 13:30:00'", 0.03, 0.06]);  data.addRow(["'09 14:00:00'", 0.14, 0.23]);  data.addRow(["'09 14:30:00'", 0.04, 0.08]);  data.addRow(["'09 15:00:00'", 0.13, 0.10]);  data.addRow(["'09 15:30:00'", 0.04, 0.09]);  data.addRow(["'09 16:00:00'", 0.27, 0.18]);  data.addRow(["'09 16:30:00'", 10.80, 0.42]);  data.addRow(["'09 17:00:00'", 0.17, 0.46]);  data.addRow(["'09 17:30:00'", 1.13, 0.57]);  data.addRow(["'09 18:00:00'", 0.61, 1.43]);  data.addRow(["'09 18:30:00'", 0.95, 0.88]);  data.addRow(["'09 19:00:00'", 1.97, 22.82]);  data.addRow(["'09 19:30:00'", 1.39, 0.63]);  data.addRow(["'09 20:00:00'", 0.18, 0.22]);  data.addRow(["'09 20:30:00'", 0.06, 0.09]);  data.addRow(["'09 21:00:00'", 0.15, 0.12]);  data.addRow(["'09 21:30:00'", 0.04, 0.16]);  data.addRow(["'09 22:00:00'", 0.25, 0.18]);  data.addRow(["'09 22:30:00'", 0.07, 0.03]);  data.addRow(["'09 23:00:00'", 0.14, 0.08]);  data.addRow(["'09 23:30:00'", 0.13, 0.63]);  data.addRow(["'10 00:00:00'", 0.18, 0.86]);  data.addRow(["'10 00:30:00'", 0.05, 0.08]);  data.addRow(["'10 01:00:00'", 0.15, 0.10]);  data.addRow(["'10 01:30:00'", 0.05, 0.07]);  data.addRow(["'10 02:00:00'", 0.13, 0.11]);  data.addRow(["'10 02:30:00'", 0.04, 0.23]);  data.addRow(["'10 03:00:00'", 0.13, 0.10]);  data.addRow(["'10 03:30:00'", 0.06, 0.05]);  data.addRow(["'10 04:00:00'", 0.15, 0.08]);  data.addRow(["'10 04:30:00'", 0.03, 0.02]);  data.addRow(["'10 05:00:00'", 0.13, 0.08]);  data.addRow(["'10 05:30:00'", 0.04, 0.08]);  data.addRow(["'10 06:00:00'", 0.13, 0.08]);  data.addRow(["'10 06:30:00'", 0.63, 0.12]);  data.addRow(["'10 07:00:00'", 1.44, 0.36]);  data.addRow(["'10 07:30:00'", 8.51, 3.54]);  data.addRow(["'10 08:00:00'", 4.30, 2.14]);  data.addRow(["'10 08:30:00'", 3.99, 30.60]);  data.addRow(["'10 09:00:00'", 1.94, 17.42]);  data.addRow(["'10 09:30:00'", 2.75, 11.63]);  data.addRow(["'10 10:00:00'", 17.33, 8.10]);  data.addRow(["'10 10:30:00'", 20.15, 11.33]);  data.addRow(["'10 11:00:00'", 11.67, 9.88]);  data.addRow(["'10 11:30:00'", 4.65, 11.62]);  data.addRow(["'10 12:00:00'", 9.83, 17.13]);  data.addRow(["'10 12:30:00'", 1.89, 9.83]);  data.addRow(["'10 13:00:00'", 7.71, 12.08]);  data.addRow(["'10 13:30:00'", 5.09, 23.24]);  data.addRow(["'10 14:00:00'", 7.22, 7.07]);  data.addRow(["'10 14:30:00'", 5.95, 13.65]);  data.addRow(["'10 15:00:00'", 6.25, 12.67]);  data.addRow(["'10 15:30:00'", 2.34, 20.17]);  data.addRow(["'10 16:00:00'", 33.53, 89.84]);  data.addRow(["'10 16:30:00'", 1.72, 14.97]);  data.addRow(["'10 17:00:00'", 2.21, 9.10]);  data.addRow(["'10 17:30:00'", 2.69, 4.67]);  data.addRow(["'10 18:00:00'", 0.73, 1.72]);  data.addRow(["'10 18:30:00'", 2.33, 8.53]);  data.addRow(["'10 19:00:00'", 0.63, 1.76]);  data.addRow(["'10 19:30:00'", 7.89, 2.97]);  data.addRow(["'10 20:00:00'", 1.65, 21.23]);  data.addRow(["'10 20:30:00'", 1.88, 1.19]);  data.addRow(["'10 21:00:00'", 0.50, 0.43]);  data.addRow(["'10 21:30:00'", 0.58, 0.89]);  data.addRow(["'10 22:00:00'", 0.32, 0.51]);  data.addRow(["'10 22:30:00'", 0.07, 0.61]);  data.addRow(["'10 23:00:00'", 0.78, 37.96]);  data.addRow(["'10 23:30:00'", 0.04, 0.04]);  data.addRow(["'11 00:00:00'", 0.15, 0.19]);  data.addRow(["'11 00:30:00'", 0.07, 0.57]);  data.addRow(["'11 01:00:00'", 0.18, 1.11]);  data.addRow(["'11 01:30:00'", 0.04, 0.03]);  data.addRow(["'11 02:00:00'", 0.15, 0.26]);  data.addRow(["'11 02:30:00'", 0.04, 0.11]);  data.addRow(["'11 03:00:00'", 0.14, 0.11]);  data.addRow(["'11 03:30:00'", 0.04, 0.09]);  data.addRow(["'11 04:00:00'", 0.14, 0.12]);  data.addRow(["'11 04:30:00'", 0.03, 0.04]);  data.addRow(["'11 05:00:00'", 0.16, 0.10]);  data.addRow(["'11 05:30:00'", 0.02, 0.03]);  data.addRow(["'11 06:00:00'", 0.13, 0.09]);  data.addRow(["'11 06:30:00'", 0.06, 0.21]);  data.addRow(["'11 07:00:00'", 0.46, 0.41]);  data.addRow(["'11 07:30:00'", 2.74, 1.66]);  data.addRow(["'11 08:00:00'", 2.83, 3.30]);  data.addRow(["'11 08:30:00'", 8.78, 9.24]);  data.addRow(["'11 09:00:00'", 5.80, 24.36]);  data.addRow(["'11 09:30:00'", 11.05, 20.74]);  data.addRow(["'11 10:00:00'", 16.38, 20.62]);  data.addRow(["'11 10:30:00'", 7.03, 8.02]);  data.addRow(["'11 11:00:00'", 12.83, 7.05]);  data.addRow(["'11 11:30:00'", 20.40, 11.29]);  data.addRow(["'11 12:00:00'", 15.92, 12.03]);  data.addRow(["'11 12:30:00'", 5.18, 8.93]);  data.addRow(["'11 13:00:00'", 17.73, 13.67]);  data.addRow(["'11 13:30:00'", 25.05, 13.54]);  data.addRow(["'11 14:00:00'", 12.73, 15.65]);  data.addRow(["'11 14:30:00'", 8.36, 17.91]);  data.addRow(["'11 15:00:00'", 12.66, 6.26]);  data.addRow(["'11 15:30:00'", 10.95, 8.18]);  data.addRow(["'11 16:00:00'", 17.08, 11.84]);  data.addRow(["'11 16:30:00'", 47.81, 16.61]);  data.addRow(["'11 17:00:00'", 1.25, 14.86]);  data.addRow(["'11 17:30:00'", 0.52, 1.65]);  data.addRow(["'11 18:00:00'", 0.58, 2.41]);  data.addRow(["'11 18:30:00'", 0.32, 1.37]);  data.addRow(["'11 19:00:00'", 0.57, 5.29]);  data.addRow(["'11 19:30:00'", 0.66, 30.44]);  data.addRow(["'11 20:00:00'", 0.36, 1.47]);  data.addRow(["'11 20:30:00'", 0.60, 8.81]);  data.addRow(["'11 21:00:00'", 0.41, 0.67]);  data.addRow(["'11 21:30:00'", 0.10, 0.72]);  data.addRow(["'11 22:00:00'", 0.21, 1.06]);  data.addRow(["'11 22:30:00'", 0.13, 0.23]);  data.addRow(["'11 23:00:00'", 0.15, 0.33]);  data.addRow(["'11 23:30:00'", 0.02, 0.03]);  data.addRow(["'12 00:00:00'", 0.13, 0.11]);  data.addRow(["'12 00:30:00'", 0.06, 0.03]);  data.addRow(["'12 01:00:00'", 0.13, 0.19]);  data.addRow(["'12 01:30:00'", 0.02, 0.04]);  data.addRow(["'12 02:00:00'", 0.13, 0.09]);  data.addRow(["'12 02:30:00'", 0.04, 0.03]);  data.addRow(["'12 03:00:00'", 0.15, 0.13]);  data.addRow(["'12 03:30:00'", 0.03, 0.07]);  data.addRow(["'12 04:00:00'", 0.19, 0.08]);  data.addRow(["'12 04:30:00'", 0.02, 0.02]);  data.addRow(["'12 05:00:00'", 0.47, 0.10]);  data.addRow(["'12 05:30:00'", 0.03, 0.61]);  data.addRow(["'12 06:00:00'", 0.16, 0.11]);  data.addRow(["'12 06:30:00'", 0.03, 0.22]);  data.addRow(["'12 07:00:00'", 1.62, 0.47]);  data.addRow(["'12 07:30:00'", 0.93, 0.98]);  data.addRow(["'12 08:00:00'", 1.51, 1.61]);  data.addRow(["'12 08:30:00'", 13.21, 3.42]);  data.addRow(["'12 09:00:00'", 9.67, 9.79]);  data.addRow(["'12 09:30:00'", 2.07, 8.08]);  data.addRow(["'12 10:00:00'", 3.59, 14.37]);  data.addRow(["'12 10:30:00'", 5.27, 7.06]);  data.addRow(["'12 11:00:00'", 4.97, 6.32]);  data.addRow(["'12 11:30:00'", 3.26, 7.06]);  data.addRow(["'12 12:00:00'", 6.39, 9.27]);  data.addRow(["'12 12:30:00'", 2.85, 6.17]);  data.addRow(["'12 13:00:00'", 5.39, 5.67]);  data.addRow(["'12 13:30:00'", 4.46, 11.10]);  data.addRow(["'12 14:00:00'", 3.77, 6.23]);  data.addRow(["'12 14:30:00'", 13.90, 6.40]);  data.addRow(["'12 15:00:00'", 18.90, 24.92]);  data.addRow(["'12 15:30:00'", 3.16, 11.87]);  data.addRow(["'12 16:00:00'", 4.83, 10.49]);  data.addRow(["'12 16:30:00'", 7.42, 6.74]);  data.addRow(["'12 17:00:00'", 18.23, 18.75]);  data.addRow(["'12 17:30:00'", 1.47, 2.36]);  data.addRow(["'12 18:00:00'", 5.40, 1.21]);  data.addRow(["'12 18:30:00'", 0.81, 1.03]);  data.addRow(["'12 19:00:00'", 0.71, 0.88]);  data.addRow(["'12 19:30:00'", 0.16, 0.81]);  data.addRow(["'12 20:00:00'", 0.21, 0.43]);  data.addRow(["'12 20:30:00'", 0.68, 2.07]);  data.addRow(["'12 21:00:00'", 0.43, 1.00]);  data.addRow(["'12 21:30:00'", 0.58, 0.92]);  data.addRow(["'12 22:00:00'", 1.14, 0.46]);  data.addRow(["'12 22:30:00'", 0.61, 0.16]);  data.addRow(["'12 23:00:00'", 0.04, 0.04]);  data.addRow(["'12 23:30:00'", 0.14, 0.16]);  data.addRow(["'13 00:00:00'", 0.02, 0.02]);  data.addRow(["'13 00:30:00'", 0.27, 0.86]);  data.addRow(["'13 01:00:00'", 0.02, 0.04]);  data.addRow(["'13 01:30:00'", 0.13, 0.08]);  data.addRow(["'13 02:00:00'", 0.02, 0.02]);  data.addRow(["'13 02:30:00'", 0.12, 0.08]);  data.addRow(["'13 03:00:00'", 0.02, 0.04]);  data.addRow(["'13 03:30:00'", 0.13, 0.10]);  data.addRow(["'13 04:00:00'", 0.02, 0.06]);  data.addRow(["'13 04:30:00'", 0.12, 0.08]);  data.addRow(["'13 05:00:00'", 0.02, 0.03]);  data.addRow(["'13 05:30:00'", 0.12, 0.08]);  data.addRow(["'13 06:00:00'", 0.02, 0.03]);  data.addRow(["'13 06:30:00'", 0.75, 0.14]);  data.addRow(["'13 07:00:00'", 0.08, 0.38]);  data.addRow(["'13 07:30:00'", 0.42, 1.12]);  data.addRow(["'13 08:00:00'", 36.96, 2.36]);  data.addRow(["'13 08:30:00'", 25.65, 5.50]);  data.addRow(["'13 09:00:00'", 18.29, 7.31]);  data.addRow(["'13 09:30:00'", 4.49, 21.49]);  data.addRow(["'13 10:00:00'", 12.54, 4.74]);  data.addRow(["'13 10:30:00'", 9.62, 4.81]);  data.addRow(["'13 11:00:00'", 20.98, 6.74]);  data.addRow(["'13 11:30:00'", 4.22, 8.50]);  data.addRow(["'13 12:00:00'", 4.10, 8.92]);  data.addRow(["'13 12:30:00'", 15.46, 10.94]);  data.addRow(["'13 13:00:00'", 3.86, 9.36]);  data.addRow(["'13 13:30:00'", 3.29, 12.64]);  data.addRow(["'13 14:00:00'", 5.30, 4.47]);  data.addRow(["'13 14:30:00'", 5.95, 8.15]);  data.addRow(["'13 15:00:00'", 3.12, 4.35]);  data.addRow(["'13 15:30:00'", 2.73, 4.42]);  data.addRow(["'13 16:00:00'", 2.17, 3.90]);  data.addRow(["'13 16:30:00'", 5.05, 6.17]);  data.addRow(["'13 17:00:00'", 31.81, 29.07]);  data.addRow(["'13 17:30:00'", 0.42, 1.52]);  data.addRow(["'13 18:00:00'", 0.28, 0.80]);  data.addRow(["'13 18:30:00'", 0.37, 0.72]);  data.addRow(["'13 19:00:00'", 0.54, 0.46]);  data.addRow(["'13 19:30:00'", 2.74, 0.40]);  data.addRow(["'13 20:00:00'", 1.27, 1.37]);  data.addRow(["'13 20:30:00'", 1.35, 1.86]);  data.addRow(["'13 21:00:00'", 2.52, 0.46]);  data.addRow(["'13 21:30:00'", 0.15, 0.14]);  data.addRow(["'13 22:00:00'", 0.04, 0.17]);  data.addRow(["'13 22:30:00'", 0.17, 0.18]);  data.addRow(["'13 23:00:00'", 0.09, 0.12]);  data.addRow(["'13 23:30:00'", 0.02, 0.08]);  data.addRow(["'14 00:00:00'", 0.13, 0.20]);  data.addRow(["'14 00:30:00'", 0.07, 0.12]);  data.addRow(["'14 01:00:00'", 0.12, 0.25]);  data.addRow(["'14 01:30:00'", 0.01, 0.06]);  data.addRow(["'14 02:00:00'", 0.12, 0.09]);  data.addRow(["'14 02:30:00'", 0.01, 0.04]);  data.addRow(["'14 03:00:00'", 0.13, 0.20]);  data.addRow(["'14 03:30:00'", 0.02, 0.09]);  data.addRow(["'14 04:00:00'", 0.17, 0.11]);  data.addRow(["'14 04:30:00'", 0.01, 0.01]);  data.addRow(["'14 05:00:00'", 0.12, 0.09]);  data.addRow(["'14 05:30:00'", 0.01, 0.02]);  data.addRow(["'14 06:00:00'", 0.11, 0.09]);  data.addRow(["'14 06:30:00'", 0.02, 0.02]);  data.addRow(["'14 07:00:00'", 0.14, 0.47]);  data.addRow(["'14 07:30:00'", 0.24, 4.02]);  data.addRow(["'14 08:00:00'", 2.10, 7.78]);  data.addRow(["'14 08:30:00'", 8.98, 3.28]);  data.addRow(["'14 09:00:00'", 3.55, 3.81]);  data.addRow(["'14 09:30:00'", 3.49, 4.19]);  data.addRow(["'14 10:00:00'", 5.76, 4.53]);  data.addRow(["'14 10:30:00'", 7.63, 20.56]);  data.addRow(["'14 11:00:00'", 6.44, 10.19]);  data.addRow(["'14 11:30:00'", 9.48, 12.90]);  data.addRow(["'14 12:00:00'", 9.06, 5.19]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='CAYEY Traffic Network Max: 289.32 MB Min: 5.80 KB'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='289'

	
        
      
	