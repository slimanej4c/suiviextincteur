import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUnit, checkMemberExistence } from '../../../redux';
import { Picker } from '@react-native-picker/picker';
import { Text, View, StyleSheet, TextInput, Button, Modal, ScrollView, ActivityIndicator } from 'react-native';

export const Add_unite = (props) => {
  const [unitName, setUnitName] = useState('');
  const [unitDescription, setUnitDescription] = useState('');
  const [unitLocation, setUnitLocation] = useState('');
  const [unitType, setUnitType] = useState('');
  const [unitMembers, setUnitMembers] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState('');
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState('zs');
  const [newMemberRole, setNewMemberRole] = useState('');
  const [showErrorAddUnit, setshowErrorAddUnit] = useState('');
  const [memberExistenceMessage, setMemberExistenceMessage] = useState('');
  const createUnit = () => {
    // Vérifier que les champs obligatoires sont remplis
    if (!unitName || !unitLocation) {
      alert('Veuillez remplir les champs obligatoires (Nom de l\'entreprise et Localisation de l\'entreprise)');
      return;
    }
    // Logique pour créer une nouvelle unité avec les données fournies par l'utilisateur
    const unitData = {
      name: unitName,
      description: unitDescription,
      location: unitLocation,
      type: unitType,
      members: unitMembers,
      emergencyContacts: emergencyContacts,
    };
    props.addUnit(unitData);
  };

  const addMember = () => {
    // Ajouter le nouveau membre à la liste des membres de l'unité
    props.checkMemberExistence (newMemberName)
   // setUnitMembers([...unitMembers, { name: newMemberName, role: newMemberRole }]);
    // Réinitialiser les champs de saisie du nouveau membre

  };


  useEffect(() => {
    if (props.checkMemberExists) {
        setNewMemberName('');
        setNewMemberRole('');
        // Fermer la fenêtre modale d'ajout de membre
        setShowAddMemberModal(false);
        setMemberExistenceMessage('');
      }
      if (props.checkMemberError!=null) {
        const a= 'Ce membre n\'existe pas'+newMemberName
        setMemberExistenceMessage(a);
      }
      
      console.log('check membre ..',props.checkMemberLoading,props.checkMemberExists)

  }, [props.checkMemberLoading]);
  useEffect(() => {
    

  }, [showAddMemberModal]);
  useEffect(() => {
    

  }, [showErrorAddUnit]);
  useEffect(() => {
    
    if (props.is_addUnit) {
        setshowErrorAddUnit('unit added')
      }
      if (props.addUnitError!=null) {
        setshowErrorAddUnit('error added')
      }
      
      console.log('check add unit..',props.is_addUnit,props.addUnitError)
  }, [  props.addUnitLoading]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nom de l'entreprise *:</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={unitName}
          onChangeText={setUnitName}
          placeholder="Entrez le nom de l'entreprise"
          placeholderTextColor="red"
        />
        
        <Text style={styles.label}>Description de l'unité :</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={unitDescription}
          onChangeText={setUnitDescription}
          placeholder="Entrez la description de l'unité"
          placeholderTextColor="gray"
        />
        
        <Text style={styles.label}>Localisation de l'entreprise *:</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={unitLocation}
          onChangeText={setUnitLocation}
          placeholder="Entrez la localisation de l'entreprise"
          placeholderTextColor="red"
        />
        
        <Text style={styles.label}>Type d'unité :</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={unitType}
          onChangeText={setUnitType}
          placeholder="Entrez le type d'unité"
          placeholderTextColor="gray"
        />

        <Text style={styles.label}>Membres de l'unité :</Text>
        {unitMembers.map((member, index) => (
          <Text key={index}>{member.name} - {member.role}</Text>
        ))}
        <Button title="Ajouter Membre" onPress={() => setShowAddMemberModal(true)} color="red" />
        
        <Text style={styles.label}>Contacts en cas d'urgence :</Text>
        <TextInput
          style={[styles.input, styles.textInput]}
          value={emergencyContacts}
          onChangeText={setEmergencyContacts}
          placeholder="Entrez les contacts en cas d'urgence"
          placeholderTextColor="gray"
        />

        <Button title="Créer l'unité" onPress={createUnit} color="red" />
   
        {props.addUnitLoading && <View style={{position:'absolute',top:'40%',right:"50%"}}><ActivityIndicator size="large" color="red" />     </View>}
       
        <Text style={styles.message}>{ showErrorAddUnit}</Text>
        <Modal visible={showAddMemberModal} animationType="slide" transparent={true}>
          <View style={[styles.modalContainer, styles.shadow, styles.textInput]}>
            <Text style={styles.label}>Nom du Membre (code utilisateur @code) :</Text>
            <TextInput
              style={[styles.input, styles.textInput]}
              value={newMemberName}
              onChangeText={setNewMemberName}
              placeholder="Entrez le nom du membre"
              placeholderTextColor="red"
            />
            <Text style={styles.label}>Rôle du Membre :</Text>
            <Picker
              selectedValue={newMemberRole}
              onValueChange={(itemValue, itemIndex) => setNewMemberRole(itemValue)}
              style={[styles.picker, styles.textInput]}
              itemStyle={{ backgroundColor: 'red' }}
            >
              <Picker.Item label="Sélectionnez le rôle du membre" value="" />
              <Picker.Item label="Lire" value="Lire" />
              <Picker.Item label="Écrire" value="Écrire" />
            </Picker>
            <Button title="Ajouter" onPress={addMember} color="red" />
            {props.checkMemberLoading && <ActivityIndicator size="small" color="red" />}
            <Text style={styles.message}>{memberExistenceMessage}</Text>
            <Button title="Annuler" onPress={() => setShowAddMemberModal(false)} color="red" />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 50,
    borderRadius: 10,
    elevation: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    backgroundColor: 'white',
  },
  message:{

    
  }
});

const mapStateToProps = (state) => {
  return {
    addUnitLoading: state.add_project_reducer.addUnitLoading,
    addUnitError: state.add_project_reducer.addUnitError,
    checkMemberLoading: state.add_project_reducer.checkMemberLoading,
    checkMemberExists: state.add_project_reducer.checkMemberExists,
    checkMemberError: state.add_project_reducer.checkMemberError,
    is_addUnit: state.add_project_reducer.is_addUnit,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUnit: (unitData) => dispatch(addUnit(unitData)),
    checkMemberExistence: (code_utilisateur) => dispatch(checkMemberExistence(code_utilisateur)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add_unite);
