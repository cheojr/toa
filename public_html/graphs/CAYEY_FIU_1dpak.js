
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 17.08, 14.90]);  data.addRow(["'13:10:00'", 35.74, 81.25]);  data.addRow(["'13:15:00'", 13.75, 13.37]);  data.addRow(["'13:20:00'", 15.20, 18.06]);  data.addRow(["'13:25:00'", 18.17, 15.29]);  data.addRow(["'13:30:00'", 13.18, 11.62]);  data.addRow(["'13:35:00'", 16.65, 14.75]);  data.addRow(["'13:40:00'", 18.09, 17.94]);  data.addRow(["'13:45:00'", 14.51, 12.46]);  data.addRow(["'13:50:00'", 16.04, 15.84]);  data.addRow(["'13:55:00'", 15.90, 14.71]);  data.addRow(["'14:00:00'", 16.75, 15.71]);  data.addRow(["'14:05:00'", 15.88, 14.56]);  data.addRow(["'14:10:00'", 23.42, 21.95]);  data.addRow(["'14:15:00'", 44.01, 39.37]);  data.addRow(["'14:20:00'", 17.81, 15.67]);  data.addRow(["'14:25:00'", 11.77, 10.26]);  data.addRow(["'14:30:00'", 17.89, 15.35]);  data.addRow(["'14:35:00'", 9.20, 8.95]);  data.addRow(["'14:40:00'", 15.82, 17.54]);  data.addRow(["'14:45:00'", 50.32, 43.79]);  data.addRow(["'14:50:00'", 28.27, 20.00]);  data.addRow(["'14:55:00'", 22.59, 16.61]);  data.addRow(["'15:00:00'", 24.12, 26.39]);  data.addRow(["'15:05:00'", 37.15, 26.94]);  data.addRow(["'15:10:00'", 17.18, 15.03]);  data.addRow(["'15:15:00'", 19.38, 19.79]);  data.addRow(["'15:20:00'", 17.28, 16.19]);  data.addRow(["'15:25:00'", 17.29, 15.40]);  data.addRow(["'15:30:00'", 14.63, 12.84]);  data.addRow(["'15:35:00'", 27.68, 26.11]);  data.addRow(["'15:40:00'", 15.21, 14.81]);  data.addRow(["'15:45:00'", 30.71, 27.42]);  data.addRow(["'15:50:00'", 54.97, 34.46]);  data.addRow(["'15:55:00'", 55.37, 33.82]);  data.addRow(["'16:00:00'", 6.33, 6.61]);  data.addRow(["'16:05:00'", 8.12, 8.84]);  data.addRow(["'16:10:00'", 6.97, 6.48]);  data.addRow(["'16:15:00'", 52.79, 30.21]);  data.addRow(["'16:20:00'", 56.25, 36.63]);  data.addRow(["'16:25:00'", 2.99, 2.97]);  data.addRow(["'16:30:00'", 22.77, 17.27]);  data.addRow(["'16:35:00'", 2.53, 2.11]);  data.addRow(["'16:40:00'", 3.89, 4.26]);  data.addRow(["'16:45:00'", 3.95, 3.79]);  data.addRow(["'16:50:00'", 5.94, 5.23]);  data.addRow(["'16:55:00'", 16.70, 26.86]);  data.addRow(["'17:00:00'", 5.04, 4.44]);  data.addRow(["'17:05:00'", 18.33, 17.21]);  data.addRow(["'17:10:00'", 4.43, 5.67]);  data.addRow(["'17:15:00'", 3.58, 3.22]);  data.addRow(["'17:20:00'", 2.79, 2.61]);  data.addRow(["'17:25:00'", 2.00, 1.73]);  data.addRow(["'17:30:00'", 2.29, 1.96]);  data.addRow(["'17:35:00'", 4.31, 4.00]);  data.addRow(["'17:40:00'", 3.67, 3.49]);  data.addRow(["'17:45:00'", 2.02, 2.08]);  data.addRow(["'17:50:00'", 2.27, 3.05]);  data.addRow(["'17:55:00'", 1.83, 1.62]);  data.addRow(["'18:00:00'", 6.99, 9.88]);  data.addRow(["'18:05:00'", 7.62, 8.07]);  data.addRow(["'18:10:00'", 2.59, 3.01]);  data.addRow(["'18:15:00'", 17.57, 15.89]);  data.addRow(["'18:20:00'", 1.41, 1.46]);  data.addRow(["'18:25:00'", 2.58, 2.29]);  data.addRow(["'18:30:00'", 1.59, 1.71]);  data.addRow(["'18:35:00'", 1.20, 1.06]);  data.addRow(["'18:40:00'", 1.80, 1.67]);  data.addRow(["'18:45:00'", 1.24, 1.18]);  data.addRow(["'18:50:00'", 0.82, 0.90]);  data.addRow(["'18:55:00'", 0.68, 0.65]);  data.addRow(["'19:00:00'", 1.77, 1.37]);  data.addRow(["'19:05:00'", 1.06, 1.01]);  data.addRow(["'19:10:00'", 2.29, 2.16]);  data.addRow(["'19:15:00'", 1.50, 1.41]);  data.addRow(["'19:20:00'", 1.42, 1.35]);  data.addRow(["'19:25:00'", 1.76, 2.08]);  data.addRow(["'19:30:00'", 1.12, 1.18]);  data.addRow(["'19:35:00'", 1.00, 0.83]);  data.addRow(["'19:40:00'", 0.93, 0.81]);  data.addRow(["'19:45:00'", 1.33, 1.17]);  data.addRow(["'19:50:00'", 5.81, 9.72]);  data.addRow(["'19:55:00'", 0.79, 0.67]);  data.addRow(["'20:00:00'", 0.68, 0.56]);  data.addRow(["'20:05:00'", 0.63, 0.58]);  data.addRow(["'20:10:00'", 0.70, 0.59]);  data.addRow(["'20:15:00'", 0.66, 0.53]);  data.addRow(["'20:20:00'", 0.47, 0.38]);  data.addRow(["'20:25:00'", 0.96, 0.85]);  data.addRow(["'20:30:00'", 2.10, 2.01]);  data.addRow(["'20:35:00'", 1.01, 0.88]);  data.addRow(["'20:40:00'", 1.28, 1.13]);  data.addRow(["'20:45:00'", 1.43, 1.29]);  data.addRow(["'20:50:00'", 0.90, 0.88]);  data.addRow(["'20:55:00'", 0.79, 0.80]);  data.addRow(["'21:00:00'", 0.95, 0.93]);  data.addRow(["'21:05:00'", 0.82, 0.74]);  data.addRow(["'21:10:00'", 0.73, 0.89]);  data.addRow(["'21:15:00'", 1.32, 1.52]);  data.addRow(["'21:20:00'", 0.47, 0.55]);  data.addRow(["'21:25:00'", 1.18, 1.12]);  data.addRow(["'21:30:00'", 0.79, 1.06]);  data.addRow(["'21:35:00'", 0.33, 0.33]);  data.addRow(["'21:40:00'", 0.48, 0.42]);  data.addRow(["'21:45:00'", 0.29, 0.27]);  data.addRow(["'21:50:00'", 0.29, 0.25]);  data.addRow(["'21:55:00'", 0.81, 0.99]);  data.addRow(["'22:00:00'", 0.66, 0.65]);  data.addRow(["'22:05:00'", 0.86, 1.15]);  data.addRow(["'22:10:00'", 0.34, 0.28]);  data.addRow(["'22:15:00'", 0.65, 0.52]);  data.addRow(["'22:20:00'", 0.65, 0.71]);  data.addRow(["'22:25:00'", 1.20, 1.16]);  data.addRow(["'22:30:00'", 0.39, 0.55]);  data.addRow(["'22:35:00'", 0.21, 0.15]);  data.addRow(["'22:40:00'", 0.24, 0.18]);  data.addRow(["'22:45:00'", 0.42, 0.33]);  data.addRow(["'22:50:00'", 0.29, 0.20]);  data.addRow(["'22:55:00'", 0.33, 0.25]);  data.addRow(["'23:00:00'", 0.22, 0.16]);  data.addRow(["'23:05:00'", 0.21, 0.17]);  data.addRow(["'23:10:00'", 0.24, 0.25]);  data.addRow(["'23:15:00'", 0.21, 0.15]);  data.addRow(["'23:20:00'", 0.19, 0.16]);  data.addRow(["'23:25:00'", 0.22, 0.15]);  data.addRow(["'23:30:00'", 0.17, 0.13]);  data.addRow(["'23:35:00'", 0.19, 0.15]);  data.addRow(["'23:40:00'", 0.44, 0.34]);  data.addRow(["'23:45:00'", 0.15, 0.11]);  data.addRow(["'23:50:00'", 0.18, 0.11]);  data.addRow(["'23:55:00'", 0.20, 0.15]);  data.addRow(["'00:00:00'", 3.50, 3.25]);  data.addRow(["'00:05:00'", 0.19, 0.13]);  data.addRow(["'00:10:00'", 0.18, 0.15]);  data.addRow(["'00:15:00'", 0.15, 0.12]);  data.addRow(["'00:20:00'", 0.17, 0.12]);  data.addRow(["'00:25:00'", 0.21, 0.15]);  data.addRow(["'00:30:00'", 0.17, 0.12]);  data.addRow(["'00:35:00'", 0.20, 0.15]);  data.addRow(["'00:40:00'", 0.18, 0.12]);  data.addRow(["'00:45:00'", 0.21, 0.12]);  data.addRow(["'00:50:00'", 0.16, 0.11]);  data.addRow(["'00:55:00'", 0.15, 0.11]);  data.addRow(["'01:00:00'", 0.18, 0.13]);  data.addRow(["'01:05:00'", 0.16, 0.11]);  data.addRow(["'01:10:00'", 0.16, 0.11]);  data.addRow(["'01:15:00'", 0.17, 0.14]);  data.addRow(["'01:20:00'", 0.20, 0.14]);  data.addRow(["'01:25:00'", 0.27, 0.21]);  data.addRow(["'01:30:00'", 0.28, 0.22]);  data.addRow(["'01:35:00'", 0.18, 0.14]);  data.addRow(["'01:40:00'", 0.14, 0.12]);  data.addRow(["'01:45:00'", 0.20, 0.15]);  data.addRow(["'01:50:00'", 0.15, 0.12]);  data.addRow(["'01:55:00'", 0.13, 0.11]);  data.addRow(["'02:00:00'", 0.19, 0.13]);  data.addRow(["'02:05:00'", 0.15, 0.12]);  data.addRow(["'02:10:00'", 0.14, 0.13]);  data.addRow(["'02:15:00'", 0.21, 0.15]);  data.addRow(["'02:20:00'", 0.78, 1.04]);  data.addRow(["'02:25:00'", 0.26, 0.22]);  data.addRow(["'02:30:00'", 0.37, 0.41]);  data.addRow(["'02:35:00'", 0.31, 0.24]);  data.addRow(["'02:40:00'", 0.14, 0.11]);  data.addRow(["'02:45:00'", 0.22, 0.14]);  data.addRow(["'02:50:00'", 0.18, 0.13]);  data.addRow(["'02:55:00'", 0.17, 0.10]);  data.addRow(["'03:00:00'", 0.49, 0.36]);  data.addRow(["'03:05:00'", 0.23, 0.20]);  data.addRow(["'03:10:00'", 0.45, 0.55]);  data.addRow(["'03:15:00'", 0.19, 0.11]);  data.addRow(["'03:20:00'", 0.14, 0.09]);  data.addRow(["'03:25:00'", 0.15, 0.10]);  data.addRow(["'03:30:00'", 0.16, 0.12]);  data.addRow(["'03:35:00'", 0.14, 0.10]);  data.addRow(["'03:40:00'", 0.15, 0.11]);  data.addRow(["'03:45:00'", 0.18, 0.12]);  data.addRow(["'03:50:00'", 0.16, 0.11]);  data.addRow(["'03:55:00'", 0.14, 0.12]);  data.addRow(["'04:00:00'", 0.19, 0.11]);  data.addRow(["'04:05:00'", 0.16, 0.12]);  data.addRow(["'04:10:00'", 0.15, 0.12]);  data.addRow(["'04:15:00'", 0.19, 0.13]);  data.addRow(["'04:20:00'", 0.29, 0.21]);  data.addRow(["'04:25:00'", 0.21, 0.15]);  data.addRow(["'04:30:00'", 0.16, 0.12]);  data.addRow(["'04:35:00'", 0.15, 0.12]);  data.addRow(["'04:40:00'", 0.15, 0.16]);  data.addRow(["'04:45:00'", 0.22, 0.16]);  data.addRow(["'04:50:00'", 0.15, 0.10]);  data.addRow(["'04:55:00'", 0.15, 0.12]);  data.addRow(["'05:00:00'", 0.19, 0.13]);  data.addRow(["'05:05:00'", 0.15, 0.12]);  data.addRow(["'05:10:00'", 0.17, 0.12]);  data.addRow(["'05:15:00'", 0.18, 0.15]);  data.addRow(["'05:20:00'", 0.14, 0.12]);  data.addRow(["'05:25:00'", 0.14, 0.11]);  data.addRow(["'05:30:00'", 0.20, 0.14]);  data.addRow(["'05:35:00'", 0.15, 0.11]);  data.addRow(["'05:40:00'", 0.16, 0.12]);  data.addRow(["'05:45:00'", 0.19, 0.13]);  data.addRow(["'05:50:00'", 0.15, 0.12]);  data.addRow(["'05:55:00'", 0.16, 0.11]);  data.addRow(["'06:00:00'", 0.20, 0.15]);  data.addRow(["'06:05:00'", 0.16, 0.11]);  data.addRow(["'06:10:00'", 0.18, 0.17]);  data.addRow(["'06:15:00'", 0.26, 0.20]);  data.addRow(["'06:20:00'", 0.28, 0.19]);  data.addRow(["'06:25:00'", 0.20, 0.16]);  data.addRow(["'06:30:00'", 0.24, 0.16]);  data.addRow(["'06:35:00'", 0.16, 0.12]);  data.addRow(["'06:40:00'", 0.17, 0.12]);  data.addRow(["'06:45:00'", 0.23, 0.17]);  data.addRow(["'06:50:00'", 0.21, 0.17]);  data.addRow(["'06:55:00'", 0.18, 0.13]);  data.addRow(["'07:00:00'", 0.26, 0.20]);  data.addRow(["'07:05:00'", 0.21, 0.16]);  data.addRow(["'07:10:00'", 0.52, 0.40]);  data.addRow(["'07:15:00'", 0.67, 0.49]);  data.addRow(["'07:20:00'", 0.64, 0.52]);  data.addRow(["'07:25:00'", 0.68, 0.58]);  data.addRow(["'07:30:00'", 0.54, 0.47]);  data.addRow(["'07:35:00'", 0.72, 0.53]);  data.addRow(["'07:40:00'", 2.44, 2.03]);  data.addRow(["'07:45:00'", 2.75, 2.47]);  data.addRow(["'07:50:00'", 2.20, 1.77]);  data.addRow(["'07:55:00'", 4.39, 3.78]);  data.addRow(["'08:00:00'", 1.68, 1.56]);  data.addRow(["'08:05:00'", 1.90, 1.53]);  data.addRow(["'08:10:00'", 2.39, 2.23]);  data.addRow(["'08:15:00'", 4.71, 3.93]);  data.addRow(["'08:20:00'", 3.81, 3.34]);  data.addRow(["'08:25:00'", 1.69, 1.27]);  data.addRow(["'08:30:00'", 3.43, 3.03]);  data.addRow(["'08:35:00'", 8.13, 6.92]);  data.addRow(["'08:40:00'", 9.19, 8.24]);  data.addRow(["'08:45:00'", 17.58, 12.20]);  data.addRow(["'08:50:00'", 4.89, 4.81]);  data.addRow(["'08:55:00'", 4.43, 4.02]);  data.addRow(["'09:00:00'", 7.99, 7.02]);  data.addRow(["'09:05:00'", 6.97, 6.28]);  data.addRow(["'09:10:00'", 6.88, 6.01]);  data.addRow(["'09:15:00'", 5.91, 5.21]);  data.addRow(["'09:20:00'", 4.57, 4.72]);  data.addRow(["'09:25:00'", 6.31, 5.46]);  data.addRow(["'09:30:00'", 6.78, 5.57]);  data.addRow(["'09:35:00'", 13.02, 10.64]);  data.addRow(["'09:40:00'", 9.29, 8.00]);  data.addRow(["'09:45:00'", 20.11, 15.03]);  data.addRow(["'09:50:00'", 10.85, 9.25]);  data.addRow(["'09:55:00'", 10.35, 8.01]);  data.addRow(["'10:00:00'", 10.24, 8.26]);  data.addRow(["'10:05:00'", 6.72, 5.82]);  data.addRow(["'10:10:00'", 21.68, 15.94]);  data.addRow(["'10:15:00'", 16.61, 16.30]);  data.addRow(["'10:20:00'", 11.35, 9.37]);  data.addRow(["'10:25:00'", 34.96, 21.46]);  data.addRow(["'10:30:00'", 29.65, 21.85]);  data.addRow(["'10:35:00'", 11.54, 10.45]);  data.addRow(["'10:40:00'", 59.33, 28.47]);  data.addRow(["'10:45:00'", 10.78, 9.64]);  data.addRow(["'10:50:00'", 23.86, 20.97]);  data.addRow(["'10:55:00'", 93.45, 62.69]);  data.addRow(["'11:00:00'", 17.23, 18.42]);  data.addRow(["'11:05:00'", 31.39, 25.30]);  data.addRow(["'11:10:00'", 25.59, 18.37]);  data.addRow(["'11:15:00'", 35.19, 25.76]);  data.addRow(["'11:20:00'", 31.13, 25.96]);  data.addRow(["'11:25:00'", 26.45, 21.61]);  data.addRow(["'11:30:00'", 26.71, 20.51]);  data.addRow(["'11:35:00'", 28.83, 21.56]);  data.addRow(["'11:40:00'", 27.72, 25.02]);  data.addRow(["'11:45:00'", 33.98, 35.57]);  data.addRow(["'11:50:00'", 32.75, 27.46]);  data.addRow(["'11:55:00'", 46.09, 37.85]);  data.addRow(["'12:00:00'", 20.94, 14.64]);  data.addRow(["'12:05:00'", 44.23, 50.28]);  data.addRow(["'12:10:00'", 31.57, 37.99]);  data.addRow(["'12:15:00'", 98.36, 81.80]);  data.addRow(["'12:20:00'", 21.07, 16.77]);  data.addRow(["'12:25:00'", 20.16, 26.49]);  data.addRow(["'12:30:00'", 20.20, 18.63]);  data.addRow(["'12:35:00'", 23.39, 27.15]);  data.addRow(["'12:40:00'", 9.23, 8.18]);  data.addRow(["'12:45:00'", 16.34, 19.64]);  data.addRow(["'12:50:00'", 13.38, 14.24]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Packets Max: 98.36 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='98'

	
        
      
	