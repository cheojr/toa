
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'07 12:30:00'", 16.19, 16.90]);  data.addRow(["'07 13:00:00'", 18.90, 19.79]);  data.addRow(["'07 13:30:00'", 19.64, 20.62]);  data.addRow(["'07 14:00:00'", 20.21, 21.28]);  data.addRow(["'07 14:30:00'", 18.24, 19.05]);  data.addRow(["'07 15:00:00'", 18.20, 19.17]);  data.addRow(["'07 15:30:00'", 16.82, 17.52]);  data.addRow(["'07 16:00:00'", 15.01, 15.52]);  data.addRow(["'07 16:30:00'", 13.08, 13.32]);  data.addRow(["'07 17:00:00'", 11.75, 11.68]);  data.addRow(["'07 17:30:00'", 8.54, 8.23]);  data.addRow(["'07 18:00:00'", 7.80, 7.43]);  data.addRow(["'07 18:30:00'", 7.12, 6.62]);  data.addRow(["'07 19:00:00'", 6.56, 6.07]);  data.addRow(["'07 19:30:00'", 6.07, 5.51]);  data.addRow(["'07 20:00:00'", 5.55, 4.99]);  data.addRow(["'07 20:30:00'", 5.46, 4.97]);  data.addRow(["'07 21:00:00'", 5.48, 4.96]);  data.addRow(["'07 21:30:00'", 4.96, 4.43]);  data.addRow(["'07 22:00:00'", 5.02, 4.51]);  data.addRow(["'07 22:30:00'", 4.93, 4.41]);  data.addRow(["'07 23:00:00'", 5.01, 4.40]);  data.addRow(["'07 23:30:00'", 4.41, 3.88]);  data.addRow(["'08 00:00:00'", 5.12, 4.60]);  data.addRow(["'08 00:30:00'", 4.48, 3.66]);  data.addRow(["'08 01:00:00'", 4.04, 3.29]);  data.addRow(["'08 01:30:00'", 3.91, 3.24]);  data.addRow(["'08 02:00:00'", 3.55, 2.81]);  data.addRow(["'08 02:30:00'", 3.52, 2.74]);  data.addRow(["'08 03:00:00'", 3.45, 2.70]);  data.addRow(["'08 03:30:00'", 3.73, 2.95]);  data.addRow(["'08 04:00:00'", 3.75, 2.93]);  data.addRow(["'08 04:30:00'", 3.51, 2.74]);  data.addRow(["'08 05:00:00'", 5.07, 2.95]);  data.addRow(["'08 05:30:00'", 3.45, 2.63]);  data.addRow(["'08 06:00:00'", 3.45, 2.64]);  data.addRow(["'08 06:30:00'", 3.34, 2.52]);  data.addRow(["'08 07:00:00'", 3.38, 2.63]);  data.addRow(["'08 07:30:00'", 3.56, 2.81]);  data.addRow(["'08 08:00:00'", 3.76, 3.02]);  data.addRow(["'08 08:30:00'", 4.21, 3.49]);  data.addRow(["'08 09:00:00'", 4.76, 4.09]);  data.addRow(["'08 09:30:00'", 4.96, 4.38]);  data.addRow(["'08 10:00:00'", 5.36, 4.75]);  data.addRow(["'08 10:30:00'", 5.68, 5.04]);  data.addRow(["'08 11:00:00'", 5.96, 5.46]);  data.addRow(["'08 11:30:00'", 5.41, 4.87]);  data.addRow(["'08 12:00:00'", 6.16, 5.63]);  data.addRow(["'08 12:30:00'", 6.10, 5.34]);  data.addRow(["'08 13:00:00'", 6.26, 5.86]);  data.addRow(["'08 13:30:00'", 6.01, 5.53]);  data.addRow(["'08 14:00:00'", 6.28, 5.68]);  data.addRow(["'08 14:30:00'", 6.05, 5.52]);  data.addRow(["'08 15:00:00'", 6.07, 5.65]);  data.addRow(["'08 15:30:00'", 6.08, 5.69]);  data.addRow(["'08 16:00:00'", 5.70, 5.36]);  data.addRow(["'08 16:30:00'", 5.51, 5.11]);  data.addRow(["'08 17:00:00'", 5.34, 4.81]);  data.addRow(["'08 17:30:00'", 5.15, 4.66]);  data.addRow(["'08 18:00:00'", 5.33, 4.74]);  data.addRow(["'08 18:30:00'", 4.59, 3.97]);  data.addRow(["'08 19:00:00'", 4.74, 4.21]);  data.addRow(["'08 19:30:00'", 4.44, 3.95]);  data.addRow(["'08 20:00:00'", 4.69, 4.17]);  data.addRow(["'08 20:30:00'", 4.47, 3.93]);  data.addRow(["'08 21:00:00'", 5.96, 4.15]);  data.addRow(["'08 21:30:00'", 4.19, 3.66]);  data.addRow(["'08 22:00:00'", 4.46, 3.90]);  data.addRow(["'08 22:30:00'", 4.49, 3.97]);  data.addRow(["'08 23:00:00'", 4.29, 3.77]);  data.addRow(["'08 23:30:00'", 4.14, 3.61]);  data.addRow(["'09 00:00:00'", 4.38, 3.77]);  data.addRow(["'09 00:30:00'", 4.02, 3.44]);  data.addRow(["'09 01:00:00'", 3.79, 3.19]);  data.addRow(["'09 01:30:00'", 3.58, 2.91]);  data.addRow(["'09 02:00:00'", 3.58, 2.93]);  data.addRow(["'09 02:30:00'", 3.16, 2.47]);  data.addRow(["'09 03:00:00'", 3.21, 2.48]);  data.addRow(["'09 03:30:00'", 3.19, 2.39]);  data.addRow(["'09 04:00:00'", 3.44, 2.60]);  data.addRow(["'09 04:30:00'", 3.20, 2.37]);  data.addRow(["'09 05:00:00'", 3.12, 2.38]);  data.addRow(["'09 05:30:00'", 3.20, 2.45]);  data.addRow(["'09 06:00:00'", 3.19, 2.43]);  data.addRow(["'09 06:30:00'", 3.14, 2.34]);  data.addRow(["'09 07:00:00'", 3.26, 2.52]);  data.addRow(["'09 07:30:00'", 3.15, 2.32]);  data.addRow(["'09 08:00:00'", 3.44, 2.64]);  data.addRow(["'09 08:30:00'", 3.43, 2.63]);  data.addRow(["'09 09:00:00'", 3.52, 2.78]);  data.addRow(["'09 09:30:00'", 3.59, 2.84]);  data.addRow(["'09 10:00:00'", 3.72, 2.99]);  data.addRow(["'09 10:30:00'", 4.03, 4.48]);  data.addRow(["'09 11:00:00'", 4.04, 3.50]);  data.addRow(["'09 11:30:00'", 3.98, 3.39]);  data.addRow(["'09 12:00:00'", 4.50, 3.90]);  data.addRow(["'09 12:30:00'", 4.71, 4.16]);  data.addRow(["'09 13:00:00'", 5.01, 4.40]);  data.addRow(["'09 13:30:00'", 4.74, 4.16]);  data.addRow(["'09 14:00:00'", 4.98, 4.45]);  data.addRow(["'09 14:30:00'", 5.84, 5.09]);  data.addRow(["'09 15:00:00'", 5.67, 4.63]);  data.addRow(["'09 15:30:00'", 5.36, 4.53]);  data.addRow(["'09 16:00:00'", 5.62, 5.21]);  data.addRow(["'09 16:30:00'", 5.86, 5.64]);  data.addRow(["'09 17:00:00'", 5.55, 5.18]);  data.addRow(["'09 17:30:00'", 6.10, 5.81]);  data.addRow(["'09 18:00:00'", 5.51, 5.15]);  data.addRow(["'09 18:30:00'", 5.73, 5.35]);  data.addRow(["'09 19:00:00'", 5.84, 5.56]);  data.addRow(["'09 19:30:00'", 5.54, 5.13]);  data.addRow(["'09 20:00:00'", 5.40, 4.87]);  data.addRow(["'09 20:30:00'", 5.69, 5.29]);  data.addRow(["'09 21:00:00'", 5.38, 4.92]);  data.addRow(["'09 21:30:00'", 5.30, 4.91]);  data.addRow(["'09 22:00:00'", 5.66, 5.16]);  data.addRow(["'09 22:30:00'", 4.93, 4.44]);  data.addRow(["'09 23:00:00'", 4.91, 4.40]);  data.addRow(["'09 23:30:00'", 4.98, 4.47]);  data.addRow(["'10 00:00:00'", 4.88, 4.41]);  data.addRow(["'10 00:30:00'", 4.28, 3.78]);  data.addRow(["'10 01:00:00'", 4.19, 3.90]);  data.addRow(["'10 01:30:00'", 3.58, 3.55]);  data.addRow(["'10 02:00:00'", 3.66, 3.43]);  data.addRow(["'10 02:30:00'", 3.52, 2.85]);  data.addRow(["'10 03:00:00'", 3.69, 2.92]);  data.addRow(["'10 03:30:00'", 3.20, 2.41]);  data.addRow(["'10 04:00:00'", 3.40, 2.66]);  data.addRow(["'10 04:30:00'", 3.31, 2.55]);  data.addRow(["'10 05:00:00'", 3.24, 2.54]);  data.addRow(["'10 05:30:00'", 3.31, 2.58]);  data.addRow(["'10 06:00:00'", 3.73, 3.03]);  data.addRow(["'10 06:30:00'", 4.23, 3.54]);  data.addRow(["'10 07:00:00'", 7.14, 6.69]);  data.addRow(["'10 07:30:00'", 11.07, 10.97]);  data.addRow(["'10 08:00:00'", 13.12, 13.41]);  data.addRow(["'10 08:30:00'", 16.43, 17.15]);  data.addRow(["'10 09:00:00'", 23.71, 24.79]);  data.addRow(["'10 09:30:00'", 25.58, 26.85]);  data.addRow(["'10 10:00:00'", 29.16, 30.77]);  data.addRow(["'10 10:30:00'", 30.09, 31.80]);  data.addRow(["'10 11:00:00'", 31.20, 32.90]);  data.addRow(["'10 11:30:00'", 30.53, 31.99]);  data.addRow(["'10 12:00:00'", 29.97, 31.50]);  data.addRow(["'10 12:30:00'", 28.70, 29.89]);  data.addRow(["'10 13:00:00'", 30.28, 31.64]);  data.addRow(["'10 13:30:00'", 30.88, 32.71]);  data.addRow(["'10 14:00:00'", 31.34, 33.21]);  data.addRow(["'10 14:30:00'", 28.61, 30.22]);  data.addRow(["'10 15:00:00'", 28.69, 30.41]);  data.addRow(["'10 15:30:00'", 28.62, 30.12]);  data.addRow(["'10 16:00:00'", 25.66, 26.89]);  data.addRow(["'10 16:30:00'", 23.02, 24.01]);  data.addRow(["'10 17:00:00'", 18.01, 18.64]);  data.addRow(["'10 17:30:00'", 14.38, 14.77]);  data.addRow(["'10 18:00:00'", 12.24, 12.47]);  data.addRow(["'10 18:30:00'", 11.69, 11.77]);  data.addRow(["'10 19:00:00'", 11.82, 11.72]);  data.addRow(["'10 19:30:00'", 10.12, 9.99]);  data.addRow(["'10 20:00:00'", 9.94, 9.81]);  data.addRow(["'10 20:30:00'", 9.25, 9.04]);  data.addRow(["'10 21:00:00'", 8.54, 8.11]);  data.addRow(["'10 21:30:00'", 7.33, 6.88]);  data.addRow(["'10 22:00:00'", 7.34, 6.85]);  data.addRow(["'10 22:30:00'", 6.87, 6.36]);  data.addRow(["'10 23:00:00'", 6.65, 5.95]);  data.addRow(["'10 23:30:00'", 5.49, 4.91]);  data.addRow(["'11 00:00:00'", 5.07, 4.51]);  data.addRow(["'11 00:30:00'", 4.74, 4.26]);  data.addRow(["'11 01:00:00'", 4.76, 4.28]);  data.addRow(["'11 01:30:00'", 4.09, 3.61]);  data.addRow(["'11 02:00:00'", 3.80, 3.20]);  data.addRow(["'11 02:30:00'", 3.47, 2.79]);  data.addRow(["'11 03:00:00'", 3.32, 2.66]);  data.addRow(["'11 03:30:00'", 3.18, 2.63]);  data.addRow(["'11 04:00:00'", 3.27, 2.53]);  data.addRow(["'11 04:30:00'", 2.87, 2.21]);  data.addRow(["'11 05:00:00'", 3.08, 2.33]);  data.addRow(["'11 05:30:00'", 3.21, 2.56]);  data.addRow(["'11 06:00:00'", 3.88, 3.16]);  data.addRow(["'11 06:30:00'", 4.29, 3.76]);  data.addRow(["'11 07:00:00'", 6.77, 6.38]);  data.addRow(["'11 07:30:00'", 11.97, 12.06]);  data.addRow(["'11 08:00:00'", 13.84, 14.22]);  data.addRow(["'11 08:30:00'", 17.50, 18.33]);  data.addRow(["'11 09:00:00'", 24.40, 25.68]);  data.addRow(["'11 09:30:00'", 25.78, 27.39]);  data.addRow(["'11 10:00:00'", 27.15, 28.72]);  data.addRow(["'11 10:30:00'", 27.79, 29.42]);  data.addRow(["'11 11:00:00'", 28.46, 30.16]);  data.addRow(["'11 11:30:00'", 26.47, 27.93]);  data.addRow(["'11 12:00:00'", 28.59, 28.66]);  data.addRow(["'11 12:30:00'", 26.54, 27.82]);  data.addRow(["'11 13:00:00'", 27.23, 28.78]);  data.addRow(["'11 13:30:00'", 28.13, 29.70]);  data.addRow(["'11 14:00:00'", 28.50, 30.42]);  data.addRow(["'11 14:30:00'", 29.28, 31.09]);  data.addRow(["'11 15:00:00'", 30.06, 32.05]);  data.addRow(["'11 15:30:00'", 28.94, 30.59]);  data.addRow(["'11 16:00:00'", 26.88, 28.28]);  data.addRow(["'11 16:30:00'", 23.26, 24.30]);  data.addRow(["'11 17:00:00'", 17.87, 18.49]);  data.addRow(["'11 17:30:00'", 15.55, 15.98]);  data.addRow(["'11 18:00:00'", 13.59, 13.91]);  data.addRow(["'11 18:30:00'", 12.73, 12.94]);  data.addRow(["'11 19:00:00'", 12.80, 13.28]);  data.addRow(["'11 19:30:00'", 12.04, 12.21]);  data.addRow(["'11 20:00:00'", 11.32, 11.37]);  data.addRow(["'11 20:30:00'", 10.48, 10.54]);  data.addRow(["'11 21:00:00'", 8.54, 8.38]);  data.addRow(["'11 21:30:00'", 7.76, 7.68]);  data.addRow(["'11 22:00:00'", 7.33, 6.91]);  data.addRow(["'11 22:30:00'", 6.65, 6.30]);  data.addRow(["'11 23:00:00'", 6.50, 6.09]);  data.addRow(["'11 23:30:00'", 6.13, 5.67]);  data.addRow(["'12 00:00:00'", 5.77, 5.42]);  data.addRow(["'12 00:30:00'", 5.34, 4.98]);  data.addRow(["'12 01:00:00'", 4.89, 4.56]);  data.addRow(["'12 01:30:00'", 4.93, 4.30]);  data.addRow(["'12 02:00:00'", 4.49, 4.07]);  data.addRow(["'12 02:30:00'", 3.84, 3.35]);  data.addRow(["'12 03:00:00'", 3.96, 3.51]);  data.addRow(["'12 03:30:00'", 3.73, 3.12]);  data.addRow(["'12 04:00:00'", 3.46, 3.00]);  data.addRow(["'12 04:30:00'", 3.95, 3.06]);  data.addRow(["'12 05:00:00'", 3.56, 2.86]);  data.addRow(["'12 05:30:00'", 3.56, 2.98]);  data.addRow(["'12 06:00:00'", 4.13, 3.51]);  data.addRow(["'12 06:30:00'", 4.79, 4.25]);  data.addRow(["'12 07:00:00'", 7.15, 6.86]);  data.addRow(["'12 07:30:00'", 11.59, 11.49]);  data.addRow(["'12 08:00:00'", 13.91, 14.47]);  data.addRow(["'12 08:30:00'", 17.09, 17.74]);  data.addRow(["'12 09:00:00'", 23.15, 24.58]);  data.addRow(["'12 09:30:00'", 25.79, 27.20]);  data.addRow(["'12 10:00:00'", 28.35, 29.74]);  data.addRow(["'12 10:30:00'", 29.72, 31.26]);  data.addRow(["'12 11:00:00'", 30.09, 32.25]);  data.addRow(["'12 11:30:00'", 31.67, 35.09]);  data.addRow(["'12 12:00:00'", 29.15, 32.55]);  data.addRow(["'12 12:30:00'", 27.68, 30.65]);  data.addRow(["'12 13:00:00'", 29.65, 33.03]);  data.addRow(["'12 13:30:00'", 30.10, 33.44]);  data.addRow(["'12 14:00:00'", 30.94, 34.40]);  data.addRow(["'12 14:30:00'", 29.99, 33.13]);  data.addRow(["'12 15:00:00'", 30.65, 33.87]);  data.addRow(["'12 15:30:00'", 28.60, 31.61]);  data.addRow(["'12 16:00:00'", 25.52, 28.11]);  data.addRow(["'12 16:30:00'", 21.97, 24.49]);  data.addRow(["'12 17:00:00'", 17.36, 18.87]);  data.addRow(["'12 17:30:00'", 15.37, 16.93]);  data.addRow(["'12 18:00:00'", 12.40, 13.66]);  data.addRow(["'12 18:30:00'", 11.64, 12.83]);  data.addRow(["'12 19:00:00'", 11.21, 12.24]);  data.addRow(["'12 19:30:00'", 10.32, 11.47]);  data.addRow(["'12 20:00:00'", 8.76, 9.44]);  data.addRow(["'12 20:30:00'", 8.88, 9.50]);  data.addRow(["'12 21:00:00'", 7.78, 7.95]);  data.addRow(["'12 21:30:00'", 7.18, 6.39]);  data.addRow(["'12 22:00:00'", 5.88, 5.60]);  data.addRow(["'12 22:30:00'", 5.76, 5.46]);  data.addRow(["'12 23:00:00'", 5.16, 4.75]);  data.addRow(["'12 23:30:00'", 5.62, 5.32]);  data.addRow(["'13 00:00:00'", 5.36, 4.88]);  data.addRow(["'13 00:30:00'", 5.43, 5.08]);  data.addRow(["'13 01:00:00'", 4.44, 3.94]);  data.addRow(["'13 01:30:00'", 4.54, 4.21]);  data.addRow(["'13 02:00:00'", 3.98, 3.42]);  data.addRow(["'13 02:30:00'", 4.09, 3.55]);  data.addRow(["'13 03:00:00'", 4.19, 3.73]);  data.addRow(["'13 03:30:00'", 4.26, 3.66]);  data.addRow(["'13 04:00:00'", 4.19, 3.74]);  data.addRow(["'13 04:30:00'", 3.90, 3.34]);  data.addRow(["'13 05:00:00'", 3.88, 3.40]);  data.addRow(["'13 05:30:00'", 3.99, 3.43]);  data.addRow(["'13 06:00:00'", 3.92, 3.36]);  data.addRow(["'13 06:30:00'", 5.19, 4.83]);  data.addRow(["'13 07:00:00'", 6.81, 6.62]);  data.addRow(["'13 07:30:00'", 9.16, 9.38]);  data.addRow(["'13 08:00:00'", 12.25, 12.57]);  data.addRow(["'13 08:30:00'", 19.64, 20.75]);  data.addRow(["'13 09:00:00'", 22.78, 23.99]);  data.addRow(["'13 09:30:00'", 24.93, 25.91]);  data.addRow(["'13 10:00:00'", 25.61, 26.67]);  data.addRow(["'13 10:30:00'", 27.04, 28.36]);  data.addRow(["'13 11:00:00'", 25.87, 27.04]);  data.addRow(["'13 11:30:00'", 24.63, 25.57]);  data.addRow(["'13 12:00:00'", 24.49, 25.63]);  data.addRow(["'13 12:30:00'", 25.50, 26.82]);  data.addRow(["'13 13:00:00'", 25.54, 27.02]);  data.addRow(["'13 13:30:00'", 27.78, 29.09]);  data.addRow(["'13 14:00:00'", 26.80, 28.03]);  data.addRow(["'13 14:30:00'", 27.89, 29.16]);  data.addRow(["'13 15:00:00'", 26.79, 27.83]);  data.addRow(["'13 15:30:00'", 25.90, 26.99]);  data.addRow(["'13 16:00:00'", 27.98, 25.10]);  data.addRow(["'13 16:30:00'", 22.20, 23.22]);  data.addRow(["'13 17:00:00'", 17.06, 17.51]);  data.addRow(["'13 17:30:00'", 14.48, 14.69]);  data.addRow(["'13 18:00:00'", 11.71, 11.79]);  data.addRow(["'13 18:30:00'", 11.06, 11.24]);  data.addRow(["'13 19:00:00'", 9.13, 9.22]);  data.addRow(["'13 19:30:00'", 8.79, 8.81]);  data.addRow(["'13 20:00:00'", 7.50, 7.37]);  data.addRow(["'13 20:30:00'", 7.65, 7.58]);  data.addRow(["'13 21:00:00'", 7.13, 6.93]);  data.addRow(["'13 21:30:00'", 6.33, 6.02]);  data.addRow(["'13 22:00:00'", 5.99, 5.62]);  data.addRow(["'13 22:30:00'", 5.36, 4.82]);  data.addRow(["'13 23:00:00'", 5.71, 5.05]);  data.addRow(["'13 23:30:00'", 5.05, 4.31]);  data.addRow(["'14 00:00:00'", 5.16, 4.46]);  data.addRow(["'14 00:30:00'", 5.09, 4.39]);  data.addRow(["'14 01:00:00'", 5.07, 4.40]);  data.addRow(["'14 01:30:00'", 4.94, 4.25]);  data.addRow(["'14 02:00:00'", 4.61, 3.86]);  data.addRow(["'14 02:30:00'", 4.08, 3.33]);  data.addRow(["'14 03:00:00'", 3.95, 3.14]);  data.addRow(["'14 03:30:00'", 5.65, 5.39]);  data.addRow(["'14 04:00:00'", 5.19, 4.73]);  data.addRow(["'14 04:30:00'", 3.73, 3.03]);  data.addRow(["'14 05:00:00'", 3.85, 3.05]);  data.addRow(["'14 05:30:00'", 4.11, 3.28]);  data.addRow(["'14 06:00:00'", 4.19, 3.45]);  data.addRow(["'14 06:30:00'", 4.31, 3.59]);  data.addRow(["'14 07:00:00'", 5.57, 4.97]);  data.addRow(["'14 07:30:00'", 7.10, 6.71]);  data.addRow(["'14 08:00:00'", 8.93, 8.83]);  data.addRow(["'14 08:30:00'", 13.92, 14.10]);  data.addRow(["'14 09:00:00'", 17.81, 18.50]);  data.addRow(["'14 09:30:00'", 20.67, 21.58]);  data.addRow(["'14 10:00:00'", 21.01, 21.84]);  data.addRow(["'14 10:30:00'", 21.32, 22.11]);  data.addRow(["'14 11:00:00'", 23.00, 24.02]);  data.addRow(["'14 11:30:00'", 21.86, 22.52]);  data.addRow(["'14 12:00:00'", 17.28, 17.89]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Flows Max: 48.94 KB Min: 1.84 KB'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='48'

	
        
      
	