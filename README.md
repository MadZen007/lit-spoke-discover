# LIT-Spoke-Discover

A personality quiz spoke for the LoveIsTough platform that helps users discover their dating personality type through 10 brutally honest questions.

## Features

- **10 Question Quiz**: Each question has 10 dropdown options
- **Progress Tracking**: Visual progress bar showing completion
- **Navigation**: Previous/Next buttons with answer validation
- **Responsive Design**: Works on desktop and mobile devices
- **LoveIsTough Branding**: Consistent with main hub design system
- **Hub Integration**: Logo links back to main LoveIsTough site

## Project Structure

```
LIT-Spoke-Discover/
├── public/
│   ├── index.html          # Main quiz page
│   ├── styles.css          # Complete design system
│   ├── script.js           # Quiz functionality
│   └── images/
│       ├── logo.png        # LoveIsTough logo (120px height)
│       └── README.md       # Image requirements
├── package.json            # Project dependencies
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## Design System

The project uses the exact same design system as the LoveIsTough hub:

### Colors
- `--pantone-135`: #D4C4A8
- `--slate-gray`: #708090
- `--vibrant-red`: #FF0000
- `--black`: #000000
- `--white`: #FFFFFF
- `--light-gray`: #F8F8F8

### Typography
- Headers: 'Amatic SC', cursive
- Body: 'Bebas Neue', sans-serif

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Logo**:
   - Place your LoveIsTough logo as `public/images/logo.png`
   - Ensure it's 120px height with transparent background

3. **Development**:
   ```bash
   npm run dev
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## Quiz Questions

The quiz includes 10 questions covering:
- Partner expectations
- Attraction patterns
- Rejection handling
- Communication styles
- Dealbreakers
- Self-awareness
- Love beliefs
- Vulnerability fears
- Breakup methods
- Dating life reflection

## Technical Details

- **Framework**: Vanilla JavaScript with ES6 classes
- **Styling**: CSS with custom properties for design system
- **Deployment**: Vercel static hosting
- **Responsive**: Mobile-first design approach

## Future Enhancements

- Personality calculation logic
- Results page with detailed analysis
- Social sharing functionality
- User accounts and progress saving
- A/B testing for question variations

## Connection to Hub

- Visual consistency with main LoveIsTough site
- Logo navigation back to hub
- Shared design system and branding
- Seamless user experience flow

## License

MIT License - LoveIsTough Team
