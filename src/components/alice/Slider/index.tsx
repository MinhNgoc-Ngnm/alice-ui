import { Slider as S } from '../../ui/slider'
import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

export type ISlider = React.ComponentProps<typeof SliderPrimitive.Root>
export type OSlider = {}
const Slider = React.memo(
  React.forwardRef<OSlider, ISlider>((props) => {
    return <S {...props} />
  })
)

Slider.displayName = 'Slider'
export { Slider }
