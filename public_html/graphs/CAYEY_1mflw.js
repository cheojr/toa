
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'01 17 14:00:00'", 0.38, 0.38]);  data.addRow(["'01 17 16:00:00'", 0.46, 0.46]);  data.addRow(["'01 17 18:00:00'", 0.19, 0.21]);  data.addRow(["'01 17 20:00:00'", 0.02, 0.03]);  data.addRow(["'01 17 22:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 00:00:00'", 0.02, 0.03]);  data.addRow(["'01 18 02:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 04:00:00'", 0.01, 0.02]);  data.addRow(["'01 18 06:00:00'", 0.01, 0.01]);  data.addRow(["'01 18 08:00:00'", 0.02, 0.02]);  data.addRow(["'01 18 10:00:00'", 0.01, 0.03]);  data.addRow(["'01 18 12:00:00'", 0.02, 0.03]);  data.addRow(["'01 18 14:00:00'", 0.02, 0.03]);  data.addRow(["'01 18 16:00:00'", 0.04, 0.05]);  data.addRow(["'01 18 18:00:00'", 0.05, 0.05]);  data.addRow(["'01 18 20:00:00'", 0.03, 0.03]);  data.addRow(["'01 18 22:00:00'", 0.04, 0.04]);  data.addRow(["'01 19 00:00:00'", 0.01, 0.02]);  data.addRow(["'01 19 02:00:00'", 0.02, 0.03]);  data.addRow(["'01 19 04:00:00'", 0.02, 0.03]);  data.addRow(["'01 19 06:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 08:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 10:00:00'", 0.01, 0.03]);  data.addRow(["'01 19 12:00:00'", 0.01, 0.02]);  data.addRow(["'01 19 14:00:00'", 0.02, 0.03]);  data.addRow(["'01 19 16:00:00'", 0.02, 0.02]);  data.addRow(["'01 19 18:00:00'", 0.02, 0.03]);  data.addRow(["'01 19 20:00:00'", 0.01, 0.02]);  data.addRow(["'01 19 22:00:00'", 0.02, 0.02]);  data.addRow(["'01 20 00:00:00'", 0.02, 0.03]);  data.addRow(["'01 20 02:00:00'", 0.03, 0.04]);  data.addRow(["'01 20 04:00:00'", 0.02, 0.03]);  data.addRow(["'01 20 06:00:00'", 0.02, 0.03]);  data.addRow(["'01 20 08:00:00'", 0.03, 0.03]);  data.addRow(["'01 20 10:00:00'", 0.02, 0.03]);  data.addRow(["'01 20 12:00:00'", 0.04, 0.03]);  data.addRow(["'01 20 14:00:00'", 0.03, 0.04]);  data.addRow(["'01 20 16:00:00'", 0.07, 0.06]);  data.addRow(["'01 20 18:00:00'", 0.04, 0.04]);  data.addRow(["'01 20 20:00:00'", 0.03, 0.04]);  data.addRow(["'01 20 22:00:00'", 0.02, 0.03]);  data.addRow(["'01 21 00:00:00'", 0.03, 0.03]);  data.addRow(["'01 21 02:00:00'", 0.03, 0.04]);  data.addRow(["'01 21 04:00:00'", 0.02, 0.02]);  data.addRow(["'01 21 06:00:00'", 0.03, 0.03]);  data.addRow(["'01 21 08:00:00'", 0.11, 0.12]);  data.addRow(["'01 21 10:00:00'", 0.32, 0.34]);  data.addRow(["'01 21 12:00:00'", 0.49, 0.47]);  data.addRow(["'01 21 14:00:00'", 0.40, 0.40]);  data.addRow(["'01 21 16:00:00'", 0.49, 0.49]);  data.addRow(["'01 21 18:00:00'", 0.18, 0.20]);  data.addRow(["'01 21 20:00:00'", 0.09, 0.09]);  data.addRow(["'01 21 22:00:00'", 0.05, 0.05]);  data.addRow(["'01 22 00:00:00'", 0.06, 0.06]);  data.addRow(["'01 22 02:00:00'", 0.04, 0.04]);  data.addRow(["'01 22 04:00:00'", 0.04, 0.05]);  data.addRow(["'01 22 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 22 08:00:00'", 0.32, 0.33]);  data.addRow(["'01 22 10:00:00'", 0.87, 0.89]);  data.addRow(["'01 22 12:00:00'", 1.10, 1.12]);  data.addRow(["'01 22 14:00:00'", 1.16, 1.17]);  data.addRow(["'01 22 16:00:00'", 1.06, 1.06]);  data.addRow(["'01 22 18:00:00'", 0.47, 0.47]);  data.addRow(["'01 22 20:00:00'", 0.18, 0.19]);  data.addRow(["'01 22 22:00:00'", 0.08, 0.08]);  data.addRow(["'01 23 00:00:00'", 0.04, 0.04]);  data.addRow(["'01 23 02:00:00'", 0.09, 0.08]);  data.addRow(["'01 23 04:00:00'", 0.06, 0.08]);  data.addRow(["'01 23 06:00:00'", 0.02, 0.03]);  data.addRow(["'01 23 08:00:00'", 0.29, 0.29]);  data.addRow(["'01 23 10:00:00'", 0.91, 0.92]);  data.addRow(["'01 23 12:00:00'", 1.03, 1.04]);  data.addRow(["'01 23 14:00:00'", 1.14, 1.18]);  data.addRow(["'01 23 16:00:00'", 1.26, 1.24]);  data.addRow(["'01 23 18:00:00'", 0.55, 0.56]);  data.addRow(["'01 23 20:00:00'", 0.20, 0.21]);  data.addRow(["'01 23 22:00:00'", 0.11, 0.12]);  data.addRow(["'01 24 00:00:00'", 0.05, 0.07]);  data.addRow(["'01 24 02:00:00'", 0.08, 0.09]);  data.addRow(["'01 24 04:00:00'", 0.05, 0.06]);  data.addRow(["'01 24 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 24 08:00:00'", 0.33, 0.31]);  data.addRow(["'01 24 10:00:00'", 0.73, 0.75]);  data.addRow(["'01 24 12:00:00'", 1.20, 1.19]);  data.addRow(["'01 24 14:00:00'", 0.90, 0.90]);  data.addRow(["'01 24 16:00:00'", 0.58, 0.57]);  data.addRow(["'01 24 18:00:00'", 0.19, 0.21]);  data.addRow(["'01 24 20:00:00'", 0.06, 0.07]);  data.addRow(["'01 24 22:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 00:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 02:00:00'", 0.03, 0.04]);  data.addRow(["'01 25 04:00:00'", 0.03, 0.03]);  data.addRow(["'01 25 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 08:00:00'", 0.04, 0.03]);  data.addRow(["'01 25 10:00:00'", 0.06, 0.06]);  data.addRow(["'01 25 12:00:00'", 0.08, 0.08]);  data.addRow(["'01 25 14:00:00'", 0.06, 0.07]);  data.addRow(["'01 25 16:00:00'", 0.07, 0.07]);  data.addRow(["'01 25 18:00:00'", 0.06, 0.06]);  data.addRow(["'01 25 20:00:00'", 0.02, 0.03]);  data.addRow(["'01 25 22:00:00'", 0.02, 0.03]);  data.addRow(["'01 26 00:00:00'", 0.03, 0.04]);  data.addRow(["'01 26 02:00:00'", 0.02, 0.02]);  data.addRow(["'01 26 04:00:00'", 0.01, 0.02]);  data.addRow(["'01 26 06:00:00'", 0.01, 0.02]);  data.addRow(["'01 26 08:00:00'", 0.02, 0.03]);  data.addRow(["'01 26 10:00:00'", 0.01, 0.02]);  data.addRow(["'01 26 12:00:00'", 0.03, 0.04]);  data.addRow(["'01 26 14:00:00'", 0.02, 0.03]);  data.addRow(["'01 26 16:00:00'", 0.03, 0.04]);  data.addRow(["'01 26 18:00:00'", 0.11, 0.10]);  data.addRow(["'01 26 20:00:00'", 0.07, 0.07]);  data.addRow(["'01 26 22:00:00'", 0.06, 0.06]);  data.addRow(["'01 27 00:00:00'", 0.04, 0.04]);  data.addRow(["'01 27 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 27 04:00:00'", 0.02, 0.03]);  data.addRow(["'01 27 06:00:00'", 0.02, 0.02]);  data.addRow(["'01 27 08:00:00'", 0.30, 0.31]);  data.addRow(["'01 27 10:00:00'", 0.99, 1.04]);  data.addRow(["'01 27 12:00:00'", 1.24, 1.31]);  data.addRow(["'01 27 14:00:00'", 1.28, 1.30]);  data.addRow(["'01 27 16:00:00'", 1.27, 1.27]);  data.addRow(["'01 27 18:00:00'", 0.65, 0.66]);  data.addRow(["'01 27 20:00:00'", 0.36, 0.37]);  data.addRow(["'01 27 22:00:00'", 0.09, 0.11]);  data.addRow(["'01 28 00:00:00'", 0.04, 0.05]);  data.addRow(["'01 28 02:00:00'", 0.04, 0.05]);  data.addRow(["'01 28 04:00:00'", 0.04, 0.06]);  data.addRow(["'01 28 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 28 08:00:00'", 0.33, 0.36]);  data.addRow(["'01 28 10:00:00'", 1.05, 1.17]);  data.addRow(["'01 28 12:00:00'", 1.17, 1.21]);  data.addRow(["'01 28 14:00:00'", 1.47, 1.52]);  data.addRow(["'01 28 16:00:00'", 1.30, 1.33]);  data.addRow(["'01 28 18:00:00'", 0.61, 0.65]);  data.addRow(["'01 28 20:00:00'", 0.31, 0.33]);  data.addRow(["'01 28 22:00:00'", 0.15, 0.17]);  data.addRow(["'01 29 00:00:00'", 0.05, 0.06]);  data.addRow(["'01 29 02:00:00'", 0.04, 0.04]);  data.addRow(["'01 29 04:00:00'", 0.08, 0.08]);  data.addRow(["'01 29 06:00:00'", 0.05, 0.04]);  data.addRow(["'01 29 08:00:00'", 0.45, 0.25]);  data.addRow(["'01 29 10:00:00'", 1.05, 1.01]);  data.addRow(["'01 29 12:00:00'", 1.31, 1.38]);  data.addRow(["'01 29 14:00:00'", 1.38, 1.45]);  data.addRow(["'01 29 16:00:00'", 1.30, 1.32]);  data.addRow(["'01 29 18:00:00'", 0.74, 0.73]);  data.addRow(["'01 29 20:00:00'", 0.30, 0.31]);  data.addRow(["'01 29 22:00:00'", 0.18, 0.19]);  data.addRow(["'01 30 00:00:00'", 0.07, 0.08]);  data.addRow(["'01 30 02:00:00'", 0.04, 0.04]);  data.addRow(["'01 30 04:00:00'", 0.03, 0.04]);  data.addRow(["'01 30 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 30 08:00:00'", 0.33, 0.37]);  data.addRow(["'01 30 10:00:00'", 0.97, 1.00]);  data.addRow(["'01 30 12:00:00'", 0.96, 1.00]);  data.addRow(["'01 30 14:00:00'", 1.30, 1.33]);  data.addRow(["'01 30 16:00:00'", 1.23, 1.23]);  data.addRow(["'01 30 18:00:00'", 0.56, 0.56]);  data.addRow(["'01 30 20:00:00'", 0.25, 0.27]);  data.addRow(["'01 30 22:00:00'", 0.12, 0.12]);  data.addRow(["'01 31 00:00:00'", 0.05, 0.05]);  data.addRow(["'01 31 02:00:00'", 0.04, 0.05]);  data.addRow(["'01 31 04:00:00'", 0.05, 0.06]);  data.addRow(["'01 31 06:00:00'", 0.04, 0.04]);  data.addRow(["'01 31 08:00:00'", 0.36, 0.38]);  data.addRow(["'01 31 10:00:00'", 1.04, 1.03]);  data.addRow(["'01 31 12:00:00'", 1.38, 1.40]);  data.addRow(["'01 31 14:00:00'", 0.72, 0.77]);  data.addRow(["'01 31 16:00:00'", 0.44, 0.46]);  data.addRow(["'01 31 18:00:00'", 0.22, 0.22]);  data.addRow(["'01 31 20:00:00'", 0.04, 0.05]);  data.addRow(["'01 31 22:00:00'", 0.04, 0.05]);  data.addRow(["'02 01 00:00:00'", 0.06, 0.07]);  data.addRow(["'02 01 02:00:00'", 0.04, 0.05]);  data.addRow(["'02 01 04:00:00'", 0.02, 0.04]);  data.addRow(["'02 01 06:00:00'", 0.02, 0.03]);  data.addRow(["'02 01 08:00:00'", 0.04, 0.05]);  data.addRow(["'02 01 10:00:00'", 0.11, 0.11]);  data.addRow(["'02 01 12:00:00'", 0.17, 0.17]);  data.addRow(["'02 01 14:00:00'", 0.09, 0.09]);  data.addRow(["'02 01 16:00:00'", 0.07, 0.08]);  data.addRow(["'02 01 18:00:00'", 0.06, 0.08]);  data.addRow(["'02 01 20:00:00'", 0.04, 0.05]);  data.addRow(["'02 01 22:00:00'", 0.06, 0.06]);  data.addRow(["'02 02 00:00:00'", 0.04, 0.04]);  data.addRow(["'02 02 02:00:00'", 0.04, 0.05]);  data.addRow(["'02 02 04:00:00'", 0.03, 0.04]);  data.addRow(["'02 02 06:00:00'", 0.02, 0.03]);  data.addRow(["'02 02 08:00:00'", 0.02, 0.04]);  data.addRow(["'02 02 10:00:00'", 0.04, 0.04]);  data.addRow(["'02 02 12:00:00'", 0.05, 0.06]);  data.addRow(["'02 02 14:00:00'", 0.04, 0.05]);  data.addRow(["'02 02 16:00:00'", 0.07, 0.08]);  data.addRow(["'02 02 18:00:00'", 0.16, 0.15]);  data.addRow(["'02 02 20:00:00'", 0.12, 0.13]);  data.addRow(["'02 02 22:00:00'", 0.05, 0.05]);  data.addRow(["'02 03 00:00:00'", 0.05, 0.06]);  data.addRow(["'02 03 02:00:00'", 0.04, 0.04]);  data.addRow(["'02 03 04:00:00'", 0.02, 0.03]);  data.addRow(["'02 03 06:00:00'", 0.02, 0.03]);  data.addRow(["'02 03 08:00:00'", 0.46, 0.47]);  data.addRow(["'02 03 10:00:00'", 1.50, 1.55]);  data.addRow(["'02 03 12:00:00'", 1.68, 1.73]);  data.addRow(["'02 03 14:00:00'", 1.57, 1.64]);  data.addRow(["'02 03 16:00:00'", 1.67, 1.69]);  data.addRow(["'02 03 18:00:00'", 0.75, 0.73]);  data.addRow(["'02 03 20:00:00'", 0.38, 0.38]);  data.addRow(["'02 03 22:00:00'", 0.13, 0.12]);  data.addRow(["'02 04 00:00:00'", 0.07, 0.08]);  data.addRow(["'02 04 02:00:00'", 0.04, 0.05]);  data.addRow(["'02 04 04:00:00'", 0.03, 0.04]);  data.addRow(["'02 04 06:00:00'", 0.05, 0.05]);  data.addRow(["'02 04 08:00:00'", 0.39, 0.41]);  data.addRow(["'02 04 10:00:00'", 1.22, 1.27]);  data.addRow(["'02 04 12:00:00'", 1.27, 1.32]);  data.addRow(["'02 04 14:00:00'", 1.60, 1.63]);  data.addRow(["'02 04 16:00:00'", 1.51, 1.51]);  data.addRow(["'02 04 18:00:00'", 0.72, 0.71]);  data.addRow(["'02 04 20:00:00'", 0.35, 0.35]);  data.addRow(["'02 04 22:00:00'", 0.20, 0.19]);  data.addRow(["'02 05 00:00:00'", 0.06, 0.06]);  data.addRow(["'02 05 02:00:00'", 0.04, 0.03]);  data.addRow(["'02 05 04:00:00'", 0.04, 0.04]);  data.addRow(["'02 05 06:00:00'", 0.05, 0.05]);  data.addRow(["'02 05 08:00:00'", 0.31, 0.33]);  data.addRow(["'02 05 10:00:00'", 1.14, 1.20]);  data.addRow(["'02 05 12:00:00'", 1.71, 1.77]);  data.addRow(["'02 05 14:00:00'", 1.68, 1.72]);  data.addRow(["'02 05 16:00:00'", 1.53, 1.55]);  data.addRow(["'02 05 18:00:00'", 0.76, 0.76]);  data.addRow(["'02 05 20:00:00'", 0.31, 0.32]);  data.addRow(["'02 05 22:00:00'", 0.17, 0.18]);  data.addRow(["'02 06 00:00:00'", 0.05, 0.06]);  data.addRow(["'02 06 02:00:00'", 0.04, 0.04]);  data.addRow(["'02 06 04:00:00'", 0.03, 0.05]);  data.addRow(["'02 06 06:00:00'", 0.02, 0.03]);  data.addRow(["'02 06 08:00:00'", 0.50, 0.52]);  data.addRow(["'02 06 10:00:00'", 1.81, 1.86]);  data.addRow(["'02 06 12:00:00'", 1.49, 1.51]);  data.addRow(["'02 06 14:00:00'", 1.98, 2.01]);  data.addRow(["'02 06 16:00:00'", 1.66, 1.67]);  data.addRow(["'02 06 18:00:00'", 0.89, 0.88]);  data.addRow(["'02 06 20:00:00'", 0.46, 0.45]);  data.addRow(["'02 06 22:00:00'", 0.35, 0.33]);  data.addRow(["'02 07 00:00:00'", 0.18, 0.15]);  data.addRow(["'02 07 02:00:00'", 0.13, 0.11]);  data.addRow(["'02 07 04:00:00'", 0.13, 0.11]);  data.addRow(["'02 07 06:00:00'", 0.12, 0.11]);  data.addRow(["'02 07 08:00:00'", 0.33, 0.32]);  data.addRow(["'02 07 10:00:00'", 1.09, 1.11]);  data.addRow(["'02 07 12:00:00'", 1.79, 1.80]);  data.addRow(["'02 07 14:00:00'", 1.51, 1.50]);  data.addRow(["'02 07 16:00:00'", 0.88, 0.84]);  data.addRow(["'02 07 18:00:00'", 0.41, 0.37]);  data.addRow(["'02 07 20:00:00'", 0.15, 0.12]);  data.addRow(["'02 07 22:00:00'", 0.13, 0.10]);  data.addRow(["'02 08 00:00:00'", 0.17, 0.16]);  data.addRow(["'02 08 02:00:00'", 0.11, 0.09]);  data.addRow(["'02 08 04:00:00'", 0.11, 0.10]);  data.addRow(["'02 08 06:00:00'", 0.11, 0.09]);  data.addRow(["'02 08 08:00:00'", 0.12, 0.10]);  data.addRow(["'02 08 10:00:00'", 0.25, 0.23]);  data.addRow(["'02 08 12:00:00'", 0.28, 0.25]);  data.addRow(["'02 08 14:00:00'", 0.29, 0.25]);  data.addRow(["'02 08 16:00:00'", 0.31, 0.27]);  data.addRow(["'02 08 18:00:00'", 0.23, 0.21]);  data.addRow(["'02 08 20:00:00'", 0.17, 0.15]);  data.addRow(["'02 08 22:00:00'", 0.13, 0.11]);  data.addRow(["'02 09 00:00:00'", 0.12, 0.10]);  data.addRow(["'02 09 02:00:00'", 0.13, 0.10]);  data.addRow(["'02 09 04:00:00'", 0.12, 0.10]);  data.addRow(["'02 09 06:00:00'", 0.10, 0.08]);  data.addRow(["'02 09 08:00:00'", 0.12, 0.10]);  data.addRow(["'02 09 10:00:00'", 0.11, 0.09]);  data.addRow(["'02 09 12:00:00'", 0.15, 0.13]);  data.addRow(["'02 09 14:00:00'", 0.12, 0.11]);  data.addRow(["'02 09 16:00:00'", 0.14, 0.12]);  data.addRow(["'02 09 18:00:00'", 0.22, 0.19]);  data.addRow(["'02 09 20:00:00'", 0.25, 0.22]);  data.addRow(["'02 09 22:00:00'", 0.14, 0.13]);  data.addRow(["'02 10 00:00:00'", 0.17, 0.16]);  data.addRow(["'02 10 02:00:00'", 0.13, 0.11]);  data.addRow(["'02 10 04:00:00'", 0.11, 0.10]);  data.addRow(["'02 10 06:00:00'", 0.11, 0.09]);  data.addRow(["'02 10 08:00:00'", 0.46, 0.43]);  data.addRow(["'02 10 10:00:00'", 1.34, 1.31]);  data.addRow(["'02 10 12:00:00'", 1.83, 1.77]);  data.addRow(["'02 10 14:00:00'", 1.72, 1.71]);  data.addRow(["'02 10 16:00:00'", 1.57, 1.51]);  data.addRow(["'02 10 18:00:00'", 1.07, 1.03]);  data.addRow(["'02 10 20:00:00'", 0.45, 0.43]);  data.addRow(["'02 10 22:00:00'", 0.43, 0.41]);  data.addRow(["'02 11 00:00:00'", 0.19, 0.17]);  data.addRow(["'02 11 02:00:00'", 0.19, 0.17]);  data.addRow(["'02 11 04:00:00'", 0.15, 0.14]);  data.addRow(["'02 11 06:00:00'", 0.11, 0.10]);  data.addRow(["'02 11 08:00:00'", 0.47, 0.45]);  data.addRow(["'02 11 10:00:00'", 1.52, 1.50]);  data.addRow(["'02 11 12:00:00'", 1.47, 1.44]);  data.addRow(["'02 11 14:00:00'", 1.72, 1.67]);  data.addRow(["'02 11 16:00:00'", 1.81, 1.75]);  data.addRow(["'02 11 18:00:00'", 0.79, 0.76]);  data.addRow(["'02 11 20:00:00'", 0.37, 0.35]);  data.addRow(["'02 11 22:00:00'", 0.23, 0.22]);  data.addRow(["'02 12 00:00:00'", 0.08, 0.10]);  data.addRow(["'02 12 02:00:00'", 0.05, 0.06]);  data.addRow(["'02 12 04:00:00'", 0.06, 0.06]);  data.addRow(["'02 12 06:00:00'", 0.06, 0.06]);  data.addRow(["'02 12 08:00:00'", 0.38, 0.37]);  data.addRow(["'02 12 10:00:00'", 1.33, 1.32]);  data.addRow(["'02 12 12:00:00'", 1.82, 1.76]);  data.addRow(["'02 12 14:00:00'", 1.70, 1.65]);  data.addRow(["'02 12 16:00:00'", 1.38, 1.35]);  data.addRow(["'02 12 18:00:00'", 0.77, 0.75]);  data.addRow(["'02 12 20:00:00'", 0.28, 0.28]);  data.addRow(["'02 12 22:00:00'", 0.24, 0.24]);  data.addRow(["'02 13 00:00:00'", 0.05, 0.06]);  data.addRow(["'02 13 02:00:00'", 0.06, 0.05]);  data.addRow(["'02 13 04:00:00'", 0.05, 0.06]);  data.addRow(["'02 13 06:00:00'", 0.04, 0.04]);  data.addRow(["'02 13 08:00:00'", 0.38, 0.37]);  data.addRow(["'02 13 10:00:00'", 1.21, 1.20]);  data.addRow(["'02 13 12:00:00'", 1.22, 1.20]);  data.addRow(["'02 13 14:00:00'", 1.53, 1.51]);  data.addRow(["'02 13 16:00:00'", 1.28, 1.25]);  data.addRow(["'02 13 18:00:00'", 0.58, 0.57]);  data.addRow(["'02 13 20:00:00'", 0.15, 0.16]);  data.addRow(["'02 13 22:00:00'", 0.10, 0.10]);  data.addRow(["'02 14 00:00:00'", 0.05, 0.06]);  data.addRow(["'02 14 02:00:00'", 0.05, 0.05]);  data.addRow(["'02 14 04:00:00'", 0.04, 0.05]);  data.addRow(["'02 14 06:00:00'", 0.03, 0.03]);  data.addRow(["'02 14 08:00:00'", 0.16, 0.17]);  data.addRow(["'02 14 10:00:00'", 0.97, 1.00]);  data.addRow(["'02 14 12:00:00'", 1.36, 1.32]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='CAYEY Traffic Flows Max: 3.78 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='3'

	
        
      
	