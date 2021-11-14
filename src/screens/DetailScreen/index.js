import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import icons from '../../constants/icons';
const DetailScreen = props => {
  const [item, setItem] = useState(props.route.params.item);
  const [qty, setQty] = useState(props.route.params.qty);
  const [unit, setUnit] = useState(props.route.params.unit);
  const [price, setPrice] = useState(props.route.params.price);
  return (
    <View style={style.container}>
      <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={style.backContainer}
          >
          <Image style={style.back} source={icons.back} />
        </TouchableOpacity>
      <View style={{flex: 0.3}}>
        
        <Image style={style.image} source={{uri:`https://admin.maaxkart.com/${item.image}`}} />
      </View>
      <View style={{marginLeft: 10, flex: 0.7, alignItems: 'flex-start',}}>
        <Text style={style.title}>{item.pro_name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={style.icon} source={icons.location} />
          <Text style={style.subText}>
            {item.company_name + ' (' + item.taluk + ')'}
          </Text>
        </View>
        <Text style={[style.subText]}>
          {'Category - ' + item.category_name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={style.subText}>{'Quantity -  ' + qty + unit }</Text>
        </View>
        <Text style={style.subText}>
          {'Unit Price - ' + item.selling_price + 'Rs'}
        </Text>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={style.btn}>
            <Text style={style.btnText}>{'Add To Cart'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.btn, {marginLeft: 5}]}>
            <Text style={style.btnText}>{'Buy For ' + price + 'Rs'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DetailScreen;
