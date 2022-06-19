import styled from 'styled-components';
import TextInput from '../../UI/inputs/TextInput';
import Label from '../../UI/inputs/Label';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputGroup = ({ label, name, value, placeholder }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        name={name}
        id={name}
        placeholder={placeholder ?? ''}
        value={value}
      />
    </Container>
  );
};

export default InputGroup;
