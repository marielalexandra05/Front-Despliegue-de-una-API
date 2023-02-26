import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import axios from "axios";

const ListProduct = ({ productos, setProductos }) => {

  const deleteProduct = (id) => {
    axios.delete(`https://aut2-despliegue-de-una-api-production.up.railway.app/api/product/${id}`)
      .then(() => {
        setProductos(productos.filter((pro) => pro._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://aut2-despliegue-de-una-api-production.up.railway.app/api/list")
        .then(({ data }) => {
          setProductos(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [setProductos]);

  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-12">
      <h2 class="text-center mt-5 mb-3">U3 - AUT2 Despliegue de una API – REST en el cloud</h2>
      <h3 class="mb-3">Lista de Productos</h3>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Fecha de caducidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((pro) => (
              <tr key={pro._id}>
                <td>{pro.name}</td>
                <td>${pro.price}</td>
                <td>{new Date(pro.expiry_date).toLocaleDateString()}</td>
                <td>
                  <button class="btn btn-danger" onClick={() => deleteProduct(pro._id)}>
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      
    </>
  );
};

export default ListProduct;