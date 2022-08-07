import React from 'react';
import { useForm } from 'react-hook-form';
import useAddEmployee from '../../hooks/employees/useAddEmployee';
import { StyledEmployeeForm, StyledInput } from './EmployeeForm.styled';

interface EmployeeData {
  name: string;
}

const EmployeeForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<EmployeeData>();
  const createPost = useAddEmployee();

  const onSubmit = handleSubmit(({ name }) => {
    createPost({ variables: { name } });
    reset();
  });

  return (
    <StyledEmployeeForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        {...register('name')}
        placeholder="Click here to enter name"
      />
      <StyledInput type="submit" value="Add Employee" />
    </StyledEmployeeForm>
  );
};

export default EmployeeForm;
