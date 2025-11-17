# Feature Flag Setup Guide

## Explore Products Button Feature Flag

The "Explore Products" button in the Hero section is controlled by an Optimizely feature flag that allows you to customize its behavior, appearance, and text.

### Feature Flag Key
`explore_products_button_variant`

## Setting Up in Optimizely

### 1. Create the Feature Flag

1. Log into your Optimizely account
2. Navigate to project **5659953105469440**
3. Go to **Flags** > **Create New Flag**
4. Enter the following details:
   - **Key**: `explore_products_button_variant`
   - **Name**: Explore Products Button Variant
   - **Description**: Controls the behavior and appearance of the hero CTA button

### 2. Add Variables

Add the following variables to your feature flag:

| Variable Key | Type | Default Value | Description |
|-------------|------|---------------|-------------|
| `button_text` | String | `Explore Products` | The text displayed on the button |
| `button_action` | String | `scroll` | Action when clicked: `scroll`, `external`, or `modal` |
| `button_color` | String | `black` | Button color: `black`, `blue`, `red`, or `green` |
| `external_url` | String | `https://technogym.com` | URL to open (when action is `external`) |

### 3. Create Variations

Create different variations to test:

#### Variation 1: Default (Control)
```json
{
  "button_text": "Explore Products",
  "button_action": "scroll",
  "button_color": "black",
  "external_url": "https://technogym.com"
}
```

#### Variation 2: External Link (Blue)
```json
{
  "button_text": "Shop Now",
  "button_action": "external",
  "button_color": "blue",
  "external_url": "https://technogym.com/products"
}
```

#### Variation 3: Contact Modal (Green)
```json
{
  "button_text": "Get Quote",
  "button_action": "modal",
  "button_color": "green",
  "external_url": ""
}
```

#### Variation 4: Urgent CTA (Red)
```json
{
  "button_text": "Limited Offer",
  "button_action": "external",
  "button_color": "red",
  "external_url": "https://technogym.com/sale"
}
```

## Button Actions Explained

### `scroll` (Default)
- Smoothly scrolls the page to the products section
- Best for keeping users on the same page
- Good for engagement and exploring more content

### `external`
- Opens the URL specified in `external_url` in a new tab
- Best for driving traffic to specific product pages or external sites
- Use when you want direct conversions

### `modal`
- Shows an alert dialog (can be customized to show a contact form modal)
- Best for lead generation
- Customize the modal in [src/components/Hero.jsx](src/components/Hero.jsx:22)

## Button Colors Available

- **black** - Default, professional look
- **blue** - Trust and reliability
- **red** - Urgency and excitement
- **green** - Success and action

## Testing Your Flag

1. **In Development:**
   - The app is running at http://localhost:5174/
   - User IDs are randomly generated on each page load
   - Check browser console for Optimizely logs

2. **Enable Logging:**
   - Update [src/optimizely/config.js](src/optimizely/config.js) to add:
   ```javascript
   export const optimizelyClientOptions = {
     datafileOptions: {
       autoUpdate: true,
       updateInterval: 300000,
     },
     logLevel: 'debug', // Add this line
   }
   ```

3. **Force a Variation:**
   - Use Optimizely's URL parameters: `?optimizely_x=explore_products_button_variant:variation_1`

## A/B Test Ideas

### Test 1: Text Variation
- **Control**: "Explore Products"
- **Variant A**: "Shop Now"
- **Variant B**: "View Collection"
- **Variant C**: "Get Started"

**Metric to track**: Click-through rate on the button

### Test 2: Action Variation
- **Control**: Scroll to products (scroll)
- **Variant**: Direct to product page (external)

**Metric to track**: Conversion rate, time on page

### Test 3: Color Psychology
- **Control**: Black button
- **Variant A**: Blue button
- **Variant B**: Green button
- **Variant C**: Red button

**Metric to track**: Click-through rate, bounce rate

## Tracking Events

To track button clicks, add event tracking:

```javascript
import { useOptimizelyTrack } from '../optimizely/hooks'

const track = useOptimizelyTrack()

const handleExploreClick = () => {
  // Track the event
  track('explore_button_clicked', {
    button_text: buttonText,
    button_action: buttonAction,
    button_color: buttonColor,
  })

  // Rest of the click handler...
}
```

## Implementation Details

The feature flag is implemented in:
- **Component**: [src/components/Hero.jsx](src/components/Hero.jsx)
- **Lines**: 4-39, 75-81

The component:
1. Uses `useDecision` hook to get the flag decision
2. Extracts variables with fallback defaults
3. Dynamically generates button classes based on color
4. Handles click events based on action type

## Troubleshooting

### Button not changing?
1. Check that the feature flag is enabled in Optimizely
2. Verify the flag key matches: `explore_products_button_variant`
3. Check browser console for errors
4. Ensure variables are spelled correctly

### External URL not working?
1. Make sure `button_action` is set to `external`
2. Verify `external_url` has a valid URL with `https://`
3. Check browser's popup blocker settings

### Colors not applying?
Supported colors: `black`, `blue`, `red`, `green`
Any other value will default to black.

## Next Steps

1. Create the feature flag in Optimizely
2. Set up your variations
3. Create an A/B test or rollout
4. Monitor metrics and results
5. Iterate based on data
