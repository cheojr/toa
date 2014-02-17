
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'07 12:30:00'", 0.70, 0.92]);  data.addRow(["'07 13:00:00'", 0.82, 1.17]);  data.addRow(["'07 13:30:00'", 0.84, 1.17]);  data.addRow(["'07 14:00:00'", 0.95, 1.23]);  data.addRow(["'07 14:30:00'", 0.89, 1.27]);  data.addRow(["'07 15:00:00'", 0.80, 1.16]);  data.addRow(["'07 15:30:00'", 0.74, 1.04]);  data.addRow(["'07 16:00:00'", 0.84, 1.22]);  data.addRow(["'07 16:30:00'", 0.75, 1.08]);  data.addRow(["'07 17:00:00'", 0.58, 0.80]);  data.addRow(["'07 17:30:00'", 0.43, 0.60]);  data.addRow(["'07 18:00:00'", 0.36, 0.50]);  data.addRow(["'07 18:30:00'", 0.25, 0.32]);  data.addRow(["'07 19:00:00'", 0.32, 0.39]);  data.addRow(["'07 19:30:00'", 0.25, 0.34]);  data.addRow(["'07 20:00:00'", 0.28, 0.33]);  data.addRow(["'07 20:30:00'", 0.23, 0.27]);  data.addRow(["'07 21:00:00'", 0.24, 0.27]);  data.addRow(["'07 21:30:00'", 0.23, 0.26]);  data.addRow(["'07 22:00:00'", 0.24, 0.27]);  data.addRow(["'07 22:30:00'", 0.26, 0.29]);  data.addRow(["'07 23:00:00'", 0.27, 0.31]);  data.addRow(["'07 23:30:00'", 0.24, 0.26]);  data.addRow(["'08 00:00:00'", 0.20, 0.25]);  data.addRow(["'08 00:30:00'", 0.17, 0.21]);  data.addRow(["'08 01:00:00'", 0.17, 0.21]);  data.addRow(["'08 01:30:00'", 0.15, 0.18]);  data.addRow(["'08 02:00:00'", 0.14, 0.16]);  data.addRow(["'08 02:30:00'", 0.10, 0.11]);  data.addRow(["'08 03:00:00'", 0.11, 0.11]);  data.addRow(["'08 03:30:00'", 0.08, 0.08]);  data.addRow(["'08 04:00:00'", 0.09, 0.09]);  data.addRow(["'08 04:30:00'", 0.08, 0.09]);  data.addRow(["'08 05:00:00'", 0.09, 0.09]);  data.addRow(["'08 05:30:00'", 0.07, 0.07]);  data.addRow(["'08 06:00:00'", 0.10, 0.11]);  data.addRow(["'08 06:30:00'", 0.07, 0.08]);  data.addRow(["'08 07:00:00'", 0.08, 0.10]);  data.addRow(["'08 07:30:00'", 0.08, 0.09]);  data.addRow(["'08 08:00:00'", 0.11, 0.10]);  data.addRow(["'08 08:30:00'", 0.12, 0.13]);  data.addRow(["'08 09:00:00'", 0.14, 0.14]);  data.addRow(["'08 09:30:00'", 0.15, 0.17]);  data.addRow(["'08 10:00:00'", 0.16, 0.17]);  data.addRow(["'08 10:30:00'", 0.18, 0.21]);  data.addRow(["'08 11:00:00'", 0.21, 0.25]);  data.addRow(["'08 11:30:00'", 0.25, 0.30]);  data.addRow(["'08 12:00:00'", 0.27, 0.33]);  data.addRow(["'08 12:30:00'", 0.28, 0.34]);  data.addRow(["'08 13:00:00'", 0.25, 0.31]);  data.addRow(["'08 13:30:00'", 0.30, 0.33]);  data.addRow(["'08 14:00:00'", 0.28, 0.33]);  data.addRow(["'08 14:30:00'", 0.30, 0.36]);  data.addRow(["'08 15:00:00'", 0.32, 0.36]);  data.addRow(["'08 15:30:00'", 0.29, 0.37]);  data.addRow(["'08 16:00:00'", 0.31, 0.38]);  data.addRow(["'08 16:30:00'", 0.32, 0.39]);  data.addRow(["'08 17:00:00'", 0.36, 0.39]);  data.addRow(["'08 17:30:00'", 0.25, 0.30]);  data.addRow(["'08 18:00:00'", 0.22, 0.29]);  data.addRow(["'08 18:30:00'", 0.23, 0.30]);  data.addRow(["'08 19:00:00'", 0.25, 0.30]);  data.addRow(["'08 19:30:00'", 0.23, 0.27]);  data.addRow(["'08 20:00:00'", 0.25, 0.29]);  data.addRow(["'08 20:30:00'", 0.27, 0.28]);  data.addRow(["'08 21:00:00'", 0.30, 0.32]);  data.addRow(["'08 21:30:00'", 0.28, 0.30]);  data.addRow(["'08 22:00:00'", 0.29, 0.31]);  data.addRow(["'08 22:30:00'", 0.29, 0.34]);  data.addRow(["'08 23:00:00'", 0.30, 0.34]);  data.addRow(["'08 23:30:00'", 0.28, 0.30]);  data.addRow(["'09 00:00:00'", 0.27, 0.30]);  data.addRow(["'09 00:30:00'", 0.26, 0.28]);  data.addRow(["'09 01:00:00'", 0.27, 0.31]);  data.addRow(["'09 01:30:00'", 0.25, 0.27]);  data.addRow(["'09 02:00:00'", 0.25, 0.27]);  data.addRow(["'09 02:30:00'", 0.22, 0.27]);  data.addRow(["'09 03:00:00'", 0.22, 0.26]);  data.addRow(["'09 03:30:00'", 0.17, 0.20]);  data.addRow(["'09 04:00:00'", 0.19, 0.21]);  data.addRow(["'09 04:30:00'", 0.14, 0.16]);  data.addRow(["'09 05:00:00'", 0.17, 0.19]);  data.addRow(["'09 05:30:00'", 0.15, 0.17]);  data.addRow(["'09 06:00:00'", 0.16, 0.18]);  data.addRow(["'09 06:30:00'", 0.11, 0.11]);  data.addRow(["'09 07:00:00'", 0.14, 0.14]);  data.addRow(["'09 07:30:00'", 0.12, 0.12]);  data.addRow(["'09 08:00:00'", 0.13, 0.14]);  data.addRow(["'09 08:30:00'", 0.14, 0.14]);  data.addRow(["'09 09:00:00'", 0.14, 0.16]);  data.addRow(["'09 09:30:00'", 0.16, 0.16]);  data.addRow(["'09 10:00:00'", 0.15, 0.18]);  data.addRow(["'09 10:30:00'", 0.22, 0.22]);  data.addRow(["'09 11:00:00'", 0.23, 0.25]);  data.addRow(["'09 11:30:00'", 0.25, 0.24]);  data.addRow(["'09 12:00:00'", 0.24, 0.27]);  data.addRow(["'09 12:30:00'", 0.31, 0.33]);  data.addRow(["'09 13:00:00'", 0.25, 0.29]);  data.addRow(["'09 13:30:00'", 0.36, 0.39]);  data.addRow(["'09 14:00:00'", 0.27, 0.32]);  data.addRow(["'09 14:30:00'", 0.35, 0.38]);  data.addRow(["'09 15:00:00'", 0.31, 0.35]);  data.addRow(["'09 15:30:00'", 0.32, 0.38]);  data.addRow(["'09 16:00:00'", 0.38, 0.46]);  data.addRow(["'09 16:30:00'", 0.39, 0.47]);  data.addRow(["'09 17:00:00'", 0.38, 0.45]);  data.addRow(["'09 17:30:00'", 0.38, 0.41]);  data.addRow(["'09 18:00:00'", 0.35, 0.41]);  data.addRow(["'09 18:30:00'", 0.35, 0.42]);  data.addRow(["'09 19:00:00'", 0.48, 0.53]);  data.addRow(["'09 19:30:00'", 0.44, 0.49]);  data.addRow(["'09 20:00:00'", 0.46, 0.54]);  data.addRow(["'09 20:30:00'", 0.41, 0.50]);  data.addRow(["'09 21:00:00'", 0.39, 0.45]);  data.addRow(["'09 21:30:00'", 0.44, 0.55]);  data.addRow(["'09 22:00:00'", 0.44, 0.47]);  data.addRow(["'09 22:30:00'", 0.37, 0.42]);  data.addRow(["'09 23:00:00'", 0.36, 0.40]);  data.addRow(["'09 23:30:00'", 0.31, 0.35]);  data.addRow(["'10 00:00:00'", 0.38, 0.41]);  data.addRow(["'10 00:30:00'", 0.27, 0.35]);  data.addRow(["'10 01:00:00'", 0.25, 0.31]);  data.addRow(["'10 01:30:00'", 0.21, 0.25]);  data.addRow(["'10 02:00:00'", 0.17, 0.21]);  data.addRow(["'10 02:30:00'", 0.23, 0.22]);  data.addRow(["'10 03:00:00'", 0.24, 0.22]);  data.addRow(["'10 03:30:00'", 0.38, 0.27]);  data.addRow(["'10 04:00:00'", 0.25, 0.22]);  data.addRow(["'10 04:30:00'", 0.38, 0.27]);  data.addRow(["'10 05:00:00'", 0.27, 0.20]);  data.addRow(["'10 05:30:00'", 0.26, 0.22]);  data.addRow(["'10 06:00:00'", 0.27, 0.21]);  data.addRow(["'10 06:30:00'", 0.17, 0.18]);  data.addRow(["'10 07:00:00'", 0.33, 0.30]);  data.addRow(["'10 07:30:00'", 0.29, 0.34]);  data.addRow(["'10 08:00:00'", 0.39, 0.51]);  data.addRow(["'10 08:30:00'", 0.48, 0.65]);  data.addRow(["'10 09:00:00'", 0.84, 1.10]);  data.addRow(["'10 09:30:00'", 0.85, 1.14]);  data.addRow(["'10 10:00:00'", 0.97, 1.26]);  data.addRow(["'10 10:30:00'", 1.07, 1.38]);  data.addRow(["'10 11:00:00'", 1.06, 1.32]);  data.addRow(["'10 11:30:00'", 1.12, 1.39]);  data.addRow(["'10 12:00:00'", 0.97, 1.19]);  data.addRow(["'10 12:30:00'", 1.11, 1.37]);  data.addRow(["'10 13:00:00'", 1.09, 1.38]);  data.addRow(["'10 13:30:00'", 1.14, 1.46]);  data.addRow(["'10 14:00:00'", 1.04, 1.38]);  data.addRow(["'10 14:30:00'", 1.02, 1.38]);  data.addRow(["'10 15:00:00'", 1.13, 1.44]);  data.addRow(["'10 15:30:00'", 1.04, 1.36]);  data.addRow(["'10 16:00:00'", 1.18, 1.45]);  data.addRow(["'10 16:30:00'", 1.01, 1.32]);  data.addRow(["'10 17:00:00'", 0.88, 1.08]);  data.addRow(["'10 17:30:00'", 0.84, 1.02]);  data.addRow(["'10 18:00:00'", 0.64, 0.75]);  data.addRow(["'10 18:30:00'", 0.73, 0.90]);  data.addRow(["'10 19:00:00'", 0.63, 0.79]);  data.addRow(["'10 19:30:00'", 0.77, 0.93]);  data.addRow(["'10 20:00:00'", 0.69, 0.82]);  data.addRow(["'10 20:30:00'", 0.72, 0.74]);  data.addRow(["'10 21:00:00'", 0.71, 0.78]);  data.addRow(["'10 21:30:00'", 0.59, 0.66]);  data.addRow(["'10 22:00:00'", 0.57, 0.63]);  data.addRow(["'10 22:30:00'", 0.61, 0.63]);  data.addRow(["'10 23:00:00'", 0.40, 0.44]);  data.addRow(["'10 23:30:00'", 0.52, 0.59]);  data.addRow(["'11 00:00:00'", 0.47, 0.47]);  data.addRow(["'11 00:30:00'", 0.38, 0.39]);  data.addRow(["'11 01:00:00'", 0.41, 0.45]);  data.addRow(["'11 01:30:00'", 0.22, 0.27]);  data.addRow(["'11 02:00:00'", 0.20, 0.25]);  data.addRow(["'11 02:30:00'", 0.17, 0.21]);  data.addRow(["'11 03:00:00'", 0.14, 0.15]);  data.addRow(["'11 03:30:00'", 0.13, 0.14]);  data.addRow(["'11 04:00:00'", 0.11, 0.19]);  data.addRow(["'11 04:30:00'", 0.12, 0.15]);  data.addRow(["'11 05:00:00'", 0.09, 0.10]);  data.addRow(["'11 05:30:00'", 0.10, 0.08]);  data.addRow(["'11 06:00:00'", 0.11, 0.15]);  data.addRow(["'11 06:30:00'", 0.13, 0.14]);  data.addRow(["'11 07:00:00'", 0.17, 0.21]);  data.addRow(["'11 07:30:00'", 0.26, 0.36]);  data.addRow(["'11 08:00:00'", 0.33, 0.47]);  data.addRow(["'11 08:30:00'", 0.54, 0.82]);  data.addRow(["'11 09:00:00'", 0.69, 0.94]);  data.addRow(["'11 09:30:00'", 0.83, 1.13]);  data.addRow(["'11 10:00:00'", 0.85, 1.07]);  data.addRow(["'11 10:30:00'", 0.84, 1.15]);  data.addRow(["'11 11:00:00'", 0.81, 1.14]);  data.addRow(["'11 11:30:00'", 0.82, 1.14]);  data.addRow(["'11 12:00:00'", 0.86, 1.23]);  data.addRow(["'11 12:30:00'", 0.95, 1.25]);  data.addRow(["'11 13:00:00'", 0.97, 1.30]);  data.addRow(["'11 13:30:00'", 0.97, 1.41]);  data.addRow(["'11 14:00:00'", 0.96, 1.29]);  data.addRow(["'11 14:30:00'", 0.93, 1.24]);  data.addRow(["'11 15:00:00'", 0.97, 1.31]);  data.addRow(["'11 15:30:00'", 0.94, 1.33]);  data.addRow(["'11 16:00:00'", 0.93, 1.27]);  data.addRow(["'11 16:30:00'", 0.94, 1.18]);  data.addRow(["'11 17:00:00'", 0.84, 1.17]);  data.addRow(["'11 17:30:00'", 0.69, 0.91]);  data.addRow(["'11 18:00:00'", 0.59, 0.82]);  data.addRow(["'11 18:30:00'", 0.57, 0.79]);  data.addRow(["'11 19:00:00'", 0.57, 0.76]);  data.addRow(["'11 19:30:00'", 0.62, 0.85]);  data.addRow(["'11 20:00:00'", 0.59, 0.76]);  data.addRow(["'11 20:30:00'", 0.52, 0.62]);  data.addRow(["'11 21:00:00'", 0.46, 0.57]);  data.addRow(["'11 21:30:00'", 0.49, 0.56]);  data.addRow(["'11 22:00:00'", 0.40, 0.50]);  data.addRow(["'11 22:30:00'", 0.35, 0.43]);  data.addRow(["'11 23:00:00'", 0.35, 0.42]);  data.addRow(["'11 23:30:00'", 0.39, 0.49]);  data.addRow(["'12 00:00:00'", 0.33, 0.39]);  data.addRow(["'12 00:30:00'", 0.38, 0.46]);  data.addRow(["'12 01:00:00'", 0.28, 0.35]);  data.addRow(["'12 01:30:00'", 0.32, 0.40]);  data.addRow(["'12 02:00:00'", 0.28, 0.39]);  data.addRow(["'12 02:30:00'", 0.24, 0.27]);  data.addRow(["'12 03:00:00'", 0.19, 0.22]);  data.addRow(["'12 03:30:00'", 0.18, 0.23]);  data.addRow(["'12 04:00:00'", 0.14, 0.15]);  data.addRow(["'12 04:30:00'", 0.11, 0.13]);  data.addRow(["'12 05:00:00'", 0.11, 0.12]);  data.addRow(["'12 05:30:00'", 0.12, 0.13]);  data.addRow(["'12 06:00:00'", 0.13, 0.15]);  data.addRow(["'12 06:30:00'", 0.15, 0.14]);  data.addRow(["'12 07:00:00'", 0.21, 0.27]);  data.addRow(["'12 07:30:00'", 0.29, 0.37]);  data.addRow(["'12 08:00:00'", 0.39, 0.54]);  data.addRow(["'12 08:30:00'", 0.57, 0.85]);  data.addRow(["'12 09:00:00'", 0.77, 1.09]);  data.addRow(["'12 09:30:00'", 0.78, 1.15]);  data.addRow(["'12 10:00:00'", 0.83, 1.18]);  data.addRow(["'12 10:30:00'", 0.88, 1.17]);  data.addRow(["'12 11:00:00'", 0.94, 1.32]);  data.addRow(["'12 11:30:00'", 1.03, 1.44]);  data.addRow(["'12 12:00:00'", 0.96, 1.31]);  data.addRow(["'12 12:30:00'", 1.03, 1.43]);  data.addRow(["'12 13:00:00'", 0.97, 1.31]);  data.addRow(["'12 13:30:00'", 1.15, 1.51]);  data.addRow(["'12 14:00:00'", 1.06, 1.42]);  data.addRow(["'12 14:30:00'", 1.04, 1.38]);  data.addRow(["'12 15:00:00'", 1.03, 1.37]);  data.addRow(["'12 15:30:00'", 1.06, 1.42]);  data.addRow(["'12 16:00:00'", 1.03, 1.38]);  data.addRow(["'12 16:30:00'", 1.01, 1.35]);  data.addRow(["'12 17:00:00'", 0.94, 1.23]);  data.addRow(["'12 17:30:00'", 0.72, 1.02]);  data.addRow(["'12 18:00:00'", 0.76, 0.96]);  data.addRow(["'12 18:30:00'", 0.71, 0.93]);  data.addRow(["'12 19:00:00'", 0.73, 0.98]);  data.addRow(["'12 19:30:00'", 0.65, 0.87]);  data.addRow(["'12 20:00:00'", 0.60, 0.74]);  data.addRow(["'12 20:30:00'", 0.61, 0.77]);  data.addRow(["'12 21:00:00'", 0.52, 0.65]);  data.addRow(["'12 21:30:00'", 0.54, 0.62]);  data.addRow(["'12 22:00:00'", 0.49, 0.58]);  data.addRow(["'12 22:30:00'", 0.46, 0.54]);  data.addRow(["'12 23:00:00'", 0.42, 0.53]);  data.addRow(["'12 23:30:00'", 0.47, 0.57]);  data.addRow(["'13 00:00:00'", 0.41, 0.50]);  data.addRow(["'13 00:30:00'", 0.43, 0.53]);  data.addRow(["'13 01:00:00'", 0.34, 0.42]);  data.addRow(["'13 01:30:00'", 0.29, 0.39]);  data.addRow(["'13 02:00:00'", 0.28, 0.35]);  data.addRow(["'13 02:30:00'", 0.24, 0.30]);  data.addRow(["'13 03:00:00'", 0.23, 0.28]);  data.addRow(["'13 03:30:00'", 0.21, 0.25]);  data.addRow(["'13 04:00:00'", 0.21, 0.25]);  data.addRow(["'13 04:30:00'", 0.23, 0.27]);  data.addRow(["'13 05:00:00'", 0.25, 0.30]);  data.addRow(["'13 05:30:00'", 0.25, 0.27]);  data.addRow(["'13 06:00:00'", 0.28, 0.31]);  data.addRow(["'13 06:30:00'", 0.31, 0.34]);  data.addRow(["'13 07:00:00'", 0.31, 0.38]);  data.addRow(["'13 07:30:00'", 0.32, 0.39]);  data.addRow(["'13 08:00:00'", 0.46, 0.60]);  data.addRow(["'13 08:30:00'", 0.76, 1.05]);  data.addRow(["'13 09:00:00'", 0.76, 1.06]);  data.addRow(["'13 09:30:00'", 0.76, 1.12]);  data.addRow(["'13 10:00:00'", 0.80, 1.15]);  data.addRow(["'13 10:30:00'", 1.01, 1.34]);  data.addRow(["'13 11:00:00'", 0.95, 1.30]);  data.addRow(["'13 11:30:00'", 0.91, 1.21]);  data.addRow(["'13 12:00:00'", 1.00, 1.32]);  data.addRow(["'13 12:30:00'", 0.98, 1.31]);  data.addRow(["'13 13:00:00'", 0.98, 1.31]);  data.addRow(["'13 13:30:00'", 0.97, 1.27]);  data.addRow(["'13 14:00:00'", 1.10, 1.51]);  data.addRow(["'13 14:30:00'", 1.00, 1.32]);  data.addRow(["'13 15:00:00'", 1.00, 1.35]);  data.addRow(["'13 15:30:00'", 0.95, 1.28]);  data.addRow(["'13 16:00:00'", 0.88, 1.27]);  data.addRow(["'13 16:30:00'", 0.79, 1.12]);  data.addRow(["'13 17:00:00'", 0.75, 1.04]);  data.addRow(["'13 17:30:00'", 0.69, 0.92]);  data.addRow(["'13 18:00:00'", 0.55, 0.78]);  data.addRow(["'13 18:30:00'", 0.64, 0.83]);  data.addRow(["'13 19:00:00'", 0.60, 0.83]);  data.addRow(["'13 19:30:00'", 0.58, 0.74]);  data.addRow(["'13 20:00:00'", 0.49, 0.64]);  data.addRow(["'13 20:30:00'", 0.56, 0.71]);  data.addRow(["'13 21:00:00'", 0.54, 0.66]);  data.addRow(["'13 21:30:00'", 0.53, 0.65]);  data.addRow(["'13 22:00:00'", 0.46, 0.57]);  data.addRow(["'13 22:30:00'", 0.40, 0.49]);  data.addRow(["'13 23:00:00'", 0.37, 0.47]);  data.addRow(["'13 23:30:00'", 0.37, 0.47]);  data.addRow(["'14 00:00:00'", 0.39, 0.46]);  data.addRow(["'14 00:30:00'", 0.35, 0.45]);  data.addRow(["'14 01:00:00'", 0.39, 0.47]);  data.addRow(["'14 01:30:00'", 0.34, 0.38]);  data.addRow(["'14 02:00:00'", 0.28, 0.34]);  data.addRow(["'14 02:30:00'", 0.25, 0.32]);  data.addRow(["'14 03:00:00'", 0.19, 0.25]);  data.addRow(["'14 03:30:00'", 0.22, 0.27]);  data.addRow(["'14 04:00:00'", 0.19, 0.24]);  data.addRow(["'14 04:30:00'", 0.18, 0.21]);  data.addRow(["'14 05:00:00'", 0.17, 0.21]);  data.addRow(["'14 05:30:00'", 0.18, 0.27]);  data.addRow(["'14 06:00:00'", 0.17, 0.21]);  data.addRow(["'14 06:30:00'", 0.19, 0.22]);  data.addRow(["'14 07:00:00'", 0.20, 0.25]);  data.addRow(["'14 07:30:00'", 0.23, 0.31]);  data.addRow(["'14 08:00:00'", 0.29, 0.39]);  data.addRow(["'14 08:30:00'", 0.42, 0.62]);  data.addRow(["'14 09:00:00'", 0.56, 0.78]);  data.addRow(["'14 09:30:00'", 0.60, 0.85]);  data.addRow(["'14 10:00:00'", 0.62, 0.92]);  data.addRow(["'14 10:30:00'", 0.73, 1.07]);  data.addRow(["'14 11:00:00'", 0.90, 1.28]);  data.addRow(["'14 11:30:00'", 0.93, 1.20]);  data.addRow(["'14 12:00:00'", 0.69, 1.03]);  data.addRow(["'14 12:30:00'", 0.00, 0.00]); 
	var graphtitle='RRP Traffic Packets Max: 2.24 MB Min: 47.05 KB'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='2'

	
        
      
	