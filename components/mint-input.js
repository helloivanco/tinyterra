export default function CreateInput({ setSelected }) {
  return (
    <div>
      <form action='#' method='POST'>
        <div className='shadow sm:rounded-md sm:overflow-hidden'>
          <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
            <div>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Create CW20 Token
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Create a fungible token on the Terra blockchain (CosmWasm)
              </p>
            </div>

            <div className='grid grid-cols-4 gap-6'>
              <div className='col-span-4'>
                <div className='relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='name'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Token Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder=''
                  />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='symbol'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Symbol (3 characters)
                  </label>
                  <input
                    type='text'
                    name='symbol'
                    id='symbol'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder=''
                  />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='supply'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Token Supply (max 100,000,000)
                  </label>
                  <input
                    type='text'
                    name='supply'
                    id='supply'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder=''
                  />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='creatoraddress'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Creator Address
                  </label>
                  <input
                    type='text'
                    name='creatoraddress'
                    id='creatoraddress'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder='terra140q9vp3e2gzmkxwjam2vfdl03rpjcrm57zv5ta'
                  />
                </div>
              </div>

              <div className='col-span-4  mt-4'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'>
                    <div className='w-full border-t border-gray-300' />
                  </div>
                  <div className='relative flex justify-center'>
                    <span className='px-2 bg-white text-sm text-gray-500'>
                      Distribute Tokens
                    </span>
                  </div>
                </div>

                <div className='mt-12 mb-4 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='creatoraddress'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Recipient Address
                  </label>
                  <input
                    type='text'
                    name='creatoraddress'
                    id='creatoraddress'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder='terra140q9vp3e2gzmkxwjam2vfdl03rpjcrm57zv5ta'
                  />
                </div>

                <div className='relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600'>
                  <label
                    htmlFor='amount'
                    className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900'>
                    Amount
                  </label>
                  <input
                    type='text'
                    name='amount'
                    id='amount'
                    className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
                    placeholder=''
                  />
                </div>
              </div>

              {/* <div className='col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>
                  NFTs
                </label>
                <div className='mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500'>
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
          <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
            <button
              onClick={setSelected(true)}
              type='submit'
              className='w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              Create Token
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
