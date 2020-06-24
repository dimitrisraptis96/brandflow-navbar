import React from "react";
import TemplateIcon from "./TemplateIcon";
import SaveIcon from "./SaveIcon";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Button,
  Text,
  Stack,
  Tooltip
} from "@chakra-ui/core";

export default function App() {
  const [name, setName] = React.useState("Personal Blog post template");

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F3F2F2"
      }}
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        style={{
          // display: "block",
          width: "80%",
          backgroundColor: "white",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: "16px",
          padding: "32px"
        }}
      >
        <Stack direction="row" spacing={16}>
          <TemplateIcon />
          <Stack spacing={0}>
            <Text margin={0} fontSize={12} color="#727272">
              Template
            </Text>
            <Tooltip
              label="Click to edit the name"
              bg="black"
              borderRadius="4px"
              color="white"
              padding="0.1rem 0.4rem"
              placement="bottom"
              fontSize="14px"
            >
              <Editable
                cursor="pointer"
                margin="0"
                fontSize={18}
                defaultValue={name}
                onSubmit={setName}
              >
                <EditablePreview _hover={{ color: "#727272" }} />
                <EditableInput width="250px" />
              </Editable>
            </Tooltip>
          </Stack>
        </Stack>

        <Button
          // border="2px"
          variant="solid"
          leftIcon={<SaveIcon />}
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.1), 0px 24px 32px rgba(0, 0, 0, 0.14)"
          width="150px"
          borderRadius="4px"
          bg="black"
          color="white"
          _hover={{ transform: "translateY(-1px)", boxShadow: "none" }}
          height="43px"
          fontSize="16px"
          fontWeight="500"
        >
          Save
        </Button>
      </Stack>
    </div>
  );
}
