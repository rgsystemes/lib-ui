# lib-ui

## Setup

```sh
npm install
npm run test
npm run storybook
```

## plop

In order to simplify component creation, *plop* has been added and configured to generate pre-filled components files.

### Usage

`npx plop component`

## Atomic design

Components are organized by categories losely following the [Atomic Design Methodology](http://atomicdesign.bradfrost.com/chapter-2).  
Feel free to read it to better understand what it means.

### tl;dr

- Atoms are highly re-usable, purpose-free and context-free components.  
We should keep them as simple and as few as possible.

- Molecules are reusable, context-free, coherent groups of atoms that serves a purpose.  
They represent basic reusable features.

- Organisms are groups of atoms, molecules and/or other organisms that share a local context and represent a high level features.  
They can either be reusable or single use, but their local context shouldn't leak where they're used.

- Templates are simply defining layouts with placeholders for other components to fill.

*Note: Pages aren't mentioned because they basically are the final app*
