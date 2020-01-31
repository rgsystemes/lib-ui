import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TableList from './index'

import markdown from './README.md'

export default {
  title: 'Molecules/TableList',
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

const columns = [
  { name: 'id', translationKey: 'id' },
  { name: 'index', translationKey: 'index' },
  { name: 'guid', translationKey: 'guid' },
  { name: 'isActive', translationKey: 'Is active' },
  { name: 'balance', translationKey: 'Balance' },
  { name: 'age', translationKey: 'Age' },
  { name: 'eyeColor', translationKey: 'Eye color' },
  { name: 'name', translationKey: 'Name' },
  { name: 'gender', translationKey: 'Gender' },
  { name: 'company', translationKey: 'Company' },
  { name: 'email', translationKey: 'Email' },
  { name: 'phone', translationKey: 'Phone' },
  { name: 'address', translationKey: 'Address' },
  { name: 'favoriteFruit', translationKey: 'Favorite fruit' },
]

const Details = ({ id }) => <div>
  Bonsoir je suis {id}
</div>

export const tableList = () => {
  const [sort, setSort] = useState()
  const [way, setWay] = useState()
  const [selected, setSelected] = useState()

  return <TableList
    data={data}
    columns={columns}
    way={way}
    sort={sort}
    onSort={(sortedColumn, sortedWay) => {
      setSort(sortedColumn)
      setWay(sortedWay)
      action('on sort called')(sortedColumn, sortedWay)
    }}
  />
}
tableList.story = {
  parameters: {
    notes: { markdown },
    jest:  ['./SortedColumn/SortedColumn.test.jsx'],
  },
}
