import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register } = useForm();

    return (
        <div className='flex flex-col justify-center mx-4 mt-12 sm:mx-[10vw] lg:mx-[25vw]'>
            <h3 className='text-3xl font-light md:text-4xl'>
                How can we work together? Let’s talk it over.
            </h3>
            <form
                method='POST'
                name='contact'
                data-netlify='true'
                netlify-honeypot='bot-field'
                id='contact'
            >
                <input type='hidden' name='form-name' value='contact' />
                <div className={'flex flex-col w-full items-left '}>
                    <div className={'text-black flex-grow md:w-8/12'}>
                        <p className='hidden'>
                            <label>
                                Don’t fill this out if you’re human:{' '}
                                <input name='bot-field' />
                            </label>
                        </p>

                        <label htmlFor='name' className='mr-2 text-xl'>
                            <h3 className='mt-12 text-2xl font-light'>
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
                                className={
                                    'text-xl w-full my-4 pl-2 h-12 border-b-1 shadow-md'
                                }
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
                                    required:
                                        "Please enter your organization's name.",
                                })}
                                className={
                                    'text-xl w-full my-4 pl-2 h-12 border-b-1 shadow-md'
                                }
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
                                    required:
                                        'Please enter a valid email address.',
                                })}
                                className={
                                    'text-xl w-full my-4 pl-2 h-12 border-b-1 shadow-md'
                                }
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
                                    required:
                                        'Please tell us about you project goals.',
                                })}
                                className={
                                    'w-full my-2 pl-2 border-b-1 shadow-md'
                                }
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-[#fae06a] duration-250 px-2 py-4 mt-4 w-full text-xl font-semibold text-gray-800 shadow-md transition transform md:w-1/3 hover:bg-[#94df57] hover:shadow-lg hover:scale-105'
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
