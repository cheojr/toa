
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 17.82, 38.25]);  data.addRow(["'13:10:00'", 14.68, 17.99]);  data.addRow(["'13:15:00'", 33.43, 27.29]);  data.addRow(["'13:20:00'", 36.71, 26.95]);  data.addRow(["'13:25:00'", 26.16, 65.43]);  data.addRow(["'13:30:00'", 74.08, 59.51]);  data.addRow(["'13:35:00'", 35.68, 77.93]);  data.addRow(["'13:40:00'", 18.08, 26.36]);  data.addRow(["'13:45:00'", 19.49, 43.88]);  data.addRow(["'13:50:00'", 37.22, 31.06]);  data.addRow(["'13:55:00'", 23.73, 35.40]);  data.addRow(["'14:00:00'", 30.75, 37.51]);  data.addRow(["'14:05:00'", 49.13, 63.09]);  data.addRow(["'14:10:00'", 13.90, 20.90]);  data.addRow(["'14:15:00'", 45.32, 36.36]);  data.addRow(["'14:20:00'", 16.91, 21.09]);  data.addRow(["'14:25:00'", 38.48, 27.90]);  data.addRow(["'14:30:00'", 33.23, 11.48]);  data.addRow(["'14:35:00'", 9.98, 18.71]);  data.addRow(["'14:40:00'", 11.64, 22.19]);  data.addRow(["'14:45:00'", 10.83, 15.89]);  data.addRow(["'14:50:00'", 10.40, 17.30]);  data.addRow(["'14:55:00'", 11.58, 19.45]);  data.addRow(["'15:00:00'", 14.73, 12.54]);  data.addRow(["'15:05:00'", 8.71, 15.42]);  data.addRow(["'15:10:00'", 9.92, 13.04]);  data.addRow(["'15:15:00'", 10.83, 12.12]);  data.addRow(["'15:20:00'", 10.54, 9.21]);  data.addRow(["'15:25:00'", 11.15, 22.78]);  data.addRow(["'15:30:00'", 10.79, 10.73]);  data.addRow(["'15:35:00'", 9.64, 12.55]);  data.addRow(["'15:40:00'", 9.92, 14.79]);  data.addRow(["'15:45:00'", 7.92, 10.42]);  data.addRow(["'15:50:00'", 7.48, 11.11]);  data.addRow(["'15:55:00'", 5.52, 6.08]);  data.addRow(["'16:00:00'", 4.53, 5.28]);  data.addRow(["'16:05:00'", 6.71, 5.57]);  data.addRow(["'16:10:00'", 4.64, 10.24]);  data.addRow(["'16:15:00'", 14.12, 29.31]);  data.addRow(["'16:20:00'", 5.10, 13.46]);  data.addRow(["'16:25:00'", 4.68, 9.68]);  data.addRow(["'16:30:00'", 4.89, 12.56]);  data.addRow(["'16:35:00'", 3.83, 10.39]);  data.addRow(["'16:40:00'", 4.19, 10.55]);  data.addRow(["'16:45:00'", 5.60, 6.99]);  data.addRow(["'16:50:00'", 2.72, 3.96]);  data.addRow(["'16:55:00'", 5.05, 35.87]);  data.addRow(["'17:00:00'", 6.02, 35.03]);  data.addRow(["'17:05:00'", 3.69, 21.41]);  data.addRow(["'17:10:00'", 6.57, 3.41]);  data.addRow(["'17:15:00'", 17.91, 67.20]);  data.addRow(["'17:20:00'", 6.83, 26.87]);  data.addRow(["'17:25:00'", 5.15, 4.26]);  data.addRow(["'17:30:00'", 1.19, 1.41]);  data.addRow(["'17:35:00'", 2.75, 2.19]);  data.addRow(["'17:40:00'", 2.05, 4.26]);  data.addRow(["'17:45:00'", 2.56, 2.02]);  data.addRow(["'17:50:00'", 4.73, 35.65]);  data.addRow(["'17:55:00'", 3.52, 3.41]);  data.addRow(["'18:00:00'", 1.32, 1.58]);  data.addRow(["'18:05:00'", 3.93, 5.57]);  data.addRow(["'18:10:00'", 5.82, 2.78]);  data.addRow(["'18:15:00'", 2.26, 2.78]);  data.addRow(["'18:20:00'", 2.70, 6.04]);  data.addRow(["'18:25:00'", 3.11, 3.37]);  data.addRow(["'18:30:00'", 2.15, 2.62]);  data.addRow(["'18:35:00'", 2.02, 2.17]);  data.addRow(["'18:40:00'", 1.04, 1.08]);  data.addRow(["'18:45:00'", 3.14, 2.76]);  data.addRow(["'18:50:00'", 2.76, 3.31]);  data.addRow(["'18:55:00'", 2.42, 4.51]);  data.addRow(["'19:00:00'", 1.34, 1.39]);  data.addRow(["'19:05:00'", 3.48, 4.50]);  data.addRow(["'19:10:00'", 3.95, 5.93]);  data.addRow(["'19:15:00'", 3.45, 6.15]);  data.addRow(["'19:20:00'", 3.57, 4.96]);  data.addRow(["'19:25:00'", 3.52, 27.71]);  data.addRow(["'19:30:00'", 3.82, 25.31]);  data.addRow(["'19:35:00'", 2.64, 10.73]);  data.addRow(["'19:40:00'", 2.34, 19.16]);  data.addRow(["'19:45:00'", 4.50, 5.25]);  data.addRow(["'19:50:00'", 2.15, 1.07]);  data.addRow(["'19:55:00'", 1.04, 0.97]);  data.addRow(["'20:00:00'", 1.36, 1.99]);  data.addRow(["'20:05:00'", 1.31, 1.36]);  data.addRow(["'20:10:00'", 0.86, 1.06]);  data.addRow(["'20:15:00'", 0.68, 0.63]);  data.addRow(["'20:20:00'", 1.23, 2.79]);  data.addRow(["'20:25:00'", 1.17, 1.26]);  data.addRow(["'20:30:00'", 2.49, 25.53]);  data.addRow(["'20:35:00'", 1.38, 1.05]);  data.addRow(["'20:40:00'", 1.19, 1.28]);  data.addRow(["'20:45:00'", 4.64, 5.46]);  data.addRow(["'20:50:00'", 2.69, 2.37]);  data.addRow(["'20:55:00'", 1.19, 1.38]);  data.addRow(["'21:00:00'", 0.86, 0.86]);  data.addRow(["'21:05:00'", 0.84, 0.81]);  data.addRow(["'21:10:00'", 1.79, 1.58]);  data.addRow(["'21:15:00'", 2.71, 4.82]);  data.addRow(["'21:20:00'", 1.61, 1.32]);  data.addRow(["'21:25:00'", 1.84, 1.13]);  data.addRow(["'21:30:00'", 1.78, 1.65]);  data.addRow(["'21:35:00'", 1.02, 0.93]);  data.addRow(["'21:40:00'", 0.85, 1.00]);  data.addRow(["'21:45:00'", 3.95, 4.60]);  data.addRow(["'21:50:00'", 0.82, 1.97]);  data.addRow(["'21:55:00'", 1.27, 2.89]);  data.addRow(["'22:00:00'", 1.89, 1.95]);  data.addRow(["'22:05:00'", 1.21, 1.06]);  data.addRow(["'22:10:00'", 2.42, 3.79]);  data.addRow(["'22:15:00'", 1.02, 1.02]);  data.addRow(["'22:20:00'", 0.63, 0.48]);  data.addRow(["'22:25:00'", 1.07, 1.29]);  data.addRow(["'22:30:00'", 1.13, 1.21]);  data.addRow(["'22:35:00'", 0.59, 0.52]);  data.addRow(["'22:40:00'", 0.77, 0.69]);  data.addRow(["'22:45:00'", 4.00, 5.46]);  data.addRow(["'22:50:00'", 0.77, 0.70]);  data.addRow(["'22:55:00'", 2.98, 14.88]);  data.addRow(["'23:00:00'", 0.70, 0.83]);  data.addRow(["'23:05:00'", 0.60, 0.55]);  data.addRow(["'23:10:00'", 0.43, 0.80]);  data.addRow(["'23:15:00'", 0.49, 0.42]);  data.addRow(["'23:20:00'", 0.40, 0.34]);  data.addRow(["'23:25:00'", 0.44, 0.36]);  data.addRow(["'23:30:00'", 0.94, 2.44]);  data.addRow(["'23:35:00'", 0.64, 1.35]);  data.addRow(["'23:40:00'", 0.61, 0.61]);  data.addRow(["'23:45:00'", 5.25, 5.02]);  data.addRow(["'23:50:00'", 3.89, 1.71]);  data.addRow(["'23:55:00'", 0.63, 0.59]);  data.addRow(["'00:00:00'", 1.59, 0.59]);  data.addRow(["'00:05:00'", 0.56, 1.55]);  data.addRow(["'00:10:00'", 0.42, 0.34]);  data.addRow(["'00:15:00'", 0.47, 0.38]);  data.addRow(["'00:20:00'", 0.29, 0.30]);  data.addRow(["'00:25:00'", 0.42, 0.31]);  data.addRow(["'00:30:00'", 0.68, 0.96]);  data.addRow(["'00:35:00'", 0.46, 0.37]);  data.addRow(["'00:40:00'", 0.38, 0.25]);  data.addRow(["'00:45:00'", 0.40, 0.34]);  data.addRow(["'00:50:00'", 0.46, 0.44]);  data.addRow(["'00:55:00'", 0.53, 0.41]);  data.addRow(["'01:00:00'", 0.44, 0.34]);  data.addRow(["'01:05:00'", 3.83, 4.49]);  data.addRow(["'01:10:00'", 2.75, 16.07]);  data.addRow(["'01:15:00'", 0.34, 0.28]);  data.addRow(["'01:20:00'", 0.25, 0.20]);  data.addRow(["'01:25:00'", 0.44, 0.43]);  data.addRow(["'01:30:00'", 0.28, 0.31]);  data.addRow(["'01:35:00'", 0.23, 0.21]);  data.addRow(["'01:40:00'", 0.33, 0.25]);  data.addRow(["'01:45:00'", 0.47, 0.59]);  data.addRow(["'01:50:00'", 0.44, 0.57]);  data.addRow(["'01:55:00'", 0.37, 0.39]);  data.addRow(["'02:00:00'", 0.31, 0.37]);  data.addRow(["'02:05:00'", 4.04, 4.94]);  data.addRow(["'02:10:00'", 0.35, 0.44]);  data.addRow(["'02:15:00'", 0.74, 0.74]);  data.addRow(["'02:20:00'", 0.54, 0.44]);  data.addRow(["'02:25:00'", 0.34, 0.25]);  data.addRow(["'02:30:00'", 0.48, 0.44]);  data.addRow(["'02:35:00'", 0.39, 0.30]);  data.addRow(["'02:40:00'", 0.25, 0.21]);  data.addRow(["'02:45:00'", 2.71, 3.09]);  data.addRow(["'02:50:00'", 0.45, 0.43]);  data.addRow(["'02:55:00'", 0.40, 0.39]);  data.addRow(["'03:00:00'", 0.23, 0.21]);  data.addRow(["'03:05:00'", 0.21, 0.18]);  data.addRow(["'03:10:00'", 0.26, 0.20]);  data.addRow(["'03:15:00'", 0.20, 0.18]);  data.addRow(["'03:20:00'", 0.35, 0.34]);  data.addRow(["'03:25:00'", 0.23, 0.17]);  data.addRow(["'03:30:00'", 0.19, 0.17]);  data.addRow(["'03:35:00'", 0.25, 0.28]);  data.addRow(["'03:40:00'", 0.43, 0.34]);  data.addRow(["'03:45:00'", 3.89, 4.49]);  data.addRow(["'03:50:00'", 0.39, 0.32]);  data.addRow(["'03:55:00'", 0.38, 0.32]);  data.addRow(["'04:00:00'", 0.36, 0.26]);  data.addRow(["'04:05:00'", 0.39, 0.35]);  data.addRow(["'04:10:00'", 0.36, 0.49]);  data.addRow(["'04:15:00'", 0.31, 0.33]);  data.addRow(["'04:20:00'", 0.25, 0.22]);  data.addRow(["'04:25:00'", 0.18, 0.18]);  data.addRow(["'04:30:00'", 0.38, 0.39]);  data.addRow(["'04:35:00'", 0.20, 0.16]);  data.addRow(["'04:40:00'", 0.21, 0.19]);  data.addRow(["'04:45:00'", 3.64, 4.27]);  data.addRow(["'04:50:00'", 0.19, 0.17]);  data.addRow(["'04:55:00'", 0.29, 0.41]);  data.addRow(["'05:00:00'", 1.05, 1.33]);  data.addRow(["'05:05:00'", 0.23, 0.23]);  data.addRow(["'05:10:00'", 0.26, 0.22]);  data.addRow(["'05:15:00'", 0.24, 0.23]);  data.addRow(["'05:20:00'", 0.30, 0.24]);  data.addRow(["'05:25:00'", 0.77, 1.17]);  data.addRow(["'05:30:00'", 0.18, 0.21]);  data.addRow(["'05:35:00'", 1.57, 4.95]);  data.addRow(["'05:40:00'", 0.93, 1.79]);  data.addRow(["'05:45:00'", 0.24, 0.22]);  data.addRow(["'05:50:00'", 3.49, 3.95]);  data.addRow(["'05:55:00'", 0.34, 0.32]);  data.addRow(["'06:00:00'", 0.40, 0.37]);  data.addRow(["'06:05:00'", 0.41, 0.38]);  data.addRow(["'06:10:00'", 0.50, 0.41]);  data.addRow(["'06:15:00'", 0.58, 0.55]);  data.addRow(["'06:20:00'", 0.49, 0.52]);  data.addRow(["'06:25:00'", 0.67, 0.85]);  data.addRow(["'06:30:00'", 0.79, 0.87]);  data.addRow(["'06:35:00'", 1.06, 1.12]);  data.addRow(["'06:40:00'", 1.49, 1.35]);  data.addRow(["'06:45:00'", 0.81, 0.74]);  data.addRow(["'06:50:00'", 1.03, 1.00]);  data.addRow(["'06:55:00'", 0.99, 1.22]);  data.addRow(["'07:00:00'", 1.35, 1.67]);  data.addRow(["'07:05:00'", 1.24, 1.14]);  data.addRow(["'07:10:00'", 1.30, 1.38]);  data.addRow(["'07:15:00'", 1.20, 1.31]);  data.addRow(["'07:20:00'", 1.50, 1.79]);  data.addRow(["'07:25:00'", 1.86, 2.33]);  data.addRow(["'07:30:00'", 1.44, 1.67]);  data.addRow(["'07:35:00'", 2.93, 2.04]);  data.addRow(["'07:40:00'", 1.75, 1.88]);  data.addRow(["'07:45:00'", 2.98, 3.68]);  data.addRow(["'07:50:00'", 4.88, 5.95]);  data.addRow(["'07:55:00'", 3.28, 3.90]);  data.addRow(["'08:00:00'", 4.52, 15.95]);  data.addRow(["'08:05:00'", 4.84, 6.34]);  data.addRow(["'08:10:00'", 4.38, 11.61]);  data.addRow(["'08:15:00'", 9.56, 17.64]);  data.addRow(["'08:20:00'", 6.42, 20.06]);  data.addRow(["'08:25:00'", 5.88, 13.23]);  data.addRow(["'08:30:00'", 2.92, 5.66]);  data.addRow(["'08:35:00'", 8.56, 20.69]);  data.addRow(["'08:40:00'", 19.44, 24.56]);  data.addRow(["'08:45:00'", 23.40, 12.11]);  data.addRow(["'08:50:00'", 7.23, 8.26]);  data.addRow(["'08:55:00'", 11.89, 19.84]);  data.addRow(["'09:00:00'", 6.23, 7.74]);  data.addRow(["'09:05:00'", 7.98, 13.08]);  data.addRow(["'09:10:00'", 9.51, 48.53]);  data.addRow(["'09:15:00'", 17.56, 15.12]);  data.addRow(["'09:20:00'", 8.49, 28.64]);  data.addRow(["'09:25:00'", 35.57, 16.28]);  data.addRow(["'09:30:00'", 7.90, 9.74]);  data.addRow(["'09:35:00'", 7.95, 11.36]);  data.addRow(["'09:40:00'", 35.61, 107.34]);  data.addRow(["'09:45:00'", 10.73, 22.77]);  data.addRow(["'09:50:00'", 30.68, 22.60]);  data.addRow(["'09:55:00'", 9.30, 15.73]);  data.addRow(["'10:00:00'", 9.25, 8.84]);  data.addRow(["'10:05:00'", 15.02, 31.93]);  data.addRow(["'10:10:00'", 17.00, 21.36]);  data.addRow(["'10:15:00'", 9.94, 19.65]);  data.addRow(["'10:20:00'", 9.71, 10.36]);  data.addRow(["'10:25:00'", 7.58, 18.70]);  data.addRow(["'10:30:00'", 6.81, 10.02]);  data.addRow(["'10:35:00'", 22.21, 34.17]);  data.addRow(["'10:40:00'", 6.53, 23.20]);  data.addRow(["'10:45:00'", 7.09, 15.31]);  data.addRow(["'10:50:00'", 6.87, 10.53]);  data.addRow(["'10:55:00'", 42.66, 77.94]);  data.addRow(["'11:00:00'", 29.29, 48.97]);  data.addRow(["'11:05:00'", 6.80, 8.76]);  data.addRow(["'11:10:00'", 36.82, 56.48]);  data.addRow(["'11:15:00'", 8.88, 16.38]);  data.addRow(["'11:20:00'", 6.77, 27.63]);  data.addRow(["'11:25:00'", 30.85, 42.82]);  data.addRow(["'11:30:00'", 9.17, 14.20]);  data.addRow(["'11:35:00'", 7.20, 19.63]);  data.addRow(["'11:40:00'", 22.96, 30.42]);  data.addRow(["'11:45:00'", 5.94, 5.59]);  data.addRow(["'11:50:00'", 7.07, 6.99]);  data.addRow(["'11:55:00'", 29.95, 50.35]);  data.addRow(["'12:00:00'", 29.93, 54.99]);  data.addRow(["'12:05:00'", 6.97, 14.11]);  data.addRow(["'12:10:00'", 12.93, 16.24]);  data.addRow(["'12:15:00'", 32.11, 52.66]);  data.addRow(["'12:20:00'", 10.81, 16.88]);  data.addRow(["'12:25:00'", 4.62, 6.20]);  data.addRow(["'12:30:00'", 5.54, 7.48]);  data.addRow(["'12:35:00'", 15.74, 27.52]);  data.addRow(["'12:40:00'", 6.51, 9.39]);  data.addRow(["'12:45:00'", 6.18, 7.21]);  data.addRow(["'12:50:00'", 9.94, 16.36]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Packets Max: 107.34 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Packets'
	var maxvalue='107'

	
        
      
	