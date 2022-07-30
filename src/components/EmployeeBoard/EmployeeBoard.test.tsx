import { describe, expect, it } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import EmployeeBoard from './EmployeeBoard';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<EmployeeBoard />)
    expect(screen.getByText(/This is the eployee board/i)).toBeInTheDocument()
  })
})