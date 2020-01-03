import React from "react";
import { StyleSheet, Text, View, Linking, ScrollView } from "react-native";
import { Appbar, Card, Paragraph, Headline, List } from "react-native-paper";

export default function App() {
  return (
    <>
      <Appbar.Header
        theme={{ colors: { primary: "#ada987" }, dark: true }}
        collapsable
      >
        <Appbar.Content
          title="Muhammed Saeed, 23"
          subtitle="this website made with react native and expo"
          titleStyle={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "#f7f7f7"
          }}
        />
      </Appbar.Header>
      <ScrollView>
        <Card
          theme={{
            colors: { primary: "#ada987", surface: "#000" },
            dark: true
          }}
          style={{
            width: "50%",
            marginTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              height: 5,
              width: 5
            },
            shadowOpacity: 0.1,
            shadowRadius: 50
          }}
        >
          <Card.Title
            title="My Story"
            titleStyle={{ fontFamily: "monospace", color: "red", fontSize: 20 }}
          />
          <Card.Content>
            <Paragraph style={{ fontSize: 17 }}>
              I'm a passionate software developer who has always willing to
              learn and to developed I started to develop 3 years ago my
              graduation project was a platform for rating content we called it
              ocean we built a fully featured web app for users community it
              required a variety of platforms so we implemented a full-feature
              mobile app for iOS & Android using React Native it never published
              because of university credits, We implemented authentication
              process and messaging/chat process and search by API process and
              present the entities we had in the project... I started to learn
              react native in Jan 2019 the app was standalone in May 2019 you
              can check the app through my GitHub repo... At work, I was a
              part-time mobile app developer, created more than 30 apps with
              variety of themes, 8 of these were the same themes and differs in
              some details. I'm using react-navigation and react-redux in my
              development any app, I'm expert in react-navigation, I'm
              experienced with react-redux I have a good experience in rxjs and
              redux observable, I don't mind to implement animations with react
              native reanimated, also, I have a good experience with flutter, I
              have experience with Odoo APIs integration with a mobile app using
              javascript and flutter
            </Paragraph>
          </Card.Content>
        </Card>
        <Card
          theme={{
            colors: { primary: "#ada987", surface: "#000" },
            dark: true
          }}
          style={{
            width: "50%",
            marginTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              height: 5,
              width: 5
            },
            shadowOpacity: 0.1,
            shadowRadius: 50
          }}
        >
          <Card.Title
            title="Contacts"
            titleStyle={{ fontFamily: "monospace", color: "red", fontSize: 20 }}
          />
          <Card.Content>
            <List.Item
              onPress={() => Linking.openURL("mailto:stringsaeed@gmail.com")}
              left={props => <List.Icon {...props} icon="email" />}
              title="stringsaeed@gmail.com"
            />
            <List.Item
              onPress={() => Linking.openURL("tel://+201118784615")}
              left={props => <List.Icon {...props} icon="phone" />}
              title="+201118784615"
            />
            <List.Item
              left={props => <List.Icon {...props} icon="map" />}
              title="Nasr-City, Cairo, Egypt"
            />
          </Card.Content>
        </Card>
        <Card
          theme={{
            colors: { primary: "#ada987", surface: "#000" },
            dark: true
          }}
          style={{
            width: "50%",
            marginTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              height: 5,
              width: 5
            },
            shadowOpacity: 0.1,
            shadowRadius: 50
          }}
        >
          <Card.Title
            title="Education"
            titleStyle={{ fontFamily: "monospace", color: "red", fontSize: 20 }}
          />
          <Card.Content>
            <List.Item
              left={props => <List.Icon {...props} icon="collage" />}
              title="BAC | 2014-2019 | SHA | Computer Science (El-Shorouq Academy)"
            />
          </Card.Content>
        </Card>
        <Card
          theme={{
            colors: { primary: "#ada987", surface: "#000" },
            dark: true
          }}
          style={{
            width: "50%",
            marginTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              height: 5,
              width: 5
            },
            shadowOpacity: 0.1,
            shadowRadius: 50
          }}
        >
          <Card.Title
            title="Experiences"
            titleStyle={{ fontFamily: "monospace", color: "red", fontSize: 20 }}
          />
          <Card.Content>
            <List.Item
              left={props => <List.Icon {...props} icon="worker" />}
              title="Full-Time Python Backend Developer @ Crevisoft Co (May 2019- Nov 2019)"
            />
            <List.Item
              left={props => <List.Icon {...props} icon="worker" />}
              title="Part-Time React Native Developer @ Crevisoft Co (Jul 2019- Nov 2019)"
            />
            <List.Item
              onPress={() => Linking.openURL("https://www.expandcart.com/en/")}
              left={props => <List.Icon {...props} icon="worker" />}
              title="Full-Time React Native Developer @ ExpandCart (Oct 2019- Currently working)"
            />
          </Card.Content>
        </Card>
        <Card
          theme={{
            colors: { primary: "#ada987", surface: "#000" },
            dark: true
          }}
          style={{
            width: "50%",
            marginTop: 10,
            alignSelf: "center",
            // alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              height: 5,
              width: 5
            },
            shadowOpacity: 0.1,
            shadowRadius: 50
          }}
        >
          <Card.Title
            title="Skills and Abilities"
            titleStyle={{ fontFamily: "monospace", color: "red", fontSize: 20 }}
          />
          <Card.Content>
            <List.Section>
              <List.Subheader>Programming</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="code-braces" />}
                title="Python"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-braces" />}
                title="C++"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-braces" />}
                title="Javascript"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>Frameworks</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="React Native"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="Redux, Redux-Observable and Redux-Thunk"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="Flutter"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="React Navigation, React eco-system, React Context API"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>Programming Paradigms</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="Declarative: Functional"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="Reactive: rxjs"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="Structured: Object-Oriented"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>Version Controls</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="source-fork" />}
                title="GitHub"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="source-branch" />}
                title="Bit-Bucket"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="source-pull" />}
                title="GitLab"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>DB Management</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="database" />}
                title="PostgreSQL, MySQL, MariaDB"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="database" />}
                title="MongoDB, Redis"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="database" />}
                title="Realm"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>API</List.Subheader>
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="SOAP"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="REST"
              />
              <List.Item
                left={props => <List.Icon {...props} icon="code-tags" />}
                title="JSON"
              />
            </List.Section>
            <List.Section>
              <List.Subheader>APPS</List.Subheader>
              <List.Item
                onPress={() =>
                  Linking.openURL(
                    "https://github.com/Stringsaeed/shiny-octo-computing-machine/tree/v1.0.0"
                  )
                }
                left={props => <List.Icon {...props} icon="apps" />}
                title="Seller App"
                right={props => (
                  <>
                    <List.Icon {...props} icon="google-play" />
                    <List.Icon {...props} icon="github-circle" />
                  </>
                )}
              />
              <List.Item
                onPress={() =>
                  Linking.openURL(
                    "https://play.google.com/store/apps/details?id=com.expandcart_ntmarket_store"
                  )
                }
                left={props => <List.Icon {...props} icon="apps" />}
                title="NT Market"
                right={props => <List.Icon {...props} icon="google-play" />}
              />
            </List.Section>
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
