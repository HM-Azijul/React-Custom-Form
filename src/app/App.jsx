import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';
import TextInput from '../components/UI/inputs/TextInput';
import Text from '../components/UI/texts/Text';

const App = () => {
  return (
    <div className="root">
      {/* <TextInput />
      <Button>Test Me</Button>
      <Text size="lg">lorem1000</Text> */}

      <InputGroup
        name="title"
        placeholder={'Enter Your Title'}
        label={'Title'}
      />
    </div>
  );
};

export default App;
