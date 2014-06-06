
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",2.33, 0.00, 3.27, 0.00, 0.37, 0.00]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",2.83, 0.00, 4.81, 0.00, 0.22, 0.00]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",0.76, 0.00, 1.08, 0.00, 0.12, 0.00]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",0.98, 0.00, 1.10, 0.00, 0.07, 0.00]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.29, 0.00, 0.54, 0.00, 0.09, 0.00]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.50, 0.00, 0.39, 0.00, 0.02, 0.00]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",0.00, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",0.00, 0.00, 0.01, 0.00, 0.01, 0.00]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",0.06, 0.00, 0.20, 0.00, 0.06, 0.00]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",0.46, 0.00, 1.72, 0.00, 0.25, 0.00]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",0.41, 0.00, 1.50, 0.00, 0.30, 0.00]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",1.13, 0.00, 3.00, 0.00, 0.35, 0.00]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",1.21, 0.00, 2.21, 0.00, 0.30, 0.00]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",0.41, 0.00, 0.72, 0.00, 0.13, 0.00]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",0.23, 0.00, 0.67, 0.00, 0.10, 0.00]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",0.06, 0.00, 0.13, 0.00, 0.04, 0.00]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.05, 0.00, 0.55, 0.00, 0.04, 0.00]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.02, 0.00, 0.05, 0.00, 0.01, 0.00]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",0.09, 0.00, 0.28, 0.00, 0.06, 0.00]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",0.57, 0.00, 1.64, 0.00, 0.26, 0.00]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",0.66, 0.00, 2.67, 0.00, 0.30, 0.00]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",0.38, 0.00, 2.32, 0.00, 0.33, 0.00]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",0.39, 0.00, 1.44, 0.00, 0.24, 0.00]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",0.27, 0.00, 1.09, 0.00, 0.12, 0.00]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",0.64, 0.00, 1.45, 0.00, 0.04, 0.00]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",0.13, 0.00, 0.79, 0.00, 0.13, 0.00]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.12, 0.00, 0.33, 0.00, 0.04, 0.00]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.02, 0.00, 0.08, 0.00, 0.03, 0.00]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.05, 0.00, 0.07, 0.00, 0.01, 0.00]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.00, 0.00, 0.01, 0.00, 0.00, 0.00]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.01, 0.00, 0.09, 0.00, 0.02, 0.00]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.08, 0.00, 0.58, 0.00, 0.08, 0.00]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.10, 0.00, 0.43, 0.00, 0.11, 0.00]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.24, 0.00, 1.77, 0.00, 0.11, 0.00]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.54, 0.00, 0.69, 0.00, 0.10, 0.00]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.04, 0.00, 0.14, 0.00, 0.03, 0.00]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.04, 0.00, 0.18, 0.00, 0.04, 0.00]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.06, 0.00, 0.25, 0.00, 0.04, 0.00]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.03, 0.00, 0.15, 0.00, 0.02, 0.00]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.01, 0.00, 0.08, 0.00, 0.00, 0.00]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.01, 0.00, 0.01, 0.00, 0.00, 0.00]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.01, 0.00, 0.04, 0.00, 0.01, 0.00]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.02, 0.00, 0.07, 0.00, 0.03, 0.00]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.07, 0.00, 0.22, 0.00, 0.04, 0.00]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.10, 0.00, 0.49, 0.00, 0.09, 0.00]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.10, 0.00, 0.29, 0.00, 0.10, 0.00]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.09, 0.00, 0.18, 0.00, 0.05, 0.00]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.09, 0.00, 0.64, 0.00, 0.07, 0.00]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.12, 0.00, 0.55, 0.00, 0.06, 0.00]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.26, 0.00, 0.43, 0.00, 0.05, 0.00]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.22, 0.00, 0.25, 0.00, 0.02, 0.00]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.05, 0.00, 0.07, 0.00, 0.01, 0.00]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.04, 0.00, 0.07, 0.00, 0.00, 0.00]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",0.15, 0.00, 0.36, 0.00, 0.05, 0.00]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",0.91, 0.00, 2.22, 0.00, 0.43, 0.00]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",1.41, 0.00, 2.39, 0.00, 0.38, 0.00]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",0.33, 0.00, 1.16, 0.00, 0.29, 0.00]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",0.73, 0.00, 1.80, 0.00, 0.35, 0.00]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",1.83, 0.00, 2.18, 0.00, 0.22, 0.00]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",0.11, 0.00, 0.57, 0.00, 0.11, 0.00]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",0.17, 0.00, 0.35, 0.00, 0.07, 0.00]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",0.06, 0.00, 0.31, 0.00, 0.05, 0.00]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.02, 0.00, 0.06, 0.00, 0.02, 0.00]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.02, 0.00, 0.04, 0.00, 0.01, 0.00]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",0.02, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",0.06, 0.00, 0.18, 0.00, 0.07, 0.00]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",0.71, 0.00, 1.09, 0.00, 0.22, 0.00]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",1.10, 0.00, 1.88, 0.00, 0.25, 0.00]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",0.55, 0.00, 1.45, 0.00, 0.26, 0.00]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",0.67, 0.00, 2.10, 0.00, 0.34, 0.00]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",0.35, 0.00, 3.71, 0.00, 0.13, 0.00]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",0.16, 0.00, 0.54, 0.00, 0.13, 0.00]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.18, 0.00, 0.39, 0.00, 0.11, 0.00]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.29, 0.00, 0.41, 0.00, 0.09, 0.00]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",0.02, 0.00, 0.06, 0.00, 0.03, 0.00]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.00, 0.00, 0.01, 0.00, 0.00, 0.00]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",0.10, 0.00, 0.26, 0.00, 0.07, 0.00]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",0.40, 0.00, 1.38, 0.00, 0.22, 0.00]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",0.37, 0.00, 2.64, 0.00, 0.28, 0.00]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",1.19, 0.00, 9.25, 0.00, 0.40, 0.00]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",1.61, 0.00, 3.39, 0.00, 0.49, 0.00]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",1.22, 0.00, 2.14, 0.00, 0.27, 0.00]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",1.17, 0.00, 1.85, 0.00, 0.16, 0.00]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",0.74, 0.00, 1.67, 0.00, 0.10, 0.00]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",0.08, 0.00, 0.96, 0.00, 0.06, 0.00]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.16, 0.00, 0.21, 0.00, 0.03, 0.00]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",0.26, 0.00, 0.23, 0.00, 0.02, 0.00]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",0.00, 0.00, 0.01, 0.00, 0.00, 0.00]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",0.04, 0.00, 0.13, 0.00, 0.05, 0.00]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",1.96, 0.00, 2.60, 0.00, 0.31, 0.00]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",1.58, 0.00, 3.12, 0.00, 0.22, 0.00]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",0.74, 0.00, 2.13, 0.00, 0.35, 0.00]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",1.34, 0.00, 3.18, 0.00, 0.45, 0.00]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",0.86, 0.00, 1.56, 0.00, 0.17, 0.00]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",0.70, 0.00, 1.72, 0.00, 0.10, 0.00]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",0.31, 0.00, 0.94, 0.00, 0.09, 0.00]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.06, 0.00, 0.33, 0.00, 0.11, 0.00]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",0.03, 0.00, 0.28, 0.00, 0.03, 0.00]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",0.02, 0.00, 0.10, 0.00, 0.03, 0.00]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",0.02, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",0.36, 0.00, 0.72, 0.00, 0.05, 0.00]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",6.27, 0.00, 8.90, 0.00, 0.17, 0.00]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",6.48, 0.00, 8.04, 0.00, 0.23, 0.00]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",6.75, 0.00, 9.51, 0.00, 0.19, 0.00]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",20.05, 0.00, 23.12, 0.00, 0.20, 0.00]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",1.26, 0.00, 1.38, 0.00, 0.08, 0.00]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",1.45, 0.00, 1.82, 0.00, 0.03, 0.00]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",0.38, 0.00, 0.45, 0.00, 0.06, 0.00]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.14, 0.00, 0.58, 0.00, 0.04, 0.00]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.03, 0.00, 0.05, 0.00, 0.02, 0.00]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.02, 0.00, 0.08, 0.00, 0.01, 0.00]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.83, 0.00, 0.89, 0.00, 0.04, 0.00]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",1.64, 0.00, 2.07, 0.00, 0.10, 0.00]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",2.04, 0.00, 2.23, 0.00, 0.07, 0.00]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",2.84, 0.00, 2.73, 0.00, 0.11, 0.00]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",3.49, 0.00, 3.15, 0.00, 0.09, 0.00]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",3.50, 0.00, 3.59, 0.00, 0.10, 0.00]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",3.05, 0.00, 3.60, 0.00, 0.11, 0.00]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.95, 0.00, 1.08, 0.00, 0.01, 0.00]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.02, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.02, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.01, 0.00, 0.01, 0.00, 0.00, 0.00]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.02, 0.00, 0.03, 0.00, 0.01, 0.00]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",2.46, 0.00, 2.28, 0.00, 0.05, 0.00]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",1.93, 0.00, 1.73, 0.00, 0.07, 0.00]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",1.93, 0.00, 4.05, 0.00, 0.07, 0.00]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",2.34, 0.00, 2.16, 0.00, 0.08, 0.00]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",1.01, 0.00, 0.87, 0.00, 0.09, 0.00]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",1.13, 0.00, 1.18, 0.00, 0.03, 0.00]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.13, 0.00, 0.19, 0.00, 0.04, 0.00]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.54, 0.00, 0.78, 0.00, 0.01, 0.00]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.13, 0.00, 0.15, 0.00, 0.01, 0.00]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",0.11, 0.00, 0.32, 0.00, 0.07, 0.00]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",1.01, 0.00, 2.64, 0.00, 0.50, 0.00]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",6.00, 0.00, 6.48, 0.00, 0.42, 0.00]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",1.83, 0.00, 3.52, 0.00, 0.31, 0.00]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",0.92, 0.00, 1.53, 0.00, 0.34, 0.00]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",0.65, 0.00, 1.33, 0.00, 0.18, 0.00]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",0.22, 0.00, 0.42, 0.00, 0.08, 0.00]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",0.06, 0.00, 0.23, 0.00, 0.10, 0.00]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",0.04, 0.00, 0.15, 0.00, 0.06, 0.00]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.02, 0.00, 0.06, 0.00, 0.03, 0.00]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.01, 0.00, 0.03, 0.00, 0.01, 0.00]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",0.05, 0.00, 0.22, 0.00, 0.06, 0.00]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",0.28, 0.00, 0.76, 0.00, 0.18, 0.00]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",0.80, 0.00, 2.45, 0.00, 0.31, 0.00]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",0.83, 0.00, 1.87, 0.00, 0.26, 0.00]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",1.68, 0.00, 4.19, 0.00, 0.30, 0.00]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",2.06, 0.00, 2.76, 0.00, 0.15, 0.00]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",1.57, 0.00, 1.89, 0.00, 0.14, 0.00]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",0.07, 0.00, 0.28, 0.00, 0.09, 0.00]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",1.28, 0.00, 1.67, 0.00, 0.10, 0.00]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.02, 0.00, 0.09, 0.00, 0.04, 0.00]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.00, 0.00, 0.03, 0.00, 0.01, 0.00]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",0.02, 0.00, 0.13, 0.00, 0.04, 0.00]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",1.00, 0.00, 3.51, 0.00, 0.21, 0.00]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",1.47, 0.00, 2.17, 0.00, 0.26, 0.00]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",1.73, 0.00, 4.19, 0.00, 0.30, 0.00]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",0.52, 0.00, 1.62, 0.00, 0.30, 0.00]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",0.84, 0.00, 1.20, 0.00, 0.19, 0.00]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",0.63, 0.00, 0.79, 0.00, 0.11, 0.00]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",0.82, 0.00, 2.21, 0.00, 0.12, 0.00]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.16, 0.00, 0.31, 0.00, 0.08, 0.00]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.05, 0.00, 0.15, 0.00, 0.08, 0.00]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.01, 0.00]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",0.02, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",0.16, 0.00, 0.25, 0.00, 0.08, 0.00]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",0.32, 0.00, 1.08, 0.00, 0.21, 0.00]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",0.93, 0.00, 1.52, 0.00, 0.27, 0.00]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",0.57, 0.00, 2.04, 0.00, 0.30, 0.00]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",0.53, 0.00, 1.59, 0.00, 0.25, 0.00]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",1.19, 0.00, 1.72, 0.00, 0.18, 0.00]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",0.40, 0.00, 0.88, 0.00, 0.13, 0.00]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",0.23, 0.00, 0.61, 0.00, 0.08, 0.00]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",0.06, 0.00, 0.11, 0.00, 0.04, 0.00]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.01, 0.00, 0.04, 0.00, 0.01, 0.00]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",0.06, 0.00, 0.21, 0.00, 0.06, 0.00]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",0.44, 0.00, 1.29, 0.00, 0.20, 0.00]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",0.39, 0.00, 1.03, 0.00, 0.19, 0.00]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",0.32, 0.00, 1.82, 0.00, 0.25, 0.00]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",0.82, 0.00, 3.08, 0.00, 0.30, 0.00]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",0.17, 0.00, 0.77, 0.00, 0.16, 0.00]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",0.07, 0.00, 0.22, 0.00, 0.08, 0.00]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.08, 0.00, 0.21, 0.00, 0.07, 0.00]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.06, 0.00, 0.13, 0.00, 0.05, 0.00]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.02, 0.00, 0.05, 0.00, 0.01, 0.00]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.01, 0.00, 0.02, 0.00, 0.01, 0.00]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.02, 0.00, 0.05, 0.00, 0.02, 0.00]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.03, 0.00, 0.14, 0.00, 0.06, 0.00]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.50, 0.00, 0.89, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.18, 0.00, 0.37, 0.00, 0.09, 0.00]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.47, 0.00, 0.65, 0.00, 0.05, 0.00]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.11, 0.00, 0.23, 0.00, 0.07, 0.00]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.68, 0.00, 0.98, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.26, 0.00, 2.18, 0.00, 0.05, 0.00]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.07, 0.00, 0.66, 0.00, 0.07, 0.00]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.03, 0.00, 0.11, 0.00, 0.05, 0.00]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.01, 0.00, 0.03, 0.00, 0.01, 0.00]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.03, 0.00, 0.03, 0.00, 0.00, 0.00]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.02, 0.00, 0.08, 0.00, 0.04, 0.00]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.07, 0.00, 0.26, 0.00, 0.08, 0.00]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",0.19, 0.00, 1.20, 0.00, 0.09, 0.00]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.36, 0.00, 1.10, 0.00, 0.13, 0.00]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",0.26, 0.00, 0.68, 0.00, 0.08, 0.00]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.25, 0.00, 0.54, 0.00, 0.05, 0.00]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.08, 0.00, 0.57, 0.00, 0.06, 0.00]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.11, 0.00, 0.52, 0.00, 0.06, 0.00]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.03, 0.00, 0.12, 0.00, 0.04, 0.00]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.02, 0.00, 0.06, 0.00, 0.01, 0.00]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.01, 0.00, 0.02, 0.00, 0.00, 0.00]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",0.20, 0.00, 0.40, 0.00, 0.04, 0.00]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",0.69, 0.00, 3.49, 0.00, 0.54, 0.00]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",1.27, 0.00, 2.29, 0.00, 0.60, 0.00]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",2.50, 1.84, 3.84, 2.10, 0.43, 0.20]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",4.04, 4.00, 6.78, 5.89, 0.37, 0.36]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",1.00, 3.24, 2.23, 2.84, 0.17, 0.17]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",0.39, 0.88, 1.04, 1.06, 0.15, 0.14]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.17, 0.40, 0.46, 0.44, 0.10, 0.09]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.04, 0.46, 0.30, 0.37, 0.06, 0.05]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.02, 0.01, 0.06, 0.04, 0.04, 0.03]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.01, 0.03, 0.04, 0.04, 0.02, 0.02]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.01, 0.01, 0.01, 0.01, 0.00, 0.00]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",0.11, 0.15, 0.20, 0.20, 0.05, 0.05]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",0.61, 1.79, 1.71, 1.84, 0.25, 0.22]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",0.83, 1.53, 1.71, 1.75, 0.29, 0.26]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",0.78, 1.69, 1.78, 1.85, 0.26, 0.24]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",6.16, 1.08, 6.75, 4.16, 0.25, 0.23]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",1.27, 8.26, 4.33, 6.66, 0.14, 0.13]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",0.43, 5.42, 2.68, 4.01, 0.12, 0.11]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",0.59, 0.59, 0.79, 0.76, 0.11, 0.09]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.06, 1.41, 0.67, 1.05, 0.08, 0.07]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.01, 0.04, 0.07, 0.06, 0.04, 0.03]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.01, 0.02, 0.02, 0.03, 0.01, 0.01]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.00, 0.01, 0.01, 0.01, 0.00, 0.00]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",0.07, 0.24, 0.21, 0.25, 0.05, 0.04]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",0.65, 11.76, 5.77, 9.07, 0.30, 0.26]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",2.54, 6.49, 5.89, 6.39, 0.38, 0.34]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",3.27, 2.68, 5.61, 4.63, 0.30, 0.26]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",1.15, 2.27, 2.44, 2.49, 0.34, 0.30]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",0.33, 4.38, 2.96, 3.24, 0.17, 0.14]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",0.32, 1.54, 1.19, 1.26, 0.09, 0.08]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",0.32, 1.23, 1.12, 1.03, 0.07, 0.06]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.27, 0.29, 0.43, 0.36, 0.06, 0.05]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.27, 0.84, 0.79, 0.73, 0.04, 0.04]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.01, 0.04, 0.05, 0.05, 0.02, 0.02]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.00, 0.01, 0.01, 0.01, 0.00, 0.01]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",0.04, 0.30, 0.20, 0.26, 0.05, 0.04]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",0.71, 2.27, 1.99, 2.23, 0.21, 0.18]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",1.13, 3.11, 3.11, 2.99, 0.32, 0.29]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",1.09, 3.04, 2.99, 2.87, 0.30, 0.28]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",0.79, 2.32, 2.37, 2.30, 0.30, 0.27]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",0.47, 1.97, 1.68, 1.86, 0.36, 0.32]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",0.63, 1.31, 1.30, 1.37, 0.27, 0.24]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",0.24, 0.63, 0.74, 0.66, 0.17, 0.15]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.48, 0.50, 0.80, 0.64, 0.10, 0.09]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",0.06, 0.56, 0.29, 0.44, 0.05, 0.04]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.01, 0.04, 0.07, 0.06, 0.04, 0.04]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",0.04, 0.03, 0.05, 0.04, 0.01, 0.01]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",0.19, 1.45, 0.80, 1.19, 0.11, 0.10]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",1.27, 2.30, 2.13, 2.20, 0.25, 0.22]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",0.21, 0.73, 0.76, 0.81, 0.23, 0.21]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",2.56, 2.52, 3.96, 3.39, 0.24, 0.22]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",0.25, 0.77, 0.74, 0.86, 0.23, 0.20]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",0.16, 0.77, 0.71, 0.72, 0.16, 0.13]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",0.31, 0.22, 0.42, 0.29, 0.08, 0.07]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",0.02, 0.07, 0.10, 0.09, 0.05, 0.04]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",0.02, 0.03, 0.08, 0.07, 0.06, 0.04]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",0.05, 0.04, 0.10, 0.08, 0.04, 0.03]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.01, 0.01, 0.02, 0.02, 0.01, 0.01]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.00, 0.01, 0.01, 0.01, 0.00, 0.00]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.01, 0.01, 0.02, 0.02, 0.00, 0.00]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",0.00, 0.03, 0.02, 0.02, 0.01, 0.01]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",0.02, 0.15, 0.17, 0.17, 0.05, 0.05]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",0.32, 1.11, 0.98, 0.95, 0.06, 0.05]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",0.16, 0.30, 0.35, 0.33, 0.06, 0.05]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",0.17, 0.24, 0.33, 0.29, 0.08, 0.07]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",0.04, 0.36, 0.33, 0.33, 0.09, 0.08]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",0.25, 0.70, 0.69, 0.62, 0.06, 0.05]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",2.26, 1.76, 3.02, 2.32, 0.29, 0.26]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",9.41, 8.56, 14.16, 10.12, 0.45, 0.40]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",2.05, 16.18, 8.04, 12.74, 0.30, 0.26]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",1.50, 21.70, 9.72, 16.32, 0.25, 0.23]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",0.72, 26.49, 10.70, 19.31, 0.14, 0.12]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",0.20, 5.23, 2.25, 3.92, 0.10, 0.09]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.49, 0.36, 0.56, 0.46, 0.04, 0.04]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",0.03, 0.04, 0.07, 0.06, 0.03, 0.02]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.03, 0.12, 0.11, 0.10, 0.01, 0.01]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",0.04, 0.16, 0.18, 0.18, 0.08, 0.06]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",0.43, 1.72, 1.21, 1.56, 0.18, 0.16]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",0.97, 1.70, 1.83, 1.80, 0.21, 0.19]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",1.02, 0.96, 1.52, 1.36, 0.18, 0.16]); 
	    var graphtitle="PSM to FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    