function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-3 mt-3 flex flex-col items-center justify-between gap-3 rounded-2xl border-2 border-amber-500 bg-white px-4 py-3 text-center sm:mx-6 sm:mt-6 sm:px-6 sm:py-4 md:flex-row md:rounded-full md:text-left lg:mx-8 lg:mt-8 lg:px-8 lg:py-6">
        <span className="font-tegaki text-base font-bold sm:text-xl">チーム「なんかうごいた」</span>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          <a href="#top" className="text-sm font-medium sm:text-base lg:text-lg">TOP</a>
          <a href="#about" className="text-sm font-medium sm:text-base lg:text-lg">ABOUT</a>
          <a href="#members" className="text-sm font-medium sm:text-base lg:text-lg">MEMBERS</a>
          <a href="#message" className="text-sm font-medium sm:text-base lg:text-lg">MESSAGE</a>
        </div>
      </div>
    </header>
  )
}

export default Header
