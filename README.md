<h1 align="center">🍽️ Tuğba's Recipe App 🍽️</h1>

<p align="center">
  <strong>A Modern Recipe Discovery Application</strong><br>
  <em>Developed by Tuğba Gündoğdu</em>
</p>

![Demo App](/mobile/assets/images//screenshot-for-readme.png)

## ✨ Project Highlights

- 🔐 **Full Authentication System** - Signup, Login, and 6-Digit Email Verification with Clerk
- 🍳 **Browse & Discover** - Featured Recipes & Filter by Categories
- 🔍 **Smart Search** - Find Recipes and View Detailed Cooking Instructions
- 🎥 **Video Tutorials** - Recipe Pages Include YouTube Video Integration
- ❤️ **Personal Favorites** - Add Recipes to Favorites and Access Them from Favorites Tab
- ⚡ **Modern Tech Stack** - React Native + Expo + Express + PostgreSQL
- 🎨 **Custom Design** - Beautiful UI with Tuğba's Custom Theme
- 🌈 **Multiple Color Themes** - Includes 9 Color Themes
- 🆓 **100% Free Tools** - No Paid Services Required

---

## 👩‍💻 About the Developer

**Tuğba Gündoğdu** - Full Stack Mobile Developer

This project showcases modern mobile development practices, including authentication, API integration, database management, and beautiful UI/UX design.

---

## 🧪 .env Setup

### Backend (`/backend`)

Create a `.env` file in the backend directory:

```bash
PORT=5001
DATABASE_URL=your_neon_db_url
NODE_ENV=development
```

### Mobile App (`/mobile`)

Create a `.env` file in the mobile directory:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- PostgreSQL database (Neon recommended)
- Clerk account for authentication

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will start on `http://localhost:5001`

### Mobile App Setup

```bash
cd mobile
npm install
npx expo start
```

Use the Expo Go app on your phone or an emulator to run the application.

---

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** - Cross-platform mobile framework
- **Expo** - Development and build toolchain
- **Expo Router** - File-based routing
- **Clerk** - Authentication and user management
- **Expo Image** - Optimized image loading
- **React Native WebView** - YouTube video integration

### Backend
- **Express.js** - Node.js web framework
- **PostgreSQL** - Relational database
- **Drizzle ORM** - TypeScript ORM
- **Node Cron** - Scheduled tasks

### APIs
- **TheMealDB API** - Recipe data source

---

## 📸 Features Showcase

### 🔐 Authentication Flow
- Email-based signup with verification
- Secure login with Clerk
- Beautiful custom UI design

### 🍳 Recipe Discovery
- Browse featured recipes
- Filter by categories (Beef, Chicken, Dessert, etc.)
- View detailed recipe information
- Watch cooking tutorial videos

### 🔍 Smart Search
- Search by recipe name
- Search by ingredients
- Real-time debounced search
- Clean and intuitive UI

### ❤️ Favorites Management
- Save favorite recipes
- Quick access from dedicated tab
- Personal collection management

---

## 🎨 Custom Design System

The app features **Tuğba's Custom Theme** with:
- Elegant Pink primary color (#D4507E)
- Soft background colors
- Smooth transitions and animations
- Professional typography
- Consistent spacing and shadows

You can easily switch between 9 different color themes in `constants/colors.js`:
- Tuğba's Custom Theme ⭐
- Coffee Theme
- Forest Theme
- Purple Theme
- Ocean Theme
- Sunset Theme
- Mint Theme
- Midnight Theme
- Rose Gold Theme

---

## 📱 Screenshots

> Add your app screenshots here

---

## 🚀 Deployment

### Mobile App
Build for production using EAS Build:
```bash
cd mobile
eas build --platform android
eas build --platform ios
```

### Backend
Deploy to services like:
- Railway
- Render
- Heroku
- Digital Ocean

---

## 📝 Project Structure

```
react-native-recipe-app/
├── mobile/
│   ├── app/                 # Expo Router screens
│   │   ├── (auth)/         # Authentication screens
│   │   ├── (tabs)/         # Tab navigation screens
│   │   └── recipe/         # Recipe detail screen
│   ├── components/         # Reusable components
│   ├── constants/          # Colors, API configs
│   ├── services/           # API services
│   ├── hooks/              # Custom hooks
│   └── assets/             # Images, fonts, styles
├── backend/
│   ├── src/
│   │   ├── config/         # Database & cron config
│   │   ├── db/             # Database schema & migrations
│   │   └── server.js       # Express server
│   └── package.json
└── README.md
```

---

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👩‍💻 Connect with Tuğba Gündoğdu

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

---

<p align="center">
  Made with ❤️ by Tuğba Gündoğdu
</p>

<p align="center">
  ⭐ Star this repository if you find it helpful!
</p>
