import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import productImage from '../../assets/product_image.png';
import Badge from '../../components/Badge';

const GameLicenses: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image 
        source={productImage}
        style={styles.image}
      />
      
      <View>
        <Text style={styles.title}>
          Product
        </Text>

        <View style={styles.categories}>
          <Badge text="Action"/>
          <Badge text="FPS"/>
          <Badge text="RPG"/>
        </View>

        <Text style={styles.description}>
          Rerum labore quisquam aliquid quasi sunt sit aut aut quas.
          Rerum labore quisquam aliquid quasi sunt sit aut aut quas.
          Rerum labore quisquam aliquid quasi sunt sit aut aut quas.
        </Text>
      </View>

      <Text style={styles.title}>Chaves</Text>
      <View style={styles.keysContainer}>
        <Text
          style={styles.key}
          selectable={true}>
          1 - 15e4936566541574938dfb1c0aded7addc5991c
        </Text>

        <Text
          style={styles.key}
          selectable={true}>
          2 - d54d48e2e3d2bd522d932162dcc284f8cdeca4d
        </Text>

        <Text
          style={styles.key}
          selectable={true}>
          3 - ed51f637cf4b6074d1291e1e453db52ca792d25
        </Text>

        <Text
          style={styles.key}
          selectable={true}>
          4 - 04e9e6b61ed3d3e2723735598e614ed26b5167
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#262c49'
  },
  content: {
    padding: 10,
    backgroundColor: '#262c49',
    marginBottom: 15
  },
  image: {
    borderRadius: 5,
    alignSelf: 'center',
    height: 200,
    width: 300
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  description: {
    color: '#fff'
  },
  keysContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#10163a',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20
  },
  key: {
    color: '#fff',
    marginVertical: 10
  }
});

export default GameLicenses;