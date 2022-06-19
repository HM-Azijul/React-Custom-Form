import { useState } from 'react';
import InputGroup from '../components/shared/forms/InputGroup';

const init = {
  title: '',
  bio: '',
  skills: '',
};

const App = () => {
  const [formState, setFormState] = useState({ ...init });

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="root">
      <form>
        <InputGroup
          value={formState.title}
          label={'Title'}
          name={'title'}
          placeholder={'Software Engineer'}
          onChange={handleChange}
        />

        <InputGroup
          value={formState.bio}
          label={'Bio'}
          name={'bio'}
          placeholder={'I am a software engineer ....'}
          onChange={handleChange}
        />

        <InputGroup
          value={formState.skills}
          label={'Skills'}
          name={'skills'}
          placeholder={'javsScript, react'}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
