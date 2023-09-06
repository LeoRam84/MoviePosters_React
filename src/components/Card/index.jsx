import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({ posterImg, title, description }) { //tirei os (props) daqui e dos props.title, props.posterImg e do props.description. Para isso coloquei chaves aqui, usando a desestruturação.
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      <a href="https://www.amazon.com/" target="_blank" rel="noopener" aria-label="Link para o site da Amazon" title="Amazon">
        <Button text="Comprar agora" />
      </a>
      <a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal" target="_blank" rel="noopener" aria-label="Link para o site da Wikipedia" title="Amazon">
          <Button text="Wikipedia" />
      </a>
      </div>
    </div>
  )
}