export const employeeStatuses = [
  'added',
  'in-check',
  'approved',
  'inactive',
  'active'
] as const;
export type EmployeeStatus = typeof employeeStatuses[number];

export interface IEmployeeProps {
  id: number;
  name: string;
  status: EmployeeStatus;
}
