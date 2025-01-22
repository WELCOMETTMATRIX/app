import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="blazzy">
      <header className="blazzy-header">
        <div className="logo-container">
          <img src="/BLAZZY.JPG" alt="Blazzy Logo" className="logo" />
        </div>
        <h1 className="animated-text">𝗪⃥𝗲⃥𝗹⃥𝗰⃥𝗼⃥𝗺⃥𝗲⃥ 𝘁⃥𝗼⃥ 𝗕⃥𝗹⃥𝗮⃥𝘇⃥𝘇⃥𝘆⃥'⃥𝘀⃥ 𝗨⃥𝗻⃥𝗶⃥𝘃⃥𝗲⃥𝗿⃥𝘀⃥𝗲⃥</h1>
        <p className="tagline">𝗘⃥𝘅⃥𝗽⃥𝗹⃥𝗼⃥𝗿⃥𝗲⃥ 𝘁⃥𝗵⃥𝗲⃥ 𝗽⃥𝗼⃥𝘄⃥𝗲⃥𝗿⃥ 𝗼⃥𝗳⃥ 𝗕⃥𝗹⃥𝗮⃥𝘇⃥𝘇⃥𝘆⃥ 𝗼⃥𝗻⃥ 𝘁⃥𝗵⃥𝗲⃥ 𝗖⃥𝗿⃥𝗼⃥𝗻⃥𝗼⃥𝘀⃥ 𝗡⃥𝗲⃥𝘁⃥𝘄⃥𝗼⃥𝗿⃥𝗸⃥!⃥</p>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {menuOpen && (
          <nav className="nav-menu">
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#token-info">Token Info</a></li>
              <li><a href="#COMIC">COMIC</a></li>
              <li><a href="#contact">Contact</a></li>
               <li><a href="https://infograph.venngage.com/ps/kZxFvP4Yyqc" target="_blank">WHITE PAPER</a></li>

              <li><a href="#ABOUT">#ABOUT</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section id="features" className="section">
          <h2>ꛃꛅ𖤢𖦪𖤢 ꔪꚶꚲ ꔪꚳꛎꛉꛉꚲ</h2>
          <p>Discover Blazzy's role in futuristic innovations and the cosmos!</p>
          <p>🄲🅁🄾🄽🄰🅂🅆🄰🄿 , 🄹🅄🄼🄿🄴🅁  , 🅂🅆🄾🄾🄿 , 🔥 $𝔹𝕃ℤ 🚀  💎 </p>
          <img src="CRONA.PNG" alt="CRONA " />
          <img src="JUMPER.PNG" alt="JUMPER " />
          <img src="SWOOP.PNG" alt="SWOOP " />
          <iframe 
    src="https://app.cronaswap.org/swap?outputCurrency=0x9ef3fc220867f6cf5655db3d950cda67a3a92f9f" 
    title="Blazzy Token Chart" 
    style={{
      width: "100%", 
      height: "600px", 
      border: "none"
    }} 
    allowfullscreen
  ></iframe>
        </section>
        <section id="roadmap" className="section">
  <h2>Blazzy Token Roadmap</h2>
  <p>Follow Blazzy's journey as we revolutionize the blockchain space with $BLZ!</p>

  <div className="roadmap">
    <div className="roadmap-phase">
      <h3>🚀 Phase 1: Launch & Foundation</h3>
      <ul>
        <li>Token Creation ($BLZ)</li>
        <li>Smart Contract Deployment</li>
        <li>Website & Whitepaper Release</li>
        <li>Community Building on Social Media</li>
      </ul>
    </div>

    <div className="roadmap-phase">
      <h3>🌟 Phase 2: Growth & Expansion</h3>
      <ul>
        <li>Initial Exchange Listings</li>
        <li>Partnership Announcements</li>
        <li>First Airdrop Campaign</li>
        <li>Launch of Staking Platform</li>
      </ul>
    </div>

    <div className="roadmap-phase">
      <h3>💎 Phase 3: Utility Development</h3>
      <ul>
        <li>Release of Blazzy NFT Marketplace</li>
        <li>Integration with DeFi Platforms</li>
        <li>Token Governance Launch</li>
        <li>Global Marketing Campaign</li>
      </ul>
    </div>

    <div className="roadmap-phase">
      <h3>🌌 Phase 4: Blazzy Ecosystem</h3>
      <ul>
        <li>Development of Blazzy Blockchain</li>
        <li>Partnerships with Major Blockchain Projects</li>
        <li>Introduction of Metaverse Integration</li>
        <li>Continuous Ecosystem Updates</li>
      </ul>
    </div>
  </div>

  <p>🔥 𝕁𝕠𝕚𝕟 𝕥𝕙𝕖 𝔹𝕝𝕒𝕫𝕫𝕪 𝕣𝕖𝕧𝕠𝕝𝕦𝕥𝕚𝕠𝕟 𝕒𝕟𝕕 𝕞𝕒𝕜𝕖 $𝔹𝕃ℤ 𝕒 𝕡𝕒𝕣𝕥 𝕠𝕗 𝕪𝕠𝕦𝕣 𝕔𝕣𝕪𝕡𝕥𝕠 𝕛𝕠𝕦𝕣𝕟𝕖𝕪! 🚀</p>
</section>



        <section id="token-info" className="section">
  <h2>Blazzy Token Information</h2>
  <iframe 
    src="https://www.geckoterminal.com/es/cro/pools/0x5f028f49a7443f34aedfc19ed986c92243d98ef5?embed=1&info=1&swaps=1&grayscale=1&light_chart=1" 
    title="Blazzy Token Chart" 
    style={{
      width: "100%", 
      height: "600px", 
      border: "none"
    }} 
    allowfullscreen
  ></iframe>
   <iframe 
    src="https://www.team.finance/view-coin/0x9ef3fc220867f6cf5655db3d950cda67a3a92f9f?name=BLAZZY%20&symbol=BLZhttps://www.team.finance/view-coin/0x9ef3fc220867f6cf5655db3d950cda67a3a92f9f?name=BLAZZY%20&symbol=BLZ&chainid=0x19&_gl=1*rl4chl*_gcl_au*MTE0OTgyNjg3NC4xNzMzNDM5MzA2" 
    title="Blazzy Token Chart" 
    style={{
      width: "100%", 
      height: "600px", 
      border: "none"
    }} 
    allowfullscreen
  ></iframe>
  <p><strong>B̨̡̤̣̘̒̐ͥ̚͢L̹̞͓̬̄A̸̧̨̲͓̱̗̦̩͔̪̝̯̫͍͚͛̋̊͂̃͆ͪ̐́̉̽ͯ̔͛̊ͨͤ̃͑̚̚͟͠͞Z̵̡̧̦͍̯̬̠̹̘̦̝̼̼̭̖̤̲ͨ̈̊̍͛ͪ̓͆ͧ̌̍͆̅͌̑́͛̉̆̚͢͡Z̹̗̀̄͌͊̔͑ͭY̸̭̗̖̣͒ 𝗖⃥𝗼⃥𝗻⃥𝘁⃥𝗿⃥𝗮⃥𝗰⃥𝘁⃥ 𝗔⃥𝗱⃥𝗱⃥𝗿⃥𝗲⃥𝘀⃥𝘀⃥:</strong> ⓪ⓧ⑨ⓔⓕ③ⓕⓒ②②⓪⑧⑥⑦ⓕ⑥ⓒⓕ⑤⑥⑤⑤ⓓⓑ③ⓓ⑨⑤⓪ⓒⓓⓐ⑥⑦ⓐ③ⓐ⑨②ⓕ⑨ⓕ =0x9ef3fc220867f6cf5655db3d950cda67a3a92f9f </p>
  <p><strong>Liquidity Address:</strong> ⓿🅧➎🅕⓿➋➑🅕➍➒🅐➐➍➍➌🅕➌➍🅐🅔🅓🅕🅒➊➒🅔🅓➒➑➏🅒➒➋➋➍➌🅓➒➑🅔🅕➎ =0x5f028f49a7443f34aedfc19ed986c92243d98ef5</p>
  <p><strong>Supply:</strong> 1 billion tokens</p>
  <p><strong>Decimals:</strong> 18</p>
  <p><strong>Network:</strong> Cronos Network</p>
</section>


        <section id="gallery" className="section">
          <h2>𝗕⃥𝗟⃥𝗔⃥𝗭⃥𝗭⃥𝗬⃥ 𝗖⃥𝗢⃥𝗠⃥𝗜⃥𝗖⃥ 𝗖⃥𝗢⃥𝗠⃥𝗜⃥𝗡⃥𝗚⃥ 𝗦⃥𝗢⃥𝗢⃥𝗡⃥</h2>
          <div className="gallery">
            <img src="BATTLE2.JPG" alt="Blazzy " />  <p><strong>Q1:</strong>🅲σⓢ𝓂ί🅲 ⓢｔ𝕒ᖇｔ</p>
            <img src="BATTLE.JPG" alt="Blazzy 2" /> <p><strong>Q2:</strong>𝐺𝛥𝐿𝛥𝛸𝛹 𝛵𝛤𝛥𝛻𝛴𝐿</p>
            <img src="BATTLE0.JPG" alt="Blazzy 3" /> <p><strong>Q3:</strong>𝗙⃥𝗜⃥𝗚⃥𝗧⃥𝗛⃥ 𝗜⃥𝗡⃥ 𝗠⃥𝗔⃥𝗥⃥𝗦⃥</p>
            <img src="BATTLE1.JPG" alt="Blazzy " /> <p><strong>Q4:</strong>₮ⱧɆ Ɇ₦Đ ₴₮₳Ɽ₮₴</p>
          </div>
        </section>
        <section id="gallery" className="section">
          <h2>𝗕⃥𝗟⃥𝗔⃥𝗭⃥𝗭⃥𝗬⃥ 𝗖⃥𝗢⃥𝗠⃥𝗜⃥𝗖⃥ 𝗖⃥𝗢⃥𝗠⃥𝗜⃥𝗡⃥𝗚⃥ 𝗦⃥𝗢⃥𝗢⃥𝗡⃥</h2>
          <div className="gallery">
          <img src="THEFALL3.PNG" alt="THE FALL " /> <p><strong>Q?:</strong>₮ⱧɆ Ɇ₦Đ ₴₮₳Ɽ₮₴ PT.1</p>
          <img src="MARSEX.PNG" alt="THE FALL " /> <p><strong>Q?!:</strong>₮ⱧɆ Ɇ₦Đ ₴₮₳Ɽ₮₴ PT.2</p>
          </div>
        </section>

        <section id="gallery" className="section">
          <h2>𝗕⃥𝗟⃥𝗔⃥𝗭⃥𝗭⃥𝗬⃥   </h2>
          <div className="gallery">
            <img src="HEY.PNG" alt="Blazzy " />
            <img src="LOVE.PNG" alt="Blazzy 2" />
            <img src="NO.PNG" alt="Blazzy 3" />
            <img src="MAYBE.PNG" alt="Blazzy " />
            <img src="WOW.PNG" alt="Blazzy " />
            <img src="YES.PNG" alt="Blazzy " />
            <img src="HT.PNG" alt="Blazzy " />
          </div>
        </section>


        <section id="contact" className="section">
          <h2>𝗖⃥𝗼⃥𝗻⃥𝘁⃥𝗮⃥𝗰⃥𝘁⃥ 𝗨⃥𝘀⃥</h2>
          <p>𝔻𝕀𝕊ℂ𝕆ℝ𝔻 🚀  </p>
          <p>₮₩ł₮₮ɆⱤ Ӿ: @BLIZZYCRO</p>
          <p>ⓉⒺⓁⒺⒼⓇⒶⓂ📲: 𝕙𝕥𝕥𝕡𝕤://𝕥.𝕞𝕖/𝔹𝕃𝔸ℤℤ𝕐ℂℝ𝕆</p>
        </section>
        <section id="contact" className="section">
          <h2>𝗔⃥𝗕⃥𝗢⃥𝗨⃥𝗧⃥ 𝗨⃥𝘀⃥</h2>
          <p>**𝔸𝕓𝕠𝕦𝕥 𝕌𝕤 𝔹𝕝𝕒𝕫𝕫𝕪 𝕋𝕠𝕜𝕖𝕟 𝕚𝕤 𝕒 𝕣𝕖𝕧𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕒𝕣𝕪 𝕕𝕚𝕘𝕚𝕥𝕒𝕝 𝕒𝕤𝕤𝕖𝕥 𝕠𝕟 𝕥𝕙𝕖 ℂ𝕣𝕠𝕟𝕠𝕤 ℕ𝕖𝕥𝕨𝕠𝕣𝕜, 𝕕𝕖𝕤𝕚𝕘𝕟𝕖𝕕 𝕥𝕠 𝕖𝕞𝕡𝕠𝕨𝕖𝕣 𝕦𝕤𝕖𝕣𝕤, 𝕗𝕠𝕤𝕥𝕖𝕣 𝕔𝕣𝕖𝕒𝕥𝕚𝕧𝕚𝕥𝕪, 𝕒𝕟𝕕 𝕗𝕦𝕖𝕝 𝕒𝕟 𝕚𝕟𝕥𝕖𝕣𝕔𝕠𝕟𝕟𝕖𝕔𝕥𝕖𝕕 𝕖𝕔𝕠𝕤𝕪𝕤𝕥𝕖𝕞. 𝕎𝕚𝕥𝕙 𝕤𝕖𝕔𝕦𝕣𝕖 𝕒𝕟𝕕 𝕥𝕣𝕒𝕟𝕤𝕡𝕒𝕣𝕖𝕟𝕥 𝕤𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤, 𝕔𝕠𝕞𝕞𝕦𝕟𝕚𝕥𝕪-𝕕𝕣𝕚𝕧𝕖𝕟 𝕚𝕟𝕚𝕥𝕚𝕒𝕥𝕚𝕧𝕖𝕤, 𝕒𝕟𝕕 𝕒𝕡𝕡𝕝𝕚𝕔𝕒𝕥𝕚𝕠𝕟𝕤 𝕤𝕡𝕒𝕟𝕟𝕚𝕟𝕘 𝕘𝕒𝕞𝕚𝕟𝕘, 𝕤𝕥𝕣𝕖𝕒𝕞𝕚!</p>
          <p> </p>
        </section>
        <section id="contact" className="section">
          <h2>𝗔⃥𝗜⃥ </h2>
          <p>B̶̷͈̩̗͉̱̲̫̥̒͛͌ͦ̒͐͂̇͌ͬͩḺ̸̸̴̛̜̳̖̝̝̻̲̺̖ͫ̑͌̉̎̅̈́̀̓͋ͯ̅̋ͮ͑̓ͥ̀͊͒͘͟͠A̷̵̱̗̖̦͌͒̃̌̎͌ͩ͋̀̀͘Z̳̝̑̂̋͢͡Z̷̶̨̢̛̛̭͎͙̠̰͚̲͕̙͔̹͓ͮͮ̅̌̋́͗̊ͫͥͤ̚Y̲͔͓͍̽̈́͒̒Ç̴̼̳̠͔̮̟̹ͦͩ͋̇̏̄́Ŗ̨͇̝͕̥̞̼̣̪̯̅͆̔̔̓̚͢͞ͅO̸̧̯̖͖̺̗̼̳̹̣̞̮̠̺̦̤̪͈͛ͧ̅̅̋̽͗ͧ̂̂͋͋͛ͨ̕͟͞</p>
          <p>𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔹𝕃𝔸ℤℤ𝕐 $𝔹𝕃𝔸ℤℤ𝕐 🔥 $𝔹𝕃ℤ 🚀 #ℂℝ𝕆𝔽𝔸𝕄 💎  </p>
          <div className="gallery">
            <img src="BLAZZYDAPBOT.PNG" alt="Blazzy DAPP BOT " />
            <img src="BLAZZYBURNBOT.PNG" alt="Blazzy BURN" />
            <img src="BLAZZYANALISIS.PNG" alt="Blazzy 3" />
            <img src="BLAZZYBURNTRACK.PNG" alt="Blazzy " />
            <img src="BLAZZYCAREBOT.PNG" alt="Blazzy " />
            <img src="BLAZZYVPNBOT.PNG" alt="Blazzy " />
            <img src="BLAZZYVPNBOT.PNG" alt="Blazzy " />
          </div>
          <p><strong>B̨̡̤̣̘̒̐ͥ̚͢L̹̞͓̬̄A̸̧̨̲͓̱̗̦̩͔̪̝̯̫͍͚͛̋̊͂̃͆ͪ̐́̉̽ͯ̔͛̊ͨͤ̃͑̚̚͟͠͞Z̵̡̧̦͍̯̬̠̹̘̦̝̼̼̭̖̤̲ͨ̈̊̍͛ͪ̓͆ͧ̌̍͆̅͌̑́͛̉̆̚͢͡Z̹̗̀̄͌͊̔͑ͭY̸̭̗̖̣͒ </strong>B </p>
  <p><strong>WHATS BLAZZY AI:</strong> </p>
  <p><strong>BLAZZY BURN:</strong> 5 billion tokens BURN</p>
  <p><strong>BLAZZY DAPP:</strong> </p>
  <p><strong>BLAZZY TRACKER BURN:</strong> </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Blazzy Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
