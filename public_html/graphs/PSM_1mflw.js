
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'01 17 14:00:00'", 4.43, 4.18]);  data.addRow(["'01 17 16:00:00'", 4.50, 4.28]);  data.addRow(["'01 17 18:00:00'", 3.23, 3.04]);  data.addRow(["'01 17 20:00:00'", 1.65, 1.61]);  data.addRow(["'01 17 22:00:00'", 1.47, 1.42]);  data.addRow(["'01 18 00:00:00'", 1.24, 1.20]);  data.addRow(["'01 18 02:00:00'", 0.98, 0.95]);  data.addRow(["'01 18 04:00:00'", 0.89, 0.85]);  data.addRow(["'01 18 06:00:00'", 0.91, 0.88]);  data.addRow(["'01 18 08:00:00'", 0.89, 0.86]);  data.addRow(["'01 18 10:00:00'", 1.05, 1.02]);  data.addRow(["'01 18 12:00:00'", 2.10, 1.79]);  data.addRow(["'01 18 14:00:00'", 2.20, 1.96]);  data.addRow(["'01 18 16:00:00'", 1.69, 1.65]);  data.addRow(["'01 18 18:00:00'", 1.75, 1.71]);  data.addRow(["'01 18 20:00:00'", 1.69, 1.61]);  data.addRow(["'01 18 22:00:00'", 1.50, 1.45]);  data.addRow(["'01 19 00:00:00'", 1.47, 1.43]);  data.addRow(["'01 19 02:00:00'", 0.97, 0.96]);  data.addRow(["'01 19 04:00:00'", 0.76, 0.73]);  data.addRow(["'01 19 06:00:00'", 0.75, 0.72]);  data.addRow(["'01 19 08:00:00'", 0.76, 0.73]);  data.addRow(["'01 19 10:00:00'", 1.40, 1.32]);  data.addRow(["'01 19 12:00:00'", 1.75, 1.65]);  data.addRow(["'01 19 14:00:00'", 1.97, 1.89]);  data.addRow(["'01 19 16:00:00'", 2.04, 1.95]);  data.addRow(["'01 19 18:00:00'", 1.89, 1.79]);  data.addRow(["'01 19 20:00:00'", 1.61, 1.55]);  data.addRow(["'01 19 22:00:00'", 1.45, 1.44]);  data.addRow(["'01 20 00:00:00'", 1.35, 1.33]);  data.addRow(["'01 20 02:00:00'", 0.97, 0.97]);  data.addRow(["'01 20 04:00:00'", 0.67, 0.66]);  data.addRow(["'01 20 06:00:00'", 0.60, 0.58]);  data.addRow(["'01 20 08:00:00'", 1.30, 1.25]);  data.addRow(["'01 20 10:00:00'", 5.46, 5.21]);  data.addRow(["'01 20 12:00:00'", 7.23, 6.87]);  data.addRow(["'01 20 14:00:00'", 7.27, 6.79]);  data.addRow(["'01 20 16:00:00'", 8.09, 7.88]);  data.addRow(["'01 20 18:00:00'", 5.12, 5.14]);  data.addRow(["'01 20 20:00:00'", 4.21, 4.43]);  data.addRow(["'01 20 22:00:00'", 2.88, 3.05]);  data.addRow(["'01 21 00:00:00'", 2.03, 2.04]);  data.addRow(["'01 21 02:00:00'", 1.22, 1.22]);  data.addRow(["'01 21 04:00:00'", 0.95, 0.95]);  data.addRow(["'01 21 06:00:00'", 0.93, 0.92]);  data.addRow(["'01 21 08:00:00'", 1.45, 1.40]);  data.addRow(["'01 21 10:00:00'", 4.98, 4.69]);  data.addRow(["'01 21 12:00:00'", 7.04, 6.47]);  data.addRow(["'01 21 14:00:00'", 7.39, 7.71]);  data.addRow(["'01 21 16:00:00'", 7.01, 8.38]);  data.addRow(["'01 21 18:00:00'", 4.84, 5.71]);  data.addRow(["'01 21 20:00:00'", 4.01, 3.97]);  data.addRow(["'01 21 22:00:00'", 2.98, 2.93]);  data.addRow(["'01 22 00:00:00'", 2.54, 2.48]);  data.addRow(["'01 22 02:00:00'", 1.44, 1.44]);  data.addRow(["'01 22 04:00:00'", 1.11, 1.12]);  data.addRow(["'01 22 06:00:00'", 1.08, 1.09]);  data.addRow(["'01 22 08:00:00'", 1.63, 1.60]);  data.addRow(["'01 22 10:00:00'", 5.53, 5.20]);  data.addRow(["'01 22 12:00:00'", 7.73, 8.62]);  data.addRow(["'01 22 14:00:00'", 6.67, 8.05]);  data.addRow(["'01 22 16:00:00'", 8.19, 9.19]);  data.addRow(["'01 22 18:00:00'", 5.56, 6.74]);  data.addRow(["'01 22 20:00:00'", 4.00, 4.11]);  data.addRow(["'01 22 22:00:00'", 2.61, 2.67]);  data.addRow(["'01 23 00:00:00'", 1.85, 1.84]);  data.addRow(["'01 23 02:00:00'", 1.21, 1.23]);  data.addRow(["'01 23 04:00:00'", 1.10, 1.11]);  data.addRow(["'01 23 06:00:00'", 0.98, 1.00]);  data.addRow(["'01 23 08:00:00'", 1.61, 1.57]);  data.addRow(["'01 23 10:00:00'", 4.86, 4.58]);  data.addRow(["'01 23 12:00:00'", 5.77, 5.47]);  data.addRow(["'01 23 14:00:00'", 5.86, 5.47]);  data.addRow(["'01 23 16:00:00'", 6.81, 7.17]);  data.addRow(["'01 23 18:00:00'", 4.14, 4.97]);  data.addRow(["'01 23 20:00:00'", 2.45, 2.57]);  data.addRow(["'01 23 22:00:00'", 1.70, 1.70]);  data.addRow(["'01 24 00:00:00'", 1.46, 1.44]);  data.addRow(["'01 24 02:00:00'", 1.01, 1.00]);  data.addRow(["'01 24 04:00:00'", 0.84, 0.86]);  data.addRow(["'01 24 06:00:00'", 0.87, 0.87]);  data.addRow(["'01 24 08:00:00'", 1.53, 1.55]);  data.addRow(["'01 24 10:00:00'", 3.83, 3.67]);  data.addRow(["'01 24 12:00:00'", 4.96, 4.70]);  data.addRow(["'01 24 14:00:00'", 4.37, 4.20]);  data.addRow(["'01 24 16:00:00'", 4.69, 4.54]);  data.addRow(["'01 24 18:00:00'", 3.52, 3.45]);  data.addRow(["'01 24 20:00:00'", 2.56, 2.49]);  data.addRow(["'01 24 22:00:00'", 1.91, 1.90]);  data.addRow(["'01 25 00:00:00'", 1.77, 1.75]);  data.addRow(["'01 25 02:00:00'", 1.09, 1.11]);  data.addRow(["'01 25 04:00:00'", 0.77, 0.80]);  data.addRow(["'01 25 06:00:00'", 0.75, 0.77]);  data.addRow(["'01 25 08:00:00'", 0.73, 0.76]);  data.addRow(["'01 25 10:00:00'", 1.03, 1.05]);  data.addRow(["'01 25 12:00:00'", 1.50, 1.49]);  data.addRow(["'01 25 14:00:00'", 2.10, 2.07]);  data.addRow(["'01 25 16:00:00'", 2.09, 2.05]);  data.addRow(["'01 25 18:00:00'", 1.94, 1.94]);  data.addRow(["'01 25 20:00:00'", 1.69, 1.69]);  data.addRow(["'01 25 22:00:00'", 1.79, 1.78]);  data.addRow(["'01 26 00:00:00'", 1.74, 1.71]);  data.addRow(["'01 26 02:00:00'", 1.00, 1.01]);  data.addRow(["'01 26 04:00:00'", 0.79, 0.81]);  data.addRow(["'01 26 06:00:00'", 0.59, 0.60]);  data.addRow(["'01 26 08:00:00'", 0.60, 0.63]);  data.addRow(["'01 26 10:00:00'", 0.92, 0.95]);  data.addRow(["'01 26 12:00:00'", 1.42, 1.43]);  data.addRow(["'01 26 14:00:00'", 2.06, 2.01]);  data.addRow(["'01 26 16:00:00'", 1.96, 1.92]);  data.addRow(["'01 26 18:00:00'", 2.17, 2.12]);  data.addRow(["'01 26 20:00:00'", 2.21, 2.22]);  data.addRow(["'01 26 22:00:00'", 2.11, 2.11]);  data.addRow(["'01 27 00:00:00'", 1.66, 1.70]);  data.addRow(["'01 27 02:00:00'", 1.11, 1.17]);  data.addRow(["'01 27 04:00:00'", 0.76, 0.82]);  data.addRow(["'01 27 06:00:00'", 0.70, 0.76]);  data.addRow(["'01 27 08:00:00'", 1.36, 1.38]);  data.addRow(["'01 27 10:00:00'", 5.35, 4.97]);  data.addRow(["'01 27 12:00:00'", 7.22, 7.02]);  data.addRow(["'01 27 14:00:00'", 7.78, 7.45]);  data.addRow(["'01 27 16:00:00'", 8.04, 8.90]);  data.addRow(["'01 27 18:00:00'", 5.83, 5.71]);  data.addRow(["'01 27 20:00:00'", 4.83, 4.68]);  data.addRow(["'01 27 22:00:00'", 3.52, 3.43]);  data.addRow(["'01 28 00:00:00'", 2.38, 2.27]);  data.addRow(["'01 28 02:00:00'", 1.41, 1.37]);  data.addRow(["'01 28 04:00:00'", 1.03, 1.03]);  data.addRow(["'01 28 06:00:00'", 1.02, 0.98]);  data.addRow(["'01 28 08:00:00'", 1.81, 1.97]);  data.addRow(["'01 28 10:00:00'", 5.20, 5.04]);  data.addRow(["'01 28 12:00:00'", 7.00, 7.48]);  data.addRow(["'01 28 14:00:00'", 7.74, 8.67]);  data.addRow(["'01 28 16:00:00'", 6.89, 8.03]);  data.addRow(["'01 28 18:00:00'", 5.74, 6.85]);  data.addRow(["'01 28 20:00:00'", 4.38, 5.59]);  data.addRow(["'01 28 22:00:00'", 2.76, 2.72]);  data.addRow(["'01 29 00:00:00'", 3.20, 3.52]);  data.addRow(["'01 29 02:00:00'", 3.32, 3.70]);  data.addRow(["'01 29 04:00:00'", 2.99, 3.39]);  data.addRow(["'01 29 06:00:00'", 1.07, 1.14]);  data.addRow(["'01 29 08:00:00'", 1.96, 1.97]);  data.addRow(["'01 29 10:00:00'", 4.06, 4.20]);  data.addRow(["'01 29 12:00:00'", 6.30, 6.15]);  data.addRow(["'01 29 14:00:00'", 6.27, 5.78]);  data.addRow(["'01 29 16:00:00'", 7.67, 8.63]);  data.addRow(["'01 29 18:00:00'", 6.14, 7.63]);  data.addRow(["'01 29 20:00:00'", 3.94, 4.66]);  data.addRow(["'01 29 22:00:00'", 3.13, 3.15]);  data.addRow(["'01 30 00:00:00'", 2.20, 2.17]);  data.addRow(["'01 30 02:00:00'", 1.31, 1.33]);  data.addRow(["'01 30 04:00:00'", 1.02, 1.02]);  data.addRow(["'01 30 06:00:00'", 0.91, 0.92]);  data.addRow(["'01 30 08:00:00'", 1.71, 1.66]);  data.addRow(["'01 30 10:00:00'", 4.20, 3.97]);  data.addRow(["'01 30 12:00:00'", 6.16, 5.85]);  data.addRow(["'01 30 14:00:00'", 7.47, 8.55]);  data.addRow(["'01 30 16:00:00'", 6.49, 7.61]);  data.addRow(["'01 30 18:00:00'", 4.18, 5.14]);  data.addRow(["'01 30 20:00:00'", 2.35, 2.43]);  data.addRow(["'01 30 22:00:00'", 1.65, 1.69]);  data.addRow(["'01 31 00:00:00'", 1.49, 1.52]);  data.addRow(["'01 31 02:00:00'", 1.00, 1.03]);  data.addRow(["'01 31 04:00:00'", 0.87, 0.91]);  data.addRow(["'01 31 06:00:00'", 0.85, 0.86]);  data.addRow(["'01 31 08:00:00'", 1.57, 1.57]);  data.addRow(["'01 31 10:00:00'", 4.38, 4.22]);  data.addRow(["'01 31 12:00:00'", 5.93, 5.64]);  data.addRow(["'01 31 14:00:00'", 4.74, 4.49]);  data.addRow(["'01 31 16:00:00'", 4.70, 4.57]);  data.addRow(["'01 31 18:00:00'", 3.49, 3.42]);  data.addRow(["'01 31 20:00:00'", 1.94, 1.93]);  data.addRow(["'01 31 22:00:00'", 1.68, 1.69]);  data.addRow(["'02 01 00:00:00'", 1.54, 1.55]);  data.addRow(["'02 01 02:00:00'", 1.33, 1.32]);  data.addRow(["'02 01 04:00:00'", 0.93, 0.94]);  data.addRow(["'02 01 06:00:00'", 0.83, 0.82]);  data.addRow(["'02 01 08:00:00'", 0.82, 0.83]);  data.addRow(["'02 01 10:00:00'", 1.02, 1.04]);  data.addRow(["'02 01 12:00:00'", 1.44, 1.42]);  data.addRow(["'02 01 14:00:00'", 1.54, 1.53]);  data.addRow(["'02 01 16:00:00'", 1.46, 1.44]);  data.addRow(["'02 01 18:00:00'", 1.54, 1.52]);  data.addRow(["'02 01 20:00:00'", 1.52, 1.50]);  data.addRow(["'02 01 22:00:00'", 1.68, 1.64]);  data.addRow(["'02 02 00:00:00'", 1.87, 1.82]);  data.addRow(["'02 02 02:00:00'", 2.12, 2.07]);  data.addRow(["'02 02 04:00:00'", 0.97, 0.97]);  data.addRow(["'02 02 06:00:00'", 0.79, 0.82]);  data.addRow(["'02 02 08:00:00'", 0.79, 0.83]);  data.addRow(["'02 02 10:00:00'", 0.88, 0.89]);  data.addRow(["'02 02 12:00:00'", 0.96, 0.95]);  data.addRow(["'02 02 14:00:00'", 1.39, 1.37]);  data.addRow(["'02 02 16:00:00'", 1.45, 1.44]);  data.addRow(["'02 02 18:00:00'", 1.62, 1.61]);  data.addRow(["'02 02 20:00:00'", 1.41, 1.42]);  data.addRow(["'02 02 22:00:00'", 1.57, 1.59]);  data.addRow(["'02 03 00:00:00'", 1.30, 1.28]);  data.addRow(["'02 03 02:00:00'", 0.86, 0.85]);  data.addRow(["'02 03 04:00:00'", 0.57, 0.56]);  data.addRow(["'02 03 06:00:00'", 0.55, 0.56]);  data.addRow(["'02 03 08:00:00'", 1.08, 1.05]);  data.addRow(["'02 03 10:00:00'", 5.19, 4.90]);  data.addRow(["'02 03 12:00:00'", 6.84, 6.32]);  data.addRow(["'02 03 14:00:00'", 7.20, 6.52]);  data.addRow(["'02 03 16:00:00'", 7.09, 6.79]);  data.addRow(["'02 03 18:00:00'", 5.13, 4.97]);  data.addRow(["'02 03 20:00:00'", 4.31, 4.20]);  data.addRow(["'02 03 22:00:00'", 3.00, 2.94]);  data.addRow(["'02 04 00:00:00'", 2.25, 2.21]);  data.addRow(["'02 04 02:00:00'", 1.41, 1.39]);  data.addRow(["'02 04 04:00:00'", 0.93, 0.92]);  data.addRow(["'02 04 06:00:00'", 0.82, 0.80]);  data.addRow(["'02 04 08:00:00'", 1.38, 1.34]);  data.addRow(["'02 04 10:00:00'", 5.50, 5.22]);  data.addRow(["'02 04 12:00:00'", 8.79, 9.75]);  data.addRow(["'02 04 14:00:00'", 8.49, 9.39]);  data.addRow(["'02 04 16:00:00'", 7.98, 9.02]);  data.addRow(["'02 04 18:00:00'", 4.65, 4.76]);  data.addRow(["'02 04 20:00:00'", 3.63, 3.59]);  data.addRow(["'02 04 22:00:00'", 3.05, 3.05]);  data.addRow(["'02 05 00:00:00'", 1.93, 1.91]);  data.addRow(["'02 05 02:00:00'", 1.35, 1.31]);  data.addRow(["'02 05 04:00:00'", 0.82, 0.82]);  data.addRow(["'02 05 06:00:00'", 0.72, 0.70]);  data.addRow(["'02 05 08:00:00'", 1.40, 1.37]);  data.addRow(["'02 05 10:00:00'", 3.98, 3.79]);  data.addRow(["'02 05 12:00:00'", 7.36, 6.78]);  data.addRow(["'02 05 14:00:00'", 8.22, 9.52]);  data.addRow(["'02 05 16:00:00'", 9.19, 10.31]);  data.addRow(["'02 05 18:00:00'", 8.11, 9.06]);  data.addRow(["'02 05 20:00:00'", 6.63, 7.13]);  data.addRow(["'02 05 22:00:00'", 5.36, 5.81]);  data.addRow(["'02 06 00:00:00'", 2.83, 3.09]);  data.addRow(["'02 06 02:00:00'", 1.75, 1.78]);  data.addRow(["'02 06 04:00:00'", 1.33, 1.34]);  data.addRow(["'02 06 06:00:00'", 1.25, 1.25]);  data.addRow(["'02 06 08:00:00'", 1.77, 1.78]);  data.addRow(["'02 06 10:00:00'", 5.00, 4.75]);  data.addRow(["'02 06 12:00:00'", 5.61, 5.35]);  data.addRow(["'02 06 14:00:00'", 6.28, 5.94]);  data.addRow(["'02 06 16:00:00'", 6.78, 6.49]);  data.addRow(["'02 06 18:00:00'", 4.86, 4.93]);  data.addRow(["'02 06 20:00:00'", 4.19, 6.15]);  data.addRow(["'02 06 22:00:00'", 2.42, 2.44]);  data.addRow(["'02 07 00:00:00'", 1.80, 1.81]);  data.addRow(["'02 07 02:00:00'", 1.05, 1.08]);  data.addRow(["'02 07 04:00:00'", 0.92, 0.94]);  data.addRow(["'02 07 06:00:00'", 0.78, 0.83]);  data.addRow(["'02 07 08:00:00'", 1.37, 1.40]);  data.addRow(["'02 07 10:00:00'", 4.32, 4.17]);  data.addRow(["'02 07 12:00:00'", 5.56, 5.90]);  data.addRow(["'02 07 14:00:00'", 6.59, 8.02]);  data.addRow(["'02 07 16:00:00'", 6.17, 7.33]);  data.addRow(["'02 07 18:00:00'", 5.33, 6.53]);  data.addRow(["'02 07 20:00:00'", 4.04, 4.57]);  data.addRow(["'02 07 22:00:00'", 3.92, 4.31]);  data.addRow(["'02 08 00:00:00'", 4.01, 4.38]);  data.addRow(["'02 08 02:00:00'", 3.40, 3.73]);  data.addRow(["'02 08 04:00:00'", 3.23, 3.57]);  data.addRow(["'02 08 06:00:00'", 3.19, 3.49]);  data.addRow(["'02 08 08:00:00'", 3.14, 3.44]);  data.addRow(["'02 08 10:00:00'", 1.81, 1.99]);  data.addRow(["'02 08 12:00:00'", 2.30, 2.30]);  data.addRow(["'02 08 14:00:00'", 2.62, 2.58]);  data.addRow(["'02 08 16:00:00'", 2.10, 2.09]);  data.addRow(["'02 08 18:00:00'", 2.26, 2.26]);  data.addRow(["'02 08 20:00:00'", 1.58, 1.60]);  data.addRow(["'02 08 22:00:00'", 1.48, 1.49]);  data.addRow(["'02 09 00:00:00'", 1.33, 1.36]);  data.addRow(["'02 09 02:00:00'", 1.20, 1.21]);  data.addRow(["'02 09 04:00:00'", 1.05, 1.04]);  data.addRow(["'02 09 06:00:00'", 1.05, 1.04]);  data.addRow(["'02 09 08:00:00'", 1.00, 1.00]);  data.addRow(["'02 09 10:00:00'", 1.12, 1.10]);  data.addRow(["'02 09 12:00:00'", 1.36, 1.35]);  data.addRow(["'02 09 14:00:00'", 1.57, 1.54]);  data.addRow(["'02 09 16:00:00'", 2.13, 2.10]);  data.addRow(["'02 09 18:00:00'", 2.25, 2.21]);  data.addRow(["'02 09 20:00:00'", 2.34, 2.29]);  data.addRow(["'02 09 22:00:00'", 2.48, 2.43]);  data.addRow(["'02 10 00:00:00'", 2.07, 2.04]);  data.addRow(["'02 10 02:00:00'", 1.11, 1.11]);  data.addRow(["'02 10 04:00:00'", 0.77, 0.76]);  data.addRow(["'02 10 06:00:00'", 0.77, 0.77]);  data.addRow(["'02 10 08:00:00'", 1.33, 1.32]);  data.addRow(["'02 10 10:00:00'", 5.67, 5.33]);  data.addRow(["'02 10 12:00:00'", 7.07, 7.45]);  data.addRow(["'02 10 14:00:00'", 6.87, 8.53]);  data.addRow(["'02 10 16:00:00'", 7.99, 9.29]);  data.addRow(["'02 10 18:00:00'", 5.14, 5.73]);  data.addRow(["'02 10 20:00:00'", 3.71, 3.68]);  data.addRow(["'02 10 22:00:00'", 3.20, 3.20]);  data.addRow(["'02 11 00:00:00'", 2.78, 2.74]);  data.addRow(["'02 11 02:00:00'", 1.82, 1.84]);  data.addRow(["'02 11 04:00:00'", 1.32, 1.34]);  data.addRow(["'02 11 06:00:00'", 1.21, 1.24]);  data.addRow(["'02 11 08:00:00'", 1.71, 1.69]);  data.addRow(["'02 11 10:00:00'", 6.01, 5.65]);  data.addRow(["'02 11 12:00:00'", 6.75, 6.40]);  data.addRow(["'02 11 14:00:00'", 6.87, 6.52]);  data.addRow(["'02 11 16:00:00'", 8.10, 8.51]);  data.addRow(["'02 11 18:00:00'", 4.77, 5.73]);  data.addRow(["'02 11 20:00:00'", 3.00, 2.99]);  data.addRow(["'02 11 22:00:00'", 2.81, 2.84]);  data.addRow(["'02 12 00:00:00'", 2.33, 2.33]);  data.addRow(["'02 12 02:00:00'", 1.46, 1.46]);  data.addRow(["'02 12 04:00:00'", 0.70, 0.77]);  data.addRow(["'02 12 06:00:00'", 0.71, 0.77]);  data.addRow(["'02 12 08:00:00'", 1.23, 1.25]);  data.addRow(["'02 12 10:00:00'", 4.43, 4.18]);  data.addRow(["'02 12 12:00:00'", 5.55, 5.26]);  data.addRow(["'02 12 14:00:00'", 5.53, 5.23]);  data.addRow(["'02 12 16:00:00'", 7.15, 7.76]);  data.addRow(["'02 12 18:00:00'", 6.17, 7.46]);  data.addRow(["'02 12 20:00:00'", 4.62, 5.79]);  data.addRow(["'02 12 22:00:00'", 3.74, 5.05]);  data.addRow(["'02 13 00:00:00'", 2.39, 2.85]);  data.addRow(["'02 13 02:00:00'", 1.59, 1.69]);  data.addRow(["'02 13 04:00:00'", 1.27, 1.39]);  data.addRow(["'02 13 06:00:00'", 1.27, 1.41]);  data.addRow(["'02 13 08:00:00'", 1.73, 1.88]);  data.addRow(["'02 13 10:00:00'", 6.55, 6.43]);  data.addRow(["'02 13 12:00:00'", 7.38, 8.69]);  data.addRow(["'02 13 14:00:00'", 7.30, 8.36]);  data.addRow(["'02 13 16:00:00'", 7.81, 8.88]);  data.addRow(["'02 13 18:00:00'", 4.50, 5.10]);  data.addRow(["'02 13 20:00:00'", 3.15, 3.17]);  data.addRow(["'02 13 22:00:00'", 2.41, 2.47]);  data.addRow(["'02 14 00:00:00'", 2.40, 2.44]);  data.addRow(["'02 14 02:00:00'", 1.85, 1.93]);  data.addRow(["'02 14 04:00:00'", 1.85, 1.88]);  data.addRow(["'02 14 06:00:00'", 1.57, 1.68]);  data.addRow(["'02 14 08:00:00'", 1.81, 1.85]);  data.addRow(["'02 14 10:00:00'", 4.99, 4.75]);  data.addRow(["'02 14 12:00:00'", 5.40, 5.07]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='PSM Traffic Flows Max: 12.49 KB Min: 299.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='12'

	
        
      
	