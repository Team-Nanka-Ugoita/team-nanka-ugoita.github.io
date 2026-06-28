export default function About() {
  return (
    <div id="about" className="relative isolate flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-20 text-center sm:px-8 sm:py-24 lg:gap-8 lg:px-16 lg:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-amber-50"></div>
        <img className="absolute top-1/2 left-1/2 h-[150%] w-[150%] -translate-1/2 object-cover opacity-40" src="/background2.png" alt="" />
      </div>
      <span className="relative z-10 text-base font-bold tracking-widest text-amber-600 sm:text-xl">ABOUT US</span>
      <h2 className="relative z-10 text-3xl font-bold leading-[1.5] text-slate-950 sm:text-4xl lg:text-6xl">
        ハッカソン<span className="text-amber-600 underline-3">未経験</span><br />
        チーム開発<span className="text-amber-600 underline-3">未経験</span><br />
        そんなふたりがエントリーしました
      </h2>
      <p className="relative z-10 max-w-5xl text-base leading-[1.8] sm:text-lg lg:text-xl">
        2026年7月に開催されるハッカソン「THE HACK」に、チーム「なんかうごいた」でエントリーしました。<br />
        大学1年生で出会って2か月のふたりが、初めてのハッカソンに挑戦します。<br />
        ふたりとも独学でプログラミングを学び、一人でソフトウェアやライブラリを作ってきました。<br />
        しかし、チーム開発の経験はまだありません。そのぶん、得意なプログラミングの分野も異なります。<br />
        そんなふたりが、初めてのチーム開発に挑戦します。<br />
      </p>
    </div>
  )
}
