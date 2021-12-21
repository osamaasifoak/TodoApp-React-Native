/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/routes/AppNavigator';
import SigninScreen from './src/screens/auth/SigninScreen';


export default class App extends React.Component {
	constructor(props: any) {
		super(props);
		// registerCustomIconType("strapp", Icon);
	}
	render() {
		return (
			// <Provider store={store}>
			// 	<ThemeProvider theme={AppTheme}>
			// 		<AppProvider>
			// 			<DeepLinkingProvider>
			// 				<FirebaseProvider>
			// 					<Host>
									<AppNavigator />
			// 						<GlobalBottomSheet />
			// 					</Host>
			// 				</FirebaseProvider>
			// 			</DeepLinkingProvider>
			// 		</AppProvider>
			// 	</ThemeProvider>
			// </Provider>
		);
	}
}

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//   const dimension = Dimensions.get("window");
//   return (
//     <AppNavigator />
//     // <SafeAreaView style={backgroundStyle}>
//     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//     //   <View style={{ height: dimension.height }}>
//     //     <SigninScreen />
//     //   </View>
//     // </SafeAreaView>
//   );
// };

// export default App;
