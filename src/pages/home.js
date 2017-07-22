import css from './home.css'
import Markdown from 'react-remarkable'
import content from './home.md'

export default () => (
  <article className={css.home}>
    <header>
      <h1>Welcome to the GraphQL Lattice Demo</h1>
      <h2>Please excuse the mess</h2>
    </header>
    <article>
      <Markdown source={content}/>
    </article>
  </article>
);
