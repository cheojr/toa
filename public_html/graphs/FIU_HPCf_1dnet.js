
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",0.11, 0.09]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",0.10, 0.24]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",0.08, 0.21]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",0.09, 0.97]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",0.19, 0.29]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",0.07, 0.10]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",0.13, 0.48]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",0.09, 0.67]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",0.07, 0.14]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",0.08, 0.30]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",0.58, 0.10]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",0.06, 0.38]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",0.08, 0.52]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",0.08, 0.09]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",0.21, 0.08]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",0.08, 0.42]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",0.08, 0.39]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",0.06, 0.67]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",0.07, 0.12]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",0.08, 0.08]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",0.08, 0.50]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",0.11, 1.85]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",0.07, 0.09]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",0.06, 0.17]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",0.10, 0.91]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",0.10, 0.40]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",0.10, 1.16]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",0.08, 0.08]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",0.07, 0.09]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",0.07, 0.07]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",0.06, 0.13]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",0.07, 0.23]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",0.07, 0.09]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",0.09, 0.28]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",0.08, 0.16]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",0.07, 0.08]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",0.07, 0.21]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",0.07, 0.15]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",0.09, 0.25]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",0.09, 0.09]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",0.10, 1.55]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",0.08, 0.14]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",0.10, 0.48]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",0.09, 0.14]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",0.09, 0.09]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",0.56, 0.09]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",0.08, 0.08]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",0.08, 0.12]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",0.07, 0.25]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",0.07, 0.15]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",0.07, 0.20]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",0.08, 0.30]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",0.08, 0.09]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",0.07, 0.79]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",0.08, 0.21]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",0.07, 0.07]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",0.57, 0.10]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",0.08, 0.09]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",0.08, 0.08]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",0.32, 0.12]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",0.32, 0.11]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",1.76, 0.10]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",0.10, 1.25]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",0.09, 0.09]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",0.07, 0.10]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",0.07, 0.16]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",0.08, 0.12]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",0.08, 0.06]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",0.56, 0.09]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",0.07, 0.13]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",0.08, 0.08]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",0.07, 0.09]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",0.10, 0.09]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",0.07, 0.06]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",0.07, 0.08]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",0.08, 0.09]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",0.07, 0.08]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",0.08, 0.08]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",0.07, 0.13]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",0.08, 0.07]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",0.53, 0.10]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",0.08, 0.08]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",0.06, 0.08]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",0.13, 0.36]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",0.09, 0.22]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",0.08, 0.07]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",0.07, 0.08]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",0.08, 0.07]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",0.08, 0.08]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",0.08, 0.07]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",0.07, 0.08]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",0.06, 0.09]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",0.55, 0.09]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",0.09, 0.09]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",0.08, 0.07]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",0.08, 0.07]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",0.07, 0.07]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",0.07, 0.08]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",0.08, 0.08]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",0.08, 0.08]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",0.09, 0.07]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",0.07, 0.08]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",0.09, 0.07]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",0.07, 0.14]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",0.06, 0.12]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",0.07, 0.08]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",0.10, 1.25]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",0.08, 0.22]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",0.08, 0.09]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",1.22, 0.12]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",0.07, 0.10]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",0.08, 0.08]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",0.07, 0.11]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",0.12, 0.67]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",0.10, 0.09]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",0.56, 0.10]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",0.12, 0.08]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",0.06, 0.09]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",0.08, 0.07]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",0.06, 0.27]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",0.08, 0.09]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",0.07, 0.19]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",0.09, 0.39]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",0.06, 0.08]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",0.06, 0.10]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",0.07, 0.07]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",0.08, 0.27]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",0.08, 0.06]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",0.07, 0.10]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",0.07, 0.07]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",0.07, 0.07]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",0.09, 0.15]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",0.09, 0.10]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",0.07, 0.07]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",0.07, 0.23]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",0.07, 0.07]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",0.06, 0.07]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",0.08, 0.23]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",0.09, 0.12]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",0.10, 0.08]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",0.09, 0.14]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",0.07, 0.08]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",0.07, 0.41]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",0.09, 0.52]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",0.06, 0.07]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",0.08, 0.10]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",0.08, 0.15]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",0.07, 0.17]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",0.07, 0.09]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",0.07, 0.08]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",0.55, 0.33]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",0.09, 0.08]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",0.07, 0.21]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",0.09, 0.22]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",0.07, 0.10]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",0.08, 0.15]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",0.08, 0.07]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",0.08, 0.07]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",1.33, 0.11]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",0.07, 0.13]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",0.08, 0.07]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",0.07, 0.08]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",1.85, 2.36]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",0.08, 0.07]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",0.07, 0.09]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",1.40, 0.11]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",0.09, 0.08]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",1.31, 0.53]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",0.07, 0.07]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",0.07, 0.12]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",0.07, 0.07]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",0.08, 0.08]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",0.08, 0.14]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",1.56, 0.56]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",0.12, 0.16]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",0.08, 0.15]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",0.09, 0.35]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",0.14, 0.08]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",0.08, 0.70]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",1.01, 0.09]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",0.07, 0.10]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",0.07, 0.08]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",0.08, 0.09]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",0.07, 0.07]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",0.09, 0.57]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",1.46, 0.19]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",0.09, 0.18]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",0.07, 0.16]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",0.07, 0.12]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",0.07, 0.07]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",0.05, 0.12]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",0.07, 0.23]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",0.07, 0.09]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",0.09, 0.35]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",0.09, 0.11]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",0.07, 0.29]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",0.07, 0.07]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",0.55, 0.08]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",0.08, 0.08]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",0.06, 0.06]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",0.07, 0.18]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",0.06, 0.14]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",0.08, 0.06]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",0.09, 0.36]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",0.08, 0.08]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",0.06, 0.12]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",0.24, 0.08]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",0.07, 0.11]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",0.09, 0.25]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",0.08, 0.44]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",0.10, 0.14]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",0.09, 0.45]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",0.07, 0.11]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",1.01, 0.10]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",0.08, 0.20]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",0.10, 0.90]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",0.13, 2.70]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",0.12, 1.26]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",0.07, 0.33]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",0.09, 1.06]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",0.08, 0.21]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",0.10, 0.22]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",1.09, 0.09]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",0.09, 0.34]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",0.08, 0.67]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",0.49, 0.51]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",0.13, 2.57]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",0.07, 0.09]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",0.07, 0.11]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",0.09, 0.64]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",0.09, 0.71]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",0.32, 0.25]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",0.07, 0.28]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",0.58, 0.10]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",0.08, 0.65]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",0.08, 0.09]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",0.09, 0.42]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",0.08, 0.59]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",0.09, 0.50]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",0.08, 0.17]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",0.11, 2.01]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",0.13, 1.64]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",0.09, 0.84]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",0.08, 0.53]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",0.07, 0.22]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",0.59, 0.45]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",0.10, 0.52]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",0.09, 0.70]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",0.09, 0.66]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",0.09, 0.29]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",0.20, 2.67]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",0.08, 0.19]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",0.10, 1.02]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",0.11, 0.85]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",0.06, 0.25]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",1.01, 0.22]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",0.57, 1.33]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",0.10, 0.69]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",0.93, 1.66]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",0.20, 0.11]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",0.14, 3.02]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",0.07, 0.17]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",0.08, 0.21]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",0.08, 0.17]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",0.10, 0.75]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",0.08, 0.33]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",0.08, 0.20]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",0.09, 0.18]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",0.08, 0.18]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",0.09, 0.23]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",0.09, 0.27]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",0.13, 0.08]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",0.08, 0.27]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",0.08, 0.39]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",0.08, 0.16]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",0.07, 0.12]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",0.07, 0.09]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",0.08, 0.29]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",0.08, 2.28]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",0.10, 1.88]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",0.09, 0.81]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",0.08, 0.30]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",0.07, 0.09]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",0.08, 0.19]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",0.11, 0.36]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",7.59, 0.65]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU to HPCf Traffic Network Max: 7.59 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='7'

	
        
      
	