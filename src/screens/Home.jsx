import React from "react";
import { View, FlatList } from "react-native";

import Card from "../components/Card";
import { useRecepies } from "../providers/ItemsProvider";

export default function Home() {
  const { recepies } = useRecepies();

  const renderItem = ({ item }) => (
    <Card title={item.title} category={item.category} image={item.imagePath} />
  );
  return (
    <View>
      <FlatList
        data={recepies}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return (item.id + index).toString();
        }}
        numColumns={2}
      />
    </View>
  );
}
