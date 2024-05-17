import React from 'react'

export default function Address() {
  return (
      <div className="items-center mt-8 sm:mt-14 text-[#202142]">
          <div className="mb-2 sm:mb-6">
              <label for="email"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Address
                  </label>
              <input type="text" id="email"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="Address"  required />
          </div>


          <div className="mb-2 sm:mb-6">
              <label for="email"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                  email</label>
              <input type="email" id="email"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="your.email@mail.co" required />
          </div>

          <div className="mb-2 sm:mb-6">
              <label for="profession"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Profession</label>
              <input type="text" id="profession"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="your profession" required />
          </div>

          <div className="mb-6">
              <label for="message"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Bio</label>
              <textarea id="message" rows="4"
                  className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                  placeholder="Write your bio here..."></textarea>
          </div>

          <div className="flex justify-end">
              <button type="submit"
                  className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
          </div>

      </div>
  )
}
