import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { FlashList } from '@shopify/flash-list';
import {Picker} from '@react-native-picker/picker';
import { Pressable, Text, View, StyleSheet, TextInput ,Button ,Modal } from 'react-native';
export const Unite = (props) => {
    const projects = [
        { id: 1, name: 'Projet 1', description: 'Description du projet 1' },
        { id: 2, name: 'Projet 2', description: 'Description du projet 2' },
        { id: 3, name: 'Projet 3', description: 'Description du projet 3' },
        // Ajoutez autant d'éléments que nécessaire
      ];
    
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Liste des Projets</Text>
          <FlashList
            renderItem={({ item }) => (
              <View style={styles.projectContainer}>
                <Text style={styles.projectName}>{item.name}</Text>
                <Text style={styles.projectDescription}>{item.description}</Text>
              </View>
            )}
            estimatedItemSize={50} // Taille estimée des éléments de la liste
            data={projects} // Les données à afficher dans la liste
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      projectContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      projectName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      projectDescription: {
        fontSize: 14,
      },
    });
    
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Unite)