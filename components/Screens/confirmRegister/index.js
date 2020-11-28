import React,{Component,createRef} from 'react';
import {View,Text,TextInput,TouchableOpacity,SafeAreaView,ActivityIndicator,StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Colors,countryCodes } from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';

class ConfirmRegister extends Component 
{

    state = {number1:"",number2:"",number3:"",number4:""}


    phoneNumber = this.props.route.params.phoneNumber;
    constructor(props)
    {
        super(props)
        this.number2 = createRef()
        this.number3 = createRef()
        this.number4 = createRef()
    }

    handleTextInput1 = (number1) => {

        if(!isNaN(number1))
        {
            this.setState({number1})
            this.number2.focus()
        }

    }

    handleTextInput2 = (number2) => {

        if(!isNaN(number2))
        {
            this.setState({number2})
            this.number3.focus()
        }

    }

    handleTextInput3 = (number3) => {

        if(!isNaN(number3))
        {
            this.setState({number3})
            this.number4.focus()
        }

    }

    handleTextInput4 = (number4) => {

        if(!isNaN(number4))
        {
            this.setState({number4})
            this.number4.blur()
        }

    }

    setTimeoutHandler = () => {

        setTimeout(()=>{

            this.props.navigation.navigate("home")
        },2500)
    }
    render()
    {

    

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
                            <Text style={styles.header}>What's the verification code?</Text>
                            <Text style={styles.subHeader}>Code sent to {this.phoneNumber}</Text>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>Resend Code</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rest}>
                            
                            {this.state.number1!=""&&this.state.number2!=""&&this.state.number3!=""&&this.state.number4!=""?

                            <View style={styles.textInputContainer} onLayout={this.setTimeoutHandler}>
                                <ActivityIndicator size="large" color={Colors.divider}/>
                            </View>
                            :
                            <View style={styles.textInputContainer}>
                                <TextInput 
                                    
                                    style={styles.textInput} 
                                    textAlignVertical="bottom"
                                    keyboardType="decimal-pad"
                                    maxLength={1} 
                                    value={this.state.number1}
                                    onChangeText={this.handleTextInput1}/>
                                <TextInput 
                                    ref={input2=>this.number2 = input2}
                                    style={styles.textInput} 
                                    textAlignVertical="bottom"
                                    keyboardType="decimal-pad"
                                    maxLength={1}
                                    value={this.state.number2}
                                    onChangeText={this.handleTextInput2}/>
                                <TextInput 
                                    ref={input3=>this.number3 = input3}
                                    style={styles.textInput} 
                                    textAlignVertical="bottom"
                                    keyboardType="decimal-pad"
                                    maxLength={1}
                                    value={this.state.number3}
                                    onChangeText={this.handleTextInput3}/>
                                <TextInput 
                                    ref={input4=>this.number4 = input4}
                                    style={styles.textInput} 
                                    textAlignVertical="bottom"
                                    keyboardType="decimal-pad"
                                    maxLength={1}
                                    value={this.state.number4}
                                    onChangeText={this.handleTextInput4}/>
                            </View>
                            }
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
    },

    header:{

        marginTop:81,
        marginLeft:34,
        marginRight:29,
        marginBottom:8,
        fontSize:28,
        fontFamily:"SkolarSans-Regular",
        color:Colors.dark,
        fontWeight:"400"
    },
    subHeader:{

        fontSize:16,
        color:Colors.dark,
        opacity:0.4,
        fontFamily:"SkolarSans-Regular",
        fontWeight:"400",
        marginLeft:34,
       
    },



    buttonText:{

        color:Colors.primary2,
        fontSize:14,
        fontWeight:"400",
        fontFamily:"SkolarSans-Bold",
        marginLeft:34,
    },

    rest:{

        flex:1,
        backgroundColor:Colors.white
    },
    textInputContainer:{

        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:Colors.white,
        marginTop:111
    },

    textInput:{

        width:45.53,
        height:40,
        color:Colors.dark,
        fontSize:20,
        fontFamily:"SkolarSans-Regular",
        fontWeight:"400",
        borderBottomColor:Colors.divider,
        borderBottomWidth:1,
        marginRight:6
    }
    
    

})

export default ConfirmRegister;