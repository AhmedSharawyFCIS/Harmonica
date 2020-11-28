import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
import { Colors,countryCodes } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

class Register extends Component 
{

    state = {phoneNumber:"",countryCodeIndex:0}

    handlePhoneNumber = (phoneNumber) =>{

        if(!isNaN(phoneNumber)) 
        {
            this.setState({phoneNumber})
        }
    }

    pickerHandler = (value,index) => {

        this.setState({countryCodeIndex:index})

        
    }

    buttonHandler = () => {

        let phoneNumber = countryCodes[this.state.countryCodeIndex].key + " " + this.state.phoneNumber


        this.props.navigation.navigate("confirmRegister",{phoneNumber})
    }
    render()
    {

        const disabledButtonStyle = {

            backgroundColor:Colors.disabledButtonColor,
            elevation:0
        }

        const disableButtonTextStyle = {

            color:Colors.dark,
            opacity:0.4
        }

        const disableButton = this.state.phoneNumber.length >= 10 ? false : true

        
        return (

            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView   
                    keyboardShouldPersistTaps='always'
                    contentContainerStyle={{flexGrow:1}}>
                    <View style={styles.container}>
                        <View style={styles.progressContainer}>
                            <LinearGradient colors={["#00DEEB", "#B1FBFF"]} start={{ x: 1, y: 0 }} end={{ x: 0.1, y: 1 }} style={styles.progress}/>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.header}>What's your phone number?</Text>
                            <View style={styles.inputContainer}>
                                

                                <Dropdown
                                        containerStyle={styles.picker}
                                        inputContainerStyle={styles.pickerInputContainer}
                                        fontSize={20}
                                        baseColor={Colors.dark}
                                        data={countryCodes}
                                        animationDuration={0}
                                        rippleDuration={10}
                                        value={countryCodes[this.state.countryCodeIndex].value}
                                        onChangeText={this.pickerHandler}
                                    />
                                <TextInput 
                                    style={styles.textInput} 
                                    keyboardType="decimal-pad"
                                    textAlignVertical="bottom"
                                    value={this.state.phoneNumber}
                                    onChangeText={this.handlePhoneNumber}/>
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity 
                                    style={[styles.button,disableButton&&disabledButtonStyle]} 
                                    disabled={disableButton}
                                    onPress={this.buttonHandler}>
                                        {disableButton?
                                        <Text style={[styles.buttonText,disableButton&&disableButtonTextStyle]}>Send Code</Text>
                                        :
                                        <LinearGradient colors={["#00EAAC", "#00EAAE","#00DEEB"]} start={{ x: 1, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.button}>
                                             <Text style={[styles.buttonText,disableButton&&disableButtonTextStyle]}>Send Code</Text>
                                        </LinearGradient>}
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                 </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({

    container:{

        flex:1
    },
    progressContainer:{

        height:8
    },
    progress:{

        width:61,
        height:8
    },

    content:{

        backgroundColor:Colors.white,
        flex:1,
        
    },

    header:{

        marginTop:81,
        marginLeft:34,
        marginRight:29,
        fontSize:28,
        fontFamily:"SkolarSans-Regular",
        color:Colors.dark,
        fontWeight:"400"
    },
    inputContainer:{

        marginTop:89,
        flexDirection:"row",
       
        
    },

    picker:{

        width:110,
        height:40,
        marginLeft:58,
        marginRight:6,
        marginBottom:28
    },

    
    pickerInputContainer:{
        borderBottomWidth:1,
        borderBottomColor:Colors.divider
    },
    textInput:{

        marginRight:40,
        borderBottomColor:Colors.divider,
        borderBottomWidth:1,
        flex:1,
        color:Colors.dark,
        fontFamily:"SkolarSans-Regular",
        fontWeight:"400",
        fontSize:24,
        
    
    },
    buttonContainer:{

        flex:1,
        justifyContent:"flex-end",
        marginBottom:16,
        marginTop:88,
        alignItems:"center",
        marginLeft:28,
        marginRight:28
    },

    button:{

        // backgroundColor:Colors.primary,
        width:"100%",
        height:56,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:4 },
        shadowOpacity: 0.1,
        shadowRadius: 16,  
        elevation:1
    },

    buttonText:{

        fontSize:16,
        color:Colors.white,
        fontFamily:"SkolarSans-Regular"
    }

})

export default Register;