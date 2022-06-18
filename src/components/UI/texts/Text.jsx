import styled from 'styled-components';

const fontSizes = {
  sm: '0.8rem',
  md: '1rem',
  lg: '1.1rem',
};

const lineHeight = {
  sm: 1.2,
  md: 1.4,
  lg: 1.6,
}; //এটা নাম্বার তাই ডাবল কোট দেই নি। উপরের টার সাথে rem আছে তাই ওইটাকে স্ট্রিং বানাতে হইছিল।

const Text = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] ?? '1rem'};
  color: #222;
  line-height: ${(props) => lineHeight[props.line] ?? 1.3};
`;

export default Text;
