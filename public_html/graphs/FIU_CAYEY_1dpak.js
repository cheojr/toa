
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 14.90, 17.08]);  data.addRow(["'13:10:00'", 81.25, 35.74]);  data.addRow(["'13:15:00'", 13.37, 13.75]);  data.addRow(["'13:20:00'", 18.06, 15.20]);  data.addRow(["'13:25:00'", 15.29, 18.17]);  data.addRow(["'13:30:00'", 11.62, 13.18]);  data.addRow(["'13:35:00'", 14.75, 16.65]);  data.addRow(["'13:40:00'", 17.94, 18.09]);  data.addRow(["'13:45:00'", 12.46, 14.51]);  data.addRow(["'13:50:00'", 15.84, 16.04]);  data.addRow(["'13:55:00'", 14.71, 15.90]);  data.addRow(["'14:00:00'", 15.71, 16.75]);  data.addRow(["'14:05:00'", 14.56, 15.88]);  data.addRow(["'14:10:00'", 21.95, 23.42]);  data.addRow(["'14:15:00'", 39.37, 44.01]);  data.addRow(["'14:20:00'", 15.67, 17.81]);  data.addRow(["'14:25:00'", 10.26, 11.77]);  data.addRow(["'14:30:00'", 15.35, 17.89]);  data.addRow(["'14:35:00'", 8.95, 9.20]);  data.addRow(["'14:40:00'", 17.54, 15.82]);  data.addRow(["'14:45:00'", 43.79, 50.32]);  data.addRow(["'14:50:00'", 20.00, 28.27]);  data.addRow(["'14:55:00'", 16.61, 22.59]);  data.addRow(["'15:00:00'", 26.39, 24.12]);  data.addRow(["'15:05:00'", 26.94, 37.15]);  data.addRow(["'15:10:00'", 15.03, 17.18]);  data.addRow(["'15:15:00'", 19.79, 19.38]);  data.addRow(["'15:20:00'", 16.19, 17.28]);  data.addRow(["'15:25:00'", 15.40, 17.29]);  data.addRow(["'15:30:00'", 12.84, 14.63]);  data.addRow(["'15:35:00'", 26.11, 27.68]);  data.addRow(["'15:40:00'", 14.81, 15.21]);  data.addRow(["'15:45:00'", 27.42, 30.71]);  data.addRow(["'15:50:00'", 34.46, 54.97]);  data.addRow(["'15:55:00'", 33.82, 55.37]);  data.addRow(["'16:00:00'", 6.61, 6.33]);  data.addRow(["'16:05:00'", 8.84, 8.12]);  data.addRow(["'16:10:00'", 6.48, 6.97]);  data.addRow(["'16:15:00'", 30.21, 52.79]);  data.addRow(["'16:20:00'", 36.63, 56.25]);  data.addRow(["'16:25:00'", 2.97, 2.99]);  data.addRow(["'16:30:00'", 17.27, 22.77]);  data.addRow(["'16:35:00'", 2.11, 2.53]);  data.addRow(["'16:40:00'", 4.26, 3.89]);  data.addRow(["'16:45:00'", 3.79, 3.95]);  data.addRow(["'16:50:00'", 5.23, 5.94]);  data.addRow(["'16:55:00'", 26.86, 16.70]);  data.addRow(["'17:00:00'", 4.44, 5.04]);  data.addRow(["'17:05:00'", 17.21, 18.33]);  data.addRow(["'17:10:00'", 5.67, 4.43]);  data.addRow(["'17:15:00'", 3.22, 3.58]);  data.addRow(["'17:20:00'", 2.61, 2.79]);  data.addRow(["'17:25:00'", 1.73, 2.00]);  data.addRow(["'17:30:00'", 1.96, 2.29]);  data.addRow(["'17:35:00'", 4.00, 4.31]);  data.addRow(["'17:40:00'", 3.49, 3.67]);  data.addRow(["'17:45:00'", 2.08, 2.02]);  data.addRow(["'17:50:00'", 3.05, 2.27]);  data.addRow(["'17:55:00'", 1.62, 1.83]);  data.addRow(["'18:00:00'", 9.88, 6.99]);  data.addRow(["'18:05:00'", 8.07, 7.62]);  data.addRow(["'18:10:00'", 3.01, 2.59]);  data.addRow(["'18:15:00'", 15.89, 17.57]);  data.addRow(["'18:20:00'", 1.46, 1.41]);  data.addRow(["'18:25:00'", 2.29, 2.58]);  data.addRow(["'18:30:00'", 1.71, 1.59]);  data.addRow(["'18:35:00'", 1.06, 1.20]);  data.addRow(["'18:40:00'", 1.67, 1.80]);  data.addRow(["'18:45:00'", 1.18, 1.24]);  data.addRow(["'18:50:00'", 0.90, 0.82]);  data.addRow(["'18:55:00'", 0.65, 0.68]);  data.addRow(["'19:00:00'", 1.37, 1.77]);  data.addRow(["'19:05:00'", 1.01, 1.06]);  data.addRow(["'19:10:00'", 2.16, 2.29]);  data.addRow(["'19:15:00'", 1.41, 1.50]);  data.addRow(["'19:20:00'", 1.35, 1.42]);  data.addRow(["'19:25:00'", 2.08, 1.76]);  data.addRow(["'19:30:00'", 1.18, 1.12]);  data.addRow(["'19:35:00'", 0.83, 1.00]);  data.addRow(["'19:40:00'", 0.81, 0.93]);  data.addRow(["'19:45:00'", 1.17, 1.33]);  data.addRow(["'19:50:00'", 9.72, 5.81]);  data.addRow(["'19:55:00'", 0.67, 0.79]);  data.addRow(["'20:00:00'", 0.56, 0.68]);  data.addRow(["'20:05:00'", 0.58, 0.63]);  data.addRow(["'20:10:00'", 0.59, 0.70]);  data.addRow(["'20:15:00'", 0.53, 0.66]);  data.addRow(["'20:20:00'", 0.38, 0.47]);  data.addRow(["'20:25:00'", 0.85, 0.96]);  data.addRow(["'20:30:00'", 2.01, 2.10]);  data.addRow(["'20:35:00'", 0.88, 1.01]);  data.addRow(["'20:40:00'", 1.13, 1.28]);  data.addRow(["'20:45:00'", 1.29, 1.43]);  data.addRow(["'20:50:00'", 0.88, 0.90]);  data.addRow(["'20:55:00'", 0.80, 0.79]);  data.addRow(["'21:00:00'", 0.93, 0.95]);  data.addRow(["'21:05:00'", 0.74, 0.82]);  data.addRow(["'21:10:00'", 0.89, 0.73]);  data.addRow(["'21:15:00'", 1.52, 1.32]);  data.addRow(["'21:20:00'", 0.55, 0.47]);  data.addRow(["'21:25:00'", 1.12, 1.18]);  data.addRow(["'21:30:00'", 1.06, 0.79]);  data.addRow(["'21:35:00'", 0.33, 0.33]);  data.addRow(["'21:40:00'", 0.42, 0.48]);  data.addRow(["'21:45:00'", 0.27, 0.29]);  data.addRow(["'21:50:00'", 0.25, 0.29]);  data.addRow(["'21:55:00'", 0.99, 0.81]);  data.addRow(["'22:00:00'", 0.65, 0.66]);  data.addRow(["'22:05:00'", 1.15, 0.86]);  data.addRow(["'22:10:00'", 0.28, 0.34]);  data.addRow(["'22:15:00'", 0.52, 0.65]);  data.addRow(["'22:20:00'", 0.71, 0.65]);  data.addRow(["'22:25:00'", 1.16, 1.20]);  data.addRow(["'22:30:00'", 0.55, 0.39]);  data.addRow(["'22:35:00'", 0.15, 0.21]);  data.addRow(["'22:40:00'", 0.18, 0.24]);  data.addRow(["'22:45:00'", 0.33, 0.42]);  data.addRow(["'22:50:00'", 0.20, 0.29]);  data.addRow(["'22:55:00'", 0.25, 0.33]);  data.addRow(["'23:00:00'", 0.16, 0.22]);  data.addRow(["'23:05:00'", 0.17, 0.21]);  data.addRow(["'23:10:00'", 0.25, 0.24]);  data.addRow(["'23:15:00'", 0.15, 0.21]);  data.addRow(["'23:20:00'", 0.16, 0.19]);  data.addRow(["'23:25:00'", 0.15, 0.22]);  data.addRow(["'23:30:00'", 0.13, 0.17]);  data.addRow(["'23:35:00'", 0.15, 0.19]);  data.addRow(["'23:40:00'", 0.34, 0.44]);  data.addRow(["'23:45:00'", 0.11, 0.15]);  data.addRow(["'23:50:00'", 0.11, 0.18]);  data.addRow(["'23:55:00'", 0.15, 0.20]);  data.addRow(["'00:00:00'", 3.25, 3.50]);  data.addRow(["'00:05:00'", 0.13, 0.19]);  data.addRow(["'00:10:00'", 0.15, 0.18]);  data.addRow(["'00:15:00'", 0.12, 0.15]);  data.addRow(["'00:20:00'", 0.12, 0.17]);  data.addRow(["'00:25:00'", 0.15, 0.21]);  data.addRow(["'00:30:00'", 0.12, 0.17]);  data.addRow(["'00:35:00'", 0.15, 0.20]);  data.addRow(["'00:40:00'", 0.12, 0.18]);  data.addRow(["'00:45:00'", 0.12, 0.21]);  data.addRow(["'00:50:00'", 0.11, 0.16]);  data.addRow(["'00:55:00'", 0.11, 0.15]);  data.addRow(["'01:00:00'", 0.13, 0.18]);  data.addRow(["'01:05:00'", 0.11, 0.16]);  data.addRow(["'01:10:00'", 0.11, 0.16]);  data.addRow(["'01:15:00'", 0.14, 0.17]);  data.addRow(["'01:20:00'", 0.14, 0.20]);  data.addRow(["'01:25:00'", 0.21, 0.27]);  data.addRow(["'01:30:00'", 0.22, 0.28]);  data.addRow(["'01:35:00'", 0.14, 0.18]);  data.addRow(["'01:40:00'", 0.12, 0.14]);  data.addRow(["'01:45:00'", 0.15, 0.20]);  data.addRow(["'01:50:00'", 0.12, 0.15]);  data.addRow(["'01:55:00'", 0.11, 0.13]);  data.addRow(["'02:00:00'", 0.13, 0.19]);  data.addRow(["'02:05:00'", 0.12, 0.15]);  data.addRow(["'02:10:00'", 0.13, 0.14]);  data.addRow(["'02:15:00'", 0.15, 0.21]);  data.addRow(["'02:20:00'", 1.04, 0.78]);  data.addRow(["'02:25:00'", 0.22, 0.26]);  data.addRow(["'02:30:00'", 0.41, 0.37]);  data.addRow(["'02:35:00'", 0.24, 0.31]);  data.addRow(["'02:40:00'", 0.11, 0.14]);  data.addRow(["'02:45:00'", 0.14, 0.22]);  data.addRow(["'02:50:00'", 0.13, 0.18]);  data.addRow(["'02:55:00'", 0.10, 0.17]);  data.addRow(["'03:00:00'", 0.36, 0.49]);  data.addRow(["'03:05:00'", 0.20, 0.23]);  data.addRow(["'03:10:00'", 0.55, 0.45]);  data.addRow(["'03:15:00'", 0.11, 0.19]);  data.addRow(["'03:20:00'", 0.09, 0.14]);  data.addRow(["'03:25:00'", 0.10, 0.15]);  data.addRow(["'03:30:00'", 0.12, 0.16]);  data.addRow(["'03:35:00'", 0.10, 0.14]);  data.addRow(["'03:40:00'", 0.11, 0.15]);  data.addRow(["'03:45:00'", 0.12, 0.18]);  data.addRow(["'03:50:00'", 0.11, 0.16]);  data.addRow(["'03:55:00'", 0.12, 0.14]);  data.addRow(["'04:00:00'", 0.11, 0.19]);  data.addRow(["'04:05:00'", 0.12, 0.16]);  data.addRow(["'04:10:00'", 0.12, 0.15]);  data.addRow(["'04:15:00'", 0.13, 0.19]);  data.addRow(["'04:20:00'", 0.21, 0.29]);  data.addRow(["'04:25:00'", 0.15, 0.21]);  data.addRow(["'04:30:00'", 0.12, 0.16]);  data.addRow(["'04:35:00'", 0.12, 0.15]);  data.addRow(["'04:40:00'", 0.16, 0.15]);  data.addRow(["'04:45:00'", 0.16, 0.22]);  data.addRow(["'04:50:00'", 0.10, 0.15]);  data.addRow(["'04:55:00'", 0.12, 0.15]);  data.addRow(["'05:00:00'", 0.13, 0.19]);  data.addRow(["'05:05:00'", 0.12, 0.15]);  data.addRow(["'05:10:00'", 0.12, 0.17]);  data.addRow(["'05:15:00'", 0.15, 0.18]);  data.addRow(["'05:20:00'", 0.12, 0.14]);  data.addRow(["'05:25:00'", 0.11, 0.14]);  data.addRow(["'05:30:00'", 0.14, 0.20]);  data.addRow(["'05:35:00'", 0.11, 0.15]);  data.addRow(["'05:40:00'", 0.12, 0.16]);  data.addRow(["'05:45:00'", 0.13, 0.19]);  data.addRow(["'05:50:00'", 0.12, 0.15]);  data.addRow(["'05:55:00'", 0.11, 0.16]);  data.addRow(["'06:00:00'", 0.15, 0.20]);  data.addRow(["'06:05:00'", 0.11, 0.16]);  data.addRow(["'06:10:00'", 0.17, 0.18]);  data.addRow(["'06:15:00'", 0.20, 0.26]);  data.addRow(["'06:20:00'", 0.19, 0.28]);  data.addRow(["'06:25:00'", 0.16, 0.20]);  data.addRow(["'06:30:00'", 0.16, 0.24]);  data.addRow(["'06:35:00'", 0.12, 0.16]);  data.addRow(["'06:40:00'", 0.12, 0.17]);  data.addRow(["'06:45:00'", 0.17, 0.23]);  data.addRow(["'06:50:00'", 0.17, 0.21]);  data.addRow(["'06:55:00'", 0.13, 0.18]);  data.addRow(["'07:00:00'", 0.20, 0.26]);  data.addRow(["'07:05:00'", 0.16, 0.21]);  data.addRow(["'07:10:00'", 0.40, 0.52]);  data.addRow(["'07:15:00'", 0.49, 0.67]);  data.addRow(["'07:20:00'", 0.52, 0.64]);  data.addRow(["'07:25:00'", 0.58, 0.68]);  data.addRow(["'07:30:00'", 0.47, 0.54]);  data.addRow(["'07:35:00'", 0.53, 0.72]);  data.addRow(["'07:40:00'", 2.03, 2.44]);  data.addRow(["'07:45:00'", 2.47, 2.75]);  data.addRow(["'07:50:00'", 1.77, 2.20]);  data.addRow(["'07:55:00'", 3.78, 4.39]);  data.addRow(["'08:00:00'", 1.56, 1.68]);  data.addRow(["'08:05:00'", 1.53, 1.90]);  data.addRow(["'08:10:00'", 2.23, 2.39]);  data.addRow(["'08:15:00'", 3.93, 4.71]);  data.addRow(["'08:20:00'", 3.34, 3.81]);  data.addRow(["'08:25:00'", 1.27, 1.69]);  data.addRow(["'08:30:00'", 3.03, 3.43]);  data.addRow(["'08:35:00'", 6.92, 8.13]);  data.addRow(["'08:40:00'", 8.24, 9.19]);  data.addRow(["'08:45:00'", 12.20, 17.58]);  data.addRow(["'08:50:00'", 4.81, 4.89]);  data.addRow(["'08:55:00'", 4.02, 4.43]);  data.addRow(["'09:00:00'", 7.02, 7.99]);  data.addRow(["'09:05:00'", 6.28, 6.97]);  data.addRow(["'09:10:00'", 6.01, 6.88]);  data.addRow(["'09:15:00'", 5.21, 5.91]);  data.addRow(["'09:20:00'", 4.72, 4.57]);  data.addRow(["'09:25:00'", 5.46, 6.31]);  data.addRow(["'09:30:00'", 5.57, 6.78]);  data.addRow(["'09:35:00'", 10.64, 13.02]);  data.addRow(["'09:40:00'", 8.00, 9.29]);  data.addRow(["'09:45:00'", 15.03, 20.11]);  data.addRow(["'09:50:00'", 9.25, 10.85]);  data.addRow(["'09:55:00'", 8.01, 10.35]);  data.addRow(["'10:00:00'", 8.26, 10.24]);  data.addRow(["'10:05:00'", 5.82, 6.72]);  data.addRow(["'10:10:00'", 15.94, 21.68]);  data.addRow(["'10:15:00'", 16.30, 16.61]);  data.addRow(["'10:20:00'", 9.37, 11.35]);  data.addRow(["'10:25:00'", 21.46, 34.96]);  data.addRow(["'10:30:00'", 21.85, 29.65]);  data.addRow(["'10:35:00'", 10.45, 11.54]);  data.addRow(["'10:40:00'", 28.47, 59.33]);  data.addRow(["'10:45:00'", 9.64, 10.78]);  data.addRow(["'10:50:00'", 20.97, 23.86]);  data.addRow(["'10:55:00'", 62.69, 93.45]);  data.addRow(["'11:00:00'", 18.42, 17.23]);  data.addRow(["'11:05:00'", 25.30, 31.39]);  data.addRow(["'11:10:00'", 18.37, 25.59]);  data.addRow(["'11:15:00'", 25.76, 35.19]);  data.addRow(["'11:20:00'", 25.96, 31.13]);  data.addRow(["'11:25:00'", 21.61, 26.45]);  data.addRow(["'11:30:00'", 20.51, 26.71]);  data.addRow(["'11:35:00'", 21.56, 28.83]);  data.addRow(["'11:40:00'", 25.02, 27.72]);  data.addRow(["'11:45:00'", 35.57, 33.98]);  data.addRow(["'11:50:00'", 27.46, 32.75]);  data.addRow(["'11:55:00'", 37.85, 46.09]);  data.addRow(["'12:00:00'", 14.64, 20.94]);  data.addRow(["'12:05:00'", 50.28, 44.23]);  data.addRow(["'12:10:00'", 37.99, 31.57]);  data.addRow(["'12:15:00'", 81.80, 98.36]);  data.addRow(["'12:20:00'", 16.77, 21.07]);  data.addRow(["'12:25:00'", 26.49, 20.16]);  data.addRow(["'12:30:00'", 18.63, 20.20]);  data.addRow(["'12:35:00'", 27.15, 23.39]);  data.addRow(["'12:40:00'", 8.18, 9.23]);  data.addRow(["'12:45:00'", 19.64, 16.34]);  data.addRow(["'12:50:00'", 14.24, 13.38]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='CAYEY Traffic Packets Max: 98.36 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='98'

	
        
      
	