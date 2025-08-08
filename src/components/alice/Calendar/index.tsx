import React from 'react'
import { Calendar as C, CalendarDayButton as CB } from '../../ui/calendar'
import { Button } from '@/components/ui/button'
import { DayPicker, DayButton } from 'react-day-picker'
export type ICalendar = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}
export type OCalendar = {}

const Calendar = React.memo(
  React.forwardRef<OCalendar, ICalendar>((props, ref) => {
    React.useImperativeHandle(ref, () => ({}))
    return <C {...props} />
  })
)
Calendar.displayName = 'Calendar'
export { Calendar }

export type ICalendarDayButton = React.ComponentProps<typeof DayButton>
export type OCalendarDayButton = {}
const CalendarDayButton = React.memo(
  React.forwardRef<OCalendarDayButton, ICalendarDayButton>((props) => {
    return <CB {...props} />
  })
)
CalendarDayButton.displayName = 'CalendarDayButton'
export { CalendarDayButton }
