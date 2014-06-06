
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03'", "'2014-03-26 14:55:00'",20.54, 1.17, 14.44, 8.20, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-26 15:25:00'",1.17, 0.34, 1.22, 0.77, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-26 15:55:00'",0.95, 0.23, 0.99, 0.64, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-26 16:25:00'",0.92, 0.31, 0.99, 0.69, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-26 16:55:00'",1.20, 0.17, 1.13, 0.65, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-26 17:25:00'",0.97, 0.14, 0.96, 0.57, 0.14, 0.15]);  data.addRow(["'03'", "'2014-03-26 17:55:00'",1.21, 0.30, 1.21, 0.75, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-26 18:25:00'",0.91, 0.14, 0.96, 0.59, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-26 18:55:00'",1.28, 0.15, 1.21, 0.68, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-26 19:25:00'",1.10, 0.21, 1.12, 0.68, 0.19, 0.19]);  data.addRow(["'03'", "'2014-03-26 19:55:00'",1.21, 0.18, 1.17, 0.68, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-26 20:25:00'",0.98, 0.13, 1.00, 0.56, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-26 20:55:00'",1.26, 0.13, 1.18, 0.65, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-26 21:25:00'",1.01, 0.15, 1.00, 0.58, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-26 21:55:00'",1.71, 0.39, 1.58, 0.94, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-26 22:25:00'",0.83, 0.16, 0.87, 0.54, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-26 22:55:00'",1.44, 0.13, 1.29, 0.69, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-26 23:25:00'",0.98, 0.56, 1.02, 0.83, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-26 23:55:00'",1.54, 0.10, 1.33, 0.67, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-27 00:25:00'",1.05, 0.10, 1.01, 0.54, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-27 00:55:00'",1.69, 0.19, 1.48, 0.79, 0.16, 0.18]);  data.addRow(["'03'", "'2014-03-27 01:25:00'",1.13, 0.10, 1.09, 0.59, 0.17, 0.20]);  data.addRow(["'03'", "'2014-03-27 01:55:00'",1.29, 0.15, 1.18, 0.68, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-27 02:25:00'",1.31, 0.11, 1.19, 0.60, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-27 02:55:00'",1.49, 0.11, 1.29, 0.65, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-27 03:25:00'",1.55, 0.22, 1.38, 0.74, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 03:55:00'",1.29, 0.11, 1.17, 0.68, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-27 04:25:00'",1.61, 0.18, 1.43, 0.71, 0.18, 0.18]);  data.addRow(["'03'", "'2014-03-27 04:55:00'",1.81, 0.15, 1.55, 0.87, 0.16, 0.18]);  data.addRow(["'03'", "'2014-03-27 05:25:00'",1.72, 0.19, 1.50, 0.77, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 05:55:00'",1.22, 0.21, 1.12, 0.72, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-27 06:25:00'",1.62, 0.57, 1.61, 1.02, 0.22, 0.24]);  data.addRow(["'03'", "'2014-03-27 06:55:00'",1.38, 0.15, 1.26, 0.71, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 07:25:00'",1.21, 0.19, 1.16, 0.65, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 07:55:00'",1.33, 0.37, 1.29, 0.82, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 08:25:00'",0.94, 0.15, 0.90, 0.51, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-27 08:55:00'",1.38, 0.48, 1.38, 0.94, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 09:25:00'",1.47, 0.65, 1.54, 1.02, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 09:55:00'",1.56, 0.63, 1.55, 1.08, 0.19, 0.20]);  data.addRow(["'03'", "'2014-03-27 10:25:00'",1.27, 0.62, 1.36, 0.98, 0.20, 0.21]);  data.addRow(["'03'", "'2014-03-27 10:55:00'",1.90, 0.46, 1.78, 1.08, 0.23, 0.24]);  data.addRow(["'03'", "'2014-03-27 11:25:00'",1.25, 0.31, 1.25, 0.78, 0.18, 0.20]);  data.addRow(["'03'", "'2014-03-27 11:55:00'",1.88, 0.45, 1.80, 1.06, 0.22, 0.23]);  data.addRow(["'03'", "'2014-03-27 12:25:00'",1.25, 0.85, 1.42, 1.12, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-27 12:55:00'",1.99, 0.70, 1.92, 1.33, 0.22, 0.25]);  data.addRow(["'03'", "'2014-03-27 13:25:00'",1.38, 0.22, 1.29, 0.73, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-27 13:55:00'",1.70, 0.30, 1.55, 0.92, 0.20, 0.21]);  data.addRow(["'03'", "'2014-03-27 14:25:00'",1.41, 0.44, 1.37, 0.89, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 14:55:00'",1.38, 0.18, 1.28, 0.77, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 15:25:00'",1.69, 0.39, 1.58, 0.94, 0.19, 0.21]);  data.addRow(["'03'", "'2014-03-27 15:55:00'",1.24, 0.29, 1.25, 0.82, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-27 16:25:00'",1.80, 0.22, 1.58, 0.83, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-27 16:55:00'",1.28, 0.53, 1.31, 0.95, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-27 17:25:00'",1.68, 0.22, 1.49, 0.80, 0.17, 0.17]);  data.addRow(["'03'", "'2014-03-27 17:55:00'",1.02, 0.16, 1.00, 0.60, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-27 18:25:00'",1.71, 0.62, 1.66, 1.09, 0.22, 0.23]);  data.addRow(["'03'", "'2014-03-27 18:55:00'",1.53, 0.26, 1.43, 0.83, 0.21, 0.22]);  data.addRow(["'03'", "'2014-03-27 19:25:00'",1.43, 0.16, 1.29, 0.66, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-27 19:55:00'",0.99, 0.27, 1.02, 0.70, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 20:25:00'",1.28, 0.79, 1.42, 1.16, 0.25, 0.25]);  data.addRow(["'03'", "'2014-03-27 20:55:00'",1.13, 0.56, 1.34, 0.93, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 21:25:00'",1.02, 0.17, 1.01, 0.58, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-27 21:55:00'",0.92, 0.13, 0.96, 0.57, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-27 22:25:00'",0.96, 0.16, 0.99, 0.60, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-27 22:55:00'",0.88, 0.21, 0.93, 0.60, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-27 23:25:00'",0.65, 0.11, 0.73, 0.47, 0.15, 0.17]);  data.addRow(["'03'", "'2014-03-27 23:55:00'",1.09, 0.11, 1.06, 0.61, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-28 00:25:00'",0.33, 0.13, 0.52, 0.42, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-28 00:55:00'",1.32, 0.16, 1.21, 0.69, 0.17, 0.19]);  data.addRow(["'03'", "'2014-03-28 01:25:00'",0.34, 0.11, 0.56, 0.46, 0.18, 0.21]);  data.addRow(["'03'", "'2014-03-28 01:55:00'",0.75, 0.38, 0.87, 0.72, 0.15, 0.17]);  data.addRow(["'03'", "'2014-03-28 02:25:00'",0.57, 0.14, 0.69, 0.48, 0.14, 0.15]);  data.addRow(["'03'", "'2014-03-28 02:55:00'",0.78, 0.09, 0.82, 0.50, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-28 03:25:00'",0.67, 0.21, 0.79, 0.59, 0.18, 0.18]);  data.addRow(["'03'", "'2014-03-28 03:55:00'",0.79, 0.17, 0.85, 0.55, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-28 04:25:00'",0.42, 0.12, 0.60, 0.45, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-28 04:55:00'",0.96, 0.48, 1.13, 0.91, 0.22, 0.23]);  data.addRow(["'03'", "'2014-03-28 05:25:00'",0.42, 0.31, 0.69, 0.60, 0.19, 0.20]);  data.addRow(["'03'", "'2014-03-28 05:55:00'",0.85, 0.47, 0.98, 0.81, 0.19, 0.21]);  data.addRow(["'03'", "'2014-03-28 06:25:00'",0.45, 0.54, 0.76, 0.75, 0.19, 0.21]);  data.addRow(["'03'", "'2014-03-28 06:55:00'",0.95, 1.66, 1.25, 1.74, 0.19, 0.21]);  data.addRow(["'03'", "'2014-03-28 07:25:00'",0.55, 0.26, 0.71, 0.58, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-28 07:55:00'",0.46, 0.26, 0.67, 0.58, 0.17, 0.18]);  data.addRow(["'03'", "'2014-03-28 08:25:00'",0.47, 0.23, 0.66, 0.54, 0.18, 0.19]);  data.addRow(["'03'", "'2014-03-28 08:55:00'",0.48, 0.56, 0.78, 0.76, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-28 09:25:00'",0.54, 0.65, 0.87, 0.85, 0.19, 0.20]);  data.addRow(["'03'", "'2014-03-28 09:55:00'",0.39, 0.62, 0.78, 0.83, 0.23, 0.24]);  data.addRow(["'03'", "'2014-03-28 10:25:00'",0.57, 0.88, 1.03, 1.09, 0.25, 0.26]);  data.addRow(["'03'", "'2014-03-28 10:55:00'",0.34, 0.47, 0.67, 0.67, 0.16, 0.16]);  data.addRow(["'03'", "'2014-03-28 11:25:00'",0.50, 0.27, 0.70, 0.59, 0.16, 0.16]);  data.addRow(["'03'", "'2014-03-28 11:55:00'",0.20, 0.30, 0.51, 0.50, 0.16, 0.16]);  data.addRow(["'03'", "'2014-03-28 12:25:00'",0.14, 0.34, 0.51, 0.57, 0.20, 0.21]);  data.addRow(["'03'", "'2014-03-28 12:55:00'",0.43, 0.40, 0.68, 0.64, 0.16, 0.16]);  data.addRow(["'03'", "'2014-03-28 13:25:00'",0.09, 0.69, 0.54, 0.77, 0.19, 0.19]);  data.addRow(["'03'", "'2014-03-28 13:55:00'",0.11, 0.51, 0.54, 0.70, 0.19, 0.20]);  data.addRow(["'03'", "'2014-03-28 14:25:00'",0.10, 0.28, 0.44, 0.47, 0.14, 0.14]);  data.addRow(["'03'", "'2014-03-28 14:55:00'",0.11, 0.41, 0.44, 0.57, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-28 15:25:00'",0.09, 0.52, 0.50, 0.64, 0.14, 0.15]);  data.addRow(["'03'", "'2014-03-28 15:55:00'",0.34, 9.24, 4.29, 6.89, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-28 16:25:00'",0.10, 0.35, 0.40, 0.51, 0.14, 0.15]);  data.addRow(["'03'", "'2014-03-28 16:55:00'",0.20, 0.58, 0.59, 0.73, 0.19, 0.19]);  data.addRow(["'03'", "'2014-03-28 17:25:00'",0.08, 0.20, 0.38, 0.41, 0.15, 0.16]);  data.addRow(["'03'", "'2014-03-28 17:55:00'",0.08, 0.14, 0.35, 0.35, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-28 18:25:00'",0.07, 0.14, 0.33, 0.33, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 18:55:00'",0.08, 0.09, 0.32, 0.30, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 19:25:00'",0.13, 0.17, 0.38, 0.38, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-28 19:55:00'",0.17, 0.14, 0.40, 0.37, 0.12, 0.14]);  data.addRow(["'03'", "'2014-03-28 20:25:00'",0.15, 0.11, 0.38, 0.33, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 20:55:00'",0.07, 0.09, 0.30, 0.31, 0.11, 0.13]);  data.addRow(["'03'", "'2014-03-28 21:25:00'",0.09, 0.09, 0.32, 0.31, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-28 21:55:00'",0.07, 0.09, 0.30, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-28 22:25:00'",0.07, 0.09, 0.32, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 22:55:00'",0.11, 0.29, 0.67, 0.69, 0.40, 0.42]);  data.addRow(["'03'", "'2014-03-28 23:25:00'",0.15, 0.11, 0.37, 0.34, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-28 23:55:00'",0.07, 0.10, 0.32, 0.32, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 00:25:00'",0.17, 0.49, 0.54, 0.59, 0.14, 0.14]);  data.addRow(["'03'", "'2014-03-29 00:55:00'",0.32, 0.22, 0.50, 0.47, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 01:25:00'",0.16, 0.09, 0.39, 0.34, 0.14, 0.16]);  data.addRow(["'03'", "'2014-03-29 01:55:00'",0.07, 0.08, 0.31, 0.29, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 02:25:00'",0.07, 0.08, 0.31, 0.30, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 02:55:00'",0.09, 0.08, 0.31, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 03:25:00'",0.16, 0.08, 0.40, 0.33, 0.15, 0.15]);  data.addRow(["'03'", "'2014-03-29 03:55:00'",0.07, 0.08, 0.30, 0.29, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 04:25:00'",0.15, 0.08, 0.37, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 04:55:00'",0.08, 0.21, 0.38, 0.43, 0.16, 0.17]);  data.addRow(["'03'", "'2014-03-29 05:25:00'",0.07, 0.11, 0.31, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 05:55:00'",0.07, 0.08, 0.29, 0.28, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 06:25:00'",0.16, 0.08, 0.38, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 06:55:00'",0.07, 0.09, 0.29, 0.28, 0.11, 0.11]);  data.addRow(["'03'", "'2014-03-29 07:25:00'",0.08, 0.12, 0.32, 0.33, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 07:55:00'",0.07, 0.08, 0.30, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 08:25:00'",0.10, 0.11, 0.33, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 08:55:00'",0.07, 0.16, 0.34, 0.34, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 09:25:00'",0.22, 0.12, 0.43, 0.37, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 09:55:00'",0.07, 0.09, 0.30, 0.30, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 10:25:00'",0.15, 0.11, 0.38, 0.32, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 10:55:00'",0.22, 0.21, 0.46, 0.40, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 11:25:00'",0.07, 0.09, 0.32, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 11:55:00'",0.07, 0.11, 0.30, 0.31, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 12:25:00'",0.23, 0.09, 0.42, 0.33, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 12:55:00'",0.47, 0.10, 0.59, 0.44, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 13:25:00'",0.08, 0.12, 0.34, 0.32, 0.12, 0.13]);  data.addRow(["'03'", "'2014-03-29 13:55:00'",0.08, 0.09, 0.32, 0.31, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-29 14:25:00'",0.07, 0.08, 0.30, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 14:55:00'",0.07, 0.08, 0.29, 0.26, 0.11, 0.11]);  data.addRow(["'03'", "'2014-03-29 15:25:00'",0.15, 0.10, 0.36, 0.31, 0.12, 0.12]);  data.addRow(["'03'", "'2014-03-29 15:55:00'",0.07, 0.17, 0.31, 0.36, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 16:25:00'",0.17, 0.08, 0.36, 0.30, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 16:55:00'",0.15, 0.90, 0.50, 0.87, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-29 17:25:00'",0.07, 0.10, 0.30, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 17:55:00'",0.06, 0.13, 0.31, 0.33, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 18:25:00'",0.08, 0.11, 0.32, 0.31, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 18:55:00'",0.06, 0.08, 0.29, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 19:25:00'",0.06, 0.11, 0.30, 0.30, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 19:55:00'",0.15, 0.22, 0.41, 0.41, 0.13, 0.14]);  data.addRow(["'03'", "'2014-03-29 20:25:00'",0.07, 0.08, 0.29, 0.29, 0.10, 0.12]);  data.addRow(["'03'", "'2014-03-29 20:55:00'",0.14, 0.08, 0.36, 0.29, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 21:25:00'",0.08, 0.10, 0.31, 0.31, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 21:55:00'",0.07, 0.08, 0.29, 0.28, 0.11, 0.12]);  data.addRow(["'03'", "'2014-03-29 22:25:00'",0.04, 0.07, 0.16, 0.16, 0.06, 0.06]);  data.addRow(["'03'", "'2014-03-29 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 13:25:00'",0.15, 0.22, 0.37, 0.39, 0.12, 0.14]);  data.addRow(["'04'", "'2014-04-01 13:55:00'",0.08, 0.33, 0.43, 0.48, 0.14, 0.14]);  data.addRow(["'04'", "'2014-04-01 14:25:00'",0.08, 0.45, 0.48, 0.57, 0.16, 0.17]);  data.addRow(["'04'", "'2014-04-01 14:55:00'",0.12, 0.43, 0.49, 0.57, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-01 15:25:00'",0.16, 0.30, 0.48, 0.49, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-01 15:55:00'",0.08, 0.30, 0.41, 0.46, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-01 16:25:00'",0.11, 0.22, 0.42, 0.43, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-01 16:55:00'",0.08, 0.20, 0.36, 0.38, 0.13, 0.14]);  data.addRow(["'04'", "'2014-04-01 17:25:00'",0.08, 0.35, 0.46, 0.49, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-01 17:55:00'",0.07, 0.10, 0.32, 0.32, 0.13, 0.13]);  data.addRow(["'04'", "'2014-04-01 18:25:00'",0.08, 0.24, 0.38, 0.41, 0.14, 0.14]);  data.addRow(["'04'", "'2014-04-01 18:55:00'",0.08, 0.30, 0.40, 0.47, 0.14, 0.16]);  data.addRow(["'04'", "'2014-04-01 19:25:00'",0.17, 0.40, 0.58, 0.58, 0.17, 0.17]);  data.addRow(["'04'", "'2014-04-01 19:55:00'",0.39, 0.14, 0.58, 0.40, 0.15, 0.15]);  data.addRow(["'04'", "'2014-04-01 20:25:00'",0.31, 0.14, 0.50, 0.37, 0.12, 0.14]);  data.addRow(["'04'", "'2014-04-01 20:55:00'",0.49, 0.27, 0.67, 0.57, 0.13, 0.14]);  data.addRow(["'04'", "'2014-04-01 21:25:00'",0.31, 0.21, 0.52, 0.42, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-01 21:55:00'",0.07, 0.20, 0.35, 0.37, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-01 22:25:00'",0.16, 0.11, 0.38, 0.32, 0.11, 0.13]);  data.addRow(["'04'", "'2014-04-01 22:55:00'",0.08, 0.16, 0.35, 0.36, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-01 23:25:00'",0.09, 0.45, 0.46, 0.57, 0.13, 0.14]);  data.addRow(["'04'", "'2014-04-01 23:55:00'",0.08, 0.19, 0.37, 0.40, 0.15, 0.16]);  data.addRow(["'04'", "'2014-04-02 00:25:00'",0.59, 0.34, 0.73, 0.65, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-02 00:55:00'",1.07, 0.18, 1.04, 0.70, 0.12, 0.12]);  data.addRow(["'04'", "'2014-04-02 01:25:00'",0.08, 0.19, 0.36, 0.40, 0.14, 0.17]);  data.addRow(["'04'", "'2014-04-02 01:55:00'",0.11, 0.11, 0.36, 0.31, 0.13, 0.13]);  data.addRow(["'04'", "'2014-04-02 02:25:00'",0.12, 0.30, 0.43, 0.46, 0.13, 0.14]);  data.addRow(["'04'", "'2014-04-02 02:55:00'",0.15, 0.09, 0.35, 0.30, 0.11, 0.12]);  data.addRow(["'04'", "'2014-04-02 03:25:00'",0.13, 0.22, 0.43, 0.42, 0.13, 0.13]);  data.addRow(["'04'", "'2014-04-02 03:55:00'",2.51, 0.15, 2.00, 1.10, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-02 04:25:00'",1.15, 0.17, 1.09, 0.74, 0.16, 0.16]);  data.addRow(["'04'", "'2014-04-02 04:55:00'",0.55, 0.13, 0.67, 0.48, 0.14, 0.14]);  data.addRow(["'04'", "'2014-04-02 05:25:00'",3.11, 0.16, 2.40, 1.37, 0.12, 0.13]);  data.addRow(["'04'", "'2014-04-02 05:55:00'",1.65, 0.28, 1.46, 0.95, 0.14, 0.14]);  data.addRow(["'04'", "'2014-04-02 06:25:00'",1.65, 0.17, 1.42, 0.90, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-02 06:55:00'",0.53, 0.38, 0.75, 0.66, 0.15, 0.15]);  data.addRow(["'04'", "'2014-04-02 07:25:00'",0.46, 0.19, 0.61, 0.50, 0.13, 0.14]);  data.addRow(["'04'", "'2014-04-02 07:55:00'",0.14, 0.13, 0.37, 0.32, 0.12, 0.12]);  data.addRow(["'04'", "'2014-04-02 08:25:00'",0.47, 0.33, 0.66, 0.57, 0.14, 0.16]);  data.addRow(["'04'", "'2014-04-02 08:55:00'",0.17, 0.33, 0.52, 0.53, 0.17, 0.17]);  data.addRow(["'04'", "'2014-04-02 09:25:00'",0.48, 0.46, 0.78, 0.71, 0.19, 0.20]);  data.addRow(["'04'", "'2014-04-02 09:55:00'",0.19, 0.54, 0.73, 0.86, 0.36, 0.41]);  data.addRow(["'04'", "'2014-04-02 10:25:00'",0.08, 0.27, 0.40, 0.44, 0.14, 0.15]);  data.addRow(["'04'", "'2014-04-02 10:55:00'",0.08, 0.35, 0.44, 0.52, 0.17, 0.17]);  data.addRow(["'04'", "'2014-04-02 11:25:00'",0.14, 0.74, 0.66, 0.85, 0.20, 0.20]);  data.addRow(["'04'", "'2014-04-02 11:55:00'",1.66, 0.62, 1.66, 1.15, 0.18, 0.18]);  data.addRow(["'04'", "'2014-04-02 12:25:00'",0.26, 1.03, 0.83, 1.09, 0.18, 0.20]);  data.addRow(["'04'", "'2014-04-02 12:55:00'",1.88, 0.32, 1.71, 1.11, 0.16, 0.17]);  data.addRow(["'04'", "'2014-04-02 13:25:00'",0.10, 0.77, 0.61, 0.84, 0.18, 0.18]);  data.addRow(["'04'", "'2014-04-02 13:55:00'",0.09, 0.31, 0.46, 0.49, 0.16, 0.16]);  data.addRow(["'04'", "'2014-04-02 14:25:00'",0.07, 0.27, 0.32, 0.36, 0.09, 0.10]); 
	    var graphtitle="FIU to HPCf Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    