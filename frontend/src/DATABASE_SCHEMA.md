# Database Schema Reference

This document provides the complete database schema for ThesisFlow. Use this as a reference when setting up your database (MongoDB, PostgreSQL, MySQL, etc.).

---

## 1. Admin Users

Store admin authentication credentials.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| email | String | Yes | Yes | - | Admin email |
| password | String | Yes | No | - | Hashed password (bcrypt) |
| name | String | Yes | No | - | Admin name |
| role | String | Yes | No | 'admin' | User role |
| createdAt | DateTime | Yes | No | NOW() | Account creation time |
| lastLogin | DateTime | No | No | - | Last login time |
| active | Boolean | Yes | No | true | Account active status |

### Example SQL (PostgreSQL)

```sql
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  active BOOLEAN DEFAULT true
);

-- Index for faster login queries
CREATE INDEX idx_admin_email ON admin_users(email);
```

### Example MongoDB Schema

```javascript
const adminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  active: { type: Boolean, default: true }
});

adminUserSchema.index({ email: 1 });
```

---

## 2. Blog Posts

Store all blog posts and articles.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| title | String | Yes | No | - | Post title |
| slug | String | Yes | Yes | - | URL-friendly slug |
| excerpt | Text | Yes | No | - | Short description |
| content | Text | Yes | No | - | Full HTML content |
| author | String | Yes | No | - | Author name |
| category | String | Yes | No | - | Post category |
| date | String | Yes | No | - | Publication date (formatted) |
| readTime | String | Yes | No | - | Estimated read time |
| image | String | No | No | - | Featured image URL |
| status | Enum | Yes | No | 'Draft' | 'Published' or 'Draft' |
| lastModified | String | Yes | No | - | Last modified date |
| featured | Boolean | No | No | false | Is featured post |
| createdAt | DateTime | Yes | No | NOW() | Record creation time |
| updatedAt | DateTime | Yes | No | NOW() | Record update time |

### Example SQL (PostgreSQL)

```sql
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  date VARCHAR(50) NOT NULL,
  read_time VARCHAR(50) NOT NULL,
  image TEXT,
  status VARCHAR(20) DEFAULT 'Draft' CHECK (status IN ('Published', 'Draft')),
  last_modified VARCHAR(50) NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_status ON blog_posts(status);
CREATE INDEX idx_blog_featured ON blog_posts(featured);
CREATE INDEX idx_blog_category ON blog_posts(category);
```

### Example MongoDB Schema

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
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

blogPostSchema.index({ slug: 1 });
blogPostSchema.index({ status: 1 });
blogPostSchema.index({ featured: 1 });
blogPostSchema.index({ category: 1 });
```

---

## 3. Documentation Pages

Store documentation and help articles.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| title | String | Yes | No | - | Documentation title |
| slug | String | Yes | Yes | - | URL-friendly slug |
| content | Text | Yes | No | - | Full HTML content |
| category | String | Yes | No | - | Documentation category |
| excerpt | Text | Yes | No | - | Short description |
| lastUpdated | String | Yes | No | - | Last update date |
| order | Integer | No | No | 0 | Display order |
| createdAt | DateTime | Yes | No | NOW() | Record creation time |
| updatedAt | DateTime | Yes | No | NOW() | Record update time |

### Categories

- Getting Started
- User Guide
- Admin Guide
- API Reference
- Troubleshooting
- FAQ

### Example SQL (PostgreSQL)

```sql
CREATE TABLE documentation_pages (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  excerpt TEXT NOT NULL,
  last_updated VARCHAR(50) NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_doc_slug ON documentation_pages(slug);
CREATE INDEX idx_doc_category ON documentation_pages(category);
CREATE INDEX idx_doc_order ON documentation_pages(display_order);
```

### Example MongoDB Schema

```javascript
const documentationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Getting Started', 'User Guide', 'Admin Guide', 'API Reference', 'Troubleshooting', 'FAQ']
  },
  excerpt: { type: String, required: true },
  lastUpdated: { type: String, required: true },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

documentationSchema.index({ slug: 1 });
documentationSchema.index({ category: 1, order: 1 });
```

---

## 4. Legal Pages

Store legal documents (Privacy Policy, Terms of Service, etc.).

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | String | Yes | Yes | - | Page identifier (e.g., 'privacy-policy') |
| title | String | Yes | No | - | Page title |
| content | Text | Yes | No | - | Full HTML content |
| lastUpdated | String | Yes | No | - | Last update date |
| version | String | No | No | '1.0' | Document version |
| updatedAt | DateTime | Yes | No | NOW() | Record update time |

### Page IDs

- privacy-policy
- terms-of-service
- cookie-policy
- gdpr-compliance
- compliance
- accessibility

### Example SQL (PostgreSQL)

```sql
CREATE TABLE legal_pages (
  id VARCHAR(100) PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  last_updated VARCHAR(50) NOT NULL,
  version VARCHAR(20) DEFAULT '1.0',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Example MongoDB Schema

```javascript
const legalPageSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Custom ID like 'privacy-policy'
  title: { type: String, required: true },
  content: { type: String, required: true },
  lastUpdated: { type: String, required: true },
  version: { type: String, default: '1.0' }
}, {
  timestamps: true
});
```

---

## 5. Newsletter Subscribers

Store newsletter email subscriptions.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| email | String | Yes | Yes | - | Subscriber email |
| subscribedAt | DateTime | Yes | No | NOW() | Subscription time |
| active | Boolean | Yes | No | true | Subscription status |
| unsubscribedAt | DateTime | No | No | - | Unsubscribe time |

### Example SQL (PostgreSQL)

```sql
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  active BOOLEAN DEFAULT true,
  unsubscribed_at TIMESTAMP
);

CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_active ON newsletter_subscribers(active);
```

### Example MongoDB Schema

```javascript
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  subscribedAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  unsubscribedAt: { type: Date }
});

newsletterSchema.index({ email: 1 });
newsletterSchema.index({ active: 1 });
```

---

## 6. Demo Requests

Store institutional demo requests.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| name | String | Yes | No | - | Contact name |
| email | String | Yes | No | - | Contact email |
| institution | String | Yes | No | - | Institution name |
| role | String | No | No | - | Contact's role |
| message | Text | No | No | - | Additional message |
| status | Enum | Yes | No | 'pending' | Request status |
| createdAt | DateTime | Yes | No | NOW() | Request time |
| updatedAt | DateTime | Yes | No | NOW() | Last update time |

### Status Values

- pending
- contacted
- qualified
- rejected

### Example SQL (PostgreSQL)

```sql
CREATE TABLE demo_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  institution VARCHAR(500) NOT NULL,
  role VARCHAR(255),
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'qualified', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_demo_status ON demo_requests(status);
CREATE INDEX idx_demo_created ON demo_requests(created_at DESC);
```

### Example MongoDB Schema

```javascript
const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  institution: { type: String, required: true },
  role: { type: String },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'contacted', 'qualified', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

demoRequestSchema.index({ status: 1 });
demoRequestSchema.index({ createdAt: -1 });
```

---

## 7. Contact Messages

Store contact form submissions.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| email | String | Yes | No | - | Sender email |
| subject | String | Yes | No | - | Message subject |
| message | Text | Yes | No | - | Message content |
| status | Enum | Yes | No | 'unread' | Message status |
| createdAt | DateTime | Yes | No | NOW() | Submission time |
| updatedAt | DateTime | Yes | No | NOW() | Last update time |

### Status Values

- unread
- read
- responded

### Example SQL (PostgreSQL)

```sql
CREATE TABLE contact_messages (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'responded')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_contact_created ON contact_messages(created_at DESC);
```

### Example MongoDB Schema

```javascript
const contactMessageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['unread', 'read', 'responded'],
    default: 'unread'
  }
}, {
  timestamps: true
});

contactMessageSchema.index({ status: 1 });
contactMessageSchema.index({ createdAt: -1 });
```

---

## 8. Referrals

Store institutional referrals.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| referrerName | String | Yes | No | - | Referrer name |
| referrerEmail | String | Yes | No | - | Referrer email |
| referrerInstitution | String | Yes | No | - | Referrer institution |
| refereeName | String | Yes | No | - | Referee name |
| refereeEmail | String | Yes | No | - | Referee email |
| refereeInstitution | String | Yes | No | - | Referee institution |
| message | Text | No | No | - | Additional message |
| status | Enum | Yes | No | 'pending' | Referral status |
| createdAt | DateTime | Yes | No | NOW() | Referral time |
| updatedAt | DateTime | Yes | No | NOW() | Last update time |

### Status Values

- pending
- contacted
- qualified
- rejected

### Example SQL (PostgreSQL)

```sql
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  referrer_name VARCHAR(255) NOT NULL,
  referrer_email VARCHAR(255) NOT NULL,
  referrer_institution VARCHAR(500) NOT NULL,
  referee_name VARCHAR(255) NOT NULL,
  referee_email VARCHAR(255) NOT NULL,
  referee_institution VARCHAR(500) NOT NULL,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'qualified', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_referral_status ON referrals(status);
CREATE INDEX idx_referral_created ON referrals(created_at DESC);
```

### Example MongoDB Schema

```javascript
const referralSchema = new mongoose.Schema({
  referrerName: { type: String, required: true },
  referrerEmail: { type: String, required: true },
  referrerInstitution: { type: String, required: true },
  refereeName: { type: String, required: true },
  refereeEmail: { type: String, required: true },
  refereeInstitution: { type: String, required: true },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'contacted', 'qualified', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

referralSchema.index({ status: 1 });
referralSchema.index({ createdAt: -1 });
```

---

## 9. Trash Items

Store deleted items for 12-month retention policy.

### Fields

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| id | Integer/ObjectId | Yes | Yes | Auto | Primary key |
| type | String | Yes | No | - | Item type (blog, demo, etc.) |
| itemId | Integer | Yes | No | - | Original item ID |
| data | JSON/Text | Yes | No | - | Serialized item data |
| deletedAt | DateTime | Yes | No | NOW() | Deletion time |
| expiresAt | DateTime | Yes | No | +12 months | Expiration time |

### Item Types

- blog
- documentation
- newsletter
- demo
- contact
- referral

### Example SQL (PostgreSQL)

```sql
CREATE TABLE trash_items (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  item_id INTEGER NOT NULL,
  data JSONB NOT NULL,
  deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL
);

-- Index for cleanup queries
CREATE INDEX idx_trash_expires ON trash_items(expires_at);
CREATE INDEX idx_trash_type ON trash_items(type);

-- Auto-cleanup function (optional)
CREATE OR REPLACE FUNCTION cleanup_expired_trash()
RETURNS void AS $$
BEGIN
  DELETE FROM trash_items WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;
```

### Example MongoDB Schema

```javascript
const trashItemSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true,
    enum: ['blog', 'documentation', 'newsletter', 'demo', 'contact', 'referral']
  },
  itemId: { type: Number, required: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true },
  deletedAt: { type: Date, default: Date.now },
  expiresAt: { 
    type: Date, 
    required: true,
    default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 12 months
  }
});

trashItemSchema.index({ expiresAt: 1 });
trashItemSchema.index({ type: 1 });

// Auto-cleanup (optional)
trashItemSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
```

---

## Database Migration Script Example

### PostgreSQL

```sql
-- Create all tables
\i create_admin_users.sql
\i create_blog_posts.sql
\i create_documentation_pages.sql
\i create_legal_pages.sql
\i create_newsletter_subscribers.sql
\i create_demo_requests.sql
\i create_contact_messages.sql
\i create_referrals.sql
\i create_trash_items.sql

-- Create default admin user (password: thesisbase)
INSERT INTO admin_users (email, password, name, role) 
VALUES (
  'admin@migritech.com',
  '$2b$10$YourBcryptHashedPasswordHere',
  'Administrator',
  'admin'
);
```

### MongoDB

```javascript
// Initialize all collections
db.createCollection('admin_users');
db.createCollection('blog_posts');
db.createCollection('documentation_pages');
db.createCollection('legal_pages');
db.createCollection('newsletter_subscribers');
db.createCollection('demo_requests');
db.createCollection('contact_messages');
db.createCollection('referrals');
db.createCollection('trash_items');

// Create indexes (run all schema index commands)

// Create default admin user
db.admin_users.insertOne({
  email: 'admin@migritech.com',
  password: '$2b$10$YourBcryptHashedPasswordHere',
  name: 'Administrator',
  role: 'admin',
  createdAt: new Date(),
  active: true
});
```

---

## Maintenance Tasks

### Automatic Trash Cleanup

Set up a cron job or scheduled task to clean up expired trash items:

**PostgreSQL:**
```sql
-- Run daily
SELECT cleanup_expired_trash();
```

**MongoDB:**
```javascript
// If not using TTL index
db.trash_items.deleteMany({ expiresAt: { $lt: new Date() } });
```

### Backup Strategy

- **Daily**: Incremental backups
- **Weekly**: Full database backup
- **Monthly**: Archive old trash items before cleanup

---

## Notes

1. All timestamps should be stored in UTC
2. Email addresses should be stored in lowercase
3. Passwords must be hashed using bcrypt (cost factor 10+)
4. Consider adding soft delete functionality for all tables
5. Implement database-level constraints for data integrity
6. Set up proper indexes for frequently queried fields
7. Use transactions for multi-step operations
8. Implement connection pooling for better performance
