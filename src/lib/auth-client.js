import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
 baseURL: "https://pix-gen-project.vercel.app"
})
export const { signIn, signUp, useSession } = createAuthClient()