import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,  
  Link
} from 'react-router-dom';


import logo from './img/logo.png';
import logo_mobile from './img/logo_mobile.png';
import VideoSection from './videosection';
import Home from './index1';
import Home_Static_image from './index2';
import Home_Text_rotator from './index3';
import Home_Cookie_bar from './index4';
import Home_Popup from './index5';
import Home_Mobile_synthetic from './index6';
import Home_Layer_slider from './index8';
import Coming_Page from './coming_soon';

import list_page from './list_page';
import grid_list from './grid_list';

import detail_page from './detail_page';
import submit_restaurant from './submit_restaurant';
import cart from './cart';
import cart_2 from './cart_2';
import cart_3 from './cart_3';
import cart_datepicker from './cart_datepicker';

import about from './about';
import faq from './faq';

import admin from './admin';
import submit_driver from './submit_driver';
import detail_page_2 from './detail_page_2';
import blog from './blog';
import contacts from './contacts';
import shortcodes from './shortcodes';
import icon_pack_1 from './icon_pack_1';

import slide_1 from './img/slides/slide_1.jpg';
import slide_2 from './img/slides/slide_2.jpg';
import sub_header_cart from './img/sub_header_cart.jpg';
import Page_footer from './footer';

export default class icon_pack_2 extends Component {
    componentDidMount(){
    // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(250).css({'overflow':'visible'});
      $('#sub_content').addClass('animated zoomIn');
      $(window).scroll();      
      $('.number').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 2000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
 
  }
  handleClick(){
    var currentRoute = 'React-Route path';
    var linkRoute = 'link path';
    location.reload();   
   /* if (currentRoute === linkRoute){
        location.reload();        
    } else {
      location.reload();        
    }*/
  }
  componentWillMount(){
      document.body.style.backgroundColor = "#FFFFFF",
      document.body.classList.toggle('darkClass', this.props.isDark);
  }
  render(){
  return (
    <div>
        <header>        
                  <Grid  fluid>
                    <Row >
                      <Col md={4} sm={4} xs={4}>
                        <Link to=""  id="logo">
                        <Image src={logo} width="190" height="23" alt="" data-retina="complete" className="hidden-xs" />
                        <Image src={logo_mobile} width="59" height="23" alt="" data-retina="complete" className="hidden-lg hidden-md hidden-sm" />
                        </Link>
                      </Col>
                      <Col md={8} sm={8} xs={8} componentClass={'nav'}>
                        <Link className="cmn-toggle-switch cmn-toggle-switch__htx open_close" to="#">
                          <span>Menu mobile</span>
                        </Link>
                        <div className="main-menu">
                          <div id="header_menu">
                            <img src={logo} width="190" height="23" alt="" data-retina="true" />
                          </div>
                          <Link to="#" className="open_close" id="close_in"><i className="icon_close"></i></Link>
                          <ul  role="nav">
                            <li className="submenu">
                              <Link to="#" className="show-submenu">Home
                                <i className="icon-down-open-mini"></i>
                              </Link>
                                <ul>                                                     
                                  <li><Link onClick={this.handleClick}  to="/home">Home Video background</Link></li>                              
                                  <li><Link onClick={this.handleClick} to="/index2" refresh="true" >Home Static image</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index3">Home Text rotator</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index8">Home Layer slider</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index4">Home Cookie bar</Link></li>
                                  <li><Link onClick={this.handleClick}  to="/index5">Home Popup</Link></li>
                                                                     
                                  <li><Link onClick={this.handleClick}  to="/coming_soon">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <Link to="#" className="show-submenu">Restaurants
                                <i className="icon-down-open-mini"></i>
                              </Link>
                              <ul>
                                <li><Link onClick={this.handleClick}  to="/list_page">Row listing</Link></li>
                                <li><Link onClick={this.handleClick}  to="/grid_list">Grid listing</Link></li>
                                
                                <li><Link onClick={this.handleClick}  to="/detail_page">Restaurant Menu</Link></li>
                                <li><Link onClick={this.handleClick}  to="/submit_restaurant">Submit Restaurant</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart">Order step 1</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_2">Order step 2</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_3">Order step 3</Link></li>
                                <li><Link onClick={this.handleClick}  to="/cart_datepicker">Order Date/Time picker</Link></li>
                              </ul>
                            </li>
                            <li><Link onClick={this.handleClick}  to="/about">About us</Link></li>
                            <li><Link onClick={this.handleClick}  to="/faq">Faq</Link></li>
                            <li className="submenu">
                              <Link to="#" className="show-submenu">Pages<i className="icon-down-open-mini"></i></Link>
                              <ul>                            
                                <li><Link onClick={this.handleClick}  to="/admin">Admin section</Link></li>
                                <li><Link onClick={this.handleClick}  to="/submit_driver">Submit Driver</Link></li>
                                <li><Link to="#0" data-toggle="modal" data-target="#login_2">User Login</Link></li>
                                <li><Link to="#0" data-toggle="modal" data-target="#register">User Register</Link></li>
                                <li><Link onClick={this.handleClick}  to="/detail_page_2">Restaurant detail page</Link></li>
                                <li><Link onClick={this.handleClick}  to="/blog">Blog</Link></li>
                                <li><Link onClick={this.handleClick}  to="/contacts">Contacts</Link></li>
                                
                                
                                <li><Link onClick={this.handleClick}  to="/icon_pack_1">Icon pack 1</Link></li>
                                <li><Link onClick={this.handleClick}  to="/icon_pack_2">Icon pack 2</Link></li>
                              </ul>
                            </li>                        
                            <li><Link to="#0" data-toggle="modal" data-target="#login_2">Login</Link></li>
                            <li><Link to="#0">Purchase this template</Link></li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Grid>                 
          </header>
      <section className="parallax-window" id="short" data-parallax="scroll" data-image-src={sub_header_cart} data-natural-width="1400" data-natural-height="350">        
            <div id="subheader">
            <div id="sub_content">
             <h1>360 Icon font pack reference</h1>
             <p>Qui debitis meliore ex, tollit debitis conclusionemque te eos.</p>
            </div>
        </div>
      </section>
      <div id="position">
          <div className="container">
              <ul>
                  <li><a href="#0">Home</a></li>
                  <li><a href="#0">Category</a></li>
                  <li>Page active</li>
              </ul>
              <a href="#0" className="search-overlay-menu-btn"><i className="icon-search-6"></i> Search</a>
          </div>
      </div>
      <div className="container margin_60_35">
        <div className="box_style_2">
          <div className="mtm clearfix">
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x21;"></div>
                    <input type="text" readonly value="&amp;#x21;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x22;"></div>
                    <input type="text" readonly value="&amp;#x22;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x23;"></div>
                    <input type="text" readonly value="&amp;#x23;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x24;"></div>
                    <input type="text" readonly value="&amp;#x24;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x25;"></div>
                    <input type="text" readonly value="&amp;#x25;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x26;"></div>
                    <input type="text" readonly value="&amp;#x26;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x27;"></div>
                    <input type="text" readonly value="&amp;#x27;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x28;"></div>
                    <input type="text" readonly value="&amp;#x28;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x29;"></div>
                    <input type="text" readonly value="&amp;#x29;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2a;"></div>
                    <input type="text" readonly value="&amp;#x2a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2b;"></div>
                    <input type="text" readonly value="&amp;#x2b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2c;"></div>
                    <input type="text" readonly value="&amp;#x2c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2d;"></div>
                    <input type="text" readonly value="&amp;#x2d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2e;"></div>
                    <input type="text" readonly value="&amp;#x2e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x2f;"></div>
                    <input type="text" readonly value="&amp;#x2f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x30;"></div>
                    <input type="text" readonly value="&amp;#x30;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x31;"></div>
                    <input type="text" readonly value="&amp;#x31;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x32;"></div>
                    <input type="text" readonly value="&amp;#x32;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x33;"></div>
                    <input type="text" readonly value="&amp;#x33;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x34;"></div>
                    <input type="text" readonly value="&amp;#x34;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x35;"></div>
                    <input type="text" readonly value="&amp;#x35;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x36;"></div>
                    <input type="text" readonly value="&amp;#x36;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x37;"></div>
                    <input type="text" readonly value="&amp;#x37;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x38;"></div>
                    <input type="text" readonly value="&amp;#x38;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x39;"></div>
                    <input type="text" readonly value="&amp;#x39;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3a;"></div>
                    <input type="text" readonly value="&amp;#x3a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3b;"></div>
                    <input type="text" readonly value="&amp;#x3b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3c;"></div>
                    <input type="text" readonly value="&amp;#x3c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3d;"></div>
                    <input type="text" readonly value="&amp;#x3d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3e;"></div>
                    <input type="text" readonly value="&amp;#x3e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x3f;"></div>
                    <input type="text" readonly value="&amp;#x3f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x40;"></div>
                    <input type="text" readonly value="&amp;#x40;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x41;"></div>
                    <input type="text" readonly value="&amp;#x41;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x42;"></div>
                    <input type="text" readonly value="&amp;#x42;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x43;"></div>
                    <input type="text" readonly value="&amp;#x43;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x44;"></div>
                    <input type="text" readonly value="&amp;#x44;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x45;"></div>
                    <input type="text" readonly value="&amp;#x45;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x46;"></div>
                    <input type="text" readonly value="&amp;#x46;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x47;"></div>
                    <input type="text" readonly value="&amp;#x47;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x48;"></div>
                    <input type="text" readonly value="&amp;#x48;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x49;"></div>
                    <input type="text" readonly value="&amp;#x49;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4a;"></div>
                    <input type="text" readonly value="&amp;#x4a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4b;"></div>
                    <input type="text" readonly value="&amp;#x4b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4c;"></div>
                    <input type="text" readonly value="&amp;#x4c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4d;"></div>
                    <input type="text" readonly value="&amp;#x4d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4e;"></div>
                    <input type="text" readonly value="&amp;#x4e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x4f;"></div>
                    <input type="text" readonly value="&amp;#x4f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x50;"></div>
                    <input type="text" readonly value="&amp;#x50;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x51;"></div>
                    <input type="text" readonly value="&amp;#x51;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x52;"></div>
                    <input type="text" readonly value="&amp;#x52;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x53;"></div>
                    <input type="text" readonly value="&amp;#x53;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x54;"></div>
                    <input type="text" readonly value="&amp;#x54;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x55;"></div>
                    <input type="text" readonly value="&amp;#x55;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x56;"></div>
                    <input type="text" readonly value="&amp;#x56;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x57;"></div>
                    <input type="text" readonly value="&amp;#x57;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x58;"></div>
                    <input type="text" readonly value="&amp;#x58;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x59;"></div>
                    <input type="text" readonly value="&amp;#x59;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5a;"></div>
                    <input type="text" readonly value="&amp;#x5a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5b;"></div>
                    <input type="text" readonly value="&amp;#x5b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5c;"></div>
                    <input type="text" readonly value="&amp;#x5c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5d;"></div>
                    <input type="text" readonly value="&amp;#x5d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5e;"></div>
                    <input type="text" readonly value="&amp;#x5e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x5f;"></div>
                    <input type="text" readonly value="&amp;#x5f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x60;"></div>
                    <input type="text" readonly value="&amp;#x60;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x61;"></div>
                    <input type="text" readonly value="&amp;#x61;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x62;"></div>
                    <input type="text" readonly value="&amp;#x62;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x63;"></div>
                    <input type="text" readonly value="&amp;#x63;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x64;"></div>
                    <input type="text" readonly value="&amp;#x64;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x65;"></div>
                    <input type="text" readonly value="&amp;#x65;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x66;"></div>
                    <input type="text" readonly value="&amp;#x66;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x67;"></div>
                    <input type="text" readonly value="&amp;#x67;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x68;"></div>
                    <input type="text" readonly value="&amp;#x68;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x69;"></div>
                    <input type="text" readonly value="&amp;#x69;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6a;"></div>
                    <input type="text" readonly value="&amp;#x6a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6b;"></div>
                    <input type="text" readonly value="&amp;#x6b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6c;"></div>
                    <input type="text" readonly value="&amp;#x6c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6d;"></div>
                    <input type="text" readonly value="&amp;#x6d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6e;"></div>
                    <input type="text" readonly value="&amp;#x6e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x6f;"></div>
                    <input type="text" readonly value="&amp;#x6f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x70;"></div>
                    <input type="text" readonly value="&amp;#x70;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x71;"></div>
                    <input type="text" readonly value="&amp;#x71;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x72;"></div>
                    <input type="text" readonly value="&amp;#x72;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x73;"></div>
                    <input type="text" readonly value="&amp;#x73;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x74;"></div>
                    <input type="text" readonly value="&amp;#x74;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x75;"></div>
                    <input type="text" readonly value="&amp;#x75;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x76;"></div>
                    <input type="text" readonly value="&amp;#x76;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x77;"></div>
                    <input type="text" readonly value="&amp;#x77;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x78;"></div>
                    <input type="text" readonly value="&amp;#x78;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x79;"></div>
                    <input type="text" readonly value="&amp;#x79;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x7a;"></div>
                    <input type="text" readonly value="&amp;#x7a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x7b;"></div>
                    <input type="text" readonly value="&amp;#x7b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x7c;"></div>
                    <input type="text" readonly value="&amp;#x7c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x7d;"></div>
                    <input type="text" readonly value="&amp;#x7d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#x7e;"></div>
                    <input type="text" readonly value="&amp;#x7e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe000;"></div>
                    <input type="text" readonly value="&amp;#xe000;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe001;"></div>
                    <input type="text" readonly value="&amp;#xe001;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe002;"></div>
                    <input type="text" readonly value="&amp;#xe002;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe003;"></div>
                    <input type="text" readonly value="&amp;#xe003;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe004;"></div>
                    <input type="text" readonly value="&amp;#xe004;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe005;"></div>
                    <input type="text" readonly value="&amp;#xe005;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe006;"></div>
                    <input type="text" readonly value="&amp;#xe006;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe007;"></div>
                    <input type="text" readonly value="&amp;#xe007;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe008;"></div>
                    <input type="text" readonly value="&amp;#xe008;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe009;"></div>
                    <input type="text" readonly value="&amp;#xe009;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00a;"></div>
                    <input type="text" readonly value="&amp;#xe00a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00b;"></div>
                    <input type="text" readonly value="&amp;#xe00b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00c;"></div>
                    <input type="text" readonly value="&amp;#xe00c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00d;"></div>
                    <input type="text" readonly value="&amp;#xe00d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00e;"></div>
                    <input type="text" readonly value="&amp;#xe00e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe00f;"></div>
                    <input type="text" readonly value="&amp;#xe00f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe010;"></div>
                    <input type="text" readonly value="&amp;#xe010;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe011;"></div>
                    <input type="text" readonly value="&amp;#xe011;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe012;"></div>
                    <input type="text" readonly value="&amp;#xe012;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe013;"></div>
                    <input type="text" readonly value="&amp;#xe013;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe014;"></div>
                    <input type="text" readonly value="&amp;#xe014;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe015;"></div>
                    <input type="text" readonly value="&amp;#xe015;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe016;"></div>
                    <input type="text" readonly value="&amp;#xe016;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe017;"></div>
                    <input type="text" readonly value="&amp;#xe017;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe018;"></div>
                    <input type="text" readonly value="&amp;#xe018;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe019;"></div>
                    <input type="text" readonly value="&amp;#xe019;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01a;"></div>
                    <input type="text" readonly value="&amp;#xe01a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01b;"></div>
                    <input type="text" readonly value="&amp;#xe01b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01c;"></div>
                    <input type="text" readonly value="&amp;#xe01c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01d;"></div>
                    <input type="text" readonly value="&amp;#xe01d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01e;"></div>
                    <input type="text" readonly value="&amp;#xe01e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe01f;"></div>
                    <input type="text" readonly value="&amp;#xe01f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe020;"></div>
                    <input type="text" readonly value="&amp;#xe020;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe021;"></div>
                    <input type="text" readonly value="&amp;#xe021;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe022;"></div>
                    <input type="text" readonly value="&amp;#xe022;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe023;"></div>
                    <input type="text" readonly value="&amp;#xe023;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe024;"></div>
                    <input type="text" readonly value="&amp;#xe024;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe025;"></div>
                    <input type="text" readonly value="&amp;#xe025;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe026;"></div>
                    <input type="text" readonly value="&amp;#xe026;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe027;"></div>
                    <input type="text" readonly value="&amp;#xe027;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe028;"></div>
                    <input type="text" readonly value="&amp;#xe028;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe029;"></div>
                    <input type="text" readonly value="&amp;#xe029;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02a;"></div>
                    <input type="text" readonly value="&amp;#xe02a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02b;"></div>
                    <input type="text" readonly value="&amp;#xe02b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02c;"></div>
                    <input type="text" readonly value="&amp;#xe02c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02d;"></div>
                    <input type="text" readonly value="&amp;#xe02d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02e;"></div>
                    <input type="text" readonly value="&amp;#xe02e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe02f;"></div>
                    <input type="text" readonly value="&amp;#xe02f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe030;"></div>
                    <input type="text" readonly value="&amp;#xe030;" />
                </div>
                
                <div className="new">
                
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe103;"></div>
                    <input type="text" readonly value="&amp;#xe103;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ee;"></div>
                    <input type="text" readonly value="&amp;#xe0ee;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ef;"></div>
                    <input type="text" readonly value="&amp;#xe0ef;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e8;"></div>
                    <input type="text" readonly value="&amp;#xe0e8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ea;"></div>
                    <input type="text" readonly value="&amp;#xe0ea;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe101;"></div>
                    <input type="text" readonly value="&amp;#xe101;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe107;"></div>
                    <input type="text" readonly value="&amp;#xe107;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe108;"></div>
                    <input type="text" readonly value="&amp;#xe108;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe102;"></div>
                    <input type="text" readonly value="&amp;#xe102;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe106;"></div>
                    <input type="text" readonly value="&amp;#xe106;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0eb;"></div>
                    <input type="text" readonly value="&amp;#xe0eb;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe105;"></div>
                    <input type="text" readonly value="&amp;#xe105;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ed;"></div>
                    <input type="text" readonly value="&amp;#xe0ed;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe100;"></div>
                    <input type="text" readonly value="&amp;#xe100;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe104;"></div>
                    <input type="text" readonly value="&amp;#xe104;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e9;"></div>
                    <input type="text" readonly value="&amp;#xe0e9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe109;"></div>
                    <input type="text" readonly value="&amp;#xe109;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ec;"></div>
                    <input type="text" readonly value="&amp;#xe0ec;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0fe;"></div>
                    <input type="text" readonly value="&amp;#xe0fe;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f6;"></div>
                    <input type="text" readonly value="&amp;#xe0f6;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0fb;"></div>
                    <input type="text" readonly value="&amp;#xe0fb;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e2;"></div>
                    <input type="text" readonly value="&amp;#xe0e2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e3;"></div>
                    <input type="text" readonly value="&amp;#xe0e3;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f5;"></div>
                    <input type="text" readonly value="&amp;#xe0f5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e1;"></div>
                    <input type="text" readonly value="&amp;#xe0e1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ff;"></div>
                    <input type="text" readonly value="&amp;#xe0ff;" />
                </div>
                
                </div>
                
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe031;"></div>
                    <input type="text" readonly value="&amp;#xe031;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe032;"></div>
                    <input type="text" readonly value="&amp;#xe032;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe033;"></div>
                    <input type="text" readonly value="&amp;#xe033;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe034;"></div>
                    <input type="text" readonly value="&amp;#xe034;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe035;"></div>
                    <input type="text" readonly value="&amp;#xe035;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe036;"></div>
                    <input type="text" readonly value="&amp;#xe036;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe037;"></div>
                    <input type="text" readonly value="&amp;#xe037;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe038;"></div>
                    <input type="text" readonly value="&amp;#xe038;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe039;"></div>
                    <input type="text" readonly value="&amp;#xe039;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03a;"></div>
                    <input type="text" readonly value="&amp;#xe03a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03b;"></div>
                    <input type="text" readonly value="&amp;#xe03b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03c;"></div>
                    <input type="text" readonly value="&amp;#xe03c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03d;"></div>
                    <input type="text" readonly value="&amp;#xe03d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03e;"></div>
                    <input type="text" readonly value="&amp;#xe03e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe03f;"></div>
                    <input type="text" readonly value="&amp;#xe03f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe040;"></div>
                    <input type="text" readonly value="&amp;#xe040;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe041;"></div>
                    <input type="text" readonly value="&amp;#xe041;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe042;"></div>
                    <input type="text" readonly value="&amp;#xe042;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe043;"></div>
                    <input type="text" readonly value="&amp;#xe043;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe044;"></div>
                    <input type="text" readonly value="&amp;#xe044;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe045;"></div>
                    <input type="text" readonly value="&amp;#xe045;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe046;"></div>
                    <input type="text" readonly value="&amp;#xe046;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe047;"></div>
                    <input type="text" readonly value="&amp;#xe047;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe048;"></div>
                    <input type="text" readonly value="&amp;#xe048;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe049;"></div>
                    <input type="text" readonly value="&amp;#xe049;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04a;"></div>
                    <input type="text" readonly value="&amp;#xe04a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04b;"></div>
                    <input type="text" readonly value="&amp;#xe04b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04c;"></div>
                    <input type="text" readonly value="&amp;#xe04c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04d;"></div>
                    <input type="text" readonly value="&amp;#xe04d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04e;"></div>
                    <input type="text" readonly value="&amp;#xe04e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe04f;"></div>
                    <input type="text" readonly value="&amp;#xe04f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe050;"></div>
                    <input type="text" readonly value="&amp;#xe050;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe051;"></div>
                    <input type="text" readonly value="&amp;#xe051;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe052;"></div>
                    <input type="text" readonly value="&amp;#xe052;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe053;"></div>
                    <input type="text" readonly value="&amp;#xe053;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe054;"></div>
                    <input type="text" readonly value="&amp;#xe054;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe055;"></div>
                    <input type="text" readonly value="&amp;#xe055;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe056;"></div>
                    <input type="text" readonly value="&amp;#xe056;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe057;"></div>
                    <input type="text" readonly value="&amp;#xe057;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe058;"></div>
                    <input type="text" readonly value="&amp;#xe058;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe059;"></div>
                    <input type="text" readonly value="&amp;#xe059;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05a;"></div>
                    <input type="text" readonly value="&amp;#xe05a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05b;"></div>
                    <input type="text" readonly value="&amp;#xe05b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05c;"></div>
                    <input type="text" readonly value="&amp;#xe05c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05d;"></div>
                    <input type="text" readonly value="&amp;#xe05d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05e;"></div>
                    <input type="text" readonly value="&amp;#xe05e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe05f;"></div>
                    <input type="text" readonly value="&amp;#xe05f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe060;"></div>
                    <input type="text" readonly value="&amp;#xe060;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe061;"></div>
                    <input type="text" readonly value="&amp;#xe061;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe062;"></div>
                    <input type="text" readonly value="&amp;#xe062;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe063;"></div>
                    <input type="text" readonly value="&amp;#xe063;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe064;"></div>
                    <input type="text" readonly value="&amp;#xe064;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe065;"></div>
                    <input type="text" readonly value="&amp;#xe065;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe066;"></div>
                    <input type="text" readonly value="&amp;#xe066;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe067;"></div>
                    <input type="text" readonly value="&amp;#xe067;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe068;"></div>
                    <input type="text" readonly value="&amp;#xe068;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe069;"></div>
                    <input type="text" readonly value="&amp;#xe069;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06a;"></div>
                    <input type="text" readonly value="&amp;#xe06a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06b;"></div>
                    <input type="text" readonly value="&amp;#xe06b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06c;"></div>
                    <input type="text" readonly value="&amp;#xe06c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06d;"></div>
                    <input type="text" readonly value="&amp;#xe06d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06e;"></div>
                    <input type="text" readonly value="&amp;#xe06e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe06f;"></div>
                    <input type="text" readonly value="&amp;#xe06f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe070;"></div>
                    <input type="text" readonly value="&amp;#xe070;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe071;"></div>
                    <input type="text" readonly value="&amp;#xe071;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe072;"></div>
                    <input type="text" readonly value="&amp;#xe072;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe073;"></div>
                    <input type="text" readonly value="&amp;#xe073;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe074;"></div>
                    <input type="text" readonly value="&amp;#xe074;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe075;"></div>
                    <input type="text" readonly value="&amp;#xe075;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe076;"></div>
                    <input type="text" readonly value="&amp;#xe076;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe077;"></div>
                    <input type="text" readonly value="&amp;#xe077;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe078;"></div>
                    <input type="text" readonly value="&amp;#xe078;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe079;"></div>
                    <input type="text" readonly value="&amp;#xe079;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07a;"></div>
                    <input type="text" readonly value="&amp;#xe07a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07b;"></div>
                    <input type="text" readonly value="&amp;#xe07b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07c;"></div>
                    <input type="text" readonly value="&amp;#xe07c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07d;"></div>
                    <input type="text" readonly value="&amp;#xe07d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07e;"></div>
                    <input type="text" readonly value="&amp;#xe07e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe07f;"></div>
                    <input type="text" readonly value="&amp;#xe07f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe080;"></div>
                    <input type="text" readonly value="&amp;#xe080;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe081;"></div>
                    <input type="text" readonly value="&amp;#xe081;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe082;"></div>
                    <input type="text" readonly value="&amp;#xe082;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe083;"></div>
                    <input type="text" readonly value="&amp;#xe083;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe084;"></div>
                    <input type="text" readonly value="&amp;#xe084;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe085;"></div>
                    <input type="text" readonly value="&amp;#xe085;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe086;"></div>
                    <input type="text" readonly value="&amp;#xe086;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe087;"></div>
                    <input type="text" readonly value="&amp;#xe087;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe088;"></div>
                    <input type="text" readonly value="&amp;#xe088;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe089;"></div>
                    <input type="text" readonly value="&amp;#xe089;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08a;"></div>
                    <input type="text" readonly value="&amp;#xe08a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08b;"></div>
                    <input type="text" readonly value="&amp;#xe08b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08c;"></div>
                    <input type="text" readonly value="&amp;#xe08c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08d;"></div>
                    <input type="text" readonly value="&amp;#xe08d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08e;"></div>
                    <input type="text" readonly value="&amp;#xe08e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe08f;"></div>
                    <input type="text" readonly value="&amp;#xe08f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe090;"></div>
                    <input type="text" readonly value="&amp;#xe090;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe091;"></div>
                    <input type="text" readonly value="&amp;#xe091;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe092;"></div>
                    <input type="text" readonly value="&amp;#xe092;" />
                </div>
                
                <div className="new">
                
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f8;"></div>
                    <input type="text" readonly value="&amp;#xe0f8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0fa;"></div>
                    <input type="text" readonly value="&amp;#xe0fa;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e7;"></div>
                    <input type="text" readonly value="&amp;#xe0e7;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0fd;"></div>
                    <input type="text" readonly value="&amp;#xe0fd;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e4;"></div>
                    <input type="text" readonly value="&amp;#xe0e4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e5;"></div>
                    <input type="text" readonly value="&amp;#xe0e5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f7;"></div>
                    <input type="text" readonly value="&amp;#xe0f7;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e0;"></div>
                    <input type="text" readonly value="&amp;#xe0e0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0fc;"></div>
                    <input type="text" readonly value="&amp;#xe0fc;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f9;"></div>
                    <input type="text" readonly value="&amp;#xe0f9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0dd;"></div>
                    <input type="text" readonly value="&amp;#xe0dd;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f1;"></div>
                    <input type="text" readonly value="&amp;#xe0f1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0dc;"></div>
                    <input type="text" readonly value="&amp;#xe0dc;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f3;"></div>
                    <input type="text" readonly value="&amp;#xe0f3;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d8;"></div>
                    <input type="text" readonly value="&amp;#xe0d8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0db;"></div>
                    <input type="text" readonly value="&amp;#xe0db;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f0;"></div>
                    <input type="text" readonly value="&amp;#xe0f0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0df;"></div>
                    <input type="text" readonly value="&amp;#xe0df;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f2;"></div>
                    <input type="text" readonly value="&amp;#xe0f2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0f4;"></div>
                    <input type="text" readonly value="&amp;#xe0f4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d9;"></div>
                    <input type="text" readonly value="&amp;#xe0d9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0da;"></div>
                    <input type="text" readonly value="&amp;#xe0da;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0de;"></div>
                    <input type="text" readonly value="&amp;#xe0de;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0e6;"></div>
                    <input type="text" readonly value="&amp;#xe0e6;" />
                </div>
                
                </div>
                
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe093;"></div>
                    <input type="text" readonly value="&amp;#xe093;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe094;"></div>
                    <input type="text" readonly value="&amp;#xe094;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe095;"></div>
                    <input type="text" readonly value="&amp;#xe095;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe096;"></div>
                    <input type="text" readonly value="&amp;#xe096;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe097;"></div>
                    <input type="text" readonly value="&amp;#xe097;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe098;"></div>
                    <input type="text" readonly value="&amp;#xe098;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe099;"></div>
                    <input type="text" readonly value="&amp;#xe099;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09a;"></div>
                    <input type="text" readonly value="&amp;#xe09a;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09b;"></div>
                    <input type="text" readonly value="&amp;#xe09b;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09c;"></div>
                    <input type="text" readonly value="&amp;#xe09c;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09d;"></div>
                    <input type="text" readonly value="&amp;#xe09d;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09e;"></div>
                    <input type="text" readonly value="&amp;#xe09e;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe09f;"></div>
                    <input type="text" readonly value="&amp;#xe09f;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a0;"></div>
                    <input type="text" readonly value="&amp;#xe0a0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a1;"></div>
                    <input type="text" readonly value="&amp;#xe0a1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a2;"></div>
                    <input type="text" readonly value="&amp;#xe0a2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a3;"></div>
                    <input type="text" readonly value="&amp;#xe0a3;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a4;"></div>
                    <input type="text" readonly value="&amp;#xe0a4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a5;"></div>
                    <input type="text" readonly value="&amp;#xe0a5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a6;"></div>
                    <input type="text" readonly value="&amp;#xe0a6;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a7;"></div>
                    <input type="text" readonly value="&amp;#xe0a7;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a8;"></div>
                    <input type="text" readonly value="&amp;#xe0a8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0a9;"></div>
                    <input type="text" readonly value="&amp;#xe0a9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0aa;"></div>
                    <input type="text" readonly value="&amp;#xe0aa;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ab;"></div>
                    <input type="text" readonly value="&amp;#xe0ab;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ac;"></div>
                    <input type="text" readonly value="&amp;#xe0ac;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ad;"></div>
                    <input type="text" readonly value="&amp;#xe0ad;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ae;"></div>
                    <input type="text" readonly value="&amp;#xe0ae;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0af;"></div>
                    <input type="text" readonly value="&amp;#xe0af;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b0;"></div>
                    <input type="text" readonly value="&amp;#xe0b0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b1;"></div>
                    <input type="text" readonly value="&amp;#xe0b1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b2;"></div>
                    <input type="text" readonly value="&amp;#xe0b2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b3;"></div>
                    <input type="text" readonly value="&amp;#xe0b3;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b4;"></div>
                    <input type="text" readonly value="&amp;#xe0b4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b5;"></div>
                    <input type="text" readonly value="&amp;#xe0b5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b6;"></div>
                    <input type="text" readonly value="&amp;#xe0b6;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b7;"></div>
                    <input type="text" readonly value="&amp;#xe0b7;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b8;"></div>
                    <input type="text" readonly value="&amp;#xe0b8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0b9;"></div>
                    <input type="text" readonly value="&amp;#xe0b9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ba;"></div>
                    <input type="text" readonly value="&amp;#xe0ba;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0bb;"></div>
                    <input type="text" readonly value="&amp;#xe0bb;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0bc;"></div>
                    <input type="text" readonly value="&amp;#xe0bc;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0bd;"></div>
                    <input type="text" readonly value="&amp;#xe0bd;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0be;"></div>
                    <input type="text" readonly value="&amp;#xe0be;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0bf;"></div>
                    <input type="text" readonly value="&amp;#xe0bf;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c0;"></div>
                    <input type="text" readonly value="&amp;#xe0c0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c1;"></div>
                    <input type="text" readonly value="&amp;#xe0c1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c2;"></div>
                    <input type="text" readonly value="&amp;#xe0c2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c3;"></div>
                    <input type="text" readonly value="&amp;#xe0c3;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c4;"></div>
                    <input type="text" readonly value="&amp;#xe0c4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c5;"></div>
                    <input type="text" readonly value="&amp;#xe0c5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c6;"></div>
                    <input type="text" readonly value="&amp;#xe0c6;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c7;"></div>
                    <input type="text" readonly value="&amp;#xe0c7;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c8;"></div>
                    <input type="text" readonly value="&amp;#xe0c8;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0c9;"></div>
                    <input type="text" readonly value="&amp;#xe0c9;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ca;"></div>
                    <input type="text" readonly value="&amp;#xe0ca;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0cb;"></div>
                    <input type="text" readonly value="&amp;#xe0cb;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0cc;"></div>
                    <input type="text" readonly value="&amp;#xe0cc;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0cd;"></div>
                    <input type="text" readonly value="&amp;#xe0cd;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0ce;"></div>
                    <input type="text" readonly value="&amp;#xe0ce;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0cf;"></div>
                    <input type="text" readonly value="&amp;#xe0cf;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d0;"></div>
                    <input type="text" readonly value="&amp;#xe0d0;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d1;"></div>
                    <input type="text" readonly value="&amp;#xe0d1;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d2;"></div>
                    <input type="text" readonly value="&amp;#xe0d2;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d3;"></div>
                    <input type="text" readonly value="&amp;#xe0d3;" />
                </div>    
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d4;"></div>
                    <input type="text" readonly value="&amp;#xe0d4;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d5;"></div>
                    <input type="text" readonly value="&amp;#xe0d5;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d6;"></div>
                    <input type="text" readonly value="&amp;#xe0d6;" />
                </div>
                <div className="glyph">
                    <div className="fs1" aria-hidden="true" data-icon="&#xe0d7;"></div>
                    <input type="text" readonly value="&amp;#xe0d7;" />
                </div>    
            <br className="br_clear"/>
                <div className="mtm clearfix" id="glyphs">
                    <h3>Class Names</h3>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_up"></span>
                    &nbsp;arrow_up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_down"></span>
                    &nbsp;arrow_down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left"></span>
                    &nbsp;arrow_left
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right"></span>
                    &nbsp;arrow_right
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-up"></span>
                    &nbsp;arrow_left-up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right-up"></span>
                    &nbsp;arrow_right-up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right-down"></span>
                    &nbsp;arrow_right-down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-down"></span>
                    &nbsp;arrow_left-down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow-up-down"></span>
                    &nbsp;arrow-up-down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_up-down_alt"></span>
                    &nbsp;arrow_up-down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-right_alt"></span>
                    &nbsp;arrow_left-right_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-right"></span>
                    &nbsp;arrow_left-right
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_expand_alt2"></span>
                    &nbsp;arrow_expand_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_expand_alt"></span>
                    &nbsp;arrow_expand_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_condense"></span>
                    &nbsp;arrow_condense
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_expand"></span>
                    &nbsp;arrow_expand
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_move"></span>
                    &nbsp;arrow_move
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-up"></span>
                    &nbsp;arrow_carrot-up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-down"></span>
                    &nbsp;arrow_carrot-down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-left"></span>
                    &nbsp;arrow_carrot-left
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    &nbsp;arrow_carrot-right
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2up"></span>
                    &nbsp;arrow_carrot-2up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2down"></span>
                    &nbsp;arrow_carrot-2down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2left"></span>
                    &nbsp;arrow_carrot-2left
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2right"></span>
                    &nbsp;arrow_carrot-2right
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-up_alt2"></span>
                    &nbsp;arrow_carrot-up_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-down_alt2"></span>
                    &nbsp;arrow_carrot-down_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-left_alt2"></span>
                    &nbsp;arrow_carrot-left_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-right_alt2"></span>
                    &nbsp;arrow_carrot-right_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2up_alt2"></span>
                    &nbsp;arrow_carrot-2up_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2down_alt2"></span>
                    &nbsp;arrow_carrot-2down_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2left_alt2"></span>
                    &nbsp;arrow_carrot-2left_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2right_alt2"></span>
                    &nbsp;arrow_carrot-2right_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-up"></span>
                    &nbsp;arrow_triangle-up
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-down"></span>
                    &nbsp;arrow_triangle-down
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-left"></span>
                    &nbsp;arrow_triangle-left
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-right"></span>
                    &nbsp;arrow_triangle-right
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-up_alt2"></span>
                    &nbsp;arrow_triangle-up_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-down_alt2"></span>
                    &nbsp;arrow_triangle-down_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-left_alt2"></span>
                    &nbsp;arrow_triangle-left_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-right_alt2"></span>
                    &nbsp;arrow_triangle-right_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_back"></span>
                    &nbsp;arrow_back
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_minus-06"></span>
                    &nbsp;icon_minus-06
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_plus"></span>
                    &nbsp;icon_plus
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_close"></span>
                    &nbsp;icon_close
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_check"></span>
                    &nbsp;icon_check
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_minus_alt2"></span>
                    &nbsp;icon_minus_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_plus_alt2"></span>
                    &nbsp;icon_plus_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_close_alt2"></span>
                    &nbsp;icon_close_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_check_alt2"></span>
                    &nbsp;icon_check_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_zoom-out_alt"></span>
                    &nbsp;icon_zoom-out_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_zoom-in_alt"></span>
                    &nbsp;icon_zoom-in_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_search"></span>
                    &nbsp;icon_search
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_box-empty"></span>
                    &nbsp;icon_box-empty
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_box-selected"></span>
                    &nbsp;icon_box-selected
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_minus-box"></span>
                    &nbsp;icon_minus-box
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_plus-box"></span>
                    &nbsp;icon_plus-box
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_box-checked"></span>
                    &nbsp;icon_box-checked
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_circle-empty"></span>
                    &nbsp;icon_circle-empty
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_circle-slelected"></span>
                    &nbsp;icon_circle-slelected
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_stop_alt2"></span>
                    &nbsp;icon_stop_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_stop"></span>
                    &nbsp;icon_stop
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pause_alt2"></span>
                    &nbsp;icon_pause_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pause"></span>
                    &nbsp;icon_pause
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_menu"></span>
                    &nbsp;icon_menu
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_menu-square_alt2"></span>
                    &nbsp;icon_menu-square_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_menu-circle_alt2"></span>
                    &nbsp;icon_menu-circle_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_ul"></span>
                    &nbsp;icon_ul
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_ol"></span>
                    &nbsp;icon_ol
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_adjust-horiz"></span>
                    &nbsp;icon_adjust-horiz
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_adjust-vert"></span>
                    &nbsp;icon_adjust-vert
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_document_alt"></span>
                    &nbsp;icon_document_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_documents_alt"></span>
                    &nbsp;icon_documents_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pencil"></span>
                    &nbsp;icon_pencil
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pencil-edit_alt"></span>
                    &nbsp;icon_pencil-edit_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pencil-edit"></span>
                    &nbsp;icon_pencil-edit
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder-alt"></span>
                    &nbsp;icon_folder-alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder-open_alt"></span>
                    &nbsp;icon_folder-open_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder-add_alt"></span>
                    &nbsp;icon_folder-add_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_info_alt"></span>
                    &nbsp;icon_info_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-oct_alt"></span>
                    &nbsp;icon_error-oct_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-circle_alt"></span>
                    &nbsp;icon_error-circle_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-triangle_alt"></span>
                    &nbsp;icon_error-triangle_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_question_alt2"></span>
                    &nbsp;icon_question_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_question"></span>
                    &nbsp;icon_question
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_comment_alt"></span>
                    &nbsp;icon_comment_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_chat_alt"></span>
                    &nbsp;icon_chat_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_vol-mute_alt"></span>
                    &nbsp;icon_vol-mute_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_volume-low_alt"></span>
                    &nbsp;icon_volume-low_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_volume-high_alt"></span>
                    &nbsp;icon_volume-high_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_quotations"></span>
                    &nbsp;icon_quotations
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_quotations_alt2"></span>
                    &nbsp;icon_quotations_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_clock_alt"></span>
                    &nbsp;icon_clock_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lock_alt"></span>
                    &nbsp;icon_lock_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lock-open_alt"></span>
                    &nbsp;icon_lock-open_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_key_alt"></span>
                    &nbsp;icon_key_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud_alt"></span>
                    &nbsp;icon_cloud_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud-upload_alt"></span>
                    &nbsp;icon_cloud-upload_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud-download_alt"></span>
                    &nbsp;icon_cloud-download_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_image"></span>
                    &nbsp;icon_image
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_images"></span>
                    &nbsp;icon_images
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lightbulb_alt"></span>
                    &nbsp;icon_lightbulb_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_gift_alt"></span>
                    &nbsp;icon_gift_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_house_alt"></span>
                    &nbsp;icon_house_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_genius"></span>
                    &nbsp;icon_genius
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mobile"></span>
                    &nbsp;icon_mobile
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tablet"></span>
                    &nbsp;icon_tablet
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_laptop"></span>
                    &nbsp;icon_laptop
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_desktop"></span>
                    &nbsp;icon_desktop
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_camera_alt"></span>
                    &nbsp;icon_camera_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mail_alt"></span>
                    &nbsp;icon_mail_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cone_alt"></span>
                    &nbsp;icon_cone_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_ribbon_alt"></span>
                    &nbsp;icon_ribbon_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_bag_alt"></span>
                    &nbsp;icon_bag_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_creditcard"></span>
                    &nbsp;icon_creditcard
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cart_alt"></span>
                    &nbsp;icon_cart_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_paperclip"></span>
                    &nbsp;icon_paperclip
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tag_alt"></span>
                    &nbsp;icon_tag_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tags_alt"></span>
                    &nbsp;icon_tags_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_trash_alt"></span>
                    &nbsp;icon_trash_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cursor_alt"></span>
                    &nbsp;icon_cursor_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mic_alt"></span>
                    &nbsp;icon_mic_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_compass_alt"></span>
                    &nbsp;icon_compass_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pin_alt"></span>
                    &nbsp;icon_pin_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pushpin_alt"></span>
                    &nbsp;icon_pushpin_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_map_alt"></span>
                    &nbsp;icon_map_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_drawer_alt"></span>
                    &nbsp;icon_drawer_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_toolbox_alt"></span>
                    &nbsp;icon_toolbox_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_book_alt"></span>
                    &nbsp;icon_book_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_calendar"></span>
                    &nbsp;icon_calendar
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_film"></span>
                    &nbsp;icon_film
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_table"></span>
                    &nbsp;icon_table
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_contacts_alt"></span>
                    &nbsp;icon_contacts_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_headphones"></span>
                    &nbsp;icon_headphones
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lifesaver"></span>
                    &nbsp;icon_lifesaver
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_piechart"></span>
                    &nbsp;icon_piechart
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_refresh"></span>
                    &nbsp;icon_refresh
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_link_alt"></span>
                    &nbsp;icon_link_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_link"></span>
                    &nbsp;icon_link
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_loading"></span>
                    &nbsp;icon_loading
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_blocked"></span>
                    &nbsp;icon_blocked
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_archive_alt"></span>
                    &nbsp;icon_archive_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_heart_alt"></span>
                    &nbsp;icon_heart_alt
                </span>
                
                <div className="new">
                
                <span className="box1">
                    <span aria-hidden="true" className="icon_printer"></span>
                    &nbsp;icon_printer
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_calulator"></span>
                    &nbsp;icon_calulator
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_building"></span>
                    &nbsp;icon_building
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_floppy"></span>
                    &nbsp;icon_floppy
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_drive"></span>
                    &nbsp;icon_drive
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_search-2"></span>
                    &nbsp;icon_search-2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_id"></span>
                    &nbsp;icon_id
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_id-2"></span>
                    &nbsp;icon_id-2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_puzzle"></span>
                    &nbsp;icon_puzzle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_like"></span>
                    &nbsp;icon_like
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_dislike"></span>
                    &nbsp;icon_dislike
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mug"></span>
                    &nbsp;icon_mug
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_currency"></span>
                    &nbsp;icon_currency
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_wallet"></span>
                    &nbsp;icon_wallet
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pens"></span>
                    &nbsp;icon_pens
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_easel"></span>
                    &nbsp;icon_easel
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_flowchart"></span>
                    &nbsp;icon_flowchart
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_datareport"></span>
                    &nbsp;icon_datareport
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_briefcase"></span>
                    &nbsp;icon_briefcase
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_shield"></span>
                    &nbsp;icon_shield
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_percent"></span>
                    &nbsp;icon_percent
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_globe"></span>
                    &nbsp;icon_globe
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_globe-2"></span>
                    &nbsp;icon_globe-2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_target"></span>
                    &nbsp;icon_target
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_hourglass"></span>
                    &nbsp;icon_hourglass
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_balance"></span>
                    &nbsp;icon_balance
                </span>
                
                </div>
                
                <span className="box1">
                    <span aria-hidden="true" className="icon_star_alt"></span>
                    &nbsp;icon_star_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_star-half_alt"></span>
                    &nbsp;icon_star-half_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_star"></span>
                    &nbsp;icon_star
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_star-half"></span>
                    &nbsp;icon_star-half
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tools"></span>
                    &nbsp;icon_tools
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tool"></span>
                    &nbsp;icon_tool
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cog"></span>
                    &nbsp;icon_cog
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cogs"></span>
                    &nbsp;icon_cogs
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_up_alt"></span>
                    &nbsp;arrow_up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_down_alt"></span>
                    &nbsp;arrow_down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left_alt"></span>
                    &nbsp;arrow_left_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right_alt"></span>
                    &nbsp;arrow_right_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-up_alt"></span>
                    &nbsp;arrow_left-up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right-up_alt"></span>
                    &nbsp;arrow_right-up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_right-down_alt"></span>
                    &nbsp;arrow_right-down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_left-down_alt"></span>
                    &nbsp;arrow_left-down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_condense_alt"></span>
                    &nbsp;arrow_condense_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_expand_alt3"></span>
                    &nbsp;arrow_expand_alt3
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot_up_alt"></span>
                    &nbsp;arrow_carrot_up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-down_alt"></span>
                    &nbsp;arrow_carrot-down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-left_alt"></span>
                    &nbsp;arrow_carrot-left_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-right_alt"></span>
                    &nbsp;arrow_carrot-right_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2up_alt"></span>
                    &nbsp;arrow_carrot-2up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2dwnn_alt"></span>
                    &nbsp;arrow_carrot-2dwnn_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2left_alt"></span>
                    &nbsp;arrow_carrot-2left_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_carrot-2right_alt"></span>
                    &nbsp;arrow_carrot-2right_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-up_alt"></span>
                    &nbsp;arrow_triangle-up_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-down_alt"></span>
                    &nbsp;arrow_triangle-down_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-left_alt"></span>
                    &nbsp;arrow_triangle-left_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="arrow_triangle-right_alt"></span>
                    &nbsp;arrow_triangle-right_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_minus_alt"></span>
                    &nbsp;icon_minus_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_plus_alt"></span>
                    &nbsp;icon_plus_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_close_alt"></span>
                    &nbsp;icon_close_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_check_alt"></span>
                    &nbsp;icon_check_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_zoom-out"></span>
                    &nbsp;icon_zoom-out
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_zoom-in"></span>
                    &nbsp;icon_zoom-in
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_stop_alt"></span>
                    &nbsp;icon_stop_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_menu-square_alt"></span>
                    &nbsp;icon_menu-square_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_menu-circle_alt"></span>
                    &nbsp;icon_menu-circle_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_document"></span>
                    &nbsp;icon_document
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_documents"></span>
                    &nbsp;icon_documents
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pencil_alt"></span>
                    &nbsp;icon_pencil_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder"></span>
                    &nbsp;icon_folder
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder-open"></span>
                    &nbsp;icon_folder-open
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder-add"></span>
                    &nbsp;icon_folder-add
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder_upload"></span>
                    &nbsp;icon_folder_upload
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_folder_download"></span>
                    &nbsp;icon_folder_download
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_info"></span>
                    &nbsp;icon_info
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-circle"></span>
                    &nbsp;icon_error-circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-oct"></span>
                    &nbsp;icon_error-oct
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_error-triangle"></span>
                    &nbsp;icon_error-triangle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_question_alt"></span>
                    &nbsp;icon_question_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_comment"></span>
                    &nbsp;icon_comment
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_chat"></span>
                    &nbsp;icon_chat
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_vol-mute"></span>
                    &nbsp;icon_vol-mute
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_volume-low"></span>
                    &nbsp;icon_volume-low
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_volume-high"></span>
                    &nbsp;icon_volume-high
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_quotations_alt"></span>
                    &nbsp;icon_quotations_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_clock"></span>
                    &nbsp;icon_clock
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lock"></span>
                    &nbsp;icon_lock
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lock-open"></span>
                    &nbsp;icon_lock-open
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_key"></span>
                    &nbsp;icon_key
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud"></span>
                    &nbsp;icon_cloud
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud-upload"></span>
                    &nbsp;icon_cloud-upload
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cloud-download"></span>
                    &nbsp;icon_cloud-download
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_lightbulb"></span>
                    &nbsp;icon_lightbulb
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_gift"></span>
                    &nbsp;icon_gift
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_house"></span>
                    &nbsp;icon_house
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_camera"></span>
                    &nbsp;icon_camera
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mail"></span>
                    &nbsp;icon_mail
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cone"></span>
                    &nbsp;icon_cone
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_ribbon"></span>
                    &nbsp;icon_ribbon
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_bag"></span>
                    &nbsp;icon_bag
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cart"></span>
                    &nbsp;icon_cart
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tag"></span>
                    &nbsp;icon_tag
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_tags"></span>
                    &nbsp;icon_tags
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_trash"></span>
                    &nbsp;icon_trash
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_cursor"></span>
                    &nbsp;icon_cursor
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mic"></span>
                    &nbsp;icon_mic
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_compass"></span>
                    &nbsp;icon_compass
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pin"></span>
                    &nbsp;icon_pin
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pushpin"></span>
                    &nbsp;icon_pushpin
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_map"></span>
                    &nbsp;icon_map
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_drawer"></span>
                    &nbsp;icon_drawer
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_toolbox"></span>
                    &nbsp;icon_toolbox
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_book"></span>
                    &nbsp;icon_book
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_contacts"></span>
                    &nbsp;icon_contacts
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_archive"></span>
                    &nbsp;icon_archive
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_heart"></span>
                    &nbsp;icon_heart
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_profile"></span>
                    &nbsp;icon_profile
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_group"></span>
                    &nbsp;icon_group
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_grid-2x2"></span>
                    &nbsp;icon_grid-2x2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_grid-3x3"></span>
                    &nbsp;icon_grid-3x3
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_music"></span>
                    &nbsp;icon_music
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pause_alt"></span>
                    &nbsp;icon_pause_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_phone"></span>
                    &nbsp;icon_phone
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_upload"></span>
                    &nbsp;icon_upload
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_download"></span>
                    &nbsp;icon_download
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_rook"></span>
                    &nbsp;icon_rook
                </span>
                
                <div className="new">
                
                <span className="box1">
                    <span aria-hidden="true" className="icon_printer-alt"></span>
                    &nbsp;icon_printer-alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_calculator_alt"></span>
                    &nbsp;icon_calculator_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_building_alt"></span>
                    &nbsp;icon_building_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_floppy_alt"></span>
                    &nbsp;icon_floppy_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_drive_alt"></span>
                    &nbsp;icon_drive_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_search_alt"></span>
                    &nbsp;icon_search_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_id_alt"></span>
                    &nbsp;icon_id_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_id-2_alt"></span>
                    &nbsp;icon_id-2_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_puzzle_alt"></span>
                    &nbsp;icon_puzzle_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_like_alt"></span>
                    &nbsp;icon_like_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_dislike_alt"></span>
                    &nbsp;icon_dislike_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_mug_alt"></span>
                    &nbsp;icon_mug_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_currency_alt"></span>
                    &nbsp;icon_currency_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_wallet_alt"></span>
                    &nbsp;icon_wallet_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_pens_alt"></span>
                    &nbsp;icon_pens_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_easel_alt"></span>
                    &nbsp;icon_easel_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_flowchart_alt"></span>
                    &nbsp;icon_flowchart_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_datareport_alt"></span>
                    &nbsp;icon_datareport_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_briefcase_alt"></span>
                    &nbsp;icon_briefcase_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_shield_alt"></span>
                    &nbsp;icon_shield_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_percent_alt"></span>
                    &nbsp;icon_percent_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_globe_alt"></span>
                    &nbsp;icon_globe_alt
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="icon_clipboard"></span>
                    &nbsp;icon_clipboard
                </span>
                
                </div>
                
                <span className="box1">
                    <span aria-hidden="true" className="social_facebook"></span>
                    &nbsp;social_facebook
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_twitter"></span>
                    &nbsp;social_twitter
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_pinterest"></span>
                    &nbsp;social_pinterest
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googleplus"></span>
                    &nbsp;social_googleplus
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_tumblr"></span>
                    &nbsp;social_tumblr
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_tumbleupon"></span>
                    &nbsp;social_tumbleupon
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_wordpress"></span>
                    &nbsp;social_wordpress
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_instagram"></span>
                    &nbsp;social_instagram
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_dribbble"></span>
                    &nbsp;social_dribbble
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_vimeo"></span>
                    &nbsp;social_vimeo
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_linkedin"></span>
                    &nbsp;social_linkedin
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_rss"></span>
                    &nbsp;social_rss
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_deviantart"></span>
                    &nbsp;social_deviantart
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_share"></span>
                    &nbsp;social_share
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_myspace"></span>
                    &nbsp;social_myspace
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_skype"></span>
                    &nbsp;social_skype
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_youtube"></span>
                    &nbsp;social_youtube
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_picassa"></span>
                    &nbsp;social_picassa
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googledrive"></span>
                    &nbsp;social_googledrive
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_flickr"></span>
                    &nbsp;social_flickr
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_blogger"></span>
                    &nbsp;social_blogger
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_spotify"></span>
                    &nbsp;social_spotify
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_delicious"></span>
                    &nbsp;social_delicious
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_facebook_circle"></span>
                    &nbsp;social_facebook_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_twitter_circle"></span>
                    &nbsp;social_twitter_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_pinterest_circle"></span>
                    &nbsp;social_pinterest_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googleplus_circle"></span>
                    &nbsp;social_googleplus_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_tumblr_circle"></span>
                    &nbsp;social_tumblr_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_stumbleupon_circle"></span>
                    &nbsp;social_stumbleupon_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_wordpress_circle"></span>
                    &nbsp;social_wordpress_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_instagram_circle"></span>
                    &nbsp;social_instagram_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_dribbble_circle"></span>
                    &nbsp;social_dribbble_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_vimeo_circle"></span>
                    &nbsp;social_vimeo_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_linkedin_circle"></span>
                    &nbsp;social_linkedin_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_rss_circle"></span>
                    &nbsp;social_rss_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_deviantart_circle"></span>
                    &nbsp;social_deviantart_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_share_circle"></span>
                    &nbsp;social_share_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_myspace_circle"></span>
                    &nbsp;social_myspace_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_skype_circle"></span>
                    &nbsp;social_skype_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_youtube_circle"></span>
                    &nbsp;social_youtube_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_picassa_circle"></span>
                    &nbsp;social_picassa_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googledrive_alt2"></span>
                    &nbsp;social_googledrive_alt2
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_flickr_circle"></span>
                    &nbsp;social_flickr_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_blogger_circle"></span>
                    &nbsp;social_blogger_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_spotify_circle"></span>
                    &nbsp;social_spotify_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_delicious_circle"></span>
                    &nbsp;social_delicious_circle
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_facebook_square"></span>
                    &nbsp;social_facebook_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_twitter_square"></span>
                    &nbsp;social_twitter_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_pinterest_square"></span>
                    &nbsp;social_pinterest_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googleplus_square"></span>
                    &nbsp;social_googleplus_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_tumblr_square"></span>
                    &nbsp;social_tumblr_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_stumbleupon_square"></span>
                    &nbsp;social_stumbleupon_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_wordpress_square"></span>
                    &nbsp;social_wordpress_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_instagram_square"></span>
                    &nbsp;social_instagram_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_dribbble_square"></span>
                    &nbsp;social_dribbble_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_vimeo_square"></span>
                    &nbsp;social_vimeo_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_linkedin_square"></span>
                    &nbsp;social_linkedin_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_rss_square"></span>
                    &nbsp;social_rss_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_deviantart_square"></span>
                    &nbsp;social_deviantart_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_share_square"></span>
                    &nbsp;social_share_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_myspace_square"></span>
                    &nbsp;social_myspace_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_skype_square"></span>
                    &nbsp;social_skype_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_youtube_square"></span>
                    &nbsp;social_youtube_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_picassa_square"></span>
                    &nbsp;social_picassa_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_googledrive_square"></span>
                    &nbsp;social_googledrive_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_flickr_square"></span>
                    &nbsp;social_flickr_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_blogger_square"></span>
                    &nbsp;social_blogger_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_spotify_square"></span>
                    &nbsp;social_spotify_square
                </span>
                <span className="box1">
                    <span aria-hidden="true" className="social_delicious_square"></span>
                    &nbsp;social_delicious_square
                </span>
                </div>
           </div>
            </div>
        </div>
      <Page_footer/>
    </div>
      );
    }
};