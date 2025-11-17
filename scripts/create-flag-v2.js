/**
 * Create hero_cta flag using Optimizely Feature Experimentation API
 */

const projectId = '5659953105469440'
const token = '2:pzagrkVVbeiVKeuyhVsNeI1ECkoOOOlZGHhG_lP1pU3PC9T_L0lc'

async function createFlag() {
  console.log('🚀 Creating hero_cta feature flag...\n')

  try {
    // Try the Features endpoint instead
    console.log('Step 1: Creating feature...')

    const featurePayload = {
      name: 'Hero CTA Button Variant',
      key: 'hero_cta',
      description: 'Controls the behavior and appearance of the hero section CTA button',
      project_id: parseInt(projectId),
      variables: [
        {
          default_value: 'Explore Products',
          key: 'button_text',
          type: 'string'
        },
        {
          default_value: 'scroll',
          key: 'button_action',
          type: 'string'
        },
        {
          default_value: 'black',
          key: 'button_color',
          type: 'string'
        },
        {
          default_value: 'https://technogym.com',
          key: 'external_url',
          type: 'string'
        }
      ]
    }

    console.log('Payload:', JSON.stringify(featurePayload, null, 2))

    const response = await fetch(
      `https://api.optimizely.com/v2/features`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(featurePayload)
      }
    )

    const responseText = await response.text()
    console.log('Response status:', response.status)
    console.log('Response:', responseText)

    if (!response.ok) {
      throw new Error(`Failed to create feature: ${responseText}`)
    }

    const data = JSON.parse(responseText)
    console.log('\n✅ Feature flag created successfully!')
    console.log(`   Feature ID: ${data.id}`)
    console.log(`   Feature Key: ${data.key}`)
    console.log('\n🎉 Setup complete!')
    console.log('\nYour flag is ready to use with these variables:')
    console.log('  - button_text: "Explore Products"')
    console.log('  - button_action: "scroll"')
    console.log('  - button_color: "black"')
    console.log('  - external_url: "https://technogym.com"')

  } catch (error) {
    console.error('\n❌ Error:', error.message)
    console.log('\nTrying alternative method...\n')

    // Log the full error for debugging
    console.log('If this continues to fail, please create the flag manually:')
    console.log('1. Go to https://app.optimizely.com/p/5659953105469440/flags')
    console.log('2. Click "Create New Flag"')
    console.log('3. Use key: hero_cta')
    console.log('4. Add the 4 variables as described in QUICK_FLAG_SETUP.md')
  }
}

createFlag()
