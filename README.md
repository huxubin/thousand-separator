# thousand-separator

## Introduction
+ if you only handle positive integer：
```
handleNumber(1234567.123) // 1,234,567.123
```
+ if you need handle negative number:
```
handleSign(-1234567.123) // -1,234,567.123
```
+ if your number includes unit
```
handleUnit(1234567.123 千克) // 1,234,567.123 千克
```
+ if it's a range
```
handleRange('-1234567.256 kg ~ 12345 kg', '~') // -1,234,567.256 kg ~ 12,345 kg
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
