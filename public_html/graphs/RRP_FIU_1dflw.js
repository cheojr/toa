
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input KB ');
        data.addColumn('number', 'Output KB '); data.addRow(["'13:00:00'", 0.00, 0.00]);  data.addRow(["'13:05:00'", 5.56, 5.27]);  data.addRow(["'13:10:00'", 5.20, 4.86]);  data.addRow(["'13:15:00'", 5.14, 4.76]);  data.addRow(["'13:20:00'", 5.40, 5.15]);  data.addRow(["'13:25:00'", 5.83, 5.48]);  data.addRow(["'13:30:00'", 5.47, 5.22]);  data.addRow(["'13:35:00'", 5.45, 5.13]);  data.addRow(["'13:40:00'", 5.95, 5.49]);  data.addRow(["'13:45:00'", 6.13, 5.68]);  data.addRow(["'13:50:00'", 5.79, 5.49]);  data.addRow(["'13:55:00'", 6.57, 6.08]);  data.addRow(["'14:00:00'", 6.08, 5.55]);  data.addRow(["'14:05:00'", 5.85, 5.40]);  data.addRow(["'14:10:00'", 5.24, 4.76]);  data.addRow(["'14:15:00'", 5.05, 4.75]);  data.addRow(["'14:20:00'", 4.86, 4.57]);  data.addRow(["'14:25:00'", 5.51, 5.16]);  data.addRow(["'14:30:00'", 4.90, 4.67]);  data.addRow(["'14:35:00'", 5.39, 5.05]);  data.addRow(["'14:40:00'", 5.76, 5.49]);  data.addRow(["'14:45:00'", 5.80, 5.48]);  data.addRow(["'14:50:00'", 5.37, 5.09]);  data.addRow(["'14:55:00'", 5.84, 5.57]);  data.addRow(["'15:00:00'", 5.95, 5.54]);  data.addRow(["'15:05:00'", 5.91, 5.35]);  data.addRow(["'15:10:00'", 5.19, 5.02]);  data.addRow(["'15:15:00'", 4.99, 4.75]);  data.addRow(["'15:20:00'", 5.32, 5.04]);  data.addRow(["'15:25:00'", 5.25, 4.94]);  data.addRow(["'15:30:00'", 5.63, 5.29]);  data.addRow(["'15:35:00'", 5.07, 4.74]);  data.addRow(["'15:40:00'", 5.29, 4.97]);  data.addRow(["'15:45:00'", 5.51, 5.11]);  data.addRow(["'15:50:00'", 4.38, 4.03]);  data.addRow(["'15:55:00'", 4.21, 4.08]);  data.addRow(["'16:00:00'", 4.26, 3.98]);  data.addRow(["'16:05:00'", 5.00, 4.62]);  data.addRow(["'16:10:00'", 5.65, 5.07]);  data.addRow(["'16:15:00'", 5.01, 4.68]);  data.addRow(["'16:20:00'", 5.11, 4.91]);  data.addRow(["'16:25:00'", 5.06, 4.88]);  data.addRow(["'16:30:00'", 4.82, 4.69]);  data.addRow(["'16:35:00'", 4.25, 3.97]);  data.addRow(["'16:40:00'", 4.44, 4.24]);  data.addRow(["'16:45:00'", 4.35, 4.19]);  data.addRow(["'16:50:00'", 3.90, 3.71]);  data.addRow(["'16:55:00'", 4.08, 4.02]);  data.addRow(["'17:00:00'", 4.09, 3.99]);  data.addRow(["'17:05:00'", 4.06, 3.91]);  data.addRow(["'17:10:00'", 3.50, 3.43]);  data.addRow(["'17:15:00'", 5.31, 4.79]);  data.addRow(["'17:20:00'", 4.07, 3.85]);  data.addRow(["'17:25:00'", 3.01, 2.96]);  data.addRow(["'17:30:00'", 2.82, 2.76]);  data.addRow(["'17:35:00'", 2.93, 2.71]);  data.addRow(["'17:40:00'", 3.21, 3.06]);  data.addRow(["'17:45:00'", 3.20, 3.07]);  data.addRow(["'17:50:00'", 3.16, 3.18]);  data.addRow(["'17:55:00'", 3.20, 2.96]);  data.addRow(["'18:00:00'", 3.42, 3.12]);  data.addRow(["'18:05:00'", 3.10, 2.96]);  data.addRow(["'18:10:00'", 3.07, 2.92]);  data.addRow(["'18:15:00'", 3.36, 3.29]);  data.addRow(["'18:20:00'", 3.01, 2.86]);  data.addRow(["'18:25:00'", 3.45, 3.18]);  data.addRow(["'18:30:00'", 3.45, 3.10]);  data.addRow(["'18:35:00'", 3.14, 2.86]);  data.addRow(["'18:40:00'", 2.96, 2.69]);  data.addRow(["'18:45:00'", 2.52, 2.32]);  data.addRow(["'18:50:00'", 2.79, 2.61]);  data.addRow(["'18:55:00'", 2.78, 2.52]);  data.addRow(["'19:00:00'", 2.77, 2.63]);  data.addRow(["'19:05:00'", 2.59, 2.41]);  data.addRow(["'19:10:00'", 2.72, 2.44]);  data.addRow(["'19:15:00'", 2.68, 2.37]);  data.addRow(["'19:20:00'", 2.63, 2.53]);  data.addRow(["'19:25:00'", 2.48, 2.38]);  data.addRow(["'19:30:00'", 2.53, 2.32]);  data.addRow(["'19:35:00'", 2.12, 1.98]);  data.addRow(["'19:40:00'", 2.08, 1.97]);  data.addRow(["'19:45:00'", 2.33, 2.16]);  data.addRow(["'19:50:00'", 2.26, 2.12]);  data.addRow(["'19:55:00'", 2.32, 2.16]);  data.addRow(["'20:00:00'", 2.22, 2.10]);  data.addRow(["'20:05:00'", 2.60, 2.48]);  data.addRow(["'20:10:00'", 2.37, 2.19]);  data.addRow(["'20:15:00'", 2.35, 2.16]);  data.addRow(["'20:20:00'", 2.46, 2.26]);  data.addRow(["'20:25:00'", 2.50, 2.33]);  data.addRow(["'20:30:00'", 2.45, 2.19]);  data.addRow(["'20:35:00'", 2.41, 2.18]);  data.addRow(["'20:40:00'", 2.17, 2.02]);  data.addRow(["'20:45:00'", 2.24, 2.07]);  data.addRow(["'20:50:00'", 2.39, 2.15]);  data.addRow(["'20:55:00'", 2.50, 2.33]);  data.addRow(["'21:00:00'", 2.21, 2.01]);  data.addRow(["'21:05:00'", 2.16, 1.92]);  data.addRow(["'21:10:00'", 2.46, 2.22]);  data.addRow(["'21:15:00'", 2.25, 1.98]);  data.addRow(["'21:20:00'", 2.01, 1.96]);  data.addRow(["'21:25:00'", 1.84, 1.80]);  data.addRow(["'21:30:00'", 1.74, 1.76]);  data.addRow(["'21:35:00'", 1.72, 1.57]);  data.addRow(["'21:40:00'", 1.59, 1.51]);  data.addRow(["'21:45:00'", 1.60, 1.46]);  data.addRow(["'21:50:00'", 1.75, 1.74]);  data.addRow(["'21:55:00'", 1.66, 1.56]);  data.addRow(["'22:00:00'", 1.48, 1.48]);  data.addRow(["'22:05:00'", 1.75, 1.56]);  data.addRow(["'22:10:00'", 1.45, 1.38]);  data.addRow(["'22:15:00'", 1.59, 1.53]);  data.addRow(["'22:20:00'", 1.39, 1.39]);  data.addRow(["'22:25:00'", 1.46, 1.38]);  data.addRow(["'22:30:00'", 1.45, 1.36]);  data.addRow(["'22:35:00'", 1.34, 1.29]);  data.addRow(["'22:40:00'", 1.41, 1.42]);  data.addRow(["'22:45:00'", 1.46, 1.40]);  data.addRow(["'22:50:00'", 1.32, 1.30]);  data.addRow(["'22:55:00'", 1.43, 1.34]);  data.addRow(["'23:00:00'", 1.76, 1.59]);  data.addRow(["'23:05:00'", 1.26, 1.18]);  data.addRow(["'23:10:00'", 1.57, 1.50]);  data.addRow(["'23:15:00'", 1.35, 1.42]);  data.addRow(["'23:20:00'", 1.20, 1.18]);  data.addRow(["'23:25:00'", 1.04, 1.02]);  data.addRow(["'23:30:00'", 1.11, 1.07]);  data.addRow(["'23:35:00'", 1.09, 1.09]);  data.addRow(["'23:40:00'", 1.02, 1.05]);  data.addRow(["'23:45:00'", 1.23, 1.21]);  data.addRow(["'23:50:00'", 1.29, 1.31]);  data.addRow(["'23:55:00'", 1.22, 1.30]);  data.addRow(["'00:00:00'", 1.28, 1.26]);  data.addRow(["'00:05:00'", 1.21, 1.14]);  data.addRow(["'00:10:00'", 1.18, 1.18]);  data.addRow(["'00:15:00'", 1.02, 1.00]);  data.addRow(["'00:20:00'", 1.09, 1.05]);  data.addRow(["'00:25:00'", 1.50, 1.47]);  data.addRow(["'00:30:00'", 1.09, 1.15]);  data.addRow(["'00:35:00'", 1.06, 1.10]);  data.addRow(["'00:40:00'", 1.04, 1.01]);  data.addRow(["'00:45:00'", 0.95, 0.93]);  data.addRow(["'00:50:00'", 0.94, 0.96]);  data.addRow(["'00:55:00'", 1.00, 1.03]);  data.addRow(["'01:00:00'", 0.98, 0.99]);  data.addRow(["'01:05:00'", 0.85, 0.84]);  data.addRow(["'01:10:00'", 0.85, 0.84]);  data.addRow(["'01:15:00'", 0.88, 0.83]);  data.addRow(["'01:20:00'", 0.80, 0.81]);  data.addRow(["'01:25:00'", 0.75, 0.75]);  data.addRow(["'01:30:00'", 0.70, 0.70]);  data.addRow(["'01:35:00'", 1.13, 1.13]);  data.addRow(["'01:40:00'", 0.74, 0.75]);  data.addRow(["'01:45:00'", 0.59, 0.58]);  data.addRow(["'01:50:00'", 0.55, 0.52]);  data.addRow(["'01:55:00'", 0.57, 0.57]);  data.addRow(["'02:00:00'", 0.72, 0.80]);  data.addRow(["'02:05:00'", 0.55, 0.57]);  data.addRow(["'02:10:00'", 0.49, 0.52]);  data.addRow(["'02:15:00'", 0.57, 0.64]);  data.addRow(["'02:20:00'", 0.51, 0.55]);  data.addRow(["'02:25:00'", 0.46, 0.52]);  data.addRow(["'02:30:00'", 0.60, 0.64]);  data.addRow(["'02:35:00'", 0.55, 0.62]);  data.addRow(["'02:40:00'", 0.74, 0.79]);  data.addRow(["'02:45:00'", 0.54, 0.56]);  data.addRow(["'02:50:00'", 0.65, 0.63]);  data.addRow(["'02:55:00'", 0.50, 0.54]);  data.addRow(["'03:00:00'", 0.53, 0.56]);  data.addRow(["'03:05:00'", 0.59, 0.61]);  data.addRow(["'03:10:00'", 0.53, 0.58]);  data.addRow(["'03:15:00'", 0.50, 0.55]);  data.addRow(["'03:20:00'", 0.42, 0.49]);  data.addRow(["'03:25:00'", 0.48, 0.50]);  data.addRow(["'03:30:00'", 0.44, 0.52]);  data.addRow(["'03:35:00'", 0.51, 0.54]);  data.addRow(["'03:40:00'", 0.59, 0.61]);  data.addRow(["'03:45:00'", 0.42, 0.46]);  data.addRow(["'03:50:00'", 0.37, 0.39]);  data.addRow(["'03:55:00'", 0.34, 0.38]);  data.addRow(["'04:00:00'", 0.43, 0.53]);  data.addRow(["'04:05:00'", 0.53, 0.58]);  data.addRow(["'04:10:00'", 0.51, 0.58]);  data.addRow(["'04:15:00'", 0.70, 0.75]);  data.addRow(["'04:20:00'", 0.48, 0.53]);  data.addRow(["'04:25:00'", 0.45, 0.46]);  data.addRow(["'04:30:00'", 0.43, 0.52]);  data.addRow(["'04:35:00'", 0.62, 0.74]);  data.addRow(["'04:40:00'", 0.54, 0.61]);  data.addRow(["'04:45:00'", 1.01, 0.78]);  data.addRow(["'04:50:00'", 0.50, 0.55]);  data.addRow(["'04:55:00'", 0.48, 0.49]);  data.addRow(["'05:00:00'", 0.55, 0.59]);  data.addRow(["'05:05:00'", 0.47, 0.50]);  data.addRow(["'05:10:00'", 0.44, 0.49]);  data.addRow(["'05:15:00'", 0.44, 0.44]);  data.addRow(["'05:20:00'", 0.50, 0.55]);  data.addRow(["'05:25:00'", 0.39, 0.42]);  data.addRow(["'05:30:00'", 0.43, 0.50]);  data.addRow(["'05:35:00'", 0.58, 0.67]);  data.addRow(["'05:40:00'", 0.49, 0.58]);  data.addRow(["'05:45:00'", 0.42, 0.46]);  data.addRow(["'05:50:00'", 0.43, 0.50]);  data.addRow(["'05:55:00'", 0.46, 0.49]);  data.addRow(["'06:00:00'", 0.43, 0.52]);  data.addRow(["'06:05:00'", 0.42, 0.53]);  data.addRow(["'06:10:00'", 0.52, 0.57]);  data.addRow(["'06:15:00'", 0.49, 0.49]);  data.addRow(["'06:20:00'", 0.56, 0.56]);  data.addRow(["'06:25:00'", 0.57, 0.55]);  data.addRow(["'06:30:00'", 0.99, 1.02]);  data.addRow(["'06:35:00'", 0.84, 0.88]);  data.addRow(["'06:40:00'", 0.70, 0.72]);  data.addRow(["'06:45:00'", 0.67, 0.63]);  data.addRow(["'06:50:00'", 0.81, 0.76]);  data.addRow(["'06:55:00'", 0.76, 0.74]);  data.addRow(["'07:00:00'", 0.83, 0.84]);  data.addRow(["'07:05:00'", 0.87, 0.85]);  data.addRow(["'07:10:00'", 1.11, 1.16]);  data.addRow(["'07:15:00'", 1.03, 1.00]);  data.addRow(["'07:20:00'", 0.83, 0.83]);  data.addRow(["'07:25:00'", 1.14, 1.09]);  data.addRow(["'07:30:00'", 1.23, 1.18]);  data.addRow(["'07:35:00'", 1.71, 1.59]);  data.addRow(["'07:40:00'", 1.58, 1.54]);  data.addRow(["'07:45:00'", 1.44, 1.45]);  data.addRow(["'07:50:00'", 1.43, 1.42]);  data.addRow(["'07:55:00'", 1.65, 1.58]);  data.addRow(["'08:00:00'", 1.97, 1.82]);  data.addRow(["'08:05:00'", 2.00, 1.81]);  data.addRow(["'08:10:00'", 1.99, 1.88]);  data.addRow(["'08:15:00'", 2.13, 2.04]);  data.addRow(["'08:20:00'", 2.21, 2.09]);  data.addRow(["'08:25:00'", 2.43, 2.20]);  data.addRow(["'08:30:00'", 2.14, 1.94]);  data.addRow(["'08:35:00'", 2.22, 2.08]);  data.addRow(["'08:40:00'", 2.64, 2.48]);  data.addRow(["'08:45:00'", 2.74, 2.65]);  data.addRow(["'08:50:00'", 3.48, 3.20]);  data.addRow(["'08:55:00'", 3.57, 3.36]);  data.addRow(["'09:00:00'", 3.38, 3.23]);  data.addRow(["'09:05:00'", 3.36, 3.11]);  data.addRow(["'09:10:00'", 3.60, 3.31]);  data.addRow(["'09:15:00'", 3.76, 3.49]);  data.addRow(["'09:20:00'", 3.49, 3.24]);  data.addRow(["'09:25:00'", 3.77, 3.54]);  data.addRow(["'09:30:00'", 3.90, 3.70]);  data.addRow(["'09:35:00'", 4.22, 3.90]);  data.addRow(["'09:40:00'", 4.05, 3.84]);  data.addRow(["'09:45:00'", 3.48, 3.24]);  data.addRow(["'09:50:00'", 4.14, 3.85]);  data.addRow(["'09:55:00'", 3.65, 3.49]);  data.addRow(["'10:00:00'", 3.38, 3.26]);  data.addRow(["'10:05:00'", 4.07, 3.55]);  data.addRow(["'10:10:00'", 4.04, 3.80]);  data.addRow(["'10:15:00'", 4.18, 3.86]);  data.addRow(["'10:20:00'", 3.80, 3.57]);  data.addRow(["'10:25:00'", 3.94, 3.59]);  data.addRow(["'10:30:00'", 4.60, 4.28]);  data.addRow(["'10:35:00'", 4.42, 4.08]);  data.addRow(["'10:40:00'", 3.93, 3.64]);  data.addRow(["'10:45:00'", 4.06, 3.71]);  data.addRow(["'10:50:00'", 4.09, 3.90]);  data.addRow(["'10:55:00'", 4.12, 3.79]);  data.addRow(["'11:00:00'", 3.99, 3.69]);  data.addRow(["'11:05:00'", 4.57, 4.12]);  data.addRow(["'11:10:00'", 5.16, 4.44]);  data.addRow(["'11:15:00'", 4.41, 4.03]);  data.addRow(["'11:20:00'", 4.22, 3.94]);  data.addRow(["'11:25:00'", 4.01, 3.77]);  data.addRow(["'11:30:00'", 4.30, 3.98]);  data.addRow(["'11:35:00'", 3.83, 3.65]);  data.addRow(["'11:40:00'", 3.80, 3.52]);  data.addRow(["'11:45:00'", 3.96, 3.71]);  data.addRow(["'11:50:00'", 3.91, 3.60]);  data.addRow(["'11:55:00'", 3.78, 3.62]);  data.addRow(["'12:00:00'", 3.84, 3.62]);  data.addRow(["'12:05:00'", 3.50, 3.31]);  data.addRow(["'12:10:00'", 3.33, 3.19]);  data.addRow(["'12:15:00'", 3.67, 3.24]);  data.addRow(["'12:20:00'", 3.76, 3.48]);  data.addRow(["'12:25:00'", 3.51, 3.44]);  data.addRow(["'12:30:00'", 3.59, 3.37]);  data.addRow(["'12:35:00'", 3.42, 3.22]);  data.addRow(["'12:40:00'", 3.26, 3.06]);  data.addRow(["'12:45:00'", 3.36, 3.18]);  data.addRow(["'12:50:00'", 3.21, 3.08]);  data.addRow(["'12:55:00'", 0.00, 0.00]);  data.addRow(["'13:00:00'", 0.00, 0.00]); 
	var graphtitle='FIU Traffic Flows Max: 6.57 KB Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='6'

	
        
      
	