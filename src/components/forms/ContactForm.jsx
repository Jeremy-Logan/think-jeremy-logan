import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register } = useForm();

  return (
    <div className='mx-auto mb-36 mt-24 flex w-screen justify-center'>
      <div className='z-30 mx-auto flex w-[90vw] flex-col text-white sm:mt-12 md:w-[30vw]'>
        <h3 className='text-center text-2xl font-thin '>
          Like to get in touch?
        </h3>
        <form
          method='POST'
          name='contact'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          id='contact'
        >
          <input type='hidden' name='form-name' value='contact' />
          <div className='flex w-full flex-col items-center '>
            <div className='flex-grow text-black md:w-8/12'>
              <p className='hidden'>
                <label>
                  Don’t fill this out if you’re human:{' '}
                  <input name='bot-field' />
                </label>
              </p>

              <label htmlFor='name' className='mr-2 text-xl'>
                <h3 className='mt-4 text-xl font-light text-white'>
                  What’s your name?
                </h3>
                <input
                  type='text'
                  name='contactName'
                  id='contactName'
                  placeholder=''
                  {...register('name', {
                    required: 'Please enter your name.',
                  })}
                  className='border-b-1 my-2 h-8 w-full rounded-md pl-2 text-xl shadow-md'
                />
              </label>
              <label htmlFor='orgName' className='mr-2 text-xl'>
                <h3 className='mt-4 text-xl font-light text-white'>
                  What’s your organization’s name?
                </h3>
                <input
                  type='text'
                  name='orgName'
                  id='orgName'
                  placeholder=''
                  {...register('orgName', {
                    required: "Please enter your organization's name.",
                  })}
                  className='border-b-1 my-2 h-8 w-full rounded-md pl-2 text-xl shadow-md'
                />
              </label>

              <label htmlFor='email' className='mr-2 text-xl'>
                <h3 className='mt-4 text-xl font-light text-white'>
                  What’s your email address?
                </h3>
                <input
                  type='email'
                  name='contactEmail'
                  id='contactEmail'
                  placeholder=''
                  {...register('email', {
                    required: 'Please enter a valid email address.',
                  })}
                  className='border-b-1 my-2 h-8 w-full rounded-md pl-2 text-xl shadow-md'
                />
              </label>
              <label htmlFor='question' className='mr-2 text-xl'>
                <h3 className='mt-4 text-xl font-light text-white'>
                  Briefly tell me about your project goals.
                </h3>
                <textarea
                  type='text'
                  name='contactGoals'
                  id='contactGoals'
                  rows='3'
                  placeholder=''
                  {...register('contactGoals', {
                    required: 'Please tell us about you project goals.',
                  })}
                  className='border-b-1 my-2 w-full rounded-md pl-2 shadow-md'
                />
              </label>

              <button
                type='submit'
                className='duration-250 backdrop-saturate-75 mt-4 w-full transform rounded-lg border-[1px] border-t-blue-400/50 border-l-blue-400/50 border-b-blue-800/50 border-r-blue-800/50  bg-gradient-to-r from-blue-600/50 to-blue-600/40 px-6 py-4 text-xl font-semibold text-white shadow-lg shadow-blue-800/30 backdrop-blur-xl -backdrop-hue-rotate-15 transition hover:scale-[102%] hover:bg-cyan-600/50 hover:shadow-lg '
              >
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
