# Source Code Structure

This directory contains the source code for the Alvara NFT Platform, organized following Next.js 14+ conventions.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, Logo)
│   ├── ui/               # UI components (Hero, Favicon)
│   ├── features/         # Feature components (NFT minting, forms)
│   ├── modals/           # Modal components
│   └── index.ts          # Main component exports
├── lib/                  # Utility libraries
│   └── utils.ts          # Common utility functions
├── types/                # TypeScript type definitions
│   └── index.ts          # Common interfaces and types
├── hooks/                # Custom React hooks
└── utils/                # Additional utility functions
```

## Component Organization

### Layout Components (`/components/layout/`)
- **Header.tsx** - Main navigation header
- **Footer.tsx** - Site footer
- **Logo.tsx** - Alvara logo component

### UI Components (`/components/ui/`)
- **Hero.tsx** - Hero section component
- **Favicon.tsx** - Favicon component

### Feature Components (`/components/features/`)
- **AvatarMinter.tsx** - Avatar minting functionality
- **NFTCreator.tsx** - NFT creation interface
- **NFTForm.tsx** - NFT form component
- **NFTPreview.tsx** - NFT preview component
- **Features.tsx** - Features showcase

### Modal Components (`/components/modals/`)
- **MintingModal.tsx** - NFT minting modal

## Import Conventions

Use the main index files for clean imports:

```typescript
// Import from specific category
import { Header, Footer } from '@/components/layout'
import { Hero } from '@/components/ui'
import { AvatarMinter } from '@/components/features'

// Or import from main components index
import { Header, Footer, Hero, AvatarMinter } from '@/components'
```

## Utilities

Common utilities are available in `/lib/utils.ts`:
- `cn()` - Class name utility for Tailwind CSS
- `formatAddress()` - Format Ethereum addresses
- `formatNumber()` - Format numbers with commas

## Types

Common TypeScript interfaces are defined in `/types/index.ts`:
- `NFTData` - NFT metadata interface
- `MintingState` - Minting process state
- `UserData` - User wallet data 