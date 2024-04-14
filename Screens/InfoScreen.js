import React from 'react';
import { View, ScrollView, Text,FlatList,SectionList, StyleSheet } from 'react-native';
import { Linking } from 'react-native';


const Infoscreen = () => {
  const sourceData = [
    { title: 'פניני הלכה', url: 'https://ph.yhb.org.il/category/%D7%9B%D7%A9%D7%A8%D7%95%D7%AA-%D7%91/17-33/' },
    { title: 'ישיבה', url: 'https://www.yeshiva.org.il/' },
    { title: 'מכון התורה והארץ', url: 'https://www.toraland.org.il/' },
    { title: 'כושרות', url: 'https://www.kosharot.co.il/' },
    { title: 'הידברות', url: 'https://www.hidabroot.org/' },
    { title: 'חב׳׳ד בתנופה', url: 'https://www.hametz.co.il/' },
  ];
  const handleOpenURL = (url) => {
    Linking.openURL(url);
  };
  return (
    <ScrollView style={styles.container}>

      {/* Section 1 */}
      <Text style={styles.section}>הלכות הכשרת כלים הינם רחבים ומסובכים, ניסנו לתמצת פה את יסודות הדברים, ומצורף סיכום בטבלה המובאת למטה.</Text>

      {/* Section 2 */}
      <Text style={styles.title}>🤢הגעלת כלים?
</Text>
      <Text style={styles.section}>איסור חמץ בפסח הוא אחד האיסורים החמורים בתורה. וגם אם אנו לא צורכים ח׳׳ו חמץ בפסח, הכלים שבהם אנו משתמשים ספגו חמץ, ׳בלעו׳ בלשון חכמים, במהלך השנה.</Text>
      <Text style={styles.section}>למה הגעלה?</Text>
<Text style={styles.section}>כשאדם נגעל ממשהו הוא רוצה להוציא אותו החוצה.
ככה הגעלת חמץ מטרתה להוציא החוצה את החמץ הבלועה בכלי</Text>

       {/* Table Section */}
       <Text style={styles.title}>טבלת סיכום</Text>
      <View style={[styles.tableContainer, styles.shadow]}>
         <View style={[styles.row, styles.header]}>
           <Text style={[styles.cell, styles.headerCell]}>ליבון🔥</Text>
           <Text style={[styles.cell, styles.headerCell]}>הגעלה⛲️</Text>
           <Text style={[styles.cell, styles.headerCell]}>ניקוי🧽</Text>
           <Text style={[styles.cell, styles.headerCell]}>סוג ההכשרה:</Text>

         </View>
         <View style={styles.row}>
           <Text style={styles.cell}>צליה או בישול ישירות מאש גלויה</Text>
           <Text style={styles.cell}>נוזל רותח</Text>
           <Text style={styles.cell}>מאכלים קרים</Text>
           <Text style={styles.cell}>שימוש רגיל:</Text>

         </View>
         <View style={styles.row}>
           <Text style={styles.cell}>באמצעות ליבון באש גלויה</Text>
           <Text style={styles.cell}>באמצעות הגעלה, הכנסה לתוך, מים רותחים. לעיתים מספיק רק עירוי, כלומר שפיכת, מים רותחים.</Text>
           <Text style={styles.cell}>ניקוי חיצוני ויסודי</Text>
           <Text style={styles.cell}>צורת ההכשרה</Text>

        </View>
        <View style={styles.row}>
           <Text style={styles.cell}>מסוכן להכשיר לבד. עדיף לחפש מקום בו מבצעים הגעלת כלים</Text>
           <Text style={styles.cell}>כלים קטנים ניתן לקחת סיר גדול, להרתיח את המים לרמת ביעבוע, ואז באמצעות צבט להכניס ולהוציא. או ללכת למקום בו מגעילים כלים</Text>
           <Text style={styles.cell}>ניקוי יסודי באמצעות חומרי ניקוי שיפגמו את טעם החמץ</Text>
           <Text style={styles.cell}>איך מכשירים?</Text>

        </View>
      </View>
      
      {/* Section 3 */}
      <Text style={styles.title}>🤔למה?</Text>
      <Text style={styles.section}>מתכת מתרחבת בחום ומתקווצת בקור.
      כאשר מבשלים בטמפרטורה גבוה או בנוזלים רותחים, הכלי מתרחב מעט, ונכנסים בו שאריות קטנות של חמץ, כאשר מסיימים את הבישול, ההתרחבות נסגרת והחמץ נשאר בלוע בכלי. אם נשתמש בכלי כמו שהוא בפסח, אותם שאריות מזעריות של חמץ ילטו החוצה לתוך המאכל ויתערבבו חס חלילה במאכל הכשר לפסח. נכון אומנם שאלו שאריות קטנות, אבל חמץ בפסח גם בכמות קטנה ביותר, כאשר הוא מתבשל בחום הוא הופך את כל המאשכל לחמץ.
      </Text>
      <Text style={styles.section}>
      לעומת זאת, כאשר משתמשים בחמץ בדברים קרים, למעט פירורים, לא נשאר כלל שאריות מהחמץ, ולכן מספיק ניקוי חיצוני ויסודי. 
      </Text>
      
      
      {/* Section 4 */}
      <Text style={styles.title}>🧭איפה זה כתוב בתורה?</Text>
      <Text style={styles.section}>הגעלת כלים לא כתובה במפורש, אבל התורה כן מדברת על כלים בהם בישלו טרפות
      בחומש במדבר ושם רש׳׳י כותב בקצרה את כללי ההכשרה ״כדרך תשמישו, הגעלתו. מה שתמישו על ידי חמין יגעילנו בחמין..״
      </Text>
      
      {/* Section 5 */}
      <Text style={styles.title}>🛍 ואם אני קונה כלים חדשים לפסח?
      </Text>
      <Text style={styles.section}>מצוין, אבל לא מספיק.</Text>
      <Text style={styles.section}> לכתחילה הכי טוב להשתמש בכלים חדשים לפסח, אבל יש לא מעט כלים שלא ניתן לקנות סט מיוחד לפסח  (לא תחליף שיש או ברזים כל שנה, וגם תנור חדש). וגם לא תמיד יש אפשרות (מטבחים תעשייתים, הוצאה כלכלית, קולפן אבוקדו עתיק שעבר בירושה). לכן טוב לדעת ולרענן את הלכות הכשרת כלים.</Text>
      
      {/* Section 6 */}
      <Text style={styles.title}>כללים נוספים:</Text>
      <Text style={styles.title}>☑️רוב שימושו</Text>
      <Text style={styles.section}>לרוב הפוסקים הספרדים: הוכלים אחר רוב תשמישו של הכלי, ואם לפעמים נדירות השתמשו בטמפרטורה מקסימלית ובד״כ בטפרטורה גבוה - מכשירים לפי רוב שימוש
      לעומת זאת הפוסקים האשכנזזים: הולכים לפי החמור. כך שאפילו פעם שהשתמשו בטמפרות מקסימום - זו הטמפרטורה שבה יש להכשיר את המכשיר.
      </Text>
      
      {/* Section 7 */}
      <Text style={styles.title}>לאחר ההגעלה</Text>
      <Text style={styles.section}>לכתחילה רצוי להכניס למים צוננים (שהכלי המוכשר ׳ייסגר׳), בדיעבד גם בכלי זהה כלי כשר.
      בדרך כלל רצוי, שהכלי לא יהיה ״בן יומו״, כלומר שלא השתמשו בו ב24 שעות האחרונות.
      כאשר כלי לא בן יומו ניתן להגעיל כליים בשרים וחלבים יחד (נניח סכין בשרית עם סכין חלבי)
      </Text>

      {/* Section 8 */}
      <Text style={styles.title}>🆕אפילו פעם אחת</Text>
      <Text style={styles.section}>כלי שהתמשו בו לחמץ אפילו פעם אחת, צריך הכשרה לפסח.
      כלי שלא השתמשו בו מעולם הוא נחשב כשר לפסח
      </Text>


          {/* Section 10 */}
          <Text style={styles.title}>📞 תמיד טוב לשאול</Text>
      <Text style={styles.section}>ניסינו ללקט ממקורות שונים את עיקרי ההלכות, אך תמיד יכולים ליפול טעויות.
      בכל מקרה של ספק, תמיד מומלץ לשאול רב.
      יש גם מוקדים טלפונים בהם ניתן לקבל מענה הלכה מרב בכל קשה, ובכל עניין הלכתי:
      קו ההלכה של הידברות 073-333-3300
      מוקד ההלכות בית מרן  073-360-9616
      ואם מכירים מוקדים נוספים מוזמנים ליצור קשר ונוסיף בגרסה הבאה.
      </Text>

      {/* <Sources> */}
      <View style={styles.linkList}>
        <Text style={styles.title}>📚  מקורות הלכתיים </Text>
        <View>
          {sourceData.map((item) => (
            <Text key={item.title} onPress={() => handleOpenURL(item.url)} style={styles.linkText}>
              {item.title}
            </Text>
          ))}
        </View>
      </View>

      {/* <Notes */}
      <View style={styles.linkList}>
      <Text style={styles.title}>🔔 ונשרמתם</Text>

        <Text style={styles.section}>
          האפליקציה נועדה לזיכוי הרבים. האחריות ההלכתית והפיזית בשימוש האפליקציה על המשתמש בלבד. כמובן,
          יש לנהוג בזהירות בעת הכשרת הכלים.
        </Text>
      </View>

      {/* </ScrollView> */}



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingEnd: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Heebo',

  },
  section: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Heebo',
    // textAlign: 'left',
    textAlign: 'center',
    padding: 5,
    paddingHorizontal: 15,
    
  },
  table: {
    borderWidth: 2,
    borderColor: '#536DFE',
    borderRadius: 5,
    marginBottom: 20,
  },

  tableContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden', // Ensure shadow is within bounds
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},

  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#023047',
    padding: 10,
    fontSize: 12,
    fontFamily: 'Heebo',
    textAlign: 'left',
  },
  headerCell: {
    backgroundColor: 'lightblue',
    fontSize: 14, // Increase header cell font size
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
});

export default Infoscreen;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const InfoScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>כללים הלכתיים להגעלת כלים</Text>
//       <Text>הלכות הגעלת כלים הינם אורוכת ומסובכות. באפליקציה  נסביר בצורה בסיסית ללגמרי את הכללים ההלכתיים. כמובן אין תחליף ללמוד ההלכות לבד וויש לשאול רב בכל מקרה של ספק. וכמו כן יש לנהוג באחריות הלכתית ופיזית במהלך הכשרת הכלים</Text>
      

//       <View style={styles.table}>
//         <View style={[styles.row, styles.header]}>
//           <Text style={[styles.cell, styles.headerCell]}>חמץ שאנו רואים</Text>
//           <Text style={[styles.cell, styles.headerCell]}>חמץ בלוע שאנו לא רואים</Text>
//           <Text style={[styles.cell, styles.headerCell]}></Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>מספיק ניקוי יסודי</Text>
//           <Text style={styles.cell}>Data 2</Text>
//           <Text style={styles.cell}>Data 2</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>אנו רואים את החמץ</Text>
//           <Text style={styles.cell}>Data 4</Text>
//         </View>
//       </View>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   table: {
//     borderWidth: 2,
//     borderColor: '#536DFE',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#536DFE',
//     padding: 10,
//     fontSize: 16,
//   },
//   header: {
//     backgroundColor: '#536DFE',
//   },
//   headerCell: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// export default InfoScreen;
////////

// import React from 'react';
// import { Button, Text, View } from 'react-native';

// const InfoScreen = ({navigation}) => {
//   const oneImage = require('../assets/screens/One.jpeg')


//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>שלום וברוכים הבאים לאפליקצית ההכשרות לפס!ח!</Text>
//       <Button title="Go Back to Home" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// export default InfoScreen;
