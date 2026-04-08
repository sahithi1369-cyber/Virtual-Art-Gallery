# Virtual Art Gallery

A React-based platform to display and manage various artworks in a virtual gallery with role-based access control.

## Features

- **Browse Artworks**: Explore diverse collections with filtering by category
- **Virtual Tours**: Experience curated exhibitions with detailed cultural history
- **Role-Based Access**: Four user roles with specific capabilities
- **Colorful & Accessible**: Modern, vibrant UI design
- **Responsive Design**: Works on all devices

## User Roles

### 👤 Visitor
- Browse and explore artworks
- Participate in virtual tours
- Make purchases
- View cultural history

### 🎨 Artist
- Upload and manage artwork listings
- Track sales
- Interact with buyers

### 🏛️ Curator
- Organize exhibitions
- Provide insights on artworks
- Manage gallery content

### ⚙️ Admin
- Manage platform content
- Control user roles
- Configure gallery settings

## Installation

1. Navigate to the project directory:
```bash
cd art-gallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Home Page**: View features and role descriptions
2. **Gallery**: Browse all artworks with category filters
3. **Virtual Tours**: Experience curated exhibitions
4. **Login**: Select a role and username to access dashboard
5. **Dashboard**: Role-specific features and management

## Project Structure

```
art-gallery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── ArtworkCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Gallery.js
│   │   ├── VirtualTours.js
│   │   ├── Login.js
│   │   └── Dashboard.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── data/
│   │   └── artworks.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- React 18
- React Context API for state management
- Inline CSS styling for colorful design
- No external UI libraries (lightweight)

## Features by Page

### Home
- Hero section with call-to-action
- Feature highlights
- Role descriptions

### Gallery
- Grid layout of artworks
- Category filtering
- Modal view with detailed information
- Purchase functionality

### Virtual Tours
- Exhibition listings
- Interactive tour navigation
- Cultural history display
- Artwork progression

### Dashboard
- Admin: Platform statistics and management
- Artist: Upload artworks and track sales
- Curator: Organize exhibitions
- Visitor: View purchases and favorites

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Clear visual hierarchy
- High contrast colors
- Responsive design

## Future Enhancements

- Backend integration
- Payment gateway
- User authentication
- Image upload functionality
- Search and advanced filtering
- Social sharing
- Reviews and ratings

## License

MIT License
