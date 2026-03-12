import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons 
                        name= { focused ? "home" : "home-outline"}
                        color={color}
                        size={size} />
                )
            }}
            />

            <Tabs.Screen name="content" options={{
                title: "Content",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name= { focused ? "book" : "book-outline"}
                        color={color}
                        size={size} />
                ),
            }} />

            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons
                        name= "help" 
                        color={color}
                        size={size} />
                ),
            }} />
        </Tabs>
    );
}
