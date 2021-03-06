import React from "react";
import HTMLParser from "html-react-parser";
import { replacer } from "../../../helpers/transformers";
import { Box, Button, useClipboard } from "@chakra-ui/core";
import { IoMdCopy } from "react-icons/io";

import { PreAttributes } from "./types";

const Pre: React.FC<PreAttributes> = ({
  anchor,
  id,
  content,
  saveContent,
  ...rest
}) => {
  const { onCopy, hasCopied } = useClipboard(content);

  return (
    <Box
      p={8}
      backgroundColor="gray.100"
      borderWidth={1}
      borderColor="gray.300"
      overflowX="scroll"
      position="relative"
      as="pre"
      id={anchor || id || null}
      {...rest}
    >
      <Button
        background="gray.300"
        borderRadius={0}
        position="absolute"
        top={0}
        right={0}
        onClick={onCopy}
      >
        {hasCopied ? "Copied!" : <IoMdCopy />}
      </Button>
      {HTMLParser(content, { replace: replacer })}
    </Box>
  );
};

export default Pre;
