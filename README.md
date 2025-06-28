# StableBank - Digital Banking App

A modern, scalable React Native banking application with a focus on cryptocurrency support and fintech UI/UX.

## Features

### 🏦 Banking Features
- **Account Balance Display**: Real-time balance with USDT currency support
- **Send Money**: Transfer funds to other users
- **Receive Money**: Accept payments from other users
- **Add Money**: Top up account from various sources (card, bank transfer, UPI)
- **Scan & Pay**: QR code-based payments
- **Transaction History**: View recent transactions with detailed information

### 🎨 UI/UX Features
- **Modern Fintech Design**: Clean, professional banking interface
- **Dark/Light Theme**: Toggle between light and dark modes
- **Responsive Design**: Optimized for mobile devices
- **Card-based Layout**: Material Design inspired components
- **Loading States**: Smooth loading animations and feedback

### 🔐 Security Features
- **Mobile Number Authentication**: Secure login with mobile number and password
- **Demo Mode**: Test with any mobile number using password "admin123"
- **Mock API Integration**: Ready for real API integration

### 🏗️ Architecture Features
- **TypeScript**: Full type safety with strict mode
- **Modular Architecture**: Scalable component and service structure
- **Custom Hooks**: Reusable business logic hooks
- **Theme System**: Centralized theming with context
- **Form Validation**: Robust form handling with validation
- **Error Handling**: Comprehensive error management

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd StableBank
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Usage

### Login
- Use any mobile number (e.g., +1234567890)
- Password: `admin123`
- The app will authenticate and show the dashboard

### Dashboard Features
- **Balance Card**: Shows current balance in USDT
- **Action Buttons**: Send, Receive, Add Money, Scan & Pay
- **Transaction History**: Recent transactions with icons and amounts
- **Account Information**: Account details and mobile number
- **Theme Toggle**: Switch between light and dark modes

### Demo Transactions
All banking operations are simulated with random amounts:
- **Send Money**: Random amount between 100-1100 USDT
- **Receive Money**: Random amount between 50-550 USDT
- **Add Money**: Random amount between 500-2500 USDT
- **Scan & Pay**: Random amount between 20-320 USDT

## Project Structure

```
StableBank/
├── app/                    # Main app screens
│   ├── index.tsx          # Main app router
│   ├── login.tsx          # Login screen
│   └── dashboard.tsx      # Main dashboard
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Base UI components
│   ├── constants/        # App constants and configuration
│   ├── hooks/           # Custom React hooks
│   ├── providers/       # Context providers
│   ├── services/        # API services
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── assets/             # Images and static assets
└── App.tsx            # Root app component
```

## Key Components

### UI Components
- `Button`: Versatile button with multiple variants
- `Card`: Container component with theming
- `Input`: Form input with validation
- `LoadingSpinner`: Loading indicator

### Hooks
- `useAuth`: Authentication state management
- `useBank`: Banking data and operations
- `useForm`: Form handling and validation
- `useTheme`: Theme management

### Services
- `bankService`: Mock banking API operations
- Authentication service (integrated in useAuth)

## Customization

### Adding New Features
1. Create new types in `src/types/`
2. Add services in `src/services/`
3. Create UI components in `src/components/`
4. Add screens in `app/` directory

### Theme Customization
- Modify colors in `src/constants/colors.ts`
- Update theme logic in `src/providers/ThemeProvider.tsx`

### API Integration
- Replace mock calls in `src/services/bankService.ts`
- Update authentication in `src/hooks/useAuth.ts`

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation between screens
- **React Native Safe Area**: Safe area handling

## Future Enhancements

- [ ] Real API integration
- [ ] Biometric authentication
- [ ] Push notifications
- [ ] Offline support
- [ ] Multiple currency support
- [ ] Advanced security features
- [ ] Transaction analytics
- [ ] Budget tracking
- [ ] Investment features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
