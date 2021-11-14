import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import icons from '../../constants/icons';
const ListItem = props => {
  const [qty, setQty] = useState(null);
  const [unit, setUnit] = useState(null);
  const [price, setPrice] = useState(props.item.selling_price);
  useEffect(() => {
    var regex = new RegExp('([0-9]+)|([a-zA-Z]+)', 'g');
    var splittedArray = props.item.attribute.match(regex);
    var num = splittedArray[0];
    setQty(num);
    var text = splittedArray[1];
    setUnit(text);
  }, []);
  const increment = unit => {
    var num1 = Number(props.item.attribute.match(/(\d+)+/g));
    var num2 = Number(unit);
    var up = Number(props.item.selling_price);
    var currentCost = Number(price);
    var newValue = num1 + num2;
    var totalCost = currentCost + up;
    setQty(newValue);
    setPrice(totalCost);
  };
  const decrement = unit => {
    var num1 = Number(props.item.attribute.match(/(\d+)+/g));
    var num2 = Number(unit);
    var newValue = num2 - num1;
    var up = Number(props.item.selling_price);
    var currentCost = Number(price);
    if (newValue >= num1) {
      var totalCost = currentCost - up;
      setQty(newValue);
      setPrice(totalCost);
    }
  };
  const gotoDetailScreen = () => {
    props.navigation.navigate('DetailScreen', {
      item: props.item,
      price: price,
      qty: qty,
      unit: unit,
    });
  };
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          gotoDetailScreen();
        }}
        style={{flex: 0.4, alignItems: 'flex-start'}}>
        <Image
          style={style.image}
          source={{uri: `https://admin.maaxkart.com/${props.item.image}`}}
        />
      </TouchableOpacity>
      <View style={{marginLeft: 10, flex: 0.7, alignItems: 'flex-start'}}>
        <Text style={style.title}>{props.item.pro_name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={style.icon} source={icons.location} />
          <Text style={style.subText}>
            {props.item.company_name + ' (' + props.item.taluk + ')'}
          </Text>
        </View>
        <Text style={[style.subText]}>
          {'Category - ' + props.item.category_name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={style.subText}>{'Quantity   '}</Text>

          <TouchableOpacity
            onPress={() => {
              decrement(qty);
            }}>
            <Text style={style.plus}>-</Text>
          </TouchableOpacity>
          <Text style={style.subText}>{'  ' + qty + unit + '  '}</Text>
          <TouchableOpacity
            onPress={() => {
              increment(qty);
            }}>
            <Text style={style.plus}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.subText}>
          {'Unit Price - ' + props.item.selling_price + 'Rs'}
        </Text>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              gotoDetailScreen();
            }}
            style={style.btn}>
            <Text style={style.btnText}>{'Add To Cart'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              gotoDetailScreen();
            }}
            style={[style.btn, {marginLeft: 5}]}>
            <Text style={style.btnText}>{'Buy For ' + price + 'Rs'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ListItem;
