
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'07 12:30:00'", 0.01, 0.25]);  data.addRow(["'07 13:00:00'", 0.01, 0.44]);  data.addRow(["'07 13:30:00'", 0.02, 0.23]);  data.addRow(["'07 14:00:00'", 0.05, 0.32]);  data.addRow(["'07 14:30:00'", 0.15, 0.86]);  data.addRow(["'07 15:00:00'", 0.01, 0.13]);  data.addRow(["'07 15:30:00'", 0.07, 0.30]);  data.addRow(["'07 16:00:00'", 0.08, 0.64]);  data.addRow(["'07 16:30:00'", 0.03, 0.23]);  data.addRow(["'07 17:00:00'", 0.03, 0.49]);  data.addRow(["'07 17:30:00'", 0.24, 1.19]);  data.addRow(["'07 18:00:00'", 0.02, 0.36]);  data.addRow(["'07 18:30:00'", 0.08, 0.24]);  data.addRow(["'07 19:00:00'", 0.16, 0.54]);  data.addRow(["'07 19:30:00'", 0.04, 0.60]);  data.addRow(["'07 20:00:00'", 0.08, 0.42]);  data.addRow(["'07 20:30:00'", 0.03, 0.03]);  data.addRow(["'07 21:00:00'", 0.06, 0.17]);  data.addRow(["'07 21:30:00'", 0.06, 0.29]);  data.addRow(["'07 22:00:00'", 0.03, 0.26]);  data.addRow(["'07 22:30:00'", 0.12, 0.54]);  data.addRow(["'07 23:00:00'", 0.27, 0.47]);  data.addRow(["'07 23:30:00'", 0.03, 0.37]);  data.addRow(["'08 00:00:00'", 0.06, 0.24]);  data.addRow(["'08 00:30:00'", 0.02, 0.48]);  data.addRow(["'08 01:00:00'", 0.02, 0.03]);  data.addRow(["'08 01:30:00'", 0.02, 0.68]);  data.addRow(["'08 02:00:00'", 0.08, 0.09]);  data.addRow(["'08 02:30:00'", 0.13, 0.35]);  data.addRow(["'08 03:00:00'", 0.02, 0.39]);  data.addRow(["'08 03:30:00'", 0.02, 0.54]);  data.addRow(["'08 04:00:00'", 0.02, 0.25]);  data.addRow(["'08 04:30:00'", 0.05, 0.43]);  data.addRow(["'08 05:00:00'", 0.12, 0.88]);  data.addRow(["'08 05:30:00'", 0.02, 0.28]);  data.addRow(["'08 06:00:00'", 0.04, 0.63]);  data.addRow(["'08 06:30:00'", 0.05, 0.84]);  data.addRow(["'08 07:00:00'", 0.04, 0.51]);  data.addRow(["'08 07:30:00'", 0.03, 0.43]);  data.addRow(["'08 08:00:00'", 0.04, 0.21]);  data.addRow(["'08 08:30:00'", 0.03, 0.05]);  data.addRow(["'08 09:00:00'", 0.04, 0.28]);  data.addRow(["'08 09:30:00'", 0.03, 0.39]);  data.addRow(["'08 10:00:00'", 0.05, 0.49]);  data.addRow(["'08 10:30:00'", 0.05, 0.06]);  data.addRow(["'08 11:00:00'", 0.05, 0.53]);  data.addRow(["'08 11:30:00'", 0.22, 1.08]);  data.addRow(["'08 12:00:00'", 0.02, 0.27]);  data.addRow(["'08 12:30:00'", 0.02, 0.07]);  data.addRow(["'08 13:00:00'", 0.05, 0.64]);  data.addRow(["'08 13:30:00'", 0.09, 0.28]);  data.addRow(["'08 14:00:00'", 0.18, 0.72]);  data.addRow(["'08 14:30:00'", 0.02, 0.03]);  data.addRow(["'08 15:00:00'", 0.03, 0.13]);  data.addRow(["'08 15:30:00'", 0.14, 0.72]);  data.addRow(["'08 16:00:00'", 0.02, 0.16]);  data.addRow(["'08 16:30:00'", 0.04, 0.55]);  data.addRow(["'08 17:00:00'", 0.06, 0.55]);  data.addRow(["'08 17:30:00'", 0.05, 0.33]);  data.addRow(["'08 18:00:00'", 0.07, 0.54]);  data.addRow(["'08 18:30:00'", 0.04, 0.55]);  data.addRow(["'08 19:00:00'", 0.10, 0.11]);  data.addRow(["'08 19:30:00'", 0.03, 0.19]);  data.addRow(["'08 20:00:00'", 0.25, 0.75]);  data.addRow(["'08 20:30:00'", 0.03, 0.34]);  data.addRow(["'08 21:00:00'", 0.25, 0.99]);  data.addRow(["'08 21:30:00'", 0.02, 0.38]);  data.addRow(["'08 22:00:00'", 0.03, 0.48]);  data.addRow(["'08 22:30:00'", 0.02, 0.25]);  data.addRow(["'08 23:00:00'", 0.05, 0.22]);  data.addRow(["'08 23:30:00'", 0.02, 0.58]);  data.addRow(["'09 00:00:00'", 0.16, 0.60]);  data.addRow(["'09 00:30:00'", 0.02, 0.49]);  data.addRow(["'09 01:00:00'", 0.11, 0.21]);  data.addRow(["'09 01:30:00'", 0.04, 0.28]);  data.addRow(["'09 02:00:00'", 0.11, 0.56]);  data.addRow(["'09 02:30:00'", 0.03, 0.45]);  data.addRow(["'09 03:00:00'", 0.23, 0.35]);  data.addRow(["'09 03:30:00'", 0.03, 0.04]);  data.addRow(["'09 04:00:00'", 0.04, 0.23]);  data.addRow(["'09 04:30:00'", 0.20, 0.37]);  data.addRow(["'09 05:00:00'", 0.03, 0.79]);  data.addRow(["'09 05:30:00'", 0.03, 0.38]);  data.addRow(["'09 06:00:00'", 0.14, 0.64]);  data.addRow(["'09 06:30:00'", 0.02, 0.03]);  data.addRow(["'09 07:00:00'", 0.30, 1.61]);  data.addRow(["'09 07:30:00'", 0.23, 0.60]);  data.addRow(["'09 08:00:00'", 0.09, 0.20]);  data.addRow(["'09 08:30:00'", 0.02, 0.40]);  data.addRow(["'09 09:00:00'", 0.02, 0.48]);  data.addRow(["'09 09:30:00'", 0.04, 0.42]);  data.addRow(["'09 10:00:00'", 0.06, 0.46]);  data.addRow(["'09 10:30:00'", 0.02, 0.17]);  data.addRow(["'09 11:00:00'", 0.16, 0.50]);  data.addRow(["'09 11:30:00'", 0.06, 0.47]);  data.addRow(["'09 12:00:00'", 0.03, 0.04]);  data.addRow(["'09 12:30:00'", 0.03, 0.70]);  data.addRow(["'09 13:00:00'", 0.03, 0.56]);  data.addRow(["'09 13:30:00'", 0.07, 0.17]);  data.addRow(["'09 14:00:00'", 0.09, 0.52]);  data.addRow(["'09 14:30:00'", 0.33, 0.68]);  data.addRow(["'09 15:00:00'", 0.12, 0.61]);  data.addRow(["'09 15:30:00'", 0.02, 0.03]);  data.addRow(["'09 16:00:00'", 0.03, 0.75]);  data.addRow(["'09 16:30:00'", 0.03, 0.04]);  data.addRow(["'09 17:00:00'", 0.06, 0.50]);  data.addRow(["'09 17:30:00'", 0.57, 1.86]);  data.addRow(["'09 18:00:00'", 0.02, 0.26]);  data.addRow(["'09 18:30:00'", 0.03, 0.37]);  data.addRow(["'09 19:00:00'", 0.07, 0.36]);  data.addRow(["'09 19:30:00'", 0.14, 0.84]);  data.addRow(["'09 20:00:00'", 0.27, 0.26]);  data.addRow(["'09 20:30:00'", 0.02, 0.57]);  data.addRow(["'09 21:00:00'", 0.02, 0.13]);  data.addRow(["'09 21:30:00'", 0.04, 0.05]);  data.addRow(["'09 22:00:00'", 0.16, 0.60]);  data.addRow(["'09 22:30:00'", 0.03, 0.04]);  data.addRow(["'09 23:00:00'", 2.90, 3.80]);  data.addRow(["'09 23:30:00'", 2.35, 2.21]);  data.addRow(["'10 00:00:00'", 1.95, 2.40]);  data.addRow(["'10 00:30:00'", 1.41, 1.73]);  data.addRow(["'10 01:00:00'", 0.30, 0.54]);  data.addRow(["'10 01:30:00'", 0.31, 0.72]);  data.addRow(["'10 02:00:00'", 0.29, 0.89]);  data.addRow(["'10 02:30:00'", 0.30, 0.80]);  data.addRow(["'10 03:00:00'", 0.21, 0.56]);  data.addRow(["'10 03:30:00'", 0.17, 0.79]);  data.addRow(["'10 04:00:00'", 0.05, 0.39]);  data.addRow(["'10 04:30:00'", 0.06, 0.51]);  data.addRow(["'10 05:00:00'", 0.04, 0.34]);  data.addRow(["'10 05:30:00'", 0.23, 1.12]);  data.addRow(["'10 06:00:00'", 0.09, 0.25]);  data.addRow(["'10 06:30:00'", 0.03, 0.58]);  data.addRow(["'10 07:00:00'", 0.25, 0.41]);  data.addRow(["'10 07:30:00'", 0.02, 0.13]);  data.addRow(["'10 08:00:00'", 0.03, 0.24]);  data.addRow(["'10 08:30:00'", 0.07, 0.55]);  data.addRow(["'10 09:00:00'", 0.02, 0.23]);  data.addRow(["'10 09:30:00'", 0.02, 0.57]);  data.addRow(["'10 10:00:00'", 0.02, 0.02]);  data.addRow(["'10 10:30:00'", 0.01, 0.27]);  data.addRow(["'10 11:00:00'", 0.02, 0.48]);  data.addRow(["'10 11:30:00'", 0.02, 0.68]);  data.addRow(["'10 12:00:00'", 0.01, 0.34]);  data.addRow(["'10 12:30:00'", 0.01, 0.46]);  data.addRow(["'10 13:00:00'", 0.02, 0.46]);  data.addRow(["'10 13:30:00'", 0.03, 0.04]);  data.addRow(["'10 14:00:00'", 0.04, 0.14]);  data.addRow(["'10 14:30:00'", 0.14, 0.77]);  data.addRow(["'10 15:00:00'", 0.04, 0.05]);  data.addRow(["'10 15:30:00'", 0.06, 0.17]);  data.addRow(["'10 16:00:00'", 0.12, 0.35]);  data.addRow(["'10 16:30:00'", 0.08, 0.69]);  data.addRow(["'10 17:00:00'", 0.10, 0.34]);  data.addRow(["'10 17:30:00'", 0.04, 0.28]);  data.addRow(["'10 18:00:00'", 0.04, 0.44]);  data.addRow(["'10 18:30:00'", 0.06, 0.72]);  data.addRow(["'10 19:00:00'", 0.03, 0.27]);  data.addRow(["'10 19:30:00'", 0.09, 0.45]);  data.addRow(["'10 20:00:00'", 0.14, 0.45]);  data.addRow(["'10 20:30:00'", 0.05, 0.19]);  data.addRow(["'10 21:00:00'", 0.04, 0.06]);  data.addRow(["'10 21:30:00'", 0.07, 0.13]);  data.addRow(["'10 22:00:00'", 0.05, 0.75]);  data.addRow(["'10 22:30:00'", 0.06, 0.07]);  data.addRow(["'10 23:00:00'", 0.06, 0.24]);  data.addRow(["'10 23:30:00'", 0.05, 0.23]);  data.addRow(["'11 00:00:00'", 0.06, 0.17]);  data.addRow(["'11 00:30:00'", 0.09, 0.79]);  data.addRow(["'11 01:00:00'", 0.45, 0.90]);  data.addRow(["'11 01:30:00'", 0.08, 0.44]);  data.addRow(["'11 02:00:00'", 0.05, 0.65]);  data.addRow(["'11 02:30:00'", 0.12, 0.20]);  data.addRow(["'11 03:00:00'", 0.07, 0.29]);  data.addRow(["'11 03:30:00'", 0.04, 0.15]);  data.addRow(["'11 04:00:00'", 0.06, 1.16]);  data.addRow(["'11 04:30:00'", 0.07, 0.17]);  data.addRow(["'11 05:00:00'", 0.30, 0.58]);  data.addRow(["'11 05:30:00'", 0.12, 0.70]);  data.addRow(["'11 06:00:00'", 0.10, 0.48]);  data.addRow(["'11 06:30:00'", 0.25, 0.23]);  data.addRow(["'11 07:00:00'", 0.16, 0.72]);  data.addRow(["'11 07:30:00'", 0.47, 1.38]);  data.addRow(["'11 08:00:00'", 0.13, 0.50]);  data.addRow(["'11 08:30:00'", 0.12, 0.31]);  data.addRow(["'11 09:00:00'", 0.03, 0.27]);  data.addRow(["'11 09:30:00'", 0.06, 0.52]);  data.addRow(["'11 10:00:00'", 0.03, 0.04]);  data.addRow(["'11 10:30:00'", 0.39, 1.02]);  data.addRow(["'11 11:00:00'", 0.04, 0.33]);  data.addRow(["'11 11:30:00'", 0.24, 0.41]);  data.addRow(["'11 12:00:00'", 0.04, 0.05]);  data.addRow(["'11 12:30:00'", 0.03, 0.25]);  data.addRow(["'11 13:00:00'", 0.27, 1.01]);  data.addRow(["'11 13:30:00'", 0.12, 0.22]);  data.addRow(["'11 14:00:00'", 0.11, 0.32]);  data.addRow(["'11 14:30:00'", 0.14, 0.60]);  data.addRow(["'11 15:00:00'", 0.05, 0.40]);  data.addRow(["'11 15:30:00'", 0.03, 0.14]);  data.addRow(["'11 16:00:00'", 0.20, 1.14]);  data.addRow(["'11 16:30:00'", 0.06, 0.22]);  data.addRow(["'11 17:00:00'", 0.08, 0.45]);  data.addRow(["'11 17:30:00'", 0.11, 0.80]);  data.addRow(["'11 18:00:00'", 0.04, 0.27]);  data.addRow(["'11 18:30:00'", 0.12, 0.57]);  data.addRow(["'11 19:00:00'", 0.05, 0.62]);  data.addRow(["'11 19:30:00'", 0.06, 0.40]);  data.addRow(["'11 20:00:00'", 0.23, 0.56]);  data.addRow(["'11 20:30:00'", 0.05, 0.05]);  data.addRow(["'11 21:00:00'", 0.05, 0.06]);  data.addRow(["'11 21:30:00'", 0.04, 0.05]);  data.addRow(["'11 22:00:00'", 0.04, 0.44]);  data.addRow(["'11 22:30:00'", 0.04, 0.48]);  data.addRow(["'11 23:00:00'", 0.05, 0.05]);  data.addRow(["'11 23:30:00'", 2.06, 2.43]);  data.addRow(["'12 00:00:00'", 1.53, 1.69]);  data.addRow(["'12 00:30:00'", 0.08, 0.54]);  data.addRow(["'12 01:00:00'", 0.08, 0.18]);  data.addRow(["'12 01:30:00'", 0.06, 0.06]);  data.addRow(["'12 02:00:00'", 0.07, 0.30]);  data.addRow(["'12 02:30:00'", 0.06, 0.47]);  data.addRow(["'12 03:00:00'", 0.82, 0.95]);  data.addRow(["'12 03:30:00'", 0.32, 1.20]);  data.addRow(["'12 04:00:00'", 0.05, 0.07]);  data.addRow(["'12 04:30:00'", 0.15, 0.26]);  data.addRow(["'12 05:00:00'", 0.11, 0.62]);  data.addRow(["'12 05:30:00'", 0.22, 0.42]);  data.addRow(["'12 06:00:00'", 0.10, 0.36]);  data.addRow(["'12 06:30:00'", 0.06, 0.57]);  data.addRow(["'12 07:00:00'", 0.17, 0.65]);  data.addRow(["'12 07:30:00'", 0.09, 0.56]);  data.addRow(["'12 08:00:00'", 0.15, 1.21]);  data.addRow(["'12 08:30:00'", 0.07, 0.51]);  data.addRow(["'12 09:00:00'", 0.05, 0.05]);  data.addRow(["'12 09:30:00'", 0.39, 0.92]);  data.addRow(["'12 10:00:00'", 0.09, 0.42]);  data.addRow(["'12 10:30:00'", 0.19, 0.18]);  data.addRow(["'12 11:00:00'", 0.03, 0.34]);  data.addRow(["'12 11:30:00'", 0.03, 0.03]);  data.addRow(["'12 12:00:00'", 0.03, 0.04]);  data.addRow(["'12 12:30:00'", 0.03, 0.24]);  data.addRow(["'12 13:00:00'", 0.03, 0.52]);  data.addRow(["'12 13:30:00'", 0.07, 0.30]);  data.addRow(["'12 14:00:00'", 0.06, 0.29]);  data.addRow(["'12 14:30:00'", 0.04, 0.07]);  data.addRow(["'12 15:00:00'", 0.04, 0.50]);  data.addRow(["'12 15:30:00'", 1.49, 1.85]);  data.addRow(["'12 16:00:00'", 5.29, 5.26]);  data.addRow(["'12 16:30:00'", 6.04, 5.62]);  data.addRow(["'12 17:00:00'", 6.18, 6.31]);  data.addRow(["'12 17:30:00'", 5.20, 5.04]);  data.addRow(["'12 18:00:00'", 4.82, 4.71]);  data.addRow(["'12 18:30:00'", 4.95, 4.54]);  data.addRow(["'12 19:00:00'", 5.19, 4.61]);  data.addRow(["'12 19:30:00'", 3.88, 3.59]);  data.addRow(["'12 20:00:00'", 2.73, 2.51]);  data.addRow(["'12 20:30:00'", 1.56, 1.83]);  data.addRow(["'12 21:00:00'", 0.62, 1.54]);  data.addRow(["'12 21:30:00'", 0.42, 0.79]);  data.addRow(["'12 22:00:00'", 0.32, 0.64]);  data.addRow(["'12 22:30:00'", 0.33, 0.54]);  data.addRow(["'12 23:00:00'", 0.36, 0.80]);  data.addRow(["'12 23:30:00'", 0.41, 0.63]);  data.addRow(["'13 00:00:00'", 0.23, 0.96]);  data.addRow(["'13 00:30:00'", 0.16, 0.16]);  data.addRow(["'13 01:00:00'", 0.08, 0.68]);  data.addRow(["'13 01:30:00'", 0.34, 0.80]);  data.addRow(["'13 02:00:00'", 0.05, 0.37]);  data.addRow(["'13 02:30:00'", 0.13, 0.42]);  data.addRow(["'13 03:00:00'", 0.05, 0.29]);  data.addRow(["'13 03:30:00'", 0.13, 0.40]);  data.addRow(["'13 04:00:00'", 0.06, 0.24]);  data.addRow(["'13 04:30:00'", 0.06, 0.16]);  data.addRow(["'13 05:00:00'", 0.09, 0.32]);  data.addRow(["'13 05:30:00'", 0.05, 0.15]);  data.addRow(["'13 06:00:00'", 0.24, 0.83]);  data.addRow(["'13 06:30:00'", 0.13, 0.59]);  data.addRow(["'13 07:00:00'", 0.18, 0.68]);  data.addRow(["'13 07:30:00'", 0.04, 0.81]);  data.addRow(["'13 08:00:00'", 0.03, 0.04]);  data.addRow(["'13 08:30:00'", 0.12, 0.49]);  data.addRow(["'13 09:00:00'", 0.05, 0.62]);  data.addRow(["'13 09:30:00'", 0.28, 0.73]);  data.addRow(["'13 10:00:00'", 0.08, 0.81]);  data.addRow(["'13 10:30:00'", 0.05, 0.83]);  data.addRow(["'13 11:00:00'", 0.04, 0.67]);  data.addRow(["'13 11:30:00'", 0.04, 0.24]);  data.addRow(["'13 12:00:00'", 0.04, 0.41]);  data.addRow(["'13 12:30:00'", 0.03, 0.26]);  data.addRow(["'13 13:00:00'", 0.03, 0.14]);  data.addRow(["'13 13:30:00'", 0.05, 0.05]);  data.addRow(["'13 14:00:00'", 0.05, 0.84]);  data.addRow(["'13 14:30:00'", 0.03, 0.14]);  data.addRow(["'13 15:00:00'", 0.06, 0.54]);  data.addRow(["'13 15:30:00'", 0.03, 0.33]);  data.addRow(["'13 16:00:00'", 0.03, 0.42]);  data.addRow(["'13 16:30:00'", 0.04, 0.43]);  data.addRow(["'13 17:00:00'", 0.04, 0.19]);  data.addRow(["'13 17:30:00'", 0.03, 0.14]);  data.addRow(["'13 18:00:00'", 0.26, 1.06]);  data.addRow(["'13 18:30:00'", 0.07, 0.44]);  data.addRow(["'13 19:00:00'", 0.10, 0.92]);  data.addRow(["'13 19:30:00'", 0.03, 0.04]);  data.addRow(["'13 20:00:00'", 0.06, 0.22]);  data.addRow(["'13 20:30:00'", 0.06, 0.55]);  data.addRow(["'13 21:00:00'", 0.04, 0.51]);  data.addRow(["'13 21:30:00'", 0.04, 0.31]);  data.addRow(["'13 22:00:00'", 0.05, 0.26]);  data.addRow(["'13 22:30:00'", 0.06, 0.48]);  data.addRow(["'13 23:00:00'", 0.04, 0.15]);  data.addRow(["'13 23:30:00'", 4.14, 4.01]);  data.addRow(["'14 00:00:00'", 6.63, 6.53]);  data.addRow(["'14 00:30:00'", 6.32, 6.44]);  data.addRow(["'14 01:00:00'", 5.51, 5.44]);  data.addRow(["'14 01:30:00'", 4.43, 3.98]);  data.addRow(["'14 02:00:00'", 4.24, 3.89]);  data.addRow(["'14 02:30:00'", 4.22, 3.75]);  data.addRow(["'14 03:00:00'", 4.02, 4.05]);  data.addRow(["'14 03:30:00'", 6.45, 6.76]);  data.addRow(["'14 04:00:00'", 1.81, 1.88]);  data.addRow(["'14 04:30:00'", 0.66, 1.07]);  data.addRow(["'14 05:00:00'", 0.23, 0.67]);  data.addRow(["'14 05:30:00'", 0.20, 0.46]);  data.addRow(["'14 06:00:00'", 0.19, 0.31]);  data.addRow(["'14 06:30:00'", 0.19, 0.18]);  data.addRow(["'14 07:00:00'", 0.20, 0.19]);  data.addRow(["'14 07:30:00'", 0.16, 0.36]);  data.addRow(["'14 08:00:00'", 0.33, 0.72]);  data.addRow(["'14 08:30:00'", 0.81, 1.37]);  data.addRow(["'14 09:00:00'", 0.71, 0.67]);  data.addRow(["'14 09:30:00'", 0.54, 0.69]);  data.addRow(["'14 10:00:00'", 0.40, 0.53]);  data.addRow(["'14 10:30:00'", 0.30, 0.61]);  data.addRow(["'14 11:00:00'", 0.29, 0.78]);  data.addRow(["'14 11:30:00'", 0.32, 0.49]);  data.addRow(["'14 12:00:00'", 0.25, 0.64]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='22 Traffic Flows Max: 12.33 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='12'

	
        
      
	