import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Lottie from "lottie-react-native";
import { useRef } from "react";
import * as React from "react";
import { createRandomUser } from "../../utils/generate-dummy-data";
import { ThreadsContext } from "../../context/thread-context";
import ThreadsItem from "../../components/ThreadsItem";

// const user = createRandomUser();
// console.log(JSON.stringify(user, null, 2));

export default function TabOneScreen() {
  // Reference that lets us manipulate animation from anywhere in this component
  const animationRef = React.useRef<Lottie>(null);
  // Access Data from Context
  const threads = React.useContext(ThreadsContext);

  return (
    <SafeAreaView>
      {/* ScrollView React Native */}
      <ScrollView
        contentContainerStyle={{
          // backgroundColor: "gray",
          paddingHorizontal: 10,
          // Fixes the animation for Android so Refresh Logo doesn't go off screen
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              // On Refresh Play the Lottie Animation
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          // Add ref Reference from animationRef above that allows us to manipulate the animation
          ref={animationRef}
          source={require("../../lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
          // onAnimationFinish={() => {
          //   alert("Finished Refresh");
          // }}
        />
        {/* After Data is passed from Context, Map through the Data to Display */}
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
