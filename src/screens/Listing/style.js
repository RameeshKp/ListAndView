import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginVertical: 15,
    color: '#173756',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 45,
    marginBottom: 10,
  },
  inputBox: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '500',
    color: '#585858',
    backgroundColor: '#E6E6E6',
    width: (Dimensions.get('window').width - 100) / 2,
    borderRadius: 10,
    borderColor: '#99110c',
    borderWidth: 1,
  },
  emptyText: {
    fontWeight: '400',
    fontSize: 15,
  },
  fliter: {
    padding: 10,
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#99110c',
    borderWidth: 1,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    color: '#99110c',
    fontWeight: '500',
    lineHeight: 18,
  },
});
