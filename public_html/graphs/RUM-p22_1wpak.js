
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'26 14:50:00'", "'2014-03-26 14:50:00'",0.06, 0.11]);  data.addRow(["'26 15:20:00'", "'2014-03-26 15:20:00'",0.03, 0.07]);  data.addRow(["'26 15:50:00'", "'2014-03-26 15:50:00'",0.06, 0.07]);  data.addRow(["'26 16:20:00'", "'2014-03-26 16:20:00'",0.28, 0.61]);  data.addRow(["'26 16:50:00'", "'2014-03-26 16:50:00'",0.04, 0.28]);  data.addRow(["'26 17:20:00'", "'2014-03-26 17:20:00'",0.39, 0.42]);  data.addRow(["'26 17:50:00'", "'2014-03-26 17:50:00'",0.21, 0.42]);  data.addRow(["'26 18:20:00'", "'2014-03-26 18:20:00'",0.28, 0.53]);  data.addRow(["'26 18:50:00'", "'2014-03-26 18:50:00'",0.01, 0.02]);  data.addRow(["'26 19:20:00'", "'2014-03-26 19:20:00'",0.00, 0.02]);  data.addRow(["'26 19:50:00'", "'2014-03-26 19:50:00'",0.02, 0.24]);  data.addRow(["'26 20:20:00'", "'2014-03-26 20:20:00'",1.31, 0.40]);  data.addRow(["'26 20:50:00'", "'2014-03-26 20:50:00'",0.25, 0.86]);  data.addRow(["'26 21:20:00'", "'2014-03-26 21:20:00'",0.43, 0.12]);  data.addRow(["'26 21:50:00'", "'2014-03-26 21:50:00'",0.01, 0.02]);  data.addRow(["'26 22:20:00'", "'2014-03-26 22:20:00'",0.02, 0.14]);  data.addRow(["'26 22:50:00'", "'2014-03-26 22:50:00'",1.60, 1.67]);  data.addRow(["'26 23:20:00'", "'2014-03-26 23:20:00'",8.21, 2.30]);  data.addRow(["'26 23:50:00'", "'2014-03-26 23:50:00'",3.51, 1.32]);  data.addRow(["'27 00:20:00'", "'2014-03-27 00:20:00'",3.05, 1.04]);  data.addRow(["'27 00:50:00'", "'2014-03-27 00:50:00'",0.09, 0.14]);  data.addRow(["'27 01:20:00'", "'2014-03-27 01:20:00'",0.02, 0.05]);  data.addRow(["'27 01:50:00'", "'2014-03-27 01:50:00'",0.05, 0.32]);  data.addRow(["'27 02:20:00'", "'2014-03-27 02:20:00'",0.05, 0.36]);  data.addRow(["'27 02:50:00'", "'2014-03-27 02:50:00'",0.05, 0.14]);  data.addRow(["'27 03:20:00'", "'2014-03-27 03:20:00'",0.06, 0.37]);  data.addRow(["'27 03:50:00'", "'2014-03-27 03:50:00'",0.04, 0.10]);  data.addRow(["'27 04:20:00'", "'2014-03-27 04:20:00'",0.05, 0.70]);  data.addRow(["'27 04:50:00'", "'2014-03-27 04:50:00'",0.03, 0.03]);  data.addRow(["'27 05:20:00'", "'2014-03-27 05:20:00'",0.01, 0.02]);  data.addRow(["'27 05:50:00'", "'2014-03-27 05:50:00'",0.01, 0.02]);  data.addRow(["'27 06:20:00'", "'2014-03-27 06:20:00'",0.01, 0.02]);  data.addRow(["'27 06:50:00'", "'2014-03-27 06:50:00'",0.01, 0.02]);  data.addRow(["'27 07:20:00'", "'2014-03-27 07:20:00'",0.06, 0.25]);  data.addRow(["'27 07:50:00'", "'2014-03-27 07:50:00'",0.00, 0.02]);  data.addRow(["'27 08:20:00'", "'2014-03-27 08:20:00'",0.01, 0.23]);  data.addRow(["'27 08:50:00'", "'2014-03-27 08:50:00'",0.05, 0.28]);  data.addRow(["'27 09:20:00'", "'2014-03-27 09:20:00'",0.44, 0.53]);  data.addRow(["'27 09:50:00'", "'2014-03-27 09:50:00'",0.04, 0.32]);  data.addRow(["'27 10:20:00'", "'2014-03-27 10:20:00'",0.11, 0.75]);  data.addRow(["'27 10:50:00'", "'2014-03-27 10:50:00'",0.12, 0.16]);  data.addRow(["'27 11:20:00'", "'2014-03-27 11:20:00'",0.04, 0.29]);  data.addRow(["'27 11:50:00'", "'2014-03-27 11:50:00'",0.19, 0.45]);  data.addRow(["'27 12:20:00'", "'2014-03-27 12:20:00'",0.10, 0.16]);  data.addRow(["'27 12:50:00'", "'2014-03-27 12:50:00'",0.08, 0.54]);  data.addRow(["'27 13:20:00'", "'2014-03-27 13:20:00'",0.11, 0.80]);  data.addRow(["'27 13:50:00'", "'2014-03-27 13:50:00'",0.11, 0.32]);  data.addRow(["'27 14:20:00'", "'2014-03-27 14:20:00'",0.01, 0.23]);  data.addRow(["'27 14:50:00'", "'2014-03-27 14:50:00'",0.03, 0.08]);  data.addRow(["'27 15:20:00'", "'2014-03-27 15:20:00'",0.05, 0.29]);  data.addRow(["'27 15:50:00'", "'2014-03-27 15:50:00'",0.06, 0.27]);  data.addRow(["'27 16:20:00'", "'2014-03-27 16:20:00'",0.04, 0.04]);  data.addRow(["'27 16:50:00'", "'2014-03-27 16:50:00'",0.11, 0.38]);  data.addRow(["'27 17:20:00'", "'2014-03-27 17:20:00'",0.01, 0.02]);  data.addRow(["'27 17:50:00'", "'2014-03-27 17:50:00'",0.05, 0.06]);  data.addRow(["'27 18:20:00'", "'2014-03-27 18:20:00'",0.00, 0.02]);  data.addRow(["'27 18:50:00'", "'2014-03-27 18:50:00'",0.11, 0.40]);  data.addRow(["'27 19:20:00'", "'2014-03-27 19:20:00'",0.14, 0.28]);  data.addRow(["'27 19:50:00'", "'2014-03-27 19:50:00'",0.18, 0.25]);  data.addRow(["'27 20:20:00'", "'2014-03-27 20:20:00'",0.23, 0.24]);  data.addRow(["'27 20:50:00'", "'2014-03-27 20:50:00'",0.21, 0.42]);  data.addRow(["'27 21:20:00'", "'2014-03-27 21:20:00'",0.73, 1.16]);  data.addRow(["'27 21:50:00'", "'2014-03-27 21:50:00'",0.12, 0.11]);  data.addRow(["'27 22:20:00'", "'2014-03-27 22:20:00'",0.03, 0.02]);  data.addRow(["'27 22:50:00'", "'2014-03-27 22:50:00'",0.05, 0.52]);  data.addRow(["'27 23:20:00'", "'2014-03-27 23:20:00'",0.09, 0.06]);  data.addRow(["'27 23:50:00'", "'2014-03-27 23:50:00'",0.25, 0.63]);  data.addRow(["'28 00:20:00'", "'2014-03-28 00:20:00'",0.17, 0.56]);  data.addRow(["'28 00:50:00'", "'2014-03-28 00:50:00'",0.03, 0.20]);  data.addRow(["'28 01:20:00'", "'2014-03-28 01:20:00'",0.00, 0.01]);  data.addRow(["'28 01:50:00'", "'2014-03-28 01:50:00'",0.21, 0.40]);  data.addRow(["'28 02:20:00'", "'2014-03-28 02:20:00'",0.13, 0.15]);  data.addRow(["'28 02:50:00'", "'2014-03-28 02:50:00'",0.04, 0.49]);  data.addRow(["'28 03:20:00'", "'2014-03-28 03:20:00'",0.13, 0.10]);  data.addRow(["'28 03:50:00'", "'2014-03-28 03:50:00'",0.54, 0.45]);  data.addRow(["'28 04:20:00'", "'2014-03-28 04:20:00'",0.42, 0.45]);  data.addRow(["'28 04:50:00'", "'2014-03-28 04:50:00'",0.00, 0.23]);  data.addRow(["'28 05:20:00'", "'2014-03-28 05:20:00'",0.02, 0.02]);  data.addRow(["'28 05:50:00'", "'2014-03-28 05:50:00'",0.00, 0.01]);  data.addRow(["'28 06:20:00'", "'2014-03-28 06:20:00'",0.00, 0.01]);  data.addRow(["'28 06:50:00'", "'2014-03-28 06:50:00'",0.11, 0.54]);  data.addRow(["'28 07:20:00'", "'2014-03-28 07:20:00'",0.00, 0.01]);  data.addRow(["'28 07:50:00'", "'2014-03-28 07:50:00'",0.68, 0.60]);  data.addRow(["'28 08:20:00'", "'2014-03-28 08:20:00'",0.06, 0.27]);  data.addRow(["'28 08:50:00'", "'2014-03-28 08:50:00'",0.00, 0.04]);  data.addRow(["'28 09:20:00'", "'2014-03-28 09:20:00'",0.38, 0.36]);  data.addRow(["'28 09:50:00'", "'2014-03-28 09:50:00'",0.48, 0.31]);  data.addRow(["'28 10:20:00'", "'2014-03-28 10:20:00'",0.42, 0.64]);  data.addRow(["'28 10:50:00'", "'2014-03-28 10:50:00'",1.54, 1.37]);  data.addRow(["'28 11:20:00'", "'2014-03-28 11:20:00'",0.18, 0.23]);  data.addRow(["'28 11:50:00'", "'2014-03-28 11:50:00'",0.14, 0.55]);  data.addRow(["'28 12:20:00'", "'2014-03-28 12:20:00'",0.10, 0.33]);  data.addRow(["'28 12:50:00'", "'2014-03-28 12:50:00'",0.14, 0.25]);  data.addRow(["'28 13:20:00'", "'2014-03-28 13:20:00'",0.19, 0.43]);  data.addRow(["'28 13:50:00'", "'2014-03-28 13:50:00'",0.06, 0.54]);  data.addRow(["'28 14:20:00'", "'2014-03-28 14:20:00'",0.06, 0.12]);  data.addRow(["'28 14:50:00'", "'2014-03-28 14:50:00'",0.11, 0.21]);  data.addRow(["'28 15:20:00'", "'2014-03-28 15:20:00'",0.07, 0.15]);  data.addRow(["'28 15:50:00'", "'2014-03-28 15:50:00'",0.12, 0.39]);  data.addRow(["'28 16:20:00'", "'2014-03-28 16:20:00'",0.15, 0.16]);  data.addRow(["'28 16:50:00'", "'2014-03-28 16:50:00'",0.42, 0.23]);  data.addRow(["'28 17:20:00'", "'2014-03-28 17:20:00'",0.12, 0.11]);  data.addRow(["'28 17:50:00'", "'2014-03-28 17:50:00'",0.04, 0.06]);  data.addRow(["'28 18:20:00'", "'2014-03-28 18:20:00'",0.16, 0.19]);  data.addRow(["'28 18:50:00'", "'2014-03-28 18:50:00'",0.23, 0.44]);  data.addRow(["'28 19:20:00'", "'2014-03-28 19:20:00'",0.05, 0.31]);  data.addRow(["'28 19:50:00'", "'2014-03-28 19:50:00'",0.04, 0.28]);  data.addRow(["'28 20:20:00'", "'2014-03-28 20:20:00'",0.58, 0.29]);  data.addRow(["'28 20:50:00'", "'2014-03-28 20:50:00'",0.10, 0.10]);  data.addRow(["'28 21:20:00'", "'2014-03-28 21:20:00'",0.14, 0.13]);  data.addRow(["'28 21:50:00'", "'2014-03-28 21:50:00'",0.17, 0.13]);  data.addRow(["'28 22:20:00'", "'2014-03-28 22:20:00'",0.35, 0.63]);  data.addRow(["'28 22:50:00'", "'2014-03-28 22:50:00'",0.37, 0.49]);  data.addRow(["'28 23:20:00'", "'2014-03-28 23:20:00'",0.25, 0.38]);  data.addRow(["'28 23:50:00'", "'2014-03-28 23:50:00'",0.11, 0.17]);  data.addRow(["'29 00:20:00'", "'2014-03-29 00:20:00'",0.50, 0.50]);  data.addRow(["'29 00:50:00'", "'2014-03-29 00:50:00'",0.12, 0.29]);  data.addRow(["'29 01:20:00'", "'2014-03-29 01:20:00'",0.13, 0.18]);  data.addRow(["'29 01:50:00'", "'2014-03-29 01:50:00'",0.17, 0.62]);  data.addRow(["'29 02:20:00'", "'2014-03-29 02:20:00'",0.05, 0.24]);  data.addRow(["'29 02:50:00'", "'2014-03-29 02:50:00'",0.01, 0.02]);  data.addRow(["'29 03:20:00'", "'2014-03-29 03:20:00'",0.02, 0.47]);  data.addRow(["'29 03:50:00'", "'2014-03-29 03:50:00'",0.07, 0.47]);  data.addRow(["'29 04:20:00'", "'2014-03-29 04:20:00'",0.09, 0.08]);  data.addRow(["'29 04:50:00'", "'2014-03-29 04:50:00'",0.05, 0.05]);  data.addRow(["'29 05:20:00'", "'2014-03-29 05:20:00'",0.01, 0.02]);  data.addRow(["'29 05:50:00'", "'2014-03-29 05:50:00'",0.01, 0.24]);  data.addRow(["'29 06:20:00'", "'2014-03-29 06:20:00'",0.02, 0.72]);  data.addRow(["'29 06:50:00'", "'2014-03-29 06:50:00'",0.01, 0.07]);  data.addRow(["'29 07:20:00'", "'2014-03-29 07:20:00'",0.07, 0.10]);  data.addRow(["'29 07:50:00'", "'2014-03-29 07:50:00'",0.10, 0.13]);  data.addRow(["'29 08:20:00'", "'2014-03-29 08:20:00'",0.15, 0.45]);  data.addRow(["'29 08:50:00'", "'2014-03-29 08:50:00'",0.07, 0.08]);  data.addRow(["'29 09:20:00'", "'2014-03-29 09:20:00'",0.13, 0.16]);  data.addRow(["'29 09:50:00'", "'2014-03-29 09:50:00'",0.22, 0.22]);  data.addRow(["'29 10:20:00'", "'2014-03-29 10:20:00'",0.33, 0.59]);  data.addRow(["'29 10:50:00'", "'2014-03-29 10:50:00'",0.91, 1.10]);  data.addRow(["'29 11:20:00'", "'2014-03-29 11:20:00'",0.58, 0.76]);  data.addRow(["'29 11:50:00'", "'2014-03-29 11:50:00'",0.27, 0.54]);  data.addRow(["'29 12:20:00'", "'2014-03-29 12:20:00'",0.16, 0.34]);  data.addRow(["'29 12:50:00'", "'2014-03-29 12:50:00'",0.67, 1.18]);  data.addRow(["'29 13:20:00'", "'2014-03-29 13:20:00'",0.13, 0.29]);  data.addRow(["'29 13:50:00'", "'2014-03-29 13:50:00'",0.32, 0.35]);  data.addRow(["'29 14:20:00'", "'2014-03-29 14:20:00'",0.37, 0.35]);  data.addRow(["'29 14:50:00'", "'2014-03-29 14:50:00'",0.21, 0.23]);  data.addRow(["'29 15:20:00'", "'2014-03-29 15:20:00'",0.39, 0.44]);  data.addRow(["'29 15:50:00'", "'2014-03-29 15:50:00'",4.83, 1.74]);  data.addRow(["'29 16:20:00'", "'2014-03-29 16:20:00'",0.59, 0.54]);  data.addRow(["'29 16:50:00'", "'2014-03-29 16:50:00'",0.44, 0.60]);  data.addRow(["'29 17:20:00'", "'2014-03-29 17:20:00'",0.19, 0.14]);  data.addRow(["'29 17:50:00'", "'2014-03-29 17:50:00'",0.08, 0.26]);  data.addRow(["'29 18:20:00'", "'2014-03-29 18:20:00'",0.05, 0.06]);  data.addRow(["'29 18:50:00'", "'2014-03-29 18:50:00'",0.17, 0.20]);  data.addRow(["'29 19:20:00'", "'2014-03-29 19:20:00'",0.17, 0.18]);  data.addRow(["'29 19:50:00'", "'2014-03-29 19:50:00'",0.10, 0.30]);  data.addRow(["'29 20:20:00'", "'2014-03-29 20:20:00'",0.07, 0.28]);  data.addRow(["'29 20:50:00'", "'2014-03-29 20:50:00'",0.02, 0.25]);  data.addRow(["'29 21:20:00'", "'2014-03-29 21:20:00'",0.02, 0.67]);  data.addRow(["'29 21:50:00'", "'2014-03-29 21:50:00'",0.07, 0.07]);  data.addRow(["'29 22:20:00'", "'2014-03-29 22:20:00'",0.03, 0.02]);  data.addRow(["'29 22:50:00'", "'2014-03-29 22:50:00'",0.00, 0.00]);  data.addRow(["'29 23:20:00'", "'2014-03-29 23:20:00'",0.00, 0.00]);  data.addRow(["'29 23:50:00'", "'2014-03-29 23:50:00'",0.00, 0.00]);  data.addRow(["'30 00:20:00'", "'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow(["'30 00:50:00'", "'2014-03-30 00:50:00'",0.00, 0.00]);  data.addRow(["'30 01:20:00'", "'2014-03-30 01:20:00'",0.00, 0.00]);  data.addRow(["'30 01:50:00'", "'2014-03-30 01:50:00'",0.00, 0.00]);  data.addRow(["'30 02:20:00'", "'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow(["'30 02:50:00'", "'2014-03-30 02:50:00'",0.00, 0.00]);  data.addRow(["'30 03:20:00'", "'2014-03-30 03:20:00'",0.00, 0.00]);  data.addRow(["'30 03:50:00'", "'2014-03-30 03:50:00'",0.00, 0.00]);  data.addRow(["'30 04:20:00'", "'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow(["'30 04:50:00'", "'2014-03-30 04:50:00'",0.00, 0.00]);  data.addRow(["'30 05:20:00'", "'2014-03-30 05:20:00'",0.00, 0.00]);  data.addRow(["'30 05:50:00'", "'2014-03-30 05:50:00'",0.00, 0.00]);  data.addRow(["'30 06:20:00'", "'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow(["'30 06:50:00'", "'2014-03-30 06:50:00'",0.00, 0.00]);  data.addRow(["'30 07:20:00'", "'2014-03-30 07:20:00'",0.00, 0.00]);  data.addRow(["'30 07:50:00'", "'2014-03-30 07:50:00'",0.00, 0.00]);  data.addRow(["'30 08:20:00'", "'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow(["'30 08:50:00'", "'2014-03-30 08:50:00'",0.00, 0.00]);  data.addRow(["'30 09:20:00'", "'2014-03-30 09:20:00'",0.00, 0.00]);  data.addRow(["'30 09:50:00'", "'2014-03-30 09:50:00'",0.00, 0.00]);  data.addRow(["'30 10:20:00'", "'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow(["'30 10:50:00'", "'2014-03-30 10:50:00'",0.00, 0.00]);  data.addRow(["'30 11:20:00'", "'2014-03-30 11:20:00'",0.00, 0.00]);  data.addRow(["'30 11:50:00'", "'2014-03-30 11:50:00'",0.00, 0.00]);  data.addRow(["'30 12:20:00'", "'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow(["'30 12:50:00'", "'2014-03-30 12:50:00'",0.00, 0.00]);  data.addRow(["'30 13:20:00'", "'2014-03-30 13:20:00'",0.00, 0.00]);  data.addRow(["'30 13:50:00'", "'2014-03-30 13:50:00'",0.00, 0.00]);  data.addRow(["'30 14:20:00'", "'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow(["'30 14:50:00'", "'2014-03-30 14:50:00'",0.00, 0.00]);  data.addRow(["'30 15:20:00'", "'2014-03-30 15:20:00'",0.00, 0.00]);  data.addRow(["'30 15:50:00'", "'2014-03-30 15:50:00'",0.00, 0.00]);  data.addRow(["'30 16:20:00'", "'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow(["'30 16:50:00'", "'2014-03-30 16:50:00'",0.00, 0.00]);  data.addRow(["'30 17:20:00'", "'2014-03-30 17:20:00'",0.00, 0.00]);  data.addRow(["'30 17:50:00'", "'2014-03-30 17:50:00'",0.00, 0.00]);  data.addRow(["'30 18:20:00'", "'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow(["'30 18:50:00'", "'2014-03-30 18:50:00'",0.00, 0.00]);  data.addRow(["'30 19:20:00'", "'2014-03-30 19:20:00'",0.00, 0.00]);  data.addRow(["'30 19:50:00'", "'2014-03-30 19:50:00'",0.00, 0.00]);  data.addRow(["'30 20:20:00'", "'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow(["'30 20:50:00'", "'2014-03-30 20:50:00'",0.00, 0.00]);  data.addRow(["'30 21:20:00'", "'2014-03-30 21:20:00'",0.00, 0.00]);  data.addRow(["'30 21:50:00'", "'2014-03-30 21:50:00'",0.00, 0.00]);  data.addRow(["'30 22:20:00'", "'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow(["'30 22:50:00'", "'2014-03-30 22:50:00'",0.00, 0.00]);  data.addRow(["'30 23:20:00'", "'2014-03-30 23:20:00'",0.00, 0.00]);  data.addRow(["'30 23:50:00'", "'2014-03-30 23:50:00'",0.00, 0.00]);  data.addRow(["'31 00:20:00'", "'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow(["'31 00:50:00'", "'2014-03-31 00:50:00'",0.00, 0.00]);  data.addRow(["'31 01:20:00'", "'2014-03-31 01:20:00'",0.00, 0.00]);  data.addRow(["'31 01:50:00'", "'2014-03-31 01:50:00'",0.00, 0.00]);  data.addRow(["'31 02:20:00'", "'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow(["'31 02:50:00'", "'2014-03-31 02:50:00'",0.00, 0.00]);  data.addRow(["'31 03:20:00'", "'2014-03-31 03:20:00'",0.00, 0.00]);  data.addRow(["'31 03:50:00'", "'2014-03-31 03:50:00'",0.00, 0.00]);  data.addRow(["'31 04:20:00'", "'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow(["'31 04:50:00'", "'2014-03-31 04:50:00'",0.00, 0.00]);  data.addRow(["'31 05:20:00'", "'2014-03-31 05:20:00'",0.00, 0.00]);  data.addRow(["'31 05:50:00'", "'2014-03-31 05:50:00'",0.00, 0.00]);  data.addRow(["'31 06:20:00'", "'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow(["'31 06:50:00'", "'2014-03-31 06:50:00'",0.00, 0.00]);  data.addRow(["'31 07:20:00'", "'2014-03-31 07:20:00'",0.00, 0.00]);  data.addRow(["'31 07:50:00'", "'2014-03-31 07:50:00'",0.00, 0.00]);  data.addRow(["'31 08:20:00'", "'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow(["'31 08:50:00'", "'2014-03-31 08:50:00'",0.00, 0.00]);  data.addRow(["'31 09:20:00'", "'2014-03-31 09:20:00'",0.00, 0.00]);  data.addRow(["'31 09:50:00'", "'2014-03-31 09:50:00'",0.00, 0.00]);  data.addRow(["'31 10:20:00'", "'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow(["'31 10:50:00'", "'2014-03-31 10:50:00'",0.00, 0.00]);  data.addRow(["'31 11:20:00'", "'2014-03-31 11:20:00'",0.00, 0.00]);  data.addRow(["'31 11:50:00'", "'2014-03-31 11:50:00'",0.00, 0.00]);  data.addRow(["'31 12:20:00'", "'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow(["'31 12:50:00'", "'2014-03-31 12:50:00'",0.00, 0.00]);  data.addRow(["'31 13:20:00'", "'2014-03-31 13:20:00'",0.00, 0.00]);  data.addRow(["'31 13:50:00'", "'2014-03-31 13:50:00'",0.00, 0.00]);  data.addRow(["'31 14:20:00'", "'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow(["'31 14:50:00'", "'2014-03-31 14:50:00'",0.00, 0.00]);  data.addRow(["'31 15:20:00'", "'2014-03-31 15:20:00'",0.00, 0.00]);  data.addRow(["'31 15:50:00'", "'2014-03-31 15:50:00'",0.00, 0.00]);  data.addRow(["'31 16:20:00'", "'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow(["'31 16:50:00'", "'2014-03-31 16:50:00'",0.00, 0.00]);  data.addRow(["'31 17:20:00'", "'2014-03-31 17:20:00'",0.00, 0.00]);  data.addRow(["'31 17:50:00'", "'2014-03-31 17:50:00'",0.00, 0.00]);  data.addRow(["'31 18:20:00'", "'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow(["'31 18:50:00'", "'2014-03-31 18:50:00'",0.00, 0.00]);  data.addRow(["'31 19:20:00'", "'2014-03-31 19:20:00'",0.00, 0.00]);  data.addRow(["'31 19:50:00'", "'2014-03-31 19:50:00'",0.00, 0.00]);  data.addRow(["'31 20:20:00'", "'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow(["'31 20:50:00'", "'2014-03-31 20:50:00'",0.00, 0.00]);  data.addRow(["'31 21:20:00'", "'2014-03-31 21:20:00'",0.00, 0.00]);  data.addRow(["'31 21:50:00'", "'2014-03-31 21:50:00'",0.00, 0.00]);  data.addRow(["'31 22:20:00'", "'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow(["'31 22:50:00'", "'2014-03-31 22:50:00'",0.00, 0.00]);  data.addRow(["'31 23:20:00'", "'2014-03-31 23:20:00'",0.00, 0.00]);  data.addRow(["'31 23:50:00'", "'2014-03-31 23:50:00'",0.00, 0.00]);  data.addRow(["'01 00:20:00'", "'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow(["'01 00:50:00'", "'2014-04-01 00:50:00'",0.00, 0.00]);  data.addRow(["'01 01:20:00'", "'2014-04-01 01:20:00'",0.00, 0.00]);  data.addRow(["'01 01:50:00'", "'2014-04-01 01:50:00'",0.00, 0.00]);  data.addRow(["'01 02:20:00'", "'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow(["'01 02:50:00'", "'2014-04-01 02:50:00'",0.00, 0.00]);  data.addRow(["'01 03:20:00'", "'2014-04-01 03:20:00'",0.00, 0.00]);  data.addRow(["'01 03:50:00'", "'2014-04-01 03:50:00'",0.00, 0.00]);  data.addRow(["'01 04:20:00'", "'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow(["'01 04:50:00'", "'2014-04-01 04:50:00'",0.00, 0.00]);  data.addRow(["'01 05:20:00'", "'2014-04-01 05:20:00'",0.00, 0.00]);  data.addRow(["'01 05:50:00'", "'2014-04-01 05:50:00'",0.00, 0.00]);  data.addRow(["'01 06:20:00'", "'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow(["'01 06:50:00'", "'2014-04-01 06:50:00'",0.00, 0.00]);  data.addRow(["'01 07:20:00'", "'2014-04-01 07:20:00'",0.00, 0.00]);  data.addRow(["'01 07:50:00'", "'2014-04-01 07:50:00'",0.00, 0.00]);  data.addRow(["'01 08:20:00'", "'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow(["'01 08:50:00'", "'2014-04-01 08:50:00'",0.00, 0.00]);  data.addRow(["'01 09:20:00'", "'2014-04-01 09:20:00'",0.00, 0.00]);  data.addRow(["'01 09:50:00'", "'2014-04-01 09:50:00'",0.00, 0.00]);  data.addRow(["'01 10:20:00'", "'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow(["'01 10:50:00'", "'2014-04-01 10:50:00'",0.00, 0.00]);  data.addRow(["'01 11:20:00'", "'2014-04-01 11:20:00'",0.00, 0.00]);  data.addRow(["'01 11:50:00'", "'2014-04-01 11:50:00'",0.00, 0.00]);  data.addRow(["'01 12:20:00'", "'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow(["'01 12:50:00'", "'2014-04-01 12:50:00'",0.00, 0.00]);  data.addRow(["'01 13:20:00'", "'2014-04-01 13:20:00'",0.25, 0.63]);  data.addRow(["'01 13:50:00'", "'2014-04-01 13:50:00'",0.06, 0.08]);  data.addRow(["'01 14:20:00'", "'2014-04-01 14:20:00'",0.37, 0.60]);  data.addRow(["'01 14:50:00'", "'2014-04-01 14:50:00'",0.30, 0.58]);  data.addRow(["'01 15:20:00'", "'2014-04-01 15:20:00'",0.59, 0.93]);  data.addRow(["'01 15:50:00'", "'2014-04-01 15:50:00'",8.54, 3.13]);  data.addRow(["'01 16:20:00'", "'2014-04-01 16:20:00'",2.45, 1.44]);  data.addRow(["'01 16:50:00'", "'2014-04-01 16:50:00'",0.50, 0.76]);  data.addRow(["'01 17:20:00'", "'2014-04-01 17:20:00'",0.37, 0.59]);  data.addRow(["'01 17:50:00'", "'2014-04-01 17:50:00'",0.59, 0.90]);  data.addRow(["'01 18:20:00'", "'2014-04-01 18:20:00'",0.32, 0.66]);  data.addRow(["'01 18:50:00'", "'2014-04-01 18:50:00'",0.67, 1.28]);  data.addRow(["'01 19:20:00'", "'2014-04-01 19:20:00'",0.42, 1.14]);  data.addRow(["'01 19:50:00'", "'2014-04-01 19:50:00'",0.81, 1.03]);  data.addRow(["'01 20:20:00'", "'2014-04-01 20:20:00'",0.67, 0.94]);  data.addRow(["'01 20:50:00'", "'2014-04-01 20:50:00'",0.47, 1.30]);  data.addRow(["'01 21:20:00'", "'2014-04-01 21:20:00'",0.39, 0.87]);  data.addRow(["'01 21:50:00'", "'2014-04-01 21:50:00'",0.96, 1.13]);  data.addRow(["'01 22:20:00'", "'2014-04-01 22:20:00'",0.69, 1.14]);  data.addRow(["'01 22:50:00'", "'2014-04-01 22:50:00'",1.16, 1.11]);  data.addRow(["'01 23:20:00'", "'2014-04-01 23:20:00'",0.07, 0.79]);  data.addRow(["'01 23:50:00'", "'2014-04-01 23:50:00'",0.08, 0.10]);  data.addRow(["'02 00:20:00'", "'2014-04-02 00:20:00'",1.72, 1.95]);  data.addRow(["'02 00:50:00'", "'2014-04-02 00:50:00'",0.19, 0.43]);  data.addRow(["'02 01:20:00'", "'2014-04-02 01:20:00'",0.05, 0.75]);  data.addRow(["'02 01:50:00'", "'2014-04-02 01:50:00'",0.26, 0.22]);  data.addRow(["'02 02:20:00'", "'2014-04-02 02:20:00'",0.03, 0.05]);  data.addRow(["'02 02:50:00'", "'2014-04-02 02:50:00'",0.08, 0.55]);  data.addRow(["'02 03:20:00'", "'2014-04-02 03:20:00'",0.16, 0.36]);  data.addRow(["'02 03:50:00'", "'2014-04-02 03:50:00'",0.08, 0.47]);  data.addRow(["'02 04:20:00'", "'2014-04-02 04:20:00'",0.04, 0.27]);  data.addRow(["'02 04:50:00'", "'2014-04-02 04:50:00'",0.09, 0.54]);  data.addRow(["'02 05:20:00'", "'2014-04-02 05:20:00'",0.03, 0.05]);  data.addRow(["'02 05:50:00'", "'2014-04-02 05:50:00'",0.63, 0.49]);  data.addRow(["'02 06:20:00'", "'2014-04-02 06:20:00'",0.03, 0.05]);  data.addRow(["'02 06:50:00'", "'2014-04-02 06:50:00'",0.06, 0.09]);  data.addRow(["'02 07:20:00'", "'2014-04-02 07:20:00'",0.10, 0.15]);  data.addRow(["'02 07:50:00'", "'2014-04-02 07:50:00'",0.02, 0.49]);  data.addRow(["'02 08:20:00'", "'2014-04-02 08:20:00'",1.26, 1.29]);  data.addRow(["'02 08:50:00'", "'2014-04-02 08:50:00'",0.10, 0.19]);  data.addRow(["'02 09:20:00'", "'2014-04-02 09:20:00'",0.24, 0.25]);  data.addRow(["'02 09:50:00'", "'2014-04-02 09:50:00'",0.03, 0.35]);  data.addRow(["'02 10:20:00'", "'2014-04-02 10:20:00'",0.14, 0.56]);  data.addRow(["'02 10:50:00'", "'2014-04-02 10:50:00'",0.26, 0.59]);  data.addRow(["'02 11:20:00'", "'2014-04-02 11:20:00'",0.05, 0.06]);  data.addRow(["'02 11:50:00'", "'2014-04-02 11:50:00'",0.06, 0.05]);  data.addRow(["'02 12:20:00'", "'2014-04-02 12:20:00'",0.12, 0.13]);  data.addRow(["'02 12:50:00'", "'2014-04-02 12:50:00'",0.34, 1.01]);  data.addRow(["'02 13:20:00'", "'2014-04-02 13:20:00'",0.26, 0.49]);  data.addRow(["'02 13:50:00'", "'2014-04-02 13:50:00'",0.04, 0.26]);  data.addRow(["'02 14:20:00'", "'2014-04-02 14:20:00'",0.10, 0.33]);  data.addRow(["'02 14:50:00'", "'2014-04-02 14:50:00'",0.00, 0.00]); 

	var graphtitle='RUM-22 Traffic Packets Max: 45.26 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='45'

	
        
      
	