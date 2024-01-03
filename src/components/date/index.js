import { parseISO, format } from 'date-fns'
import { StyledDate } from './style.js'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <>
      <StyledDate>
        <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
      </StyledDate>
    </>
  )
}