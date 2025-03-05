export const scrollToContact = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault()
  }
  const element = document.getElementById('connect-with-us')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
