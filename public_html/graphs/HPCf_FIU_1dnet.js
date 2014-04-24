
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 0.59, 0.02]);  data.addRow(["'13:10:00'", 0.08, 0.01]);  data.addRow(["'13:15:00'", 0.07, 0.01]);  data.addRow(["'13:20:00'", 0.31, 0.01]);  data.addRow(["'13:25:00'", 0.13, 0.01]);  data.addRow(["'13:30:00'", 0.17, 0.01]);  data.addRow(["'13:35:00'", 0.54, 0.02]);  data.addRow(["'13:40:00'", 0.21, 0.01]);  data.addRow(["'13:45:00'", 0.49, 0.02]);  data.addRow(["'13:50:00'", 0.07, 0.02]);  data.addRow(["'13:55:00'", 0.28, 0.02]);  data.addRow(["'14:00:00'", 1.29, 0.50]);  data.addRow(["'14:05:00'", 0.80, 0.07]);  data.addRow(["'14:10:00'", 0.01, 0.00]);  data.addRow(["'14:15:00'", 0.27, 0.02]);  data.addRow(["'14:20:00'", 0.05, 0.08]);  data.addRow(["'14:25:00'", 0.03, 0.01]);  data.addRow(["'14:30:00'", 1.70, 0.08]);  data.addRow(["'14:35:00'", 0.43, 0.03]);  data.addRow(["'14:40:00'", 0.78, 0.02]);  data.addRow(["'14:45:00'", 0.20, 0.02]);  data.addRow(["'14:50:00'", 0.33, 0.03]);  data.addRow(["'14:55:00'", 0.09, 0.01]);  data.addRow(["'15:00:00'", 0.15, 0.02]);  data.addRow(["'15:05:00'", 0.13, 0.01]);  data.addRow(["'15:10:00'", 0.03, 0.01]);  data.addRow(["'15:15:00'", 0.01, 0.01]);  data.addRow(["'15:20:00'", 0.08, 0.01]);  data.addRow(["'15:25:00'", 0.17, 0.01]);  data.addRow(["'15:30:00'", 0.13, 0.02]);  data.addRow(["'15:35:00'", 0.06, 0.02]);  data.addRow(["'15:40:00'", 3.36, 0.10]);  data.addRow(["'15:45:00'", 0.81, 0.02]);  data.addRow(["'15:50:00'", 0.94, 0.02]);  data.addRow(["'15:55:00'", 0.28, 0.02]);  data.addRow(["'16:00:00'", 0.83, 0.02]);  data.addRow(["'16:05:00'", 0.11, 0.01]);  data.addRow(["'16:10:00'", 1.09, 0.04]);  data.addRow(["'16:15:00'", 0.14, 0.02]);  data.addRow(["'16:20:00'", 0.38, 0.04]);  data.addRow(["'16:25:00'", 0.07, 0.02]);  data.addRow(["'16:30:00'", 0.01, 0.03]);  data.addRow(["'16:35:00'", 0.39, 0.03]);  data.addRow(["'16:40:00'", 0.06, 0.01]);  data.addRow(["'16:45:00'", 0.01, 0.01]);  data.addRow(["'16:50:00'", 0.01, 0.01]);  data.addRow(["'16:55:00'", 0.01, 0.00]);  data.addRow(["'17:00:00'", 0.01, 0.44]);  data.addRow(["'17:05:00'", 0.01, 0.02]);  data.addRow(["'17:10:00'", 0.00, 0.01]);  data.addRow(["'17:15:00'", 0.01, 0.01]);  data.addRow(["'17:20:00'", 0.04, 0.02]);  data.addRow(["'17:25:00'", 0.16, 0.05]);  data.addRow(["'17:30:00'", 0.08, 0.00]);  data.addRow(["'17:35:00'", 0.01, 0.01]);  data.addRow(["'17:40:00'", 0.38, 0.02]);  data.addRow(["'17:45:00'", 0.00, 0.01]);  data.addRow(["'17:50:00'", 0.01, 0.00]);  data.addRow(["'17:55:00'", 0.07, 0.01]);  data.addRow(["'18:00:00'", 0.06, 0.08]);  data.addRow(["'18:05:00'", 0.12, 0.02]);  data.addRow(["'18:10:00'", 0.01, 0.01]);  data.addRow(["'18:15:00'", 0.12, 0.01]);  data.addRow(["'18:20:00'", 0.03, 0.00]);  data.addRow(["'18:25:00'", 0.01, 0.02]);  data.addRow(["'18:30:00'", 0.01, 0.01]);  data.addRow(["'18:35:00'", 0.07, 0.01]);  data.addRow(["'18:40:00'", 0.99, 0.03]);  data.addRow(["'18:45:00'", 0.01, 0.01]);  data.addRow(["'18:50:00'", 0.15, 0.01]);  data.addRow(["'18:55:00'", 0.12, 0.01]);  data.addRow(["'19:00:00'", 0.01, 0.05]);  data.addRow(["'19:05:00'", 0.01, 0.01]);  data.addRow(["'19:10:00'", 0.01, 0.01]);  data.addRow(["'19:15:00'", 0.01, 0.01]);  data.addRow(["'19:20:00'", 0.06, 0.00]);  data.addRow(["'19:25:00'", 0.02, 0.01]);  data.addRow(["'19:30:00'", 0.02, 0.01]);  data.addRow(["'19:35:00'", 0.00, 0.01]);  data.addRow(["'19:40:00'", 0.13, 0.01]);  data.addRow(["'19:45:00'", 6.15, 0.13]);  data.addRow(["'19:50:00'", 0.01, 0.44]);  data.addRow(["'19:55:00'", 0.01, 0.00]);  data.addRow(["'20:00:00'", 0.02, 0.01]);  data.addRow(["'20:05:00'", 0.00, 0.01]);  data.addRow(["'20:10:00'", 0.11, 0.01]);  data.addRow(["'20:15:00'", 0.02, 0.00]);  data.addRow(["'20:20:00'", 0.01, 0.00]);  data.addRow(["'20:25:00'", 0.01, 0.01]);  data.addRow(["'20:30:00'", 0.01, 0.01]);  data.addRow(["'20:35:00'", 0.01, 0.01]);  data.addRow(["'20:40:00'", 0.01, 0.00]);  data.addRow(["'20:45:00'", 0.01, 0.01]);  data.addRow(["'20:50:00'", 0.01, 0.01]);  data.addRow(["'20:55:00'", 0.03, 0.01]);  data.addRow(["'21:00:00'", 0.02, 0.01]);  data.addRow(["'21:05:00'", 0.01, 0.01]);  data.addRow(["'21:10:00'", 0.23, 0.01]);  data.addRow(["'21:15:00'", 0.01, 0.01]);  data.addRow(["'21:20:00'", 0.00, 0.01]);  data.addRow(["'21:25:00'", 0.01, 0.01]);  data.addRow(["'21:30:00'", 0.03, 0.01]);  data.addRow(["'21:35:00'", 0.18, 0.01]);  data.addRow(["'21:40:00'", 0.01, 0.01]);  data.addRow(["'21:45:00'", 0.01, 0.46]);  data.addRow(["'21:50:00'", 0.00, 0.01]);  data.addRow(["'21:55:00'", 0.01, 0.00]);  data.addRow(["'22:00:00'", 0.01, 0.07]);  data.addRow(["'22:05:00'", 0.01, 0.01]);  data.addRow(["'22:10:00'", 0.00, 0.01]);  data.addRow(["'22:15:00'", 0.01, 0.01]);  data.addRow(["'22:20:00'", 0.00, 0.00]);  data.addRow(["'22:25:00'", 0.01, 0.01]);  data.addRow(["'22:30:00'", 0.01, 0.01]);  data.addRow(["'22:35:00'", 0.00, 0.01]);  data.addRow(["'22:40:00'", 0.20, 0.01]);  data.addRow(["'22:45:00'", 0.01, 0.01]);  data.addRow(["'22:50:00'", 0.00, 0.01]);  data.addRow(["'22:55:00'", 0.38, 0.01]);  data.addRow(["'23:00:00'", 0.01, 0.00]);  data.addRow(["'23:05:00'", 1.72, 0.04]);  data.addRow(["'23:10:00'", 0.01, 0.00]);  data.addRow(["'23:15:00'", 0.01, 0.01]);  data.addRow(["'23:20:00'", 0.00, 0.00]);  data.addRow(["'23:25:00'", 0.01, 0.00]);  data.addRow(["'23:30:00'", 0.01, 0.01]);  data.addRow(["'23:35:00'", 0.01, 0.01]);  data.addRow(["'23:40:00'", 0.01, 0.01]);  data.addRow(["'23:45:00'", 0.01, 0.01]);  data.addRow(["'23:50:00'", 0.00, 0.01]);  data.addRow(["'23:55:00'", 0.01, 0.01]);  data.addRow(["'00:00:00'", 0.01, 0.01]);  data.addRow(["'00:05:00'", 0.01, 0.00]);  data.addRow(["'00:10:00'", 0.01, 0.00]);  data.addRow(["'00:15:00'", 0.01, 0.01]);  data.addRow(["'00:20:00'", 0.17, 0.01]);  data.addRow(["'00:25:00'", 0.07, 0.01]);  data.addRow(["'00:30:00'", 0.01, 0.00]);  data.addRow(["'00:35:00'", 0.05, 0.01]);  data.addRow(["'00:40:00'", 0.01, 0.44]);  data.addRow(["'00:45:00'", 0.01, 0.01]);  data.addRow(["'00:50:00'", 0.01, 0.01]);  data.addRow(["'00:55:00'", 0.03, 0.01]);  data.addRow(["'01:00:00'", 0.03, 0.01]);  data.addRow(["'01:05:00'", 0.25, 0.01]);  data.addRow(["'01:10:00'", 0.00, 0.01]);  data.addRow(["'01:15:00'", 0.27, 0.02]);  data.addRow(["'01:20:00'", 0.59, 0.17]);  data.addRow(["'01:25:00'", 0.01, 0.01]);  data.addRow(["'01:30:00'", 1.70, 0.06]);  data.addRow(["'01:35:00'", 0.01, 0.01]);  data.addRow(["'01:40:00'", 0.01, 0.45]);  data.addRow(["'01:45:00'", 0.01, 0.01]);  data.addRow(["'01:50:00'", 0.00, 0.01]);  data.addRow(["'01:55:00'", 0.01, 0.02]);  data.addRow(["'02:00:00'", 0.02, 0.07]);  data.addRow(["'02:05:00'", 0.01, 0.02]);  data.addRow(["'02:10:00'", 0.00, 0.01]);  data.addRow(["'02:15:00'", 0.01, 0.00]);  data.addRow(["'02:20:00'", 0.01, 0.01]);  data.addRow(["'02:25:00'", 0.01, 0.01]);  data.addRow(["'02:30:00'", 0.06, 0.01]);  data.addRow(["'02:35:00'", 0.00, 0.01]);  data.addRow(["'02:40:00'", 0.00, 0.01]);  data.addRow(["'02:45:00'", 0.01, 0.00]);  data.addRow(["'02:50:00'", 0.01, 0.01]);  data.addRow(["'02:55:00'", 0.01, 0.01]);  data.addRow(["'03:00:00'", 0.01, 0.01]);  data.addRow(["'03:05:00'", 0.02, 0.01]);  data.addRow(["'03:10:00'", 0.51, 0.02]);  data.addRow(["'03:15:00'", 0.07, 0.04]);  data.addRow(["'03:20:00'", 0.15, 0.01]);  data.addRow(["'03:25:00'", 0.02, 0.03]);  data.addRow(["'03:30:00'", 0.02, 0.02]);  data.addRow(["'03:35:00'", 0.01, 0.44]);  data.addRow(["'03:40:00'", 0.01, 0.01]);  data.addRow(["'03:45:00'", 0.01, 0.00]);  data.addRow(["'03:50:00'", 0.02, 0.26]);  data.addRow(["'03:55:00'", 0.00, 0.01]);  data.addRow(["'04:00:00'", 0.03, 1.27]);  data.addRow(["'04:05:00'", 0.01, 0.01]);  data.addRow(["'04:10:00'", 0.01, 0.01]);  data.addRow(["'04:15:00'", 0.02, 0.01]);  data.addRow(["'04:20:00'", 0.01, 0.02]);  data.addRow(["'04:25:00'", 0.01, 0.02]);  data.addRow(["'04:30:00'", 0.01, 0.02]);  data.addRow(["'04:35:00'", 0.12, 0.45]);  data.addRow(["'04:40:00'", 0.01, 0.01]);  data.addRow(["'04:45:00'", 0.01, 0.00]);  data.addRow(["'04:50:00'", 0.01, 0.01]);  data.addRow(["'04:55:00'", 0.00, 0.01]);  data.addRow(["'05:00:00'", 0.01, 0.01]);  data.addRow(["'05:05:00'", 0.01, 0.01]);  data.addRow(["'05:10:00'", 0.16, 0.02]);  data.addRow(["'05:15:00'", 0.01, 0.00]);  data.addRow(["'05:20:00'", 0.04, 1.23]);  data.addRow(["'05:25:00'", 0.17, 0.01]);  data.addRow(["'05:30:00'", 0.01, 0.01]);  data.addRow(["'05:35:00'", 0.20, 0.47]);  data.addRow(["'05:40:00'", 0.00, 0.01]);  data.addRow(["'05:45:00'", 0.02, 0.01]);  data.addRow(["'05:50:00'", 0.11, 0.09]);  data.addRow(["'05:55:00'", 0.01, 0.01]);  data.addRow(["'06:00:00'", 0.27, 0.02]);  data.addRow(["'06:05:00'", 0.01, 0.01]);  data.addRow(["'06:10:00'", 0.01, 0.01]);  data.addRow(["'06:15:00'", 0.02, 0.01]);  data.addRow(["'06:20:00'", 1.68, 0.05]);  data.addRow(["'06:25:00'", 0.01, 0.01]);  data.addRow(["'06:30:00'", 0.24, 0.67]);  data.addRow(["'06:35:00'", 0.10, 0.01]);  data.addRow(["'06:40:00'", 0.10, 0.01]);  data.addRow(["'06:45:00'", 1.47, 0.03]);  data.addRow(["'06:50:00'", 0.02, 0.02]);  data.addRow(["'06:55:00'", 0.06, 0.00]);  data.addRow(["'07:00:00'", 0.13, 0.04]);  data.addRow(["'07:05:00'", 0.00, 0.00]);  data.addRow(["'07:10:00'", 0.01, 0.01]);  data.addRow(["'07:15:00'", 0.01, 0.01]);  data.addRow(["'07:20:00'", 0.01, 0.01]);  data.addRow(["'07:25:00'", 0.01, 0.00]);  data.addRow(["'07:30:00'", 0.01, 0.46]);  data.addRow(["'07:35:00'", 0.01, 0.01]);  data.addRow(["'07:40:00'", 0.07, 0.02]);  data.addRow(["'07:45:00'", 0.14, 0.02]);  data.addRow(["'07:50:00'", 1.00, 0.02]);  data.addRow(["'07:55:00'", 0.48, 0.01]);  data.addRow(["'08:00:00'", 0.15, 0.02]);  data.addRow(["'08:05:00'", 1.03, 0.12]);  data.addRow(["'08:10:00'", 0.01, 0.01]);  data.addRow(["'08:15:00'", 0.01, 0.01]);  data.addRow(["'08:20:00'", 0.26, 0.01]);  data.addRow(["'08:25:00'", 0.06, 0.02]);  data.addRow(["'08:30:00'", 0.01, 0.01]);  data.addRow(["'08:35:00'", 0.15, 0.45]);  data.addRow(["'08:40:00'", 0.06, 0.01]);  data.addRow(["'08:45:00'", 0.03, 0.01]);  data.addRow(["'08:50:00'", 0.01, 0.01]);  data.addRow(["'08:55:00'", 0.12, 0.00]);  data.addRow(["'09:00:00'", 0.11, 0.01]);  data.addRow(["'09:05:00'", 0.33, 0.02]);  data.addRow(["'09:10:00'", 1.17, 0.02]);  data.addRow(["'09:15:00'", 0.01, 0.01]);  data.addRow(["'09:20:00'", 0.01, 0.01]);  data.addRow(["'09:25:00'", 0.08, 0.01]);  data.addRow(["'09:30:00'", 0.07, 0.03]);  data.addRow(["'09:35:00'", 0.02, 0.02]);  data.addRow(["'09:40:00'", 0.23, 0.01]);  data.addRow(["'09:45:00'", 0.01, 0.00]);  data.addRow(["'09:50:00'", 0.02, 0.01]);  data.addRow(["'09:55:00'", 0.12, 0.02]);  data.addRow(["'10:00:00'", 0.01, 0.01]);  data.addRow(["'10:05:00'", 0.07, 0.02]);  data.addRow(["'10:10:00'", 0.01, 0.01]);  data.addRow(["'10:15:00'", 1.65, 0.03]);  data.addRow(["'10:20:00'", 1.88, 0.05]);  data.addRow(["'10:25:00'", 0.04, 0.01]);  data.addRow(["'10:30:00'", 2.66, 0.47]);  data.addRow(["'10:35:00'", 0.26, 0.02]);  data.addRow(["'10:40:00'", 0.19, 0.01]);  data.addRow(["'10:45:00'", 1.92, 0.04]);  data.addRow(["'10:50:00'", 0.30, 0.02]);  data.addRow(["'10:55:00'", 0.05, 0.01]);  data.addRow(["'11:00:00'", 0.32, 0.01]);  data.addRow(["'11:05:00'", 0.73, 0.02]);  data.addRow(["'11:10:00'", 0.01, 0.01]);  data.addRow(["'11:15:00'", 0.06, 0.01]);  data.addRow(["'11:20:00'", 0.15, 0.01]);  data.addRow(["'11:25:00'", 0.13, 0.01]);  data.addRow(["'11:30:00'", 0.03, 0.44]);  data.addRow(["'11:35:00'", 0.02, 0.02]);  data.addRow(["'11:40:00'", 0.01, 0.03]);  data.addRow(["'11:45:00'", 0.22, 0.02]);  data.addRow(["'11:50:00'", 0.08, 0.01]);  data.addRow(["'11:55:00'", 0.97, 0.28]);  data.addRow(["'12:00:00'", 0.01, 0.01]);  data.addRow(["'12:05:00'", 0.07, 0.01]);  data.addRow(["'12:10:00'", 0.62, 0.02]);  data.addRow(["'12:15:00'", 0.01, 0.01]);  data.addRow(["'12:20:00'", 0.08, 0.01]);  data.addRow(["'12:25:00'", 0.04, 0.01]);  data.addRow(["'12:30:00'", 0.45, 0.46]);  data.addRow(["'12:35:00'", 0.09, 0.01]);  data.addRow(["'12:40:00'", 0.13, 0.03]);  data.addRow(["'12:45:00'", 0.10, 0.01]);  data.addRow(["'12:50:00'", 0.01, 0.01]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Network Max: 6.15 MB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='6'

	
        
      
	