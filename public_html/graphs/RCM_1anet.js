
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input GB ');
        data.addColumn('number', 'Output GB '); data.addRow(["'2013-03-16 12:00:00'", 0.09, 0.00]);  data.addRow(["'2013-03-17 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-03-18 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-03-19 12:00:00'", 0.14, 0.00]);  data.addRow(["'2013-03-20 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-03-21 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-03-22 12:00:00'", 0.09, 0.00]);  data.addRow(["'2013-03-23 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-03-24 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-03-25 12:00:00'", 0.07, 0.00]);  data.addRow(["'2013-03-26 12:00:00'", 0.13, 0.00]);  data.addRow(["'2013-03-27 12:00:00'", 0.12, 0.00]);  data.addRow(["'2013-03-28 12:00:00'", 0.06, 0.00]);  data.addRow(["'2013-03-29 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-03-30 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-03-31 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-04-01 12:00:00'", 0.11, 0.00]);  data.addRow(["'2013-04-02 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-04-03 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-04-04 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-04-05 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-04-06 12:00:00'", 0.08, 0.00]);  data.addRow(["'2013-04-07 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-04-08 12:00:00'", 0.09, 0.00]);  data.addRow(["'2013-04-09 12:00:00'", 0.17, 0.00]);  data.addRow(["'2013-04-10 12:00:00'", 0.19, 0.00]);  data.addRow(["'2013-04-11 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-04-12 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-04-13 12:00:00'", 0.08, 0.00]);  data.addRow(["'2013-04-14 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-04-15 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-04-16 12:00:00'", 0.12, 0.00]);  data.addRow(["'2013-04-17 12:00:00'", 0.19, 0.00]);  data.addRow(["'2013-04-18 12:00:00'", 0.18, 0.00]);  data.addRow(["'2013-04-19 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-04-20 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-04-21 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-04-22 12:00:00'", 0.11, 0.00]);  data.addRow(["'2013-04-23 12:00:00'", 0.18, 0.00]);  data.addRow(["'2013-04-24 12:00:00'", 0.07, 0.00]);  data.addRow(["'2013-04-25 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-04-26 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-04-27 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-04-28 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-04-29 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-04-30 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-05-01 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-05-02 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-05-03 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-05-04 12:00:00'", 0.08, 0.00]);  data.addRow(["'2013-05-05 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-05-06 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-05-07 12:00:00'", 0.18, 0.00]);  data.addRow(["'2013-05-08 12:00:00'", 0.18, 0.00]);  data.addRow(["'2013-05-09 12:00:00'", 0.17, 0.00]);  data.addRow(["'2013-05-10 12:00:00'", 0.17, 0.00]);  data.addRow(["'2013-05-11 12:00:00'", 0.09, 0.00]);  data.addRow(["'2013-05-12 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-05-13 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-05-14 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-05-15 12:00:00'", 0.19, 0.00]);  data.addRow(["'2013-05-16 12:00:00'", 0.19, 0.00]);  data.addRow(["'2013-05-17 12:00:00'", 0.18, 0.00]);  data.addRow(["'2013-05-18 12:00:00'", 0.07, 0.00]);  data.addRow(["'2013-05-19 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-05-20 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-05-21 12:00:00'", 0.17, 0.00]);  data.addRow(["'2013-05-22 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-05-23 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-05-24 12:00:00'", 0.16, 0.00]);  data.addRow(["'2013-05-25 12:00:00'", 0.08, 0.00]);  data.addRow(["'2013-05-26 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-05-27 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-05-28 12:00:00'", 0.09, 0.00]);  data.addRow(["'2013-05-29 12:00:00'", 0.02, 0.00]);  data.addRow(["'2013-05-30 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-05-31 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-01 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-02 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-03 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-04 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-05 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-06 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-07 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-08 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-09 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-10 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-11 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-12 12:00:00'", 0.00, 0.00]);  data.addRow(["'2013-06-13 12:00:00'", 0.10, 0.00]);  data.addRow(["'2013-06-14 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-06-15 12:00:00'", 0.07, 0.00]);  data.addRow(["'2013-06-16 12:00:00'", 0.03, 0.00]);  data.addRow(["'2013-06-17 12:00:00'", 0.08, 0.00]);  data.addRow(["'2013-06-18 12:00:00'", 0.17, 0.00]);  data.addRow(["'2013-06-19 12:00:00'", 0.15, 0.00]);  data.addRow(["'2013-06-20 12:00:00'", 0.14, 0.02]);  data.addRow(["'2013-06-21 12:00:00'", 0.04, 0.14]);  data.addRow(["'2013-06-22 12:00:00'", 0.02, 0.10]);  data.addRow(["'2013-06-23 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-06-24 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-06-25 12:00:00'", 0.03, 0.17]);  data.addRow(["'2013-06-26 12:00:00'", 0.03, 0.13]);  data.addRow(["'2013-06-27 12:00:00'", 0.02, 0.14]);  data.addRow(["'2013-06-28 12:00:00'", 0.02, 0.13]);  data.addRow(["'2013-06-29 12:00:00'", 0.02, 0.07]);  data.addRow(["'2013-06-30 12:00:00'", 0.02, 0.02]);  data.addRow(["'2013-07-01 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-07-02 12:00:00'", 0.03, 0.14]);  data.addRow(["'2013-07-03 12:00:00'", 0.03, 0.14]);  data.addRow(["'2013-07-04 12:00:00'", 0.04, 0.08]);  data.addRow(["'2013-07-05 12:00:00'", 0.02, 0.04]);  data.addRow(["'2013-07-06 12:00:00'", 0.02, 0.03]);  data.addRow(["'2013-07-07 12:00:00'", 0.02, 0.02]);  data.addRow(["'2013-07-08 12:00:00'", 0.02, 0.06]);  data.addRow(["'2013-07-09 12:00:00'", 0.04, 0.11]);  data.addRow(["'2013-07-10 12:00:00'", 0.04, 0.15]);  data.addRow(["'2013-07-11 12:00:00'", 0.03, 0.13]);  data.addRow(["'2013-07-12 12:00:00'", 0.03, 0.14]);  data.addRow(["'2013-07-13 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-07-14 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-07-15 12:00:00'", 0.02, 0.02]);  data.addRow(["'2013-07-16 12:00:00'", 0.02, 0.09]);  data.addRow(["'2013-07-17 12:00:00'", 0.04, 0.15]);  data.addRow(["'2013-07-18 12:00:00'", 0.03, 0.11]);  data.addRow(["'2013-07-19 12:00:00'", 0.02, 0.11]);  data.addRow(["'2013-07-20 12:00:00'", 0.03, 0.06]);  data.addRow(["'2013-07-21 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-07-22 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-07-23 12:00:00'", 0.03, 0.11]);  data.addRow(["'2013-07-24 12:00:00'", 0.03, 0.13]);  data.addRow(["'2013-07-25 12:00:00'", 0.01, 0.05]);  data.addRow(["'2013-07-26 12:00:00'", 0.05, 0.04]);  data.addRow(["'2013-07-27 12:00:00'", 0.09, 0.03]);  data.addRow(["'2013-07-28 12:00:00'", 0.09, 0.03]);  data.addRow(["'2013-07-29 12:00:00'", 0.07, 0.07]);  data.addRow(["'2013-07-30 12:00:00'", 0.10, 0.12]);  data.addRow(["'2013-07-31 12:00:00'", 0.09, 0.13]);  data.addRow(["'2013-08-01 12:00:00'", 0.06, 0.09]);  data.addRow(["'2013-08-02 12:00:00'", 0.10, 0.11]);  data.addRow(["'2013-08-03 12:00:00'", 0.04, 0.06]);  data.addRow(["'2013-08-04 12:00:00'", 0.03, 0.03]);  data.addRow(["'2013-08-05 12:00:00'", 0.05, 0.11]);  data.addRow(["'2013-08-06 12:00:00'", 0.03, 0.12]);  data.addRow(["'2013-08-07 12:00:00'", 0.06, 0.15]);  data.addRow(["'2013-08-08 12:00:00'", 0.11, 0.20]);  data.addRow(["'2013-08-09 12:00:00'", 0.14, 0.18]);  data.addRow(["'2013-08-10 12:00:00'", 0.07, 0.10]);  data.addRow(["'2013-08-11 12:00:00'", 0.05, 0.04]);  data.addRow(["'2013-08-12 12:00:00'", 0.06, 0.11]);  data.addRow(["'2013-08-13 12:00:00'", 0.09, 0.20]);  data.addRow(["'2013-08-14 12:00:00'", 0.10, 0.21]);  data.addRow(["'2013-08-15 12:00:00'", 0.08, 0.12]);  data.addRow(["'2013-08-16 12:00:00'", 0.11, 0.17]);  data.addRow(["'2013-08-17 12:00:00'", 0.13, 0.11]);  data.addRow(["'2013-08-18 12:00:00'", 0.12, 0.03]);  data.addRow(["'2013-08-19 12:00:00'", 0.11, 0.11]);  data.addRow(["'2013-08-20 12:00:00'", 0.06, 0.18]);  data.addRow(["'2013-08-21 12:00:00'", 0.09, 0.17]);  data.addRow(["'2013-08-22 12:00:00'", 0.10, 0.20]);  data.addRow(["'2013-08-23 12:00:00'", 0.09, 0.17]);  data.addRow(["'2013-08-24 12:00:00'", 0.08, 0.12]);  data.addRow(["'2013-08-25 12:00:00'", 0.06, 0.03]);  data.addRow(["'2013-08-26 12:00:00'", 0.06, 0.10]);  data.addRow(["'2013-08-27 12:00:00'", 0.09, 0.19]);  data.addRow(["'2013-08-28 12:00:00'", 0.07, 0.14]);  data.addRow(["'2013-08-29 12:00:00'", 0.12, 0.17]);  data.addRow(["'2013-08-30 12:00:00'", 0.12, 0.18]);  data.addRow(["'2013-08-31 12:00:00'", 0.06, 0.09]);  data.addRow(["'2013-09-01 12:00:00'", 0.06, 0.03]);  data.addRow(["'2013-09-02 12:00:00'", 0.07, 0.02]);  data.addRow(["'2013-09-03 12:00:00'", 0.07, 0.10]);  data.addRow(["'2013-09-04 12:00:00'", 0.07, 0.16]);  data.addRow(["'2013-09-05 12:00:00'", 0.08, 0.11]);  data.addRow(["'2013-09-06 12:00:00'", 0.07, 0.11]);  data.addRow(["'2013-09-07 12:00:00'", 0.13, 0.11]);  data.addRow(["'2013-09-08 12:00:00'", 0.14, 0.04]);  data.addRow(["'2013-09-09 12:00:00'", 0.10, 0.11]);  data.addRow(["'2013-09-10 12:00:00'", 0.08, 0.20]);  data.addRow(["'2013-09-11 12:00:00'", 0.07, 0.23]);  data.addRow(["'2013-09-12 12:00:00'", 0.06, 0.21]);  data.addRow(["'2013-09-13 12:00:00'", 0.05, 0.19]);  data.addRow(["'2013-09-14 12:00:00'", 0.04, 0.10]);  data.addRow(["'2013-09-15 12:00:00'", 0.04, 0.03]);  data.addRow(["'2013-09-16 12:00:00'", 0.05, 0.13]);  data.addRow(["'2013-09-17 12:00:00'", 0.06, 0.20]);  data.addRow(["'2013-09-18 12:00:00'", 0.06, 0.21]);  data.addRow(["'2013-09-19 12:00:00'", 0.07, 0.28]);  data.addRow(["'2013-09-20 12:00:00'", 0.06, 0.23]);  data.addRow(["'2013-09-21 12:00:00'", 0.03, 0.10]);  data.addRow(["'2013-09-22 12:00:00'", 0.02, 0.02]);  data.addRow(["'2013-09-23 12:00:00'", 0.02, 0.04]);  data.addRow(["'2013-09-24 12:00:00'", 0.05, 0.13]);  data.addRow(["'2013-09-25 12:00:00'", 0.06, 0.21]);  data.addRow(["'2013-09-26 12:00:00'", 0.06, 0.18]);  data.addRow(["'2013-09-27 12:00:00'", 0.05, 0.18]);  data.addRow(["'2013-09-28 12:00:00'", 0.03, 0.09]);  data.addRow(["'2013-09-29 12:00:00'", 0.02, 0.03]);  data.addRow(["'2013-09-30 12:00:00'", 0.05, 0.10]);  data.addRow(["'2013-10-01 12:00:00'", 0.04, 0.17]);  data.addRow(["'2013-10-02 12:00:00'", 0.06, 0.19]);  data.addRow(["'2013-10-03 12:00:00'", 0.07, 0.20]);  data.addRow(["'2013-10-04 12:00:00'", 0.04, 0.17]);  data.addRow(["'2013-10-05 12:00:00'", 0.04, 0.10]);  data.addRow(["'2013-10-06 12:00:00'", 0.02, 0.04]);  data.addRow(["'2013-10-07 12:00:00'", 0.04, 0.11]);  data.addRow(["'2013-10-08 12:00:00'", 0.05, 0.19]);  data.addRow(["'2013-10-09 12:00:00'", 0.05, 0.23]);  data.addRow(["'2013-10-10 12:00:00'", 0.06, 0.22]);  data.addRow(["'2013-10-11 12:00:00'", 0.06, 0.19]);  data.addRow(["'2013-10-12 12:00:00'", 0.04, 0.11]);  data.addRow(["'2013-10-13 12:00:00'", 0.03, 0.04]);  data.addRow(["'2013-10-14 12:00:00'", 0.04, 0.14]);  data.addRow(["'2013-10-15 12:00:00'", 0.05, 0.20]);  data.addRow(["'2013-10-16 12:00:00'", 0.06, 0.21]);  data.addRow(["'2013-10-17 12:00:00'", 0.05, 0.21]);  data.addRow(["'2013-10-18 12:00:00'", 0.07, 0.21]);  data.addRow(["'2013-10-19 12:00:00'", 0.03, 0.12]);  data.addRow(["'2013-10-20 12:00:00'", 0.02, 0.05]);  data.addRow(["'2013-10-21 12:00:00'", 0.04, 0.14]);  data.addRow(["'2013-10-22 12:00:00'", 0.06, 0.22]);  data.addRow(["'2013-10-23 12:00:00'", 0.05, 0.25]);  data.addRow(["'2013-10-24 12:00:00'", 0.07, 0.27]);  data.addRow(["'2013-10-25 12:00:00'", 0.04, 0.20]);  data.addRow(["'2013-10-26 12:00:00'", 0.05, 0.14]);  data.addRow(["'2013-10-27 12:00:00'", 0.02, 0.05]);  data.addRow(["'2013-10-28 12:00:00'", 0.03, 0.13]);  data.addRow(["'2013-10-29 12:00:00'", 0.07, 0.24]);  data.addRow(["'2013-10-30 12:00:00'", 0.06, 0.22]);  data.addRow(["'2013-10-31 12:00:00'", 0.06, 0.22]);  data.addRow(["'2013-11-01 12:00:00'", 0.05, 0.22]);  data.addRow(["'2013-11-02 12:00:00'", 0.06, 0.12]);  data.addRow(["'2013-11-03 12:00:00'", 0.03, 0.04]);  data.addRow(["'2013-11-04 12:00:00'", 0.05, 0.11]);  data.addRow(["'2013-11-05 12:00:00'", 0.05, 0.20]);  data.addRow(["'2013-11-06 12:00:00'", 0.05, 0.20]);  data.addRow(["'2013-11-07 12:00:00'", 0.05, 0.21]);  data.addRow(["'2013-11-08 12:00:00'", 0.06, 0.19]);  data.addRow(["'2013-11-09 12:00:00'", 0.04, 0.13]);  data.addRow(["'2013-11-10 12:00:00'", 0.02, 0.06]);  data.addRow(["'2013-11-11 12:00:00'", 0.02, 0.05]);  data.addRow(["'2013-11-12 12:00:00'", 0.04, 0.16]);  data.addRow(["'2013-11-13 12:00:00'", 0.05, 0.26]);  data.addRow(["'2013-11-14 12:00:00'", 0.05, 0.22]);  data.addRow(["'2013-11-15 12:00:00'", 0.05, 0.18]);  data.addRow(["'2013-11-16 12:00:00'", 0.04, 0.09]);  data.addRow(["'2013-11-17 12:00:00'", 0.03, 0.05]);  data.addRow(["'2013-11-18 12:00:00'", 0.04, 0.13]);  data.addRow(["'2013-11-19 12:00:00'", 0.04, 0.14]);  data.addRow(["'2013-11-20 12:00:00'", 0.03, 0.15]);  data.addRow(["'2013-11-21 12:00:00'", 0.06, 0.22]);  data.addRow(["'2013-11-22 12:00:00'", 0.06, 0.18]);  data.addRow(["'2013-11-23 12:00:00'", 0.03, 0.11]);  data.addRow(["'2013-11-24 12:00:00'", 0.03, 0.03]);  data.addRow(["'2013-11-25 12:00:00'", 0.04, 0.11]);  data.addRow(["'2013-11-26 12:00:00'", 0.05, 0.21]);  data.addRow(["'2013-11-27 12:00:00'", 0.04, 0.18]);  data.addRow(["'2013-11-28 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-11-29 12:00:00'", 0.01, 0.01]);  data.addRow(["'2013-11-30 12:00:00'", 0.02, 0.03]);  data.addRow(["'2013-12-01 12:00:00'", 0.02, 0.02]);  data.addRow(["'2013-12-02 12:00:00'", 0.05, 0.12]);  data.addRow(["'2013-12-03 12:00:00'", 0.07, 0.20]);  data.addRow(["'2013-12-04 12:00:00'", 0.05, 0.20]);  data.addRow(["'2013-12-05 12:00:00'", 0.05, 0.20]);  data.addRow(["'2013-12-06 12:00:00'", 0.07, 0.18]);  data.addRow(["'2013-12-07 12:00:00'", 0.07, 0.12]);  data.addRow(["'2013-12-08 12:00:00'", 0.03, 0.05]);  data.addRow(["'2013-12-09 12:00:00'", 0.04, 0.12]);  data.addRow(["'2013-12-10 12:00:00'", 0.06, 0.23]);  data.addRow(["'2013-12-11 12:00:00'", 0.05, 0.26]);  data.addRow(["'2013-12-12 12:00:00'", 0.05, 0.22]);  data.addRow(["'2013-12-13 12:00:00'", 0.04, 0.16]);  data.addRow(["'2013-12-14 12:00:00'", 0.02, 0.08]);  data.addRow(["'2013-12-15 12:00:00'", 0.02, 0.05]);  data.addRow(["'2013-12-16 12:00:00'", 0.03, 0.10]);  data.addRow(["'2013-12-17 12:00:00'", 0.06, 0.20]);  data.addRow(["'2013-12-18 12:00:00'", 0.05, 0.19]);  data.addRow(["'2013-12-19 12:00:00'", 0.04, 0.19]);  data.addRow(["'2013-12-20 12:00:00'", 0.04, 0.12]);  data.addRow(["'2013-12-21 12:00:00'", 0.02, 0.04]);  data.addRow(["'2013-12-22 12:00:00'", 0.01, 0.01]);  data.addRow(["'2013-12-23 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-12-24 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-12-25 12:00:00'", 0.01, 0.01]);  data.addRow(["'2013-12-26 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-12-27 12:00:00'", 0.01, 0.03]);  data.addRow(["'2013-12-28 12:00:00'", 0.01, 0.03]);  data.addRow(["'2013-12-29 12:00:00'", 0.01, 0.01]);  data.addRow(["'2013-12-30 12:00:00'", 0.01, 0.02]);  data.addRow(["'2013-12-31 12:00:00'", 0.01, 0.03]);  data.addRow(["'2014-01-01 12:00:00'", 0.01, 0.01]);  data.addRow(["'2014-01-02 12:00:00'", 0.01, 0.01]);  data.addRow(["'2014-01-03 12:00:00'", 0.01, 0.03]);  data.addRow(["'2014-01-04 12:00:00'", 0.01, 0.03]);  data.addRow(["'2014-01-05 12:00:00'", 0.01, 0.01]);  data.addRow(["'2014-01-06 12:00:00'", 0.01, 0.01]);  data.addRow(["'2014-01-07 12:00:00'", 0.01, 0.04]);  data.addRow(["'2014-01-08 12:00:00'", 0.03, 0.15]);  data.addRow(["'2014-01-09 12:00:00'", 0.03, 0.20]);  data.addRow(["'2014-01-10 12:00:00'", 0.06, 0.19]);  data.addRow(["'2014-01-11 12:00:00'", 0.04, 0.10]);  data.addRow(["'2014-01-12 12:00:00'", 0.03, 0.03]);  data.addRow(["'2014-01-13 12:00:00'", 0.02, 0.02]);  data.addRow(["'2014-01-14 12:00:00'", 0.04, 0.13]);  data.addRow(["'2014-01-15 12:00:00'", 0.07, 0.22]);  data.addRow(["'2014-01-16 12:00:00'", 0.11, 0.23]);  data.addRow(["'2014-01-17 12:00:00'", 0.06, 0.17]);  data.addRow(["'2014-01-18 12:00:00'", 0.08, 0.09]);  data.addRow(["'2014-01-19 12:00:00'", 0.02, 0.02]);  data.addRow(["'2014-01-20 12:00:00'", 0.02, 0.04]);  data.addRow(["'2014-01-21 12:00:00'", 0.03, 0.13]);  data.addRow(["'2014-01-22 12:00:00'", 0.07, 0.19]);  data.addRow(["'2014-01-23 12:00:00'", 0.05, 0.21]);  data.addRow(["'2014-01-24 12:00:00'", 0.06, 0.22]);  data.addRow(["'2014-01-25 12:00:00'", 0.04, 0.14]);  data.addRow(["'2014-01-26 12:00:00'", 0.03, 0.04]);  data.addRow(["'2014-01-27 12:00:00'", 0.05, 0.12]);  data.addRow(["'2014-01-28 12:00:00'", 0.07, 0.21]);  data.addRow(["'2014-01-29 12:00:00'", 0.07, 0.23]);  data.addRow(["'2014-01-30 12:00:00'", 0.06, 0.23]);  data.addRow(["'2014-01-31 12:00:00'", 0.06, 0.22]);  data.addRow(["'2014-02-01 12:00:00'", 0.06, 0.13]);  data.addRow(["'2014-02-02 12:00:00'", 0.06, 0.03]);  data.addRow(["'2014-02-03 12:00:00'", 0.07, 0.12]);  data.addRow(["'2014-02-04 12:00:00'", 0.09, 0.22]);  data.addRow(["'2014-02-05 12:00:00'", 0.09, 0.21]);  data.addRow(["'2014-02-06 12:00:00'", 0.06, 0.22]);  data.addRow(["'2014-02-07 12:00:00'", 0.06, 0.20]);  data.addRow(["'2014-02-08 12:00:00'", 0.06, 0.11]);  data.addRow(["'2014-02-09 12:00:00'", 0.03, 0.03]);  data.addRow(["'2014-02-10 12:00:00'", 0.05, 0.12]);  data.addRow(["'2014-02-11 12:00:00'", 0.08, 0.23]);  data.addRow(["'2014-02-12 12:00:00'", 0.07, 0.24]);  data.addRow(["'2014-02-13 12:00:00'", 0.05, 0.21]);  data.addRow(["'2014-02-14 12:00:00'", 0.05, 0.19]);  data.addRow(["'2014-02-15 12:00:00'", 0.00, 0.00]); 
	var graphtitle='RCM Traffic Network Max: 1.77 GB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='1'

	
        
      
	