import { useDecision } from '@optimizely/react-sdk'

/**
 * Example component demonstrating Optimizely Feature Flag usage
 *
 * To use this component:
 * 1. Create a feature flag in your Optimizely project
 * 2. Replace 'example_feature_flag' with your actual flag key
 * 3. Use the enabled/variables to customize the user experience
 */
const OptimizelyExample = () => {
  // Example: Using a feature flag
  const [decision] = useDecision('example_feature_flag')

  // Decision object contains:
  // - enabled: boolean indicating if the feature is enabled
  // - variables: object with variable values from Optimizely
  // - variationKey: the variation key if in an experiment

  if (!decision.enabled) {
    return null // Feature is disabled
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700">
            Optimizely is active! This component is controlled by a feature flag.
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Variation: {decision.variationKey || 'default'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OptimizelyExample
