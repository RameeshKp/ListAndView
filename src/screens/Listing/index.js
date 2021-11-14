import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ListItem from '../../components/ListItem';
import style from './style';
import {useSelector, useDispatch} from 'react-redux';
import {getItems} from '../../actions/listing';
const Listing = props => {
  const renderItem = ({item}) => (
    <ListItem item={item} navigation={props.navigation} />
  );
  const emptyList = () => (
    <View style={{alignItems: 'center'}}>
      <Text style={style.emptyText}>No Products found</Text>
    </View>
  );
  const loader = () => (
    <View style={{alignItems: 'center'}}>
      <ActivityIndicator color="#173756" animating size="large" />
    </View>
  );
  const [searchText, setSeacrhText] = useState('');
  const [locationId, setLocationId] = useState('');
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.itemsList);
  const isLoading = useSelector(state => state.isLoading);
  useEffect(() => {
    dispatch(getItems(null));
  }, []);
  const filter=()=>{
    Keyboard.dismiss()
    const formdata = new FormData();
    if(searchText!=null&&searchText!='')
    formdata.append("keyword", searchText);
    if(locationId!=null&&locationId!='')
    formdata.append("location_id", locationId);
    if((searchText!=null&&searchText!='')||(locationId!=null&&locationId!=''))
    dispatch(getItems(formdata));
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Products</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.inputBox}
          placeholderTextColor="#6E6E6E"
          placeholder="Search by products"
          onChangeText={searchString => {
            setSeacrhText(searchString);
          }}
        />
        <TextInput
          style={[style.inputBox, {marginHorizontal: 5}]}
          placeholderTextColor="#6E6E6E"
          placeholder="Enter location Id"
          value={locationId}
          onChangeText={text => {
            setLocationId( text.replace(/[^0-9.]/g, ''));
          }}
        />
        <TouchableOpacity
        disabled={isLoading}
        onPress={()=>{filter()}}
          style={[style.fliter,isLoading?{opacity:.5}:null]}>
          <Text style={style.filterText}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
      {!isLoading ? <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
            }}></View>
        )}
        contentContainerStyle={{paddingVertical: 10}}
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={isLoading ? loader : emptyList}
      />: <View style={{alignItems: 'center'}}>
      <ActivityIndicator color="#173756" animating size="large" />
    </View>}
    </View>
  );
};
export default Listing;
