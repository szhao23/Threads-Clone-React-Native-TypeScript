import { Thread } from "@/types/threads";
import * as React from "react";
import { View } from "react-native";
import { Text } from "./Themed";

export default function ThreadsItem(thread: Thread): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
    </View>
  );
}