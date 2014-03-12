
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'07 12:30:00'", 0.01, 0.14]);  data.addRow(["'07 13:00:00'", 0.05, 0.07]);  data.addRow(["'07 13:30:00'", 0.72, 0.41]);  data.addRow(["'07 14:00:00'", 0.14, 0.20]);  data.addRow(["'07 14:30:00'", 0.25, 0.14]);  data.addRow(["'07 15:00:00'", 0.03, 0.39]);  data.addRow(["'07 15:30:00'", 0.39, 0.16]);  data.addRow(["'07 16:00:00'", 0.16, 0.22]);  data.addRow(["'07 16:30:00'", 0.51, 0.19]);  data.addRow(["'07 17:00:00'", 0.08, 0.67]);  data.addRow(["'07 17:30:00'", 0.20, 0.19]);  data.addRow(["'07 18:00:00'", 0.02, 0.12]);  data.addRow(["'07 18:30:00'", 0.14, 0.12]);  data.addRow(["'07 19:00:00'", 0.79, 0.17]);  data.addRow(["'07 19:30:00'", 0.02, 0.15]);  data.addRow(["'07 20:00:00'", 0.06, 0.17]);  data.addRow(["'07 20:30:00'", 0.02, 0.04]);  data.addRow(["'07 21:00:00'", 0.04, 0.12]);  data.addRow(["'07 21:30:00'", 0.04, 0.15]);  data.addRow(["'07 22:00:00'", 0.03, 0.18]);  data.addRow(["'07 22:30:00'", 0.08, 0.27]);  data.addRow(["'07 23:00:00'", 3.39, 0.32]);  data.addRow(["'07 23:30:00'", 0.03, 0.19]);  data.addRow(["'08 00:00:00'", 0.41, 0.32]);  data.addRow(["'08 00:30:00'", 0.02, 0.11]);  data.addRow(["'08 01:00:00'", 0.17, 0.20]);  data.addRow(["'08 01:30:00'", 0.10, 0.10]);  data.addRow(["'08 02:00:00'", 0.20, 0.17]);  data.addRow(["'08 02:30:00'", 0.30, 0.22]);  data.addRow(["'08 03:00:00'", 0.08, 0.11]);  data.addRow(["'08 03:30:00'", 0.08, 0.15]);  data.addRow(["'08 04:00:00'", 0.06, 0.09]);  data.addRow(["'08 04:30:00'", 0.07, 0.28]);  data.addRow(["'08 05:00:00'", 0.20, 0.19]);  data.addRow(["'08 05:30:00'", 0.04, 0.13]);  data.addRow(["'08 06:00:00'", 0.11, 0.25]);  data.addRow(["'08 06:30:00'", 0.07, 0.21]);  data.addRow(["'08 07:00:00'", 0.14, 0.20]);  data.addRow(["'08 07:30:00'", 0.08, 0.21]);  data.addRow(["'08 08:00:00'", 0.05, 0.20]);  data.addRow(["'08 08:30:00'", 0.13, 0.24]);  data.addRow(["'08 09:00:00'", 0.09, 0.29]);  data.addRow(["'08 09:30:00'", 0.24, 0.22]);  data.addRow(["'08 10:00:00'", 1.17, 0.26]);  data.addRow(["'08 10:30:00'", 0.09, 0.25]);  data.addRow(["'08 11:00:00'", 0.10, 0.24]);  data.addRow(["'08 11:30:00'", 0.14, 0.21]);  data.addRow(["'08 12:00:00'", 0.12, 0.09]);  data.addRow(["'08 12:30:00'", 0.09, 0.13]);  data.addRow(["'08 13:00:00'", 0.28, 0.17]);  data.addRow(["'08 13:30:00'", 0.08, 0.09]);  data.addRow(["'08 14:00:00'", 0.41, 0.14]);  data.addRow(["'08 14:30:00'", 0.25, 0.04]);  data.addRow(["'08 15:00:00'", 0.37, 0.11]);  data.addRow(["'08 15:30:00'", 0.27, 0.17]);  data.addRow(["'08 16:00:00'", 0.10, 0.06]);  data.addRow(["'08 16:30:00'", 0.09, 0.11]);  data.addRow(["'08 17:00:00'", 0.05, 0.15]);  data.addRow(["'08 17:30:00'", 0.13, 0.15]);  data.addRow(["'08 18:00:00'", 0.14, 0.20]);  data.addRow(["'08 18:30:00'", 0.07, 0.21]);  data.addRow(["'08 19:00:00'", 0.20, 0.19]);  data.addRow(["'08 19:30:00'", 0.09, 0.27]);  data.addRow(["'08 20:00:00'", 0.23, 0.21]);  data.addRow(["'08 20:30:00'", 0.06, 0.12]);  data.addRow(["'08 21:00:00'", 0.14, 0.13]);  data.addRow(["'08 21:30:00'", 0.08, 0.12]);  data.addRow(["'08 22:00:00'", 0.07, 0.19]);  data.addRow(["'08 22:30:00'", 0.06, 0.21]);  data.addRow(["'08 23:00:00'", 0.12, 0.09]);  data.addRow(["'08 23:30:00'", 4.08, 0.35]);  data.addRow(["'09 00:00:00'", 0.23, 0.14]);  data.addRow(["'09 00:30:00'", 0.17, 0.15]);  data.addRow(["'09 01:00:00'", 0.31, 0.14]);  data.addRow(["'09 01:30:00'", 0.20, 0.18]);  data.addRow(["'09 02:00:00'", 0.26, 0.15]);  data.addRow(["'09 02:30:00'", 0.28, 0.14]);  data.addRow(["'09 03:00:00'", 0.20, 0.21]);  data.addRow(["'09 03:30:00'", 0.17, 0.14]);  data.addRow(["'09 04:00:00'", 0.16, 0.15]);  data.addRow(["'09 04:30:00'", 0.29, 0.24]);  data.addRow(["'09 05:00:00'", 0.15, 0.13]);  data.addRow(["'09 05:30:00'", 0.11, 0.15]);  data.addRow(["'09 06:00:00'", 0.20, 0.18]);  data.addRow(["'09 06:30:00'", 0.30, 0.13]);  data.addRow(["'09 07:00:00'", 0.23, 0.21]);  data.addRow(["'09 07:30:00'", 0.21, 0.16]);  data.addRow(["'09 08:00:00'", 0.20, 0.13]);  data.addRow(["'09 08:30:00'", 0.06, 0.07]);  data.addRow(["'09 09:00:00'", 0.05, 0.08]);  data.addRow(["'09 09:30:00'", 0.10, 0.19]);  data.addRow(["'09 10:00:00'", 0.13, 0.06]);  data.addRow(["'09 10:30:00'", 0.05, 0.18]);  data.addRow(["'09 11:00:00'", 0.12, 0.14]);  data.addRow(["'09 11:30:00'", 30.81, 0.79]);  data.addRow(["'09 12:00:00'", 0.07, 0.18]);  data.addRow(["'09 12:30:00'", 30.84, 0.77]);  data.addRow(["'09 13:00:00'", 0.11, 0.33]);  data.addRow(["'09 13:30:00'", 30.59, 1.16]);  data.addRow(["'09 14:00:00'", 0.23, 0.31]);  data.addRow(["'09 14:30:00'", 30.89, 0.95]);  data.addRow(["'09 15:00:00'", 0.18, 0.34]);  data.addRow(["'09 15:30:00'", 16.96, 0.55]);  data.addRow(["'09 16:00:00'", 0.03, 0.25]);  data.addRow(["'09 16:30:00'", 0.23, 0.19]);  data.addRow(["'09 17:00:00'", 0.05, 0.23]);  data.addRow(["'09 17:30:00'", 0.32, 0.24]);  data.addRow(["'09 18:00:00'", 1.54, 0.35]);  data.addRow(["'09 18:30:00'", 0.18, 0.17]);  data.addRow(["'09 19:00:00'", 0.17, 0.19]);  data.addRow(["'09 19:30:00'", 0.21, 0.24]);  data.addRow(["'09 20:00:00'", 0.11, 0.25]);  data.addRow(["'09 20:30:00'", 0.35, 0.13]);  data.addRow(["'09 21:00:00'", 0.13, 0.19]);  data.addRow(["'09 21:30:00'", 0.08, 0.26]);  data.addRow(["'09 22:00:00'", 0.60, 0.33]);  data.addRow(["'09 22:30:00'", 0.62, 0.51]);  data.addRow(["'09 23:00:00'", 1.39, 0.91]);  data.addRow(["'09 23:30:00'", 1.07, 0.90]);  data.addRow(["'10 00:00:00'", 0.69, 0.47]);  data.addRow(["'10 00:30:00'", 0.58, 0.44]);  data.addRow(["'10 01:00:00'", 0.21, 0.36]);  data.addRow(["'10 01:30:00'", 0.36, 0.45]);  data.addRow(["'10 02:00:00'", 0.24, 0.49]);  data.addRow(["'10 02:30:00'", 0.28, 0.24]);  data.addRow(["'10 03:00:00'", 0.55, 0.48]);  data.addRow(["'10 03:30:00'", 0.54, 0.25]);  data.addRow(["'10 04:00:00'", 30.64, 0.85]);  data.addRow(["'10 04:30:00'", 0.20, 0.19]);  data.addRow(["'10 05:00:00'", 37.25, 0.84]);  data.addRow(["'10 05:30:00'", 0.35, 0.29]);  data.addRow(["'10 06:00:00'", 0.16, 0.11]);  data.addRow(["'10 06:30:00'", 0.17, 0.14]);  data.addRow(["'10 07:00:00'", 0.35, 0.33]);  data.addRow(["'10 07:30:00'", 0.16, 0.07]);  data.addRow(["'10 08:00:00'", 0.15, 0.22]);  data.addRow(["'10 08:30:00'", 0.30, 0.14]);  data.addRow(["'10 09:00:00'", 9.88, 0.65]);  data.addRow(["'10 09:30:00'", 0.33, 0.23]);  data.addRow(["'10 10:00:00'", 0.12, 1.99]);  data.addRow(["'10 10:30:00'", 1.57, 0.32]);  data.addRow(["'10 11:00:00'", 0.10, 0.13]);  data.addRow(["'10 11:30:00'", 2.32, 0.24]);  data.addRow(["'10 12:00:00'", 0.02, 0.20]);  data.addRow(["'10 12:30:00'", 0.01, 0.14]);  data.addRow(["'10 13:00:00'", 0.02, 0.04]);  data.addRow(["'10 13:30:00'", 0.02, 0.05]);  data.addRow(["'10 14:00:00'", 0.03, 0.04]);  data.addRow(["'10 14:30:00'", 0.19, 0.11]);  data.addRow(["'10 15:00:00'", 2.32, 0.08]);  data.addRow(["'10 15:30:00'", 0.03, 0.34]);  data.addRow(["'10 16:00:00'", 0.10, 0.15]);  data.addRow(["'10 16:30:00'", 0.06, 0.29]);  data.addRow(["'10 17:00:00'", 0.18, 0.37]);  data.addRow(["'10 17:30:00'", 0.02, 0.04]);  data.addRow(["'10 18:00:00'", 0.06, 0.22]);  data.addRow(["'10 18:30:00'", 5.99, 0.53]);  data.addRow(["'10 19:00:00'", 0.12, 0.14]);  data.addRow(["'10 19:30:00'", 0.58, 0.10]);  data.addRow(["'10 20:00:00'", 15.99, 0.24]);  data.addRow(["'10 20:30:00'", 0.02, 0.11]);  data.addRow(["'10 21:00:00'", 2.11, 0.12]);  data.addRow(["'10 21:30:00'", 5.36, 0.29]);  data.addRow(["'10 22:00:00'", 0.06, 0.15]);  data.addRow(["'10 22:30:00'", 0.20, 0.25]);  data.addRow(["'10 23:00:00'", 0.12, 0.21]);  data.addRow(["'10 23:30:00'", 0.07, 0.28]);  data.addRow(["'11 00:00:00'", 0.07, 0.17]);  data.addRow(["'11 00:30:00'", 0.29, 0.20]);  data.addRow(["'11 01:00:00'", 2.66, 0.32]);  data.addRow(["'11 01:30:00'", 0.05, 0.17]);  data.addRow(["'11 02:00:00'", 14.15, 0.31]);  data.addRow(["'11 02:30:00'", 0.05, 0.15]);  data.addRow(["'11 03:00:00'", 0.03, 0.15]);  data.addRow(["'11 03:30:00'", 0.03, 0.19]);  data.addRow(["'11 04:00:00'", 0.03, 0.32]);  data.addRow(["'11 04:30:00'", 0.04, 0.25]);  data.addRow(["'11 05:00:00'", 0.18, 0.20]);  data.addRow(["'11 05:30:00'", 0.04, 0.12]);  data.addRow(["'11 06:00:00'", 0.05, 0.18]);  data.addRow(["'11 06:30:00'", 0.15, 0.21]);  data.addRow(["'11 07:00:00'", 0.06, 0.14]);  data.addRow(["'11 07:30:00'", 0.21, 0.21]);  data.addRow(["'11 08:00:00'", 0.08, 0.10]);  data.addRow(["'11 08:30:00'", 0.09, 0.06]);  data.addRow(["'11 09:00:00'", 0.03, 0.03]);  data.addRow(["'11 09:30:00'", 4.91, 0.29]);  data.addRow(["'11 10:00:00'", 0.01, 0.01]);  data.addRow(["'11 10:30:00'", 0.16, 0.11]);  data.addRow(["'11 11:00:00'", 0.03, 0.06]);  data.addRow(["'11 11:30:00'", 0.26, 0.11]);  data.addRow(["'11 12:00:00'", 0.05, 0.04]);  data.addRow(["'11 12:30:00'", 0.05, 0.06]);  data.addRow(["'11 13:00:00'", 0.24, 0.13]);  data.addRow(["'11 13:30:00'", 0.06, 0.22]);  data.addRow(["'11 14:00:00'", 0.20, 0.18]);  data.addRow(["'11 14:30:00'", 0.06, 0.07]);  data.addRow(["'11 15:00:00'", 0.04, 0.43]);  data.addRow(["'11 15:30:00'", 0.03, 0.13]);  data.addRow(["'11 16:00:00'", 0.21, 0.15]);  data.addRow(["'11 16:30:00'", 0.04, 0.04]);  data.addRow(["'11 17:00:00'", 0.04, 0.07]);  data.addRow(["'11 17:30:00'", 0.09, 0.10]);  data.addRow(["'11 18:00:00'", 0.03, 0.08]);  data.addRow(["'11 18:30:00'", 0.12, 0.09]);  data.addRow(["'11 19:00:00'", 0.03, 0.07]);  data.addRow(["'11 19:30:00'", 0.11, 0.12]);  data.addRow(["'11 20:00:00'", 0.54, 0.17]);  data.addRow(["'11 20:30:00'", 0.39, 0.12]);  data.addRow(["'11 21:00:00'", 0.03, 0.10]);  data.addRow(["'11 21:30:00'", 0.03, 0.12]);  data.addRow(["'11 22:00:00'", 0.03, 0.10]);  data.addRow(["'11 22:30:00'", 0.02, 0.07]);  data.addRow(["'11 23:00:00'", 0.04, 0.03]);  data.addRow(["'11 23:30:00'", 0.69, 0.36]);  data.addRow(["'12 00:00:00'", 5.71, 0.54]);  data.addRow(["'12 00:30:00'", 0.04, 0.09]);  data.addRow(["'12 01:00:00'", 0.11, 0.06]);  data.addRow(["'12 01:30:00'", 0.03, 0.05]);  data.addRow(["'12 02:00:00'", 0.03, 0.06]);  data.addRow(["'12 02:30:00'", 0.03, 0.05]);  data.addRow(["'12 03:00:00'", 0.26, 0.15]);  data.addRow(["'12 03:30:00'", 0.13, 0.13]);  data.addRow(["'12 04:00:00'", 0.02, 0.05]);  data.addRow(["'12 04:30:00'", 0.06, 0.07]);  data.addRow(["'12 05:00:00'", 0.10, 0.10]);  data.addRow(["'12 05:30:00'", 0.09, 0.10]);  data.addRow(["'12 06:00:00'", 0.04, 0.11]);  data.addRow(["'12 06:30:00'", 0.04, 0.28]);  data.addRow(["'12 07:00:00'", 0.14, 0.27]);  data.addRow(["'12 07:30:00'", 0.08, 0.30]);  data.addRow(["'12 08:00:00'", 1.45, 0.34]);  data.addRow(["'12 08:30:00'", 0.03, 0.09]);  data.addRow(["'12 09:00:00'", 0.99, 0.27]);  data.addRow(["'12 09:30:00'", 0.14, 0.25]);  data.addRow(["'12 10:00:00'", 0.12, 0.36]);  data.addRow(["'12 10:30:00'", 0.21, 0.16]);  data.addRow(["'12 11:00:00'", 0.10, 0.07]);  data.addRow(["'12 11:30:00'", 0.09, 0.09]);  data.addRow(["'12 12:00:00'", 0.06, 0.07]);  data.addRow(["'12 12:30:00'", 0.11, 0.06]);  data.addRow(["'12 13:00:00'", 0.11, 0.08]);  data.addRow(["'12 13:30:00'", 0.16, 0.13]);  data.addRow(["'12 14:00:00'", 1.57, 0.70]);  data.addRow(["'12 14:30:00'", 0.19, 0.10]);  data.addRow(["'12 15:00:00'", 0.03, 0.09]);  data.addRow(["'12 15:30:00'", 13.10, 1.01]);  data.addRow(["'12 16:00:00'", 2.30, 1.19]);  data.addRow(["'12 16:30:00'", 4.81, 1.58]);  data.addRow(["'12 17:00:00'", 2.68, 1.42]);  data.addRow(["'12 17:30:00'", 2.44, 1.01]);  data.addRow(["'12 18:00:00'", 2.10, 1.03]);  data.addRow(["'12 18:30:00'", 2.41, 0.96]);  data.addRow(["'12 19:00:00'", 2.25, 1.10]);  data.addRow(["'12 19:30:00'", 2.03, 1.08]);  data.addRow(["'12 20:00:00'", 1.11, 0.65]);  data.addRow(["'12 20:30:00'", 1.58, 0.60]);  data.addRow(["'12 21:00:00'", 0.43, 0.74]);  data.addRow(["'12 21:30:00'", 0.57, 0.17]);  data.addRow(["'12 22:00:00'", 0.25, 0.20]);  data.addRow(["'12 22:30:00'", 0.26, 0.14]);  data.addRow(["'12 23:00:00'", 0.79, 0.30]);  data.addRow(["'12 23:30:00'", 1.45, 0.49]);  data.addRow(["'13 00:00:00'", 1.40, 0.21]);  data.addRow(["'13 00:30:00'", 0.13, 0.07]);  data.addRow(["'13 01:00:00'", 0.12, 0.13]);  data.addRow(["'13 01:30:00'", 0.95, 0.14]);  data.addRow(["'13 02:00:00'", 0.07, 0.05]);  data.addRow(["'13 02:30:00'", 0.13, 1.28]);  data.addRow(["'13 03:00:00'", 0.02, 0.06]);  data.addRow(["'13 03:30:00'", 0.05, 0.16]);  data.addRow(["'13 04:00:00'", 0.09, 0.14]);  data.addRow(["'13 04:30:00'", 0.05, 0.15]);  data.addRow(["'13 05:00:00'", 0.09, 0.16]);  data.addRow(["'13 05:30:00'", 0.04, 0.06]);  data.addRow(["'13 06:00:00'", 0.12, 0.12]);  data.addRow(["'13 06:30:00'", 0.18, 0.14]);  data.addRow(["'13 07:00:00'", 0.24, 0.14]);  data.addRow(["'13 07:30:00'", 0.04, 0.13]);  data.addRow(["'13 08:00:00'", 5.94, 0.32]);  data.addRow(["'13 08:30:00'", 0.19, 0.33]);  data.addRow(["'13 09:00:00'", 0.09, 0.08]);  data.addRow(["'13 09:30:00'", 0.14, 0.15]);  data.addRow(["'13 10:00:00'", 0.15, 0.10]);  data.addRow(["'13 10:30:00'", 0.12, 0.14]);  data.addRow(["'13 11:00:00'", 0.08, 0.24]);  data.addRow(["'13 11:30:00'", 0.07, 0.18]);  data.addRow(["'13 12:00:00'", 0.12, 0.27]);  data.addRow(["'13 12:30:00'", 0.07, 0.25]);  data.addRow(["'13 13:00:00'", 0.06, 0.09]);  data.addRow(["'13 13:30:00'", 0.07, 0.13]);  data.addRow(["'13 14:00:00'", 0.06, 0.24]);  data.addRow(["'13 14:30:00'", 2.29, 0.45]);  data.addRow(["'13 15:00:00'", 0.11, 0.21]);  data.addRow(["'13 15:30:00'", 0.16, 0.06]);  data.addRow(["'13 16:00:00'", 0.21, 0.22]);  data.addRow(["'13 16:30:00'", 0.34, 0.09]);  data.addRow(["'13 17:00:00'", 0.02, 0.13]);  data.addRow(["'13 17:30:00'", 0.55, 0.12]);  data.addRow(["'13 18:00:00'", 0.46, 0.36]);  data.addRow(["'13 18:30:00'", 0.07, 0.58]);  data.addRow(["'13 19:00:00'", 0.43, 0.18]);  data.addRow(["'13 19:30:00'", 0.03, 0.45]);  data.addRow(["'13 20:00:00'", 0.34, 0.21]);  data.addRow(["'13 20:30:00'", 0.65, 0.23]);  data.addRow(["'13 21:00:00'", 0.35, 0.15]);  data.addRow(["'13 21:30:00'", 0.04, 0.46]);  data.addRow(["'13 22:00:00'", 0.38, 0.20]);  data.addRow(["'13 22:30:00'", 0.05, 0.23]);  data.addRow(["'13 23:00:00'", 0.32, 0.14]);  data.addRow(["'13 23:30:00'", 1.73, 1.18]);  data.addRow(["'14 00:00:00'", 3.02, 1.51]);  data.addRow(["'14 00:30:00'", 2.61, 1.73]);  data.addRow(["'14 01:00:00'", 7.64, 1.58]);  data.addRow(["'14 01:30:00'", 3.45, 0.95]);  data.addRow(["'14 02:00:00'", 3.85, 1.04]);  data.addRow(["'14 02:30:00'", 3.70, 0.95]);  data.addRow(["'14 03:00:00'", 1.59, 0.74]);  data.addRow(["'14 03:30:00'", 2.30, 1.50]);  data.addRow(["'14 04:00:00'", 0.73, 0.29]);  data.addRow(["'14 04:30:00'", 0.31, 0.22]);  data.addRow(["'14 05:00:00'", 0.16, 0.26]);  data.addRow(["'14 05:30:00'", 0.13, 0.18]);  data.addRow(["'14 06:00:00'", 0.17, 0.14]);  data.addRow(["'14 06:30:00'", 0.11, 0.16]);  data.addRow(["'14 07:00:00'", 0.12, 0.08]);  data.addRow(["'14 07:30:00'", 0.09, 0.10]);  data.addRow(["'14 08:00:00'", 0.16, 0.10]);  data.addRow(["'14 08:30:00'", 0.35, 0.26]);  data.addRow(["'14 09:00:00'", 0.30, 0.22]);  data.addRow(["'14 09:30:00'", 0.28, 0.32]);  data.addRow(["'14 10:00:00'", 0.19, 0.37]);  data.addRow(["'14 10:30:00'", 0.14, 0.18]);  data.addRow(["'14 11:00:00'", 2.05, 0.26]);  data.addRow(["'14 11:30:00'", 0.14, 0.20]);  data.addRow(["'14 12:00:00'", 0.25, 0.16]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='22 Traffic Network Max: 184.29 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='184'

	
        
      
	