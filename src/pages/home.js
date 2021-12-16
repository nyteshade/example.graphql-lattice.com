import css from './home.css'
import Markdown from 'react-remarkable'
import content from './home.md'
import { Component } from 'preact-compat'
import Apollo from 'apollo-client-browser';
import { contentQuery } from './queries'

const { ApolloClient, createNetworkInterface } = Apollo.lib;
const networkInterface = createNetworkInterface({ uri: `/graphql`, });
const client = new ApolloClient({ networkInterface });
const query = contentQuery('home.md')

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state.markdown = 'Loading...';
  }
  
  updateContent() {
    debugger;
    client.query({ query }).then((data) => {
      debugger;
      this.setState({
        markdown: data.data.pageContent.markdown
      })
    })    
    .catch((error) => {
      debugger;
      this.setState({markdown: error.stack})
    })
  }
  
  componentDidMount() {
    debugger;
  }
  
  render() {
    return (
      <article className={css.home}>
        <header>
          <h1>Welcome to the GraphQL Lattice Demo</h1>
          <h2>Please excuse the mess</h2>
          <h6><a href="#" onClick={this.updateContent()}>Refresh</a></h6>
        </header>
        <article>
          <Markdown source={this.state.markdown}/>
        </article>
      </article>
    );    
  }
}

export default Home;