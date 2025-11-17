/**
 * Script to create the hero_cta feature flag in Optimizely
 *
 * Usage:
 * OPTIMIZELY_TOKEN=your_token_here node scripts/create-optimizely-flag.js
 */

const projectId = '5659953105469440'
const flagKey = 'hero_cta'

// Get token from environment variable
const token = process.env.OPTIMIZELY_TOKEN

if (!token) {
  console.error('❌ Error: OPTIMIZELY_TOKEN environment variable is required')
  console.log('\nUsage:')
  console.log('  OPTIMIZELY_TOKEN=your_token node scripts/create-optimizely-flag.js')
  console.log('\nTo get your token:')
  console.log('  1. Go to https://app.optimizely.com/v2/profile/api')
  console.log('  2. Click "Generate New Token"')
  console.log('  3. Copy the token and use it above')
  process.exit(1)
}

async function createFlag() {
  console.log('🚀 Creating hero_cta feature flag in Optimizely...\n')

  try {
    // Step 1: Create the feature flag
    console.log('Step 1: Creating feature flag...')
    const flagResponse = await fetch(
      `https://api.optimizely.com/v2/flags`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project_id: projectId,
          key: flagKey,
          name: 'Hero CTA Button Variant',
          description: 'Controls the behavior and appearance of the hero section CTA button',
          environments: {
            production: {
              rollout_rules: [{
                enabled: true,
                percentage_included: 10000, // 100%
              }]
            }
          }
        })
      }
    )

    if (!flagResponse.ok) {
      const error = await flagResponse.text()
      throw new Error(`Failed to create flag: ${error}`)
    }

    const flagData = await flagResponse.json()
    console.log('✅ Flag created successfully!')
    console.log(`   Flag ID: ${flagData.id}`)
    console.log(`   Flag Key: ${flagData.key}\n`)

    // Step 2: Add variables to the flag
    console.log('Step 2: Adding variables to the flag...')

    const variables = [
      {
        key: 'button_text',
        type: 'string',
        default_value: 'Explore Products',
        description: 'Text displayed on the button'
      },
      {
        key: 'button_action',
        type: 'string',
        default_value: 'scroll',
        description: 'Button action: scroll, external, or modal'
      },
      {
        key: 'button_color',
        type: 'string',
        default_value: 'black',
        description: 'Button color: black, blue, red, or green'
      },
      {
        key: 'external_url',
        type: 'string',
        default_value: 'https://technogym.com',
        description: 'External URL to navigate to when action is external'
      }
    ]

    for (const variable of variables) {
      const varResponse = await fetch(
        `https://api.optimizely.com/v2/flags/${flagData.id}/variables`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(variable)
        }
      )

      if (!varResponse.ok) {
        const error = await varResponse.text()
        console.log(`⚠️  Warning: Failed to create variable ${variable.key}: ${error}`)
      } else {
        console.log(`   ✅ Created variable: ${variable.key}`)
      }
    }

    console.log('\n🎉 Feature flag setup complete!')
    console.log('\n📝 Next steps:')
    console.log('   1. Go to your Optimizely dashboard')
    console.log(`   2. Navigate to the "${flagKey}" flag`)
    console.log('   3. Create variations with different variable values')
    console.log('   4. Set up targeting rules or experiments')
    console.log('\n💡 Example variations to create:')
    console.log('   - Shop Now (Blue): button_text="Shop Now", button_action="external", button_color="blue"')
    console.log('   - Get Quote (Green): button_text="Get Quote", button_action="modal", button_color="green"')
    console.log('   - Limited Offer (Red): button_text="Limited Offer", button_action="external", button_color="red"')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

createFlag()
