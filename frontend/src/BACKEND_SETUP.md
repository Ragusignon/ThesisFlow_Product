# Backend API Setup Guide

This document explains how to connect the ThesisFlow frontend to your Node.js backend.

## Current State

✅ **Frontend**: Fully functional using `localStorage`  
⚠️ **Backend**: API connection layer ready, but **disabled by default**  
🔧 **Configuration Required**: You need to configure and enable the backend API

---

## Quick Start

### 1. Enable Backend API

In `/utils/apiService.ts`, change:

```typescript
export const USE_BACKEND_API = false;
```

To:

```typescript
export const USE_BACKEND_API = true;
```

### 2. Configure API Base URL

In `/utils/api.ts`, update the API base URL:

```typescript
// Development
export const API_BASE_URL = 'http://localhost:3001/api';

// Production (use environment variable)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
```

### 3. Set Environment Variable (Optional)

Create a `.env` file in your project root:

```bash
REACT_APP_API_URL=http://localhost:3001/api
```

For production:

```bash
REACT_APP_API_URL=https://api.thesisflow.com/api
```

---

## Backend API Requirements

Your Node.js backend must implement the following endpoints:

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/logout` | Admin logout |
| GET | `/api/auth/verify` | Verify auth token |
| POST | `/api/auth/refresh` | Refresh auth token |

### Blog Post Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blog` | Get all blog posts |
| GET | `/api/blog/:id` | Get blog post by ID |
| GET | `/api/blog/slug/:slug` | Get blog post by slug |
| POST | `/api/blog` | Create new blog post |
| PUT | `/api/blog/:id` | Update blog post |
| DELETE | `/api/blog/:id` | Delete blog post |
| POST | `/api/blog/:id/featured` | Set as featured post |

### Documentation Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/documentation` | Get all documentation pages |
| GET | `/api/documentation/:id` | Get documentation by ID |
| GET | `/api/documentation/slug/:slug` | Get documentation by slug |
| POST | `/api/documentation` | Create new documentation |
| PUT | `/api/documentation/:id` | Update documentation |
| DELETE | `/api/documentation/:id` | Delete documentation |
| GET | `/api/documentation/categories` | Get all categories |

### Newsletter Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/newsletter` | Get all subscribers |
| POST | `/api/newsletter/subscribe` | Subscribe to newsletter |
| DELETE | `/api/newsletter/:id` | Unsubscribe |
| GET | `/api/newsletter/export` | Export subscribers |

### Demo Request Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/demo` | Get all demo requests |
| POST | `/api/demo` | Create demo request |
| GET | `/api/demo/:id` | Get demo request by ID |
| POST | `/api/demo/:id/status` | Update demo status |
| DELETE | `/api/demo/:id` | Delete demo request |
| GET | `/api/demo/export` | Export demo requests |

### Contact Message Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contact` | Get all contact messages |
| POST | `/api/contact` | Create contact message |
| GET | `/api/contact/:id` | Get contact message by ID |
| POST | `/api/contact/:id/status` | Update message status |
| DELETE | `/api/contact/:id` | Delete contact message |
| GET | `/api/contact/export` | Export contact messages |

### Referral Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/referral` | Get all referrals |
| POST | `/api/referral` | Create referral |
| GET | `/api/referral/:id` | Get referral by ID |
| POST | `/api/referral/:id/status` | Update referral status |
| DELETE | `/api/referral/:id` | Delete referral |
| GET | `/api/referral/export` | Export referrals |

### Trash Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/trash` | Get all trash items |
| POST | `/api/trash/:id/restore` | Restore from trash |
| DELETE | `/api/trash/:id` | Permanently delete |
| DELETE | `/api/trash/empty` | Empty all trash |

---

## Request/Response Format

### Authentication

**Login Request:**
```json
{
  "email": "admin@migritech.com",
  "password": "thesisbase"
}
```

**Login Response:**
```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "email": "admin@migritech.com",
      "name": "Admin User",
      "role": "admin"
    }
  }
}
```

### Blog Posts

**Create/Update Request:**
```json
{
  "title": "Blog Post Title",
  "slug": "blog-post-slug",
  "excerpt": "Short description",
  "content": "<p>HTML content</p>",
  "author": "Author Name",
  "category": "Product Updates",
  "readTime": "5 min",
  "image": "https://...",
  "status": "Published"
}
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "title": "Blog Post Title",
    "slug": "blog-post-slug",
    "excerpt": "Short description",
    "content": "<p>HTML content</p>",
    "author": "Author Name",
    "category": "Product Updates",
    "date": "Jan 10, 2026",
    "readTime": "5 min",
    "image": "https://...",
    "status": "Published",
    "lastModified": "Jan 10, 2026",
    "featured": false
  }
}
```

### Newsletter

**Subscribe Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "email": "user@example.com",
    "subscribedAt": "2026-01-10T12:00:00Z"
  }
}
```

### Demo Requests

**Create Request:**
```json
{
  "name": "John Doe",
  "email": "john@university.edu",
  "institution": "MIT",
  "role": "Graduate School Administrator",
  "message": "Interested in learning more"
}
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@university.edu",
    "institution": "MIT",
    "role": "Graduate School Administrator",
    "message": "Interested in learning more",
    "status": "pending",
    "createdAt": "2026-01-10T12:00:00Z"
  }
}
```

---

## Authentication

The frontend sends the authentication token in the `Authorization` header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

The token is stored in `localStorage` after successful login and automatically included in all API requests.

---

## Error Handling

All errors should follow this format:

```json
{
  "error": "Error message here",
  "message": "Detailed error description",
  "statusCode": 400
}
```

The frontend will automatically handle these errors and display appropriate messages to users.

---

## Database Schema

You'll need to create database tables/collections for:

1. **Blog Posts** - `blog_posts`
2. **Documentation Pages** - `documentation_pages`
3. **Legal Pages** - `legal_pages`
4. **Newsletter Subscribers** - `newsletter_subscribers`
5. **Demo Requests** - `demo_requests`
6. **Contact Messages** - `contact_messages`
7. **Referrals** - `referrals`
8. **Trash Items** - `trash_items` (12-month retention)
9. **Admin Users** - `admin_users`

### Example MongoDB Schema (Blog Post)

```javascript
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
  image: { type: String },
  status: { type: String, enum: ['Published', 'Draft'], default: 'Draft' },
  lastModified: { type: String, required: true },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

---

## Migration from localStorage to Database

When you enable the backend API, you may want to migrate existing localStorage data to your database:

1. Export data from localStorage (use the Export feature in admin dashboard)
2. Import the exported data into your database
3. Enable `USE_BACKEND_API = true`
4. Test all functionality

---

## Testing Backend Connection

1. Start your Node.js backend server
2. Set `USE_BACKEND_API = true` in `/utils/apiService.ts`
3. Try logging into the admin dashboard
4. Check browser console for any API errors
5. Test creating/updating/deleting content

---

## Security Considerations

1. **CORS**: Configure CORS on your backend to allow requests from your frontend domain
2. **HTTPS**: Use HTTPS in production
3. **JWT Secret**: Use a strong secret key for JWT token generation
4. **Input Validation**: Validate all inputs on the backend
5. **Rate Limiting**: Implement rate limiting to prevent abuse
6. **SQL Injection**: Use parameterized queries or ORM
7. **XSS Protection**: Sanitize HTML content before storing

---

## Environment Variables

Create these environment variables on your backend:

```bash
# Server
PORT=3001
NODE_ENV=production

# Database
MONGODB_URI=mongodb://localhost:27017/thesisflow
# OR
DATABASE_URL=postgresql://user:password@localhost:5432/thesisflow

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=24h

# CORS
ALLOWED_ORIGINS=https://thesisflow.com,https://www.thesisflow.com

# Admin Credentials
ADMIN_EMAIL=admin@migritech.com
ADMIN_PASSWORD_HASH=<bcrypt-hashed-password>
```

---

## Support

If you need help setting up the backend:

1. Check the browser console for detailed error messages
2. Check your backend server logs
3. Verify all environment variables are set correctly
4. Ensure your database is running and accessible
5. Test API endpoints using tools like Postman or curl

---

## Files Modified

- `/utils/api.ts` - HTTP client and API endpoints
- `/utils/apiService.ts` - Service layer for API calls
- All existing data files in `/utils` remain unchanged and work with localStorage

---

**Note**: Currently, `USE_BACKEND_API` is set to `false`, so the app uses localStorage. Change it to `true` when your backend is ready.
