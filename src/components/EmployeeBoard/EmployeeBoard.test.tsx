import React from 'react';
import { describe, expect, it } from 'vitest';
import { ApolloProvider } from '@apollo/client';
import { render, screen } from '../../utils/test-utils';
import EmployeeBoard from './EmployeeBoard';
import client from '../../common/apollo-client';

describe('Simple working test', () => {
  it('the title is visible and correct', () => {
    render(
      <ApolloProvider client={client}>
        <EmployeeBoard />
      </ApolloProvider>
    );
    expect(screen.getByText(/Employee Management System/i)).toBeInTheDocument();
  });
});
