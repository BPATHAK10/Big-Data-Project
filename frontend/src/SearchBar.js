import React from "react";
import { useState } from "react";
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [generatedContent, setGeneratedContent] = useState([]);

  const baseUrl = "http://localhost:5000/";

  const searchMovie = () => {
    console.log("button clicked", searchQuery);
    axios
      .post(baseUrl + "search_movies", { query: searchQuery })
      .then((response) => {
        console.log(response.data.hits);
        setGeneratedContent(response.data.hits);
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
    <Box bgColor="gray.800" p={10}>
      <Text color="green.200" fontSize="3xl" fontWeight="bold" mb={5}>
        Search any Movie you want
      </Text>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box mr={5}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-white text-gray-600 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            placeholder="Search"
          />
        </Box>
        <Button bgColor="green.300" px={8} onClick={searchMovie}>
          Search
        </Button>
      </Box>
      {generatedContent.length > 0 && (
        <Box mt={10}>
          <Table variant="simple" bgColor="gray.800" color="white">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Rating</Th>
              </Tr>
            </Thead>
            <Tbody>
              {generatedContent.map((movie) => (
                <Tr key={movie.id}>
                  <Td>{movie.title}</Td>
                  <Td>{movie.description}</Td>
                  <Td>{movie.rating}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
