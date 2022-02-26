import React from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HeaderButton = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.logo} source={require('../assets/kazok.jpeg')} />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png',
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(202, 202, 202, 0.25)',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: '3%',
    marginRight: 10,
    justifyContent: 'space-between', //allows to sperate left-right
    alignitems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  logo: {
    //left logo
    width: 120,
    height: 25,
    marginTop: '2%', //move logo
    marginLeft: '3%',
  },

  iconContainer: {
    //group of icons at left side
    flexDirection: 'row',
  },

  icon: {
    //account icon
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: '2%',
    marginTop: '4%',
  },
});
export default HeaderButton;
