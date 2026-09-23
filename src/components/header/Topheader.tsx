import React from 'react';
import Container from '../Container';
import { IoChevronDownSharp } from 'react-icons/io5';
import { CiDeliveryTruck } from 'react-icons/ci';
const Topheader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className=" flex justify-between items-center">
        <p className=" w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <CiDeliveryTruck className=" text-amber-300 text-2xl mr-1" />
          FREE Express Shipping On Orders $1000+
        </p>
        <div className=" hidden md:inline-flex items-center text-sm text-white">
          <p className="headerTopMenu ">
            English <IoChevronDownSharp className="mt-1" />
          </p>
          <p className=" headerTopMenu">
            USD <IoChevronDownSharp className="mt-1" />
          </p>
          <p className=" headerTopMenu">
            Settings <IoChevronDownSharp className="mt-1" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
