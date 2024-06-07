import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorN, setErrorN] = useState(false);
  const [errorL, setErrorL] = useState(false);

  function handleNameChange(event) {
    const val = event.target.value;
    setName(val);
    let lol = false;
    if (
      val.trim().length === 0 ||
      val.trim().length > 14 ||
      val.trim().length < 8
    ) {
      lol = true;
    }
    setErrorN(lol);
  }

  function handleLastNameChange(event) {
    const val = event.target.value;
    setLastName(val);
    let lol = false;
    if (
      val.trim().length === 0 ||
      val.trim().length > 14 ||
      val.trim().length < 8
    ) {
      lol = true;
    }
    setErrorL(lol);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() && lastName.trim()) {
      console.log(`Submitted: ${name} ${lastName}`);
    } else {
      setErrorN(name.trim().length === 0);
      setErrorL(lastName.trim().length === 0);
    }
  }

  return (
    <>
      <section className="pageForm">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              style={{
                border: errorN ? '2px solid red' : null,
              }}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              style={{
                border: errorL ? '2px solid red' : null,
              }}
              onChange={handleLastNameChange}
            />
          </div>
          <button
            type="submit"
            disabled={errorN || errorL}
            className={errorN || errorL ? 'disabled' : null}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
