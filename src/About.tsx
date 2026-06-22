export default function About() {
  return (
    <div className="relative isolate flex w-full px-16 py-32 flex-col gap-8 items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-amber-50"></div>
        <img className="absolute top-1/2 left-1/2 -translate-1/2 h-[150%] w-[150%] object-cover opacity-50" src="/background2.png" alt="" />
      </div>
      <span className="relative z-10 text-amber-600 text-xl font-bold tracking-widest">ABOUT US</span>
      <h2 className='relative z-10 text-6xl text-slate-950 font-bold leading-[1.5]'>
        ハッカソン<span className="text-amber-600 underline-3">未経験</span><br />
        チーム開発<span className="text-amber-600 underline-3">未経験</span><br />
        そんなふたりがエントリーします
      </h2>
      <p className='relative z-10 text-xl leading-[1.7]'>
        2026年7月に開催されるハッカソン「THE HACK」に、エントリーします。チーム「なんかうごいた」です。<br />
        大学1年生・出会って2か月のふたりが、初のハッカソンにエントリーします。<br />
        ふたりとも、独学でプログラミングを学び、一人でソフトウェアやライブラリを作ってきました。<br />
        しかし、チーム開発の経験は二人にはありません。そのうえ、得意なプログラミングの分野も異なります。<br />
        そんなふたりが、初めてのチーム開発に挑戦します。<br />            
      </p>
    </div>
  )
}
