# NextJS (Client Side) [Notes](https://projects.100xdevs.com/tracks/nextjs-1/next-1)

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Everything we can do in React we can also do in Next.js – with some additional features like routing, API calls, authentication, and more. We don’t have these features in React. Instead, we have to install some external libraries and dependencies – like React Router for routing in a single page React app, for example.

But in Next.js, things are different. We don’t have to rely on external libraries to get these kinds of things done. They come built into the package when we create a Next.js app.

## Upsides:

- **Improved SEO**: Server-side rendering (SSR) ensures your content is readily available to search engines, boosting your website's discoverability.
- **Unified Codebase**: API routes allow you to manage both frontend and backend logic within a single codebase, streamlining development.
- **Simplified Routing**: File-based routing eliminates the need for additional libraries like react-router-dom, making navigation management easier.
- **Performance Optimization**: Next.js automatically optimizes bundles and enables static site generation (SSG) for lightning-fast loading times.
- **Vercel Backing**: The framework benefits from the strong support and ongoing development by the Vercel team.

## Downsides:

- **Server Dependency**: Unlike pure static sites, Next.js applications require a server to handle SSR, potentially increasing hosting costs.
- **Opinionated Structure**: Next.js enforces a specific project structure and conventions. Transitioning to a different framework later might require significant refactoring.


## Installation

```
npx create-next-app@latest
```

### Inside app Folder - We will be working 99% inside this folder
`layout.tsx`
- This file defines the overall layout of your application. It serves as a template that wraps around your individual pages, providing a consistent structure for elements like headers, footers, navigation bars, etc.
- You can reuse the layout.js file across multiple pages in your app, ensuring a cohesive user experience.

`page.tsx`
- This file acts as a catch-all route for unmatched URLs in your application. It's similar to a 404 page, but it gives you more control over how you handle these situations.
- You can customize the `page.js` file to display an error message, redirect users to a specific page, or provide other informative content to guide them.

## Running
```
npm run dev
```

## Routing

### File-Based Routing: 
At the core, Next.js uses a file-system based routing approach. Each file within the pages directory maps to a specific route in your application. The file name and its location within the directory structure determine the URL path.
- A file named `app/page.tsx` corresponds to the root URL `/`.
- A file named `app/signup/page.tsx` maps to the URL path `/signup`.
- A file named `app/signin/page.jsx` maps to the URL path `/signin`.

### Dynamic Routes:
Next.js supports dynamic routes using square brackets [] around a parameter name in the file path. This allows you to create routes that can match various values.
Within your component (e.g., pages/blog/[slug].js), you can access the dynamic parameter using the `useRouter` hook provided by Next.js. This hook gives you information about the current URL, including the dynamic parameter value.

## Layouts
Layouts in Next.js are a powerful feature that allow you to define shared UI components across multiple routes in your application. They provide a way to wrap child pages or nested layouts with common elements, such as headers, footers, sidebars, or any other reusable UI components.

Here's what you can do with layouts in Next.js: [Layout-notes](https://projects.100xdevs.com/tracks/nextjs-1/next-9)

1. **Define a Root Layout**:
    - The `app` directory in a Next.js application must include a root `layout.tsx` (or `layout.js`) file.
    - This root layout is responsible for defining the `<html>` and `<body>` tags, as well as any globally shared UI components.
    - It acts as the top-most layout, wrapping all other layouts and pages in your application.
2. **Create Nested Layouts**:
    - You can create nested layouts by adding `layout.tsx` files inside specific route segments (folders).
    - These nested layouts wrap the child pages or nested layouts within their respective route segments.
    - Nested layouts allow you to define UI components that are shared among a subset of routes in your application.
3. **Wrap Child Pages**:
    - Layouts wrap the child pages or nested layouts using the `children` prop.
    - The `children` prop is populated with the component of the child page or nested layout during rendering.
    - This allows you to surround the child content with your desired UI components, such as headers, footers, or sidebars.
4. **Access Route Parameters**:
    - Layouts can access dynamic route parameters through the `params` prop.
    - This prop contains an object with the dynamic route parameters from the root segment down to the current layout.
    - You can use these parameters to conditionally render UI components or fetch data based on the current route.
5. **Preserve State and Interactivity**:
    - On navigation, layouts preserve their state and remain interactive, without re-rendering.
    - This behavior is different from pages, which re-render on navigation.
    - Layouts can maintain state across route changes, providing a seamless user experience.
6. **Fetch Data**:
    - While layouts cannot use the built-in `getServerSideProps` or `getStaticProps` functions, you can fetch data on the client-side using hooks like `useEffect` or libraries like SWR.
    - This allows you to fetch data for shared UI components within your layouts.


## Merging Routes
Next.js provides two approaches to merge routes and share UI components across multiple routes. Let's explore both approaches:

## **Approach #1: Nesting Routes**

In this approach, you can nest the `signup` and `signin` routes under a common parent route, such as `auth`. By creating a layout for the `auth` route, you can share UI components across both the `/signup` and `/signin` routes.

Here's how you can implement this approach:

1. Create an `auth` folder inside the `app` directory.
2. Inside the `auth` folder, create a `layout.tsx` file and define the shared UI component (e.g., the banner).

```tsx
// app/auth/layout.tsx
export default function ({ children }: {
  children: React.ReactNode
}) {
  return <div className="flex flex-col items-center justify-center">
    <p className="border-b p-4">Sign in and get 20% discount.</p> 
    
    {children}
  </div>
}
```
Move the signup and signin folders inside the auth folder.
```
app/
└── auth/
    ├── signup/
    │   └── page.tsx
    └── signin/
        └── page.tsx
```
With this structure, the AuthLayout component will wrap both the /signup and /signin routes, displaying the "Login now to get 20% off" banner at the top.

You can access these routes at:

- `http://localhost:3000/auth/signup`
- `http://localhost:3000/auth/signin`

## **Approach #2: Using a Parenthesized Folder**
Next.js allows you to create a parenthesized folder, which is ignored by the router. This approach is useful when you want to share UI components across multiple routes without nesting them under a common parent route.

Here's how you can implement this approach:

1. Create a new folder with parentheses around its name, e.g., `(auth)`, inside the `app` directory.
2. Inside the `(auth)` folder, create a `layout.tsx` file and define the shared UI component (e.g., the banner).
```tsx
// app/(auth)/layout.tsx
export default function ({ children }: {
  children: React.ReactNode
}) {
  return <div className="flex flex-col items-center justify-center">
    <p className="border-b p-4">Sign in and get 20% discount.</p> 
    
    {children}
  </div>
}
```
You can access these routes at:

- `http://localhost:3000/signup`
- `http://localhost:3000/signin`


## **Add a button onclick handler**
Now try adding a onclick handler to the button on the signin page
```tsx
// app/auth/signin

  function handler(){
    console.log('Sign in button clicked')
  }

  <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
```

When you add an `onClick` handler to the sign-in button in the Signin component, you might encounter an error in the browser console. This error occurs because the Signin component is rendered on the server-side during the initial page load, and the browser doesn't have access to the console object on the server.

Here's what's happening behind the scenes:

1. **Server-Side Rendering (SSR)**: When you visit the **`/signin`** route, Next.js renders the **`Signin`** component on the server-side, which includes executing the **`onClick`** handler and the **`console.log`** statement.
2. **Server Environment**: On the server-side, Node.js doesn't have access to the browser's **`console`** object, which is a client-side API. This is why you see the error about the **`console`** object being deprecated.
3. **Hydration**: After the initial server-rendered HTML is sent to the browser, Next.js "hydrates" the application by attaching event handlers and making it interactive on the client-side.
4. **Client-Side Rendering**: Once the application is hydrated on the client-side, the **`onClick`** handler and the **`console.log`** statement will work as expecte, as the browser environment has access to the **`console`** object.

> *We can fix it by writing `"use client"` in the top of the code and the error is gone.*