```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./MyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

// pages/MyComponent.js

export default function MyComponent() {
  return <div>Dynamic Component Loaded!</div>;
}
```