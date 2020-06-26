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
  Tooltip,
  Heading
} from "@chakra-ui/core";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
  SnapchatIcon,
  YoutubeIcon
} from "./SocialIcon";
import Select from "react-select";

const CrossIcon = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
        fill="#D7D7D7"
      />
    </svg>
  );
};

const AddIcon = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#03053D" />
    </svg>
  );
};

function PropertyCard({ content, title }) {
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <Stack
      direction="column"
      spacing={24}
      style={{
        width: "80%",
        backgroundColor: "white",
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "32px"
      }}
    >
      <Stack
        direction="row"
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "16px",
          cursor: "pointer"
        }}
        onClick={toggle}
      >
        <Heading fontSize={18} fontWeight="bold" margin={0}>
          {title}
        </Heading>
        {isActive ? <CrossIcon /> : <AddIcon />}
      </Stack>
      {isActive && content}
    </Stack>
  );
}

function SocialMediaPicker() {
  const options = [
    { label: "Open Graph", value: "open-graph" },
    { label: "Cover", value: "cover" },
    { label: "Feed", value: "feed" },
    { label: "Story", value: "story" }
  ];
  const [selected, setSelected] = React.useState("Facebook");
  const [template, setTemplate] = React.useState(options[0]);

  return (
    <Stack spacing={24} width="100%">
      <Stack width="100%">
        <Text fontSize="12px" color="#727272">
          Platform
        </Text>
        <Stack direction="row" spacing={16}>
          <FacebookIcon
            onClick={() => setSelected("Facebook")}
            style={{
              backgroundColor: "transparent",
              opacity: selected === "Facebook" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Facebook" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Facebook"
                  ? "drop-shadow(0px 20px 20px rgba(25, 119, 243, 0.5))"
                  : "none"
            }}
          />
          <TwitterIcon
            onClick={() => setSelected("Twitter")}
            style={{
              background: "transparent",
              opacity: selected === "Twitter" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Twitter" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Twitter"
                  ? "drop-shadow(0px 20px 20px rgba(32,161,241, 0.5))"
                  : "none"
            }}
          />
          <InstagramIcon
            onClick={() => setSelected("Instagram")}
            style={{
              background: "transparent",
              opacity: selected === "Instagram" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Instagram" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Instagram"
                  ? "drop-shadow(0px 20px 20px rgba(153,51,161, 0.5))"
                  : "none"
            }}
          />
          <PinterestIcon
            onClick={() => setSelected("Pinterest")}
            style={{
              background: "transparent",
              opacity: selected === "Pinterest" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Pinterest" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Pinterest"
                  ? "drop-shadow(0px 20px 20px rgba(189,9,30, 0.5))"
                  : "none"
            }}
          />
          <SnapchatIcon
            onClick={() => setSelected("Snapchat")}
            style={{
              background: "transparent",
              opacity: selected === "Snapchat" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Snapchat" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Snapchat"
                  ? "drop-shadow(0px 20px 20px rgba(254,252,0, 0.5))"
                  : "none"
            }}
          />
          <YoutubeIcon
            onClick={() => setSelected("Youtube")}
            style={{
              background: "transparent",
              opacity: selected === "Youtube" ? 1 : 0.2,
              transition: ".7s",
              transform: selected === "Youtube" ? "scale(1.2)" : "scale(1)",
              filter:
                selected === "Youtube"
                  ? "drop-shadow(0px 20px 20px rgba(255,1,2, 0.5))"
                  : "none"
            }}
          />
        </Stack>
      </Stack>

      <Stack width="100%">
        <Text fontSize="12px" color="#727272">
          Template
        </Text>
        <Select
          defaultValue={options[0]}
          label="Template"
          options={options}
          styles={{
            container: styles => ({
              ...styles,
              width: "100%"
            }),
            control: styles => ({
              ...styles,
              border: "2px solid black !important",
              borderRadius: "4px"
            }),
            indicatorSeparator: styles => ({
              ...styles,
              width: "0"
            }),
            input: styles => ({
              ...styles,
              color: "black"
            }),
            dropdownIndicator: styles => ({
              ...styles,
              color: "black"
            }),
            menu: styles => ({
              ...styles,
              border: "2px solid black",
              borderRadius: "4px"
            }),
            menuList: styles => ({
              ...styles,
              padding: "0 !important"
            }),
            option: (styles, state) => ({
              ...styles,
              margin: "0.5rem",
              width: "calc(100% -1rem)",
              borderRadius: "4px",
              color: state.isSelected ? "white" : "black",
              background: state.isSelected
                ? "black"
                : state.isFocused
                ? "#f5f5f5"
                : "transparent"
            })
          }}
        />
      </Stack>
    </Stack>
  );
}

export default function App() {
  const [title, setTitle] = React.useState("Choose Social Media");

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
      <PropertyCard title={title} content={<SocialMediaPicker />} />
    </div>
  );
}
