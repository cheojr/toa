
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'01 17 14:00:00'", 0.28, 0.18]);  data.addRow(["'01 17 16:00:00'", 0.16, 0.13]);  data.addRow(["'01 17 18:00:00'", 0.13, 0.10]);  data.addRow(["'01 17 20:00:00'", 0.04, 0.05]);  data.addRow(["'01 17 22:00:00'", 0.04, 0.03]);  data.addRow(["'01 18 00:00:00'", 0.01, 0.03]);  data.addRow(["'01 18 02:00:00'", 0.01, 0.02]);  data.addRow(["'01 18 04:00:00'", 0.05, 0.14]);  data.addRow(["'01 18 06:00:00'", 0.02, 0.12]);  data.addRow(["'01 18 08:00:00'", 0.08, 0.12]);  data.addRow(["'01 18 10:00:00'", 0.03, 0.04]);  data.addRow(["'01 18 12:00:00'", 0.34, 0.22]);  data.addRow(["'01 18 14:00:00'", 0.01, 0.05]);  data.addRow(["'01 18 16:00:00'", 0.05, 0.04]);  data.addRow(["'01 18 18:00:00'", 0.01, 0.04]);  data.addRow(["'01 18 20:00:00'", 0.03, 0.05]);  data.addRow(["'01 18 22:00:00'", 0.03, 0.04]);  data.addRow(["'01 19 00:00:00'", 0.00, 0.04]);  data.addRow(["'01 19 02:00:00'", 0.01, 0.05]);  data.addRow(["'01 19 04:00:00'", 0.07, 0.05]);  data.addRow(["'01 19 06:00:00'", 0.01, 0.02]);  data.addRow(["'01 19 08:00:00'", 0.02, 0.05]);  data.addRow(["'01 19 10:00:00'", 0.02, 0.03]);  data.addRow(["'01 19 12:00:00'", 0.04, 0.06]);  data.addRow(["'01 19 14:00:00'", 0.06, 0.06]);  data.addRow(["'01 19 16:00:00'", 0.03, 0.04]);  data.addRow(["'01 19 18:00:00'", 0.02, 0.07]);  data.addRow(["'01 19 20:00:00'", 0.05, 0.04]);  data.addRow(["'01 19 22:00:00'", 0.02, 0.02]);  data.addRow(["'01 20 00:00:00'", 0.02, 0.04]);  data.addRow(["'01 20 02:00:00'", 0.01, 0.03]);  data.addRow(["'01 20 04:00:00'", 0.16, 0.14]);  data.addRow(["'01 20 06:00:00'", 0.11, 0.08]);  data.addRow(["'01 20 08:00:00'", 0.05, 0.05]);  data.addRow(["'01 20 10:00:00'", 0.08, 0.05]);  data.addRow(["'01 20 12:00:00'", 0.26, 0.20]);  data.addRow(["'01 20 14:00:00'", 0.15, 0.12]);  data.addRow(["'01 20 16:00:00'", 0.05, 0.05]);  data.addRow(["'01 20 18:00:00'", 0.19, 0.14]);  data.addRow(["'01 20 20:00:00'", 0.06, 0.06]);  data.addRow(["'01 20 22:00:00'", 0.06, 0.06]);  data.addRow(["'01 21 00:00:00'", 0.02, 0.05]);  data.addRow(["'01 21 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 21 04:00:00'", 0.06, 0.08]);  data.addRow(["'01 21 06:00:00'", 0.25, 0.35]);  data.addRow(["'01 21 08:00:00'", 0.03, 0.19]);  data.addRow(["'01 21 10:00:00'", 0.26, 0.17]);  data.addRow(["'01 21 12:00:00'", 0.51, 0.35]);  data.addRow(["'01 21 14:00:00'", 0.35, 0.26]);  data.addRow(["'01 21 16:00:00'", 0.44, 0.30]);  data.addRow(["'01 21 18:00:00'", 0.42, 0.24]);  data.addRow(["'01 21 20:00:00'", 0.22, 0.14]);  data.addRow(["'01 21 22:00:00'", 0.07, 0.06]);  data.addRow(["'01 22 00:00:00'", 0.10, 0.08]);  data.addRow(["'01 22 02:00:00'", 0.01, 0.04]);  data.addRow(["'01 22 04:00:00'", 0.01, 0.16]);  data.addRow(["'01 22 06:00:00'", 0.10, 0.40]);  data.addRow(["'01 22 08:00:00'", 0.06, 0.34]);  data.addRow(["'01 22 10:00:00'", 0.28, 0.19]);  data.addRow(["'01 22 12:00:00'", 0.45, 0.33]);  data.addRow(["'01 22 14:00:00'", 0.54, 0.38]);  data.addRow(["'01 22 16:00:00'", 0.58, 0.40]);  data.addRow(["'01 22 18:00:00'", 0.44, 0.44]);  data.addRow(["'01 22 20:00:00'", 1.59, 2.59]);  data.addRow(["'01 22 22:00:00'", 0.12, 0.11]);  data.addRow(["'01 23 00:00:00'", 0.11, 0.09]);  data.addRow(["'01 23 02:00:00'", 0.12, 0.08]);  data.addRow(["'01 23 04:00:00'", 0.04, 0.06]);  data.addRow(["'01 23 06:00:00'", 0.14, 0.12]);  data.addRow(["'01 23 08:00:00'", 0.14, 0.09]);  data.addRow(["'01 23 10:00:00'", 0.36, 0.28]);  data.addRow(["'01 23 12:00:00'", 0.62, 0.37]);  data.addRow(["'01 23 14:00:00'", 0.37, 0.23]);  data.addRow(["'01 23 16:00:00'", 0.64, 0.42]);  data.addRow(["'01 23 18:00:00'", 0.31, 0.21]);  data.addRow(["'01 23 20:00:00'", 0.11, 0.09]);  data.addRow(["'01 23 22:00:00'", 0.11, 0.10]);  data.addRow(["'01 24 00:00:00'", 0.09, 0.12]);  data.addRow(["'01 24 02:00:00'", 0.03, 0.03]);  data.addRow(["'01 24 04:00:00'", 0.04, 0.07]);  data.addRow(["'01 24 06:00:00'", 0.03, 0.05]);  data.addRow(["'01 24 08:00:00'", 0.09, 0.07]);  data.addRow(["'01 24 10:00:00'", 0.29, 0.22]);  data.addRow(["'01 24 12:00:00'", 0.67, 0.51]);  data.addRow(["'01 24 14:00:00'", 0.43, 0.29]);  data.addRow(["'01 24 16:00:00'", 0.57, 0.53]);  data.addRow(["'01 24 18:00:00'", 0.26, 0.17]);  data.addRow(["'01 24 20:00:00'", 0.04, 0.05]);  data.addRow(["'01 24 22:00:00'", 0.02, 0.03]);  data.addRow(["'01 25 00:00:00'", 0.07, 0.09]);  data.addRow(["'01 25 02:00:00'", 0.02, 0.07]);  data.addRow(["'01 25 04:00:00'", 0.03, 0.05]);  data.addRow(["'01 25 06:00:00'", 0.01, 0.02]);  data.addRow(["'01 25 08:00:00'", 0.01, 0.04]);  data.addRow(["'01 25 10:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 12:00:00'", 0.07, 0.05]);  data.addRow(["'01 25 14:00:00'", 0.06, 0.06]);  data.addRow(["'01 25 16:00:00'", 0.06, 0.05]);  data.addRow(["'01 25 18:00:00'", 0.05, 0.05]);  data.addRow(["'01 25 20:00:00'", 0.04, 0.04]);  data.addRow(["'01 25 22:00:00'", 0.02, 0.03]);  data.addRow(["'01 26 00:00:00'", 0.01, 0.02]);  data.addRow(["'01 26 02:00:00'", 0.04, 0.03]);  data.addRow(["'01 26 04:00:00'", 0.01, 0.04]);  data.addRow(["'01 26 06:00:00'", 0.03, 0.11]);  data.addRow(["'01 26 08:00:00'", 0.01, 0.04]);  data.addRow(["'01 26 10:00:00'", 0.02, 0.03]);  data.addRow(["'01 26 12:00:00'", 0.04, 0.04]);  data.addRow(["'01 26 14:00:00'", 0.01, 0.01]);  data.addRow(["'01 26 16:00:00'", 0.01, 0.02]);  data.addRow(["'01 26 18:00:00'", 0.03, 0.03]);  data.addRow(["'01 26 20:00:00'", 0.05, 0.04]);  data.addRow(["'01 26 22:00:00'", 0.07, 0.07]);  data.addRow(["'01 27 00:00:00'", 0.02, 0.04]);  data.addRow(["'01 27 02:00:00'", 0.01, 0.02]);  data.addRow(["'01 27 04:00:00'", 0.02, 0.04]);  data.addRow(["'01 27 06:00:00'", 0.02, 0.03]);  data.addRow(["'01 27 08:00:00'", 0.17, 0.11]);  data.addRow(["'01 27 10:00:00'", 0.29, 0.22]);  data.addRow(["'01 27 12:00:00'", 0.31, 0.24]);  data.addRow(["'01 27 14:00:00'", 0.36, 0.23]);  data.addRow(["'01 27 16:00:00'", 0.48, 0.36]);  data.addRow(["'01 27 18:00:00'", 0.36, 0.23]);  data.addRow(["'01 27 20:00:00'", 0.24, 0.15]);  data.addRow(["'01 27 22:00:00'", 0.05, 0.06]);  data.addRow(["'01 28 00:00:00'", 0.04, 0.06]);  data.addRow(["'01 28 02:00:00'", 0.04, 0.09]);  data.addRow(["'01 28 04:00:00'", 0.08, 0.06]);  data.addRow(["'01 28 06:00:00'", 0.16, 0.14]);  data.addRow(["'01 28 08:00:00'", 0.17, 0.22]);  data.addRow(["'01 28 10:00:00'", 0.50, 0.44]);  data.addRow(["'01 28 12:00:00'", 0.48, 0.33]);  data.addRow(["'01 28 14:00:00'", 0.63, 0.41]);  data.addRow(["'01 28 16:00:00'", 0.51, 0.34]);  data.addRow(["'01 28 18:00:00'", 0.36, 0.35]);  data.addRow(["'01 28 20:00:00'", 0.18, 0.19]);  data.addRow(["'01 28 22:00:00'", 0.11, 0.09]);  data.addRow(["'01 29 00:00:00'", 0.04, 0.07]);  data.addRow(["'01 29 02:00:00'", 0.02, 0.03]);  data.addRow(["'01 29 04:00:00'", 0.04, 0.04]);  data.addRow(["'01 29 06:00:00'", 0.14, 0.12]);  data.addRow(["'01 29 08:00:00'", 0.22, 0.16]);  data.addRow(["'01 29 10:00:00'", 0.73, 0.64]);  data.addRow(["'01 29 12:00:00'", 0.94, 0.75]);  data.addRow(["'01 29 14:00:00'", 0.34, 0.32]);  data.addRow(["'01 29 16:00:00'", 0.66, 0.55]);  data.addRow(["'01 29 18:00:00'", 0.60, 0.46]);  data.addRow(["'01 29 20:00:00'", 0.13, 0.13]);  data.addRow(["'01 29 22:00:00'", 0.18, 0.13]);  data.addRow(["'01 30 00:00:00'", 0.08, 0.09]);  data.addRow(["'01 30 02:00:00'", 0.07, 0.08]);  data.addRow(["'01 30 04:00:00'", 0.02, 0.03]);  data.addRow(["'01 30 06:00:00'", 0.11, 0.08]);  data.addRow(["'01 30 08:00:00'", 0.13, 0.10]);  data.addRow(["'01 30 10:00:00'", 0.33, 0.26]);  data.addRow(["'01 30 12:00:00'", 0.50, 0.35]);  data.addRow(["'01 30 14:00:00'", 0.32, 0.33]);  data.addRow(["'01 30 16:00:00'", 0.42, 0.29]);  data.addRow(["'01 30 18:00:00'", 0.21, 0.18]);  data.addRow(["'01 30 20:00:00'", 0.12, 0.11]);  data.addRow(["'01 30 22:00:00'", 0.04, 0.05]);  data.addRow(["'01 31 00:00:00'", 0.03, 0.03]);  data.addRow(["'01 31 02:00:00'", 0.00, 0.01]);  data.addRow(["'01 31 04:00:00'", 0.05, 0.06]);  data.addRow(["'01 31 06:00:00'", 0.10, 0.07]);  data.addRow(["'01 31 08:00:00'", 0.15, 0.12]);  data.addRow(["'01 31 10:00:00'", 1.61, 1.95]);  data.addRow(["'01 31 12:00:00'", 3.90, 2.69]);  data.addRow(["'01 31 14:00:00'", 5.51, 4.12]);  data.addRow(["'01 31 16:00:00'", 6.80, 3.70]);  data.addRow(["'01 31 18:00:00'", 0.30, 0.17]);  data.addRow(["'01 31 20:00:00'", 0.06, 0.06]);  data.addRow(["'01 31 22:00:00'", 0.02, 0.02]);  data.addRow(["'02 01 00:00:00'", 0.06, 0.05]);  data.addRow(["'02 01 02:00:00'", 0.01, 0.03]);  data.addRow(["'02 01 04:00:00'", 0.00, 0.01]);  data.addRow(["'02 01 06:00:00'", 0.03, 0.04]);  data.addRow(["'02 01 08:00:00'", 0.09, 0.12]);  data.addRow(["'02 01 10:00:00'", 0.03, 0.03]);  data.addRow(["'02 01 12:00:00'", 0.03, 0.06]);  data.addRow(["'02 01 14:00:00'", 0.04, 0.04]);  data.addRow(["'02 01 16:00:00'", 0.02, 0.05]);  data.addRow(["'02 01 18:00:00'", 0.14, 0.16]);  data.addRow(["'02 01 20:00:00'", 0.18, 0.19]);  data.addRow(["'02 01 22:00:00'", 0.18, 0.19]);  data.addRow(["'02 02 00:00:00'", 0.16, 0.16]);  data.addRow(["'02 02 02:00:00'", 0.18, 0.19]);  data.addRow(["'02 02 04:00:00'", 0.15, 0.15]);  data.addRow(["'02 02 06:00:00'", 0.16, 0.14]);  data.addRow(["'02 02 08:00:00'", 0.16, 0.15]);  data.addRow(["'02 02 10:00:00'", 0.15, 0.16]);  data.addRow(["'02 02 12:00:00'", 0.19, 0.17]);  data.addRow(["'02 02 14:00:00'", 0.21, 0.17]);  data.addRow(["'02 02 16:00:00'", 0.26, 0.23]);  data.addRow(["'02 02 18:00:00'", 0.21, 0.18]);  data.addRow(["'02 02 20:00:00'", 0.07, 0.07]);  data.addRow(["'02 02 22:00:00'", 0.05, 0.08]);  data.addRow(["'02 03 00:00:00'", 0.04, 0.07]);  data.addRow(["'02 03 02:00:00'", 0.01, 0.02]);  data.addRow(["'02 03 04:00:00'", 0.00, 0.06]);  data.addRow(["'02 03 06:00:00'", 0.06, 0.08]);  data.addRow(["'02 03 08:00:00'", 0.18, 0.09]);  data.addRow(["'02 03 10:00:00'", 1.17, 0.71]);  data.addRow(["'02 03 12:00:00'", 5.33, 4.14]);  data.addRow(["'02 03 14:00:00'", 4.95, 3.74]);  data.addRow(["'02 03 16:00:00'", 7.92, 4.58]);  data.addRow(["'02 03 18:00:00'", 2.89, 1.71]);  data.addRow(["'02 03 20:00:00'", 0.29, 0.25]);  data.addRow(["'02 03 22:00:00'", 0.07, 0.13]);  data.addRow(["'02 04 00:00:00'", 0.17, 0.18]);  data.addRow(["'02 04 02:00:00'", 0.12, 0.17]);  data.addRow(["'02 04 04:00:00'", 0.13, 0.17]);  data.addRow(["'02 04 06:00:00'", 0.13, 0.15]);  data.addRow(["'02 04 08:00:00'", 0.27, 0.25]);  data.addRow(["'02 04 10:00:00'", 1.64, 1.00]);  data.addRow(["'02 04 12:00:00'", 5.10, 3.00]);  data.addRow(["'02 04 14:00:00'", 7.17, 5.19]);  data.addRow(["'02 04 16:00:00'", 3.14, 1.90]);  data.addRow(["'02 04 18:00:00'", 0.83, 0.65]);  data.addRow(["'02 04 20:00:00'", 0.26, 0.22]);  data.addRow(["'02 04 22:00:00'", 0.08, 0.08]);  data.addRow(["'02 05 00:00:00'", 0.05, 0.10]);  data.addRow(["'02 05 02:00:00'", 0.09, 0.10]);  data.addRow(["'02 05 04:00:00'", 0.04, 0.05]);  data.addRow(["'02 05 06:00:00'", 0.08, 0.08]);  data.addRow(["'02 05 08:00:00'", 0.13, 0.11]);  data.addRow(["'02 05 10:00:00'", 4.03, 3.32]);  data.addRow(["'02 05 12:00:00'", 4.52, 2.70]);  data.addRow(["'02 05 14:00:00'", 0.89, 0.91]);  data.addRow(["'02 05 16:00:00'", 0.42, 0.31]);  data.addRow(["'02 05 18:00:00'", 0.52, 0.32]);  data.addRow(["'02 05 20:00:00'", 0.29, 0.19]);  data.addRow(["'02 05 22:00:00'", 0.16, 0.16]);  data.addRow(["'02 06 00:00:00'", 0.05, 0.05]);  data.addRow(["'02 06 02:00:00'", 0.01, 0.02]);  data.addRow(["'02 06 04:00:00'", 0.03, 0.04]);  data.addRow(["'02 06 06:00:00'", 0.05, 0.06]);  data.addRow(["'02 06 08:00:00'", 0.17, 0.16]);  data.addRow(["'02 06 10:00:00'", 0.56, 0.48]);  data.addRow(["'02 06 12:00:00'", 3.17, 2.58]);  data.addRow(["'02 06 14:00:00'", 2.71, 1.97]);  data.addRow(["'02 06 16:00:00'", 0.96, 0.80]);  data.addRow(["'02 06 18:00:00'", 0.37, 0.35]);  data.addRow(["'02 06 20:00:00'", 0.40, 0.30]);  data.addRow(["'02 06 22:00:00'", 0.15, 0.16]);  data.addRow(["'02 07 00:00:00'", 0.14, 0.15]);  data.addRow(["'02 07 02:00:00'", 0.20, 0.23]);  data.addRow(["'02 07 04:00:00'", 0.10, 0.12]);  data.addRow(["'02 07 06:00:00'", 0.10, 0.18]);  data.addRow(["'02 07 08:00:00'", 0.24, 0.19]);  data.addRow(["'02 07 10:00:00'", 0.54, 0.49]);  data.addRow(["'02 07 12:00:00'", 0.74, 0.61]);  data.addRow(["'02 07 14:00:00'", 1.57, 1.46]);  data.addRow(["'02 07 16:00:00'", 3.37, 2.47]);  data.addRow(["'02 07 18:00:00'", 0.38, 0.38]);  data.addRow(["'02 07 20:00:00'", 0.18, 0.23]);  data.addRow(["'02 07 22:00:00'", 0.09, 0.19]);  data.addRow(["'02 08 00:00:00'", 0.07, 0.14]);  data.addRow(["'02 08 02:00:00'", 0.19, 0.28]);  data.addRow(["'02 08 04:00:00'", 0.07, 0.22]);  data.addRow(["'02 08 06:00:00'", 0.06, 0.12]);  data.addRow(["'02 08 08:00:00'", 0.11, 0.14]);  data.addRow(["'02 08 10:00:00'", 0.22, 0.24]);  data.addRow(["'02 08 12:00:00'", 0.22, 0.25]);  data.addRow(["'02 08 14:00:00'", 0.29, 0.26]);  data.addRow(["'02 08 16:00:00'", 0.35, 0.32]);  data.addRow(["'02 08 18:00:00'", 0.22, 0.22]);  data.addRow(["'02 08 20:00:00'", 0.22, 0.23]);  data.addRow(["'02 08 22:00:00'", 0.21, 0.25]);  data.addRow(["'02 09 00:00:00'", 0.27, 0.29]);  data.addRow(["'02 09 02:00:00'", 0.18, 0.21]);  data.addRow(["'02 09 04:00:00'", 0.08, 0.11]);  data.addRow(["'02 09 06:00:00'", 0.08, 0.09]);  data.addRow(["'02 09 08:00:00'", 0.10, 0.12]);  data.addRow(["'02 09 10:00:00'", 0.09, 0.12]);  data.addRow(["'02 09 12:00:00'", 0.09, 0.12]);  data.addRow(["'02 09 14:00:00'", 0.08, 0.14]);  data.addRow(["'02 09 16:00:00'", 0.09, 0.13]);  data.addRow(["'02 09 18:00:00'", 0.14, 0.15]);  data.addRow(["'02 09 20:00:00'", 0.09, 0.17]);  data.addRow(["'02 09 22:00:00'", 0.11, 0.15]);  data.addRow(["'02 10 00:00:00'", 0.09, 0.16]);  data.addRow(["'02 10 02:00:00'", 0.26, 0.16]);  data.addRow(["'02 10 04:00:00'", 0.15, 0.14]);  data.addRow(["'02 10 06:00:00'", 0.09, 0.14]);  data.addRow(["'02 10 08:00:00'", 0.30, 0.27]);  data.addRow(["'02 10 10:00:00'", 0.29, 0.23]);  data.addRow(["'02 10 12:00:00'", 0.46, 0.35]);  data.addRow(["'02 10 14:00:00'", 0.32, 0.31]);  data.addRow(["'02 10 16:00:00'", 0.37, 0.32]);  data.addRow(["'02 10 18:00:00'", 0.34, 0.25]);  data.addRow(["'02 10 20:00:00'", 0.14, 0.20]);  data.addRow(["'02 10 22:00:00'", 0.20, 0.22]);  data.addRow(["'02 11 00:00:00'", 0.09, 0.13]);  data.addRow(["'02 11 02:00:00'", 0.13, 0.13]);  data.addRow(["'02 11 04:00:00'", 0.16, 0.16]);  data.addRow(["'02 11 06:00:00'", 0.12, 0.19]);  data.addRow(["'02 11 08:00:00'", 0.13, 0.14]);  data.addRow(["'02 11 10:00:00'", 0.43, 0.38]);  data.addRow(["'02 11 12:00:00'", 1.02, 0.82]);  data.addRow(["'02 11 14:00:00'", 1.75, 1.59]);  data.addRow(["'02 11 16:00:00'", 1.22, 1.06]);  data.addRow(["'02 11 18:00:00'", 1.47, 1.31]);  data.addRow(["'02 11 20:00:00'", 1.87, 1.60]);  data.addRow(["'02 11 22:00:00'", 1.52, 1.38]);  data.addRow(["'02 12 00:00:00'", 1.51, 1.34]);  data.addRow(["'02 12 02:00:00'", 1.44, 1.35]);  data.addRow(["'02 12 04:00:00'", 1.39, 1.28]);  data.addRow(["'02 12 06:00:00'", 1.38, 1.29]);  data.addRow(["'02 12 08:00:00'", 1.50, 1.31]);  data.addRow(["'02 12 10:00:00'", 1.50, 1.32]);  data.addRow(["'02 12 12:00:00'", 1.63, 1.42]);  data.addRow(["'02 12 14:00:00'", 1.90, 1.65]);  data.addRow(["'02 12 16:00:00'", 1.78, 1.59]);  data.addRow(["'02 12 18:00:00'", 1.69, 1.47]);  data.addRow(["'02 12 20:00:00'", 1.47, 1.37]);  data.addRow(["'02 12 22:00:00'", 1.42, 1.27]);  data.addRow(["'02 13 00:00:00'", 1.60, 1.43]);  data.addRow(["'02 13 02:00:00'", 1.41, 1.27]);  data.addRow(["'02 13 04:00:00'", 1.38, 1.26]);  data.addRow(["'02 13 06:00:00'", 1.44, 1.29]);  data.addRow(["'02 13 08:00:00'", 1.38, 1.27]);  data.addRow(["'02 13 10:00:00'", 1.80, 1.58]);  data.addRow(["'02 13 12:00:00'", 0.86, 0.73]);  data.addRow(["'02 13 14:00:00'", 0.55, 0.38]);  data.addRow(["'02 13 16:00:00'", 0.47, 0.40]);  data.addRow(["'02 13 18:00:00'", 0.40, 0.24]);  data.addRow(["'02 13 20:00:00'", 0.20, 0.22]);  data.addRow(["'02 13 22:00:00'", 0.23, 0.17]);  data.addRow(["'02 14 00:00:00'", 0.09, 0.12]);  data.addRow(["'02 14 02:00:00'", 0.08, 0.11]);  data.addRow(["'02 14 04:00:00'", 0.11, 0.11]);  data.addRow(["'02 14 06:00:00'", 0.09, 0.12]);  data.addRow(["'02 14 08:00:00'", 0.11, 0.12]);  data.addRow(["'02 14 10:00:00'", 0.27, 0.25]);  data.addRow(["'02 14 12:00:00'", 0.70, 0.54]);  data.addRow(["'02 14 14:00:00'", 0.00, 0.00]); 
	var graphtitle='80 Traffic Packets Max: 56.24 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='56'

	
        
      
	