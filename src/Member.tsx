import { BiLogoTypescript } from 'react-icons/bi'
import MemberCard, { type MemberCardProps } from './components/MemberCard'
import { IoLogoReact } from 'react-icons/io5'
import { FaPhp } from 'react-icons/fa'
import { FaGolang, FaJava, FaPython } from 'react-icons/fa6'
import { SiKotlin } from 'react-icons/si'

const members: MemberCardProps[] = [
  {
    id: '01',
    name: 'しゅんぺい',
    description: (
      <>
        名城大学情報工学部情報工学科1年生。名城大学情報技術研究会所属。<br />
        プログラミング歴は7年。小学生のころにWebサイトの制作をしたことから、プログラミングの世界にはまる。<br />
        HTML, CSS, JavaScriptからPHP, Go, Python, Java, C++など幅広い言語を薄く広く経験。<br />
        TypeScript, React, PHPを用いたWebアプリケーションの開発が得意。<br />
        プログラミングだけでなく、デザインをするのが好き。デザインも得意で、UI/UXデザインにも興味がある。<br />
        ハッカソンではフロントエンドとデザインを担当予定。
      </>
    ),
    works: [
      {
        id: 'shumpei-1',
        title: 'Wabi',
        description: <>
          シンプルな時計アプリ。<br />
          時計の表示形式や表示サイズを細かくカスタマイズできる。ダークモードにも対応。<br />
        </>,
        link: 'https://wabi.m0ti.com/',
        imageSrc: '/works/wabi.m0ti.com.png',
        imageAlt: 'Wabi',
        tag: [
          {
            text: 'TypeScript',
            icon: <BiLogoTypescript size="1.3rem" />,
            color: '#3178C6',
            borderColor: '#1f64ad',
            textColor: '#FFF',
          },
          {
            text: 'React',
            icon: <IoLogoReact size="1.3rem" />,
            color: '#61DBFB',
            borderColor: '#4bc2e0',
            textColor: '#323330',
          },
        ],
      },
      {
        id: 'shumpei-2',
        title: 'Myail',
        description: <>
          PHPサーバー向けのPOP3ライブラリ。<br />
          RFCの仕様を読み解き、フルスクラッチで作成しました。<br />
        </>,
        link: 'https://wabi.m0ti.com/',
        imageSrc: '/works/myail.png',
        imageAlt: 'Myail',
        tag: [
          {
            text: 'PHP',
            icon: <FaPhp size="1.3rem" />,
            color: '#474A8A',
            borderColor: '#2f326b',
            textColor: '#ffffff',
          },
        ],
      },
      {
        id: 'shumpei-3',
        title: '岡崎高校コーラス部HP',
        description: <>
          所属していた高校の部活のWebサイトを作成しました。<br />
          静的サイトジェネレーターAstroを用いて、JSONファイルを編集するだけで更新できるようにしています。<br />
        </>,
        link: 'https://okunoinn.pages.dev/',
        imageSrc: '/works/okako.png',
        imageAlt: '岡崎高校コーラス部HP',
        tag: [
          {
            text: 'TypeScript',
            icon: <BiLogoTypescript size="1.3rem" />,
            color: '#3178C6',
            borderColor: '#1f64ad',
            textColor: '#FFF',
          },
        ],
      },
      {
        id: 'shumpei-4',
        title: 'dynamic-motd',
        description: <>
          MinecraftサーバーのMOTDを動的に変更するプラグインです。
        </>,
        link: 'https://github.com/syu6noob/dynamic-motd',
        imageSrc: '/works/minecraft.webp',
        imageAlt: 'dynamic-motd',
        tag: [
          {
            text: 'Java',
            icon: <FaJava size="1.3rem" />,
            color: '#F89820',
            borderColor: '#d77e10',
            textColor: '#1f2937',
          },
          {
            text: 'Kotlin',
            icon: <SiKotlin size="1.3rem" />,
            color: '#7F52FF',
            borderColor: '#6b3fe0',
            textColor: '#ffffff',
          },
        ],
      },
      {
        id: 'shumpei-5',
        title: 'coordinates',
        description: <>
          Minecraftサーバ用のプレイヤー視点に座標を常に表示するプラグインです。
        </>,
        link: 'https://github.com/syu6noob/coordinates',
        imageSrc: '/works/minecraft.webp',
        imageAlt: 'coordinates',
        tag: [
          {
            text: 'Java',
            icon: <FaJava size="1.3rem" />,
            color: '#F89820',
            borderColor: '#d77e10',
            textColor: '#1f2937',
          },
          {
            text: 'Kotlin',
            icon: <SiKotlin size="1.3rem" />,
            color: '#7F52FF',
            borderColor: '#6b3fe0',
            textColor: '#ffffff',
          },
        ],
      },
      {
        id: 'shumpei-6',
        title: 'action-sounds',
        description: <>
          Minecraftサーバにプレイヤーが参加した際に効果音を鳴らすプラグインです。
        </>,
        link: 'https://github.com/syu6noob/action-sounds',
        imageSrc: '/works/minecraft.webp',
        imageAlt: 'action-sounds',
        tag: [
          {
            text: 'Java',
            icon: <FaJava size="1.3rem" />,
            color: '#F89820',
            borderColor: '#d77e10',
            textColor: '#1f2937',
          },
          {
            text: 'Kotlin',
            icon: <SiKotlin size="1.3rem" />,
            color: '#7F52FF',
            borderColor: '#6b3fe0',
            textColor: '#ffffff',
          },
        ],
      },
      {
        id: 'shumpei-7',
        title: 'go-health-check',
        description: <>
          Goで作成したヘルスチェック用ツールです。
        </>,
        link: 'https://github.com/syu6noob/go-health-check',
        imageSrc: '/works/github-repository.svg',
        imageAlt: 'go-health-check',
        tag: [
          {
            text: 'Go',
            icon: <FaGolang size="1.3rem" />,
            color: '#00ADD8',
            borderColor: '#008db1',
            textColor: '#ffffff',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    name: 'Tik',
    description: (
      <>
        名城大学情報工学部情報工学科1年生。名城大学情報技術研究会所属。<br />
        中学生のときにMinecraftのコマンドで遊んでいるうちにプログラミングに興味を持ち、勉強を始める。<br />
        Pythonを中心に、ゲームエンジンを使わずにゲームを制作。<br />
        ゲームを作ること自体より、コードを書くことが楽しく、ゲームに限らず様々なアプリを作りたいと考えている。<br />
        最近ではWebやC#を勉強し始め、現在では個人サイトを制作中。<br />
        ハッカソンではバックエンドを担当予定。
      </>
    ),
    works: [
      {
        id: 'taiki-1',
        title: 'Othello',
        description: <>
          Pythonで作成したオセロゲームです。
        </>,
        link: 'https://github.com/Powcy1328/othello',
        imageSrc: '/works/othello.png',
        imageAlt: 'Othello',
        tag: [
          {
            text: 'Python',
            icon: <FaPython size="1.3rem" />,
            color: '#3776AB',
            borderColor: '#2b5f87',
            textColor: '#ffffff',
          },
        ],
      },
    ],
  },
]

export default function Member() {
  return (
    <div id="members" className="background--dot flex w-full flex-col items-center gap-16 px-4 py-20 text-black sm:px-8 sm:py-24 lg:gap-24 lg:px-16">
      <div className="flex max-w-5xl flex-col items-center justify-center gap-6 text-center">
        <span className="text-base font-bold tracking-widest text-amber-600 sm:text-xl">MEMBERS</span>
        <h2 className="text-4xl font-bold leading-[1.25] sm:text-5xl lg:text-6xl">
          チームメンバー
        </h2>
        <p className="text-base leading-[1.8] sm:text-lg lg:text-xl">
          チーム「なんかうごいた」のメンバーです。それぞれの強みを活かして、一緒にプロジェクトを進めます。<br />
        </p>
      </div>
      <div className="flex w-full max-w-6xl flex-col gap-10 lg:gap-16">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  )
}





