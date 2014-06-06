
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03 05 16:25:00'", "'2014-03-05 16:25:00'",6.88, 0.00, 14.09, 0.00, 1.44, 0.00]);  data.addRow(["'03 05 18:25:00'", "'2014-03-05 18:25:00'",1.72, 0.00, 4.59, 0.00, 0.66, 0.00]);  data.addRow(["'03 05 20:25:00'", "'2014-03-05 20:25:00'",0.39, 0.00, 1.96, 0.00, 0.45, 0.00]);  data.addRow(["'03 05 22:25:00'", "'2014-03-05 22:25:00'",0.12, 0.00, 0.44, 0.00, 0.14, 0.00]);  data.addRow(["'03 06 00:25:00'", "'2014-03-06 00:25:00'",0.03, 0.00, 0.27, 0.00, 0.07, 0.00]);  data.addRow(["'03 06 02:25:00'", "'2014-03-06 02:25:00'",0.02, 0.00, 0.08, 0.00, 0.05, 0.00]);  data.addRow(["'03 06 04:25:00'", "'2014-03-06 04:25:00'",0.02, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 06 06:25:00'", "'2014-03-06 06:25:00'",0.03, 0.00, 0.09, 0.00, 0.06, 0.00]);  data.addRow(["'03 06 08:25:00'", "'2014-03-06 08:25:00'",1.41, 0.00, 3.87, 0.00, 0.66, 0.00]);  data.addRow(["'03 06 10:25:00'", "'2014-03-06 10:25:00'",8.00, 0.00, 16.04, 0.00, 1.53, 0.00]);  data.addRow(["'03 06 12:25:00'", "'2014-03-06 12:25:00'",11.89, 0.00, 17.92, 0.00, 1.59, 0.00]);  data.addRow(["'03 06 14:25:00'", "'2014-03-06 14:25:00'",10.39, 0.00, 17.69, 0.00, 2.34, 0.00]);  data.addRow(["'03 06 16:25:00'", "'2014-03-06 16:25:00'",9.41, 0.00, 22.24, 0.00, 1.40, 0.00]);  data.addRow(["'03 06 18:25:00'", "'2014-03-06 18:25:00'",8.76, 0.00, 32.41, 0.00, 0.60, 0.00]);  data.addRow(["'03 06 20:25:00'", "'2014-03-06 20:25:00'",0.62, 0.00, 1.59, 0.00, 0.30, 0.00]);  data.addRow(["'03 06 22:25:00'", "'2014-03-06 22:25:00'",0.16, 0.00, 0.67, 0.00, 0.19, 0.00]);  data.addRow(["'03 07 00:25:00'", "'2014-03-07 00:25:00'",0.04, 0.00, 0.15, 0.00, 0.07, 0.00]);  data.addRow(["'03 07 02:25:00'", "'2014-03-07 02:25:00'",0.04, 0.00, 0.08, 0.00, 0.05, 0.00]);  data.addRow(["'03 07 04:25:00'", "'2014-03-07 04:25:00'",0.01, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 07 06:25:00'", "'2014-03-07 06:25:00'",0.03, 0.00, 0.13, 0.00, 0.05, 0.00]);  data.addRow(["'03 07 08:25:00'", "'2014-03-07 08:25:00'",0.75, 0.00, 3.49, 0.00, 0.48, 0.00]);  data.addRow(["'03 07 10:25:00'", "'2014-03-07 10:25:00'",8.46, 0.00, 22.81, 0.00, 1.35, 0.00]);  data.addRow(["'03 07 12:25:00'", "'2014-03-07 12:25:00'",33.86, 0.00, 49.57, 0.00, 2.74, 0.00]);  data.addRow(["'03 07 14:25:00'", "'2014-03-07 14:25:00'",13.52, 0.00, 22.28, 0.00, 1.23, 0.00]);  data.addRow(["'03 07 16:25:00'", "'2014-03-07 16:25:00'",10.04, 0.00, 31.62, 0.00, 0.71, 0.00]);  data.addRow(["'03 07 18:25:00'", "'2014-03-07 18:25:00'",4.26, 0.00, 13.08, 0.00, 0.19, 0.00]);  data.addRow(["'03 07 20:25:00'", "'2014-03-07 20:25:00'",0.47, 0.00, 0.62, 0.00, 0.08, 0.00]);  data.addRow(["'03 07 22:25:00'", "'2014-03-07 22:25:00'",0.07, 0.00, 0.15, 0.00, 0.08, 0.00]);  data.addRow(["'03 08 00:25:00'", "'2014-03-08 00:25:00'",0.03, 0.00, 0.24, 0.00, 0.06, 0.00]);  data.addRow(["'03 08 02:25:00'", "'2014-03-08 02:25:00'",0.02, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 08 04:25:00'", "'2014-03-08 04:25:00'",0.03, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 08 06:25:00'", "'2014-03-08 06:25:00'",0.01, 0.00, 0.06, 0.00, 0.05, 0.00]);  data.addRow(["'03 08 08:25:00'", "'2014-03-08 08:25:00'",0.03, 0.00, 0.14, 0.00, 0.09, 0.00]);  data.addRow(["'03 08 10:25:00'", "'2014-03-08 10:25:00'",0.07, 0.00, 0.61, 0.00, 0.18, 0.00]);  data.addRow(["'03 08 12:25:00'", "'2014-03-08 12:25:00'",0.15, 0.00, 0.56, 0.00, 0.14, 0.00]);  data.addRow(["'03 08 14:25:00'", "'2014-03-08 14:25:00'",0.05, 0.00, 0.26, 0.00, 0.12, 0.00]);  data.addRow(["'03 08 16:25:00'", "'2014-03-08 16:25:00'",0.03, 0.00, 0.17, 0.00, 0.11, 0.00]);  data.addRow(["'03 08 18:25:00'", "'2014-03-08 18:25:00'",0.04, 0.00, 0.17, 0.00, 0.08, 0.00]);  data.addRow(["'03 08 20:25:00'", "'2014-03-08 20:25:00'",0.24, 0.00, 0.34, 0.00, 0.10, 0.00]);  data.addRow(["'03 08 22:25:00'", "'2014-03-08 22:25:00'",0.03, 0.00, 0.13, 0.00, 0.09, 0.00]);  data.addRow(["'03 09 00:25:00'", "'2014-03-09 00:25:00'",0.03, 0.00, 0.12, 0.00, 0.08, 0.00]);  data.addRow(["'03 09 02:25:00'", "'2014-03-09 02:25:00'",0.01, 0.00, 0.06, 0.00, 0.05, 0.00]);  data.addRow(["'03 09 04:25:00'", "'2014-03-09 04:25:00'",0.01, 0.00, 0.06, 0.00, 0.05, 0.00]);  data.addRow(["'03 09 06:25:00'", "'2014-03-09 06:25:00'",0.01, 0.00, 0.06, 0.00, 0.05, 0.00]);  data.addRow(["'03 09 08:25:00'", "'2014-03-09 08:25:00'",0.02, 0.00, 0.08, 0.00, 0.06, 0.00]);  data.addRow(["'03 09 10:25:00'", "'2014-03-09 10:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 09 12:25:00'", "'2014-03-09 12:25:00'",0.22, 0.00, 0.29, 0.00, 0.08, 0.00]);  data.addRow(["'03 09 14:25:00'", "'2014-03-09 14:25:00'",0.02, 0.00, 0.07, 0.00, 0.06, 0.00]);  data.addRow(["'03 09 16:25:00'", "'2014-03-09 16:25:00'",0.08, 0.00, 0.31, 0.00, 0.14, 0.00]);  data.addRow(["'03 09 18:25:00'", "'2014-03-09 18:25:00'",0.37, 0.00, 1.07, 0.00, 0.24, 0.00]);  data.addRow(["'03 09 20:25:00'", "'2014-03-09 20:25:00'",0.41, 0.00, 1.36, 0.00, 0.17, 0.00]);  data.addRow(["'03 09 22:25:00'", "'2014-03-09 22:25:00'",0.04, 0.00, 0.12, 0.00, 0.08, 0.00]);  data.addRow(["'03 10 00:25:00'", "'2014-03-10 00:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 10 02:25:00'", "'2014-03-10 02:25:00'",0.02, 0.00, 0.06, 0.00, 0.05, 0.00]);  data.addRow(["'03 10 04:25:00'", "'2014-03-10 04:25:00'",0.04, 0.00, 0.14, 0.00, 0.12, 0.00]);  data.addRow(["'03 10 06:25:00'", "'2014-03-10 06:25:00'",0.07, 0.00, 0.24, 0.00, 0.14, 0.00]);  data.addRow(["'03 10 08:25:00'", "'2014-03-10 08:25:00'",5.74, 0.00, 10.75, 0.00, 0.68, 0.00]);  data.addRow(["'03 10 10:25:00'", "'2014-03-10 10:25:00'",13.66, 0.00, 27.28, 0.00, 1.51, 0.00]);  data.addRow(["'03 10 12:25:00'", "'2014-03-10 12:25:00'",17.91, 0.00, 23.01, 0.00, 1.48, 0.00]);  data.addRow(["'03 10 14:25:00'", "'2014-03-10 14:25:00'",12.67, 0.00, 16.65, 0.00, 1.62, 0.00]);  data.addRow(["'03 10 16:25:00'", "'2014-03-10 16:25:00'",9.93, 0.00, 15.97, 0.00, 1.92, 0.00]);  data.addRow(["'03 10 18:25:00'", "'2014-03-10 18:25:00'",6.90, 0.00, 9.38, 0.00, 0.69, 0.00]);  data.addRow(["'03 10 20:25:00'", "'2014-03-10 20:25:00'",0.28, 0.00, 1.34, 0.00, 0.30, 0.00]);  data.addRow(["'03 10 22:25:00'", "'2014-03-10 22:25:00'",0.11, 0.00, 0.59, 0.00, 0.26, 0.00]);  data.addRow(["'03 11 00:25:00'", "'2014-03-11 00:25:00'",0.03, 0.00, 0.08, 0.00, 0.06, 0.00]);  data.addRow(["'03 11 02:25:00'", "'2014-03-11 02:25:00'",0.02, 0.00, 0.22, 0.00, 0.04, 0.00]);  data.addRow(["'03 11 04:25:00'", "'2014-03-11 04:25:00'",0.02, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 11 06:25:00'", "'2014-03-11 06:25:00'",0.02, 0.00, 0.26, 0.00, 0.05, 0.00]);  data.addRow(["'03 11 08:25:00'", "'2014-03-11 08:25:00'",1.38, 0.00, 3.21, 0.00, 0.70, 0.00]);  data.addRow(["'03 11 10:25:00'", "'2014-03-11 10:25:00'",23.64, 0.00, 24.85, 0.00, 2.12, 0.00]);  data.addRow(["'03 11 12:25:00'", "'2014-03-11 12:25:00'",5.26, 0.00, 9.64, 0.00, 1.33, 0.00]);  data.addRow(["'03 11 14:25:00'", "'2014-03-11 14:25:00'",13.66, 0.00, 21.43, 0.00, 1.79, 0.00]);  data.addRow(["'03 11 16:25:00'", "'2014-03-11 16:25:00'",6.31, 0.00, 10.93, 0.00, 1.66, 0.00]);  data.addRow(["'03 11 18:25:00'", "'2014-03-11 18:25:00'",1.74, 0.00, 3.27, 0.00, 0.65, 0.00]);  data.addRow(["'03 11 20:25:00'", "'2014-03-11 20:25:00'",2.69, 0.00, 3.60, 0.00, 0.61, 0.00]);  data.addRow(["'03 11 22:25:00'", "'2014-03-11 22:25:00'",0.26, 0.00, 0.45, 0.00, 0.14, 0.00]);  data.addRow(["'03 12 00:25:00'", "'2014-03-12 00:25:00'",0.02, 0.00, 0.13, 0.00, 0.07, 0.00]);  data.addRow(["'03 12 02:25:00'", "'2014-03-12 02:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 12 04:25:00'", "'2014-03-12 04:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 12 06:25:00'", "'2014-03-12 06:25:00'",0.02, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 12 08:25:00'", "'2014-03-12 08:25:00'",2.99, 0.00, 5.48, 0.00, 0.55, 0.00]);  data.addRow(["'03 12 10:25:00'", "'2014-03-12 10:25:00'",6.57, 0.00, 14.47, 0.00, 1.78, 0.00]);  data.addRow(["'03 12 12:25:00'", "'2014-03-12 12:25:00'",7.39, 0.00, 22.34, 0.00, 2.68, 0.00]);  data.addRow(["'03 12 14:25:00'", "'2014-03-12 14:25:00'",9.69, 0.00, 15.44, 0.00, 2.27, 0.00]);  data.addRow(["'03 12 16:25:00'", "'2014-03-12 16:25:00'",21.16, 0.00, 29.30, 0.00, 2.11, 0.00]);  data.addRow(["'03 12 18:25:00'", "'2014-03-12 18:25:00'",18.69, 0.00, 25.14, 0.00, 2.16, 0.00]);  data.addRow(["'03 12 20:25:00'", "'2014-03-12 20:25:00'",11.60, 0.00, 11.04, 0.00, 0.88, 0.00]);  data.addRow(["'03 12 22:25:00'", "'2014-03-12 22:25:00'",0.33, 0.00, 0.93, 0.00, 0.17, 0.00]);  data.addRow(["'03 13 00:25:00'", "'2014-03-13 00:25:00'",0.03, 0.00, 0.10, 0.00, 0.07, 0.00]);  data.addRow(["'03 13 02:25:00'", "'2014-03-13 02:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 13 04:25:00'", "'2014-03-13 04:25:00'",0.01, 0.00, 0.07, 0.00, 0.05, 0.00]);  data.addRow(["'03 13 06:25:00'", "'2014-03-13 06:25:00'",0.02, 0.00, 0.11, 0.00, 0.05, 0.00]);  data.addRow(["'03 13 08:25:00'", "'2014-03-13 08:25:00'",3.39, 0.00, 4.17, 0.00, 0.54, 0.00]);  data.addRow(["'03 13 10:25:00'", "'2014-03-13 10:25:00'",15.04, 0.00, 18.57, 0.00, 1.42, 0.00]);  data.addRow(["'03 13 12:25:00'", "'2014-03-13 12:25:00'",9.37, 0.00, 14.44, 0.00, 1.34, 0.00]);  data.addRow(["'03 13 14:25:00'", "'2014-03-13 14:25:00'",13.29, 0.00, 22.38, 0.00, 1.69, 0.00]);  data.addRow(["'03 13 16:25:00'", "'2014-03-13 16:25:00'",11.75, 0.00, 16.93, 0.00, 1.55, 0.00]);  data.addRow(["'03 13 18:25:00'", "'2014-03-13 18:25:00'",9.48, 0.00, 13.60, 0.00, 0.89, 0.00]);  data.addRow(["'03 13 20:25:00'", "'2014-03-13 20:25:00'",1.31, 0.00, 2.17, 0.00, 0.37, 0.00]);  data.addRow(["'03 13 22:25:00'", "'2014-03-13 22:25:00'",0.13, 0.00, 0.33, 0.00, 0.15, 0.00]);  data.addRow(["'03 14 00:25:00'", "'2014-03-14 00:25:00'",0.03, 0.00, 0.10, 0.00, 0.07, 0.00]);  data.addRow(["'03 14 02:25:00'", "'2014-03-14 02:25:00'",0.02, 0.00, 0.07, 0.00, 0.06, 0.00]);  data.addRow(["'03 14 04:25:00'", "'2014-03-14 04:25:00'",0.01, 0.00, 0.07, 0.00, 0.06, 0.00]);  data.addRow(["'03 14 06:25:00'", "'2014-03-14 06:25:00'",0.02, 0.00, 0.14, 0.00, 0.06, 0.00]);  data.addRow(["'03 14 08:25:00'", "'2014-03-14 08:25:00'",0.84, 0.00, 2.12, 0.00, 0.46, 0.00]);  data.addRow(["'03 14 10:25:00'", "'2014-03-14 10:25:00'",7.05, 0.00, 11.06, 0.00, 1.54, 0.00]);  data.addRow(["'03 14 12:25:00'", "'2014-03-14 12:25:00'",12.19, 0.00, 16.15, 0.00, 1.50, 0.00]);  data.addRow(["'03 14 14:25:00'", "'2014-03-14 14:25:00'",4.88, 0.00, 7.75, 0.00, 0.99, 0.00]);  data.addRow(["'03 14 16:25:00'", "'2014-03-14 16:25:00'",2.09, 0.00, 4.88, 0.00, 0.67, 0.00]);  data.addRow(["'03 14 18:25:00'", "'2014-03-14 18:25:00'",0.31, 0.00, 1.04, 0.00, 0.16, 0.00]);  data.addRow(["'03 14 20:25:00'", "'2014-03-14 20:25:00'",0.50, 0.00, 0.54, 0.00, 0.08, 0.00]);  data.addRow(["'03 14 22:25:00'", "'2014-03-14 22:25:00'",0.08, 0.00, 1.05, 0.00, 0.06, 0.00]);  data.addRow(["'03 15 00:25:00'", "'2014-03-15 00:25:00'",0.02, 0.00, 0.10, 0.00, 0.06, 0.00]);  data.addRow(["'03 15 02:25:00'", "'2014-03-15 02:25:00'",0.02, 0.00, 0.09, 0.00, 0.06, 0.00]);  data.addRow(["'03 15 04:25:00'", "'2014-03-15 04:25:00'",0.03, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 15 06:25:00'", "'2014-03-15 06:25:00'",0.01, 0.00, 0.03, 0.00, 0.03, 0.00]);  data.addRow(["'03 15 08:25:00'", "'2014-03-15 08:25:00'",0.03, 0.00, 0.20, 0.00, 0.09, 0.00]);  data.addRow(["'03 15 10:25:00'", "'2014-03-15 10:25:00'",0.28, 0.00, 0.85, 0.00, 0.32, 0.00]);  data.addRow(["'03 15 12:25:00'", "'2014-03-15 12:25:00'",0.38, 0.00, 1.05, 0.00, 0.28, 0.00]);  data.addRow(["'03 15 14:25:00'", "'2014-03-15 14:25:00'",0.42, 0.00, 2.84, 0.00, 0.12, 0.00]);  data.addRow(["'03 15 16:25:00'", "'2014-03-15 16:25:00'",0.04, 0.00, 0.17, 0.00, 0.08, 0.00]);  data.addRow(["'03 15 18:25:00'", "'2014-03-15 18:25:00'",0.03, 0.00, 0.28, 0.00, 0.06, 0.00]);  data.addRow(["'03 15 20:25:00'", "'2014-03-15 20:25:00'",0.02, 0.00, 0.08, 0.00, 0.05, 0.00]);  data.addRow(["'03 15 22:25:00'", "'2014-03-15 22:25:00'",0.02, 0.00, 0.10, 0.00, 0.06, 0.00]);  data.addRow(["'03 16 00:25:00'", "'2014-03-16 00:25:00'",0.02, 0.00, 0.11, 0.00, 0.06, 0.00]);  data.addRow(["'03 16 02:25:00'", "'2014-03-16 02:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 16 04:25:00'", "'2014-03-16 04:25:00'",0.01, 0.00, 0.03, 0.00, 0.03, 0.00]);  data.addRow(["'03 16 06:25:00'", "'2014-03-16 06:25:00'",0.01, 0.00, 0.03, 0.00, 0.03, 0.00]);  data.addRow(["'03 16 08:25:00'", "'2014-03-16 08:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 16 10:25:00'", "'2014-03-16 10:25:00'",0.02, 0.00, 0.13, 0.00, 0.06, 0.00]);  data.addRow(["'03 16 12:25:00'", "'2014-03-16 12:25:00'",0.03, 0.00, 0.22, 0.00, 0.07, 0.00]);  data.addRow(["'03 16 14:25:00'", "'2014-03-16 14:25:00'",0.61, 0.00, 0.55, 0.00, 0.06, 0.00]);  data.addRow(["'03 16 16:25:00'", "'2014-03-16 16:25:00'",8.30, 0.00, 8.75, 0.00, 0.20, 0.00]);  data.addRow(["'03 16 18:25:00'", "'2014-03-16 18:25:00'",0.09, 0.00, 0.35, 0.00, 0.18, 0.00]);  data.addRow(["'03 16 20:25:00'", "'2014-03-16 20:25:00'",0.63, 0.00, 3.96, 0.00, 0.15, 0.00]);  data.addRow(["'03 16 22:25:00'", "'2014-03-16 22:25:00'",0.03, 0.00, 0.13, 0.00, 0.07, 0.00]);  data.addRow(["'03 17 00:25:00'", "'2014-03-17 00:25:00'",0.06, 0.00, 0.08, 0.00, 0.03, 0.00]);  data.addRow(["'03 17 02:25:00'", "'2014-03-17 02:25:00'",0.01, 0.00, 0.05, 0.00, 0.03, 0.00]);  data.addRow(["'03 17 04:25:00'", "'2014-03-17 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 17 06:25:00'", "'2014-03-17 06:25:00'",0.90, 0.00, 0.67, 0.00, 0.04, 0.00]);  data.addRow(["'03 17 08:25:00'", "'2014-03-17 08:25:00'",1.27, 0.00, 3.09, 0.00, 0.49, 0.00]);  data.addRow(["'03 17 10:25:00'", "'2014-03-17 10:25:00'",7.25, 0.00, 14.67, 0.00, 1.59, 0.00]);  data.addRow(["'03 17 12:25:00'", "'2014-03-17 12:25:00'",28.44, 0.00, 37.70, 0.00, 1.95, 0.00]);  data.addRow(["'03 17 14:25:00'", "'2014-03-17 14:25:00'",21.47, 0.00, 28.11, 0.00, 1.83, 0.00]);  data.addRow(["'03 17 16:25:00'", "'2014-03-17 16:25:00'",13.76, 0.00, 16.69, 0.00, 1.76, 0.00]);  data.addRow(["'03 17 18:25:00'", "'2014-03-17 18:25:00'",10.27, 0.00, 11.21, 0.00, 0.61, 0.00]);  data.addRow(["'03 17 20:25:00'", "'2014-03-17 20:25:00'",9.09, 0.00, 12.87, 0.00, 0.49, 0.00]);  data.addRow(["'03 17 22:25:00'", "'2014-03-17 22:25:00'",5.64, 0.00, 6.49, 0.00, 0.25, 0.00]);  data.addRow(["'03 18 00:25:00'", "'2014-03-18 00:25:00'",0.04, 0.00, 0.29, 0.00, 0.11, 0.00]);  data.addRow(["'03 18 02:25:00'", "'2014-03-18 02:25:00'",0.02, 0.00, 0.10, 0.00, 0.05, 0.00]);  data.addRow(["'03 18 04:25:00'", "'2014-03-18 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.04, 0.00]);  data.addRow(["'03 18 06:25:00'", "'2014-03-18 06:25:00'",0.01, 0.00, 0.09, 0.00, 0.04, 0.00]);  data.addRow(["'03 18 08:25:00'", "'2014-03-18 08:25:00'",1.53, 0.00, 3.42, 0.00, 0.60, 0.00]);  data.addRow(["'03 18 10:25:00'", "'2014-03-18 10:25:00'",11.88, 0.00, 19.26, 0.00, 1.64, 0.00]);  data.addRow(["'03 18 12:25:00'", "'2014-03-18 12:25:00'",13.20, 0.00, 26.42, 0.00, 1.69, 0.00]);  data.addRow(["'03 18 14:25:00'", "'2014-03-18 14:25:00'",13.03, 0.00, 22.83, 0.00, 1.80, 0.00]);  data.addRow(["'03 18 16:25:00'", "'2014-03-18 16:25:00'",12.65, 0.00, 19.01, 0.00, 1.52, 0.00]);  data.addRow(["'03 18 18:25:00'", "'2014-03-18 18:25:00'",10.01, 0.00, 10.28, 0.00, 0.67, 0.00]);  data.addRow(["'03 18 20:25:00'", "'2014-03-18 20:25:00'",5.14, 0.00, 7.08, 0.00, 0.32, 0.00]);  data.addRow(["'03 18 22:25:00'", "'2014-03-18 22:25:00'",0.09, 0.00, 0.67, 0.00, 0.25, 0.00]);  data.addRow(["'03 19 00:25:00'", "'2014-03-19 00:25:00'",0.05, 0.00, 0.50, 0.00, 0.07, 0.00]);  data.addRow(["'03 19 02:25:00'", "'2014-03-19 02:25:00'",0.01, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 19 04:25:00'", "'2014-03-19 04:25:00'",0.01, 0.00, 0.03, 0.00, 0.03, 0.00]);  data.addRow(["'03 19 06:25:00'", "'2014-03-19 06:25:00'",0.01, 0.00, 0.05, 0.00, 0.03, 0.00]);  data.addRow(["'03 19 08:25:00'", "'2014-03-19 08:25:00'",5.08, 0.00, 6.39, 0.00, 0.55, 0.00]);  data.addRow(["'03 19 10:25:00'", "'2014-03-19 10:25:00'",7.98, 0.00, 13.76, 0.00, 1.54, 0.00]);  data.addRow(["'03 19 12:25:00'", "'2014-03-19 12:25:00'",22.63, 0.00, 35.88, 0.00, 1.88, 0.00]);  data.addRow(["'03 19 14:25:00'", "'2014-03-19 14:25:00'",19.66, 0.00, 31.86, 0.00, 1.75, 0.00]);  data.addRow(["'03 19 16:25:00'", "'2014-03-19 16:25:00'",8.26, 0.00, 13.64, 0.00, 1.45, 0.00]);  data.addRow(["'03 19 18:25:00'", "'2014-03-19 18:25:00'",21.36, 0.00, 24.31, 0.00, 0.81, 0.00]);  data.addRow(["'03 19 20:25:00'", "'2014-03-19 20:25:00'",3.20, 0.00, 3.30, 0.00, 0.29, 0.00]);  data.addRow(["'03 19 22:25:00'", "'2014-03-19 22:25:00'",3.19, 0.00, 3.12, 0.00, 0.15, 0.00]);  data.addRow(["'03 20 00:25:00'", "'2014-03-20 00:25:00'",0.01, 0.00, 0.08, 0.00, 0.04, 0.00]);  data.addRow(["'03 20 02:25:00'", "'2014-03-20 02:25:00'",0.01, 0.00, 0.03, 0.00, 0.03, 0.00]);  data.addRow(["'03 20 04:25:00'", "'2014-03-20 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 20 06:25:00'", "'2014-03-20 06:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 20 08:25:00'", "'2014-03-20 08:25:00'",3.54, 0.00, 4.68, 0.00, 0.63, 0.00]);  data.addRow(["'03 20 10:25:00'", "'2014-03-20 10:25:00'",5.47, 0.00, 11.80, 0.00, 1.33, 0.00]);  data.addRow(["'03 20 12:25:00'", "'2014-03-20 12:25:00'",13.30, 0.00, 16.47, 0.00, 1.36, 0.00]);  data.addRow(["'03 20 14:25:00'", "'2014-03-20 14:25:00'",9.91, 0.00, 16.45, 0.00, 1.74, 0.00]);  data.addRow(["'03 20 16:25:00'", "'2014-03-20 16:25:00'",7.33, 0.00, 12.95, 0.00, 1.33, 0.00]);  data.addRow(["'03 20 18:25:00'", "'2014-03-20 18:25:00'",6.52, 0.00, 8.31, 0.00, 0.60, 0.00]);  data.addRow(["'03 20 20:25:00'", "'2014-03-20 20:25:00'",0.49, 0.00, 6.95, 0.00, 0.30, 0.00]);  data.addRow(["'03 20 22:25:00'", "'2014-03-20 22:25:00'",2.31, 0.00, 2.10, 0.00, 0.19, 0.00]);  data.addRow(["'03 21 00:25:00'", "'2014-03-21 00:25:00'",0.05, 0.00, 0.36, 0.00, 0.09, 0.00]);  data.addRow(["'03 21 02:25:00'", "'2014-03-21 02:25:00'",0.01, 0.00, 0.04, 0.00, 0.02, 0.00]);  data.addRow(["'03 21 04:25:00'", "'2014-03-21 04:25:00'",0.03, 0.00, 0.17, 0.00, 0.04, 0.00]);  data.addRow(["'03 21 06:25:00'", "'2014-03-21 06:25:00'",0.01, 0.00, 0.04, 0.00, 0.04, 0.00]);  data.addRow(["'03 21 08:25:00'", "'2014-03-21 08:25:00'",1.85, 0.00, 2.45, 0.00, 0.34, 0.00]);  data.addRow(["'03 21 10:25:00'", "'2014-03-21 10:25:00'",5.31, 0.00, 10.42, 0.00, 1.47, 0.00]);  data.addRow(["'03 21 12:25:00'", "'2014-03-21 12:25:00'",12.36, 0.00, 19.37, 0.00, 1.91, 0.00]);  data.addRow(["'03 21 14:25:00'", "'2014-03-21 14:25:00'",6.27, 0.00, 19.66, 0.00, 1.00, 0.00]);  data.addRow(["'03 21 16:25:00'", "'2014-03-21 16:25:00'",2.48, 0.00, 21.36, 0.00, 0.62, 0.00]);  data.addRow(["'03 21 18:25:00'", "'2014-03-21 18:25:00'",0.08, 0.00, 0.44, 0.00, 0.15, 0.00]);  data.addRow(["'03 21 20:25:00'", "'2014-03-21 20:25:00'",0.02, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 21 22:25:00'", "'2014-03-21 22:25:00'",0.01, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 22 00:25:00'", "'2014-03-22 00:25:00'",0.03, 0.00, 0.11, 0.00, 0.07, 0.00]);  data.addRow(["'03 22 02:25:00'", "'2014-03-22 02:25:00'",0.01, 0.00, 0.07, 0.00, 0.04, 0.00]);  data.addRow(["'03 22 04:25:00'", "'2014-03-22 04:25:00'",0.01, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 22 06:25:00'", "'2014-03-22 06:25:00'",0.01, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 22 08:25:00'", "'2014-03-22 08:25:00'",0.02, 0.00, 0.10, 0.00, 0.06, 0.00]);  data.addRow(["'03 22 10:25:00'", "'2014-03-22 10:25:00'",0.06, 0.00, 0.16, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 12:25:00'", "'2014-03-22 12:25:00'",0.03, 0.00, 0.14, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 14:25:00'", "'2014-03-22 14:25:00'",0.03, 0.00, 0.17, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 16:25:00'", "'2014-03-22 16:25:00'",0.06, 0.00, 0.17, 0.00, 0.09, 0.00]);  data.addRow(["'03 22 18:25:00'", "'2014-03-22 18:25:00'",0.03, 0.00, 0.17, 0.00, 0.08, 0.00]);  data.addRow(["'03 22 20:25:00'", "'2014-03-22 20:25:00'",0.14, 0.00, 2.81, 0.00, 0.05, 0.00]);  data.addRow(["'03 22 22:25:00'", "'2014-03-22 22:25:00'",0.26, 0.00, 5.65, 0.00, 0.04, 0.00]);  data.addRow(["'03 23 00:25:00'", "'2014-03-23 00:25:00'",0.01, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 23 02:25:00'", "'2014-03-23 02:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 23 04:25:00'", "'2014-03-23 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 23 06:25:00'", "'2014-03-23 06:25:00'",0.03, 0.00, 0.08, 0.00, 0.03, 0.00]);  data.addRow(["'03 23 08:25:00'", "'2014-03-23 08:25:00'",0.01, 0.00, 0.05, 0.00, 0.04, 0.00]);  data.addRow(["'03 23 10:25:00'", "'2014-03-23 10:25:00'",0.03, 0.00, 0.39, 0.00, 0.04, 0.00]);  data.addRow(["'03 23 12:25:00'", "'2014-03-23 12:25:00'",0.01, 0.00, 0.09, 0.00, 0.06, 0.00]);  data.addRow(["'03 23 14:25:00'", "'2014-03-23 14:25:00'",0.03, 0.00, 0.20, 0.00, 0.11, 0.00]);  data.addRow(["'03 23 16:25:00'", "'2014-03-23 16:25:00'",0.06, 0.00, 0.52, 0.00, 0.14, 0.00]);  data.addRow(["'03 23 18:25:00'", "'2014-03-23 18:25:00'",1.49, 0.00, 2.42, 0.00, 0.29, 0.00]);  data.addRow(["'03 23 20:25:00'", "'2014-03-23 20:25:00'",0.13, 0.00, 0.58, 0.00, 0.16, 0.00]);  data.addRow(["'03 23 22:25:00'", "'2014-03-23 22:25:00'",0.05, 0.00, 0.28, 0.00, 0.16, 0.00]);  data.addRow(["'03 24 00:25:00'", "'2014-03-24 00:25:00'",0.02, 0.00, 0.09, 0.00, 0.06, 0.00]);  data.addRow(["'03 24 02:25:00'", "'2014-03-24 02:25:00'",0.03, 0.00, 0.18, 0.00, 0.08, 0.00]);  data.addRow(["'03 24 04:25:00'", "'2014-03-24 04:25:00'",0.01, 0.00, 0.04, 0.00, 0.03, 0.00]);  data.addRow(["'03 24 06:25:00'", "'2014-03-24 06:25:00'",0.03, 0.00, 0.06, 0.00, 0.04, 0.00]);  data.addRow(["'03 24 08:25:00'", "'2014-03-24 08:25:00'",9.08, 0.00, 10.69, 0.00, 0.60, 0.00]);  data.addRow(["'03 24 10:25:00'", "'2014-03-24 10:25:00'",29.27, 0.00, 30.35, 0.00, 1.56, 0.00]);  data.addRow(["'03 24 12:25:00'", "'2014-03-24 12:25:00'",25.07, 0.00, 30.16, 0.00, 1.81, 0.00]);  data.addRow(["'03 24 14:25:00'", "'2014-03-24 14:25:00'",15.65, 5.31, 21.26, 8.13, 1.66, 0.82]);  data.addRow(["'03 24 16:25:00'", "'2014-03-24 16:25:00'",11.58, 9.36, 17.42, 14.00, 1.44, 1.30]);  data.addRow(["'03 24 18:25:00'", "'2014-03-24 18:25:00'",3.69, 1.91, 5.01, 3.89, 0.66, 0.60]);  data.addRow(["'03 24 20:25:00'", "'2014-03-24 20:25:00'",0.78, 2.00, 2.07, 2.13, 0.38, 0.35]);  data.addRow(["'03 24 22:25:00'", "'2014-03-24 22:25:00'",0.17, 0.41, 0.53, 0.54, 0.20, 0.18]);  data.addRow(["'03 25 00:25:00'", "'2014-03-25 00:25:00'",0.03, 0.09, 0.12, 0.13, 0.08, 0.08]);  data.addRow(["'03 25 02:25:00'", "'2014-03-25 02:25:00'",0.01, 0.01, 0.06, 0.05, 0.05, 0.04]);  data.addRow(["'03 25 04:25:00'", "'2014-03-25 04:25:00'",0.01, 0.02, 0.06, 0.06, 0.05, 0.04]);  data.addRow(["'03 25 06:25:00'", "'2014-03-25 06:25:00'",0.02, 0.04, 0.08, 0.08, 0.06, 0.05]);  data.addRow(["'03 25 08:25:00'", "'2014-03-25 08:25:00'",4.09, 15.09, 7.19, 12.56, 0.58, 0.53]);  data.addRow(["'03 25 10:25:00'", "'2014-03-25 10:25:00'",9.43, 10.23, 14.52, 12.86, 1.42, 1.30]);  data.addRow(["'03 25 12:25:00'", "'2014-03-25 12:25:00'",6.28, 9.64, 11.94, 11.09, 1.41, 1.28]);  data.addRow(["'03 25 14:25:00'", "'2014-03-25 14:25:00'",9.91, 8.28, 15.21, 12.33, 1.61, 1.49]);  data.addRow(["'03 25 16:25:00'", "'2014-03-25 16:25:00'",5.35, 9.31, 11.95, 10.34, 1.45, 1.31]);  data.addRow(["'03 25 18:25:00'", "'2014-03-25 18:25:00'",2.42, 3.16, 4.54, 4.05, 0.63, 0.59]);  data.addRow(["'03 25 20:25:00'", "'2014-03-25 20:25:00'",1.46, 2.18, 2.76, 2.56, 0.38, 0.34]);  data.addRow(["'03 25 22:25:00'", "'2014-03-25 22:25:00'",5.06, 0.69, 4.00, 4.05, 0.15, 0.14]);  data.addRow(["'03 26 00:25:00'", "'2014-03-26 00:25:00'",0.02, 0.06, 0.10, 0.10, 0.06, 0.06]);  data.addRow(["'03 26 02:25:00'", "'2014-03-26 02:25:00'",0.01, 0.01, 0.05, 0.05, 0.04, 0.04]);  data.addRow(["'03 26 04:25:00'", "'2014-03-26 04:25:00'",0.01, 0.03, 0.06, 0.06, 0.05, 0.04]);  data.addRow(["'03 26 06:25:00'", "'2014-03-26 06:25:00'",0.10, 0.19, 0.18, 0.21, 0.05, 0.05]);  data.addRow(["'03 26 08:25:00'", "'2014-03-26 08:25:00'",4.43, 1.71, 5.33, 3.71, 0.55, 0.50]);  data.addRow(["'03 26 10:25:00'", "'2014-03-26 10:25:00'",12.33, 7.80, 15.46, 12.25, 1.50, 1.37]);  data.addRow(["'03 26 12:25:00'", "'2014-03-26 12:25:00'",11.88, 11.66, 17.34, 14.73, 1.70, 1.56]);  data.addRow(["'03 26 14:25:00'", "'2014-03-26 14:25:00'",14.41, 18.47, 20.62, 20.35, 1.64, 1.49]);  data.addRow(["'03 26 16:25:00'", "'2014-03-26 16:25:00'",8.44, 7.10, 12.03, 9.88, 1.48, 1.34]);  data.addRow(["'03 26 18:25:00'", "'2014-03-26 18:25:00'",7.10, 3.20, 8.21, 6.04, 0.65, 0.60]);  data.addRow(["'03 26 20:25:00'", "'2014-03-26 20:25:00'",2.67, 0.67, 4.77, 2.86, 0.38, 0.35]);  data.addRow(["'03 26 22:25:00'", "'2014-03-26 22:25:00'",0.61, 0.79, 1.06, 0.99, 0.26, 0.23]);  data.addRow(["'03 27 00:25:00'", "'2014-03-27 00:25:00'",0.06, 0.17, 0.29, 0.28, 0.18, 0.15]);  data.addRow(["'03 27 02:25:00'", "'2014-03-27 02:25:00'",0.06, 0.02, 0.20, 0.16, 0.16, 0.14]);  data.addRow(["'03 27 04:25:00'", "'2014-03-27 04:25:00'",0.06, 0.02, 0.20, 0.16, 0.17, 0.14]);  data.addRow(["'03 27 06:25:00'", "'2014-03-27 06:25:00'",0.07, 0.26, 0.37, 0.33, 0.17, 0.14]);  data.addRow(["'03 27 08:25:00'", "'2014-03-27 08:25:00'",6.39, 2.85, 7.21, 5.36, 0.70, 0.63]);  data.addRow(["'03 27 10:25:00'", "'2014-03-27 10:25:00'",32.59, 14.54, 34.00, 23.59, 1.57, 1.42]);  data.addRow(["'03 27 12:25:00'", "'2014-03-27 12:25:00'",12.88, 7.88, 16.01, 12.67, 1.90, 1.69]);  data.addRow(["'03 27 14:25:00'", "'2014-03-27 14:25:00'",17.70, 9.73, 20.19, 15.52, 1.81, 1.65]);  data.addRow(["'03 27 16:25:00'", "'2014-03-27 16:25:00'",4.84, 6.13, 9.26, 7.86, 1.55, 1.40]);  data.addRow(["'03 27 18:25:00'", "'2014-03-27 18:25:00'",4.39, 2.39, 5.49, 4.15, 0.73, 0.67]);  data.addRow(["'03 27 20:25:00'", "'2014-03-27 20:25:00'",23.05, 1.37, 17.98, 9.24, 0.48, 0.36]);  data.addRow(["'03 27 22:25:00'", "'2014-03-27 22:25:00'",0.25, 0.28, 0.91, 0.46, 0.37, 0.23]);  data.addRow(["'03 28 00:25:00'", "'2014-03-28 00:25:00'",0.17, 0.06, 0.37, 0.19, 0.23, 0.15]);  data.addRow(["'03 28 02:25:00'", "'2014-03-28 02:25:00'",0.12, 0.05, 0.30, 0.17, 0.20, 0.13]);  data.addRow(["'03 28 04:25:00'", "'2014-03-28 04:25:00'",0.15, 0.02, 0.34, 0.16, 0.22, 0.14]);  data.addRow(["'03 28 06:25:00'", "'2014-03-28 06:25:00'",0.14, 0.03, 0.34, 0.16, 0.22, 0.13]);  data.addRow(["'03 28 08:25:00'", "'2014-03-28 08:25:00'",6.21, 2.81, 12.04, 4.05, 1.19, 0.45]);  data.addRow(["'03 28 10:25:00'", "'2014-03-28 10:25:00'",10.07, 4.51, 17.98, 8.46, 1.99, 1.15]);  data.addRow(["'03 28 12:25:00'", "'2014-03-28 12:25:00'",6.89, 7.95, 12.60, 10.61, 1.48, 1.37]);  data.addRow(["'03 28 14:25:00'", "'2014-03-28 14:25:00'",9.43, 8.92, 12.73, 11.45, 0.95, 0.86]);  data.addRow(["'03 28 16:25:00'", "'2014-03-28 16:25:00'",1.19, 3.22, 3.59, 3.25, 0.69, 0.62]);  data.addRow(["'03 28 18:25:00'", "'2014-03-28 18:25:00'",0.51, 3.69, 1.95, 2.91, 0.25, 0.22]);  data.addRow(["'03 28 20:25:00'", "'2014-03-28 20:25:00'",0.13, 2.81, 1.29, 2.10, 0.18, 0.16]);  data.addRow(["'03 28 22:25:00'", "'2014-03-28 22:25:00'",0.05, 0.09, 0.21, 0.20, 0.15, 0.13]);  data.addRow(["'03 29 00:25:00'", "'2014-03-29 00:25:00'",0.05, 0.13, 0.21, 0.23, 0.15, 0.13]);  data.addRow(["'03 29 02:25:00'", "'2014-03-29 02:25:00'",0.04, 0.03, 0.15, 0.14, 0.12, 0.11]);  data.addRow(["'03 29 04:25:00'", "'2014-03-29 04:25:00'",0.04, 0.01, 0.14, 0.12, 0.12, 0.11]);  data.addRow(["'03 29 06:25:00'", "'2014-03-29 06:25:00'",0.04, 0.02, 0.15, 0.13, 0.12, 0.11]);  data.addRow(["'03 29 08:25:00'", "'2014-03-29 08:25:00'",0.18, 0.15, 0.39, 0.32, 0.19, 0.16]);  data.addRow(["'03 29 10:25:00'", "'2014-03-29 10:25:00'",6.56, 1.03, 5.54, 3.43, 0.43, 0.38]);  data.addRow(["'03 29 12:25:00'", "'2014-03-29 12:25:00'",1.84, 2.91, 3.46, 3.15, 0.49, 0.44]);  data.addRow(["'03 29 14:25:00'", "'2014-03-29 14:25:00'",2.04, 6.40, 4.45, 5.49, 0.34, 0.30]);  data.addRow(["'03 29 16:25:00'", "'2014-03-29 16:25:00'",3.16, 0.78, 3.20, 2.24, 0.34, 0.31]);  data.addRow(["'03 29 18:25:00'", "'2014-03-29 18:25:00'",0.23, 4.11, 1.74, 3.07, 0.22, 0.20]);  data.addRow(["'03 29 20:25:00'", "'2014-03-29 20:25:00'",0.26, 11.51, 4.17, 8.06, 0.20, 0.18]);  data.addRow(["'03 29 22:25:00'", "'2014-03-29 22:25:00'",1.35, 0.16, 1.33, 0.80, 0.15, 0.14]);  data.addRow(["'03 30 00:25:00'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 02:25:00'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 04:25:00'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 06:25:00'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 08:25:00'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 10:25:00'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 12:25:00'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 14:25:00'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 16:25:00'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 18:25:00'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 20:25:00'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 30 22:25:00'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 00:25:00'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 02:25:00'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 04:25:00'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 06:25:00'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 08:25:00'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 10:25:00'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 12:25:00'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 14:25:00'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 16:25:00'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 18:25:00'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 20:25:00'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03 31 22:25:00'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 00:25:00'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 02:25:00'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 04:25:00'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 06:25:00'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 08:25:00'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 10:25:00'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 12:25:00'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04 01 14:25:00'", "'2014-04-01 14:25:00'",6.04, 6.14, 9.07, 8.17, 1.21, 1.12]);  data.addRow(["'04 01 16:25:00'", "'2014-04-01 16:25:00'",9.94, 29.19, 21.07, 25.83, 1.37, 1.24]);  data.addRow(["'04 01 18:25:00'", "'2014-04-01 18:25:00'",2.00, 1.68, 3.52, 2.90, 0.85, 0.80]);  data.addRow(["'04 01 20:25:00'", "'2014-04-01 20:25:00'",0.53, 0.72, 1.26, 1.11, 0.37, 0.34]);  data.addRow(["'04 01 22:25:00'", "'2014-04-01 22:25:00'",1.75, 0.18, 1.79, 1.15, 0.23, 0.21]);  data.addRow(["'04 02 00:25:00'", "'2014-04-02 00:25:00'",0.25, 12.76, 4.64, 8.86, 0.15, 0.13]);  data.addRow(["'04 02 02:25:00'", "'2014-04-02 02:25:00'",0.06, 0.02, 0.17, 0.15, 0.14, 0.12]);  data.addRow(["'04 02 04:25:00'", "'2014-04-02 04:25:00'",0.16, 0.01, 0.25, 0.13, 0.14, 0.11]);  data.addRow(["'04 02 06:25:00'", "'2014-04-02 06:25:00'",0.05, 0.19, 0.22, 0.25, 0.14, 0.12]);  data.addRow(["'04 02 08:25:00'", "'2014-04-02 08:25:00'",1.47, 2.67, 2.91, 2.88, 0.52, 0.46]);  data.addRow(["'04 02 10:25:00'", "'2014-04-02 10:25:00'",6.36, 7.00, 11.05, 9.37, 1.45, 1.32]);  data.addRow(["'04 02 12:25:00'", "'2014-04-02 12:25:00'",9.13, 8.08, 13.72, 11.40, 1.54, 1.42]);  data.addRow(["'04 02 14:25:00'", "'2014-04-02 14:25:00'",3.54, 9.18, 9.10, 9.52, 1.36, 1.23]); 
	    var graphtitle="CAYEY to FIU Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    