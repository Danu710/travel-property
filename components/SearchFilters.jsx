import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const SearchFilters = () => {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-100">
      {filters?.map((filter) => (
        <div key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2">
            {filter?.items?.map((item) => (
              <option value={item} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
      ))}
      <Flex flexDir="column">
        <Button border="1px" borderColor="gray.200" marginTop="2">
          Search Location
        </Button>
        {showLocations && (
          <Flex flexDir="column" pos="relative" paddingTop="2">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                pos="absolute"
                cursor="pointer"
                right="5"
                top="5"
                zIndex="100"
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <Box height="300px" overflow="auto">
                {locationData?.map((location) => (
                  <Box key={location.id}>
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100">
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5">
                    <Image src={noresult} />
                    <Text fontSize="xl" marginTop="3">
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default SearchFilters;
