
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input MB ');
        data.addColumn('number', 'Output MB '); data.addRow(["'15:30:00'","'2014-04-28 15:30:00'",0.00, 0.00]);  data.addRow(["'15:35:00'","'2014-04-28 15:35:00'",244.77, 155.58]);  data.addRow(["'15:40:00'","'2014-04-28 15:40:00'",196.64, 163.55]);  data.addRow(["'15:45:00'","'2014-04-28 15:45:00'",239.25, 160.99]);  data.addRow(["'15:50:00'","'2014-04-28 15:50:00'",259.76, 191.53]);  data.addRow(["'15:55:00'","'2014-04-28 15:55:00'",162.28, 243.09]);  data.addRow(["'16:00:00'","'2014-04-28 16:00:00'",221.02, 180.15]);  data.addRow(["'16:05:00'","'2014-04-28 16:05:00'",135.28, 186.15]);  data.addRow(["'16:10:00'","'2014-04-28 16:10:00'",131.29, 109.15]);  data.addRow(["'16:15:00'","'2014-04-28 16:15:00'",204.09, 214.58]);  data.addRow(["'16:20:00'","'2014-04-28 16:20:00'",129.27, 289.74]);  data.addRow(["'16:25:00'","'2014-04-28 16:25:00'",392.43, 149.65]);  data.addRow(["'16:30:00'","'2014-04-28 16:30:00'",237.56, 200.67]);  data.addRow(["'16:35:00'","'2014-04-28 16:35:00'",193.10, 144.03]);  data.addRow(["'16:40:00'","'2014-04-28 16:40:00'",128.41, 119.75]);  data.addRow(["'16:45:00'","'2014-04-28 16:45:00'",166.73, 131.82]);  data.addRow(["'16:50:00'","'2014-04-28 16:50:00'",219.75, 146.16]);  data.addRow(["'16:55:00'","'2014-04-28 16:55:00'",137.69, 229.33]);  data.addRow(["'17:00:00'","'2014-04-28 17:00:00'",201.83, 99.55]);  data.addRow(["'17:05:00'","'2014-04-28 17:05:00'",137.57, 184.31]);  data.addRow(["'17:10:00'","'2014-04-28 17:10:00'",85.02, 184.20]);  data.addRow(["'17:15:00'","'2014-04-28 17:15:00'",202.05, 184.85]);  data.addRow(["'17:20:00'","'2014-04-28 17:20:00'",91.64, 268.57]);  data.addRow(["'17:25:00'","'2014-04-28 17:25:00'",212.11, 151.52]);  data.addRow(["'17:30:00'","'2014-04-28 17:30:00'",94.23, 205.91]);  data.addRow(["'17:35:00'","'2014-04-28 17:35:00'",121.52, 126.04]);  data.addRow(["'17:40:00'","'2014-04-28 17:40:00'",96.23, 179.50]);  data.addRow(["'17:45:00'","'2014-04-28 17:45:00'",120.54, 153.09]);  data.addRow(["'17:50:00'","'2014-04-28 17:50:00'",189.04, 110.10]);  data.addRow(["'17:55:00'","'2014-04-28 17:55:00'",118.24, 156.70]);  data.addRow(["'18:00:00'","'2014-04-28 18:00:00'",226.57, 106.90]);  data.addRow(["'18:05:00'","'2014-04-28 18:05:00'",96.62, 114.95]);  data.addRow(["'18:10:00'","'2014-04-28 18:10:00'",86.96, 71.26]);  data.addRow(["'18:15:00'","'2014-04-28 18:15:00'",131.40, 247.10]);  data.addRow(["'18:20:00'","'2014-04-28 18:20:00'",469.32, 208.49]);  data.addRow(["'18:25:00'","'2014-04-28 18:25:00'",282.29, 68.38]);  data.addRow(["'18:30:00'","'2014-04-28 18:30:00'",56.44, 154.16]);  data.addRow(["'18:35:00'","'2014-04-28 18:35:00'",85.96, 81.79]);  data.addRow(["'18:40:00'","'2014-04-28 18:40:00'",122.34, 115.37]);  data.addRow(["'18:45:00'","'2014-04-28 18:45:00'",114.30, 85.13]);  data.addRow(["'18:50:00'","'2014-04-28 18:50:00'",168.26, 65.99]);  data.addRow(["'18:55:00'","'2014-04-28 18:55:00'",111.94, 65.25]);  data.addRow(["'19:00:00'","'2014-04-28 19:00:00'",177.99, 36.25]);  data.addRow(["'19:05:00'","'2014-04-28 19:05:00'",117.70, 53.86]);  data.addRow(["'19:10:00'","'2014-04-28 19:10:00'",413.40, 65.34]);  data.addRow(["'19:15:00'","'2014-04-28 19:15:00'",83.46, 85.97]);  data.addRow(["'19:20:00'","'2014-04-28 19:20:00'",52.59, 120.30]);  data.addRow(["'19:25:00'","'2014-04-28 19:25:00'",96.41, 44.58]);  data.addRow(["'19:30:00'","'2014-04-28 19:30:00'",131.39, 86.38]);  data.addRow(["'19:35:00'","'2014-04-28 19:35:00'",172.88, 66.97]);  data.addRow(["'19:40:00'","'2014-04-28 19:40:00'",100.24, 137.76]);  data.addRow(["'19:45:00'","'2014-04-28 19:45:00'",67.70, 68.07]);  data.addRow(["'19:50:00'","'2014-04-28 19:50:00'",69.39, 62.39]);  data.addRow(["'19:55:00'","'2014-04-28 19:55:00'",110.54, 59.54]);  data.addRow(["'20:00:00'","'2014-04-28 20:00:00'",71.20, 58.43]);  data.addRow(["'20:05:00'","'2014-04-28 20:05:00'",118.70, 61.73]);  data.addRow(["'20:10:00'","'2014-04-28 20:10:00'",67.95, 99.13]);  data.addRow(["'20:15:00'","'2014-04-28 20:15:00'",147.80, 74.85]);  data.addRow(["'20:20:00'","'2014-04-28 20:20:00'",43.97, 79.18]);  data.addRow(["'20:25:00'","'2014-04-28 20:25:00'",84.78, 97.90]);  data.addRow(["'20:30:00'","'2014-04-28 20:30:00'",82.04, 47.54]);  data.addRow(["'20:35:00'","'2014-04-28 20:35:00'",61.36, 56.00]);  data.addRow(["'20:40:00'","'2014-04-28 20:40:00'",64.91, 72.81]);  data.addRow(["'20:45:00'","'2014-04-28 20:45:00'",47.00, 87.00]);  data.addRow(["'20:50:00'","'2014-04-28 20:50:00'",83.79, 41.92]);  data.addRow(["'20:55:00'","'2014-04-28 20:55:00'",88.59, 58.06]);  data.addRow(["'21:00:00'","'2014-04-28 21:00:00'",97.97, 25.33]);  data.addRow(["'21:05:00'","'2014-04-28 21:05:00'",537.86, 46.27]);  data.addRow(["'21:10:00'","'2014-04-28 21:10:00'",490.56, 94.33]);  data.addRow(["'21:15:00'","'2014-04-28 21:15:00'",184.25, 69.16]);  data.addRow(["'21:20:00'","'2014-04-28 21:20:00'",96.25, 114.22]);  data.addRow(["'21:25:00'","'2014-04-28 21:25:00'",69.04, 39.12]);  data.addRow(["'21:30:00'","'2014-04-28 21:30:00'",78.35, 36.44]);  data.addRow(["'21:35:00'","'2014-04-28 21:35:00'",69.36, 35.90]);  data.addRow(["'21:40:00'","'2014-04-28 21:40:00'",121.44, 52.80]);  data.addRow(["'21:45:00'","'2014-04-28 21:45:00'",113.43, 42.79]);  data.addRow(["'21:50:00'","'2014-04-28 21:50:00'",62.90, 27.82]);  data.addRow(["'21:55:00'","'2014-04-28 21:55:00'",111.30, 48.76]);  data.addRow(["'22:00:00'","'2014-04-28 22:00:00'",118.16, 22.82]);  data.addRow(["'22:05:00'","'2014-04-28 22:05:00'",50.32, 34.77]);  data.addRow(["'22:10:00'","'2014-04-28 22:10:00'",78.92, 28.80]);  data.addRow(["'22:15:00'","'2014-04-28 22:15:00'",78.84, 22.73]);  data.addRow(["'22:20:00'","'2014-04-28 22:20:00'",62.77, 56.75]);  data.addRow(["'22:25:00'","'2014-04-28 22:25:00'",336.08, 37.61]);  data.addRow(["'22:30:00'","'2014-04-28 22:30:00'",160.67, 56.70]);  data.addRow(["'22:35:00'","'2014-04-28 22:35:00'",49.72, 66.12]);  data.addRow(["'22:40:00'","'2014-04-28 22:40:00'",43.44, 40.78]);  data.addRow(["'22:45:00'","'2014-04-28 22:45:00'",29.25, 32.76]);  data.addRow(["'22:50:00'","'2014-04-28 22:50:00'",58.08, 58.86]);  data.addRow(["'22:55:00'","'2014-04-28 22:55:00'",17.18, 39.15]);  data.addRow(["'23:00:00'","'2014-04-28 23:00:00'",62.20, 29.25]);  data.addRow(["'23:05:00'","'2014-04-28 23:05:00'",64.97, 26.35]);  data.addRow(["'23:10:00'","'2014-04-28 23:10:00'",42.07, 39.03]);  data.addRow(["'23:15:00'","'2014-04-28 23:15:00'",27.74, 37.09]);  data.addRow(["'23:20:00'","'2014-04-28 23:20:00'",24.27, 54.00]);  data.addRow(["'23:25:00'","'2014-04-28 23:25:00'",39.89, 19.35]);  data.addRow(["'23:30:00'","'2014-04-28 23:30:00'",28.29, 11.11]);  data.addRow(["'23:35:00'","'2014-04-28 23:35:00'",40.16, 36.23]);  data.addRow(["'23:40:00'","'2014-04-28 23:40:00'",50.06, 30.03]);  data.addRow(["'23:45:00'","'2014-04-28 23:45:00'",41.08, 22.76]);  data.addRow(["'23:50:00'","'2014-04-28 23:50:00'",81.21, 46.92]);  data.addRow(["'23:55:00'","'2014-04-28 23:55:00'",105.40, 13.70]);  data.addRow(["'00:00:00'","'2014-04-29 00:00:00'",137.60, 18.75]);  data.addRow(["'00:05:00'","'2014-04-29 00:05:00'",120.33, 64.31]);  data.addRow(["'00:10:00'","'2014-04-29 00:10:00'",165.99, 47.60]);  data.addRow(["'00:15:00'","'2014-04-29 00:15:00'",95.35, 20.55]);  data.addRow(["'00:20:00'","'2014-04-29 00:20:00'",83.81, 30.07]);  data.addRow(["'00:25:00'","'2014-04-29 00:25:00'",108.74, 35.47]);  data.addRow(["'00:30:00'","'2014-04-29 00:30:00'",217.25, 22.90]);  data.addRow(["'00:35:00'","'2014-04-29 00:35:00'",94.34, 55.81]);  data.addRow(["'00:40:00'","'2014-04-29 00:40:00'",200.56, 82.22]);  data.addRow(["'00:45:00'","'2014-04-29 00:45:00'",83.33, 36.43]);  data.addRow(["'00:50:00'","'2014-04-29 00:50:00'",120.14, 58.26]);  data.addRow(["'00:55:00'","'2014-04-29 00:55:00'",114.37, 10.72]);  data.addRow(["'01:00:00'","'2014-04-29 01:00:00'",126.61, 18.48]);  data.addRow(["'01:05:00'","'2014-04-29 01:05:00'",67.81, 17.09]);  data.addRow(["'01:10:00'","'2014-04-29 01:10:00'",146.08, 8.27]);  data.addRow(["'01:15:00'","'2014-04-29 01:15:00'",141.66, 25.65]);  data.addRow(["'01:20:00'","'2014-04-29 01:20:00'",88.18, 24.08]);  data.addRow(["'01:25:00'","'2014-04-29 01:25:00'",107.96, 110.54]);  data.addRow(["'01:30:00'","'2014-04-29 01:30:00'",226.68, 18.68]);  data.addRow(["'01:35:00'","'2014-04-29 01:35:00'",87.09, 20.85]);  data.addRow(["'01:40:00'","'2014-04-29 01:40:00'",86.35, 12.41]);  data.addRow(["'01:45:00'","'2014-04-29 01:45:00'",105.82, 13.24]);  data.addRow(["'01:50:00'","'2014-04-29 01:50:00'",98.66, 6.80]);  data.addRow(["'01:55:00'","'2014-04-29 01:55:00'",240.50, 7.94]);  data.addRow(["'02:00:00'","'2014-04-29 02:00:00'",48.14, 11.64]);  data.addRow(["'02:05:00'","'2014-04-29 02:05:00'",168.76, 13.72]);  data.addRow(["'02:10:00'","'2014-04-29 02:10:00'",8.16, 14.16]);  data.addRow(["'02:15:00'","'2014-04-29 02:15:00'",31.11, 4.42]);  data.addRow(["'02:20:00'","'2014-04-29 02:20:00'",14.36, 24.59]);  data.addRow(["'02:25:00'","'2014-04-29 02:25:00'",28.94, 12.76]);  data.addRow(["'02:30:00'","'2014-04-29 02:30:00'",9.39, 8.93]);  data.addRow(["'02:35:00'","'2014-04-29 02:35:00'",11.63, 13.22]);  data.addRow(["'02:40:00'","'2014-04-29 02:40:00'",66.71, 30.67]);  data.addRow(["'02:45:00'","'2014-04-29 02:45:00'",54.74, 5.93]);  data.addRow(["'02:50:00'","'2014-04-29 02:50:00'",9.33, 9.56]);  data.addRow(["'02:55:00'","'2014-04-29 02:55:00'",26.44, 10.94]);  data.addRow(["'03:00:00'","'2014-04-29 03:00:00'",17.30, 15.40]);  data.addRow(["'03:05:00'","'2014-04-29 03:05:00'",32.54, 17.23]);  data.addRow(["'03:10:00'","'2014-04-29 03:10:00'",56.41, 11.92]);  data.addRow(["'03:15:00'","'2014-04-29 03:15:00'",308.56, 16.92]);  data.addRow(["'03:20:00'","'2014-04-29 03:20:00'",16.57, 27.92]);  data.addRow(["'03:25:00'","'2014-04-29 03:25:00'",45.42, 29.46]);  data.addRow(["'03:30:00'","'2014-04-29 03:30:00'",20.06, 7.50]);  data.addRow(["'03:35:00'","'2014-04-29 03:35:00'",21.87, 40.79]);  data.addRow(["'03:40:00'","'2014-04-29 03:40:00'",32.94, 8.42]);  data.addRow(["'03:45:00'","'2014-04-29 03:45:00'",12.05, 18.27]);  data.addRow(["'03:50:00'","'2014-04-29 03:50:00'",16.54, 3.72]);  data.addRow(["'03:55:00'","'2014-04-29 03:55:00'",9.58, 15.23]);  data.addRow(["'04:00:00'","'2014-04-29 04:00:00'",7.29, 4.41]);  data.addRow(["'04:05:00'","'2014-04-29 04:05:00'",26.81, 9.23]);  data.addRow(["'04:10:00'","'2014-04-29 04:10:00'",33.69, 18.82]);  data.addRow(["'04:15:00'","'2014-04-29 04:15:00'",3.43, 16.86]);  data.addRow(["'04:20:00'","'2014-04-29 04:20:00'",36.32, 28.79]);  data.addRow(["'04:25:00'","'2014-04-29 04:25:00'",11.15, 10.35]);  data.addRow(["'04:30:00'","'2014-04-29 04:30:00'",15.71, 39.49]);  data.addRow(["'04:35:00'","'2014-04-29 04:35:00'",31.74, 5.85]);  data.addRow(["'04:40:00'","'2014-04-29 04:40:00'",13.15, 16.73]);  data.addRow(["'04:45:00'","'2014-04-29 04:45:00'",30.34, 12.73]);  data.addRow(["'04:50:00'","'2014-04-29 04:50:00'",25.59, 8.15]);  data.addRow(["'04:55:00'","'2014-04-29 04:55:00'",3.71, 9.81]);  data.addRow(["'05:00:00'","'2014-04-29 05:00:00'",9.08, 8.16]);  data.addRow(["'05:05:00'","'2014-04-29 05:05:00'",23.96, 23.78]);  data.addRow(["'05:10:00'","'2014-04-29 05:10:00'",30.63, 14.72]);  data.addRow(["'05:15:00'","'2014-04-29 05:15:00'",4.37, 10.56]);  data.addRow(["'05:20:00'","'2014-04-29 05:20:00'",34.31, 33.67]);  data.addRow(["'05:25:00'","'2014-04-29 05:25:00'",26.30, 9.25]);  data.addRow(["'05:30:00'","'2014-04-29 05:30:00'",16.79, 35.99]);  data.addRow(["'05:35:00'","'2014-04-29 05:35:00'",8.84, 22.79]);  data.addRow(["'05:40:00'","'2014-04-29 05:40:00'",37.51, 29.35]);  data.addRow(["'05:45:00'","'2014-04-29 05:45:00'",39.79, 4.46]);  data.addRow(["'05:50:00'","'2014-04-29 05:50:00'",26.72, 18.36]);  data.addRow(["'05:55:00'","'2014-04-29 05:55:00'",5.38, 16.83]);  data.addRow(["'06:00:00'","'2014-04-29 06:00:00'",16.05, 42.78]);  data.addRow(["'06:05:00'","'2014-04-29 06:05:00'",11.41, 25.67]);  data.addRow(["'06:10:00'","'2014-04-29 06:10:00'",65.09, 11.67]);  data.addRow(["'06:15:00'","'2014-04-29 06:15:00'",5.74, 14.30]);  data.addRow(["'06:20:00'","'2014-04-29 06:20:00'",12.57, 9.44]);  data.addRow(["'06:25:00'","'2014-04-29 06:25:00'",25.54, 20.96]);  data.addRow(["'06:30:00'","'2014-04-29 06:30:00'",40.16, 33.52]);  data.addRow(["'06:35:00'","'2014-04-29 06:35:00'",27.35, 54.27]);  data.addRow(["'06:40:00'","'2014-04-29 06:40:00'",27.67, 41.84]);  data.addRow(["'06:45:00'","'2014-04-29 06:45:00'",45.78, 57.76]);  data.addRow(["'06:50:00'","'2014-04-29 06:50:00'",56.98, 32.24]);  data.addRow(["'06:55:00'","'2014-04-29 06:55:00'",30.19, 78.03]);  data.addRow(["'07:00:00'","'2014-04-29 07:00:00'",35.57, 63.85]);  data.addRow(["'07:05:00'","'2014-04-29 07:05:00'",67.78, 24.50]);  data.addRow(["'07:10:00'","'2014-04-29 07:10:00'",65.84, 17.78]);  data.addRow(["'07:15:00'","'2014-04-29 07:15:00'",51.43, 29.04]);  data.addRow(["'07:20:00'","'2014-04-29 07:20:00'",72.34, 118.03]);  data.addRow(["'07:25:00'","'2014-04-29 07:25:00'",63.02, 58.85]);  data.addRow(["'07:30:00'","'2014-04-29 07:30:00'",92.58, 114.08]);  data.addRow(["'07:35:00'","'2014-04-29 07:35:00'",111.60, 64.83]);  data.addRow(["'07:40:00'","'2014-04-29 07:40:00'",233.11, 114.78]);  data.addRow(["'07:45:00'","'2014-04-29 07:45:00'",135.78, 122.13]);  data.addRow(["'07:50:00'","'2014-04-29 07:50:00'",99.71, 140.99]);  data.addRow(["'07:55:00'","'2014-04-29 07:55:00'",110.20, 256.02]);  data.addRow(["'08:00:00'","'2014-04-29 08:00:00'",92.74, 108.09]);  data.addRow(["'08:05:00'","'2014-04-29 08:05:00'",133.07, 79.70]);  data.addRow(["'08:10:00'","'2014-04-29 08:10:00'",58.06, 61.72]);  data.addRow(["'08:15:00'","'2014-04-29 08:15:00'",71.15, 73.47]);  data.addRow(["'08:20:00'","'2014-04-29 08:20:00'",110.21, 61.66]);  data.addRow(["'08:25:00'","'2014-04-29 08:25:00'",172.26, 260.00]);  data.addRow(["'08:30:00'","'2014-04-29 08:30:00'",170.55, 148.30]);  data.addRow(["'08:35:00'","'2014-04-29 08:35:00'",240.26, 103.88]);  data.addRow(["'08:40:00'","'2014-04-29 08:40:00'",234.41, 106.63]);  data.addRow(["'08:45:00'","'2014-04-29 08:45:00'",231.37, 78.75]);  data.addRow(["'08:50:00'","'2014-04-29 08:50:00'",207.80, 109.31]);  data.addRow(["'08:55:00'","'2014-04-29 08:55:00'",163.18, 67.34]);  data.addRow(["'09:00:00'","'2014-04-29 09:00:00'",290.75, 95.65]);  data.addRow(["'09:05:00'","'2014-04-29 09:05:00'",253.08, 173.39]);  data.addRow(["'09:10:00'","'2014-04-29 09:10:00'",328.01, 185.39]);  data.addRow(["'09:15:00'","'2014-04-29 09:15:00'",475.89, 105.88]);  data.addRow(["'09:20:00'","'2014-04-29 09:20:00'",172.40, 114.21]);  data.addRow(["'09:25:00'","'2014-04-29 09:25:00'",189.94, 173.48]);  data.addRow(["'09:30:00'","'2014-04-29 09:30:00'",269.91, 179.61]);  data.addRow(["'09:35:00'","'2014-04-29 09:35:00'",301.22, 141.41]);  data.addRow(["'09:40:00'","'2014-04-29 09:40:00'",243.98, 182.86]);  data.addRow(["'09:45:00'","'2014-04-29 09:45:00'",207.53, 193.88]);  data.addRow(["'09:50:00'","'2014-04-29 09:50:00'",332.76, 126.53]);  data.addRow(["'09:55:00'","'2014-04-29 09:55:00'",243.50, 112.95]);  data.addRow(["'10:00:00'","'2014-04-29 10:00:00'",189.38, 187.46]);  data.addRow(["'10:05:00'","'2014-04-29 10:05:00'",154.25, 123.62]);  data.addRow(["'10:10:00'","'2014-04-29 10:10:00'",193.37, 150.14]);  data.addRow(["'10:15:00'","'2014-04-29 10:15:00'",171.00, 201.85]);  data.addRow(["'10:20:00'","'2014-04-29 10:20:00'",158.65, 220.13]);  data.addRow(["'10:25:00'","'2014-04-29 10:25:00'",212.31, 175.24]);  data.addRow(["'10:30:00'","'2014-04-29 10:30:00'",353.55, 132.61]);  data.addRow(["'10:35:00'","'2014-04-29 10:35:00'",211.25, 190.52]);  data.addRow(["'10:40:00'","'2014-04-29 10:40:00'",280.95, 163.34]);  data.addRow(["'10:45:00'","'2014-04-29 10:45:00'",132.10, 173.52]);  data.addRow(["'10:50:00'","'2014-04-29 10:50:00'",217.06, 228.85]);  data.addRow(["'10:55:00'","'2014-04-29 10:55:00'",149.10, 132.16]);  data.addRow(["'11:00:00'","'2014-04-29 11:00:00'",314.15, 195.15]);  data.addRow(["'11:05:00'","'2014-04-29 11:05:00'",227.50, 214.92]);  data.addRow(["'11:10:00'","'2014-04-29 11:10:00'",268.50, 187.29]);  data.addRow(["'11:15:00'","'2014-04-29 11:15:00'",255.72, 171.95]);  data.addRow(["'11:20:00'","'2014-04-29 11:20:00'",132.16, 122.31]);  data.addRow(["'11:25:00'","'2014-04-29 11:25:00'",154.36, 141.68]);  data.addRow(["'11:30:00'","'2014-04-29 11:30:00'",133.52, 120.02]);  data.addRow(["'11:35:00'","'2014-04-29 11:35:00'",262.94, 151.07]);  data.addRow(["'11:40:00'","'2014-04-29 11:40:00'",203.92, 135.62]);  data.addRow(["'11:45:00'","'2014-04-29 11:45:00'",269.96, 215.20]);  data.addRow(["'11:50:00'","'2014-04-29 11:50:00'",188.13, 131.84]);  data.addRow(["'11:55:00'","'2014-04-29 11:55:00'",290.20, 108.25]);  data.addRow(["'12:00:00'","'2014-04-29 12:00:00'",153.40, 126.23]);  data.addRow(["'12:05:00'","'2014-04-29 12:05:00'",248.38, 131.40]);  data.addRow(["'12:10:00'","'2014-04-29 12:10:00'",165.98, 175.17]);  data.addRow(["'12:15:00'","'2014-04-29 12:15:00'",702.79, 149.95]);  data.addRow(["'12:20:00'","'2014-04-29 12:20:00'",294.16, 182.93]);  data.addRow(["'12:25:00'","'2014-04-29 12:25:00'",192.55, 177.64]);  data.addRow(["'12:30:00'","'2014-04-29 12:30:00'",332.63, 157.74]);  data.addRow(["'12:35:00'","'2014-04-29 12:35:00'",443.60, 182.40]);  data.addRow(["'12:40:00'","'2014-04-29 12:40:00'",370.76, 125.40]);  data.addRow(["'12:45:00'","'2014-04-29 12:45:00'",401.43, 128.54]);  data.addRow(["'12:50:00'","'2014-04-29 12:50:00'",234.15, 154.95]);  data.addRow(["'12:55:00'","'2014-04-29 12:55:00'",471.70, 119.95]);  data.addRow(["'13:00:00'","'2014-04-29 13:00:00'",393.61, 202.89]);  data.addRow(["'13:05:00'","'2014-04-29 13:05:00'",421.03, 115.34]);  data.addRow(["'13:10:00'","'2014-04-29 13:10:00'",265.61, 168.27]);  data.addRow(["'13:15:00'","'2014-04-29 13:15:00'",318.20, 272.91]);  data.addRow(["'13:20:00'","'2014-04-29 13:20:00'",227.47, 197.71]);  data.addRow(["'13:25:00'","'2014-04-29 13:25:00'",196.74, 114.85]);  data.addRow(["'13:30:00'","'2014-04-29 13:30:00'",236.49, 96.79]);  data.addRow(["'13:35:00'","'2014-04-29 13:35:00'",233.62, 242.93]);  data.addRow(["'13:40:00'","'2014-04-29 13:40:00'",224.23, 170.57]);  data.addRow(["'13:45:00'","'2014-04-29 13:45:00'",292.46, 166.74]);  data.addRow(["'13:50:00'","'2014-04-29 13:50:00'",274.99, 115.90]);  data.addRow(["'13:55:00'","'2014-04-29 13:55:00'",257.82, 114.93]);  data.addRow(["'14:00:00'","'2014-04-29 14:00:00'",248.99, 151.03]);  data.addRow(["'14:05:00'","'2014-04-29 14:05:00'",306.72, 310.90]);  data.addRow(["'14:10:00'","'2014-04-29 14:10:00'",308.95, 298.20]);  data.addRow(["'14:15:00'","'2014-04-29 14:15:00'",153.24, 117.60]);  data.addRow(["'14:20:00'","'2014-04-29 14:20:00'",219.33, 156.13]);  data.addRow(["'14:25:00'","'2014-04-29 14:25:00'",322.22, 168.26]);  data.addRow(["'14:30:00'","'2014-04-29 14:30:00'",179.94, 196.41]);  data.addRow(["'14:35:00'","'2014-04-29 14:35:00'",435.52, 127.53]);  data.addRow(["'14:40:00'","'2014-04-29 14:40:00'",208.26, 313.07]);  data.addRow(["'14:45:00'","'2014-04-29 14:45:00'",253.34, 275.61]);  data.addRow(["'14:50:00'","'2014-04-29 14:50:00'",282.02, 259.20]);  data.addRow(["'14:55:00'","'2014-04-29 14:55:00'",209.39, 147.28]);  data.addRow(["'15:00:00'","'2014-04-29 15:00:00'",441.76, 299.75]);  data.addRow(["'15:05:00'","'2014-04-29 15:05:00'",498.18, 223.07]);  data.addRow(["'15:10:00'","'2014-04-29 15:10:00'",280.28, 274.53]);  data.addRow(["'15:15:00'","'2014-04-29 15:15:00'",207.24, 284.23]);  data.addRow(["'15:20:00'","'2014-04-29 15:20:00'",513.43, 264.30]);  data.addRow(["'15:25:00'","'2014-04-29 15:25:00'",0.00, 0.00]);  data.addRow(["'15:30:00'","'2014-04-29 15:30:00'",0.00, 0.00]); 

	var graphtitle='FIU Traffic Network Max: 702.79 MB Min: 3.43 MB'
	var xtitle='Time'
	var ytitle='Network'
	var maxvalue='702'

	
        
      
	