import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import UserSelect, { User } from './index'
import { TransProvider } from '../../Atoms/Trans/index'

import markdown from './README.md'

export default {
  title: 'Molecules/UserSelect',
}

const translations = {
  global: {
    open:  'Open jedis',
    close: 'Close jedis',
    clear: 'Clear jedi',
  },
}

export const userSelect = () => {
  const handleError = ({ error }) => window.alert(error)

  return (
    <TransProvider value={translations}>
      {
        [
          {
            id:       'jedi',
            label:    'Jedi and not jedi',
            useState: useState(1),
          },
          {
            id:       'jedis',
            label:    'Jedis and not jedis',
            useState: useState([1]),
          },
        ].map(({ id, label, useState: [state, setState] }, key) => (
          <UserSelect key={key} id={id} label={label} values={state} onChange={value => action('change')(value) || setState(value)} onError={error => action('error')(error) || handleError(error)} placeholder="Select a jedi or add one">
            <User value={1} avatar="//material-ui.com/static/images/avatar/1.jpg">
              Obi-Wan Kenobi
            </User>
            <User value={2} avatar="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iNDhweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI0OHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDMzLjk4NSwyMTAuMzgxdi02NC44NzdjMC03OS4yOTYtNjQuODgyLTE0NC4xNzMtMTQ0LjE3My0xNDQuMTczaC03Mi4wODZjLTc5LjMwMiwwLTE0NC4xNzMsNjQuODc2LTE0NC4xNzMsMTQ0LjE3MyAgdjY0Ljg3N0wxLjQ2NywzOTcuODA4YzAsMzYuMDQzLDExMi45NTIsMTA4LjEyOSwyNTIuMzAzLDEwOC4xMjljMTM5LjMzOSwwLDI1Mi4zMDMtNzIuMDg2LDI1Mi4zMDMtMTA4LjEyOUw0MzMuOTg1LDIxMC4zODF6ICAgTTE0NS42NCw0NDcuMzY3Yy03LjQ3NCwwLTEzLjUxNi02LjA0My0xMy41MTYtMTMuNTE3czYuMDQyLTEzLjUxNywxMy41MTYtMTMuNTE3YzcuNDc0LDAsMTMuNTE3LDYuMDQzLDEzLjUxNywxMy41MTcgIFMxNTMuMTE0LDQ0Ny4zNjcsMTQ1LjY0LDQ0Ny4zNjcgTTEyNy42MTgsMjUzLjYzNGMwLTkuOTE0LDQuOTk4LTI0LjQwNCwxMS4xMTEtMzIuMjAxYzAsMCwxNy4xMy0yMS44NjQsNTEuOTY1LTIxLjg2NCAgYzE3LjY2OSwwLDMwLjAwMSw4LjExOSwzMC4wMDEsOC4xMTljOC4yNzEsNS40NDQsMTUuMDUzLDE4LjAxLDE1LjA1MywyNy45MjR2MjcuMDMzYzAsNC45NTctOC4xMDcsOS4wMTEtMTguMDIyLDkuMDExSDE0NS42NCAgQzEzNS43MjYsMjcxLjY1NiwxMjcuNjE4LDI2My41NDMsMTI3LjYxOCwyNTMuNjM0IE0xOTkuNzA1LDQzMy44NTFoLTE4LjAyMXYtMzYuMDQzbDE4LjAyMS0xOC4wMjJWNDMzLjg1MXogTTI0NC43NTksNDMzLjg1MSAgaC0yNy4wMzN2LTcyLjA4N2gyNy4wMzNWNDMzLjg1MXogTTIyNi43MzcsMzQzLjc0MlYzMTYuNzFjMC0xNC45MzYsMTIuMTA4LTI3LjAzMiwyNy4wMzItMjcuMDMyICBjMTQuOTM2LDAsMjcuMDMyLDEyLjA5NywyNy4wMzIsMjcuMDMydjI3LjAzMkgyMjYuNzM3eiBNMjg5LjgxMiw0MzMuODUxSDI2Mi43OHYtNzIuMDg3aDI3LjAzMlY0MzMuODUxeiBNMzI1Ljg1Niw0MzMuODUxaC0xOC4wMjIgIHYtNTQuMDY1bDE4LjAyMiwxOC4wMjJWNDMzLjg1MXogTTM2MS44OTksNDQ3LjM2N2MtNy40NzQsMC0xMy41MTctNi4wNDMtMTMuNTE3LTEzLjUxN3M2LjA0My0xMy41MTcsMTMuNTE3LTEzLjUxNyAgczEzLjUxNiw2LjA0MywxMy41MTYsMTMuNTE3UzM2OS4zNzMsNDQ3LjM2NywzNjEuODk5LDQ0Ny4zNjcgTTM2MS44OTksMjcxLjY1NmgtNzIuMDg3Yy05LjkxNCwwLTE4LjAyMS00LjA1NC0xOC4wMjEtOS4wMTF2LTI3LjAzMyAgYzAtOS45MTUsNi43Ny0yMi40OCwxNS4wNTQtMjcuOTI0YzAsMCwxMi4zMTktOC4xMTksMzAuMDAxLTguMTE5YzM0LjgzNCwwLDUxLjk2NCwyMS44NjQsNTEuOTY0LDIxLjg2NCAgYzYuMTEzLDcuNzk2LDExLjExMSwyMi4yODcsMTEuMTExLDMyLjIwMUMzNzkuOTIxLDI2My41NDMsMzcxLjgxMywyNzEuNjU2LDM2MS44OTksMjcxLjY1NiBNNDczLjI5MSw0MDYuMjA4ICBjLTEuMDY4LDAuNDEtMi4xNzEsMC42MS0zLjI2MiwwLjYxYy0zLjYwMywwLTcuMDE3LTIuMTgzLTguMzktNS43MzdsLTY1LjUzOS0xNjguMzQzYy0xNy4zMjktNDMuMy0zOC43NDItNjAuMjAxLTc2LjM5My02MC4yMDEgIGMtMjQuOTY4LDAtNDUuOTEsMTUuNDgxLTQ2LjEyMiwxNS42NTFjLTExLjExLDguMzM2LTI4LjUyMiw4LjMwMS0zOS42NDUsMGMtMC4xNzYtMC4xNy0yMS4zMy0xNS42NTEtNDYuMTIyLTE1LjY1MSAgYy0zNy42MjcsMC01OS4wNjMsMTYuOTAxLTc2LjQxNiw2MC4yNzFMNDUuOTExLDQwMS4wODFjLTEuODA3LDQuNjM0LTcuMDYzLDYuOTM0LTExLjY3NCw1LjEyNyAgYy00LjYzNS0xLjc5NS02LjkzNS03LjAxNy01LjExNi0xMS42NzRsNjUuNTI4LTE2OC4zMzFjMjAuMDk4LTUwLjI3LDQ3Ljk2NC03MS42ODgsOTMuMTctNzEuNjg4ICBjMzAuOTI4LDAsNTUuODk1LDE4LjQ2Miw1Ni45MzksMTkuMjNjNC43MTYsMy41NjEsMTMuMzA1LDMuNTYxLDE4LjAxLDBjMS4wNTYtMC43NjksMjYuMDM1LTE5LjIzLDU2LjkzOS0xOS4yMyAgYzQ1LjIxOSwwLDczLjA3MiwyMS40MTgsOTMuMTU4LDcxLjYxN2w2NS41NjMsMTY4LjQwMkM0ODAuMjI1LDM5OS4xOTEsNDc3LjkzNyw0MDQuNDEzLDQ3My4yOTEsNDA2LjIwOCIvPjwvc3ZnPg==">
              Darth Vader
            </User>
            <User value={3} status="success">
              Yoda
            </User>
            <User value={4} status="warning">
              C3PO
            </User>
          </UserSelect>
        ))
      }
    </TransProvider>
  )
}

userSelect.story = {
  parameters: {
    notes: { markdown },
    jest:  ['UserSelect.test.jsx'],
  },
}
