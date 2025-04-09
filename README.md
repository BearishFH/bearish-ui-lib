

- Tailwind v4+ setup
- MUI + Tailwind usage
- `styles.css` import from `dist`
- Installation, usage, contribution, and more
- Designed to copy-paste directly into your repo

---

```markdown
# 🐻 Bearish UI Library

**Bearish UI** is a modular, reusable, and style-consistent React component library built using [Tailwind CSS v4+](https://tailwindcss.com/) and [Material UI](https://mui.com/). It provides essential building blocks for modern frontend development.

---

## 📦 Installation

Install the package via npm:

```bash
npm install @erenyeager13/bearish-ui-lib
```

Or with yarn:

```bash
yarn add @erenyeager13/bearish-ui-lib
```

---

## ⚡️ Usage

In your application entry (e.g., `_app.tsx`, `layout.tsx`, or `page.tsx`), make sure to import the **compiled Tailwind CSS**:

```tsx
import '@erenyeager13/bearish-ui-lib/dist/styles.css';
```

Then use the components:

```tsx
import { Button } from '@erenyeager13/bearish-ui-lib';

export default function Home() {
  return (
    <div className="p-8">
      <Button onClick={() => alert('Hello World!')}>
        Click Me
      </Button>
    </div>
  );
}
```

---

## 🧠 What’s Inside

- ✅ Tailwind CSS 4.1+ (JIT mode, zero config)
- ✅ MUI v5 for accessibility and robust UI behavior
- ✅ TypeScript support with full typings
- ✅ Precompiled global styles (`styles.css`)
- ✅ Tree-shakable components

---

## 🧱 Components

### `Button`

A wrapped version of MUI Button with Tailwind-enhanced utility styling.

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition">
  Press Me
</Button>
```

#### Props

| Prop       | Type         | Description                     |
|------------|--------------|---------------------------------|
| `children` | `ReactNode`  | Content inside the button       |
| `onClick`  | `() => void` | Optional click handler          |
| `className`| `string`     | Additional Tailwind/MUI classes |

Supports all props from MUI’s native `<Button />`.

---

## 🎨 Tailwind + CSS Integration

Bearish UI uses Tailwind CSS 4+, prebuilt and compiled into:

```ts
import '@erenyeager13/bearish-ui-lib/dist/styles.css';
```

You **do not need** to configure Tailwind in your host app unless you want to extend the design system.

---

## 📁 Project Structure

```
bearish-ui-lib/
├── dist/                 # Compiled output
│   ├── components/       # JS + .d.ts
│   └── styles.css        # Compiled Tailwind CSS
├── src/
│   └── app/components/   # Source components
├── public/               # Icons/assets
├── postcss.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠 Scripts

In your consuming app:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

If you want to build the library manually:

```bash
npm run build
# or
yarn build
```

This compiles TS into `dist/` and generates `styles.css`.

---

## ✨ Roadmap

- [x] Component packaging with MUI + Tailwind
- [x] Precompiled global styles
- [ ] Input, Modal, Select, TextArea components
- [ ] Storybook or Nextra docs
- [ ] Theme support (light/dark mode)
- [ ] Variant system (e.g., primary, ghost, destructive)

---

## 🤝 Contributing

Want to contribute?

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-component`
3. Add your changes
4. Run `npm run build` to verify output
5. Commit and open a PR 🙌

---

## 🧠 FAQ

### Does this require Tailwind in my app?

No, Tailwind is precompiled. All necessary styles are inside `dist/styles.css`.

### Can I customize styles?

Yes! Use `className` prop and Tailwind utility classes to customize components.

### Do components support server components?

Yes. All components are client-safe but can be used in hybrid SSG/SSR environments.

---

## 📝 License

MIT © 2025 [@erenyeager13](https://www.npmjs.com/~erenyeager13)

---

**Build fast. Build bold. Build Bearish. 🐻**
```

---

Let me know if you'd like a matching `package.json` example, `LICENSE`, or `CHANGELOG.md` too.
