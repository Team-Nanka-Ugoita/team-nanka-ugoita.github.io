function Message() {
  return (
    <div id="message" className="flex w-full flex-col items-center gap-16 bg-amber-50 px-4 py-20 text-black sm:px-8 sm:py-24 lg:gap-24 lg:px-16">
      <div className="flex max-w-5xl flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <span className="text-base font-bold tracking-widest text-amber-600 sm:text-xl">MESSAGE</span>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">やる気あります！</h2>
        <p className="text-center text-base leading-[1.8] sm:text-lg lg:text-xl">
          私たちは未経験なことも多いチームです。<br />
          けれど、新しいことに挑戦する意欲と、手を動かして学ぶ力があります。<br />
          それぞれがこれまで培ってきた技術や得意分野を持ち寄り、<br />
          型にとらわれない自由な発想でアイデアを形にしていきます。<br />
          失敗を恐れず、まずは「なんかうごいた」から始めて、ハッカソンで披露できるものをつくります。<br />
          もしかしたら、みんなを驚かせるものをつくっちゃうかも！？
        </p>
      </div>
    </div>
  )
}

export default Message
