# MagicRemove - Open Source Background Remover

A beautifully crafted, privacy-first background removing tool built for developers, students, and open-source contributors. This application provides a clean, modern interface to strip backgrounds from images in milliseconds.

**MagicRemove** is part of the **[GameForSmart](https://github.com/GameForSmart)** web application ecosystem, proudly developed under **PT UBIG** to promote high-quality, free, and developer-friendly open-source software.

<div align="center">
  <img src="public/screenshot-placeholder.png" alt="MagicRemove Screenshot" width="800" />
</div>

## ✨ Features

- **Modern & Clean UI**: A beautiful light theme utilizing glassmorphism, soft shadows, and clean typography.
- **Privacy-First Workflow**: Images are processed directly and not stored locally beyond the active session.
- **Powered by Remove.bg**: Connects seamlessly with the industry-leading background removal API.
- **Interactive Preview**: Compare original and transparent images before downloading using a built-in slider.
- **Developer Ready**: Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Easily customizable.
- **Free & Open Source**: MIT Licensed and completely free to use or modify.

## 🚀 Installation & Setup

You can run your own local instance of MagicRemove in just a few steps.

### Prerequisites
- Node.js 18.17.0 or later
- npm or yarn
- A free Remove.bg account

### Step 1: Clone the Repository

```bash
git clone https://github.com/GameForSmart/backgroundremover.git
cd backgroundremover
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Remove.bg API Key Configuration

The core background removal engine uses the **Remove.bg API**. You need an API key to process images.

1. Go to [Remove.bg](https://www.remove.bg/) and sign up for a free account.
2. Navigate to your Dashboard -> API Key and click **New API Key**.
3. In the root directory of this project, create a file named `.env.local` and add your key:

```env
REMOVE_BG_API_KEY=your_api_key_here
```

*(Note: The free tier allows up to 50 API calls per month.)*

### Step 4: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📖 Usage Guide

1. **Upload**: Drag and drop a supported image file (JPG or PNG) onto the dropzone.
2. **Process**: Click "Remove Background". The application securely sends your image to the Remove.bg server.
3. **Preview**: Use the interactive slider to compare the original and removed backgrounds.
4. **Download**: Click the download button to save your transparent PNG image.

For a detailed step-by-step visual tutorial and code examples, check out the `/docs` and `/get-started` sections within the running application.

## 🗂️ Project Structure Overview

- `src/app/` - Next.js App Router pages (Home, About, Docs, Get Started).
- `src/components/` - Reusable UI components (Navbar, Footer, ImageUpload, PreviewPanel, ComparisonSlider).
- `src/app/api/` - Backend API routes (e.g., proxying requests to Remove.bg).
- `src/types/` - Shared TypeScript definitions.

## 🤝 Contribution Guidelines

We welcome contributions to MagicRemove! Whether it's adding new features, improving the UI, or fixing bugs, your help is appreciated.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

Please ensure your code follows the existing clean styling and modern UI principles. Keep the interface minimal and beginner-friendly.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Built with ❤️ as part of the <b>GameForSmart</b> ecosystem, powered by <b>PT UBIG</b>. Background removal powered by <a href="https://www.remove.bg/">Remove.bg</a>.
</p>
