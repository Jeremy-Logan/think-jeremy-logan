import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register } = useForm();

  return (
    <div className='relative z-30 mx-4 flex flex-col justify-center sm:mx-[10vw] sm:mt-12 lg:mx-[25vw]'>
      <h3 className='text-3xl font-light md:text-4xl'>
        How can we work together? Let’s talk it over.
      </h3>
      <form
        method='POST'
        name='contact'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        id='contact'
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className='items-left flex w-full flex-col '>
          <div className='flex-grow text-black md:w-8/12'>
            <p className='hidden'>
              <label>
                Don’t fill this out if you’re human: <input name='bot-field' />
              </label>
            </p>

            <label htmlFor='name' className='mr-2 text-xl'>
              <h3 className='mt-12 text-2xl font-light'>What’s your name?</h3>
              <input
                type='text'
                name='contactName'
                id='contactName'
                placeholder=''
                {...register('name', {
                  required: 'Please enter your name.',
                })}
                className='border-b-1 my-4 h-12 w-full pl-2 text-xl shadow-md'
              />
            </label>
            <label htmlFor='orgName' className='mr-2 text-xl'>
              <h3 className='mt-16 text-2xl font-light'>
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
                className='border-b-1 my-4 h-12 w-full pl-2 text-xl shadow-md'
              />
            </label>

            <label htmlFor='email' className='mr-2 text-xl'>
              <h3 className='mt-16 text-2xl font-light'>
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
                className='border-b-1 my-4 h-12 w-full pl-2 text-xl shadow-md'
              />
            </label>
            <label htmlFor='question' className='mr-2 text-xl'>
              <h3 className='mt-16 text-2xl font-light'>
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
                className='border-b-1 my-2 w-full pl-2 shadow-md'
              />
            </label>

            <button
              type='submit'
              className='duration-250 mt-4 w-full transform bg-orange-500 px-2 py-4 text-xl font-semibold text-white shadow-md transition hover:scale-105 hover:bg-green-600 hover:shadow-lg md:w-1/3'
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
