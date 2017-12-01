import React from 'react'
import {
  View,
  Text,
  Dimensions,
  Image
} from 'react-native'
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window')
export default class HomeHH extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
        viewport: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
        entries: [
          {
            title: '111111111111111111111111111111',
            src: 'http://img3.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
            path: '/intro'
          },
          {
            title: '222222222222222222222222222222',
            src: 'http://img2.mukewang.com/szimg/5909a1250001197e05400300.jpg',
            path: '/intro'
          },
          {
            title: '333333333333333333333333333333',
            src: 'http://img3.mukewang.com/szimg/59eeb17200013f8605400300.jpg',
            path: '/intro'
          }
        ]
    };
}
    _renderItem ({item, index}) {
        return (
            <View>
                <Image
                  source={{uri: item.src}}
                  style={{width: width, height: (height / 3)}}
                  resizeMode='cover'
                 />
            </View>
        );
    }

    render () {
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
            >
            <Carousel
              autoplay={true}
              loop={true}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              // sliderWidth={sliderWidth}
              sliderWidth={this.state.viewport.width}
              itemWidth={this.state.viewport.width}
            />
        </View>
        );
    }
}
// import Carousel from 'react-native-looped-carousel'
//
// const { width, height } = Dimensions.get('window')
//
// export default class Home extends React.Component {
//   constructor(props) {
//    super(props);
//
//    this.state = {
//      size: { width, height },
//    };
//  }
//
//  _onLayoutDidChange = (e) => {
//    const layout = e.nativeEvent.layout;
//    this.setState({ size: { width: layout.width, height: layout.height } });
//  }
//
//  render() {
//    return (
//      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
//        <Carousel
//          delay={2000}
//          style={this.state.size}
//          autoplay
//          pageInfo
//          onAnimateNextPage={(p) => console.log(p)}
//        >
//          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
//          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
//          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
//        </Carousel>
//        <Text>H</Text>
//      </View>
//    );
//  }
// }
