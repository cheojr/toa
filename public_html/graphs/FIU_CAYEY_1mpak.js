
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'01 17 14:00:00'", 1.77, 1.97]);  data.addRow(["'01 17 16:00:00'", 3.93, 5.22]);  data.addRow(["'01 17 18:00:00'", 0.74, 0.69]);  data.addRow(["'01 17 20:00:00'", 0.06, 0.06]);  data.addRow(["'01 17 22:00:00'", 1.02, 0.69]);  data.addRow(["'01 18 00:00:00'", 0.21, 0.22]);  data.addRow(["'01 18 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 18 04:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 06:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 08:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 10:00:00'", 0.03, 0.02]);  data.addRow(["'01 18 12:00:00'", 0.20, 0.18]);  data.addRow(["'01 18 14:00:00'", 0.03, 0.03]);  data.addRow(["'01 18 16:00:00'", 0.11, 0.13]);  data.addRow(["'01 18 18:00:00'", 0.13, 0.13]);  data.addRow(["'01 18 20:00:00'", 7.56, 4.56]);  data.addRow(["'01 18 22:00:00'", 0.08, 0.09]);  data.addRow(["'01 19 00:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 19 04:00:00'", 0.03, 0.02]);  data.addRow(["'01 19 06:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 08:00:00'", 0.05, 0.04]);  data.addRow(["'01 19 10:00:00'", 0.03, 0.02]);  data.addRow(["'01 19 12:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 14:00:00'", 0.06, 0.05]);  data.addRow(["'01 19 16:00:00'", 0.04, 0.05]);  data.addRow(["'01 19 18:00:00'", 0.04, 0.04]);  data.addRow(["'01 19 20:00:00'", 0.06, 0.05]);  data.addRow(["'01 19 22:00:00'", 0.03, 0.03]);  data.addRow(["'01 20 00:00:00'", 0.03, 0.03]);  data.addRow(["'01 20 02:00:00'", 3.66, 7.49]);  data.addRow(["'01 20 04:00:00'", 1.86, 4.07]);  data.addRow(["'01 20 06:00:00'", 4.12, 7.53]);  data.addRow(["'01 20 08:00:00'", 0.40, 0.66]);  data.addRow(["'01 20 10:00:00'", 0.04, 0.05]);  data.addRow(["'01 20 12:00:00'", 0.09, 0.09]);  data.addRow(["'01 20 14:00:00'", 0.19, 0.24]);  data.addRow(["'01 20 16:00:00'", 0.11, 0.13]);  data.addRow(["'01 20 18:00:00'", 4.93, 2.59]);  data.addRow(["'01 20 20:00:00'", 0.08, 0.09]);  data.addRow(["'01 20 22:00:00'", 0.07, 0.06]);  data.addRow(["'01 21 00:00:00'", 0.06, 0.06]);  data.addRow(["'01 21 02:00:00'", 0.31, 0.43]);  data.addRow(["'01 21 04:00:00'", 3.68, 13.55]);  data.addRow(["'01 21 06:00:00'", 2.85, 10.14]);  data.addRow(["'01 21 08:00:00'", 0.30, 0.31]);  data.addRow(["'01 21 10:00:00'", 4.09, 3.22]);  data.addRow(["'01 21 12:00:00'", 2.18, 2.29]);  data.addRow(["'01 21 14:00:00'", 4.45, 5.35]);  data.addRow(["'01 21 16:00:00'", 32.10, 34.60]);  data.addRow(["'01 21 18:00:00'", 0.81, 0.89]);  data.addRow(["'01 21 20:00:00'", 0.65, 0.85]);  data.addRow(["'01 21 22:00:00'", 0.21, 0.33]);  data.addRow(["'01 22 00:00:00'", 0.13, 0.12]);  data.addRow(["'01 22 02:00:00'", 0.05, 0.06]);  data.addRow(["'01 22 04:00:00'", 0.07, 0.07]);  data.addRow(["'01 22 06:00:00'", 0.15, 0.09]);  data.addRow(["'01 22 08:00:00'", 3.45, 3.80]);  data.addRow(["'01 22 10:00:00'", 7.39, 8.09]);  data.addRow(["'01 22 12:00:00'", 33.07, 36.27]);  data.addRow(["'01 22 14:00:00'", 8.84, 10.46]);  data.addRow(["'01 22 16:00:00'", 9.96, 11.30]);  data.addRow(["'01 22 18:00:00'", 14.42, 16.83]);  data.addRow(["'01 22 20:00:00'", 21.40, 29.58]);  data.addRow(["'01 22 22:00:00'", 0.27, 0.20]);  data.addRow(["'01 23 00:00:00'", 0.20, 0.21]);  data.addRow(["'01 23 02:00:00'", 0.12, 0.13]);  data.addRow(["'01 23 04:00:00'", 0.07, 0.09]);  data.addRow(["'01 23 06:00:00'", 0.03, 0.03]);  data.addRow(["'01 23 08:00:00'", 3.17, 4.18]);  data.addRow(["'01 23 10:00:00'", 26.13, 25.16]);  data.addRow(["'01 23 12:00:00'", 11.12, 13.92]);  data.addRow(["'01 23 14:00:00'", 8.89, 9.31]);  data.addRow(["'01 23 16:00:00'", 23.54, 20.20]);  data.addRow(["'01 23 18:00:00'", 12.22, 17.03]);  data.addRow(["'01 23 20:00:00'", 7.97, 15.26]);  data.addRow(["'01 23 22:00:00'", 5.41, 7.95]);  data.addRow(["'01 24 00:00:00'", 0.19, 0.31]);  data.addRow(["'01 24 02:00:00'", 6.10, 6.38]);  data.addRow(["'01 24 04:00:00'", 0.10, 0.09]);  data.addRow(["'01 24 06:00:00'", 0.04, 0.05]);  data.addRow(["'01 24 08:00:00'", 0.76, 0.86]);  data.addRow(["'01 24 10:00:00'", 6.26, 6.55]);  data.addRow(["'01 24 12:00:00'", 15.63, 19.51]);  data.addRow(["'01 24 14:00:00'", 14.44, 17.10]);  data.addRow(["'01 24 16:00:00'", 6.94, 9.42]);  data.addRow(["'01 24 18:00:00'", 4.17, 2.33]);  data.addRow(["'01 24 20:00:00'", 0.11, 0.11]);  data.addRow(["'01 24 22:00:00'", 0.09, 0.09]);  data.addRow(["'01 25 00:00:00'", 0.08, 0.07]);  data.addRow(["'01 25 02:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 04:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 06:00:00'", 0.05, 0.05]);  data.addRow(["'01 25 08:00:00'", 0.04, 0.05]);  data.addRow(["'01 25 10:00:00'", 0.33, 0.47]);  data.addRow(["'01 25 12:00:00'", 0.19, 0.17]);  data.addRow(["'01 25 14:00:00'", 0.13, 0.14]);  data.addRow(["'01 25 16:00:00'", 0.15, 0.15]);  data.addRow(["'01 25 18:00:00'", 0.08, 0.09]);  data.addRow(["'01 25 20:00:00'", 4.84, 3.03]);  data.addRow(["'01 25 22:00:00'", 0.07, 0.06]);  data.addRow(["'01 26 00:00:00'", 0.06, 0.05]);  data.addRow(["'01 26 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 26 04:00:00'", 0.02, 0.02]);  data.addRow(["'01 26 06:00:00'", 0.19, 0.18]);  data.addRow(["'01 26 08:00:00'", 0.02, 0.02]);  data.addRow(["'01 26 10:00:00'", 0.02, 0.02]);  data.addRow(["'01 26 12:00:00'", 0.08, 0.08]);  data.addRow(["'01 26 14:00:00'", 0.04, 0.03]);  data.addRow(["'01 26 16:00:00'", 0.61, 0.37]);  data.addRow(["'01 26 18:00:00'", 0.20, 0.21]);  data.addRow(["'01 26 20:00:00'", 0.29, 0.21]);  data.addRow(["'01 26 22:00:00'", 0.08, 0.09]);  data.addRow(["'01 27 00:00:00'", 0.05, 0.06]);  data.addRow(["'01 27 02:00:00'", 0.08, 0.07]);  data.addRow(["'01 27 04:00:00'", 0.04, 0.04]);  data.addRow(["'01 27 06:00:00'", 0.08, 0.08]);  data.addRow(["'01 27 08:00:00'", 7.49, 7.81]);  data.addRow(["'01 27 10:00:00'", 14.20, 16.70]);  data.addRow(["'01 27 12:00:00'", 24.30, 19.78]);  data.addRow(["'01 27 14:00:00'", 14.94, 15.14]);  data.addRow(["'01 27 16:00:00'", 16.75, 16.03]);  data.addRow(["'01 27 18:00:00'", 11.28, 15.91]);  data.addRow(["'01 27 20:00:00'", 6.40, 4.98]);  data.addRow(["'01 27 22:00:00'", 4.24, 2.92]);  data.addRow(["'01 28 00:00:00'", 0.17, 0.14]);  data.addRow(["'01 28 02:00:00'", 1.79, 7.14]);  data.addRow(["'01 28 04:00:00'", 0.06, 0.06]);  data.addRow(["'01 28 06:00:00'", 0.08, 0.07]);  data.addRow(["'01 28 08:00:00'", 7.68, 9.42]);  data.addRow(["'01 28 10:00:00'", 17.35, 21.22]);  data.addRow(["'01 28 12:00:00'", 15.36, 18.28]);  data.addRow(["'01 28 14:00:00'", 11.80, 12.60]);  data.addRow(["'01 28 16:00:00'", 13.38, 13.87]);  data.addRow(["'01 28 18:00:00'", 12.95, 8.98]);  data.addRow(["'01 28 20:00:00'", 2.55, 3.20]);  data.addRow(["'01 28 22:00:00'", 1.12, 0.93]);  data.addRow(["'01 29 00:00:00'", 0.30, 0.28]);  data.addRow(["'01 29 02:00:00'", 0.12, 0.10]);  data.addRow(["'01 29 04:00:00'", 0.11, 0.11]);  data.addRow(["'01 29 06:00:00'", 0.14, 0.09]);  data.addRow(["'01 29 08:00:00'", 2.94, 2.48]);  data.addRow(["'01 29 10:00:00'", 7.57, 7.98]);  data.addRow(["'01 29 12:00:00'", 10.91, 12.01]);  data.addRow(["'01 29 14:00:00'", 11.09, 14.40]);  data.addRow(["'01 29 16:00:00'", 12.15, 14.48]);  data.addRow(["'01 29 18:00:00'", 13.84, 12.20]);  data.addRow(["'01 29 20:00:00'", 0.90, 1.01]);  data.addRow(["'01 29 22:00:00'", 0.88, 0.63]);  data.addRow(["'01 30 00:00:00'", 0.44, 0.32]);  data.addRow(["'01 30 02:00:00'", 0.07, 0.08]);  data.addRow(["'01 30 04:00:00'", 0.07, 0.07]);  data.addRow(["'01 30 06:00:00'", 0.08, 0.09]);  data.addRow(["'01 30 08:00:00'", 3.79, 4.51]);  data.addRow(["'01 30 10:00:00'", 16.59, 15.86]);  data.addRow(["'01 30 12:00:00'", 14.98, 12.91]);  data.addRow(["'01 30 14:00:00'", 20.06, 18.77]);  data.addRow(["'01 30 16:00:00'", 15.75, 15.54]);  data.addRow(["'01 30 18:00:00'", 7.79, 9.45]);  data.addRow(["'01 30 20:00:00'", 1.45, 1.47]);  data.addRow(["'01 30 22:00:00'", 0.33, 0.36]);  data.addRow(["'01 31 00:00:00'", 0.09, 0.10]);  data.addRow(["'01 31 02:00:00'", 0.05, 0.05]);  data.addRow(["'01 31 04:00:00'", 0.12, 0.12]);  data.addRow(["'01 31 06:00:00'", 0.05, 0.06]);  data.addRow(["'01 31 08:00:00'", 1.12, 1.23]);  data.addRow(["'01 31 10:00:00'", 5.20, 5.54]);  data.addRow(["'01 31 12:00:00'", 14.04, 15.29]);  data.addRow(["'01 31 14:00:00'", 16.91, 22.90]);  data.addRow(["'01 31 16:00:00'", 26.30, 28.14]);  data.addRow(["'01 31 18:00:00'", 1.16, 1.14]);  data.addRow(["'01 31 20:00:00'", 0.10, 0.12]);  data.addRow(["'01 31 22:00:00'", 0.06, 0.07]);  data.addRow(["'02 01 00:00:00'", 0.09, 0.10]);  data.addRow(["'02 01 02:00:00'", 0.07, 0.07]);  data.addRow(["'02 01 04:00:00'", 0.04, 0.03]);  data.addRow(["'02 01 06:00:00'", 0.15, 0.08]);  data.addRow(["'02 01 08:00:00'", 2.59, 5.40]);  data.addRow(["'02 01 10:00:00'", 0.96, 1.42]);  data.addRow(["'02 01 12:00:00'", 0.37, 0.39]);  data.addRow(["'02 01 14:00:00'", 0.20, 0.25]);  data.addRow(["'02 01 16:00:00'", 0.09, 0.10]);  data.addRow(["'02 01 18:00:00'", 0.12, 0.12]);  data.addRow(["'02 01 20:00:00'", 0.10, 0.10]);  data.addRow(["'02 01 22:00:00'", 0.13, 0.12]);  data.addRow(["'02 02 00:00:00'", 0.07, 0.06]);  data.addRow(["'02 02 02:00:00'", 0.07, 0.06]);  data.addRow(["'02 02 04:00:00'", 0.04, 0.04]);  data.addRow(["'02 02 06:00:00'", 0.04, 0.03]);  data.addRow(["'02 02 08:00:00'", 0.04, 0.04]);  data.addRow(["'02 02 10:00:00'", 0.07, 0.08]);  data.addRow(["'02 02 12:00:00'", 0.13, 0.10]);  data.addRow(["'02 02 14:00:00'", 0.09, 0.08]);  data.addRow(["'02 02 16:00:00'", 0.33, 0.24]);  data.addRow(["'02 02 18:00:00'", 0.48, 0.44]);  data.addRow(["'02 02 20:00:00'", 1.51, 1.57]);  data.addRow(["'02 02 22:00:00'", 0.14, 0.10]);  data.addRow(["'02 03 00:00:00'", 0.16, 0.12]);  data.addRow(["'02 03 02:00:00'", 0.08, 0.08]);  data.addRow(["'02 03 04:00:00'", 0.08, 0.06]);  data.addRow(["'02 03 06:00:00'", 0.03, 0.02]);  data.addRow(["'02 03 08:00:00'", 3.21, 3.34]);  data.addRow(["'02 03 10:00:00'", 30.24, 24.04]);  data.addRow(["'02 03 12:00:00'", 16.82, 18.64]);  data.addRow(["'02 03 14:00:00'", 34.54, 39.33]);  data.addRow(["'02 03 16:00:00'", 16.81, 17.50]);  data.addRow(["'02 03 18:00:00'", 10.68, 14.17]);  data.addRow(["'02 03 20:00:00'", 1.99, 1.96]);  data.addRow(["'02 03 22:00:00'", 0.41, 0.43]);  data.addRow(["'02 04 00:00:00'", 0.32, 0.36]);  data.addRow(["'02 04 02:00:00'", 0.08, 0.08]);  data.addRow(["'02 04 04:00:00'", 0.04, 0.04]);  data.addRow(["'02 04 06:00:00'", 0.06, 0.08]);  data.addRow(["'02 04 08:00:00'", 2.84, 3.80]);  data.addRow(["'02 04 10:00:00'", 14.42, 20.44]);  data.addRow(["'02 04 12:00:00'", 16.56, 18.06]);  data.addRow(["'02 04 14:00:00'", 17.98, 24.90]);  data.addRow(["'02 04 16:00:00'", 16.47, 18.10]);  data.addRow(["'02 04 18:00:00'", 7.80, 11.22]);  data.addRow(["'02 04 20:00:00'", 1.50, 1.55]);  data.addRow(["'02 04 22:00:00'", 0.63, 0.64]);  data.addRow(["'02 05 00:00:00'", 0.26, 0.16]);  data.addRow(["'02 05 02:00:00'", 0.07, 0.08]);  data.addRow(["'02 05 04:00:00'", 0.06, 0.06]);  data.addRow(["'02 05 06:00:00'", 0.09, 0.10]);  data.addRow(["'02 05 08:00:00'", 1.31, 1.60]);  data.addRow(["'02 05 10:00:00'", 11.34, 12.58]);  data.addRow(["'02 05 12:00:00'", 17.04, 19.46]);  data.addRow(["'02 05 14:00:00'", 19.48, 19.00]);  data.addRow(["'02 05 16:00:00'", 13.85, 13.86]);  data.addRow(["'02 05 18:00:00'", 6.40, 7.00]);  data.addRow(["'02 05 20:00:00'", 6.68, 10.47]);  data.addRow(["'02 05 22:00:00'", 1.69, 1.66]);  data.addRow(["'02 06 00:00:00'", 0.20, 0.25]);  data.addRow(["'02 06 02:00:00'", 0.19, 0.10]);  data.addRow(["'02 06 04:00:00'", 0.04, 0.05]);  data.addRow(["'02 06 06:00:00'", 0.03, 0.04]);  data.addRow(["'02 06 08:00:00'", 4.83, 6.18]);  data.addRow(["'02 06 10:00:00'", 26.35, 29.43]);  data.addRow(["'02 06 12:00:00'", 14.47, 15.45]);  data.addRow(["'02 06 14:00:00'", 20.98, 18.93]);  data.addRow(["'02 06 16:00:00'", 20.83, 24.76]);  data.addRow(["'02 06 18:00:00'", 8.57, 10.10]);  data.addRow(["'02 06 20:00:00'", 2.59, 2.52]);  data.addRow(["'02 06 22:00:00'", 0.82, 0.83]);  data.addRow(["'02 07 00:00:00'", 0.45, 0.49]);  data.addRow(["'02 07 02:00:00'", 0.13, 0.18]);  data.addRow(["'02 07 04:00:00'", 0.21, 0.24]);  data.addRow(["'02 07 06:00:00'", 0.13, 0.17]);  data.addRow(["'02 07 08:00:00'", 0.69, 0.83]);  data.addRow(["'02 07 10:00:00'", 6.29, 7.56]);  data.addRow(["'02 07 12:00:00'", 22.54, 29.33]);  data.addRow(["'02 07 14:00:00'", 18.99, 20.68]);  data.addRow(["'02 07 16:00:00'", 15.60, 13.19]);  data.addRow(["'02 07 18:00:00'", 2.57, 3.24]);  data.addRow(["'02 07 20:00:00'", 0.31, 0.38]);  data.addRow(["'02 07 22:00:00'", 0.17, 0.20]);  data.addRow(["'02 08 00:00:00'", 1.80, 0.80]);  data.addRow(["'02 08 02:00:00'", 4.29, 1.53]);  data.addRow(["'02 08 04:00:00'", 4.71, 1.62]);  data.addRow(["'02 08 06:00:00'", 2.17, 0.85]);  data.addRow(["'02 08 08:00:00'", 0.12, 0.17]);  data.addRow(["'02 08 10:00:00'", 2.44, 4.29]);  data.addRow(["'02 08 12:00:00'", 0.84, 0.94]);  data.addRow(["'02 08 14:00:00'", 5.36, 3.69]);  data.addRow(["'02 08 16:00:00'", 0.90, 1.20]);  data.addRow(["'02 08 18:00:00'", 6.32, 6.46]);  data.addRow(["'02 08 20:00:00'", 0.54, 0.54]);  data.addRow(["'02 08 22:00:00'", 0.26, 0.25]);  data.addRow(["'02 09 00:00:00'", 0.17, 0.18]);  data.addRow(["'02 09 02:00:00'", 0.24, 0.29]);  data.addRow(["'02 09 04:00:00'", 0.12, 0.16]);  data.addRow(["'02 09 06:00:00'", 0.10, 0.14]);  data.addRow(["'02 09 08:00:00'", 0.16, 0.18]);  data.addRow(["'02 09 10:00:00'", 0.13, 0.17]);  data.addRow(["'02 09 12:00:00'", 0.34, 0.29]);  data.addRow(["'02 09 14:00:00'", 0.16, 0.18]);  data.addRow(["'02 09 16:00:00'", 0.20, 0.25]);  data.addRow(["'02 09 18:00:00'", 1.44, 2.79]);  data.addRow(["'02 09 20:00:00'", 4.86, 3.27]);  data.addRow(["'02 09 22:00:00'", 0.22, 0.23]);  data.addRow(["'02 10 00:00:00'", 0.42, 0.31]);  data.addRow(["'02 10 02:00:00'", 0.15, 0.19]);  data.addRow(["'02 10 04:00:00'", 0.16, 0.19]);  data.addRow(["'02 10 06:00:00'", 0.12, 0.16]);  data.addRow(["'02 10 08:00:00'", 2.99, 4.01]);  data.addRow(["'02 10 10:00:00'", 15.22, 14.18]);  data.addRow(["'02 10 12:00:00'", 15.21, 18.60]);  data.addRow(["'02 10 14:00:00'", 12.75, 12.82]);  data.addRow(["'02 10 16:00:00'", 29.19, 34.64]);  data.addRow(["'02 10 18:00:00'", 7.41, 7.39]);  data.addRow(["'02 10 20:00:00'", 7.38, 6.77]);  data.addRow(["'02 10 22:00:00'", 1.21, 1.44]);  data.addRow(["'02 11 00:00:00'", 6.77, 3.81]);  data.addRow(["'02 11 02:00:00'", 0.49, 0.41]);  data.addRow(["'02 11 04:00:00'", 0.17, 0.22]);  data.addRow(["'02 11 06:00:00'", 0.12, 0.16]);  data.addRow(["'02 11 08:00:00'", 1.96, 2.44]);  data.addRow(["'02 11 10:00:00'", 18.61, 18.98]);  data.addRow(["'02 11 12:00:00'", 14.22, 18.92]);  data.addRow(["'02 11 14:00:00'", 18.18, 23.36]);  data.addRow(["'02 11 16:00:00'", 14.22, 18.77]);  data.addRow(["'02 11 18:00:00'", 13.80, 17.85]);  data.addRow(["'02 11 20:00:00'", 7.10, 5.11]);  data.addRow(["'02 11 22:00:00'", 2.49, 1.99]);  data.addRow(["'02 12 00:00:00'", 0.19, 0.17]);  data.addRow(["'02 12 02:00:00'", 0.10, 0.10]);  data.addRow(["'02 12 04:00:00'", 0.08, 0.11]);  data.addRow(["'02 12 06:00:00'", 0.17, 0.19]);  data.addRow(["'02 12 08:00:00'", 1.33, 1.75]);  data.addRow(["'02 12 10:00:00'", 10.87, 13.07]);  data.addRow(["'02 12 12:00:00'", 8.96, 10.35]);  data.addRow(["'02 12 14:00:00'", 8.42, 9.43]);  data.addRow(["'02 12 16:00:00'", 14.24, 15.43]);  data.addRow(["'02 12 18:00:00'", 9.08, 10.95]);  data.addRow(["'02 12 20:00:00'", 1.04, 1.19]);  data.addRow(["'02 12 22:00:00'", 1.55, 1.47]);  data.addRow(["'02 13 00:00:00'", 0.16, 0.19]);  data.addRow(["'02 13 02:00:00'", 0.21, 0.26]);  data.addRow(["'02 13 04:00:00'", 0.06, 0.08]);  data.addRow(["'02 13 06:00:00'", 0.05, 0.07]);  data.addRow(["'02 13 08:00:00'", 1.68, 7.61]);  data.addRow(["'02 13 10:00:00'", 15.75, 20.25]);  data.addRow(["'02 13 12:00:00'", 10.65, 14.10]);  data.addRow(["'02 13 14:00:00'", 11.01, 13.16]);  data.addRow(["'02 13 16:00:00'", 6.08, 7.33]);  data.addRow(["'02 13 18:00:00'", 10.43, 11.48]);  data.addRow(["'02 13 20:00:00'", 1.19, 1.50]);  data.addRow(["'02 13 22:00:00'", 0.90, 1.08]);  data.addRow(["'02 14 00:00:00'", 0.14, 0.13]);  data.addRow(["'02 14 02:00:00'", 0.11, 0.12]);  data.addRow(["'02 14 04:00:00'", 0.08, 0.08]);  data.addRow(["'02 14 06:00:00'", 0.03, 0.04]);  data.addRow(["'02 14 08:00:00'", 2.44, 2.01]);  data.addRow(["'02 14 10:00:00'", 6.11, 7.69]);  data.addRow(["'02 14 12:00:00'", 13.27, 16.04]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='CAYEY Traffic Packets Max: 546.47 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='546'

	
        
      
	