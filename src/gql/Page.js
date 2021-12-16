import { GQLBase, Schema, Properties } from 'graphql-lattice'
import { readFile, stat } from 'fs'
import { Deferred } from '../deferred'
import Path from 'path'

@Schema(`
  type Page {
    markdown: String
    lastModified: Float
  }
  
  type Query {
    pageContent(path:String): Page
  }
`)
@Properties('markdown', 'lastModified')
export class Page extends GQLBase {
  static async RESOLVERS(express) {
    return {
      async pageContent({path}) {
        const defFile = new Deferred();
        const defStat = new Deferred();
        const usePath = Path.join(_root, 'src', 'pages', path);
        
        console.log(`Using ${usePath}`)
        
        readFile(usePath, (error, buffer) => {
          return error 
            ? defFile.reject(error) 
            : defFile.resolve(buffer.toString());
        })
        
        stat(usePath, (error, status) => {
          return error 
            ? defStat.reject(error)
            : defStat.resolve(status);
        })
        
        const [markdown, status] = await Promise.all([
          defFile.promise, 
          defStat.promise
        ]);
        
        const lastModified = status.mtime.valueOf();
        
        return new Page({
          markdown,
          lastModified
        }, express)
      }
    }    
  }
}

export default Page 