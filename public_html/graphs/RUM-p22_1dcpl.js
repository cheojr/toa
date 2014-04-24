
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'13:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:15:00'", 0.00, 0.05, 0.04, 1.10, 0.02, 1.08]);  data.addRow(["'13:20:00'", 0.00, 0.00, 0.02, 0.04, 0.01, 0.03]);  data.addRow(["'13:25:00'", 0.00, 0.00, 0.03, 0.06, 0.01, 0.02]);  data.addRow(["'13:30:00'", 0.01, 0.00, 0.03, 0.06, 0.00, 0.01]);  data.addRow(["'13:35:00'", 0.00, 0.05, 0.03, 1.16, 0.01, 1.12]);  data.addRow(["'13:40:00'", 0.00, 0.00, 0.02, 0.01, 0.00, 0.01]);  data.addRow(["'13:45:00'", 0.01, 0.01, 0.05, 0.17, 0.00, 0.02]);  data.addRow(["'13:50:00'", 0.00, 0.00, 0.02, 0.02, 0.00, 0.01]);  data.addRow(["'13:55:00'", 0.01, 0.01, 0.02, 0.09, 0.00, 0.02]);  data.addRow(["'14:00:00'", 0.00, 0.00, 0.03, 0.03, 0.01, 0.01]);  data.addRow(["'14:05:00'", 0.00, 0.00, 0.05, 0.03, 0.01, 0.02]);  data.addRow(["'14:10:00'", 0.01, 0.00, 0.05, 0.04, 0.01, 0.03]);  data.addRow(["'14:15:00'", 0.01, 0.01, 0.09, 0.07, 0.03, 0.04]);  data.addRow(["'14:20:00'", 0.00, 0.00, 0.02, 0.03, 0.01, 0.02]);  data.addRow(["'14:25:00'", 0.00, 0.05, 0.01, 1.38, 0.01, 1.38]);  data.addRow(["'14:30:00'", 0.04, 0.08, 0.21, 0.77, 0.08, 0.61]);  data.addRow(["'14:35:00'", 0.03, 0.08, 0.20, 1.43, 0.08, 1.36]);  data.addRow(["'14:40:00'", 0.00, 0.04, 0.00, 1.10, 0.00, 1.10]);  data.addRow(["'14:45:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'14:50:00'", 0.00, 0.00, 0.00, 0.04, 0.00, 0.01]);  data.addRow(["'14:55:00'", 0.00, 0.00, 0.01, 0.01, 0.00, 0.01]);  data.addRow(["'15:00:00'", 0.03, 0.00, 0.03, 0.03, 0.00, 0.01]);  data.addRow(["'15:05:00'", 0.00, 0.00, 0.02, 0.04, 0.01, 0.03]);  data.addRow(["'15:10:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.02]);  data.addRow(["'15:15:00'", 0.00, 0.00, 0.03, 0.06, 0.00, 0.01]);  data.addRow(["'15:20:00'", 0.00, 0.00, 0.00, 0.03, 0.00, 0.03]);  data.addRow(["'15:25:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.02]);  data.addRow(["'15:30:00'", 0.00, 0.03, 0.00, 0.75, 0.00, 0.75]);  data.addRow(["'15:35:00'", 0.00, 0.06, 0.04, 1.40, 0.02, 1.38]);  data.addRow(["'15:40:00'", 0.10, 0.08, 0.62, 0.46, 0.24, 0.24]);  data.addRow(["'15:45:00'", 0.13, 0.12, 0.80, 0.72, 0.35, 0.34]);  data.addRow(["'15:50:00'", 0.07, 0.07, 0.47, 0.40, 0.19, 0.19]);  data.addRow(["'15:55:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.01]);  data.addRow(["'16:00:00'", 0.01, 0.00, 0.02, 0.01, 0.00, 0.01]);  data.addRow(["'16:05:00'", 0.00, 0.05, 0.01, 1.38, 0.01, 1.38]);  data.addRow(["'16:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'16:15:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'16:20:00'", 0.09, 0.06, 0.54, 0.84, 0.30, 0.61]);  data.addRow(["'16:25:00'", 0.01, 0.00, 0.06, 0.05, 0.03, 0.03]);  data.addRow(["'16:30:00'", 0.00, 0.00, 0.03, 0.03, 0.01, 0.02]);  data.addRow(["'16:35:00'", 0.00, 0.08, 0.01, 2.15, 0.01, 2.15]);  data.addRow(["'16:40:00'", 0.07, 0.03, 0.25, 0.42, 0.00, 0.01]);  data.addRow(["'16:45:00'", 0.04, 0.07, 0.27, 0.83, 0.12, 0.72]);  data.addRow(["'16:50:00'", 0.05, 0.06, 0.35, 0.42, 0.13, 0.13]);  data.addRow(["'16:55:00'", 0.05, 0.00, 0.17, 0.03, 0.00, 0.01]);  data.addRow(["'17:00:00'", 0.02, 0.08, 0.16, 1.58, 0.06, 1.45]);  data.addRow(["'17:05:00'", 0.01, 0.00, 0.06, 0.08, 0.00, 0.01]);  data.addRow(["'17:10:00'", 0.01, 0.00, 0.04, 0.06, 0.00, 0.01]);  data.addRow(["'17:15:00'", 0.07, 0.02, 0.39, 0.32, 0.01, 0.01]);  data.addRow(["'17:20:00'", 2.79, 2.71, 18.63, 16.70, 8.51, 9.56]);  data.addRow(["'17:25:00'", 3.04, 2.83, 21.36, 16.87, 9.46, 9.39]);  data.addRow(["'17:30:00'", 2.07, 2.07, 16.52, 13.39, 7.43, 8.05]);  data.addRow(["'17:35:00'", 0.81, 0.78, 7.77, 7.17, 4.34, 5.26]);  data.addRow(["'17:40:00'", 0.38, 0.39, 5.12, 4.83, 3.63, 3.89]);  data.addRow(["'17:45:00'", 0.33, 0.24, 3.74, 2.88, 2.53, 2.25]);  data.addRow(["'17:50:00'", 0.08, 0.13, 1.03, 2.24, 0.75, 2.00]);  data.addRow(["'17:55:00'", 0.12, 0.16, 1.00, 2.32, 0.60, 2.02]);  data.addRow(["'18:00:00'", 0.06, 0.07, 0.46, 0.63, 0.24, 0.24]);  data.addRow(["'18:05:00'", 0.01, 0.01, 0.11, 0.12, 0.09, 0.08]);  data.addRow(["'18:10:00'", 0.01, 0.09, 0.12, 2.10, 0.09, 2.08]);  data.addRow(["'18:15:00'", 0.03, 0.05, 0.13, 1.04, 0.06, 0.95]);  data.addRow(["'18:20:00'", 0.02, 0.25, 0.18, 0.23, 0.02, 0.04]);  data.addRow(["'18:25:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.01]);  data.addRow(["'18:30:00'", 0.00, 0.03, 0.01, 0.70, 0.00, 0.69]);  data.addRow(["'18:35:00'", 0.00, 0.00, 0.02, 0.02, 0.01, 0.01]);  data.addRow(["'18:40:00'", 0.01, 0.05, 0.07, 1.30, 0.03, 1.29]);  data.addRow(["'18:45:00'", 0.02, 0.26, 0.15, 4.22, 0.06, 4.13]);  data.addRow(["'18:50:00'", 0.07, 0.09, 0.39, 1.82, 0.24, 1.68]);  data.addRow(["'18:55:00'", 0.04, 0.39, 0.36, 0.48, 0.08, 0.10]);  data.addRow(["'19:00:00'", 0.02, 0.03, 0.12, 0.15, 0.06, 0.09]);  data.addRow(["'19:05:00'", 0.19, 0.05, 0.40, 0.40, 0.12, 0.13]);  data.addRow(["'19:10:00'", 0.03, 0.02, 0.23, 0.21, 0.08, 0.09]);  data.addRow(["'19:15:00'", 0.05, 0.02, 0.22, 0.18, 0.08, 0.08]);  data.addRow(["'19:20:00'", 3.98, 0.49, 4.29, 5.81, 0.06, 1.43]);  data.addRow(["'19:25:00'", 4.23, 0.29, 3.90, 3.15, 0.05, 0.06]);  data.addRow(["'19:30:00'", 0.57, 0.24, 0.96, 1.40, 0.04, 0.04]);  data.addRow(["'19:35:00'", 0.01, 0.04, 0.11, 0.77, 0.03, 0.63]);  data.addRow(["'19:40:00'", 0.01, 0.17, 0.10, 3.99, 0.04, 3.91]);  data.addRow(["'19:45:00'", 0.13, 0.07, 0.81, 0.83, 0.46, 0.44]);  data.addRow(["'19:50:00'", 0.09, 0.23, 0.51, 1.46, 0.25, 1.10]);  data.addRow(["'19:55:00'", 0.21, 0.02, 0.44, 0.23, 0.10, 0.09]);  data.addRow(["'20:00:00'", 0.07, 0.06, 0.46, 0.44, 0.20, 0.20]);  data.addRow(["'20:05:00'", 0.01, 0.05, 0.06, 1.18, 0.03, 1.15]);  data.addRow(["'20:10:00'", 0.02, 0.01, 0.08, 0.11, 0.02, 0.03]);  data.addRow(["'20:15:00'", 0.01, 0.04, 0.10, 0.98, 0.02, 0.92]);  data.addRow(["'20:20:00'", 0.04, 0.05, 0.15, 0.22, 0.03, 0.04]);  data.addRow(["'20:25:00'", 0.10, 0.12, 0.49, 0.55, 0.13, 0.13]);  data.addRow(["'20:30:00'", 0.03, 0.01, 0.09, 0.12, 0.01, 0.02]);  data.addRow(["'20:35:00'", 0.01, 0.01, 0.08, 0.14, 0.01, 0.02]);  data.addRow(["'20:40:00'", 0.01, 0.00, 0.04, 0.06, 0.01, 0.02]);  data.addRow(["'20:45:00'", 0.03, 0.01, 0.09, 0.10, 0.01, 0.02]);  data.addRow(["'20:50:00'", 0.08, 0.01, 0.21, 0.16, 0.01, 0.03]);  data.addRow(["'20:55:00'", 0.01, 0.05, 0.06, 0.92, 0.01, 0.85]);  data.addRow(["'21:00:00'", 0.03, 0.01, 0.08, 0.12, 0.01, 0.05]);  data.addRow(["'21:05:00'", 0.02, 0.01, 0.08, 0.10, 0.01, 0.02]);  data.addRow(["'21:10:00'", 0.01, 0.00, 0.03, 0.05, 0.00, 0.01]);  data.addRow(["'21:15:00'", 0.01, 0.01, 0.06, 0.13, 0.01, 0.02]);  data.addRow(["'21:20:00'", 0.00, 0.06, 0.02, 1.49, 0.02, 1.48]);  data.addRow(["'21:25:00'", 0.01, 0.10, 0.05, 2.46, 0.02, 2.41]);  data.addRow(["'21:30:00'", 0.12, 0.04, 0.36, 0.32, 0.16, 0.16]);  data.addRow(["'21:35:00'", 0.05, 0.50, 0.44, 1.89, 0.14, 1.50]);  data.addRow(["'21:40:00'", 0.01, 0.00, 0.04, 0.04, 0.01, 0.01]);  data.addRow(["'21:45:00'", 0.02, 0.34, 0.22, 0.38, 0.01, 0.02]);  data.addRow(["'21:50:00'", 0.55, 0.16, 1.26, 2.53, 0.56, 1.95]);  data.addRow(["'21:55:00'", 0.57, 0.21, 2.68, 2.41, 1.45, 1.36]);  data.addRow(["'22:00:00'", 0.37, 0.17, 2.03, 1.97, 1.13, 1.11]);  data.addRow(["'22:05:00'", 0.16, 0.08, 0.97, 1.00, 0.57, 0.51]);  data.addRow(["'22:10:00'", 0.15, 0.48, 1.08, 1.30, 0.54, 0.52]);  data.addRow(["'22:15:00'", 0.16, 0.09, 0.94, 0.97, 0.57, 0.53]);  data.addRow(["'22:20:00'", 0.20, 0.07, 1.04, 0.93, 0.42, 0.41]);  data.addRow(["'22:25:00'", 0.32, 0.10, 1.42, 1.42, 0.39, 0.38]);  data.addRow(["'22:30:00'", 0.11, 0.07, 0.73, 0.79, 0.40, 0.41]);  data.addRow(["'22:35:00'", 0.34, 0.11, 1.75, 1.77, 0.39, 0.39]);  data.addRow(["'22:40:00'", 0.69, 0.08, 2.46, 1.10, 0.41, 0.41]);  data.addRow(["'22:45:00'", 0.34, 0.12, 1.12, 1.97, 0.38, 0.40]);  data.addRow(["'22:50:00'", 0.29, 0.11, 0.83, 2.19, 0.41, 1.76]);  data.addRow(["'22:55:00'", 0.11, 0.15, 0.68, 3.05, 0.41, 2.73]);  data.addRow(["'23:00:00'", 0.16, 0.06, 0.73, 0.75, 0.38, 0.38]);  data.addRow(["'23:05:00'", 0.16, 0.10, 1.01, 1.02, 0.57, 0.55]);  data.addRow(["'23:10:00'", 0.13, 0.07, 0.74, 0.78, 0.43, 0.39]);  data.addRow(["'23:15:00'", 0.19, 0.41, 0.93, 1.01, 0.37, 0.37]);  data.addRow(["'23:20:00'", 0.44, 0.10, 1.03, 1.04, 0.35, 0.35]);  data.addRow(["'23:25:00'", 0.09, 0.06, 0.61, 0.71, 0.34, 0.35]);  data.addRow(["'23:30:00'", 0.10, 0.06, 0.62, 0.69, 0.35, 0.36]);  data.addRow(["'23:35:00'", 0.12, 0.06, 0.63, 0.67, 0.36, 0.33]);  data.addRow(["'23:40:00'", 0.24, 0.06, 0.87, 0.82, 0.31, 0.31]);  data.addRow(["'23:45:00'", 0.09, 0.06, 0.53, 0.73, 0.28, 0.39]);  data.addRow(["'23:50:00'", 0.12, 0.06, 0.67, 0.74, 0.37, 0.38]);  data.addRow(["'23:55:00'", 0.10, 0.09, 0.51, 1.53, 0.27, 1.28]);  data.addRow(["'00:00:00'", 0.09, 0.06, 0.58, 0.72, 0.27, 0.30]);  data.addRow(["'00:05:00'", 0.08, 0.10, 0.49, 1.92, 0.27, 1.66]);  data.addRow(["'00:10:00'", 0.11, 0.08, 0.57, 1.15, 0.31, 0.90]);  data.addRow(["'00:15:00'", 0.17, 0.07, 0.63, 0.65, 0.31, 0.31]);  data.addRow(["'00:20:00'", 0.08, 0.04, 0.43, 0.50, 0.25, 0.27]);  data.addRow(["'00:25:00'", 0.13, 0.19, 0.61, 4.01, 0.33, 3.72]);  data.addRow(["'00:30:00'", 0.19, 0.09, 0.74, 1.70, 0.28, 1.32]);  data.addRow(["'00:35:00'", 0.14, 0.05, 0.56, 0.61, 0.27, 0.29]);  data.addRow(["'00:40:00'", 0.10, 0.05, 0.50, 0.56, 0.26, 0.28]);  data.addRow(["'00:45:00'", 0.07, 0.04, 0.41, 0.46, 0.23, 0.24]);  data.addRow(["'00:50:00'", 0.05, 0.09, 0.38, 1.86, 0.22, 1.66]);  data.addRow(["'00:55:00'", 0.05, 0.03, 0.35, 0.35, 0.21, 0.20]);  data.addRow(["'01:00:00'", 0.05, 0.08, 0.36, 1.70, 0.21, 1.54]);  data.addRow(["'01:05:00'", 0.05, 0.12, 0.35, 2.40, 0.23, 2.21]);  data.addRow(["'01:10:00'", 0.05, 0.03, 0.37, 0.36, 0.21, 0.19]);  data.addRow(["'01:15:00'", 0.05, 0.03, 0.32, 0.36, 0.20, 0.20]);  data.addRow(["'01:20:00'", 0.23, 0.03, 0.48, 0.47, 0.20, 0.20]);  data.addRow(["'01:25:00'", 0.08, 0.08, 0.42, 1.73, 0.22, 1.54]);  data.addRow(["'01:30:00'", 0.06, 0.06, 0.44, 1.12, 0.25, 0.86]);  data.addRow(["'01:35:00'", 0.06, 0.03, 0.31, 0.36, 0.17, 0.17]);  data.addRow(["'01:40:00'", 0.02, 0.01, 0.13, 0.15, 0.07, 0.07]);  data.addRow(["'01:45:00'", 0.03, 0.07, 0.14, 1.53, 0.09, 1.44]);  data.addRow(["'01:50:00'", 0.01, 0.01, 0.08, 0.13, 0.05, 0.08]);  data.addRow(["'01:55:00'", 0.02, 0.11, 0.14, 2.58, 0.09, 2.52]);  data.addRow(["'02:00:00'", 0.04, 0.03, 0.25, 0.35, 0.11, 0.12]);  data.addRow(["'02:05:00'", 0.06, 0.05, 0.38, 0.44, 0.17, 0.16]);  data.addRow(["'02:10:00'", 0.02, 0.06, 0.16, 1.25, 0.07, 1.11]);  data.addRow(["'02:15:00'", 0.02, 0.01, 0.15, 0.14, 0.06, 0.06]);  data.addRow(["'02:20:00'", 0.02, 0.01, 0.14, 0.22, 0.07, 0.07]);  data.addRow(["'02:25:00'", 0.01, 0.01, 0.12, 0.19, 0.06, 0.07]);  data.addRow(["'02:30:00'", 0.02, 0.01, 0.12, 0.17, 0.07, 0.07]);  data.addRow(["'02:35:00'", 0.02, 0.01, 0.11, 0.12, 0.06, 0.07]);  data.addRow(["'02:40:00'", 0.02, 0.09, 0.17, 2.11, 0.09, 2.04]);  data.addRow(["'02:45:00'", 0.02, 0.01, 0.15, 0.16, 0.08, 0.09]);  data.addRow(["'02:50:00'", 0.02, 0.01, 0.14, 0.14, 0.08, 0.08]);  data.addRow(["'02:55:00'", 0.02, 0.07, 0.22, 1.54, 0.14, 1.49]);  data.addRow(["'03:00:00'", 0.02, 0.01, 0.17, 0.14, 0.11, 0.08]);  data.addRow(["'03:05:00'", 0.02, 0.01, 0.11, 0.11, 0.07, 0.06]);  data.addRow(["'03:10:00'", 0.01, 0.01, 0.12, 0.12, 0.06, 0.07]);  data.addRow(["'03:15:00'", 0.01, 0.01, 0.11, 0.13, 0.06, 0.07]);  data.addRow(["'03:20:00'", 0.02, 0.04, 0.12, 0.84, 0.06, 0.80]);  data.addRow(["'03:25:00'", 0.02, 0.01, 0.11, 0.11, 0.06, 0.07]);  data.addRow(["'03:30:00'", 0.02, 0.01, 0.15, 0.11, 0.07, 0.07]);  data.addRow(["'03:35:00'", 0.01, 0.01, 0.10, 0.08, 0.05, 0.05]);  data.addRow(["'03:40:00'", 0.01, 0.09, 0.10, 2.27, 0.06, 2.23]);  data.addRow(["'03:45:00'", 0.01, 0.01, 0.07, 0.08, 0.05, 0.05]);  data.addRow(["'03:50:00'", 0.03, 0.02, 0.21, 0.20, 0.11, 0.12]);  data.addRow(["'03:55:00'", 0.01, 0.01, 0.08, 0.10, 0.05, 0.06]);  data.addRow(["'04:00:00'", 0.01, 0.01, 0.08, 0.09, 0.05, 0.05]);  data.addRow(["'04:05:00'", 0.01, 0.01, 0.08, 0.10, 0.05, 0.06]);  data.addRow(["'04:10:00'", 0.01, 0.07, 0.09, 1.56, 0.07, 1.52]);  data.addRow(["'04:15:00'", 0.01, 0.06, 0.07, 1.39, 0.05, 1.35]);  data.addRow(["'04:20:00'", 0.05, 0.05, 0.35, 0.31, 0.19, 0.18]);  data.addRow(["'04:25:00'", 0.03, 0.03, 0.22, 0.18, 0.13, 0.12]);  data.addRow(["'04:30:00'", 0.01, 0.01, 0.07, 0.08, 0.05, 0.05]);  data.addRow(["'04:35:00'", 0.01, 0.01, 0.07, 0.09, 0.04, 0.06]);  data.addRow(["'04:40:00'", 0.01, 0.01, 0.07, 0.08, 0.04, 0.05]);  data.addRow(["'04:45:00'", 0.01, 0.05, 0.08, 1.25, 0.05, 1.22]);  data.addRow(["'04:50:00'", 0.01, 0.06, 0.09, 1.48, 0.06, 1.45]);  data.addRow(["'04:55:00'", 0.01, 0.01, 0.07, 0.08, 0.05, 0.05]);  data.addRow(["'05:00:00'", 0.01, 0.01, 0.08, 0.09, 0.05, 0.05]);  data.addRow(["'05:05:00'", 0.01, 0.03, 0.07, 0.71, 0.05, 0.67]);  data.addRow(["'05:10:00'", 0.01, 0.06, 0.10, 1.50, 0.07, 1.46]);  data.addRow(["'05:15:00'", 0.02, 0.01, 0.14, 0.14, 0.08, 0.08]);  data.addRow(["'05:20:00'", 0.02, 0.02, 0.18, 0.17, 0.10, 0.10]);  data.addRow(["'05:25:00'", 0.03, 0.09, 0.16, 2.07, 0.11, 2.01]);  data.addRow(["'05:30:00'", 0.02, 0.01, 0.16, 0.14, 0.10, 0.09]);  data.addRow(["'05:35:00'", 0.01, 0.01, 0.07, 0.09, 0.05, 0.05]);  data.addRow(["'05:40:00'", 0.01, 0.01, 0.07, 0.08, 0.04, 0.05]);  data.addRow(["'05:45:00'", 0.01, 0.01, 0.09, 0.08, 0.05, 0.05]);  data.addRow(["'05:50:00'", 0.01, 0.01, 0.09, 0.19, 0.06, 0.15]);  data.addRow(["'05:55:00'", 0.01, 0.01, 0.09, 0.09, 0.06, 0.05]);  data.addRow(["'06:00:00'", 0.01, 0.06, 0.10, 1.56, 0.06, 1.52]);  data.addRow(["'06:05:00'", 0.03, 0.08, 0.26, 1.69, 0.17, 1.58]);  data.addRow(["'06:10:00'", 0.04, 0.08, 0.27, 1.58, 0.16, 1.46]);  data.addRow(["'06:15:00'", 0.01, 0.01, 0.12, 0.12, 0.07, 0.06]);  data.addRow(["'06:20:00'", 0.01, 0.01, 0.08, 0.12, 0.05, 0.07]);  data.addRow(["'06:25:00'", 0.02, 0.01, 0.13, 0.12, 0.06, 0.06]);  data.addRow(["'06:30:00'", 0.00, 0.00, 0.03, 0.03, 0.01, 0.02]);  data.addRow(["'06:35:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'06:40:00'", 0.00, 0.08, 0.01, 2.00, 0.01, 2.00]);  data.addRow(["'06:45:00'", 0.00, 0.10, 0.01, 2.43, 0.01, 2.43]);  data.addRow(["'06:50:00'", 0.00, 0.02, 0.02, 0.53, 0.01, 0.53]);  data.addRow(["'06:55:00'", 0.00, 0.02, 0.00, 0.60, 0.00, 0.60]);  data.addRow(["'07:00:00'", 0.00, 0.00, 0.01, 0.02, 0.01, 0.02]);  data.addRow(["'07:05:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'07:10:00'", 0.00, 0.00, 0.04, 0.03, 0.02, 0.02]);  data.addRow(["'07:15:00'", 0.00, 0.01, 0.00, 0.26, 0.00, 0.26]);  data.addRow(["'07:20:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'07:25:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'07:30:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'07:35:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.00]);  data.addRow(["'07:40:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'07:45:00'", 0.00, 0.05, 0.01, 1.38, 0.01, 1.38]);  data.addRow(["'07:50:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'07:55:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'08:00:00'", 0.00, 0.03, 0.02, 0.88, 0.01, 0.87]);  data.addRow(["'08:05:00'", 0.00, 0.00, 0.02, 0.04, 0.01, 0.02]);  data.addRow(["'08:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'08:15:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.00]);  data.addRow(["'08:20:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'08:25:00'", 0.00, 0.03, 0.00, 0.76, 0.00, 0.76]);  data.addRow(["'08:30:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.00]);  data.addRow(["'08:35:00'", 0.00, 0.03, 0.00, 0.85, 0.00, 0.85]);  data.addRow(["'08:40:00'", 0.01, 0.00, 0.02, 0.02, 0.00, 0.01]);  data.addRow(["'08:45:00'", 0.00, 0.11, 0.03, 2.79, 0.02, 2.78]);  data.addRow(["'08:50:00'", 0.01, 0.04, 0.06, 0.86, 0.03, 0.85]);  data.addRow(["'08:55:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'09:00:00'", 0.01, 0.00, 0.01, 0.02, 0.00, 0.00]);  data.addRow(["'09:05:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'09:10:00'", 0.00, 0.00, 0.01, 0.01, 0.00, 0.01]);  data.addRow(["'09:15:00'", 0.01, 0.00, 0.03, 0.03, 0.01, 0.02]);  data.addRow(["'09:20:00'", 0.01, 0.11, 0.04, 2.81, 0.03, 2.80]);  data.addRow(["'09:25:00'", 0.01, 0.01, 0.03, 0.05, 0.02, 0.03]);  data.addRow(["'09:30:00'", 0.01, 0.01, 0.04, 0.05, 0.02, 0.03]);  data.addRow(["'09:35:00'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.02]);  data.addRow(["'09:40:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.01]);  data.addRow(["'09:45:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'09:50:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'09:55:00'", 0.00, 0.00, 0.00, 0.06, 0.00, 0.06]);  data.addRow(["'10:00:00'", 0.00, 0.00, 0.01, 0.02, 0.00, 0.01]);  data.addRow(["'10:05:00'", 0.00, 0.00, 0.01, 0.01, 0.01, 0.01]);  data.addRow(["'10:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'10:15:00'", 0.00, 0.08, 0.02, 2.00, 0.02, 2.00]);  data.addRow(["'10:20:00'", 0.06, 0.04, 0.36, 0.26, 0.14, 0.14]);  data.addRow(["'10:25:00'", 0.05, 0.04, 0.34, 0.23, 0.13, 0.14]);  data.addRow(["'10:30:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'10:35:00'", 0.00, 0.00, 0.00, 0.01, 0.00, 0.01]);  data.addRow(["'10:40:00'", 0.00, 0.00, 0.00, 0.02, 0.00, 0.01]);  data.addRow(["'10:45:00'", 0.00, 0.03, 0.02, 0.64, 0.02, 0.64]);  data.addRow(["'10:50:00'", 0.06, 0.10, 0.39, 1.71, 0.21, 1.57]);  data.addRow(["'10:55:00'", 0.02, 0.04, 0.12, 0.87, 0.08, 0.83]);  data.addRow(["'11:00:00'", 0.09, 0.13, 0.23, 2.97, 0.11, 2.88]);  data.addRow(["'11:05:00'", 0.00, 0.00, 0.02, 0.02, 0.01, 0.02]);  data.addRow(["'11:10:00'", 0.05, 0.06, 0.35, 0.28, 0.14, 0.14]);  data.addRow(["'11:15:00'", 0.00, 0.00, 0.02, 0.02, 0.01, 0.02]);  data.addRow(["'11:20:00'", 0.00, 0.01, 0.01, 0.31, 0.01, 0.31]);  data.addRow(["'11:25:00'", 0.03, 0.07, 0.18, 1.45, 0.11, 1.39]);  data.addRow(["'11:30:00'", 0.00, 0.00, 0.03, 0.03, 0.01, 0.02]);  data.addRow(["'11:35:00'", 0.03, 0.08, 0.21, 1.57, 0.09, 1.50]);  data.addRow(["'11:40:00'", 0.04, 0.04, 0.32, 0.25, 0.13, 0.13]);  data.addRow(["'11:45:00'", 0.04, 0.04, 0.34, 0.22, 0.13, 0.12]);  data.addRow(["'11:50:00'", 0.01, 0.00, 0.05, 0.04, 0.02, 0.03]);  data.addRow(["'11:55:00'", 0.01, 0.00, 0.06, 0.03, 0.02, 0.02]);  data.addRow(["'12:00:00'", 0.01, 0.00, 0.06, 0.04, 0.02, 0.03]);  data.addRow(["'12:05:00'", 0.00, 0.00, 0.05, 0.04, 0.02, 0.02]);  data.addRow(["'12:10:00'", 0.01, 0.00, 0.04, 0.04, 0.02, 0.02]);  data.addRow(["'12:15:00'", 0.01, 0.00, 0.06, 0.04, 0.02, 0.02]);  data.addRow(["'12:20:00'", 0.01, 0.06, 0.08, 1.46, 0.04, 1.45]);  data.addRow(["'12:25:00'", 0.01, 0.00, 0.04, 0.05, 0.01, 0.03]);  data.addRow(["'12:30:00'", 0.00, 0.00, 0.04, 0.03, 0.01, 0.02]);  data.addRow(["'12:35:00'", 0.01, 0.00, 0.03, 0.03, 0.01, 0.02]);  data.addRow(["'12:40:00'", 0.00, 0.00, 0.04, 0.03, 0.02, 0.02]);  data.addRow(["'12:45:00'", 0.01, 0.00, 0.04, 0.03, 0.01, 0.02]);  data.addRow(["'12:50:00'", 0.00, 0.04, 0.04, 1.02, 0.02, 1.01]);  data.addRow(["'12:55:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="22 Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    