import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Header, AvatarMinter } from "@/components";
import { FAQ } from "@/components/ui/FAQ";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      <Header />

      <div className="relative pt-[97px]" style={{ minHeight: 'calc(100vh - 97px)' }}>
        {/* Left Side - Marketing Text */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center pl-16">
          {/* Headline Section */}
          <div 
            className="mb-8"
            style={{
              width: '356px',
              height: '160px',
              top: '303px',
              left: '108px',
              gap: '10px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            <h1 
              style={{
                fontFamily: 'PP Supply Sans',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '64px',
                lineHeight: '125%',
                letterSpacing: '0%'
              }}
            >
              <span style={{ color: '#D73D80' }}>Mint NFTs.</span><br />
              <span style={{ color: '#FDF2FF' }}>Mint Legacy.</span>
            </h1>
          </div>

          {/* Sub-heading Section */}
          <div 
            className="max-w-md"
            style={{
              width: '306px',
              height: '90px',
              top: '478px',
              left: '108px',
              gap: '10px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            <p 
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#B9A7C0'
              }}
            >
              NFT platform for minting and trading NFTs. Lorem ipsum dolor sit amet, consecteur adipiscing
            </p>
          </div>
        </div>

        {/* Right Side - NFT Interface */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full flex flex-col justify-center items-center"
          style={{
            width: '373px',
            height: '727px',
            top: '147px',
            left: '750px',
            gap: '35px',
            transform: 'rotate(0deg)',
            opacity: 1
          }}
        >
          {/* Text Section */}
          <div 
            className="text-center mb-8"
            style={{
              width: '373px',
              height: '84px',
              gap: '10px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}
          >
            <h2 
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '32px',
                lineHeight: '48.59px',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#B9A7C0',
                marginBottom: '10px'
              }}
            >
              Choose your avatar
            </h2>
            <p 
              style={{
                fontFamily: 'Titillium Web',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '20px',
                lineHeight: '125%',
                letterSpacing: '0%',
                color: '#B199B5'
              }}
            >
              Select your avatar and mint your unique NFT
            </p>
          </div>

          {/* Avatar Frame */}
          <div 
            style={{
              width: '368px',
              height: '608px',
              background: '#7861851A',
              border: '1px solid #786185',
              borderRadius: '12px',
              padding: '32px 56px 32px 56px'
            }}
          >
            <AvatarMinter />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-8 pb-16">
        <FAQ />
      </div>
    </main>
  );
}
