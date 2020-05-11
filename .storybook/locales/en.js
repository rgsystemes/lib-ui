export default {
  molecules: {
    dateRange: {
      startDate: 'Start date',
      endDate: 'End date',
    },
  },
  global: {
    dateFormat: 'dd/MM/yyyy hh:mm',
    no_results: 'No results found',
    filter: {
      clear: 'Clear',
      clearCurrent: 'Clear current filters',
      applyFilter: 'Ok',
    },
    action: {
      chooseOption: 'Choose an option',
      cancel: 'Cancel',
      add: 'Add',
      remove: 'Remove',
      save: 'Save',
      edit: 'Edit',
    },
    pagination: {
      perPage: '%count% per page',
    },
    export: {
      title: 'Export',
      description: 'You will receive an email containing a link that contains the export.',
      filename: 'File name',
      defaultFilename: 'AGENT_NAME_OR_NODE_NAME - EXPORT_NAME',
      format: 'File format',
      actionExport: 'Export',
      formats: {
        xls: 'Excel file (.xls)',
        xml: 'XML file (.xml)',
        json: 'JSON file (.json)',
        'csv-comma': 'CSV file with comma separator (.csv)',
        'csv-semicolon': 'CSV file with semicolon separator (.csv)',
        txt: 'Text file with tab separator (.txt)',
      },
      alerts: {
        success: 'Your export is processing, we\'ll send you a link by email to download it when it\'ll be ready',
        error: 'An error occured while exporting',
      },
    },
    editColumns: {
      title: 'Edit columns',
      description: 'You can hide/show the columns as well as change the display order',
      enabledColumns: 'Enabled columns',
      disabledColumns: 'Disabled columns',
    }
  }
}
