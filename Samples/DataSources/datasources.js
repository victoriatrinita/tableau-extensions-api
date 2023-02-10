"use strict";

(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      const worksheets =
        tableau.extensions.dashboardContent.dashboard.worksheets;

      worksheets.forEach(async (worksheet) => {
        // Summary Data
        const dataTableReader = await worksheet.getSummaryDataReaderAsync();
        const dataTable = await dataTableReader.getAllPagesAsync();
        console.log(dataTable);
        await dataTableReader.releaseAsync();

        // Underlying Data
        const logicalTables = await worksheet.getUnderlyingTablesAsync();
        const logicalTableId = await logicalTables[0].id;
        const underlyingData = await worksheet.getUnderlyingTableDataAsync(
          logicalTableId
        );
        console.log(underlyingData._data);
      });
    });
  });
})();
