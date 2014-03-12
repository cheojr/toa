
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input bytes ');
        data.addColumn('number', 'Flows Output bytes '); data.addRow(["'13:05:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:10:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:15:00'", 0.02, 0.06, 0.24, 0.21, 7.00, 7.00]);  data.addRow(["'13:20:00'", 0.01, 0.01, 0.07, 0.07, 7.00, 6.00]);  data.addRow(["'13:25:00'", 0.00, 0.00, 0.03, 0.03, 4.00, 5.00]);  data.addRow(["'13:30:00'", 0.01, 0.01, 0.14, 0.10, 5.00, 7.00]);  data.addRow(["'13:35:00'", 0.01, 0.01, 0.12, 0.12, 7.00, 6.00]);  data.addRow(["'13:40:00'", 0.01, 0.21, 0.09, 0.17, 6.00, 6.00]);  data.addRow(["'13:45:00'", 0.00, 0.00, 0.05, 0.03, 4.00, 3.00]);  data.addRow(["'13:50:00'", 0.00, 0.03, 0.05, 0.05, 21.00, 19.00]);  data.addRow(["'13:55:00'", 0.01, 0.01, 0.06, 0.06, 18.00, 20.00]);  data.addRow(["'14:00:00'", 0.00, 0.01, 0.06, 0.03, 6.00, 5.00]);  data.addRow(["'14:05:00'", 0.01, 0.02, 0.17, 0.14, 6.00, 3.00]);  data.addRow(["'14:10:00'", 0.03, 0.10, 0.44, 0.38, 17.00, 20.00]);  data.addRow(["'14:15:00'", 0.01, 0.02, 0.04, 0.05, 22.00, 23.00]);  data.addRow(["'14:20:00'", 0.01, 0.02, 0.10, 0.04, 19.00, 16.00]);  data.addRow(["'14:25:00'", 0.01, 0.04, 0.06, 0.07, 23.00, 21.00]);  data.addRow(["'14:30:00'", 0.01, 0.07, 0.13, 0.14, 17.00, 18.00]);  data.addRow(["'14:35:00'", 0.01, 0.16, 0.09, 0.17, 42.00, 43.00]);  data.addRow(["'14:40:00'", 0.01, 0.06, 0.10, 0.08, 16.00, 16.00]);  data.addRow(["'14:45:00'", 0.00, 0.03, 0.04, 0.06, 17.00, 17.00]);  data.addRow(["'14:50:00'", 0.01, 0.02, 0.12, 0.05, 19.00, 13.00]);  data.addRow(["'14:55:00'", 0.01, 0.02, 0.11, 0.08, 21.00, 17.00]);  data.addRow(["'15:00:00'", 0.00, 0.01, 0.03, 0.02, 12.00, 13.00]);  data.addRow(["'15:05:00'", 0.00, 0.02, 0.04, 0.04, 15.00, 16.00]);  data.addRow(["'15:10:00'", 0.01, 0.04, 0.09, 0.11, 17.00, 15.00]);  data.addRow(["'15:15:00'", 0.00, 0.00, 0.02, 0.02, 5.00, 6.00]);  data.addRow(["'15:20:00'", 0.00, 0.02, 0.04, 0.04, 16.00, 12.00]);  data.addRow(["'15:25:00'", 0.00, 0.02, 0.01, 0.03, 8.00, 10.00]);  data.addRow(["'15:30:00'", 0.00, 0.01, 0.02, 0.05, 10.00, 16.00]);  data.addRow(["'15:35:00'", 0.01, 0.01, 0.08, 0.02, 10.00, 10.00]);  data.addRow(["'15:40:00'", 0.00, 0.01, 0.04, 0.03, 15.00, 14.00]);  data.addRow(["'15:45:00'", 0.00, 0.02, 0.04, 0.07, 12.00, 11.00]);  data.addRow(["'15:50:00'", 0.00, 0.00, 0.03, 0.03, 4.00, 2.00]);  data.addRow(["'15:55:00'", 0.00, 0.01, 0.04, 0.02, 13.00, 9.00]);  data.addRow(["'16:00:00'", 0.00, 0.01, 0.01, 0.02, 8.00, 13.00]);  data.addRow(["'16:05:00'", 0.00, 0.02, 0.04, 0.02, 12.00, 8.00]);  data.addRow(["'16:10:00'", 0.00, 0.00, 0.03, 0.05, 5.00, 3.00]);  data.addRow(["'16:15:00'", 0.00, 0.00, 0.04, 0.02, 7.00, 3.00]);  data.addRow(["'16:20:00'", 0.00, 0.01, 0.02, 0.04, 9.00, 12.00]);  data.addRow(["'16:25:00'", 0.00, 0.00, 0.00, 0.02, 3.00, 1.00]);  data.addRow(["'16:30:00'", 0.01, 0.02, 0.10, 0.06, 18.00, 16.00]);  data.addRow(["'16:35:00'", 0.00, 0.00, 0.01, 0.00, 2.00, 1.00]);  data.addRow(["'16:40:00'", 0.00, 0.00, 0.02, 0.02, 5.00, 3.00]);  data.addRow(["'16:45:00'", 0.00, 0.00, 0.02, 0.03, 3.00, 2.00]);  data.addRow(["'16:50:00'", 0.00, 0.01, 0.01, 0.05, 2.00, 5.00]);  data.addRow(["'16:55:00'", 0.00, 0.00, 0.03, 0.01, 5.00, 2.00]);  data.addRow(["'17:00:00'", 0.00, 0.00, 0.03, 0.03, 3.00, 3.00]);  data.addRow(["'17:05:00'", 0.00, 0.00, 0.01, 0.01, 4.00, 3.00]);  data.addRow(["'17:10:00'", 0.01, 0.00, 0.07, 0.03, 3.00, 4.00]);  data.addRow(["'17:15:00'", 0.01, 0.01, 0.05, 0.08, 14.00, 13.00]);  data.addRow(["'17:20:00'", 0.00, 0.00, 0.01, 0.01, 7.00, 7.00]);  data.addRow(["'17:25:00'", 0.02, 1.01, 0.37, 0.74, 39.00, 48.00]);  data.addRow(["'17:30:00'", 0.01, 0.83, 0.19, 0.69, 63.00, 78.00]);  data.addRow(["'17:35:00'", 0.01, 0.00, 0.08, 0.01, 7.00, 8.00]);  data.addRow(["'17:40:00'", 0.02, 0.02, 0.17, 0.05, 37.00, 40.00]);  data.addRow(["'17:45:00'", 0.00, 0.01, 0.02, 0.03, 18.00, 12.00]);  data.addRow(["'17:50:00'", 11.08, 0.23, 7.77, 4.47, 14.00, 16.00]);  data.addRow(["'17:55:00'", 0.01, 0.00, 0.07, 0.04, 10.00, 10.00]);  data.addRow(["'18:00:00'", 0.01, 0.01, 0.07, 0.09, 5.00, 4.00]);  data.addRow(["'18:05:00'", 0.14, 6.95, 2.58, 4.93, 5.00, 6.00]);  data.addRow(["'18:10:00'", 0.00, 0.00, 0.01, 0.00, 8.00, 2.00]);  data.addRow(["'18:15:00'", 0.01, 0.01, 0.08, 0.06, 9.00, 7.00]);  data.addRow(["'18:20:00'", 0.00, 0.00, 0.00, 0.02, 4.00, 4.00]);  data.addRow(["'18:25:00'", 0.00, 0.00, 0.04, 0.02, 3.00, 3.00]);  data.addRow(["'18:30:00'", 0.00, 0.00, 0.03, 0.02, 7.00, 5.00]);  data.addRow(["'18:35:00'", 0.00, 0.00, 0.02, 0.02, 4.00, 6.00]);  data.addRow(["'18:40:00'", 0.00, 0.00, 0.01, 0.02, 7.00, 5.00]);  data.addRow(["'18:45:00'", 0.00, 0.00, 0.02, 0.02, 8.00, 8.00]);  data.addRow(["'18:50:00'", 0.00, 0.00, 0.02, 0.01, 7.00, 5.00]);  data.addRow(["'18:55:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 10.00]);  data.addRow(["'19:00:00'", 0.00, 0.00, 0.02, 0.02, 6.00, 12.00]);  data.addRow(["'19:05:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 9.00]);  data.addRow(["'19:10:00'", 0.00, 0.00, 0.02, 0.02, 7.00, 12.00]);  data.addRow(["'19:15:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 7.00]);  data.addRow(["'19:20:00'", 0.00, 0.00, 0.03, 0.02, 11.00, 8.00]);  data.addRow(["'19:25:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 10.00]);  data.addRow(["'19:30:00'", 0.00, 0.00, 0.01, 0.02, 10.00, 10.00]);  data.addRow(["'19:35:00'", 0.00, 0.00, 0.03, 0.02, 11.00, 11.00]);  data.addRow(["'19:40:00'", 0.01, 0.02, 0.10, 0.12, 15.00, 16.00]);  data.addRow(["'19:45:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 11.00]);  data.addRow(["'19:50:00'", 0.00, 0.00, 0.01, 0.01, 8.00, 10.00]);  data.addRow(["'19:55:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 9.00]);  data.addRow(["'20:00:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 9.00]);  data.addRow(["'20:05:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 10.00]);  data.addRow(["'20:10:00'", 0.00, 0.00, 0.04, 0.02, 11.00, 10.00]);  data.addRow(["'20:15:00'", 0.00, 0.00, 0.01, 0.03, 9.00, 15.00]);  data.addRow(["'20:20:00'", 0.00, 0.00, 0.04, 0.02, 16.00, 12.00]);  data.addRow(["'20:25:00'", 0.00, 0.00, 0.01, 0.01, 11.00, 9.00]);  data.addRow(["'20:30:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 18.00]);  data.addRow(["'20:35:00'", 0.00, 0.00, 0.03, 0.02, 10.00, 10.00]);  data.addRow(["'20:40:00'", 0.00, 0.00, 0.02, 0.03, 11.00, 12.00]);  data.addRow(["'20:45:00'", 0.00, 0.00, 0.02, 0.02, 8.00, 9.00]);  data.addRow(["'20:50:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 8.00]);  data.addRow(["'20:55:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 9.00]);  data.addRow(["'21:00:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 10.00]);  data.addRow(["'21:05:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 11.00]);  data.addRow(["'21:10:00'", 0.00, 0.00, 0.02, 0.03, 12.00, 14.00]);  data.addRow(["'21:15:00'", 0.00, 0.00, 0.02, 0.03, 14.00, 10.00]);  data.addRow(["'21:20:00'", 0.00, 0.00, 0.02, 0.03, 11.00, 13.00]);  data.addRow(["'21:25:00'", 0.00, 0.00, 0.02, 0.03, 8.00, 12.00]);  data.addRow(["'21:30:00'", 0.00, 0.00, 0.02, 0.02, 8.00, 11.00]);  data.addRow(["'21:35:00'", 0.00, 0.00, 0.02, 0.03, 9.00, 11.00]);  data.addRow(["'21:40:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 11.00]);  data.addRow(["'21:45:00'", 0.00, 0.00, 0.03, 0.02, 12.00, 12.00]);  data.addRow(["'21:50:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 10.00]);  data.addRow(["'21:55:00'", 0.00, 0.00, 0.03, 0.03, 12.00, 9.00]);  data.addRow(["'22:00:00'", 0.00, 0.00, 0.03, 0.04, 12.00, 10.00]);  data.addRow(["'22:05:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 12.00]);  data.addRow(["'22:10:00'", 0.00, 0.00, 0.03, 0.02, 14.00, 13.00]);  data.addRow(["'22:15:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 9.00]);  data.addRow(["'22:20:00'", 0.00, 0.00, 0.02, 0.03, 11.00, 8.00]);  data.addRow(["'22:25:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 8.00]);  data.addRow(["'22:30:00'", 0.00, 0.00, 0.03, 0.02, 12.00, 7.00]);  data.addRow(["'22:35:00'", 0.00, 0.00, 0.02, 0.03, 10.00, 12.00]);  data.addRow(["'22:40:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 9.00]);  data.addRow(["'22:45:00'", 0.00, 0.00, 0.04, 0.02, 12.00, 13.00]);  data.addRow(["'22:50:00'", 0.00, 0.00, 0.02, 0.03, 10.00, 9.00]);  data.addRow(["'22:55:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 11.00]);  data.addRow(["'23:00:00'", 0.00, 0.00, 0.03, 0.02, 10.00, 13.00]);  data.addRow(["'23:05:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 10.00]);  data.addRow(["'23:10:00'", 0.00, 0.00, 0.02, 0.03, 15.00, 15.00]);  data.addRow(["'23:15:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 12.00]);  data.addRow(["'23:20:00'", 0.00, 0.00, 0.03, 0.03, 11.00, 11.00]);  data.addRow(["'23:25:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 10.00]);  data.addRow(["'23:30:00'", 0.00, 0.00, 0.02, 0.01, 11.00, 8.00]);  data.addRow(["'23:35:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 9.00]);  data.addRow(["'23:40:00'", 0.00, 0.00, 0.03, 0.02, 14.00, 12.00]);  data.addRow(["'23:45:00'", 0.00, 0.00, 0.02, 0.03, 14.00, 16.00]);  data.addRow(["'23:50:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 10.00]);  data.addRow(["'23:55:00'", 0.00, 0.00, 0.02, 0.01, 15.00, 6.00]);  data.addRow(["'00:00:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 14.00]);  data.addRow(["'00:05:00'", 0.00, 0.00, 0.02, 0.03, 15.00, 11.00]);  data.addRow(["'00:10:00'", 0.00, 0.00, 0.03, 0.03, 11.00, 15.00]);  data.addRow(["'00:15:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 9.00]);  data.addRow(["'00:20:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 12.00]);  data.addRow(["'00:25:00'", 0.00, 0.00, 0.02, 0.03, 9.00, 8.00]);  data.addRow(["'00:30:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 10.00]);  data.addRow(["'00:35:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 14.00]);  data.addRow(["'00:40:00'", 0.00, 0.00, 0.02, 0.03, 13.00, 9.00]);  data.addRow(["'00:45:00'", 0.00, 0.00, 0.03, 0.03, 9.00, 8.00]);  data.addRow(["'00:50:00'", 0.00, 0.00, 0.01, 0.02, 10.00, 10.00]);  data.addRow(["'00:55:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 13.00]);  data.addRow(["'01:00:00'", 0.00, 0.00, 0.02, 0.03, 18.00, 14.00]);  data.addRow(["'01:05:00'", 0.00, 0.00, 0.03, 0.03, 15.00, 11.00]);  data.addRow(["'01:10:00'", 0.01, 0.00, 0.03, 0.03, 17.00, 15.00]);  data.addRow(["'01:15:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 14.00]);  data.addRow(["'01:20:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 10.00]);  data.addRow(["'01:25:00'", 0.00, 0.00, 0.03, 0.01, 9.00, 11.00]);  data.addRow(["'01:30:00'", 0.00, 0.00, 0.02, 0.02, 16.00, 10.00]);  data.addRow(["'01:35:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 8.00]);  data.addRow(["'01:40:00'", 0.00, 0.00, 0.02, 0.01, 15.00, 12.00]);  data.addRow(["'01:45:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 13.00]);  data.addRow(["'01:50:00'", 0.00, 0.00, 0.02, 0.02, 15.00, 12.00]);  data.addRow(["'01:55:00'", 0.00, 0.00, 0.02, 0.03, 12.00, 16.00]);  data.addRow(["'02:00:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 10.00]);  data.addRow(["'02:05:00'", 0.00, 0.00, 0.02, 0.02, 14.00, 12.00]);  data.addRow(["'02:10:00'", 0.01, 0.00, 0.03, 0.02, 15.00, 15.00]);  data.addRow(["'02:15:00'", 0.01, 0.00, 0.03, 0.02, 18.00, 14.00]);  data.addRow(["'02:20:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 13.00]);  data.addRow(["'02:25:00'", 0.00, 0.00, 0.03, 0.02, 17.00, 12.00]);  data.addRow(["'02:30:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 12.00]);  data.addRow(["'02:35:00'", 0.00, 0.00, 0.01, 0.02, 10.00, 8.00]);  data.addRow(["'02:40:00'", 0.00, 0.00, 0.02, 0.02, 15.00, 11.00]);  data.addRow(["'02:45:00'", 0.00, 0.00, 0.03, 0.02, 15.00, 11.00]);  data.addRow(["'02:50:00'", 0.00, 0.00, 0.02, 0.02, 19.00, 12.00]);  data.addRow(["'02:55:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 13.00]);  data.addRow(["'03:00:00'", 0.00, 0.00, 0.03, 0.02, 16.00, 13.00]);  data.addRow(["'03:05:00'", 0.00, 0.00, 0.02, 0.03, 15.00, 13.00]);  data.addRow(["'03:10:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 11.00]);  data.addRow(["'03:15:00'", 0.00, 0.00, 0.03, 0.02, 15.00, 13.00]);  data.addRow(["'03:20:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 9.00]);  data.addRow(["'03:25:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 12.00]);  data.addRow(["'03:30:00'", 0.00, 0.00, 0.03, 0.03, 13.00, 15.00]);  data.addRow(["'03:35:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 15.00]);  data.addRow(["'03:40:00'", 0.00, 0.00, 0.02, 0.03, 10.00, 12.00]);  data.addRow(["'03:45:00'", 0.00, 0.00, 0.03, 0.02, 13.00, 10.00]);  data.addRow(["'03:50:00'", 0.00, 0.00, 0.02, 0.03, 9.00, 12.00]);  data.addRow(["'03:55:00'", 0.00, 0.00, 0.03, 0.03, 14.00, 10.00]);  data.addRow(["'04:00:00'", 0.00, 0.00, 0.03, 0.02, 17.00, 15.00]);  data.addRow(["'04:05:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 13.00]);  data.addRow(["'04:10:00'", 0.00, 0.00, 0.03, 0.03, 18.00, 14.00]);  data.addRow(["'04:15:00'", 0.00, 0.00, 0.03, 0.03, 14.00, 13.00]);  data.addRow(["'04:20:00'", 0.00, 0.00, 0.03, 0.03, 16.00, 16.00]);  data.addRow(["'04:25:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 12.00]);  data.addRow(["'04:30:00'", 0.00, 0.00, 0.03, 0.03, 17.00, 14.00]);  data.addRow(["'04:35:00'", 0.00, 0.00, 0.02, 0.02, 15.00, 14.00]);  data.addRow(["'04:40:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 10.00]);  data.addRow(["'04:45:00'", 0.00, 0.00, 0.02, 0.02, 14.00, 14.00]);  data.addRow(["'04:50:00'", 0.00, 0.00, 0.01, 0.02, 13.00, 14.00]);  data.addRow(["'04:55:00'", 0.00, 0.00, 0.02, 0.02, 17.00, 11.00]);  data.addRow(["'05:00:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 14.00]);  data.addRow(["'05:05:00'", 0.00, 0.00, 0.02, 0.03, 13.00, 12.00]);  data.addRow(["'05:10:00'", 0.00, 0.00, 0.02, 0.03, 16.00, 14.00]);  data.addRow(["'05:15:00'", 0.00, 0.00, 0.02, 0.03, 9.00, 15.00]);  data.addRow(["'05:20:00'", 0.00, 0.00, 0.02, 0.02, 15.00, 13.00]);  data.addRow(["'05:25:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 11.00]);  data.addRow(["'05:30:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 14.00]);  data.addRow(["'05:35:00'", 0.00, 0.00, 0.01, 0.02, 9.00, 11.00]);  data.addRow(["'05:40:00'", 0.00, 0.00, 0.02, 0.03, 10.00, 13.00]);  data.addRow(["'05:45:00'", 0.00, 0.00, 0.03, 0.02, 14.00, 12.00]);  data.addRow(["'05:50:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 10.00]);  data.addRow(["'05:55:00'", 0.00, 0.00, 0.02, 0.02, 13.00, 12.00]);  data.addRow(["'06:00:00'", 0.00, 0.00, 0.02, 0.03, 12.00, 15.00]);  data.addRow(["'06:05:00'", 0.00, 0.00, 0.03, 0.02, 14.00, 13.00]);  data.addRow(["'06:10:00'", 0.00, 0.00, 0.02, 0.02, 16.00, 15.00]);  data.addRow(["'06:15:00'", 0.00, 0.00, 0.02, 0.02, 12.00, 12.00]);  data.addRow(["'06:20:00'", 0.00, 0.00, 0.03, 0.03, 12.00, 10.00]);  data.addRow(["'06:25:00'", 0.00, 0.00, 0.03, 0.02, 16.00, 16.00]);  data.addRow(["'06:30:00'", 0.00, 0.00, 0.02, 0.02, 14.00, 7.00]);  data.addRow(["'06:35:00'", 0.00, 0.00, 0.03, 0.03, 14.00, 14.00]);  data.addRow(["'06:40:00'", 0.00, 0.00, 0.02, 0.02, 10.00, 11.00]);  data.addRow(["'06:45:00'", 0.00, 0.00, 0.03, 0.02, 15.00, 13.00]);  data.addRow(["'06:50:00'", 0.00, 0.00, 0.02, 0.02, 15.00, 11.00]);  data.addRow(["'06:55:00'", 0.00, 0.00, 0.03, 0.02, 15.00, 9.00]);  data.addRow(["'07:00:00'", 0.00, 0.00, 0.03, 0.02, 11.00, 11.00]);  data.addRow(["'07:05:00'", 0.00, 0.00, 0.02, 0.02, 11.00, 10.00]);  data.addRow(["'07:10:00'", 0.00, 0.00, 0.02, 0.03, 12.00, 14.00]);  data.addRow(["'07:15:00'", 0.00, 0.00, 0.02, 0.03, 12.00, 13.00]);  data.addRow(["'07:20:00'", 0.00, 0.01, 0.04, 0.04, 17.00, 16.00]);  data.addRow(["'07:25:00'", 0.00, 0.00, 0.02, 0.01, 14.00, 10.00]);  data.addRow(["'07:30:00'", 0.00, 0.00, 0.02, 0.03, 11.00, 10.00]);  data.addRow(["'07:35:00'", 0.00, 0.00, 0.03, 0.02, 16.00, 14.00]);  data.addRow(["'07:40:00'", 0.00, 0.00, 0.03, 0.02, 14.00, 13.00]);  data.addRow(["'07:45:00'", 0.00, 0.00, 0.02, 0.02, 9.00, 11.00]);  data.addRow(["'07:50:00'", 0.00, 0.00, 0.03, 0.02, 10.00, 10.00]);  data.addRow(["'07:55:00'", 0.00, 0.00, 0.03, 0.02, 10.00, 11.00]);  data.addRow(["'08:00:00'", 0.00, 0.00, 0.02, 0.02, 6.00, 5.00]);  data.addRow(["'08:05:00'", 0.00, 0.00, 0.03, 0.03, 6.00, 5.00]);  data.addRow(["'08:10:00'", 0.00, 0.00, 0.01, 0.03, 6.00, 7.00]);  data.addRow(["'08:15:00'", 0.00, 0.00, 0.04, 0.02, 6.00, 7.00]);  data.addRow(["'08:20:00'", 0.00, 0.00, 0.01, 0.03, 4.00, 4.00]);  data.addRow(["'08:25:00'", 0.00, 0.00, 0.04, 0.03, 8.00, 5.00]);  data.addRow(["'08:30:00'", 0.00, 0.00, 0.02, 0.00, 3.00, 2.00]);  data.addRow(["'08:35:00'", 0.00, 0.00, 0.01, 0.00, 3.00, 3.00]);  data.addRow(["'08:40:00'", 0.00, 0.00, 0.02, 0.04, 3.00, 3.00]);  data.addRow(["'08:45:00'", 0.00, 0.00, 0.02, 0.00, 2.00, 1.00]);  data.addRow(["'08:50:00'", 0.00, 0.00, 0.03, 0.01, 5.00, 3.00]);  data.addRow(["'08:55:00'", 0.00, 0.00, 0.00, 0.01, 3.00, 4.00]);  data.addRow(["'09:00:00'", 0.00, 0.01, 0.01, 0.07, 4.00, 5.00]);  data.addRow(["'09:05:00'", 0.01, 0.00, 0.06, 0.00, 3.00, 2.00]);  data.addRow(["'09:10:00'", 0.00, 0.00, 0.01, 0.02, 5.00, 5.00]);  data.addRow(["'09:15:00'", 0.00, 0.00, 0.03, 0.01, 4.00, 4.00]);  data.addRow(["'09:20:00'", 0.01, 0.13, 0.10, 0.19, 26.00, 31.00]);  data.addRow(["'09:25:00'", 0.00, 0.01, 0.02, 0.04, 4.00, 7.00]);  data.addRow(["'09:30:00'", 0.00, 0.00, 0.01, 0.03, 3.00, 4.00]);  data.addRow(["'09:35:00'", 0.00, 0.00, 0.00, 0.02, 3.00, 3.00]);  data.addRow(["'09:40:00'", 0.01, 0.00, 0.04, 0.00, 5.00, 3.00]);  data.addRow(["'09:45:00'", 0.00, 0.04, 0.04, 0.07, 19.00, 22.00]);  data.addRow(["'09:50:00'", 0.01, 0.02, 0.06, 0.02, 16.00, 18.00]);  data.addRow(["'09:55:00'", 0.00, 0.02, 0.04, 0.07, 22.00, 19.00]);  data.addRow(["'10:00:00'", 0.00, 0.00, 0.03, 0.02, 5.00, 3.00]);  data.addRow(["'10:05:00'", 0.00, 0.00, 0.02, 0.02, 5.00, 6.00]);  data.addRow(["'10:10:00'", 0.00, 0.00, 0.03, 0.03, 7.00, 4.00]);  data.addRow(["'10:15:00'", 0.01, 0.40, 0.11, 0.31, 36.00, 34.00]);  data.addRow(["'10:20:00'", 0.01, 0.00, 0.06, 0.04, 7.00, 3.00]);  data.addRow(["'10:25:00'", 0.00, 0.00, 0.03, 0.03, 6.00, 5.00]);  data.addRow(["'10:30:00'", 0.00, 0.00, 0.01, 0.02, 5.00, 3.00]);  data.addRow(["'10:35:00'", 0.00, 0.00, 0.04, 0.03, 4.00, 8.00]);  data.addRow(["'10:40:00'", 0.00, 0.00, 0.01, 0.00, 3.00, 2.00]);  data.addRow(["'10:45:00'", 0.00, 0.00, 0.01, 0.06, 4.00, 4.00]);  data.addRow(["'10:50:00'", 0.00, 0.00, 0.01, 0.00, 6.00, 3.00]);  data.addRow(["'10:55:00'", 0.00, 0.00, 0.01, 0.02, 5.00, 5.00]);  data.addRow(["'11:00:00'", 0.00, 0.00, 0.00, 0.02, 4.00, 1.00]);  data.addRow(["'11:05:00'", 0.01, 0.00, 0.10, 0.03, 4.00, 5.00]);  data.addRow(["'11:10:00'", 0.00, 0.00, 0.00, 0.02, 2.00, 3.00]);  data.addRow(["'11:15:00'", 0.01, 0.01, 0.07, 0.02, 16.00, 14.00]);  data.addRow(["'11:20:00'", 0.00, 0.03, 0.04, 0.07, 11.00, 11.00]);  data.addRow(["'11:25:00'", 0.01, 0.11, 0.08, 0.11, 20.00, 20.00]);  data.addRow(["'11:30:00'", 0.00, 0.00, 0.00, 0.03, 2.00, 3.00]);  data.addRow(["'11:35:00'", 0.00, 0.00, 0.02, 0.01, 8.00, 3.00]);  data.addRow(["'11:40:00'", 0.00, 0.00, 0.00, 0.03, 1.00, 3.00]);  data.addRow(["'11:45:00'", 0.01, 0.00, 0.08, 0.00, 8.00, 3.00]);  data.addRow(["'11:50:00'", 0.00, 0.00, 0.02, 0.06, 4.00, 5.00]);  data.addRow(["'11:55:00'", 0.00, 0.00, 0.02, 0.02, 6.00, 3.00]);  data.addRow(["'12:00:00'", 0.00, 0.00, 0.02, 0.03, 3.00, 3.00]);  data.addRow(["'12:05:00'", 0.00, 0.00, 0.00, 0.00, 2.00, 2.00]);  data.addRow(["'12:10:00'", 0.00, 0.00, 0.02, 0.03, 5.00, 5.00]);  data.addRow(["'12:15:00'", 0.00, 0.00, 0.05, 0.01, 7.00, 4.00]);  data.addRow(["'12:20:00'", 0.00, 0.01, 0.03, 0.06, 4.00, 4.00]);  data.addRow(["'12:25:00'", 0.00, 0.00, 0.02, 0.00, 4.00, 2.00]);  data.addRow(["'12:30:00'", 0.00, 0.00, 0.01, 0.03, 5.00, 3.00]);  data.addRow(["'12:35:00'", 0.00, 0.00, 0.04, 0.03, 5.00, 3.00]);  data.addRow(["'12:40:00'", 0.00, 0.00, 0.00, 0.03, 2.00, 6.00]);  data.addRow(["'12:45:00'", 0.01, 0.00, 0.06, 0.01, 6.00, 3.00]);  data.addRow(["'12:50:00'", 0.00, 0.00, 0.00, 0.03, 3.00, 3.00]);  data.addRow(["'12:55:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]); 
	    var graphtitle="HPCf Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    