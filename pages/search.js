import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div
        className="flex flex-row cursor-pointer bg-gray-100 border-b border-gray-300 p-2 text-black font-bold text-lg justify-center items-center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
        <p>Search Property By Filters</p>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </div>
      {searchFilters && <SearchFilters />}
      <Text className="text-2xl p-4 font-bold">
        Properties {router.query.purpose}
      </Text>
      <div className="flex flex-wrap">
        {properties.map((property) => (
          <Property property={property} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <img src={noresult} />
          <p className="text-lg mt-3 ">No Result Found</p>
        </div>
      )}
    </div>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
