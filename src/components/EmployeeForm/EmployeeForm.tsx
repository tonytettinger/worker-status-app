import React from 'react';
import { useForm } from 'react-hook-form';
import useAddEmployee from '../../hooks/employees/useAddEmployee';
import { StyledEmployeeForm, StyledInput } from './EmployeeForm.styled';

interface EmployeeData {
  name: string;
}

const EmployeeForm: React.FC = () => {
  const { register, handleSubmit } = useForm<EmployeeData>();
  const createPost = useAddEmployee();

  const onSubmit = handleSubmit(({ name }) => {
    createPost({ variables: { name } });
  });

  return (
    <StyledEmployeeForm onSubmit={onSubmit}>
      <StyledInput type="text" {...register('name')} />
      <StyledInput type="submit" value="Add new employee" />
    </StyledEmployeeForm>
  );
};

export default EmployeeForm;
