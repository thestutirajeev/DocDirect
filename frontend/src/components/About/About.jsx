import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* =================About Image================= */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src = {aboutImg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src = {aboutCardImg} alt=''/>
                </div>
            </div>
            {/* =================About Content================= */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text__para'>
                    Proud to be one of the nations best. We have been awarded as the best in the nation for our services. We have been serving our customers for years and we have been able to satisfy them with our services. We have been able to provide the best services to our customers and we have been able to make them happy. We have been able to provide the best services to our customers and we have been able to make them happy.
                </p>

                <div className='text__para mt-[30px]'>
                    Our best is something that we are proud of. We have been awarded as the best in the nation for our services. We have been serving our customers for years and we have been able to satisfy them with our services. We have been able to provide the best services to our customers and we have been able to make them happy. We have been able to provide the best services to our customers and we have been able to make them happy.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;