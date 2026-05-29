# Backend Public Folder - SEO Files

# This folder should contain SEO files served by Express backend
# The files in this folder are mirrored from the frontend/public folder

Files to include here:
- robots.txt
- sitemap.xml
- site.webmanifest
- browserconfig.xml
- favicon.ico
- All favicon PNG files

These will be automatically served by:
```javascript
app.use(express.static("public"));
```

from app.js (line 15)
