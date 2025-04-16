"use client"
import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function VerifyPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <VerifyForm />
    </div>
  )
}

function VerifyForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter()
  const [otp, setOtp] = useState("")

  const handleVerify = async () => {
    // TODO: Add verification logic here
    console.log("Verifying OTP:", otp)
  }
  return (
    <div className="mx-auto flex w-full flex-col gap-6 max-w-sm" {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Verify your email</CardTitle>
          <CardDescription>
            Enter the verification code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <InputOTP
                  value={otp}
                  onChange={setOtp}
                  maxLength={6}
                  autoComplete="off"
                  autoCapitalize="off"
                  data-dashlane-label="otp-input"
                  data-form-type="other"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  type="submit"
                  className="w-full" 
                  disabled={otp.length !== 6}
                >
                  Verify Email
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Didn&apos;t receive a code?{" "}
              <button
                type="button"
                onClick={() => {/* TODO: Add resend logic */}}
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Resend
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
