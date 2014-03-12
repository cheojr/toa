
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 1.74, 1.61, 2.17, 2.21, 0.28, 0.29]);  data.addRow(["'02'", 7.70, 4.23, 9.01, 7.87, 0.61, 0.60]);  data.addRow(["'02'", 3.47, 23.30, 12.83, 18.78, 0.93, 0.89]);  data.addRow(["'02'", 36.36, 15.29, 32.40, 36.94, 0.75, 0.74]);  data.addRow(["'02'", 2.93, 23.18, 13.24, 17.76, 0.70, 0.66]);  data.addRow(["'02'", 1.06, 1.75, 3.59, 3.60, 0.66, 0.68]);  data.addRow(["'02'", 19.34, 3.72, 15.89, 3.80, 0.68, 0.70]);  data.addRow(["'02'", 94.23, 18.88, 73.69, 72.23, 0.67, 0.68]);  data.addRow(["'02'", 18.81, 2.01, 14.42, 17.71, 0.44, 0.46]);  data.addRow(["'02'", 0.39, 1.11, 1.49, 1.62, 0.37, 0.42]);  data.addRow(["'02'", 0.32, 1.06, 2.03, 2.28, 0.24, 0.28]);  data.addRow(["'02'", 0.15, 0.35, 0.48, 0.54, 0.17, 0.22]);  data.addRow(["'02'", 0.20, 0.12, 1.44, 1.50, 0.12, 0.17]);  data.addRow(["'02'", 0.19, 0.02, 0.29, 0.42, 0.11, 0.16]);  data.addRow(["'02'", 0.16, 0.06, 1.29, 1.35, 0.05, 0.10]);  data.addRow(["'02'", 0.16, 0.06, 1.29, 1.37, 0.07, 0.11]);  data.addRow(["'02'", 0.06, 0.01, 0.13, 0.15, 0.04, 0.07]);  data.addRow(["'02'", 0.16, 0.06, 1.32, 1.33, 0.07, 0.10]);  data.addRow(["'02'", 0.27, 0.02, 0.32, 0.29, 0.06, 0.08]);  data.addRow(["'02'", 0.15, 0.06, 1.31, 1.34, 0.07, 0.11]);  data.addRow(["'02'", 0.06, 0.01, 0.14, 0.22, 0.04, 0.08]);  data.addRow(["'02'", 0.17, 0.06, 1.31, 1.45, 0.07, 0.11]);  data.addRow(["'02'", 0.61, 0.02, 0.54, 0.42, 0.05, 0.09]);  data.addRow(["'02'", 0.08, 0.06, 0.20, 1.41, 0.10, 0.13]);  data.addRow(["'02'", 0.16, 0.01, 1.30, 0.26, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.20, 0.08, 0.11]);  data.addRow(["'02'", 0.16, 0.05, 1.27, 1.27, 0.05, 0.07]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.17, 0.08, 0.11]);  data.addRow(["'02'", 0.17, 0.06, 1.30, 1.30, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.18, 0.17, 0.08, 0.10]);  data.addRow(["'02'", 0.15, 0.06, 1.31, 1.32, 0.07, 0.10]);  data.addRow(["'02'", 0.07, 0.03, 0.38, 0.37, 0.15, 0.19]);  data.addRow(["'02'", 0.18, 0.07, 1.46, 1.47, 0.09, 0.12]);  data.addRow(["'02'", 0.08, 0.01, 0.19, 0.23, 0.08, 0.15]);  data.addRow(["'02'", 0.16, 0.05, 1.30, 1.27, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.15, 0.22, 0.08, 0.10]);  data.addRow(["'02'", 0.16, 0.06, 1.29, 1.32, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.15, 0.17, 0.07, 0.10]);  data.addRow(["'02'", 0.15, 0.06, 1.28, 1.34, 0.05, 0.08]);  data.addRow(["'02'", 0.07, 0.03, 0.18, 0.21, 0.08, 0.11]);  data.addRow(["'02'", 1.95, 0.14, 2.83, 2.20, 0.21, 0.23]);  data.addRow(["'02'", 11.16, 0.38, 8.18, 4.81, 0.08, 0.12]);  data.addRow(["'02'", 8.56, 0.35, 7.33, 4.69, 0.11, 0.17]);  data.addRow(["'02'", 0.08, 0.05, 0.22, 0.33, 0.12, 0.13]);  data.addRow(["'02'", 0.18, 0.24, 1.40, 1.59, 0.10, 0.14]);  data.addRow(["'02'", 0.08, 0.13, 0.24, 0.36, 0.13, 0.15]);  data.addRow(["'02'", 0.20, 0.56, 1.58, 1.73, 0.16, 0.18]);  data.addRow(["'02'", 0.11, 0.15, 0.36, 0.41, 0.18, 0.19]);  data.addRow(["'02'", 0.28, 0.19, 1.49, 1.50, 0.12, 0.15]);  data.addRow(["'02'", 0.12, 0.05, 0.29, 0.34, 0.14, 0.16]);  data.addRow(["'02'", 0.34, 0.75, 1.86, 2.00, 0.20, 0.22]);  data.addRow(["'02'", 0.12, 1.00, 0.68, 1.08, 0.19, 0.22]);  data.addRow(["'02'", 0.46, 0.35, 1.76, 1.76, 0.21, 0.25]);  data.addRow(["'02'", 0.24, 0.62, 1.52, 1.68, 0.28, 0.29]);  data.addRow(["'02'", 9.92, 0.67, 7.54, 4.64, 0.15, 0.20]);  data.addRow(["'02'", 0.09, 0.35, 0.39, 0.49, 0.17, 0.18]);  data.addRow(["'02'", 0.21, 0.20, 1.51, 1.53, 0.12, 0.13]);  data.addRow(["'02'", 0.15, 0.09, 0.86, 0.90, 0.12, 0.14]);  data.addRow(["'02'", 0.18, 0.16, 0.63, 0.68, 0.09, 0.12]);  data.addRow(["'02'", 0.09, 0.31, 0.38, 0.44, 0.12, 0.14]);  data.addRow(["'02'", 0.15, 0.07, 1.32, 1.33, 0.06, 0.08]);  data.addRow(["'02'", 0.47, 0.03, 0.48, 0.44, 0.09, 0.11]);  data.addRow(["'02'", 0.16, 0.06, 1.32, 1.39, 0.05, 0.07]);  data.addRow(["'02'", 0.07, 0.02, 0.19, 0.31, 0.07, 0.10]);  data.addRow(["'02'", 0.17, 0.06, 1.33, 1.36, 0.05, 0.07]);  data.addRow(["'02'", 0.07, 0.03, 0.19, 0.25, 0.08, 0.14]);  data.addRow(["'02'", 0.18, 0.08, 1.41, 1.39, 0.07, 0.09]);  data.addRow(["'02'", 0.06, 0.02, 0.18, 0.19, 0.08, 0.10]);  data.addRow(["'02'", 0.15, 0.05, 1.32, 1.31, 0.05, 0.07]);  data.addRow(["'02'", 0.25, 0.01, 0.29, 0.22, 0.08, 0.09]);  data.addRow(["'02'", 0.15, 0.06, 1.31, 1.38, 0.04, 0.07]);  data.addRow(["'02'", 0.06, 0.02, 0.17, 0.30, 0.09, 0.12]);  data.addRow(["'02'", 0.15, 0.05, 1.17, 1.16, 0.04, 0.07]);  data.addRow(["'02'", 0.12, 0.01, 0.20, 0.21, 0.07, 0.10]);  data.addRow(["'02'", 0.15, 0.07, 1.30, 1.37, 0.05, 0.08]);  data.addRow(["'02'", 0.07, 0.01, 0.16, 0.17, 0.08, 0.09]);  data.addRow(["'02'", 0.15, 0.08, 1.28, 1.32, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.16, 0.08, 0.09]);  data.addRow(["'02'", 0.15, 0.06, 1.32, 1.34, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.17, 0.08, 0.10]);  data.addRow(["'02'", 0.15, 0.06, 1.31, 1.38, 0.06, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.17, 0.08, 0.10]);  data.addRow(["'02'", 0.16, 0.06, 1.32, 1.38, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.01, 0.16, 0.15, 0.08, 0.10]);  data.addRow(["'02'", 0.17, 0.06, 1.32, 1.34, 0.05, 0.07]);  data.addRow(["'02'", 0.06, 0.01, 0.17, 0.17, 0.08, 0.11]);  data.addRow(["'02'", 0.15, 0.06, 1.32, 1.32, 0.05, 0.08]);  data.addRow(["'02'", 0.06, 0.02, 0.15, 0.19, 0.07, 0.11]);  data.addRow(["'02'", 0.18, 0.07, 1.71, 1.76, 0.05, 0.08]);  data.addRow(["'02'", 0.07, 0.01, 0.17, 0.16, 0.07, 0.10]);  data.addRow(["'02'", 0.06, 0.02, 0.14, 0.23, 0.05, 0.09]);  data.addRow(["'02'", 0.15, 0.06, 1.33, 1.35, 0.07, 0.10]);  data.addRow(["'02'", 0.08, 0.08, 0.45, 0.35, 0.35, 0.10]);  data.addRow(["'02'", 0.17, 0.15, 1.38, 1.42, 0.10, 0.12]);  data.addRow(["'02'", 0.05, 0.03, 0.14, 0.19, 0.05, 0.08]);  data.addRow(["'02'", 0.15, 0.06, 1.31, 1.41, 0.07, 0.10]);  data.addRow(["'02'", 0.06, 0.30, 0.26, 0.34, 0.06, 0.08]);  data.addRow(["'02'", 0.25, 0.14, 1.49, 1.56, 0.12, 0.21]);  data.addRow(["'02'", 0.08, 0.03, 0.17, 0.20, 0.05, 0.08]);  data.addRow(["'02'", 0.56, 0.07, 1.63, 1.58, 0.07, 0.10]);  data.addRow(["'02'", 0.10, 0.19, 0.26, 0.36, 0.07, 0.12]);  data.addRow(["'02'", 0.24, 0.19, 1.50, 1.57, 0.13, 0.18]);  data.addRow(["'02'", 0.11, 0.10, 0.23, 0.30, 0.06, 0.11]);  data.addRow(["'02'", 0.19, 0.11, 1.36, 1.44, 0.07, 0.10]);  data.addRow(["'02'", 0.22, 0.12, 0.36, 0.43, 0.09, 0.12]);  data.addRow(["'02'", 0.80, 0.12, 1.88, 1.72, 0.12, 0.15]);  data.addRow(["'02'", 0.06, 0.06, 0.21, 0.25, 0.08, 0.10]);  data.addRow(["'02'", 0.28, 0.07, 1.43, 1.47, 0.10, 0.12]);  data.addRow(["'02'", 0.11, 0.05, 0.23, 0.22, 0.09, 0.11]);  data.addRow(["'02'", 0.18, 0.07, 1.36, 1.42, 0.08, 0.10]);  data.addRow(["'02'", 0.10, 0.02, 0.18, 0.19, 0.06, 0.08]);  data.addRow(["'02'", 0.49, 0.06, 1.59, 1.45, 0.07, 0.10]);  data.addRow(["'02'", 0.07, 0.01, 0.14, 0.20, 0.04, 0.07]);  data.addRow(["'02'", 0.18, 0.06, 1.33, 1.35, 0.06, 0.09]);  data.addRow(["'02'", 0.59, 0.03, 0.54, 0.48, 0.05, 0.08]);  data.addRow(["'02'", 0.52, 0.07, 1.58, 1.45, 0.08, 0.11]);  data.addRow(["'02'", 0.07, 0.01, 0.15, 0.16, 0.04, 0.07]);  data.addRow(["'02'", 0.17, 0.05, 1.36, 1.32, 0.06, 0.09]);  data.addRow(["'02'", 0.07, 0.01, 0.16, 0.18, 0.06, 0.08]);  data.addRow(["'02'", 0.15, 0.06, 1.34, 1.35, 0.09, 0.12]);  data.addRow(["'02'", 0.12, 0.02, 0.20, 0.33, 0.06, 0.07]);  data.addRow(["'02'", 0.31, 0.06, 1.46, 1.40, 0.08, 0.09]);  data.addRow(["'02'", 0.07, 0.01, 0.17, 0.15, 0.06, 0.07]);  data.addRow(["'02'", 0.17, 0.06, 1.36, 1.48, 0.08, 0.12]);  data.addRow(["'02'", 0.11, 0.01, 0.17, 0.16, 0.04, 0.07]);  data.addRow(["'02'", 0.25, 0.07, 1.48, 1.56, 0.12, 0.15]);  data.addRow(["'02'", 0.07, 0.01, 0.14, 0.19, 0.05, 0.07]);  data.addRow(["'02'", 0.18, 0.06, 1.44, 1.41, 0.11, 0.14]);  data.addRow(["'02'", 0.18, 0.05, 0.82, 0.86, 0.11, 0.13]);  data.addRow(["'02'", 0.08, 0.02, 0.30, 0.28, 0.12, 0.13]);  data.addRow(["'02'", 0.17, 0.06, 1.34, 1.36, 0.08, 0.10]);  data.addRow(["'02'", 0.08, 0.08, 0.25, 0.24, 0.13, 0.14]);  data.addRow(["'02'", 0.22, 0.07, 1.39, 1.41, 0.09, 0.10]);  data.addRow(["'02'", 1.28, 0.16, 1.15, 1.08, 0.15, 0.16]);  data.addRow(["'02'", 0.43, 0.92, 2.22, 2.50, 0.56, 0.61]);  data.addRow(["'02'", 0.89, 7.04, 2.69, 5.59, 0.35, 0.37]);  data.addRow(["'02'", 3.00, 2.05, 5.60, 4.73, 0.55, 0.56]);  data.addRow(["'02'", 5.56, 53.47, 16.22, 39.63, 0.79, 0.78]);  data.addRow(["'02'", 4.22, 5.20, 7.35, 7.15, 0.97, 1.00]);  data.addRow(["'02'", 11.53, 6.52, 12.59, 11.09, 1.35, 1.37]);  data.addRow(["'02'", 12.39, 3.65, 14.08, 12.12, 1.78, 1.85]);  data.addRow(["'02'", 14.40, 6.87, 16.28, 12.78, 1.86, 1.90]);  data.addRow(["'02'", 11.45, 4.34, 13.04, 11.09, 1.64, 1.72]);  data.addRow(["'02'", 12.07, 12.83, 13.93, 17.15, 1.50, 1.59]);  data.addRow(["'02'", 12.03, 2.85, 12.58, 9.75, 1.56, 1.58]);  data.addRow(["'02'", 10.76, 2.32, 10.24, 13.59, 1.61, 1.61]);  data.addRow(["'02'", 4.58, 8.45, 9.40, 11.58, 1.78, 1.80]);  data.addRow(["'02'", 2.59, 21.66, 12.40, 18.34, 1.95, 1.95]);  data.addRow(["'02'", 7.51, 4.60, 9.21, 7.78, 1.11, 1.10]);  data.addRow(["'02'", 17.80, 4.81, 16.01, 12.08, 1.30, 1.28]);  data.addRow(["'02'", 6.60, 4.52, 9.20, 8.93, 1.39, 1.41]);  data.addRow(["'02'", 36.30, 4.06, 30.00, 15.55, 1.60, 1.54]);  data.addRow(["'02'", 10.62, 3.28, 10.87, 10.85, 1.68, 1.57]);  data.addRow(["'02'", 6.12, 9.37, 11.84, 10.62, 1.45, 1.40]);  data.addRow(["'02'", 28.48, 2.85, 22.49, 17.17, 0.69, 0.68]);  data.addRow(["'02'", 14.39, 5.95, 16.38, 11.27, 0.62, 0.64]);  data.addRow(["'02'", 87.85, 2.41, 62.79, 30.88, 0.66, 0.64]);  data.addRow(["'02'", 1.01, 0.74, 3.13, 3.22, 0.46, 0.48]);  data.addRow(["'02'", 7.57, 0.53, 5.94, 5.62, 0.32, 0.34]);  data.addRow(["'02'", 0.41, 1.69, 2.61, 2.97, 0.45, 0.45]);  data.addRow(["'02'", 0.42, 0.80, 1.02, 1.17, 0.32, 0.35]);  data.addRow(["'02'", 0.45, 0.31, 1.96, 1.89, 0.32, 0.33]);  data.addRow(["'02'", 11.41, 0.38, 8.39, 6.71, 0.21, 0.24]);  data.addRow(["'02'", 0.29, 0.31, 1.71, 1.68, 0.22, 0.23]);  data.addRow(["'02'", 0.87, 0.07, 0.83, 0.68, 0.17, 0.18]);  data.addRow(["'02'", 0.17, 0.08, 1.44, 1.50, 0.16, 0.18]);  data.addRow(["'02'", 0.49, 0.45, 0.68, 0.81, 0.12, 0.15]);  data.addRow(["'02'", 0.32, 0.08, 1.51, 1.48, 0.15, 0.15]);  data.addRow(["'02'", 0.07, 0.03, 0.18, 0.29, 0.09, 0.11]);  data.addRow(["'02'", 0.18, 0.07, 1.41, 1.38, 0.13, 0.14]);  data.addRow(["'02'", 0.06, 0.02, 0.18, 0.22, 0.09, 0.11]);  data.addRow(["'02'", 0.39, 0.07, 1.53, 1.45, 0.12, 0.13]);  data.addRow(["'02'", 0.27, 0.03, 0.33, 0.33, 0.11, 0.12]);  data.addRow(["'02'", 0.20, 0.07, 1.39, 1.42, 0.12, 0.14]);  data.addRow(["'02'", 0.09, 0.03, 0.20, 0.23, 0.10, 0.12]);  data.addRow(["'02'", 0.43, 0.08, 1.58, 1.49, 0.13, 0.15]);  data.addRow(["'02'", 0.10, 0.04, 0.21, 0.42, 0.12, 0.12]);  data.addRow(["'02'", 11.20, 0.45, 9.21, 9.10, 0.15, 0.16]);  data.addRow(["'02'", 0.07, 0.03, 0.22, 0.33, 0.12, 0.14]);  data.addRow(["'02'", 0.76, 0.09, 1.82, 1.73, 0.14, 0.16]);  data.addRow(["'02'", 0.20, 0.79, 0.74, 0.82, 0.15, 0.15]);  data.addRow(["'02'", 0.36, 0.22, 1.86, 1.76, 0.37, 0.37]);  data.addRow(["'02'", 0.43, 1.24, 1.61, 2.01, 0.80, 0.81]);  data.addRow(["'02'", 0.90, 1.11, 3.36, 3.32, 1.00, 1.01]);  data.addRow(["'02'", 10.12, 3.47, 11.40, 8.46, 1.53, 1.55]);  data.addRow(["'02'", 13.40, 6.74, 15.93, 13.35, 1.84, 1.78]);  data.addRow(["'02'", 3.39, 17.70, 17.91, 18.31, 1.87, 1.82]);  data.addRow(["'02'", 20.43, 4.42, 29.66, 19.40, 2.28, 2.29]);  data.addRow(["'02'", 17.13, 16.76, 27.41, 22.59, 1.95, 1.91]);  data.addRow(["'02'", 9.58, 5.50, 11.52, 7.80, 1.65, 1.62]);  data.addRow(["'02'", 11.11, 5.72, 14.28, 12.79, 1.55, 1.56]);  data.addRow(["'02'", 14.11, 28.21, 25.65, 23.11, 1.56, 1.54]);  data.addRow(["'02'", 10.65, 5.35, 13.85, 7.59, 1.53, 1.46]);  data.addRow(["'02'", 34.08, 22.49, 34.23, 29.31, 1.71, 1.67]);  data.addRow(["'02'", 40.77, 6.18, 42.89, 10.65, 1.53, 1.50]);  data.addRow(["'02'", 5.68, 4.64, 9.33, 7.85, 1.62, 1.59]);  data.addRow(["'02'", 36.63, 9.44, 36.48, 11.11, 1.88, 1.87]);  data.addRow(["'02'", 21.50, 12.82, 25.45, 15.19, 2.22, 2.18]);  data.addRow(["'02'", 21.35, 36.61, 32.61, 29.20, 1.95, 1.91]);  data.addRow(["'02'", 1.99, 3.81, 5.41, 5.46, 1.62, 1.59]);  data.addRow(["'02'", 11.82, 5.39, 15.14, 7.17, 1.20, 1.16]);  data.addRow(["'02'", 1.70, 1.50, 3.01, 2.74, 0.80, 0.80]);  data.addRow(["'02'", 5.12, 10.80, 8.86, 10.13, 0.50, 0.50]);  data.addRow(["'02'", 3.32, 1.78, 4.71, 4.30, 0.50, 0.50]);  data.addRow(["'02'", 4.17, 13.93, 9.63, 12.05, 0.44, 0.46]);  data.addRow(["'02'", 0.37, 0.29, 2.05, 1.97, 0.45, 0.43]);  data.addRow(["'02'", 0.46, 1.02, 1.49, 1.54, 0.42, 0.40]);  data.addRow(["'02'", 1.71, 1.35, 3.83, 3.39, 0.44, 0.45]);  data.addRow(["'02'", 1.55, 0.43, 1.70, 1.62, 0.41, 0.42]);  data.addRow(["'02'", 0.56, 0.17, 1.94, 2.00, 0.37, 0.37]);  data.addRow(["'02'", 0.11, 0.63, 0.56, 0.73, 0.22, 0.23]);  data.addRow(["'02'", 2.94, 0.21, 3.78, 3.44, 0.26, 0.26]);  data.addRow(["'02'", 0.15, 0.06, 0.34, 0.30, 0.19, 0.20]);  data.addRow(["'02'", 0.18, 0.08, 1.50, 1.46, 0.21, 0.23]);  data.addRow(["'02'", 0.32, 0.62, 0.53, 0.80, 0.17, 0.20]);  data.addRow(["'02'", 0.89, 0.23, 2.00, 1.92, 0.21, 0.22]);  data.addRow(["'02'", 0.10, 1.23, 0.49, 1.13, 0.19, 0.20]);  data.addRow(["'02'", 0.18, 0.07, 1.44, 1.46, 0.18, 0.18]);  data.addRow(["'02'", 0.28, 0.02, 0.35, 0.32, 0.14, 0.15]);  data.addRow(["'02'", 0.18, 0.07, 1.42, 1.48, 0.16, 0.19]);  data.addRow(["'02'", 0.08, 0.02, 0.23, 0.28, 0.14, 0.17]);  data.addRow(["'02'", 0.38, 0.07, 1.56, 1.45, 0.17, 0.18]);  data.addRow(["'02'", 0.13, 0.04, 0.26, 0.57, 0.14, 0.16]);  data.addRow(["'02'", 0.19, 0.07, 1.47, 1.43, 0.19, 0.17]);  data.addRow(["'02'", 0.09, 0.02, 0.30, 0.24, 0.20, 0.17]);  data.addRow(["'02'", 0.19, 0.07, 1.45, 1.42, 0.17, 0.18]);  data.addRow(["'02'", 0.19, 0.14, 0.39, 0.33, 0.15, 0.16]);  data.addRow(["'02'", 0.37, 0.08, 1.60, 1.55, 0.20, 0.20]);  data.addRow(["'02'", 0.19, 0.07, 0.38, 0.38, 0.19, 0.20]);  data.addRow(["'02'", 0.43, 0.50, 2.03, 2.04, 0.38, 0.40]);  data.addRow(["'02'", 3.80, 6.82, 6.59, 7.97, 1.04, 1.09]);  data.addRow(["'02'", 2.29, 1.60, 3.46, 3.19, 1.00, 1.01]);  data.addRow(["'02'", 10.95, 2.94, 12.35, 9.70, 1.23, 1.26]);  data.addRow(["'02'", 2.44, 3.57, 5.28, 5.49, 1.57, 1.59]);  data.addRow(["'02'", 3.38, 4.14, 6.47, 6.58, 1.76, 1.80]);  data.addRow(["'02'", 11.43, 7.05, 15.65, 13.70, 1.99, 2.01]);  data.addRow(["'02'", 9.01, 7.01, 12.66, 10.76, 1.93, 1.94]);  data.addRow(["'02'", 12.19, 5.53, 18.11, 12.19, 1.73, 1.71]);  data.addRow(["'02'", 8.63, 19.88, 15.13, 18.98, 1.77, 1.75]);  data.addRow(["'02'", 6.20, 3.21, 8.92, 7.66, 1.64, 1.62]);  data.addRow(["'02'", 8.92, 6.15, 11.08, 10.67, 1.34, 1.34]);  data.addRow(["'02'", 4.47, 4.90, 7.69, 7.47, 1.56, 1.56]);  data.addRow(["'02'", 14.18, 5.42, 16.24, 13.37, 1.64, 1.64]);  data.addRow(["'02'", 4.92, 4.82, 8.26, 8.03, 1.89, 1.90]);  data.addRow(["'02'", 3.93, 5.48, 8.02, 7.64, 1.64, 1.64]);  data.addRow(["'02'", 6.82, 16.34, 13.88, 17.24, 1.44, 1.46]);  data.addRow(["'02'", 4.36, 8.95, 10.19, 10.60, 1.48, 1.48]);  data.addRow(["'02'", 4.36, 2.38, 6.12, 4.99, 1.28, 1.24]);  data.addRow(["'02'", 1.14, 3.17, 3.70, 3.64, 0.94, 0.94]);  data.addRow(["'02'", 0.70, 1.26, 3.08, 3.20, 0.75, 0.78]);  data.addRow(["'02'", 0.51, 1.07, 1.67, 1.76, 0.67, 0.66]);  data.addRow(["'02'", 0.99, 2.16, 3.96, 3.79, 0.59, 0.61]);  data.addRow(["'02'", 0.51, 0.61, 1.19, 1.11, 0.45, 0.46]);  data.addRow(["'02'", 0.67, 3.01, 3.40, 4.16, 0.46, 0.50]);  data.addRow(["'02'", 0.52, 11.75, 5.31, 8.66, 0.40, 0.41]);  data.addRow(["'02'", 0.50, 0.97, 2.32, 2.43, 0.33, 0.34]);  data.addRow(["'02'", 1.78, 1.12, 2.23, 2.11, 0.39, 0.41]);  data.addRow(["'02'", 0.55, 0.32, 2.07, 2.03, 0.30, 0.32]);  data.addRow(["'02'", 1.38, 0.26, 1.62, 0.58, 0.24, 0.27]);  data.addRow(["'02'", 0.32, 0.29, 1.80, 1.88, 0.25, 0.30]);  data.addRow(["'02'", 0.58, 0.53, 1.01, 0.88, 0.20, 0.22]);  data.addRow(["'02'", 0.69, 0.12, 0.75, 0.68, 0.16, 0.19]);  data.addRow(["'02'", 0.23, 0.09, 1.62, 1.58, 0.14, 0.16]);  data.addRow(["'02'", 7.17, 0.04, 6.19, 0.34, 0.17, 0.20]);  data.addRow(["'02'", 5.56, 0.07, 5.92, 1.41, 0.11, 0.14]);  data.addRow(["'02'", 0.10, 0.03, 0.28, 0.43, 0.15, 0.17]);  data.addRow(["'02'", 0.67, 0.07, 1.80, 1.38, 0.11, 0.13]);  data.addRow(["'02'", 1.28, 0.07, 1.20, 0.96, 0.16, 0.18]);  data.addRow(["'02'", 0.28, 0.10, 1.49, 1.52, 0.19, 0.21]);  data.addRow(["'02'", 0.16, 0.04, 0.34, 0.35, 0.19, 0.22]);  data.addRow(["'02'", 7.16, 0.18, 6.34, 3.55, 0.13, 0.16]);  data.addRow(["'02'", 0.22, 0.03, 0.36, 0.31, 0.14, 0.17]);  data.addRow(["'02'", 0.27, 0.08, 1.51, 1.45, 0.12, 0.15]);  data.addRow(["'02'", 3.58, 0.03, 2.78, 0.30, 0.17, 0.20]);  data.addRow(["'02'", 0.26, 0.08, 1.47, 1.52, 0.13, 0.17]);  data.addRow(["'02'", 0.14, 0.04, 0.36, 0.34, 0.18, 0.20]);  data.addRow(["'02'", 0.31, 3.62, 2.76, 4.00, 0.18, 0.21]);  data.addRow(["'02'", 0.46, 0.80, 1.13, 1.23, 0.34, 0.34]);  data.addRow(["'02'", 0.73, 2.34, 3.55, 3.92, 0.86, 0.87]);  data.addRow(["'02'", 1.61, 1.84, 3.31, 3.16, 0.98, 1.03]);  data.addRow(["'02'", 2.82, 5.32, 7.37, 7.97, 1.73, 1.69]);  data.addRow(["'02'", 8.81, 9.10, 10.35, 11.23, 1.30, 1.29]);  data.addRow(["'02'", 3.87, 5.87, 7.74, 8.44, 1.34, 1.44]);  data.addRow(["'02'", 9.28, 3.79, 9.71, 7.75, 1.38, 1.45]);  data.addRow(["'02'", 12.32, 5.28, 14.08, 12.18, 1.78, 1.77]);  data.addRow(["'02'", 115.51, 7.79, 85.68, 37.78, 1.42, 1.46]);  data.addRow(["'02'", 30.03, 6.44, 27.63, 23.54, 1.50, 1.55]);  data.addRow(["'02'", 118.70, 7.49, 88.59, 38.40, 1.70, 1.71]);  data.addRow(["'02'", 12.59, 8.08, 16.09, 14.53, 1.66, 1.67]);  data.addRow(["'02'", 104.58, 7.01, 79.16, 38.42, 1.62, 1.56]);  data.addRow(["'02'", 41.87, 11.73, 38.04, 23.39, 1.54, 1.55]);  data.addRow(["'02'", 18.80, 11.58, 22.36, 18.30, 1.69, 1.67]);  data.addRow(["'02'", 5.30, 9.40, 11.06, 11.77, 2.26, 2.21]);  data.addRow(["'02'", 8.75, 11.29, 16.19, 16.26, 1.85, 1.79]);  data.addRow(["'02'", 6.66, 24.41, 17.76, 22.40, 1.95, 2.02]);  data.addRow(["'02'", 7.36, 8.10, 12.50, 11.68, 1.45, 1.44]);  data.addRow(["'02'", 4.09, 4.34, 6.23, 6.21, 1.20, 1.19]);  data.addRow(["'02'", 1.93, 3.28, 4.34, 4.74, 0.76, 0.76]);  data.addRow(["'02'", 1.11, 0.61, 1.94, 1.77, 0.63, 0.64]);  data.addRow(["'02'", 2.15, 9.23, 8.98, 12.57, 0.69, 0.68]);  data.addRow(["'02'", 34.56, 0.85, 24.89, 11.48, 0.40, 0.41]);  data.addRow(["'02'", 36.04, 1.70, 27.33, 13.33, 0.47, 0.46]);  data.addRow(["'02'", 53.62, 3.09, 38.92, 19.00, 0.32, 0.36]);  data.addRow(["'02'", 2.88, 0.77, 4.06, 3.83, 0.44, 0.46]);  data.addRow(["'02'", 1.54, 1.25, 2.17, 2.09, 0.46, 0.49]);  data.addRow(["'02'", 11.06, 0.47, 10.13, 4.90, 0.27, 0.31]);  data.addRow(["'02'", 1.33, 0.35, 2.35, 1.81, 0.29, 0.33]);  data.addRow(["'02'", 1.06, 0.43, 2.73, 2.37, 0.37, 0.40]);  data.addRow(["'02'", 0.54, 0.55, 1.50, 1.62, 0.21, 0.27]);  data.addRow(["'02'", 0.22, 0.07, 0.52, 0.54, 0.24, 0.27]);  data.addRow(["'02'", 5.02, 0.14, 3.82, 2.41, 0.16, 0.21]);  data.addRow(["'02'", 2.57, 0.12, 3.27, 2.10, 0.21, 0.25]);  data.addRow(["'02'", 0.20, 0.03, 0.40, 0.39, 0.18, 0.21]);  data.addRow(["'02'", 0.42, 0.09, 1.68, 1.65, 0.20, 0.22]);  data.addRow(["'02'", 0.95, 0.05, 0.88, 0.60, 0.16, 0.18]);  data.addRow(["'02'", 1.04, 0.09, 2.08, 1.87, 0.20, 0.22]);  data.addRow(["'02'", 1.49, 0.08, 1.28, 1.29, 0.16, 0.19]);  data.addRow(["'02'", 0.32, 0.08, 1.59, 1.57, 0.19, 0.22]);  data.addRow(["'02'", 0.08, 0.04, 0.30, 0.48, 0.17, 0.21]);  data.addRow(["'02'", 0.20, 0.07, 1.49, 1.50, 0.19, 0.21]);  data.addRow(["'02'", 0.11, 0.03, 0.29, 0.36, 0.16, 0.18]);  data.addRow(["'02'", 0.23, 0.07, 1.49, 1.46, 0.17, 0.20]);  data.addRow(["'02'", 0.22, 0.03, 0.35, 0.35, 0.15, 0.18]);  data.addRow(["'02'", 0.72, 0.10, 1.86, 1.85, 0.18, 0.21]);  data.addRow(["'02'", 0.16, 0.03, 0.32, 0.36, 0.16, 0.19]);  data.addRow(["'02'", 0.33, 0.18, 1.75, 1.64, 0.25, 0.26]);  data.addRow(["'02'", 6.26, 0.53, 5.68, 5.46, 0.36, 0.38]);  data.addRow(["'02'", 22.94, 1.25, 16.96, 14.01, 0.46, 0.50]);  data.addRow(["'02'", 1.96, 1.83, 4.25, 4.38, 0.75, 0.82]);  data.addRow(["'02'", 2.80, 8.78, 6.67, 8.35, 0.99, 1.07]);  data.addRow(["'02'", 37.33, 4.40, 31.63, 19.78, 1.26, 1.30]);  data.addRow(["'02'", 16.20, 3.27, 14.64, 10.89, 1.43, 1.45]);  data.addRow(["'02'", 9.38, 4.04, 11.30, 10.74, 1.39, 1.44]);  data.addRow(["'02'", 15.46, 5.54, 15.31, 13.61, 1.76, 1.74]);  data.addRow(["'02'", 28.11, 7.95, 25.71, 24.98, 1.37, 1.37]);  data.addRow(["'02'", 0.96, 1.56, 2.41, 2.49, 0.82, 0.84]); 
	    var graphtitle="CUH Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    