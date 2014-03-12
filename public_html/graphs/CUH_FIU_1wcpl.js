
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 1.67, 0.33, 1.89, 1.23, 0.27, 0.25]);  data.addRow(["'02'", 7.53, 2.92, 7.69, 5.61, 0.60, 0.54]);  data.addRow(["'02'", 3.27, 10.70, 8.38, 9.84, 0.93, 0.84]);  data.addRow(["'02'", 36.22, 14.65, 30.94, 35.14, 0.74, 0.69]);  data.addRow(["'02'", 2.61, 9.92, 8.30, 8.42, 0.68, 0.61]);  data.addRow(["'02'", 0.93, 1.66, 2.31, 2.26, 0.66, 0.63]);  data.addRow(["'02'", 19.29, 2.88, 15.61, 3.01, 0.67, 0.64]);  data.addRow(["'02'", 93.83, 5.19, 67.61, 61.52, 0.64, 0.61]);  data.addRow(["'02'", 18.79, 1.98, 14.37, 17.55, 0.43, 0.43]);  data.addRow(["'02'", 0.27, 1.05, 1.24, 1.40, 0.36, 0.38]);  data.addRow(["'02'", 0.17, 1.00, 0.76, 0.98, 0.22, 0.24]);  data.addRow(["'02'", 0.10, 0.34, 0.38, 0.43, 0.14, 0.17]);  data.addRow(["'02'", 0.06, 0.07, 0.20, 0.20, 0.10, 0.13]);  data.addRow(["'02'", 0.14, 0.01, 0.19, 0.17, 0.08, 0.11]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.08, 0.03, 0.06]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.08, 0.05, 0.07]);  data.addRow(["'02'", 0.01, 0.00, 0.02, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.06, 0.05, 0.06]);  data.addRow(["'02'", 0.21, 0.01, 0.21, 0.20, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.02, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.02, 0.01, 0.06, 0.07, 0.04, 0.06]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.03, 0.01, 0.09, 0.10, 0.07, 0.09]);  data.addRow(["'02'", 0.02, 0.00, 0.04, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.07, 0.08, 0.05, 0.07]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.07, 0.05, 0.07]);  data.addRow(["'02'", 0.02, 0.00, 0.04, 0.05, 0.02, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.08, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.01, 0.07, 0.08, 0.05, 0.05]);  data.addRow(["'02'", 0.03, 0.02, 0.27, 0.27, 0.12, 0.15]);  data.addRow(["'02'", 0.03, 0.02, 0.21, 0.18, 0.06, 0.08]);  data.addRow(["'02'", 0.03, 0.01, 0.08, 0.13, 0.06, 0.12]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.05, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.05, 0.02, 0.04]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.07, 0.04, 0.06]);  data.addRow(["'02'", 0.00, 0.01, 0.03, 0.09, 0.02, 0.04]);  data.addRow(["'02'", 0.02, 0.02, 0.08, 0.09, 0.05, 0.07]);  data.addRow(["'02'", 1.80, 0.08, 1.53, 0.92, 0.18, 0.19]);  data.addRow(["'02'", 11.10, 0.37, 8.07, 4.64, 0.06, 0.08]);  data.addRow(["'02'", 8.40, 0.22, 6.05, 3.33, 0.09, 0.11]);  data.addRow(["'02'", 0.03, 0.03, 0.12, 0.12, 0.09, 0.09]);  data.addRow(["'02'", 0.02, 0.09, 0.13, 0.15, 0.08, 0.09]);  data.addRow(["'02'", 0.03, 0.04, 0.12, 0.14, 0.10, 0.11]);  data.addRow(["'02'", 0.05, 0.51, 0.31, 0.49, 0.13, 0.15]);  data.addRow(["'02'", 0.05, 0.14, 0.24, 0.27, 0.16, 0.15]);  data.addRow(["'02'", 0.12, 0.14, 0.23, 0.25, 0.10, 0.12]);  data.addRow(["'02'", 0.06, 0.04, 0.17, 0.16, 0.12, 0.12]);  data.addRow(["'02'", 0.18, 0.70, 0.58, 0.73, 0.18, 0.18]);  data.addRow(["'02'", 0.07, 0.98, 0.57, 0.90, 0.17, 0.18]);  data.addRow(["'02'", 0.30, 0.29, 0.49, 0.46, 0.18, 0.20]);  data.addRow(["'02'", 0.11, 0.42, 0.46, 0.52, 0.23, 0.23]);  data.addRow(["'02'", 9.87, 0.48, 7.42, 4.21, 0.12, 0.14]);  data.addRow(["'02'", 0.04, 0.16, 0.22, 0.25, 0.14, 0.15]);  data.addRow(["'02'", 0.05, 0.15, 0.21, 0.29, 0.10, 0.09]);  data.addRow(["'02'", 0.05, 0.03, 0.14, 0.13, 0.10, 0.10]);  data.addRow(["'02'", 0.10, 0.13, 0.17, 0.21, 0.07, 0.09]);  data.addRow(["'02'", 0.04, 0.31, 0.27, 0.31, 0.10, 0.10]);  data.addRow(["'02'", 0.01, 0.02, 0.05, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.42, 0.02, 0.37, 0.25, 0.07, 0.07]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.02, 0.01, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.01, 0.04, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.02, 0.07, 0.13, 0.05, 0.11]);  data.addRow(["'02'", 0.04, 0.03, 0.13, 0.11, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.01, 0.07, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.20, 0.01, 0.19, 0.12, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.02, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.07, 0.09, 0.06, 0.08]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.06, 0.01, 0.09, 0.09, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.02, 0.00, 0.06, 0.06, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.02, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.00, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.00, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.01, 0.04, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.00, 0.04, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.01, 0.00, 0.06, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.04, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.07, 0.04, 0.07]);  data.addRow(["'02'", 0.00, 0.00, 0.02, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.02, 0.01, 0.07, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.00, 0.03, 0.05, 0.03, 0.05]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.07, 0.04, 0.06]);  data.addRow(["'02'", 0.03, 0.07, 0.35, 0.11, 0.32, 0.06]);  data.addRow(["'02'", 0.02, 0.09, 0.12, 0.15, 0.08, 0.08]);  data.addRow(["'02'", 0.00, 0.02, 0.03, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.07, 0.04, 0.06]);  data.addRow(["'02'", 0.01, 0.29, 0.16, 0.24, 0.03, 0.04]);  data.addRow(["'02'", 0.11, 0.03, 0.20, 0.19, 0.09, 0.12]);  data.addRow(["'02'", 0.03, 0.02, 0.06, 0.07, 0.03, 0.05]);  data.addRow(["'02'", 0.42, 0.01, 0.36, 0.27, 0.05, 0.07]);  data.addRow(["'02'", 0.05, 0.18, 0.15, 0.22, 0.05, 0.08]);  data.addRow(["'02'", 0.10, 0.14, 0.22, 0.26, 0.11, 0.14]);  data.addRow(["'02'", 0.06, 0.09, 0.12, 0.15, 0.04, 0.07]);  data.addRow(["'02'", 0.03, 0.02, 0.08, 0.09, 0.05, 0.06]);  data.addRow(["'02'", 0.17, 0.11, 0.24, 0.20, 0.07, 0.08]);  data.addRow(["'02'", 0.14, 0.05, 0.21, 0.19, 0.09, 0.10]);  data.addRow(["'02'", 0.01, 0.05, 0.10, 0.11, 0.06, 0.07]);  data.addRow(["'02'", 0.14, 0.02, 0.18, 0.16, 0.08, 0.09]);  data.addRow(["'02'", 0.05, 0.04, 0.12, 0.11, 0.06, 0.07]);  data.addRow(["'02'", 0.03, 0.02, 0.07, 0.09, 0.05, 0.07]);  data.addRow(["'02'", 0.02, 0.01, 0.06, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.13, 0.01, 0.15, 0.12, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.00, 0.04, 0.04, 0.02, 0.04]);  data.addRow(["'02'", 0.03, 0.00, 0.06, 0.06, 0.04, 0.05]);  data.addRow(["'02'", 0.00, 0.00, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.38, 0.01, 0.31, 0.15, 0.05, 0.07]);  data.addRow(["'02'", 0.02, 0.01, 0.04, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.02, 0.00, 0.05, 0.06, 0.04, 0.05]);  data.addRow(["'02'", 0.02, 0.00, 0.05, 0.06, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.01, 0.08, 0.08, 0.07, 0.08]);  data.addRow(["'02'", 0.06, 0.00, 0.08, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.17, 0.01, 0.17, 0.12, 0.06, 0.06]);  data.addRow(["'02'", 0.01, 0.00, 0.05, 0.04, 0.04, 0.03]);  data.addRow(["'02'", 0.02, 0.00, 0.07, 0.06, 0.06, 0.06]);  data.addRow(["'02'", 0.07, 0.00, 0.07, 0.07, 0.02, 0.03]);  data.addRow(["'02'", 0.11, 0.01, 0.19, 0.17, 0.09, 0.11]);  data.addRow(["'02'", 0.02, 0.00, 0.04, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.04, 0.01, 0.16, 0.16, 0.08, 0.10]);  data.addRow(["'02'", 0.08, 0.02, 0.22, 0.21, 0.08, 0.09]);  data.addRow(["'02'", 0.04, 0.02, 0.20, 0.19, 0.09, 0.10]);  data.addRow(["'02'", 0.03, 0.01, 0.07, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.03, 0.07, 0.15, 0.14, 0.11, 0.10]);  data.addRow(["'02'", 0.07, 0.01, 0.12, 0.09, 0.06, 0.06]);  data.addRow(["'02'", 1.23, 0.16, 1.04, 0.98, 0.13, 0.13]);  data.addRow(["'02'", 0.29, 0.85, 0.94, 1.07, 0.54, 0.58]);  data.addRow(["'02'", 0.85, 7.00, 2.60, 5.39, 0.34, 0.33]);  data.addRow(["'02'", 2.82, 1.94, 4.21, 3.41, 0.54, 0.51]);  data.addRow(["'02'", 5.53, 53.41, 16.14, 39.25, 0.79, 0.71]);  data.addRow(["'02'", 4.07, 4.77, 5.96, 5.52, 0.95, 0.91]);  data.addRow(["'02'", 11.42, 6.36, 12.33, 10.62, 1.32, 1.24]);  data.addRow(["'02'", 12.23, 3.50, 12.77, 10.48, 1.77, 1.74]);  data.addRow(["'02'", 14.29, 6.34, 15.97, 11.90, 1.85, 1.79]);  data.addRow(["'02'", 11.26, 4.02, 11.62, 9.41, 1.61, 1.60]);  data.addRow(["'02'", 11.76, 5.17, 12.04, 9.76, 1.49, 1.46]);  data.addRow(["'02'", 11.83, 2.35, 11.20, 7.94, 1.55, 1.48]);  data.addRow(["'02'", 10.68, 1.87, 10.07, 6.83, 1.58, 1.52]);  data.addRow(["'02'", 4.40, 6.94, 8.05, 8.54, 1.76, 1.71]);  data.addRow(["'02'", 2.51, 21.51, 12.23, 17.72, 1.93, 1.84]);  data.addRow(["'02'", 6.51, 4.35, 7.34, 5.87, 1.08, 0.99]);  data.addRow(["'02'", 14.51, 4.33, 13.43, 9.49, 1.26, 1.15]);  data.addRow(["'02'", 6.49, 4.36, 9.00, 7.27, 1.38, 1.30]);  data.addRow(["'02'", 36.16, 3.93, 28.66, 15.15, 1.58, 1.45]);  data.addRow(["'02'", 10.51, 2.91, 10.67, 7.71, 1.66, 1.50]);  data.addRow(["'02'", 5.53, 9.26, 10.13, 10.21, 1.44, 1.33]);  data.addRow(["'02'", 28.46, 2.76, 22.42, 16.83, 0.69, 0.64]);  data.addRow(["'02'", 14.27, 5.85, 15.16, 9.77, 0.62, 0.60]);  data.addRow(["'02'", 87.73, 2.40, 62.53, 30.76, 0.66, 0.61]);  data.addRow(["'02'", 0.82, 0.67, 1.82, 1.67, 0.45, 0.45]);  data.addRow(["'02'", 7.50, 0.48, 5.78, 5.37, 0.31, 0.30]);  data.addRow(["'02'", 0.26, 1.63, 1.29, 1.64, 0.44, 0.42]);  data.addRow(["'02'", 0.36, 0.78, 0.91, 1.00, 0.31, 0.32]);  data.addRow(["'02'", 0.30, 0.26, 0.67, 0.61, 0.30, 0.30]);  data.addRow(["'02'", 11.36, 0.37, 8.27, 6.58, 0.20, 0.20]);  data.addRow(["'02'", 0.14, 0.25, 0.45, 0.39, 0.20, 0.20]);  data.addRow(["'02'", 0.82, 0.07, 0.73, 0.58, 0.14, 0.15]);  data.addRow(["'02'", 0.03, 0.03, 0.17, 0.17, 0.13, 0.15]);  data.addRow(["'02'", 0.44, 0.44, 0.57, 0.57, 0.11, 0.11]);  data.addRow(["'02'", 0.18, 0.03, 0.27, 0.25, 0.13, 0.13]);  data.addRow(["'02'", 0.03, 0.02, 0.10, 0.10, 0.08, 0.08]);  data.addRow(["'02'", 0.04, 0.02, 0.15, 0.14, 0.12, 0.11]);  data.addRow(["'02'", 0.02, 0.02, 0.10, 0.09, 0.08, 0.08]);  data.addRow(["'02'", 0.25, 0.02, 0.28, 0.20, 0.10, 0.10]);  data.addRow(["'02'", 0.22, 0.03, 0.25, 0.18, 0.09, 0.09]);  data.addRow(["'02'", 0.06, 0.02, 0.15, 0.16, 0.11, 0.11]);  data.addRow(["'02'", 0.04, 0.02, 0.12, 0.12, 0.08, 0.09]);  data.addRow(["'02'", 0.30, 0.02, 0.32, 0.21, 0.11, 0.11]);  data.addRow(["'02'", 0.05, 0.03, 0.14, 0.30, 0.10, 0.09]);  data.addRow(["'02'", 11.06, 0.39, 7.98, 7.70, 0.13, 0.12]);  data.addRow(["'02'", 0.03, 0.02, 0.13, 0.13, 0.10, 0.11]);  data.addRow(["'02'", 0.62, 0.03, 0.56, 0.36, 0.12, 0.13]);  data.addRow(["'02'", 0.16, 0.78, 0.67, 0.70, 0.13, 0.13]);  data.addRow(["'02'", 0.22, 0.16, 0.59, 0.51, 0.35, 0.33]);  data.addRow(["'02'", 0.35, 1.19, 1.47, 1.71, 0.78, 0.75]);  data.addRow(["'02'", 0.78, 1.02, 2.12, 1.98, 0.99, 0.94]);  data.addRow(["'02'", 9.99, 3.22, 10.49, 7.26, 1.52, 1.46]);  data.addRow(["'02'", 13.36, 6.67, 15.86, 13.13, 1.82, 1.69]);  data.addRow(["'02'", 2.70, 17.53, 16.24, 16.44, 1.84, 1.72]);  data.addRow(["'02'", 20.37, 4.29, 29.51, 19.15, 2.25, 2.20]);  data.addRow(["'02'", 16.61, 7.19, 21.67, 14.27, 1.90, 1.77]);  data.addRow(["'02'", 6.41, 4.74, 8.77, 7.09, 1.61, 1.51]);  data.addRow(["'02'", 3.91, 4.09, 6.48, 5.46, 1.50, 1.41]);  data.addRow(["'02'", 11.92, 4.45, 13.12, 5.56, 1.53, 1.45]);  data.addRow(["'02'", 10.50, 5.16, 12.41, 7.11, 1.51, 1.37]);  data.addRow(["'02'", 33.98, 22.27, 33.96, 27.17, 1.67, 1.55]);  data.addRow(["'02'", 40.34, 5.01, 41.97, 9.40, 1.51, 1.40]);  data.addRow(["'02'", 2.66, 4.51, 6.73, 6.39, 1.59, 1.48]);  data.addRow(["'02'", 36.37, 8.91, 34.93, 9.28, 1.84, 1.75]);  data.addRow(["'02'", 18.01, 12.42, 22.68, 13.44, 2.20, 2.07]);  data.addRow(["'02'", 21.22, 36.39, 31.25, 27.55, 1.91, 1.79]);  data.addRow(["'02'", 1.90, 3.45, 5.09, 4.93, 1.57, 1.45]);  data.addRow(["'02'", 11.68, 4.96, 13.70, 5.45, 1.17, 1.08]);  data.addRow(["'02'", 1.60, 1.18, 2.75, 2.41, 0.79, 0.76]);  data.addRow(["'02'", 5.07, 10.78, 8.75, 10.01, 0.49, 0.48]);  data.addRow(["'02'", 3.14, 1.70, 3.33, 2.80, 0.49, 0.46]);  data.addRow(["'02'", 1.98, 2.85, 3.02, 3.23, 0.42, 0.42]);  data.addRow(["'02'", 0.23, 0.20, 0.70, 0.61, 0.41, 0.38]);  data.addRow(["'02'", 0.38, 0.99, 1.30, 1.27, 0.39, 0.37]);  data.addRow(["'02'", 1.55, 1.29, 2.56, 2.07, 0.42, 0.41]);  data.addRow(["'02'", 1.49, 0.41, 1.60, 1.50, 0.39, 0.38]);  data.addRow(["'02'", 0.41, 0.11, 0.66, 0.62, 0.35, 0.33]);  data.addRow(["'02'", 0.07, 0.62, 0.48, 0.62, 0.20, 0.18]);  data.addRow(["'02'", 2.80, 0.16, 2.51, 2.17, 0.24, 0.23]);  data.addRow(["'02'", 0.11, 0.05, 0.25, 0.22, 0.17, 0.16]);  data.addRow(["'02'", 0.04, 0.03, 0.22, 0.21, 0.19, 0.18]);  data.addRow(["'02'", 0.28, 0.61, 0.44, 0.64, 0.15, 0.15]);  data.addRow(["'02'", 0.22, 0.14, 0.35, 0.38, 0.17, 0.17]);  data.addRow(["'02'", 0.05, 1.22, 0.40, 1.04, 0.17, 0.16]);  data.addRow(["'02'", 0.04, 0.02, 0.18, 0.17, 0.16, 0.14]);  data.addRow(["'02'", 0.23, 0.02, 0.26, 0.23, 0.11, 0.11]);  data.addRow(["'02'", 0.04, 0.01, 0.15, 0.15, 0.13, 0.13]);  data.addRow(["'02'", 0.04, 0.01, 0.13, 0.13, 0.12, 0.12]);  data.addRow(["'02'", 0.24, 0.02, 0.30, 0.21, 0.14, 0.14]);  data.addRow(["'02'", 0.08, 0.02, 0.16, 0.14, 0.11, 0.11]);  data.addRow(["'02'", 0.03, 0.01, 0.17, 0.14, 0.15, 0.12]);  data.addRow(["'02'", 0.04, 0.01, 0.18, 0.13, 0.16, 0.12]);  data.addRow(["'02'", 0.04, 0.01, 0.15, 0.14, 0.13, 0.13]);  data.addRow(["'02'", 0.13, 0.13, 0.28, 0.21, 0.11, 0.11]);  data.addRow(["'02'", 0.23, 0.03, 0.30, 0.25, 0.16, 0.16]);  data.addRow(["'02'", 0.13, 0.06, 0.25, 0.24, 0.15, 0.16]);  data.addRow(["'02'", 0.28, 0.44, 0.74, 0.73, 0.35, 0.35]);  data.addRow(["'02'", 3.67, 6.48, 5.55, 6.74, 1.01, 1.01]);  data.addRow(["'02'", 2.24, 1.51, 3.33, 2.95, 0.98, 0.95]);  data.addRow(["'02'", 10.74, 2.25, 10.37, 7.51, 1.21, 1.17]);  data.addRow(["'02'", 2.29, 3.30, 4.99, 5.01, 1.52, 1.45]);  data.addRow(["'02'", 3.31, 3.68, 6.17, 5.98, 1.71, 1.67]);  data.addRow(["'02'", 11.27, 6.77, 14.23, 12.04, 1.96, 1.86]);  data.addRow(["'02'", 8.66, 6.55, 12.19, 9.96, 1.90, 1.81]);  data.addRow(["'02'", 12.05, 5.31, 16.76, 10.31, 1.71, 1.61]);  data.addRow(["'02'", 8.52, 19.38, 14.91, 18.39, 1.75, 1.66]);  data.addRow(["'02'", 6.01, 3.07, 7.56, 6.17, 1.62, 1.51]);  data.addRow(["'02'", 8.78, 6.04, 9.96, 9.38, 1.33, 1.25]);  data.addRow(["'02'", 4.38, 4.17, 6.79, 6.34, 1.55, 1.46]);  data.addRow(["'02'", 14.00, 4.86, 14.69, 11.55, 1.60, 1.51]);  data.addRow(["'02'", 4.85, 4.56, 8.09, 7.53, 1.86, 1.77]);  data.addRow(["'02'", 3.82, 4.96, 7.52, 6.94, 1.60, 1.51]);  data.addRow(["'02'", 6.65, 16.09, 12.40, 15.54, 1.40, 1.34]);  data.addRow(["'02'", 4.20, 8.67, 8.97, 9.22, 1.44, 1.37]);  data.addRow(["'02'", 4.29, 2.23, 5.98, 4.70, 1.25, 1.16]);  data.addRow(["'02'", 1.09, 3.05, 3.56, 3.36, 0.92, 0.87]);  data.addRow(["'02'", 0.56, 1.16, 1.79, 1.79, 0.73, 0.72]);  data.addRow(["'02'", 0.42, 1.04, 1.47, 1.62, 0.65, 0.61]);  data.addRow(["'02'", 0.83, 1.98, 2.58, 2.33, 0.57, 0.57]);  data.addRow(["'02'", 0.46, 0.59, 1.09, 1.02, 0.44, 0.42]);  data.addRow(["'02'", 0.51, 2.93, 2.06, 2.71, 0.44, 0.46]);  data.addRow(["'02'", 0.49, 11.73, 5.24, 8.54, 0.39, 0.39]);  data.addRow(["'02'", 0.24, 0.91, 0.86, 1.03, 0.32, 0.32]);  data.addRow(["'02'", 1.72, 1.11, 2.10, 1.99, 0.38, 0.39]);  data.addRow(["'02'", 0.42, 0.26, 0.73, 0.65, 0.29, 0.30]);  data.addRow(["'02'", 1.33, 0.25, 1.49, 0.50, 0.23, 0.25]);  data.addRow(["'02'", 0.19, 0.22, 0.49, 0.44, 0.24, 0.24]);  data.addRow(["'02'", 0.49, 0.40, 0.78, 0.62, 0.19, 0.20]);  data.addRow(["'02'", 0.14, 0.10, 0.31, 0.31, 0.14, 0.17]);  data.addRow(["'02'", 0.04, 0.03, 0.18, 0.19, 0.12, 0.14]);  data.addRow(["'02'", 7.12, 0.03, 6.08, 0.22, 0.15, 0.17]);  data.addRow(["'02'", 5.38, 0.02, 4.56, 0.12, 0.09, 0.10]);  data.addRow(["'02'", 0.05, 0.02, 0.16, 0.16, 0.12, 0.13]);  data.addRow(["'02'", 0.51, 0.02, 0.51, 0.11, 0.08, 0.09]);  data.addRow(["'02'", 1.23, 0.07, 1.08, 0.87, 0.13, 0.14]);  data.addRow(["'02'", 0.13, 0.04, 0.23, 0.21, 0.15, 0.16]);  data.addRow(["'02'", 0.11, 0.03, 0.22, 0.22, 0.16, 0.18]);  data.addRow(["'02'", 7.02, 0.13, 5.04, 2.25, 0.10, 0.11]);  data.addRow(["'02'", 0.16, 0.02, 0.23, 0.19, 0.11, 0.13]);  data.addRow(["'02'", 0.12, 0.02, 0.22, 0.18, 0.09, 0.11]);  data.addRow(["'02'", 3.53, 0.02, 2.66, 0.18, 0.14, 0.15]);  data.addRow(["'02'", 0.11, 0.02, 0.18, 0.17, 0.10, 0.12]);  data.addRow(["'02'", 0.09, 0.03, 0.25, 0.24, 0.15, 0.16]);  data.addRow(["'02'", 0.16, 3.56, 1.48, 2.62, 0.15, 0.16]);  data.addRow(["'02'", 0.41, 0.78, 1.02, 0.99, 0.31, 0.31]);  data.addRow(["'02'", 0.61, 2.16, 2.30, 2.44, 0.84, 0.82]);  data.addRow(["'02'", 1.50, 1.75, 3.11, 2.86, 0.97, 0.94]);  data.addRow(["'02'", 2.65, 5.05, 6.05, 6.36, 1.71, 1.61]);  data.addRow(["'02'", 8.74, 9.02, 10.18, 10.79, 1.28, 1.20]);  data.addRow(["'02'", 3.43, 5.41, 6.18, 6.56, 1.32, 1.29]);  data.addRow(["'02'", 9.23, 3.63, 9.60, 7.32, 1.37, 1.32]);  data.addRow(["'02'", 12.15, 4.90, 12.70, 10.40, 1.74, 1.64]);  data.addRow(["'02'", 115.08, 7.26, 85.14, 36.97, 1.34, 1.27]);  data.addRow(["'02'", 29.86, 6.29, 26.26, 22.01, 1.48, 1.45]);  data.addRow(["'02'", 118.62, 7.36, 88.42, 38.08, 1.67, 1.61]);  data.addRow(["'02'", 12.45, 7.88, 14.76, 12.92, 1.64, 1.57]);  data.addRow(["'02'", 104.49, 6.89, 78.67, 37.76, 1.61, 1.48]);  data.addRow(["'02'", 41.79, 10.89, 37.89, 22.59, 1.52, 1.45]);  data.addRow(["'02'", 2.97, 9.51, 8.96, 9.80, 1.65, 1.54]);  data.addRow(["'02'", 4.50, 9.29, 10.35, 11.10, 2.16, 2.01]);  data.addRow(["'02'", 8.52, 10.58, 14.03, 13.88, 1.83, 1.68]);  data.addRow(["'02'", 6.60, 24.29, 17.60, 21.94, 1.93, 1.90]);  data.addRow(["'02'", 7.16, 7.99, 11.15, 10.19, 1.43, 1.34]);  data.addRow(["'02'", 4.03, 3.78, 5.99, 5.58, 1.18, 1.10]);  data.addRow(["'02'", 1.80, 3.21, 3.47, 3.76, 0.74, 0.69]);  data.addRow(["'02'", 1.06, 0.57, 1.82, 1.54, 0.62, 0.58]);  data.addRow(["'02'", 1.99, 7.30, 7.60, 7.09, 0.67, 0.64]);  data.addRow(["'02'", 34.50, 0.81, 24.74, 11.23, 0.39, 0.38]);  data.addRow(["'02'", 35.86, 0.92, 25.86, 11.47, 0.45, 0.42]);  data.addRow(["'02'", 53.59, 3.06, 38.87, 18.77, 0.31, 0.33]);  data.addRow(["'02'", 2.71, 0.68, 2.69, 2.05, 0.43, 0.43]);  data.addRow(["'02'", 1.49, 1.23, 2.04, 1.94, 0.44, 0.45]);  data.addRow(["'02'", 10.90, 0.40, 8.70, 3.44, 0.26, 0.29]);  data.addRow(["'02'", 1.30, 0.34, 2.27, 1.67, 0.28, 0.31]);  data.addRow(["'02'", 0.87, 0.37, 1.29, 0.87, 0.36, 0.37]);  data.addRow(["'02'", 0.41, 0.50, 0.73, 0.73, 0.20, 0.22]);  data.addRow(["'02'", 0.16, 0.05, 0.40, 0.33, 0.23, 0.23]);  data.addRow(["'02'", 4.97, 0.12, 3.71, 2.26, 0.14, 0.17]);  data.addRow(["'02'", 2.41, 0.06, 1.93, 0.73, 0.19, 0.22]);  data.addRow(["'02'", 0.14, 0.03, 0.28, 0.25, 0.16, 0.17]);  data.addRow(["'02'", 0.27, 0.03, 0.38, 0.34, 0.17, 0.18]);  data.addRow(["'02'", 0.89, 0.04, 0.76, 0.49, 0.13, 0.14]);  data.addRow(["'02'", 0.89, 0.04, 0.79, 0.60, 0.17, 0.18]);  data.addRow(["'02'", 1.44, 0.07, 1.17, 1.13, 0.13, 0.14]);  data.addRow(["'02'", 0.17, 0.03, 0.29, 0.27, 0.15, 0.17]);  data.addRow(["'02'", 0.03, 0.03, 0.17, 0.18, 0.13, 0.15]);  data.addRow(["'02'", 0.04, 0.02, 0.20, 0.20, 0.16, 0.17]);  data.addRow(["'02'", 0.06, 0.02, 0.18, 0.18, 0.12, 0.14]);  data.addRow(["'02'", 0.08, 0.02, 0.21, 0.21, 0.15, 0.16]);  data.addRow(["'02'", 0.17, 0.02, 0.24, 0.21, 0.12, 0.14]);  data.addRow(["'02'", 0.58, 0.04, 0.56, 0.57, 0.15, 0.16]);  data.addRow(["'02'", 0.10, 0.02, 0.20, 0.19, 0.12, 0.15]);  data.addRow(["'02'", 0.17, 0.13, 0.46, 0.35, 0.22, 0.21]);  data.addRow(["'02'", 6.14, 0.47, 4.88, 4.58, 0.34, 0.33]);  data.addRow(["'02'", 22.92, 1.21, 16.90, 13.77, 0.45, 0.46]);  data.addRow(["'02'", 1.06, 1.54, 2.26, 2.49, 0.74, 0.74]);  data.addRow(["'02'", 2.18, 8.41, 6.06, 7.48, 0.97, 0.96]);  data.addRow(["'02'", 37.16, 3.05, 29.81, 17.41, 1.22, 1.19]);  data.addRow(["'02'", 16.13, 2.82, 14.40, 10.23, 1.40, 1.34]);  data.addRow(["'02'", 9.19, 3.82, 9.87, 9.14, 1.36, 1.32]);  data.addRow(["'02'", 15.42, 5.18, 15.20, 13.06, 1.74, 1.63]);  data.addRow(["'02'", 27.92, 7.79, 24.26, 23.45, 1.34, 1.28]);  data.addRow(["'02'", 0.93, 1.52, 2.32, 2.27, 0.81, 0.78]); 
	    var graphtitle="FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    