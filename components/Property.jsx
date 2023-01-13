import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="flex flex-col items-center justify-center m-10">
      <div className="flex flex-wrap justify-start p-5 pt-0 cursor-pointer w-96">
        <div>
          <img
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between pt-2">
            <div className="w-5 pr-3 text-green-400">
              {isVerified && <GoVerified />}
            </div>
            <p className="font-bold font-lg">
              AED {price} {rentFrequency && `/${rentFrequency}`}
            </p>
            <div className="w-16">
              <Avatar size="sm" src={agency?.logo?.url}></Avatar>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pt-1 text-blue-600">
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </div>
          <p className="pt-1 font-lg">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default Property;
