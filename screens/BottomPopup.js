import {Modal, Disensions, TouchableWithoutFeedback, StyleSheet , View , Text, Dimensions} 
from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { thisExpression } from '@babel/types'

const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }
    close = () =>{
        this.setState({show: flase})
    }
    renderOutsideTouchable (onTouch) {
        const view = <View style = {{flex: 1, width:'100%'}}/>
        if (!onTouch) return view

        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex:1, width:'100%'}}>
                {view}
                </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const {title} = this.props
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{
                    color:'#182E44',
                    fontSize:25,
                    fontWeight: '500',
                    fontSize:20,
                    marginTop:15,
                    marginBottom:30
                    }}>
                   
                    {title}
                </Text>
            </View>

        )
    }
    
    renderContent = () => {
        const {data} = this.props 
        return (
            <View>
                <FlatList
                    style={{marginBottom: 20}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{paddingBottom:40}}
                />
            </View>
        )
    }

    renderItem = ({item}) =>{
        return(
            <View style ={{height: 50, flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontSize:18, fontWeight:'normal',color:'#182E44'}}>{item.name}</Text>
            </View>
        )
    }

    renderSeparator = () => {
    
                <View
                    style={{
                    opacity: 0.1,
                    backgroundColor: '#182E44',
                    height:1
                 }}
                />
            }

    render(){
        let { show } = this.state
        const { onTouchOutside, title} = this.props

        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex:1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor:'#FFFFFF',
                        width:'100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4
                    }}>
                        
                    {this.renderTitle()}
                    {this.renderContent()}
                    </View>

                </View>

            </Modal>
        )
    }
}