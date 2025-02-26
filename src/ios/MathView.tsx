'use strict'
import { MathViewProps } from 'common'
import * as React from 'react'
import { requireNativeComponent, UIManager } from 'react-native'

const nativeViewName = 'RNMathView'
const RNMathView = requireNativeComponent(nativeViewName)

export const { Commands } = UIManager.getViewManagerConfig(nativeViewName) || {}

const MathView = React.forwardRef((props: MathViewProps, ref: any) => {
  return <RNMathView {...props} ref={ref} />
})

export default MathView
