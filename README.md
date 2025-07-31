# Alvara NFT Platform

A modern NFT minting platform inspired by Alvara's design aesthetic, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** - Beautiful, responsive design with smooth animations
- **NFT Minting** - Create and mint NFTs with custom metadata
- **Wallet Integration** - Connect with popular Web3 wallets via RainbowKit
- **Real-time Preview** - Live preview of NFT metadata and attributes
- **Mobile Responsive** - Optimized for all device sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: RainbowKit + Wagmi + Viem
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
Alvara-NFT/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Context providers
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI components
│   │   ├── features/         # Feature components
│   │   ├── modals/           # Modal components
│   │   └── index.ts          # Component exports
│   ├── lib/                  # Utility libraries
│   ├── types/                # TypeScript types
│   ├── hooks/                # Custom hooks
│   └── utils/                # Utility functions
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Alvara-NFT.git
cd Alvara-NFT
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Component Organization

The project follows a modular component structure:

- **Layout Components** (`/components/layout/`) - Header, Footer, Logo
- **UI Components** (`/components/ui/`) - Hero, Favicon
- **Feature Components** (`/components/features/`) - NFT minting, forms
- **Modal Components** (`/components/modals/`) - Minting modal

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_id
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
```

### Tailwind CSS

The project uses Tailwind CSS with custom configuration for the Alvara design system. See `tailwind.config.js` for custom colors and utilities.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Alvara
- Built with Next.js and the modern web stack
- Web3 integration powered by RainbowKit and Wagmi