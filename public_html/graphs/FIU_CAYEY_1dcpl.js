
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'13:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:15:00'", 14.71, 3.27, 13.37, 13.75, 1.81, 1.98]);  data.addRow(["'13:20:00'", 21.95, 2.16, 18.06, 15.20, 1.89, 2.05]);  data.addRow(["'13:25:00'", 13.46, 9.13, 15.29, 18.17, 1.77, 1.89]);  data.addRow(["'13:30:00'", 9.97, 5.28, 11.62, 13.18, 1.58, 1.74]);  data.addRow(["'13:35:00'", 12.91, 6.55, 14.75, 16.65, 1.82, 1.96]);  data.addRow(["'13:40:00'", 19.73, 2.24, 17.94, 18.09, 2.29, 2.44]);  data.addRow(["'13:45:00'", 12.64, 2.00, 12.46, 14.51, 1.97, 2.11]);  data.addRow(["'13:50:00'", 17.68, 2.89, 15.84, 16.04, 1.81, 1.98]);  data.addRow(["'13:55:00'", 14.64, 4.96, 14.71, 15.90, 1.89, 1.97]);  data.addRow(["'14:00:00'", 16.52, 3.57, 15.71, 16.75, 2.11, 2.28]);  data.addRow(["'14:05:00'", 15.19, 4.91, 14.56, 15.88, 1.59, 1.62]);  data.addRow(["'14:10:00'", 28.64, 2.81, 21.95, 23.42, 1.57, 1.63]);  data.addRow(["'14:15:00'", 52.02, 6.08, 39.37, 44.01, 1.54, 1.66]);  data.addRow(["'14:20:00'", 13.64, 7.52, 15.67, 17.81, 1.41, 1.49]);  data.addRow(["'14:25:00'", 9.39, 4.64, 10.26, 11.77, 1.33, 1.45]);  data.addRow(["'14:30:00'", 13.21, 4.94, 15.35, 17.89, 1.59, 1.71]);  data.addRow(["'14:35:00'", 8.70, 2.60, 8.95, 9.20, 1.40, 1.48]);  data.addRow(["'14:40:00'", 21.00, 4.26, 17.54, 15.82, 1.69, 1.76]);  data.addRow(["'14:45:00'", 41.42, 18.45, 43.79, 50.32, 1.67, 1.78]);  data.addRow(["'14:50:00'", 13.49, 18.32, 20.00, 28.27, 1.93, 2.04]);  data.addRow(["'14:55:00'", 10.96, 14.83, 16.61, 22.59, 1.57, 1.71]);  data.addRow(["'15:00:00'", 24.00, 15.24, 26.39, 24.12, 1.77, 1.88]);  data.addRow(["'15:05:00'", 16.60, 33.07, 26.94, 37.15, 1.69, 1.81]);  data.addRow(["'15:10:00'", 14.67, 5.34, 15.03, 17.18, 1.86, 2.06]);  data.addRow(["'15:15:00'", 21.35, 4.56, 19.79, 19.38, 1.91, 2.03]);  data.addRow(["'15:20:00'", 16.97, 4.00, 16.19, 17.28, 1.77, 1.88]);  data.addRow(["'15:25:00'", 18.24, 3.33, 15.40, 17.29, 1.64, 1.76]);  data.addRow(["'15:30:00'", 15.44, 2.04, 12.84, 14.63, 1.53, 1.67]);  data.addRow(["'15:35:00'", 29.40, 9.27, 26.11, 27.68, 1.61, 1.71]);  data.addRow(["'15:40:00'", 18.77, 2.19, 14.81, 15.21, 1.32, 1.44]);  data.addRow(["'15:45:00'", 26.30, 16.82, 27.42, 30.71, 1.31, 1.46]);  data.addRow(["'15:50:00'", 14.33, 63.30, 34.46, 54.97, 1.12, 1.30]);  data.addRow(["'15:55:00'", 12.97, 65.62, 33.82, 55.37, 1.12, 1.20]);  data.addRow(["'16:00:00'", 7.61, 0.91, 6.61, 6.33, 1.07, 1.11]);  data.addRow(["'16:05:00'", 6.17, 2.48, 8.84, 8.12, 1.46, 1.55]);  data.addRow(["'16:10:00'", 5.79, 1.44, 6.48, 6.97, 1.39, 1.48]);  data.addRow(["'16:15:00'", 4.99, 60.82, 30.21, 52.79, 1.06, 1.13]);  data.addRow(["'16:20:00'", 15.53, 69.80, 36.63, 56.25, 1.00, 1.11]);  data.addRow(["'16:25:00'", 2.78, 0.48, 2.97, 2.99, 0.88, 0.92]);  data.addRow(["'16:30:00'", 8.88, 23.38, 17.27, 22.77, 0.94, 1.00]);  data.addRow(["'16:35:00'", 1.20, 1.13, 2.11, 2.53, 0.73, 0.78]);  data.addRow(["'16:40:00'", 4.54, 0.84, 4.26, 3.89, 0.74, 0.84]);  data.addRow(["'16:45:00'", 3.83, 0.93, 3.79, 3.95, 0.75, 0.82]);  data.addRow(["'16:50:00'", 5.60, 0.87, 5.23, 5.94, 0.93, 1.04]);  data.addRow(["'16:55:00'", 35.44, 2.84, 26.86, 16.70, 0.76, 0.81]);  data.addRow(["'17:00:00'", 3.72, 2.30, 4.44, 5.04, 0.80, 0.84]);  data.addRow(["'17:05:00'", 22.11, 3.02, 17.21, 18.33, 1.06, 1.14]);  data.addRow(["'17:10:00'", 6.92, 0.48, 5.67, 4.43, 0.71, 0.74]);  data.addRow(["'17:15:00'", 3.31, 0.41, 3.22, 3.58, 0.79, 0.87]);  data.addRow(["'17:20:00'", 2.31, 0.57, 2.61, 2.79, 0.78, 0.87]);  data.addRow(["'17:25:00'", 1.47, 0.30, 1.73, 2.00, 0.53, 0.59]);  data.addRow(["'17:30:00'", 2.09, 0.27, 1.96, 2.29, 0.43, 0.46]);  data.addRow(["'17:35:00'", 4.47, 0.47, 4.00, 4.31, 0.79, 0.83]);  data.addRow(["'17:40:00'", 3.99, 0.39, 3.49, 3.67, 0.70, 0.74]);  data.addRow(["'17:45:00'", 2.05, 0.25, 2.08, 2.02, 0.60, 0.63]);  data.addRow(["'17:50:00'", 3.32, 0.33, 3.05, 2.27, 0.69, 0.70]);  data.addRow(["'17:55:00'", 1.35, 0.31, 1.62, 1.83, 0.56, 0.63]);  data.addRow(["'18:00:00'", 13.43, 0.66, 9.88, 6.99, 0.65, 0.71]);  data.addRow(["'18:05:00'", 10.54, 0.63, 8.07, 7.62, 0.82, 0.90]);  data.addRow(["'18:10:00'", 3.34, 0.34, 3.01, 2.59, 0.64, 0.66]);  data.addRow(["'18:15:00'", 22.51, 1.05, 15.89, 17.57, 0.42, 0.48]);  data.addRow(["'18:20:00'", 1.44, 0.21, 1.46, 1.41, 0.36, 0.42]);  data.addRow(["'18:25:00'", 2.52, 0.30, 2.29, 2.58, 0.47, 0.53]);  data.addRow(["'18:30:00'", 1.71, 0.20, 1.71, 1.59, 0.44, 0.46]);  data.addRow(["'18:35:00'", 0.93, 0.16, 1.06, 1.20, 0.41, 0.48]);  data.addRow(["'18:40:00'", 1.69, 0.46, 1.67, 1.80, 0.41, 0.43]);  data.addRow(["'18:45:00'", 1.14, 0.18, 1.18, 1.24, 0.37, 0.44]);  data.addRow(["'18:50:00'", 0.72, 0.15, 0.90, 0.82, 0.36, 0.38]);  data.addRow(["'18:55:00'", 0.46, 0.19, 0.65, 0.68, 0.30, 0.33]);  data.addRow(["'19:00:00'", 0.51, 1.69, 1.37, 1.77, 0.29, 0.34]);  data.addRow(["'19:05:00'", 0.83, 0.18, 1.01, 1.06, 0.40, 0.43]);  data.addRow(["'19:10:00'", 2.45, 0.26, 2.16, 2.29, 0.45, 0.47]);  data.addRow(["'19:15:00'", 1.34, 0.17, 1.41, 1.50, 0.46, 0.45]);  data.addRow(["'19:20:00'", 1.21, 0.32, 1.35, 1.42, 0.43, 0.44]);  data.addRow(["'19:25:00'", 1.89, 0.79, 2.08, 1.76, 0.39, 0.44]);  data.addRow(["'19:30:00'", 1.02, 0.20, 1.18, 1.12, 0.44, 0.48]);  data.addRow(["'19:35:00'", 0.49, 0.34, 0.83, 1.00, 0.38, 0.41]);  data.addRow(["'19:40:00'", 0.54, 0.18, 0.81, 0.93, 0.40, 0.43]);  data.addRow(["'19:45:00'", 0.92, 0.25, 1.17, 1.33, 0.49, 0.56]);  data.addRow(["'19:50:00'", 13.68, 0.42, 9.72, 5.81, 0.35, 0.38]);  data.addRow(["'19:55:00'", 0.33, 0.17, 0.67, 0.79, 0.31, 0.34]);  data.addRow(["'20:00:00'", 0.36, 0.10, 0.56, 0.68, 0.32, 0.38]);  data.addRow(["'20:05:00'", 0.26, 0.14, 0.58, 0.63, 0.33, 0.38]);  data.addRow(["'20:10:00'", 0.29, 0.18, 0.59, 0.70, 0.32, 0.36]);  data.addRow(["'20:15:00'", 0.24, 0.15, 0.53, 0.66, 0.33, 0.38]);  data.addRow(["'20:20:00'", 0.20, 0.08, 0.38, 0.47, 0.22, 0.29]);  data.addRow(["'20:25:00'", 0.74, 0.16, 0.85, 0.96, 0.32, 0.38]);  data.addRow(["'20:30:00'", 2.17, 0.24, 2.01, 2.10, 0.52, 0.56]);  data.addRow(["'20:35:00'", 0.50, 0.33, 0.88, 1.01, 0.45, 0.52]);  data.addRow(["'20:40:00'", 0.53, 0.76, 1.13, 1.28, 0.40, 0.43]);  data.addRow(["'20:45:00'", 1.15, 0.19, 1.29, 1.43, 0.50, 0.55]);  data.addRow(["'20:50:00'", 0.67, 0.16, 0.88, 0.90, 0.34, 0.42]);  data.addRow(["'20:55:00'", 0.56, 0.18, 0.80, 0.79, 0.36, 0.37]);  data.addRow(["'21:00:00'", 0.84, 0.15, 0.93, 0.95, 0.34, 0.37]);  data.addRow(["'21:05:00'", 0.53, 0.14, 0.74, 0.82, 0.32, 0.36]);  data.addRow(["'21:10:00'", 0.71, 0.17, 0.89, 0.73, 0.37, 0.40]);  data.addRow(["'21:15:00'", 1.56, 0.31, 1.52, 1.32, 0.33, 0.35]);  data.addRow(["'21:20:00'", 0.40, 0.10, 0.55, 0.47, 0.25, 0.25]);  data.addRow(["'21:25:00'", 1.13, 0.18, 1.12, 1.18, 0.32, 0.33]);  data.addRow(["'21:30:00'", 1.08, 0.11, 1.06, 0.79, 0.23, 0.26]);  data.addRow(["'21:35:00'", 0.18, 0.06, 0.33, 0.33, 0.20, 0.21]);  data.addRow(["'21:40:00'", 0.19, 0.12, 0.42, 0.48, 0.21, 0.25]);  data.addRow(["'21:45:00'", 0.06, 0.05, 0.27, 0.29, 0.19, 0.18]);  data.addRow(["'21:50:00'", 0.11, 0.08, 0.25, 0.29, 0.16, 0.19]);  data.addRow(["'21:55:00'", 0.98, 0.23, 0.99, 0.81, 0.22, 0.26]);  data.addRow(["'22:00:00'", 0.39, 0.21, 0.65, 0.66, 0.33, 0.33]);  data.addRow(["'22:05:00'", 1.26, 0.11, 1.15, 0.86, 0.27, 0.27]);  data.addRow(["'22:10:00'", 0.11, 0.11, 0.28, 0.34, 0.18, 0.20]);  data.addRow(["'22:15:00'", 0.34, 0.15, 0.52, 0.65, 0.26, 0.28]);  data.addRow(["'22:20:00'", 0.58, 0.19, 0.71, 0.65, 0.25, 0.28]);  data.addRow(["'22:25:00'", 0.78, 0.16, 1.16, 1.20, 0.17, 0.24]);  data.addRow(["'22:30:00'", 0.50, 0.06, 0.55, 0.39, 0.21, 0.19]);  data.addRow(["'22:35:00'", 0.04, 0.05, 0.15, 0.21, 0.12, 0.15]);  data.addRow(["'22:40:00'", 0.05, 0.09, 0.18, 0.24, 0.11, 0.15]);  data.addRow(["'22:45:00'", 0.24, 0.07, 0.33, 0.42, 0.19, 0.22]);  data.addRow(["'22:50:00'", 0.07, 0.06, 0.20, 0.29, 0.14, 0.18]);  data.addRow(["'22:55:00'", 0.05, 0.11, 0.25, 0.33, 0.15, 0.18]);  data.addRow(["'23:00:00'", 0.04, 0.05, 0.16, 0.22, 0.13, 0.16]);  data.addRow(["'23:05:00'", 0.09, 0.05, 0.17, 0.21, 0.12, 0.15]);  data.addRow(["'23:10:00'", 0.14, 0.08, 0.25, 0.24, 0.14, 0.14]);  data.addRow(["'23:15:00'", 0.04, 0.05, 0.15, 0.21, 0.11, 0.14]);  data.addRow(["'23:20:00'", 0.04, 0.04, 0.16, 0.19, 0.13, 0.15]);  data.addRow(["'23:25:00'", 0.03, 0.09, 0.15, 0.22, 0.10, 0.14]);  data.addRow(["'23:30:00'", 0.03, 0.03, 0.13, 0.17, 0.10, 0.12]);  data.addRow(["'23:35:00'", 0.03, 0.04, 0.15, 0.19, 0.13, 0.15]);  data.addRow(["'23:40:00'", 0.14, 0.15, 0.34, 0.44, 0.19, 0.23]);  data.addRow(["'23:45:00'", 0.02, 0.04, 0.11, 0.15, 0.09, 0.12]);  data.addRow(["'23:50:00'", 0.02, 0.05, 0.11, 0.18, 0.09, 0.14]);  data.addRow(["'23:55:00'", 0.03, 0.08, 0.15, 0.20, 0.11, 0.13]);  data.addRow(["'00:00:00'", 4.55, 0.16, 3.25, 3.50, 0.12, 0.13]);  data.addRow(["'00:05:00'", 0.03, 0.03, 0.13, 0.19, 0.10, 0.14]);  data.addRow(["'00:10:00'", 0.02, 0.07, 0.15, 0.18, 0.11, 0.11]);  data.addRow(["'00:15:00'", 0.02, 0.04, 0.12, 0.15, 0.09, 0.11]);  data.addRow(["'00:20:00'", 0.02, 0.04, 0.12, 0.17, 0.09, 0.14]);  data.addRow(["'00:25:00'", 0.02, 0.08, 0.15, 0.21, 0.11, 0.13]);  data.addRow(["'00:30:00'", 0.02, 0.05, 0.12, 0.17, 0.10, 0.13]);  data.addRow(["'00:35:00'", 0.02, 0.05, 0.15, 0.20, 0.12, 0.15]);  data.addRow(["'00:40:00'", 0.02, 0.04, 0.12, 0.18, 0.10, 0.13]);  data.addRow(["'00:45:00'", 0.02, 0.09, 0.12, 0.21, 0.09, 0.13]);  data.addRow(["'00:50:00'", 0.02, 0.04, 0.11, 0.16, 0.09, 0.11]);  data.addRow(["'00:55:00'", 0.02, 0.03, 0.11, 0.15, 0.09, 0.11]);  data.addRow(["'01:00:00'", 0.02, 0.07, 0.13, 0.18, 0.10, 0.12]);  data.addRow(["'01:05:00'", 0.02, 0.03, 0.11, 0.16, 0.09, 0.12]);  data.addRow(["'01:10:00'", 0.02, 0.04, 0.11, 0.16, 0.09, 0.11]);  data.addRow(["'01:15:00'", 0.02, 0.07, 0.14, 0.17, 0.10, 0.11]);  data.addRow(["'01:20:00'", 0.05, 0.07, 0.14, 0.20, 0.11, 0.13]);  data.addRow(["'01:25:00'", 0.07, 0.09, 0.21, 0.27, 0.15, 0.19]);  data.addRow(["'01:30:00'", 0.06, 0.12, 0.22, 0.28, 0.14, 0.17]);  data.addRow(["'01:35:00'", 0.03, 0.04, 0.14, 0.18, 0.12, 0.14]);  data.addRow(["'01:40:00'", 0.02, 0.04, 0.12, 0.14, 0.09, 0.11]);  data.addRow(["'01:45:00'", 0.03, 0.09, 0.15, 0.20, 0.10, 0.12]);  data.addRow(["'01:50:00'", 0.02, 0.04, 0.12, 0.15, 0.09, 0.11]);  data.addRow(["'01:55:00'", 0.02, 0.04, 0.11, 0.13, 0.09, 0.11]);  data.addRow(["'02:00:00'", 0.02, 0.09, 0.13, 0.19, 0.10, 0.13]);  data.addRow(["'02:05:00'", 0.02, 0.03, 0.12, 0.15, 0.10, 0.11]);  data.addRow(["'02:10:00'", 0.02, 0.04, 0.13, 0.14, 0.10, 0.11]);  data.addRow(["'02:15:00'", 0.03, 0.11, 0.15, 0.21, 0.10, 0.13]);  data.addRow(["'02:20:00'", 1.19, 0.08, 1.04, 0.78, 0.14, 0.17]);  data.addRow(["'02:25:00'", 0.13, 0.04, 0.22, 0.26, 0.11, 0.13]);  data.addRow(["'02:30:00'", 0.39, 0.08, 0.41, 0.37, 0.11, 0.14]);  data.addRow(["'02:35:00'", 0.16, 0.04, 0.24, 0.31, 0.15, 0.18]);  data.addRow(["'02:40:00'", 0.02, 0.05, 0.11, 0.14, 0.09, 0.11]);  data.addRow(["'02:45:00'", 0.02, 0.11, 0.14, 0.22, 0.10, 0.13]);  data.addRow(["'02:50:00'", 0.03, 0.04, 0.13, 0.18, 0.10, 0.13]);  data.addRow(["'02:55:00'", 0.02, 0.03, 0.10, 0.17, 0.09, 0.13]);  data.addRow(["'03:00:00'", 0.04, 0.44, 0.36, 0.49, 0.19, 0.21]);  data.addRow(["'03:05:00'", 0.02, 0.14, 0.20, 0.23, 0.12, 0.14]);  data.addRow(["'03:10:00'", 0.52, 0.08, 0.55, 0.45, 0.14, 0.18]);  data.addRow(["'03:15:00'", 0.02, 0.08, 0.11, 0.19, 0.08, 0.12]);  data.addRow(["'03:20:00'", 0.01, 0.04, 0.09, 0.14, 0.07, 0.11]);  data.addRow(["'03:25:00'", 0.02, 0.04, 0.10, 0.15, 0.07, 0.11]);  data.addRow(["'03:30:00'", 0.02, 0.08, 0.12, 0.16, 0.08, 0.10]);  data.addRow(["'03:35:00'", 0.02, 0.03, 0.10, 0.14, 0.09, 0.11]);  data.addRow(["'03:40:00'", 0.02, 0.04, 0.11, 0.15, 0.09, 0.12]);  data.addRow(["'03:45:00'", 0.02, 0.07, 0.12, 0.18, 0.09, 0.12]);  data.addRow(["'03:50:00'", 0.02, 0.04, 0.11, 0.16, 0.09, 0.12]);  data.addRow(["'03:55:00'", 0.02, 0.03, 0.12, 0.14, 0.11, 0.12]);  data.addRow(["'04:00:00'", 0.02, 0.08, 0.11, 0.19, 0.08, 0.11]);  data.addRow(["'04:05:00'", 0.02, 0.03, 0.12, 0.16, 0.09, 0.13]);  data.addRow(["'04:10:00'", 0.02, 0.04, 0.12, 0.15, 0.10, 0.12]);  data.addRow(["'04:15:00'", 0.02, 0.08, 0.13, 0.19, 0.09, 0.12]);  data.addRow(["'04:20:00'", 0.04, 0.18, 0.21, 0.29, 0.12, 0.14]);  data.addRow(["'04:25:00'", 0.02, 0.09, 0.15, 0.21, 0.11, 0.13]);  data.addRow(["'04:30:00'", 0.02, 0.04, 0.12, 0.16, 0.10, 0.11]);  data.addRow(["'04:35:00'", 0.02, 0.03, 0.12, 0.15, 0.10, 0.12]);  data.addRow(["'04:40:00'", 0.04, 0.03, 0.16, 0.15, 0.12, 0.12]);  data.addRow(["'04:45:00'", 0.02, 0.10, 0.16, 0.22, 0.11, 0.15]);  data.addRow(["'04:50:00'", 0.02, 0.03, 0.10, 0.15, 0.09, 0.12]);  data.addRow(["'04:55:00'", 0.02, 0.03, 0.12, 0.15, 0.10, 0.11]);  data.addRow(["'05:00:00'", 0.03, 0.08, 0.13, 0.19, 0.10, 0.12]);  data.addRow(["'05:05:00'", 0.02, 0.03, 0.12, 0.15, 0.10, 0.12]);  data.addRow(["'05:10:00'", 0.02, 0.04, 0.12, 0.17, 0.10, 0.13]);  data.addRow(["'05:15:00'", 0.03, 0.07, 0.15, 0.18, 0.11, 0.12]);  data.addRow(["'05:20:00'", 0.02, 0.04, 0.12, 0.14, 0.10, 0.11]);  data.addRow(["'05:25:00'", 0.02, 0.03, 0.11, 0.14, 0.09, 0.12]);  data.addRow(["'05:30:00'", 0.02, 0.08, 0.14, 0.20, 0.10, 0.13]);  data.addRow(["'05:35:00'", 0.02, 0.04, 0.11, 0.15, 0.09, 0.12]);  data.addRow(["'05:40:00'", 0.02, 0.05, 0.12, 0.16, 0.10, 0.12]);  data.addRow(["'05:45:00'", 0.02, 0.08, 0.13, 0.19, 0.11, 0.13]);  data.addRow(["'05:50:00'", 0.02, 0.04, 0.12, 0.15, 0.09, 0.12]);  data.addRow(["'05:55:00'", 0.02, 0.03, 0.11, 0.16, 0.10, 0.12]);  data.addRow(["'06:00:00'", 0.03, 0.09, 0.15, 0.20, 0.11, 0.14]);  data.addRow(["'06:05:00'", 0.02, 0.03, 0.11, 0.16, 0.09, 0.12]);  data.addRow(["'06:10:00'", 0.07, 0.04, 0.17, 0.18, 0.12, 0.12]);  data.addRow(["'06:15:00'", 0.07, 0.10, 0.20, 0.26, 0.13, 0.14]);  data.addRow(["'06:20:00'", 0.06, 0.08, 0.19, 0.28, 0.17, 0.20]);  data.addRow(["'06:25:00'", 0.07, 0.04, 0.16, 0.20, 0.11, 0.13]);  data.addRow(["'06:30:00'", 0.05, 0.09, 0.16, 0.24, 0.12, 0.14]);  data.addRow(["'06:35:00'", 0.03, 0.04, 0.12, 0.16, 0.09, 0.13]);  data.addRow(["'06:40:00'", 0.03, 0.05, 0.12, 0.17, 0.10, 0.13]);  data.addRow(["'06:45:00'", 0.04, 0.09, 0.17, 0.23, 0.13, 0.16]);  data.addRow(["'06:50:00'", 0.02, 0.04, 0.17, 0.21, 0.12, 0.15]);  data.addRow(["'06:55:00'", 0.03, 0.04, 0.13, 0.18, 0.12, 0.14]);  data.addRow(["'07:00:00'", 0.08, 0.10, 0.20, 0.26, 0.13, 0.16]);  data.addRow(["'07:05:00'", 0.07, 0.04, 0.16, 0.21, 0.12, 0.15]);  data.addRow(["'07:10:00'", 0.33, 0.09, 0.40, 0.52, 0.22, 0.25]);  data.addRow(["'07:15:00'", 0.31, 0.17, 0.49, 0.67, 0.31, 0.37]);  data.addRow(["'07:20:00'", 0.34, 0.11, 0.52, 0.64, 0.30, 0.35]);  data.addRow(["'07:25:00'", 0.36, 0.20, 0.58, 0.68, 0.29, 0.31]);  data.addRow(["'07:30:00'", 0.25, 0.16, 0.47, 0.54, 0.28, 0.31]);  data.addRow(["'07:35:00'", 0.31, 0.13, 0.53, 0.72, 0.28, 0.37]);  data.addRow(["'07:40:00'", 2.09, 0.31, 2.03, 2.44, 0.62, 0.74]);  data.addRow(["'07:45:00'", 2.30, 0.59, 2.47, 2.75, 0.76, 0.84]);  data.addRow(["'07:50:00'", 1.08, 0.81, 1.77, 2.20, 0.76, 0.86]);  data.addRow(["'07:55:00'", 3.46, 1.44, 3.78, 4.39, 0.83, 0.90]);  data.addRow(["'08:00:00'", 1.14, 0.33, 1.56, 1.68, 0.54, 0.58]);  data.addRow(["'08:05:00'", 0.90, 1.09, 1.53, 1.90, 0.52, 0.56]);  data.addRow(["'08:10:00'", 2.39, 0.28, 2.23, 2.39, 0.48, 0.54]);  data.addRow(["'08:15:00'", 4.69, 0.51, 3.93, 4.71, 0.64, 0.71]);  data.addRow(["'08:20:00'", 3.76, 0.53, 3.34, 3.81, 0.72, 0.78]);  data.addRow(["'08:25:00'", 0.91, 0.89, 1.27, 1.69, 0.39, 0.42]);  data.addRow(["'08:30:00'", 3.41, 0.48, 3.03, 3.43, 0.61, 0.67]);  data.addRow(["'08:35:00'", 8.58, 1.05, 6.92, 8.13, 0.97, 1.01]);  data.addRow(["'08:40:00'", 10.32, 0.84, 8.24, 9.19, 0.87, 0.95]);  data.addRow(["'08:45:00'", 11.57, 10.57, 12.20, 17.58, 0.81, 0.89]);  data.addRow(["'08:50:00'", 4.97, 0.68, 4.81, 4.89, 1.18, 1.23]);  data.addRow(["'08:55:00'", 3.98, 0.66, 4.02, 4.43, 1.03, 1.11]);  data.addRow(["'09:00:00'", 7.39, 1.60, 7.02, 7.99, 1.29, 1.40]);  data.addRow(["'09:05:00'", 6.88, 1.04, 6.28, 6.97, 1.16, 1.29]);  data.addRow(["'09:10:00'", 6.68, 1.02, 6.01, 6.88, 0.91, 0.98]);  data.addRow(["'09:15:00'", 4.60, 2.05, 5.21, 5.91, 1.01, 1.08]);  data.addRow(["'09:20:00'", 4.81, 1.04, 4.72, 4.57, 1.01, 1.07]);  data.addRow(["'09:25:00'", 5.30, 1.46, 5.46, 6.31, 1.22, 1.29]);  data.addRow(["'09:30:00'", 3.38, 4.12, 5.57, 6.78, 1.41, 1.49]);  data.addRow(["'09:35:00'", 7.68, 8.81, 10.64, 13.02, 1.35, 1.48]);  data.addRow(["'09:40:00'", 7.55, 3.61, 8.00, 9.29, 1.04, 1.10]);  data.addRow(["'09:45:00'", 9.43, 18.20, 15.03, 20.11, 1.36, 1.49]);  data.addRow(["'09:50:00'", 9.08, 3.27, 9.25, 10.85, 1.47, 1.59]);  data.addRow(["'09:55:00'", 6.41, 5.88, 8.01, 10.35, 0.87, 0.95]);  data.addRow(["'10:00:00'", 5.84, 4.68, 8.26, 10.24, 1.70, 1.88]);  data.addRow(["'10:05:00'", 4.23, 3.00, 5.82, 6.72, 1.39, 1.45]);  data.addRow(["'10:10:00'", 10.77, 15.58, 15.94, 21.68, 1.78, 1.89]);  data.addRow(["'10:15:00'", 13.94, 9.91, 16.30, 16.61, 1.56, 1.65]);  data.addRow(["'10:20:00'", 6.71, 6.48, 9.37, 11.35, 1.46, 1.58]);  data.addRow(["'10:25:00'", 6.86, 31.57, 21.46, 34.96, 1.46, 1.62]);  data.addRow(["'10:30:00'", 10.67, 26.69, 21.85, 29.65, 1.67, 1.77]);  data.addRow(["'10:35:00'", 9.65, 4.97, 10.45, 11.54, 1.67, 1.75]);  data.addRow(["'10:40:00'", 11.65, 55.52, 28.47, 59.33, 1.56, 1.66]);  data.addRow(["'10:45:00'", 10.74, 1.66, 9.64, 10.78, 1.71, 1.86]);  data.addRow(["'10:50:00'", 21.19, 10.00, 20.97, 23.86, 1.79, 1.92]);  data.addRow(["'10:55:00'", 22.93, 91.26, 62.69, 93.45, 1.64, 1.72]);  data.addRow(["'11:00:00'", 18.92, 8.38, 18.42, 17.23, 1.67, 1.77]);  data.addRow(["'11:05:00'", 19.80, 23.14, 25.30, 31.39, 2.02, 2.15]);  data.addRow(["'11:10:00'", 10.79, 21.82, 18.37, 25.59, 1.58, 1.70]);  data.addRow(["'11:15:00'", 15.44, 33.59, 25.76, 35.19, 1.92, 2.05]);  data.addRow(["'11:20:00'", 18.92, 23.41, 25.96, 31.13, 1.68, 1.77]);  data.addRow(["'11:25:00'", 15.50, 19.78, 21.61, 26.45, 1.71, 1.85]);  data.addRow(["'11:30:00'", 13.99, 18.25, 20.51, 26.71, 1.73, 1.92]);  data.addRow(["'11:35:00'", 13.81, 22.50, 21.56, 28.83, 1.67, 1.81]);  data.addRow(["'11:40:00'", 20.21, 18.77, 25.02, 27.72, 1.51, 1.64]);  data.addRow(["'11:45:00'", 32.95, 23.15, 35.57, 33.98, 1.43, 1.58]);  data.addRow(["'11:50:00'", 24.83, 18.62, 27.46, 32.75, 1.86, 2.07]);  data.addRow(["'11:55:00'", 39.78, 17.96, 37.85, 46.09, 1.78, 1.93]);  data.addRow(["'12:00:00'", 5.88, 17.72, 14.64, 20.94, 1.38, 1.47]);  data.addRow(["'12:05:00'", 60.52, 14.94, 50.28, 44.23, 1.73, 1.83]);  data.addRow(["'12:10:00'", 42.93, 13.68, 37.99, 31.57, 1.78, 1.86]);  data.addRow(["'12:15:00'", 100.15, 31.52, 81.80, 98.36, 1.61, 1.74]);  data.addRow(["'12:20:00'", 20.89, 2.24, 16.77, 21.07, 2.02, 2.13]);  data.addRow(["'12:25:00'", 32.33, 3.45, 26.49, 20.16, 2.29, 2.42]);  data.addRow(["'12:30:00'", 22.76, 3.76, 18.63, 20.20, 1.76, 1.82]);  data.addRow(["'12:35:00'", 35.11, 4.43, 27.15, 23.39, 1.53, 1.69]);  data.addRow(["'12:40:00'", 7.84, 3.77, 8.18, 9.23, 1.37, 1.54]);  data.addRow(["'12:45:00'", 24.38, 3.55, 19.64, 16.34, 1.39, 1.46]);  data.addRow(["'12:50:00'", 16.95, 1.70, 14.24, 13.38, 1.77, 1.80]);  data.addRow(["'12:55:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="CAYEY Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    