
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'01 17 14:00:00'", 0.47, 1.34]);  data.addRow(["'01 17 16:00:00'", 0.44, 1.55]);  data.addRow(["'01 17 18:00:00'", 0.20, 0.49]);  data.addRow(["'01 17 20:00:00'", 0.12, 0.20]);  data.addRow(["'01 17 22:00:00'", 0.35, 0.53]);  data.addRow(["'01 18 00:00:00'", 0.02, 0.04]);  data.addRow(["'01 18 02:00:00'", 0.01, 0.01]);  data.addRow(["'01 18 04:00:00'", 0.01, 0.01]);  data.addRow(["'01 18 06:00:00'", 0.01, 0.01]);  data.addRow(["'01 18 08:00:00'", 0.01, 0.01]);  data.addRow(["'01 18 10:00:00'", 0.06, 0.17]);  data.addRow(["'01 18 12:00:00'", 0.18, 0.11]);  data.addRow(["'01 18 14:00:00'", 0.05, 0.42]);  data.addRow(["'01 18 16:00:00'", 0.11, 0.29]);  data.addRow(["'01 18 18:00:00'", 0.12, 1.27]);  data.addRow(["'01 18 20:00:00'", 0.06, 0.61]);  data.addRow(["'01 18 22:00:00'", 0.07, 0.08]);  data.addRow(["'01 19 00:00:00'", 0.03, 0.06]);  data.addRow(["'01 19 02:00:00'", 0.04, 0.03]);  data.addRow(["'01 19 04:00:00'", 0.01, 0.01]);  data.addRow(["'01 19 06:00:00'", 0.01, 0.01]);  data.addRow(["'01 19 08:00:00'", 0.01, 0.01]);  data.addRow(["'01 19 10:00:00'", 0.04, 0.07]);  data.addRow(["'01 19 12:00:00'", 0.03, 0.12]);  data.addRow(["'01 19 14:00:00'", 0.07, 0.29]);  data.addRow(["'01 19 16:00:00'", 0.31, 0.69]);  data.addRow(["'01 19 18:00:00'", 0.73, 0.33]);  data.addRow(["'01 19 20:00:00'", 1.50, 0.33]);  data.addRow(["'01 19 22:00:00'", 0.07, 0.76]);  data.addRow(["'01 20 00:00:00'", 0.18, 0.38]);  data.addRow(["'01 20 02:00:00'", 0.02, 0.02]);  data.addRow(["'01 20 04:00:00'", 0.01, 0.04]);  data.addRow(["'01 20 06:00:00'", 0.02, 0.01]);  data.addRow(["'01 20 08:00:00'", 0.11, 2.62]);  data.addRow(["'01 20 10:00:00'", 0.87, 3.15]);  data.addRow(["'01 20 12:00:00'", 0.42, 2.43]);  data.addRow(["'01 20 14:00:00'", 0.67, 3.93]);  data.addRow(["'01 20 16:00:00'", 1.10, 3.34]);  data.addRow(["'01 20 18:00:00'", 0.57, 2.05]);  data.addRow(["'01 20 20:00:00'", 1.07, 2.17]);  data.addRow(["'01 20 22:00:00'", 0.34, 0.40]);  data.addRow(["'01 21 00:00:00'", 0.07, 0.45]);  data.addRow(["'01 21 02:00:00'", 0.00, 0.02]);  data.addRow(["'01 21 04:00:00'", 0.00, 0.02]);  data.addRow(["'01 21 06:00:00'", 0.01, 0.01]);  data.addRow(["'01 21 08:00:00'", 0.03, 0.37]);  data.addRow(["'01 21 10:00:00'", 0.50, 3.00]);  data.addRow(["'01 21 12:00:00'", 1.15, 1.68]);  data.addRow(["'01 21 14:00:00'", 0.81, 1.94]);  data.addRow(["'01 21 16:00:00'", 1.15, 1.28]);  data.addRow(["'01 21 18:00:00'", 0.99, 1.55]);  data.addRow(["'01 21 20:00:00'", 0.40, 0.56]);  data.addRow(["'01 21 22:00:00'", 0.87, 0.41]);  data.addRow(["'01 22 00:00:00'", 1.12, 0.22]);  data.addRow(["'01 22 02:00:00'", 0.03, 0.08]);  data.addRow(["'01 22 04:00:00'", 0.01, 0.01]);  data.addRow(["'01 22 06:00:00'", 0.03, 0.03]);  data.addRow(["'01 22 08:00:00'", 0.06, 1.33]);  data.addRow(["'01 22 10:00:00'", 0.67, 1.02]);  data.addRow(["'01 22 12:00:00'", 5.68, 2.86]);  data.addRow(["'01 22 14:00:00'", 3.23, 2.51]);  data.addRow(["'01 22 16:00:00'", 2.58, 3.85]);  data.addRow(["'01 22 18:00:00'", 2.08, 6.89]);  data.addRow(["'01 22 20:00:00'", 0.45, 0.95]);  data.addRow(["'01 22 22:00:00'", 0.72, 0.35]);  data.addRow(["'01 23 00:00:00'", 0.07, 0.16]);  data.addRow(["'01 23 02:00:00'", 0.01, 0.02]);  data.addRow(["'01 23 04:00:00'", 0.02, 0.01]);  data.addRow(["'01 23 06:00:00'", 0.02, 0.03]);  data.addRow(["'01 23 08:00:00'", 0.02, 0.05]);  data.addRow(["'01 23 10:00:00'", 0.47, 1.50]);  data.addRow(["'01 23 12:00:00'", 2.00, 1.61]);  data.addRow(["'01 23 14:00:00'", 1.15, 1.01]);  data.addRow(["'01 23 16:00:00'", 0.52, 1.01]);  data.addRow(["'01 23 18:00:00'", 0.39, 0.76]);  data.addRow(["'01 23 20:00:00'", 0.24, 0.30]);  data.addRow(["'01 23 22:00:00'", 0.10, 0.38]);  data.addRow(["'01 24 00:00:00'", 0.38, 0.09]);  data.addRow(["'01 24 02:00:00'", 0.02, 0.01]);  data.addRow(["'01 24 04:00:00'", 0.02, 0.00]);  data.addRow(["'01 24 06:00:00'", 0.02, 0.02]);  data.addRow(["'01 24 08:00:00'", 0.04, 0.18]);  data.addRow(["'01 24 10:00:00'", 0.87, 0.80]);  data.addRow(["'01 24 12:00:00'", 0.58, 5.21]);  data.addRow(["'01 24 14:00:00'", 1.02, 1.55]);  data.addRow(["'01 24 16:00:00'", 0.55, 2.34]);  data.addRow(["'01 24 18:00:00'", 0.37, 1.60]);  data.addRow(["'01 24 20:00:00'", 0.23, 0.37]);  data.addRow(["'01 24 22:00:00'", 0.07, 0.51]);  data.addRow(["'01 25 00:00:00'", 0.04, 0.28]);  data.addRow(["'01 25 02:00:00'", 0.02, 0.07]);  data.addRow(["'01 25 04:00:00'", 0.02, 0.84]);  data.addRow(["'01 25 06:00:00'", 0.01, 0.02]);  data.addRow(["'01 25 08:00:00'", 0.00, 0.01]);  data.addRow(["'01 25 10:00:00'", 0.25, 0.19]);  data.addRow(["'01 25 12:00:00'", 0.06, 0.40]);  data.addRow(["'01 25 14:00:00'", 0.16, 0.49]);  data.addRow(["'01 25 16:00:00'", 0.26, 2.38]);  data.addRow(["'01 25 18:00:00'", 0.10, 0.18]);  data.addRow(["'01 25 20:00:00'", 0.35, 0.32]);  data.addRow(["'01 25 22:00:00'", 0.13, 0.38]);  data.addRow(["'01 26 00:00:00'", 0.16, 0.86]);  data.addRow(["'01 26 02:00:00'", 0.01, 0.06]);  data.addRow(["'01 26 04:00:00'", 0.00, 0.02]);  data.addRow(["'01 26 06:00:00'", 0.00, 0.01]);  data.addRow(["'01 26 08:00:00'", 0.01, 0.01]);  data.addRow(["'01 26 10:00:00'", 0.00, 0.02]);  data.addRow(["'01 26 12:00:00'", 0.03, 0.60]);  data.addRow(["'01 26 14:00:00'", 0.22, 0.32]);  data.addRow(["'01 26 16:00:00'", 0.17, 0.66]);  data.addRow(["'01 26 18:00:00'", 0.14, 0.32]);  data.addRow(["'01 26 20:00:00'", 0.08, 0.52]);  data.addRow(["'01 26 22:00:00'", 0.05, 0.41]);  data.addRow(["'01 27 00:00:00'", 0.04, 0.10]);  data.addRow(["'01 27 02:00:00'", 0.25, 0.55]);  data.addRow(["'01 27 04:00:00'", 0.01, 0.25]);  data.addRow(["'01 27 06:00:00'", 0.01, 0.02]);  data.addRow(["'01 27 08:00:00'", 0.21, 6.37]);  data.addRow(["'01 27 10:00:00'", 1.03, 2.27]);  data.addRow(["'01 27 12:00:00'", 1.67, 3.31]);  data.addRow(["'01 27 14:00:00'", 2.22, 1.66]);  data.addRow(["'01 27 16:00:00'", 2.46, 2.97]);  data.addRow(["'01 27 18:00:00'", 3.92, 2.30]);  data.addRow(["'01 27 20:00:00'", 2.10, 1.80]);  data.addRow(["'01 27 22:00:00'", 0.18, 0.74]);  data.addRow(["'01 28 00:00:00'", 0.10, 0.56]);  data.addRow(["'01 28 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 28 04:00:00'", 0.01, 0.00]);  data.addRow(["'01 28 06:00:00'", 0.01, 0.03]);  data.addRow(["'01 28 08:00:00'", 0.03, 0.09]);  data.addRow(["'01 28 10:00:00'", 0.38, 1.26]);  data.addRow(["'01 28 12:00:00'", 3.27, 2.44]);  data.addRow(["'01 28 14:00:00'", 0.59, 1.47]);  data.addRow(["'01 28 16:00:00'", 0.79, 3.73]);  data.addRow(["'01 28 18:00:00'", 1.07, 1.58]);  data.addRow(["'01 28 20:00:00'", 0.18, 0.63]);  data.addRow(["'01 28 22:00:00'", 0.23, 0.27]);  data.addRow(["'01 29 00:00:00'", 0.08, 1.41]);  data.addRow(["'01 29 02:00:00'", 0.05, 0.38]);  data.addRow(["'01 29 04:00:00'", 0.05, 0.02]);  data.addRow(["'01 29 06:00:00'", 0.01, 0.04]);  data.addRow(["'01 29 08:00:00'", 0.04, 0.05]);  data.addRow(["'01 29 10:00:00'", 0.36, 0.87]);  data.addRow(["'01 29 12:00:00'", 0.43, 1.16]);  data.addRow(["'01 29 14:00:00'", 0.32, 0.89]);  data.addRow(["'01 29 16:00:00'", 1.05, 1.45]);  data.addRow(["'01 29 18:00:00'", 1.29, 1.95]);  data.addRow(["'01 29 20:00:00'", 0.24, 2.72]);  data.addRow(["'01 29 22:00:00'", 0.34, 0.37]);  data.addRow(["'01 30 00:00:00'", 0.10, 0.11]);  data.addRow(["'01 30 02:00:00'", 0.07, 0.22]);  data.addRow(["'01 30 04:00:00'", 0.00, 0.03]);  data.addRow(["'01 30 06:00:00'", 0.00, 0.02]);  data.addRow(["'01 30 08:00:00'", 0.09, 0.73]);  data.addRow(["'01 30 10:00:00'", 0.61, 0.61]);  data.addRow(["'01 30 12:00:00'", 0.52, 2.71]);  data.addRow(["'01 30 14:00:00'", 0.76, 3.55]);  data.addRow(["'01 30 16:00:00'", 0.81, 1.39]);  data.addRow(["'01 30 18:00:00'", 0.63, 0.71]);  data.addRow(["'01 30 20:00:00'", 0.12, 2.46]);  data.addRow(["'01 30 22:00:00'", 0.06, 0.09]);  data.addRow(["'01 31 00:00:00'", 0.10, 0.08]);  data.addRow(["'01 31 02:00:00'", 0.01, 0.02]);  data.addRow(["'01 31 04:00:00'", 0.02, 0.01]);  data.addRow(["'01 31 06:00:00'", 0.01, 0.01]);  data.addRow(["'01 31 08:00:00'", 0.04, 0.06]);  data.addRow(["'01 31 10:00:00'", 1.59, 1.22]);  data.addRow(["'01 31 12:00:00'", 1.02, 2.27]);  data.addRow(["'01 31 14:00:00'", 0.25, 0.97]);  data.addRow(["'01 31 16:00:00'", 0.51, 0.92]);  data.addRow(["'01 31 18:00:00'", 0.37, 0.71]);  data.addRow(["'01 31 20:00:00'", 0.05, 0.26]);  data.addRow(["'01 31 22:00:00'", 0.30, 0.06]);  data.addRow(["'02 01 00:00:00'", 0.04, 0.44]);  data.addRow(["'02 01 02:00:00'", 0.04, 0.04]);  data.addRow(["'02 01 04:00:00'", 0.01, 0.02]);  data.addRow(["'02 01 06:00:00'", 0.01, 0.01]);  data.addRow(["'02 01 08:00:00'", 0.01, 0.01]);  data.addRow(["'02 01 10:00:00'", 0.01, 0.02]);  data.addRow(["'02 01 12:00:00'", 0.03, 0.07]);  data.addRow(["'02 01 14:00:00'", 0.07, 1.75]);  data.addRow(["'02 01 16:00:00'", 0.02, 0.05]);  data.addRow(["'02 01 18:00:00'", 0.06, 0.07]);  data.addRow(["'02 01 20:00:00'", 0.03, 0.13]);  data.addRow(["'02 01 22:00:00'", 0.02, 0.06]);  data.addRow(["'02 02 00:00:00'", 0.06, 0.14]);  data.addRow(["'02 02 02:00:00'", 0.03, 0.03]);  data.addRow(["'02 02 04:00:00'", 0.01, 0.01]);  data.addRow(["'02 02 06:00:00'", 0.01, 0.01]);  data.addRow(["'02 02 08:00:00'", 0.02, 0.01]);  data.addRow(["'02 02 10:00:00'", 0.02, 0.11]);  data.addRow(["'02 02 12:00:00'", 0.01, 0.05]);  data.addRow(["'02 02 14:00:00'", 0.02, 0.09]);  data.addRow(["'02 02 16:00:00'", 0.05, 0.38]);  data.addRow(["'02 02 18:00:00'", 0.10, 2.88]);  data.addRow(["'02 02 20:00:00'", 0.05, 0.10]);  data.addRow(["'02 02 22:00:00'", 0.05, 0.24]);  data.addRow(["'02 03 00:00:00'", 0.05, 0.03]);  data.addRow(["'02 03 02:00:00'", 0.03, 0.03]);  data.addRow(["'02 03 04:00:00'", 0.01, 0.01]);  data.addRow(["'02 03 06:00:00'", 0.01, 0.02]);  data.addRow(["'02 03 08:00:00'", 0.02, 0.07]);  data.addRow(["'02 03 10:00:00'", 2.48, 1.83]);  data.addRow(["'02 03 12:00:00'", 1.96, 4.25]);  data.addRow(["'02 03 14:00:00'", 1.71, 3.27]);  data.addRow(["'02 03 16:00:00'", 1.60, 2.65]);  data.addRow(["'02 03 18:00:00'", 0.95, 2.05]);  data.addRow(["'02 03 20:00:00'", 1.21, 1.13]);  data.addRow(["'02 03 22:00:00'", 0.06, 0.69]);  data.addRow(["'02 04 00:00:00'", 0.17, 1.23]);  data.addRow(["'02 04 02:00:00'", 0.04, 0.13]);  data.addRow(["'02 04 04:00:00'", 0.03, 0.04]);  data.addRow(["'02 04 06:00:00'", 0.01, 0.01]);  data.addRow(["'02 04 08:00:00'", 0.02, 0.14]);  data.addRow(["'02 04 10:00:00'", 0.71, 0.78]);  data.addRow(["'02 04 12:00:00'", 0.94, 2.63]);  data.addRow(["'02 04 14:00:00'", 0.90, 1.59]);  data.addRow(["'02 04 16:00:00'", 1.90, 1.99]);  data.addRow(["'02 04 18:00:00'", 0.84, 1.50]);  data.addRow(["'02 04 20:00:00'", 0.13, 0.40]);  data.addRow(["'02 04 22:00:00'", 0.12, 0.42]);  data.addRow(["'02 05 00:00:00'", 0.04, 0.21]);  data.addRow(["'02 05 02:00:00'", 0.05, 0.12]);  data.addRow(["'02 05 04:00:00'", 0.01, 0.27]);  data.addRow(["'02 05 06:00:00'", 0.01, 0.02]);  data.addRow(["'02 05 08:00:00'", 0.12, 0.11]);  data.addRow(["'02 05 10:00:00'", 1.19, 1.44]);  data.addRow(["'02 05 12:00:00'", 2.34, 2.95]);  data.addRow(["'02 05 14:00:00'", 1.37, 3.43]);  data.addRow(["'02 05 16:00:00'", 1.86, 4.53]);  data.addRow(["'02 05 18:00:00'", 0.51, 4.90]);  data.addRow(["'02 05 20:00:00'", 0.59, 0.89]);  data.addRow(["'02 05 22:00:00'", 2.69, 1.11]);  data.addRow(["'02 06 00:00:00'", 0.03, 0.28]);  data.addRow(["'02 06 02:00:00'", 0.16, 2.52]);  data.addRow(["'02 06 04:00:00'", 0.04, 0.32]);  data.addRow(["'02 06 06:00:00'", 0.00, 0.03]);  data.addRow(["'02 06 08:00:00'", 0.02, 0.16]);  data.addRow(["'02 06 10:00:00'", 0.26, 1.07]);  data.addRow(["'02 06 12:00:00'", 1.58, 2.69]);  data.addRow(["'02 06 14:00:00'", 0.41, 2.61]);  data.addRow(["'02 06 16:00:00'", 0.92, 2.75]);  data.addRow(["'02 06 18:00:00'", 0.21, 1.76]);  data.addRow(["'02 06 20:00:00'", 0.22, 0.81]);  data.addRow(["'02 06 22:00:00'", 0.05, 0.35]);  data.addRow(["'02 07 00:00:00'", 0.04, 0.70]);  data.addRow(["'02 07 02:00:00'", 0.03, 0.02]);  data.addRow(["'02 07 04:00:00'", 0.00, 0.02]);  data.addRow(["'02 07 06:00:00'", 0.00, 0.01]);  data.addRow(["'02 07 08:00:00'", 0.08, 0.26]);  data.addRow(["'02 07 10:00:00'", 0.30, 2.69]);  data.addRow(["'02 07 12:00:00'", 0.72, 14.86]);  data.addRow(["'02 07 14:00:00'", 0.81, 11.04]);  data.addRow(["'02 07 16:00:00'", 0.72, 11.80]);  data.addRow(["'02 07 18:00:00'", 0.18, 3.79]);  data.addRow(["'02 07 20:00:00'", 0.11, 0.31]);  data.addRow(["'02 07 22:00:00'", 0.04, 0.21]);  data.addRow(["'02 08 00:00:00'", 1.23, 5.52]);  data.addRow(["'02 08 02:00:00'", 6.02, 0.68]);  data.addRow(["'02 08 04:00:00'", 4.04, 0.07]);  data.addRow(["'02 08 06:00:00'", 0.00, 0.02]);  data.addRow(["'02 08 08:00:00'", 0.01, 0.04]);  data.addRow(["'02 08 10:00:00'", 0.01, 0.12]);  data.addRow(["'02 08 12:00:00'", 0.15, 1.04]);  data.addRow(["'02 08 14:00:00'", 0.20, 7.45]);  data.addRow(["'02 08 16:00:00'", 0.34, 4.31]);  data.addRow(["'02 08 18:00:00'", 0.06, 0.60]);  data.addRow(["'02 08 20:00:00'", 0.02, 0.09]);  data.addRow(["'02 08 22:00:00'", 0.02, 0.02]);  data.addRow(["'02 09 00:00:00'", 0.01, 0.15]);  data.addRow(["'02 09 02:00:00'", 0.01, 0.02]);  data.addRow(["'02 09 04:00:00'", 0.00, 0.01]);  data.addRow(["'02 09 06:00:00'", 0.00, 0.01]);  data.addRow(["'02 09 08:00:00'", 0.00, 0.01]);  data.addRow(["'02 09 10:00:00'", 0.00, 0.01]);  data.addRow(["'02 09 12:00:00'", 0.00, 0.03]);  data.addRow(["'02 09 14:00:00'", 0.08, 0.13]);  data.addRow(["'02 09 16:00:00'", 0.15, 0.22]);  data.addRow(["'02 09 18:00:00'", 0.06, 0.41]);  data.addRow(["'02 09 20:00:00'", 0.23, 1.64]);  data.addRow(["'02 09 22:00:00'", 0.09, 1.75]);  data.addRow(["'02 10 00:00:00'", 0.06, 0.35]);  data.addRow(["'02 10 02:00:00'", 0.10, 0.09]);  data.addRow(["'02 10 04:00:00'", 0.00, 0.00]);  data.addRow(["'02 10 06:00:00'", 0.00, 0.02]);  data.addRow(["'02 10 08:00:00'", 0.01, 0.12]);  data.addRow(["'02 10 10:00:00'", 1.36, 2.33]);  data.addRow(["'02 10 12:00:00'", 1.30, 3.82]);  data.addRow(["'02 10 14:00:00'", 0.31, 4.19]);  data.addRow(["'02 10 16:00:00'", 0.80, 6.63]);  data.addRow(["'02 10 18:00:00'", 0.71, 1.24]);  data.addRow(["'02 10 20:00:00'", 0.15, 0.62]);  data.addRow(["'02 10 22:00:00'", 0.69, 0.86]);  data.addRow(["'02 11 00:00:00'", 0.09, 0.16]);  data.addRow(["'02 11 02:00:00'", 0.03, 0.15]);  data.addRow(["'02 11 04:00:00'", 0.03, 0.03]);  data.addRow(["'02 11 06:00:00'", 0.01, 0.01]);  data.addRow(["'02 11 08:00:00'", 0.02, 0.08]);  data.addRow(["'02 11 10:00:00'", 0.48, 2.20]);  data.addRow(["'02 11 12:00:00'", 1.11, 2.33]);  data.addRow(["'02 11 14:00:00'", 0.27, 1.64]);  data.addRow(["'02 11 16:00:00'", 0.88, 1.60]);  data.addRow(["'02 11 18:00:00'", 0.72, 0.64]);  data.addRow(["'02 11 20:00:00'", 0.37, 0.89]);  data.addRow(["'02 11 22:00:00'", 0.12, 1.21]);  data.addRow(["'02 12 00:00:00'", 0.08, 0.66]);  data.addRow(["'02 12 02:00:00'", 0.03, 0.23]);  data.addRow(["'02 12 04:00:00'", 0.00, 0.01]);  data.addRow(["'02 12 06:00:00'", 0.08, 0.04]);  data.addRow(["'02 12 08:00:00'", 0.06, 0.07]);  data.addRow(["'02 12 10:00:00'", 0.26, 1.58]);  data.addRow(["'02 12 12:00:00'", 0.35, 1.07]);  data.addRow(["'02 12 14:00:00'", 0.54, 1.38]);  data.addRow(["'02 12 16:00:00'", 0.66, 1.58]);  data.addRow(["'02 12 18:00:00'", 0.81, 0.97]);  data.addRow(["'02 12 20:00:00'", 1.35, 1.71]);  data.addRow(["'02 12 22:00:00'", 0.08, 1.31]);  data.addRow(["'02 13 00:00:00'", 0.10, 0.14]);  data.addRow(["'02 13 02:00:00'", 0.01, 0.03]);  data.addRow(["'02 13 04:00:00'", 0.04, 0.06]);  data.addRow(["'02 13 06:00:00'", 0.01, 0.01]);  data.addRow(["'02 13 08:00:00'", 0.06, 0.04]);  data.addRow(["'02 13 10:00:00'", 0.30, 1.96]);  data.addRow(["'02 13 12:00:00'", 0.20, 1.22]);  data.addRow(["'02 13 14:00:00'", 0.25, 0.99]);  data.addRow(["'02 13 16:00:00'", 0.38, 1.22]);  data.addRow(["'02 13 18:00:00'", 0.36, 1.45]);  data.addRow(["'02 13 20:00:00'", 0.65, 0.32]);  data.addRow(["'02 13 22:00:00'", 0.05, 0.21]);  data.addRow(["'02 14 00:00:00'", 0.06, 0.12]);  data.addRow(["'02 14 02:00:00'", 0.03, 0.49]);  data.addRow(["'02 14 04:00:00'", 0.02, 0.00]);  data.addRow(["'02 14 06:00:00'", 0.01, 0.04]);  data.addRow(["'02 14 08:00:00'", 0.03, 0.14]);  data.addRow(["'02 14 10:00:00'", 0.24, 0.79]);  data.addRow(["'02 14 12:00:00'", 0.44, 3.53]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 84.71 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='84'

	
        
      
	