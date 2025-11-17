# Quick Setup: Create hero_cta Flag

## 5-Minute Manual Setup

The Optimizely REST API structure has changed. Here's the quickest way to create your flag:

### Step 1: Navigate to Flags
Go directly to: **https://app.optimizely.com/p/5659953105469440/flags**

### Step 2: Create the Flag
1. Click the **"Create New Flag"** button
2. Fill in the form:
   ```
   Flag Key: hero_cta
   Flag Name: Hero CTA Button Variant
   Description: Controls the hero button behavior and appearance
   ```
3. Click **"Create Flag"**

### Step 3: Add Variables

Click **"Add Variable"** for each of these:

#### Variable 1: Button Text
```
Key: button_text
Type: String
Default Value: Explore Products
Description: Text displayed on the button
```

#### Variable 2: Button Action
```
Key: button_action
Type: String
Default Value: scroll
Description: Action type - scroll, external, or modal
```

#### Variable 3: Button Color
```
Key: button_color
Type: String
Default Value: black
Description: Button color - black, blue, red, or green
```

#### Variable 4: External URL
```
Key: external_url
Type: String
Default Value: https://technogym.com
Description: URL for external navigation
```

### Step 4: Enable the Flag
1. Go to the **"Rules"** tab
2. Toggle the flag to **ON** in your environment
3. Set traffic allocation to **100%**

### Step 5: Create Test Variations (Optional)

To test different button styles, create these variations:

**Variation 1: "Shop Now - Blue"**
- button_text: `Shop Now`
- button_action: `external`
- button_color: `blue`
- external_url: `https://technogym.com/products`

**Variation 2: "Get Quote - Green"**
- button_text: `Get Quote`
- button_action: `modal`
- button_color: `green`
- external_url: *(leave default)*

**Variation 3: "Limited Offer - Red"**
- button_text: `Limited Offer!`
- button_action: `external`
- button_color: `red`
- external_url: `https://technogym.com/sale`

## Testing

Once created, your app will automatically use the flag:

**Local:** http://localhost:5174/
**Production:** Your Netlify URL

The button will update based on your flag settings!

## Button Actions Explained

- **scroll**: Scrolls smoothly to the products section on the page
- **external**: Opens the URL in `external_url` in a new tab
- **modal**: Shows an alert (can be customized to show a contact form)

## Button Colors Available

- **black**: Default professional look
- **blue**: Trust and reliability
- **red**: Urgency and excitement
- **green**: Success and action

## Need Help?

The code is already integrated and ready! Just create the flag in Optimizely UI and it will work immediately.
