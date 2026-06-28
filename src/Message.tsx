function Message() {
  return (
    <div className="flex w-full bg-amber-50 px-16 py-24 flex-col gap-24 items-center text-black">
      <div className="flex flex-col justify-center items-center gap-8">
        <span className="text-xl font-bold tracking-widest text-amber-600">MESSAGE</span>
        <h2 className="text-6xl font-bold">やる気あります！</h2>
        <p className="text-xl leading-[1.7] text-center">
          私たちは未経験なことも多いチームです。<br />
          けれど、新しいことに挑戦する意欲と、手を動かして学ぶ力があります。<br />
          それぞれがこれまで培ってきた技術や得意分野を持ち寄り、<br />
          型にとらわれない自由な発想でアイデアを形にしていきます。<br />
          失敗を恐れず、まずは「なんかうごいた」からはじめて、ハッカソンで披露するものをつくります。<br />
          もしかしたら、みんなを驚かせるものをつくっちゃうかも！？
        </p>
      </div>
    </div>
  )
}

export default Message