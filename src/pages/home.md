### Brief overview
Today's workshop is around using GraphQL and GraphQL Lattice, an
early npm module that helps organize your GraphQL Objects.


### Dependencies
In order to get started, you are going to need to have nodejs and git
on your machine. If you are running Windows, this tutorial may not work
for you as I have not had enough time to vet it. Node 4 works, but
Node 6 and 8 will work better and require a lot less modification to
use all the fun features. *I did not test Node versions prior to 4.x
Your mileage may vary*
f

##### NVM (Node Version Manager)
If you have not used `nvm` before, I highly recommend
taking a look at it. You can install it locally by typing the commands
below. It allows you to have multiple versions of node on your machine
and the ability to swap back and forth with ease.

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`


### Fetch the code
You can fetch the code we will be working with using the following git command.

```
git clone https://github.com/nyteshade/example.graphql-lattice.com.git
cd example.graphql-lattice.com
npm install
npm run build
npm run start
```

### Workshop stages


##### Step One
Here we will be setting up GraphQL Lattice

`git checkout step-1`

##### Step Two
Let us use (jsonplaceholder.typicode.com)[http://jsonplaceholder.typicode.com]
to act as a read-only data source for our graph today. In order to
get started we will be modeling a GraphQL object after their blog
post JSON data.

`git checkout step-2`

##### Step Three
The post references a userid in their response. Let us take a look
at modeling their user data.

`git checkout step-3`

##### Step Four
Skipping the address, its geo data and the company did not seem like
a useful example, did it. Lets implement those missing pieces and
see how we can stitch them together.

`git checkout step-4`

##### Step Five
We now have a working and linked User object with working addresses
and geo location. To bring this full circle, let us add a field on
the post object that will allow us to drill into a given post and
get any associated user data from it.

`git checkout step-5`
