import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './form.css';

const ContactForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    name: '',
    email: '',
    phoneNumber: '',
    referralSource: '',
    description: '',
  });

  const validateFields = useCallback(() => {
    const { movingFrom, movingTo, moveDate, name, email, phoneNumber, description } = formValues;
    const errors = {};

    if (!movingFrom.trim()) {
      errors.movingFrom = 'Moving From is required';
    }
    if (!movingTo.trim()) {
      errors.movingTo = 'Moving To is required';
    }
    if (!moveDate) {
      errors.moveDate = 'Move Date is required';
    }
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!description) {
        errors.description = 'description is required';
      }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone Number is invalid';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formValues]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
    setFormValues((prevValues) => ({
      ...prevValues,
      moveDate: date ? date.toISOString().split('T')[0] : '',
    }));
    setDatePickerOpen(false);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const form = new FormData(e.target);
    const movingFrom = encodeURIComponent(form.get('movingFrom'));
    const movingTo = encodeURIComponent(form.get('movingTo'));
    const moveDate = encodeURIComponent(selectedDate ? selectedDate.toISOString().split('T')[0] : '');
    const phoneNumber = encodeURIComponent(form.get('phoneNumber'));
    const referralSource = encodeURIComponent(form.get('referralSource'));
    const name = encodeURIComponent(form.get('name'));
    const email = encodeURIComponent(form.get('email'));
    const description = encodeURIComponent(form.get('description'));

    const body = `Moving From: ${movingFrom}%0D%0A` +
      `Moving To: ${movingTo}%0D%0A` +
      `Move Date: ${moveDate}%0D%0A` +
      `Phone Number: ${phoneNumber}%0D%0A` +
      `Referral Source: ${referralSource}%0D%0A%0D%0A` +
      `Name: ${name}%0D%0A` +
      `Email: ${email}%0D%0A%0D%0A` +
      `Description: ${description}`;
    
    const mailtoLink = `mailto:johanpenuelah@gmail.com?subject=Name ${name} Email ${email}&body=${body}`;
    window.location.href = mailtoLink;
  }, [validateFields, selectedDate]);

  return (
    <section className="contact">
      <div className="u-wrapper">
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="form">
            <h2 className="tag text-3xl text-orange-500 font-semibold mb-4 text-center">Get your moving quote for free</h2>

            <label htmlFor="movingFrom" className='text-white'>Moving From</label>
            <input
              type="text"
              name="movingFrom"
              placeholder="Moving From"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.movingFrom}
              onChange={handleInputChange}
              aria-describedby={errors.movingFrom ? 'movingFromError' : null}
              required
            />
            {errors.movingFrom && <p id="movingFromError" className="text-red-500">{errors.movingFrom}</p>}

            <label htmlFor="movingTo" className='text-white'>Moving To</label>
            <input
              type="text"
              name="movingTo"
              placeholder="Moving To"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.movingTo}
              onChange={handleInputChange}
              aria-describedby={errors.movingTo ? 'movingToError' : null}
              required
            />
            {errors.movingTo && <p id="movingToError" className="text-red-500">{errors.movingTo}</p>}

            <label htmlFor="moveDate" className='text-white'>Move Date</label>
            <input
              type="text"
              name="moveDate"
              placeholder="Move Date"
              value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
              readOnly
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              onClick={() => setDatePickerOpen(true)}
              aria-describedby={errors.moveDate ? 'moveDateError' : null}
              required
            />
            {datePickerOpen && (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className="block w-full p-2 border border-orange-400 rounded bg-white shadow"
                inline
                onBlur={() => setDatePickerOpen(false)}
                required
              />
            )}
            {errors.moveDate && <p id="moveDateError" className="text-red-500">{errors.moveDate}</p>}

            <label htmlFor="name" className='text-white'>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.name}
              onChange={handleInputChange}
              aria-describedby={errors.name ? 'nameError' : null}
              required
            />
            {errors.name && <p id="nameError" className="text-red-500">{errors.name}</p>}

            <label htmlFor="email" className='text-white'>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.email}
              onChange={handleInputChange}
              aria-describedby={errors.email ? 'emailError' : null}
              required
            />
            {errors.email && <p id="emailError" className="text-red-500">{errors.email}</p>}

            <label htmlFor="phoneNumber" className='text-white'>Your Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your Phone Number"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              aria-describedby={errors.phoneNumber ? 'phoneNumberError' : null}
              required
            />
            {errors.phoneNumber && <p id="phoneNumberError" className="text-red-500">{errors.phoneNumber}</p>}

            <label htmlFor="referralSource" className='text-white'>Where did you hear about us?</label>
            <select
              name="referralSource"
              className='block w-full mb-2 p-3 border border-orange-400 rounded text-black sm:p-2 lg:p-1'
              value={formValues.referralSource}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="internet">Internet</option>
              <option value="friend">Friend</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>

            <textarea
              id="description"
              name="description"
              cols="30"
              rows="10"
              placeholder="Description"
              className="block w-full mb-2 p-3 border border-orange-400 rounded text-black h-32 sm:p-2 lg:p-1"
              value={formValues.description}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.description && <p id="descriptionError" className="text-red-500">{errors.description}</p>}
            <p className="text-xl text-white mb-4">By continuing, you agree to our Terms and Conditions.</p>
            <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
