# Africagram - Social Media API

## 📖 Project Context

Africagram is a **social media platform** designed specifically for Africans. Similar to other photo-sharing networks, users can **upload images, like and comment on posts, and follow other users**. The primary goal is to create an **innovative and secure** application while ensuring data privacy.

---

## 🚀 Application Features

### 📌 **Core Features**

- **User Authentication**: Users must sign in to access their accounts.
- **Image Upload**: Users can upload images in JPEG, PNG, or GIF format (max 5MB).
- **Likes and Comments**: Users can like and comment on posts.
- **Followers**: Users can follow others.
- **News Feed**: The system generates a feed sorted by the most recent posts.
- **Admin Dashboard**: Displays analytics such as total users, users by country, average posts per user, and gender distribution.

### 📌 **Bonus Features** (Optional Enhancements)

- **OTP Verification**: Additional security via SMS/email code verification.
- **Daily Upload Limit**: Users can upload a maximum of 10 images per day.
- **Activity Logs**: Track and visualize modifications.
- **News Feed Pagination**: Display posts in increments of 5 per load.

---

## 🏗️ **Database Schema**

- **User**: `id`, `id_profile`, `firstname`, `lastname`, `email`, `password`, `isAdmin`, `created_at`, `updated_at`
- **Profile**: `id`, `user_id`, `gender`, `country`, `city`, `created_at`, `updated_at`
- **Post**: `id`, `user_id`, `caption`, `image_url`, `created_at`, `updated_at`
- **Like**: `id`, `user_id`, `post_id`, `created_at`
- **Comment**: `id`, `user_id`, `post_id`, `message`, `created_at`
- **Follower**: `id`, `following_id`, `follower_id`, `created_at`

---

## 🔌 API Endpoints

- **User Management**:
  - Register a new user
  - Update user data
  - Authenticate a user

- **Post Management**:
  - Retrieve posts of an authenticated user
  - Create a new post

- **Social Features**:
  - Like a post
  - Follow a user
  - Comment on a post
  - Retrieve the latest news feed

- **Analytics & Security**:
  - Get app statistics
  - Implement OTP verification (Bonus)

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (via Mongoose)
- **Validation**: Express-validator
- **Authentication**: JWT
- **Image Uploads**: Cloudinary / Amazon S3
- **Error Handling**: Custom error middleware
- **Testing**: Jest & Supertest
- **Email Services**: Nodemailer (SMTP)
- **Cron Jobs**: Automate email newsletters

---

## 💻 Installation

1. **Clone the project**:

   ```bash
   git clone https://github.com/your-username/africagram.git
   cd africagram
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. Access the API: `http://localhost:5000`

---

## 🎉 Contribution

Contributions are welcome!

- Fork the repo
- Create a branch (`feature/improvement`)
- Submit a PR

---

## 📄 License

This project is licensed under the MIT License. See the **LICENSE** file for details.

---

## 📬 Contact

For any questions, feel free to contact me:

- **Email**: [aboulouafareda@gmail.com]
- **LinkedIn**: [Reda Aboulouafa](www.linkedin.com/in/reda-aboulouafa-993a11220)

