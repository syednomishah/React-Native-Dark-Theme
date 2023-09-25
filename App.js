import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 flex justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar style={colorScheme=="dark"? "light": "dark"} />
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl dark:text-white">Dark Mode</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      
      <Text className="mx-4 text-justify" style={colorScheme=='dark'? styles.textWhite: styles.textBlack}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </Text>
      <View className="h-48 w-full bg-sky-400 dark:bg-emerald-400" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white'
  },
  textBlack: {
    color: 'black'
  }
});
