import React, { useState } from 'react';
import { I18nManager, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Icon, Divider, CheckBox } from 'react-native-elements';
import utensilImages from '../assets/screens';

function UtensilScreen({ route }) {
  const { halachotData } = route.params || {};

  if (!halachotData) {
    return null;
  }

  const descriptions = ['description1', 'description2', 'description3', 'description4', 'description5'].map(desc => halachotData[desc]).filter(Boolean);
  const [checkedItems, setCheckedItems] = useState(Array(descriptions.length).fill(false));

  const handleCheckBoxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const descriptionEdot = ['descriptionEDOT1', 'descriptionEDOT2'].map(desc => halachotData[desc]).filter(Boolean);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{halachotData.name}</Text>

      <Image source={utensilImages[halachotData.image]} style={styles.image} />

      {/* Render descriptions */}
   
      <Text style={styles.subtitle}>צורת ההכשרה:</Text>
      {descriptions.map((desc, index) => (
        <View key={index} style={styles.descriptionRow}>
          <View style={styles.descriptionTextContainer}>
            <Text style={[
                styles.descriptionText,
                checkedItems[index] ? { textDecorationLine: 'line-through' } : null
              ]}
            >
              {`${desc.trim()}`}
            </Text>
          </View>
          <CheckBox
            checked={checkedItems[index]}
            onPress={() => handleCheckBoxClick(index)}
          />
        </View>
      ))}


    {/* Render descriptionEdot if it has content */}
    {descriptionEdot.length > 0 && (
      <>
        <Text style={styles.subtitle}>מנהגים ועדות:</Text>
        {descriptionEdot.map((desc, index) => (
          <Text style={styles.descriptionEdot} key={index}>{`• ${desc.trim()}`}</Text>
        ))}
      </>
    )}

      {halachotData.notes && (
        <View>
          <Divider style={styles.divider} />
          <Text style={styles.notesTitle}>הערות והסברים</Text>
          <Text style={styles.notesText}>{halachotData.notes}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Heebo',
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    fontFamily: 'Heebo',
    marginTop: 20,
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  descriptionTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  descriptionText: {
    fontSize: 18,
    textDecorationLine: 'none',
    fontFamily: 'Heebo',
    textAlign: 'center',
    alignSelf: 'stretch'

  },

  descriptionEdot: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Heebo',
    marginBottom: 6,
    // textAlign: 'left',
  },
  divider: {
    backgroundColor: '#ccc',
  },
  notesTitle: {
    textAlign: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  notesText: {
    textAlign: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
});

export default UtensilScreen;
