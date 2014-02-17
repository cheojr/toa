
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 11.73, 40.45, 31.23, 36.48, 2.04, 1.93]);  data.addRow(["'02'", 7.34, 49.19, 30.52, 43.72, 3.26, 3.08]);  data.addRow(["'02'", 10.71, 76.04, 39.79, 63.67, 3.69, 3.39]);  data.addRow(["'02'", 18.37, 123.13, 62.52, 100.21, 3.70, 3.44]);  data.addRow(["'02'", 14.63, 120.06, 55.82, 97.46, 3.25, 3.08]);  data.addRow(["'02'", 19.06, 86.63, 50.31, 75.32, 3.27, 3.09]);  data.addRow(["'02'", 23.94, 92.86, 55.54, 80.31, 3.22, 3.02]);  data.addRow(["'02'", 10.72, 31.67, 23.53, 29.93, 2.92, 2.75]);  data.addRow(["'02'", 19.19, 53.97, 34.54, 47.83, 2.68, 2.54]);  data.addRow(["'02'", 8.25, 46.98, 24.41, 41.02, 2.65, 2.58]);  data.addRow(["'02'", 4.43, 116.68, 32.73, 88.17, 2.07, 2.02]);  data.addRow(["'02'", 17.78, 50.89, 32.87, 45.92, 1.88, 1.80]);  data.addRow(["'02'", 18.23, 13.01, 19.85, 19.13, 1.34, 1.31]);  data.addRow(["'02'", 14.85, 18.09, 18.02, 19.43, 1.31, 1.27]);  data.addRow(["'02'", 3.83, 16.84, 11.20, 14.40, 1.25, 1.23]);  data.addRow(["'02'", 2.82, 15.22, 9.52, 13.25, 1.30, 1.31]);  data.addRow(["'02'", 6.26, 8.77, 9.41, 10.06, 1.45, 1.43]);  data.addRow(["'02'", 6.19, 18.50, 11.57, 17.33, 1.41, 1.39]);  data.addRow(["'02'", 5.26, 8.93, 8.03, 9.51, 1.09, 1.05]);  data.addRow(["'02'", 3.80, 2.70, 5.02, 4.59, 1.04, 1.02]);  data.addRow(["'02'", 7.32, 6.61, 9.03, 8.53, 1.01, 0.98]);  data.addRow(["'02'", 2.85, 12.78, 8.36, 11.28, 1.06, 1.06]);  data.addRow(["'02'", 8.28, 13.89, 13.66, 17.29, 0.92, 0.92]);  data.addRow(["'02'", 8.04, 16.87, 13.01, 14.78, 1.18, 1.18]);  data.addRow(["'02'", 0.89, 17.65, 8.10, 15.72, 0.79, 0.82]);  data.addRow(["'02'", 0.37, 1.97, 1.72, 2.20, 0.69, 0.69]);  data.addRow(["'02'", 0.43, 1.15, 1.38, 1.56, 0.56, 0.59]);  data.addRow(["'02'", 0.29, 0.73, 0.91, 1.14, 0.44, 0.48]);  data.addRow(["'02'", 0.37, 0.71, 1.10, 1.22, 0.53, 0.58]);  data.addRow(["'02'", 0.26, 1.05, 1.07, 1.25, 0.38, 0.42]);  data.addRow(["'02'", 0.64, 0.61, 1.13, 1.15, 0.40, 0.45]);  data.addRow(["'02'", 0.25, 0.50, 0.76, 0.88, 0.38, 0.42]);  data.addRow(["'02'", 0.26, 4.32, 2.04, 3.57, 0.36, 0.42]);  data.addRow(["'02'", 0.22, 0.83, 0.83, 1.27, 0.33, 0.61]);  data.addRow(["'02'", 0.21, 0.44, 0.62, 0.77, 0.29, 0.37]);  data.addRow(["'02'", 0.18, 0.28, 0.52, 0.65, 0.29, 0.37]);  data.addRow(["'02'", 0.20, 0.36, 0.62, 0.72, 0.32, 0.38]);  data.addRow(["'02'", 0.19, 0.40, 0.57, 0.66, 0.27, 0.30]);  data.addRow(["'02'", 0.26, 0.57, 0.77, 0.90, 0.34, 0.39]);  data.addRow(["'02'", 1.20, 0.40, 1.63, 1.43, 0.33, 0.37]);  data.addRow(["'02'", 0.94, 24.39, 10.15, 18.37, 0.55, 0.58]);  data.addRow(["'02'", 2.68, 13.21, 7.73, 11.27, 0.79, 0.79]);  data.addRow(["'02'", 0.67, 14.72, 6.73, 11.66, 0.83, 0.81]);  data.addRow(["'02'", 1.16, 30.47, 7.61, 22.02, 0.84, 0.84]);  data.addRow(["'02'", 2.20, 10.24, 6.12, 9.48, 1.07, 1.07]);  data.addRow(["'02'", 3.94, 15.61, 10.13, 14.24, 1.19, 1.16]);  data.addRow(["'02'", 3.37, 22.37, 12.14, 18.76, 1.24, 1.20]);  data.addRow(["'02'", 3.27, 20.44, 11.50, 17.23, 1.51, 1.47]);  data.addRow(["'02'", 2.71, 20.09, 11.51, 17.54, 1.42, 1.35]);  data.addRow(["'02'", 4.05, 9.53, 9.09, 10.58, 1.44, 1.37]);  data.addRow(["'02'", 21.44, 13.41, 25.56, 24.29, 1.40, 1.34]);  data.addRow(["'02'", 8.24, 37.54, 22.72, 33.15, 1.60, 1.54]);  data.addRow(["'02'", 8.66, 15.55, 15.33, 16.96, 1.41, 1.37]);  data.addRow(["'02'", 2.08, 22.59, 14.54, 19.09, 1.54, 1.47]);  data.addRow(["'02'", 2.71, 22.15, 10.60, 18.75, 1.87, 1.76]);  data.addRow(["'02'", 9.56, 17.40, 14.43, 17.69, 1.67, 1.56]);  data.addRow(["'02'", 19.92, 23.73, 24.02, 26.05, 1.61, 1.55]);  data.addRow(["'02'", 24.16, 37.53, 34.21, 38.64, 1.34, 1.32]);  data.addRow(["'02'", 8.49, 35.82, 21.52, 30.16, 1.20, 1.15]);  data.addRow(["'02'", 3.30, 35.76, 15.22, 28.13, 1.28, 1.23]);  data.addRow(["'02'", 5.93, 16.56, 11.58, 15.76, 1.14, 1.11]);  data.addRow(["'02'", 16.59, 16.29, 19.71, 20.09, 1.07, 1.01]);  data.addRow(["'02'", 30.12, 32.33, 40.71, 39.52, 1.10, 1.02]);  data.addRow(["'02'", 41.73, 29.64, 46.49, 40.29, 1.19, 1.12]);  data.addRow(["'02'", 54.21, 31.01, 59.98, 48.59, 1.18, 1.13]);  data.addRow(["'02'", 40.60, 31.02, 51.73, 43.10, 1.14, 1.31]);  data.addRow(["'02'", 34.84, 25.26, 44.03, 36.08, 1.00, 0.99]);  data.addRow(["'02'", 26.26, 27.42, 37.13, 35.15, 1.20, 1.18]);  data.addRow(["'02'", 31.13, 27.82, 43.20, 39.01, 1.16, 1.16]);  data.addRow(["'02'", 38.24, 30.33, 49.33, 43.09, 1.08, 1.09]);  data.addRow(["'02'", 35.23, 30.46, 46.35, 40.09, 1.03, 1.06]);  data.addRow(["'02'", 43.04, 33.30, 53.32, 45.94, 1.01, 1.00]);  data.addRow(["'02'", 43.34, 29.39, 54.60, 44.51, 0.99, 0.98]);  data.addRow(["'02'", 46.92, 32.57, 56.84, 47.33, 0.82, 0.83]);  data.addRow(["'02'", 46.67, 21.28, 54.67, 40.39, 0.80, 0.83]);  data.addRow(["'02'", 46.98, 17.72, 54.03, 35.92, 0.54, 0.58]);  data.addRow(["'02'", 6.67, 16.75, 11.96, 15.77, 0.52, 0.54]);  data.addRow(["'02'", 0.44, 16.63, 5.37, 12.45, 0.37, 0.43]);  data.addRow(["'02'", 0.33, 11.67, 3.92, 9.03, 0.40, 0.44]);  data.addRow(["'02'", 0.39, 13.31, 4.35, 10.11, 0.35, 0.41]);  data.addRow(["'02'", 0.38, 15.06, 5.08, 11.35, 0.33, 0.39]);  data.addRow(["'02'", 0.65, 37.34, 9.96, 27.36, 0.31, 0.34]);  data.addRow(["'02'", 0.58, 31.50, 9.12, 23.41, 0.33, 0.37]);  data.addRow(["'02'", 1.01, 23.97, 8.08, 17.97, 0.29, 0.34]);  data.addRow(["'02'", 0.56, 28.43, 7.72, 20.99, 0.32, 0.36]);  data.addRow(["'02'", 0.84, 26.97, 8.15, 20.26, 0.32, 0.36]);  data.addRow(["'02'", 0.85, 53.86, 16.35, 39.41, 0.35, 0.40]);  data.addRow(["'02'", 1.29, 44.19, 14.48, 32.53, 0.28, 0.34]);  data.addRow(["'02'", 1.44, 33.25, 10.69, 25.11, 0.34, 0.40]);  data.addRow(["'02'", 0.75, 35.18, 10.53, 26.03, 0.43, 0.48]);  data.addRow(["'02'", 1.52, 35.35, 11.37, 26.63, 0.54, 0.59]);  data.addRow(["'02'", 0.92, 41.72, 12.85, 30.70, 0.62, 0.63]);  data.addRow(["'02'", 2.05, 41.12, 15.15, 30.94, 0.89, 0.82]);  data.addRow(["'02'", 0.70, 24.44, 8.58, 18.28, 0.89, 0.87]);  data.addRow(["'02'", 3.16, 4.92, 4.96, 5.91, 1.03, 0.98]);  data.addRow(["'02'", 1.26, 6.42, 4.71, 6.27, 1.13, 1.06]);  data.addRow(["'02'", 4.34, 8.20, 7.05, 9.14, 1.23, 1.20]);  data.addRow(["'02'", 4.11, 7.11, 6.71, 8.00, 1.20, 1.14]);  data.addRow(["'02'", 4.79, 9.62, 7.48, 10.80, 1.49, 1.40]);  data.addRow(["'02'", 3.65, 7.24, 7.69, 8.35, 1.29, 1.26]);  data.addRow(["'02'", 6.94, 8.13, 9.75, 9.88, 1.42, 1.41]);  data.addRow(["'02'", 2.26, 15.41, 8.93, 13.24, 1.38, 1.40]);  data.addRow(["'02'", 4.95, 52.18, 25.22, 41.33, 1.47, 1.43]);  data.addRow(["'02'", 6.51, 47.41, 23.76, 39.12, 1.45, 1.37]);  data.addRow(["'02'", 11.93, 13.71, 17.62, 17.52, 1.64, 1.52]);  data.addRow(["'02'", 8.59, 28.62, 23.33, 24.74, 1.68, 1.59]);  data.addRow(["'02'", 10.60, 29.76, 22.08, 27.93, 1.93, 1.81]);  data.addRow(["'02'", 8.83, 19.41, 15.23, 19.87, 1.51, 1.40]);  data.addRow(["'02'", 14.14, 12.63, 18.48, 18.50, 1.59, 1.48]);  data.addRow(["'02'", 7.46, 20.01, 17.58, 18.91, 1.86, 1.70]);  data.addRow(["'02'", 13.71, 13.69, 21.33, 20.18, 1.67, 1.60]);  data.addRow(["'02'", 9.56, 14.39, 15.51, 20.86, 1.59, 1.48]);  data.addRow(["'02'", 12.87, 4.66, 17.14, 11.63, 1.65, 1.56]);  data.addRow(["'02'", 2.38, 11.24, 7.83, 15.13, 1.84, 1.73]);  data.addRow(["'02'", 4.06, 4.76, 8.59, 7.46, 1.96, 1.83]);  data.addRow(["'02'", 25.51, 7.20, 26.02, 23.69, 1.86, 1.78]);  data.addRow(["'02'", 15.23, 31.21, 27.88, 31.38, 1.54, 1.47]);  data.addRow(["'02'", 20.20, 10.38, 23.95, 25.28, 1.43, 1.36]);  data.addRow(["'02'", 15.28, 5.43, 18.92, 16.83, 1.45, 1.36]);  data.addRow(["'02'", 17.58, 15.21, 23.96, 18.90, 1.34, 1.30]);  data.addRow(["'02'", 9.71, 10.30, 14.25, 13.25, 1.27, 1.26]);  data.addRow(["'02'", 7.90, 5.13, 10.66, 10.13, 1.03, 0.98]);  data.addRow(["'02'", 2.60, 8.06, 7.36, 10.25, 0.92, 0.85]);  data.addRow(["'02'", 0.55, 2.16, 1.84, 2.56, 0.69, 0.67]);  data.addRow(["'02'", 1.44, 4.23, 4.05, 4.91, 0.67, 0.66]);  data.addRow(["'02'", 1.85, 12.06, 9.25, 12.36, 0.52, 0.54]);  data.addRow(["'02'", 2.67, 22.44, 13.35, 16.88, 0.44, 0.47]);  data.addRow(["'02'", 0.53, 4.13, 2.15, 4.01, 0.38, 0.40]);  data.addRow(["'02'", 2.44, 20.78, 9.38, 16.13, 0.42, 0.46]);  data.addRow(["'02'", 0.88, 1.48, 1.57, 2.16, 0.31, 0.36]);  data.addRow(["'02'", 3.50, 46.28, 29.20, 34.29, 0.37, 0.43]);  data.addRow(["'02'", 3.06, 3.72, 6.94, 4.91, 0.40, 0.44]);  data.addRow(["'02'", 2.57, 34.58, 10.00, 26.41, 0.62, 0.67]);  data.addRow(["'02'", 1.68, 18.03, 6.90, 14.67, 1.04, 1.00]);  data.addRow(["'02'", 4.52, 18.35, 10.11, 16.24, 1.54, 1.43]);  data.addRow(["'02'", 5.08, 31.37, 16.28, 26.32, 1.88, 1.73]);  data.addRow(["'02'", 6.86, 33.12, 21.02, 29.65, 3.15, 2.89]);  data.addRow(["'02'", 8.43, 73.07, 35.35, 59.93, 4.31, 3.99]);  data.addRow(["'02'", 39.99, 63.79, 62.10, 67.98, 4.79, 4.38]);  data.addRow(["'02'", 35.54, 65.29, 64.55, 64.68, 5.06, 4.68]);  data.addRow(["'02'", 23.01, 57.21, 46.50, 56.75, 5.80, 5.36]);  data.addRow(["'02'", 33.03, 68.83, 66.43, 69.89, 5.96, 5.47]);  data.addRow(["'02'", 43.16, 85.24, 73.84, 84.35, 5.64, 5.28]);  data.addRow(["'02'", 25.07, 81.86, 57.46, 75.19, 5.28, 4.96]);  data.addRow(["'02'", 24.25, 97.91, 67.10, 87.99, 5.56, 5.18]);  data.addRow(["'02'", 44.04, 117.10, 88.57, 110.85, 5.97, 5.62]);  data.addRow(["'02'", 41.53, 70.96, 69.67, 78.52, 7.03, 6.30]);  data.addRow(["'02'", 20.92, 48.98, 45.92, 50.78, 7.34, 6.56]);  data.addRow(["'02'", 17.70, 74.98, 48.58, 67.41, 5.48, 5.11]);  data.addRow(["'02'", 22.01, 77.03, 57.98, 71.31, 6.62, 6.09]);  data.addRow(["'02'", 26.05, 86.52, 70.00, 80.57, 7.58, 7.16]);  data.addRow(["'02'", 23.94, 70.03, 52.35, 66.56, 5.48, 5.13]);  data.addRow(["'02'", 21.89, 103.02, 60.50, 87.18, 4.60, 4.29]);  data.addRow(["'02'", 17.20, 51.08, 40.47, 49.85, 4.12, 3.84]);  data.addRow(["'02'", 23.90, 41.63, 39.81, 44.17, 3.63, 3.41]);  data.addRow(["'02'", 17.64, 33.64, 31.93, 38.15, 3.51, 3.26]);  data.addRow(["'02'", 20.59, 41.76, 41.03, 43.36, 3.61, 3.44]);  data.addRow(["'02'", 31.55, 44.15, 49.17, 49.37, 3.58, 3.36]);  data.addRow(["'02'", 32.26, 21.80, 37.68, 32.92, 3.03, 2.82]);  data.addRow(["'02'", 37.41, 26.34, 49.91, 41.72, 3.15, 2.96]);  data.addRow(["'02'", 36.91, 19.31, 39.75, 35.13, 3.08, 2.91]);  data.addRow(["'02'", 17.13, 17.12, 23.93, 24.52, 3.05, 2.87]);  data.addRow(["'02'", 11.43, 13.87, 18.78, 17.82, 2.78, 2.58]);  data.addRow(["'02'", 9.37, 14.75, 16.45, 17.40, 2.68, 2.52]);  data.addRow(["'02'", 17.94, 10.28, 23.38, 17.87, 2.45, 2.32]);  data.addRow(["'02'", 17.44, 11.08, 22.41, 18.36, 2.37, 2.14]);  data.addRow(["'02'", 7.37, 15.30, 16.06, 17.49, 2.03, 1.89]);  data.addRow(["'02'", 2.71, 7.11, 8.38, 8.83, 1.77, 1.62]);  data.addRow(["'02'", 2.55, 9.36, 7.15, 9.67, 1.56, 1.46]);  data.addRow(["'02'", 3.12, 9.79, 8.07, 9.86, 1.49, 1.40]);  data.addRow(["'02'", 3.93, 2.68, 5.25, 5.25, 1.10, 1.05]);  data.addRow(["'02'", 3.23, 5.60, 6.37, 6.97, 1.17, 1.10]);  data.addRow(["'02'", 1.80, 4.14, 3.81, 4.70, 0.97, 0.93]);  data.addRow(["'02'", 1.38, 6.58, 4.25, 5.99, 0.73, 0.66]);  data.addRow(["'02'", 0.78, 15.91, 7.16, 12.26, 0.43, 0.42]);  data.addRow(["'02'", 0.43, 0.35, 0.96, 0.86, 0.52, 0.47]);  data.addRow(["'02'", 0.28, 0.30, 0.72, 0.73, 0.38, 0.41]);  data.addRow(["'02'", 1.76, 0.44, 2.47, 1.68, 0.53, 0.49]);  data.addRow(["'02'", 0.94, 0.46, 1.35, 1.13, 0.36, 0.37]);  data.addRow(["'02'", 0.26, 0.39, 0.88, 0.85, 0.43, 0.44]);  data.addRow(["'02'", 0.89, 1.16, 2.01, 2.02, 0.78, 0.72]);  data.addRow(["'02'", 6.11, 4.22, 7.00, 6.26, 1.07, 1.04]);  data.addRow(["'02'", 2.06, 37.50, 15.58, 28.93, 1.92, 1.80]);  data.addRow(["'02'", 8.55, 19.80, 16.05, 19.28, 2.41, 2.18]);  data.addRow(["'02'", 18.48, 63.93, 42.00, 56.16, 3.60, 3.31]);  data.addRow(["'02'", 18.87, 35.03, 33.32, 37.54, 4.69, 4.36]);  data.addRow(["'02'", 38.64, 61.21, 58.46, 63.15, 5.19, 4.82]);  data.addRow(["'02'", 47.42, 66.05, 62.73, 68.10, 4.89, 4.59]);  data.addRow(["'02'", 45.00, 70.97, 65.12, 73.77, 5.45, 5.00]);  data.addRow(["'02'", 12.81, 42.20, 33.18, 41.11, 5.89, 5.42]);  data.addRow(["'02'", 13.51, 44.76, 33.43, 42.56, 5.50, 5.10]);  data.addRow(["'02'", 37.49, 61.01, 63.75, 65.82, 5.51, 5.34]);  data.addRow(["'02'", 28.78, 67.28, 52.80, 66.98, 5.80, 5.46]);  data.addRow(["'02'", 42.77, 51.24, 62.73, 60.81, 5.43, 5.04]);  data.addRow(["'02'", 27.03, 92.55, 68.32, 81.46, 5.81, 5.47]);  data.addRow(["'02'", 38.16, 56.45, 62.64, 63.57, 5.83, 5.41]);  data.addRow(["'02'", 35.49, 44.66, 53.30, 54.50, 5.77, 5.49]);  data.addRow(["'02'", 59.29, 94.69, 84.84, 96.87, 6.20, 5.87]);  data.addRow(["'02'", 20.48, 90.10, 54.95, 79.44, 6.52, 6.26]);  data.addRow(["'02'", 15.93, 111.37, 58.21, 92.61, 6.30, 5.94]);  data.addRow(["'02'", 19.47, 65.74, 53.19, 61.98, 5.56, 5.30]);  data.addRow(["'02'", 23.63, 58.36, 48.03, 57.40, 4.70, 4.54]);  data.addRow(["'02'", 33.31, 40.63, 46.84, 46.54, 3.95, 3.80]);  data.addRow(["'02'", 14.10, 63.10, 40.80, 55.82, 4.03, 3.86]);  data.addRow(["'02'", 15.91, 113.47, 58.09, 92.08, 4.18, 3.87]);  data.addRow(["'02'", 10.30, 31.99, 26.33, 31.08, 3.49, 3.33]);  data.addRow(["'02'", 10.37, 31.56, 23.53, 30.89, 3.68, 3.41]);  data.addRow(["'02'", 8.00, 26.66, 20.47, 27.06, 3.40, 3.24]);  data.addRow(["'02'", 9.31, 23.49, 20.87, 25.89, 3.53, 3.23]);  data.addRow(["'02'", 4.67, 16.73, 14.66, 18.86, 3.23, 2.94]);  data.addRow(["'02'", 9.97, 18.40, 18.32, 21.64, 3.08, 2.80]);  data.addRow(["'02'", 8.24, 20.91, 20.01, 20.95, 2.48, 2.35]);  data.addRow(["'02'", 3.87, 12.62, 10.74, 13.32, 2.36, 2.12]);  data.addRow(["'02'", 9.71, 13.87, 18.49, 19.19, 2.19, 2.02]);  data.addRow(["'02'", 14.52, 8.83, 19.54, 15.21, 2.23, 1.99]);  data.addRow(["'02'", 17.70, 7.16, 24.19, 16.83, 1.87, 1.74]);  data.addRow(["'02'", 6.86, 27.36, 16.67, 25.03, 1.74, 1.61]);  data.addRow(["'02'", 3.43, 12.99, 10.21, 12.25, 1.77, 1.53]);  data.addRow(["'02'", 12.71, 10.77, 18.79, 16.13, 1.51, 1.44]);  data.addRow(["'02'", 6.02, 5.28, 9.64, 8.67, 1.54, 1.34]);  data.addRow(["'02'", 4.23, 4.57, 6.30, 6.75, 0.97, 0.85]);  data.addRow(["'02'", 1.14, 4.33, 3.73, 4.39, 1.04, 0.88]);  data.addRow(["'02'", 0.79, 0.48, 1.37, 1.27, 0.60, 0.55]);  data.addRow(["'02'", 0.71, 0.67, 1.29, 1.25, 0.51, 0.44]);  data.addRow(["'02'", 0.91, 0.52, 1.38, 1.39, 0.52, 0.54]);  data.addRow(["'02'", 0.49, 0.61, 1.08, 1.07, 0.47, 0.46]);  data.addRow(["'02'", 0.36, 0.58, 1.05, 1.04, 0.52, 0.48]);  data.addRow(["'02'", 1.75, 1.43, 2.41, 2.33, 0.53, 0.47]);  data.addRow(["'02'", 0.76, 3.29, 2.79, 3.21, 0.74, 0.67]);  data.addRow(["'02'", 2.35, 5.15, 4.61, 5.44, 1.07, 0.96]);  data.addRow(["'02'", 2.76, 6.34, 6.07, 6.74, 1.58, 1.41]);  data.addRow(["'02'", 4.10, 8.22, 8.75, 9.26, 2.09, 1.91]);  data.addRow(["'02'", 15.18, 34.25, 29.79, 34.51, 3.21, 2.87]);  data.addRow(["'02'", 16.95, 90.28, 46.38, 75.51, 4.11, 3.72]);  data.addRow(["'02'", 20.66, 46.43, 40.36, 45.67, 4.85, 4.33]);  data.addRow(["'02'", 12.82, 47.15, 32.82, 44.20, 5.21, 4.91]);  data.addRow(["'02'", 23.19, 45.09, 45.17, 48.67, 5.79, 5.34]);  data.addRow(["'02'", 18.05, 74.76, 54.61, 67.03, 6.73, 6.11]);  data.addRow(["'02'", 31.22, 53.34, 53.44, 58.42, 6.81, 6.24]);  data.addRow(["'02'", 14.39, 64.22, 43.37, 56.71, 5.75, 5.25]);  data.addRow(["'02'", 34.92, 48.35, 56.32, 55.15, 5.52, 5.03]);  data.addRow(["'02'", 10.64, 52.90, 37.75, 47.08, 6.23, 5.66]);  data.addRow(["'02'", 53.42, 66.64, 77.42, 79.96, 6.29, 5.77]);  data.addRow(["'02'", 52.63, 67.81, 86.11, 82.89, 7.50, 6.81]);  data.addRow(["'02'", 26.92, 40.06, 48.04, 47.77, 7.18, 6.58]);  data.addRow(["'02'", 15.43, 67.68, 56.32, 65.36, 8.97, 8.16]);  data.addRow(["'02'", 14.45, 42.75, 39.82, 45.66, 7.26, 6.70]);  data.addRow(["'02'", 42.37, 37.69, 53.42, 46.66, 5.96, 5.54]);  data.addRow(["'02'", 22.40, 86.65, 64.71, 74.55, 5.50, 5.04]);  data.addRow(["'02'", 35.16, 67.42, 60.40, 64.48, 4.26, 3.97]);  data.addRow(["'02'", 15.01, 25.58, 26.29, 27.96, 4.25, 3.93]);  data.addRow(["'02'", 78.15, 18.70, 67.44, 47.88, 3.61, 3.39]);  data.addRow(["'02'", 8.18, 21.96, 18.89, 22.50, 3.41, 3.07]);  data.addRow(["'02'", 13.91, 20.18, 25.57, 23.99, 3.33, 3.12]);  data.addRow(["'02'", 25.77, 16.75, 32.79, 25.98, 2.79, 2.50]);  data.addRow(["'02'", 8.30, 22.89, 20.58, 23.01, 2.69, 2.41]);  data.addRow(["'02'", 3.14, 15.27, 11.58, 14.73, 2.54, 2.32]);  data.addRow(["'02'", 2.39, 25.38, 14.09, 21.43, 2.64, 2.30]);  data.addRow(["'02'", 3.52, 26.89, 15.47, 23.09, 2.24, 2.10]);  data.addRow(["'02'", 2.31, 17.59, 11.45, 15.75, 2.31, 2.06]);  data.addRow(["'02'", 6.11, 20.30, 14.75, 19.09, 2.03, 1.86]);  data.addRow(["'02'", 3.26, 9.28, 9.39, 10.98, 2.16, 2.00]);  data.addRow(["'02'", 11.15, 20.40, 21.52, 20.53, 2.07, 1.80]);  data.addRow(["'02'", 13.04, 12.37, 17.95, 16.36, 1.96, 1.79]);  data.addRow(["'02'", 1.81, 24.26, 17.44, 19.88, 2.08, 1.82]);  data.addRow(["'02'", 1.03, 5.10, 4.01, 5.27, 1.44, 1.30]);  data.addRow(["'02'", 4.34, 3.12, 6.44, 5.93, 1.57, 1.33]);  data.addRow(["'02'", 7.97, 4.68, 8.91, 7.25, 1.17, 1.06]);  data.addRow(["'02'", 1.30, 2.57, 3.40, 3.39, 1.31, 1.09]);  data.addRow(["'02'", 2.65, 2.10, 4.38, 3.55, 1.17, 1.01]);  data.addRow(["'02'", 6.14, 1.90, 7.34, 4.00, 1.04, 0.94]);  data.addRow(["'02'", 1.40, 1.95, 3.36, 2.87, 1.39, 1.12]);  data.addRow(["'02'", 1.86, 2.06, 3.86, 2.95, 0.98, 0.87]);  data.addRow(["'02'", 0.76, 3.75, 3.91, 3.93, 1.25, 0.97]);  data.addRow(["'02'", 0.67, 3.64, 3.17, 3.80, 0.96, 0.85]);  data.addRow(["'02'", 1.87, 4.60, 5.01, 4.81, 1.28, 1.06]);  data.addRow(["'02'", 2.42, 4.24, 5.66, 5.06, 1.46, 1.23]);  data.addRow(["'02'", 2.54, 12.84, 8.10, 11.23, 1.57, 1.39]);  data.addRow(["'02'", 13.11, 15.64, 18.45, 18.38, 2.10, 1.77]);  data.addRow(["'02'", 13.94, 28.64, 24.13, 27.87, 2.70, 2.48]);  data.addRow(["'02'", 22.13, 68.70, 53.17, 61.58, 4.23, 3.75]);  data.addRow(["'02'", 12.63, 28.03, 25.79, 29.28, 4.39, 3.99]);  data.addRow(["'02'", 7.71, 50.28, 29.99, 44.34, 4.86, 4.53]);  data.addRow(["'02'", 15.13, 53.29, 38.54, 50.10, 4.99, 4.66]);  data.addRow(["'02'", 56.76, 61.76, 74.91, 69.85, 5.59, 5.29]);  data.addRow(["'02'", 27.13, 37.27, 45.43, 43.90, 5.44, 5.06]);  data.addRow(["'02'", 11.95, 57.43, 40.73, 52.08, 5.38, 5.04]);  data.addRow(["'02'", 26.74, 75.32, 62.10, 74.05, 5.69, 5.27]);  data.addRow(["'02'", 34.93, 60.05, 59.20, 66.40, 6.24, 5.70]);  data.addRow(["'02'", 38.79, 53.57, 59.88, 63.45, 5.85, 5.33]);  data.addRow(["'02'", 51.27, 32.68, 60.61, 49.34, 5.80, 5.49]);  data.addRow(["'02'", 27.51, 51.66, 49.26, 55.63, 5.78, 5.42]);  data.addRow(["'02'", 13.03, 70.82, 44.42, 60.62, 5.84, 5.46]);  data.addRow(["'02'", 20.77, 92.86, 55.05, 79.72, 5.98, 5.66]);  data.addRow(["'02'", 13.60, 66.63, 43.80, 59.21, 6.24, 6.50]);  data.addRow(["'02'", 17.21, 76.39, 49.72, 66.88, 5.64, 5.35]);  data.addRow(["'02'", 13.04, 58.64, 40.74, 54.56, 6.13, 5.75]);  data.addRow(["'02'", 18.82, 49.57, 37.27, 47.78, 5.00, 4.68]);  data.addRow(["'02'", 9.85, 52.78, 38.25, 49.50, 4.09, 3.85]);  data.addRow(["'02'", 27.08, 38.66, 41.26, 43.13, 3.28, 3.16]);  data.addRow(["'02'", 12.32, 60.07, 37.59, 52.27, 3.54, 3.29]);  data.addRow(["'02'", 38.59, 40.00, 48.53, 44.28, 3.14, 2.94]);  data.addRow(["'02'", 13.46, 46.01, 30.73, 43.38, 2.89, 2.70]);  data.addRow(["'02'", 15.09, 33.40, 27.35, 32.02, 2.46, 2.31]);  data.addRow(["'02'", 14.17, 62.58, 35.96, 50.68, 2.65, 2.47]);  data.addRow(["'02'", 9.44, 28.84, 21.38, 25.99, 2.83, 2.62]);  data.addRow(["'02'", 5.79, 28.88, 18.44, 25.39, 2.46, 2.28]);  data.addRow(["'02'", 5.38, 17.86, 16.53, 17.90, 2.37, 2.22]);  data.addRow(["'02'", 3.26, 10.14, 8.86, 10.68, 1.89, 1.85]);  data.addRow(["'02'", 7.12, 10.27, 11.91, 12.43, 2.12, 2.04]);  data.addRow(["'02'", 4.26, 9.06, 9.17, 10.28, 1.80, 1.76]);  data.addRow(["'02'", 1.26, 7.50, 5.79, 7.50, 1.71, 1.67]);  data.addRow(["'02'", 1.75, 10.49, 7.11, 9.65, 1.81, 1.77]);  data.addRow(["'02'", 2.74, 10.53, 7.78, 10.09, 1.80, 1.70]);  data.addRow(["'02'", 1.64, 5.03, 4.96, 5.44, 1.68, 1.62]);  data.addRow(["'02'", 0.68, 6.25, 4.20, 5.78, 1.39, 1.33]);  data.addRow(["'02'", 1.85, 6.56, 4.95, 6.17, 1.09, 1.11]);  data.addRow(["'02'", 7.84, 6.13, 11.84, 10.23, 0.97, 0.98]);  data.addRow(["'02'", 10.42, 1.29, 11.63, 7.39, 1.08, 1.10]);  data.addRow(["'02'", 7.35, 2.23, 7.28, 5.36, 0.78, 0.80]);  data.addRow(["'02'", 20.19, 2.12, 17.09, 10.16, 0.70, 0.71]);  data.addRow(["'02'", 8.73, 0.95, 8.08, 4.84, 0.77, 0.78]);  data.addRow(["'02'", 1.90, 0.76, 2.46, 2.19, 0.72, 0.73]);  data.addRow(["'02'", 1.03, 2.72, 2.19, 3.04, 0.72, 0.72]);  data.addRow(["'02'", 2.32, 5.35, 4.86, 5.33, 0.91, 0.91]);  data.addRow(["'02'", 1.28, 10.12, 4.85, 8.76, 1.33, 1.29]);  data.addRow(["'02'", 1.28, 12.98, 6.26, 10.77, 1.29, 1.26]);  data.addRow(["'02'", 5.24, 22.67, 14.10, 20.00, 1.93, 1.84]);  data.addRow(["'02'", 4.99, 61.16, 26.33, 49.00, 2.88, 2.75]);  data.addRow(["'02'", 8.08, 48.69, 27.82, 41.61, 3.80, 3.58]);  data.addRow(["'02'", 14.88, 55.17, 37.76, 50.07, 4.12, 3.86]);  data.addRow(["'02'", 20.25, 55.75, 42.20, 53.66, 4.62, 4.15]);  data.addRow(["'02'", 21.45, 70.46, 50.89, 63.76, 4.59, 4.23]);  data.addRow(["'02'", 45.70, 67.81, 69.50, 72.29, 5.07, 4.69]);  data.addRow(["'02'", 24.02, 51.86, 45.63, 52.01, 4.90, 4.56]);  data.addRow(["'02'", 9.73, 28.56, 22.16, 26.97, 2.80, 2.58]); 
	    var graphtitle="FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    