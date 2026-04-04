# 🎯 Product Manager

A modern, full-featured **Product Management Dashboard** built with cutting-edge web technologies. Manage your products efficiently with a beautiful, responsive UI and smooth user experience.

check out here : https://product-manager-beige.vercel.app/

## ✨ Features

- ✅ **Create Products** - Add new products with name, price, and description
- ✅ **View Products** - Responsive grid layout with product cards
- ✅ **Edit Products** - Update product information via modal dialog
- ✅ **Delete Products** - Remove products with one click
- ✅ **Search Products** - Real-time search and filtering
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Notifications** - Toast notifications for all actions
- ✅ **Data Persistence** - Browser local storage for data persistence
- ✅ **Form Validation** - Client-side validation for product data
- ✅ **Fully Responsive** - Works on mobile, tablet, and desktop
- ✅ **Accessible** - WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16.2.2** | React framework with SSR & optimization |
| **React 19.2.4** | UI library with hooks & components |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **shadcn/ui** | Beautiful, accessible UI components |
| **Sonner** | Toast notifications |
| **Local Storage API** | Data persistence |

## 📋 Project Structure

```
product-manager/
├── app/
│   ├── components/
│   │   ├── ProductForm.tsx      # Form for adding/editing products
│   │   ├── ProductCard.tsx      # Individual product card
│   │   ├── ProductList.tsx      # Product grid display
│   │   └── ui/                  # shadcn UI components
│   ├── utils/
│   │   └── storage.ts           # Local storage utilities
│   ├── page.tsx                 # Main dashboard page
│   ├── layout.tsx               # App layout wrapper
│   └── globals.css              # Global styles
├── components/
│   └── ui/                      # shadcn UI primitives
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
└── tailwind.config.ts           # Tailwind configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd product-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📖 Usage

### Adding a Product
1. Click the **"+ New Product"** button in the header
2. Fill in the product details (name, price, description)
3. Click **"Add Product"**
4. See the success notification ✨

### Editing a Product
1. Click the **"Edit"** button on any product card
2. Dialog opens with pre-filled product data
3. Update the information
4. Click **"Update Product"**
5. See the success notification ✅

### Deleting a Product
1. Click the **"Delete"** button on any product card
2. Product is removed immediately
3. See the delete notification 🗑️

### Searching Products
1. Use the search input at the top
2. Results filter in real-time as you type
3. Clear the search to see all products

### Dark Mode
1. Click the **"🌙 Dark"** / **"☀️ Light"** button in the header
2. Theme toggles instantly
3. Preference updates across the app

## 🎨 UI Components

### shadcn/ui Components Used
- **Button** - Interactive buttons with variants
- **Input** - Text input fields
- **Card** - Container components
- **Dialog** - Modal for form submission
- **Sonner** - Toast notifications

All components are fully accessible and customizable via Tailwind CSS.

## 💾 Data Storage

Products are stored in **browser Local Storage** with the key `"products"`. Data persists across browser sessions.

**Storage Format:**
```json
[
  {
    "id": 1712000000000,
    "name": "Product Name",
    "price": "99.99",
    "description": "Product description"
  }
]
```

## ✅ Validation

### Form Validation
- ❌ Product name is required (cannot be empty)
- ❌ Price must be a valid number
- ✅ Description is optional

Error messages appear as toast notifications for better UX.

## 🌙 Dark Mode

Dark mode is toggled via the button in the header and uses Tailwind CSS dark mode classes. The setting is **not persisted** between sessions.

## 📱 Responsive Design

- **Mobile** (sm): Single column product grid
- **Tablet** (md): 2-column grid
- **Desktop** (lg+): 3-column grid

All components are mobile-first and fully responsive.

## 🚀 Production Build

To build for production:

```bash
npm run build
npm start
```


## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📝 Environment

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Modern Browser**: Chrome, Firefox, Safari, Edge (latest versions)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for any purpose.

## 📞 Support

For questions or issues, feel free to reach out or check the documentation above.

---
check out here : https://product-manager-beige.vercel.app/

**Build by Vijaysooriyan Kamarajah**
