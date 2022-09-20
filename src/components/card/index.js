import React from 'react';
import WebsiteDevelopment from '../../assets/image/Website development.png';
import MobileDevelopment from '../../assets/image/Mobile apps development.png';
import DigitalProductDesign from '../../assets/image/Digital product design.png';
import Maintenance from '../../assets/image/Maintenance.png';
import CmsDevelopment from '../../assets/image/CMS development.png';
import PaymentGateway from '../../assets/image/Payment.png';
import PortoImg from '../../assets/image/Rectangle 1914.png';

export default function Card() {
  const DataLists = [
    {
      image: WebsiteDevelopment,
      title: 'Website development',
      description: 'High-performance website to reach out more your potential customers',
    },
    {
      image: MobileDevelopment,
      title: 'Mobile development',
      description: 'To accelerate your business process',
    },
    {
      image: DigitalProductDesign,
      title: 'Digital Product Design',
      description: 'Complete digital product creations from UX prototyping to final UI designs',
    },
    {
      image: Maintenance,
      title: 'Maintenance',
      description: 'Make sure your digital environment keep online and updated',
    },
    {
      image: CmsDevelopment,
      title: 'CMS development',
      description: 'You can update your website content yourself',
    },
    {
      image: PaymentGateway,
      title: 'Integrated payment gateway',
      description: 'Simplify the payment system with just one step',
    },
  ];

  return (
    <>
      <div className="gap-x-2 flex item-center space-x-4 overflow-x-auto snap-proximity  snap-x">
        {DataLists.map((dataList, index) => {
          return (
            <div
              key={index}
              className="flex-none rounded-lg border-primary border w-[298px] snap-center"
            >
              <div className="px-4 py-4 space-y-6">
                <img src={dataList.image} alt={dataList.title} className="w-[16%]" />
                <div className="text-sm space-y-1 px-2">
                  <h4 className="font-bold text-[16px] leading-[19px] text-primary">
                    {dataList.title} <span className="text-lg">→</span>
                  </h4>
                  <p className="text-sm leading-[17px]">{dataList.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function PortofolioCard() {
  return (
    <div className="w-[237px] border border-primary rounded-lg mb-8 flex-none snap-cente">
      <img src={PortoImg} alt="porto" />
      <div className="space-y-2 p-4">
        <h3 className="text-[#C4C4C4] text-sm leading-[17px]">Mobile apps</h3>
        <h2 className="font-bold text-sm leading-[17px]">ILIOS app (B2B E-Commerce)</h2>
        <p className="leading-[17px] text-sm">
          Has a uniques selling point where not all companies offer applications for sales, data
          collection and management
        </p>
      </div>
    </div>
  );
}
