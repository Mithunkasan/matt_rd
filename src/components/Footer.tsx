import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.jpg'
import useScrollTransition from '../templates/usescrolltransition'
const Footer = () => {
    useScrollTransition()
    return (
      <div>
        <footer className="component1">
          <div className="footer-area component1">
            <div className="container">
              <div className="footer-padding">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div className="single-footer-caption ">
                      <div className="single-footer-caption mb-30">
                        <div className="footer-logo">
                          <a className="text-decoration-none a-logo" href="">
                            <h6 className="fw-bold  fst-italic fs-5 text-white">
                              <Image
                                src={logo}
                                alt="matt logo"
                                width="30"
                                height="24"
                                className="d-inline-block  me-1"
                              />
                              Matt Engineering Solutions
                            </h6>
                          </a>
                        </div>
                        <div className="footer-tittle ">
                          <p className="fw-bold margins">
                            3rd floor,Pillars gate, Vadasery, Tamil Nadu 629001
                          </p>
                          <p className="contact-info__icon margins">
                            <span className="contact-info__icon ">
                              <i className="bi bi-envelope fw-bold"></i>
                            </span>
                            <span className="fw-bold">
                              Email: info@mattengg.com
                            </span>
                          </p>
                          <p className="contact-info__icon margins">
                            <span className="contact-info__icon">
                              <i className="bi bi-telephone"></i>
                            </span>
                            <span className="fw-bold">
                              Phone: 7305197833, 9486178103
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-tittle">
                        <h6 className="text-white fw-bold fst-italic fs-5">
                          Services
                        </h6>{" "}
                        <div className="line"></div>
                        <ul className="mt-10px ">
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold "
                              href="/ServiceDetail?keyword=Research+article+writing"
                            >
                              Research article writing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Review+Article+writing%2FEditing"
                            >
                              Review Article writing/Editing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Thesis%2FDissertation+writing"
                            >
                              Thesis/Dissertation writing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Publication+support"
                            >
                              Publication support
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Phd+end+to+end+assistance"
                            >
                              Phd end to end assistance
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Proposal+writing%2FEditing"
                            >
                              Proposal writing/Editing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Plagiarism+free+writing%2FEditing"
                            >
                              Plagiarism free writing/Editing
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Proofreading+services"
                            >
                              Proofreading services
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none text-white fw-bold"
                              href="/ServiceDetail?keyword=Project+development%2Fimplementation"
                            >
                              Project development/implementation
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                    <div className="single-footer-caption ">
                      <div className="footer-tittle">
                        <h6 className="text-white fw-bold fst-italic fs-5">
                          Quick Links
                        </h6>{" "}
                        <div className="line"></div>
                        <ul>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                            >
                              Conferences 2023
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                              target="_blank"
                            >
                              Our Profile
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                            >
                              Enquiry Form
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none text-white fw-bold"
                              href=""
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <Link
                              href={"/PrivacyPolicy"}
                              className="text-decoration-none text-white fw-bold"
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/TermsandConditions"}
                              className="text-decoration-none text-white fw-bold"
                            >
                              {" "}
                              Terms and Conditions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="single-footer-caption ">
                      <div className="footer-tittle ">
                        <h6 className="text-white fw-bold fst-italic fs-5">
                          Quick Contact
                        </h6>
                        <div className="line1 mb-0 pb-0"></div>
                        <div className="news-sub form-group mt-0 pt-0">
                          <form
                            className="mt-0 w-100"
                            method="post"
                            action="footback.php"
                            encType="multipart/form-data"
                          >
                            <div className="row">
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Enter Your Email Id"
                                    name="email"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Country"
                                    name="country"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Phone Number"
                                    name="phone"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Requirement"
                                    name="requirement"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6 p-1">
                                <div className="input-group mb-1">
                                  <input
                                    type="text"
                                    className="form-control p-2"
                                    placeholder="Preferred Time to Discuss"
                                    name="pttd"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="col-sm-12 p-0 mb-3 bt-button">
                                  <Button
                                    bgGradient="linear(to-r, gold 50%, green 50%)"
                                    bgSize="200% 100%"
                                    bgPosition="left bottom"
                                    transition="all 0.4s ease"
                                    _hover={{
                                      bgPosition: "right bottom",
                                      color: "white",
                                    }}
                                  >
                                    Submit
                                  </Button>
                                  {/* <button className="btn btn-bg bg-primary text-white" name="submit" type="submit"><strong>Submit</strong></button> */}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="text-white" />
              <div className="footer-bottom pb-4">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="footer-copy-right">
                      <p className="text-white fst-italic fw-bold mb-2">
                        Copyright © 2024 Matt Engineering Solutions. All Rights
                        Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-8 col-xs-12 text-right footer-social">
                    <span className="fs-6 fw-bold">
                      <span className="social">Follow us :</span>
                    </span>{" "}
                    &nbsp;
                    <Link
                      href="https://www.facebook.com/mattenggsolutions"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/mattengineeringsolutions"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-linkedin "></i>
                    </Link>
                    <Link
                      href="https://twitter.com/mattenggsoln"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link
                      href="https://pin.it/7DuKJdW"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-pinterest" aria-hidden="true"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/mattengineering"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link
                      href="https://youtube.com/c/MattEngineeringEquipments"
                      target="_blank"
                      className="link-hover"
                    >
                      <i className="bi bi-youtube" aria-hidden="true"></i>
                    </Link>
                    {/* <a href=""><i className="bi bi-whatsapp" aria-hidden="true"></i></a> */}
                    {/* <a href="" target="_blank"><i className="bi bi-facebook"></i></a> */}
                    {/* <a href="" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    <a href="" target="_blank"><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-pinterest" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer