
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'date');
        data.addColumn('string', 'x');
        data.addColumn('number', 'Input bytes ');
        data.addColumn('number', 'Output bytes '); data.addRow([ "'03 05 16:20:00'","'2014-03-05 16:20:00'",4.00, 3.46]);  data.addRow([ "'03 05 18:20:00'","'2014-03-05 18:20:00'",2.00, 2.00]);  data.addRow([ "'03 05 20:20:00'","'2014-03-05 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 05 22:20:00'","'2014-03-05 22:20:00'",4.00, 4.00]);  data.addRow([ "'03 06 00:20:00'","'2014-03-06 00:20:00'",5.00, 4.00]);  data.addRow([ "'03 06 02:20:00'","'2014-03-06 02:20:00'",5.00, 5.00]);  data.addRow([ "'03 06 04:20:00'","'2014-03-06 04:20:00'",5.00, 4.00]);  data.addRow([ "'03 06 06:20:00'","'2014-03-06 06:20:00'",2.00, 2.00]);  data.addRow([ "'03 06 08:20:00'","'2014-03-06 08:20:00'",1.00, 0.00]);  data.addRow([ "'03 06 10:20:00'","'2014-03-06 10:20:00'",2.00, 1.00]);  data.addRow([ "'03 06 12:20:00'","'2014-03-06 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 06 14:20:00'","'2014-03-06 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 06 16:20:00'","'2014-03-06 16:20:00'",2.00, 2.00]);  data.addRow([ "'03 06 18:20:00'","'2014-03-06 18:20:00'",3.00, 3.00]);  data.addRow([ "'03 06 20:20:00'","'2014-03-06 20:20:00'",3.00, 3.00]);  data.addRow([ "'03 06 22:20:00'","'2014-03-06 22:20:00'",3.00, 3.00]);  data.addRow([ "'03 07 00:20:00'","'2014-03-07 00:20:00'",2.00, 2.00]);  data.addRow([ "'03 07 02:20:00'","'2014-03-07 02:20:00'",4.00, 3.00]);  data.addRow([ "'03 07 04:20:00'","'2014-03-07 04:20:00'",3.00, 3.00]);  data.addRow([ "'03 07 06:20:00'","'2014-03-07 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 07 08:20:00'","'2014-03-07 08:20:00'",0.00, 1.00]);  data.addRow([ "'03 07 10:20:00'","'2014-03-07 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 07 12:20:00'","'2014-03-07 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 07 14:20:00'","'2014-03-07 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 07 16:20:00'","'2014-03-07 16:20:00'",2.00, 1.00]);  data.addRow([ "'03 07 18:20:00'","'2014-03-07 18:20:00'",6.00, 6.00]);  data.addRow([ "'03 07 20:20:00'","'2014-03-07 20:20:00'",4.00, 4.00]);  data.addRow([ "'03 07 22:20:00'","'2014-03-07 22:20:00'",2.00, 3.00]);  data.addRow([ "'03 08 00:20:00'","'2014-03-08 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 02:20:00'","'2014-03-08 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 04:20:00'","'2014-03-08 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 06:20:00'","'2014-03-08 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 08:20:00'","'2014-03-08 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 10:20:00'","'2014-03-08 10:20:00'",3.00, 4.00]);  data.addRow([ "'03 08 12:20:00'","'2014-03-08 12:20:00'",5.00, 4.00]);  data.addRow([ "'03 08 14:20:00'","'2014-03-08 14:20:00'",4.00, 4.00]);  data.addRow([ "'03 08 16:20:00'","'2014-03-08 16:20:00'",2.00, 2.00]);  data.addRow([ "'03 08 18:20:00'","'2014-03-08 18:20:00'",2.00, 1.00]);  data.addRow([ "'03 08 20:20:00'","'2014-03-08 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 08 22:20:00'","'2014-03-08 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 00:20:00'","'2014-03-09 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 02:20:00'","'2014-03-09 02:20:00'",0.00, 1.00]);  data.addRow([ "'03 09 04:20:00'","'2014-03-09 04:20:00'",0.00, 1.00]);  data.addRow([ "'03 09 06:20:00'","'2014-03-09 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 08:20:00'","'2014-03-09 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 10:20:00'","'2014-03-09 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 12:20:00'","'2014-03-09 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 14:20:00'","'2014-03-09 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 09 16:20:00'","'2014-03-09 16:20:00'",4.00, 5.00]);  data.addRow([ "'03 09 18:20:00'","'2014-03-09 18:20:00'",6.00, 6.00]);  data.addRow([ "'03 09 20:20:00'","'2014-03-09 20:20:00'",9.00, 8.00]);  data.addRow([ "'03 09 22:20:00'","'2014-03-09 22:20:00'",2.00, 3.00]);  data.addRow([ "'03 10 00:20:00'","'2014-03-10 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 02:20:00'","'2014-03-10 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 04:20:00'","'2014-03-10 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 06:20:00'","'2014-03-10 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 08:20:00'","'2014-03-10 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 10:20:00'","'2014-03-10 10:20:00'",3.00, 3.00]);  data.addRow([ "'03 10 12:20:00'","'2014-03-10 12:20:00'",3.00, 2.00]);  data.addRow([ "'03 10 14:20:00'","'2014-03-10 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 10 16:20:00'","'2014-03-10 16:20:00'",3.00, 3.00]);  data.addRow([ "'03 10 18:20:00'","'2014-03-10 18:20:00'",0.00, 1.00]);  data.addRow([ "'03 10 20:20:00'","'2014-03-10 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 10 22:20:00'","'2014-03-10 22:20:00'",1.00, 2.00]);  data.addRow([ "'03 11 00:20:00'","'2014-03-11 00:20:00'",0.00, 1.00]);  data.addRow([ "'03 11 02:20:00'","'2014-03-11 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 11 04:20:00'","'2014-03-11 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 11 06:20:00'","'2014-03-11 06:20:00'",0.00, 1.00]);  data.addRow([ "'03 11 08:20:00'","'2014-03-11 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 11 10:20:00'","'2014-03-11 10:20:00'",3.00, 3.00]);  data.addRow([ "'03 11 12:20:00'","'2014-03-11 12:20:00'",4.00, 5.00]);  data.addRow([ "'03 11 14:20:00'","'2014-03-11 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 11 16:20:00'","'2014-03-11 16:20:00'",3.00, 3.00]);  data.addRow([ "'03 11 18:20:00'","'2014-03-11 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 11 20:20:00'","'2014-03-11 20:20:00'",1.00, 2.00]);  data.addRow([ "'03 11 22:20:00'","'2014-03-11 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 12 00:20:00'","'2014-03-12 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 12 02:20:00'","'2014-03-12 02:20:00'",0.00, 1.00]);  data.addRow([ "'03 12 04:20:00'","'2014-03-12 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 12 06:20:00'","'2014-03-12 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 12 08:20:00'","'2014-03-12 08:20:00'",6.00, 7.00]);  data.addRow([ "'03 12 10:20:00'","'2014-03-12 10:20:00'",2.00, 2.00]);  data.addRow([ "'03 12 12:20:00'","'2014-03-12 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 12 14:20:00'","'2014-03-12 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 12 16:20:00'","'2014-03-12 16:20:00'",2.00, 3.00]);  data.addRow([ "'03 12 18:20:00'","'2014-03-12 18:20:00'",2.00, 2.00]);  data.addRow([ "'03 12 20:20:00'","'2014-03-12 20:20:00'",2.00, 2.00]);  data.addRow([ "'03 12 22:20:00'","'2014-03-12 22:20:00'",1.00, 2.00]);  data.addRow([ "'03 13 00:20:00'","'2014-03-13 00:20:00'",1.00, 2.00]);  data.addRow([ "'03 13 02:20:00'","'2014-03-13 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 13 04:20:00'","'2014-03-13 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 13 06:20:00'","'2014-03-13 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 13 08:20:00'","'2014-03-13 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 13 10:20:00'","'2014-03-13 10:20:00'",1.00, 4.00]);  data.addRow([ "'03 13 12:20:00'","'2014-03-13 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 13 14:20:00'","'2014-03-13 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 13 16:20:00'","'2014-03-13 16:20:00'",3.00, 3.00]);  data.addRow([ "'03 13 18:20:00'","'2014-03-13 18:20:00'",3.00, 3.00]);  data.addRow([ "'03 13 20:20:00'","'2014-03-13 20:20:00'",1.00, 2.00]);  data.addRow([ "'03 13 22:20:00'","'2014-03-13 22:20:00'",2.00, 2.00]);  data.addRow([ "'03 14 00:20:00'","'2014-03-14 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 14 02:20:00'","'2014-03-14 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 14 04:20:00'","'2014-03-14 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 14 06:20:00'","'2014-03-14 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 14 08:20:00'","'2014-03-14 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 14 10:20:00'","'2014-03-14 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 14 12:20:00'","'2014-03-14 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 14 14:20:00'","'2014-03-14 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 14 16:20:00'","'2014-03-14 16:20:00'",2.00, 2.00]);  data.addRow([ "'03 14 18:20:00'","'2014-03-14 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 14 20:20:00'","'2014-03-14 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 14 22:20:00'","'2014-03-14 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 15 00:20:00'","'2014-03-15 00:20:00'",0.00, 1.00]);  data.addRow([ "'03 15 02:20:00'","'2014-03-15 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 04:20:00'","'2014-03-15 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 06:20:00'","'2014-03-15 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 08:20:00'","'2014-03-15 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 10:20:00'","'2014-03-15 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 12:20:00'","'2014-03-15 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 14:20:00'","'2014-03-15 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 16:20:00'","'2014-03-15 16:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 18:20:00'","'2014-03-15 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 20:20:00'","'2014-03-15 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 15 22:20:00'","'2014-03-15 22:20:00'",4.00, 4.00]);  data.addRow([ "'03 16 00:20:00'","'2014-03-16 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 02:20:00'","'2014-03-16 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 04:20:00'","'2014-03-16 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 06:20:00'","'2014-03-16 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 08:20:00'","'2014-03-16 08:20:00'",1.00, 3.00]);  data.addRow([ "'03 16 10:20:00'","'2014-03-16 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 12:20:00'","'2014-03-16 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 14:20:00'","'2014-03-16 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 16:20:00'","'2014-03-16 16:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 18:20:00'","'2014-03-16 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 20:20:00'","'2014-03-16 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 16 22:20:00'","'2014-03-16 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 17 00:20:00'","'2014-03-17 00:20:00'",0.00, 1.00]);  data.addRow([ "'03 17 02:20:00'","'2014-03-17 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 17 04:20:00'","'2014-03-17 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 17 06:20:00'","'2014-03-17 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 17 08:20:00'","'2014-03-17 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 17 10:20:00'","'2014-03-17 10:20:00'",2.00, 6.00]);  data.addRow([ "'03 17 12:20:00'","'2014-03-17 12:20:00'",4.00, 4.00]);  data.addRow([ "'03 17 14:20:00'","'2014-03-17 14:20:00'",8.00, 9.00]);  data.addRow([ "'03 17 16:20:00'","'2014-03-17 16:20:00'",8.00, 8.00]);  data.addRow([ "'03 17 18:20:00'","'2014-03-17 18:20:00'",9.00, 8.00]);  data.addRow([ "'03 17 20:20:00'","'2014-03-17 20:20:00'",8.00, 8.00]);  data.addRow([ "'03 17 22:20:00'","'2014-03-17 22:20:00'",8.00, 9.00]);  data.addRow([ "'03 18 00:20:00'","'2014-03-18 00:20:00'",8.00, 9.00]);  data.addRow([ "'03 18 02:20:00'","'2014-03-18 02:20:00'",7.00, 7.00]);  data.addRow([ "'03 18 04:20:00'","'2014-03-18 04:20:00'",8.00, 8.00]);  data.addRow([ "'03 18 06:20:00'","'2014-03-18 06:20:00'",7.00, 7.00]);  data.addRow([ "'03 18 08:20:00'","'2014-03-18 08:20:00'",8.00, 8.00]);  data.addRow([ "'03 18 10:20:00'","'2014-03-18 10:20:00'",9.00, 9.00]);  data.addRow([ "'03 18 12:20:00'","'2014-03-18 12:20:00'",9.00, 10.00]);  data.addRow([ "'03 18 14:20:00'","'2014-03-18 14:20:00'",9.00, 10.00]);  data.addRow([ "'03 18 16:20:00'","'2014-03-18 16:20:00'",10.00, 11.00]);  data.addRow([ "'03 18 18:20:00'","'2014-03-18 18:20:00'",7.00, 8.00]);  data.addRow([ "'03 18 20:20:00'","'2014-03-18 20:20:00'",9.00, 8.00]);  data.addRow([ "'03 18 22:20:00'","'2014-03-18 22:20:00'",6.00, 7.00]);  data.addRow([ "'03 19 00:20:00'","'2014-03-19 00:20:00'",1.00, 2.00]);  data.addRow([ "'03 19 02:20:00'","'2014-03-19 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 19 04:20:00'","'2014-03-19 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 19 06:20:00'","'2014-03-19 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 19 08:20:00'","'2014-03-19 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 19 10:20:00'","'2014-03-19 10:20:00'",2.00, 2.00]);  data.addRow([ "'03 19 12:20:00'","'2014-03-19 12:20:00'",6.00, 5.00]);  data.addRow([ "'03 19 14:20:00'","'2014-03-19 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 19 16:20:00'","'2014-03-19 16:20:00'",3.00, 2.00]);  data.addRow([ "'03 19 18:20:00'","'2014-03-19 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 19 20:20:00'","'2014-03-19 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 19 22:20:00'","'2014-03-19 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 00:20:00'","'2014-03-20 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 02:20:00'","'2014-03-20 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 04:20:00'","'2014-03-20 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 06:20:00'","'2014-03-20 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 08:20:00'","'2014-03-20 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 20 10:20:00'","'2014-03-20 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 20 12:20:00'","'2014-03-20 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 20 14:20:00'","'2014-03-20 14:20:00'",3.00, 2.00]);  data.addRow([ "'03 20 16:20:00'","'2014-03-20 16:20:00'",4.00, 4.00]);  data.addRow([ "'03 20 18:20:00'","'2014-03-20 18:20:00'",2.00, 2.00]);  data.addRow([ "'03 20 20:20:00'","'2014-03-20 20:20:00'",3.00, 3.00]);  data.addRow([ "'03 20 22:20:00'","'2014-03-20 22:20:00'",2.00, 2.00]);  data.addRow([ "'03 21 00:20:00'","'2014-03-21 00:20:00'",4.00, 3.00]);  data.addRow([ "'03 21 02:20:00'","'2014-03-21 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 21 04:20:00'","'2014-03-21 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 21 06:20:00'","'2014-03-21 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 21 08:20:00'","'2014-03-21 08:20:00'",0.00, 1.00]);  data.addRow([ "'03 21 10:20:00'","'2014-03-21 10:20:00'",1.00, 2.00]);  data.addRow([ "'03 21 12:20:00'","'2014-03-21 12:20:00'",1.00, 2.00]);  data.addRow([ "'03 21 14:20:00'","'2014-03-21 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 21 16:20:00'","'2014-03-21 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 21 18:20:00'","'2014-03-21 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 21 20:20:00'","'2014-03-21 20:20:00'",1.00, 2.00]);  data.addRow([ "'03 21 22:20:00'","'2014-03-21 22:20:00'",3.00, 3.00]);  data.addRow([ "'03 22 00:20:00'","'2014-03-22 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 02:20:00'","'2014-03-22 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 04:20:00'","'2014-03-22 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 06:20:00'","'2014-03-22 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 08:20:00'","'2014-03-22 08:20:00'",0.00, 1.00]);  data.addRow([ "'03 22 10:20:00'","'2014-03-22 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 12:20:00'","'2014-03-22 12:20:00'",1.00, 2.00]);  data.addRow([ "'03 22 14:20:00'","'2014-03-22 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 16:20:00'","'2014-03-22 16:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 18:20:00'","'2014-03-22 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 20:20:00'","'2014-03-22 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 22 22:20:00'","'2014-03-22 22:20:00'",3.00, 4.00]);  data.addRow([ "'03 23 00:20:00'","'2014-03-23 00:20:00'",2.00, 2.00]);  data.addRow([ "'03 23 02:20:00'","'2014-03-23 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 04:20:00'","'2014-03-23 04:20:00'",0.00, 1.00]);  data.addRow([ "'03 23 06:20:00'","'2014-03-23 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 08:20:00'","'2014-03-23 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 10:20:00'","'2014-03-23 10:20:00'",1.00, 2.00]);  data.addRow([ "'03 23 12:20:00'","'2014-03-23 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 14:20:00'","'2014-03-23 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 16:20:00'","'2014-03-23 16:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 18:20:00'","'2014-03-23 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 23 20:20:00'","'2014-03-23 20:20:00'",1.00, 2.00]);  data.addRow([ "'03 23 22:20:00'","'2014-03-23 22:20:00'",41.00, 44.00]);  data.addRow([ "'03 24 00:20:00'","'2014-03-24 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 02:20:00'","'2014-03-24 02:20:00'",0.00, 1.00]);  data.addRow([ "'03 24 04:20:00'","'2014-03-24 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 06:20:00'","'2014-03-24 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 08:20:00'","'2014-03-24 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 10:20:00'","'2014-03-24 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 12:20:00'","'2014-03-24 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 24 14:20:00'","'2014-03-24 14:20:00'",2.00, 2.00]);  data.addRow([ "'03 24 16:20:00'","'2014-03-24 16:20:00'",3.00, 3.00]);  data.addRow([ "'03 24 18:20:00'","'2014-03-24 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 20:20:00'","'2014-03-24 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 24 22:20:00'","'2014-03-24 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 00:20:00'","'2014-03-25 00:20:00'",1.00, 2.00]);  data.addRow([ "'03 25 02:20:00'","'2014-03-25 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 04:20:00'","'2014-03-25 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 06:20:00'","'2014-03-25 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 08:20:00'","'2014-03-25 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 10:20:00'","'2014-03-25 10:20:00'",2.00, 2.00]);  data.addRow([ "'03 25 12:20:00'","'2014-03-25 12:20:00'",2.00, 3.00]);  data.addRow([ "'03 25 14:20:00'","'2014-03-25 14:20:00'",3.00, 3.00]);  data.addRow([ "'03 25 16:20:00'","'2014-03-25 16:20:00'",3.00, 3.00]);  data.addRow([ "'03 25 18:20:00'","'2014-03-25 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 25 20:20:00'","'2014-03-25 20:20:00'",1.00, 3.00]);  data.addRow([ "'03 25 22:20:00'","'2014-03-25 22:20:00'",7.00, 7.00]);  data.addRow([ "'03 26 00:20:00'","'2014-03-26 00:20:00'",10.00, 10.00]);  data.addRow([ "'03 26 02:20:00'","'2014-03-26 02:20:00'",10.00, 10.00]);  data.addRow([ "'03 26 04:20:00'","'2014-03-26 04:20:00'",10.00, 9.00]);  data.addRow([ "'03 26 06:20:00'","'2014-03-26 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 26 08:20:00'","'2014-03-26 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 26 10:20:00'","'2014-03-26 10:20:00'",2.00, 2.00]);  data.addRow([ "'03 26 12:20:00'","'2014-03-26 12:20:00'",4.00, 3.00]);  data.addRow([ "'03 26 14:20:00'","'2014-03-26 14:20:00'",3.00, 2.00]);  data.addRow([ "'03 26 16:20:00'","'2014-03-26 16:20:00'",4.00, 4.00]);  data.addRow([ "'03 26 18:20:00'","'2014-03-26 18:20:00'",1.00, 1.00]);  data.addRow([ "'03 26 20:20:00'","'2014-03-26 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 26 22:20:00'","'2014-03-26 22:20:00'",1.00, 2.00]);  data.addRow([ "'03 27 00:20:00'","'2014-03-27 00:20:00'",4.00, 4.00]);  data.addRow([ "'03 27 02:20:00'","'2014-03-27 02:20:00'",1.00, 2.00]);  data.addRow([ "'03 27 04:20:00'","'2014-03-27 04:20:00'",2.00, 2.00]);  data.addRow([ "'03 27 06:20:00'","'2014-03-27 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 27 08:20:00'","'2014-03-27 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 27 10:20:00'","'2014-03-27 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 27 12:20:00'","'2014-03-27 12:20:00'",2.00, 2.00]);  data.addRow([ "'03 27 14:20:00'","'2014-03-27 14:20:00'",3.00, 3.00]);  data.addRow([ "'03 27 16:20:00'","'2014-03-27 16:20:00'",3.00, 4.00]);  data.addRow([ "'03 27 18:20:00'","'2014-03-27 18:20:00'",3.00, 2.00]);  data.addRow([ "'03 27 20:20:00'","'2014-03-27 20:20:00'",3.00, 3.00]);  data.addRow([ "'03 27 22:20:00'","'2014-03-27 22:20:00'",2.00, 3.00]);  data.addRow([ "'03 28 00:20:00'","'2014-03-28 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 02:20:00'","'2014-03-28 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 04:20:00'","'2014-03-28 04:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 06:20:00'","'2014-03-28 06:20:00'",3.00, 3.00]);  data.addRow([ "'03 28 08:20:00'","'2014-03-28 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 10:20:00'","'2014-03-28 10:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 12:20:00'","'2014-03-28 12:20:00'",3.00, 3.00]);  data.addRow([ "'03 28 14:20:00'","'2014-03-28 14:20:00'",2.00, 3.00]);  data.addRow([ "'03 28 16:20:00'","'2014-03-28 16:20:00'",2.00, 2.00]);  data.addRow([ "'03 28 18:20:00'","'2014-03-28 18:20:00'",2.00, 3.00]);  data.addRow([ "'03 28 20:20:00'","'2014-03-28 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 28 22:20:00'","'2014-03-28 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 00:20:00'","'2014-03-29 00:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 02:20:00'","'2014-03-29 02:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 04:20:00'","'2014-03-29 04:20:00'",1.00, 2.00]);  data.addRow([ "'03 29 06:20:00'","'2014-03-29 06:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 08:20:00'","'2014-03-29 08:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 10:20:00'","'2014-03-29 10:20:00'",0.00, 1.00]);  data.addRow([ "'03 29 12:20:00'","'2014-03-29 12:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 14:20:00'","'2014-03-29 14:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 16:20:00'","'2014-03-29 16:20:00'",2.00, 2.00]);  data.addRow([ "'03 29 18:20:00'","'2014-03-29 18:20:00'",3.00, 2.00]);  data.addRow([ "'03 29 20:20:00'","'2014-03-29 20:20:00'",1.00, 1.00]);  data.addRow([ "'03 29 22:20:00'","'2014-03-29 22:20:00'",1.00, 1.00]);  data.addRow([ "'03 30 00:20:00'","'2014-03-30 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 02:20:00'","'2014-03-30 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 04:20:00'","'2014-03-30 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 06:20:00'","'2014-03-30 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 08:20:00'","'2014-03-30 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 10:20:00'","'2014-03-30 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 12:20:00'","'2014-03-30 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 14:20:00'","'2014-03-30 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 16:20:00'","'2014-03-30 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 18:20:00'","'2014-03-30 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 20:20:00'","'2014-03-30 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 30 22:20:00'","'2014-03-30 22:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 00:20:00'","'2014-03-31 00:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 02:20:00'","'2014-03-31 02:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 04:20:00'","'2014-03-31 04:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 06:20:00'","'2014-03-31 06:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 08:20:00'","'2014-03-31 08:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 10:20:00'","'2014-03-31 10:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 12:20:00'","'2014-03-31 12:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 14:20:00'","'2014-03-31 14:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 16:20:00'","'2014-03-31 16:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 18:20:00'","'2014-03-31 18:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 20:20:00'","'2014-03-31 20:20:00'",0.00, 0.00]);  data.addRow([ "'03 31 22:20:00'","'2014-03-31 22:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 00:20:00'","'2014-04-01 00:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 02:20:00'","'2014-04-01 02:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 04:20:00'","'2014-04-01 04:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 06:20:00'","'2014-04-01 06:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 08:20:00'","'2014-04-01 08:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 10:20:00'","'2014-04-01 10:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 12:20:00'","'2014-04-01 12:20:00'",0.00, 0.00]);  data.addRow([ "'04 01 14:20:00'","'2014-04-01 14:20:00'",1.00, 1.00]);  data.addRow([ "'04 01 16:20:00'","'2014-04-01 16:20:00'",3.00, 3.00]);  data.addRow([ "'04 01 18:20:00'","'2014-04-01 18:20:00'",3.00, 3.00]);  data.addRow([ "'04 01 20:20:00'","'2014-04-01 20:20:00'",1.00, 1.00]);  data.addRow([ "'04 01 22:20:00'","'2014-04-01 22:20:00'",1.00, 1.00]);  data.addRow([ "'04 02 00:20:00'","'2014-04-02 00:20:00'",1.00, 1.00]);  data.addRow([ "'04 02 02:20:00'","'2014-04-02 02:20:00'",2.00, 3.00]);  data.addRow([ "'04 02 04:20:00'","'2014-04-02 04:20:00'",1.00, 1.00]);  data.addRow([ "'04 02 06:20:00'","'2014-04-02 06:20:00'",1.00, 1.00]);  data.addRow([ "'04 02 08:20:00'","'2014-04-02 08:20:00'",1.00, 1.00]);  data.addRow([ "'04 02 10:20:00'","'2014-04-02 10:20:00'",3.00, 2.00]);  data.addRow([ "'04 02 12:20:00'","'2014-04-02 12:20:00'",3.00, 3.00]);  data.addRow([ "'04 02 14:20:00'","'2014-04-02 14:20:00'",2.00, 1.00]);  data.addRow([ "'04 02 16:20:00'","'2014-04-02 16:20:00'",0.00, 0.00]); 

	var graphtitle='HPCf-22 Traffic Flows Max: 203.00 bytes Min: 0.00 bytes'
	var xtitle='Time'
	var ytitle='Flows'
	var maxvalue='203'

	
        
      
	