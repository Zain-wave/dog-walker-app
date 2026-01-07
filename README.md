# Pets App - Marketplace de Paseadores de Perros

**Descripción**
Pets App es una aplicación móvil desarrollada en **React Native** con **Expo Router** y **TypeScript**, que permite a los usuarios contratar paseadores de perros de manera sencilla y segura en Colombia. La app cuenta con autenticación, navegación basada en rutas, reservas y visualización de la ubicación de los paseadores.

---

## 📂 Estructura del Proyecto

```
my-dogwalker-app/
app/
│   index.tsx             # Punto de entrada principal de la aplicación
│   _layout.tsx           # Layout global para todas las rutas
│
├───(auth)               # Rutas de autenticación de usuarios
│       forgot-password.tsx  # Pantalla para recuperar contraseña
│       login.tsx            # Pantalla de inicio de sesión
│       register.tsx         # Pantalla de registro de usuario
│
├───(tabs)               # Navegación principal por pestañas
│       bookings.tsx       # Pantalla de reservas
│       home.tsx           # Pantalla principal / home
│       profile.tsx        # Perfil de usuario
│       _layout.tsx        # Layout específico de las pestañas
│
└───walker               # Funcionalidades específicas de los paseadores
        availability.tsx  # Gestión de disponibilidad del paseador
        earnings.tsx      # Visualización de ganancias
        requests.tsx      # Gestión de solicitudes de paseos
```

## ⚡ Tecnologías Utilizadas

- **React Native** con **TypeScript**
- **Expo Router** para navegación basada en carpetas
- **Stack Navigator** para pantallas apiladas
- **Firebase** o API personalizada para autenticación y reservas
- **Expo Vector Icons** para iconografía
- **Eslint y Prettier** para consistencia de código

---

## 🚀 Cómo Ejecutar la App

Sigue estos pasos para correr la app localmente:

### 1️⃣ Clonar el proyecto

```bash
git clone https://github.com/Zain-wave/dog-walker-app.git
cd dog-walker-app
```

### 2️⃣ Instalar dependencias

```bash
Usando npm:
npm install


O usando yarn:
yarn install
```

⚠️ Recomendado: Usar Node.js 20+ para evitar problemas con Expo y React Native.

- Se abrirá **Expo Dev Tools** en el navegador.
- Escanea el **QR** con la app Expo Go en tu dispositivo móvil o inicia un emulador (iOS/Android) desde la interfaz.

---

### 4️⃣ Navegación de prueba

- `/` → Pantalla principal
- `/login` → Login (pantalla completa, sin header)
- `/perfil` → Perfil del usuario
- `/reservas` → Reservas activas
- `/mapa` → Ubicación de los paseadores

> Nota: Las rutas se manejan automáticamente gracias a Expo Router y `_layout.tsx`.

---

## 🔧 Personalización

- Agrega tus propias APIs en `services/api.ts`.
- Configura autenticación en `services/auth.ts`.
- Personaliza estilos y componentes en la carpeta `components/`.
- Maneja tipos TypeScript en `types/index.ts`.

---

## 📝 Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo `LICENSE` para más información.
