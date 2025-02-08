export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-08'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skTOL8h0STsqpDi1QL3DoHvp1rM89RiQYWJpqAR11T9z2m83FlZkcvj2SudX8h9QV1RuWRv3qeYpncp9s8SktY35vEVPmww0hlsTmDLHrZpLhlQoBJdELLLwq2ua5xtMj6R76CTa6SP4MQ76InHIkRMSy772z1AXr5J86mcXxwO0xm7xDOq6",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
