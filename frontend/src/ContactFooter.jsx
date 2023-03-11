import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn
} from 'react-icons/fa';
import Anish from './assets/anish.jpg';
import Aagat from './assets/aagat.jpg';
import Bipin from './assets/bipin.jpg';
import Biraj from './assets/biraj.png';

const ContactFooter = () => {
  return (
    <div name='contact' className='max-w mx-auto py-16 px-8 grid lg:grid-cols-4 gap-10 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Big Data Project</h1>
        <p className='py-4 text-green-400'>Any inquiry related to the Application or for further more information, you can feel free to contact us anytime. Do checkout the GitHub repository for the documentation.</p>
        <div className='flex justify-between md:w-[75%] my-4'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-green-400'>Anish Agarwal</h6>
        <ul>
            <li className='py-2 text-sm text-green-400'>075BCT012</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Anish} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct012.anish@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-green-400'>Bipin Puri</h6>
        <ul>
            <li className='py-2 text-sm text-green-400'>075BCT023</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Bipin} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct023.bipin@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-green-400'>Aagat Pokhrel</h6>
        <ul>
            <li className='py-2 text-sm text-green-400'>075BCT002</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Aagat} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct002.aagat@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-green-400'>Biraj Bikram Pathak</h6>
        <ul>
            <li className='py-2 text-sm text-green-400'>075BCT024</li>
            <li><img className='md:w-[100px] w-[75px] rounded-lg' src={Biraj} alt='/' /></li>
            {/* <li className='py-2 text-sm'>075bct024.biraj@pcampus.edu.np</li> */}
            <div className='flex md:w-[75%]'>
                <a href='https://www.google.com'>
                    <FaLinkedinIn className='mt-2 mr-2'/>
                </a>
                <a href='https://www.google.com'>
                    <FaGithubSquare className='mt-2'/>
                </a>
            </div>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default ContactFooter;