import React from 'react'

import { text } from '@storybook/addon-knobs'

import Layout from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Layout',
}

export const layout = () => (
  <Layout
    leftChildren={
      <>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
      </>
    }
    leftWidth={'250px'}
    rightChildren={
      <>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
      </>
    }
    rightWidth={'100%'}
  />
)

layout.story = {
  parameters: {
    notes: { markdown },
  },
}

export const layoutWithScrollBar = () => (
  <Layout
    leftChildren={
      <>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
        <div>{text('some_text', 'Some text')}</div>
        <div>{text('some_text_again', 'Some text again but pretty long so we can see were it wraps')}</div>
      </>
    }
    leftWidth={'250px'}
    rightChildren={
      <>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
        <div>{text('another_text', 'Another text')}</div>
        <div>{text('another_text_again', 'Another text again, same here we try to make it as longer as possible to ensure wrap is well done. This div has a huge width, so we need more content to try to reach the end of each line!')}</div>
      </>
    }
    rightWidth={'100%'}
  />
)

layoutWithScrollBar.story = {
  parameters: {
    notes: { markdown },
  },
}
