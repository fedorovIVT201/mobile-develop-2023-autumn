import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, SafeAreaView,TouchableOpacity,Image,FlatList} from 'react-native';
import Header from './components/Header';


export default function App() {

  const pages = ['Главная','Рекомендации','','Новая публикация','Que']
  const [page,setPage] = useState(0)
  const [stories, setStories] = useState([
    {name: 'Google', anons: 'Google привет', full: 'Google приветствует нас', key: '1',img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'},
    {name: 'Apple', anons: 'Apple привет', full: 'Apple приветствует нас', key: '2',img:'https://cheboksary.rebro-store.ru/upload/resize_cache/webp/upload/iblock/d56/d563a4964acb299cb0d85b2f0550513b.webp'},
    {name: 'Facebook', anons: 'Facebook привет', full: 'Facebook приветствует нас', key: '3',img:'https://www.internetmatters.org/wp-content/uploads/2021/03/facebook-logo-new.png'},
  ]);
  const [posts, setPosts] = useState([
    {name: 'Google', anons: 'Google привет', full: 'Google приветствует нас', key: '1',img:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'},
    {name: 'Apple', anons: 'Apple привет', full: 'Apple приветствует нас', key: '2',img:'https://cheboksary.rebro-store.ru/upload/resize_cache/webp/upload/iblock/d56/d563a4964acb299cb0d85b2f0550513b.webp'},
    {name: 'Facebook', anons: 'Facebook привет', full: 'Facebook приветствует нас', key: '3',img:'https://www.internetmatters.org/wp-content/uploads/2021/03/facebook-logo-new.png'},
  ]);

  title = pages[page]
  return (
    <SafeAreaView style={styles.main}>
      
      <StatusBar style="auto" />


      <Header title={title} page = {page}/>

      <View style={styles.stories}>

      </View>


      <View style={styles.lent}>
        <FlatList data={posts} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('FullInfo',item)}>
            <Image style={styles.image} source={{uri:item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}/>
      </View>





      <View style={styles.footer}>
            <TouchableOpacity onPress={()=>setPage(0)}>
                <Image 
                style={styles.icon}
                source={require('./assets/footer-icons/Home.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setPage(1)}>
                <Image 
                
                style={styles.icon}
                source={require('./assets/footer-icons/Rec.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setPage(2)}>
                <Image 
                
                style={styles.icon}
                source={require('./assets/footer-icons/NewPost.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setPage(3)}>
                <Image 
                
                style={styles.icon}
                source={require('./assets/footer-icons/Profile.png')}
                />
            </TouchableOpacity>
        </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  stories:{
    height:134,
    borderBottomLeftRadius:24,
    borderBottomRightRadius:24,
    backgroundColor:'white'
  },
  lent:{
    flex:1,
    marginTop:8,
    backgroundColor:'white'
  },
  footer:{
    alignSelf:'center',
    height:64,
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white'
},
title:{
    marginLeft: 20,
    fontFamily:'mp-eb',
    fontSize:28
},
icon:{
    width:30,
    height:30
}

});
