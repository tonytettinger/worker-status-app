import React from 'react';
import { useForm } from 'react-hook-form';
import useAddEmployee from '../../hooks/employees/useAddEmployee';

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
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register('name')} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EmployeeForm;
