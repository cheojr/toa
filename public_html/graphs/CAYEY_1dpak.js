
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 17.26, 15.30]);  data.addRow(["'13:10:00'", 35.81, 81.60]);  data.addRow(["'13:15:00'", 13.84, 13.56]);  data.addRow(["'13:20:00'", 15.20, 18.31]);  data.addRow(["'13:25:00'", 18.19, 15.49]);  data.addRow(["'13:30:00'", 13.22, 11.99]);  data.addRow(["'13:35:00'", 25.47, 23.72]);  data.addRow(["'13:40:00'", 18.19, 18.26]);  data.addRow(["'13:45:00'", 14.51, 12.73]);  data.addRow(["'13:50:00'", 16.17, 16.17]);  data.addRow(["'13:55:00'", 15.93, 15.15]);  data.addRow(["'14:00:00'", 16.75, 16.08]);  data.addRow(["'14:05:00'", 15.89, 15.15]);  data.addRow(["'14:10:00'", 23.50, 22.47]);  data.addRow(["'14:15:00'", 44.01, 39.69]);  data.addRow(["'14:20:00'", 17.84, 16.10]);  data.addRow(["'14:25:00'", 11.92, 10.58]);  data.addRow(["'14:30:00'", 18.09, 15.73]);  data.addRow(["'14:35:00'", 18.71, 18.77]);  data.addRow(["'14:40:00'", 15.84, 17.84]);  data.addRow(["'14:45:00'", 50.32, 45.83]);  data.addRow(["'14:50:00'", 28.27, 21.31]);  data.addRow(["'14:55:00'", 22.60, 19.45]);  data.addRow(["'15:00:00'", 24.12, 26.51]);  data.addRow(["'15:05:00'", 37.15, 32.45]);  data.addRow(["'15:10:00'", 17.18, 15.25]);  data.addRow(["'15:15:00'", 19.38, 20.18]);  data.addRow(["'15:20:00'", 17.30, 16.53]);  data.addRow(["'15:25:00'", 17.32, 15.57]);  data.addRow(["'15:30:00'", 14.75, 13.22]);  data.addRow(["'15:35:00'", 27.68, 26.32]);  data.addRow(["'15:40:00'", 25.49, 25.64]);  data.addRow(["'15:45:00'", 30.82, 27.71]);  data.addRow(["'15:50:00'", 55.12, 34.82]);  data.addRow(["'15:55:00'", 55.41, 33.98]);  data.addRow(["'16:00:00'", 6.34, 6.70]);  data.addRow(["'16:05:00'", 8.12, 8.97]);  data.addRow(["'16:10:00'", 7.05, 6.62]);  data.addRow(["'16:15:00'", 52.80, 30.29]);  data.addRow(["'16:20:00'", 56.25, 36.81]);  data.addRow(["'16:25:00'", 2.99, 3.08]);  data.addRow(["'16:30:00'", 30.64, 25.20]);  data.addRow(["'16:35:00'", 2.53, 2.47]);  data.addRow(["'16:40:00'", 3.89, 4.36]);  data.addRow(["'16:45:00'", 3.95, 3.96]);  data.addRow(["'16:50:00'", 5.94, 5.30]);  data.addRow(["'16:55:00'", 16.70, 26.93]);  data.addRow(["'17:00:00'", 5.16, 4.67]);  data.addRow(["'17:05:00'", 18.33, 17.29]);  data.addRow(["'17:10:00'", 4.44, 5.78]);  data.addRow(["'17:15:00'", 3.58, 3.32]);  data.addRow(["'17:20:00'", 2.79, 2.71]);  data.addRow(["'17:25:00'", 2.00, 1.80]);  data.addRow(["'17:30:00'", 2.29, 2.02]);  data.addRow(["'17:35:00'", 4.31, 4.03]);  data.addRow(["'17:40:00'", 13.44, 13.38]);  data.addRow(["'17:45:00'", 2.02, 7.62]);  data.addRow(["'17:50:00'", 2.27, 3.09]);  data.addRow(["'17:55:00'", 1.83, 1.91]);  data.addRow(["'18:00:00'", 6.99, 9.92]);  data.addRow(["'18:05:00'", 7.71, 8.18]);  data.addRow(["'18:10:00'", 2.65, 3.13]);  data.addRow(["'18:15:00'", 17.57, 15.96]);  data.addRow(["'18:20:00'", 1.41, 1.50]);  data.addRow(["'18:25:00'", 2.61, 2.68]);  data.addRow(["'18:30:00'", 1.59, 1.77]);  data.addRow(["'18:35:00'", 1.20, 1.10]);  data.addRow(["'18:40:00'", 11.79, 11.60]);  data.addRow(["'18:45:00'", 1.24, 1.24]);  data.addRow(["'18:50:00'", 0.82, 0.95]);  data.addRow(["'18:55:00'", 3.32, 3.21]);  data.addRow(["'19:00:00'", 1.77, 1.41]);  data.addRow(["'19:05:00'", 1.06, 1.08]);  data.addRow(["'19:10:00'", 2.29, 2.19]);  data.addRow(["'19:15:00'", 1.50, 1.46]);  data.addRow(["'19:20:00'", 1.42, 1.38]);  data.addRow(["'19:25:00'", 1.76, 2.67]);  data.addRow(["'19:30:00'", 1.12, 1.23]);  data.addRow(["'19:35:00'", 1.00, 0.88]);  data.addRow(["'19:40:00'", 0.93, 0.84]);  data.addRow(["'19:45:00'", 1.33, 1.19]);  data.addRow(["'19:50:00'", 5.81, 9.76]);  data.addRow(["'19:55:00'", 10.43, 10.26]);  data.addRow(["'20:00:00'", 0.68, 0.59]);  data.addRow(["'20:05:00'", 0.63, 0.61]);  data.addRow(["'20:10:00'", 0.70, 0.66]);  data.addRow(["'20:15:00'", 0.66, 0.54]);  data.addRow(["'20:20:00'", 0.47, 0.39]);  data.addRow(["'20:25:00'", 0.96, 0.88]);  data.addRow(["'20:30:00'", 2.10, 2.04]);  data.addRow(["'20:35:00'", 1.01, 0.90]);  data.addRow(["'20:40:00'", 1.28, 1.15]);  data.addRow(["'20:45:00'", 1.43, 1.32]);  data.addRow(["'20:50:00'", 0.90, 0.89]);  data.addRow(["'20:55:00'", 10.35, 10.21]);  data.addRow(["'21:00:00'", 0.95, 0.95]);  data.addRow(["'21:05:00'", 0.83, 0.75]);  data.addRow(["'21:10:00'", 0.73, 0.89]);  data.addRow(["'21:15:00'", 1.32, 7.23]);  data.addRow(["'21:20:00'", 0.79, 0.85]);  data.addRow(["'21:25:00'", 1.19, 1.12]);  data.addRow(["'21:30:00'", 0.79, 1.07]);  data.addRow(["'21:35:00'", 0.33, 0.34]);  data.addRow(["'21:40:00'", 0.48, 0.45]);  data.addRow(["'21:45:00'", 0.29, 0.29]);  data.addRow(["'21:50:00'", 0.29, 0.25]);  data.addRow(["'21:55:00'", 10.54, 10.69]);  data.addRow(["'22:00:00'", 0.66, 0.65]);  data.addRow(["'22:05:00'", 0.86, 1.16]);  data.addRow(["'22:10:00'", 0.34, 0.28]);  data.addRow(["'22:15:00'", 0.65, 0.63]);  data.addRow(["'22:20:00'", 0.65, 0.71]);  data.addRow(["'22:25:00'", 1.20, 1.18]);  data.addRow(["'22:30:00'", 0.39, 0.56]);  data.addRow(["'22:35:00'", 0.21, 0.17]);  data.addRow(["'22:40:00'", 0.24, 0.19]);  data.addRow(["'22:45:00'", 0.42, 0.34]);  data.addRow(["'22:50:00'", 0.29, 0.20]);  data.addRow(["'22:55:00'", 10.07, 9.92]);  data.addRow(["'23:00:00'", 0.22, 0.16]);  data.addRow(["'23:05:00'", 0.21, 0.17]);  data.addRow(["'23:10:00'", 0.24, 0.25]);  data.addRow(["'23:15:00'", 0.21, 0.16]);  data.addRow(["'23:20:00'", 0.19, 0.16]);  data.addRow(["'23:25:00'", 0.22, 0.15]);  data.addRow(["'23:30:00'", 0.17, 0.13]);  data.addRow(["'23:35:00'", 0.19, 0.15]);  data.addRow(["'23:40:00'", 0.44, 0.34]);  data.addRow(["'23:45:00'", 0.15, 0.11]);  data.addRow(["'23:50:00'", 0.18, 0.11]);  data.addRow(["'23:55:00'", 10.02, 9.96]);  data.addRow(["'00:00:00'", 3.50, 3.25]);  data.addRow(["'00:05:00'", 1.84, 1.80]);  data.addRow(["'00:10:00'", 0.18, 0.15]);  data.addRow(["'00:15:00'", 0.15, 0.12]);  data.addRow(["'00:20:00'", 0.17, 0.12]);  data.addRow(["'00:25:00'", 0.21, 0.15]);  data.addRow(["'00:30:00'", 0.17, 0.12]);  data.addRow(["'00:35:00'", 0.20, 0.15]);  data.addRow(["'00:40:00'", 0.18, 0.12]);  data.addRow(["'00:45:00'", 0.21, 0.12]);  data.addRow(["'00:50:00'", 0.16, 0.11]);  data.addRow(["'00:55:00'", 0.15, 8.33]);  data.addRow(["'01:00:00'", 0.18, 0.14]);  data.addRow(["'01:05:00'", 9.86, 9.73]);  data.addRow(["'01:10:00'", 0.16, 0.11]);  data.addRow(["'01:15:00'", 0.17, 0.14]);  data.addRow(["'01:20:00'", 0.20, 0.14]);  data.addRow(["'01:25:00'", 0.27, 0.22]);  data.addRow(["'01:30:00'", 0.28, 0.22]);  data.addRow(["'01:35:00'", 0.18, 0.14]);  data.addRow(["'01:40:00'", 0.14, 0.13]);  data.addRow(["'01:45:00'", 0.20, 0.15]);  data.addRow(["'01:50:00'", 0.15, 0.12]);  data.addRow(["'01:55:00'", 0.13, 0.12]);  data.addRow(["'02:00:00'", 0.19, 0.13]);  data.addRow(["'02:05:00'", 9.75, 9.73]);  data.addRow(["'02:10:00'", 0.14, 0.13]);  data.addRow(["'02:15:00'", 0.21, 0.15]);  data.addRow(["'02:20:00'", 0.78, 1.04]);  data.addRow(["'02:25:00'", 0.26, 0.22]);  data.addRow(["'02:30:00'", 0.37, 0.42]);  data.addRow(["'02:35:00'", 0.31, 0.24]);  data.addRow(["'02:40:00'", 0.14, 0.12]);  data.addRow(["'02:45:00'", 0.22, 0.14]);  data.addRow(["'02:50:00'", 0.18, 0.13]);  data.addRow(["'02:55:00'", 0.17, 0.10]);  data.addRow(["'03:00:00'", 0.49, 0.54]);  data.addRow(["'03:05:00'", 10.04, 9.73]);  data.addRow(["'03:10:00'", 0.45, 0.55]);  data.addRow(["'03:15:00'", 0.19, 0.12]);  data.addRow(["'03:20:00'", 0.14, 0.09]);  data.addRow(["'03:25:00'", 0.15, 0.10]);  data.addRow(["'03:30:00'", 0.16, 0.12]);  data.addRow(["'03:35:00'", 0.14, 0.11]);  data.addRow(["'03:40:00'", 0.15, 0.11]);  data.addRow(["'03:45:00'", 0.18, 0.12]);  data.addRow(["'03:50:00'", 0.16, 0.11]);  data.addRow(["'03:55:00'", 0.14, 0.12]);  data.addRow(["'04:00:00'", 0.19, 0.14]);  data.addRow(["'04:05:00'", 10.08, 9.85]);  data.addRow(["'04:10:00'", 0.15, 0.16]);  data.addRow(["'04:15:00'", 0.19, 0.16]);  data.addRow(["'04:20:00'", 0.29, 0.27]);  data.addRow(["'04:25:00'", 0.21, 0.17]);  data.addRow(["'04:30:00'", 0.16, 0.19]);  data.addRow(["'04:35:00'", 0.15, 0.13]);  data.addRow(["'04:40:00'", 0.15, 0.20]);  data.addRow(["'04:45:00'", 0.22, 0.22]);  data.addRow(["'04:50:00'", 0.15, 0.13]);  data.addRow(["'04:55:00'", 0.15, 0.16]);  data.addRow(["'05:00:00'", 0.19, 0.16]);  data.addRow(["'05:05:00'", 9.82, 9.99]);  data.addRow(["'05:10:00'", 0.17, 0.17]);  data.addRow(["'05:15:00'", 0.18, 0.15]);  data.addRow(["'05:20:00'", 0.14, 0.12]);  data.addRow(["'05:25:00'", 0.14, 0.11]);  data.addRow(["'05:30:00'", 0.20, 0.14]);  data.addRow(["'05:35:00'", 0.15, 0.11]);  data.addRow(["'05:40:00'", 0.16, 0.12]);  data.addRow(["'05:45:00'", 0.19, 0.14]);  data.addRow(["'05:50:00'", 0.15, 0.12]);  data.addRow(["'05:55:00'", 0.16, 0.12]);  data.addRow(["'06:00:00'", 0.20, 0.16]);  data.addRow(["'06:05:00'", 9.88, 9.74]);  data.addRow(["'06:10:00'", 0.18, 0.17]);  data.addRow(["'06:15:00'", 0.26, 0.21]);  data.addRow(["'06:20:00'", 0.28, 0.21]);  data.addRow(["'06:25:00'", 0.20, 0.17]);  data.addRow(["'06:30:00'", 0.24, 0.17]);  data.addRow(["'06:35:00'", 0.16, 0.12]);  data.addRow(["'06:40:00'", 0.17, 0.12]);  data.addRow(["'06:45:00'", 0.23, 0.17]);  data.addRow(["'06:50:00'", 0.21, 0.17]);  data.addRow(["'06:55:00'", 0.18, 0.20]);  data.addRow(["'07:00:00'", 0.26, 0.28]);  data.addRow(["'07:05:00'", 10.03, 9.98]);  data.addRow(["'07:10:00'", 0.58, 0.48]);  data.addRow(["'07:15:00'", 0.67, 0.53]);  data.addRow(["'07:20:00'", 0.64, 0.67]);  data.addRow(["'07:25:00'", 0.68, 0.64]);  data.addRow(["'07:30:00'", 0.54, 0.57]);  data.addRow(["'07:35:00'", 0.72, 0.59]);  data.addRow(["'07:40:00'", 2.58, 2.21]);  data.addRow(["'07:45:00'", 2.75, 2.54]);  data.addRow(["'07:50:00'", 2.20, 1.96]);  data.addRow(["'07:55:00'", 4.43, 4.03]);  data.addRow(["'08:00:00'", 1.80, 1.96]);  data.addRow(["'08:05:00'", 1.90, 11.57]);  data.addRow(["'08:10:00'", 12.55, 2.42]);  data.addRow(["'08:15:00'", 4.71, 4.11]);  data.addRow(["'08:20:00'", 3.88, 3.49]);  data.addRow(["'08:25:00'", 1.69, 1.37]);  data.addRow(["'08:30:00'", 3.43, 3.14]);  data.addRow(["'08:35:00'", 8.13, 7.24]);  data.addRow(["'08:40:00'", 9.19, 8.38]);  data.addRow(["'08:45:00'", 17.66, 12.44]);  data.addRow(["'08:50:00'", 4.92, 4.96]);  data.addRow(["'08:55:00'", 4.77, 4.51]);  data.addRow(["'09:00:00'", 8.09, 7.26]);  data.addRow(["'09:05:00'", 7.02, 6.42]);  data.addRow(["'09:10:00'", 17.71, 16.49]);  data.addRow(["'09:15:00'", 5.96, 5.43]);  data.addRow(["'09:20:00'", 4.57, 4.89]);  data.addRow(["'09:25:00'", 6.31, 5.68]);  data.addRow(["'09:30:00'", 6.90, 5.87]);  data.addRow(["'09:35:00'", 13.03, 10.91]);  data.addRow(["'09:40:00'", 9.31, 8.29]);  data.addRow(["'09:45:00'", 20.32, 15.34]);  data.addRow(["'09:50:00'", 10.86, 9.46]);  data.addRow(["'09:55:00'", 11.91, 9.87]);  data.addRow(["'10:00:00'", 10.25, 8.54]);  data.addRow(["'10:05:00'", 6.97, 6.27]);  data.addRow(["'10:10:00'", 22.02, 26.37]);  data.addRow(["'10:15:00'", 16.74, 17.26]);  data.addRow(["'10:20:00'", 21.80, 10.00]);  data.addRow(["'10:25:00'", 35.02, 24.12]);  data.addRow(["'10:30:00'", 29.94, 22.27]);  data.addRow(["'10:35:00'", 12.13, 11.17]);  data.addRow(["'10:40:00'", 59.84, 29.42]);  data.addRow(["'10:45:00'", 10.92, 10.38]);  data.addRow(["'10:50:00'", 24.08, 22.19]);  data.addRow(["'10:55:00'", 93.46, 68.95]);  data.addRow(["'11:00:00'", 17.44, 20.97]);  data.addRow(["'11:05:00'", 31.49, 27.68]);  data.addRow(["'11:10:00'", 25.67, 21.21]);  data.addRow(["'11:15:00'", 35.36, 37.50]);  data.addRow(["'11:20:00'", 41.54, 29.04]);  data.addRow(["'11:25:00'", 26.51, 24.58]);  data.addRow(["'11:30:00'", 27.11, 23.24]);  data.addRow(["'11:35:00'", 28.83, 25.13]);  data.addRow(["'11:40:00'", 27.72, 26.35]);  data.addRow(["'11:45:00'", 33.99, 35.87]);  data.addRow(["'11:50:00'", 33.00, 33.04]);  data.addRow(["'11:55:00'", 46.28, 40.59]);  data.addRow(["'12:00:00'", 20.96, 16.72]);  data.addRow(["'12:05:00'", 44.23, 53.12]);  data.addRow(["'12:10:00'", 31.67, 40.49]);  data.addRow(["'12:15:00'", 98.36, 93.04]);  data.addRow(["'12:20:00'", 21.07, 17.12]);  data.addRow(["'12:25:00'", 30.81, 26.73]);  data.addRow(["'12:30:00'", 20.20, 18.97]);  data.addRow(["'12:35:00'", 23.45, 27.36]);  data.addRow(["'12:40:00'", 9.25, 8.36]);  data.addRow(["'12:45:00'", 16.46, 20.03]);  data.addRow(["'12:50:00'", 13.38, 14.51]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='CAYEY Traffic Packet Max: 98.36 KB Min: 97.00 bytes'
	var xtitle='Time'
	var ytitle='Packet'
	var maxvalue='98'

	
        
      
	