import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.target.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            className='form-control'
            type='text'
            value={name}
            disabled
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            className='form-control'
            type='text'
            value={email}
            disabled
          ></input>
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
        </form>
      </section>
    </>
  );
}
export default NewTicket;
