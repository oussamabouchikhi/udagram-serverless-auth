export const apiEndpoint = process.env.AWS_API_ENDPOINT

export const authConfig = {
  domain: process.env.AUTH0_CLIENT_ID,
  clientId: process.env.AUTH0_CLIENT_ID,
  callbackUrl: 'http://localhost:3000/callback'
}