import React from 'react';
import { CardColumns,  Card } from 'react-bootstrap';

import styled from 'styled-components';
import  './css/normalize.css';
import  './css/demo.css';
import  './css/component.css';
import Snap  from 'snapsvg-cjs';
const mina = window.mina;
const Ican = styled.div`
.container{
  margin: 0;
  padding: 0;
}
figure {
    border-radius: 10px;
  }

.cardx{
  border-radius: 10px;
}
  `;
(function() {

  function init() {
    let speed = 250,
      easing = mina.easeinout;
    [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
      let s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
        pathConfig = {
          from : path.attr( 'd' ),
          to : el.getAttribute( 'data-path-hover' )
        };

      el.addEventListener( 'mouseenter', function() {
        path.animate( { 'path' : pathConfig.to }, speed, easing );
      } );

      el.addEventListener( 'mouseleave', function() {
        path.animate( { 'path' : pathConfig.from }, speed, easing );
      } );
    } );
  }

  init();

})();

const Infoican = () => (
  <CardColumns>
    <Ican>
      <Card className="cardx">
        <div className="container">
          <section id="grid" className="grid clearfix">
            <a href="#" className="gridx"  data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
              <figure>
                <img className="Img" src="/images/img1.jpg"  alt="golf"/>
                <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z"/></svg>
                <figcaption>
                  <h2> PROJECT ANALYSIS </h2>
                  <p>Before you start your project.</p>
                </figcaption>
              </figure>
            </a>
          </section>
        </div>
      </Card>
    </Ican>
    <Ican>
      <Card className="cardx">
        <div className="container">
          <section id="grid" className="grid clearfix">
            <a href="#" className="gridx"  data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
              <figure>
                <img className="Img" src="/images/img1.jpg"  alt="golf"/>
                <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z"/></svg>
                <figcaption>
                  <h2> PROJECT ANALYSIS </h2>
                  <p>Before you start your project.</p>
                </figcaption>
              </figure>
            </a>
          </section>
        </div>
      </Card>
    </Ican>
    <Ican>
      <Card className="cardx">
        <div className="container">
          <section id="grid" className="grid clearfix">
            <a href="#" className="gridx"  data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
              <figure>
                <img className="Img" src="/images/img1.jpg"  alt="golf"/>
                <svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z"/></svg>
                <figcaption>
                  <h2> PROJECT ANALYSIS </h2>
                  <p>Before you start your project.</p>
                </figcaption>
              </figure>
            </a>
          </section>
        </div>
      </Card>
    </Ican>
  </CardColumns>

)
export default Infoican
