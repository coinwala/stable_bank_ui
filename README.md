# CryptoPop - Stablecoin Banking for the Real World

A modern mobile banking application that brings the power of stablecoins to everyday users with a familiar, bank-like experience.

## 🎯 Core Principles

- **Simplicity First**: No crypto jargon - designed for everyone
- **Bank-like UX**: Fast, intuitive, and secure interface
- **Privacy + Security**: Biometric authentication and non-custodial wallet with MPC recovery

## 🧩 Core Features

### 1. 🔐 Onboarding

- Phone/email + OTP verification
- KYC flow (Aadhaar, Passport, etc.)
- MPC wallet creation (background process)
- Custom username selection (UPI ID style)
- Biometric authentication setup

### 2. 🏠 Home / Dashboard

- Wallet balance display (local fiat + USDC/USDT)
- Quick actions:
  - Send
  - Receive
  - Add funds
  - Withdraw
- Transaction notifications
- Staking rewards tracking

### 3. 💸 Send & Receive

- Multiple sending options:
  - @username
  - Phone number
  - QR code
- UPI-style amount input
- Gas-free transactions (relayer handled)
- QR/UPI-style receiving

### 4. 📈 Earn / Invest

- "Grow your savings" section
- Yield options:
  - Auto-stake USDC (5% APY)
  - Crypto Mutual Funds
- Simple deposit/withdraw interface

### 5. 💳 Spend (Phase 2)

- Virtual card for online spending
- Card management features
- Spending history tracking

### 6. ⚙️ Settings

- KYC status management
- Account details export
- Recovery setup
- Language preferences

## 🧠 Tech Stack

| Layer            | Technology                                        |
| ---------------- | ------------------------------------------------- |
| Framework        | React Native                                      |
| State Management | Zustand / Redux                                   |
| Networking       | Axios / Native fetch                              |
| Authentication   | MPC Infrastructure                                |
| QR Code          | react-native-qrcode-svg                           |
| Biometrics       | react-native-touch-id / expo-local-authentication |
| UI Framework     | Tailwind + NativeWind / Expo Router UI            |

## 🔒 Security Features

- Biometric authentication
- No private key exposure
- Secure local storage
- Social recovery via MPC network

## 🌍 Future Localizations

- Multi-currency support (₹, ₦, ₱, etc.)
- Multi-language support
- Region-specific integrations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- React Native development environment setup
- Xcode (for iOS development)
- Android Studio (for Android development)
- Expo CLI (`npm install -g expo-cli`)

### Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/crypto-pop-app.git
cd crypto-pop-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
API_URL=your_api_url
MPC_PROVIDER_URL=your_mpc_provider_url
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Run on specific platforms:

```bash
# iOS
npm run ios
# Android
npm run android
```

## 📱 Development

### Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific components
├── navigation/     # Navigation configuration
├── services/       # API and external service integrations
├── store/         # State management
├── utils/         # Helper functions and constants
└── App.tsx        # Root component
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run build:ios` - Build iOS app
- `npm run build:android` - Build Android app

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper error handling
- Write meaningful comments

## 📚 API Documentation

The app integrates with several APIs:

- MPC Wallet API
- KYC Provider API
- Payment Gateway API
- Staking Service API

For detailed API documentation, visit our [API Docs](https://docs.cryptopop.app)

## 🔐 Security

- All API calls are encrypted
- Biometric data is stored securely
- Regular security audits
- Bug bounty program available

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Website: [cryptopop.app](https://cryptopop.app)
- Email: support@cryptopop.app
- Twitter: [@CryptoPopApp](https://twitter.com/CryptoPopApp)
- Discord: [Join our community](https://discord.gg/cryptopop)
