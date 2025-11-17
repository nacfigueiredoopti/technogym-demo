# Creating the hero_cta Feature Flag

## Option 1: Automated Creation (Recommended)

I've created a script that will automatically create the flag for you.

### Step 1: Get Your Optimizely API Token

1. Go to https://app.optimizely.com/v2/profile/api
2. Click **"Generate New Token"**
3. Give it a name (e.g., "Flag Creation Script")
4. Copy the token

### Step 2: Run the Script

```bash
cd /Users/nunofigueiredo/agent/technogym-demo
OPTIMIZELY_TOKEN=your_token_here node scripts/create-optimizely-flag.js
```

Replace `your_token_here` with the token you copied.

The script will:
- ✅ Create the `hero_cta` feature flag
- ✅ Add all 4 variables (button_text, button_action, button_color, external_url)
- ✅ Set default values
- ✅ Enable the flag in production environment

---

## Option 2: Manual Creation

If you prefer to create it manually in the Optimizely UI:

### Step 1: Create the Flag

1. Go to https://app.optimizely.com
2. Navigate to your project (**5659953105469440**)
3. Click **Flags** > **Create New Flag**
4. Fill in:
   - **Key**: `hero_cta`
   - **Name**: Hero CTA Button Variant
   - **Description**: Controls the behavior and appearance of the hero section CTA button

### Step 2: Add Variables

Add these 4 variables to your flag:

| Variable Key | Type | Default Value | Description |
|-------------|------|---------------|-------------|
| `button_text` | String | `Explore Products` | Text displayed on the button |
| `button_action` | String | `scroll` | Button action: scroll, external, or modal |
| `button_color` | String | `black` | Button color: black, blue, red, or green |
| `external_url` | String | `https://technogym.com` | URL to open when action is external |

### Step 3: Create Variations (Optional)

Create test variations:

**Variation 1: Shop Now (Blue)**
```json
{
  "button_text": "Shop Now",
  "button_action": "external",
  "button_color": "blue",
  "external_url": "https://technogym.com/products"
}
```

**Variation 2: Get Quote (Green)**
```json
{
  "button_text": "Get Quote",
  "button_action": "modal",
  "button_color": "green"
}
```

**Variation 3: Limited Offer (Red)**
```json
{
  "button_text": "Limited Offer!",
  "button_action": "external",
  "button_color": "red",
  "external_url": "https://technogym.com/sale"
}
```

---

## Verification

Once the flag is created, test it:

1. Open your app at http://localhost:5174/ (dev) or your Netlify URL (production)
2. Check the browser console for Optimizely logs
3. The button should show "Explore Products" by default
4. Change the flag variables in Optimizely to see the button update

---

## Need Help?

If you need help, provide me with your Optimizely API token and I'll run the automated script for you.
