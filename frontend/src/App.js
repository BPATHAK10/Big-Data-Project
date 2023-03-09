import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ContactFooter from "./ContactFooter";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";

function App() {
  const [results, setresults] = useState([]);
  return (
    <div className="bg-gray-800 h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <SearchBar setresults={setresults} />
      </div>
      <div className="search-results flex-grow flex items-center justify-center">
        <Box>
          {console.log(results)}
          {results.length>>0 && results.map((result) => (
            console.log(result.title)
            <Box
              key={result.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              my={2}
            >
              <Text fontSize="lg" fontWeight="bold">
                {result.title}
              </Text>
              <Text mt={2}>{result.description}</Text>
            </Box>
          )) }
        </Box>
      </div>
      <div className="mt-auto">
        <ContactFooter />
      </div>
    </div>
  );
}

export default App;
