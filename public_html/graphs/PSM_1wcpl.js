
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 3.89, 26.85, 19.49, 26.34, 3.79, 4.62]);  data.addRow(["'02'", 7.23, 77.20, 50.89, 68.10, 6.90, 8.35]);  data.addRow(["'02'", 7.32, 54.58, 41.74, 51.80, 6.38, 7.81]);  data.addRow(["'02'", 11.23, 57.19, 45.56, 56.28, 6.80, 8.02]);  data.addRow(["'02'", 9.01, 43.97, 37.71, 45.70, 6.85, 8.09]);  data.addRow(["'02'", 5.72, 39.07, 32.75, 40.52, 6.20, 7.38]);  data.addRow(["'02'", 6.93, 45.60, 34.46, 46.36, 6.03, 7.09]);  data.addRow(["'02'", 7.85, 49.11, 35.09, 46.34, 5.55, 6.64]);  data.addRow(["'02'", 5.84, 51.58, 33.93, 47.95, 6.13, 7.21]);  data.addRow(["'02'", 4.64, 32.85, 26.62, 37.44, 5.41, 7.33]);  data.addRow(["'02'", 15.68, 11.68, 23.01, 22.49, 4.64, 5.56]);  data.addRow(["'02'", 51.45, 10.41, 47.57, 35.91, 4.86, 5.74]);  data.addRow(["'02'", 59.09, 10.20, 51.29, 38.48, 4.39, 4.99]);  data.addRow(["'02'", 56.78, 7.49, 47.77, 38.63, 3.87, 4.45]);  data.addRow(["'02'", 56.51, 5.38, 45.82, 44.00, 3.96, 4.38]);  data.addRow(["'02'", 70.84, 11.67, 59.44, 45.05, 3.76, 4.25]);  data.addRow(["'02'", 59.84, 4.74, 50.62, 36.83, 4.18, 4.57]);  data.addRow(["'02'", 65.67, 7.33, 54.76, 43.90, 3.87, 4.31]);  data.addRow(["'02'", 70.84, 5.41, 56.30, 36.75, 3.90, 4.26]);  data.addRow(["'02'", 58.77, 11.55, 53.11, 48.23, 3.80, 4.17]);  data.addRow(["'02'", 64.32, 9.18, 55.18, 38.59, 4.32, 4.68]);  data.addRow(["'02'", 52.59, 10.62, 50.74, 35.66, 4.02, 4.36]);  data.addRow(["'02'", 61.70, 18.25, 56.18, 44.74, 4.00, 4.38]);  data.addRow(["'02'", 65.27, 14.57, 56.65, 41.09, 3.56, 3.97]);  data.addRow(["'02'", 53.50, 6.26, 44.76, 32.47, 3.59, 3.89]);  data.addRow(["'02'", 54.96, 2.92, 43.67, 28.08, 3.34, 3.67]);  data.addRow(["'02'", 39.80, 8.21, 35.54, 25.35, 3.45, 3.75]);  data.addRow(["'02'", 62.79, 3.55, 49.35, 40.77, 3.22, 3.59]);  data.addRow(["'02'", 74.24, 4.73, 58.83, 38.92, 3.36, 3.68]);  data.addRow(["'02'", 62.76, 5.17, 51.26, 35.03, 3.14, 3.47]);  data.addRow(["'02'", 30.65, 3.93, 28.04, 21.86, 3.18, 3.54]);  data.addRow(["'02'", 43.96, 4.58, 38.15, 30.05, 3.23, 3.52]);  data.addRow(["'02'", 74.09, 8.94, 65.95, 44.06, 3.12, 3.47]);  data.addRow(["'02'", 69.05, 11.08, 59.99, 49.99, 3.31, 3.59]);  data.addRow(["'02'", 40.77, 4.18, 37.21, 31.69, 3.14, 3.45]);  data.addRow(["'02'", 47.56, 2.73, 39.15, 24.82, 3.15, 3.45]);  data.addRow(["'02'", 90.85, 2.98, 69.60, 49.08, 3.05, 3.37]);  data.addRow(["'02'", 18.21, 1.22, 16.40, 14.05, 3.15, 3.41]);  data.addRow(["'02'", 45.82, 2.56, 36.27, 28.82, 3.23, 3.60]);  data.addRow(["'02'", 77.87, 2.71, 63.11, 41.72, 3.10, 3.39]);  data.addRow(["'02'", 0.76, 2.50, 3.50, 4.55, 1.79, 2.27]);  data.addRow(["'02'", 0.99, 1.71, 3.08, 3.46, 1.52, 1.66]);  data.addRow(["'02'", 0.73, 3.69, 4.31, 4.97, 1.88, 1.91]);  data.addRow(["'02'", 1.87, 5.14, 6.15, 6.24, 1.94, 1.92]);  data.addRow(["'02'", 1.58, 11.82, 10.67, 10.92, 1.91, 1.92]);  data.addRow(["'02'", 2.16, 11.28, 11.01, 11.00, 2.19, 2.22]);  data.addRow(["'02'", 2.35, 10.73, 10.77, 10.84, 2.51, 2.47]);  data.addRow(["'02'", 2.79, 12.03, 11.51, 12.03, 2.83, 2.79]);  data.addRow(["'02'", 2.77, 19.15, 15.12, 16.85, 2.64, 2.62]);  data.addRow(["'02'", 1.80, 19.28, 13.59, 16.75, 2.80, 2.75]);  data.addRow(["'02'", 1.45, 17.44, 12.75, 15.04, 2.52, 2.45]);  data.addRow(["'02'", 1.92, 19.64, 14.29, 16.33, 2.26, 2.26]);  data.addRow(["'02'", 1.58, 12.12, 9.12, 11.04, 2.12, 2.11]);  data.addRow(["'02'", 1.41, 12.30, 8.88, 10.92, 1.78, 1.79]);  data.addRow(["'02'", 2.30, 7.34, 7.74, 8.04, 2.13, 2.12]);  data.addRow(["'02'", 2.67, 11.18, 10.79, 11.38, 2.50, 2.45]);  data.addRow(["'02'", 1.88, 7.85, 8.88, 9.51, 2.45, 2.41]);  data.addRow(["'02'", 2.86, 17.55, 15.30, 15.11, 2.06, 2.12]);  data.addRow(["'02'", 2.44, 16.83, 14.44, 14.50, 2.31, 2.30]);  data.addRow(["'02'", 1.21, 8.59, 8.20, 8.66, 2.07, 2.06]);  data.addRow(["'02'", 0.80, 5.34, 5.52, 6.22, 1.80, 1.80]);  data.addRow(["'02'", 0.67, 1.09, 2.70, 3.03, 1.55, 1.60]);  data.addRow(["'02'", 2.52, 4.87, 6.18, 5.80, 1.47, 1.50]);  data.addRow(["'02'", 0.97, 5.57, 5.50, 5.90, 1.48, 1.52]);  data.addRow(["'02'", 1.15, 2.74, 3.51, 4.01, 1.50, 1.50]);  data.addRow(["'02'", 1.73, 3.55, 3.61, 5.44, 1.27, 1.27]);  data.addRow(["'02'", 0.78, 1.55, 2.89, 3.11, 1.61, 1.60]);  data.addRow(["'02'", 0.73, 2.33, 3.18, 3.64, 1.54, 1.56]);  data.addRow(["'02'", 0.83, 0.67, 2.15, 2.09, 1.32, 1.34]);  data.addRow(["'02'", 0.84, 1.57, 2.55, 2.76, 1.35, 1.37]);  data.addRow(["'02'", 1.07, 1.20, 2.60, 2.50, 1.38, 1.41]);  data.addRow(["'02'", 0.93, 2.25, 2.73, 3.16, 1.26, 1.29]);  data.addRow(["'02'", 0.61, 0.42, 1.85, 1.79, 1.29, 1.29]);  data.addRow(["'02'", 1.58, 0.35, 2.44, 1.77, 1.21, 1.21]);  data.addRow(["'02'", 0.56, 6.04, 3.80, 5.54, 1.25, 1.28]);  data.addRow(["'02'", 0.25, 0.27, 1.30, 1.34, 1.07, 1.07]);  data.addRow(["'02'", 0.26, 0.21, 1.28, 1.33, 1.07, 1.09]);  data.addRow(["'02'", 0.37, 0.19, 1.30, 1.29, 1.01, 1.03]);  data.addRow(["'02'", 0.29, 0.40, 1.45, 1.43, 1.11, 1.05]);  data.addRow(["'02'", 0.20, 0.28, 1.29, 1.34, 1.08, 1.05]);  data.addRow(["'02'", 0.23, 0.27, 1.35, 1.45, 1.12, 1.14]);  data.addRow(["'02'", 0.25, 0.27, 1.21, 1.25, 1.00, 0.99]);  data.addRow(["'02'", 0.36, 0.20, 1.29, 1.24, 1.01, 1.00]);  data.addRow(["'02'", 0.65, 0.17, 1.49, 1.33, 1.01, 0.99]);  data.addRow(["'02'", 0.25, 1.28, 1.79, 2.12, 1.03, 1.05]);  data.addRow(["'02'", 0.76, 0.27, 1.61, 1.43, 1.01, 0.99]);  data.addRow(["'02'", 0.29, 0.32, 1.26, 1.30, 0.99, 0.98]);  data.addRow(["'02'", 0.39, 0.27, 1.34, 1.37, 1.00, 1.01]);  data.addRow(["'02'", 0.58, 0.60, 1.84, 1.97, 1.18, 1.15]);  data.addRow(["'02'", 0.34, 0.56, 1.43, 1.74, 0.99, 1.00]);  data.addRow(["'02'", 0.59, 1.62, 2.36, 2.68, 1.16, 1.15]);  data.addRow(["'02'", 0.77, 2.06, 2.77, 3.00, 1.13, 1.11]);  data.addRow(["'02'", 0.79, 4.49, 4.13, 4.83, 1.37, 1.40]);  data.addRow(["'02'", 0.59, 2.33, 2.82, 3.34, 1.24, 1.23]);  data.addRow(["'02'", 2.30, 3.63, 5.24, 4.76, 1.49, 1.47]);  data.addRow(["'02'", 0.57, 2.48, 2.98, 3.44, 1.33, 1.30]);  data.addRow(["'02'", 1.45, 17.61, 13.98, 14.20, 1.48, 1.47]);  data.addRow(["'02'", 2.21, 14.98, 13.24, 12.92, 1.76, 1.72]);  data.addRow(["'02'", 0.77, 2.46, 3.39, 3.68, 1.51, 1.45]);  data.addRow(["'02'", 1.42, 6.02, 6.02, 6.51, 1.67, 1.62]);  data.addRow(["'02'", 1.66, 11.33, 10.15, 11.15, 2.24, 2.22]);  data.addRow(["'02'", 1.44, 10.87, 9.44, 10.21, 2.04, 2.01]);  data.addRow(["'02'", 1.87, 8.57, 8.65, 9.66, 2.31, 2.28]);  data.addRow(["'02'", 2.34, 11.51, 9.16, 11.48, 2.05, 2.03]);  data.addRow(["'02'", 1.84, 18.16, 14.38, 15.90, 2.62, 2.53]);  data.addRow(["'02'", 1.94, 18.71, 14.71, 16.20, 2.43, 2.40]);  data.addRow(["'02'", 1.61, 15.61, 12.73, 13.49, 2.06, 2.05]);  data.addRow(["'02'", 1.35, 13.03, 10.10, 11.57, 1.88, 1.87]);  data.addRow(["'02'", 2.56, 12.36, 11.48, 11.61, 2.27, 2.20]);  data.addRow(["'02'", 2.75, 21.29, 16.12, 18.09, 2.43, 2.36]);  data.addRow(["'02'", 2.23, 15.55, 11.89, 14.08, 2.22, 2.23]);  data.addRow(["'02'", 2.06, 15.72, 13.42, 14.29, 2.42, 2.36]);  data.addRow(["'02'", 2.16, 14.31, 11.34, 13.39, 2.46, 2.43]);  data.addRow(["'02'", 2.32, 8.51, 9.32, 10.16, 2.30, 2.25]);  data.addRow(["'02'", 2.73, 15.29, 13.81, 15.54, 2.47, 2.42]);  data.addRow(["'02'", 1.98, 15.96, 12.79, 16.17, 2.63, 2.58]);  data.addRow(["'02'", 2.54, 9.70, 11.27, 11.43, 2.20, 2.16]);  data.addRow(["'02'", 1.59, 10.77, 8.59, 13.32, 2.21, 2.17]);  data.addRow(["'02'", 2.78, 10.82, 13.28, 11.62, 2.16, 2.16]);  data.addRow(["'02'", 1.72, 7.64, 7.37, 7.54, 1.56, 1.55]);  data.addRow(["'02'", 1.06, 2.39, 3.08, 3.36, 1.22, 1.25]);  data.addRow(["'02'", 1.25, 3.32, 3.88, 3.80, 1.22, 1.20]);  data.addRow(["'02'", 0.57, 7.60, 4.50, 6.37, 1.03, 1.02]);  data.addRow(["'02'", 0.36, 0.74, 1.46, 1.56, 0.89, 0.90]);  data.addRow(["'02'", 0.84, 0.60, 1.65, 1.47, 0.84, 0.83]);  data.addRow(["'02'", 0.51, 0.17, 1.10, 1.06, 0.72, 0.73]);  data.addRow(["'02'", 0.26, 0.13, 0.95, 0.94, 0.75, 0.73]);  data.addRow(["'02'", 0.14, 0.12, 0.80, 0.83, 0.68, 0.68]);  data.addRow(["'02'", 0.21, 0.24, 0.99, 1.06, 0.78, 0.78]);  data.addRow(["'02'", 0.30, 0.27, 0.99, 1.00, 0.72, 0.70]);  data.addRow(["'02'", 0.29, 0.23, 1.09, 1.12, 0.82, 0.82]);  data.addRow(["'02'", 0.35, 1.64, 1.67, 2.09, 0.80, 0.81]);  data.addRow(["'02'", 0.43, 2.01, 2.13, 2.67, 0.98, 0.99]);  data.addRow(["'02'", 0.39, 1.96, 1.94, 2.48, 0.96, 0.95]);  data.addRow(["'02'", 1.44, 14.34, 8.55, 12.23, 1.37, 1.39]);  data.addRow(["'02'", 1.39, 14.45, 9.50, 13.25, 2.25, 2.18]);  data.addRow(["'02'", 4.82, 22.82, 20.72, 23.38, 4.62, 4.16]);  data.addRow(["'02'", 4.72, 30.70, 26.88, 30.66, 5.49, 5.14]);  data.addRow(["'02'", 7.09, 31.26, 31.74, 34.42, 6.48, 6.18]);  data.addRow(["'02'", 8.49, 38.12, 36.96, 38.90, 6.75, 6.44]);  data.addRow(["'02'", 4.63, 30.56, 25.30, 32.93, 5.85, 5.62]);  data.addRow(["'02'", 7.13, 39.14, 35.42, 38.84, 6.33, 6.15]);  data.addRow(["'02'", 14.79, 58.01, 53.38, 57.96, 8.38, 8.59]);  data.addRow(["'02'", 7.78, 51.39, 41.29, 52.18, 7.98, 10.08]);  data.addRow(["'02'", 8.31, 38.71, 34.46, 42.61, 6.75, 8.59]);  data.addRow(["'02'", 9.49, 56.21, 43.84, 53.56, 6.48, 8.10]);  data.addRow(["'02'", 7.96, 48.91, 39.23, 50.02, 7.06, 8.63]);  data.addRow(["'02'", 8.61, 46.98, 41.74, 47.72, 7.33, 8.82]);  data.addRow(["'02'", 18.26, 60.31, 55.47, 61.70, 7.97, 9.23]);  data.addRow(["'02'", 9.87, 57.20, 47.37, 56.27, 7.86, 9.19]);  data.addRow(["'02'", 9.72, 77.69, 62.31, 70.04, 8.02, 9.34]);  data.addRow(["'02'", 12.37, 60.28, 48.37, 61.19, 7.86, 9.18]);  data.addRow(["'02'", 12.03, 64.33, 52.07, 62.47, 6.25, 7.77]);  data.addRow(["'02'", 7.55, 42.71, 36.43, 40.78, 4.96, 5.56]);  data.addRow(["'02'", 7.64, 33.23, 29.52, 32.90, 4.54, 4.60]);  data.addRow(["'02'", 6.99, 23.05, 25.08, 25.11, 4.50, 4.41]);  data.addRow(["'02'", 6.16, 24.28, 22.70, 25.14, 4.32, 4.27]);  data.addRow(["'02'", 6.83, 18.93, 20.16, 19.90, 3.63, 3.62]);  data.addRow(["'02'", 4.74, 11.85, 12.60, 13.64, 3.30, 3.31]);  data.addRow(["'02'", 5.46, 15.35, 15.27, 15.23, 3.11, 3.10]);  data.addRow(["'02'", 3.15, 13.12, 12.67, 14.00, 3.44, 3.42]);  data.addRow(["'02'", 2.97, 17.47, 14.29, 17.38, 3.22, 3.24]);  data.addRow(["'02'", 4.33, 11.95, 12.83, 14.09, 3.37, 3.35]);  data.addRow(["'02'", 3.82, 23.82, 20.46, 21.41, 2.87, 2.89]);  data.addRow(["'02'", 2.32, 13.42, 12.83, 13.40, 3.31, 3.24]);  data.addRow(["'02'", 2.28, 12.94, 10.53, 13.24, 2.64, 2.63]);  data.addRow(["'02'", 2.08, 14.10, 11.29, 13.13, 2.78, 2.71]);  data.addRow(["'02'", 1.98, 8.07, 8.25, 8.33, 2.31, 2.31]);  data.addRow(["'02'", 0.98, 5.03, 5.49, 5.91, 2.02, 2.05]);  data.addRow(["'02'", 1.57, 4.46, 5.51, 5.27, 1.77, 1.80]);  data.addRow(["'02'", 0.69, 8.80, 6.00, 8.00, 1.77, 1.78]);  data.addRow(["'02'", 1.13, 2.53, 3.62, 3.69, 1.65, 1.63]);  data.addRow(["'02'", 0.81, 2.20, 3.29, 3.30, 1.50, 1.52]);  data.addRow(["'02'", 0.43, 0.84, 1.90, 1.99, 1.25, 1.27]);  data.addRow(["'02'", 0.86, 0.94, 2.19, 2.06, 1.25, 1.28]);  data.addRow(["'02'", 0.36, 0.18, 1.40, 1.39, 1.13, 1.15]);  data.addRow(["'02'", 0.30, 0.23, 1.50, 1.53, 1.28, 1.29]);  data.addRow(["'02'", 0.46, 0.36, 1.54, 1.63, 1.18, 1.24]);  data.addRow(["'02'", 0.61, 0.22, 1.63, 1.57, 1.19, 1.22]);  data.addRow(["'02'", 0.44, 0.38, 1.59, 1.61, 1.23, 1.22]);  data.addRow(["'02'", 0.49, 1.69, 2.44, 2.74, 1.33, 1.28]);  data.addRow(["'02'", 0.71, 4.19, 3.39, 4.62, 1.40, 1.39]);  data.addRow(["'02'", 1.37, 2.74, 3.78, 4.18, 1.77, 1.77]);  data.addRow(["'02'", 1.70, 9.13, 8.32, 10.02, 2.94, 2.82]);  data.addRow(["'02'", 5.05, 31.81, 24.95, 30.77, 5.21, 4.81]);  data.addRow(["'02'", 4.50, 29.00, 24.90, 29.49, 5.34, 5.12]);  data.addRow(["'02'", 6.63, 37.23, 33.24, 38.31, 6.75, 6.35]);  data.addRow(["'02'", 8.34, 37.71, 34.88, 39.72, 7.21, 6.77]);  data.addRow(["'02'", 11.43, 38.80, 39.87, 40.44, 7.01, 6.64]);  data.addRow(["'02'", 7.38, 36.28, 32.90, 36.91, 6.80, 6.49]);  data.addRow(["'02'", 7.92, 32.73, 32.05, 35.18, 6.64, 6.28]);  data.addRow(["'02'", 6.70, 37.08, 32.72, 36.52, 6.31, 5.97]);  data.addRow(["'02'", 10.27, 39.41, 35.63, 39.67, 6.28, 6.00]);  data.addRow(["'02'", 9.22, 45.96, 38.64, 45.18, 6.69, 6.33]);  data.addRow(["'02'", 5.94, 48.21, 38.90, 46.24, 7.17, 6.81]);  data.addRow(["'02'", 6.77, 44.44, 36.28, 43.59, 7.70, 7.29]);  data.addRow(["'02'", 10.18, 41.28, 38.95, 44.25, 8.07, 7.58]);  data.addRow(["'02'", 8.80, 52.73, 44.98, 49.85, 7.38, 7.02]);  data.addRow(["'02'", 9.76, 68.39, 53.41, 64.42, 8.83, 9.80]);  data.addRow(["'02'", 9.94, 57.68, 48.18, 58.42, 7.83, 9.85]);  data.addRow(["'02'", 5.92, 54.35, 39.50, 50.18, 6.50, 7.84]);  data.addRow(["'02'", 4.69, 51.21, 36.19, 46.51, 4.74, 6.25]);  data.addRow(["'02'", 5.12, 33.96, 27.81, 30.84, 3.46, 4.21]);  data.addRow(["'02'", 5.30, 25.89, 22.51, 24.88, 4.04, 3.84]);  data.addRow(["'02'", 2.11, 13.00, 12.17, 13.30, 2.54, 2.64]);  data.addRow(["'02'", 8.02, 26.92, 24.69, 26.32, 3.51, 3.49]);  data.addRow(["'02'", 3.25, 26.09, 21.05, 23.83, 3.03, 3.02]);  data.addRow(["'02'", 3.64, 26.85, 21.75, 23.72, 2.60, 2.55]);  data.addRow(["'02'", 4.71, 29.56, 24.32, 25.41, 2.86, 2.90]);  data.addRow(["'02'", 4.86, 10.24, 12.01, 11.49, 2.51, 2.56]);  data.addRow(["'02'", 3.57, 17.20, 14.94, 16.15, 2.87, 2.88]);  data.addRow(["'02'", 2.64, 13.61, 13.17, 13.53, 3.11, 3.12]);  data.addRow(["'02'", 2.54, 10.67, 10.19, 11.58, 2.70, 2.73]);  data.addRow(["'02'", 2.13, 12.52, 10.69, 12.17, 2.23, 2.24]);  data.addRow(["'02'", 6.17, 17.33, 16.53, 16.25, 2.36, 2.30]);  data.addRow(["'02'", 2.21, 12.34, 9.88, 11.40, 1.80, 1.84]);  data.addRow(["'02'", 2.69, 7.87, 8.02, 7.84, 1.75, 1.79]);  data.addRow(["'02'", 0.68, 8.48, 5.94, 7.41, 1.36, 1.33]);  data.addRow(["'02'", 1.32, 14.62, 9.96, 11.97, 1.60, 1.59]);  data.addRow(["'02'", 0.62, 5.30, 4.78, 4.96, 1.03, 1.07]);  data.addRow(["'02'", 0.39, 1.25, 1.78, 1.82, 0.74, 0.80]);  data.addRow(["'02'", 0.31, 0.20, 0.96, 1.07, 0.69, 0.77]);  data.addRow(["'02'", 0.50, 0.17, 1.06, 1.04, 0.67, 0.74]);  data.addRow(["'02'", 0.17, 0.20, 0.85, 0.96, 0.67, 0.71]);  data.addRow(["'02'", 0.22, 0.27, 0.91, 1.05, 0.69, 0.76]);  data.addRow(["'02'", 0.53, 0.32, 1.19, 1.21, 0.72, 0.77]);  data.addRow(["'02'", 0.46, 0.18, 1.05, 1.07, 0.68, 0.74]);  data.addRow(["'02'", 0.61, 0.21, 1.22, 1.24, 0.75, 0.82]);  data.addRow(["'02'", 0.49, 1.48, 1.75, 2.09, 0.70, 0.75]);  data.addRow(["'02'", 0.93, 0.65, 1.75, 1.73, 0.83, 0.85]);  data.addRow(["'02'", 0.81, 5.88, 3.92, 5.80, 1.15, 1.18]);  data.addRow(["'02'", 1.75, 12.68, 9.84, 12.39, 2.49, 2.43]);  data.addRow(["'02'", 2.44, 16.40, 14.08, 16.59, 3.24, 3.12]);  data.addRow(["'02'", 4.27, 34.10, 26.14, 33.96, 4.47, 4.18]);  data.addRow(["'02'", 3.94, 31.05, 25.83, 30.25, 5.10, 4.80]);  data.addRow(["'02'", 5.39, 27.74, 25.93, 29.48, 5.53, 5.22]);  data.addRow(["'02'", 7.23, 27.55, 27.86, 31.25, 5.38, 5.11]);  data.addRow(["'02'", 7.88, 45.75, 38.94, 42.28, 6.09, 5.76]);  data.addRow(["'02'", 6.45, 38.35, 32.68, 38.87, 5.59, 5.27]);  data.addRow(["'02'", 7.33, 37.95, 33.10, 38.23, 4.97, 4.75]);  data.addRow(["'02'", 4.97, 22.35, 21.67, 25.07, 4.52, 4.27]);  data.addRow(["'02'", 9.25, 44.35, 33.71, 42.08, 5.14, 4.95]);  data.addRow(["'02'", 6.25, 39.10, 34.66, 37.16, 6.03, 5.65]);  data.addRow(["'02'", 8.82, 37.32, 33.35, 36.31, 6.68, 6.29]);  data.addRow(["'02'", 6.20, 46.08, 37.40, 43.08, 5.96, 5.74]);  data.addRow(["'02'", 9.23, 44.72, 40.19, 44.40, 6.57, 6.30]);  data.addRow(["'02'", 7.24, 50.39, 42.25, 52.36, 8.17, 9.92]);  data.addRow(["'02'", 11.88, 53.82, 48.37, 56.19, 8.19, 9.60]);  data.addRow(["'02'", 8.25, 53.84, 42.75, 53.86, 7.48, 8.79]);  data.addRow(["'02'", 7.71, 44.69, 37.78, 47.42, 6.24, 7.47]);  data.addRow(["'02'", 4.68, 37.97, 29.45, 36.69, 5.49, 6.77]);  data.addRow(["'02'", 7.24, 29.39, 29.25, 34.53, 4.84, 6.20]);  data.addRow(["'02'", 5.93, 29.09, 27.72, 31.83, 4.76, 5.96]);  data.addRow(["'02'", 8.93, 26.05, 26.32, 28.62, 4.19, 5.47]);  data.addRow(["'02'", 7.53, 21.75, 22.81, 25.32, 4.96, 6.02]);  data.addRow(["'02'", 6.85, 20.71, 20.83, 24.14, 4.59, 5.69]);  data.addRow(["'02'", 6.26, 15.25, 17.41, 19.91, 3.83, 5.18]);  data.addRow(["'02'", 3.43, 17.79, 14.29, 20.47, 3.45, 4.74]);  data.addRow(["'02'", 4.16, 15.18, 15.88, 19.25, 4.16, 5.41]);  data.addRow(["'02'", 3.69, 17.02, 15.34, 19.56, 3.14, 4.56]);  data.addRow(["'02'", 1.54, 9.60, 8.18, 11.86, 2.25, 3.40]);  data.addRow(["'02'", 2.64, 6.49, 8.46, 8.23, 2.33, 2.56]);  data.addRow(["'02'", 1.48, 12.10, 10.41, 12.33, 2.68, 2.78]);  data.addRow(["'02'", 1.08, 7.39, 7.67, 8.00, 2.25, 2.34]);  data.addRow(["'02'", 1.44, 6.24, 6.75, 6.72, 1.94, 2.01]);  data.addRow(["'02'", 0.68, 2.08, 3.03, 3.45, 1.59, 1.70]);  data.addRow(["'02'", 0.73, 6.43, 4.14, 6.03, 1.32, 1.44]);  data.addRow(["'02'", 0.33, 0.80, 1.94, 2.17, 1.38, 1.50]);  data.addRow(["'02'", 0.41, 0.50, 1.68, 1.83, 1.24, 1.35]);  data.addRow(["'02'", 0.53, 0.74, 1.94, 2.10, 1.29, 1.40]);  data.addRow(["'02'", 0.36, 0.26, 1.50, 1.67, 1.24, 1.37]);  data.addRow(["'02'", 0.18, 0.24, 1.43, 1.63, 1.30, 1.42]);  data.addRow(["'02'", 0.20, 0.29, 1.39, 1.63, 1.23, 1.38]);  data.addRow(["'02'", 0.59, 0.40, 1.75, 1.88, 1.26, 1.41]);  data.addRow(["'02'", 0.28, 0.31, 1.46, 1.66, 1.23, 1.35]);  data.addRow(["'02'", 0.36, 1.01, 1.81, 2.30, 1.33, 1.48]);  data.addRow(["'02'", 0.38, 2.17, 2.57, 3.29, 1.37, 1.52]);  data.addRow(["'02'", 0.85, 4.78, 4.39, 5.40, 1.57, 1.72]);  data.addRow(["'02'", 1.13, 12.54, 8.19, 11.34, 1.72, 1.90]);  data.addRow(["'02'", 1.94, 14.24, 11.43, 14.03, 2.84, 2.90]);  data.addRow(["'02'", 3.99, 29.30, 24.59, 29.88, 5.78, 5.43]);  data.addRow(["'02'", 4.21, 42.16, 33.16, 38.29, 5.99, 5.70]);  data.addRow(["'02'", 13.97, 43.49, 39.56, 44.05, 6.66, 6.36]);  data.addRow(["'02'", 7.50, 46.31, 38.81, 47.29, 8.37, 9.09]);  data.addRow(["'02'", 7.22, 48.55, 40.15, 49.72, 7.92, 9.45]);  data.addRow(["'02'", 8.58, 31.10, 30.93, 36.44, 6.84, 8.17]);  data.addRow(["'02'", 6.16, 37.36, 32.97, 41.87, 7.02, 8.24]);  data.addRow(["'02'", 7.90, 35.63, 33.99, 39.73, 7.56, 8.64]);  data.addRow(["'02'", 7.16, 40.59, 33.59, 43.10, 6.59, 7.63]);  data.addRow(["'02'", 6.31, 50.27, 39.34, 48.01, 6.63, 7.79]);  data.addRow(["'02'", 7.81, 52.25, 40.69, 53.63, 8.52, 9.53]);  data.addRow(["'02'", 11.36, 35.14, 35.35, 40.42, 7.51, 8.52]);  data.addRow(["'02'", 18.89, 41.74, 46.83, 48.43, 8.13, 9.19]);  data.addRow(["'02'", 11.77, 42.06, 41.22, 50.20, 7.99, 9.02]);  data.addRow(["'02'", 9.54, 42.46, 39.56, 44.94, 7.46, 8.62]);  data.addRow(["'02'", 8.66, 35.08, 35.70, 40.62, 7.76, 8.79]);  data.addRow(["'02'", 6.41, 37.33, 29.59, 38.71, 6.07, 7.42]);  data.addRow(["'02'", 3.48, 32.40, 26.37, 30.07, 3.93, 4.62]);  data.addRow(["'02'", 5.18, 20.30, 19.46, 20.72, 3.67, 3.83]);  data.addRow(["'02'", 8.77, 19.17, 19.96, 20.58, 3.55, 3.57]);  data.addRow(["'02'", 2.33, 12.58, 14.46, 13.27, 3.19, 3.24]);  data.addRow(["'02'", 2.79, 18.21, 14.23, 18.25, 3.46, 3.44]);  data.addRow(["'02'", 7.24, 26.26, 21.58, 27.92, 3.00, 3.05]);  data.addRow(["'02'", 3.34, 12.92, 12.01, 13.23, 2.84, 2.87]);  data.addRow(["'02'", 4.88, 18.02, 14.46, 19.82, 2.36, 2.40]);  data.addRow(["'02'", 3.09, 18.51, 16.10, 16.91, 2.65, 2.66]);  data.addRow(["'02'", 4.57, 19.20, 13.36, 20.44, 2.14, 2.22]);  data.addRow(["'02'", 4.25, 7.12, 9.83, 8.83, 2.47, 2.56]);  data.addRow(["'02'", 2.44, 9.40, 8.94, 10.58, 2.26, 2.34]);  data.addRow(["'02'", 2.73, 13.93, 10.68, 13.44, 2.54, 2.58]);  data.addRow(["'02'", 1.84, 14.04, 11.09, 13.74, 2.42, 2.41]);  data.addRow(["'02'", 2.37, 11.10, 10.32, 11.05, 2.35, 2.44]);  data.addRow(["'02'", 2.09, 1.94, 4.30, 4.21, 1.91, 2.00]);  data.addRow(["'02'", 0.94, 6.30, 5.38, 7.12, 1.91, 1.99]);  data.addRow(["'02'", 1.03, 7.08, 5.09, 7.33, 1.75, 1.80]);  data.addRow(["'02'", 0.59, 0.85, 2.55, 2.92, 1.80, 1.86]);  data.addRow(["'02'", 0.98, 2.19, 3.62, 3.96, 1.95, 1.99]);  data.addRow(["'02'", 0.59, 1.11, 2.82, 3.07, 1.88, 1.91]);  data.addRow(["'02'", 0.80, 0.68, 2.68, 2.72, 1.77, 1.80]);  data.addRow(["'02'", 0.41, 0.46, 2.06, 2.32, 1.65, 1.69]);  data.addRow(["'02'", 0.47, 0.50, 2.09, 2.46, 1.63, 1.76]);  data.addRow(["'02'", 0.63, 0.43, 2.05, 2.31, 1.59, 1.69]);  data.addRow(["'02'", 1.75, 0.33, 2.78, 2.62, 1.54, 1.66]);  data.addRow(["'02'", 0.87, 0.47, 2.36, 2.41, 1.58, 1.64]);  data.addRow(["'02'", 0.89, 1.63, 2.84, 3.27, 1.57, 1.62]);  data.addRow(["'02'", 0.87, 1.82, 3.02, 3.70, 1.74, 1.82]);  data.addRow(["'02'", 1.34, 14.63, 8.64, 13.26, 1.90, 1.90]);  data.addRow(["'02'", 1.43, 5.47, 5.60, 6.95, 2.21, 2.21]);  data.addRow(["'02'", 3.31, 15.47, 14.25, 17.01, 4.11, 3.99]);  data.addRow(["'02'", 4.14, 17.56, 17.34, 20.19, 4.84, 4.51]);  data.addRow(["'02'", 4.38, 20.41, 21.06, 24.79, 5.53, 5.29]);  data.addRow(["'02'", 10.21, 32.45, 33.50, 34.84, 6.03, 5.73]);  data.addRow(["'02'", 7.62, 34.56, 29.90, 34.71, 5.64, 5.25]);  data.addRow(["'02'", 6.44, 32.38, 30.13, 33.62, 5.99, 5.65]);  data.addRow(["'02'", 6.43, 28.41, 25.17, 29.36, 5.35, 5.03]);  data.addRow(["'02'", 4.92, 27.86, 24.07, 25.89, 3.65, 3.42]); 
	    var graphtitle="PSM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    