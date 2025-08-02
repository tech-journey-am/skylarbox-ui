"use client";
import * as React from "react";

interface ContactFormProps {}

export function ContactForm({}: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className='flex flex-col w-80 text-xs min-w-60'>
      <h3 className='text-lg font-semibold leading-none text-brand-brown font-montserrat'>
        Gửi tin nhắn cho chúng tôi
      </h3>
      <form onSubmit={handleSubmit} className='mt-4 w-full'>
        <div className='flex flex-col justify-center items-start p-3 w-full bg-white rounded border border-solid border-brand-lavender/30 focus-within:border-brand-lavender'>
          <label className='flex gap-0.5 items-start'>
            <span className='text-brand-gray'>Tên của bạn</span>
            <span className='text-red-600'>*</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
            className='w-full mt-1 bg-transparent border-none outline-none text-brand-brown'
          />
        </div>

        <div className='flex flex-col justify-center items-start p-3 mt-3 w-full whitespace-nowrap bg-white rounded border border-solid border-brand-lavender/30 focus-within:border-brand-lavender'>
          <label className='flex gap-0.5 items-start'>
            <span className='text-brand-gray'>Email</span>
            <span className='text-red-600'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
            className='w-full mt-1 bg-transparent border-none outline-none text-brand-brown'
          />
        </div>

        <div className='flex flex-col justify-center items-start p-3 mt-3 w-full bg-white rounded border border-solid border-brand-lavender/30 focus-within:border-brand-lavender'>
          <label className='flex gap-0.5 items-start'>
            <span className='text-brand-gray'>Số điện thoại</span>
            <span className='text-red-600'>*</span>
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            required
            className='w-full mt-1 bg-transparent border-none outline-none text-brand-brown'
          />
        </div>

        <button
          type='submit'
          className='overflow-hidden gap-1.5 self-start px-5 py-2 mt-4 leading-loose text-center text-brand-lavender rounded border border-brand-lavender border-solid hover:bg-brand-lavender hover:text-white transition-colors'
        >
          Gửi ngay
        </button>
      </form>
    </section>
  );
}
