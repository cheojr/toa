
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'x');
        data.addColumn('number', 'Octects Input MB ');
        data.addColumn('number', 'Octects Output  MB');
        data.addColumn('number', 'Packets Input  KB ');
        data.addColumn('number', 'Packets Output KB ');
        data.addColumn('number', 'Flows Input KB ');
        data.addColumn('number', 'Flows Output KB '); data.addRow(["'02'", 0.07, 0.09, 0.10, 0.09, 0.03, 0.03]);  data.addRow(["'02'", 0.02, 0.12, 0.08, 0.12, 0.04, 0.04]);  data.addRow(["'02'", 0.09, 0.51, 0.22, 0.41, 0.06, 0.08]);  data.addRow(["'02'", 0.05, 0.14, 0.26, 0.31, 0.04, 0.04]);  data.addRow(["'02'", 0.04, 0.14, 0.28, 0.35, 0.05, 0.04]);  data.addRow(["'02'", 0.01, 0.09, 0.07, 0.11, 0.04, 0.05]);  data.addRow(["'02'", 0.02, 0.10, 0.11, 0.12, 0.05, 0.05]);  data.addRow(["'02'", 0.04, 0.26, 0.32, 0.37, 0.22, 0.23]);  data.addRow(["'02'", 0.09, 0.13, 0.12, 0.13, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.19, 0.12, 0.18, 0.04, 0.04]);  data.addRow(["'02'", 0.08, 0.12, 0.14, 0.13, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.08, 0.06, 0.08, 0.02, 0.02]);  data.addRow(["'02'", 0.29, 0.12, 0.27, 0.18, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.09, 0.07, 0.10, 0.04, 0.04]);  data.addRow(["'02'", 0.07, 0.03, 0.08, 0.05, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.00, 0.01, 0.02, 0.02, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.02, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.04, 0.03, 0.05, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.08, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.02, 0.11, 0.21, 0.19, 0.14, 0.14]);  data.addRow(["'02'", 0.03, 0.15, 0.30, 0.32, 0.23, 0.23]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.02, 0.02, 0.02]);  data.addRow(["'02'", 0.08, 0.02, 0.07, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.02, 0.01, 0.06, 0.06, 0.05, 0.05]);  data.addRow(["'02'", 0.02, 0.01, 0.05, 0.06, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.01, 0.04, 0.05, 0.04, 0.05]);  data.addRow(["'02'", 0.29, 0.01, 0.23, 0.11, 0.04, 0.03]);  data.addRow(["'02'", 0.02, 0.01, 0.04, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.21, 0.02, 0.17, 0.11, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.04, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.02, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.08, 0.01, 0.09, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.12, 0.07, 0.12, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.15, 0.09, 0.13, 0.04, 0.04]);  data.addRow(["'02'", 0.02, 0.31, 0.12, 0.25, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.11, 0.02, 0.10, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.09, 0.02, 0.08, 0.05, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.02, 0.07, 0.04, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.09, 0.01, 0.08, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.02, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.04, 0.03, 0.05, 0.02, 0.02]);  data.addRow(["'02'", 0.02, 0.02, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.04, 0.01, 0.04, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.65, 0.10, 0.52, 0.32, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.25, 0.06, 0.19, 0.02, 0.02]);  data.addRow(["'02'", 0.08, 0.03, 0.08, 0.05, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.02, 0.02, 0.02]);  data.addRow(["'02'", 0.02, 0.03, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.05, 0.04, 0.05, 0.02, 0.02]);  data.addRow(["'02'", 0.08, 0.01, 0.08, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.07, 0.04, 0.07, 0.02, 0.02]);  data.addRow(["'02'", 0.49, 0.03, 0.37, 0.21, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.03, 0.05, 0.06, 0.04, 0.05]);  data.addRow(["'02'", 0.09, 0.01, 0.10, 0.07, 0.05, 0.06]);  data.addRow(["'02'", 0.22, 0.01, 0.17, 0.12, 0.03, 0.03]);  data.addRow(["'02'", 0.30, 0.01, 0.25, 0.13, 0.05, 0.05]);  data.addRow(["'02'", 0.22, 0.12, 0.22, 0.20, 0.04, 0.05]);  data.addRow(["'02'", 0.02, 0.21, 0.10, 0.17, 0.04, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.03, 0.11, 0.08, 0.11, 0.05, 0.03]);  data.addRow(["'02'", 0.09, 0.01, 0.08, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.05, 0.05, 0.04, 0.04]);  data.addRow(["'02'", 0.08, 0.08, 0.10, 0.08, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.07, 0.06, 0.07, 0.03, 0.03]);  data.addRow(["'02'", 0.00, 0.01, 0.02, 0.02, 0.02, 0.02]);  data.addRow(["'02'", 0.05, 0.02, 0.08, 0.04, 0.07, 0.03]);  data.addRow(["'02'", 0.00, 0.03, 0.03, 0.04, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.06, 0.05, 0.07, 0.03, 0.03]);  data.addRow(["'02'", 0.10, 0.38, 0.25, 0.29, 0.03, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.07, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.09, 0.10, 0.10, 0.03, 0.03]);  data.addRow(["'02'", 0.04, 0.05, 0.07, 0.06, 0.06, 0.03]);  data.addRow(["'02'", 0.06, 0.04, 0.09, 0.05, 0.08, 0.03]);  data.addRow(["'02'", 0.02, 0.06, 0.06, 0.08, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.06, 0.09, 0.08, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.06, 0.05, 0.07, 0.03, 0.03]);  data.addRow(["'02'", 0.00, 0.01, 0.02, 0.02, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.04, 0.03, 0.05, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.14, 0.08, 0.12, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.37, 0.12, 0.28, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.68, 0.19, 0.52, 0.05, 0.06]);  data.addRow(["'02'", 0.01, 0.05, 0.03, 0.06, 0.02, 0.03]);  data.addRow(["'02'", 0.00, 0.02, 0.02, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.08, 0.05, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.06, 0.05, 0.07, 0.03, 0.03]);  data.addRow(["'02'", 0.02, 0.16, 0.07, 0.16, 0.05, 0.06]);  data.addRow(["'02'", 0.23, 0.06, 0.21, 0.17, 0.05, 0.05]);  data.addRow(["'02'", 0.02, 0.09, 0.06, 0.10, 0.03, 0.04]);  data.addRow(["'02'", 0.21, 0.03, 0.18, 0.13, 0.03, 0.04]);  data.addRow(["'02'", 0.22, 0.06, 0.19, 0.16, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.12, 0.08, 0.12, 0.04, 0.05]);  data.addRow(["'02'", 0.05, 0.51, 0.43, 0.55, 0.24, 0.24]);  data.addRow(["'02'", 0.03, 0.32, 0.18, 0.32, 0.09, 0.10]);  data.addRow(["'02'", 0.08, 0.10, 0.10, 0.11, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.15, 0.05, 0.14, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.06, 0.06, 0.08, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.04, 0.05, 0.07, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.07, 0.07, 0.09, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.13, 0.09, 0.13, 0.04, 0.04]);  data.addRow(["'02'", 0.24, 0.90, 0.64, 0.79, 0.16, 0.18]);  data.addRow(["'02'", 0.02, 0.29, 0.14, 0.25, 0.05, 0.05]);  data.addRow(["'02'", 0.27, 0.24, 0.32, 0.27, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.21, 0.13, 0.18, 0.04, 0.04]);  data.addRow(["'02'", 0.02, 0.19, 0.14, 0.18, 0.06, 0.06]);  data.addRow(["'02'", 0.01, 0.13, 0.09, 0.14, 0.05, 0.05]);  data.addRow(["'02'", 0.09, 0.15, 0.16, 0.15, 0.05, 0.04]);  data.addRow(["'02'", 0.02, 0.57, 0.24, 0.44, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.06, 0.08, 0.09, 0.04, 0.04]);  data.addRow(["'02'", 0.02, 0.15, 0.12, 0.16, 0.05, 0.05]);  data.addRow(["'02'", 0.10, 0.28, 0.21, 0.27, 0.07, 0.08]);  data.addRow(["'02'", 0.03, 0.49, 0.27, 0.42, 0.09, 0.08]);  data.addRow(["'02'", 0.01, 0.08, 0.06, 0.09, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.04, 0.05, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.09, 0.38, 0.19, 0.33, 0.05, 0.05]);  data.addRow(["'02'", 0.14, 0.10, 0.19, 0.14, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.10, 0.08, 0.11, 0.04, 0.04]);  data.addRow(["'02'", 0.43, 0.03, 0.33, 0.18, 0.04, 0.04]);  data.addRow(["'02'", 0.02, 0.01, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.03, 0.34, 0.28, 0.42, 0.18, 0.22]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.03, 0.09, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.07, 0.06, 0.08, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.07, 0.11, 0.09, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.04, 0.09, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.04, 0.03, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.11, 0.12, 0.12, 0.03, 0.04]);  data.addRow(["'02'", 0.23, 0.02, 0.18, 0.12, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.02, 0.08, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.21, 0.07, 0.18, 0.04, 0.04]);  data.addRow(["'02'", 0.08, 0.03, 0.09, 0.06, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.42, 0.20, 0.32, 0.04, 0.04]);  data.addRow(["'02'", 0.47, 0.05, 0.36, 0.21, 0.04, 0.05]);  data.addRow(["'02'", 0.36, 0.04, 0.28, 0.17, 0.03, 0.03]);  data.addRow(["'02'", 0.76, 0.02, 0.55, 0.30, 0.04, 0.05]);  data.addRow(["'02'", 1.70, 0.08, 1.21, 0.66, 0.03, 0.04]);  data.addRow(["'02'", 3.41, 0.07, 2.36, 1.10, 0.04, 0.05]);  data.addRow(["'02'", 2.46, 0.27, 1.80, 1.03, 0.05, 0.05]);  data.addRow(["'02'", 1.03, 0.07, 0.74, 0.41, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.11, 0.10, 0.12, 0.05, 0.06]);  data.addRow(["'02'", 0.03, 0.06, 0.08, 0.09, 0.04, 0.05]);  data.addRow(["'02'", 0.01, 0.02, 0.04, 0.05, 0.04, 0.04]);  data.addRow(["'02'", 0.44, 0.19, 0.42, 0.27, 0.06, 0.06]);  data.addRow(["'02'", 0.01, 0.24, 0.12, 0.21, 0.05, 0.06]);  data.addRow(["'02'", 0.03, 0.23, 0.16, 0.25, 0.08, 0.10]);  data.addRow(["'02'", 0.48, 0.10, 0.43, 0.28, 0.07, 0.07]);  data.addRow(["'02'", 0.03, 0.20, 0.15, 0.21, 0.07, 0.07]);  data.addRow(["'02'", 16.99, 0.45, 12.38, 4.32, 0.08, 0.08]);  data.addRow(["'02'", 0.03, 0.11, 0.12, 0.15, 0.06, 0.07]);  data.addRow(["'02'", 0.05, 0.15, 0.15, 0.18, 0.07, 0.07]);  data.addRow(["'02'", 0.14, 0.09, 0.17, 0.13, 0.04, 0.05]);  data.addRow(["'02'", 0.09, 0.09, 0.14, 0.12, 0.05, 0.05]);  data.addRow(["'02'", 0.02, 0.32, 0.17, 0.31, 0.06, 0.07]);  data.addRow(["'02'", 0.10, 0.46, 0.29, 0.39, 0.06, 0.07]);  data.addRow(["'02'", 0.04, 0.13, 0.13, 0.16, 0.06, 0.06]);  data.addRow(["'02'", 0.76, 0.13, 0.63, 0.30, 0.06, 0.07]);  data.addRow(["'02'", 0.40, 0.12, 0.37, 0.23, 0.06, 0.06]);  data.addRow(["'02'", 35.53, 0.43, 24.65, 4.57, 0.07, 0.09]);  data.addRow(["'02'", 0.27, 0.21, 0.35, 0.29, 0.05, 0.06]);  data.addRow(["'02'", 0.03, 0.35, 0.19, 0.30, 0.06, 0.06]);  data.addRow(["'02'", 0.15, 0.22, 0.20, 0.25, 0.04, 0.04]);  data.addRow(["'02'", 0.09, 0.24, 0.19, 0.23, 0.06, 0.07]);  data.addRow(["'02'", 0.02, 0.77, 0.30, 0.59, 0.06, 0.07]);  data.addRow(["'02'", 25.09, 0.91, 17.80, 3.84, 0.09, 0.10]);  data.addRow(["'02'", 3.88, 0.38, 2.96, 0.78, 0.05, 0.04]);  data.addRow(["'02'", 0.30, 0.32, 0.36, 0.35, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.15, 0.07, 0.14, 0.04, 0.04]);  data.addRow(["'02'", 0.10, 0.07, 0.12, 0.09, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.28, 0.16, 0.25, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.20, 0.10, 0.17, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.11, 0.08, 0.11, 0.04, 0.04]);  data.addRow(["'02'", 0.09, 0.09, 0.13, 0.10, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.50, 0.20, 0.39, 0.06, 0.06]);  data.addRow(["'02'", 0.09, 0.13, 0.12, 0.13, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.17, 0.10, 0.15, 0.04, 0.04]);  data.addRow(["'02'", 0.08, 0.07, 0.11, 0.09, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.02, 0.08, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.11, 0.06, 0.10, 0.03, 0.04]);  data.addRow(["'02'", 0.09, 0.07, 0.10, 0.08, 0.02, 0.02]);  data.addRow(["'02'", 1.06, 0.11, 0.79, 0.47, 0.05, 0.05]);  data.addRow(["'02'", 3.05, 0.09, 2.13, 1.08, 0.03, 0.04]);  data.addRow(["'02'", 2.11, 0.07, 1.50, 0.74, 0.09, 0.05]);  data.addRow(["'02'", 4.34, 0.09, 3.03, 1.48, 0.08, 0.04]);  data.addRow(["'02'", 4.85, 0.14, 3.38, 1.62, 0.04, 0.05]);  data.addRow(["'02'", 2.28, 0.08, 1.60, 0.80, 0.03, 0.04]);  data.addRow(["'02'", 1.03, 0.09, 0.76, 0.41, 0.04, 0.04]);  data.addRow(["'02'", 0.03, 0.48, 0.21, 0.37, 0.06, 0.05]);  data.addRow(["'02'", 1.09, 0.11, 0.80, 0.42, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.04, 0.05, 0.07, 0.04, 0.04]);  data.addRow(["'02'", 0.02, 0.10, 0.10, 0.13, 0.05, 0.05]);  data.addRow(["'02'", 0.10, 0.06, 0.14, 0.12, 0.06, 0.07]);  data.addRow(["'02'", 0.15, 0.18, 0.22, 0.21, 0.06, 0.06]);  data.addRow(["'02'", 0.03, 0.59, 0.28, 0.49, 0.09, 0.09]);  data.addRow(["'02'", 0.02, 0.12, 0.10, 0.14, 0.05, 0.06]);  data.addRow(["'02'", 0.11, 0.35, 0.25, 0.37, 0.07, 0.08]);  data.addRow(["'02'", 0.03, 0.16, 0.13, 0.17, 0.06, 0.06]);  data.addRow(["'02'", 0.02, 0.15, 0.11, 0.16, 0.05, 0.05]);  data.addRow(["'02'", 0.47, 0.63, 0.64, 0.65, 0.09, 0.10]);  data.addRow(["'02'", 0.02, 0.12, 0.12, 0.14, 0.07, 0.07]);  data.addRow(["'02'", 0.03, 0.24, 0.16, 0.25, 0.08, 0.08]);  data.addRow(["'02'", 0.03, 0.57, 0.28, 0.47, 0.08, 0.09]);  data.addRow(["'02'", 0.02, 0.14, 0.13, 0.16, 0.06, 0.06]);  data.addRow(["'02'", 0.02, 0.22, 0.14, 0.22, 0.07, 0.07]);  data.addRow(["'02'", 0.11, 0.12, 0.18, 0.19, 0.08, 0.09]);  data.addRow(["'02'", 0.03, 0.19, 0.16, 0.19, 0.05, 0.06]);  data.addRow(["'02'", 0.10, 0.57, 0.31, 0.47, 0.07, 0.08]);  data.addRow(["'02'", 0.01, 0.46, 0.16, 0.37, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.22, 0.12, 0.20, 0.05, 0.05]);  data.addRow(["'02'", 0.01, 0.19, 0.11, 0.17, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.17, 0.09, 0.14, 0.03, 0.03]);  data.addRow(["'02'", 0.02, 0.04, 0.05, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.38, 0.09, 0.32, 0.22, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.13, 0.09, 0.13, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.09, 0.08, 0.09, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.05, 0.05, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.12, 0.07, 0.12, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.09, 0.06, 0.09, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.02, 0.04, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.09, 0.54, 0.27, 0.40, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.04, 0.05, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.08, 0.04, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.03, 0.04, 0.05, 0.02, 0.03]);  data.addRow(["'02'", 0.08, 0.07, 0.10, 0.08, 0.03, 0.03]);  data.addRow(["'02'", 0.27, 0.02, 0.21, 0.12, 0.02, 0.03]);  data.addRow(["'02'", 0.01, 0.01, 0.03, 0.03, 0.02, 0.02]);  data.addRow(["'02'", 0.02, 0.03, 0.04, 0.05, 0.02, 0.02]);  data.addRow(["'02'", 0.27, 0.13, 0.26, 0.22, 0.05, 0.05]);  data.addRow(["'02'", 1.46, 0.04, 1.02, 0.53, 0.03, 0.04]);  data.addRow(["'02'", 2.69, 0.05, 1.87, 0.93, 0.04, 0.05]);  data.addRow(["'02'", 0.86, 0.13, 0.66, 0.38, 0.04, 0.04]);  data.addRow(["'02'", 2.49, 0.22, 1.79, 1.00, 0.04, 0.05]);  data.addRow(["'02'", 2.55, 0.14, 1.82, 0.98, 0.05, 0.06]);  data.addRow(["'02'", 2.02, 0.08, 1.41, 0.58, 0.03, 0.04]);  data.addRow(["'02'", 0.56, 0.06, 0.42, 0.24, 0.03, 0.04]);  data.addRow(["'02'", 0.86, 0.08, 0.65, 0.34, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.08, 0.06, 0.09, 0.04, 0.05]);  data.addRow(["'02'", 0.65, 0.05, 0.51, 0.20, 0.04, 0.04]);  data.addRow(["'02'", 0.99, 0.29, 0.85, 0.51, 0.12, 0.12]);  data.addRow(["'02'", 0.05, 0.05, 0.09, 0.11, 0.05, 0.06]);  data.addRow(["'02'", 0.10, 0.21, 0.21, 0.22, 0.06, 0.07]);  data.addRow(["'02'", 0.03, 0.35, 0.18, 0.30, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.24, 0.13, 0.21, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.13, 0.11, 0.14, 0.05, 0.05]);  data.addRow(["'02'", 0.09, 0.10, 0.16, 0.14, 0.05, 0.06]);  data.addRow(["'02'", 9.75, 1.32, 7.88, 4.54, 0.05, 0.05]);  data.addRow(["'02'", 0.04, 0.38, 0.23, 0.37, 0.10, 0.11]);  data.addRow(["'02'", 0.04, 0.48, 0.31, 0.59, 0.07, 0.08]);  data.addRow(["'02'", 0.21, 0.32, 0.29, 0.37, 0.09, 0.11]);  data.addRow(["'02'", 0.02, 0.20, 0.15, 0.21, 0.06, 0.06]);  data.addRow(["'02'", 0.02, 0.42, 0.23, 0.36, 0.06, 0.06]);  data.addRow(["'02'", 0.04, 0.12, 0.16, 0.16, 0.09, 0.07]);  data.addRow(["'02'", 2.58, 0.49, 2.00, 1.23, 0.07, 0.07]);  data.addRow(["'02'", 9.53, 0.28, 6.68, 2.61, 0.12, 0.14]);  data.addRow(["'02'", 0.09, 0.43, 0.29, 0.41, 0.04, 0.04]);  data.addRow(["'02'", 0.03, 0.57, 0.31, 0.53, 0.11, 0.12]);  data.addRow(["'02'", 0.08, 0.55, 0.14, 0.46, 0.04, 0.08]);  data.addRow(["'02'", 0.02, 0.13, 0.10, 0.12, 0.04, 0.04]);  data.addRow(["'02'", 0.01, 0.22, 0.12, 0.19, 0.04, 0.05]);  data.addRow(["'02'", 0.00, 0.08, 0.04, 0.09, 0.02, 0.03]);  data.addRow(["'02'", 0.38, 0.14, 0.37, 0.25, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.07, 0.04, 0.09, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.04, 0.04, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.22, 0.14, 0.20, 0.06, 0.06]);  data.addRow(["'02'", 0.56, 0.45, 0.48, 0.57, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.01, 0.09, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.08, 0.12, 0.10, 0.04, 0.04]);  data.addRow(["'02'", 0.00, 0.01, 0.02, 0.03, 0.02, 0.03]);  data.addRow(["'02'", 0.27, 0.01, 0.21, 0.12, 0.03, 0.03]);  data.addRow(["'02'", 0.00, 0.01, 0.03, 0.03, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.03, 0.09, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.02, 0.02, 0.04, 0.05, 0.03, 0.03]);  data.addRow(["'02'", 0.00, 0.02, 0.03, 0.04, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.12, 0.05, 0.12, 0.03, 0.05]);  data.addRow(["'02'", 1.02, 0.07, 0.74, 0.43, 0.04, 0.05]);  data.addRow(["'02'", 1.72, 0.04, 1.20, 0.63, 0.02, 0.03]);  data.addRow(["'02'", 3.01, 0.07, 2.10, 1.07, 0.05, 0.05]);  data.addRow(["'02'", 1.10, 0.05, 0.79, 0.43, 0.03, 0.04]);  data.addRow(["'02'", 0.74, 0.05, 0.55, 0.24, 0.04, 0.04]);  data.addRow(["'02'", 2.10, 0.06, 1.47, 0.75, 0.03, 0.03]);  data.addRow(["'02'", 0.35, 0.13, 0.30, 0.25, 0.03, 0.04]);  data.addRow(["'02'", 0.02, 0.04, 0.05, 0.06, 0.03, 0.03]);  data.addRow(["'02'", 0.08, 0.05, 0.10, 0.08, 0.03, 0.04]);  data.addRow(["'02'", 0.01, 0.11, 0.08, 0.11, 0.03, 0.03]);  data.addRow(["'02'", 0.01, 0.14, 0.09, 0.14, 0.04, 0.04]);  data.addRow(["'02'", 2.57, 0.20, 1.98, 0.58, 0.04, 0.06]);  data.addRow(["'02'", 0.39, 0.10, 0.34, 0.18, 0.04, 0.05]);  data.addRow(["'02'", 0.06, 0.17, 0.16, 0.19, 0.05, 0.05]);  data.addRow(["'02'", 0.64, 0.62, 0.77, 0.67, 0.08, 0.08]);  data.addRow(["'02'", 0.41, 0.23, 0.41, 0.37, 0.06, 0.08]);  data.addRow(["'02'", 0.02, 0.27, 0.13, 0.24, 0.05, 0.06]);  data.addRow(["'02'", 0.02, 0.11, 0.12, 0.13, 0.06, 0.06]); 
	    var graphtitle="HPCf Net Traffic ";
	    var xtitle='Time';
            var ytitle='All'
            
	
	    