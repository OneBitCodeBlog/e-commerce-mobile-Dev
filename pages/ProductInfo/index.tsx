import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import productImage from '../../assets/product_image.png';
import Badge from '../../components/Badge';

import { useNavigation } from '@react-navigation/core';
import useSWR from 'swr';
import ProductService from '../../services/product';
import { format, parseJSON } from 'date-fns';

const ProductInfo: React.FC = () => {
  const navigation = useNavigation();

  const { data, error } = useSWR(
    `storefront/v1/products/${navigation.getState().routes[1]?.params?.id}`,
    ProductService.show
  );

  useEffect(() => {
    if (error) {
      alert(error);
      console.log(error);
    }
  }, [error]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}>
      
      <Image
        source={{ uri: data?.image_url}}
        style={styles.image}
      />

      <View>
        <Text style={styles.title}>
          {data?.name}
        </Text>

        <View style={styles.categories}>
          {
            data?.categories?.map(
              category => 
              <Badge text={category.name} key={category.id}/>
            )
          }
        </View>

        <Text style={styles.description}>
          {data?.description}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.developerInfo}>
          <View style={styles.infoData}>
            <Text style={styles.boldText}>Desenvolvedora</Text>
            <Text style={styles.whiteText}>{ data?.developer }</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Modo</Text>
            <Text style={styles.whiteText}>
              {
                data?.mode === 'both' ? 'PVP e PVE' : data?.mode
              }
            </Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Status</Text>
            <Text style={styles.whiteText}>
              {
                data?.status === 'available' ? 'Disponível' : 'Indisponível'
              }
            </Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.infoData}>
            <Text style={styles.boldText}>Lançamento</Text>
            <Text style={styles.whiteText}>
              {
                data?.release_date && 
                  format(parseJSON(data.release_date), 'dd/MM/yyyy')
              }
            </Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Vendidos</Text>
            <Text style={styles.whiteText}>{ data?.sells_count }</Text>
          </View>

          <View style={styles.infoData}>
            <Text style={styles.boldText}>Favoritado</Text>
            <Text style={styles.whiteText}>{ data?.favorited_count }</Text>
          </View>
        </View>
      </View>

      <View style={styles.systemRequirementsContainer}>
        <Text style={styles.title}>
          Requisitos do Sistema
        </Text>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>SO: </Text>
          <Text style={styles.whiteText}>{ data?.system_requirement?.operational_system }</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Armazenamento: </Text>
          <Text style={styles.whiteText}>{ data?.system_requirement?.storage }</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Processador: </Text>
          <Text style={styles.whiteText}>{ data?.system_requirement?.processor }</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Memória: </Text>
          <Text style={styles.whiteText}>{ data?.system_requirement?.memory }</Text>
        </View>

        <View style={styles.systemRequirementsData}>
          <Text style={styles.boldText}>Placa de Vídeo: </Text>
          <Text style={styles.whiteText}>{ data?.system_requirement?.video_board }</Text>
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