import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataInStore = async (key: string, data: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error storing data", error);
  }
};

export const getDataFromStore = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error get data", error);
  }
};

export const removeDataFromStore = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error get data", error);
  }
};
