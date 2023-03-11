import React from "react";
import { useState } from "react";
import { Box, Button, Card, CardBody, CardHeader, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [generatedContent, setGeneratedContent] = useState('');
  
  const baseUrl = "http://localhost:5000/"

  const searchMovie = () => {
    console.log("button clicked", searchQuery);
    axios
      .get(baseUrl + "search_movies", { query: searchQuery })
      .then((response) => {
        console.log(response.data.hits);
        setGeneratedContent(response.data.hits)
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setsearchQuery(val);
  };

  return (
    <>
    <Flex direction="column" align="center" justify="center" h="100%" w="100%">
      <Text className="text-2xl text-zinc-400 font-bold pb-5">
        Search any Movie you want
      </Text>
      <Flex>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          variant="filled"
          placeholder="Search"
          className="bg-white text-gray-600 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <Button bgColor="#00df9a" ml={2} onClick={searchMovie}>
          <Text className="px-3 py-2 text-black">Search</Text>
        </Button>
      </Flex>
    </Flex>
    {generatedContent && (
      <div className="my-5">
        <Card variant={'filled'}>
          <CardHeader>
            <h2 className="font-bold text-zinc-700 lg:text-2xl md:text-xl text-lg py-3">Result:</h2>
          </CardHeader>

          <CardBody>
              <Box>
                <Flex>
                  <Text pt='5' fontSize='md'>
                    {/* display title here */}
                    {generatedContent}
                  </Text>
                  <Spacer/>
                  <Text>
                    {/* display description here */}
                  </Text>
                </Flex>
              </Box>
          </CardBody>
        </Card>
      </div>
    )}
    </>
  );
};

export default SearchBar;
