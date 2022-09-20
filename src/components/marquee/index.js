import React from 'react';
import aws1 from '../../assets/image/Rectangle 1902.png';
import aws2 from '../../assets/image/Rectangle 1903.png';
import aws3 from '../../assets/image/Rectangle 1904.png';
import aws4 from '../../assets/image/Rectangle 1905.png';
import aws5 from '../../assets/image/Rectangle 1906.png';
import aws6 from '../../assets/image/Rectangle 1907.png';
import aws7 from '../../assets/image/Rectangle 1908.png';
import aws8 from '../../assets/image/Rectangle 1909.png';
import aws9 from '../../assets/image/Rectangle 1910.png';
import aws10 from '../../assets/image/Rectangle 1911.png';
import aws11 from '../../assets/image/Rectangle 1912.png';
import aws12 from '../../assets/image/Rectangle 1925.png';
import aws13 from '../../assets/image/Rectangle 1926.png';
import aws14 from '../../assets/image/Rectangle 1930.png';

export default function Marquee() {
  const DataList = [
    aws1,
    aws2,
    aws3,
    aws4,
    aws5,
    aws6,
    aws7,
    aws8,
    aws9,
    aws10,
    aws11,
    aws12,
    aws13,
    aws14,
  ];

  return (
    <marquee scrollamount="5s">
      <div className="flex">
        {DataList.map((dataList, index) => {
          return <img key={index} src={dataList} alt="tools" className="w-[15%]" />;
        })}
      </div>
    </marquee>
  );
}
