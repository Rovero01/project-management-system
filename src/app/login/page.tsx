"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ErrorMessage, Formik } from "formik";
import Link from "next/link";
import { toast, Toaster } from "sonner";

interface FormLogin {
  email?: string;
  password?: string;
}

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-5">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* top words */}
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p>Sign in to your account to continue</p>
      </div>

      <div className="bg-white flex flex-col justify-center items-center gap-3 border w-1/2 h-1/2">
        <h1 className="text-2xl text-center font-semibold">Sign In</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: FormLogin) => {
            const errors: FormLogin = {};
            if (!values.email || !values.password) {
              toast.error("Login Error", {
                description: "Please fill",
                
              });
            }

            if (!values.email) {
              errors.email = "Email required  !";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Password required !";
            }
            return errors;
          }}
          onSubmit={() => console.log("test")}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full p-5 gap-5"
            >
              <div className="flex flex-col gap-2">
                <span className="">Email Address</span>
                <input
                  className="border border-gray-200 px-3 py-2 rounded-lg"
                  placeholder="Enter your email"
                  autoComplete="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                 <ErrorMessage className="pl-5 text-xs text-red-500" name="email" component="div" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Password</span>
                <input
                  className="border border-gray-200 px-3 py-2 rounded-lg"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                 <ErrorMessage className="pl-5 text-xs text-red-500" name="password" component="div" />
              </div>

              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <div className="text-sm font-normal">Remember me</div>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                className="p-2.5 rounded-lg bg-black text-sm font-semibold text-white cursor-pointer hover:bg-gray-800"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Toaster position="top-center" richColors  />
    </div>
  );
}
