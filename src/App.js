import React from "react";
import data from './data';

function App() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-white py-0 fixed-top">
        <div className="container">
          <img src="imagenes/logotrans-negro.png" alt="" width="250px" ></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span> <i id="bar" className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
                <a className="nav-link" href="/">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/camisetas">CAMISETAS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/buzos">BUZOS/CHAQUETAS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pantalones">PANTALONES/SUDADERAS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sale">SALE</a>
              </li>
              <li className="nav-item">
                <a href="/user">
                <i className="fas fa-user"></i>
                </a>
                <i className="fas fa-search"></i>
                <a href="/cart">
                <i className="fas fa-shopping-bag" ></i>
                </a>
              </li>
            </ul>
                      
          </div>
        </div>
      </nav>

    <section id="home">
      <div className="container">
        <h5>NEW ARRAIVALS</h5>
        <h1><span>Women's & Men's</span> Wear</h1>
        <p>Something for you is defintely here</p>
        <button>Shop Now</button>
      </div>
    </section>

    <section id="featured" className="my-5 pb-5">
      <div className="container text-center mt-5 py-5">
        <h5>Última Colección</h5>
        <hr className="mx-auto"></hr>
        <h3>INSIDE</h3>
      </div>
      <div className="row mx-auto container-fluid">
        {
          data.products.map(product => (
            <div key = {product._id} className="product text-center col-lg-3 col-md-3 col-12">
              
              <img className="img-fluid mb-3" 
              src={product.image} 
              alt={product.name}></img>
            
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h5 className="p-name">{product.name}</h5>
            <h4 className="p-price">${product.price}</h4>
            <button className="buy-btn">AGREGAR AL CARRITO</button>
          </div>
            
          ))
        }
          
      </div>
    </section>

    <footer className="mt-5 py-5">
      <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-3 col-md-6 col-12">
          <img className="img-fluid" src="imagenes/logo.png" alt=""></img>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
          <h5 className="pb-2">FUKU</h5>
          <ul className="text-uppercase list-unstyled">
            <li><a href="inicio.html">Inicio</a></li>
            <li><a href="camisetas.html">Camisetas</a></li>
            <li><a href="buzos.html">Buzos/Chaquetas</a></li>
            <li><a href="pantalones.html">Pantalones/Sudaderas</a></li>
            <li><a href="sale.html">Sale</a></li>
          </ul>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
          <h5 className="pb-2">CONTACTANOS</h5>
          <div>
            <h6 className="text-uppercase">Direccion</h6>
            <p>123 STREAR NAME,CITY,COL</p>
          </div>
          <div>
            <h6 className="text-uppercase">Telefono</h6>
            <p>+57 303-345-3452</p>
          </div>
          <div>
            <h6 className="text-uppercase">Email</h6>
            <p>MAIL@EXAMPLE.COM</p>
          </div>
        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12">
          <h5 className="pb-2">INSTAGRAM</h5>
          <div className="row">
            <img className="img-fluid w-25 h-100 m-2" src="imagenes/model1.jpg" alt=""></img>
            <img className="img-fluid w-25 h-100 m-2" src="imagenes/model2.jpg" alt=""></img>
            <img className="img-fluid w-25 h-100 m-2" src="imagenes/model3.jpg" alt=""></img>
            <img className="img-fluid w-25 h-100 m-2" src="imagenes/model4.jpg" alt=""></img>
            <img className="img-fluid w-25 h-100 m-2" src="imagenes/snop.jpg" alt=""></img>
          </div>
        </div>
      </div>
      <div className="copyright mt-5">
        <div className="row container mx-auto">
          <div className="col-lg-4 col-md-6 col-12 text-nowrap mb-2">
            <p>rymo eCommerce 2021. All Rights Reserved</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <a href="facebook.html"><i className="fab fa-facebook-f"></i></a>
            <a href="twitter.html"><i className="fab fa-twitter"></i></a>
            <a href="insta.html"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

    </footer></>

    );
} 
  
export default App;