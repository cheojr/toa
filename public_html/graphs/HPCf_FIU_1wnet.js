
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'07 12:30:00'", 0.20, 0.08]);  data.addRow(["'07 13:00:00'", 0.07, 0.02]);  data.addRow(["'07 13:30:00'", 0.50, 0.09]);  data.addRow(["'07 14:00:00'", 0.21, 0.05]);  data.addRow(["'07 14:30:00'", 0.13, 0.04]);  data.addRow(["'07 15:00:00'", 0.10, 0.01]);  data.addRow(["'07 15:30:00'", 0.08, 0.02]);  data.addRow(["'07 16:00:00'", 0.27, 0.04]);  data.addRow(["'07 16:30:00'", 0.11, 0.09]);  data.addRow(["'07 17:00:00'", 0.11, 0.01]);  data.addRow(["'07 17:30:00'", 0.23, 0.08]);  data.addRow(["'07 18:00:00'", 0.02, 0.01]);  data.addRow(["'07 18:30:00'", 0.18, 0.08]);  data.addRow(["'07 19:00:00'", 0.08, 0.22]);  data.addRow(["'07 19:30:00'", 0.05, 0.08]);  data.addRow(["'07 20:00:00'", 0.01, 0.01]);  data.addRow(["'07 20:30:00'", 0.01, 0.08]);  data.addRow(["'07 21:00:00'", 0.01, 0.01]);  data.addRow(["'07 21:30:00'", 0.02, 0.01]);  data.addRow(["'07 22:00:00'", 0.01, 0.00]);  data.addRow(["'07 22:30:00'", 0.01, 0.08]);  data.addRow(["'07 23:00:00'", 0.04, 0.01]);  data.addRow(["'07 23:30:00'", 0.01, 0.08]);  data.addRow(["'08 00:00:00'", 0.02, 0.01]);  data.addRow(["'08 00:30:00'", 0.01, 0.01]);  data.addRow(["'08 01:00:00'", 0.01, 0.01]);  data.addRow(["'08 01:30:00'", 0.26, 0.05]);  data.addRow(["'08 02:00:00'", 0.01, 0.00]);  data.addRow(["'08 02:30:00'", 0.01, 0.08]);  data.addRow(["'08 03:00:00'", 0.02, 0.08]);  data.addRow(["'08 03:30:00'", 0.01, 0.02]);  data.addRow(["'08 04:00:00'", 0.01, 0.02]);  data.addRow(["'08 04:30:00'", 0.01, 0.01]);  data.addRow(["'08 05:00:00'", 0.01, 0.29]);  data.addRow(["'08 05:30:00'", 0.01, 0.02]);  data.addRow(["'08 06:00:00'", 0.01, 0.01]);  data.addRow(["'08 06:30:00'", 0.01, 0.21]);  data.addRow(["'08 07:00:00'", 0.01, 0.01]);  data.addRow(["'08 07:30:00'", 0.02, 0.01]);  data.addRow(["'08 08:00:00'", 0.02, 0.01]);  data.addRow(["'08 08:30:00'", 0.02, 0.01]);  data.addRow(["'08 09:00:00'", 0.01, 0.08]);  data.addRow(["'08 09:30:00'", 0.02, 0.01]);  data.addRow(["'08 10:00:00'", 0.02, 0.01]);  data.addRow(["'08 10:30:00'", 0.01, 0.01]);  data.addRow(["'08 11:00:00'", 0.02, 0.01]);  data.addRow(["'08 11:30:00'", 0.01, 0.01]);  data.addRow(["'08 12:00:00'", 0.12, 0.01]);  data.addRow(["'08 12:30:00'", 0.15, 0.01]);  data.addRow(["'08 13:00:00'", 0.31, 0.01]);  data.addRow(["'08 13:30:00'", 0.01, 0.02]);  data.addRow(["'08 14:00:00'", 0.02, 0.11]);  data.addRow(["'08 14:30:00'", 0.01, 0.01]);  data.addRow(["'08 15:00:00'", 0.01, 0.01]);  data.addRow(["'08 15:30:00'", 0.01, 0.01]);  data.addRow(["'08 16:00:00'", 0.02, 0.09]);  data.addRow(["'08 16:30:00'", 0.02, 0.01]);  data.addRow(["'08 17:00:00'", 0.02, 0.08]);  data.addRow(["'08 17:30:00'", 0.01, 0.01]);  data.addRow(["'08 18:00:00'", 0.01, 0.09]);  data.addRow(["'08 18:30:00'", 0.02, 0.01]);  data.addRow(["'08 19:00:00'", 0.01, 0.01]);  data.addRow(["'08 19:30:00'", 0.01, 0.01]);  data.addRow(["'08 20:00:00'", 0.02, 0.01]);  data.addRow(["'08 20:30:00'", 0.04, 0.01]);  data.addRow(["'08 21:00:00'", 0.02, 0.02]);  data.addRow(["'08 21:30:00'", 0.03, 0.01]);  data.addRow(["'08 22:00:00'", 0.03, 0.01]);  data.addRow(["'08 22:30:00'", 0.01, 0.01]);  data.addRow(["'08 23:00:00'", 0.01, 0.01]);  data.addRow(["'08 23:30:00'", 0.10, 0.68]);  data.addRow(["'09 00:00:00'", 0.25, 0.01]);  data.addRow(["'09 00:30:00'", 0.03, 0.08]);  data.addRow(["'09 01:00:00'", 0.01, 0.01]);  data.addRow(["'09 01:30:00'", 0.01, 0.01]);  data.addRow(["'09 02:00:00'", 0.03, 0.01]);  data.addRow(["'09 02:30:00'", 0.05, 0.09]);  data.addRow(["'09 03:00:00'", 0.07, 0.01]);  data.addRow(["'09 03:30:00'", 0.02, 0.29]);  data.addRow(["'09 04:00:00'", 0.03, 0.22]);  data.addRow(["'09 04:30:00'", 0.01, 0.09]);  data.addRow(["'09 05:00:00'", 0.01, 0.22]);  data.addRow(["'09 05:30:00'", 0.01, 0.30]);  data.addRow(["'09 06:00:00'", 0.11, 0.23]);  data.addRow(["'09 06:30:00'", 0.21, 0.02]);  data.addRow(["'09 07:00:00'", 0.02, 0.01]);  data.addRow(["'09 07:30:00'", 0.01, 0.08]);  data.addRow(["'09 08:00:00'", 0.01, 0.01]);  data.addRow(["'09 08:30:00'", 0.01, 0.01]);  data.addRow(["'09 09:00:00'", 0.02, 0.01]);  data.addRow(["'09 09:30:00'", 0.02, 0.01]);  data.addRow(["'09 10:00:00'", 0.01, 0.01]);  data.addRow(["'09 10:30:00'", 0.01, 0.08]);  data.addRow(["'09 11:00:00'", 0.01, 0.01]);  data.addRow(["'09 11:30:00'", 0.03, 0.01]);  data.addRow(["'09 12:00:00'", 0.11, 0.04]);  data.addRow(["'09 12:30:00'", 0.01, 0.09]);  data.addRow(["'09 13:00:00'", 0.01, 0.01]);  data.addRow(["'09 13:30:00'", 0.08, 0.08]);  data.addRow(["'09 14:00:00'", 0.01, 0.01]);  data.addRow(["'09 14:30:00'", 0.07, 0.01]);  data.addRow(["'09 15:00:00'", 0.01, 0.01]);  data.addRow(["'09 15:30:00'", 0.02, 0.05]);  data.addRow(["'09 16:00:00'", 0.03, 0.01]);  data.addRow(["'09 16:30:00'", 0.01, 0.01]);  data.addRow(["'09 17:00:00'", 0.42, 0.02]);  data.addRow(["'09 17:30:00'", 0.02, 0.08]);  data.addRow(["'09 18:00:00'", 0.01, 0.01]);  data.addRow(["'09 18:30:00'", 0.02, 0.08]);  data.addRow(["'09 19:00:00'", 0.09, 0.01]);  data.addRow(["'09 19:30:00'", 0.05, 0.09]);  data.addRow(["'09 20:00:00'", 0.04, 0.08]);  data.addRow(["'09 20:30:00'", 0.01, 0.02]);  data.addRow(["'09 21:00:00'", 0.12, 0.08]);  data.addRow(["'09 21:30:00'", 0.03, 0.01]);  data.addRow(["'09 22:00:00'", 0.06, 0.01]);  data.addRow(["'09 22:30:00'", 0.01, 0.01]);  data.addRow(["'09 23:00:00'", 0.02, 0.01]);  data.addRow(["'09 23:30:00'", 0.16, 0.01]);  data.addRow(["'10 00:00:00'", 0.01, 0.01]);  data.addRow(["'10 00:30:00'", 0.35, 0.01]);  data.addRow(["'10 01:00:00'", 0.70, 0.02]);  data.addRow(["'10 01:30:00'", 0.05, 0.01]);  data.addRow(["'10 02:00:00'", 0.01, 0.01]);  data.addRow(["'10 02:30:00'", 0.03, 0.01]);  data.addRow(["'10 03:00:00'", 0.01, 0.08]);  data.addRow(["'10 03:30:00'", 0.01, 0.01]);  data.addRow(["'10 04:00:00'", 0.21, 0.02]);  data.addRow(["'10 04:30:00'", 0.07, 0.23]);  data.addRow(["'10 05:00:00'", 0.06, 0.02]);  data.addRow(["'10 05:30:00'", 0.05, 0.21]);  data.addRow(["'10 06:00:00'", 0.07, 0.22]);  data.addRow(["'10 06:30:00'", 0.08, 0.01]);  data.addRow(["'10 07:00:00'", 0.54, 0.05]);  data.addRow(["'10 07:30:00'", 0.31, 0.03]);  data.addRow(["'10 08:00:00'", 0.11, 0.08]);  data.addRow(["'10 08:30:00'", 0.14, 0.01]);  data.addRow(["'10 09:00:00'", 0.06, 0.01]);  data.addRow(["'10 09:30:00'", 0.03, 0.01]);  data.addRow(["'10 10:00:00'", 0.08, 0.01]);  data.addRow(["'10 10:30:00'", 0.11, 0.01]);  data.addRow(["'10 11:00:00'", 0.48, 0.22]);  data.addRow(["'10 11:30:00'", 0.74, 0.03]);  data.addRow(["'10 12:00:00'", 0.21, 0.27]);  data.addRow(["'10 12:30:00'", 0.22, 0.02]);  data.addRow(["'10 13:00:00'", 0.20, 0.02]);  data.addRow(["'10 13:30:00'", 0.06, 0.01]);  data.addRow(["'10 14:00:00'", 0.20, 0.09]);  data.addRow(["'10 14:30:00'", 0.35, 0.02]);  data.addRow(["'10 15:00:00'", 0.30, 0.02]);  data.addRow(["'10 15:30:00'", 0.07, 0.02]);  data.addRow(["'10 16:00:00'", 0.27, 0.10]);  data.addRow(["'10 16:30:00'", 0.58, 0.03]);  data.addRow(["'10 17:00:00'", 0.07, 0.01]);  data.addRow(["'10 17:30:00'", 0.06, 0.01]);  data.addRow(["'10 18:00:00'", 0.38, 0.09]);  data.addRow(["'10 18:30:00'", 0.10, 0.07]);  data.addRow(["'10 19:00:00'", 0.06, 0.08]);  data.addRow(["'10 19:30:00'", 0.05, 0.08]);  data.addRow(["'10 20:00:00'", 0.02, 0.37]);  data.addRow(["'10 20:30:00'", 0.16, 0.03]);  data.addRow(["'10 21:00:00'", 0.21, 0.01]);  data.addRow(["'10 21:30:00'", 0.02, 0.08]);  data.addRow(["'10 22:00:00'", 0.06, 0.01]);  data.addRow(["'10 22:30:00'", 0.05, 0.08]);  data.addRow(["'10 23:00:00'", 0.04, 0.01]);  data.addRow(["'10 23:30:00'", 0.04, 0.08]);  data.addRow(["'11 00:00:00'", 0.04, 0.01]);  data.addRow(["'11 00:30:00'", 0.02, 0.08]);  data.addRow(["'11 01:00:00'", 0.11, 0.23]);  data.addRow(["'11 01:30:00'", 0.03, 0.08]);  data.addRow(["'11 02:00:00'", 0.21, 0.01]);  data.addRow(["'11 02:30:00'", 0.03, 0.08]);  data.addRow(["'11 03:00:00'", 0.42, 0.02]);  data.addRow(["'11 03:30:00'", 0.04, 0.09]);  data.addRow(["'11 04:00:00'", 0.05, 0.74]);  data.addRow(["'11 04:30:00'", 0.02, 0.76]);  data.addRow(["'11 05:00:00'", 0.07, 1.33]);  data.addRow(["'11 05:30:00'", 0.08, 3.77]);  data.addRow(["'11 06:00:00'", 0.26, 2.24]);  data.addRow(["'11 06:30:00'", 0.08, 1.26]);  data.addRow(["'11 07:00:00'", 0.09, 0.01]);  data.addRow(["'11 07:30:00'", 0.08, 0.03]);  data.addRow(["'11 08:00:00'", 0.02, 0.01]);  data.addRow(["'11 08:30:00'", 0.16, 0.08]);  data.addRow(["'11 09:00:00'", 0.13, 0.37]);  data.addRow(["'11 09:30:00'", 0.36, 0.03]);  data.addRow(["'11 10:00:00'", 0.09, 0.11]);  data.addRow(["'11 10:30:00'", 0.18, 0.41]);  data.addRow(["'11 11:00:00'", 0.20, 0.02]);  data.addRow(["'11 11:30:00'", 0.40, 17.00]);  data.addRow(["'11 12:00:00'", 0.14, 0.05]);  data.addRow(["'11 12:30:00'", 0.08, 0.08]);  data.addRow(["'11 13:00:00'", 0.13, 0.07]);  data.addRow(["'11 13:30:00'", 0.29, 0.10]);  data.addRow(["'11 14:00:00'", 0.18, 0.02]);  data.addRow(["'11 14:30:00'", 0.41, 0.12]);  data.addRow(["'11 15:00:00'", 0.17, 0.69]);  data.addRow(["'11 15:30:00'", 0.09, 0.46]);  data.addRow(["'11 16:00:00'", 0.39, 30.26]);  data.addRow(["'11 16:30:00'", 0.28, 5.54]);  data.addRow(["'11 17:00:00'", 0.33, 0.02]);  data.addRow(["'11 17:30:00'", 0.23, 0.15]);  data.addRow(["'11 18:00:00'", 0.19, 0.01]);  data.addRow(["'11 18:30:00'", 0.61, 0.10]);  data.addRow(["'11 19:00:00'", 1.05, 14.08]);  data.addRow(["'11 19:30:00'", 0.44, 14.90]);  data.addRow(["'11 20:00:00'", 0.30, 0.10]);  data.addRow(["'11 20:30:00'", 0.16, 0.21]);  data.addRow(["'11 21:00:00'", 0.09, 0.09]);  data.addRow(["'11 21:30:00'", 0.26, 0.03]);  data.addRow(["'11 22:00:00'", 0.20, 0.01]);  data.addRow(["'11 22:30:00'", 0.14, 0.01]);  data.addRow(["'11 23:00:00'", 0.09, 0.09]);  data.addRow(["'11 23:30:00'", 0.48, 0.02]);  data.addRow(["'12 00:00:00'", 0.14, 0.09]);  data.addRow(["'12 00:30:00'", 0.08, 0.01]);  data.addRow(["'12 01:00:00'", 0.16, 0.08]);  data.addRow(["'12 01:30:00'", 0.03, 0.01]);  data.addRow(["'12 02:00:00'", 0.02, 0.09]);  data.addRow(["'12 02:30:00'", 0.11, 0.01]);  data.addRow(["'12 03:00:00'", 0.07, 0.09]);  data.addRow(["'12 03:30:00'", 0.07, 1.06]);  data.addRow(["'12 04:00:00'", 0.09, 2.04]);  data.addRow(["'12 04:30:00'", 0.08, 2.07]);  data.addRow(["'12 05:00:00'", 0.12, 5.40]);  data.addRow(["'12 05:30:00'", 0.14, 4.85]);  data.addRow(["'12 06:00:00'", 0.08, 2.07]);  data.addRow(["'12 06:30:00'", 0.10, 1.24]);  data.addRow(["'12 07:00:00'", 0.39, 0.03]);  data.addRow(["'12 07:30:00'", 0.19, 1.02]);  data.addRow(["'12 08:00:00'", 0.04, 0.09]);  data.addRow(["'12 08:30:00'", 0.10, 0.01]);  data.addRow(["'12 09:00:00'", 0.04, 0.10]);  data.addRow(["'12 09:30:00'", 0.20, 0.07]);  data.addRow(["'12 10:00:00'", 0.57, 0.11]);  data.addRow(["'12 10:30:00'", 0.13, 0.02]);  data.addRow(["'12 11:00:00'", 0.35, 0.11]);  data.addRow(["'12 11:30:00'", 0.16, 0.03]);  data.addRow(["'12 12:00:00'", 0.07, 0.01]);  data.addRow(["'12 12:30:00'", 0.54, 0.11]);  data.addRow(["'12 13:00:00'", 0.31, 0.38]);  data.addRow(["'12 13:30:00'", 0.23, 0.02]);  data.addRow(["'12 14:00:00'", 0.51, 0.03]);  data.addRow(["'12 14:30:00'", 0.19, 0.02]);  data.addRow(["'12 15:00:00'", 0.22, 0.02]);  data.addRow(["'12 15:30:00'", 0.11, 0.11]);  data.addRow(["'12 16:00:00'", 0.19, 0.03]);  data.addRow(["'12 16:30:00'", 0.46, 0.10]);  data.addRow(["'12 17:00:00'", 0.59, 0.02]);  data.addRow(["'12 17:30:00'", 0.14, 0.01]);  data.addRow(["'12 18:00:00'", 0.27, 0.01]);  data.addRow(["'12 18:30:00'", 0.15, 0.01]);  data.addRow(["'12 19:00:00'", 0.05, 0.02]);  data.addRow(["'12 19:30:00'", 0.10, 0.38]);  data.addRow(["'12 20:00:00'", 0.13, 0.02]);  data.addRow(["'12 20:30:00'", 0.08, 0.02]);  data.addRow(["'12 21:00:00'", 0.06, 0.01]);  data.addRow(["'12 21:30:00'", 0.01, 0.01]);  data.addRow(["'12 22:00:00'", 0.17, 0.01]);  data.addRow(["'12 22:30:00'", 0.04, 0.01]);  data.addRow(["'12 23:00:00'", 0.03, 0.01]);  data.addRow(["'12 23:30:00'", 0.54, 0.09]);  data.addRow(["'13 00:00:00'", 0.02, 0.00]);  data.addRow(["'13 00:30:00'", 0.03, 0.08]);  data.addRow(["'13 01:00:00'", 0.03, 0.01]);  data.addRow(["'13 01:30:00'", 0.02, 0.08]);  data.addRow(["'13 02:00:00'", 0.08, 0.27]);  data.addRow(["'13 02:30:00'", 0.01, 0.01]);  data.addRow(["'13 03:00:00'", 0.03, 0.00]);  data.addRow(["'13 03:30:00'", 0.12, 0.03]);  data.addRow(["'13 04:00:00'", 0.03, 0.92]);  data.addRow(["'13 04:30:00'", 0.06, 3.07]);  data.addRow(["'13 05:00:00'", 0.14, 1.19]);  data.addRow(["'13 05:30:00'", 0.21, 2.15]);  data.addRow(["'13 06:00:00'", 0.14, 2.56]);  data.addRow(["'13 06:30:00'", 0.09, 2.42]);  data.addRow(["'13 07:00:00'", 0.06, 0.56]);  data.addRow(["'13 07:30:00'", 0.08, 0.86]);  data.addRow(["'13 08:00:00'", 0.08, 0.01]);  data.addRow(["'13 08:30:00'", 0.05, 0.59]);  data.addRow(["'13 09:00:00'", 0.29, 1.03]);  data.addRow(["'13 09:30:00'", 0.04, 0.07]);  data.addRow(["'13 10:00:00'", 0.18, 0.09]);  data.addRow(["'13 10:30:00'", 0.36, 0.04]);  data.addRow(["'13 11:00:00'", 0.27, 0.02]);  data.addRow(["'13 11:30:00'", 0.11, 0.02]);  data.addRow(["'13 12:00:00'", 0.12, 0.09]);  data.addRow(["'13 12:30:00'", 1.28, 9.75]);  data.addRow(["'13 13:00:00'", 0.41, 0.04]);  data.addRow(["'13 13:30:00'", 0.46, 0.03]);  data.addRow(["'13 14:00:00'", 0.28, 0.21]);  data.addRow(["'13 14:30:00'", 0.23, 0.03]);  data.addRow(["'13 15:00:00'", 0.46, 0.02]);  data.addRow(["'13 15:30:00'", 0.06, 0.03]);  data.addRow(["'13 16:00:00'", 0.50, 2.59]);  data.addRow(["'13 16:30:00'", 0.33, 9.54]);  data.addRow(["'13 17:00:00'", 0.42, 0.09]);  data.addRow(["'13 17:30:00'", 0.56, 0.03]);  data.addRow(["'13 18:00:00'", 0.51, 0.08]);  data.addRow(["'13 18:30:00'", 0.19, 0.03]);  data.addRow(["'13 19:00:00'", 0.16, 0.01]);  data.addRow(["'13 19:30:00'", 0.14, 0.01]);  data.addRow(["'13 20:00:00'", 0.14, 0.38]);  data.addRow(["'13 20:30:00'", 0.06, 0.01]);  data.addRow(["'13 21:00:00'", 0.04, 0.01]);  data.addRow(["'13 21:30:00'", 0.22, 0.02]);  data.addRow(["'13 22:00:00'", 0.38, 0.08]);  data.addRow(["'13 22:30:00'", 0.09, 0.49]);  data.addRow(["'13 23:00:00'", 0.02, 0.08]);  data.addRow(["'13 23:30:00'", 0.08, 0.00]);  data.addRow(["'14 00:00:00'", 0.01, 0.08]);  data.addRow(["'14 00:30:00'", 0.01, 0.27]);  data.addRow(["'14 01:00:00'", 0.01, 0.01]);  data.addRow(["'14 01:30:00'", 0.03, 0.01]);  data.addRow(["'14 02:00:00'", 0.02, 0.10]);  data.addRow(["'14 02:30:00'", 0.02, 0.00]);  data.addRow(["'14 03:00:00'", 0.12, 0.01]);  data.addRow(["'14 03:30:00'", 0.02, 0.65]);  data.addRow(["'14 04:00:00'", 0.08, 2.09]);  data.addRow(["'14 04:30:00'", 0.06, 2.29]);  data.addRow(["'14 05:00:00'", 0.05, 1.83]);  data.addRow(["'14 05:30:00'", 0.06, 0.37]);  data.addRow(["'14 06:00:00'", 0.06, 2.47]);  data.addRow(["'14 06:30:00'", 0.13, 0.35]);  data.addRow(["'14 07:00:00'", 0.03, 0.02]);  data.addRow(["'14 07:30:00'", 0.05, 0.08]);  data.addRow(["'14 08:00:00'", 0.06, 0.01]);  data.addRow(["'14 08:30:00'", 0.21, 0.01]);  data.addRow(["'14 09:00:00'", 0.14, 2.57]);  data.addRow(["'14 09:30:00'", 0.09, 0.38]);  data.addRow(["'14 10:00:00'", 0.20, 0.06]);  data.addRow(["'14 10:30:00'", 0.61, 0.64]);  data.addRow(["'14 11:00:00'", 0.19, 0.40]);  data.addRow(["'14 11:30:00'", 0.26, 0.03]);  data.addRow(["'14 12:00:00'", 0.40, 0.03]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 137.42 MB Min: 656.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='137'

	
        
      
	