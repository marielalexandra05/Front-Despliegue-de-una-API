import React, { useState } from 'react';
import axios from 'axios';
import { FormGroup, Label, Input, Button } from 'reactstrap';

const FormProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', expiry_date: '' });

  const handleInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://aut2-despliegue-de-una-api-production.up.railway.app/api/product', product)
      .then((response) => {
        console.log(response);
        setProduct({ name: '', price: '', expiry_date: '' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className="mb-12 border rounded p-3 mt-2">
    //   <h3 className="mb-3 mt-2">Agregar Producto</h3>
    //   <form onSubmit={handleSubmit}>
    //     <FormGroup>
    //       <Label for="name">Nombre:</Label>
    //       <Input type="text" name="name" id="name" value={product.name} onChange={handleInputChange} />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="price">Precio:</Label>
    //       <Input type="number" name="price" id="price" value={product.price} onChange={handleInputChange} />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="expiry_date">Fecha de expiración:</Label>
    //       <Input type="date" name="expiry_date" id="expiry_date" value={product.expiry_date} onChange={handleInputChange} />
    //     </FormGroup>
    //     <Button type="submit" color="primary">Agregar</Button>
    //   </form>
    // </div>
   <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
  <div class="md:flex">
    <div class="w-full px-6 py-8">
      <h3 class="text-2xl font-bold mb-4">Agregar Producto</h3>
      <form class="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label class="block font-medium text-gray-700" for="name">
            Nombre
          </label>
          <div class="mt-1">
            <input
              class="form-input py-2 px-3 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="name"
              name="name"
              type="text"
              value={product.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label class="block font-medium text-gray-700" for="price">
            Precio
          </label>
          <div class="mt-1">
            <input
              class="form-input py-2 px-3 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="price"
              name="price"
              type="number"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label class="block font-medium text-gray-700" for="expiry_date">
            Fecha de expiración
          </label>
          <div class="mt-1">
            <input
              class="form-input py-2 px-3 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="expiry_date"
              name="expiry_date"
              type="date"
              value={product.expiry_date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <br></br>
          <button
            class="bg-indigo-500 text-blue py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default FormProduct;