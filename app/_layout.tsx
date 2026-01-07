import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Pantalla principal */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Pantalla de login sin header */}
      <Stack.Screen name="login" options={{ headerShown: false }} />

      {/* Otras pantallas */}
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
      <Stack.Screen name="reservas" options={{ title: "Reservas" }} />
      <Stack.Screen name="mapa" options={{ title: "Mapa" }} />
    </Stack>
  );
}
