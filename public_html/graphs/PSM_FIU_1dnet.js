
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 0.11, 4.73]);  data.addRow(["'13:10:00'", 0.14, 1.56]);  data.addRow(["'13:15:00'", 0.14, 1.59]);  data.addRow(["'13:20:00'", 0.39, 2.83]);  data.addRow(["'13:25:00'", 0.35, 5.42]);  data.addRow(["'13:30:00'", 0.44, 5.10]);  data.addRow(["'13:35:00'", 0.26, 5.70]);  data.addRow(["'13:40:00'", 1.27, 1.70]);  data.addRow(["'13:45:00'", 2.26, 2.12]);  data.addRow(["'13:50:00'", 0.28, 1.16]);  data.addRow(["'13:55:00'", 0.41, 3.11]);  data.addRow(["'14:00:00'", 0.44, 3.09]);  data.addRow(["'14:05:00'", 0.97, 4.05]);  data.addRow(["'14:10:00'", 0.22, 3.14]);  data.addRow(["'14:15:00'", 0.24, 4.32]);  data.addRow(["'14:20:00'", 0.59, 1.51]);  data.addRow(["'14:25:00'", 0.43, 2.77]);  data.addRow(["'14:30:00'", 0.24, 2.42]);  data.addRow(["'14:35:00'", 0.20, 3.65]);  data.addRow(["'14:40:00'", 7.92, 4.42]);  data.addRow(["'14:45:00'", 0.85, 1.89]);  data.addRow(["'14:50:00'", 0.21, 2.81]);  data.addRow(["'14:55:00'", 1.61, 2.24]);  data.addRow(["'15:00:00'", 0.15, 1.75]);  data.addRow(["'15:05:00'", 1.85, 3.96]);  data.addRow(["'15:10:00'", 0.22, 2.20]);  data.addRow(["'15:15:00'", 0.37, 2.58]);  data.addRow(["'15:20:00'", 0.17, 2.17]);  data.addRow(["'15:25:00'", 1.38, 4.09]);  data.addRow(["'15:30:00'", 0.94, 2.12]);  data.addRow(["'15:35:00'", 0.22, 1.96]);  data.addRow(["'15:40:00'", 0.51, 1.58]);  data.addRow(["'15:45:00'", 1.41, 1.29]);  data.addRow(["'15:50:00'", 0.63, 4.17]);  data.addRow(["'15:55:00'", 0.30, 3.20]);  data.addRow(["'16:00:00'", 0.38, 1.75]);  data.addRow(["'16:05:00'", 0.13, 1.33]);  data.addRow(["'16:10:00'", 0.22, 1.38]);  data.addRow(["'16:15:00'", 0.12, 1.66]);  data.addRow(["'16:20:00'", 0.46, 8.93]);  data.addRow(["'16:25:00'", 0.12, 1.97]);  data.addRow(["'16:30:00'", 0.05, 0.73]);  data.addRow(["'16:35:00'", 0.12, 1.68]);  data.addRow(["'16:40:00'", 0.56, 2.81]);  data.addRow(["'16:45:00'", 0.07, 0.87]);  data.addRow(["'16:50:00'", 0.36, 0.62]);  data.addRow(["'16:55:00'", 0.21, 0.22]);  data.addRow(["'17:00:00'", 0.15, 3.68]);  data.addRow(["'17:05:00'", 0.14, 0.62]);  data.addRow(["'17:10:00'", 0.02, 0.08]);  data.addRow(["'17:15:00'", 0.05, 0.23]);  data.addRow(["'17:20:00'", 0.12, 2.66]);  data.addRow(["'17:25:00'", 0.27, 0.76]);  data.addRow(["'17:30:00'", 0.05, 0.58]);  data.addRow(["'17:35:00'", 0.05, 0.11]);  data.addRow(["'17:40:00'", 0.02, 0.16]);  data.addRow(["'17:45:00'", 0.26, 6.43]);  data.addRow(["'17:50:00'", 0.91, 3.85]);  data.addRow(["'17:55:00'", 0.02, 0.12]);  data.addRow(["'18:00:00'", 0.68, 0.67]);  data.addRow(["'18:05:00'", 0.16, 2.99]);  data.addRow(["'18:10:00'", 0.08, 0.67]);  data.addRow(["'18:15:00'", 0.15, 1.28]);  data.addRow(["'18:20:00'", 0.03, 0.36]);  data.addRow(["'18:25:00'", 0.11, 0.36]);  data.addRow(["'18:30:00'", 0.02, 0.30]);  data.addRow(["'18:35:00'", 0.02, 0.45]);  data.addRow(["'18:40:00'", 0.02, 0.05]);  data.addRow(["'18:45:00'", 0.02, 0.27]);  data.addRow(["'18:50:00'", 0.04, 0.19]);  data.addRow(["'18:55:00'", 0.06, 1.72]);  data.addRow(["'19:00:00'", 0.05, 0.55]);  data.addRow(["'19:05:00'", 0.10, 0.71]);  data.addRow(["'19:10:00'", 0.02, 0.06]);  data.addRow(["'19:15:00'", 0.24, 0.66]);  data.addRow(["'19:20:00'", 0.02, 0.31]);  data.addRow(["'19:25:00'", 3.52, 3.16]);  data.addRow(["'19:30:00'", 0.35, 1.76]);  data.addRow(["'19:35:00'", 0.08, 2.76]);  data.addRow(["'19:40:00'", 0.06, 0.06]);  data.addRow(["'19:45:00'", 0.02, 0.06]);  data.addRow(["'19:50:00'", 0.02, 0.11]);  data.addRow(["'19:55:00'", 0.10, 0.32]);  data.addRow(["'20:00:00'", 0.04, 0.24]);  data.addRow(["'20:05:00'", 0.08, 0.88]);  data.addRow(["'20:10:00'", 0.06, 0.82]);  data.addRow(["'20:15:00'", 0.03, 0.11]);  data.addRow(["'20:20:00'", 0.01, 0.09]);  data.addRow(["'20:25:00'", 0.04, 0.49]);  data.addRow(["'20:30:00'", 0.02, 0.03]);  data.addRow(["'20:35:00'", 0.02, 0.05]);  data.addRow(["'20:40:00'", 0.04, 0.10]);  data.addRow(["'20:45:00'", 0.02, 0.22]);  data.addRow(["'20:50:00'", 0.03, 0.44]);  data.addRow(["'20:55:00'", 0.06, 0.54]);  data.addRow(["'21:00:00'", 0.19, 0.03]);  data.addRow(["'21:05:00'", 0.05, 0.07]);  data.addRow(["'21:10:00'", 0.03, 0.32]);  data.addRow(["'21:15:00'", 0.01, 0.05]);  data.addRow(["'21:20:00'", 0.01, 0.06]);  data.addRow(["'21:25:00'", 0.02, 0.09]);  data.addRow(["'21:30:00'", 0.05, 0.40]);  data.addRow(["'21:35:00'", 0.04, 0.24]);  data.addRow(["'21:40:00'", 0.07, 0.61]);  data.addRow(["'21:45:00'", 0.08, 1.02]);  data.addRow(["'21:50:00'", 0.03, 0.48]);  data.addRow(["'21:55:00'", 0.10, 0.86]);  data.addRow(["'22:00:00'", 0.13, 0.41]);  data.addRow(["'22:05:00'", 0.13, 3.37]);  data.addRow(["'22:10:00'", 0.06, 1.22]);  data.addRow(["'22:15:00'", 0.06, 1.32]);  data.addRow(["'22:20:00'", 0.01, 0.12]);  data.addRow(["'22:25:00'", 0.01, 0.04]);  data.addRow(["'22:30:00'", 0.00, 0.00]);  data.addRow(["'22:35:00'", 0.02, 0.14]);  data.addRow(["'22:40:00'", 0.01, 0.05]);  data.addRow(["'22:45:00'", 0.01, 0.28]);  data.addRow(["'22:50:00'", 0.01, 0.04]);  data.addRow(["'22:55:00'", 0.01, 0.05]);  data.addRow(["'23:00:00'", 0.18, 0.01]);  data.addRow(["'23:05:00'", 0.02, 0.08]);  data.addRow(["'23:10:00'", 0.01, 0.11]);  data.addRow(["'23:15:00'", 0.00, 0.00]);  data.addRow(["'23:20:00'", 0.13, 3.44]);  data.addRow(["'23:25:00'", 0.23, 6.25]);  data.addRow(["'23:30:00'", 0.00, 0.05]);  data.addRow(["'23:35:00'", 0.00, 0.04]);  data.addRow(["'23:40:00'", 0.01, 0.16]);  data.addRow(["'23:45:00'", 0.01, 0.01]);  data.addRow(["'23:50:00'", 0.01, 0.04]);  data.addRow(["'23:55:00'", 0.00, 0.01]);  data.addRow(["'00:00:00'", 0.01, 0.03]);  data.addRow(["'00:05:00'", 0.01, 0.03]);  data.addRow(["'00:10:00'", 0.02, 0.02]);  data.addRow(["'00:15:00'", 0.01, 0.00]);  data.addRow(["'00:20:00'", 0.00, 0.04]);  data.addRow(["'00:25:00'", 0.01, 0.01]);  data.addRow(["'00:30:00'", 0.01, 0.00]);  data.addRow(["'00:35:00'", 0.01, 0.08]);  data.addRow(["'00:40:00'", 0.01, 0.01]);  data.addRow(["'00:45:00'", 0.01, 0.06]);  data.addRow(["'00:50:00'", 0.00, 0.03]);  data.addRow(["'00:55:00'", 0.00, 0.00]);  data.addRow(["'01:00:00'", 0.00, 0.00]);  data.addRow(["'01:05:00'", 0.00, 0.03]);  data.addRow(["'01:10:00'", 0.00, 0.00]);  data.addRow(["'01:15:00'", 0.00, 0.00]);  data.addRow(["'01:20:00'", 0.55, 0.04]);  data.addRow(["'01:25:00'", 0.00, 0.04]);  data.addRow(["'01:30:00'", 0.01, 0.03]);  data.addRow(["'01:35:00'", 0.01, 0.04]);  data.addRow(["'01:40:00'", 0.00, 0.02]);  data.addRow(["'01:45:00'", 0.00, 0.00]);  data.addRow(["'01:50:00'", 0.00, 0.03]);  data.addRow(["'01:55:00'", 0.00, 0.00]);  data.addRow(["'02:00:00'", 0.00, 0.00]);  data.addRow(["'02:05:00'", 0.00, 0.03]);  data.addRow(["'02:10:00'", 0.00, 0.02]);  data.addRow(["'02:15:00'", 0.00, 0.01]);  data.addRow(["'02:20:00'", 0.00, 0.04]);  data.addRow(["'02:25:00'", 0.01, 0.17]);  data.addRow(["'02:30:00'", 0.00, 0.01]);  data.addRow(["'02:35:00'", 0.00, 0.04]);  data.addRow(["'02:40:00'", 0.02, 0.01]);  data.addRow(["'02:45:00'", 0.01, 0.01]);  data.addRow(["'02:50:00'", 0.01, 0.04]);  data.addRow(["'02:55:00'", 0.00, 0.00]);  data.addRow(["'03:00:00'", 0.00, 0.00]);  data.addRow(["'03:05:00'", 0.01, 0.03]);  data.addRow(["'03:10:00'", 0.00, 0.00]);  data.addRow(["'03:15:00'", 0.00, 0.00]);  data.addRow(["'03:20:00'", 0.00, 0.03]);  data.addRow(["'03:25:00'", 0.00, 0.00]);  data.addRow(["'03:30:00'", 0.00, 0.00]);  data.addRow(["'03:35:00'", 0.00, 0.00]);  data.addRow(["'03:40:00'", 0.00, 0.00]);  data.addRow(["'03:45:00'", 0.00, 0.00]);  data.addRow(["'03:50:00'", 0.00, 0.00]);  data.addRow(["'03:55:00'", 0.00, 0.00]);  data.addRow(["'04:00:00'", 0.00, 0.00]);  data.addRow(["'04:05:00'", 0.00, 0.01]);  data.addRow(["'04:10:00'", 0.00, 0.00]);  data.addRow(["'04:15:00'", 0.00, 0.03]);  data.addRow(["'04:20:00'", 0.00, 0.00]);  data.addRow(["'04:25:00'", 0.00, 0.00]);  data.addRow(["'04:30:00'", 0.00, 0.01]);  data.addRow(["'04:35:00'", 0.00, 0.00]);  data.addRow(["'04:40:00'", 0.00, 0.01]);  data.addRow(["'04:45:00'", 0.00, 0.00]);  data.addRow(["'04:50:00'", 0.00, 0.00]);  data.addRow(["'04:55:00'", 0.00, 0.03]);  data.addRow(["'05:00:00'", 0.00, 0.01]);  data.addRow(["'05:05:00'", 0.00, 0.01]);  data.addRow(["'05:10:00'", 0.00, 0.00]);  data.addRow(["'05:15:00'", 0.00, 0.00]);  data.addRow(["'05:20:00'", 0.00, 0.00]);  data.addRow(["'05:25:00'", 0.00, 0.00]);  data.addRow(["'05:30:00'", 0.00, 0.00]);  data.addRow(["'05:35:00'", 0.00, 0.01]);  data.addRow(["'05:40:00'", 0.00, 0.00]);  data.addRow(["'05:45:00'", 0.02, 0.04]);  data.addRow(["'05:50:00'", 0.00, 0.00]);  data.addRow(["'05:55:00'", 0.00, 0.01]);  data.addRow(["'06:00:00'", 0.03, 0.02]);  data.addRow(["'06:05:00'", 0.00, 0.01]);  data.addRow(["'06:10:00'", 0.00, 0.00]);  data.addRow(["'06:15:00'", 0.01, 0.03]);  data.addRow(["'06:20:00'", 0.00, 0.00]);  data.addRow(["'06:25:00'", 0.00, 0.00]);  data.addRow(["'06:30:00'", 0.00, 0.03]);  data.addRow(["'06:35:00'", 0.01, 0.00]);  data.addRow(["'06:40:00'", 0.00, 0.01]);  data.addRow(["'06:45:00'", 0.00, 0.02]);  data.addRow(["'06:50:00'", 0.00, 0.00]);  data.addRow(["'06:55:00'", 0.02, 0.02]);  data.addRow(["'07:00:00'", 0.00, 0.04]);  data.addRow(["'07:05:00'", 0.00, 0.00]);  data.addRow(["'07:10:00'", 0.00, 0.02]);  data.addRow(["'07:15:00'", 0.01, 0.08]);  data.addRow(["'07:20:00'", 0.00, 0.01]);  data.addRow(["'07:25:00'", 0.00, 0.00]);  data.addRow(["'07:30:00'", 0.01, 0.08]);  data.addRow(["'07:35:00'", 0.03, 0.13]);  data.addRow(["'07:40:00'", 1.55, 0.03]);  data.addRow(["'07:45:00'", 0.10, 5.27]);  data.addRow(["'07:50:00'", 0.01, 0.05]);  data.addRow(["'07:55:00'", 0.06, 0.11]);  data.addRow(["'08:00:00'", 0.05, 0.23]);  data.addRow(["'08:05:00'", 0.06, 0.54]);  data.addRow(["'08:10:00'", 0.06, 0.60]);  data.addRow(["'08:15:00'", 0.34, 5.37]);  data.addRow(["'08:20:00'", 0.17, 5.27]);  data.addRow(["'08:25:00'", 0.19, 0.77]);  data.addRow(["'08:30:00'", 0.48, 0.91]);  data.addRow(["'08:35:00'", 0.09, 1.55]);  data.addRow(["'08:40:00'", 0.06, 0.53]);  data.addRow(["'08:45:00'", 0.11, 1.95]);  data.addRow(["'08:50:00'", 0.58, 1.37]);  data.addRow(["'08:55:00'", 0.04, 0.21]);  data.addRow(["'09:00:00'", 0.24, 5.20]);  data.addRow(["'09:05:00'", 0.03, 0.09]);  data.addRow(["'09:10:00'", 0.39, 3.69]);  data.addRow(["'09:15:00'", 0.30, 0.16]);  data.addRow(["'09:20:00'", 1.48, 17.17]);  data.addRow(["'09:25:00'", 0.14, 1.67]);  data.addRow(["'09:30:00'", 0.19, 0.43]);  data.addRow(["'09:35:00'", 0.20, 1.19]);  data.addRow(["'09:40:00'", 0.06, 0.61]);  data.addRow(["'09:45:00'", 0.28, 3.19]);  data.addRow(["'09:50:00'", 1.10, 5.65]);  data.addRow(["'09:55:00'", 0.24, 4.10]);  data.addRow(["'10:00:00'", 0.26, 2.47]);  data.addRow(["'10:05:00'", 0.09, 1.07]);  data.addRow(["'10:10:00'", 0.06, 0.36]);  data.addRow(["'10:15:00'", 0.11, 0.99]);  data.addRow(["'10:20:00'", 1.78, 2.01]);  data.addRow(["'10:25:00'", 0.77, 1.75]);  data.addRow(["'10:30:00'", 0.58, 5.68]);  data.addRow(["'10:35:00'", 0.25, 0.86]);  data.addRow(["'10:40:00'", 0.20, 1.43]);  data.addRow(["'10:45:00'", 0.11, 1.18]);  data.addRow(["'10:50:00'", 0.74, 47.92]);  data.addRow(["'10:55:00'", 1.35, 40.22]);  data.addRow(["'11:00:00'", 1.84, 41.08]);  data.addRow(["'11:05:00'", 0.70, 5.70]);  data.addRow(["'11:10:00'", 0.16, 1.43]);  data.addRow(["'11:15:00'", 1.06, 4.08]);  data.addRow(["'11:20:00'", 0.19, 1.93]);  data.addRow(["'11:25:00'", 1.16, 58.34]);  data.addRow(["'11:30:00'", 0.71, 1.55]);  data.addRow(["'11:35:00'", 0.60, 1.19]);  data.addRow(["'11:40:00'", 0.14, 1.59]);  data.addRow(["'11:45:00'", 0.20, 1.32]);  data.addRow(["'11:50:00'", 0.79, 22.97]);  data.addRow(["'11:55:00'", 1.40, 50.28]);  data.addRow(["'12:00:00'", 2.23, 61.62]);  data.addRow(["'12:05:00'", 0.21, 1.73]);  data.addRow(["'12:10:00'", 0.61, 1.59]);  data.addRow(["'12:15:00'", 0.20, 2.12]);  data.addRow(["'12:20:00'", 0.32, 1.17]);  data.addRow(["'12:25:00'", 0.16, 2.59]);  data.addRow(["'12:30:00'", 0.11, 2.21]);  data.addRow(["'12:35:00'", 1.15, 57.11]);  data.addRow(["'12:40:00'", 2.21, 29.74]);  data.addRow(["'12:45:00'", 0.44, 2.98]);  data.addRow(["'12:50:00'", 1.28, 27.61]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 61.62 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='61'

	
        
      
	