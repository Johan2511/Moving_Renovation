import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <form className="mx-auto max-w-md">
          <div className="mb-4">
            <input type="text" placeholder="Nombre" className="w-full p-4 rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Correo Electrónico" className="w-full p-4 rounded-lg" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Mensaje" className="w-full p-4 rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
