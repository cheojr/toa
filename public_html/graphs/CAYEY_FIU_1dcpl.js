
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'13:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:15:00'", 3.27, 14.71, 13.75, 13.37, 1.98, 1.81]);  data.addRow(["'13:20:00'", 2.16, 21.95, 15.20, 18.06, 2.05, 1.89]);  data.addRow(["'13:25:00'", 9.13, 13.46, 18.17, 15.29, 1.89, 1.77]);  data.addRow(["'13:30:00'", 5.28, 9.97, 13.18, 11.62, 1.74, 1.58]);  data.addRow(["'13:35:00'", 6.55, 12.91, 16.65, 14.75, 1.96, 1.82]);  data.addRow(["'13:40:00'", 2.24, 19.73, 18.09, 17.94, 2.44, 2.29]);  data.addRow(["'13:45:00'", 2.00, 12.64, 14.51, 12.46, 2.11, 1.97]);  data.addRow(["'13:50:00'", 2.89, 17.68, 16.04, 15.84, 1.98, 1.81]);  data.addRow(["'13:55:00'", 4.96, 14.64, 15.90, 14.71, 1.97, 1.89]);  data.addRow(["'14:00:00'", 3.57, 16.52, 16.75, 15.71, 2.28, 2.11]);  data.addRow(["'14:05:00'", 4.91, 15.19, 15.88, 14.56, 1.62, 1.59]);  data.addRow(["'14:10:00'", 2.81, 28.64, 23.42, 21.95, 1.63, 1.57]);  data.addRow(["'14:15:00'", 6.08, 52.02, 44.01, 39.37, 1.66, 1.54]);  data.addRow(["'14:20:00'", 7.52, 13.64, 17.81, 15.67, 1.49, 1.41]);  data.addRow(["'14:25:00'", 4.64, 9.39, 11.77, 10.26, 1.45, 1.33]);  data.addRow(["'14:30:00'", 4.94, 13.21, 17.89, 15.35, 1.71, 1.59]);  data.addRow(["'14:35:00'", 2.60, 8.70, 9.20, 8.95, 1.48, 1.40]);  data.addRow(["'14:40:00'", 4.26, 21.00, 15.82, 17.54, 1.76, 1.69]);  data.addRow(["'14:45:00'", 18.45, 41.42, 50.32, 43.79, 1.78, 1.67]);  data.addRow(["'14:50:00'", 18.32, 13.49, 28.27, 20.00, 2.04, 1.93]);  data.addRow(["'14:55:00'", 14.83, 10.96, 22.59, 16.61, 1.71, 1.57]);  data.addRow(["'15:00:00'", 15.24, 24.00, 24.12, 26.39, 1.88, 1.77]);  data.addRow(["'15:05:00'", 33.07, 16.60, 37.15, 26.94, 1.81, 1.69]);  data.addRow(["'15:10:00'", 5.34, 14.67, 17.18, 15.03, 2.06, 1.86]);  data.addRow(["'15:15:00'", 4.56, 21.35, 19.38, 19.79, 2.03, 1.91]);  data.addRow(["'15:20:00'", 4.00, 16.97, 17.28, 16.19, 1.88, 1.77]);  data.addRow(["'15:25:00'", 3.33, 18.24, 17.29, 15.40, 1.76, 1.64]);  data.addRow(["'15:30:00'", 2.04, 15.44, 14.63, 12.84, 1.67, 1.53]);  data.addRow(["'15:35:00'", 9.27, 29.40, 27.68, 26.11, 1.71, 1.61]);  data.addRow(["'15:40:00'", 2.19, 18.77, 15.21, 14.81, 1.44, 1.32]);  data.addRow(["'15:45:00'", 16.82, 26.30, 30.71, 27.42, 1.46, 1.31]);  data.addRow(["'15:50:00'", 63.30, 14.33, 54.97, 34.46, 1.30, 1.12]);  data.addRow(["'15:55:00'", 65.62, 12.97, 55.37, 33.82, 1.20, 1.12]);  data.addRow(["'16:00:00'", 0.91, 7.61, 6.33, 6.61, 1.11, 1.07]);  data.addRow(["'16:05:00'", 2.48, 6.17, 8.12, 8.84, 1.55, 1.46]);  data.addRow(["'16:10:00'", 1.44, 5.79, 6.97, 6.48, 1.48, 1.39]);  data.addRow(["'16:15:00'", 60.82, 4.99, 52.79, 30.21, 1.13, 1.06]);  data.addRow(["'16:20:00'", 69.80, 15.53, 56.25, 36.63, 1.11, 1.00]);  data.addRow(["'16:25:00'", 0.48, 2.78, 2.99, 2.97, 0.92, 0.88]);  data.addRow(["'16:30:00'", 23.38, 8.88, 22.77, 17.27, 1.00, 0.94]);  data.addRow(["'16:35:00'", 1.13, 1.20, 2.53, 2.11, 0.78, 0.73]);  data.addRow(["'16:40:00'", 0.84, 4.54, 3.89, 4.26, 0.84, 0.74]);  data.addRow(["'16:45:00'", 0.93, 3.83, 3.95, 3.79, 0.82, 0.75]);  data.addRow(["'16:50:00'", 0.87, 5.60, 5.94, 5.23, 1.04, 0.93]);  data.addRow(["'16:55:00'", 2.84, 35.44, 16.70, 26.86, 0.81, 0.76]);  data.addRow(["'17:00:00'", 2.30, 3.72, 5.04, 4.44, 0.84, 0.80]);  data.addRow(["'17:05:00'", 3.02, 22.11, 18.33, 17.21, 1.14, 1.06]);  data.addRow(["'17:10:00'", 0.48, 6.92, 4.43, 5.67, 0.74, 0.71]);  data.addRow(["'17:15:00'", 0.41, 3.31, 3.58, 3.22, 0.87, 0.79]);  data.addRow(["'17:20:00'", 0.57, 2.31, 2.79, 2.61, 0.87, 0.78]);  data.addRow(["'17:25:00'", 0.30, 1.47, 2.00, 1.73, 0.59, 0.53]);  data.addRow(["'17:30:00'", 0.27, 2.09, 2.29, 1.96, 0.46, 0.43]);  data.addRow(["'17:35:00'", 0.47, 4.47, 4.31, 4.00, 0.83, 0.79]);  data.addRow(["'17:40:00'", 0.39, 3.99, 3.67, 3.49, 0.74, 0.70]);  data.addRow(["'17:45:00'", 0.25, 2.05, 2.02, 2.08, 0.63, 0.60]);  data.addRow(["'17:50:00'", 0.33, 3.32, 2.27, 3.05, 0.70, 0.69]);  data.addRow(["'17:55:00'", 0.31, 1.35, 1.83, 1.62, 0.63, 0.56]);  data.addRow(["'18:00:00'", 0.66, 13.43, 6.99, 9.88, 0.71, 0.65]);  data.addRow(["'18:05:00'", 0.63, 10.54, 7.62, 8.07, 0.90, 0.82]);  data.addRow(["'18:10:00'", 0.34, 3.34, 2.59, 3.01, 0.66, 0.64]);  data.addRow(["'18:15:00'", 1.05, 22.51, 17.57, 15.89, 0.48, 0.42]);  data.addRow(["'18:20:00'", 0.21, 1.44, 1.41, 1.46, 0.42, 0.36]);  data.addRow(["'18:25:00'", 0.30, 2.52, 2.58, 2.29, 0.53, 0.47]);  data.addRow(["'18:30:00'", 0.20, 1.71, 1.59, 1.71, 0.46, 0.44]);  data.addRow(["'18:35:00'", 0.16, 0.93, 1.20, 1.06, 0.48, 0.41]);  data.addRow(["'18:40:00'", 0.46, 1.69, 1.80, 1.67, 0.43, 0.41]);  data.addRow(["'18:45:00'", 0.18, 1.14, 1.24, 1.18, 0.44, 0.37]);  data.addRow(["'18:50:00'", 0.15, 0.72, 0.82, 0.90, 0.38, 0.36]);  data.addRow(["'18:55:00'", 0.19, 0.46, 0.68, 0.65, 0.33, 0.30]);  data.addRow(["'19:00:00'", 1.69, 0.51, 1.77, 1.37, 0.34, 0.29]);  data.addRow(["'19:05:00'", 0.18, 0.83, 1.06, 1.01, 0.43, 0.40]);  data.addRow(["'19:10:00'", 0.26, 2.45, 2.29, 2.16, 0.47, 0.45]);  data.addRow(["'19:15:00'", 0.17, 1.34, 1.50, 1.41, 0.45, 0.46]);  data.addRow(["'19:20:00'", 0.32, 1.21, 1.42, 1.35, 0.44, 0.43]);  data.addRow(["'19:25:00'", 0.79, 1.89, 1.76, 2.08, 0.44, 0.39]);  data.addRow(["'19:30:00'", 0.20, 1.02, 1.12, 1.18, 0.48, 0.44]);  data.addRow(["'19:35:00'", 0.34, 0.49, 1.00, 0.83, 0.41, 0.38]);  data.addRow(["'19:40:00'", 0.18, 0.54, 0.93, 0.81, 0.43, 0.40]);  data.addRow(["'19:45:00'", 0.25, 0.92, 1.33, 1.17, 0.56, 0.49]);  data.addRow(["'19:50:00'", 0.42, 13.68, 5.81, 9.72, 0.38, 0.35]);  data.addRow(["'19:55:00'", 0.17, 0.33, 0.79, 0.67, 0.34, 0.31]);  data.addRow(["'20:00:00'", 0.10, 0.36, 0.68, 0.56, 0.38, 0.32]);  data.addRow(["'20:05:00'", 0.14, 0.26, 0.63, 0.58, 0.38, 0.33]);  data.addRow(["'20:10:00'", 0.18, 0.29, 0.70, 0.59, 0.36, 0.32]);  data.addRow(["'20:15:00'", 0.15, 0.24, 0.66, 0.53, 0.38, 0.33]);  data.addRow(["'20:20:00'", 0.08, 0.20, 0.47, 0.38, 0.29, 0.22]);  data.addRow(["'20:25:00'", 0.16, 0.74, 0.96, 0.85, 0.38, 0.32]);  data.addRow(["'20:30:00'", 0.24, 2.17, 2.10, 2.01, 0.56, 0.52]);  data.addRow(["'20:35:00'", 0.33, 0.50, 1.01, 0.88, 0.52, 0.45]);  data.addRow(["'20:40:00'", 0.76, 0.53, 1.28, 1.13, 0.43, 0.40]);  data.addRow(["'20:45:00'", 0.19, 1.15, 1.43, 1.29, 0.55, 0.50]);  data.addRow(["'20:50:00'", 0.16, 0.67, 0.90, 0.88, 0.42, 0.34]);  data.addRow(["'20:55:00'", 0.18, 0.56, 0.79, 0.80, 0.37, 0.36]);  data.addRow(["'21:00:00'", 0.15, 0.84, 0.95, 0.93, 0.37, 0.34]);  data.addRow(["'21:05:00'", 0.14, 0.53, 0.82, 0.74, 0.36, 0.32]);  data.addRow(["'21:10:00'", 0.17, 0.71, 0.73, 0.89, 0.40, 0.37]);  data.addRow(["'21:15:00'", 0.31, 1.56, 1.32, 1.52, 0.35, 0.33]);  data.addRow(["'21:20:00'", 0.10, 0.40, 0.47, 0.55, 0.25, 0.25]);  data.addRow(["'21:25:00'", 0.18, 1.13, 1.18, 1.12, 0.33, 0.32]);  data.addRow(["'21:30:00'", 0.11, 1.08, 0.79, 1.06, 0.26, 0.23]);  data.addRow(["'21:35:00'", 0.06, 0.18, 0.33, 0.33, 0.21, 0.20]);  data.addRow(["'21:40:00'", 0.12, 0.19, 0.48, 0.42, 0.25, 0.21]);  data.addRow(["'21:45:00'", 0.05, 0.06, 0.29, 0.27, 0.18, 0.19]);  data.addRow(["'21:50:00'", 0.08, 0.11, 0.29, 0.25, 0.19, 0.16]);  data.addRow(["'21:55:00'", 0.23, 0.98, 0.81, 0.99, 0.26, 0.22]);  data.addRow(["'22:00:00'", 0.21, 0.39, 0.66, 0.65, 0.33, 0.33]);  data.addRow(["'22:05:00'", 0.11, 1.26, 0.86, 1.15, 0.27, 0.27]);  data.addRow(["'22:10:00'", 0.11, 0.11, 0.34, 0.28, 0.20, 0.18]);  data.addRow(["'22:15:00'", 0.15, 0.34, 0.65, 0.52, 0.28, 0.26]);  data.addRow(["'22:20:00'", 0.19, 0.58, 0.65, 0.71, 0.28, 0.25]);  data.addRow(["'22:25:00'", 0.16, 0.78, 1.20, 1.16, 0.24, 0.17]);  data.addRow(["'22:30:00'", 0.06, 0.50, 0.39, 0.55, 0.19, 0.21]);  data.addRow(["'22:35:00'", 0.05, 0.04, 0.21, 0.15, 0.15, 0.12]);  data.addRow(["'22:40:00'", 0.09, 0.05, 0.24, 0.18, 0.15, 0.11]);  data.addRow(["'22:45:00'", 0.07, 0.24, 0.42, 0.33, 0.22, 0.19]);  data.addRow(["'22:50:00'", 0.06, 0.07, 0.29, 0.20, 0.18, 0.14]);  data.addRow(["'22:55:00'", 0.11, 0.05, 0.33, 0.25, 0.18, 0.15]);  data.addRow(["'23:00:00'", 0.05, 0.04, 0.22, 0.16, 0.16, 0.13]);  data.addRow(["'23:05:00'", 0.05, 0.09, 0.21, 0.17, 0.15, 0.12]);  data.addRow(["'23:10:00'", 0.08, 0.14, 0.24, 0.25, 0.14, 0.14]);  data.addRow(["'23:15:00'", 0.05, 0.04, 0.21, 0.15, 0.14, 0.11]);  data.addRow(["'23:20:00'", 0.04, 0.04, 0.19, 0.16, 0.15, 0.13]);  data.addRow(["'23:25:00'", 0.09, 0.03, 0.22, 0.15, 0.14, 0.10]);  data.addRow(["'23:30:00'", 0.03, 0.03, 0.17, 0.13, 0.12, 0.10]);  data.addRow(["'23:35:00'", 0.04, 0.03, 0.19, 0.15, 0.15, 0.13]);  data.addRow(["'23:40:00'", 0.15, 0.14, 0.44, 0.34, 0.23, 0.19]);  data.addRow(["'23:45:00'", 0.04, 0.02, 0.15, 0.11, 0.12, 0.09]);  data.addRow(["'23:50:00'", 0.05, 0.02, 0.18, 0.11, 0.14, 0.09]);  data.addRow(["'23:55:00'", 0.08, 0.03, 0.20, 0.15, 0.13, 0.11]);  data.addRow(["'00:00:00'", 0.16, 4.55, 3.50, 3.25, 0.13, 0.12]);  data.addRow(["'00:05:00'", 0.03, 0.03, 0.19, 0.13, 0.14, 0.10]);  data.addRow(["'00:10:00'", 0.07, 0.02, 0.18, 0.15, 0.11, 0.11]);  data.addRow(["'00:15:00'", 0.04, 0.02, 0.15, 0.12, 0.11, 0.09]);  data.addRow(["'00:20:00'", 0.04, 0.02, 0.17, 0.12, 0.14, 0.09]);  data.addRow(["'00:25:00'", 0.08, 0.02, 0.21, 0.15, 0.13, 0.11]);  data.addRow(["'00:30:00'", 0.05, 0.02, 0.17, 0.12, 0.13, 0.10]);  data.addRow(["'00:35:00'", 0.05, 0.02, 0.20, 0.15, 0.15, 0.12]);  data.addRow(["'00:40:00'", 0.04, 0.02, 0.18, 0.12, 0.13, 0.10]);  data.addRow(["'00:45:00'", 0.09, 0.02, 0.21, 0.12, 0.13, 0.09]);  data.addRow(["'00:50:00'", 0.04, 0.02, 0.16, 0.11, 0.11, 0.09]);  data.addRow(["'00:55:00'", 0.03, 0.02, 0.15, 0.11, 0.11, 0.09]);  data.addRow(["'01:00:00'", 0.07, 0.02, 0.18, 0.13, 0.12, 0.10]);  data.addRow(["'01:05:00'", 0.03, 0.02, 0.16, 0.11, 0.12, 0.09]);  data.addRow(["'01:10:00'", 0.04, 0.02, 0.16, 0.11, 0.11, 0.09]);  data.addRow(["'01:15:00'", 0.07, 0.02, 0.17, 0.14, 0.11, 0.10]);  data.addRow(["'01:20:00'", 0.07, 0.05, 0.20, 0.14, 0.13, 0.11]);  data.addRow(["'01:25:00'", 0.09, 0.07, 0.27, 0.21, 0.19, 0.15]);  data.addRow(["'01:30:00'", 0.12, 0.06, 0.28, 0.22, 0.17, 0.14]);  data.addRow(["'01:35:00'", 0.04, 0.03, 0.18, 0.14, 0.14, 0.12]);  data.addRow(["'01:40:00'", 0.04, 0.02, 0.14, 0.12, 0.11, 0.09]);  data.addRow(["'01:45:00'", 0.09, 0.03, 0.20, 0.15, 0.12, 0.10]);  data.addRow(["'01:50:00'", 0.04, 0.02, 0.15, 0.12, 0.11, 0.09]);  data.addRow(["'01:55:00'", 0.04, 0.02, 0.13, 0.11, 0.11, 0.09]);  data.addRow(["'02:00:00'", 0.09, 0.02, 0.19, 0.13, 0.13, 0.10]);  data.addRow(["'02:05:00'", 0.03, 0.02, 0.15, 0.12, 0.11, 0.10]);  data.addRow(["'02:10:00'", 0.04, 0.02, 0.14, 0.13, 0.11, 0.10]);  data.addRow(["'02:15:00'", 0.11, 0.03, 0.21, 0.15, 0.13, 0.10]);  data.addRow(["'02:20:00'", 0.08, 1.19, 0.78, 1.04, 0.17, 0.14]);  data.addRow(["'02:25:00'", 0.04, 0.13, 0.26, 0.22, 0.13, 0.11]);  data.addRow(["'02:30:00'", 0.08, 0.39, 0.37, 0.41, 0.14, 0.11]);  data.addRow(["'02:35:00'", 0.04, 0.16, 0.31, 0.24, 0.18, 0.15]);  data.addRow(["'02:40:00'", 0.05, 0.02, 0.14, 0.11, 0.11, 0.09]);  data.addRow(["'02:45:00'", 0.11, 0.02, 0.22, 0.14, 0.13, 0.10]);  data.addRow(["'02:50:00'", 0.04, 0.03, 0.18, 0.13, 0.13, 0.10]);  data.addRow(["'02:55:00'", 0.03, 0.02, 0.17, 0.10, 0.13, 0.09]);  data.addRow(["'03:00:00'", 0.44, 0.04, 0.49, 0.36, 0.21, 0.19]);  data.addRow(["'03:05:00'", 0.14, 0.02, 0.23, 0.20, 0.14, 0.12]);  data.addRow(["'03:10:00'", 0.08, 0.52, 0.45, 0.55, 0.18, 0.14]);  data.addRow(["'03:15:00'", 0.08, 0.02, 0.19, 0.11, 0.12, 0.08]);  data.addRow(["'03:20:00'", 0.04, 0.01, 0.14, 0.09, 0.11, 0.07]);  data.addRow(["'03:25:00'", 0.04, 0.02, 0.15, 0.10, 0.11, 0.07]);  data.addRow(["'03:30:00'", 0.08, 0.02, 0.16, 0.12, 0.10, 0.08]);  data.addRow(["'03:35:00'", 0.03, 0.02, 0.14, 0.10, 0.11, 0.09]);  data.addRow(["'03:40:00'", 0.04, 0.02, 0.15, 0.11, 0.12, 0.09]);  data.addRow(["'03:45:00'", 0.07, 0.02, 0.18, 0.12, 0.12, 0.09]);  data.addRow(["'03:50:00'", 0.04, 0.02, 0.16, 0.11, 0.12, 0.09]);  data.addRow(["'03:55:00'", 0.03, 0.02, 0.14, 0.12, 0.12, 0.11]);  data.addRow(["'04:00:00'", 0.08, 0.02, 0.19, 0.11, 0.11, 0.08]);  data.addRow(["'04:05:00'", 0.03, 0.02, 0.16, 0.12, 0.13, 0.09]);  data.addRow(["'04:10:00'", 0.04, 0.02, 0.15, 0.12, 0.12, 0.10]);  data.addRow(["'04:15:00'", 0.08, 0.02, 0.19, 0.13, 0.12, 0.09]);  data.addRow(["'04:20:00'", 0.18, 0.04, 0.29, 0.21, 0.14, 0.12]);  data.addRow(["'04:25:00'", 0.09, 0.02, 0.21, 0.15, 0.13, 0.11]);  data.addRow(["'04:30:00'", 0.04, 0.02, 0.16, 0.12, 0.11, 0.10]);  data.addRow(["'04:35:00'", 0.03, 0.02, 0.15, 0.12, 0.12, 0.10]);  data.addRow(["'04:40:00'", 0.03, 0.04, 0.15, 0.16, 0.12, 0.12]);  data.addRow(["'04:45:00'", 0.10, 0.02, 0.22, 0.16, 0.15, 0.11]);  data.addRow(["'04:50:00'", 0.03, 0.02, 0.15, 0.10, 0.12, 0.09]);  data.addRow(["'04:55:00'", 0.03, 0.02, 0.15, 0.12, 0.11, 0.10]);  data.addRow(["'05:00:00'", 0.08, 0.03, 0.19, 0.13, 0.12, 0.10]);  data.addRow(["'05:05:00'", 0.03, 0.02, 0.15, 0.12, 0.12, 0.10]);  data.addRow(["'05:10:00'", 0.04, 0.02, 0.17, 0.12, 0.13, 0.10]);  data.addRow(["'05:15:00'", 0.07, 0.03, 0.18, 0.15, 0.12, 0.11]);  data.addRow(["'05:20:00'", 0.04, 0.02, 0.14, 0.12, 0.11, 0.10]);  data.addRow(["'05:25:00'", 0.03, 0.02, 0.14, 0.11, 0.12, 0.09]);  data.addRow(["'05:30:00'", 0.08, 0.02, 0.20, 0.14, 0.13, 0.10]);  data.addRow(["'05:35:00'", 0.04, 0.02, 0.15, 0.11, 0.12, 0.09]);  data.addRow(["'05:40:00'", 0.05, 0.02, 0.16, 0.12, 0.12, 0.10]);  data.addRow(["'05:45:00'", 0.08, 0.02, 0.19, 0.13, 0.13, 0.11]);  data.addRow(["'05:50:00'", 0.04, 0.02, 0.15, 0.12, 0.12, 0.09]);  data.addRow(["'05:55:00'", 0.03, 0.02, 0.16, 0.11, 0.12, 0.10]);  data.addRow(["'06:00:00'", 0.09, 0.03, 0.20, 0.15, 0.14, 0.11]);  data.addRow(["'06:05:00'", 0.03, 0.02, 0.16, 0.11, 0.12, 0.09]);  data.addRow(["'06:10:00'", 0.04, 0.07, 0.18, 0.17, 0.12, 0.12]);  data.addRow(["'06:15:00'", 0.10, 0.07, 0.26, 0.20, 0.14, 0.13]);  data.addRow(["'06:20:00'", 0.08, 0.06, 0.28, 0.19, 0.20, 0.17]);  data.addRow(["'06:25:00'", 0.04, 0.07, 0.20, 0.16, 0.13, 0.11]);  data.addRow(["'06:30:00'", 0.09, 0.05, 0.24, 0.16, 0.14, 0.12]);  data.addRow(["'06:35:00'", 0.04, 0.03, 0.16, 0.12, 0.13, 0.09]);  data.addRow(["'06:40:00'", 0.05, 0.03, 0.17, 0.12, 0.13, 0.10]);  data.addRow(["'06:45:00'", 0.09, 0.04, 0.23, 0.17, 0.16, 0.13]);  data.addRow(["'06:50:00'", 0.04, 0.02, 0.21, 0.17, 0.15, 0.12]);  data.addRow(["'06:55:00'", 0.04, 0.03, 0.18, 0.13, 0.14, 0.12]);  data.addRow(["'07:00:00'", 0.10, 0.08, 0.26, 0.20, 0.16, 0.13]);  data.addRow(["'07:05:00'", 0.04, 0.07, 0.21, 0.16, 0.15, 0.12]);  data.addRow(["'07:10:00'", 0.09, 0.33, 0.52, 0.40, 0.25, 0.22]);  data.addRow(["'07:15:00'", 0.17, 0.31, 0.67, 0.49, 0.37, 0.31]);  data.addRow(["'07:20:00'", 0.11, 0.34, 0.64, 0.52, 0.35, 0.30]);  data.addRow(["'07:25:00'", 0.20, 0.36, 0.68, 0.58, 0.31, 0.29]);  data.addRow(["'07:30:00'", 0.16, 0.25, 0.54, 0.47, 0.31, 0.28]);  data.addRow(["'07:35:00'", 0.13, 0.31, 0.72, 0.53, 0.37, 0.28]);  data.addRow(["'07:40:00'", 0.31, 2.09, 2.44, 2.03, 0.74, 0.62]);  data.addRow(["'07:45:00'", 0.59, 2.30, 2.75, 2.47, 0.84, 0.76]);  data.addRow(["'07:50:00'", 0.81, 1.08, 2.20, 1.77, 0.86, 0.76]);  data.addRow(["'07:55:00'", 1.44, 3.46, 4.39, 3.78, 0.90, 0.83]);  data.addRow(["'08:00:00'", 0.33, 1.14, 1.68, 1.56, 0.58, 0.54]);  data.addRow(["'08:05:00'", 1.09, 0.90, 1.90, 1.53, 0.56, 0.52]);  data.addRow(["'08:10:00'", 0.28, 2.39, 2.39, 2.23, 0.54, 0.48]);  data.addRow(["'08:15:00'", 0.51, 4.69, 4.71, 3.93, 0.71, 0.64]);  data.addRow(["'08:20:00'", 0.53, 3.76, 3.81, 3.34, 0.78, 0.72]);  data.addRow(["'08:25:00'", 0.89, 0.91, 1.69, 1.27, 0.42, 0.39]);  data.addRow(["'08:30:00'", 0.48, 3.41, 3.43, 3.03, 0.67, 0.61]);  data.addRow(["'08:35:00'", 1.05, 8.58, 8.13, 6.92, 1.01, 0.97]);  data.addRow(["'08:40:00'", 0.84, 10.32, 9.19, 8.24, 0.95, 0.87]);  data.addRow(["'08:45:00'", 10.57, 11.57, 17.58, 12.20, 0.89, 0.81]);  data.addRow(["'08:50:00'", 0.68, 4.97, 4.89, 4.81, 1.23, 1.18]);  data.addRow(["'08:55:00'", 0.66, 3.98, 4.43, 4.02, 1.11, 1.03]);  data.addRow(["'09:00:00'", 1.60, 7.39, 7.99, 7.02, 1.40, 1.29]);  data.addRow(["'09:05:00'", 1.04, 6.88, 6.97, 6.28, 1.29, 1.16]);  data.addRow(["'09:10:00'", 1.02, 6.68, 6.88, 6.01, 0.98, 0.91]);  data.addRow(["'09:15:00'", 2.05, 4.60, 5.91, 5.21, 1.08, 1.01]);  data.addRow(["'09:20:00'", 1.04, 4.81, 4.57, 4.72, 1.07, 1.01]);  data.addRow(["'09:25:00'", 1.46, 5.30, 6.31, 5.46, 1.29, 1.22]);  data.addRow(["'09:30:00'", 4.12, 3.38, 6.78, 5.57, 1.49, 1.41]);  data.addRow(["'09:35:00'", 8.81, 7.68, 13.02, 10.64, 1.48, 1.35]);  data.addRow(["'09:40:00'", 3.61, 7.55, 9.29, 8.00, 1.10, 1.04]);  data.addRow(["'09:45:00'", 18.20, 9.43, 20.11, 15.03, 1.49, 1.36]);  data.addRow(["'09:50:00'", 3.27, 9.08, 10.85, 9.25, 1.59, 1.47]);  data.addRow(["'09:55:00'", 5.88, 6.41, 10.35, 8.01, 0.95, 0.87]);  data.addRow(["'10:00:00'", 4.68, 5.84, 10.24, 8.26, 1.88, 1.70]);  data.addRow(["'10:05:00'", 3.00, 4.23, 6.72, 5.82, 1.45, 1.39]);  data.addRow(["'10:10:00'", 15.58, 10.77, 21.68, 15.94, 1.89, 1.78]);  data.addRow(["'10:15:00'", 9.91, 13.94, 16.61, 16.30, 1.65, 1.56]);  data.addRow(["'10:20:00'", 6.48, 6.71, 11.35, 9.37, 1.58, 1.46]);  data.addRow(["'10:25:00'", 31.57, 6.86, 34.96, 21.46, 1.62, 1.46]);  data.addRow(["'10:30:00'", 26.69, 10.67, 29.65, 21.85, 1.77, 1.67]);  data.addRow(["'10:35:00'", 4.97, 9.65, 11.54, 10.45, 1.75, 1.67]);  data.addRow(["'10:40:00'", 55.52, 11.65, 59.33, 28.47, 1.66, 1.56]);  data.addRow(["'10:45:00'", 1.66, 10.74, 10.78, 9.64, 1.86, 1.71]);  data.addRow(["'10:50:00'", 10.00, 21.19, 23.86, 20.97, 1.92, 1.79]);  data.addRow(["'10:55:00'", 91.26, 22.93, 93.45, 62.69, 1.72, 1.64]);  data.addRow(["'11:00:00'", 8.38, 18.92, 17.23, 18.42, 1.77, 1.67]);  data.addRow(["'11:05:00'", 23.14, 19.80, 31.39, 25.30, 2.15, 2.02]);  data.addRow(["'11:10:00'", 21.82, 10.79, 25.59, 18.37, 1.70, 1.58]);  data.addRow(["'11:15:00'", 33.59, 15.44, 35.19, 25.76, 2.05, 1.92]);  data.addRow(["'11:20:00'", 23.41, 18.92, 31.13, 25.96, 1.77, 1.68]);  data.addRow(["'11:25:00'", 19.78, 15.50, 26.45, 21.61, 1.85, 1.71]);  data.addRow(["'11:30:00'", 18.25, 13.99, 26.71, 20.51, 1.92, 1.73]);  data.addRow(["'11:35:00'", 22.50, 13.81, 28.83, 21.56, 1.81, 1.67]);  data.addRow(["'11:40:00'", 18.77, 20.21, 27.72, 25.02, 1.64, 1.51]);  data.addRow(["'11:45:00'", 23.15, 32.95, 33.98, 35.57, 1.58, 1.43]);  data.addRow(["'11:50:00'", 18.62, 24.83, 32.75, 27.46, 2.07, 1.86]);  data.addRow(["'11:55:00'", 17.96, 39.78, 46.09, 37.85, 1.93, 1.78]);  data.addRow(["'12:00:00'", 17.72, 5.88, 20.94, 14.64, 1.47, 1.38]);  data.addRow(["'12:05:00'", 14.94, 60.52, 44.23, 50.28, 1.83, 1.73]);  data.addRow(["'12:10:00'", 13.68, 42.93, 31.57, 37.99, 1.86, 1.78]);  data.addRow(["'12:15:00'", 31.52, 100.15, 98.36, 81.80, 1.74, 1.61]);  data.addRow(["'12:20:00'", 2.24, 20.89, 21.07, 16.77, 2.13, 2.02]);  data.addRow(["'12:25:00'", 3.45, 32.33, 20.16, 26.49, 2.42, 2.29]);  data.addRow(["'12:30:00'", 3.76, 22.76, 20.20, 18.63, 1.82, 1.76]);  data.addRow(["'12:35:00'", 4.43, 35.11, 23.39, 27.15, 1.69, 1.53]);  data.addRow(["'12:40:00'", 3.77, 7.84, 9.23, 8.18, 1.54, 1.37]);  data.addRow(["'12:45:00'", 3.55, 24.38, 16.34, 19.64, 1.46, 1.39]);  data.addRow(["'12:50:00'", 1.70, 16.95, 13.38, 14.24, 1.80, 1.77]);  data.addRow(["'12:55:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    