
import React, {useState} from 'react';
import { View, Text ,Linking, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar,Button, Icon } from 'react-native-elements';

const AboutScreen = () => {
  const handleEmailPress = () => {
    const email = 'avielmbe@gmail.com';
    const subject = 'אהלן! רציתי להגיד משהו על האפליקציה';
    const body = 'מה נשמע?';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url);
  };

  const handleWhatsAppPress = () => {
    const phone = '+972546647042';
    const text = 'מה נשמע?';
    const url = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;

    Linking.openURL(url);
  };
  // const sourceData = [
  //   { title: 'פניני הלכה', url: 'https://ph.yhb.org.il/category/%D7%9B%D7%A9%D7%A8%D7%95%D7%AA-%D7%91/17-33/' },
  //   { title: 'ישיבה', url: 'https://www.yeshiva.org.il/' },
  //   { title: 'מכון התורה והארץ', url: 'https://www.toraland.org.il/' },
  //   { title: 'כושרות', url: 'https://www.kosharot.co.il/' },
  //   { title: 'הידברות', url: 'https://www.hidabroot.org/' },
  //   { title: 'חב׳׳ד בתנופה', url: 'https://www.hametz.co.il/' },
  // ];
  // const handleOpenURL = (url) => {
  //   Linking.openURL(url);
  // };
  const colors = {
  primary: '#264653',
  secondary: '#2a9d8f',
  third: '#e9c46a',
};


return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.section}>
      <Text style={{fontFamily: 'Heebo', fontSize: 11}}>בסייעתא דשמיא</Text>
        <Text style={styles.title}>Kashl-App</Text>
        <Text style={styles.subtitle}>Version 1.0.0</Text>
        <Avatar
          rounded
          source={require('../assets/Logo1.png')}
          style={styles.avatar}
        />
        <Text style={styles.text}>פיתוח ועיצוב:</Text>
        <Text style={styles.text}> אביאל בן אליהו</Text>
        <Text style={styles.text}>כל הזכויות שמורות</Text>
        <Text style={styles.text}>
            יש לכם רעיונות לשיפור?  הערות הלכתיות? או לכל דבר אחר:
        </Text>
        <Text style={styles.text}>
            מוזמנים לפנות בשמחה:
        </Text>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'space-between'  }}>
        <Button
          icon={
            <Icon
              name='envelope'
              type='font-awesome'
              color='#f50'
              size={15}
            />
          }
          title=" AvielmBE@gmail.com"
          onPress={handleEmailPress}
          buttonStyle={{ marginBottom: 2 }}
        />
        <Button
          icon={
            <Icon
              name='whatsapp'
              type='font-awesome'
              color='#25D366'
              size={15}
            />
          }
          title="לשליחת ווטסאפ"
          onPress={handleWhatsAppPress}
        />
      </View>
      {/* <ScrollView> */}
      <View style={styles.section}>
        <Text style={styles.text}>
          האפליקציה נועדה לזיכוי הרבים. האחריות ההלכתית והפיזית בשימוש האפליקציה על המשתמש בלבד
        </Text>
        <Text style={styles.text}>
          במקרה של ספק, תמיד כדאי להיוועץ ברב. ויש לנהוג בזהירות בעת הכשרת הכלים.
        </Text>
      </View>

      {/*
      <View style={styles.linkList}>
        <Text style={styles.subtitle}>מקורות הלכתיים:</Text>
        <FlatList
          data={sourceData}
          renderItem={({ item }) => (
            <Text key={item.title} onPress={() => handleOpenURL(item.url)} style={styles.linkText}>
              {item.title}
            </Text>
          )}
        />
      </View> */}
      {/* </ScrollView> */}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Heebo',
    fontSize: 26,
    color: '#023047',
    textAlign: 'right'
    
  },
  subtitle: {
    fontFamily: 'Heebo',
    fontSize: 20,
    color: '#023047',
    
  },
  text: {
    fontFamily: "Heebo",
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'stretch'
    
    
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 0,
    width: '100%',
  },
  emailButton: {
    backgroundColor: '#264653',
  },
  whatsappButton: {
    backgroundColor: '#2a9d8f',
  },
  buttonText: {
    color: '#fff',
  },
  linkList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  linkText: {
    fontFamily: 'Assistant',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },},
});



export default AboutScreen;


// import React from 'react';
// import { Button, Text, View, Image } from 'react-native';


// const AboutScreen = ({ navigation }) => {
//   const aboutImage = require('../assets/screens/About.png')
//   const pathImage = require('../assets/screens/About.png')
//   const URLImage = {uri: 'https://reactjs.org/logo-og.png'}


//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Welcome to Your About!</Text>
//       <Text>
//         ותר מידי הלכות?
//         לא זוכרים מה עושים?
//         הכל נראה מסובך מידי?

//         בשביל הורדתם את kashlapp

//         אפליקציות ההלכות הפשוטה והנוחה
//         שתעשה לכם סדר בפסח..

//         נכנסים לכי הרצוי, קוראים, מכשירים.

//         אפליקציית kashlapp
//         נוצרה על ידי אביאל בן אליהו
//         fullstack web and mobile developer

//         יש לכם רעיונות לשיפור?
//         הערות הלכתיות?
//         שאלות?

//         אל תהססו ליצור קשר איתנו:

        
//       </Text>
//       <Image source={URLImage}
//        style={{width: 400, height: 400}} />
//       <Image source={pathImage}
//       style={{width: 400, height: 400}} />

//       <Button title="Go Back to Home" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// export default AboutScreen;
