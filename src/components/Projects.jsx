import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../style/projects.css'

const Projects = () => {
      return (

            <div className="projects">

                  <Carousel infiniteLoop={true} autoPlay showStatus={true} showArrows={true} showThumbs={true} interval={5000} transitionTime={1000}    >
                        <div className='bulb'>
                              <img src="images/bulb.JPG" alt="image1" />
                              <a href="https://shreekanth24web.github.io/Turn-ON-Off-blub/" target='_blank'>
                                    <button className='bulb-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>Using JavaScript, Turn ON/Off Bulb </h1>
                        </div>
                        <div className='age'>
                              <img src="images/age.JPG" alt="image2" />
                              <a href="https://shreekanth24web.github.io/Age-Calculator/" target='_blank'>
                                    <button className='age-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>Age Calculator</h1>
                        </div>
                        <div className='todo'>
                              <img src="images/to-do-App.JPG" alt="image1" />
                              <a href="https://shreekanth24web.github.io/To-do-App/" target='_blank'>
                                    <button className='todo-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>To-do App</h1>
                        </div>
                        <div className='otp'>
                              <img src="images/otp.JPG" alt="image2" />
                              <a href="https://shreekanth24web.github.io/React-OTP-verification/" target='_blank'>
                                    <button className='otp-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>OTP generator and verification</h1>
                        </div>
                        <div className='employe'>
                              <img src="images/Employe-data-table.JPG" alt="image2" />
                              <a href="https://shreekanth24web.github.io/Employe-Data-Table-01/" target='_blank'>
                                    <button className='employe-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>Employe Data into table form (CURD-peration) </h1>
                        </div>
                        <div className='book'>
                              <img src="images/book-store.JPG" alt="image2" />
                              <a href="https://shreekanth24web.github.io/Book-store-register-data/" target='_blank'>
                                    <button className='book-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>Book Store Register data into tabel form</h1>
                        </div>

                        <div className='e-commerce'>
                              <img src="images/e-commerce.JPG" alt="image2" />
                              <a href="https://shreekanth24web.github.io/React-E-commerce-site/" target='_blank'>
                                    <button className='e-commerce-btn'>Project Link</button>
                              </a>
                              <h1 className='legend'>Shopping E-commerce site</h1>
                        </div>
                  </Carousel>
                  <hr />
                  
                  <div className='resume'>
                        <div className='resume-head'>
                              <h1>Resume</h1>
                        </div>
                        <div className='resume-part'>
                              <div className='resume-img'>
                                    <a href="files/Shreekantha_Front-end_CV_Resume.pdf" download="Shreekantha_Resume">
                                          <img src="images/resume-01.JPG" alt="resume_img" />
                                    </a>
                              </div>
                        </div>
                        <div className='resume-download-btn'>
                              <a href="files/Shreekantha_Front-end_CV_Resume.pdf" download="Shreekantha_Resume">
                                    <button>Download</button>
                              </a>

                        </div>
                  </div>
            </div>
      )
}

export default Projects