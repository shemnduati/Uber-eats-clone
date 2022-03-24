import { View, Text, StyleSheet, Image,  ScrollView  } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";


const foods = [
  {
    title: "Lasania",
    image:
      "https://3.bp.blogspot.com/_qUlzeGBAVr8/TCBdOXWLuJI/AAAAAAAABRc/D-fkre0fxpg/s1600/italian-lasagna_full.jpeg",
    description:
      "Lasagne are a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.",
    price: "13.50",
  },
  {
    title: "Tandoori Chicken",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/tandoori-chicken.jpg",
    description:
      "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven.",
    price: "19.20",
  },
  {
    title: "Chilaquiles",
    image:
      "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg",
    description:
      "Chilaquiles is a traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried.",
    price: "14.20",
  },
  {
    title: "Chicken Caesar  Salad",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
    description:
      "Pound the chicken with a mallet or heavy skillet until about 1/8 inch thick. ",
    price: "40",
  },
  {
    title: "Lasania",
    image:
      "https://image.shutterstock.com/image-photo/piece-lasania-on-plate-260nw-1934541368.jpg",
    description:
      "Lasagne are a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.",
    price: "23.32",
  },
];
export default function MenuItem() {
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
        <View style={styles.menuItemStyle}>
          <FoodInfo food={food} />
          <FoodImage food={food} />
        </View>
        <Divider width={0.5} />
      </View>
      ))}
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    jusifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "800",
  },
});

const FoodInfo = (props) => (
  <View>
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  </View>
);
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
