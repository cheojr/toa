
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 0.41, 0.24, 1.40, 1.28, 0.79, 0.79]);  data.addRow(["'02'", 1.01, 0.51, 2.72, 2.50, 1.37, 1.33]);  data.addRow(["'02'", 4.35, 3.57, 6.38, 5.85, 1.54, 1.51]);  data.addRow(["'02'", 2.30, 84.01, 29.87, 62.89, 1.39, 1.37]);  data.addRow(["'02'", 7.75, 28.65, 17.16, 25.55, 1.79, 1.78]);  data.addRow(["'02'", 7.48, 1.27, 8.24, 5.54, 1.90, 1.84]);  data.addRow(["'02'", 9.56, 0.71, 8.87, 5.60, 1.34, 1.30]);  data.addRow(["'02'", 63.03, 1.30, 49.29, 26.37, 1.46, 1.41]);  data.addRow(["'02'", 0.75, 0.60, 2.65, 2.54, 1.31, 1.26]);  data.addRow(["'02'", 0.81, 0.46, 2.87, 2.70, 1.34, 1.29]);  data.addRow(["'02'", 0.71, 0.52, 2.53, 2.33, 1.32, 1.28]);  data.addRow(["'02'", 0.58, 0.43, 2.36, 2.14, 1.29, 1.24]);  data.addRow(["'02'", 0.61, 0.73, 2.49, 2.46, 1.28, 1.23]);  data.addRow(["'02'", 0.45, 0.35, 2.16, 2.01, 1.28, 1.23]);  data.addRow(["'02'", 0.33, 0.35, 2.01, 1.83, 1.25, 1.19]);  data.addRow(["'02'", 0.30, 0.28, 1.98, 1.77, 1.26, 1.20]);  data.addRow(["'02'", 0.37, 0.36, 2.06, 1.92, 1.26, 1.21]);  data.addRow(["'02'", 0.29, 0.27, 1.97, 1.77, 1.26, 1.20]);  data.addRow(["'02'", 0.31, 0.29, 1.99, 1.87, 1.26, 1.20]);  data.addRow(["'02'", 0.34, 0.29, 2.00, 1.93, 1.25, 1.20]);  data.addRow(["'02'", 0.30, 0.35, 1.99, 1.83, 1.25, 1.20]);  data.addRow(["'02'", 0.37, 0.28, 2.03, 1.82, 1.26, 1.21]);  data.addRow(["'02'", 0.30, 0.37, 1.99, 1.88, 1.27, 1.22]);  data.addRow(["'02'", 0.31, 0.29, 1.99, 1.96, 1.27, 1.21]);  data.addRow(["'02'", 0.30, 0.28, 1.98, 1.78, 1.26, 1.21]);  data.addRow(["'02'", 0.41, 0.30, 2.15, 2.04, 1.37, 1.39]);  data.addRow(["'02'", 0.43, 0.29, 2.25, 2.04, 1.47, 1.40]);  data.addRow(["'02'", 0.35, 0.35, 2.03, 1.85, 1.25, 1.20]);  data.addRow(["'02'", 0.30, 0.28, 1.97, 1.84, 1.25, 1.21]);  data.addRow(["'02'", 0.32, 0.36, 1.99, 1.92, 1.26, 1.20]);  data.addRow(["'02'", 0.29, 0.29, 1.98, 1.97, 1.28, 1.23]);  data.addRow(["'02'", 0.30, 0.29, 2.00, 1.93, 1.29, 1.23]);  data.addRow(["'02'", 0.30, 0.29, 1.99, 1.79, 1.28, 1.22]);  data.addRow(["'02'", 0.31, 0.57, 2.06, 2.08, 1.26, 1.22]);  data.addRow(["'02'", 0.28, 0.27, 1.95, 1.76, 1.25, 1.20]);  data.addRow(["'02'", 0.30, 0.28, 1.97, 1.77, 1.26, 1.20]);  data.addRow(["'02'", 0.31, 0.48, 2.05, 1.93, 1.26, 1.20]);  data.addRow(["'02'", 0.31, 0.29, 1.99, 1.79, 1.26, 1.20]);  data.addRow(["'02'", 0.33, 0.27, 2.00, 1.81, 1.27, 1.20]);  data.addRow(["'02'", 0.45, 0.43, 2.26, 2.08, 1.28, 1.22]);  data.addRow(["'02'", 0.45, 0.42, 2.24, 2.07, 1.27, 1.23]);  data.addRow(["'02'", 0.45, 0.50, 2.28, 2.10, 1.29, 1.23]);  data.addRow(["'02'", 0.47, 0.41, 2.25, 2.05, 1.27, 1.21]);  data.addRow(["'02'", 0.57, 0.44, 2.35, 2.13, 1.29, 1.24]);  data.addRow(["'02'", 0.45, 0.44, 2.27, 2.16, 1.28, 1.21]);  data.addRow(["'02'", 0.46, 0.77, 2.39, 2.28, 1.29, 1.22]);  data.addRow(["'02'", 0.43, 0.40, 2.21, 2.03, 1.26, 1.21]);  data.addRow(["'02'", 0.54, 0.64, 2.30, 2.19, 1.28, 1.21]);  data.addRow(["'02'", 0.58, 0.42, 2.33, 2.08, 1.28, 1.21]);  data.addRow(["'02'", 0.75, 0.44, 2.46, 2.12, 1.30, 1.23]);  data.addRow(["'02'", 0.46, 0.41, 2.31, 2.09, 1.28, 1.21]);  data.addRow(["'02'", 0.47, 0.53, 2.29, 2.16, 1.27, 1.22]);  data.addRow(["'02'", 0.62, 0.44, 2.39, 2.16, 1.28, 1.22]);  data.addRow(["'02'", 1.15, 0.44, 2.76, 2.38, 1.32, 1.25]);  data.addRow(["'02'", 0.63, 0.41, 2.37, 2.09, 1.29, 1.22]);  data.addRow(["'02'", 0.48, 2.49, 2.52, 3.45, 1.27, 1.20]);  data.addRow(["'02'", 0.46, 0.42, 2.26, 2.05, 1.28, 1.21]);  data.addRow(["'02'", 0.47, 0.50, 2.26, 2.08, 1.28, 1.20]);  data.addRow(["'02'", 0.44, 1.19, 2.24, 2.56, 1.28, 1.21]);  data.addRow(["'02'", 0.45, 0.50, 2.26, 2.08, 1.28, 1.21]);  data.addRow(["'02'", 0.46, 0.42, 2.25, 2.06, 1.27, 1.19]);  data.addRow(["'02'", 0.46, 0.42, 2.27, 2.06, 1.27, 1.20]);  data.addRow(["'02'", 0.44, 0.41, 2.28, 2.07, 1.28, 1.21]);  data.addRow(["'02'", 0.46, 0.42, 2.24, 2.03, 1.27, 1.20]);  data.addRow(["'02'", 0.48, 0.42, 2.26, 2.02, 1.27, 1.20]);  data.addRow(["'02'", 0.46, 0.44, 2.26, 2.17, 1.28, 1.22]);  data.addRow(["'02'", 0.43, 0.39, 2.21, 1.99, 1.29, 1.22]);  data.addRow(["'02'", 0.47, 0.50, 2.26, 2.12, 1.27, 1.22]);  data.addRow(["'02'", 0.47, 0.43, 2.25, 2.18, 1.27, 1.21]);  data.addRow(["'02'", 0.49, 0.45, 2.30, 2.06, 1.28, 1.20]);  data.addRow(["'02'", 0.57, 1.06, 2.55, 2.54, 1.29, 1.21]);  data.addRow(["'02'", 0.69, 0.41, 2.41, 2.11, 1.27, 1.20]);  data.addRow(["'02'", 0.48, 0.50, 2.27, 2.10, 1.29, 1.21]);  data.addRow(["'02'", 0.46, 0.42, 2.25, 2.03, 1.27, 1.20]);  data.addRow(["'02'", 0.46, 0.41, 2.21, 2.00, 1.27, 1.21]);  data.addRow(["'02'", 0.36, 0.27, 2.01, 1.77, 1.25, 1.19]);  data.addRow(["'02'", 0.31, 0.36, 1.98, 1.81, 1.25, 1.19]);  data.addRow(["'02'", 0.38, 0.28, 2.02, 1.80, 1.25, 1.19]);  data.addRow(["'02'", 0.32, 0.75, 2.16, 2.08, 1.28, 1.20]);  data.addRow(["'02'", 0.36, 0.32, 2.09, 1.90, 1.29, 1.23]);  data.addRow(["'02'", 0.32, 0.36, 2.04, 1.85, 1.30, 1.22]);  data.addRow(["'02'", 0.31, 0.47, 2.07, 1.89, 1.27, 1.18]);  data.addRow(["'02'", 0.32, 0.57, 2.09, 1.97, 1.29, 1.21]);  data.addRow(["'02'", 0.42, 0.49, 2.15, 1.96, 1.27, 1.20]);  data.addRow(["'02'", 0.51, 0.29, 2.11, 1.84, 1.26, 1.20]);  data.addRow(["'02'", 0.30, 0.27, 1.98, 1.79, 1.26, 1.19]);  data.addRow(["'02'", 0.32, 0.35, 2.00, 1.83, 1.26, 1.19]);  data.addRow(["'02'", 0.35, 0.28, 2.01, 1.81, 1.26, 1.19]);  data.addRow(["'02'", 0.32, 0.28, 1.98, 1.78, 1.25, 1.20]);  data.addRow(["'02'", 0.34, 0.28, 2.01, 1.78, 1.26, 1.20]);  data.addRow(["'02'", 0.33, 0.28, 1.98, 1.76, 1.25, 1.18]);  data.addRow(["'02'", 0.31, 0.28, 2.00, 1.79, 1.26, 1.18]);  data.addRow(["'02'", 0.32, 0.34, 1.98, 1.80, 1.25, 1.18]);  data.addRow(["'02'", 0.31, 0.28, 1.98, 1.80, 1.26, 1.20]);  data.addRow(["'02'", 0.33, 0.28, 1.99, 1.80, 1.25, 1.20]);  data.addRow(["'02'", 0.42, 0.30, 2.08, 1.84, 1.26, 1.22]);  data.addRow(["'02'", 0.31, 0.35, 2.02, 1.92, 1.26, 1.20]);  data.addRow(["'02'", 0.32, 0.28, 2.00, 1.78, 1.27, 1.20]);  data.addRow(["'02'", 0.40, 0.36, 2.04, 1.91, 1.25, 1.19]);  data.addRow(["'02'", 0.38, 0.28, 2.04, 1.87, 1.26, 1.19]);  data.addRow(["'02'", 0.38, 0.27, 2.03, 1.82, 1.25, 1.19]);  data.addRow(["'02'", 0.37, 0.28, 2.03, 1.82, 1.25, 1.18]);  data.addRow(["'02'", 0.38, 0.32, 2.04, 1.86, 1.27, 1.24]);  data.addRow(["'02'", 0.38, 0.28, 2.05, 1.83, 1.26, 1.19]);  data.addRow(["'02'", 0.35, 0.27, 2.02, 1.78, 1.26, 1.19]);  data.addRow(["'02'", 0.68, 0.37, 2.26, 2.02, 1.26, 1.19]);  data.addRow(["'02'", 0.33, 0.29, 2.01, 1.81, 1.25, 1.20]);  data.addRow(["'02'", 0.41, 0.35, 2.05, 1.89, 1.25, 1.20]);  data.addRow(["'02'", 0.46, 0.28, 2.11, 1.86, 1.27, 1.20]);  data.addRow(["'02'", 0.42, 0.36, 2.08, 2.05, 1.26, 1.19]);  data.addRow(["'02'", 0.58, 0.31, 2.20, 1.93, 1.26, 1.22]);  data.addRow(["'02'", 0.39, 0.33, 2.05, 1.87, 1.26, 1.25]);  data.addRow(["'02'", 0.42, 0.28, 2.08, 1.88, 1.27, 1.21]);  data.addRow(["'02'", 0.38, 0.36, 2.06, 1.90, 1.26, 1.20]);  data.addRow(["'02'", 0.34, 0.28, 2.01, 1.81, 1.25, 1.19]);  data.addRow(["'02'", 0.40, 0.29, 2.07, 1.84, 1.26, 1.19]);  data.addRow(["'02'", 0.30, 0.27, 1.97, 1.79, 1.25, 1.18]);  data.addRow(["'02'", 0.35, 0.49, 2.08, 1.98, 1.25, 1.19]);  data.addRow(["'02'", 0.45, 0.28, 2.08, 1.85, 1.26, 1.19]);  data.addRow(["'02'", 0.32, 0.28, 2.00, 1.85, 1.25, 1.19]);  data.addRow(["'02'", 0.66, 0.27, 2.22, 1.85, 1.26, 1.19]);  data.addRow(["'02'", 0.99, 0.29, 2.49, 1.94, 1.30, 1.20]);  data.addRow(["'02'", 0.36, 0.28, 2.02, 1.77, 1.26, 1.18]);  data.addRow(["'02'", 0.31, 0.26, 1.99, 1.75, 1.26, 1.17]);  data.addRow(["'02'", 0.53, 0.29, 2.16, 1.87, 1.28, 1.20]);  data.addRow(["'02'", 0.32, 0.35, 2.01, 1.84, 1.26, 1.19]);  data.addRow(["'02'", 0.37, 0.28, 2.04, 1.79, 1.27, 1.19]);  data.addRow(["'02'", 0.45, 0.28, 2.11, 1.83, 1.28, 1.22]);  data.addRow(["'02'", 0.37, 0.51, 2.13, 1.99, 1.27, 1.22]);  data.addRow(["'02'", 0.40, 0.29, 2.09, 1.84, 1.27, 1.20]);  data.addRow(["'02'", 0.33, 0.49, 2.10, 2.07, 1.27, 1.20]);  data.addRow(["'02'", 0.35, 0.48, 2.11, 1.94, 1.27, 1.20]);  data.addRow(["'02'", 0.43, 0.29, 2.11, 1.85, 1.28, 1.21]);  data.addRow(["'02'", 0.84, 0.33, 2.55, 2.25, 1.48, 1.43]);  data.addRow(["'02'", 0.99, 0.32, 2.57, 2.10, 1.34, 1.27]);  data.addRow(["'02'", 0.52, 0.35, 2.18, 1.97, 1.25, 1.20]);  data.addRow(["'02'", 1.43, 0.31, 2.83, 2.29, 1.26, 1.23]);  data.addRow(["'02'", 0.63, 0.36, 2.40, 2.17, 1.30, 1.25]);  data.addRow(["'02'", 1.08, 0.32, 2.68, 2.17, 1.32, 1.27]);  data.addRow(["'02'", 0.70, 0.30, 2.39, 2.12, 1.31, 1.28]);  data.addRow(["'02'", 2.82, 0.35, 3.96, 2.93, 1.29, 1.24]);  data.addRow(["'02'", 2.91, 0.60, 4.23, 3.55, 1.45, 1.39]);  data.addRow(["'02'", 1.41, 1.81, 3.57, 3.71, 1.33, 1.27]);  data.addRow(["'02'", 1.03, 0.60, 2.73, 2.46, 1.34, 1.29]);  data.addRow(["'02'", 0.66, 0.44, 2.46, 2.27, 1.36, 1.31]);  data.addRow(["'02'", 0.98, 0.41, 2.65, 2.33, 1.33, 1.28]);  data.addRow(["'02'", 34.02, 0.89, 27.28, 15.06, 1.35, 1.31]);  data.addRow(["'02'", 0.67, 0.41, 2.40, 2.13, 1.33, 1.27]);  data.addRow(["'02'", 1.00, 0.31, 2.57, 2.13, 1.31, 1.26]);  data.addRow(["'02'", 0.79, 0.32, 2.48, 2.20, 1.32, 1.29]);  data.addRow(["'02'", 1.05, 0.34, 2.69, 2.37, 1.33, 1.29]);  data.addRow(["'02'", 0.82, 0.41, 2.53, 2.28, 1.33, 1.27]);  data.addRow(["'02'", 1.22, 0.34, 2.80, 2.34, 1.35, 1.30]);  data.addRow(["'02'", 0.45, 0.75, 2.34, 2.28, 1.27, 1.21]);  data.addRow(["'02'", 0.45, 0.28, 2.13, 1.90, 1.26, 1.20]);  data.addRow(["'02'", 0.75, 0.38, 2.42, 2.06, 1.28, 1.22]);  data.addRow(["'02'", 0.43, 0.45, 2.17, 2.05, 1.28, 1.21]);  data.addRow(["'02'", 0.43, 0.30, 2.12, 1.94, 1.28, 1.24]);  data.addRow(["'02'", 0.35, 0.71, 2.15, 2.14, 1.26, 1.21]);  data.addRow(["'02'", 0.36, 0.29, 2.05, 1.91, 1.26, 1.22]);  data.addRow(["'02'", 0.66, 0.30, 2.42, 2.10, 1.45, 1.36]);  data.addRow(["'02'", 0.33, 0.28, 2.00, 1.81, 1.25, 1.20]);  data.addRow(["'02'", 0.35, 0.37, 2.04, 1.87, 1.27, 1.21]);  data.addRow(["'02'", 0.40, 0.28, 2.06, 1.87, 1.28, 1.21]);  data.addRow(["'02'", 0.35, 0.35, 2.04, 1.91, 1.28, 1.22]);  data.addRow(["'02'", 0.31, 0.39, 1.98, 1.85, 1.26, 1.20]);  data.addRow(["'02'", 0.34, 0.35, 2.02, 1.86, 1.27, 1.21]);  data.addRow(["'02'", 0.34, 0.28, 2.01, 1.77, 1.27, 1.19]);  data.addRow(["'02'", 0.40, 0.34, 2.06, 1.85, 1.26, 1.19]);  data.addRow(["'02'", 0.32, 0.50, 2.08, 1.92, 1.27, 1.19]);  data.addRow(["'02'", 0.31, 0.35, 1.98, 1.83, 1.26, 1.20]);  data.addRow(["'02'", 0.50, 0.28, 2.14, 1.83, 1.28, 1.22]);  data.addRow(["'02'", 0.31, 0.34, 2.00, 1.82, 1.27, 1.20]);  data.addRow(["'02'", 0.71, 0.29, 2.27, 1.94, 1.28, 1.21]);  data.addRow(["'02'", 0.35, 0.74, 2.18, 2.14, 1.28, 1.21]);  data.addRow(["'02'", 0.31, 0.63, 2.10, 2.03, 1.26, 1.21]);  data.addRow(["'02'", 0.32, 1.03, 2.26, 2.35, 1.29, 1.23]);  data.addRow(["'02'", 0.38, 1.97, 2.62, 3.08, 1.27, 1.22]);  data.addRow(["'02'", 0.37, 3.68, 3.04, 4.16, 1.28, 1.24]);  data.addRow(["'02'", 0.54, 2.72, 2.96, 3.55, 1.29, 1.22]);  data.addRow(["'02'", 0.39, 1.31, 2.39, 2.50, 1.28, 1.20]);  data.addRow(["'02'", 0.47, 0.29, 2.13, 1.88, 1.30, 1.23]);  data.addRow(["'02'", 0.39, 0.30, 2.07, 1.87, 1.29, 1.23]);  data.addRow(["'02'", 0.33, 0.27, 2.03, 1.83, 1.26, 1.22]);  data.addRow(["'02'", 0.69, 0.74, 2.41, 2.37, 1.29, 1.24]);  data.addRow(["'02'", 1.05, 0.32, 2.66, 2.21, 1.33, 1.27]);  data.addRow(["'02'", 24.43, 1.31, 21.62, 15.81, 1.39, 1.34]);  data.addRow(["'02'", 2.23, 1.45, 4.60, 4.72, 1.61, 1.58]);  data.addRow(["'02'", 14.64, 0.66, 12.96, 7.84, 1.43, 1.37]);  data.addRow(["'02'", 1.09, 17.30, 6.75, 14.53, 1.45, 1.39]);  data.addRow(["'02'", 1.13, 0.46, 3.32, 2.93, 1.90, 1.83]);  data.addRow(["'02'", 2.41, 0.58, 4.58, 3.96, 2.18, 2.16]);  data.addRow(["'02'", 1.38, 0.77, 4.07, 4.10, 2.23, 2.23]);  data.addRow(["'02'", 1.34, 0.56, 3.80, 3.61, 2.09, 2.06]);  data.addRow(["'02'", 2.78, 0.57, 5.77, 4.97, 2.18, 2.12]);  data.addRow(["'02'", 2.46, 0.82, 5.12, 4.41, 2.17, 2.11]);  data.addRow(["'02'", 1.76, 1.38, 4.23, 3.89, 1.88, 1.81]);  data.addRow(["'02'", 1.83, 1.18, 3.64, 3.46, 1.36, 1.30]);  data.addRow(["'02'", 1.83, 1.06, 4.19, 4.30, 2.07, 2.03]);  data.addRow(["'02'", 3.03, 36.21, 9.76, 28.94, 2.17, 2.11]);  data.addRow(["'02'", 1.39, 1.06, 4.04, 4.00, 2.05, 1.99]);  data.addRow(["'02'", 2.54, 0.55, 4.95, 3.90, 2.10, 2.05]);  data.addRow(["'02'", 1.38, 0.56, 3.67, 3.21, 2.06, 1.99]);  data.addRow(["'02'", 1.31, 0.61, 3.60, 3.25, 2.12, 2.04]);  data.addRow(["'02'", 1.92, 0.49, 4.11, 3.45, 2.19, 2.09]);  data.addRow(["'02'", 1.93, 25.52, 7.25, 20.86, 2.19, 2.14]);  data.addRow(["'02'", 1.44, 4.34, 4.22, 6.07, 2.19, 2.11]);  data.addRow(["'02'", 1.36, 0.76, 3.83, 3.57, 2.20, 2.12]);  data.addRow(["'02'", 1.18, 0.63, 3.57, 3.23, 2.15, 2.09]);  data.addRow(["'02'", 1.04, 0.54, 3.39, 3.16, 2.12, 2.03]);  data.addRow(["'02'", 1.28, 0.46, 3.58, 3.13, 2.16, 2.07]);  data.addRow(["'02'", 1.16, 0.45, 3.46, 3.07, 2.13, 2.06]);  data.addRow(["'02'", 1.07, 0.43, 3.39, 3.07, 2.14, 2.09]);  data.addRow(["'02'", 1.04, 0.52, 3.34, 3.06, 2.12, 2.04]);  data.addRow(["'02'", 1.45, 0.45, 3.68, 3.15, 2.15, 2.09]);  data.addRow(["'02'", 1.08, 0.53, 3.42, 3.05, 2.13, 2.04]);  data.addRow(["'02'", 1.13, 0.43, 3.48, 3.05, 2.18, 2.06]);  data.addRow(["'02'", 1.08, 0.51, 3.44, 3.12, 2.15, 2.07]);  data.addRow(["'02'", 0.98, 0.44, 3.36, 3.04, 2.16, 2.08]);  data.addRow(["'02'", 0.97, 0.52, 3.32, 3.12, 2.13, 2.04]);  data.addRow(["'02'", 1.03, 0.43, 3.37, 3.02, 2.14, 2.06]);  data.addRow(["'02'", 1.02, 0.53, 3.37, 3.11, 2.12, 2.06]);  data.addRow(["'02'", 1.07, 1.51, 3.81, 3.84, 2.18, 2.11]);  data.addRow(["'02'", 1.03, 3.47, 4.34, 5.04, 2.14, 2.05]);  data.addRow(["'02'", 0.99, 2.52, 3.98, 4.43, 2.18, 2.14]);  data.addRow(["'02'", 1.05, 4.77, 4.77, 5.96, 2.18, 2.13]);  data.addRow(["'02'", 1.08, 5.29, 4.84, 6.39, 2.14, 2.09]);  data.addRow(["'02'", 1.03, 2.70, 4.03, 4.48, 2.14, 2.06]);  data.addRow(["'02'", 1.04, 1.44, 3.67, 3.66, 2.16, 2.07]);  data.addRow(["'02'", 1.46, 0.46, 3.67, 3.15, 2.17, 2.08]);  data.addRow(["'02'", 1.11, 1.52, 3.70, 3.75, 2.11, 2.04]);  data.addRow(["'02'", 1.11, 0.44, 3.34, 2.98, 2.04, 1.98]);  data.addRow(["'02'", 1.39, 0.47, 3.60, 3.19, 2.00, 1.97]);  data.addRow(["'02'", 1.34, 0.55, 3.66, 3.26, 2.10, 2.04]);  data.addRow(["'02'", 1.42, 0.61, 4.05, 3.31, 2.12, 2.08]);  data.addRow(["'02'", 2.33, 0.67, 4.79, 4.32, 2.18, 2.15]);  data.addRow(["'02'", 4.91, 0.66, 6.81, 5.17, 2.16, 2.12]);  data.addRow(["'02'", 6.08, 0.82, 7.54, 5.60, 2.09, 2.04]);  data.addRow(["'02'", 5.59, 0.76, 7.31, 5.53, 2.23, 2.18]);  data.addRow(["'02'", 1.46, 0.59, 4.04, 3.37, 2.10, 2.05]);  data.addRow(["'02'", 1.73, 1.24, 4.25, 4.20, 2.15, 2.10]);  data.addRow(["'02'", 1.35, 0.54, 3.83, 3.54, 2.19, 2.13]);  data.addRow(["'02'", 2.07, 0.64, 4.44, 3.83, 2.26, 2.20]);  data.addRow(["'02'", 3.15, 0.68, 5.34, 4.29, 2.24, 2.18]);  data.addRow(["'02'", 2.02, 5.60, 7.44, 10.04, 2.20, 2.14]);  data.addRow(["'02'", 1.68, 14.64, 4.27, 22.98, 2.19, 2.16]);  data.addRow(["'02'", 3.44, 0.79, 15.46, 4.25, 2.35, 2.30]);  data.addRow(["'02'", 1.74, 0.61, 4.20, 3.88, 2.19, 2.12]);  data.addRow(["'02'", 1.78, 0.65, 4.25, 3.76, 2.23, 2.18]);  data.addRow(["'02'", 1.74, 0.52, 3.93, 3.35, 2.08, 2.00]);  data.addRow(["'02'", 1.81, 0.47, 3.93, 3.31, 2.13, 2.06]);  data.addRow(["'02'", 1.19, 0.43, 3.47, 3.04, 2.09, 2.03]);  data.addRow(["'02'", 1.29, 0.45, 3.53, 3.25, 2.09, 2.05]);  data.addRow(["'02'", 1.04, 0.45, 3.35, 3.03, 2.09, 2.03]);  data.addRow(["'02'", 1.04, 0.84, 3.46, 3.27, 2.09, 2.01]);  data.addRow(["'02'", 14.03, 0.68, 12.44, 7.65, 2.10, 2.00]);  data.addRow(["'02'", 1.11, 0.45, 3.45, 3.04, 2.12, 2.03]);  data.addRow(["'02'", 1.04, 0.43, 3.32, 2.94, 2.06, 1.99]);  data.addRow(["'02'", 1.07, 0.43, 3.37, 2.97, 2.09, 2.02]);  data.addRow(["'02'", 1.03, 0.42, 3.32, 2.96, 2.08, 2.01]);  data.addRow(["'02'", 0.99, 0.45, 3.33, 3.02, 2.12, 2.04]);  data.addRow(["'02'", 1.07, 0.46, 3.51, 3.16, 2.14, 2.06]);  data.addRow(["'02'", 1.60, 0.52, 3.86, 3.36, 2.21, 2.13]);  data.addRow(["'02'", 1.28, 0.45, 3.60, 3.15, 2.21, 2.13]);  data.addRow(["'02'", 1.00, 0.51, 3.36, 3.02, 2.14, 2.05]);  data.addRow(["'02'", 1.00, 0.44, 3.32, 2.93, 2.13, 2.03]);  data.addRow(["'02'", 1.03, 0.50, 3.35, 2.99, 2.13, 2.04]);  data.addRow(["'02'", 0.98, 0.69, 3.38, 3.09, 2.13, 2.04]);  data.addRow(["'02'", 0.97, 0.44, 3.34, 3.00, 2.13, 2.04]);  data.addRow(["'02'", 5.45, 0.46, 6.37, 3.23, 2.10, 2.03]);  data.addRow(["'02'", 1.08, 0.70, 3.48, 3.19, 2.15, 2.08]);  data.addRow(["'02'", 2.27, 2.01, 7.99, 6.70, 2.11, 2.03]);  data.addRow(["'02'", 4.66, 3.35, 11.30, 9.40, 2.14, 2.05]);  data.addRow(["'02'", 7.61, 1.42, 8.16, 6.18, 2.13, 2.05]);  data.addRow(["'02'", 5.21, 3.12, 10.00, 8.58, 2.15, 2.05]);  data.addRow(["'02'", 27.23, 3.61, 26.55, 17.07, 2.17, 2.08]);  data.addRow(["'02'", 11.54, 2.65, 11.11, 8.14, 2.15, 2.08]);  data.addRow(["'02'", 0.99, 0.98, 3.46, 3.33, 2.11, 2.02]);  data.addRow(["'02'", 1.10, 1.28, 3.54, 3.50, 2.01, 1.94]);  data.addRow(["'02'", 1.24, 0.45, 3.54, 3.16, 2.13, 2.07]);  data.addRow(["'02'", 2.38, 1.14, 4.53, 3.98, 2.17, 2.10]);  data.addRow(["'02'", 10.24, 2.22, 13.71, 13.59, 2.20, 2.15]);  data.addRow(["'02'", 2.33, 0.73, 4.77, 4.28, 2.36, 2.29]);  data.addRow(["'02'", 10.72, 0.94, 10.52, 7.52, 2.48, 2.43]);  data.addRow(["'02'", 11.07, 1.44, 11.40, 7.82, 2.12, 2.08]);  data.addRow(["'02'", 9.25, 0.63, 9.03, 5.82, 1.39, 1.35]);  data.addRow(["'02'", 0.82, 0.37, 2.61, 2.36, 1.33, 1.28]);  data.addRow(["'02'", 0.69, 0.47, 2.69, 2.39, 1.35, 1.30]);  data.addRow(["'02'", 3.24, 22.51, 16.60, 28.14, 1.35, 1.29]);  data.addRow(["'02'", 1.16, 1.11, 3.23, 2.99, 1.38, 1.32]);  data.addRow(["'02'", 4.64, 0.67, 5.83, 4.44, 1.43, 1.39]);  data.addRow(["'02'", 4.26, 0.81, 5.32, 4.42, 1.42, 1.35]);  data.addRow(["'02'", 1.37, 0.56, 3.35, 2.64, 1.35, 1.32]);  data.addRow(["'02'", 1.65, 1.30, 3.69, 3.41, 1.38, 1.34]);  data.addRow(["'02'", 1.28, 0.41, 2.96, 2.56, 1.34, 1.35]);  data.addRow(["'02'", 3.84, 3.00, 5.82, 4.79, 1.38, 1.33]);  data.addRow(["'02'", 4.30, 10.22, 7.88, 10.75, 1.42, 1.37]);  data.addRow(["'02'", 1.39, 0.46, 2.94, 2.45, 1.27, 1.22]);  data.addRow(["'02'", 0.89, 0.30, 2.52, 2.07, 1.34, 1.28]);  data.addRow(["'02'", 0.88, 0.35, 2.43, 1.93, 1.31, 1.21]);  data.addRow(["'02'", 0.49, 0.30, 2.15, 1.92, 1.27, 1.24]);  data.addRow(["'02'", 0.52, 0.28, 2.14, 1.89, 1.25, 1.19]);  data.addRow(["'02'", 0.42, 0.28, 2.14, 1.86, 1.25, 1.18]);  data.addRow(["'02'", 0.42, 0.64, 2.21, 2.26, 1.24, 1.18]);  data.addRow(["'02'", 0.41, 0.28, 2.09, 1.80, 1.25, 1.20]);  data.addRow(["'02'", 0.38, 0.31, 2.05, 1.86, 1.24, 1.20]);  data.addRow(["'02'", 0.53, 0.31, 2.18, 1.91, 1.27, 1.22]);  data.addRow(["'02'", 0.75, 0.82, 2.52, 2.22, 1.26, 1.20]);  data.addRow(["'02'", 0.33, 0.28, 2.04, 1.78, 1.26, 1.19]);  data.addRow(["'02'", 0.31, 0.35, 2.01, 1.83, 1.26, 1.19]);  data.addRow(["'02'", 0.37, 0.35, 2.05, 1.85, 1.25, 1.19]);  data.addRow(["'02'", 0.29, 0.26, 1.95, 1.73, 1.25, 1.18]);  data.addRow(["'02'", 0.32, 0.54, 2.08, 1.95, 1.25, 1.20]);  data.addRow(["'02'", 0.30, 0.28, 1.99, 1.77, 1.25, 1.19]);  data.addRow(["'02'", 0.31, 0.34, 1.99, 1.81, 1.26, 1.20]);  data.addRow(["'02'", 0.32, 0.29, 2.00, 1.77, 1.26, 1.19]);  data.addRow(["'02'", 0.31, 0.27, 1.99, 1.76, 1.27, 1.19]);  data.addRow(["'02'", 0.41, 0.28, 2.07, 1.79, 1.28, 1.20]);  data.addRow(["'02'", 0.38, 1.27, 2.39, 2.49, 1.28, 1.21]);  data.addRow(["'02'", 0.34, 1.99, 2.56, 2.93, 1.26, 1.20]);  data.addRow(["'02'", 0.36, 3.29, 3.03, 3.86, 1.29, 1.24]);  data.addRow(["'02'", 0.35, 1.38, 2.40, 2.54, 1.26, 1.20]);  data.addRow(["'02'", 0.34, 1.00, 2.17, 2.28, 1.27, 1.21]);  data.addRow(["'02'", 0.35, 2.37, 2.71, 3.23, 1.27, 1.20]);  data.addRow(["'02'", 0.42, 0.62, 2.20, 2.06, 1.27, 1.21]);  data.addRow(["'02'", 0.34, 0.29, 2.01, 1.81, 1.26, 1.20]);  data.addRow(["'02'", 0.33, 0.34, 2.00, 1.83, 1.26, 1.21]);  data.addRow(["'02'", 1.76, 0.96, 3.25, 2.88, 1.23, 1.19]);  data.addRow(["'02'", 0.62, 1.69, 2.81, 3.02, 1.27, 1.24]);  data.addRow(["'02'", 0.68, 2.91, 2.89, 4.17, 1.33, 1.27]);  data.addRow(["'02'", 0.77, 0.73, 2.76, 2.50, 1.31, 1.26]);  data.addRow(["'02'", 0.85, 0.38, 2.74, 2.36, 1.37, 1.32]);  data.addRow(["'02'", 2.74, 1.16, 4.58, 3.99, 1.57, 1.51]);  data.addRow(["'02'", 3.17, 0.91, 4.97, 3.75, 1.50, 1.43]);  data.addRow(["'02'", 1.38, 0.40, 3.01, 2.67, 1.39, 1.34]);  data.addRow(["'02'", 0.56, 0.33, 1.78, 1.70, 0.94, 0.90]); 
	    var graphtitle="HPCf Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    