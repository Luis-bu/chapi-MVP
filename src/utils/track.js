import { track as trackVercelEvent } from '@vercel/analytics'

export function track(eventName, props) {
  trackVercelEvent(eventName, props)
}
