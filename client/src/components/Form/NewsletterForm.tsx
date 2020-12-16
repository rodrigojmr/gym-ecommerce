import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import FormInput from './FormInput';
import { ImportantTextStyle, StyledInput } from '../styled';
import theme from '../../theme/theme';

const StyledForm = styled.form`
  width: 100%;
  display: flex;

  & > input {
    flex-grow: 1;
  }
`;

const FormButton = styled.button`
  ${ImportantTextStyle}
  border-bottom: 1px solid black;
  font-size: 2.5rem;
`;

// TODO Add visual notifiers for errors in inputting

const NewsletterForm = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  return (
    <StyledForm>
      <label htmlFor="email-input"></label>
      <StyledInput
        id="email-input"
        backgroundColor="transparent"
        borderColor="black"
        color={theme.colors.grey}
        name="email"
        placeholder="Enter your email address"
        value={email}
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setEmail(e.target.value)
        }
      />
      <FormButton color={theme.colors.primary} type="submit">
        Subscribe &gt;
      </FormButton>
      {error && <p>{error}</p>}
    </StyledForm>
  );
};

export default NewsletterForm;
