import React from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { withNavigation } from 'react-navigation'

const { height, width } = Dimensions.get('window')

const MyComponent = ({ navigation, children, flag }) => (
  <TouchableHighlight
    onPress={() => {
      navigation.navigate('Chat', { user: flag })
    }} {...this.props}>
    {children}
  </TouchableHighlight>
)

const MyComponentWithNavigation = withNavigation(MyComponent);

class HomeHH extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    activeSlide: 0,
    viewport: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    entries: [
      {
        title: '111111111111111111111111111111',
        id: '001',
        src: 'http://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
        path: '/intro'
      },
      {
        title: '222222222222222222222222222222',
        id: '002',
        src: 'http://img2.mukewang.com/szimg/5909a1250001197e05400300.jpg',
        path: '/intro'
      },
      {
        title: '333333333333333333333333333333',
        id: '003',
        src: 'http://img3.mukewang.com/szimg/59eeb17200013f8605400300.jpg',
        path: '/intro'
      }
    ]
  }
}

  _renderItem ({item, index}) {
    return (
      //TODO 这个传query参数
      <MyComponentWithNavigation flag={item.id} >
        <View key={index}
          onPress={() => (console.log('pressed....'))}
          onClick={() => (console.log('click....'))}
          >
        <Image
          source={{uri: item.src}}
          style={{width: width, height: (height / 3)}}
          resizeMode='cover'
          onPress={() => (console.log('pressed..in image..'))}
         />
        </View>
      </MyComponentWithNavigation>
    )
  }

  get pagination () {
      const { entries, activeSlide } = this.state;
      return (
          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      )
  }
  componentDidMount(){
    console.log('....this.ref', this._carousel)
  }

  render () {
    const { to, navigation } = this.props
    console.log(to)
    console.log(navigation)
      return (
        <View
          onLayout={() => {
              this.setState({
                  viewport: {
                      width: Dimensions.get('window').width,
                      height: Dimensions.get('window').height
                  }
              });
          }}
          onPress={() => (console.log('pressed..in View..'))}
          >
          <Carousel
            onPress={() => (console.log('pressed..in carousel..'))}
            autoplay={true}
            loop={true}
            ref={(c) => { this._carousel = c }}
            data={this.state.entries}
            renderItem={this._renderItem}
            // sliderWidth={sliderWidth}
            sliderWidth={this.state.viewport.width}
            itemWidth={this.state.viewport.width}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            onSnapToItem={(index) => {console.log('scroll index', index)}}
            // onPress={() => { this.refs._carousel.snapToNext(); }}
          />
        { this.pagination }
        <Text
            onPress={() => (console.log('pressed..in Text..'))}
            style={{fontSize: 20}}
            >world</Text>
      </View>
      )
  }
}

export default withNavigation(HomeHH)
