
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'01 17 14:05:00'", 0.91, 2.06, 3.37, 3.20, 0.36, 0.35]);  data.addRow(["'01 17 16:05:00'", 5.79, 2.43, 6.81, 5.77, 0.46, 0.47]);  data.addRow(["'01 17 18:05:00'", 0.15, 1.14, 1.75, 2.08, 0.17, 0.19]);  data.addRow(["'01 17 20:05:00'", 0.08, 0.08, 1.03, 1.01, 0.02, 0.03]);  data.addRow(["'01 17 22:05:00'", 0.09, 1.46, 1.46, 1.78, 0.02, 0.02]);  data.addRow(["'01 18 00:05:00'", 0.08, 0.31, 1.24, 1.24, 0.02, 0.03]);  data.addRow(["'01 18 02:05:00'", 0.07, 0.06, 1.05, 1.06, 0.02, 0.02]);  data.addRow(["'01 18 04:05:00'", 0.06, 0.05, 1.04, 1.06, 0.01, 0.02]);  data.addRow(["'01 18 06:05:00'", 0.07, 0.05, 1.07, 1.06, 0.01, 0.01]);  data.addRow(["'01 18 08:05:00'", 0.06, 0.04, 1.00, 1.01, 0.02, 0.02]);  data.addRow(["'01 18 10:05:00'", 0.06, 0.07, 0.96, 0.99, 0.01, 0.03]);  data.addRow(["'01 18 12:05:00'", 0.07, 0.30, 1.19, 1.20, 0.02, 0.03]);  data.addRow(["'01 18 14:05:00'", 0.08, 0.06, 1.16, 1.15, 0.02, 0.03]);  data.addRow(["'01 18 16:05:00'", 0.14, 0.09, 1.11, 1.08, 0.04, 0.05]);  data.addRow(["'01 18 18:05:00'", 0.10, 0.36, 1.42, 1.42, 0.04, 0.05]);  data.addRow(["'01 18 20:05:00'", 0.28, 11.06, 5.53, 8.52, 0.03, 0.03]);  data.addRow(["'01 18 22:05:00'", 0.07, 0.10, 1.05, 1.04, 0.04, 0.04]);  data.addRow(["'01 19 00:05:00'", 0.06, 0.05, 0.88, 0.89, 0.01, 0.02]);  data.addRow(["'01 19 02:05:00'", 0.07, 0.05, 0.86, 0.87, 0.02, 0.03]);  data.addRow(["'01 19 04:05:00'", 0.06, 0.05, 0.97, 0.99, 0.02, 0.03]);  data.addRow(["'01 19 06:05:00'", 0.07, 0.05, 1.07, 1.07, 0.02, 0.02]);  data.addRow(["'01 19 08:05:00'", 0.07, 0.09, 1.10, 1.10, 0.02, 0.02]);  data.addRow(["'01 19 10:05:00'", 0.06, 0.05, 1.06, 1.09, 0.01, 0.03]);  data.addRow(["'01 19 12:05:00'", 0.06, 0.05, 1.06, 1.06, 0.01, 0.02]);  data.addRow(["'01 19 14:05:00'", 0.07, 0.09, 1.09, 1.09, 0.02, 0.03]);  data.addRow(["'01 19 16:05:00'", 0.09, 0.06, 1.07, 1.06, 0.02, 0.02]);  data.addRow(["'01 19 18:05:00'", 0.05, 0.05, 0.72, 0.72, 0.02, 0.02]);  data.addRow(["'01 19 20:05:00'", 0.06, 0.11, 1.04, 1.06, 0.01, 0.02]);  data.addRow(["'01 19 22:05:00'", 0.07, 0.06, 1.00, 1.01, 0.02, 0.02]);  data.addRow(["'01 20 00:05:00'", 0.07, 0.06, 1.06, 1.07, 0.02, 0.03]);  data.addRow(["'01 20 02:05:00'", 10.88, 0.42, 8.50, 4.69, 0.03, 0.04]);  data.addRow(["'01 20 04:05:00'", 5.99, 0.17, 5.12, 2.92, 0.02, 0.04]);  data.addRow(["'01 20 06:05:00'", 10.99, 0.34, 8.26, 4.85, 0.02, 0.02]);  data.addRow(["'01 20 08:05:00'", 0.94, 0.11, 1.68, 1.43, 0.03, 0.03]);  data.addRow(["'01 20 10:05:00'", 0.08, 0.06, 1.07, 1.08, 0.02, 0.03]);  data.addRow(["'01 20 12:05:00'", 0.07, 0.13, 1.14, 1.12, 0.04, 0.04]);  data.addRow(["'01 20 14:05:00'", 0.32, 0.09, 1.30, 1.23, 0.03, 0.04]);  data.addRow(["'01 20 16:05:00'", 0.11, 0.09, 1.18, 1.15, 0.07, 0.06]);  data.addRow(["'01 20 18:05:00'", 0.25, 7.16, 3.66, 6.00, 0.04, 0.04]);  data.addRow(["'01 20 20:05:00'", 0.08, 0.11, 1.15, 1.15, 0.03, 0.04]);  data.addRow(["'01 20 22:05:00'", 0.07, 0.10, 1.13, 1.12, 0.02, 0.03]);  data.addRow(["'01 21 00:05:00'", 0.08, 0.07, 1.10, 1.10, 0.03, 0.04]);  data.addRow(["'01 21 02:05:00'", 0.59, 0.12, 1.46, 1.34, 0.03, 0.04]);  data.addRow(["'01 21 04:05:00'", 26.98, 0.41, 19.40, 7.24, 0.02, 0.02]);  data.addRow(["'01 21 06:05:00'", 7.74, 0.07, 6.26, 1.27, 0.03, 0.03]);  data.addRow(["'01 21 08:05:00'", 0.13, 0.92, 1.43, 1.78, 0.12, 0.13]);  data.addRow(["'01 21 10:05:00'", 0.75, 8.89, 4.31, 7.87, 0.32, 0.34]);  data.addRow(["'01 21 12:05:00'", 0.64, 7.84, 3.48, 7.10, 0.50, 0.47]);  data.addRow(["'01 21 14:05:00'", 2.22, 4.84, 6.34, 5.50, 0.40, 0.41]);  data.addRow(["'01 21 16:05:00'", 2.49, 44.12, 35.86, 33.61, 0.49, 0.49]);  data.addRow(["'01 21 18:05:00'", 0.31, 1.16, 2.22, 2.14, 0.17, 0.18]);  data.addRow(["'01 21 20:05:00'", 0.50, 0.25, 1.62, 1.49, 0.09, 0.09]);  data.addRow(["'01 21 22:05:00'", 0.46, 0.14, 1.37, 1.28, 0.05, 0.05]);  data.addRow(["'01 22 00:05:00'", 0.09, 0.10, 1.13, 1.14, 0.06, 0.06]);  data.addRow(["'01 22 02:05:00'", 0.08, 0.05, 1.08, 1.07, 0.04, 0.04]);  data.addRow(["'01 22 04:05:00'", 0.09, 0.11, 1.26, 1.28, 0.04, 0.05]);  data.addRow(["'01 22 06:05:00'", 0.24, 0.19, 0.87, 0.87, 0.04, 0.04]);  data.addRow(["'01 22 08:05:00'", 3.58, 2.60, 4.95, 4.73, 0.34, 0.35]);  data.addRow(["'01 22 10:05:00'", 5.24, 6.91, 9.35, 9.44, 0.89, 0.91]);  data.addRow(["'01 22 12:05:00'", 11.26, 41.41, 38.06, 35.78, 1.12, 1.13]);  data.addRow(["'01 22 14:05:00'", 5.82, 6.32, 10.90, 9.32, 1.16, 1.16]);  data.addRow(["'01 22 16:05:00'", 8.08, 7.91, 12.42, 11.33, 1.04, 1.04]);  data.addRow(["'01 22 18:05:00'", 5.04, 24.92, 22.61, 19.87, 0.46, 0.46]);  data.addRow(["'01 22 20:05:00'", 20.99, 14.20, 25.14, 17.39, 0.18, 0.19]);  data.addRow(["'01 22 22:05:00'", 0.09, 0.29, 1.19, 1.26, 0.08, 0.08]);  data.addRow(["'01 23 00:05:00'", 0.10, 0.28, 1.44, 1.40, 0.04, 0.04]);  data.addRow(["'01 23 02:05:00'", 0.08, 0.09, 0.91, 0.87, 0.09, 0.09]);  data.addRow(["'01 23 04:05:00'", 0.07, 0.07, 0.88, 0.88, 0.06, 0.08]);  data.addRow(["'01 23 06:05:00'", 0.06, 0.05, 0.91, 0.89, 0.03, 0.03]);  data.addRow(["'01 23 08:05:00'", 3.83, 1.95, 5.10, 4.19, 0.31, 0.32]);  data.addRow(["'01 23 10:05:00'", 6.39, 36.87, 27.98, 29.69, 0.92, 0.93]);  data.addRow(["'01 23 12:05:00'", 8.17, 37.98, 14.58, 32.00, 1.04, 1.05]);  data.addRow(["'01 23 14:05:00'", 4.42, 14.71, 9.95, 14.34, 1.15, 1.18]);  data.addRow(["'01 23 16:05:00'", 14.12, 24.47, 21.39, 24.93, 1.24, 1.22]);  data.addRow(["'01 23 18:05:00'", 18.61, 7.00, 17.36, 12.89, 0.54, 0.54]);  data.addRow(["'01 23 20:05:00'", 23.51, 1.00, 17.81, 9.77, 0.19, 0.20]);  data.addRow(["'01 23 22:05:00'", 7.01, 4.04, 7.13, 6.46, 0.11, 0.12]);  data.addRow(["'01 24 00:05:00'", 0.39, 0.10, 1.29, 1.19, 0.05, 0.06]);  data.addRow(["'01 24 02:05:00'", 2.90, 8.14, 7.35, 7.46, 0.08, 0.09]);  data.addRow(["'01 24 04:05:00'", 0.07, 0.33, 0.94, 1.13, 0.05, 0.06]);  data.addRow(["'01 24 06:05:00'", 0.07, 0.36, 1.03, 1.24, 0.04, 0.04]);  data.addRow(["'01 24 08:05:00'", 0.43, 2.32, 2.61, 3.05, 0.35, 0.34]);  data.addRow(["'01 24 10:05:00'", 4.12, 5.44, 7.70, 7.52, 0.76, 0.77]);  data.addRow(["'01 24 12:05:00'", 18.31, 9.23, 20.52, 16.56, 1.20, 1.19]);  data.addRow(["'01 24 14:05:00'", 16.50, 10.37, 18.56, 16.19, 0.87, 0.87]);  data.addRow(["'01 24 16:05:00'", 9.69, 5.34, 11.51, 9.08, 0.57, 0.57]);  data.addRow(["'01 24 18:05:00'", 0.26, 5.15, 2.85, 4.79, 0.18, 0.19]);  data.addRow(["'01 24 20:05:00'", 0.08, 0.11, 1.08, 1.10, 0.06, 0.07]);  data.addRow(["'01 24 22:05:00'", 0.09, 0.10, 1.11, 1.15, 0.04, 0.04]);  data.addRow(["'01 25 00:05:00'", 0.07, 0.09, 1.03, 1.05, 0.04, 0.04]);  data.addRow(["'01 25 02:05:00'", 0.07, 0.05, 1.02, 1.04, 0.03, 0.04]);  data.addRow(["'01 25 04:05:00'", 0.07, 0.06, 1.06, 1.07, 0.03, 0.03]);  data.addRow(["'01 25 06:05:00'", 0.07, 0.05, 1.07, 1.08, 0.04, 0.04]);  data.addRow(["'01 25 08:05:00'", 0.07, 0.05, 1.08, 1.09, 0.04, 0.04]);  data.addRow(["'01 25 10:05:00'", 0.62, 0.09, 1.50, 1.36, 0.06, 0.06]);  data.addRow(["'01 25 12:05:00'", 0.08, 0.21, 1.22, 1.25, 0.08, 0.08]);  data.addRow(["'01 25 14:05:00'", 0.10, 0.13, 1.18, 1.18, 0.06, 0.07]);  data.addRow(["'01 25 16:05:00'", 0.10, 0.14, 1.18, 1.16, 0.07, 0.07]);  data.addRow(["'01 25 18:05:00'", 0.23, 7.10, 4.11, 5.92, 0.06, 0.06]);  data.addRow(["'01 25 20:05:00'", 0.08, 0.05, 1.08, 1.06, 0.02, 0.02]);  data.addRow(["'01 25 22:05:00'", 0.07, 0.09, 1.09, 1.10, 0.02, 0.03]);  data.addRow(["'01 26 00:05:00'", 0.07, 0.07, 1.08, 1.09, 0.03, 0.04]);  data.addRow(["'01 26 02:05:00'", 0.07, 0.07, 1.13, 1.14, 0.02, 0.02]);  data.addRow(["'01 26 04:05:00'", 0.06, 0.05, 1.03, 1.04, 0.01, 0.02]);  data.addRow(["'01 26 06:05:00'", 0.07, 0.29, 1.19, 1.19, 0.01, 0.02]);  data.addRow(["'01 26 08:05:00'", 0.06, 0.05, 1.05, 1.06, 0.02, 0.03]);  data.addRow(["'01 26 10:05:00'", 0.07, 0.05, 1.04, 1.05, 0.01, 0.02]);  data.addRow(["'01 26 12:05:00'", 0.08, 0.11, 1.10, 1.11, 0.03, 0.04]);  data.addRow(["'01 26 14:05:00'", 0.07, 0.07, 1.07, 1.07, 0.02, 0.03]);  data.addRow(["'01 26 16:05:00'", 0.09, 0.89, 1.39, 1.65, 0.04, 0.04]);  data.addRow(["'01 26 18:05:00'", 0.11, 0.25, 1.28, 1.29, 0.12, 0.11]);  data.addRow(["'01 26 20:05:00'", 0.09, 0.30, 1.19, 1.28, 0.06, 0.06]);  data.addRow(["'01 26 22:05:00'", 0.08, 0.07, 1.11, 1.09, 0.06, 0.06]);  data.addRow(["'01 27 00:05:00'", 0.08, 0.05, 1.06, 1.03, 0.04, 0.04]);  data.addRow(["'01 27 02:05:00'", 0.07, 0.11, 1.03, 1.05, 0.03, 0.03]);  data.addRow(["'01 27 04:05:00'", 0.07, 0.07, 1.03, 1.05, 0.02, 0.03]);  data.addRow(["'01 27 06:05:00'", 0.06, 0.28, 0.76, 0.77, 0.02, 0.02]);  data.addRow(["'01 27 08:05:00'", 3.92, 8.96, 9.43, 9.08, 0.32, 0.34]);  data.addRow(["'01 27 10:05:00'", 13.90, 11.88, 17.85, 15.99, 1.02, 1.07]);  data.addRow(["'01 27 12:05:00'", 7.66, 28.14, 20.95, 25.68, 1.26, 1.32]);  data.addRow(["'01 27 14:05:00'", 8.88, 14.24, 16.45, 16.84, 1.27, 1.29]);  data.addRow(["'01 27 16:05:00'", 14.54, 19.90, 21.45, 21.88, 1.25, 1.26]);  data.addRow(["'01 27 18:05:00'", 11.16, 5.87, 12.29, 9.99, 0.62, 0.62]);  data.addRow(["'01 27 20:05:00'", 1.58, 8.10, 6.06, 7.49, 0.35, 0.36]);  data.addRow(["'01 27 22:05:00'", 0.28, 6.06, 3.93, 5.31, 0.09, 0.11]);  data.addRow(["'01 28 00:05:00'", 0.08, 0.19, 1.14, 1.18, 0.04, 0.05]);  data.addRow(["'01 28 02:05:00'", 10.32, 0.32, 8.15, 2.79, 0.04, 0.05]);  data.addRow(["'01 28 04:05:00'", 0.07, 0.07, 1.01, 1.00, 0.04, 0.06]);  data.addRow(["'01 28 06:05:00'", 0.04, 0.10, 0.44, 0.47, 0.04, 0.04]);  data.addRow(["'01 28 08:05:00'", 8.06, 8.93, 12.26, 10.81, 0.35, 0.38]);  data.addRow(["'01 28 10:05:00'", 16.05, 33.27, 21.82, 31.27, 1.08, 1.20]);  data.addRow(["'01 28 12:05:00'", 8.78, 15.57, 18.26, 16.44, 1.18, 1.22]);  data.addRow(["'01 28 14:05:00'", 6.55, 12.43, 15.08, 14.81, 1.46, 1.51]);  data.addRow(["'01 28 16:05:00'", 7.19, 12.65, 14.26, 14.39, 1.29, 1.32]);  data.addRow(["'01 28 18:05:00'", 3.27, 18.89, 10.21, 16.04, 0.58, 0.62]);  data.addRow(["'01 28 20:05:00'", 2.28, 1.52, 3.81, 3.34, 0.29, 0.32]);  data.addRow(["'01 28 22:05:00'", 0.43, 1.10, 1.92, 2.14, 0.15, 0.17]);  data.addRow(["'01 29 00:05:00'", 0.10, 0.39, 1.33, 1.35, 0.05, 0.05]);  data.addRow(["'01 29 02:05:00'", 0.07, 0.15, 1.13, 1.15, 0.04, 0.05]);  data.addRow(["'01 29 04:05:00'", 0.08, 0.11, 1.16, 1.16, 0.08, 0.08]);  data.addRow(["'01 29 06:05:00'", 0.08, 0.22, 1.18, 1.19, 0.06, 0.04]);  data.addRow(["'01 29 08:05:00'", 0.65, 3.83, 4.08, 4.13, 0.46, 0.26]);  data.addRow(["'01 29 10:05:00'", 5.16, 7.45, 9.75, 9.45, 1.10, 1.06]);  data.addRow(["'01 29 12:05:00'", 7.46, 9.24, 12.98, 12.24, 1.32, 1.40]);  data.addRow(["'01 29 14:05:00'", 10.82, 6.96, 15.65, 12.77, 1.38, 1.46]);  data.addRow(["'01 29 16:05:00'", 8.67, 10.18, 15.08, 13.36, 1.26, 1.28]);  data.addRow(["'01 29 18:05:00'", 7.24, 14.72, 12.88, 15.36, 0.71, 0.71]);  data.addRow(["'01 29 20:05:00'", 0.36, 1.12, 1.87, 2.03, 0.29, 0.30]);  data.addRow(["'01 29 22:05:00'", 0.12, 0.63, 1.49, 1.62, 0.17, 0.19]);  data.addRow(["'01 30 00:05:00'", 0.09, 0.55, 1.35, 1.50, 0.07, 0.08]);  data.addRow(["'01 30 02:05:00'", 0.08, 0.09, 1.09, 1.09, 0.04, 0.04]);  data.addRow(["'01 30 04:05:00'", 0.08, 0.10, 1.09, 1.12, 0.03, 0.04]);  data.addRow(["'01 30 06:05:00'", 0.11, 0.09, 1.12, 1.12, 0.04, 0.05]);  data.addRow(["'01 30 08:05:00'", 4.07, 2.91, 5.60, 5.66, 0.34, 0.38]);  data.addRow(["'01 30 10:05:00'", 10.79, 17.09, 17.82, 19.11, 0.99, 1.02]);  data.addRow(["'01 30 12:05:00'", 6.83, 15.46, 13.43, 15.72, 0.96, 1.00]);  data.addRow(["'01 30 14:05:00'", 8.85, 24.76, 20.35, 23.63, 1.32, 1.35]);  data.addRow(["'01 30 16:05:00'", 5.90, 17.42, 16.03, 19.51, 1.20, 1.20]);  data.addRow(["'01 30 18:05:00'", 7.24, 6.55, 10.24, 9.02, 0.54, 0.55]);  data.addRow(["'01 30 20:05:00'", 0.49, 1.58, 2.49, 2.51, 0.24, 0.25]);  data.addRow(["'01 30 22:05:00'", 0.14, 0.34, 1.43, 1.42, 0.12, 0.12]);  data.addRow(["'01 31 00:05:00'", 0.09, 0.10, 1.14, 1.15, 0.05, 0.05]);  data.addRow(["'01 31 02:05:00'", 0.07, 0.11, 1.11, 1.14, 0.04, 0.05]);  data.addRow(["'01 31 04:05:00'", 0.08, 0.12, 1.14, 1.13, 0.05, 0.05]);  data.addRow(["'01 31 06:05:00'", 0.07, 0.06, 1.10, 1.08, 0.04, 0.04]);  data.addRow(["'01 31 08:05:00'", 0.60, 1.09, 2.42, 2.42, 0.39, 0.40]);  data.addRow(["'01 31 10:05:00'", 2.43, 5.92, 6.91, 7.08, 1.05, 1.04]);  data.addRow(["'01 31 12:05:00'", 8.84, 12.63, 16.66, 15.53, 1.37, 1.40]);  data.addRow(["'01 31 14:05:00'", 17.19, 15.14, 24.30, 17.91, 0.70, 0.75]);  data.addRow(["'01 31 16:05:00'", 19.60, 28.97, 28.15, 27.55, 0.43, 0.46]);  data.addRow(["'01 31 18:05:00'", 0.54, 1.21, 2.20, 2.29, 0.21, 0.21]);  data.addRow(["'01 31 20:05:00'", 0.14, 0.11, 1.08, 1.06, 0.04, 0.05]);  data.addRow(["'01 31 22:05:00'", 0.10, 0.08, 1.21, 1.22, 0.04, 0.05]);  data.addRow(["'02 01 00:05:00'", 0.09, 0.08, 1.09, 1.08, 0.06, 0.07]);  data.addRow(["'02 01 02:05:00'", 0.10, 0.06, 1.04, 1.03, 0.04, 0.05]);  data.addRow(["'02 01 04:05:00'", 0.07, 0.05, 0.98, 1.00, 0.02, 0.04]);  data.addRow(["'02 01 06:05:00'", 0.15, 0.05, 1.11, 1.17, 0.02, 0.03]);  data.addRow(["'02 01 08:05:00'", 7.89, 0.22, 6.43, 3.62, 0.05, 0.06]);  data.addRow(["'02 01 10:05:00'", 1.86, 0.22, 2.46, 2.02, 0.12, 0.11]);  data.addRow(["'02 01 12:05:00'", 0.15, 0.30, 1.00, 1.01, 0.16, 0.17]);  data.addRow(["'02 01 14:05:00'", 0.16, 0.22, 1.27, 1.28, 0.10, 0.10]);  data.addRow(["'02 01 16:05:00'", 0.11, 0.09, 1.13, 1.13, 0.06, 0.08]);  data.addRow(["'02 01 18:05:00'", 0.16, 0.16, 1.19, 1.19, 0.06, 0.08]);  data.addRow(["'02 01 20:05:00'", 0.07, 0.34, 1.04, 1.21, 0.04, 0.05]);  data.addRow(["'02 01 22:05:00'", 0.08, 0.15, 1.22, 1.23, 0.06, 0.06]);  data.addRow(["'02 02 00:05:00'", 0.07, 1.08, 1.02, 1.72, 0.04, 0.04]);  data.addRow(["'02 02 02:05:00'", 0.08, 0.07, 1.05, 1.05, 0.04, 0.05]);  data.addRow(["'02 02 04:05:00'", 0.05, 0.04, 0.77, 0.78, 0.03, 0.04]);  data.addRow(["'02 02 06:05:00'", 0.07, 0.05, 0.98, 1.00, 0.02, 0.03]);  data.addRow(["'02 02 08:05:00'", 0.07, 0.06, 0.97, 0.97, 0.03, 0.04]);  data.addRow(["'02 02 10:05:00'", 0.11, 0.07, 1.07, 1.06, 0.04, 0.04]);  data.addRow(["'02 02 12:05:00'", 0.08, 0.16, 1.09, 1.12, 0.05, 0.06]);  data.addRow(["'02 02 14:05:00'", 0.08, 0.11, 1.10, 1.12, 0.04, 0.05]);  data.addRow(["'02 02 16:05:00'", 0.09, 0.45, 1.27, 1.38, 0.08, 0.08]);  data.addRow(["'02 02 18:05:00'", 0.12, 0.51, 1.47, 1.51, 0.16, 0.15]);  data.addRow(["'02 02 20:05:00'", 0.19, 2.03, 2.57, 2.53, 0.12, 0.12]);  data.addRow(["'02 02 22:05:00'", 0.08, 0.16, 1.10, 1.16, 0.05, 0.05]);  data.addRow(["'02 03 00:05:00'", 0.09, 0.20, 1.15, 1.20, 0.05, 0.06]);  data.addRow(["'02 03 02:05:00'", 0.09, 0.09, 1.09, 1.11, 0.03, 0.04]);  data.addRow(["'02 03 04:05:00'", 0.07, 0.11, 0.98, 1.03, 0.02, 0.03]);  data.addRow(["'02 03 06:05:00'", 0.07, 0.05, 1.00, 1.01, 0.02, 0.03]);  data.addRow(["'02 03 08:05:00'", 1.93, 3.19, 4.63, 4.63, 0.49, 0.50]);  data.addRow(["'02 03 10:05:00'", 9.72, 37.13, 25.57, 32.04, 1.54, 1.59]);  data.addRow(["'02 03 12:05:00'", 9.39, 16.95, 20.08, 19.29, 1.68, 1.73]);  data.addRow(["'02 03 14:05:00'", 13.44, 39.37, 40.29, 36.13, 1.57, 1.65]);  data.addRow(["'02 03 16:05:00'", 9.39, 17.19, 18.85, 18.65, 1.66, 1.68]);  data.addRow(["'02 03 18:05:00'", 9.87, 7.90, 14.81, 11.35, 0.71, 0.70]);  data.addRow(["'02 03 20:05:00'", 0.88, 1.78, 2.88, 3.10, 0.36, 0.36]);  data.addRow(["'02 03 22:05:00'", 0.23, 0.44, 1.47, 1.45, 0.12, 0.12]);  data.addRow(["'02 04 00:05:00'", 0.41, 0.23, 1.37, 1.34, 0.07, 0.08]);  data.addRow(["'02 04 02:05:00'", 0.08, 0.10, 1.03, 1.05, 0.04, 0.05]);  data.addRow(["'02 04 04:05:00'", 0.06, 0.05, 0.95, 0.97, 0.03, 0.03]);  data.addRow(["'02 04 06:05:00'", 0.09, 0.07, 1.10, 1.10, 0.05, 0.05]);  data.addRow(["'02 04 08:05:00'", 3.84, 1.63, 5.19, 4.30, 0.41, 0.44]);  data.addRow(["'02 04 10:05:00'", 14.25, 9.30, 21.41, 16.67, 1.24, 1.30]);  data.addRow(["'02 04 12:05:00'", 9.92, 15.99, 19.08, 17.87, 1.28, 1.33]);  data.addRow(["'02 04 14:05:00'", 13.67, 17.52, 26.29, 20.54, 1.62, 1.65]);  data.addRow(["'02 04 16:05:00'", 13.44, 12.44, 20.37, 18.88, 1.47, 1.47]);  data.addRow(["'02 04 18:05:00'", 8.27, 4.42, 10.71, 8.22, 0.71, 0.70]);  data.addRow(["'02 04 20:05:00'", 0.43, 1.55, 2.54, 2.54, 0.33, 0.33]);  data.addRow(["'02 04 22:05:00'", 0.22, 0.62, 1.66, 1.67, 0.20, 0.19]);  data.addRow(["'02 05 00:05:00'", 0.08, 0.32, 1.14, 1.26, 0.06, 0.06]);  data.addRow(["'02 05 02:05:00'", 0.11, 0.08, 1.09, 1.07, 0.04, 0.04]);  data.addRow(["'02 05 04:05:00'", 0.07, 0.11, 1.09, 1.09, 0.04, 0.04]);  data.addRow(["'02 05 06:05:00'", 0.08, 0.09, 1.12, 1.12, 0.05, 0.05]);  data.addRow(["'02 05 08:05:00'", 1.33, 1.06, 3.13, 2.78, 0.32, 0.35]);  data.addRow(["'02 05 10:05:00'", 5.93, 10.84, 13.63, 12.75, 1.19, 1.25]);  data.addRow(["'02 05 12:05:00'", 8.27, 15.80, 21.46, 20.28, 1.72, 1.77]);  data.addRow(["'02 05 14:05:00'", 8.31, 19.72, 18.89, 21.04, 1.68, 1.72]);  data.addRow(["'02 05 16:05:00'", 3.99, 15.41, 14.55, 14.94, 1.50, 1.51]);  data.addRow(["'02 05 18:05:00'", 5.32, 5.93, 8.89, 7.87, 0.73, 0.73]);  data.addRow(["'02 05 20:05:00'", 11.24, 3.32, 10.58, 7.61, 0.30, 0.32]);  data.addRow(["'02 05 22:05:00'", 1.14, 1.77, 2.65, 2.71, 0.16, 0.17]);  data.addRow(["'02 06 00:05:00'", 0.09, 0.96, 1.28, 1.72, 0.05, 0.06]);  data.addRow(["'02 06 02:05:00'", 0.08, 0.15, 1.02, 1.04, 0.04, 0.04]);  data.addRow(["'02 06 04:05:00'", 0.07, 0.37, 0.85, 1.09, 0.03, 0.05]);  data.addRow(["'02 06 06:05:00'", 0.08, 0.04, 0.85, 0.86, 0.02, 0.03]);  data.addRow(["'02 06 08:05:00'", 4.21, 4.34, 7.29, 6.09, 0.57, 0.58]);  data.addRow(["'02 06 10:05:00'", 20.14, 27.58, 30.66, 29.80, 1.80, 1.86]);  data.addRow(["'02 06 12:05:00'", 5.67, 15.83, 16.23, 16.32, 1.50, 1.53]);  data.addRow(["'02 06 14:05:00'", 5.54, 24.92, 19.70, 22.90, 1.97, 2.01]);  data.addRow(["'02 06 16:05:00'", 13.09, 19.22, 25.30, 22.15, 1.66, 1.66]);  data.addRow(["'02 06 18:05:00'", 7.26, 7.52, 10.83, 9.61, 0.86, 0.85]);  data.addRow(["'02 06 20:05:00'", 0.41, 2.71, 3.16, 3.28, 0.44, 0.43]);  data.addRow(["'02 06 22:05:00'", 0.24, 1.09, 1.66, 1.90, 0.34, 0.32]);  data.addRow(["'02 07 00:05:00'", 0.14, 0.37, 1.34, 1.29, 0.17, 0.15]);  data.addRow(["'02 07 02:05:00'", 0.11, 0.56, 0.98, 1.28, 0.13, 0.11]);  data.addRow(["'02 07 04:05:00'", 0.13, 0.15, 1.06, 1.02, 0.13, 0.11]);  data.addRow(["'02 07 06:05:00'", 0.11, 0.07, 0.98, 0.96, 0.12, 0.11]);  data.addRow(["'02 07 08:05:00'", 0.28, 0.65, 1.33, 1.65, 0.34, 0.34]);  data.addRow(["'02 07 10:05:00'", 3.26, 6.26, 8.76, 7.20, 1.13, 1.15]);  data.addRow(["'02 07 12:05:00'", 22.41, 18.93, 31.92, 27.38, 1.81, 1.81]);  data.addRow(["'02 07 14:05:00'", 8.58, 18.67, 19.99, 18.31, 1.47, 1.46]);  data.addRow(["'02 07 16:05:00'", 3.47, 20.50, 14.68, 17.13, 0.89, 0.84]);  data.addRow(["'02 07 18:05:00'", 2.26, 1.45, 3.20, 2.61, 0.37, 0.34]);  data.addRow(["'02 07 20:05:00'", 0.10, 0.31, 1.13, 1.06, 0.15, 0.12]);  data.addRow(["'02 07 22:05:00'", 0.10, 0.15, 1.00, 0.97, 0.13, 0.11]);  data.addRow(["'02 08 00:05:00'", 0.16, 2.44, 1.96, 2.97, 0.17, 0.16]);  data.addRow(["'02 08 02:05:00'", 0.16, 6.18, 2.35, 5.09, 0.11, 0.09]);  data.addRow(["'02 08 04:05:00'", 0.17, 7.49, 2.59, 6.00, 0.11, 0.10]);  data.addRow(["'02 08 06:05:00'", 0.11, 2.38, 1.51, 2.50, 0.11, 0.09]);  data.addRow(["'02 08 08:05:00'", 0.08, 0.07, 0.99, 0.95, 0.12, 0.10]);  data.addRow(["'02 08 10:05:00'", 4.73, 0.44, 4.72, 2.89, 0.26, 0.24]);  data.addRow(["'02 08 12:05:00'", 0.19, 0.82, 1.74, 1.67, 0.27, 0.25]);  data.addRow(["'02 08 14:05:00'", 1.02, 7.58, 5.08, 6.52, 0.30, 0.26]);  data.addRow(["'02 08 16:05:00'", 0.14, 0.45, 1.34, 1.28, 0.30, 0.26]);  data.addRow(["'02 08 18:05:00'", 4.37, 7.56, 7.19, 7.06, 0.23, 0.21]);  data.addRow(["'02 08 20:05:00'", 0.41, 0.40, 1.36, 1.35, 0.17, 0.15]);  data.addRow(["'02 08 22:05:00'", 0.09, 0.24, 1.05, 1.07, 0.13, 0.11]);  data.addRow(["'02 09 00:05:00'", 0.08, 0.13, 0.98, 0.99, 0.12, 0.10]);  data.addRow(["'02 09 02:05:00'", 0.15, 0.18, 1.09, 1.05, 0.13, 0.10]);  data.addRow(["'02 09 04:05:00'", 0.08, 0.06, 0.93, 0.89, 0.12, 0.10]);  data.addRow(["'02 09 06:05:00'", 0.08, 0.05, 0.95, 0.90, 0.10, 0.08]);  data.addRow(["'02 09 08:05:00'", 0.09, 0.11, 1.00, 0.99, 0.12, 0.10]);  data.addRow(["'02 09 10:05:00'", 0.11, 0.12, 1.14, 1.12, 0.12, 0.10]);  data.addRow(["'02 09 12:05:00'", 0.10, 0.29, 1.08, 1.12, 0.14, 0.12]);  data.addRow(["'02 09 14:05:00'", 0.09, 0.11, 0.99, 0.99, 0.12, 0.11]);  data.addRow(["'02 09 16:05:00'", 2.80, 0.15, 2.90, 1.68, 0.15, 0.13]);  data.addRow(["'02 09 18:05:00'", 0.51, 0.74, 1.82, 1.68, 0.22, 0.20]);  data.addRow(["'02 09 20:05:00'", 1.11, 6.08, 4.06, 5.68, 0.24, 0.21]);  data.addRow(["'02 09 22:05:00'", 0.12, 0.14, 1.04, 1.04, 0.14, 0.13]);  data.addRow(["'02 10 00:05:00'", 0.13, 0.40, 1.15, 1.25, 0.17, 0.16]);  data.addRow(["'02 10 02:05:00'", 0.09, 0.09, 1.01, 0.97, 0.13, 0.10]);  data.addRow(["'02 10 04:05:00'", 0.10, 0.11, 1.00, 0.97, 0.11, 0.10]);  data.addRow(["'02 10 06:05:00'", 0.08, 0.07, 0.97, 0.93, 0.11, 0.09]);  data.addRow(["'02 10 08:05:00'", 4.21, 1.75, 5.17, 4.05, 0.49, 0.46]);  data.addRow(["'02 10 10:05:00'", 6.95, 17.28, 15.68, 16.56, 1.37, 1.34]);  data.addRow(["'02 10 12:05:00'", 10.71, 12.27, 18.78, 16.08, 1.83, 1.78]);  data.addRow(["'02 10 14:05:00'", 5.55, 13.08, 13.92, 14.06, 1.72, 1.71]);  data.addRow(["'02 10 16:05:00'", 11.94, 34.10, 35.61, 30.34, 1.58, 1.52]);  data.addRow(["'02 10 18:05:00'", 1.86, 7.30, 7.99, 8.07, 1.02, 0.99]);  data.addRow(["'02 10 20:05:00'", 3.06, 8.58, 7.54, 8.17, 0.44, 0.42]);  data.addRow(["'02 10 22:05:00'", 0.80, 0.75, 2.30, 2.08, 0.42, 0.40]);  data.addRow(["'02 11 00:05:00'", 0.26, 9.69, 4.61, 7.58, 0.18, 0.17]);  data.addRow(["'02 11 02:05:00'", 0.11, 0.49, 1.23, 1.31, 0.19, 0.17]);  data.addRow(["'02 11 04:05:00'", 0.09, 0.11, 1.02, 1.02, 0.15, 0.14]);  data.addRow(["'02 11 06:05:00'", 0.09, 0.06, 0.96, 0.93, 0.11, 0.10]);  data.addRow(["'02 11 08:05:00'", 2.10, 1.45, 3.74, 3.18, 0.50, 0.48]);  data.addRow(["'02 11 10:05:00'", 10.02, 19.30, 19.97, 19.93, 1.54, 1.52]);  data.addRow(["'02 11 12:05:00'", 14.52, 9.20, 19.85, 15.62, 1.49, 1.46]);  data.addRow(["'02 11 14:05:00'", 14.95, 13.33, 24.18, 19.29, 1.73, 1.68]);  data.addRow(["'02 11 16:05:00'", 12.61, 11.64, 20.45, 16.24, 1.79, 1.73]);  data.addRow(["'02 11 18:05:00'", 11.85, 7.80, 17.94, 14.12, 0.74, 0.71]);  data.addRow(["'02 11 20:05:00'", 0.49, 9.88, 6.23, 8.21, 0.37, 0.35]);  data.addRow(["'02 11 22:05:00'", 0.32, 2.48, 2.56, 3.08, 0.22, 0.21]);  data.addRow(["'02 12 00:05:00'", 0.10, 0.17, 0.99, 1.03, 0.08, 0.10]);  data.addRow(["'02 12 02:05:00'", 0.09, 0.09, 0.92, 0.94, 0.06, 0.06]);  data.addRow(["'02 12 04:05:00'", 0.10, 0.08, 0.92, 0.92, 0.06, 0.06]);  data.addRow(["'02 12 06:05:00'", 0.17, 0.21, 1.01, 0.99, 0.06, 0.06]);  data.addRow(["'02 12 08:05:00'", 1.34, 0.92, 2.81, 2.36, 0.41, 0.39]);  data.addRow(["'02 12 10:05:00'", 7.42, 9.15, 14.51, 12.37, 1.38, 1.37]);  data.addRow(["'02 12 12:05:00'", 4.44, 7.57, 10.96, 9.94, 1.81, 1.75]);  data.addRow(["'02 12 14:05:00'", 4.18, 7.16, 10.35, 9.58, 1.70, 1.65]);  data.addRow(["'02 12 16:05:00'", 10.42, 13.30, 16.57, 15.45, 1.36, 1.32]);  data.addRow(["'02 12 18:05:00'", 7.79, 7.07, 11.36, 9.77, 0.75, 0.73]);  data.addRow(["'02 12 20:05:00'", 0.50, 0.78, 2.04, 1.93, 0.26, 0.26]);  data.addRow(["'02 12 22:05:00'", 0.73, 1.10, 1.96, 2.04, 0.23, 0.23]);  data.addRow(["'02 13 00:05:00'", 0.16, 0.28, 1.17, 1.15, 0.05, 0.06]);  data.addRow(["'02 13 02:05:00'", 0.10, 0.06, 0.92, 0.89, 0.06, 0.05]);  data.addRow(["'02 13 04:05:00'", 0.07, 0.07, 0.89, 0.91, 0.05, 0.06]);  data.addRow(["'02 13 06:05:00'", 0.07, 0.06, 0.88, 0.87, 0.05, 0.04]);  data.addRow(["'02 13 08:05:00'", 9.89, 1.35, 9.10, 3.05, 0.41, 0.41]);  data.addRow(["'02 13 10:05:00'", 15.51, 9.73, 21.65, 17.20, 1.22, 1.22]);  data.addRow(["'02 13 12:05:00'", 9.88, 7.37, 15.19, 11.82, 1.21, 1.19]);  data.addRow(["'02 13 14:05:00'", 6.48, 9.96, 13.94, 12.29, 1.55, 1.52]);  data.addRow(["'02 13 16:05:00'", 3.28, 4.31, 7.38, 6.56, 1.25, 1.22]);  data.addRow(["'02 13 18:05:00'", 9.35, 9.32, 11.82, 10.84, 0.56, 0.54]);  data.addRow(["'02 13 20:05:00'", 1.54, 1.05, 2.95, 2.77, 0.15, 0.15]);  data.addRow(["'02 13 22:05:00'", 0.69, 0.26, 1.20, 1.02, 0.09, 0.09]);  data.addRow(["'02 14 00:05:00'", 0.10, 0.15, 1.09, 1.11, 0.05, 0.06]);  data.addRow(["'02 14 02:05:00'", 0.08, 0.13, 0.94, 0.94, 0.05, 0.05]);  data.addRow(["'02 14 04:05:00'", 0.08, 0.11, 0.89, 0.90, 0.04, 0.05]);  data.addRow(["'02 14 06:05:00'", 0.06, 0.05, 0.86, 0.86, 0.03, 0.03]);  data.addRow(["'02 14 08:05:00'", 0.65, 3.44, 2.99, 3.72, 0.18, 0.20]);  data.addRow(["'02 14 10:05:00'", 6.04, 3.82, 8.90, 7.51, 1.00, 1.02]);  data.addRow(["'02 14 12:05:00'", 7.53, 11.98, 16.31, 13.92, 1.30, 1.27]); 
	    var graphtitle="CAYEY Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    