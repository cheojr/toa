
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow([ "'03 05 16:20:00'","'2014-03-05 16:20:00'",96.59, 95.77]);  data.addRow([ "'03 05 18:20:00'","'2014-03-05 18:20:00'",61.57, 61.56]);  data.addRow([ "'03 05 20:20:00'","'2014-03-05 20:20:00'",47.69, 50.34]);  data.addRow([ "'03 05 22:20:00'","'2014-03-05 22:20:00'",38.88, 40.63]);  data.addRow([ "'03 06 00:20:00'","'2014-03-06 00:20:00'",26.64, 27.44]);  data.addRow([ "'03 06 02:20:00'","'2014-03-06 02:20:00'",17.32, 18.42]);  data.addRow([ "'03 06 04:20:00'","'2014-03-06 04:20:00'",13.10, 14.63]);  data.addRow([ "'03 06 06:20:00'","'2014-03-06 06:20:00'",14.24, 14.78]);  data.addRow([ "'03 06 08:20:00'","'2014-03-06 08:20:00'",42.76, 42.43]);  data.addRow([ "'03 06 10:20:00'","'2014-03-06 10:20:00'",89.16, 87.40]);  data.addRow([ "'03 06 12:20:00'","'2014-03-06 12:20:00'",97.69, 97.21]);  data.addRow([ "'03 06 14:20:00'","'2014-03-06 14:20:00'",105.80, 106.21]);  data.addRow([ "'03 06 16:20:00'","'2014-03-06 16:20:00'",101.78, 104.54]);  data.addRow([ "'03 06 18:20:00'","'2014-03-06 18:20:00'",64.49, 66.04]);  data.addRow([ "'03 06 20:20:00'","'2014-03-06 20:20:00'",53.05, 54.54]);  data.addRow([ "'03 06 22:20:00'","'2014-03-06 22:20:00'",40.45, 42.52]);  data.addRow([ "'03 07 00:20:00'","'2014-03-07 00:20:00'",26.93, 28.95]);  data.addRow([ "'03 07 02:20:00'","'2014-03-07 02:20:00'",18.32, 19.26]);  data.addRow([ "'03 07 04:20:00'","'2014-03-07 04:20:00'",14.53, 14.92]);  data.addRow([ "'03 07 06:20:00'","'2014-03-07 06:20:00'",14.50, 15.62]);  data.addRow([ "'03 07 08:20:00'","'2014-03-07 08:20:00'",41.17, 41.89]);  data.addRow([ "'03 07 10:20:00'","'2014-03-07 10:20:00'",75.21, 73.75]);  data.addRow([ "'03 07 12:20:00'","'2014-03-07 12:20:00'",87.43, 87.70]);  data.addRow([ "'03 07 14:20:00'","'2014-03-07 14:20:00'",79.22, 81.77]);  data.addRow([ "'03 07 16:20:00'","'2014-03-07 16:20:00'",60.68, 61.88]);  data.addRow([ "'03 07 18:20:00'","'2014-03-07 18:20:00'",40.58, 41.93]);  data.addRow([ "'03 07 20:20:00'","'2014-03-07 20:20:00'",27.93, 28.88]);  data.addRow([ "'03 07 22:20:00'","'2014-03-07 22:20:00'",25.33, 27.60]);  data.addRow([ "'03 08 00:20:00'","'2014-03-08 00:20:00'",21.35, 22.91]);  data.addRow([ "'03 08 02:20:00'","'2014-03-08 02:20:00'",16.30, 16.70]);  data.addRow([ "'03 08 04:20:00'","'2014-03-08 04:20:00'",13.05, 14.08]);  data.addRow([ "'03 08 06:20:00'","'2014-03-08 06:20:00'",13.15, 14.77]);  data.addRow([ "'03 08 08:20:00'","'2014-03-08 08:20:00'",15.30, 16.06]);  data.addRow([ "'03 08 10:20:00'","'2014-03-08 10:20:00'",23.94, 24.36]);  data.addRow([ "'03 08 12:20:00'","'2014-03-08 12:20:00'",30.39, 30.75]);  data.addRow([ "'03 08 14:20:00'","'2014-03-08 14:20:00'",31.52, 32.74]);  data.addRow([ "'03 08 16:20:00'","'2014-03-08 16:20:00'",34.45, 34.63]);  data.addRow([ "'03 08 18:20:00'","'2014-03-08 18:20:00'",28.42, 29.13]);  data.addRow([ "'03 08 20:20:00'","'2014-03-08 20:20:00'",24.26, 25.06]);  data.addRow([ "'03 08 22:20:00'","'2014-03-08 22:20:00'",21.90, 22.40]);  data.addRow([ "'03 09 00:20:00'","'2014-03-09 00:20:00'",18.14, 18.63]);  data.addRow([ "'03 09 02:20:00'","'2014-03-09 02:20:00'",15.88, 16.17]);  data.addRow([ "'03 09 04:20:00'","'2014-03-09 04:20:00'",12.91, 13.51]);  data.addRow([ "'03 09 06:20:00'","'2014-03-09 06:20:00'",12.31, 12.60]);  data.addRow([ "'03 09 08:20:00'","'2014-03-09 08:20:00'",12.91, 12.91]);  data.addRow([ "'03 09 10:20:00'","'2014-03-09 10:20:00'",14.64, 15.41]);  data.addRow([ "'03 09 12:20:00'","'2014-03-09 12:20:00'",18.67, 18.90]);  data.addRow([ "'03 09 14:20:00'","'2014-03-09 14:20:00'",23.14, 23.59]);  data.addRow([ "'03 09 16:20:00'","'2014-03-09 16:20:00'",29.50, 29.51]);  data.addRow([ "'03 09 18:20:00'","'2014-03-09 18:20:00'",32.12, 32.41]);  data.addRow([ "'03 09 20:20:00'","'2014-03-09 20:20:00'",36.13, 36.72]);  data.addRow([ "'03 09 22:20:00'","'2014-03-09 22:20:00'",32.60, 33.43]);  data.addRow([ "'03 10 00:20:00'","'2014-03-10 00:20:00'",26.86, 28.96]);  data.addRow([ "'03 10 02:20:00'","'2014-03-10 02:20:00'",15.81, 18.87]);  data.addRow([ "'03 10 04:20:00'","'2014-03-10 04:20:00'",11.52, 13.24]);  data.addRow([ "'03 10 06:20:00'","'2014-03-10 06:20:00'",15.43, 17.27]);  data.addRow([ "'03 10 08:20:00'","'2014-03-10 08:20:00'",46.22, 48.24]);  data.addRow([ "'03 10 10:20:00'","'2014-03-10 10:20:00'",101.59, 100.34]);  data.addRow([ "'03 10 12:20:00'","'2014-03-10 12:20:00'",111.47, 112.01]);  data.addRow([ "'03 10 14:20:00'","'2014-03-10 14:20:00'",104.16, 105.88]);  data.addRow([ "'03 10 16:20:00'","'2014-03-10 16:20:00'",92.84, 93.23]);  data.addRow([ "'03 10 18:20:00'","'2014-03-10 18:20:00'",57.74, 58.08]);  data.addRow([ "'03 10 20:20:00'","'2014-03-10 20:20:00'",52.04, 54.06]);  data.addRow([ "'03 10 22:20:00'","'2014-03-10 22:20:00'",45.97, 48.92]);  data.addRow([ "'03 11 00:20:00'","'2014-03-11 00:20:00'",33.51, 34.66]);  data.addRow([ "'03 11 02:20:00'","'2014-03-11 02:20:00'",19.61, 21.68]);  data.addRow([ "'03 11 04:20:00'","'2014-03-11 04:20:00'",14.92, 15.33]);  data.addRow([ "'03 11 06:20:00'","'2014-03-11 06:20:00'",13.10, 14.14]);  data.addRow([ "'03 11 08:20:00'","'2014-03-11 08:20:00'",10.94, 14.84]);  data.addRow([ "'03 11 10:20:00'","'2014-03-11 10:20:00'",72.50, 71.88]);  data.addRow([ "'03 11 12:20:00'","'2014-03-11 12:20:00'",93.74, 94.12]);  data.addRow([ "'03 11 14:20:00'","'2014-03-11 14:20:00'",101.59, 101.72]);  data.addRow([ "'03 11 16:20:00'","'2014-03-11 16:20:00'",97.75, 97.91]);  data.addRow([ "'03 11 18:20:00'","'2014-03-11 18:20:00'",64.58, 66.41]);  data.addRow([ "'03 11 20:20:00'","'2014-03-11 20:20:00'",50.29, 52.57]);  data.addRow([ "'03 11 22:20:00'","'2014-03-11 22:20:00'",40.90, 43.66]);  data.addRow([ "'03 12 00:20:00'","'2014-03-12 00:20:00'",28.73, 31.07]);  data.addRow([ "'03 12 02:20:00'","'2014-03-12 02:20:00'",15.79, 17.92]);  data.addRow([ "'03 12 04:20:00'","'2014-03-12 04:20:00'",11.98, 13.53]);  data.addRow([ "'03 12 06:20:00'","'2014-03-12 06:20:00'",11.82, 13.20]);  data.addRow([ "'03 12 08:20:00'","'2014-03-12 08:20:00'",43.00, 43.92]);  data.addRow([ "'03 12 10:20:00'","'2014-03-12 10:20:00'",97.89, 95.84]);  data.addRow([ "'03 12 12:20:00'","'2014-03-12 12:20:00'",108.26, 110.76]);  data.addRow([ "'03 12 14:20:00'","'2014-03-12 14:20:00'",107.01, 108.29]);  data.addRow([ "'03 12 16:20:00'","'2014-03-12 16:20:00'",97.83, 97.90]);  data.addRow([ "'03 12 18:20:00'","'2014-03-12 18:20:00'",64.78, 64.65]);  data.addRow([ "'03 12 20:20:00'","'2014-03-12 20:20:00'",52.06, 52.12]);  data.addRow([ "'03 12 22:20:00'","'2014-03-12 22:20:00'",42.70, 42.88]);  data.addRow([ "'03 13 00:20:00'","'2014-03-13 00:20:00'",29.46, 29.48]);  data.addRow([ "'03 13 02:20:00'","'2014-03-13 02:20:00'",19.43, 19.78]);  data.addRow([ "'03 13 04:20:00'","'2014-03-13 04:20:00'",14.85, 15.84]);  data.addRow([ "'03 13 06:20:00'","'2014-03-13 06:20:00'",14.35, 14.62]);  data.addRow([ "'03 13 08:20:00'","'2014-03-13 08:20:00'",43.79, 43.09]);  data.addRow([ "'03 13 10:20:00'","'2014-03-13 10:20:00'",86.70, 86.32]);  data.addRow([ "'03 13 12:20:00'","'2014-03-13 12:20:00'",91.28, 92.90]);  data.addRow([ "'03 13 14:20:00'","'2014-03-13 14:20:00'",96.16, 97.19]);  data.addRow([ "'03 13 16:20:00'","'2014-03-13 16:20:00'",91.37, 92.86]);  data.addRow([ "'03 13 18:20:00'","'2014-03-13 18:20:00'",62.05, 64.61]);  data.addRow([ "'03 13 20:20:00'","'2014-03-13 20:20:00'",49.05, 50.20]);  data.addRow([ "'03 13 22:20:00'","'2014-03-13 22:20:00'",34.43, 36.98]);  data.addRow([ "'03 14 00:20:00'","'2014-03-14 00:20:00'",23.31, 25.54]);  data.addRow([ "'03 14 02:20:00'","'2014-03-14 02:20:00'",15.57, 17.22]);  data.addRow([ "'03 14 04:20:00'","'2014-03-14 04:20:00'",15.80, 17.18]);  data.addRow([ "'03 14 06:20:00'","'2014-03-14 06:20:00'",14.23, 14.71]);  data.addRow([ "'03 14 08:20:00'","'2014-03-14 08:20:00'",40.10, 40.00]);  data.addRow([ "'03 14 10:20:00'","'2014-03-14 10:20:00'",73.41, 71.80]);  data.addRow([ "'03 14 12:20:00'","'2014-03-14 12:20:00'",86.37, 86.24]);  data.addRow([ "'03 14 14:20:00'","'2014-03-14 14:20:00'",72.41, 73.11]);  data.addRow([ "'03 14 16:20:00'","'2014-03-14 16:20:00'",62.20, 62.13]);  data.addRow([ "'03 14 18:20:00'","'2014-03-14 18:20:00'",36.78, 38.00]);  data.addRow([ "'03 14 20:20:00'","'2014-03-14 20:20:00'",24.76, 26.06]);  data.addRow([ "'03 14 22:20:00'","'2014-03-14 22:20:00'",26.47, 28.56]);  data.addRow([ "'03 15 00:20:00'","'2014-03-15 00:20:00'",21.18, 22.12]);  data.addRow([ "'03 15 02:20:00'","'2014-03-15 02:20:00'",15.34, 15.01]);  data.addRow([ "'03 15 04:20:00'","'2014-03-15 04:20:00'",12.74, 12.88]);  data.addRow([ "'03 15 06:20:00'","'2014-03-15 06:20:00'",12.76, 12.90]);  data.addRow([ "'03 15 08:20:00'","'2014-03-15 08:20:00'",15.71, 16.02]);  data.addRow([ "'03 15 10:20:00'","'2014-03-15 10:20:00'",23.18, 23.60]);  data.addRow([ "'03 15 12:20:00'","'2014-03-15 12:20:00'",28.33, 28.38]);  data.addRow([ "'03 15 14:20:00'","'2014-03-15 14:20:00'",30.25, 29.12]);  data.addRow([ "'03 15 16:20:00'","'2014-03-15 16:20:00'",29.34, 28.38]);  data.addRow([ "'03 15 18:20:00'","'2014-03-15 18:20:00'",26.85, 26.21]);  data.addRow([ "'03 15 20:20:00'","'2014-03-15 20:20:00'",24.37, 24.66]);  data.addRow([ "'03 15 22:20:00'","'2014-03-15 22:20:00'",24.22, 24.64]);  data.addRow([ "'03 16 00:20:00'","'2014-03-16 00:20:00'",21.29, 21.44]);  data.addRow([ "'03 16 02:20:00'","'2014-03-16 02:20:00'",14.23, 14.78]);  data.addRow([ "'03 16 04:20:00'","'2014-03-16 04:20:00'",10.93, 12.05]);  data.addRow([ "'03 16 06:20:00'","'2014-03-16 06:20:00'",10.52, 11.38]);  data.addRow([ "'03 16 08:20:00'","'2014-03-16 08:20:00'",11.37, 11.87]);  data.addRow([ "'03 16 10:20:00'","'2014-03-16 10:20:00'",12.00, 15.17]);  data.addRow([ "'03 16 12:20:00'","'2014-03-16 12:20:00'",20.39, 21.92]);  data.addRow([ "'03 16 14:20:00'","'2014-03-16 14:20:00'",23.93, 24.83]);  data.addRow([ "'03 16 16:20:00'","'2014-03-16 16:20:00'",26.53, 26.03]);  data.addRow([ "'03 16 18:20:00'","'2014-03-16 18:20:00'",33.84, 33.36]);  data.addRow([ "'03 16 20:20:00'","'2014-03-16 20:20:00'",36.53, 36.88]);  data.addRow([ "'03 16 22:20:00'","'2014-03-16 22:20:00'",30.16, 31.61]);  data.addRow([ "'03 17 00:20:00'","'2014-03-17 00:20:00'",22.17, 23.97]);  data.addRow([ "'03 17 02:20:00'","'2014-03-17 02:20:00'",15.80, 17.20]);  data.addRow([ "'03 17 04:20:00'","'2014-03-17 04:20:00'",12.55, 13.35]);  data.addRow([ "'03 17 06:20:00'","'2014-03-17 06:20:00'",13.10, 13.68]);  data.addRow([ "'03 17 08:20:00'","'2014-03-17 08:20:00'",43.32, 43.07]);  data.addRow([ "'03 17 10:20:00'","'2014-03-17 10:20:00'",99.01, 96.28]);  data.addRow([ "'03 17 12:20:00'","'2014-03-17 12:20:00'",110.13, 108.56]);  data.addRow([ "'03 17 14:20:00'","'2014-03-17 14:20:00'",110.21, 109.42]);  data.addRow([ "'03 17 16:20:00'","'2014-03-17 16:20:00'",98.62, 98.22]);  data.addRow([ "'03 17 18:20:00'","'2014-03-17 18:20:00'",63.20, 64.29]);  data.addRow([ "'03 17 20:20:00'","'2014-03-17 20:20:00'",54.09, 54.00]);  data.addRow([ "'03 17 22:20:00'","'2014-03-17 22:20:00'",45.74, 48.25]);  data.addRow([ "'03 18 00:20:00'","'2014-03-18 00:20:00'",35.96, 39.19]);  data.addRow([ "'03 18 02:20:00'","'2014-03-18 02:20:00'",21.90, 23.44]);  data.addRow([ "'03 18 04:20:00'","'2014-03-18 04:20:00'",16.16, 16.39]);  data.addRow([ "'03 18 06:20:00'","'2014-03-18 06:20:00'",14.87, 16.29]);  data.addRow([ "'03 18 08:20:00'","'2014-03-18 08:20:00'",45.73, 45.91]);  data.addRow([ "'03 18 10:20:00'","'2014-03-18 10:20:00'",89.24, 88.74]);  data.addRow([ "'03 18 12:20:00'","'2014-03-18 12:20:00'",102.00, 101.80]);  data.addRow([ "'03 18 14:20:00'","'2014-03-18 14:20:00'",111.98, 110.69]);  data.addRow([ "'03 18 16:20:00'","'2014-03-18 16:20:00'",103.53, 102.25]);  data.addRow([ "'03 18 18:20:00'","'2014-03-18 18:20:00'",66.17, 66.05]);  data.addRow([ "'03 18 20:20:00'","'2014-03-18 20:20:00'",53.98, 54.61]);  data.addRow([ "'03 18 22:20:00'","'2014-03-18 22:20:00'",45.67, 45.30]);  data.addRow([ "'03 19 00:20:00'","'2014-03-19 00:20:00'",34.33, 34.39]);  data.addRow([ "'03 19 02:20:00'","'2014-03-19 02:20:00'",20.99, 21.13]);  data.addRow([ "'03 19 04:20:00'","'2014-03-19 04:20:00'",15.15, 14.66]);  data.addRow([ "'03 19 06:20:00'","'2014-03-19 06:20:00'",15.20, 14.56]);  data.addRow([ "'03 19 08:20:00'","'2014-03-19 08:20:00'",44.79, 44.58]);  data.addRow([ "'03 19 10:20:00'","'2014-03-19 10:20:00'",96.05, 93.66]);  data.addRow([ "'03 19 12:20:00'","'2014-03-19 12:20:00'",109.68, 111.63]);  data.addRow([ "'03 19 14:20:00'","'2014-03-19 14:20:00'",107.71, 106.52]);  data.addRow([ "'03 19 16:20:00'","'2014-03-19 16:20:00'",101.06, 98.41]);  data.addRow([ "'03 19 18:20:00'","'2014-03-19 18:20:00'",61.97, 61.46]);  data.addRow([ "'03 19 20:20:00'","'2014-03-19 20:20:00'",55.77, 54.29]);  data.addRow([ "'03 19 22:20:00'","'2014-03-19 22:20:00'",48.34, 47.60]);  data.addRow([ "'03 20 00:20:00'","'2014-03-20 00:20:00'",34.84, 33.98]);  data.addRow([ "'03 20 02:20:00'","'2014-03-20 02:20:00'",22.94, 23.25]);  data.addRow([ "'03 20 04:20:00'","'2014-03-20 04:20:00'",15.62, 16.24]);  data.addRow([ "'03 20 06:20:00'","'2014-03-20 06:20:00'",15.45, 15.74]);  data.addRow([ "'03 20 08:20:00'","'2014-03-20 08:20:00'",44.85, 43.46]);  data.addRow([ "'03 20 10:20:00'","'2014-03-20 10:20:00'",87.52, 85.45]);  data.addRow([ "'03 20 12:20:00'","'2014-03-20 12:20:00'",95.97, 93.99]);  data.addRow([ "'03 20 14:20:00'","'2014-03-20 14:20:00'",109.08, 107.26]);  data.addRow([ "'03 20 16:20:00'","'2014-03-20 16:20:00'",106.25, 105.08]);  data.addRow([ "'03 20 18:20:00'","'2014-03-20 18:20:00'",68.74, 67.72]);  data.addRow([ "'03 20 20:20:00'","'2014-03-20 20:20:00'",53.42, 53.02]);  data.addRow([ "'03 20 22:20:00'","'2014-03-20 22:20:00'",41.24, 41.42]);  data.addRow([ "'03 21 00:20:00'","'2014-03-21 00:20:00'",22.73, 22.57]);  data.addRow([ "'03 21 02:20:00'","'2014-03-21 02:20:00'",4.48, 4.86]);  data.addRow([ "'03 21 04:20:00'","'2014-03-21 04:20:00'",11.95, 12.94]);  data.addRow([ "'03 21 06:20:00'","'2014-03-21 06:20:00'",13.81, 13.51]);  data.addRow([ "'03 21 08:20:00'","'2014-03-21 08:20:00'",40.53, 39.86]);  data.addRow([ "'03 21 10:20:00'","'2014-03-21 10:20:00'",77.01, 77.37]);  data.addRow([ "'03 21 12:20:00'","'2014-03-21 12:20:00'",88.15, 87.37]);  data.addRow([ "'03 21 14:20:00'","'2014-03-21 14:20:00'",75.88, 75.75]);  data.addRow([ "'03 21 16:20:00'","'2014-03-21 16:20:00'",62.00, 62.02]);  data.addRow([ "'03 21 18:20:00'","'2014-03-21 18:20:00'",36.14, 38.64]);  data.addRow([ "'03 21 20:20:00'","'2014-03-21 20:20:00'",22.98, 24.59]);  data.addRow([ "'03 21 22:20:00'","'2014-03-21 22:20:00'",20.14, 21.80]);  data.addRow([ "'03 22 00:20:00'","'2014-03-22 00:20:00'",15.89, 17.56]);  data.addRow([ "'03 22 02:20:00'","'2014-03-22 02:20:00'",14.65, 14.40]);  data.addRow([ "'03 22 04:20:00'","'2014-03-22 04:20:00'",10.47, 11.51]);  data.addRow([ "'03 22 06:20:00'","'2014-03-22 06:20:00'",11.42, 11.35]);  data.addRow([ "'03 22 08:20:00'","'2014-03-22 08:20:00'",11.14, 11.68]);  data.addRow([ "'03 22 10:20:00'","'2014-03-22 10:20:00'",19.00, 19.36]);  data.addRow([ "'03 22 12:20:00'","'2014-03-22 12:20:00'",23.42, 23.48]);  data.addRow([ "'03 22 14:20:00'","'2014-03-22 14:20:00'",25.02, 24.59]);  data.addRow([ "'03 22 16:20:00'","'2014-03-22 16:20:00'",25.91, 25.90]);  data.addRow([ "'03 22 18:20:00'","'2014-03-22 18:20:00'",26.82, 26.39]);  data.addRow([ "'03 22 20:20:00'","'2014-03-22 20:20:00'",26.84, 28.36]);  data.addRow([ "'03 22 22:20:00'","'2014-03-22 22:20:00'",23.00, 25.13]);  data.addRow([ "'03 23 00:20:00'","'2014-03-23 00:20:00'",16.00, 17.35]);  data.addRow([ "'03 23 02:20:00'","'2014-03-23 02:20:00'",13.82, 13.54]);  data.addRow([ "'03 23 04:20:00'","'2014-03-23 04:20:00'",11.77, 11.32]);  data.addRow([ "'03 23 06:20:00'","'2014-03-23 06:20:00'",11.58, 11.32]);  data.addRow([ "'03 23 08:20:00'","'2014-03-23 08:20:00'",12.66, 12.42]);  data.addRow([ "'03 23 10:20:00'","'2014-03-23 10:20:00'",16.78, 15.42]);  data.addRow([ "'03 23 12:20:00'","'2014-03-23 12:20:00'",18.83, 19.91]);  data.addRow([ "'03 23 14:20:00'","'2014-03-23 14:20:00'",19.54, 20.54]);  data.addRow([ "'03 23 16:20:00'","'2014-03-23 16:20:00'",22.04, 22.48]);  data.addRow([ "'03 23 18:20:00'","'2014-03-23 18:20:00'",29.75, 30.75]);  data.addRow([ "'03 23 20:20:00'","'2014-03-23 20:20:00'",31.19, 33.23]);  data.addRow([ "'03 23 22:20:00'","'2014-03-23 22:20:00'",32.01, 34.24]);  data.addRow([ "'03 24 00:20:00'","'2014-03-24 00:20:00'",24.94, 27.01]);  data.addRow([ "'03 24 02:20:00'","'2014-03-24 02:20:00'",14.32, 16.20]);  data.addRow([ "'03 24 04:20:00'","'2014-03-24 04:20:00'",10.56, 11.97]);  data.addRow([ "'03 24 06:20:00'","'2014-03-24 06:20:00'",11.17, 12.32]);  data.addRow([ "'03 24 08:20:00'","'2014-03-24 08:20:00'",44.86, 44.26]);  data.addRow([ "'03 24 10:20:00'","'2014-03-24 10:20:00'",101.10, 99.26]);  data.addRow([ "'03 24 12:20:00'","'2014-03-24 12:20:00'",109.83, 110.80]);  data.addRow([ "'03 24 14:20:00'","'2014-03-24 14:20:00'",106.12, 107.23]);  data.addRow([ "'03 24 16:20:00'","'2014-03-24 16:20:00'",95.19, 95.03]);  data.addRow([ "'03 24 18:20:00'","'2014-03-24 18:20:00'",57.00, 58.14]);  data.addRow([ "'03 24 20:20:00'","'2014-03-24 20:20:00'",49.67, 51.21]);  data.addRow([ "'03 24 22:20:00'","'2014-03-24 22:20:00'",44.15, 46.19]);  data.addRow([ "'03 25 00:20:00'","'2014-03-25 00:20:00'",30.97, 32.38]);  data.addRow([ "'03 25 02:20:00'","'2014-03-25 02:20:00'",18.92, 19.69]);  data.addRow([ "'03 25 04:20:00'","'2014-03-25 04:20:00'",14.12, 13.42]);  data.addRow([ "'03 25 06:20:00'","'2014-03-25 06:20:00'",15.19, 13.78]);  data.addRow([ "'03 25 08:20:00'","'2014-03-25 08:20:00'",45.75, 43.97]);  data.addRow([ "'03 25 10:20:00'","'2014-03-25 10:20:00'",94.09, 90.35]);  data.addRow([ "'03 25 12:20:00'","'2014-03-25 12:20:00'",103.33, 102.65]);  data.addRow([ "'03 25 14:20:00'","'2014-03-25 14:20:00'",109.63, 110.28]);  data.addRow([ "'03 25 16:20:00'","'2014-03-25 16:20:00'",104.95, 104.79]);  data.addRow([ "'03 25 18:20:00'","'2014-03-25 18:20:00'",64.30, 65.99]);  data.addRow([ "'03 25 20:20:00'","'2014-03-25 20:20:00'",52.01, 52.14]);  data.addRow([ "'03 25 22:20:00'","'2014-03-25 22:20:00'",44.23, 46.24]);  data.addRow([ "'03 26 00:20:00'","'2014-03-26 00:20:00'",33.89, 34.36]);  data.addRow([ "'03 26 02:20:00'","'2014-03-26 02:20:00'",20.05, 20.52]);  data.addRow([ "'03 26 04:20:00'","'2014-03-26 04:20:00'",13.77, 14.21]);  data.addRow([ "'03 26 06:20:00'","'2014-03-26 06:20:00'",14.70, 13.93]);  data.addRow([ "'03 26 08:20:00'","'2014-03-26 08:20:00'",45.34, 44.26]);  data.addRow([ "'03 26 10:20:00'","'2014-03-26 10:20:00'",100.16, 98.27]);  data.addRow([ "'03 26 12:20:00'","'2014-03-26 12:20:00'",109.17, 107.56]);  data.addRow([ "'03 26 14:20:00'","'2014-03-26 14:20:00'",103.92, 103.25]);  data.addRow([ "'03 26 16:20:00'","'2014-03-26 16:20:00'",94.56, 95.55]);  data.addRow([ "'03 26 18:20:00'","'2014-03-26 18:20:00'",57.93, 59.17]);  data.addRow([ "'03 26 20:20:00'","'2014-03-26 20:20:00'",47.88, 51.58]);  data.addRow([ "'03 26 22:20:00'","'2014-03-26 22:20:00'",43.32, 45.90]);  data.addRow([ "'03 27 00:20:00'","'2014-03-27 00:20:00'",29.09, 31.93]);  data.addRow([ "'03 27 02:20:00'","'2014-03-27 02:20:00'",17.56, 17.84]);  data.addRow([ "'03 27 04:20:00'","'2014-03-27 04:20:00'",14.12, 14.42]);  data.addRow([ "'03 27 06:20:00'","'2014-03-27 06:20:00'",14.67, 13.98]);  data.addRow([ "'03 27 08:20:00'","'2014-03-27 08:20:00'",43.74, 42.14]);  data.addRow([ "'03 27 10:20:00'","'2014-03-27 10:20:00'",89.74, 86.39]);  data.addRow([ "'03 27 12:20:00'","'2014-03-27 12:20:00'",92.08, 91.55]);  data.addRow([ "'03 27 14:20:00'","'2014-03-27 14:20:00'",99.01, 98.74]);  data.addRow([ "'03 27 16:20:00'","'2014-03-27 16:20:00'",93.01, 92.24]);  data.addRow([ "'03 27 18:20:00'","'2014-03-27 18:20:00'",60.81, 62.44]);  data.addRow([ "'03 27 20:20:00'","'2014-03-27 20:20:00'",48.67, 50.46]);  data.addRow([ "'03 27 22:20:00'","'2014-03-27 22:20:00'",34.31, 36.01]);  data.addRow([ "'03 28 00:20:00'","'2014-03-28 00:20:00'",21.14, 22.47]);  data.addRow([ "'03 28 02:20:00'","'2014-03-28 02:20:00'",13.74, 14.89]);  data.addRow([ "'03 28 04:20:00'","'2014-03-28 04:20:00'",10.47, 11.54]);  data.addRow([ "'03 28 06:20:00'","'2014-03-28 06:20:00'",11.81, 11.79]);  data.addRow([ "'03 28 08:20:00'","'2014-03-28 08:20:00'",41.94, 38.91]);  data.addRow([ "'03 28 10:20:00'","'2014-03-28 10:20:00'",76.71, 73.78]);  data.addRow([ "'03 28 12:20:00'","'2014-03-28 12:20:00'",87.00, 84.79]);  data.addRow([ "'03 28 14:20:00'","'2014-03-28 14:20:00'",78.80, 78.00]);  data.addRow([ "'03 28 16:20:00'","'2014-03-28 16:20:00'",66.74, 64.91]);  data.addRow([ "'03 28 18:20:00'","'2014-03-28 18:20:00'",42.26, 41.53]);  data.addRow([ "'03 28 20:20:00'","'2014-03-28 20:20:00'",29.29, 28.95]);  data.addRow([ "'03 28 22:20:00'","'2014-03-28 22:20:00'",24.32, 22.72]);  data.addRow([ "'03 29 00:20:00'","'2014-03-29 00:20:00'",16.45, 16.77]);  data.addRow([ "'03 29 02:20:00'","'2014-03-29 02:20:00'",10.83, 12.01]);  data.addRow([ "'03 29 04:20:00'","'2014-03-29 04:20:00'",11.03, 11.07]);  data.addRow([ "'03 29 06:20:00'","'2014-03-29 06:20:00'",12.25, 12.13]);  data.addRow([ "'03 29 08:20:00'","'2014-03-29 08:20:00'",14.37, 13.16]);  data.addRow([ "'03 29 10:20:00'","'2014-03-29 10:20:00'",21.08, 19.25]);  data.addRow([ "'03 29 12:20:00'","'2014-03-29 12:20:00'",31.49, 29.29]);  data.addRow([ "'03 29 14:20:00'","'2014-03-29 14:20:00'",31.77, 30.62]);  data.addRow([ "'03 29 16:20:00'","'2014-03-29 16:20:00'",42.28, 41.06]);  data.addRow([ "'03 29 18:20:00'","'2014-03-29 18:20:00'",37.91, 37.49]);  data.addRow([ "'03 29 20:20:00'","'2014-03-29 20:20:00'",34.28, 33.55]);  data.addRow([ "'03 29 22:20:00'","'2014-03-29 22:20:00'",29.00, 28.97]);  data.addRow([ "'03 30 00:20:00'","'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 02:20:00'","'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 04:20:00'","'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 06:20:00'","'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 08:20:00'","'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 10:20:00'","'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 12:20:00'","'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 14:20:00'","'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 16:20:00'","'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 18:20:00'","'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 20:20:00'","'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 22:20:00'","'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 00:20:00'","'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 02:20:00'","'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 04:20:00'","'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 06:20:00'","'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 08:20:00'","'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 10:20:00'","'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 12:20:00'","'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 14:20:00'","'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 16:20:00'","'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 18:20:00'","'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 20:20:00'","'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 22:20:00'","'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 00:20:00'","'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 02:20:00'","'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 04:20:00'","'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 06:20:00'","'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 08:20:00'","'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 10:20:00'","'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 12:20:00'","'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 14:20:00'","'2014-04-01 14:20:00'",82.34, 78.69]);  data.addRow([ "'04 01 16:20:00'","'2014-04-01 16:20:00'",118.83, 113.52]);  data.addRow([ "'04 01 18:20:00'","'2014-04-01 18:20:00'",72.71, 70.09]);  data.addRow([ "'04 01 20:20:00'","'2014-04-01 20:20:00'",57.03, 54.49]);  data.addRow([ "'04 01 22:20:00'","'2014-04-01 22:20:00'",52.59, 49.99]);  data.addRow([ "'04 02 00:20:00'","'2014-04-02 00:20:00'",38.76, 37.20]);  data.addRow([ "'04 02 02:20:00'","'2014-04-02 02:20:00'",20.64, 21.45]);  data.addRow([ "'04 02 04:20:00'","'2014-04-02 04:20:00'",14.69, 14.91]);  data.addRow([ "'04 02 06:20:00'","'2014-04-02 06:20:00'",14.70, 14.58]);  data.addRow([ "'04 02 08:20:00'","'2014-04-02 08:20:00'",45.87, 45.18]);  data.addRow([ "'04 02 10:20:00'","'2014-04-02 10:20:00'",104.86, 101.65]);  data.addRow([ "'04 02 12:20:00'","'2014-04-02 12:20:00'",119.92, 120.22]);  data.addRow([ "'04 02 14:20:00'","'2014-04-02 14:20:00'",110.77, 112.89]);  data.addRow([ "'04 02 16:20:00'","'2014-04-02 16:20:00'",0.00, 0.00]); 

	var graphtitle='RUM Traffic Flows Max: 139.44 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='139'

	
        
      
	