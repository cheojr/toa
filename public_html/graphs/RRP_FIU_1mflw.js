
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'01 17 14:00:00'", 2.70, 2.62]);  data.addRow(["'01 17 16:00:00'", 3.14, 3.01]);  data.addRow(["'01 17 18:00:00'", 2.24, 2.18]);  data.addRow(["'01 17 20:00:00'", 1.11, 1.08]);  data.addRow(["'01 17 22:00:00'", 0.77, 0.78]);  data.addRow(["'01 18 00:00:00'", 0.50, 0.53]);  data.addRow(["'01 18 02:00:00'", 0.37, 0.39]);  data.addRow(["'01 18 04:00:00'", 0.30, 0.33]);  data.addRow(["'01 18 06:00:00'", 0.25, 0.28]);  data.addRow(["'01 18 08:00:00'", 0.23, 0.26]);  data.addRow(["'01 18 10:00:00'", 0.50, 0.51]);  data.addRow(["'01 18 12:00:00'", 0.80, 0.79]);  data.addRow(["'01 18 14:00:00'", 0.99, 0.95]);  data.addRow(["'01 18 16:00:00'", 0.90, 0.88]);  data.addRow(["'01 18 18:00:00'", 0.71, 0.70]);  data.addRow(["'01 18 20:00:00'", 0.52, 0.52]);  data.addRow(["'01 18 22:00:00'", 0.55, 0.54]);  data.addRow(["'01 19 00:00:00'", 0.53, 0.53]);  data.addRow(["'01 19 02:00:00'", 0.40, 0.48]);  data.addRow(["'01 19 04:00:00'", 0.32, 0.36]);  data.addRow(["'01 19 06:00:00'", 0.25, 0.29]);  data.addRow(["'01 19 08:00:00'", 0.22, 0.27]);  data.addRow(["'01 19 10:00:00'", 0.28, 0.56]);  data.addRow(["'01 19 12:00:00'", 0.59, 0.58]);  data.addRow(["'01 19 14:00:00'", 0.77, 0.84]);  data.addRow(["'01 19 16:00:00'", 0.84, 0.80]);  data.addRow(["'01 19 18:00:00'", 0.74, 0.71]);  data.addRow(["'01 19 20:00:00'", 0.54, 0.54]);  data.addRow(["'01 19 22:00:00'", 0.55, 0.54]);  data.addRow(["'01 20 00:00:00'", 0.62, 0.61]);  data.addRow(["'01 20 02:00:00'", 0.55, 0.53]);  data.addRow(["'01 20 04:00:00'", 0.39, 0.55]);  data.addRow(["'01 20 06:00:00'", 0.27, 0.29]);  data.addRow(["'01 20 08:00:00'", 0.30, 0.32]);  data.addRow(["'01 20 10:00:00'", 0.49, 0.49]);  data.addRow(["'01 20 12:00:00'", 0.73, 0.72]);  data.addRow(["'01 20 14:00:00'", 1.00, 0.94]);  data.addRow(["'01 20 16:00:00'", 1.22, 1.11]);  data.addRow(["'01 20 18:00:00'", 1.18, 1.08]);  data.addRow(["'01 20 20:00:00'", 0.95, 0.90]);  data.addRow(["'01 20 22:00:00'", 1.04, 1.00]);  data.addRow(["'01 21 00:00:00'", 1.33, 1.20]);  data.addRow(["'01 21 02:00:00'", 0.75, 0.72]);  data.addRow(["'01 21 04:00:00'", 0.35, 0.35]);  data.addRow(["'01 21 06:00:00'", 0.31, 0.32]);  data.addRow(["'01 21 08:00:00'", 1.04, 0.99]);  data.addRow(["'01 21 10:00:00'", 3.36, 3.18]);  data.addRow(["'01 21 12:00:00'", 5.19, 4.96]);  data.addRow(["'01 21 14:00:00'", 5.35, 5.09]);  data.addRow(["'01 21 16:00:00'", 4.79, 4.62]);  data.addRow(["'01 21 18:00:00'", 3.93, 3.77]);  data.addRow(["'01 21 20:00:00'", 2.70, 2.64]);  data.addRow(["'01 21 22:00:00'", 2.51, 2.45]);  data.addRow(["'01 22 00:00:00'", 1.66, 1.71]);  data.addRow(["'01 22 02:00:00'", 0.81, 0.88]);  data.addRow(["'01 22 04:00:00'", 0.49, 0.61]);  data.addRow(["'01 22 06:00:00'", 0.41, 0.50]);  data.addRow(["'01 22 08:00:00'", 1.46, 1.51]);  data.addRow(["'01 22 10:00:00'", 3.07, 2.97]);  data.addRow(["'01 22 12:00:00'", 4.22, 3.95]);  data.addRow(["'01 22 14:00:00'", 5.17, 4.79]);  data.addRow(["'01 22 16:00:00'", 4.98, 4.59]);  data.addRow(["'01 22 18:00:00'", 3.60, 3.33]);  data.addRow(["'01 22 20:00:00'", 2.73, 2.49]);  data.addRow(["'01 22 22:00:00'", 2.13, 1.95]);  data.addRow(["'01 23 00:00:00'", 1.32, 1.25]);  data.addRow(["'01 23 02:00:00'", 0.77, 0.73]);  data.addRow(["'01 23 04:00:00'", 0.43, 0.48]);  data.addRow(["'01 23 06:00:00'", 0.40, 0.39]);  data.addRow(["'01 23 08:00:00'", 1.17, 1.10]);  data.addRow(["'01 23 10:00:00'", 3.41, 3.12]);  data.addRow(["'01 23 12:00:00'", 4.96, 4.59]);  data.addRow(["'01 23 14:00:00'", 4.72, 4.38]);  data.addRow(["'01 23 16:00:00'", 4.49, 4.14]);  data.addRow(["'01 23 18:00:00'", 3.89, 3.64]);  data.addRow(["'01 23 20:00:00'", 2.65, 2.49]);  data.addRow(["'01 23 22:00:00'", 1.75, 1.62]);  data.addRow(["'01 24 00:00:00'", 1.11, 1.07]);  data.addRow(["'01 24 02:00:00'", 0.68, 0.68]);  data.addRow(["'01 24 04:00:00'", 0.52, 0.52]);  data.addRow(["'01 24 06:00:00'", 0.40, 0.42]);  data.addRow(["'01 24 08:00:00'", 0.83, 0.79]);  data.addRow(["'01 24 10:00:00'", 2.84, 2.61]);  data.addRow(["'01 24 12:00:00'", 4.36, 4.05]);  data.addRow(["'01 24 14:00:00'", 4.40, 4.15]);  data.addRow(["'01 24 16:00:00'", 3.86, 3.63]);  data.addRow(["'01 24 18:00:00'", 2.61, 2.56]);  data.addRow(["'01 24 20:00:00'", 1.65, 1.65]);  data.addRow(["'01 24 22:00:00'", 1.70, 1.55]);  data.addRow(["'01 25 00:00:00'", 1.06, 1.05]);  data.addRow(["'01 25 02:00:00'", 0.57, 0.60]);  data.addRow(["'01 25 04:00:00'", 0.36, 0.38]);  data.addRow(["'01 25 06:00:00'", 0.23, 0.27]);  data.addRow(["'01 25 08:00:00'", 0.25, 0.29]);  data.addRow(["'01 25 10:00:00'", 0.60, 0.59]);  data.addRow(["'01 25 12:00:00'", 0.90, 0.87]);  data.addRow(["'01 25 14:00:00'", 1.09, 1.04]);  data.addRow(["'01 25 16:00:00'", 1.36, 1.28]);  data.addRow(["'01 25 18:00:00'", 1.08, 1.01]);  data.addRow(["'01 25 20:00:00'", 0.98, 0.89]);  data.addRow(["'01 25 22:00:00'", 1.01, 0.94]);  data.addRow(["'01 26 00:00:00'", 0.54, 0.59]);  data.addRow(["'01 26 02:00:00'", 0.37, 0.39]);  data.addRow(["'01 26 04:00:00'", 0.29, 0.33]);  data.addRow(["'01 26 06:00:00'", 0.24, 0.26]);  data.addRow(["'01 26 08:00:00'", 0.27, 0.30]);  data.addRow(["'01 26 10:00:00'", 0.40, 0.41]);  data.addRow(["'01 26 12:00:00'", 0.57, 0.59]);  data.addRow(["'01 26 14:00:00'", 0.95, 0.93]);  data.addRow(["'01 26 16:00:00'", 1.22, 1.16]);  data.addRow(["'01 26 18:00:00'", 1.24, 1.18]);  data.addRow(["'01 26 20:00:00'", 1.52, 1.41]);  data.addRow(["'01 26 22:00:00'", 1.59, 1.53]);  data.addRow(["'01 27 00:00:00'", 1.24, 1.24]);  data.addRow(["'01 27 02:00:00'", 0.77, 0.76]);  data.addRow(["'01 27 04:00:00'", 0.46, 0.43]);  data.addRow(["'01 27 06:00:00'", 0.40, 0.38]);  data.addRow(["'01 27 08:00:00'", 1.14, 1.08]);  data.addRow(["'01 27 10:00:00'", 3.40, 3.18]);  data.addRow(["'01 27 12:00:00'", 4.85, 4.51]);  data.addRow(["'01 27 14:00:00'", 4.84, 4.54]);  data.addRow(["'01 27 16:00:00'", 4.93, 4.50]);  data.addRow(["'01 27 18:00:00'", 3.34, 3.17]);  data.addRow(["'01 27 20:00:00'", 3.01, 2.83]);  data.addRow(["'01 27 22:00:00'", 2.59, 2.43]);  data.addRow(["'01 28 00:00:00'", 1.42, 1.33]);  data.addRow(["'01 28 02:00:00'", 0.85, 0.80]);  data.addRow(["'01 28 04:00:00'", 0.47, 0.45]);  data.addRow(["'01 28 06:00:00'", 0.40, 0.38]);  data.addRow(["'01 28 08:00:00'", 1.15, 1.07]);  data.addRow(["'01 28 10:00:00'", 3.51, 3.27]);  data.addRow(["'01 28 12:00:00'", 4.55, 4.23]);  data.addRow(["'01 28 14:00:00'", 4.89, 4.50]);  data.addRow(["'01 28 16:00:00'", 4.80, 4.44]);  data.addRow(["'01 28 18:00:00'", 3.50, 3.27]);  data.addRow(["'01 28 20:00:00'", 2.79, 2.64]);  data.addRow(["'01 28 22:00:00'", 2.33, 2.16]);  data.addRow(["'01 29 00:00:00'", 1.50, 1.44]);  data.addRow(["'01 29 02:00:00'", 1.17, 1.15]);  data.addRow(["'01 29 04:00:00'", 0.60, 0.53]);  data.addRow(["'01 29 06:00:00'", 0.31, 0.24]);  data.addRow(["'01 29 08:00:00'", 1.14, 0.84]);  data.addRow(["'01 29 10:00:00'", 3.47, 2.89]);  data.addRow(["'01 29 12:00:00'", 4.48, 4.15]);  data.addRow(["'01 29 14:00:00'", 4.66, 4.38]);  data.addRow(["'01 29 16:00:00'", 5.18, 4.83]);  data.addRow(["'01 29 18:00:00'", 3.61, 3.40]);  data.addRow(["'01 29 20:00:00'", 3.29, 3.08]);  data.addRow(["'01 29 22:00:00'", 2.50, 2.37]);  data.addRow(["'01 30 00:00:00'", 1.54, 1.44]);  data.addRow(["'01 30 02:00:00'", 0.86, 0.84]);  data.addRow(["'01 30 04:00:00'", 0.41, 0.40]);  data.addRow(["'01 30 06:00:00'", 0.30, 0.32]);  data.addRow(["'01 30 08:00:00'", 1.04, 1.01]);  data.addRow(["'01 30 10:00:00'", 3.65, 3.41]);  data.addRow(["'01 30 12:00:00'", 4.62, 4.26]);  data.addRow(["'01 30 14:00:00'", 4.71, 4.38]);  data.addRow(["'01 30 16:00:00'", 4.92, 4.58]);  data.addRow(["'01 30 18:00:00'", 3.67, 3.44]);  data.addRow(["'01 30 20:00:00'", 2.70, 2.52]);  data.addRow(["'01 30 22:00:00'", 2.06, 1.87]);  data.addRow(["'01 31 00:00:00'", 1.32, 1.23]);  data.addRow(["'01 31 02:00:00'", 0.75, 0.72]);  data.addRow(["'01 31 04:00:00'", 0.46, 0.46]);  data.addRow(["'01 31 06:00:00'", 0.35, 0.36]);  data.addRow(["'01 31 08:00:00'", 0.81, 0.78]);  data.addRow(["'01 31 10:00:00'", 2.50, 2.30]);  data.addRow(["'01 31 12:00:00'", 3.28, 3.05]);  data.addRow(["'01 31 14:00:00'", 3.20, 2.99]);  data.addRow(["'01 31 16:00:00'", 3.04, 2.87]);  data.addRow(["'01 31 18:00:00'", 2.06, 1.96]);  data.addRow(["'01 31 20:00:00'", 1.10, 1.09]);  data.addRow(["'01 31 22:00:00'", 0.91, 0.88]);  data.addRow(["'02 01 00:00:00'", 0.73, 0.71]);  data.addRow(["'02 01 02:00:00'", 0.49, 0.50]);  data.addRow(["'02 01 04:00:00'", 0.28, 0.32]);  data.addRow(["'02 01 06:00:00'", 0.19, 0.24]);  data.addRow(["'02 01 08:00:00'", 0.21, 0.26]);  data.addRow(["'02 01 10:00:00'", 0.62, 0.64]);  data.addRow(["'02 01 12:00:00'", 1.13, 1.11]);  data.addRow(["'02 01 14:00:00'", 1.03, 1.06]);  data.addRow(["'02 01 16:00:00'", 1.28, 1.25]);  data.addRow(["'02 01 18:00:00'", 0.92, 1.02]);  data.addRow(["'02 01 20:00:00'", 0.80, 0.78]);  data.addRow(["'02 01 22:00:00'", 0.83, 0.82]);  data.addRow(["'02 02 00:00:00'", 0.75, 0.75]);  data.addRow(["'02 02 02:00:00'", 0.48, 0.49]);  data.addRow(["'02 02 04:00:00'", 0.24, 0.27]);  data.addRow(["'02 02 06:00:00'", 0.17, 0.22]);  data.addRow(["'02 02 08:00:00'", 0.18, 0.22]);  data.addRow(["'02 02 10:00:00'", 0.31, 0.34]);  data.addRow(["'02 02 12:00:00'", 0.65, 0.64]);  data.addRow(["'02 02 14:00:00'", 0.99, 0.93]);  data.addRow(["'02 02 16:00:00'", 1.19, 1.10]);  data.addRow(["'02 02 18:00:00'", 1.20, 1.14]);  data.addRow(["'02 02 20:00:00'", 1.20, 1.13]);  data.addRow(["'02 02 22:00:00'", 1.46, 1.37]);  data.addRow(["'02 03 00:00:00'", 1.26, 1.19]);  data.addRow(["'02 03 02:00:00'", 0.82, 0.80]);  data.addRow(["'02 03 04:00:00'", 0.35, 0.37]);  data.addRow(["'02 03 06:00:00'", 0.30, 0.31]);  data.addRow(["'02 03 08:00:00'", 1.12, 1.04]);  data.addRow(["'02 03 10:00:00'", 3.49, 3.27]);  data.addRow(["'02 03 12:00:00'", 4.48, 4.17]);  data.addRow(["'02 03 14:00:00'", 4.95, 4.66]);  data.addRow(["'02 03 16:00:00'", 4.52, 4.25]);  data.addRow(["'02 03 18:00:00'", 3.63, 3.48]);  data.addRow(["'02 03 20:00:00'", 2.81, 2.66]);  data.addRow(["'02 03 22:00:00'", 2.28, 2.17]);  data.addRow(["'02 04 00:00:00'", 1.63, 1.55]);  data.addRow(["'02 04 02:00:00'", 0.96, 0.99]);  data.addRow(["'02 04 04:00:00'", 0.45, 0.47]);  data.addRow(["'02 04 06:00:00'", 0.30, 0.33]);  data.addRow(["'02 04 08:00:00'", 1.12, 1.10]);  data.addRow(["'02 04 10:00:00'", 3.75, 3.47]);  data.addRow(["'02 04 12:00:00'", 4.83, 4.46]);  data.addRow(["'02 04 14:00:00'", 4.90, 4.55]);  data.addRow(["'02 04 16:00:00'", 4.73, 4.38]);  data.addRow(["'02 04 18:00:00'", 3.69, 3.45]);  data.addRow(["'02 04 20:00:00'", 2.97, 2.73]);  data.addRow(["'02 04 22:00:00'", 2.50, 2.30]);  data.addRow(["'02 05 00:00:00'", 1.45, 1.40]);  data.addRow(["'02 05 02:00:00'", 0.98, 0.96]);  data.addRow(["'02 05 04:00:00'", 0.45, 0.48]);  data.addRow(["'02 05 06:00:00'", 0.48, 0.52]);  data.addRow(["'02 05 08:00:00'", 1.24, 1.21]);  data.addRow(["'02 05 10:00:00'", 3.34, 3.14]);  data.addRow(["'02 05 12:00:00'", 4.60, 4.26]);  data.addRow(["'02 05 14:00:00'", 5.03, 4.69]);  data.addRow(["'02 05 16:00:00'", 5.32, 4.93]);  data.addRow(["'02 05 18:00:00'", 3.50, 3.34]);  data.addRow(["'02 05 20:00:00'", 2.58, 2.48]);  data.addRow(["'02 05 22:00:00'", 2.18, 2.07]);  data.addRow(["'02 06 00:00:00'", 1.55, 1.48]);  data.addRow(["'02 06 02:00:00'", 0.88, 0.89]);  data.addRow(["'02 06 04:00:00'", 0.48, 0.52]);  data.addRow(["'02 06 06:00:00'", 0.40, 0.41]);  data.addRow(["'02 06 08:00:00'", 1.25, 1.17]);  data.addRow(["'02 06 10:00:00'", 4.07, 3.73]);  data.addRow(["'02 06 12:00:00'", 5.37, 5.04]);  data.addRow(["'02 06 14:00:00'", 5.34, 4.98]);  data.addRow(["'02 06 16:00:00'", 5.27, 4.95]);  data.addRow(["'02 06 18:00:00'", 4.07, 3.87]);  data.addRow(["'02 06 20:00:00'", 2.72, 2.54]);  data.addRow(["'02 06 22:00:00'", 2.12, 1.97]);  data.addRow(["'02 07 00:00:00'", 1.35, 1.31]);  data.addRow(["'02 07 02:00:00'", 0.92, 0.92]);  data.addRow(["'02 07 04:00:00'", 0.51, 0.55]);  data.addRow(["'02 07 06:00:00'", 0.51, 0.55]);  data.addRow(["'02 07 08:00:00'", 1.01, 0.99]);  data.addRow(["'02 07 10:00:00'", 3.16, 2.96]);  data.addRow(["'02 07 12:00:00'", 4.12, 3.81]);  data.addRow(["'02 07 14:00:00'", 3.54, 3.30]);  data.addRow(["'02 07 16:00:00'", 3.19, 3.01]);  data.addRow(["'02 07 18:00:00'", 2.38, 2.29]);  data.addRow(["'02 07 20:00:00'", 1.32, 1.30]);  data.addRow(["'02 07 22:00:00'", 1.25, 1.22]);  data.addRow(["'02 08 00:00:00'", 1.06, 1.05]);  data.addRow(["'02 08 02:00:00'", 0.63, 0.65]);  data.addRow(["'02 08 04:00:00'", 0.42, 0.47]);  data.addRow(["'02 08 06:00:00'", 0.33, 0.45]);  data.addRow(["'02 08 08:00:00'", 0.31, 0.36]);  data.addRow(["'02 08 10:00:00'", 0.73, 0.73]);  data.addRow(["'02 08 12:00:00'", 1.22, 1.20]);  data.addRow(["'02 08 14:00:00'", 1.46, 1.40]);  data.addRow(["'02 08 16:00:00'", 1.62, 1.54]);  data.addRow(["'02 08 18:00:00'", 1.37, 1.32]);  data.addRow(["'02 08 20:00:00'", 1.12, 1.06]);  data.addRow(["'02 08 22:00:00'", 1.14, 1.16]);  data.addRow(["'02 09 00:00:00'", 1.08, 1.08]);  data.addRow(["'02 09 02:00:00'", 0.81, 0.83]);  data.addRow(["'02 09 04:00:00'", 0.41, 0.45]);  data.addRow(["'02 09 06:00:00'", 0.32, 0.36]);  data.addRow(["'02 09 08:00:00'", 0.32, 0.37]);  data.addRow(["'02 09 10:00:00'", 0.46, 0.51]);  data.addRow(["'02 09 12:00:00'", 0.97, 0.92]);  data.addRow(["'02 09 14:00:00'", 1.29, 1.24]);  data.addRow(["'02 09 16:00:00'", 1.42, 1.40]);  data.addRow(["'02 09 18:00:00'", 1.69, 1.58]);  data.addRow(["'02 09 20:00:00'", 1.68, 1.57]);  data.addRow(["'02 09 22:00:00'", 1.83, 1.72]);  data.addRow(["'02 10 00:00:00'", 1.46, 1.38]);  data.addRow(["'02 10 02:00:00'", 1.00, 0.97]);  data.addRow(["'02 10 04:00:00'", 0.51, 0.52]);  data.addRow(["'02 10 06:00:00'", 0.38, 0.43]);  data.addRow(["'02 10 08:00:00'", 1.21, 1.15]);  data.addRow(["'02 10 10:00:00'", 4.18, 3.84]);  data.addRow(["'02 10 12:00:00'", 5.69, 5.29]);  data.addRow(["'02 10 14:00:00'", 6.42, 5.87]);  data.addRow(["'02 10 16:00:00'", 6.33, 5.90]);  data.addRow(["'02 10 18:00:00'", 4.04, 3.78]);  data.addRow(["'02 10 20:00:00'", 3.36, 3.17]);  data.addRow(["'02 10 22:00:00'", 2.91, 2.73]);  data.addRow(["'02 11 00:00:00'", 2.19, 2.03]);  data.addRow(["'02 11 02:00:00'", 1.35, 1.28]);  data.addRow(["'02 11 04:00:00'", 0.68, 0.64]);  data.addRow(["'02 11 06:00:00'", 0.42, 0.42]);  data.addRow(["'02 11 08:00:00'", 1.47, 1.36]);  data.addRow(["'02 11 10:00:00'", 4.49, 4.17]);  data.addRow(["'02 11 12:00:00'", 5.56, 5.20]);  data.addRow(["'02 11 14:00:00'", 5.73, 5.35]);  data.addRow(["'02 11 16:00:00'", 6.13, 5.83]);  data.addRow(["'02 11 18:00:00'", 4.69, 4.49]);  data.addRow(["'02 11 20:00:00'", 3.70, 3.48]);  data.addRow(["'02 11 22:00:00'", 3.13, 2.88]);  data.addRow(["'02 12 00:00:00'", 2.18, 1.98]);  data.addRow(["'02 12 02:00:00'", 1.67, 1.51]);  data.addRow(["'02 12 04:00:00'", 0.81, 0.70]);  data.addRow(["'02 12 06:00:00'", 0.51, 0.49]);  data.addRow(["'02 12 08:00:00'", 1.30, 1.18]);  data.addRow(["'02 12 10:00:00'", 4.21, 3.83]);  data.addRow(["'02 12 12:00:00'", 6.25, 5.72]);  data.addRow(["'02 12 14:00:00'", 6.32, 5.76]);  data.addRow(["'02 12 16:00:00'", 7.40, 6.81]);  data.addRow(["'02 12 18:00:00'", 4.51, 4.17]);  data.addRow(["'02 12 20:00:00'", 3.09, 2.81]);  data.addRow(["'02 12 22:00:00'", 2.42, 2.20]);  data.addRow(["'02 13 00:00:00'", 2.09, 1.88]);  data.addRow(["'02 13 02:00:00'", 1.59, 1.41]);  data.addRow(["'02 13 04:00:00'", 1.23, 1.04]);  data.addRow(["'02 13 06:00:00'", 1.08, 0.92]);  data.addRow(["'02 13 08:00:00'", 1.92, 1.66]);  data.addRow(["'02 13 10:00:00'", 4.52, 4.14]);  data.addRow(["'02 13 12:00:00'", 5.52, 5.17]);  data.addRow(["'02 13 14:00:00'", 5.90, 5.46]);  data.addRow(["'02 13 16:00:00'", 5.93, 5.75]);  data.addRow(["'02 13 18:00:00'", 4.74, 4.46]);  data.addRow(["'02 13 20:00:00'", 3.02, 2.82]);  data.addRow(["'02 13 22:00:00'", 2.61, 2.44]);  data.addRow(["'02 14 00:00:00'", 1.90, 1.84]);  data.addRow(["'02 14 02:00:00'", 1.70, 1.63]);  data.addRow(["'02 14 04:00:00'", 0.99, 1.01]);  data.addRow(["'02 14 06:00:00'", 0.73, 0.74]);  data.addRow(["'02 14 08:00:00'", 1.29, 1.26]);  data.addRow(["'02 14 10:00:00'", 3.77, 3.51]);  data.addRow(["'02 14 12:00:00'", 4.52, 4.18]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Flows Max: 10.30 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='10'

	
        
      
	