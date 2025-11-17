import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link, useNavigate } from 'react-router'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { AuthApi } from '../features/api/Authapi'
import { Toaster, toast } from 'sonner'
import "./Register.css";


type RegisterFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const Register: React.FC = () => {
  // RTK Query mutation hook for registration
  const [registerUser, { isLoading }] = AuthApi.useRegisterMutation()

  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormValues>()
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmitForm: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      const response = await registerUser(data).unwrap()
      console.log('Registration successful:', response)
      // toast.success(response.message)
      
      // Navigate to login page after successful registration
      navigate('/login')
    } catch (error: any) {
      console.error('Registration failed:', error)
      toast.error(error.data?.error || 'Registration failed. Please try again.')
    }
  }

  const password = watch('password')

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" richColors />
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-4 px-4">
        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="w-full max-w-96 bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-1">
                    Join Calvidas Dining
                  </h2>
                  <p className="text-gray-500 text-base">
                    Create your account
                  </p>
                </div>
                
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleSubmitForm)}>
                  {/* First Row - First Name & Last Name */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        {...register('firstName', { 
                          required: "First name is required", 
                          minLength: { value: 2, message: "First name must be at least 2 characters" } 
                        })}
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        {...register('lastName', { 
                          required: "Last name is required", 
                          minLength: { value: 2, message: "Last name must be at least 2 characters" } 
                        })}
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      {...register('email', { 
                        required: "Email is required", 
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                      })}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      {...register('phone', { 
                        required: "Phone number is required", 
                        pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" } 
                      })}
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      {...register('password', { 
                        required: "Password is required", 
                        minLength: { value: 6, message: "Password must be at least 6 characters" } 
                      })}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      {...register('confirmPassword', { 
                        required: "Please confirm your password",
                        validate: value => value === password || "Passwords do not match"
                      })}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-transparent transition-all duration-300 outline-none focus:border-green-800 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-800 hover:bg-green-900 text-white px-4 py-4 border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 shadow-md hover:shadow-lg w-full"
                  >
                    {isLoading ? <span className="loading loading-spinner text-warning"></span> : 'Create Account'}
                  </button>

                  <div className="flex flex-col gap-2 text-center mt-4">
                    <Link to="/" className="text-green-800 no-underline flex items-center justify-center gap-1 text-sm hover:text-green-900">
                      <span role="img" aria-label="home">🏡</span> Go to HomePage
                    </Link>
                    <Link to="/login" className="text-amber-600 no-underline flex items-center justify-center gap-1 text-sm hover:text-amber-700">
                      Already have an account? Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Image Section - You can add an image here later */}
            <div className="flex-1 flex items-center justify-center bg-blue-50 p-8">
              <div className="text-center">
                <div className="w-64 h-64 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-32 h-32 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Join Our Community</h3>
                <p className="text-gray-600">Create an account to make reservations and enjoy exclusive benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register