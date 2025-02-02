# TaskFlow - Collaborative Task Management System

TaskFlow is a powerful, flexible task management system designed for teams to collaborate efficiently. Built with **NestJS**, **GraphQL**, and **Prisma**, TaskFlow allows users to create projects, assign tasks, track progress, and receive real-time updates.

---

## 🚀 Features

- **User Authentication**: Secure sign-up and login with JWT-based authentication.
- **Role-Based Access Control (RBAC)**: Manage permissions with Admin, Manager, and Member roles.
- **Project Management**: Create, update, and delete projects.
- **Task Management**: Assign tasks to team members, set priorities, and track deadlines.
- **Real-Time Updates**: Get live notifications on task status changes using GraphQL subscriptions.
- **Advanced Authorization**: Protect sensitive data with custom guards and directives.
- **Scalable Architecture**: Optimized for performance and easy deployment.

---

## 🛠️ Tech Stack

- **Backend:** NestJS
- **API:** GraphQL with Apollo Server
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Authentication:** JWT
- **Real-Time:** GraphQL Subscriptions (WebSockets)
- **Deployment:** Docker, CI/CD (GitHub Actions)

---

## 📦 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/taskflow.git
   cd taskflow
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/taskflow
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Development Server:**
   ```bash
   npm run start:dev
   ```

---

## 🔑 Authentication

- **Register:** `registerUser` mutation
- **Login:** `login` mutation (returns JWT)
- **Protected Routes:** Use JWT in the Authorization header

Example:
```bash
Authorization: Bearer <your-token>
```

---

## 📊 GraphQL Playground

Access the GraphQL Playground at:
```
http://localhost:3000/graphql
```

You can perform queries, mutations, and subscriptions directly in the playground.

---

## 🚀 Deployment

1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Run in Production Mode:**
   ```bash
   npm run start:prod
   ```

3. **Docker Deployment:**
   ```bash
   docker build -t taskflow .
   docker run -p 3000:3000 taskflow
   ```

---

## ✅ Testing

Run unit and integration tests using Jest:
```bash
npm run test
```

For end-to-end (E2E) testing:
```bash
npm run test:e2e
```

---

## 💡 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Acknowledgments

- NestJS Team
- Prisma Contributors
- GraphQL Community

Happy coding! 🎉

