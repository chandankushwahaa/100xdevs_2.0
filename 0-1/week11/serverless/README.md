# Serveless FNS

As a developer, you're likely well-versed in building frontend applications using technologies like HTML, CSS, JavaScript, and frameworks such as React. Deploying these frontend apps is relatively straightforward with platforms like Vercel or Netlify. However, when it comes to deploying backend servers, it can feel like trying to navigate through a maze blindfolded.

### Understanding Backend Servers:
Backend servers are the backbone of many web applications, handling data processing, database interactions, authentication, and other critical functionalities. While frontend development focuses on user interfaces and interactions, the backend manages the server-side logic, ensuring smooth communication between the frontend and the database.

### Building Backend Servers with Express:
For those familiar with backend development, Express.js is a popular choice for creating backend servers in `Node.js`. With Express, you can easily define routes, handle `HTTP` requests, and integrate middleware to enhance your server's functionality. Running an Express server typically involves executing a command like node `index.js`, which starts the server process on a specified port.

### Deploying Backend Servers:
Deploying a backend server involves making your application accessible over the internet. While this may seem daunting, there are several cloud platforms that simplify the deployment process:

**AWS (Amazon Web Services):** AWS provides a comprehensive suite of cloud computing services, including Elastic Compute Cloud (EC2) for hosting virtual servers, AWS Lambda for serverless computing, and Amazon Elastic Container Service (ECS) for containerized applications.

**GCP (Google Cloud Platform Services)**: Google Cloud Platform offers a range of services for deploying and managing backend applications, such as Google Compute Engine for virtual machine instances, Google Kubernetes Engine (GKE) for container orchestration, and Google Cloud Functions for serverless computing.

**Azure**: Microsoft Azure provides a variety of services for hosting backend applications, including Azure Virtual Machines, Azure App Service for web applications, and Azure Functions for serverless computing.

**Cloudflare**: While primarily known for its content delivery network (CDN) services, Cloudflare also offers solutions for deploying and managing backend applications, such as Cloudflare Workers for serverless computing and Cloudflare Pages for hosting static sites and Jamstack applications.

## Understanding `Serverless` Backends:
Serverless backends, also known as Function-as-a-Service (FaaS), are a cloud computing model where developers write and deploy functions or pieces of code without worrying about managing the underlying infrastructure. In a serverless architecture, the cloud provider dynamically manages the allocation of resources, scaling them up or down based on demand, and developers are only charged for the resources consumed during function execution.

#### Simple Definition
Imagine if you could simply write your Express routes, hit a button, and your application would automatically deploy, scale up or down based on demand, and charge you only for the requests made to it. That's the essence of serverless computing.

### However, there are a couple of challenges with this approach:

**Cost at Scale:** While serverless computing can be cost-effective for low to moderate usage, it can become more expensive at scale compared to traditional virtual machines (VMs), especially if your application experiences high and sustained traffic.

**Cold Start Problem:** Serverless functions may experience a delay, known as a "cold start," when they are invoked for the first time or after a period of inactivity. This latency can impact the responsiveness of your application, particularly for real-time or latency-sensitive use cases.

Despite these challenges, serverless computing offers developers a simplified deployment model, automatic scalability, and a pay-as-you-go pricing structure, making it an attractive option for many applications.

## Famous serverless providers
There are many famous backend serverless providers - 

- [AWS Lambda](https://aws.amazon.com/pm/lambda/?trk=5cc83e4b-8a6e-4976-92ff-7a6198f2fe76&sc_channel=ps&ef_id=CjwKCAiAt5euBhB9EiwAdkXWO-i-th4J3onX9ji-tPt_JmsBAQJLWYN4hzTF0Zxb084EkUBxSCK5vhoC-1wQAvD_BwE:G:s&s_kwcid=AL!4422!3!651612776783!e!!g!!aws%20lambda!19828229697!143940519541)
- [Google Function Firebase](https://firebase.google.com/docs/functions)
- [Cloudflare Workers](https://workers.cloudflare.com/)


## You should consider using a `serverless architecture` in the following scenarios:

- When you need to get off the ground quickly and don't want to worry about deployments 
- When you can't anticipate traffic and don't want to worry about autoscaling
- If you have very low traffic and want to optimize for costs:

> **We will be using cloudflare in our project.**

## [How Cloudflare workers Works](https://developers.cloudflare.com/workers/reference/how-workers-works/#:~:text=Though%20Cloudflare%20Workers%20behave%20similarly,used%20by%20Chromium%20and%20Node)


## Initalizing a Cloudflare Worker

```
npm create cloudflare -- cloudflare-app
```
**Select `NO` for Do you want to deploy your application**


```
npm run dev
```

In `package.json` file there is no `express` you will find `Wrangler`. It is a command-line tool for building and managing Cloudflare's Developer Platform.


Add the code to `index.ts`

```ts
export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// console.log(request.body);
		// console.log(request.headers);
		// console.log(request.method);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};
```
### Deploying Worker on the Internet
1. Login to Cloudflare via the `wrangler CLI`
```
npx wrangler login
```
2. To Check After Login
```
npx wrangler whoami
```
3. Deploy
```
npm run deploy
```

> **[See My App HERE](https://cloudflare-app.chandan7979ck.workers.dev/)**


## What is [Hono](https://hono.dev/concepts/motivation) ? 
It a framework for cloudflare workers. It is a routing engine (it not like an HTTP server) that route request to certain places gives an easier way to write code similar to `Express`.

### 1. Create a Project

```
npm create hono@latest hono-app
```
**select `cloudflare-workers` Runtime**
### 2. Move to `hono-app`
```
npm i
```
### 3. Hello World
```jsx
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello from Cloudflare Workers!'))

export default app
```
This code has very similar to `express`.

### 4. Run
```
npm run dev
```

###  5. Getting Input from User
```jsx
import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
```
> Use `Postman` and send make a `POST` request:
- body: {"message": "hii"}
- Headers: Authorization 12345
- query link: http://127.0.0.1:8787/?param=2


### 6. Deploy
```
npm run deploy
```
> Here is the [Link](https://hono-app.chandan7979ck.workers.dev/)


### Recap
- What is Serveless Function / Architucture
- Why it is better / Worst then normal deployment.
- Popular Providers
  - AWS
  - GCP
  - Cloudflare
- We discuss Cloudflare and it offer cloudflare workers. It is javascript runtime very similar to `node.js` or `bun.js`.
- They have been written in a very strict way that we cannot use `express` in cloudflare. so they come up with a libray called`hono`. It gives access to everything like body, headers, qery, middleware,  connection to databases.