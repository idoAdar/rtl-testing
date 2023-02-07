import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import TextElement from './services/components/TextElement';

const App = () => {
  const {t, i18n} = useTranslation();

  const onPress = () => {
    i18n.changeLanguage('ar');
  };

  const isRtl = () => {
    console.log(I18nManager.isRTL);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TextElement>{t('country')}</TextElement>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>Change Lang</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={isRtl} style={styles.button}>
        <Text style={styles.textButton}>Check rtl</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    fontSize: 16,
  },
  button: {
    alignSelf: 'center',
    padding: 16,
    backgroundColor: 'blue',
  },
  textButton: {
    color: 'white',
  },
});

export default App;
