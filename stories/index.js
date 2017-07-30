import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import styled from 'styled-components'

import Img from '../lib'

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`

storiesOf('Img', module)
  .addDecorator(getStory => (
    <Wrapper>{getStory()}</Wrapper>
  ))
  .add('initial', () => <Img src="http://lorempixel.com/400/400/animals" />)
