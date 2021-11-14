import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#99110c',
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
    flexDirection:'row'
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  subText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 12,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor:'#FFFFFF'
  },
  image:{
    width:"100%",
    height:"100%",
  },
  plus:{
    fontSize:20,
    color:'#FFFFFF',
    fontWeight:'600'
  },
  btn:{
    padding:8,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    width:100,
  },
  btnText:{
    color:'#99110c',
    fontSize:10,
    textAlign:'center'
  }
});
