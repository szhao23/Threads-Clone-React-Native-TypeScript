import { Thread } from "../types/threads";
import * as React from "react";
import { View } from "react-native";
import { Text } from "./Themed";
import { Ionicons, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { timeAgo } from "../utils/time-ago";
import { MaterialIcons } from "@expo/vector-icons";

export default function ThreadsItem(thread: Thread): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
      <View>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
      </View>
    </View>
  );
}

// Contains the first post
function PostHeading({
  name,
  createdAt,
  verified,
}: {
  name: string;
  createdAt: string;
  verified: boolean;
}) {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "500" }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  );
}
