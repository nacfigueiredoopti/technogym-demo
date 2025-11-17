# Optimizely Integration Guide

This project is integrated with Optimizely Feature Experimentation SDK.

## Configuration

**Project ID:** 5659953105469440
**SDK Key:** TEqVM469y9a7r2kEoByoE

## Files

- `src/optimizely/config.js` - Optimizely configuration
- `src/optimizely/hooks.js` - Custom hooks for feature flags and tracking
- `src/components/OptimizelyExample.jsx` - Example component using feature flags
- `src/main.jsx` - OptimizelyProvider setup

## Usage

### 1. Using Feature Flags

```jsx
import { useDecision } from '@optimizely/react-sdk'

function MyComponent() {
  const [decision] = useDecision('your_feature_flag_key')

  if (decision.enabled) {
    return <div>Feature is enabled!</div>
  }

  return <div>Feature is disabled</div>
}
```

### 2. Using Custom Hooks

```jsx
import { useFeatureFlag } from './optimizely/hooks'

function MyComponent() {
  const decision = useFeatureFlag('promo_banner')

  return decision.enabled ? <PromoBanner /> : null
}
```

### 3. Tracking Events

```jsx
import { useOptimizelyTrack } from './optimizely/hooks'

function MyComponent() {
  const track = useOptimizelyTrack()

  const handleClick = () => {
    track('button_clicked', { button_name: 'cta_button' })
  }

  return <button onClick={handleClick}>Click Me</button>
}
```

### 4. Getting Variables from Feature Flags

```jsx
import { useDecision } from '@optimizely/react-sdk'

function MyComponent() {
  const [decision] = useDecision('feature_with_variables')

  const buttonColor = decision.variables.button_color || 'blue'
  const buttonText = decision.variables.button_text || 'Click'

  return <button style={{ backgroundColor: buttonColor }}>{buttonText}</button>
}
```

## Setting Up in Optimizely

1. Log into your Optimizely account
2. Go to project **5659953105469440**
3. Create feature flags or experiments
4. Use the flag keys in your React components
5. Create events for tracking user interactions

## User Identification

The current setup generates a random user ID on each session. To use persistent user IDs:

```jsx
// In main.jsx, replace the random ID with:
<OptimizelyProvider
  optimizely={optimizely}
  user={{
    id: 'actual_user_id',
    attributes: {
      // Optional user attributes
      plan_type: 'premium',
      location: 'US'
    }
  }}
>
  <App />
</OptimizelyProvider>
```

## Best Practices

1. Always provide fallback values for feature flags
2. Use meaningful event names for tracking
3. Include relevant event tags for better analytics
4. Test both enabled and disabled states
5. Use feature flags for gradual rollouts

## Debugging

To see Optimizely logs in the console, you can enable logging:

```javascript
// In config.js, add to optimizelyClientOptions:
logLevel: 'debug'
```

## Resources

- [Optimizely React SDK Documentation](https://docs.developers.optimizely.com/feature-experimentation/docs/react-sdk)
- [Feature Flag Best Practices](https://docs.developers.optimizely.com/feature-experimentation/docs/best-practices)
