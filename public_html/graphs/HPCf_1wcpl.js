
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input GB ');
        data.addColumn('number', 'Octects Output  GB');
        data.addColumn('number', 'Packets Input  MB ');
        data.addColumn('number', 'Packets Output MB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'03'", "'2014-03-26 14:55:00'",0.01, 0.02, 0.01, 0.02, 0.93, 0.89]);  data.addRow(["'03'", "'2014-03-26 15:25:00'",0.01, 0.01, 0.01, 0.01, 1.62, 1.55]);  data.addRow(["'03'", "'2014-03-26 15:55:00'",0.01, 0.01, 0.02, 0.01, 1.51, 1.46]);  data.addRow(["'03'", "'2014-03-26 16:25:00'",0.02, 0.02, 0.03, 0.02, 1.55, 1.55]);  data.addRow(["'03'", "'2014-03-26 16:55:00'",0.02, 0.02, 0.02, 0.02, 1.49, 1.43]);  data.addRow(["'03'", "'2014-03-26 17:25:00'",0.04, 0.02, 0.03, 0.02, 1.41, 1.34]);  data.addRow(["'03'", "'2014-03-26 17:55:00'",0.03, 0.02, 0.03, 0.03, 1.51, 1.45]);  data.addRow(["'03'", "'2014-03-26 18:25:00'",0.05, 0.02, 0.04, 0.03, 1.42, 1.35]);  data.addRow(["'03'", "'2014-03-26 18:55:00'",0.04, 0.02, 0.03, 0.02, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-26 19:25:00'",0.04, 0.03, 0.04, 0.03, 1.44, 1.37]);  data.addRow(["'03'", "'2014-03-26 19:55:00'",0.04, 0.03, 0.04, 0.03, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-26 20:25:00'",0.06, 0.03, 0.05, 0.03, 1.50, 1.44]);  data.addRow(["'03'", "'2014-03-26 20:55:00'",0.04, 0.02, 0.04, 0.02, 1.42, 1.35]);  data.addRow(["'03'", "'2014-03-26 21:25:00'",0.09, 0.03, 0.07, 0.04, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-26 21:55:00'",0.02, 0.01, 0.02, 0.02, 1.43, 1.34]);  data.addRow(["'03'", "'2014-03-26 22:25:00'",0.07, 0.03, 0.06, 0.03, 1.39, 1.31]);  data.addRow(["'03'", "'2014-03-26 22:55:00'",0.05, 0.02, 0.04, 0.03, 1.41, 1.33]);  data.addRow(["'03'", "'2014-03-26 23:25:00'",0.08, 0.03, 0.06, 0.04, 1.41, 1.32]);  data.addRow(["'03'", "'2014-03-26 23:55:00'",0.06, 0.02, 0.05, 0.03, 1.41, 1.31]);  data.addRow(["'03'", "'2014-03-27 00:25:00'",0.11, 0.03, 0.09, 0.04, 1.40, 1.34]);  data.addRow(["'03'", "'2014-03-27 00:55:00'",0.03, 0.01, 0.03, 0.02, 1.41, 1.33]);  data.addRow(["'03'", "'2014-03-27 01:25:00'",0.04, 0.03, 0.04, 0.02, 1.44, 1.35]);  data.addRow(["'03'", "'2014-03-27 01:55:00'",0.09, 0.01, 0.06, 0.03, 1.41, 1.33]);  data.addRow(["'03'", "'2014-03-27 02:25:00'",0.08, 0.03, 0.07, 0.04, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-27 02:55:00'",0.11, 0.03, 0.09, 0.04, 1.39, 1.31]);  data.addRow(["'03'", "'2014-03-27 03:25:00'",0.03, 0.02, 0.03, 0.03, 1.43, 1.33]);  data.addRow(["'03'", "'2014-03-27 03:55:00'",0.13, 0.03, 0.10, 0.05, 1.40, 1.33]);  data.addRow(["'03'", "'2014-03-27 04:25:00'",0.05, 0.02, 0.04, 0.03, 1.43, 1.36]);  data.addRow(["'03'", "'2014-03-27 04:55:00'",0.10, 0.03, 0.08, 0.04, 1.42, 1.35]);  data.addRow(["'03'", "'2014-03-27 05:25:00'",0.00, 0.01, 0.01, 0.01, 1.43, 1.35]);  data.addRow(["'03'", "'2014-03-27 05:55:00'",0.09, 0.03, 0.07, 0.04, 1.40, 1.32]);  data.addRow(["'03'", "'2014-03-27 06:25:00'",0.09, 0.02, 0.07, 0.03, 1.49, 1.40]);  data.addRow(["'03'", "'2014-03-27 06:55:00'",0.03, 0.02, 0.03, 0.02, 1.44, 1.35]);  data.addRow(["'03'", "'2014-03-27 07:25:00'",0.08, 0.03, 0.07, 0.04, 1.58, 1.51]);  data.addRow(["'03'", "'2014-03-27 07:55:00'",0.04, 0.02, 0.03, 0.02, 1.46, 1.40]);  data.addRow(["'03'", "'2014-03-27 08:25:00'",0.02, 0.01, 0.02, 0.01, 1.45, 1.38]);  data.addRow(["'03'", "'2014-03-27 08:55:00'",0.01, 0.01, 0.01, 0.01, 1.43, 1.39]);  data.addRow(["'03'", "'2014-03-27 09:25:00'",0.03, 0.02, 0.03, 0.02, 1.45, 1.39]);  data.addRow(["'03'", "'2014-03-27 09:55:00'",0.05, 0.01, 0.04, 0.02, 1.55, 1.48]);  data.addRow(["'03'", "'2014-03-27 10:25:00'",0.07, 0.03, 0.06, 0.05, 1.56, 1.50]);  data.addRow(["'03'", "'2014-03-27 10:55:00'",0.02, 0.01, 0.02, 0.01, 1.56, 1.51]);  data.addRow(["'03'", "'2014-03-27 11:25:00'",0.01, 0.01, 0.01, 0.01, 1.59, 1.53]);  data.addRow(["'03'", "'2014-03-27 11:55:00'",0.01, 0.01, 0.01, 0.01, 1.56, 1.49]);  data.addRow(["'03'", "'2014-03-27 12:25:00'",0.05, 0.02, 0.05, 0.03, 1.53, 1.46]);  data.addRow(["'03'", "'2014-03-27 12:55:00'",0.01, 0.01, 0.01, 0.01, 1.61, 1.58]);  data.addRow(["'03'", "'2014-03-27 13:25:00'",0.02, 0.02, 0.02, 0.02, 1.67, 1.65]);  data.addRow(["'03'", "'2014-03-27 13:55:00'",0.01, 0.01, 0.01, 0.01, 1.75, 1.72]);  data.addRow(["'03'", "'2014-03-27 14:25:00'",0.03, 0.02, 0.03, 0.03, 2.01, 1.94]);  data.addRow(["'03'", "'2014-03-27 14:55:00'",0.01, 0.01, 0.02, 0.02, 1.89, 1.84]);  data.addRow(["'03'", "'2014-03-27 15:25:00'",0.02, 0.01, 0.02, 0.02, 1.75, 1.70]);  data.addRow(["'03'", "'2014-03-27 15:55:00'",0.04, 0.02, 0.04, 0.03, 1.72, 1.68]);  data.addRow(["'03'", "'2014-03-27 16:25:00'",0.05, 0.02, 0.05, 0.03, 1.63, 1.59]);  data.addRow(["'03'", "'2014-03-27 16:55:00'",0.04, 0.01, 0.03, 0.02, 1.56, 1.52]);  data.addRow(["'03'", "'2014-03-27 17:25:00'",0.04, 0.02, 0.03, 0.03, 1.55, 1.50]);  data.addRow(["'03'", "'2014-03-27 17:55:00'",0.06, 0.02, 0.05, 0.04, 1.54, 1.52]);  data.addRow(["'03'", "'2014-03-27 18:25:00'",0.06, 0.03, 0.05, 0.04, 1.58, 1.51]);  data.addRow(["'03'", "'2014-03-27 18:55:00'",0.05, 0.03, 0.04, 0.03, 1.47, 1.40]);  data.addRow(["'03'", "'2014-03-27 19:25:00'",0.05, 0.01, 0.04, 0.02, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-27 19:55:00'",0.04, 0.03, 0.04, 0.03, 1.43, 1.34]);  data.addRow(["'03'", "'2014-03-27 20:25:00'",0.09, 0.03, 0.07, 0.04, 1.49, 1.40]);  data.addRow(["'03'", "'2014-03-27 20:55:00'",0.04, 0.04, 0.04, 0.04, 1.43, 1.34]);  data.addRow(["'03'", "'2014-03-27 21:25:00'",0.10, 0.01, 0.07, 0.03, 1.42, 1.33]);  data.addRow(["'03'", "'2014-03-27 21:55:00'",0.02, 0.03, 0.03, 0.03, 1.40, 1.31]);  data.addRow(["'03'", "'2014-03-27 22:25:00'",0.10, 0.02, 0.08, 0.04, 1.42, 1.33]);  data.addRow(["'03'", "'2014-03-27 22:55:00'",0.03, 0.02, 0.03, 0.02, 1.44, 1.34]);  data.addRow(["'03'", "'2014-03-27 23:25:00'",0.11, 0.02, 0.08, 0.04, 1.46, 1.36]);  data.addRow(["'03'", "'2014-03-27 23:55:00'",0.03, 0.03, 0.03, 0.03, 1.47, 1.38]);  data.addRow(["'03'", "'2014-03-28 00:25:00'",0.09, 0.02, 0.07, 0.03, 1.40, 1.31]);  data.addRow(["'03'", "'2014-03-28 00:55:00'",0.06, 0.03, 0.05, 0.03, 1.43, 1.33]);  data.addRow(["'03'", "'2014-03-28 01:25:00'",0.11, 0.02, 0.08, 0.03, 1.45, 1.35]);  data.addRow(["'03'", "'2014-03-28 01:55:00'",0.03, 0.02, 0.03, 0.02, 1.42, 1.32]);  data.addRow(["'03'", "'2014-03-28 02:25:00'",0.09, 0.03, 0.07, 0.04, 1.40, 1.32]);  data.addRow(["'03'", "'2014-03-28 02:55:00'",0.09, 0.02, 0.07, 0.03, 1.41, 1.34]);  data.addRow(["'03'", "'2014-03-28 03:25:00'",0.06, 0.03, 0.06, 0.03, 1.43, 1.35]);  data.addRow(["'03'", "'2014-03-28 03:55:00'",0.05, 0.01, 0.04, 0.02, 1.41, 1.32]);  data.addRow(["'03'", "'2014-03-28 04:25:00'",0.10, 0.04, 0.09, 0.05, 1.42, 1.32]);  data.addRow(["'03'", "'2014-03-28 04:55:00'",0.03, 0.01, 0.02, 0.01, 1.48, 1.38]);  data.addRow(["'03'", "'2014-03-28 05:25:00'",0.13, 0.04, 0.10, 0.05, 1.45, 1.35]);  data.addRow(["'03'", "'2014-03-28 05:55:00'",0.06, 0.01, 0.05, 0.02, 1.45, 1.35]);  data.addRow(["'03'", "'2014-03-28 06:25:00'",0.07, 0.03, 0.06, 0.04, 1.46, 1.35]);  data.addRow(["'03'", "'2014-03-28 06:55:00'",0.08, 0.03, 0.06, 0.04, 1.45, 1.35]);  data.addRow(["'03'", "'2014-03-28 07:25:00'",0.08, 0.03, 0.07, 0.04, 1.43, 1.33]);  data.addRow(["'03'", "'2014-03-28 07:55:00'",0.03, 0.01, 0.03, 0.02, 1.43, 1.34]);  data.addRow(["'03'", "'2014-03-28 08:25:00'",0.05, 0.03, 0.05, 0.03, 1.42, 1.35]);  data.addRow(["'03'", "'2014-03-28 08:55:00'",0.00, 0.01, 0.01, 0.01, 1.73, 1.62]);  data.addRow(["'03'", "'2014-03-28 09:25:00'",0.03, 0.01, 0.03, 0.02, 2.05, 1.90]);  data.addRow(["'03'", "'2014-03-28 09:55:00'",0.02, 0.01, 0.02, 0.01, 1.89, 1.80]);  data.addRow(["'03'", "'2014-03-28 10:25:00'",0.02, 0.02, 0.03, 0.02, 1.91, 1.81]);  data.addRow(["'03'", "'2014-03-28 10:55:00'",0.01, 0.00, 0.01, 0.01, 1.99, 1.90]);  data.addRow(["'03'", "'2014-03-28 11:25:00'",0.01, 0.01, 0.01, 0.01, 1.86, 1.76]);  data.addRow(["'03'", "'2014-03-28 11:55:00'",0.04, 0.02, 0.04, 0.03, 1.82, 1.71]);  data.addRow(["'03'", "'2014-03-28 12:25:00'",0.03, 0.02, 0.03, 0.02, 1.86, 1.77]);  data.addRow(["'03'", "'2014-03-28 12:55:00'",0.02, 0.01, 0.02, 0.02, 1.43, 1.37]);  data.addRow(["'03'", "'2014-03-28 13:25:00'",0.02, 0.02, 0.02, 0.02, 1.44, 1.43]);  data.addRow(["'03'", "'2014-03-28 13:55:00'",0.02, 0.01, 0.02, 0.02, 1.46, 1.40]);  data.addRow(["'03'", "'2014-03-28 14:25:00'",0.02, 0.02, 0.02, 0.02, 1.57, 1.50]);  data.addRow(["'03'", "'2014-03-28 14:55:00'",0.03, 0.01, 0.03, 0.02, 1.84, 1.73]);  data.addRow(["'03'", "'2014-03-28 15:25:00'",0.03, 0.02, 0.03, 0.02, 1.83, 1.72]);  data.addRow(["'03'", "'2014-03-28 15:55:00'",0.04, 0.01, 0.03, 0.02, 2.08, 1.94]);  data.addRow(["'03'", "'2014-03-28 16:25:00'",0.02, 0.02, 0.02, 0.02, 1.81, 1.69]);  data.addRow(["'03'", "'2014-03-28 16:55:00'",0.08, 0.20, 0.13, 0.22, 1.52, 1.44]);  data.addRow(["'03'", "'2014-03-28 17:25:00'",0.05, 0.03, 0.04, 0.03, 1.45, 1.36]);  data.addRow(["'03'", "'2014-03-28 17:55:00'",0.07, 0.02, 0.06, 0.03, 1.39, 1.33]);  data.addRow(["'03'", "'2014-03-28 18:25:00'",0.05, 0.02, 0.04, 0.02, 1.36, 1.31]);  data.addRow(["'03'", "'2014-03-28 18:55:00'",0.04, 0.03, 0.04, 0.03, 1.37, 1.31]);  data.addRow(["'03'", "'2014-03-28 19:25:00'",0.05, 0.03, 0.05, 0.03, 1.39, 1.32]);  data.addRow(["'03'", "'2014-03-28 19:55:00'",0.07, 0.02, 0.05, 0.03, 1.38, 1.30]);  data.addRow(["'03'", "'2014-03-28 20:25:00'",0.07, 0.03, 0.06, 0.04, 1.37, 1.30]);  data.addRow(["'03'", "'2014-03-28 20:55:00'",0.04, 0.02, 0.04, 0.02, 1.36, 1.28]);  data.addRow(["'03'", "'2014-03-28 21:25:00'",0.07, 0.03, 0.06, 0.04, 1.37, 1.30]);  data.addRow(["'03'", "'2014-03-28 21:55:00'",0.05, 0.00, 0.03, 0.01, 1.36, 1.29]);  data.addRow(["'03'", "'2014-03-28 22:25:00'",0.08, 0.04, 0.07, 0.05, 1.35, 1.27]);  data.addRow(["'03'", "'2014-03-28 22:55:00'",0.09, 0.01, 0.06, 0.03, 1.66, 1.58]);  data.addRow(["'03'", "'2014-03-28 23:25:00'",0.04, 0.02, 0.04, 0.02, 1.37, 1.30]);  data.addRow(["'03'", "'2014-03-28 23:55:00'",0.08, 0.01, 0.06, 0.02, 1.37, 1.29]);  data.addRow(["'03'", "'2014-03-29 00:25:00'",0.07, 0.04, 0.06, 0.04, 1.38, 1.31]);  data.addRow(["'03'", "'2014-03-29 00:55:00'",0.06, 0.02, 0.05, 0.03, 1.37, 1.29]);  data.addRow(["'03'", "'2014-03-29 01:25:00'",0.03, 0.03, 0.03, 0.03, 1.40, 1.31]);  data.addRow(["'03'", "'2014-03-29 01:55:00'",0.09, 0.01, 0.07, 0.03, 1.35, 1.27]);  data.addRow(["'03'", "'2014-03-29 02:25:00'",0.07, 0.04, 0.06, 0.04, 1.34, 1.25]);  data.addRow(["'03'", "'2014-03-29 02:55:00'",0.10, 0.02, 0.08, 0.03, 1.36, 1.29]);  data.addRow(["'03'", "'2014-03-29 03:25:00'",0.06, 0.03, 0.05, 0.03, 1.40, 1.33]);  data.addRow(["'03'", "'2014-03-29 03:55:00'",0.10, 0.01, 0.07, 0.03, 1.37, 1.30]);  data.addRow(["'03'", "'2014-03-29 04:25:00'",0.05, 0.04, 0.05, 0.04, 1.38, 1.29]);  data.addRow(["'03'", "'2014-03-29 04:55:00'",0.11, 0.01, 0.08, 0.03, 1.42, 1.34]);  data.addRow(["'03'", "'2014-03-29 05:25:00'",0.05, 0.03, 0.04, 0.03, 1.38, 1.30]);  data.addRow(["'03'", "'2014-03-29 05:55:00'",0.10, 0.03, 0.08, 0.04, 1.36, 1.27]);  data.addRow(["'03'", "'2014-03-29 06:25:00'",0.07, 0.03, 0.06, 0.04, 1.37, 1.31]);  data.addRow(["'03'", "'2014-03-29 06:55:00'",0.10, 0.01, 0.07, 0.03, 1.35, 1.29]);  data.addRow(["'03'", "'2014-03-29 07:25:00'",0.06, 0.04, 0.06, 0.04, 1.36, 1.28]);  data.addRow(["'03'", "'2014-03-29 07:55:00'",0.10, 0.02, 0.08, 0.03, 1.36, 1.30]);  data.addRow(["'03'", "'2014-03-29 08:25:00'",0.05, 0.03, 0.04, 0.03, 1.38, 1.29]);  data.addRow(["'03'", "'2014-03-29 08:55:00'",0.07, 0.01, 0.05, 0.02, 1.34, 1.26]);  data.addRow(["'03'", "'2014-03-29 09:25:00'",0.06, 0.02, 0.05, 0.03, 1.34, 1.26]);  data.addRow(["'03'", "'2014-03-29 09:55:00'",0.13, 0.03, 0.10, 0.05, 1.36, 1.29]);  data.addRow(["'03'", "'2014-03-29 10:25:00'",0.05, 0.03, 0.05, 0.03, 1.37, 1.29]);  data.addRow(["'03'", "'2014-03-29 10:55:00'",0.09, 0.02, 0.07, 0.03, 1.36, 1.27]);  data.addRow(["'03'", "'2014-03-29 11:25:00'",0.03, 0.02, 0.03, 0.02, 1.36, 1.28]);  data.addRow(["'03'", "'2014-03-29 11:55:00'",0.08, 0.03, 0.07, 0.04, 1.36, 1.28]);  data.addRow(["'03'", "'2014-03-29 12:25:00'",0.05, 0.04, 0.05, 0.04, 1.39, 1.30]);  data.addRow(["'03'", "'2014-03-29 12:55:00'",0.07, 0.01, 0.05, 0.02, 1.38, 1.29]);  data.addRow(["'03'", "'2014-03-29 13:25:00'",0.08, 0.04, 0.06, 0.04, 1.37, 1.30]);  data.addRow(["'03'", "'2014-03-29 13:55:00'",0.03, 0.01, 0.02, 0.01, 1.38, 1.30]);  data.addRow(["'03'", "'2014-03-29 14:25:00'",0.05, 0.04, 0.05, 0.04, 1.37, 1.27]);  data.addRow(["'03'", "'2014-03-29 14:55:00'",0.04, 0.02, 0.04, 0.02, 1.35, 1.27]);  data.addRow(["'03'", "'2014-03-29 15:25:00'",0.06, 0.03, 0.05, 0.03, 1.36, 1.29]);  data.addRow(["'03'", "'2014-03-29 15:55:00'",0.05, 0.01, 0.04, 0.02, 1.36, 1.27]);  data.addRow(["'03'", "'2014-03-29 16:25:00'",0.07, 0.03, 0.06, 0.03, 1.35, 1.26]);  data.addRow(["'03'", "'2014-03-29 16:55:00'",0.06, 0.03, 0.05, 0.03, 1.37, 1.31]);  data.addRow(["'03'", "'2014-03-29 17:25:00'",0.05, 0.02, 0.04, 0.02, 1.36, 1.27]);  data.addRow(["'03'", "'2014-03-29 17:55:00'",0.07, 0.02, 0.05, 0.03, 1.36, 1.29]);  data.addRow(["'03'", "'2014-03-29 18:25:00'",0.06, 0.02, 0.05, 0.03, 1.35, 1.28]);  data.addRow(["'03'", "'2014-03-29 18:55:00'",0.05, 0.03, 0.05, 0.03, 1.36, 1.27]);  data.addRow(["'03'", "'2014-03-29 19:25:00'",0.02, 0.02, 0.02, 0.02, 1.34, 1.27]);  data.addRow(["'03'", "'2014-03-29 19:55:00'",0.11, 0.03, 0.08, 0.04, 1.38, 1.30]);  data.addRow(["'03'", "'2014-03-29 20:25:00'",0.08, 0.02, 0.06, 0.03, 1.34, 1.25]);  data.addRow(["'03'", "'2014-03-29 20:55:00'",0.05, 0.03, 0.05, 0.03, 1.35, 1.27]);  data.addRow(["'03'", "'2014-03-29 21:25:00'",0.06, 0.02, 0.05, 0.03, 1.34, 1.26]);  data.addRow(["'03'", "'2014-03-29 21:55:00'",0.07, 0.03, 0.06, 0.04, 1.33, 1.30]);  data.addRow(["'03'", "'2014-03-29 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.68, 0.71]);  data.addRow(["'03'", "'2014-03-29 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-29 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-30 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 14:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 15:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 16:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 17:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 18:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 19:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 20:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 21:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 22:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'03'", "'2014-03-31 23:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 00:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 01:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 02:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 03:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 04:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 05:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 06:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 07:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 08:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 09:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 10:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 11:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:25:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 12:55:00'",0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'04'", "'2014-04-01 13:25:00'",0.00, 0.00, 0.00, 0.00, 0.25, 0.23]);  data.addRow(["'04'", "'2014-04-01 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.26, 0.23]);  data.addRow(["'04'", "'2014-04-01 14:25:00'",0.00, 0.00, 0.00, 0.00, 0.29, 0.27]);  data.addRow(["'04'", "'2014-04-01 14:55:00'",0.01, 0.00, 0.01, 0.00, 0.28, 0.26]);  data.addRow(["'04'", "'2014-04-01 15:25:00'",0.01, 0.01, 0.01, 0.01, 0.29, 0.26]);  data.addRow(["'04'", "'2014-04-01 15:55:00'",0.01, 0.02, 0.01, 0.02, 0.33, 0.29]);  data.addRow(["'04'", "'2014-04-01 16:25:00'",0.03, 0.02, 0.03, 0.02, 0.35, 0.31]);  data.addRow(["'04'", "'2014-04-01 16:55:00'",0.03, 0.01, 0.02, 0.02, 0.29, 0.26]);  data.addRow(["'04'", "'2014-04-01 17:25:00'",0.04, 0.02, 0.04, 0.02, 0.28, 0.25]);  data.addRow(["'04'", "'2014-04-01 17:55:00'",0.04, 0.01, 0.03, 0.02, 0.20, 0.16]);  data.addRow(["'04'", "'2014-04-01 18:25:00'",0.05, 0.02, 0.04, 0.03, 0.26, 0.21]);  data.addRow(["'04'", "'2014-04-01 18:55:00'",0.02, 0.01, 0.02, 0.01, 0.24, 0.18]);  data.addRow(["'04'", "'2014-04-01 19:25:00'",0.04, 0.02, 0.03, 0.02, 0.26, 0.21]);  data.addRow(["'04'", "'2014-04-01 19:55:00'",0.06, 0.02, 0.04, 0.03, 0.22, 0.18]);  data.addRow(["'04'", "'2014-04-01 20:25:00'",0.06, 0.03, 0.05, 0.03, 0.22, 0.15]);  data.addRow(["'04'", "'2014-04-01 20:55:00'",0.02, 0.02, 0.02, 0.02, 0.21, 0.17]);  data.addRow(["'04'", "'2014-04-01 21:25:00'",0.05, 0.02, 0.05, 0.03, 0.21, 0.16]);  data.addRow(["'04'", "'2014-04-01 21:55:00'",0.05, 0.02, 0.04, 0.02, 0.23, 0.18]);  data.addRow(["'04'", "'2014-04-01 22:25:00'",0.06, 0.01, 0.05, 0.02, 0.20, 0.15]);  data.addRow(["'04'", "'2014-04-01 22:55:00'",0.05, 0.02, 0.04, 0.03, 0.22, 0.16]);  data.addRow(["'04'", "'2014-04-01 23:25:00'",0.10, 0.02, 0.07, 0.03, 0.23, 0.17]);  data.addRow(["'04'", "'2014-04-01 23:55:00'",0.02, 0.03, 0.03, 0.03, 0.25, 0.20]);  data.addRow(["'04'", "'2014-04-02 00:25:00'",0.11, 0.02, 0.08, 0.03, 0.21, 0.21]);  data.addRow(["'04'", "'2014-04-02 00:55:00'",0.03, 0.03, 0.03, 0.03, 0.21, 0.16]);  data.addRow(["'04'", "'2014-04-02 01:25:00'",0.06, 0.01, 0.04, 0.02, 0.27, 0.21]);  data.addRow(["'04'", "'2014-04-02 01:55:00'",0.06, 0.03, 0.05, 0.03, 0.22, 0.18]);  data.addRow(["'04'", "'2014-04-02 02:25:00'",0.07, 0.01, 0.05, 0.02, 0.23, 0.17]);  data.addRow(["'04'", "'2014-04-02 02:55:00'",0.07, 0.02, 0.05, 0.03, 0.21, 0.15]);  data.addRow(["'04'", "'2014-04-02 03:25:00'",0.10, 0.03, 0.08, 0.04, 0.22, 0.18]);  data.addRow(["'04'", "'2014-04-02 03:55:00'",0.07, 0.03, 0.06, 0.04, 0.22, 0.16]);  data.addRow(["'04'", "'2014-04-02 04:25:00'",0.09, 0.02, 0.07, 0.03, 0.25, 0.21]);  data.addRow(["'04'", "'2014-04-02 04:55:00'",0.06, 0.03, 0.05, 0.03, 0.24, 0.18]);  data.addRow(["'04'", "'2014-04-02 05:25:00'",0.10, 0.04, 0.08, 0.04, 0.22, 0.16]);  data.addRow(["'04'", "'2014-04-02 05:55:00'",0.07, 0.00, 0.05, 0.02, 0.23, 0.18]);  data.addRow(["'04'", "'2014-04-02 06:25:00'",0.09, 0.03, 0.07, 0.04, 0.23, 0.18]);  data.addRow(["'04'", "'2014-04-02 06:55:00'",0.06, 0.03, 0.05, 0.03, 0.24, 0.19]);  data.addRow(["'04'", "'2014-04-02 07:25:00'",0.07, 0.03, 0.05, 0.03, 0.22, 0.17]);  data.addRow(["'04'", "'2014-04-02 07:55:00'",0.04, 0.02, 0.03, 0.02, 0.21, 0.17]);  data.addRow(["'04'", "'2014-04-02 08:25:00'",0.03, 0.01, 0.02, 0.01, 0.58, 0.50]);  data.addRow(["'04'", "'2014-04-02 08:55:00'",0.02, 0.02, 0.02, 0.02, 0.66, 0.59]);  data.addRow(["'04'", "'2014-04-02 09:25:00'",0.03, 0.02, 0.03, 0.02, 0.42, 0.37]);  data.addRow(["'04'", "'2014-04-02 09:55:00'",0.01, 0.01, 0.01, 0.01, 0.58, 0.54]);  data.addRow(["'04'", "'2014-04-02 10:25:00'",0.01, 0.01, 0.01, 0.01, 0.35, 0.40]);  data.addRow(["'04'", "'2014-04-02 10:55:00'",0.00, 0.01, 0.01, 0.01, 0.38, 0.37]);  data.addRow(["'04'", "'2014-04-02 11:25:00'",0.01, 0.01, 0.01, 0.01, 0.69, 0.67]);  data.addRow(["'04'", "'2014-04-02 11:55:00'",0.01, 0.01, 0.01, 0.01, 0.66, 0.65]);  data.addRow(["'04'", "'2014-04-02 12:25:00'",0.00, 0.00, 0.01, 0.01, 0.69, 0.66]);  data.addRow(["'04'", "'2014-04-02 12:55:00'",0.00, 0.01, 0.00, 0.01, 0.41, 0.41]);  data.addRow(["'04'", "'2014-04-02 13:25:00'",0.01, 0.01, 0.01, 0.01, 0.66, 0.61]);  data.addRow(["'04'", "'2014-04-02 13:55:00'",0.00, 0.00, 0.00, 0.00, 0.57, 0.50]);  data.addRow(["'04'", "'2014-04-02 14:25:00'",0.00, 0.01, 0.01, 0.01, 0.47, 0.42]); 
	    var graphtitle="HPCf Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    