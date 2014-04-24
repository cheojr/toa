
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input GB ');
        data.addColumn('number', 'Octects Output  GB');
        data.addColumn('number', 'Packets Input  MB ');
        data.addColumn('number', 'Packets Output MB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'2013-03-16 12:05:00'", 0.21, 0.00, 0.21, 0.00, 29.21, 0.00]);  data.addRow(["'2013-03-17 12:05:00'", 0.09, 0.00, 0.12, 0.00, 20.81, 0.00]);  data.addRow(["'2013-03-18 12:05:00'", 0.25, 0.00, 0.26, 0.00, 36.17, 0.00]);  data.addRow(["'2013-03-19 12:05:00'", 0.45, 0.00, 0.43, 0.00, 51.52, 0.00]);  data.addRow(["'2013-03-20 12:05:00'", 0.37, 0.00, 0.36, 0.00, 47.25, 0.00]);  data.addRow(["'2013-03-21 12:05:00'", 0.35, 0.00, 0.33, 0.00, 41.70, 0.00]);  data.addRow(["'2013-03-22 12:05:00'", 0.28, 0.00, 0.33, 0.00, 30.02, 0.00]);  data.addRow(["'2013-03-23 12:05:00'", 0.08, 0.00, 0.12, 0.00, 17.37, 0.00]);  data.addRow(["'2013-03-24 12:05:00'", 0.05, 0.00, 0.08, 0.00, 17.78, 0.00]);  data.addRow(["'2013-03-25 12:05:00'", 0.10, 0.00, 0.11, 0.00, 20.48, 0.00]);  data.addRow(["'2013-03-26 12:05:00'", 0.18, 0.00, 0.20, 0.00, 22.95, 0.00]);  data.addRow(["'2013-03-27 12:05:00'", 0.14, 0.00, 0.17, 0.00, 21.71, 0.00]);  data.addRow(["'2013-03-28 12:05:00'", 0.09, 0.00, 0.14, 0.00, 20.34, 0.00]);  data.addRow(["'2013-03-29 12:05:00'", 0.07, 0.00, 0.12, 0.00, 19.73, 0.00]);  data.addRow(["'2013-03-30 12:05:00'", 0.06, 0.00, 0.12, 0.00, 18.55, 0.00]);  data.addRow(["'2013-03-31 12:05:00'", 0.06, 0.00, 0.12, 0.00, 18.11, 0.00]);  data.addRow(["'2013-04-01 12:05:00'", 0.23, 0.00, 0.27, 0.00, 35.66, 0.00]);  data.addRow(["'2013-04-02 12:05:00'", 0.38, 0.00, 0.38, 0.00, 50.51, 0.00]);  data.addRow(["'2013-04-03 12:05:00'", 0.42, 0.00, 0.41, 0.00, 57.60, 0.00]);  data.addRow(["'2013-04-04 12:05:00'", 0.40, 0.00, 0.40, 0.00, 54.18, 0.00]);  data.addRow(["'2013-04-05 12:05:00'", 0.40, 0.00, 0.40, 0.00, 51.46, 0.00]);  data.addRow(["'2013-04-06 12:05:00'", 0.25, 0.00, 0.25, 0.00, 32.86, 0.00]);  data.addRow(["'2013-04-07 12:05:00'", 0.18, 0.00, 0.19, 0.00, 25.66, 0.00]);  data.addRow(["'2013-04-08 12:05:00'", 0.30, 0.00, 0.32, 0.00, 43.61, 0.00]);  data.addRow(["'2013-04-09 12:05:00'", 0.41, 0.00, 0.41, 0.00, 54.51, 0.00]);  data.addRow(["'2013-04-10 12:05:00'", 0.45, 0.00, 0.43, 0.00, 57.29, 0.00]);  data.addRow(["'2013-04-11 12:05:00'", 0.42, 0.00, 0.41, 0.00, 52.22, 0.00]);  data.addRow(["'2013-04-12 12:05:00'", 0.38, 0.00, 0.40, 0.00, 49.24, 0.00]);  data.addRow(["'2013-04-13 12:05:00'", 0.20, 0.00, 0.24, 0.00, 30.36, 0.00]);  data.addRow(["'2013-04-14 12:05:00'", 0.08, 0.00, 0.12, 0.00, 21.41, 0.00]);  data.addRow(["'2013-04-15 12:05:00'", 0.08, 0.00, 0.11, 0.00, 23.53, 0.00]);  data.addRow(["'2013-04-16 12:05:00'", 0.26, 0.00, 0.28, 0.00, 40.16, 0.00]);  data.addRow(["'2013-04-17 12:05:00'", 0.43, 0.00, 0.42, 0.00, 54.25, 0.00]);  data.addRow(["'2013-04-18 12:05:00'", 0.41, 0.00, 0.41, 0.00, 52.70, 0.00]);  data.addRow(["'2013-04-19 12:05:00'", 0.34, 0.00, 0.32, 0.00, 37.48, 0.00]);  data.addRow(["'2013-04-20 12:05:00'", 0.17, 0.00, 0.17, 0.00, 21.97, 0.00]);  data.addRow(["'2013-04-21 12:05:00'", 0.26, 0.00, 0.22, 0.00, 18.04, 0.00]);  data.addRow(["'2013-04-22 12:05:00'", 0.35, 0.00, 0.32, 0.00, 34.88, 0.00]);  data.addRow(["'2013-04-23 12:05:00'", 0.46, 0.00, 0.43, 0.00, 50.04, 0.00]);  data.addRow(["'2013-04-24 12:05:00'", 0.14, 0.00, 0.13, 0.00, 16.13, 0.00]);  data.addRow(["'2013-04-25 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-04-26 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-04-27 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-04-28 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-04-29 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-04-30 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-05-01 12:05:00'", 0.10, 0.00, 0.09, 0.00, 11.71, 0.00]);  data.addRow(["'2013-05-02 12:05:00'", 0.79, 0.00, 0.67, 0.00, 52.44, 0.00]);  data.addRow(["'2013-05-03 12:05:00'", 0.85, 0.00, 0.70, 0.00, 51.47, 0.00]);  data.addRow(["'2013-05-04 12:05:00'", 0.53, 0.00, 0.43, 0.00, 31.95, 0.00]);  data.addRow(["'2013-05-05 12:05:00'", 0.12, 0.00, 0.14, 0.00, 24.61, 0.00]);  data.addRow(["'2013-05-06 12:05:00'", 0.23, 0.00, 0.25, 0.00, 42.91, 0.00]);  data.addRow(["'2013-05-07 12:05:00'", 0.41, 0.00, 0.41, 0.00, 56.25, 0.00]);  data.addRow(["'2013-05-08 12:05:00'", 0.42, 0.00, 0.41, 0.00, 55.12, 0.00]);  data.addRow(["'2013-05-09 12:05:00'", 0.37, 0.00, 0.37, 0.00, 49.01, 0.00]);  data.addRow(["'2013-05-10 12:05:00'", 0.39, 0.00, 0.39, 0.00, 47.27, 0.00]);  data.addRow(["'2013-05-11 12:05:00'", 0.19, 0.00, 0.20, 0.00, 26.23, 0.00]);  data.addRow(["'2013-05-12 12:05:00'", 0.09, 0.00, 0.12, 0.00, 18.42, 0.00]);  data.addRow(["'2013-05-13 12:05:00'", 0.20, 0.00, 0.23, 0.00, 32.13, 0.00]);  data.addRow(["'2013-05-14 12:05:00'", 0.37, 0.00, 0.37, 0.00, 49.89, 0.00]);  data.addRow(["'2013-05-15 12:05:00'", 0.35, 0.00, 0.34, 0.00, 41.01, 0.00]);  data.addRow(["'2013-05-16 12:05:00'", 0.36, 0.00, 0.35, 0.00, 42.31, 0.00]);  data.addRow(["'2013-05-17 12:05:00'", 0.37, 0.00, 0.35, 0.00, 41.75, 0.00]);  data.addRow(["'2013-05-18 12:05:00'", 0.26, 0.00, 0.27, 0.00, 33.58, 0.00]);  data.addRow(["'2013-05-19 12:05:00'", 0.13, 0.00, 0.16, 0.00, 22.95, 0.00]);  data.addRow(["'2013-05-20 12:05:00'", 0.22, 0.00, 0.25, 0.00, 33.29, 0.00]);  data.addRow(["'2013-05-21 12:05:00'", 0.34, 0.00, 0.34, 0.00, 43.69, 0.00]);  data.addRow(["'2013-05-22 12:05:00'", 0.33, 0.00, 0.33, 0.00, 39.84, 0.00]);  data.addRow(["'2013-05-23 12:05:00'", 0.31, 0.00, 0.31, 0.00, 38.04, 0.00]);  data.addRow(["'2013-05-24 12:05:00'", 0.30, 0.00, 0.29, 0.00, 35.44, 0.00]);  data.addRow(["'2013-05-25 12:05:00'", 0.15, 0.00, 0.16, 0.00, 22.47, 0.00]);  data.addRow(["'2013-05-26 12:05:00'", 0.06, 0.00, 0.07, 0.00, 13.83, 0.00]);  data.addRow(["'2013-05-27 12:05:00'", 0.06, 0.00, 0.08, 0.00, 14.10, 0.00]);  data.addRow(["'2013-05-28 12:05:00'", 0.16, 0.00, 0.16, 0.00, 20.93, 0.00]);  data.addRow(["'2013-05-29 12:05:00'", 0.02, 0.00, 0.02, 0.00, 2.28, 0.00]);  data.addRow(["'2013-05-30 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-05-31 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-01 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-02 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-03 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-04 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-05 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-06 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-07 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-08 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-09 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-10 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-11 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'2013-06-12 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.03, 0.03]);  data.addRow(["'2013-06-13 12:05:00'", 0.17, 0.00, 0.16, 0.00, 17.33, 0.00]);  data.addRow(["'2013-06-14 12:05:00'", 0.22, 0.00, 0.24, 0.00, 26.01, 0.00]);  data.addRow(["'2013-06-15 12:05:00'", 0.09, 0.00, 0.12, 0.00, 18.70, 0.00]);  data.addRow(["'2013-06-16 12:05:00'", 0.07, 0.00, 0.09, 0.00, 15.30, 0.00]);  data.addRow(["'2013-06-17 12:05:00'", 0.15, 0.00, 0.17, 0.00, 25.19, 0.00]);  data.addRow(["'2013-06-18 12:05:00'", 0.28, 0.00, 0.29, 0.00, 33.83, 0.00]);  data.addRow(["'2013-06-19 12:05:00'", 0.32, 0.00, 0.30, 0.00, 35.03, 0.00]);  data.addRow(["'2013-06-20 12:05:00'", 0.25, 0.04, 0.26, 0.04, 33.74, 3.44]);  data.addRow(["'2013-06-21 12:05:00'", 0.07, 0.28, 0.20, 0.27, 32.03, 31.68]);  data.addRow(["'2013-06-22 12:05:00'", 0.16, 0.21, 0.23, 0.24, 22.05, 22.57]);  data.addRow(["'2013-06-23 12:05:00'", 0.24, 0.08, 0.23, 0.17, 14.13, 14.69]);  data.addRow(["'2013-06-24 12:05:00'", 0.23, 0.16, 0.26, 0.22, 22.57, 22.50]);  data.addRow(["'2013-06-25 12:05:00'", 0.15, 0.31, 0.28, 0.33, 32.91, 32.93]);  data.addRow(["'2013-06-26 12:05:00'", 0.12, 0.55, 0.35, 0.47, 33.63, 33.28]);  data.addRow(["'2013-06-27 12:05:00'", 0.15, 0.57, 0.37, 0.50, 33.49, 33.19]);  data.addRow(["'2013-06-28 12:05:00'", 0.10, 0.48, 0.28, 0.41, 31.77, 31.18]);  data.addRow(["'2013-06-29 12:05:00'", 0.09, 0.21, 0.17, 0.20, 15.18, 15.17]);  data.addRow(["'2013-06-30 12:05:00'", 0.10, 0.12, 0.14, 0.14, 10.53, 10.11]);  data.addRow(["'2013-07-01 12:05:00'", 0.11, 0.41, 0.27, 0.35, 19.20, 18.47]);  data.addRow(["'2013-07-02 12:05:00'", 0.18, 0.38, 0.32, 0.38, 33.90, 34.62]);  data.addRow(["'2013-07-03 12:05:00'", 0.09, 0.52, 0.31, 0.44, 33.09, 33.74]);  data.addRow(["'2013-07-04 12:05:00'", 0.06, 0.24, 0.16, 0.22, 24.23, 24.83]);  data.addRow(["'2013-07-05 12:05:00'", 0.07, 0.16, 0.13, 0.16, 21.89, 22.34]);  data.addRow(["'2013-07-06 12:05:00'", 0.07, 0.15, 0.12, 0.16, 18.79, 19.72]);  data.addRow(["'2013-07-07 12:05:00'", 0.06, 0.09, 0.09, 0.11, 14.31, 14.97]);  data.addRow(["'2013-07-08 12:05:00'", 0.07, 0.15, 0.13, 0.16, 19.83, 20.09]);  data.addRow(["'2013-07-09 12:05:00'", 0.08, 0.24, 0.18, 0.24, 23.02, 23.33]);  data.addRow(["'2013-07-10 12:05:00'", 0.08, 0.26, 0.18, 0.25, 24.33, 24.64]);  data.addRow(["'2013-07-11 12:05:00'", 0.09, 0.29, 0.20, 0.27, 28.34, 28.60]);  data.addRow(["'2013-07-12 12:05:00'", 0.11, 0.25, 0.21, 0.26, 28.18, 28.70]);  data.addRow(["'2013-07-13 12:05:00'", 0.07, 0.19, 0.15, 0.19, 19.90, 20.35]);  data.addRow(["'2013-07-14 12:05:00'", 0.06, 0.12, 0.09, 0.12, 14.16, 14.56]);  data.addRow(["'2013-07-15 12:05:00'", 0.05, 0.08, 0.08, 0.09, 14.61, 14.70]);  data.addRow(["'2013-07-16 12:05:00'", 0.08, 0.27, 0.16, 0.24, 23.32, 23.87]);  data.addRow(["'2013-07-17 12:05:00'", 0.08, 0.30, 0.20, 0.28, 31.19, 31.00]);  data.addRow(["'2013-07-18 12:05:00'", 0.06, 0.24, 0.16, 0.22, 28.58, 28.41]);  data.addRow(["'2013-07-19 12:05:00'", 0.08, 0.24, 0.17, 0.23, 27.84, 27.96]);  data.addRow(["'2013-07-20 12:05:00'", 0.09, 0.17, 0.15, 0.18, 22.76, 23.11]);  data.addRow(["'2013-07-21 12:05:00'", 0.07, 0.09, 0.10, 0.11, 17.71, 18.06]);  data.addRow(["'2013-07-22 12:05:00'", 0.06, 0.15, 0.12, 0.15, 22.91, 23.46]);  data.addRow(["'2013-07-23 12:05:00'", 0.05, 0.18, 0.13, 0.18, 26.06, 25.79]);  data.addRow(["'2013-07-24 12:05:00'", 0.05, 0.21, 0.14, 0.20, 26.52, 26.43]);  data.addRow(["'2013-07-25 12:05:00'", 0.04, 0.10, 0.09, 0.11, 19.69, 19.49]);  data.addRow(["'2013-07-26 12:05:00'", 0.04, 0.11, 0.08, 0.11, 18.16, 18.17]);  data.addRow(["'2013-07-27 12:05:00'", 0.05, 0.07, 0.08, 0.09, 17.40, 17.18]);  data.addRow(["'2013-07-28 12:05:00'", 0.04, 0.07, 0.07, 0.08, 16.67, 16.41]);  data.addRow(["'2013-07-29 12:05:00'", 0.06, 0.13, 0.11, 0.14, 21.47, 20.79]);  data.addRow(["'2013-07-30 12:05:00'", 0.08, 0.26, 0.16, 0.24, 24.14, 23.32]);  data.addRow(["'2013-07-31 12:05:00'", 0.08, 0.18, 0.15, 0.19, 24.59, 23.90]);  data.addRow(["'2013-08-01 12:05:00'", 0.04, 0.12, 0.09, 0.12, 16.35, 15.70]);  data.addRow(["'2013-08-02 12:05:00'", 0.05, 0.19, 0.13, 0.18, 24.61, 23.68]);  data.addRow(["'2013-08-03 12:05:00'", 0.05, 0.15, 0.11, 0.15, 22.78, 21.90]);  data.addRow(["'2013-08-04 12:05:00'", 0.08, 0.10, 0.11, 0.12, 18.62, 17.98]);  data.addRow(["'2013-08-05 12:05:00'", 0.12, 0.16, 0.17, 0.19, 25.95, 25.47]);  data.addRow(["'2013-08-06 12:05:00'", 0.06, 0.19, 0.14, 0.19, 23.57, 23.28]);  data.addRow(["'2013-08-07 12:05:00'", 0.08, 0.25, 0.19, 0.25, 32.70, 32.44]);  data.addRow(["'2013-08-08 12:05:00'", 0.11, 0.24, 0.21, 0.26, 34.66, 34.15]);  data.addRow(["'2013-08-09 12:05:00'", 0.08, 0.26, 0.20, 0.27, 39.71, 39.54]);  data.addRow(["'2013-08-10 12:05:00'", 0.05, 0.16, 0.12, 0.17, 25.03, 25.02]);  data.addRow(["'2013-08-11 12:05:00'", 0.04, 0.09, 0.08, 0.10, 18.48, 18.70]);  data.addRow(["'2013-08-12 12:05:00'", 0.05, 0.15, 0.12, 0.16, 23.70, 23.65]);  data.addRow(["'2013-08-13 12:05:00'", 0.07, 0.25, 0.19, 0.26, 32.28, 32.42]);  data.addRow(["'2013-08-14 12:05:00'", 0.11, 0.33, 0.25, 0.34, 39.99, 39.48]);  data.addRow(["'2013-08-15 12:05:00'", 0.07, 0.28, 0.20, 0.27, 34.09, 33.66]);  data.addRow(["'2013-08-16 12:05:00'", 0.10, 0.37, 0.27, 0.36, 46.39, 45.82]);  data.addRow(["'2013-08-17 12:05:00'", 0.07, 0.20, 0.15, 0.20, 28.49, 28.37]);  data.addRow(["'2013-08-18 12:05:00'", 0.07, 0.11, 0.11, 0.13, 19.06, 18.69]);  data.addRow(["'2013-08-19 12:05:00'", 0.07, 0.24, 0.18, 0.24, 34.02, 33.66]);  data.addRow(["'2013-08-20 12:05:00'", 0.10, 0.41, 0.29, 0.39, 48.47, 47.86]);  data.addRow(["'2013-08-21 12:05:00'", 0.11, 0.46, 0.32, 0.44, 53.92, 53.04]);  data.addRow(["'2013-08-22 12:05:00'", 0.11, 0.41, 0.31, 0.41, 53.86, 52.82]);  data.addRow(["'2013-08-23 12:05:00'", 0.10, 0.39, 0.28, 0.38, 48.85, 48.35]);  data.addRow(["'2013-08-24 12:05:00'", 0.09, 0.21, 0.18, 0.22, 30.96, 30.59]);  data.addRow(["'2013-08-25 12:05:00'", 0.06, 0.10, 0.10, 0.12, 18.89, 18.49]);  data.addRow(["'2013-08-26 12:05:00'", 0.08, 0.22, 0.18, 0.23, 33.72, 33.42]);  data.addRow(["'2013-08-27 12:05:00'", 0.12, 0.41, 0.30, 0.40, 50.46, 49.79]);  data.addRow(["'2013-08-28 12:05:00'", 0.12, 0.36, 0.28, 0.36, 44.88, 44.66]);  data.addRow(["'2013-08-29 12:05:00'", 0.12, 0.40, 0.31, 0.40, 53.38, 52.91]);  data.addRow(["'2013-08-30 12:05:00'", 0.06, 0.21, 0.16, 0.21, 26.76, 27.92]);  data.addRow(["'2013-08-31 12:05:00'", 0.06, 0.09, 0.13, 0.09, 8.70, 9.05]);  data.addRow(["'2013-09-01 12:05:00'", 0.06, 0.10, 0.08, 0.10, 8.91, 8.95]);  data.addRow(["'2013-09-02 12:05:00'", 0.04, 0.10, 0.06, 0.09, 9.95, 10.30]);  data.addRow(["'2013-09-03 12:05:00'", 0.08, 0.26, 0.18, 0.24, 25.90, 25.59]);  data.addRow(["'2013-09-04 12:05:00'", 0.13, 0.41, 0.31, 0.41, 47.76, 47.63]);  data.addRow(["'2013-09-05 12:05:00'", 0.10, 0.28, 0.22, 0.28, 30.97, 31.10]);  data.addRow(["'2013-09-06 12:05:00'", 0.09, 0.23, 0.18, 0.23, 27.53, 27.53]);  data.addRow(["'2013-09-07 12:05:00'", 0.08, 0.23, 0.17, 0.23, 24.67, 25.06]);  data.addRow(["'2013-09-08 12:05:00'", 0.05, 0.11, 0.09, 0.12, 13.96, 14.04]);  data.addRow(["'2013-09-09 12:05:00'", 0.09, 0.26, 0.19, 0.26, 30.34, 30.23]);  data.addRow(["'2013-09-10 12:05:00'", 0.11, 0.41, 0.30, 0.40, 46.60, 46.42]);  data.addRow(["'2013-09-11 12:05:00'", 0.14, 0.50, 0.35, 0.47, 49.27, 49.48]);  data.addRow(["'2013-09-12 12:05:00'", 0.11, 0.47, 0.32, 0.44, 49.43, 49.23]);  data.addRow(["'2013-09-13 12:05:00'", 0.13, 0.48, 0.34, 0.47, 52.18, 51.81]);  data.addRow(["'2013-09-14 12:05:00'", 0.10, 0.25, 0.20, 0.26, 29.12, 29.24]);  data.addRow(["'2013-09-15 12:05:00'", 0.08, 0.12, 0.12, 0.15, 20.00, 20.78]);  data.addRow(["'2013-09-16 12:05:00'", 0.12, 0.32, 0.25, 0.32, 39.45, 39.82]);  data.addRow(["'2013-09-17 12:05:00'", 0.13, 0.48, 0.34, 0.46, 56.84, 56.19]);  data.addRow(["'2013-09-18 12:05:00'", 0.12, 0.50, 0.35, 0.48, 56.55, 56.63]);  data.addRow(["'2013-09-19 12:05:00'", 0.12, 0.54, 0.38, 0.50, 55.86, 56.08]);  data.addRow(["'2013-09-20 12:05:00'", 0.11, 0.50, 0.34, 0.47, 51.04, 50.71]);  data.addRow(["'2013-09-21 12:05:00'", 0.07, 0.26, 0.19, 0.26, 28.97, 28.84]);  data.addRow(["'2013-09-22 12:05:00'", 0.07, 0.11, 0.11, 0.13, 20.31, 20.52]);  data.addRow(["'2013-09-23 12:05:00'", 0.09, 0.14, 0.14, 0.16, 23.74, 24.08]);  data.addRow(["'2013-09-24 12:05:00'", 0.12, 0.37, 0.26, 0.35, 41.81, 41.19]);  data.addRow(["'2013-09-25 12:05:00'", 0.14, 0.48, 0.36, 0.47, 58.77, 58.21]);  data.addRow(["'2013-09-26 12:05:00'", 0.12, 0.41, 0.32, 0.41, 55.29, 55.52]);  data.addRow(["'2013-09-27 12:05:00'", 0.12, 0.42, 0.32, 0.42, 53.49, 53.02]);  data.addRow(["'2013-09-28 12:05:00'", 0.08, 0.22, 0.19, 0.23, 33.15, 32.55]);  data.addRow(["'2013-09-29 12:05:00'", 0.06, 0.10, 0.11, 0.12, 23.43, 23.36]);  data.addRow(["'2013-09-30 12:05:00'", 0.10, 0.28, 0.23, 0.29, 43.75, 42.89]);  data.addRow(["'2013-10-01 12:05:00'", 0.13, 0.49, 0.37, 0.48, 59.63, 57.90]);  data.addRow(["'2013-10-02 12:05:00'", 0.14, 0.49, 0.38, 0.49, 61.33, 60.18]);  data.addRow(["'2013-10-03 12:05:00'", 0.13, 0.45, 0.35, 0.45, 56.12, 54.90]);  data.addRow(["'2013-10-04 12:05:00'", 0.12, 0.49, 0.35, 0.47, 55.22, 54.64]);  data.addRow(["'2013-10-05 12:05:00'", 0.09, 0.29, 0.21, 0.29, 32.71, 32.96]);  data.addRow(["'2013-10-06 12:05:00'", 0.06, 0.13, 0.10, 0.14, 20.36, 20.32]);  data.addRow(["'2013-10-07 12:05:00'", 0.09, 0.45, 0.22, 0.39, 34.24, 33.49]);  data.addRow(["'2013-10-08 12:05:00'", 0.15, 0.53, 0.38, 0.51, 60.96, 60.16]);  data.addRow(["'2013-10-09 12:05:00'", 0.14, 0.57, 0.40, 0.54, 61.98, 61.45]);  data.addRow(["'2013-10-10 12:05:00'", 0.14, 0.58, 0.40, 0.54, 59.43, 59.27]);  data.addRow(["'2013-10-11 12:05:00'", 0.13, 0.52, 0.35, 0.48, 53.24, 53.16]);  data.addRow(["'2013-10-12 12:05:00'", 0.08, 0.27, 0.20, 0.27, 31.50, 32.76]);  data.addRow(["'2013-10-13 12:05:00'", 0.10, 0.16, 0.15, 0.18, 25.03, 26.21]);  data.addRow(["'2013-10-14 12:05:00'", 0.12, 0.34, 0.26, 0.34, 43.75, 44.52]);  data.addRow(["'2013-10-15 12:05:00'", 0.16, 0.55, 0.40, 0.53, 62.15, 62.72]);  data.addRow(["'2013-10-16 12:05:00'", 0.15, 0.62, 0.41, 0.58, 64.15, 65.38]);  data.addRow(["'2013-10-17 12:05:00'", 0.17, 0.53, 0.40, 0.52, 60.19, 60.85]);  data.addRow(["'2013-10-18 12:05:00'", 0.17, 0.53, 0.40, 0.52, 58.29, 58.44]);  data.addRow(["'2013-10-19 12:05:00'", 0.08, 0.29, 0.20, 0.28, 33.80, 34.45]);  data.addRow(["'2013-10-20 12:05:00'", 0.09, 0.33, 0.19, 0.29, 26.78, 28.04]);  data.addRow(["'2013-10-21 12:05:00'", 0.12, 0.31, 0.26, 0.32, 46.97, 46.67]);  data.addRow(["'2013-10-22 12:05:00'", 0.15, 0.51, 0.38, 0.50, 64.02, 63.82]);  data.addRow(["'2013-10-23 12:05:00'", 0.18, 0.64, 0.46, 0.60, 63.67, 65.24]);  data.addRow(["'2013-10-24 12:05:00'", 0.16, 0.67, 0.44, 0.61, 62.01, 64.26]);  data.addRow(["'2013-10-25 12:05:00'", 0.11, 0.59, 0.36, 0.53, 54.73, 55.51]);  data.addRow(["'2013-10-26 12:05:00'", 0.08, 0.27, 0.20, 0.27, 35.73, 35.73]);  data.addRow(["'2013-10-27 12:05:00'", 0.10, 0.14, 0.14, 0.16, 26.42, 26.75]);  data.addRow(["'2013-10-28 12:05:00'", 0.12, 0.36, 0.25, 0.35, 44.70, 44.86]);  data.addRow(["'2013-10-29 12:05:00'", 0.17, 0.54, 0.41, 0.57, 72.58, 87.00]);  data.addRow(["'2013-10-30 12:05:00'", 0.15, 0.66, 0.43, 0.61, 66.91, 70.09]);  data.addRow(["'2013-10-31 12:05:00'", 0.14, 0.62, 0.40, 0.58, 62.74, 65.67]);  data.addRow(["'2013-11-01 12:05:00'", 0.12, 0.59, 0.37, 0.56, 57.82, 66.48]);  data.addRow(["'2013-11-02 12:05:00'", 0.09, 0.36, 0.23, 0.40, 36.02, 61.57]);  data.addRow(["'2013-11-03 12:05:00'", 0.07, 0.20, 0.14, 0.20, 25.54, 28.63]);  data.addRow(["'2013-11-04 12:05:00'", 0.13, 0.37, 0.28, 0.39, 44.70, 45.73]);  data.addRow(["'2013-11-05 12:05:00'", 0.14, 0.70, 0.39, 0.62, 59.69, 59.49]);  data.addRow(["'2013-11-06 12:05:00'", 0.12, 0.51, 0.35, 0.48, 54.69, 55.47]);  data.addRow(["'2013-11-07 12:05:00'", 0.13, 0.57, 0.38, 0.54, 61.46, 61.23]);  data.addRow(["'2013-11-08 12:05:00'", 0.12, 0.57, 0.38, 0.54, 59.53, 61.04]);  data.addRow(["'2013-11-09 12:05:00'", 0.09, 0.30, 0.21, 0.30, 36.25, 37.50]);  data.addRow(["'2013-11-10 12:05:00'", 0.07, 0.20, 0.14, 0.20, 25.66, 27.57]);  data.addRow(["'2013-11-11 12:05:00'", 0.07, 0.17, 0.13, 0.18, 25.01, 26.70]);  data.addRow(["'2013-11-12 12:05:00'", 0.10, 0.39, 0.24, 0.36, 40.31, 40.86]);  data.addRow(["'2013-11-13 12:05:00'", 0.26, 0.66, 0.53, 0.66, 71.19, 70.76]);  data.addRow(["'2013-11-14 12:05:00'", 0.22, 0.60, 0.47, 0.60, 64.62, 64.89]);  data.addRow(["'2013-11-15 12:05:00'", 0.21, 0.57, 0.44, 0.57, 62.95, 63.47]);  data.addRow(["'2013-11-16 12:05:00'", 0.18, 0.36, 0.31, 0.38, 42.21, 43.35]);  data.addRow(["'2013-11-17 12:05:00'", 0.15, 0.17, 0.20, 0.22, 31.25, 32.23]);  data.addRow(["'2013-11-18 12:05:00'", 0.20, 0.38, 0.33, 0.39, 47.12, 47.45]);  data.addRow(["'2013-11-19 12:05:00'", 0.15, 0.45, 0.33, 0.45, 52.00, 52.36]);  data.addRow(["'2013-11-20 12:05:00'", 0.13, 0.39, 0.30, 0.39, 51.48, 52.50]);  data.addRow(["'2013-11-21 12:05:00'", 0.17, 0.54, 0.41, 0.54, 66.55, 68.22]);  data.addRow(["'2013-11-22 12:05:00'", 0.14, 0.54, 0.38, 0.53, 62.14, 63.27]);  data.addRow(["'2013-11-23 12:05:00'", 0.09, 0.33, 0.23, 0.33, 39.25, 41.07]);  data.addRow(["'2013-11-24 12:05:00'", 0.07, 0.28, 0.15, 0.26, 30.19, 32.91]);  data.addRow(["'2013-11-25 12:05:00'", 0.10, 0.34, 0.26, 0.34, 47.91, 48.28]);  data.addRow(["'2013-11-26 12:05:00'", 0.14, 0.51, 0.38, 0.50, 65.30, 65.06]);  data.addRow(["'2013-11-27 12:05:00'", 0.14, 0.53, 0.38, 0.51, 62.10, 61.38]);  data.addRow(["'2013-11-28 12:05:00'", 0.09, 0.28, 0.21, 0.28, 36.25, 35.92]);  data.addRow(["'2013-11-29 12:05:00'", 0.06, 0.11, 0.10, 0.13, 21.56, 21.03]);  data.addRow(["'2013-11-30 12:05:00'", 0.06, 0.13, 0.11, 0.14, 25.03, 24.59]);  data.addRow(["'2013-12-01 12:05:00'", 0.10, 0.16, 0.15, 0.18, 27.58, 26.73]);  data.addRow(["'2013-12-02 12:05:00'", 0.12, 0.36, 0.28, 0.36, 49.38, 48.77]);  data.addRow(["'2013-12-03 12:05:00'", 0.13, 0.61, 0.42, 0.57, 66.05, 65.37]);  data.addRow(["'2013-12-04 12:05:00'", 0.13, 0.62, 0.40, 0.58, 64.09, 63.57]);  data.addRow(["'2013-12-05 12:05:00'", 0.13, 0.45, 0.33, 0.45, 51.53, 50.50]);  data.addRow(["'2013-12-06 12:05:00'", 0.13, 0.41, 0.30, 0.41, 50.19, 49.02]);  data.addRow(["'2013-12-07 12:05:00'", 0.09, 0.36, 0.25, 0.34, 43.13, 42.30]);  data.addRow(["'2013-12-08 12:05:00'", 0.08, 0.22, 0.17, 0.23, 33.12, 33.78]);  data.addRow(["'2013-12-09 12:05:00'", 0.12, 0.31, 0.26, 0.32, 43.36, 43.19]);  data.addRow(["'2013-12-10 12:05:00'", 0.13, 0.44, 0.33, 0.44, 52.86, 52.03]);  data.addRow(["'2013-12-11 12:05:00'", 0.12, 0.49, 0.34, 0.46, 51.40, 50.89]);  data.addRow(["'2013-12-12 12:05:00'", 0.13, 0.45, 0.32, 0.43, 48.30, 47.89]);  data.addRow(["'2013-12-13 12:05:00'", 0.12, 0.40, 0.30, 0.40, 46.09, 45.10]);  data.addRow(["'2013-12-14 12:05:00'", 0.09, 0.24, 0.20, 0.25, 35.65, 35.01]);  data.addRow(["'2013-12-15 12:05:00'", 0.08, 0.12, 0.12, 0.14, 26.25, 26.17]);  data.addRow(["'2013-12-16 12:05:00'", 0.08, 0.19, 0.16, 0.20, 28.96, 28.78]);  data.addRow(["'2013-12-17 12:05:00'", 0.09, 0.25, 0.20, 0.27, 31.73, 31.21]);  data.addRow(["'2013-12-18 12:05:00'", 0.08, 0.26, 0.18, 0.25, 29.41, 29.10]);  data.addRow(["'2013-12-19 12:05:00'", 0.07, 0.24, 0.16, 0.23, 28.97, 29.01]);  data.addRow(["'2013-12-20 12:05:00'", 0.08, 0.21, 0.16, 0.22, 27.94, 27.81]);  data.addRow(["'2013-12-21 12:05:00'", 0.05, 0.14, 0.11, 0.15, 25.47, 25.25]);  data.addRow(["'2013-12-22 12:05:00'", 0.04, 0.12, 0.08, 0.13, 19.83, 20.57]);  data.addRow(["'2013-12-23 12:05:00'", 0.05, 0.07, 0.07, 0.08, 10.79, 12.24]);  data.addRow(["'2013-12-24 12:05:00'", 0.04, 0.10, 0.09, 0.12, 21.97, 24.12]);  data.addRow(["'2013-12-25 12:05:00'", 0.04, 0.08, 0.08, 0.10, 18.89, 21.78]);  data.addRow(["'2013-12-26 12:05:00'", 0.04, 0.09, 0.08, 0.11, 20.07, 22.09]);  data.addRow(["'2013-12-27 12:05:00'", 0.06, 0.09, 0.10, 0.12, 23.53, 27.96]);  data.addRow(["'2013-12-28 12:05:00'", 0.08, 0.10, 0.11, 0.13, 23.41, 29.15]);  data.addRow(["'2013-12-29 12:05:00'", 0.09, 0.07, 0.11, 0.11, 21.87, 27.96]);  data.addRow(["'2013-12-30 12:05:00'", 0.09, 0.09, 0.11, 0.12, 21.16, 26.18]);  data.addRow(["'2013-12-31 12:05:00'", 0.13, 0.10, 0.14, 0.13, 22.74, 27.31]);  data.addRow(["'2014-01-01 12:05:00'", 0.10, 0.08, 0.11, 0.11, 20.90, 26.82]);  data.addRow(["'2014-01-02 12:05:00'", 0.10, 0.10, 0.12, 0.13, 18.96, 24.76]);  data.addRow(["'2014-01-03 12:05:00'", 0.08, 0.10, 0.10, 0.12, 19.92, 25.05]);  data.addRow(["'2014-01-04 12:05:00'", 0.07, 0.11, 0.10, 0.12, 20.14, 23.95]);  data.addRow(["'2014-01-05 12:05:00'", 0.07, 0.10, 0.10, 0.11, 17.45, 20.71]);  data.addRow(["'2014-01-06 12:05:00'", 0.06, 0.08, 0.08, 0.10, 15.84, 20.18]);  data.addRow(["'2014-01-07 12:05:00'", 0.06, 0.09, 0.09, 0.11, 18.01, 22.54]);  data.addRow(["'2014-01-08 12:05:00'", 0.09, 0.28, 0.21, 0.27, 31.08, 35.79]);  data.addRow(["'2014-01-09 12:05:00'", 0.07, 0.22, 0.17, 0.22, 23.16, 26.30]);  data.addRow(["'2014-01-10 12:05:00'", 0.08, 0.25, 0.21, 0.27, 22.48, 27.19]);  data.addRow(["'2014-01-11 12:05:00'", 0.10, 0.16, 0.15, 0.18, 14.70, 20.31]);  data.addRow(["'2014-01-12 12:05:00'", 0.09, 0.08, 0.10, 0.11, 8.79, 14.54]);  data.addRow(["'2014-01-13 12:05:00'", 0.13, 0.09, 0.13, 0.13, 14.89, 22.85]);  data.addRow(["'2014-01-14 12:05:00'", 0.17, 0.26, 0.23, 0.29, 21.41, 27.61]);  data.addRow(["'2014-01-15 12:05:00'", 0.11, 0.37, 0.26, 0.36, 33.78, 40.24]);  data.addRow(["'2014-01-16 12:05:00'", 0.11, 0.41, 0.30, 0.39, 44.08, 45.54]);  data.addRow(["'2014-01-17 12:05:00'", 0.11, 0.41, 0.29, 0.39, 44.20, 44.92]);  data.addRow(["'2014-01-18 12:05:00'", 0.08, 0.22, 0.21, 0.26, 25.15, 26.26]);  data.addRow(["'2014-01-19 12:05:00'", 0.05, 0.11, 0.11, 0.14, 14.50, 15.73]);  data.addRow(["'2014-01-20 12:05:00'", 0.06, 0.11, 0.11, 0.14, 15.52, 17.31]);  data.addRow(["'2014-01-21 12:05:00'", 0.10, 0.30, 0.23, 0.30, 33.19, 35.13]);  data.addRow(["'2014-01-22 12:05:00'", 0.16, 0.47, 0.43, 0.45, 50.18, 52.54]);  data.addRow(["'2014-01-23 12:05:00'", 0.12, 0.44, 0.36, 0.41, 43.71, 45.98]);  data.addRow(["'2014-01-24 12:05:00'", 0.11, 0.45, 0.30, 0.42, 41.67, 42.88]);  data.addRow(["'2014-01-25 12:05:00'", 0.07, 0.23, 0.16, 0.23, 22.19, 23.87]);  data.addRow(["'2014-01-26 12:05:00'", 0.06, 0.10, 0.09, 0.12, 12.50, 15.23]);  data.addRow(["'2014-01-27 12:05:00'", 0.12, 0.28, 0.23, 0.29, 29.56, 31.04]);  data.addRow(["'2014-01-28 12:05:00'", 0.20, 0.46, 0.52, 0.43, 46.92, 48.48]);  data.addRow(["'2014-01-29 12:05:00'", 0.12, 0.47, 0.34, 0.45, 49.34, 49.94]);  data.addRow(["'2014-01-30 12:05:00'", 0.15, 0.49, 0.37, 0.47, 47.96, 48.96]);  data.addRow(["'2014-01-31 12:05:00'", 0.11, 0.48, 0.34, 0.45, 46.93, 48.36]);  data.addRow(["'2014-02-01 12:05:00'", 0.08, 0.27, 0.20, 0.26, 24.29, 25.96]);  data.addRow(["'2014-02-02 12:05:00'", 0.07, 0.12, 0.11, 0.13, 14.02, 16.14]);  data.addRow(["'2014-02-03 12:05:00'", 0.09, 0.30, 0.22, 0.30, 32.25, 33.85]);  data.addRow(["'2014-02-04 12:05:00'", 0.12, 0.48, 0.34, 0.46, 50.51, 51.62]);  data.addRow(["'2014-02-05 12:05:00'", 0.13, 0.50, 0.37, 0.48, 52.90, 54.43]);  data.addRow(["'2014-02-06 12:05:00'", 0.11, 0.49, 0.34, 0.46, 49.64, 51.11]);  data.addRow(["'2014-02-07 12:05:00'", 0.11, 0.46, 0.33, 0.44, 49.10, 50.67]);  data.addRow(["'2014-02-08 12:05:00'", 0.09, 0.26, 0.20, 0.26, 27.87, 29.49]);  data.addRow(["'2014-02-09 12:05:00'", 0.08, 0.11, 0.12, 0.14, 17.96, 19.28]);  data.addRow(["'2014-02-10 12:05:00'", 0.11, 0.30, 0.25, 0.31, 36.51, 38.04]);  data.addRow(["'2014-02-11 12:05:00'", 0.13, 0.49, 0.36, 0.47, 53.00, 54.07]);  data.addRow(["'2014-02-12 12:05:00'", 0.14, 0.54, 0.40, 0.51, 56.53, 57.39]);  data.addRow(["'2014-02-13 12:05:00'", 0.14, 0.54, 0.39, 0.51, 51.25, 52.17]);  data.addRow(["'2014-02-14 12:05:00'", 0.10, 0.45, 0.32, 0.43, 46.81, 48.02]); 
	    var graphtitle="RUM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    