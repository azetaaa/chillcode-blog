interface Props {
  text: string
}

const PageHeading = ({ text }: Props) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let interval = null

  const hackedTextEffect = (event) => {
    let iteration = 0

    clearInterval(interval)

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')

      if (iteration >= event.target.dataset.value?.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <h1
      data-value={text}
      className="font-mono text-3xl font-extrabold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      onMouseOver={hackedTextEffect}
      onFocus={hackedTextEffect}
    >
      {text}
    </h1>
  )
}

export default PageHeading
