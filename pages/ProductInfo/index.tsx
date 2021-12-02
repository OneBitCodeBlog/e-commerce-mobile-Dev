import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import productImage from '../../assets/product_image.png';
import Badge from '../../components/Badge';

const ProductInfo: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}>
      
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

      <View style={styles.infoContainer}>
        <View style={styles.developerInfo}>
          <View style={styles.infoData}>
            <Text style={styles.boldText}>Desenvolvedora</Text>
            <Text style={styles.whiteText}>OneBitCode</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Modo</Text>
            <Text style={styles.whiteText}>PVE</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Status</Text>
            <Text style={styles.whiteText}>Disponível</Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.infoData}>
            <Text style={styles.boldText}>Lançamento</Text>
            <Text style={styles.whiteText}>10/10/2021</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Vendidos</Text>
            <Text style={styles.whiteText}>10</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Favoritado</Text>
            <Text style={styles.whiteText}>153</Text>
          </View>
        </View>
      </View>

      <View style={styles.systemRequirementsContainer}>
        <Text style={styles.title}>
          Requisitos do Sistema
        </Text>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>SO: </Text>
          <Text style={styles.whiteText}>Windows 7</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Armazenamento: </Text>
          <Text style={styles.whiteText}>5GB</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Processador: </Text>
          <Text style={styles.whiteText}>AMD Ryzen 7</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Memória: </Text>
          <Text style={styles.whiteText}>2GB</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Placa de Vídeo: </Text>
          <Text style={styles.whiteText}>N/A</Text>
        </View>
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
    marginBottom: 20
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
  infoContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#10163a',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  developerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 25
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  infoData: {
    alignItems: 'center',
    width: 120
  },
  systemRequirementsContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 25
  },
  systemRequirementsData: {
    flexDirection: 'row'
  },
  boldText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  whiteText: {
    color: '#fff',
    textTransform: 'capitalize'
  }
});

export default ProductInfo;