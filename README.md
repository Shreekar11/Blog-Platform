# Blog Platform

**Blog platform** is a personal platform where **users** can sign up, log in, and **post blogs**. The platform allow users to view all posts and filter them by author. 

# Description

In this platform **users** can **create** and view **blogs**. The platform also allows **users** to **filter** blogs by **author id**.The platform is majorly built in **TypeScript**. The frontend is built using **Next.js**, **Tailwind CSS** and **Shadcn**, where the **blogs** at the **homepage** and the **user dashboard** are retreived using **Server Side Rendering** using **Next.js** and the backend is built using **Node.js** and **Express**. The database used is **PostgreSQL**. Utitlised **JWT** for **authentication** and **authorization** also used **cookies** to store the **token** on server side.

# View website

Here is the deployed website : [Deployed Link](https://blog-platform-zeta-five.vercel.app/)<br>
Here is the deployed backend server: [Backend Link](https://blog-platform-vq3i.onrender.com/);

# Installation

To install and run this project locally, add the following commands in your terminal, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   `git clone https://github.com/Shreekar11/Blog-Platform.git`

   ```

2. Navigate into the project directory:

```bash
   `cd Blog-Platform`
```

3. Navigate into client:
   
```bash
   `cd client`
```

4. Navigate into server:

```bash
   `cd server`
```

## Important
5. Ensure that the version of `Node.js` and `npm` you're using is compatible with the dependencies you're installing. Some dependencies may require specific Node.js versions.
   Run the below command in **client** directory and **server** directory.

```bash
   `npm install -g npm@latest`
```

6. Install `dependencies` for the frontend in **client** directory (assuming you have `Node.js` and `npm` installed):

```bash
   `npm install`
```

7. Install `dependencies` for the backend in **server** directory (assuming you have `Node.js` and `npm` installed):

```bash
   `npm install`
```

8. Create a .env file in the **client** directory and add backend **api endpoint**:

   `NEXT_PUBLIC_BASEURL`=`http://localhost:5000` (for **local** server)

   `NEXT_PUBLIC_BASEURL`=`https://blog-platform-vq3i.onrender.com` (for **deployed** server)

9. Create a .env file in the server directory and connect with your postgresql credentials:

   `PORT`=`5000`
   `HOST`=`your-host`
   `USER`=`your-user`
   `PASSWORD`=`your-password`
   `DB`=`your-database-name`

10. Start the frontend and backend servers:

   **client**: `npm run dev`<br>
   **server**: `npm run dev`

11. Open your browser and navigate to `http://localhost:3000` to view the application.

# Images

## Home page
![Screenshot (343)](https://github.com/Shreekar11/Blog-Platform/assets/123613407/4147bc3a-39e6-4f26-bba4-88787216f3a8)

## Dashboard
![Screenshot (344)](https://github.com/Shreekar11/Blog-Platform/assets/123613407/f498e5c7-1622-4f95-be72-0cd714a63717)

## Search Author blogs
![Screenshot (345)](https://github.com/Shreekar11/Blog-Platform/assets/123613407/410aba16-c4a5-4576-8108-33065b130256)

## Login page
![Screenshot (346)](https://github.com/Shreekar11/Blog-Platform/assets/123613407/3ca0da56-d481-446c-a858-f644863867f1)

## Register page
![Screenshot (347)](https://github.com/Shreekar11/Blog-Platform/assets/123613407/b4e955d3-201f-4804-a08d-1dbef066e1c1)
