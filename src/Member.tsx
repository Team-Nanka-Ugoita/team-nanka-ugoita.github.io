import MemberCard, { type MemberCardProps } from './components/MemberCard'

const workDescription = (
  <>
    シンプルな時計アプリ。<br />
    時計の表示形式や表示サイズを細かくカスタマイズできる。ダークモードにも対応。<br />
  </>
)

const members: MemberCardProps[] = [
  {
    id: '01',
    name: 'しゅんぺい',
    description: (
      <>
        名城大学情報工学部情報工学科1年生。名城大学情報技術研究会所属。<br />
        プログラミング歴は7年。小学生のころにWebサイトの制作をしたことから、プログラミングの世界にはまる。<br />
        HTML, CSS, JavaScriptからPHP, Go, Python, Java, Python, C++など幅広い言語を薄く広く経験。<br />
        TypeScript, React, PHPを用いたWebアプリケーションの開発が得意。<br />
        プログラミングだけでなく、デザインをするのが好き。デザインも得意で、UI/UXデザインにも興味がある。<br />
        ハッカソンではフロントエンドとデザインを担当予定。
      </>
    ),
    works: [
      {
        id: 'shunpei-wabi-1',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/shunpei-wabi-1/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'shunpei-wabi-2',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/shunpei-wabi-2/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'shunpei-wabi-3',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/shunpei-wabi-3/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'shunpei-wabi-4',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/shunpei-wabi-4/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
    ],
  },
  {
    id: '02',
    name: 'Tik',
    description: (
      <>
        名城大学情報工学部情報工学科1年生。名城大学情報技術研究会所属。<br />
        Pythonでマ〇オ風のゲームを作るなど、日々ゲーム制作に励んでいる。
      </>
    ),
    works: [
      {
        id: 'taiki-wabi-1',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/taiki-wabi-1/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'taiki-wabi-2',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/taiki-wabi-2/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'taiki-wabi-3',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/taiki-wabi-3/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
      {
        id: 'taiki-wabi-4',
        title: 'Wabi',
        description: workDescription,
        imageSrc: 'https://picsum.photos/seed/taiki-wabi-4/640/360',
        imageAlt: 'Wabiの制作物イメージ',
      },
    ],
  },
]

export default function Member() {
  return (
    <div className="flex w-full background--dot px-16 py-24 flex-col gap-24 items-center text-black">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-xl font-bold tracking-widest text-amber-600">MEMBERS</span>
        <h2 className='text-6xl font-bold leading-[1.25]'>
          チームメンバー
        </h2>
        <p className='text-xl leading-[1.7]'>
          チーム「なんかうごいた」のメンバーです。それぞれの強みを活かして、一緒にプロジェクトを進めます。<br />
        </p>
      </div>
      <div className="max-w-6xl flex gap-16 flex-col">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  )
}
