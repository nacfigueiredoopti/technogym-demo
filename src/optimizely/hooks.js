import { useDecision, useTrackEvent } from '@optimizely/react-sdk'

/**
 * Custom hook to use Optimizely feature flags
 * @param {string} flagKey - The feature flag key from Optimizely
 * @returns {object} - Decision object with enabled status and variables
 */
export const useFeatureFlag = (flagKey) => {
  const [decision] = useDecision(flagKey)
  return decision
}

/**
 * Custom hook to track events in Optimizely
 * @returns {function} - Function to track events
 */
export const useOptimizelyTrack = () => {
  const [trackEvent] = useTrackEvent()

  return (eventKey, eventTags = {}) => {
    trackEvent(eventKey, eventTags)
  }
}

/**
 * Example: Hook to check if a promotional feature is enabled
 * @returns {boolean} - Whether the promo is enabled
 */
export const usePromoEnabled = () => {
  const decision = useFeatureFlag('promo_banner')
  return decision.enabled
}
