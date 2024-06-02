# Africagram API

## Project Overview
Africagram is a photo-sharing platform designed specifically for Africans and by Africans. This API allows users to upload images, follow other users, like and comment on posts, and provides an admin dashboard with key analytics.

## Features
- **User Authentication and Authorization**: Secure user authentication and authorization using JWT.
- **Image Uploads**: Users can upload images in JPEG, PNG, and GIF formats.
- **Like and Comment**: Users can like and comment on posts.
- **Follow Users**: Users can follow and unfollow other users.
- **News Feed**: Generates a news feed sorted by publication date with pagination.
- **Admin Analytics Dashboard**: Provides key analytics such as total users, users by country, average posts per user, and gender distribution.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **Prisma**: ORM (Object-Relational Mapping) tool.
- **JWT**: JSON Web Token for secure authentication.
- **Multer**: Middleware for handling multipart/form-data, used for image uploads.
- **Joi**: Object schema validation library for validating request data.

## Project Setup

### Prerequisites
- Node.js (v12.x or higher)
- MySQL (v5.7 or higher)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/africagram-api.git
    cd africagram-api
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    - Create a MySQL database.
    - Configure the database connection in the `.env` file (copy from `.env.example`).

    ```sh
    cp .env.example .env
    ```

4. **Run database migrations:**
    ```sh
    npx prisma migrate deploy
    ```

5. **Start the server:**
    ```sh
    npm start
    ```

## API Endpoints

### User Endpoints
- **Register**: `POST /api/register`
- **Login**: `POST /api/login`
- **Logout**: `POST /api/logout`
- **Update User**: `PUT /api/users/:id`
- **Get User Posts**: `GET /api/users/:id/posts`

### Post Endpoints
- **Create Post**: `POST /api/posts`
- **Like Post**: `POST /api/posts/:id/like`
- **Comment on Post**: `POST /api/posts/:id/comment`
- **Get Post**: `GET /api/posts/:id`
- **Get News Feed**: `GET /api/posts/newsfeed`

### Analytics Endpoints
- **Total Users**: `GET /api/admin/total-users`
- **Users by Country**: `GET /api/admin/users-by-country`
- **Average Posts per User**: `GET /api/admin/avg-posts-per-user`
- **Gender Distribution**: `GET /api/admin/gender-distribution`

## Dynamic Sections
- **Posts**: Dynamically render posts on the frontend using your preferred templating engine or framework.
- **Comments and Likes**: Display likes and comments dynamically as users interact with posts.

## Email Functionality
- **Nodemailer**: Set up for sending emails (e.g., for user notifications or admin alerts).
- **Integration**: Can be integrated with email marketing services like Mailchimp or SendGrid.

## Logging
- Middleware to log incoming requests.
- Logs can be saved to a text file or any other logging service.

## Data Validation
- **Joi**: Used for object schema validation to ensure request data integrity.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.

## License
This project is licensed under the MIT License.

## Contact
For any questions or inquiries, please contact [aboulouafareda@gmail.com, meftahiyassere@gmail.com].

