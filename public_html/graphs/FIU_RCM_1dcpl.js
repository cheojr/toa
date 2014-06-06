
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'15:35:00'","'2014-04-28 15:35:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'", 12.96, 1.66, 10.72, 5.36, 1.30, 1.37]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'", 4.61, 53.58, 15.70, 40.27, 1.45, 1.58]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'", 8.19, 1.07, 7.67, 6.29, 1.76, 1.93]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'", 2.86, 9.43, 5.57, 9.81, 1.32, 1.41]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'", 10.96, 65.10, 23.01, 48.79, 1.27, 1.28]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'", 6.48, 21.53, 11.74, 18.44, 1.88, 1.23]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'", 5.28, 2.20, 6.33, 5.26, 0.97, 1.07]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'", 7.39, 1.56, 6.71, 5.48, 1.13, 1.24]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'", 4.95, 0.71, 4.86, 3.97, 0.99, 1.04]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'", 18.00, 0.78, 14.44, 6.15, 0.96, 1.00]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'", 13.44, 1.96, 10.64, 4.19, 0.73, 0.73]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'", 2.31, 5.35, 4.35, 5.91, 0.80, 0.81]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'", 12.87, 15.40, 14.81, 14.10, 1.13, 1.18]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'", 8.80, 10.57, 10.56, 10.27, 0.93, 0.96]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'", 2.75, 1.37, 3.31, 3.09, 0.92, 0.96]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'", 4.98, 2.42, 5.05, 4.77, 0.88, 0.94]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'", 2.14, 2.13, 2.75, 2.79, 0.71, 0.76]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'", 4.72, 0.52, 4.36, 3.20, 0.82, 0.81]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'", 2.59, 1.45, 3.07, 3.20, 0.82, 0.90]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'", 1.87, 0.64, 2.31, 2.21, 0.81, 0.86]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'", 4.98, 1.51, 5.21, 4.38, 0.89, 0.96]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'", 6.90, 5.15, 6.61, 6.19, 0.84, 0.93]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'", 10.41, 12.59, 11.61, 11.12, 0.86, 0.90]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'", 2.87, 7.35, 4.62, 7.09, 0.59, 0.61]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'", 4.62, 4.34, 5.54, 6.06, 0.77, 0.81]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'", 1.99, 0.43, 2.16, 1.73, 0.75, 0.79]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'", 3.82, 0.44, 3.42, 2.13, 0.64, 0.67]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'", 13.93, 4.13, 11.46, 7.22, 0.66, 0.72]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'", 4.57, 1.64, 5.13, 3.61, 0.48, 0.51]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'", 2.25, 0.55, 2.27, 1.90, 0.48, 0.50]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'", 4.84, 4.33, 5.00, 4.41, 0.47, 0.52]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'", 3.20, 5.60, 4.46, 5.65, 0.44, 0.43]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'", 1.98, 7.91, 3.43, 6.58, 0.41, 0.41]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'", 3.56, 23.08, 7.20, 17.82, 0.40, 0.40]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'", 1.56, 8.26, 3.24, 6.70, 0.45, 0.46]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'", 3.59, 8.30, 5.11, 7.50, 0.44, 0.44]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'", 1.97, 28.02, 7.19, 20.54, 0.46, 0.44]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'", 2.55, 0.60, 2.23, 2.42, 0.30, 0.27]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'", 2.95, 0.31, 2.73, 3.80, 0.43, 0.44]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'", 17.00, 0.49, 12.63, 6.86, 0.45, 0.47]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'", 0.94, 0.32, 1.32, 3.47, 0.36, 0.34]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'", 6.16, 0.82, 5.12, 5.63, 0.36, 0.36]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'", 4.77, 4.12, 5.33, 5.62, 0.55, 0.54]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'", 1.56, 35.23, 12.53, 25.70, 0.40, 0.38]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'", 3.12, 0.27, 2.65, 3.40, 0.42, 0.43]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'", 7.60, 10.13, 9.62, 8.61, 0.60, 0.61]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'", 11.36, 0.36, 11.39, 2.74, 0.46, 0.50]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'", 5.82, 83.62, 29.16, 63.81, 0.56, 0.57]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'", 3.92, 3.42, 4.42, 4.88, 0.45, 0.47]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'", 7.26, 5.34, 6.71, 6.01, 0.55, 0.57]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'", 2.44, 0.34, 2.20, 1.86, 0.42, 0.47]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'", 2.21, 0.24, 2.03, 1.61, 0.48, 0.50]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'", 3.57, 0.33, 3.11, 2.71, 0.45, 0.45]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'", 3.90, 1.16, 3.41, 3.02, 0.50, 0.56]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'", 14.32, 0.48, 10.52, 4.87, 0.52, 0.57]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'", 2.77, 0.60, 2.65, 2.12, 0.43, 0.46]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'", 3.11, 0.26, 2.60, 2.36, 0.40, 0.44]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'", 2.41, 0.19, 2.06, 1.58, 0.34, 0.37]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'", 2.42, 1.91, 2.72, 2.88, 0.36, 0.37]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'", 4.11, 0.37, 3.52, 2.44, 0.63, 0.68]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'", 1.76, 0.67, 2.15, 2.02, 0.57, 0.59]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'", 5.89, 2.13, 5.11, 3.31, 0.33, 0.34]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'", 6.79, 0.79, 5.72, 2.29, 0.37, 0.35]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'", 3.24, 1.78, 3.38, 2.72, 0.31, 0.27]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'", 2.59, 1.59, 2.85, 2.51, 0.31, 0.33]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'", 1.39, 1.56, 2.19, 2.04, 0.30, 0.26]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'", 3.66, 0.22, 2.93, 2.19, 0.37, 0.39]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'", 21.28, 0.34, 15.20, 2.94, 0.36, 0.37]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'", 11.23, 0.76, 8.57, 2.76, 0.54, 0.59]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'", 9.43, 0.22, 6.90, 2.00, 0.39, 0.42]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'", 12.70, 0.27, 9.23, 2.53, 0.42, 0.42]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'", 27.04, 0.84, 19.28, 2.99, 0.39, 0.41]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'", 2.80, 0.63, 2.71, 1.60, 0.35, 0.35]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'", 3.35, 2.09, 3.60, 2.73, 0.37, 0.33]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'", 7.30, 6.20, 7.63, 5.68, 0.33, 0.30]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'", 4.34, 0.84, 4.05, 1.95, 0.40, 0.37]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'", 2.92, 1.55, 2.71, 2.13, 0.37, 0.35]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'", 19.02, 0.30, 13.69, 2.01, 0.31, 0.30]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'", 3.02, 1.03, 3.03, 1.69, 0.39, 0.36]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'", 2.92, 0.63, 2.71, 1.38, 0.28, 0.23]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'", 2.14, 1.57, 2.63, 1.87, 0.28, 0.28]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'", 9.16, 3.11, 7.91, 4.00, 0.33, 0.33]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'", 8.55, 0.61, 6.49, 2.04, 0.40, 0.36]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'", 6.28, 0.12, 4.57, 1.22, 0.26, 0.22]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'", 0.84, 0.12, 1.00, 0.82, 0.32, 0.31]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'", 1.17, 0.15, 1.18, 1.01, 0.31, 0.31]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'", 0.88, 0.09, 0.94, 0.78, 0.30, 0.27]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'", 3.67, 0.19, 2.99, 2.16, 0.31, 0.30]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'", 0.56, 0.66, 1.08, 0.98, 0.22, 0.21]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'", 0.95, 0.43, 1.21, 1.04, 0.28, 0.26]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'", 0.52, 0.28, 0.74, 0.83, 0.32, 0.30]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'", 0.19, 0.21, 0.52, 0.68, 0.20, 0.17]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'", 1.14, 0.28, 1.18, 0.93, 0.26, 0.25]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'", 1.33, 0.09, 1.20, 0.79, 0.26, 0.26]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'", 1.05, 0.19, 1.06, 1.03, 0.28, 0.28]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'", 0.42, 2.29, 1.11, 2.03, 0.22, 0.21]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'", 1.20, 2.21, 1.57, 2.33, 0.24, 0.21]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'", 1.74, 0.11, 1.49, 0.78, 0.25, 0.23]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'", 3.10, 0.10, 2.39, 1.23, 0.24, 0.24]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'", 1.61, 0.10, 1.60, 1.20, 0.30, 0.27]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'", 0.34, 0.11, 0.49, 0.41, 0.24, 0.20]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'", 0.40, 0.11, 0.55, 0.45, 0.22, 0.18]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'", 0.57, 0.17, 0.65, 0.64, 0.23, 0.22]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'", 0.19, 0.05, 0.32, 0.44, 0.18, 0.16]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'", 0.43, 0.07, 0.56, 0.50, 0.17, 0.18]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'", 1.60, 0.59, 1.45, 1.20, 0.17, 0.14]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'", 0.25, 0.24, 0.41, 0.50, 0.16, 0.13]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'", 0.31, 0.09, 0.40, 0.45, 0.18, 0.17]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'", 0.48, 0.06, 0.54, 0.42, 0.21, 0.17]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'", 0.69, 0.08, 0.69, 0.56, 0.20, 0.19]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'", 0.40, 0.15, 0.49, 0.47, 0.18, 0.16]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'", 2.17, 0.08, 1.76, 1.02, 0.30, 0.29]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'", 0.71, 0.10, 0.86, 0.66, 0.19, 0.16]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'", 0.33, 0.04, 0.40, 0.26, 0.17, 0.13]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'", 0.36, 0.06, 0.43, 0.50, 0.18, 0.15]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'", 0.73, 0.06, 0.70, 0.56, 0.18, 0.14]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'", 0.92, 0.05, 0.84, 0.60, 0.15, 0.13]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'", 0.79, 0.49, 0.96, 0.85, 0.21, 0.17]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'", 0.93, 0.08, 0.94, 0.82, 0.21, 0.19]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'", 0.46, 0.18, 0.64, 0.55, 0.21, 0.18]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'", 0.43, 2.48, 1.44, 2.12, 0.22, 0.20]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'", 0.73, 0.46, 0.81, 0.86, 0.18, 0.15]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'", 1.19, 0.07, 1.10, 0.80, 0.21, 0.19]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'", 0.56, 0.14, 0.74, 0.66, 0.26, 0.22]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'", 0.49, 0.07, 0.65, 0.51, 0.21, 0.16]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'", 0.59, 1.12, 1.07, 1.34, 0.21, 0.17]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'", 0.32, 0.12, 0.48, 0.50, 0.19, 0.17]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'", 0.50, 0.52, 0.74, 0.71, 0.15, 0.15]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'", 0.30, 0.06, 0.46, 0.53, 0.15, 0.14]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'", 0.73, 0.08, 0.83, 0.71, 0.19, 0.20]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'", 0.63, 0.06, 0.76, 0.63, 0.22, 0.15]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'", 0.37, 0.03, 0.34, 0.33, 0.10, 0.10]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'", 0.74, 0.33, 0.72, 0.68, 0.13, 0.12]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'", 0.34, 0.05, 0.37, 0.42, 0.11, 0.11]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'", 0.51, 0.04, 0.49, 0.36, 0.11, 0.11]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'", 0.52, 0.05, 0.53, 0.47, 0.14, 0.13]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'", 0.54, 0.04, 0.53, 0.40, 0.14, 0.12]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'", 0.86, 0.07, 0.80, 0.61, 0.18, 0.17]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'", 0.33, 0.04, 0.49, 0.29, 0.16, 0.12]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'", 0.21, 0.09, 0.31, 0.50, 0.14, 0.13]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'", 0.38, 0.32, 0.51, 0.56, 0.14, 0.12]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'", 0.30, 0.10, 0.37, 0.36, 0.15, 0.14]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'", 0.32, 0.09, 0.38, 0.42, 0.14, 0.11]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'", 0.46, 0.11, 0.51, 0.49, 0.16, 0.14]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'", 0.31, 0.04, 0.35, 0.29, 0.14, 0.12]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'", 1.62, 0.06, 1.25, 0.90, 0.17, 0.13]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'", 0.31, 0.09, 0.41, 0.44, 0.19, 0.17]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'", 0.27, 0.05, 0.38, 0.44, 0.17, 0.16]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'", 0.60, 0.05, 0.59, 0.42, 0.17, 0.16]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'", 0.32, 0.04, 0.36, 0.41, 0.13, 0.12]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'", 0.29, 0.04, 0.35, 0.29, 0.15, 0.13]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'", 0.35, 0.04, 0.38, 0.36, 0.12, 0.10]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'", 0.26, 0.03, 0.33, 0.25, 0.15, 0.12]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'", 0.33, 0.15, 0.39, 0.43, 0.14, 0.12]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'", 0.28, 0.37, 0.38, 0.56, 0.13, 0.11]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'", 0.30, 0.04, 0.36, 0.31, 0.12, 0.11]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'", 0.28, 0.05, 0.30, 0.33, 0.11, 0.10]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'", 0.49, 1.60, 0.92, 1.44, 0.11, 0.10]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'", 0.71, 0.05, 0.64, 0.49, 0.16, 0.13]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'", 0.39, 0.05, 0.40, 0.38, 0.13, 0.11]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'", 0.07, 0.05, 0.19, 0.18, 0.12, 0.10]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'", 1.22, 0.12, 1.02, 0.74, 0.17, 0.14]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'", 0.50, 0.04, 0.54, 0.42, 0.14, 0.14]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'", 0.73, 0.13, 0.82, 0.89, 0.19, 0.18]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'", 0.38, 0.05, 0.44, 0.43, 0.18, 0.18]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'", 0.44, 0.05, 0.46, 0.39, 0.16, 0.15]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'", 0.30, 0.29, 0.40, 0.48, 0.13, 0.13]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'", 0.32, 0.08, 0.40, 0.44, 0.15, 0.14]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'", 0.72, 0.05, 0.65, 0.49, 0.17, 0.15]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'", 0.92, 0.07, 0.84, 0.64, 0.22, 0.19]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'", 0.97, 0.06, 0.84, 0.61, 0.16, 0.17]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'", 0.51, 0.13, 0.56, 0.49, 0.19, 0.19]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'", 0.10, 0.05, 0.26, 0.32, 0.18, 0.18]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'", 0.53, 0.07, 0.56, 0.48, 0.21, 0.22]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'", 0.47, 0.08, 0.60, 0.57, 0.27, 0.26]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'", 1.06, 0.11, 1.01, 0.87, 0.34, 0.36]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'", 0.99, 0.13, 1.08, 0.94, 0.26, 0.26]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'", 1.18, 0.23, 1.26, 1.10, 0.38, 0.41]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'", 1.00, 0.14, 1.04, 0.86, 0.33, 0.35]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'", 1.44, 0.13, 1.39, 1.20, 0.41, 0.40]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'", 1.24, 0.13, 1.26, 0.96, 0.41, 0.39]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'", 0.98, 0.25, 1.17, 1.20, 0.47, 0.45]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'", 1.05, 0.82, 1.45, 1.54, 0.48, 0.51]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'", 4.89, 9.02, 5.77, 7.70, 0.48, 0.52]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'", 1.36, 9.28, 3.58, 7.60, 0.55, 0.60]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'", 5.63, 0.79, 4.63, 3.08, 0.64, 0.71]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'", 2.38, 2.04, 2.80, 3.14, 0.70, 0.73]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'", 2.71, 1.94, 2.91, 3.02, 0.74, 0.78]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'", 2.61, 0.26, 2.51, 1.92, 0.71, 0.76]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'", 3.18, 0.78, 3.20, 2.60, 0.89, 0.95]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'", 6.19, 4.62, 6.39, 6.13, 0.91, 0.95]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'", 5.51, 0.40, 4.79, 2.26, 0.78, 0.80]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'", 3.07, 0.43, 3.06, 2.74, 0.89, 0.96]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'", 9.48, 1.25, 7.61, 3.83, 0.82, 0.89]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'", 5.41, 4.88, 5.87, 5.72, 0.87, 0.96]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'", 6.66, 4.12, 6.97, 5.61, 0.86, 0.85]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'", 5.32, 2.53, 5.78, 4.71, 1.06, 1.12]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'", 9.10, 1.59, 7.59, 5.33, 0.94, 0.98]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'", 4.65, 0.31, 4.07, 2.48, 0.77, 0.79]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'", 29.96, 0.99, 22.16, 7.64, 1.03, 1.04]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'", 6.72, 0.79, 5.95, 3.63, 1.02, 1.09]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'", 11.52, 1.00, 9.49, 5.25, 1.28, 1.32]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'", 6.67, 1.21, 7.15, 5.39, 1.34, 1.38]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'", 3.56, 1.34, 4.13, 3.63, 1.23, 1.29]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'", 44.55, 1.81, 32.44, 18.26, 1.44, 1.55]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'", 18.69, 1.64, 14.95, 9.31, 1.53, 1.63]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'", 7.52, 1.18, 6.99, 4.88, 1.42, 1.49]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'", 11.05, 2.84, 10.05, 7.13, 1.29, 1.42]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'", 8.76, 29.42, 20.11, 29.98, 1.36, 1.45]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'", 31.90, 2.23, 24.62, 8.81, 1.56, 1.70]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'", 6.20, 13.14, 8.99, 13.43, 1.50, 1.62]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'", 8.18, 3.77, 8.39, 6.68, 1.54, 1.63]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'", 35.39, 1.50, 26.37, 12.48, 1.64, 1.76]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'", 8.41, 1.14, 7.84, 5.17, 1.41, 1.51]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'", 17.57, 2.42, 14.80, 8.48, 1.73, 1.85]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'", 4.65, 1.38, 5.56, 5.68, 1.65, 1.82]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'", 6.37, 2.07, 6.54, 6.12, 1.69, 1.76]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'", 38.01, 1.27, 28.20, 7.45, 1.37, 1.56]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'", 26.38, 3.32, 21.17, 8.89, 1.39, 1.52]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'", 10.77, 1.41, 9.63, 6.77, 1.46, 1.57]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'", 16.26, 1.46, 13.75, 5.66, 1.54, 1.67]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'", 24.38, 2.91, 19.24, 7.00, 1.61, 1.70]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'", 31.89, 4.74, 25.04, 10.25, 1.70, 1.79]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'", 17.90, 13.75, 17.46, 16.27, 1.83, 2.05]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'", 15.39, 4.06, 13.54, 8.69, 1.55, 1.68]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'", 54.93, 7.24, 42.09, 13.87, 1.38, 1.54]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'", 63.40, 1.48, 47.08, 8.58, 1.75, 1.86]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'", 142.93, 2.60, 102.55, 13.99, 1.77, 1.93]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'", 8.15, 8.80, 9.70, 10.73, 1.75, 1.90]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'", 33.50, 6.35, 27.57, 13.79, 1.69, 1.82]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'", 6.12, 2.19, 7.29, 5.96, 1.68, 1.82]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'", 8.11, 4.50, 9.28, 9.14, 1.59, 1.72]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'", 5.40, 1.51, 5.85, 5.79, 1.58, 1.69]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'", 8.24, 3.82, 8.61, 7.49, 1.75, 1.89]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'", 5.73, 2.32, 6.42, 5.87, 1.62, 1.74]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'", 5.97, 2.50, 6.94, 6.39, 1.98, 2.18]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'", 6.71, 1.14, 7.65, 5.32, 2.51, 1.88]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'", 7.45, 6.53, 9.42, 9.10, 1.70, 1.81]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'", 56.04, 1.61, 41.60, 9.14, 1.83, 1.97]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'", 13.09, 1.54, 11.24, 8.10, 1.76, 1.87]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'", 7.41, 1.02, 7.23, 5.42, 1.63, 1.71]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'", 7.98, 2.74, 7.92, 6.27, 1.50, 1.60]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'", 6.37, 4.41, 7.83, 7.73, 1.56, 1.73]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'", 25.65, 1.42, 19.50, 6.49, 1.56, 1.64]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'", 45.94, 9.78, 36.77, 13.55, 1.60, 1.73]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'", 29.76, 5.40, 23.74, 10.51, 1.85, 2.03]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'", 480.31, 26.74, 350.88, 186.98, 1.63, 1.78]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'", 76.00, 1.59, 55.45, 16.22, 2.05, 2.22]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'", 52.53, 2.64, 39.10, 13.09, 1.82, 1.95]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'", 135.28, 4.47, 98.97, 33.98, 2.25, 2.52]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'", 309.30, 4.85, 219.41, 67.13, 2.09, 2.31]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'", 174.58, 10.99, 125.19, 45.74, 1.56, 1.63]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'", 179.08, 5.34, 130.41, 61.58, 1.74, 1.85]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'", 24.19, 1.53, 18.96, 12.13, 1.86, 1.98]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'", 131.25, 9.93, 93.41, 57.95, 2.21, 2.27]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'", 156.25, 9.48, 111.06, 63.57, 2.28, 2.35]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'", 168.26, 14.59, 122.93, 64.42, 1.93, 1.99]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'", 42.21, 16.33, 33.47, 27.14, 1.47, 1.60]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'", 16.32, 28.97, 16.05, 25.83, 1.47, 1.61]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'", 11.94, 60.18, 30.18, 47.22, 1.58, 1.64]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'", 5.73, 13.24, 7.96, 13.53, 1.55, 1.63]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'", 26.47, 2.20, 20.38, 8.48, 1.52, 1.61]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'", 17.74, 101.08, 57.02, 78.07, 1.97, 2.15]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'", 7.03, 9.79, 9.38, 12.24, 1.78, 2.00]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'", 11.50, 2.13, 10.06, 6.41, 1.43, 1.63]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'", 4.22, 7.84, 6.24, 9.17, 1.37, 1.46]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'", 3.15, 3.99, 4.38, 6.08, 1.32, 1.41]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'", 15.92, 4.71, 14.20, 11.00, 1.74, 1.88]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'", 105.94, 45.54, 89.08, 42.94, 1.62, 1.80]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'", 34.41, 115.12, 38.53, 91.14, 1.72, 1.88]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'", 9.99, 4.50, 9.80, 7.79, 1.67, 1.80]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'", 12.80, 1.60, 10.98, 6.41, 1.49, 1.68]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'", 6.22, 4.93, 7.50, 8.29, 1.75, 1.82]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'", 9.77, 2.96, 9.68, 8.58, 2.08, 2.17]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'", 8.01, 13.78, 11.70, 15.21, 1.67, 1.77]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'", 9.93, 103.06, 31.20, 75.69, 1.82, 1.95]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'", 4.22, 67.90, 19.06, 50.48, 1.66, 1.75]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'", 10.02, 7.71, 10.95, 9.98, 1.63, 1.78]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'", 9.10, 3.35, 8.70, 6.72, 1.39, 1.52]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'", 18.05, 14.73, 16.72, 16.97, 1.45, 1.51]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'", 8.82, 4.95, 8.57, 7.74, 1.33, 1.38]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'", 9.44, 3.89, 8.96, 6.91, 1.29, 1.44]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'", 6.41, 4.83, 7.33, 7.12, 1.44, 1.51]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'", 13.31, 12.45, 12.80, 14.32, 1.40, 1.45]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="FIU to RCM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    