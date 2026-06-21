function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex mx-8 mt-8 px-8 py-6 rounded-full bg-white border-2 border-amber-500 justify-between items-center">
        <span className="font-tegaki text-xl font-bold">チーム「なんかうごいた」</span>
        <div className="flex items-center gap-6">
          <a href="" className="text-lg font-medium">TOP</a>
          <a href="" className="text-lg font-medium">ABOUT</a>
          <a href="" className="text-lg font-medium">MEMBERS</a>
          <a href="" className="text-lg font-medium">MESSAGE</a>
        </div>
      </div>
    </header>
  )
}

export default Header;