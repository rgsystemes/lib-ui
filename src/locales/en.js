import { en as molecules } from '../Molecules/locales'

const locale = {
  lang:   'en',
  molecules,
  global: {
    dateFormat: 'dd/MM/yyyy hh:mm',
    no_results: 'No results found',
    filter:     {
      clearCurrent: 'Clear current filters',
    },
    action: {
      chooseOption: 'Choose an option',
      cancel:       'Cancel',
      add:          'Add',
      remove:       'Remove',
    },
    pagination: {
      perPage: '%count% per page',
    },
    editColumns: {
      title:           'Edit columns',
      description:     'You can hide/show the columns as well as change the display order',
      enabledColumns:  'Enabled columns',
      disabledColumns: 'Disabled columns',
    },
  },
}

export default locale
