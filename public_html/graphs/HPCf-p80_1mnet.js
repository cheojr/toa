
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'01 17 14:00:00'", 0.32, 0.01]);  data.addRow(["'01 17 16:00:00'", 0.19, 0.01]);  data.addRow(["'01 17 18:00:00'", 0.16, 0.01]);  data.addRow(["'01 17 20:00:00'", 0.04, 0.00]);  data.addRow(["'01 17 22:00:00'", 0.05, 0.00]);  data.addRow(["'01 18 00:00:00'", 0.01, 0.00]);  data.addRow(["'01 18 02:00:00'", 0.01, 0.00]);  data.addRow(["'01 18 04:00:00'", 0.07, 0.01]);  data.addRow(["'01 18 06:00:00'", 0.02, 0.01]);  data.addRow(["'01 18 08:00:00'", 0.10, 0.01]);  data.addRow(["'01 18 10:00:00'", 0.03, 0.00]);  data.addRow(["'01 18 12:00:00'", 0.48, 0.01]);  data.addRow(["'01 18 14:00:00'", 0.01, 0.00]);  data.addRow(["'01 18 16:00:00'", 0.05, 0.00]);  data.addRow(["'01 18 18:00:00'", 0.01, 0.00]);  data.addRow(["'01 18 20:00:00'", 0.03, 0.00]);  data.addRow(["'01 18 22:00:00'", 0.03, 0.00]);  data.addRow(["'01 19 00:00:00'", 0.00, 0.00]);  data.addRow(["'01 19 02:00:00'", 0.01, 0.00]);  data.addRow(["'01 19 04:00:00'", 0.09, 0.00]);  data.addRow(["'01 19 06:00:00'", 0.01, 0.00]);  data.addRow(["'01 19 08:00:00'", 0.03, 0.00]);  data.addRow(["'01 19 10:00:00'", 0.02, 0.00]);  data.addRow(["'01 19 12:00:00'", 0.05, 0.00]);  data.addRow(["'01 19 14:00:00'", 0.08, 0.00]);  data.addRow(["'01 19 16:00:00'", 0.03, 0.00]);  data.addRow(["'01 19 18:00:00'", 0.02, 0.01]);  data.addRow(["'01 19 20:00:00'", 0.06, 0.00]);  data.addRow(["'01 19 22:00:00'", 0.02, 0.00]);  data.addRow(["'01 20 00:00:00'", 0.03, 0.00]);  data.addRow(["'01 20 02:00:00'", 0.01, 0.00]);  data.addRow(["'01 20 04:00:00'", 0.16, 0.01]);  data.addRow(["'01 20 06:00:00'", 0.14, 0.01]);  data.addRow(["'01 20 08:00:00'", 0.06, 0.00]);  data.addRow(["'01 20 10:00:00'", 0.10, 0.00]);  data.addRow(["'01 20 12:00:00'", 0.26, 0.02]);  data.addRow(["'01 20 14:00:00'", 0.18, 0.01]);  data.addRow(["'01 20 16:00:00'", 0.06, 0.00]);  data.addRow(["'01 20 18:00:00'", 0.21, 0.01]);  data.addRow(["'01 20 20:00:00'", 0.07, 0.00]);  data.addRow(["'01 20 22:00:00'", 0.07, 0.00]);  data.addRow(["'01 21 00:00:00'", 0.02, 0.00]);  data.addRow(["'01 21 02:00:00'", 0.03, 0.00]);  data.addRow(["'01 21 04:00:00'", 0.08, 0.01]);  data.addRow(["'01 21 06:00:00'", 0.35, 0.02]);  data.addRow(["'01 21 08:00:00'", 0.03, 0.01]);  data.addRow(["'01 21 10:00:00'", 0.26, 0.02]);  data.addRow(["'01 21 12:00:00'", 0.57, 0.03]);  data.addRow(["'01 21 14:00:00'", 0.42, 0.02]);  data.addRow(["'01 21 16:00:00'", 0.47, 0.03]);  data.addRow(["'01 21 18:00:00'", 0.55, 0.02]);  data.addRow(["'01 21 20:00:00'", 0.28, 0.01]);  data.addRow(["'01 21 22:00:00'", 0.09, 0.00]);  data.addRow(["'01 22 00:00:00'", 0.13, 0.01]);  data.addRow(["'01 22 02:00:00'", 0.00, 0.00]);  data.addRow(["'01 22 04:00:00'", 0.01, 0.01]);  data.addRow(["'01 22 06:00:00'", 0.08, 0.03]);  data.addRow(["'01 22 08:00:00'", 0.08, 0.02]);  data.addRow(["'01 22 10:00:00'", 0.34, 0.02]);  data.addRow(["'01 22 12:00:00'", 0.55, 0.02]);  data.addRow(["'01 22 14:00:00'", 0.64, 0.04]);  data.addRow(["'01 22 16:00:00'", 0.70, 0.03]);  data.addRow(["'01 22 18:00:00'", 0.34, 0.34]);  data.addRow(["'01 22 20:00:00'", 0.34, 3.28]);  data.addRow(["'01 22 22:00:00'", 0.09, 0.01]);  data.addRow(["'01 23 00:00:00'", 0.12, 0.01]);  data.addRow(["'01 23 02:00:00'", 0.16, 0.01]);  data.addRow(["'01 23 04:00:00'", 0.04, 0.00]);  data.addRow(["'01 23 06:00:00'", 0.18, 0.01]);  data.addRow(["'01 23 08:00:00'", 0.17, 0.01]);  data.addRow(["'01 23 10:00:00'", 0.38, 0.02]);  data.addRow(["'01 23 12:00:00'", 0.78, 0.03]);  data.addRow(["'01 23 14:00:00'", 0.45, 0.02]);  data.addRow(["'01 23 16:00:00'", 0.79, 0.03]);  data.addRow(["'01 23 18:00:00'", 0.37, 0.02]);  data.addRow(["'01 23 20:00:00'", 0.13, 0.01]);  data.addRow(["'01 23 22:00:00'", 0.12, 0.01]);  data.addRow(["'01 24 00:00:00'", 0.11, 0.01]);  data.addRow(["'01 24 02:00:00'", 0.03, 0.00]);  data.addRow(["'01 24 04:00:00'", 0.05, 0.00]);  data.addRow(["'01 24 06:00:00'", 0.03, 0.00]);  data.addRow(["'01 24 08:00:00'", 0.10, 0.01]);  data.addRow(["'01 24 10:00:00'", 0.34, 0.02]);  data.addRow(["'01 24 12:00:00'", 0.77, 0.05]);  data.addRow(["'01 24 14:00:00'", 0.51, 0.02]);  data.addRow(["'01 24 16:00:00'", 0.54, 0.30]);  data.addRow(["'01 24 18:00:00'", 0.30, 0.02]);  data.addRow(["'01 24 20:00:00'", 0.04, 0.00]);  data.addRow(["'01 24 22:00:00'", 0.02, 0.00]);  data.addRow(["'01 25 00:00:00'", 0.09, 0.01]);  data.addRow(["'01 25 02:00:00'", 0.03, 0.01]);  data.addRow(["'01 25 04:00:00'", 0.03, 0.01]);  data.addRow(["'01 25 06:00:00'", 0.01, 0.00]);  data.addRow(["'01 25 08:00:00'", 0.01, 0.00]);  data.addRow(["'01 25 10:00:00'", 0.04, 0.00]);  data.addRow(["'01 25 12:00:00'", 0.09, 0.00]);  data.addRow(["'01 25 14:00:00'", 0.07, 0.01]);  data.addRow(["'01 25 16:00:00'", 0.07, 0.00]);  data.addRow(["'01 25 18:00:00'", 0.06, 0.00]);  data.addRow(["'01 25 20:00:00'", 0.05, 0.00]);  data.addRow(["'01 25 22:00:00'", 0.03, 0.00]);  data.addRow(["'01 26 00:00:00'", 0.02, 0.00]);  data.addRow(["'01 26 02:00:00'", 0.05, 0.00]);  data.addRow(["'01 26 04:00:00'", 0.00, 0.00]);  data.addRow(["'01 26 06:00:00'", 0.04, 0.01]);  data.addRow(["'01 26 08:00:00'", 0.01, 0.00]);  data.addRow(["'01 26 10:00:00'", 0.02, 0.00]);  data.addRow(["'01 26 12:00:00'", 0.04, 0.00]);  data.addRow(["'01 26 14:00:00'", 0.01, 0.00]);  data.addRow(["'01 26 16:00:00'", 0.01, 0.00]);  data.addRow(["'01 26 18:00:00'", 0.04, 0.00]);  data.addRow(["'01 26 20:00:00'", 0.05, 0.00]);  data.addRow(["'01 26 22:00:00'", 0.10, 0.00]);  data.addRow(["'01 27 00:00:00'", 0.02, 0.00]);  data.addRow(["'01 27 02:00:00'", 0.01, 0.00]);  data.addRow(["'01 27 04:00:00'", 0.03, 0.00]);  data.addRow(["'01 27 06:00:00'", 0.02, 0.00]);  data.addRow(["'01 27 08:00:00'", 0.24, 0.01]);  data.addRow(["'01 27 10:00:00'", 0.34, 0.02]);  data.addRow(["'01 27 12:00:00'", 0.37, 0.02]);  data.addRow(["'01 27 14:00:00'", 0.43, 0.02]);  data.addRow(["'01 27 16:00:00'", 0.59, 0.03]);  data.addRow(["'01 27 18:00:00'", 0.47, 0.02]);  data.addRow(["'01 27 20:00:00'", 0.32, 0.01]);  data.addRow(["'01 27 22:00:00'", 0.05, 0.02]);  data.addRow(["'01 28 00:00:00'", 0.05, 0.01]);  data.addRow(["'01 28 02:00:00'", 0.05, 0.01]);  data.addRow(["'01 28 04:00:00'", 0.07, 0.01]);  data.addRow(["'01 28 06:00:00'", 0.16, 0.01]);  data.addRow(["'01 28 08:00:00'", 0.18, 0.02]);  data.addRow(["'01 28 10:00:00'", 0.54, 0.04]);  data.addRow(["'01 28 12:00:00'", 0.54, 0.03]);  data.addRow(["'01 28 14:00:00'", 0.72, 0.04]);  data.addRow(["'01 28 16:00:00'", 0.58, 0.03]);  data.addRow(["'01 28 18:00:00'", 0.41, 0.03]);  data.addRow(["'01 28 20:00:00'", 0.21, 0.01]);  data.addRow(["'01 28 22:00:00'", 0.13, 0.01]);  data.addRow(["'01 29 00:00:00'", 0.03, 0.00]);  data.addRow(["'01 29 02:00:00'", 0.02, 0.00]);  data.addRow(["'01 29 04:00:00'", 0.04, 0.00]);  data.addRow(["'01 29 06:00:00'", 0.11, 0.01]);  data.addRow(["'01 29 08:00:00'", 0.27, 0.01]);  data.addRow(["'01 29 10:00:00'", 0.76, 0.07]);  data.addRow(["'01 29 12:00:00'", 0.98, 0.08]);  data.addRow(["'01 29 14:00:00'", 0.33, 0.03]);  data.addRow(["'01 29 16:00:00'", 0.73, 0.10]);  data.addRow(["'01 29 18:00:00'", 0.63, 0.06]);  data.addRow(["'01 29 20:00:00'", 0.16, 0.01]);  data.addRow(["'01 29 22:00:00'", 0.23, 0.01]);  data.addRow(["'01 30 00:00:00'", 0.09, 0.01]);  data.addRow(["'01 30 02:00:00'", 0.09, 0.01]);  data.addRow(["'01 30 04:00:00'", 0.01, 0.00]);  data.addRow(["'01 30 06:00:00'", 0.14, 0.01]);  data.addRow(["'01 30 08:00:00'", 0.17, 0.01]);  data.addRow(["'01 30 10:00:00'", 0.35, 0.02]);  data.addRow(["'01 30 12:00:00'", 0.60, 0.02]);  data.addRow(["'01 30 14:00:00'", 0.37, 0.03]);  data.addRow(["'01 30 16:00:00'", 0.51, 0.02]);  data.addRow(["'01 30 18:00:00'", 0.23, 0.01]);  data.addRow(["'01 30 20:00:00'", 0.14, 0.01]);  data.addRow(["'01 30 22:00:00'", 0.05, 0.00]);  data.addRow(["'01 31 00:00:00'", 0.04, 0.00]);  data.addRow(["'01 31 02:00:00'", 0.00, 0.00]);  data.addRow(["'01 31 04:00:00'", 0.07, 0.00]);  data.addRow(["'01 31 06:00:00'", 0.13, 0.00]);  data.addRow(["'01 31 08:00:00'", 0.20, 0.01]);  data.addRow(["'01 31 10:00:00'", 0.97, 1.94]);  data.addRow(["'01 31 12:00:00'", 4.06, 1.71]);  data.addRow(["'01 31 14:00:00'", 6.33, 2.23]);  data.addRow(["'01 31 16:00:00'", 9.12, 0.74]);  data.addRow(["'01 31 18:00:00'", 0.38, 0.01]);  data.addRow(["'01 31 20:00:00'", 0.07, 0.00]);  data.addRow(["'01 31 22:00:00'", 0.02, 0.00]);  data.addRow(["'02 01 00:00:00'", 0.08, 0.00]);  data.addRow(["'02 01 02:00:00'", 0.01, 0.00]);  data.addRow(["'02 01 04:00:00'", 0.00, 0.00]);  data.addRow(["'02 01 06:00:00'", 0.04, 0.00]);  data.addRow(["'02 01 08:00:00'", 0.07, 0.01]);  data.addRow(["'02 01 10:00:00'", 0.03, 0.00]);  data.addRow(["'02 01 12:00:00'", 0.02, 0.02]);  data.addRow(["'02 01 14:00:00'", 0.06, 0.00]);  data.addRow(["'02 01 16:00:00'", 0.02, 0.00]);  data.addRow(["'02 01 18:00:00'", 0.12, 0.02]);  data.addRow(["'02 01 20:00:00'", 0.18, 0.02]);  data.addRow(["'02 01 22:00:00'", 0.16, 0.02]);  data.addRow(["'02 02 00:00:00'", 0.14, 0.02]);  data.addRow(["'02 02 02:00:00'", 0.17, 0.02]);  data.addRow(["'02 02 04:00:00'", 0.13, 0.02]);  data.addRow(["'02 02 06:00:00'", 0.15, 0.02]);  data.addRow(["'02 02 08:00:00'", 0.15, 0.02]);  data.addRow(["'02 02 10:00:00'", 0.13, 0.02]);  data.addRow(["'02 02 12:00:00'", 0.19, 0.02]);  data.addRow(["'02 02 14:00:00'", 0.23, 0.02]);  data.addRow(["'02 02 16:00:00'", 0.28, 0.02]);  data.addRow(["'02 02 18:00:00'", 0.22, 0.02]);  data.addRow(["'02 02 20:00:00'", 0.08, 0.01]);  data.addRow(["'02 02 22:00:00'", 0.06, 0.01]);  data.addRow(["'02 03 00:00:00'", 0.05, 0.00]);  data.addRow(["'02 03 02:00:00'", 0.01, 0.00]);  data.addRow(["'02 03 04:00:00'", 0.00, 0.00]);  data.addRow(["'02 03 06:00:00'", 0.09, 0.00]);  data.addRow(["'02 03 08:00:00'", 0.25, 0.01]);  data.addRow(["'02 03 10:00:00'", 1.51, 0.05]);  data.addRow(["'02 03 12:00:00'", 5.45, 2.38]);  data.addRow(["'02 03 14:00:00'", 5.52, 1.84]);  data.addRow(["'02 03 16:00:00'", 10.79, 0.54]);  data.addRow(["'02 03 18:00:00'", 3.96, 0.12]);  data.addRow(["'02 03 20:00:00'", 0.35, 0.02]);  data.addRow(["'02 03 22:00:00'", 0.05, 0.01]);  data.addRow(["'02 04 00:00:00'", 0.17, 0.02]);  data.addRow(["'02 04 02:00:00'", 0.11, 0.01]);  data.addRow(["'02 04 04:00:00'", 0.13, 0.01]);  data.addRow(["'02 04 06:00:00'", 0.13, 0.01]);  data.addRow(["'02 04 08:00:00'", 0.34, 0.02]);  data.addRow(["'02 04 10:00:00'", 2.19, 0.12]);  data.addRow(["'02 04 12:00:00'", 6.79, 0.26]);  data.addRow(["'02 04 14:00:00'", 8.17, 2.63]);  data.addRow(["'02 04 16:00:00'", 3.90, 0.31]);  data.addRow(["'02 04 18:00:00'", 0.92, 0.21]);  data.addRow(["'02 04 20:00:00'", 0.31, 0.02]);  data.addRow(["'02 04 22:00:00'", 0.08, 0.01]);  data.addRow(["'02 05 00:00:00'", 0.05, 0.01]);  data.addRow(["'02 05 02:00:00'", 0.08, 0.01]);  data.addRow(["'02 05 04:00:00'", 0.03, 0.00]);  data.addRow(["'02 05 06:00:00'", 0.08, 0.01]);  data.addRow(["'02 05 08:00:00'", 0.14, 0.01]);  data.addRow(["'02 05 10:00:00'", 3.88, 2.41]);  data.addRow(["'02 05 12:00:00'", 5.28, 0.59]);  data.addRow(["'02 05 14:00:00'", 0.63, 0.63]);  data.addRow(["'02 05 16:00:00'", 0.48, 0.03]);  data.addRow(["'02 05 18:00:00'", 0.68, 0.02]);  data.addRow(["'02 05 20:00:00'", 0.38, 0.01]);  data.addRow(["'02 05 22:00:00'", 0.21, 0.01]);  data.addRow(["'02 06 00:00:00'", 0.06, 0.00]);  data.addRow(["'02 06 02:00:00'", 0.02, 0.00]);  data.addRow(["'02 06 04:00:00'", 0.04, 0.00]);  data.addRow(["'02 06 06:00:00'", 0.06, 0.00]);  data.addRow(["'02 06 08:00:00'", 0.17, 0.01]);  data.addRow(["'02 06 10:00:00'", 0.56, 0.05]);  data.addRow(["'02 06 12:00:00'", 3.25, 0.43]);  data.addRow(["'02 06 14:00:00'", 3.46, 0.15]);  data.addRow(["'02 06 16:00:00'", 0.98, 0.07]);  data.addRow(["'02 06 18:00:00'", 0.33, 0.04]);  data.addRow(["'02 06 20:00:00'", 0.43, 0.03]);  data.addRow(["'02 06 22:00:00'", 0.10, 0.02]);  data.addRow(["'02 07 00:00:00'", 0.11, 0.02]);  data.addRow(["'02 07 02:00:00'", 0.14, 0.03]);  data.addRow(["'02 07 04:00:00'", 0.04, 0.02]);  data.addRow(["'02 07 06:00:00'", 0.05, 0.02]);  data.addRow(["'02 07 08:00:00'", 0.24, 0.02]);  data.addRow(["'02 07 10:00:00'", 0.46, 0.07]);  data.addRow(["'02 07 12:00:00'", 0.70, 0.08]);  data.addRow(["'02 07 14:00:00'", 1.39, 1.05]);  data.addRow(["'02 07 16:00:00'", 3.53, 1.28]);  data.addRow(["'02 07 18:00:00'", 0.32, 0.04]);  data.addRow(["'02 07 20:00:00'", 0.13, 0.03]);  data.addRow(["'02 07 22:00:00'", 0.04, 0.02]);  data.addRow(["'02 08 00:00:00'", 0.02, 0.02]);  data.addRow(["'02 08 02:00:00'", 0.08, 0.03]);  data.addRow(["'02 08 04:00:00'", 0.01, 0.02]);  data.addRow(["'02 08 06:00:00'", 0.01, 0.02]);  data.addRow(["'02 08 08:00:00'", 0.05, 0.02]);  data.addRow(["'02 08 10:00:00'", 0.15, 0.03]);  data.addRow(["'02 08 12:00:00'", 0.16, 0.03]);  data.addRow(["'02 08 14:00:00'", 0.25, 0.03]);  data.addRow(["'02 08 16:00:00'", 0.32, 0.04]);  data.addRow(["'02 08 18:00:00'", 0.15, 0.03]);  data.addRow(["'02 08 20:00:00'", 0.15, 0.03]);  data.addRow(["'02 08 22:00:00'", 0.15, 0.03]);  data.addRow(["'02 09 00:00:00'", 0.22, 0.03]);  data.addRow(["'02 09 02:00:00'", 0.12, 0.03]);  data.addRow(["'02 09 04:00:00'", 0.04, 0.01]);  data.addRow(["'02 09 06:00:00'", 0.03, 0.01]);  data.addRow(["'02 09 08:00:00'", 0.06, 0.01]);  data.addRow(["'02 09 10:00:00'", 0.03, 0.02]);  data.addRow(["'02 09 12:00:00'", 0.04, 0.02]);  data.addRow(["'02 09 14:00:00'", 0.03, 0.02]);  data.addRow(["'02 09 16:00:00'", 0.04, 0.02]);  data.addRow(["'02 09 18:00:00'", 0.12, 0.02]);  data.addRow(["'02 09 20:00:00'", 0.05, 0.02]);  data.addRow(["'02 09 22:00:00'", 0.06, 0.02]);  data.addRow(["'02 10 00:00:00'", 0.05, 0.02]);  data.addRow(["'02 10 02:00:00'", 0.28, 0.02]);  data.addRow(["'02 10 04:00:00'", 0.12, 0.02]);  data.addRow(["'02 10 06:00:00'", 0.05, 0.02]);  data.addRow(["'02 10 08:00:00'", 0.28, 0.03]);  data.addRow(["'02 10 10:00:00'", 0.28, 0.02]);  data.addRow(["'02 10 12:00:00'", 0.48, 0.03]);  data.addRow(["'02 10 14:00:00'", 0.24, 0.06]);  data.addRow(["'02 10 16:00:00'", 0.37, 0.03]);  data.addRow(["'02 10 18:00:00'", 0.36, 0.03]);  data.addRow(["'02 10 20:00:00'", 0.08, 0.03]);  data.addRow(["'02 10 22:00:00'", 0.14, 0.02]);  data.addRow(["'02 11 00:00:00'", 0.04, 0.02]);  data.addRow(["'02 11 02:00:00'", 0.09, 0.02]);  data.addRow(["'02 11 04:00:00'", 0.13, 0.02]);  data.addRow(["'02 11 06:00:00'", 0.08, 0.02]);  data.addRow(["'02 11 08:00:00'", 0.09, 0.02]);  data.addRow(["'02 11 10:00:00'", 0.37, 0.06]);  data.addRow(["'02 11 12:00:00'", 0.79, 0.11]);  data.addRow(["'02 11 14:00:00'", 1.07, 0.20]);  data.addRow(["'02 11 16:00:00'", 0.83, 0.16]);  data.addRow(["'02 11 18:00:00'", 0.86, 0.17]);  data.addRow(["'02 11 20:00:00'", 1.27, 0.20]);  data.addRow(["'02 11 22:00:00'", 0.85, 0.18]);  data.addRow(["'02 12 00:00:00'", 0.87, 0.18]);  data.addRow(["'02 12 02:00:00'", 0.74, 0.18]);  data.addRow(["'02 12 04:00:00'", 0.72, 0.17]);  data.addRow(["'02 12 06:00:00'", 0.69, 0.17]);  data.addRow(["'02 12 08:00:00'", 0.85, 0.17]);  data.addRow(["'02 12 10:00:00'", 0.89, 0.17]);  data.addRow(["'02 12 12:00:00'", 1.01, 0.21]);  data.addRow(["'02 12 14:00:00'", 1.30, 0.23]);  data.addRow(["'02 12 16:00:00'", 1.09, 0.24]);  data.addRow(["'02 12 18:00:00'", 1.07, 0.20]);  data.addRow(["'02 12 20:00:00'", 0.80, 0.18]);  data.addRow(["'02 12 22:00:00'", 0.75, 0.17]);  data.addRow(["'02 13 00:00:00'", 0.92, 0.19]);  data.addRow(["'02 13 02:00:00'", 0.71, 0.17]);  data.addRow(["'02 13 04:00:00'", 0.69, 0.17]);  data.addRow(["'02 13 06:00:00'", 0.75, 0.17]);  data.addRow(["'02 13 08:00:00'", 0.72, 0.17]);  data.addRow(["'02 13 10:00:00'", 1.07, 0.21]);  data.addRow(["'02 13 12:00:00'", 0.67, 0.10]);  data.addRow(["'02 13 14:00:00'", 0.52, 0.04]);  data.addRow(["'02 13 16:00:00'", 0.46, 0.04]);  data.addRow(["'02 13 18:00:00'", 0.42, 0.03]);  data.addRow(["'02 13 20:00:00'", 0.17, 0.02]);  data.addRow(["'02 13 22:00:00'", 0.21, 0.03]);  data.addRow(["'02 14 00:00:00'", 0.04, 0.02]);  data.addRow(["'02 14 02:00:00'", 0.02, 0.02]);  data.addRow(["'02 14 04:00:00'", 0.06, 0.02]);  data.addRow(["'02 14 06:00:00'", 0.03, 0.02]);  data.addRow(["'02 14 08:00:00'", 0.07, 0.02]);  data.addRow(["'02 14 10:00:00'", 0.23, 0.03]);  data.addRow(["'02 14 12:00:00'", 0.66, 0.07]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='80 Traffic Network Max: 52.70 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='52'

	
        
      
	