import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div>
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <div className="img-container p-5" onClick={() => console.log('you clicked me on image container')}>
                        <Link to="/details">
                            <img src={img} alt="product image" className="card-img-top"></img>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={()=> console.log("added to the cart")}>
                            {inCart?(
                                <p className="text-captalize mb-0" disabled>
                                    {" "}
                                    In Cart
                                </p>
                            ):(
                                <i className="fas fa-cart-plus"></i>
                            )}
                        </button>
                        
                        </div>
                    </div>
                </ProductWrapper>
            </div>
        )
    }
}

const ProductWrapper = styled.div`
`