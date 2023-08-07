import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Lottie from "lottie-react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useRef } from "react";
import * as React from "react";

export default function TabOneScreen() {
  // Reference that lets us manipulate animation from anywhere in this component
  const animationRef = React.useRef<Lottie>(null);

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
        />
      </ScrollView>
    </SafeAreaView>
  );
}
