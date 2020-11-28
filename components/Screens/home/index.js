import React,{Component} from 'react';
import {View,Text,Image,SafeAreaView,ScrollView,StyleSheet, TouchableOpacity,FlatList, ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, personalInformation,about} from '../../../constants'
class Home extends Component 
{

    componentDidMount()
    {
        this.props.navigation.setOptions({

            headerLeft:()=>
            
                (<TouchableOpacity style={{marginLeft:14}}>
                     <Image source={require('../../../assets/settingImage.png')} style={styles.iconStyle}/>
                </TouchableOpacity>)
        
            ,
            headerRight:()=>(
            <TouchableOpacity style={{marginRight:16}}>
                <Entypo name="dots-three-horizontal" size={24}/>
           </TouchableOpacity>)
        })
    }

    renderItem = (item,index) => {

        return(

            <View style={styles.itemContainer}>
                <Image source={item.icon} style={styles.iconList}/>
                <Text style={styles.textList}>{item.title}</Text>
            </View>
        )
    }
    render()
    {
        return (

           
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow:1}} >
                    <View style={styles.container}>
                        
                        <ImageBackground resizeMode="contain" source={require('../../../assets/profileImage.png')} style={styles.imageContainer}/>
                        <View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{personalInformation.name}</Text>
                                <Image source={require('../../../assets/badgeVerified.png')} style={[styles.iconStyle,{marginTop:9}]}/>
                            </View>
                            {personalInformation.age!==undefined&&<View style={styles.moreInfo}>
                                <Image source={require('../../../assets/ageImage.png')} style={styles.iconStyle2}/>
                                <Text style={styles.moreInfoText}>{personalInformation.age}</Text>
                            </View>}

                            {personalInformation.job!==undefined&&<View style={styles.moreInfo}>
                                <Image source={require('../../../assets/jobImage.png')} style={styles.iconStyle2}/>
                                <Text style={styles.moreInfoText}>{personalInformation.job}</Text>
                            </View>}

                            {personalInformation.location!==undefined&&<View style={styles.moreInfo}>
                                <Image source={require('../../../assets/locationImage.png')} style={styles.iconStyle2}/>
                                <Text style={styles.moreInfoText}>{personalInformation.location}</Text>
                            </View>}

                            {personalInformation.country!==undefined&&<View style={styles.moreInfo}>
                                <Image source={require('../../../assets/countryImage.png')} style={styles.iconStyle2}/>
                                <Text style={styles.moreInfoText}>{personalInformation.country}</Text>
                            </View>}
                        </View>

                        <View style={styles.paragraphStyle}>
                            <Text style={styles.paragraphText}>
                                I love reading, my fav tv show is friends and i like jazz music, english teacher, travelling around the world.
                            </Text>

                            <View style={styles.likeContainer}>
                                <TouchableOpacity style={styles.buttonLike}>
                                    <Image source={require('../../../assets/btnLike.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.about}>
                            <Text style={styles.aboutText}>About me</Text>
                            <FlatList 
                                data={about}
                                keyExtractor={item=>item.title}
                                renderItem={({item,index})=>this.renderItem(item,index)}
                                numColumns={2}
                                columnWrapperStyle={styles.columnWrapper}
                            />

                            <View style={styles.likeContainer}>
                                <TouchableOpacity style={styles.buttonLike}>
                                    <Image source={require('../../../assets/btnLike.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({


    iconStyle:{

        width:24,
        height:24,
        
    },

    iconStyle2:{

        width:20,
        height:20,
        marginRight:8
    },

    buttonLike:{

        width:48,
        height:48,
        marginTop:9,
        marginRight:8,
        marginBottom:8,
        backgroundColor:Colors.white,
        borderRadius:24,
        elevation:3,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height:4 },
        shadowOpacity: 0.1,
        shadowRadius: 16,  
    },

    container:{

        flex:1
    },

    imageContainer:{

        height:344,
        margin:16,
    },

    nameContainer:{

        flexDirection:"row",
        alignItems:"center",
        marginLeft:6.5
    },

    name:{

        color: Colors.dark,
        fontFamily:"SkolarSans-Regular",
        fontSize: 34,
        fontWeight: "400",
   
    },

    moreInfo:{

        marginLeft:24,
        flexDirection:"row",
        marginTop:5,
        alignItems:"center"
    },
    moreInfoText:{

        color: Colors.dark,
        fontFamily:"SkolarSans-Regular",
        fontSize: 16,
        fontWeight: "400",
   
    },

    paragraphStyle:{

        margin:16,
        backgroundColor:Colors.white,
        borderRadius:16
    },
    paragraphText:{

        marginTop:24,
        marginLeft:20,
        marginRight:20,
        fontFamily:"SkolarSans-Regular",
        fontSize: 16,
        fontWeight: "400",
        textAlign:"center"
    },

    about:{

        backgroundColor:Colors.white,
        borderRadius:16,
        marginLeft:16,
        marginRight:16,
        marginBottom:66
    },
    aboutText:{

        marginTop:24,
        marginBottom:1,
        fontFamily:"SkolarSans-Regular",
        fontSize: 16,
        fontWeight: "400",
        textAlign:"center"
    },
    itemContainer:{

        flexDirection:"row",
        alignItems:"center",
        marginRight:10,
        marginTop:10,
        backgroundColor:Colors.white,
        borderRadius:20,
        borderWidth:1,
        borderColor:Colors.border,
        
    },
    iconList:{
        width:24,
        height:24,
        marginLeft:14,
        marginRight:8
    },
    textList:{

        marginRight:13,
        marginTop:6,
        marginBottom:6,
        fontSize:14,
        fontWeight:"400",
        fontFamily:"SkolarSans-Regular",
    },

    likeContainer:{
        
        alignItems:"flex-end"
    },

    columnWrapper:{

        flex:1,
        justifyContent:"center"
    }
})

export default Home;