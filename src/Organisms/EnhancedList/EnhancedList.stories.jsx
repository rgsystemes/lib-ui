import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { array } from '@storybook/addon-knobs'
import { ListUl } from 'styled-icons/boxicons-regular/ListUl'
import { BarChart } from 'styled-icons/boxicons-regular/BarChart'
import { Snackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'

import EnhancedList, { EditColumns } from './index'
import BasePagination from '../../Molecules/Pagination'
import Button from '../../Atoms/Button'
import Tooltip from '../../Atoms/Tooltip'
import Trans from '../../Atoms/Trans'
import BaseExport from '../../Molecules/Export'

import markdown from './README.md'

export default {
  title: 'Organisms/EnhancedList',
}

const data = [
  {
    id:            '5e2efd300ba17ff10e946438',
    index:         0,
    guid:          '94600e8f-f663-489e-96f5-b7553f7776e2',
    isActive:      true,
    balance:       '$3,591.71',
    age:           40,
    eyeColor:      'green',
    name:          'Mabel Petty',
    gender:        'female',
    company:       'GEEKULAR',
    email:         'mabelpetty@geekular.com',
    phone:         '+1 (984) 532-3999',
    address:       '755 Graham Avenue, Baker, Arizona, 3610',
    favoriteFruit: 'banana',
  },
  {
    id:            '5e2efd30bc82f63ee6cd9747',
    index:         1,
    guid:          '1491c4f7-b16c-454e-975c-385d4e9e7db4',
    isActive:      true,
    balance:       '$3,121.30',
    age:           20,
    eyeColor:      'blue',
    name:          'Sandoval Lester',
    gender:        'male',
    company:       'IDETICA',
    email:         'sandovallester@idetica.com',
    phone:         '+1 (943) 409-3063',
    address:       '489 Benson Avenue, Boyd, Oklahoma, 2925',
    favoriteFruit: 'strawberry',
  },
  {
    id:            '5e2efd30680280af12a1b1fc',
    index:         2,
    guid:          'd7a2bd6f-0e51-4d91-882d-a28846ecb99a',
    isActive:      true,
    balance:       '$1,411.19',
    age:           36,
    eyeColor:      'blue',
    name:          'Francesca Norman',
    gender:        'female',
    company:       'GLUID',
    email:         'francescanorman@gluid.com',
    phone:         '+1 (885) 549-2810',
    address:       '273 Lake Avenue, Broadlands, Kansas, 9158',
    favoriteFruit: 'apple',
  },
  {
    id:            '5e2efd30ac0e8a56381dd4bb',
    index:         3,
    guid:          'ec388574-415b-453b-bac5-ddbc6a2b570d',
    isActive:      true,
    balance:       '$3,936.83',
    age:           36,
    eyeColor:      'brown',
    name:          'Cole Horn',
    gender:        'male',
    company:       'ZOUNDS',
    email:         'colehorn@zounds.com',
    phone:         '+1 (832) 409-3604',
    address:       '785 Beaver Street, Worton, North Carolina, 5515',
    favoriteFruit: 'strawberry',
  },
  {
    id:            '5e2efd308c6d4ad820e448cf',
    index:         4,
    guid:          '03738595-e870-4d6a-a86e-35004a4d063e',
    isActive:      true,
    balance:       '$2,280.75',
    age:           25,
    eyeColor:      'green',
    name:          'Leola Jarvis',
    gender:        'female',
    company:       'BRISTO',
    email:         'leolajarvis@bristo.com',
    phone:         '+1 (915) 402-2038',
    address:       '628 Franklin Avenue, Brenton, Marshall Islands, 1563',
    favoriteFruit: 'banana',
  },
  {
    id:            '5e2efd30568559bce2e6f12e',
    index:         5,
    guid:          '43299f57-96c3-4d09-abf8-2a0c6f0355f2',
    isActive:      false,
    balance:       '$3,479.13',
    age:           29,
    eyeColor:      'green',
    name:          'Janna Mitchell',
    gender:        'female',
    company:       'SILODYNE',
    email:         'jannamitchell@silodyne.com',
    phone:         '+1 (935) 466-3494',
    address:       '303 Lefferts Avenue, Escondida, New Mexico, 3538',
    favoriteFruit: 'apple',
  },
  {
    id:            '5e2efd302ed0750fffc41147',
    index:         6,
    guid:          '9054ffee-79bf-4000-8090-c21d86a61387',
    isActive:      false,
    balance:       '$3,690.76',
    age:           21,
    eyeColor:      'brown',
    name:          'Gregory Kramer',
    gender:        'male',
    company:       'EXOPLODE',
    email:         'gregorykramer@exoplode.com',
    phone:         '+1 (861) 596-3072',
    address:       '917 Gotham Avenue, Belgreen, American Samoa, 2233',
    favoriteFruit: 'strawberry',
  },
]

const Alert = ({ ...props }) => <MuiAlert elevation={6} variant="filled" {...props} />

const Export = props =>
  <BaseExport onExport={action('Export button clicked')} {...props}/>

const Pagination = () => <BasePagination
  currentPage={1}
  sizeOptions={['10', '20', '30', '40']}
  onPageChange={action('page changed')}
  onSizeChange={action('size changed')}
  label="1-10 of 250"
/>

const actions = [
  [
    <Tooltip title="Switch to graph view" key="tooltip-1">
      <Button onClick={action('Clicked on additional action')}>
        <BarChart size={16} />
      </Button>
    </Tooltip>,
    <Tooltip title="Switch to list view" key="tooltip-2">
      <Button onClick={action('Clicked on additional action')}>
        <ListUl size={16} />
      </Button>
    </Tooltip>,
  ],
]

const initialColumns = [
  { name: 'id', translationKey: 'ID', description: 'Unique id identifying the object' },
  { name: 'index', translationKey: 'Index', description: 'Index in the array' },
  { name: 'guid', translationKey: 'GUID', description: 'Sorta same than the id but fancier' },
  { name: 'isActive', translationKey: 'Is active', description: 'Is it active ?' },
  { name: 'balance', translationKey: 'Balance', description: 'Bank account balance. Whether the guy is rich or not' },
  {
    name:           'age',
    translationKey: 'Age',
    description:    'Age of the dude',
    type:           'date',
  },
  { name: 'eyeColor', translationKey: 'Eye color', description: 'Eye color of the dude' },
  {
    name:           'name',
    translationKey: 'Name',
    description:    'Kinda same than guid, but fancier',
    placeholder:    'My name',
    type:           'text',
  },
  {
    name:           'gender',
    translationKey: 'Gender',
    description:    'Whether the guy is a dude or a chick',
    type:           'select',
    options:        [
      { label: 'Not specified', value: '' },
      { label: 'Male', value: 'm' },
      { label: 'Female', value: 'f' },
    ],
  },
  { name: 'company', translationKey: 'Company', description: 'Where the person currently works' },
  { name: 'email', translationKey: 'Email', description: 'GDPR sensitive data' },
  { name: 'phone', translationKey: 'Phone', description: 'GDPR sensitive data' },
  { name: 'address', translationKey: 'Address', description: 'GDPR sensitive data' },
  { name: 'favoriteFruit', translationKey: 'Favorite fruit', description: 'Favorite fruit of the person. This tells a lot about one\'s state of mind' },
].map(c => ({ show: true, ...c }))

export const enhancedList = () => {
  const [columns, setColumns] = useState(initialColumns)

  const setColumnShown = columnName => {
    setColumns(columns.map(({ name, show, ...column }) => (
      { name, ...column, show: name === columnName ? !show : show }
    )))
  }

  const [filters, setFilters] = useState(columns.reduce((filters, { name }) => ({ ...filters, [name]: null }), {}))

  const [exportAlertOpen, setExportAlertOpen] = useState(false)
  const [exportAlertSeverity, setExportAlertSeverity] = useState()

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setExportAlertOpen(false)
  }

  return <>
    <EnhancedList
      columns={columns}
      data={array('Data', data)}
      onSelect={action('item selected')}
      onSearch={action('searched something')}
      onAdd={action('clicked on add')}
      onFilter={filters => {
        action('onFilter')(filters)
        setFilters(filters)
      }}
      onExport={({ filename }) => setTimeout(() => {
        setExportAlertSeverity(!/\W/.test(filename.replace(/\s/g, '')) ? 'success' : 'error')
        setExportAlertOpen(true)
      }, 1000)}
      onClear={setFilters}
      filters={filters}
      SearchInputProps={{
        placeholder: 'Search ...',
      }}
      Pagination={Pagination}
      Export={Export}
      EditColumns={props => <EditColumns onChange={setColumnShown} {...props} />}
      actions={actions}
    />
    <Snackbar
      anchorOrigin={{
        vertical:   'top',
        horizontal: 'right',
      }}
      open={exportAlertOpen}
      autoHideDuration={3000}
      onClose={handleAlertClose}
    >
      <Alert
        onClose={handleAlertClose}
        severity={exportAlertSeverity}
      >
        <Trans transKey={`global.export.alerts.${exportAlertSeverity}`} />
      </Alert>
    </Snackbar>
  </>
}

enhancedList.story = {
  parameters: {
    notes: { markdown },
    jest:  ['EnhancedList.test.jsx'],
  },
}
