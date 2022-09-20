import React from 'react';
import Card, { PortofolioCard } from '../card';
import Marquee from '../marquee';
import HeroImg from '../../assets/image/HeroImg.png';
import Dot from '../../assets/image/Group 3.png';
import Dots from '../../assets/image/Group 32.png';
import Button from '../button';

export default function Hero() {
  return (
    <section className="mt-2">
      <main className="z-10">
        <div className="container mx-auto px-2">
          {/* Text */}
          <div className="ml-8 space-y-[2px] mt-2">
            <h2 className="font-bold text-[32px] leading-[38px] drop-shadow-xl">
              Build or scale up
            </h2>
            <h4 className="font-normal text-[24px] leading-[29px]">your development team</h4>
            <div className="flex items-center space-x-1 pt-3">
              <div className="h-[3px] rounded-full w-[50px] bg-primary" />
              <p className="text-base leading-[19px] drop-shadow-lg">in weeks, not months</p>
            </div>
          </div>
          {/* hero */}
          <div className="relative mt-7 mb-8 ">
            <img src={Dot} alt="group" className="absolute top-6 -z-10" />
            <div className="flex justify-center">
              <img src={Dots} alt="group" className="absolute -bottom-5 -z-10" />
            </div>
            <div className="flex justify-end">
              <img src={HeroImg} alt="hero" className="w-[96%]" />
            </div>
          </div>

          {/* list */}
          <div className="mt-10 text-center">
            <div className="mb-5">
              <Button>Book Now</Button>
            </div>
            <div className="space-y-1 mb-[31px]">
              <p className="text-[#C4C4C4] text-lg leading-[21px]">Complete Package</p>
              <h3 className="font-bold text-xl leading-6">
                From product design to software continous delivery
              </h3>
            </div>
          </div>
          <Card />

          {/* marquee */}
          <div className="my-10">
            <Marquee />
          </div>
        </div>

        {/* Porto */}
        <section className="space-y-10">
          <div className="bg-black">
            <div className="container mx-auto py-[30px] px-5 text-center space-y-5">
              <div className="px-5">
                <h2 className="text-primary font-bold text-xl leading-6">
                  Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology
                </h2>
              </div>
              <div className="flex text-white justify-evenly">
                <h3 className="text-3xl leading-[55px]">
                  1000+ <span className="block text-lg font-light leading-[27px]">Design</span>
                </h3>
                <h3 className="text-3xl leading-[55px]">
                  30+ <span className="block text-lg font-light leading-[27px]">Product</span>
                </h3>
                <h3 className="text-3xl leading-[55px]">
                  58+{' '}
                  <span className="block text-lg font-light leading-[27px] text-center">
                    Website <br /> Development
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-3 mb-9 text-center">
              <p className="text-gray-500 text-lg leading-[21px]">Portofolio</p>
              <h3 className="font-bold text-xl leading-6">
                The Software that we build takes our clients to the next level
              </h3>
            </div>
            <div className="container mx-auto ">
              <div className="flex justify-start space-x-4 overflow-x-auto px-4 snap-x">
                <PortofolioCard />
                <PortofolioCard />
                <PortofolioCard />
              </div>
              <div className="text-center">
                <Button>Learn more</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
