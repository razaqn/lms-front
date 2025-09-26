# LMS Frontend - Learning Management System

Sebuah aplikasi Learning Management System (LMS) modern yang dibangun dengan React, Vite, dan Tailwind CSS. Platform ini menyediakan fitur lengkap untuk pembelajaran online termasuk manajemen kursus, sistem pembayaran, dan profil pengguna.

## 🚀 Fitur Utama

- **🏠 Landing Page** - Halaman utama dengan informasi kursus populer
- **📚 Manajemen Kursus** - Browse, search, dan detail kursus
- **🛒 Shopping Cart** - Sistem keranjang belanja untuk kursus
- **💳 Payment System** - Integrasi sistem pembayaran dengan multiple payment methods
- **👤 User Profile** - Manajemen profil pengguna dan progress kursus
- **🔐 Authentication** - Sistem login dan registrasi
- **📱 Responsive Design** - Optimized untuk desktop dan mobile
- **🎓 Certificate Management** - Sistem sertifikat untuk kursus yang telah diselesaikan

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **UI Components**: Radix UI + Custom Shadcn/ui Components
- **Icons**: Lucide React + React Icons
- **Routing**: React Router DOM 7.8.2
- **Payment Icons**: React Pay Icons
- **Carousel**: Embla Carousel React

## 📁 Struktur Project

```
src/
├── assets/          # Gambar dan file statis
├── components/      # Komponen React yang dapat digunakan kembali
│   ├── cart/        # Komponen untuk shopping cart
│   ├── common/      # Komponen umum (InputWithLabel, ProfileIcon, dll)
│   ├── course/      # Komponen terkait kursus
│   ├── forms/       # Komponen form
│   ├── layout/      # Komponen layout (Navbar, Footer)
│   ├── payment/     # Komponen sistem pembayaran
│   └── ui/          # Komponen UI dasar (Button, Card, Input, dll)
├── data/            # Data statis dan mock data
├── lib/             # Utility functions
├── pages/           # Halaman-halaman aplikasi
│   ├── auth/        # Halaman authentication
│   ├── cart/        # Halaman shopping cart
│   ├── course/      # Halaman kursus
│   ├── payment/     # Halaman pembayaran
│   ├── search/      # Halaman pencarian
│   └── user/        # Halaman user (Profile, MyClass)
└── main.jsx         # Entry point aplikasi
```

## 🚀 Quick Start

### Prerequisites

Pastikan Anda telah menginstall:
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd lms-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production secara lokal
- `npm run lint` - Menjalankan ESLint untuk code quality check

## 🎨 UI Components

Project ini menggunakan sistem design yang konsisten dengan komponen-komponen berikut:

### Core UI Components
- **Button** - Tombol dengan berbagai variant
- **Card** - Container untuk konten
- **Input** - Input field dengan styling konsisten
- **Label** - Label untuk form elements
- **Progress** - Progress bar untuk tracking

### Custom Components
- **Navbar** - Navigation bar responsif
- **Footer** - Footer dengan informasi kontak
- **CourseCard** - Card untuk menampilkan informasi kursus
- **PaymentForm** - Form untuk input detail pembayaran
- **MethodPaymentCard** - Card untuk memilih metode pembayaran

## 🔧 Configuration

### Tailwind CSS
Project menggunakan Tailwind CSS v4 dengan konfigurasi custom di `tailwind.config.js`

### Path Aliases
- `@/components` → `src/components`
- `@/assets` → `src/assets`
- `@/lib` → `src/lib`

## 📱 Responsive Design

Aplikasi ini fully responsive dengan breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Development Guidelines

### Code Style
- Gunakan ESLint configuration yang sudah disediakan
- Ikuti naming convention yang konsisten
- Tulis komponen yang reusable dan modular

### Component Structure
```jsx
// Import dependencies
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// Component definition
export default function ComponentName({ prop1, prop2 }) {
  // State dan logic
  const [state, setState] = useState(initialValue)
  
  // Event handlers
  const handleClick = () => {
    // logic
  }
  
  // Render
  return (
    <div className="responsive-classes">
      {/* JSX content */}
    </div>
  )
}
```

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat issue di repository ini.

---

**Happy Learning! 🎓**
