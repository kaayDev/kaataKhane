import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.components";

import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.compoent";
import { Text } from "../typography/text.component";
import { Card } from "react-native-paper";

const FavouriteWrapper = styled(Card)`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};