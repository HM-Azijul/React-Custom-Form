import { useState } from 'react';
import InputGroup from '../components/shared/forms/InputGroup';
import Button from '../components/UI/buttons/Button';

const init = {
  title: '',
  bio: '',
  skills: '',
};

const App = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidity(values);
    if (isValid) {
      console.log(values);
    } else {
      console.log(errors);
    }
  };

  const checkValidity = (values) => {
    const errors = {};
    const { title, bio, skills } = values;

    if (!title) {
      errors.title = 'Invalid title';
    }
    if (!bio) {
      errors.bio = 'Invalid Bio';
    }
    if (!skills) {
      errors.skills = 'Invalid Skills';
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputGroup
            value={values.title}
            label={'Title'}
            name={'title'}
            placeholder={'Software Engineer'}
            onChange={handleChange}
          />

          <InputGroup
            value={values.bio}
            label={'Bio'}
            name={'bio'}
            placeholder={'I am a software engineer ....'}
            onChange={handleChange}
          />

          <InputGroup
            value={values.skills}
            label={'Skills'}
            name={'skills'}
            placeholder={'javsScript, react'}
            onChange={handleChange}
          />

          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default App;
