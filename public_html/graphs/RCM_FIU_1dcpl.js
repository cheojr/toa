
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'15:35:00'","'2014-04-28 15:35:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'", 1.66, 12.96, 5.36, 10.72, 1.37, 1.30]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'", 53.58, 4.61, 40.27, 15.70, 1.58, 1.45]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'", 1.07, 8.19, 6.29, 7.67, 1.93, 1.76]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'", 9.43, 2.86, 9.81, 5.57, 1.41, 1.32]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'", 65.10, 10.96, 48.79, 23.01, 1.28, 1.27]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'", 21.53, 6.48, 18.44, 11.74, 1.23, 1.88]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'", 2.20, 5.28, 5.26, 6.33, 1.07, 0.97]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'", 1.56, 7.39, 5.48, 6.71, 1.24, 1.13]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'", 0.71, 4.95, 3.97, 4.86, 1.04, 0.99]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'", 0.78, 18.00, 6.15, 14.44, 1.00, 0.96]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'", 1.96, 13.44, 4.19, 10.64, 0.73, 0.73]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'", 5.35, 2.31, 5.91, 4.35, 0.81, 0.80]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'", 15.40, 12.87, 14.10, 14.81, 1.18, 1.13]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'", 10.57, 8.80, 10.27, 10.56, 0.96, 0.93]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'", 1.37, 2.75, 3.09, 3.31, 0.96, 0.92]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'", 2.42, 4.98, 4.77, 5.05, 0.94, 0.88]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'", 2.13, 2.14, 2.79, 2.75, 0.76, 0.71]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'", 0.52, 4.72, 3.20, 4.36, 0.81, 0.82]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'", 1.45, 2.59, 3.20, 3.07, 0.90, 0.82]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'", 0.64, 1.87, 2.21, 2.31, 0.86, 0.81]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'", 1.51, 4.98, 4.38, 5.21, 0.96, 0.89]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'", 5.15, 6.90, 6.19, 6.61, 0.93, 0.84]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'", 12.59, 10.41, 11.12, 11.61, 0.90, 0.86]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'", 7.35, 2.87, 7.09, 4.62, 0.61, 0.59]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'", 4.34, 4.62, 6.06, 5.54, 0.81, 0.77]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'", 0.43, 1.99, 1.73, 2.16, 0.79, 0.75]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'", 0.44, 3.82, 2.13, 3.42, 0.67, 0.64]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'", 4.13, 13.93, 7.22, 11.46, 0.72, 0.66]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'", 1.64, 4.57, 3.61, 5.13, 0.51, 0.48]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'", 0.55, 2.25, 1.90, 2.27, 0.50, 0.48]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'", 4.33, 4.84, 4.41, 5.00, 0.52, 0.47]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'", 5.60, 3.20, 5.65, 4.46, 0.43, 0.44]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'", 7.91, 1.98, 6.58, 3.43, 0.41, 0.41]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'", 23.08, 3.56, 17.82, 7.20, 0.40, 0.40]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'", 8.26, 1.56, 6.70, 3.24, 0.46, 0.45]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'", 8.30, 3.59, 7.50, 5.11, 0.44, 0.44]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'", 28.02, 1.97, 20.54, 7.19, 0.44, 0.46]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'", 0.60, 2.55, 2.42, 2.23, 0.27, 0.30]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'", 0.31, 2.95, 3.80, 2.73, 0.44, 0.43]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'", 0.49, 17.00, 6.86, 12.63, 0.47, 0.45]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'", 0.32, 0.94, 3.47, 1.32, 0.34, 0.36]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'", 0.82, 6.16, 5.63, 5.12, 0.36, 0.36]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'", 4.12, 4.77, 5.62, 5.33, 0.54, 0.55]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'", 35.23, 1.56, 25.70, 12.53, 0.38, 0.40]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'", 0.27, 3.12, 3.40, 2.65, 0.43, 0.42]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'", 10.13, 7.60, 8.61, 9.62, 0.61, 0.60]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'", 0.36, 11.36, 2.74, 11.39, 0.50, 0.46]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'", 83.62, 5.82, 63.81, 29.16, 0.57, 0.56]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'", 3.42, 3.92, 4.88, 4.42, 0.47, 0.45]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'", 5.34, 7.26, 6.01, 6.71, 0.57, 0.55]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'", 0.34, 2.44, 1.86, 2.20, 0.47, 0.42]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'", 0.24, 2.21, 1.61, 2.03, 0.50, 0.48]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'", 0.33, 3.57, 2.71, 3.11, 0.45, 0.45]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'", 1.16, 3.90, 3.02, 3.41, 0.56, 0.50]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'", 0.48, 14.32, 4.87, 10.52, 0.57, 0.52]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'", 0.60, 2.77, 2.12, 2.65, 0.46, 0.43]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'", 0.26, 3.11, 2.36, 2.60, 0.44, 0.40]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'", 0.19, 2.41, 1.58, 2.06, 0.37, 0.34]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'", 1.91, 2.42, 2.88, 2.72, 0.37, 0.36]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'", 0.37, 4.11, 2.44, 3.52, 0.68, 0.63]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'", 0.67, 1.76, 2.02, 2.15, 0.59, 0.57]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'", 2.13, 5.89, 3.31, 5.11, 0.34, 0.33]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'", 0.79, 6.79, 2.29, 5.72, 0.35, 0.37]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'", 1.78, 3.24, 2.72, 3.38, 0.27, 0.31]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'", 1.59, 2.59, 2.51, 2.85, 0.33, 0.31]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'", 1.56, 1.39, 2.04, 2.19, 0.26, 0.30]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'", 0.22, 3.66, 2.19, 2.93, 0.39, 0.37]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'", 0.34, 21.28, 2.94, 15.20, 0.37, 0.36]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'", 0.76, 11.23, 2.76, 8.57, 0.59, 0.54]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'", 0.22, 9.43, 2.00, 6.90, 0.42, 0.39]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'", 0.27, 12.70, 2.53, 9.23, 0.42, 0.42]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'", 0.84, 27.04, 2.99, 19.28, 0.41, 0.39]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'", 0.63, 2.80, 1.60, 2.71, 0.35, 0.35]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'", 2.09, 3.35, 2.73, 3.60, 0.33, 0.37]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'", 6.20, 7.30, 5.68, 7.63, 0.30, 0.33]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'", 0.84, 4.34, 1.95, 4.05, 0.37, 0.40]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'", 1.55, 2.92, 2.13, 2.71, 0.35, 0.37]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'", 0.30, 19.02, 2.01, 13.69, 0.30, 0.31]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'", 1.03, 3.02, 1.69, 3.03, 0.36, 0.39]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'", 0.63, 2.92, 1.38, 2.71, 0.23, 0.28]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'", 1.57, 2.14, 1.87, 2.63, 0.28, 0.28]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'", 3.11, 9.16, 4.00, 7.91, 0.33, 0.33]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'", 0.61, 8.55, 2.04, 6.49, 0.36, 0.40]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'", 0.12, 6.28, 1.22, 4.57, 0.22, 0.26]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'", 0.12, 0.84, 0.82, 1.00, 0.31, 0.32]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'", 0.15, 1.17, 1.01, 1.18, 0.31, 0.31]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'", 0.09, 0.88, 0.78, 0.94, 0.27, 0.30]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'", 0.19, 3.67, 2.16, 2.99, 0.30, 0.31]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'", 0.66, 0.56, 0.98, 1.08, 0.21, 0.22]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'", 0.43, 0.95, 1.04, 1.21, 0.26, 0.28]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'", 0.28, 0.52, 0.83, 0.74, 0.30, 0.32]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'", 0.21, 0.19, 0.68, 0.52, 0.17, 0.20]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'", 0.28, 1.14, 0.93, 1.18, 0.25, 0.26]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'", 0.09, 1.33, 0.79, 1.20, 0.26, 0.26]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'", 0.19, 1.05, 1.03, 1.06, 0.28, 0.28]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'", 2.29, 0.42, 2.03, 1.11, 0.21, 0.22]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'", 2.21, 1.20, 2.33, 1.57, 0.21, 0.24]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'", 0.11, 1.74, 0.78, 1.49, 0.23, 0.25]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'", 0.10, 3.10, 1.23, 2.39, 0.24, 0.24]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'", 0.10, 1.61, 1.20, 1.60, 0.27, 0.30]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'", 0.11, 0.34, 0.41, 0.49, 0.20, 0.24]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'", 0.11, 0.40, 0.45, 0.55, 0.18, 0.22]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'", 0.17, 0.57, 0.64, 0.65, 0.22, 0.23]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'", 0.05, 0.19, 0.44, 0.32, 0.16, 0.18]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'", 0.07, 0.43, 0.50, 0.56, 0.18, 0.17]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'", 0.59, 1.60, 1.20, 1.45, 0.14, 0.17]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'", 0.24, 0.25, 0.50, 0.41, 0.13, 0.16]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'", 0.09, 0.31, 0.45, 0.40, 0.17, 0.18]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'", 0.06, 0.48, 0.42, 0.54, 0.17, 0.21]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'", 0.08, 0.69, 0.56, 0.69, 0.19, 0.20]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'", 0.15, 0.40, 0.47, 0.49, 0.16, 0.18]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'", 0.08, 2.17, 1.02, 1.76, 0.29, 0.30]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'", 0.10, 0.71, 0.66, 0.86, 0.16, 0.19]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'", 0.04, 0.33, 0.26, 0.40, 0.13, 0.17]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'", 0.06, 0.36, 0.50, 0.43, 0.15, 0.18]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'", 0.06, 0.73, 0.56, 0.70, 0.14, 0.18]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'", 0.05, 0.92, 0.60, 0.84, 0.13, 0.15]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'", 0.49, 0.79, 0.85, 0.96, 0.17, 0.21]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'", 0.08, 0.93, 0.82, 0.94, 0.19, 0.21]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'", 0.18, 0.46, 0.55, 0.64, 0.18, 0.21]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'", 2.48, 0.43, 2.12, 1.44, 0.20, 0.22]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'", 0.46, 0.73, 0.86, 0.81, 0.15, 0.18]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'", 0.07, 1.19, 0.80, 1.10, 0.19, 0.21]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'", 0.14, 0.56, 0.66, 0.74, 0.22, 0.26]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'", 0.07, 0.49, 0.51, 0.65, 0.16, 0.21]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'", 1.12, 0.59, 1.34, 1.07, 0.17, 0.21]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'", 0.12, 0.32, 0.50, 0.48, 0.17, 0.19]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'", 0.52, 0.50, 0.71, 0.74, 0.15, 0.15]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'", 0.06, 0.30, 0.53, 0.46, 0.14, 0.15]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'", 0.08, 0.73, 0.71, 0.83, 0.20, 0.19]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'", 0.06, 0.63, 0.63, 0.76, 0.15, 0.22]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'", 0.03, 0.37, 0.33, 0.34, 0.10, 0.10]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'", 0.33, 0.74, 0.68, 0.72, 0.12, 0.13]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'", 0.05, 0.34, 0.42, 0.37, 0.11, 0.11]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'", 0.04, 0.51, 0.36, 0.49, 0.11, 0.11]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'", 0.05, 0.52, 0.47, 0.53, 0.13, 0.14]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'", 0.04, 0.54, 0.40, 0.53, 0.12, 0.14]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'", 0.07, 0.86, 0.61, 0.80, 0.17, 0.18]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'", 0.04, 0.33, 0.29, 0.49, 0.12, 0.16]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'", 0.09, 0.21, 0.50, 0.31, 0.13, 0.14]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'", 0.32, 0.38, 0.56, 0.51, 0.12, 0.14]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'", 0.10, 0.30, 0.36, 0.37, 0.14, 0.15]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'", 0.09, 0.32, 0.42, 0.38, 0.11, 0.14]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'", 0.11, 0.46, 0.49, 0.51, 0.14, 0.16]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'", 0.04, 0.31, 0.29, 0.35, 0.12, 0.14]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'", 0.06, 1.62, 0.90, 1.25, 0.13, 0.17]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'", 0.09, 0.31, 0.44, 0.41, 0.17, 0.19]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'", 0.05, 0.27, 0.44, 0.38, 0.16, 0.17]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'", 0.05, 0.60, 0.42, 0.59, 0.16, 0.17]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'", 0.04, 0.32, 0.41, 0.36, 0.12, 0.13]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'", 0.04, 0.29, 0.29, 0.35, 0.13, 0.15]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'", 0.04, 0.35, 0.36, 0.38, 0.10, 0.12]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'", 0.03, 0.26, 0.25, 0.33, 0.12, 0.15]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'", 0.15, 0.33, 0.43, 0.39, 0.12, 0.14]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'", 0.37, 0.28, 0.56, 0.38, 0.11, 0.13]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'", 0.04, 0.30, 0.31, 0.36, 0.11, 0.12]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'", 0.05, 0.28, 0.33, 0.30, 0.10, 0.11]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'", 1.60, 0.49, 1.44, 0.92, 0.10, 0.11]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'", 0.05, 0.71, 0.49, 0.64, 0.13, 0.16]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'", 0.05, 0.39, 0.38, 0.40, 0.11, 0.13]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'", 0.05, 0.07, 0.18, 0.19, 0.10, 0.12]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'", 0.12, 1.22, 0.74, 1.02, 0.14, 0.17]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'", 0.04, 0.50, 0.42, 0.54, 0.14, 0.14]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'", 0.13, 0.73, 0.89, 0.82, 0.18, 0.19]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'", 0.05, 0.38, 0.43, 0.44, 0.18, 0.18]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'", 0.05, 0.44, 0.39, 0.46, 0.15, 0.16]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'", 0.29, 0.30, 0.48, 0.40, 0.13, 0.13]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'", 0.08, 0.32, 0.44, 0.40, 0.14, 0.15]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'", 0.05, 0.72, 0.49, 0.65, 0.15, 0.17]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'", 0.07, 0.92, 0.64, 0.84, 0.19, 0.22]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'", 0.06, 0.97, 0.61, 0.84, 0.17, 0.16]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'", 0.13, 0.51, 0.49, 0.56, 0.19, 0.19]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'", 0.05, 0.10, 0.32, 0.26, 0.18, 0.18]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'", 0.07, 0.53, 0.48, 0.56, 0.22, 0.21]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'", 0.08, 0.47, 0.57, 0.60, 0.26, 0.27]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'", 0.11, 1.06, 0.87, 1.01, 0.36, 0.34]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'", 0.13, 0.99, 0.94, 1.08, 0.26, 0.26]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'", 0.23, 1.18, 1.10, 1.26, 0.41, 0.38]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'", 0.14, 1.00, 0.86, 1.04, 0.35, 0.33]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'", 0.13, 1.44, 1.20, 1.39, 0.40, 0.41]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'", 0.13, 1.24, 0.96, 1.26, 0.39, 0.41]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'", 0.25, 0.98, 1.20, 1.17, 0.45, 0.47]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'", 0.82, 1.05, 1.54, 1.45, 0.51, 0.48]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'", 9.02, 4.89, 7.70, 5.77, 0.52, 0.48]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'", 9.28, 1.36, 7.60, 3.58, 0.60, 0.55]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'", 0.79, 5.63, 3.08, 4.63, 0.71, 0.64]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'", 2.04, 2.38, 3.14, 2.80, 0.73, 0.70]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'", 1.94, 2.71, 3.02, 2.91, 0.78, 0.74]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'", 0.26, 2.61, 1.92, 2.51, 0.76, 0.71]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'", 0.78, 3.18, 2.60, 3.20, 0.95, 0.89]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'", 4.62, 6.19, 6.13, 6.39, 0.95, 0.91]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'", 0.40, 5.51, 2.26, 4.79, 0.80, 0.78]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'", 0.43, 3.07, 2.74, 3.06, 0.96, 0.89]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'", 1.25, 9.48, 3.83, 7.61, 0.89, 0.82]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'", 4.88, 5.41, 5.72, 5.87, 0.96, 0.87]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'", 4.12, 6.66, 5.61, 6.97, 0.85, 0.86]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'", 2.53, 5.32, 4.71, 5.78, 1.12, 1.06]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'", 1.59, 9.10, 5.33, 7.59, 0.98, 0.94]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'", 0.31, 4.65, 2.48, 4.07, 0.79, 0.77]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'", 0.99, 29.96, 7.64, 22.16, 1.04, 1.03]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'", 0.79, 6.72, 3.63, 5.95, 1.09, 1.02]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'", 1.00, 11.52, 5.25, 9.49, 1.32, 1.28]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'", 1.21, 6.67, 5.39, 7.15, 1.38, 1.34]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'", 1.34, 3.56, 3.63, 4.13, 1.29, 1.23]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'", 1.81, 44.55, 18.26, 32.44, 1.55, 1.44]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'", 1.64, 18.69, 9.31, 14.95, 1.63, 1.53]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'", 1.18, 7.52, 4.88, 6.99, 1.49, 1.42]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'", 2.84, 11.05, 7.13, 10.05, 1.42, 1.29]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'", 29.42, 8.76, 29.98, 20.11, 1.45, 1.36]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'", 2.23, 31.90, 8.81, 24.62, 1.70, 1.56]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'", 13.14, 6.20, 13.43, 8.99, 1.62, 1.50]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'", 3.77, 8.18, 6.68, 8.39, 1.63, 1.54]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'", 1.50, 35.39, 12.48, 26.37, 1.76, 1.64]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'", 1.14, 8.41, 5.17, 7.84, 1.51, 1.41]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'", 2.42, 17.57, 8.48, 14.80, 1.85, 1.73]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'", 1.38, 4.65, 5.68, 5.56, 1.82, 1.65]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'", 2.07, 6.37, 6.12, 6.54, 1.76, 1.69]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'", 1.27, 38.01, 7.45, 28.20, 1.56, 1.37]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'", 3.32, 26.38, 8.89, 21.17, 1.52, 1.39]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'", 1.41, 10.77, 6.77, 9.63, 1.57, 1.46]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'", 1.46, 16.26, 5.66, 13.75, 1.67, 1.54]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'", 2.91, 24.38, 7.00, 19.24, 1.70, 1.61]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'", 4.74, 31.89, 10.25, 25.04, 1.79, 1.70]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'", 13.75, 17.90, 16.27, 17.46, 2.05, 1.83]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'", 4.06, 15.39, 8.69, 13.54, 1.68, 1.55]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'", 7.24, 54.93, 13.87, 42.09, 1.54, 1.38]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'", 1.48, 63.40, 8.58, 47.08, 1.86, 1.75]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'", 2.60, 142.93, 13.99, 102.55, 1.93, 1.77]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'", 8.80, 8.15, 10.73, 9.70, 1.90, 1.75]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'", 6.35, 33.50, 13.79, 27.57, 1.82, 1.69]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'", 2.19, 6.12, 5.96, 7.29, 1.82, 1.68]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'", 4.50, 8.11, 9.14, 9.28, 1.72, 1.59]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'", 1.51, 5.40, 5.79, 5.85, 1.69, 1.58]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'", 3.82, 8.24, 7.49, 8.61, 1.89, 1.75]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'", 2.32, 5.73, 5.87, 6.42, 1.74, 1.62]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'", 2.50, 5.97, 6.39, 6.94, 2.18, 1.98]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'", 1.14, 6.71, 5.32, 7.65, 1.88, 2.51]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'", 6.53, 7.45, 9.10, 9.42, 1.81, 1.70]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'", 1.61, 56.04, 9.14, 41.60, 1.97, 1.83]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'", 1.54, 13.09, 8.10, 11.24, 1.87, 1.76]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'", 1.02, 7.41, 5.42, 7.23, 1.71, 1.63]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'", 2.74, 7.98, 6.27, 7.92, 1.60, 1.50]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'", 4.41, 6.37, 7.73, 7.83, 1.73, 1.56]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'", 1.42, 25.65, 6.49, 19.50, 1.64, 1.56]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'", 9.78, 45.94, 13.55, 36.77, 1.73, 1.60]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'", 5.40, 29.76, 10.51, 23.74, 2.03, 1.85]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'", 26.74, 480.31, 186.98, 350.88, 1.78, 1.63]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'", 1.59, 76.00, 16.22, 55.45, 2.22, 2.05]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'", 2.64, 52.53, 13.09, 39.10, 1.95, 1.82]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'", 4.47, 135.28, 33.98, 98.97, 2.52, 2.25]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'", 4.85, 309.30, 67.13, 219.41, 2.31, 2.09]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'", 10.99, 174.58, 45.74, 125.19, 1.63, 1.56]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'", 5.34, 179.08, 61.58, 130.41, 1.85, 1.74]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'", 1.53, 24.19, 12.13, 18.96, 1.98, 1.86]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'", 9.93, 131.25, 57.95, 93.41, 2.27, 2.21]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'", 9.48, 156.25, 63.57, 111.06, 2.35, 2.28]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'", 14.59, 168.26, 64.42, 122.93, 1.99, 1.93]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'", 16.33, 42.21, 27.14, 33.47, 1.60, 1.47]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'", 28.97, 16.32, 25.83, 16.05, 1.61, 1.47]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'", 60.18, 11.94, 47.22, 30.18, 1.64, 1.58]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'", 13.24, 5.73, 13.53, 7.96, 1.63, 1.55]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'", 2.20, 26.47, 8.48, 20.38, 1.61, 1.52]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'", 101.08, 17.74, 78.07, 57.02, 2.15, 1.97]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'", 9.79, 7.03, 12.24, 9.38, 2.00, 1.78]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'", 2.13, 11.50, 6.41, 10.06, 1.63, 1.43]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'", 7.84, 4.22, 9.17, 6.24, 1.46, 1.37]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'", 3.99, 3.15, 6.08, 4.38, 1.41, 1.32]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'", 4.71, 15.92, 11.00, 14.20, 1.88, 1.74]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'", 45.54, 105.94, 42.94, 89.08, 1.80, 1.62]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'", 115.12, 34.41, 91.14, 38.53, 1.88, 1.72]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'", 4.50, 9.99, 7.79, 9.80, 1.80, 1.67]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'", 1.60, 12.80, 6.41, 10.98, 1.68, 1.49]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'", 4.93, 6.22, 8.29, 7.50, 1.82, 1.75]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'", 2.96, 9.77, 8.58, 9.68, 2.17, 2.08]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'", 13.78, 8.01, 15.21, 11.70, 1.77, 1.67]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'", 103.06, 9.93, 75.69, 31.20, 1.95, 1.82]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'", 67.90, 4.22, 50.48, 19.06, 1.75, 1.66]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'", 7.71, 10.02, 9.98, 10.95, 1.78, 1.63]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'", 3.35, 9.10, 6.72, 8.70, 1.52, 1.39]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'", 14.73, 18.05, 16.97, 16.72, 1.51, 1.45]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'", 4.95, 8.82, 7.74, 8.57, 1.38, 1.33]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'", 3.89, 9.44, 6.91, 8.96, 1.44, 1.29]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'", 4.83, 6.41, 7.12, 7.33, 1.51, 1.44]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'", 12.45, 13.31, 14.32, 12.80, 1.45, 1.40]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="RCM to FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    