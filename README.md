# Carousel

A React-component that handles auto-play and manual switching between images.

## Use

```javascript
function App() {
  const images = [
    'https://i.picsum.photos/id/1025/200/200.jpg',
    'https://i.picsum.photos/id/237/200/200.jpg',
    'https://i.picsum.photos/id/1043/200/200.jpg',
    'https://i.picsum.photos/id/1040/200/200.jpg',
    'https://i.picsum.photos/id/1062/200/200.jpg',
    'https://i.picsum.photos/id/156/200/200.jpg',
    'https://i.picsum.photos/id/169/200/200.jpg',
    'https://i.picsum.photos/id/168/200/200.jpg',
  ]

  return (
    <Carousel
      autoPlayOn
      autoPlaySpeedInMs={2000}
      images={images}
      speedInMs={300}
    />
  )
}
```
