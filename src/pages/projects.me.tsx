import * as React from "react";
import { HeadingLarge } from "baseui/typography";
import { toggleIsExpanded, TreeNode, TreeView } from "baseui/tree-view";
import { ListItem, ListItemLabel } from "baseui/list";
import { Button } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGooglePlay,
  faAppStoreIos,
  faChrome
} from "@fortawesome/free-brands-svg-icons";

const myProjects: TreeNode[] = [
  {
    id: 1,
    label: "React Native Projects",
    info: "Hi how you doing?",
    isExpanded: true,
    children: [
      {
        depth: 1,
        id: 11,
        label: "Open Source",
        isExpanded: true,
        children: [
          {
            id: 111,
            label: ({ label }) => {
              return (
                <ListItem
                  sublist
                  endEnhancer={() => (
                    <Button
                      onClick={() =>
                        window.open(
                          "https://www.github.com/stringsaeed/shiny-octo-computing-machine"
                        )
                      }
                      size="compact"
                      kind="primary"
                      shape="round"
                    >
                      <FontAwesomeIcon color="white" icon={faGithub} />
                    </Button>
                  )}
                >
                  <ListItemLabel>Seller App</ListItemLabel>
                </ListItem>
              );
            },
            isExpanded: true
          },
          {
            id: 112,
            label: ({ label }) => {
              return (
                <ListItem
                  sublist
                  endEnhancer={() => (
                    <React.Fragment>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://github.com/Help-Application/MobileApp"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faGithub} />
                      </Button>
                      <div style={{ width: "14px" }} />
                      <Button
                        onClick={() =>
                          window.open(
                            "https://play.google.com/store/apps/details?id=com.stringsaeed.help"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faGooglePlay} />
                      </Button>
                    </React.Fragment>
                  )}
                >
                  <ListItemLabel description="built in 2 days">
                    Help App
                  </ListItemLabel>
                </ListItem>
              );
            },
            isExpanded: true
          },
          {
            id: 113,
            label: ({ label }) => {
              return (
                <ListItem
                  sublist
                  endEnhancer={() => (
                    <React.Fragment>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://www.github.com/stringsaeed/muhammedSaeedCv"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faGithub} />
                      </Button>
                      <div style={{ width: "14px" }} />
                      <Button
                        onClick={() =>
                          window.open(
                            "https://stringsaeed.github.io/muhammedSaeedCv"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faChrome} />
                      </Button>
                    </React.Fragment>
                  )}
                >
                  <ListItemLabel description="Built with Expo, react-native-web">
                    My Cv
                  </ListItemLabel>
                </ListItem>
              );
            },
            isExpanded: true
          }
        ]
      },
      {
        depth: 1,
        id: 12,
        label: "Expand Cart Projects",
        isExpanded: true,
        children: [
          {
            id: 121,
            label: ({ label }) => {
              return (
                <ListItem
                  endEnhancer={() => (
                    <React.Fragment>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://apps.apple.com/us/app/cavaraty-%D9%83%D9%81%D8%B1%D8%A7%D8%AA%D9%8A/id1241302199"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faAppStoreIos} />
                      </Button>
                      <div style={{ width: "14px" }} />
                      <Button
                        onClick={() =>
                          window.open(
                            "https://play.google.com/store/apps/details?id=com.wavai.cavaraty"
                          )
                        }
                        size="compact"
                        kind="primary"
                        shape="round"
                      >
                        <FontAwesomeIcon color="white" icon={faGooglePlay} />
                      </Button>
                    </React.Fragment>
                  )}
                >
                  <ListItemLabel description="it's only a usecase of our development">
                    Cavaraty
                  </ListItemLabel>
                </ListItem>
              );
            },
            isExpanded: true
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "React Projects",
    isExpanded: true,
    children: [
      {
        id: 21,
        depth: 1,
        label: ({ label }) => {
          return (
            <ListItem
              sublist
              endEnhancer={() => (
                <Button
                  onClick={() =>
                    window.open(
                      "https://github.com/Stringsaeed/ReactQuarantineWorkShop"
                    )
                  }
                  size="compact"
                  kind="primary"
                  shape="round"
                >
                  <FontAwesomeIcon color="white" icon={faGithub} />
                </Button>
              )}
            >
              <ListItemLabel>React Quarantine WorkShop</ListItemLabel>
            </ListItem>
          );
        },
        isExpanded: true
      }
    ]
  },
  {
    id: 3,
    label: "Python Projects",
    isExpanded: true,
    children: [
      {
        id: 31,
        depth: 1,
        label: ({ label }) => {
          return (
            <ListItem
              sublist
              endEnhancer={() => (
                <Button
                  onClick={() =>
                    window.open("https://github.com/Stringsaeed/NLP-Library")
                  }
                  size="compact"
                  kind="primary"
                  shape="round"
                >
                  <FontAwesomeIcon color="white" icon={faGithub} />
                </Button>
              )}
            >
              <ListItemLabel>NLP-Library</ListItemLabel>
            </ListItem>
          );
        },
        isExpanded: true
      },
      {
        id: 31,
        depth: 1,
        label: ({ label }) => {
          return (
            <ListItem
              sublist
              endEnhancer={() => (
                <Button
                  onClick={() =>
                    window.open("https://github.com/Stringsaeed/Courses")
                  }
                  size="compact"
                  kind="primary"
                  shape="round"
                >
                  <FontAwesomeIcon color="white" icon={faGithub} />
                </Button>
              )}
            >
              <ListItemLabel>Machine Learning Courses</ListItemLabel>
            </ListItem>
          );
        },
        isExpanded: true
      }
    ]
  }
];

// https://github.com/Stringsaeed/NLP-Library
// https://github.com/Stringsaeed/Courses

export const ProjectsMe = () => {
  const [projects, setProjects] = React.useState<TreeNode[]>(myProjects);

  const onToggle = (node: TreeNode) => {
    setProjects(prevData => toggleIsExpanded(prevData, node));
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        zIndex: 1000,
        marginBottom: 10,
        boxShadow: "black 10px 10px 30px 5px",
        borderStyle: "dashed",
        height: "99vh"
      }}
    >
      <div style={{ borderBottomStyle: "dashed" }}>
        <HeadingLarge>Projects</HeadingLarge>
      </div>
      <div>
        <TreeView
          onToggle={onToggle}
          indentGuides
          singleExpanded
          data={projects}
        />
      </div>
    </div>
  );
};
