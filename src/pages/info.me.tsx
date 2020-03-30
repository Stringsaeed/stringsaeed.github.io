import React from "react";
import { Avatar } from "baseui/avatar";
import { ListItem, ListItemLabel } from "baseui/list";
import { HeadingXLarge, H4 } from "baseui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faWhatsapp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const InfoMe = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderStyle: "dashed",
        height: "99vh",
        zIndex: 100,
        marginBottom: 10,
        boxShadow: "black 0px 0px 30px 5px"
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottomStyle: "dashed",
          width: "100%",
          alignSelf: "center",
          flexWrap: "wrap",
          flexShrink: 0,
          textAlign: "center"
          // padding: 100
        }}
      >
        <div style={{ paddingTop: 10 }}>
          <Avatar
            name="String Saeed"
            size="scale3200"
            src="https://avatars2.githubusercontent.com/u/37156636?s=460&u=0fbc84dc98c2797a3b2ecac6b4f8663c3d1d1ae9&v=4"
          />
        </div>
        <HeadingXLarge>Muhammed Saeed</HeadingXLarge>
      </div>
      <div>
        <H4 $style={{ textAlign: "center" }}>
          Mid-Level React Native Developer
          <div>
            <FontAwesomeIcon
              onClick={() => window.open("https://www.github.com/stringsaeed")}
              icon={faGithub}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <FontAwesomeIcon
              onClick={() => window.open("https://www.twitter.com/stringsaeed")}
              icon={faTwitter}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <FontAwesomeIcon
              onClick={() =>
                window.open(
                  "whatsapp://send?phone=+201118784615&abid=+201118784615&text=Hi"
                )
              }
              icon={faWhatsapp}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <FontAwesomeIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohamed-saeed-480a43b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsD4dLTMfTtG2QAfz%2BGyvVA%3D%3D"
                )
              }
              icon={faLinkedin}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
          </div>
        </H4>
        <div
          style={{
            width: "100%"
            // borderTopStyle: "dashed",
            // borderColor: "#000",
            // borderInlineStartStyle: "dashed",
            // borderBlockStartStyle: "dashed"
          }}
        >
          <ListItem>
            <ListItemLabel>Cairo, Egypt</ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>+201118784615</ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>Stringsaeed@gmail.com</ListItemLabel>
          </ListItem>
        </div>
      </div>
    </div>
  );
};
