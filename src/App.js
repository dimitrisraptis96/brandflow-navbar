import React from "react";
import TemplateIcon from "./TemplateIcon";
import SaveIcon from "./SaveIcon";
import { ThemeProvider } from "@chakra-ui/core";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";
import { CSSReset, Button, Text, Stack, Tooltip } from "@chakra-ui/core";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
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
        <CSSReset />

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
          <Stack direction="row" spacing={16} isInline>
            <TemplateIcon />
            <Stack spacing={0}>
              <Text margin={0} fontSize={12} color="#727272">
                Template
              </Text>
              <Tooltip label="Click to edit the name">
                <Editable
                  margin="0"
                  fontSize={18}
                  defaultValue="Personal Blog post template"
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Tooltip>
            </Stack>
          </Stack>

          <Button
            border="2px"
            variant="solid"
            leftIcon={<SaveIcon />}
            shadow="0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.1), 0px 24px 32px rgba(0, 0, 0, 0.14)"
            width="150px"
            borderRadius="8px"
            bgColor="black"
            color="white"
            height="43px"
            fontSize="16px"
          >
            Save
          </Button>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
