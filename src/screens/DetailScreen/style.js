import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#173756',
    fontWeight: '700',
    fontSize: 15,
  },
  subText: {
    color: '#173756',
    fontWeight: '400',
    fontSize: 12,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: '#173756',
  },
  plus: {
    fontSize: 20,
    color: '#173756',
    fontWeight: '600',
  },
  btn: {
    padding: 10,
    backgroundColor: '#173756',
    borderRadius: 10,
    width: (Dimensions.get('window').width - 30) / 2,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'contain',
  },
  back: {
    width: 20,
    height: 20,
    tintColor: '#000000',
    resizeMode: 'contain',
  },
  backContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 10,
  },
});
