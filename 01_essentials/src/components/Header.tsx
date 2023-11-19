type HeaderProps = {
  image: {
    src: string
    alt: string
  }
  children: React.ReactNode
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  )
}

export default Header
