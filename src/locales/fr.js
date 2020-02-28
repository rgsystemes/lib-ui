import { fr as molecules } from '../Molecules/locales'

const locale = {
  lang:   'fr',
  molecules,
  global: {
    dateFormat: 'dd/MM/yyyy hh:mm',
    no_results: 'Aucun résultat',
    filter:     {
      clearCurrent: 'Clear current filters',
    },
    action: {
      chooseOption: 'Choisissez une option',
      cancel:       'Anuler',
      add:          'Ajouter',
      remove:       'Supprimer',
    },
    pagination: {
      perPage: '%count% par page',
    },
    editColumns: {
      title:           'Edition des colonnes',
      description:     'Vous pouvez afficher/cacher les colonnes ou changer l\'ordre des colonnes',
      enabledColumns:  'Colonnes affichées',
      disabledColumns: 'Colonnes cachées',
    },
  },
}

export default locale
