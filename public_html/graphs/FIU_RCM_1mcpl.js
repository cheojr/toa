
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input GB ');
        data.addColumn('number', 'Octects Output  GB');
        data.addColumn('number', 'Packets Input  MB ');
        data.addColumn('number', 'Packets Output MB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'01 17 14:05:00'", 0.01, 0.01, 0.01, 0.01, 1.21, 1.29]);  data.addRow(["'01 17 16:05:00'", 0.01, 0.01, 0.01, 0.01, 1.33, 1.45]);  data.addRow(["'01 17 18:05:00'", 0.01, 0.09, 0.05, 0.10, 0.69, 0.74]);  data.addRow(["'01 17 20:05:00'", 0.00, 0.08, 0.04, 0.08, 0.27, 0.27]);  data.addRow(["'01 17 22:05:00'", 0.00, 0.08, 0.05, 0.09, 0.20, 0.20]);  data.addRow(["'01 18 00:05:00'", 0.00, 0.07, 0.04, 0.07, 0.16, 0.15]);  data.addRow(["'01 18 02:05:00'", 0.00, 0.08, 0.05, 0.10, 0.12, 0.10]);  data.addRow(["'01 18 04:05:00'", 0.00, 0.09, 0.05, 0.10, 0.10, 0.10]);  data.addRow(["'01 18 06:05:00'", 0.00, 0.03, 0.02, 0.03, 0.11, 0.09]);  data.addRow(["'01 18 08:05:00'", 0.00, 0.06, 0.04, 0.07, 0.14, 0.13]);  data.addRow(["'01 18 10:05:00'", 0.00, 0.04, 0.03, 0.05, 0.19, 0.17]);  data.addRow(["'01 18 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.34, 0.34]);  data.addRow(["'01 18 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.35, 0.35]);  data.addRow(["'01 18 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.31]);  data.addRow(["'01 18 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.25]);  data.addRow(["'01 18 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.29]);  data.addRow(["'01 18 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.24, 0.24]);  data.addRow(["'01 19 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.20]);  data.addRow(["'01 19 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.15]);  data.addRow(["'01 19 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.13]);  data.addRow(["'01 19 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.11]);  data.addRow(["'01 19 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.11]);  data.addRow(["'01 19 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.16]);  data.addRow(["'01 19 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.28]);  data.addRow(["'01 19 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.40, 0.35]);  data.addRow(["'01 19 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.30]);  data.addRow(["'01 19 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.31]);  data.addRow(["'01 19 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.37, 0.37]);  data.addRow(["'01 19 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.40, 0.41]);  data.addRow(["'01 20 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.21]);  data.addRow(["'01 20 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.17]);  data.addRow(["'01 20 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.18, 0.10]);  data.addRow(["'01 20 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.11]);  data.addRow(["'01 20 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.18, 0.18]);  data.addRow(["'01 20 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.22, 0.22]);  data.addRow(["'01 20 12:05:00'", 0.01, 0.00, 0.01, 0.00, 0.32, 0.33]);  data.addRow(["'01 20 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.37, 0.40]);  data.addRow(["'01 20 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.35, 0.37]);  data.addRow(["'01 20 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.40, 0.43]);  data.addRow(["'01 20 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.33]);  data.addRow(["'01 20 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.31, 0.32]);  data.addRow(["'01 21 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.24]);  data.addRow(["'01 21 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.14]);  data.addRow(["'01 21 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.12]);  data.addRow(["'01 21 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.13]);  data.addRow(["'01 21 08:05:00'", 0.01, 0.00, 0.01, 0.00, 0.82, 0.90]);  data.addRow(["'01 21 10:05:00'", 0.03, 0.02, 0.03, 0.02, 1.44, 1.56]);  data.addRow(["'01 21 12:05:00'", 0.02, 0.03, 0.02, 0.03, 1.85, 1.97]);  data.addRow(["'01 21 14:05:00'", 0.02, 0.03, 0.02, 0.03, 1.79, 1.92]);  data.addRow(["'01 21 16:05:00'", 0.03, 0.02, 0.03, 0.02, 1.53, 1.81]);  data.addRow(["'01 21 18:05:00'", 0.02, 0.01, 0.01, 0.01, 0.83, 1.15]);  data.addRow(["'01 21 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.54, 0.83]);  data.addRow(["'01 21 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.36, 0.65]);  data.addRow(["'01 22 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.59]);  data.addRow(["'01 22 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.49]);  data.addRow(["'01 22 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.43]);  data.addRow(["'01 22 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.35, 0.32]);  data.addRow(["'01 22 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.99, 1.04]);  data.addRow(["'01 22 10:05:00'", 0.01, 0.02, 0.01, 0.02, 1.88, 2.25]);  data.addRow(["'01 22 12:05:00'", 0.01, 0.02, 0.01, 0.02, 2.12, 2.42]);  data.addRow(["'01 22 14:05:00'", 0.02, 0.02, 0.02, 0.02, 2.01, 2.48]);  data.addRow(["'01 22 16:05:00'", 0.01, 0.00, 0.01, 0.01, 1.77, 2.33]);  data.addRow(["'01 22 18:05:00'", 0.00, 0.01, 0.01, 0.01, 1.22, 1.76]);  data.addRow(["'01 22 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.84, 1.31]);  data.addRow(["'01 22 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.62, 1.00]);  data.addRow(["'01 23 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.59]);  data.addRow(["'01 23 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.51]);  data.addRow(["'01 23 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.54]);  data.addRow(["'01 23 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.62]);  data.addRow(["'01 23 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.69, 1.06]);  data.addRow(["'01 23 10:05:00'", 0.01, 0.01, 0.01, 0.01, 1.53, 1.98]);  data.addRow(["'01 23 12:05:00'", 0.01, 0.02, 0.02, 0.02, 1.75, 2.43]);  data.addRow(["'01 23 14:05:00'", 0.01, 0.01, 0.02, 0.02, 1.79, 2.54]);  data.addRow(["'01 23 16:05:00'", 0.01, 0.01, 0.01, 0.01, 1.71, 2.41]);  data.addRow(["'01 23 18:05:00'", 0.01, 0.01, 0.01, 0.01, 1.09, 1.77]);  data.addRow(["'01 23 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.51, 1.12]);  data.addRow(["'01 23 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.37, 0.99]);  data.addRow(["'01 24 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.31, 0.91]);  data.addRow(["'01 24 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.80]);  data.addRow(["'01 24 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.18, 0.78]);  data.addRow(["'01 24 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.79]);  data.addRow(["'01 24 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.64, 1.29]);  data.addRow(["'01 24 10:05:00'", 0.01, 0.05, 0.02, 0.04, 1.50, 2.19]);  data.addRow(["'01 24 12:05:00'", 0.02, 0.05, 0.02, 0.04, 1.94, 2.65]);  data.addRow(["'01 24 14:05:00'", 0.01, 0.01, 0.01, 0.01, 1.53, 1.97]);  data.addRow(["'01 24 16:05:00'", 0.01, 0.02, 0.01, 0.02, 1.51, 1.90]);  data.addRow(["'01 24 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.69, 1.05]);  data.addRow(["'01 24 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.58]);  data.addRow(["'01 24 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.54]);  data.addRow(["'01 25 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.56]);  data.addRow(["'01 25 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.49]);  data.addRow(["'01 25 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.45]);  data.addRow(["'01 25 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.43]);  data.addRow(["'01 25 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.46]);  data.addRow(["'01 25 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.50]);  data.addRow(["'01 25 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.31, 0.61]);  data.addRow(["'01 25 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.30, 0.59]);  data.addRow(["'01 25 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.63]);  data.addRow(["'01 25 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.63]);  data.addRow(["'01 25 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.56]);  data.addRow(["'01 25 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.54]);  data.addRow(["'01 26 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.51]);  data.addRow(["'01 26 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.18, 0.48]);  data.addRow(["'01 26 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.45]);  data.addRow(["'01 26 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.43]);  data.addRow(["'01 26 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.42]);  data.addRow(["'01 26 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.45]);  data.addRow(["'01 26 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.59]);  data.addRow(["'01 26 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.62]);  data.addRow(["'01 26 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.36, 0.66]);  data.addRow(["'01 26 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.33, 0.63]);  data.addRow(["'01 26 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.31, 0.61]);  data.addRow(["'01 26 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.30, 0.62]);  data.addRow(["'01 27 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.56]);  data.addRow(["'01 27 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.46]);  data.addRow(["'01 27 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.44]);  data.addRow(["'01 27 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.45]);  data.addRow(["'01 27 08:05:00'", 0.01, 0.00, 0.01, 0.00, 0.68, 1.02]);  data.addRow(["'01 27 10:05:00'", 0.02, 0.02, 0.02, 0.02, 1.70, 2.13]);  data.addRow(["'01 27 12:05:00'", 0.02, 0.03, 0.03, 0.03, 2.21, 2.70]);  data.addRow(["'01 27 14:05:00'", 0.03, 0.02, 0.03, 0.02, 1.87, 2.28]);  data.addRow(["'01 27 16:05:00'", 0.02, 0.01, 0.02, 0.01, 1.55, 2.03]);  data.addRow(["'01 27 18:05:00'", 0.01, 0.01, 0.01, 0.01, 0.91, 1.24]);  data.addRow(["'01 27 20:05:00'", 0.01, 0.01, 0.01, 0.02, 0.70, 1.01]);  data.addRow(["'01 27 22:05:00'", 0.00, 0.01, 0.00, 0.01, 0.42, 0.74]);  data.addRow(["'01 28 00:05:00'", 0.00, 0.01, 0.00, 0.01, 0.33, 0.65]);  data.addRow(["'01 28 02:05:00'", 0.00, 0.01, 0.00, 0.01, 0.25, 0.55]);  data.addRow(["'01 28 04:05:00'", 0.00, 0.01, 0.00, 0.01, 0.19, 0.49]);  data.addRow(["'01 28 06:05:00'", 0.01, 0.00, 0.01, 0.00, 0.21, 0.51]);  data.addRow(["'01 28 08:05:00'", 0.01, 0.00, 0.01, 0.00, 0.74, 1.19]);  data.addRow(["'01 28 10:05:00'", 0.03, 0.05, 0.03, 0.04, 1.59, 2.11]);  data.addRow(["'01 28 12:05:00'", 0.03, 0.02, 0.03, 0.02, 1.79, 2.41]);  data.addRow(["'01 28 14:05:00'", 0.05, 0.02, 0.04, 0.03, 1.68, 2.12]);  data.addRow(["'01 28 16:05:00'", 0.06, 0.03, 0.05, 0.04, 1.55, 1.94]);  data.addRow(["'01 28 18:05:00'", 0.01, 0.01, 0.01, 0.01, 0.78, 0.86]);  data.addRow(["'01 28 20:05:00'", 0.01, 0.03, 0.01, 0.02, 0.61, 0.60]);  data.addRow(["'01 28 22:05:00'", 0.00, 0.02, 0.00, 0.02, 0.41, 0.43]);  data.addRow(["'01 29 00:05:00'", 0.00, 0.01, 0.00, 0.02, 0.25, 0.26]);  data.addRow(["'01 29 02:05:00'", 0.00, 0.01, 0.00, 0.01, 0.17, 0.16]);  data.addRow(["'01 29 04:05:00'", 0.00, 0.01, 0.00, 0.01, 0.16, 0.17]);  data.addRow(["'01 29 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.19]);  data.addRow(["'01 29 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.63, 0.89]);  data.addRow(["'01 29 10:05:00'", 0.02, 0.04, 0.02, 0.04, 1.78, 2.29]);  data.addRow(["'01 29 12:05:00'", 0.01, 0.03, 0.02, 0.03, 1.94, 2.55]);  data.addRow(["'01 29 14:05:00'", 0.04, 0.01, 0.04, 0.03, 1.96, 2.55]);  data.addRow(["'01 29 16:05:00'", 0.02, 0.02, 0.03, 0.03, 1.74, 2.01]);  data.addRow(["'01 29 18:05:00'", 0.00, 0.01, 0.01, 0.01, 0.70, 0.73]);  data.addRow(["'01 29 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.50, 0.53]);  data.addRow(["'01 29 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.34, 0.36]);  data.addRow(["'01 30 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.25, 0.26]);  data.addRow(["'01 30 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.13]);  data.addRow(["'01 30 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.11, 0.11]);  data.addRow(["'01 30 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.25]);  data.addRow(["'01 30 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.72, 1.07]);  data.addRow(["'01 30 10:05:00'", 0.02, 0.00, 0.02, 0.01, 1.59, 2.06]);  data.addRow(["'01 30 12:05:00'", 0.04, 0.00, 0.03, 0.02, 1.80, 2.93]);  data.addRow(["'01 30 14:05:00'", 0.03, 0.01, 0.02, 0.02, 1.62, 2.71]);  data.addRow(["'01 30 16:05:00'", 0.03, 0.02, 0.03, 0.03, 1.53, 2.54]);  data.addRow(["'01 30 18:05:00'", 0.01, 0.00, 0.01, 0.00, 0.82, 1.79]);  data.addRow(["'01 30 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.47, 1.26]);  data.addRow(["'01 30 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.38, 0.41]);  data.addRow(["'01 31 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.30]);  data.addRow(["'01 31 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.17]);  data.addRow(["'01 31 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.22, 0.25]);  data.addRow(["'01 31 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.21]);  data.addRow(["'01 31 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.54, 0.59]);  data.addRow(["'01 31 10:05:00'", 0.02, 0.02, 0.02, 0.02, 1.50, 1.65]);  data.addRow(["'01 31 12:05:00'", 0.02, 0.02, 0.02, 0.02, 1.65, 1.98]);  data.addRow(["'01 31 14:05:00'", 0.02, 0.02, 0.02, 0.02, 1.60, 1.89]);  data.addRow(["'01 31 16:05:00'", 0.01, 0.01, 0.01, 0.01, 1.43, 1.63]);  data.addRow(["'01 31 18:05:00'", 0.00, 0.00, 0.00, 0.00, 1.40, 1.95]);  data.addRow(["'01 31 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.54, 0.70]);  data.addRow(["'01 31 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.28]);  data.addRow(["'02 01 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.19, 0.19]);  data.addRow(["'02 01 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.13]);  data.addRow(["'02 01 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.11]);  data.addRow(["'02 01 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.10, 0.08]);  data.addRow(["'02 01 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.10]);  data.addRow(["'02 01 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.22, 0.21]);  data.addRow(["'02 01 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.28]);  data.addRow(["'02 01 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.31, 0.30]);  data.addRow(["'02 01 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.33, 0.32]);  data.addRow(["'02 01 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.36, 0.29]);  data.addRow(["'02 01 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.24, 0.25]);  data.addRow(["'02 01 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.24, 0.25]);  data.addRow(["'02 02 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.21]);  data.addRow(["'02 02 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.15]);  data.addRow(["'02 02 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.12]);  data.addRow(["'02 02 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.11]);  data.addRow(["'02 02 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.10]);  data.addRow(["'02 02 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.13]);  data.addRow(["'02 02 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.27, 0.27]);  data.addRow(["'02 02 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.31]);  data.addRow(["'02 02 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.33, 0.36]);  data.addRow(["'02 02 18:05:00'", 0.00, 0.00, 0.00, 0.00, 0.34, 0.36]);  data.addRow(["'02 02 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.26, 0.28]);  data.addRow(["'02 02 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.25]);  data.addRow(["'02 03 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.22, 0.23]);  data.addRow(["'02 03 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.14]);  data.addRow(["'02 03 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.12, 0.11]);  data.addRow(["'02 03 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.14]);  data.addRow(["'02 03 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.63, 0.68]);  data.addRow(["'02 03 10:05:00'", 0.03, 0.00, 0.02, 0.01, 1.65, 1.79]);  data.addRow(["'02 03 12:05:00'", 0.02, 0.02, 0.03, 0.03, 1.95, 2.09]);  data.addRow(["'02 03 14:05:00'", 0.07, 0.02, 0.06, 0.03, 1.90, 2.07]);  data.addRow(["'02 03 16:05:00'", 0.02, 0.03, 0.02, 0.03, 1.78, 1.93]);  data.addRow(["'02 03 18:05:00'", 0.01, 0.02, 0.01, 0.02, 0.78, 0.81]);  data.addRow(["'02 03 20:05:00'", 0.01, 0.00, 0.01, 0.00, 0.38, 0.40]);  data.addRow(["'02 03 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.30]);  data.addRow(["'02 04 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.22, 0.22]);  data.addRow(["'02 04 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.11]);  data.addRow(["'02 04 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.11, 0.10]);  data.addRow(["'02 04 06:05:00'", 0.00, 0.00, 0.00, 0.00, 1.04, 1.45]);  data.addRow(["'02 04 08:05:00'", 0.02, 0.00, 0.02, 0.00, 0.91, 1.08]);  data.addRow(["'02 04 10:05:00'", 0.01, 0.03, 0.02, 0.03, 1.75, 1.98]);  data.addRow(["'02 04 12:05:00'", 0.01, 0.03, 0.02, 0.03, 1.77, 1.92]);  data.addRow(["'02 04 14:05:00'", 0.02, 0.02, 0.02, 0.03, 1.59, 1.83]);  data.addRow(["'02 04 16:05:00'", 0.01, 0.00, 0.01, 0.01, 1.62, 1.89]);  data.addRow(["'02 04 18:05:00'", 0.01, 0.00, 0.01, 0.01, 0.77, 0.84]);  data.addRow(["'02 04 20:05:00'", 0.01, 0.00, 0.01, 0.00, 0.42, 0.45]);  data.addRow(["'02 04 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.32, 0.34]);  data.addRow(["'02 05 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.23, 0.24]);  data.addRow(["'02 05 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.16]);  data.addRow(["'02 05 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.15]);  data.addRow(["'02 05 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.19, 0.23]);  data.addRow(["'02 05 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.65, 0.72]);  data.addRow(["'02 05 10:05:00'", 0.04, 0.00, 0.03, 0.01, 1.79, 1.94]);  data.addRow(["'02 05 12:05:00'", 0.04, 0.01, 0.03, 0.02, 1.83, 1.99]);  data.addRow(["'02 05 14:05:00'", 0.04, 0.02, 0.04, 0.03, 2.01, 2.19]);  data.addRow(["'02 05 16:05:00'", 0.02, 0.02, 0.02, 0.03, 1.76, 1.91]);  data.addRow(["'02 05 18:05:00'", 0.01, 0.01, 0.01, 0.01, 0.87, 0.91]);  data.addRow(["'02 05 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.55, 0.56]);  data.addRow(["'02 05 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.44, 0.45]);  data.addRow(["'02 06 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.27]);  data.addRow(["'02 06 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.15]);  data.addRow(["'02 06 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.12]);  data.addRow(["'02 06 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.15]);  data.addRow(["'02 06 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.75, 0.80]);  data.addRow(["'02 06 10:05:00'", 0.02, 0.01, 0.02, 0.02, 1.90, 2.08]);  data.addRow(["'02 06 12:05:00'", 0.03, 0.02, 0.03, 0.03, 2.69, 2.97]);  data.addRow(["'02 06 14:05:00'", 0.03, 0.02, 0.03, 0.03, 2.64, 2.98]);  data.addRow(["'02 06 16:05:00'", 0.02, 0.01, 0.02, 0.01, 2.38, 2.73]);  data.addRow(["'02 06 18:05:00'", 0.02, 0.00, 0.01, 0.01, 0.79, 0.85]);  data.addRow(["'02 06 20:05:00'", 0.01, 0.00, 0.01, 0.00, 0.55, 0.58]);  data.addRow(["'02 06 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.39, 0.41]);  data.addRow(["'02 07 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.29, 0.31]);  data.addRow(["'02 07 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.20]);  data.addRow(["'02 07 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.15]);  data.addRow(["'02 07 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.15]);  data.addRow(["'02 07 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.64, 0.69]);  data.addRow(["'02 07 10:05:00'", 0.03, 0.01, 0.02, 0.01, 1.59, 1.73]);  data.addRow(["'02 07 12:05:00'", 0.03, 0.00, 0.03, 0.02, 1.86, 2.05]);  data.addRow(["'02 07 14:05:00'", 0.02, 0.01, 0.02, 0.02, 1.83, 2.16]);  data.addRow(["'02 07 16:05:00'", 0.02, 0.08, 0.05, 0.08, 1.77, 2.04]);  data.addRow(["'02 07 18:05:00'", 0.01, 0.00, 0.00, 0.00, 0.75, 0.79]);  data.addRow(["'02 07 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.51, 0.54]);  data.addRow(["'02 07 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.33, 0.34]);  data.addRow(["'02 08 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.27, 0.27]);  data.addRow(["'02 08 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.19, 0.17]);  data.addRow(["'02 08 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.15]);  data.addRow(["'02 08 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.19, 0.14]);  data.addRow(["'02 08 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.13]);  data.addRow(["'02 08 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.24, 0.23]);  data.addRow(["'02 08 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.30, 0.29]);  data.addRow(["'02 08 14:05:00'", 0.00, 0.00, 0.00, 0.00, 0.34, 0.34]);  data.addRow(["'02 08 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.41, 0.42]);  data.addRow(["'02 08 18:05:00'", 0.00, 0.01, 0.01, 0.01, 0.46, 0.48]);  data.addRow(["'02 08 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.39, 0.40]);  data.addRow(["'02 08 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.37, 0.36]);  data.addRow(["'02 09 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.29]);  data.addRow(["'02 09 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.19]);  data.addRow(["'02 09 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.13]);  data.addRow(["'02 09 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.12]);  data.addRow(["'02 09 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.15, 0.13]);  data.addRow(["'02 09 10:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.19]);  data.addRow(["'02 09 12:05:00'", 0.00, 0.00, 0.00, 0.00, 0.34, 0.34]);  data.addRow(["'02 09 14:05:00'", 0.01, 0.00, 0.01, 0.00, 0.42, 0.45]);  data.addRow(["'02 09 16:05:00'", 0.00, 0.00, 0.00, 0.00, 0.42, 0.41]);  data.addRow(["'02 09 18:05:00'", 0.01, 0.00, 0.01, 0.00, 0.38, 0.42]);  data.addRow(["'02 09 20:05:00'", 0.01, 0.00, 0.00, 0.00, 0.36, 0.39]);  data.addRow(["'02 09 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.39, 0.43]);  data.addRow(["'02 10 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.26, 0.27]);  data.addRow(["'02 10 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.19]);  data.addRow(["'02 10 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.17]);  data.addRow(["'02 10 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.13]);  data.addRow(["'02 10 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.51, 0.55]);  data.addRow(["'02 10 10:05:00'", 0.03, 0.01, 0.02, 0.01, 1.48, 1.63]);  data.addRow(["'02 10 12:05:00'", 0.03, 0.02, 0.03, 0.02, 1.72, 1.86]);  data.addRow(["'02 10 14:05:00'", 0.05, 0.01, 0.04, 0.02, 2.01, 2.17]);  data.addRow(["'02 10 16:05:00'", 0.02, 0.03, 0.03, 0.03, 1.69, 1.83]);  data.addRow(["'02 10 18:05:00'", 0.01, 0.00, 0.01, 0.01, 0.85, 0.89]);  data.addRow(["'02 10 20:05:00'", 0.01, 0.00, 0.01, 0.01, 0.53, 0.56]);  data.addRow(["'02 10 22:05:00'", 0.01, 0.00, 0.00, 0.00, 0.33, 0.34]);  data.addRow(["'02 11 00:05:00'", 0.01, 0.00, 0.01, 0.00, 0.31, 0.32]);  data.addRow(["'02 11 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.21]);  data.addRow(["'02 11 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.17]);  data.addRow(["'02 11 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.16, 0.14]);  data.addRow(["'02 11 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.55, 0.59]);  data.addRow(["'02 11 10:05:00'", 0.03, 0.02, 0.03, 0.02, 1.90, 2.05]);  data.addRow(["'02 11 12:05:00'", 0.03, 0.04, 0.03, 0.04, 2.33, 2.51]);  data.addRow(["'02 11 14:05:00'", 0.01, 0.01, 0.01, 0.02, 2.24, 2.45]);  data.addRow(["'02 11 16:05:00'", 0.01, 0.03, 0.02, 0.03, 2.34, 2.65]);  data.addRow(["'02 11 18:05:00'", 0.01, 0.00, 0.01, 0.01, 1.39, 1.48]);  data.addRow(["'02 11 20:05:00'", 0.00, 0.00, 0.01, 0.00, 1.36, 1.44]);  data.addRow(["'02 11 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.53, 0.55]);  data.addRow(["'02 12 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.28, 0.26]);  data.addRow(["'02 12 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.19]);  data.addRow(["'02 12 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.21, 0.20]);  data.addRow(["'02 12 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.24, 0.23]);  data.addRow(["'02 12 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.80, 0.87]);  data.addRow(["'02 12 10:05:00'", 0.03, 0.05, 0.03, 0.05, 1.77, 1.91]);  data.addRow(["'02 12 12:05:00'", 0.02, 0.03, 0.02, 0.03, 2.01, 3.15]);  data.addRow(["'02 12 14:05:00'", 0.01, 0.01, 0.01, 0.01, 2.33, 4.19]);  data.addRow(["'02 12 16:05:00'", 0.03, 0.01, 0.02, 0.02, 2.10, 3.75]);  data.addRow(["'02 12 18:05:00'", 0.03, 0.01, 0.02, 0.01, 1.12, 2.58]);  data.addRow(["'02 12 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.83, 1.95]);  data.addRow(["'02 12 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.50, 0.64]);  data.addRow(["'02 13 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.30, 0.29]);  data.addRow(["'02 13 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.15]);  data.addRow(["'02 13 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.19, 0.17]);  data.addRow(["'02 13 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.17, 0.15]);  data.addRow(["'02 13 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.46, 0.49]);  data.addRow(["'02 13 10:05:00'", 0.01, 0.02, 0.02, 0.02, 1.50, 1.63]);  data.addRow(["'02 13 12:05:00'", 0.01, 0.03, 0.02, 0.03, 1.60, 1.74]);  data.addRow(["'02 13 14:05:00'", 0.01, 0.03, 0.02, 0.03, 1.65, 1.78]);  data.addRow(["'02 13 16:05:00'", 0.01, 0.03, 0.02, 0.03, 1.62, 1.63]);  data.addRow(["'02 13 18:05:00'", 0.00, 0.01, 0.01, 0.01, 0.79, 0.83]);  data.addRow(["'02 13 20:05:00'", 0.00, 0.00, 0.00, 0.00, 0.13, 0.12]);  data.addRow(["'02 13 22:05:00'", 0.00, 0.00, 0.00, 0.00, 0.20, 0.19]);  data.addRow(["'02 14 00:05:00'", 0.00, 0.00, 0.00, 0.00, 0.18, 0.16]);  data.addRow(["'02 14 02:05:00'", 0.00, 0.00, 0.00, 0.00, 0.14, 0.11]);  data.addRow(["'02 14 04:05:00'", 0.00, 0.00, 0.00, 0.00, 0.09, 0.06]);  data.addRow(["'02 14 06:05:00'", 0.00, 0.00, 0.00, 0.00, 0.11, 0.09]);  data.addRow(["'02 14 08:05:00'", 0.00, 0.00, 0.00, 0.00, 0.36, 0.37]);  data.addRow(["'02 14 10:05:00'", 0.01, 0.01, 0.01, 0.01, 1.42, 1.54]);  data.addRow(["'02 14 12:05:00'", 0.03, 0.01, 0.02, 0.01, 1.41, 1.52]); 
	    var graphtitle="RCM Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    